import Builder from './Builder';

class OfficeComputerBuilder extends Builder {
  public setupCPU(): Builder {
    this.systemInfo.CPU = '公司的CPU';
    return this;
  }

  public setupHardDisk(): Builder {
    this.systemInfo.HardDisk = '公司的硬盘';
    return this;
  }

  public setupMainBoard(): Builder {
    this.systemInfo.MainBoard = '公司的主板';
    return this;
  }

  public setupMemory(): Builder {
    this.systemInfo.Memory = '公司的内存';
    return this;
  }

  public setupVideoCard(): Builder {
    this.systemInfo.VideoCard = '公司的显卡';
    return this;
  }

}

export default OfficeComputerBuilder;

