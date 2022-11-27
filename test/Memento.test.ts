import { Editor, EditorMemento } from '../src/Memento';

describe("mediator", () => {
    it("chatroom", () => {
        const editor = new Editor();

        // Type some stuff
        editor.type('I have a dream. ');
        // Save the state to restore
        const saved: EditorMemento = editor.save();
        // Type some more
        editor.type('We all a family!');
        // Output: Content before Saving
        expect(editor.getContent()).toEqual('I have a dream. We all a family!');

        // Restoring to last saved state
        editor.restore(saved);
        expect(editor.getContent()).toEqual('I have a dream. ');
    })
});
