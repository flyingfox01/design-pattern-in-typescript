export interface Downloader {
  login(): boolean;
  transfer(name: string): string
  downMovie(name: string): string;
}

export class ForeignWebsite implements Downloader {
  private url: string = 'https://www.foreign.wbsite';
  private source: Record<string, string> = {};

  constructor(url: string) {
    if (url = this.url) {
      console.log(`visit ${url}`);
    }

    this.source = {
      '变形金刚': '变形金刚.mp4',
      '阿凡达': '阿凡达.mp4'
    }
  }

  public login(): boolean {
    return true
  }

  public transfer(name: string): string {
    return this.source[name]
  }

  public downMovie(name: string): string {
    // 联网
    this.login()
    // 下载
    return this.transfer(name)
  }
}

export class InlandWebsite implements Downloader {
  private url: string = 'https://www.inland.wbsite';
  private foreign!: ForeignWebsite;
  private cache: Record<string, string> = {};

  constructor(url: string) {
    if (url = this.url) {
      console.log(`visit ${url}`);
    }
  }

  public login(): boolean {
    return this.foreign.login();
  }

  public transfer(name: string): string {
    return this.foreign.transfer(name);
  }

  public connect(url: string) {
    if (url === 'https://www.foreign.wbsite') {
      this.foreign = new ForeignWebsite(url);
    }
  }

  public downMovie(name: string): string {
    // 国内缓存
    if (this.cache[name]) return this.cache[name];

    // 连接外网
    this.connect('https://www.foreign.wbsite');

    if (!this.foreign) {
      throw Error('the foreign websit disconnected!')
    }

    // 登录外网
    this.login();

    // 外网下载
    const source = this.transfer(name)
    this.cache[name] = "国内镜像版本 - " + source;

    return this.cache[name];
  }
}
