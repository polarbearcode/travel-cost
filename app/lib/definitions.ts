export type Item = {
  id: string;
  name: string;
  total: number;
  whoPaid?: string;
};

export type FormState = {
  message?: string;
  error?: string;
};
