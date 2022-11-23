import Computer from './Computer';
import SystemInfo from './SystemInfo';

/** 构造器接口 */
abstract class Builder {
  protected systemInfo: SystemInfo = <SystemInfo>{}

  public build(): Computer {
    return new Computer(this.systemInfo)
  }

  /** 将CPU安装到主板上 */
  public abstract setupCPU(): Builder;
  /** 将硬盘连接到主板上 */
  public abstract setupHardDisk(): Builder;
  /** 将主板固定在机箱中 */
  public abstract setupMainBoard(): Builder;
  /** 将内存安装到主板上 */
  public abstract setupMemory(): Builder;
  /** 将显卡安装到主板上 */
  public abstract setupVideoCard(): Builder;
}

export default Builder;