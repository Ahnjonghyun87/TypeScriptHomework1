export interface Country {
  name: {
    common: string;
  };
  population: number;
  capital?: string;
  flags: {
    svg: string;
    png: string;
  };
}
