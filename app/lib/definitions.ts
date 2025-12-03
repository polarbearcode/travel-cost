export type Item = {
  id: number;
  name: string;
  total: number;
  whoPaid?: string;
};

export type FormState = {
  message?: string;
  error?: string;
};
