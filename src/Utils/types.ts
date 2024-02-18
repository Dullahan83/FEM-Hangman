export type RuleType = {
  id: string;
  title: string;
  content: string;
};

export type Hangword = {
  name: string;
  selected: boolean;
};

export type Category = {
  [category: string]: Hangword[];
};

export type DataType = {
  categories: Category;
};
