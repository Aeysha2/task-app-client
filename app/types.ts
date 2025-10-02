export type InputParams = {
label: string,
type: string,
  onChange: (value: string) => void;
}

export type ButtonParams = {
  title: string;
  onclick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type AuthInfoParams ={
  answer: string;
  action : string;
  url : string;
}

export type TaskParams ={
  id:string
  title: string;
  description : string;
  status : string;
}

export type UserLogged ={
 id:string
 firstname:string
 lastname:string
 email:string
}