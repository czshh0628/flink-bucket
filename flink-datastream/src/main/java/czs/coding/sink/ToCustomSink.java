package czs.coding.sink;

import org.apache.flink.api.common.eventtime.WatermarkStrategy;
import org.apache.flink.api.common.functions.RuntimeContext;
import org.apache.flink.api.common.typeinfo.Types;
import org.apache.flink.api.connector.source.util.ratelimit.RateLimiterStrategy;
import org.apache.flink.configuration.Configuration;
import org.apache.flink.connector.datagen.source.DataGeneratorSource;
import org.apache.flink.connector.datagen.source.GeneratorFunction;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.streaming.api.functions.sink.RichSinkFunction;

/**
 * 自定义输出
 *
 * @author czs
 */
public class ToCustomSink {

    public static void main(String[] args) throws Exception {
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        env.setParallelism(1);

        DataGeneratorSource<String> dataGeneratorSource = new DataGeneratorSource<>(new GeneratorFunction<Long, String>() {
            @Override
            public String map(Long value) throws Exception {
                return "Number:" + value;
            }
        }, Long.MAX_VALUE, RateLimiterStrategy.perSecond(10), Types.STRING);

        DataStreamSource<String> source = env.fromSource(dataGeneratorSource, WatermarkStrategy.noWatermarks(), "datagenerator");

        source.addSink(new RichSinkFunction<String>() {
            @Override
            public void open(Configuration parameters) throws Exception {
                // 初始化操作
            }

            @Override
            public void invoke(String value, Context context) throws Exception {
                // 写出每条数据
            }

            @Override
            public void close() throws Exception {
                // 算子关闭操作

            }
        });

        env.execute("自定义输出");
    }
}
