package czs.coding.source;

import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;

import java.util.Arrays;
import java.util.List;

/**
 * 从集合中读取数据
 *
 * @author czs
 */
public class FromCollectionSource {
    public static void main(String[] args) throws Exception {
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

        List<Integer> data = Arrays.asList(1, 22, 3);

        DataStreamSource<Integer> ds = env.fromCollection(data);

        ds.print();

        env.execute("从集合中读取数据");
    }
}
