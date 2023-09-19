package czs.coding.quickstart;

import org.apache.flink.api.common.functions.FlatMapFunction;
import org.apache.flink.api.java.tuple.Tuple2;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.datastream.SingleOutputStreamOperator;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.util.Collector;

/**
 * 统计一段文字中，每个单词出现的频次
 *
 * @author czs
 */
public class WordCount {
    public static void main(String[] args) throws Exception {
        // 1. 创建流式执行环境
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

        // 2. 侦听数据
        DataStreamSource<String> source = env.socketTextStream("bigdata", 7777);

        // 3. 转换、分组、求和、统计结果
        SingleOutputStreamOperator<Tuple2<String, Long>> transform = source.flatMap(new FlatMapFunction<String, Tuple2<String, Long>>() {
            @Override
            public void flatMap(String s, Collector<Tuple2<String, Long>> collector) throws Exception {
                String[] words = s.split(" ");
                for (String word : words) {
                    collector.collect(Tuple2.of(word, 1L));
                }
            }
        }).keyBy(data -> data.f0).sum(1);

        // 4. 打印数据
        transform.print();

        // 5. 执行
        env.execute("WordCount");
    }
}