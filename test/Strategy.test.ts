import { Context, BubbleSort, QuickSort, InsertSort } from '../src/Strategy';

describe("strategy", () => {
    it("report for cto/ceo", () => {
        const data = [1, 5, 4, 3, 2, 8];

        const bubble = new Context(new BubbleSort());
        expect(bubble.sort(data)).toEqual('sort by bubble sort');

        const insert = new Context(new InsertSort());
        expect(insert.sort(data)).toEqual('sort by insert sort');

        const quick = new Context(new QuickSort());
        expect(quick.sort(data)).toEqual('sort by quick sort');
    })
});
