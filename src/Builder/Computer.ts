import SystemInfo from './SystemInfo';

/**
 * 电脑产品
 */
class Computer {
  private systemInfo: SystemInfo = <SystemInfo>{}

  constructor(_: SystemInfo) {
    this.systemInfo = _;
  }

  public get MainBoard(): string {
    return this.systemInfo.MainBoard
  };

  public set MainBoard(_: string) {
    this.systemInfo.MainBoard = _
  };

  public get CPU(): string {
    return this.systemInfo.CPU
  };

  public set CPU(_: string) {
    this.systemInfo.CPU = _
  };

  public get Memory(): string {
    return this.systemInfo.Memory
  };

  public set Memory(_: string) {
    this.systemInfo.Memory = _
  };

  public get HardDisk(): string {
    return this.systemInfo.HardDisk
  };

  public set HardDisk(_: string) {
    this.systemInfo.HardDisk = _
  };

  public get VideoCard(): string {
    return this.systemInfo.VideoCard
  };

  public set VideoCard(_: string) {
    this.systemInfo.VideoCard = _
  };

  public getSystemInfo(): string {
    return `
      主板类型：${this.systemInfo.MainBoard}
      CPU类型：${this.systemInfo.CPU}
      内存类型：${this.systemInfo.Memory}
      硬盘类型：${this.systemInfo.HardDisk}
      显卡类型：${this.systemInfo.VideoCard}
    `
  }

}

export default Computer;
