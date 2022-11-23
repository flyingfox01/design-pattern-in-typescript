import Builder from './Builder';

class OfficeComputerBuilder extends Builder {
  public setupCPU(): void {
    this.systemInfo.CPU = '公司的CPU';
  }

  public setupHardDisk(): void {
    this.systemInfo.HardDisk = '公司的硬盘';
  }

  public setupMainBoard(): void {
    this.systemInfo.MainBoard = '公司的主板';
  }

  public setupMemory(): void {
    this.systemInfo.Memory = '公司的内存';
  }

  public setupVideoCard(): void {
    this.systemInfo.VideoCard = '公司的显卡';
  }

}

export default OfficeComputerBuilder;

