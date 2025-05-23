export interface Contact {
  id: string;
  name: string;
  lastContactDate: Date;
  picture?: File | string;
}

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;