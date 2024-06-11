export type Answer = {
  filter_id: FilterTypes;
  value: string;
};

type RadioVariant = {
  value: string;
  text: string;
};

export type RadioQuestionType = {
  id: FilterTypes;
  text: string;
  variants: RadioVariant[];
  type: "radio";
  priority: number;
};

export type CheckboxQuestionType = {
  id: FilterTypes;
  text: string;
  type: "checkbox";
  priority: number;
};

export type Question = RadioQuestionType | CheckboxQuestionType;

export type FilterTypes =
  | "shows"
  | "emp5"
  | "temperature"
  | "uf"
  | "photo"
  | "spiritbox"
  | "sound"
  | "move"
  | "steps"
  | "walls"
  | "salt"
  | "water"
  | "incense"
  | "crucifix";

export type Filters = { [TYPE in FilterTypes]: string };

export type Ghost = {
  id: string;
  name: string;
  description: string;
  influence: string;
  bunishment: string[];
  filters: Filters;
  image: string | null;
};

export type Log = {
  id: string;
  created_at: string;
  message: string;
};
