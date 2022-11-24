import Shape from './Shape';

class ShapeCache {
  private cache: Map<string, Shape> = new Map();

  public put(type: string, shape: Shape): void {
    this.cache.set(type, shape)
  }

  public get(type: string): Shape | undefined {
    return this.cache.get(type);
  }

}

export default ShapeCache;