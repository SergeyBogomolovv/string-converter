export interface Paths {
  entry: string;
  dist: string;
  src: string;
  public: string;
}

export interface ProdOptions {
  paths: Paths;
}

export interface DevOptions extends ProdOptions {
  port: number;
}
