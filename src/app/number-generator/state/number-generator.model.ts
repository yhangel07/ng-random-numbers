export interface GeneratedNumber {
  value: BigInteger;
  generated_user?: string;
  created?: Date;
  updated?: Date;
}

export interface NumberList {
  count: number;
  next: string;
  previous: string;
  results: GeneratedNumber[];
}
