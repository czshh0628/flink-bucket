package czs.coding.environment;

import org.apache.flink.client.deployment.StandaloneClusterDescriptor;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;

/**
 * 创建执行环境
 *
 * @author czs
 */
public class CreateEnvironment {

    public static void main(String[] args) throws Exception {
        // 会根据当前运行的上下文动态构建执行环境
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

        // 返回一个本地执行环境
        StreamExecutionEnvironment localEnv = StreamExecutionEnvironment.createLocalEnvironment();

        // 返回集群执行环境
        StreamExecutionEnvironment remoteEnv = StreamExecutionEnvironment.createRemoteEnvironment(
                // JobManager主机名
                "bigdata",
                // JobManager进程端口号
                8081
        );

        remoteEnv.socketTextStream("bigdata", 7777).print();

        remoteEnv.execute("执行环境");

    }
}
