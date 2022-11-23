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
    builder.setupMainBoard();
    builder.setupCPU();
    builder.setupHardDisk();
    builder.setupMemory();
    builder.setupVideoCard();
    return builder.build()
  }

}

export default ComputerFactory;