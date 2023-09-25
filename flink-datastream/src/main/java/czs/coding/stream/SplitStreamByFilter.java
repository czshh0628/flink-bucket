package czs.coding.stream;

import org.apache.flink.api.common.eventtime.WatermarkStrategy;
import org.apache.flink.api.common.typeinfo.Types;
import org.apache.flink.api.connector.source.util.ratelimit.RateLimiterStrategy;
import org.apache.flink.connector.datagen.source.DataGeneratorSource;
import org.apache.flink.connector.datagen.source.GeneratorFunction;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.datastream.SingleOutputStreamOperator;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;

/**
 * 使用过滤实现分流
 *
 * @author czs
 */
public class SplitStreamByFilter {

    public static void main(String[] args) throws Exception {

        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

        DataGeneratorSource<Long> dataGeneratorSource = new DataGeneratorSource<>(new GeneratorFunction<Long, Long>() {
            @Override
            public Long map(Long value) throws Exception {
                return value;
            }
        }, Long.MAX_VALUE, RateLimiterStrategy.perSecond(1), Types.LONG);

        DataStreamSource<Long> dataGenerator = env.fromSource(dataGeneratorSource, WatermarkStrategy.noWatermarks(), "dataGenerator");


        //将ds 分为两个流 ，一个是奇数流，一个是偶数流

        //使用filter 过滤两次
        SingleOutputStreamOperator<Long> ds1 = dataGenerator.filter(x -> x % 2 == 0);
        SingleOutputStreamOperator<Long> ds2 = dataGenerator.filter(x -> x % 2 == 1);

        ds1.print("偶数");

        ds2.print("奇数");

        env.execute();
    }
}
