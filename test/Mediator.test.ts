import { User, ChatRoom } from '../src/Mediator';

describe("mediator", () => {
    it("chatroom", () => {
        const room = new ChatRoom()
        const bob = new User('bob');
        const john = new User('john');

        bob.join(room);
        john.join(room);

        expect(bob.send('2022-11-27T00:00:00.000Z', 'Hi there!')).toEqual('[2022-11-27T00:00:00.000Z, bob]: Hi there!');
        expect(john.send('2022-11-27T00:01:00.000Z', 'Hey!')).toEqual('[2022-11-27T00:01:00.000Z, john]: Hey!');
    })
});
