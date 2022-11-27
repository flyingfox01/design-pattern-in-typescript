export class EditorMemento {
  protected content: string;

  public constructor(content: string) {
    this.content = content;
  }

  public getContent() {
    return this.content;
  }
}

export class Editor {
  protected content = '';

  public type(words: string) {
    this.content += words;
  }

  public getContent(): string {
    return this.content;
  }

  public save(): EditorMemento {
    return new EditorMemento(this.content);
  }

  public restore(memento: EditorMemento) {
    this.content = memento.getContent();
  }
}

