import { EventEmitter } from '../src/Observer';

describe("observer", () => {
    const emitter = new EventEmitter();
    let ret = ''
    const onceListener = (args = '') => {
        ret += 'onceListener, args:' + args + '.';
    }

    const listener = (args = '') => {
        ret += 'listener, args:' + args + '.';
    }

    it("param", () => {
        // 参数
        emitter.once('click', onceListener);
        emitter.addListener('click', listener);
        emitter.emit('click', '参数');
        expect(ret).toEqual('onceListener, args:参数.listener, args:参数.');
    })

    it("once", () => {
        // 只执行一次
        ret = '';
        emitter.emit('click');
        expect(ret).toEqual('listener, args:.');
    })

    it("remove", () => {
        // 删除事件
        ret = '';
        emitter.removeListener('click', listener);
        emitter.emit('click');
        expect(ret).toEqual('');
    })
});
