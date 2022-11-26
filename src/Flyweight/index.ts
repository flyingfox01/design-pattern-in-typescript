/**
 * 端口类Port
 */
export class Port {
  private _port: string;

  constructor(_: string) {
    this._port = _;
  }

  public set port(_: string) {
    this._port = _;
  }

  public get port(): string {
    return this._port;
  }
}

/**
 * 抽象设备，依赖外部状态
 */
export abstract class NetworkDevice {
  type!: string;
  id: string;
  port!: Port;

  constructor(_: string) {
    this.id = _;
  }

  public getId(): string {
    return this.id;
  }

  // 设置端口
  public assignPort(_: Port) {
    this.port = _
  }
}

/**
 * 交换机
 */
class Switch extends NetworkDevice {
  type: string = 'Switch'
}

/**
 * 集线器
 */
class Hub extends NetworkDevice {
  type: string = 'Hub'
}

/**
 * 享元工厂
 */
export class DeviceFactory {
  private devices: Record<string, NetworkDevice> = {};
  private _terminalNum: number = 0;

  constructor() {
    this.devices = {
      Cisco: new Switch("Cisco-WS-C2950-24"),
      TP: new Hub("TP-LINK-HF8M")
    }
  }

  public getDevice(type: string): NetworkDevice {
    const device = this.devices[type];

    if (device) {
      this._terminalNum++;
    }

    return device
  }

  public get deviceSize() {
    return Object.keys(this.devices).length;
  }

  public get terminalNum(): number {
    return this._terminalNum;
  }
}

