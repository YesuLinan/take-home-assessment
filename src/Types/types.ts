export interface Contact {
  id: string;
  name: string;
  lastContactDate: Date;
  picture: string;
}

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;