import ShapeCache from '../src/Prototype/ShapeCache';
import Circle from '../src/Prototype/Circle';
import Square from '../src/Prototype/Square';
import Rectangle from '../src/Prototype/Rectangle';

const cache = new ShapeCache();
const circle = new Circle({ x: 0, y: 0, radius: 10 });
const square = new Square({ x: 0, y: 0, side: 10 });
const rectangle = new Rectangle({ x: 0, y: 0, height: 10, width: 20 });

cache.put('circle', circle);
cache.put('square', square);
cache.put('rectangle', rectangle);

describe("prototype", () => {
    it("cache shape", () => {
        expect(cache.get('circle')?.radius).toEqual(circle.radius);
        expect(cache.get('square')?.side).toEqual(square.side);
        expect(cache.get('rectangle')?.width).toEqual(rectangle.width);
    })
});
