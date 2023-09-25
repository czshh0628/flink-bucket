package czs.coding.transform;

import czs.coding.entity.WaterSensor;
import org.apache.flink.api.common.functions.MapFunction;
import org.apache.flink.api.common.functions.ReduceFunction;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;

/**
 * 规约聚合转换
 *
 * @author czs
 */
public class ReduceAggregationTransform {

    public static void main(String[] args) throws Exception {
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

        env.socketTextStream("bigdata", 7777).map(new WaterSensorMapFunction()).keyBy(WaterSensor::getId).reduce(new ReduceFunction<WaterSensor>() {
            @Override
            public WaterSensor reduce(WaterSensor value1, WaterSensor value2) throws Exception {
                System.out.println("规约聚合转换");

                int maxVc = Math.max(value1.getVc(), value2.getVc());
                //实现max(vc)的效果  取最大值，其他字段以当前组的第一个为主
                //value1.setVc(maxVc);
                //实现maxBy(vc)的效果  取当前最大值的所有字段
                if (value1.getVc() > value2.getVc()) {
                    value1.setVc(maxVc);
                    return value1;
                } else {
                    value2.setVc(maxVc);
                    return value2;
                }
            }
        }).print();

        env.execute("规约聚合转换");
    }

    public static class WaterSensorMapFunction implements MapFunction<String, WaterSensor> {
        @Override
        public WaterSensor map(String value) throws Exception {
            // sensor_1,1,1
            String[] datas = value.split(",");
            return new WaterSensor(datas[0], Long.valueOf(datas[1]), Integer.valueOf(datas[2]));
        }
    }
}
