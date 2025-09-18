export type InputParams = {
label: string,
type: string,

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
