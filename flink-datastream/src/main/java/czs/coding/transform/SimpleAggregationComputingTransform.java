package czs.coding.transform;

import czs.coding.entity.WaterSensor;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;

/**
 * 简单聚合计算转换
 * <p>
 * sum()：在输入流上，对指定的字段做叠加求和的操作。
 * min()：在输入流上，对指定的字段求最小值。
 * max()：在输入流上，对指定的字段求最大值。
 * minBy()：与min()类似，在输入流上针对指定字段求最小值。不同的是，min()只计算指定字段的最小值，其他字段会保留最初第一个数据的值；而minBy()则会返回包含字段最小值的整条数据。
 * maxBy()：与max()类似，在输入流上针对指定字段求最大值。两者区别与min()/minBy()完全一致。
 *
 * @author czs
 */
public class SimpleAggregationComputingTransform {

    public static void main(String[] args) throws Exception {

        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

        DataStreamSource<WaterSensor> stream = env.fromElements(
                new WaterSensor("sensor_1", 2L, 2),
                new WaterSensor("sensor_1", 1L, 1),
                new WaterSensor("sensor_2", 2L, 2),
                new WaterSensor("sensor_3", 3L, 3)
        );

        // 指定字段名称
        stream.keyBy(e -> e.id).max("vc").print();

        env.execute();
    }
}
