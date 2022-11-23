import Builder from './Builder';

class PersonalsystemInfoBuilder extends Builder {
  public setupCPU(): void {
    this.systemInfo.CPU = '我的CPU';
  }

  public setupHardDisk(): void {
    this.systemInfo.HardDisk = '我的硬盘';
  }

  public setupMainBoard(): void {
    this.systemInfo.MainBoard = '我的主板';
  }

  public setupMemory(): void {
    this.systemInfo.Memory = '我的内存';
  }

  public setupVideoCard(): void {
    this.systemInfo.VideoCard = '我的显卡';
  }

}

export default PersonalsystemInfoBuilder;