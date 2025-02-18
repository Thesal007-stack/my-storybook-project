import { MouseEventHandler } from "react";

type Props = {
  type?: "idle" | "success" | "error";
  name?: string;
  backgroundColor?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>
};
const Button: React.FC<Props> = ({ type, name, onClick, backgroundColor }) => {
  return (
    <button
    style={{backgroundColor}}
    onClick={onClick}
    className={`w-20 h-10 font-mono text-sm rounded-lg shadow-md ${type === 'idle'?'bg-yellow-500': type ==='success'? 'bg-pink-500 text-white ' : 'bg-red-500'}`}
    >
        {name}
    </button>
  );
};

export default Button;
