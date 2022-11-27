export interface Mediator {
  showMessage(user: User, time: string, message: string): string
}

// Mediator
export class ChatRoom implements Mediator {
  public showMessage(user: User, time: string, message: string): string {
    const sender = user.getName();
    return `[${new Date(time).toISOString()}, ${sender}]: ${message}`;
  }
}

export class User {
  protected name: string;
  protected room!: ChatRoom;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public join(room: Mediator): void {
    this.room = room;
  }

  public send(time: string, message: string): string {
    // 通过中介发送消息
    return this.room.showMessage(this, time, message);
  }
}
