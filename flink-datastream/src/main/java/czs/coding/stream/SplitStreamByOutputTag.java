package czs.coding.stream;

import org.apache.flink.api.common.eventtime.WatermarkStrategy;
import org.apache.flink.api.common.typeinfo.Types;
import org.apache.flink.api.connector.source.util.ratelimit.RateLimiterStrategy;
import org.apache.flink.connector.datagen.source.DataGeneratorSource;
import org.apache.flink.connector.datagen.source.GeneratorFunction;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.datastream.SideOutputDataStream;
import org.apache.flink.streaming.api.datastream.SingleOutputStreamOperator;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.streaming.api.functions.ProcessFunction;
import org.apache.flink.util.Collector;
import org.apache.flink.util.OutputTag;

/**
 * 使用侧输出流实现分流
 *
 * @author czs
 */
public class SplitStreamByOutputTag {

    public static void main(String[] args) throws Exception {
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

        DataGeneratorSource<Long> dataGeneratorSource = new DataGeneratorSource<>(new GeneratorFunction<Long, Long>() {
            @Override
            public Long map(Long value) throws Exception {
                return value;
            }
        }, Long.MAX_VALUE, RateLimiterStrategy.perSecond(10), Types.LONG);

        DataStreamSource<Long> ds = env.fromSource(dataGeneratorSource, WatermarkStrategy.noWatermarks(), "dataGenerator");

        // s1写出奇数
        OutputTag<Long> s1 = new OutputTag<Long>("s1") {
        };

        // s2写出偶数
        OutputTag<Long> s2 = new OutputTag<Long>("s2") {
        };

        //返回的都是主流
        SingleOutputStreamOperator<Long> ds1 = ds.process(new ProcessFunction<Long, Long>() {
            @Override
            public void processElement(Long aLong, ProcessFunction<Long, Long>.Context context, Collector<Long> collector) throws Exception {
                if (aLong % 2 == 0) {
                    // 偶数
                    context.output(s2, aLong);
                }
                {
                    // 奇数
                    context.output(s1, aLong);
                }

                if (aLong % 5 == 0) {
                    // 5的倍数主流输出
                    collector.collect(aLong);
                }
            }
        });

        ds1.print("主流，非s1,s2>>");

        SideOutputDataStream<Long> s1Ds = ds1.getSideOutput(s1);
        SideOutputDataStream<Long> s2Ds = ds1.getSideOutput(s2);

        s1Ds.printToErr("s1>>");
        s2Ds.printToErr("s2>>");

        env.execute();

    }
}
