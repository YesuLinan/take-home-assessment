export interface Contact {
  id: string;
  name: string;
  dateOfBirth: Date;
  picture?: File | string;
}

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;