import Builder from "./Builder";
import Computer from "./Computer";

/**
 * 电脑工厂
 */
class ComputerFactory {
  /**
   * 封装组装过程
   * @param builder 
   */
  public buildComputer(builder: Builder): Computer {
    return builder
      .setupMainBoard()
      .setupCPU()
      .setupHardDisk()
      .setupMemory()
      .setupVideoCard()
      .build()
  }

}

export default ComputerFactory;