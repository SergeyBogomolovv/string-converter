export interface Paths {
  entry: string;
  dist: string;
  src: string;
  public: string;
}
interface BaseOptions {
  paths: Paths;
}
export interface ProdOptions extends BaseOptions {
  analyze: boolean;
}

export interface DevOptions extends BaseOptions {
  port: number;
}
