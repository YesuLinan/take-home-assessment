export interface Contact {
  id: string;
  name: string;
  dateOfBirth: Date;
  picture?: File;
}

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;