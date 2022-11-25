export interface Pet {
  name: string;
  speak(): string;
};

export interface Food {
  name: string;
};

export class Cat implements Pet {
  name: string = 'cat';
  speak(): string {
    return 'miao~'
  }
}

export class Dog implements Pet {
  name: string = 'dog';
  speak(): string {
    return 'wang~'
  }
}

export class Fish implements Food {
  name: string = 'fish';
}

export class Bone implements Food {
  name: string = 'bone';
}
