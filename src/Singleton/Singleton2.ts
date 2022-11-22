 class Singleton {
  private static instance: Singleton;

  constructor(){
    if (Singleton.instance === null) {
      Singleton.instance = this;
    }
    return Singleton.instance
  }

  public static getInstance(){
    return new Singleton()
  }
}

export default Singleton;