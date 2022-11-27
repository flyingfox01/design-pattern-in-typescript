import { Logistics, OrderState, TransportState, ProductOutState } from '../src/State';

describe("state", () => {
    it("change logistics state", () => {
        const ctx = new Logistics();
        const order = new OrderState();
        const productOut = new ProductOutState();
        const transport = new TransportState();

        ctx.updateState(order);
        expect(ctx.doAction()).toEqual('商家已经接单，正在处理中...');

        ctx.updateState(productOut);
        expect(ctx.doAction()).toEqual('商品已经出库...');

        ctx.updateState(transport);
        expect(ctx.doAction()).toEqual('商品正在运输中...');
    })
});
