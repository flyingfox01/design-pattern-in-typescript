import Computer from './Computer';
import SystemInfo from './SystemInfo';

/** 构造器接口 */
abstract class Builder {
  protected systemInfo: SystemInfo = <SystemInfo>{}

  build(): Computer {
    return new Computer(this.systemInfo)
  }

  /** 将CPU安装到主板上 */
  public abstract setupCPU(): void;
  /** 将硬盘连接到主板上 */
  public abstract setupHardDisk(): void;
  /** 将主板固定在机箱中 */
  public abstract setupMainBoard(): void;
  /** 将内存安装到主板上 */
  public abstract setupMemory(): void;
  /** 将显卡安装到主板上 */
  public abstract setupVideoCard(): void;
}

export default Builder;