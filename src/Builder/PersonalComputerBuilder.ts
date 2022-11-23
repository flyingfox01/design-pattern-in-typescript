import Builder from './Builder';

class PersonalsystemInfoBuilder extends Builder {
  public setupCPU(): Builder {
    this.systemInfo.CPU = '我的CPU';
    return this;
  }

  public setupHardDisk(): Builder {
    this.systemInfo.HardDisk = '我的硬盘';
    return this;
  }

  public setupMainBoard(): Builder {
    this.systemInfo.MainBoard = '我的主板';
    return this;
  }

  public setupMemory(): Builder {
    this.systemInfo.Memory = '我的内存';
    return this;
  }

  public setupVideoCard(): Builder {
    this.systemInfo.VideoCard = '我的显卡';
    return this;
  }

}

export default PersonalsystemInfoBuilder;