package czs.coding.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 水位传感器
 * <p>
 * id	String	水位传感器类型
 * ts	Long	传感器记录时间戳
 * vc	Integer	水位记录
 *
 * @author czs
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class WaterSensor {

    public String id;
    public Long ts;
    public Integer vc;
}
