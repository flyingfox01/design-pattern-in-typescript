class Singleton {
  private static instance: Singleton;

  private constructor(){}

  public static getInstance(){
    if(!Singleton.instance) {
      Singleton.instance = new Singleton()
    }

    return Singleton.instance
  }
}

export default Singleton;