type Props = {
  type?: "idle" | "success" | "error";
  name?: string;
};
const Button: React.FC<Props> = ({ type, name }) => {
  return (
    <button
    className={`w-20 h-10 font-mono text-sm rounded-lg shadow-md ${type === 'idle'?'bg-yellow-500': type ==='success'? 'bg-green-500' : 'bg-red-500'}`}
    >
        {name}
    </button>
  );
};

export default Button;
