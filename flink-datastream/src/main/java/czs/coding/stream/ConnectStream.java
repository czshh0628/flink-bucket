package czs.coding.stream;

import org.apache.flink.streaming.api.datastream.ConnectedStreams;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.datastream.SingleOutputStreamOperator;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.streaming.api.functions.co.CoMapFunction;

/**
 * （Connect）连接合流
 * <p>
 * 数据类型可以不同
 *
 * @author czs
 */
public class ConnectStream {

    public static void main(String[] args) throws Exception {

        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        env.setParallelism(1);

        SingleOutputStreamOperator<Integer> source1 = env
                .socketTextStream("bigdata", 7777)
                .map(Integer::parseInt);

        DataStreamSource<String> source2 = env.socketTextStream("bigdata", 8888);

        /**
         * 使用 connect 合流
         * 1、一次只能连接2条流
         * 2、流的数据类型可以不一样
         * 3、连接后可以调用 map、flatmap、process来处理，但是各处理各的
         */
        ConnectedStreams<Integer, String> connect = source1.connect(source2);

        SingleOutputStreamOperator<String> result = connect.map(new CoMapFunction<Integer, String, String>() {
            @Override
            public String map1(Integer value) throws Exception {
                return "来源于数字流:" + value.toString();
            }

            @Override
            public String map2(String value) throws Exception {
                return "来源于字母流:" + value;
            }
        });

        result.print();

        env.execute();
    }
}
