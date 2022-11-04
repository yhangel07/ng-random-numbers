export interface GeneratedNumber {
  value: number;
  generator_user?: string;
  created?: Date;
  updated?: Date;
}

export interface NumberList {
  count: number;
  next: string;
  previous: string;
  results: GeneratedNumber[];
}
