package czs.coding.partition;

import org.apache.flink.api.common.eventtime.WatermarkStrategy;
import org.apache.flink.api.common.functions.Partitioner;
import org.apache.flink.api.common.typeinfo.Types;
import org.apache.flink.api.connector.source.util.ratelimit.RateLimiterStrategy;
import org.apache.flink.connector.datagen.source.DataGeneratorSource;
import org.apache.flink.connector.datagen.source.GeneratorFunction;
import org.apache.flink.streaming.api.datastream.DataStream;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;

/**
 * 自定义分区
 *
 * @author czs
 */
public class CustomPartition {

    public static void main(String[] args) throws Exception {
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

        env.setParallelism(2);

        DataStreamSource<String> socket = env.socketTextStream("bigdata", 7777);

        DataStream<String> ds = socket.partitionCustom(new MyPartitioner(), value -> value);

        ds.print();

        env.execute("自定义分区");
    }

    public static class MyPartitioner implements Partitioner<String> {
        @Override
        public int partition(String key, int numPartitions) {
            return Integer.parseInt(key) % numPartitions;
        }
    }
}
