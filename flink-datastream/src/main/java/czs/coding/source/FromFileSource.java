package czs.coding.source;

import org.apache.flink.api.common.eventtime.WatermarkStrategy;
import org.apache.flink.connector.file.src.FileSource;
import org.apache.flink.connector.file.src.reader.TextLineInputFormat;
import org.apache.flink.core.fs.Path;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;


/**
 * 从文件读取数据
 * <p>
 * 需要依赖：flink-connector-files
 * <p>
 * new Path 可以是本地路径也可以是hdfs://路径
 *
 * @author czs
 */
public class FromFileSource {

    public static void main(String[] args) throws Exception {
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

        FileSource<String> fileSource = FileSource.forRecordStreamFormat(new TextLineInputFormat(), new Path("input/word.txt")).build();

        env.fromSource(fileSource, WatermarkStrategy.noWatermarks(), "file").print();

        env.execute("从文件读取数据");

    }
}
