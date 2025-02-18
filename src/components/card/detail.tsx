import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
type Props = {
    className?: string; // Change React.ReactNode to string
  };
  
  const Detail = ({ className }: Props) => {
    return (
    <div className="flex justify-center items-center">
      <div className={`w-40 h-40 rounded-md overflow-hidden ${className}`}>
        <img
          className="w-full h-full object-cover rounded-md" // Ensure image conforms
          src="https://i.pinimg.com/736x/53/21/76/532176832f32e7e9f7bdd0fcb3bdd98a.jpg"
          alt=""
        />
      </div>
      <div className="pt-36 font-mono font-bold">
        <h1 className="text-white text-3xl  ">Jenni Kim</h1>
        <p className="flex justify-center p-2 bg-pink-200 rounded-md text-gray-500">UI/UX Design</p>
        <div className="flex justify-center flex-row gap-5 mt-2">
            <p>{<FaFacebookSquare/>}</p>
            <p>{<FaTwitterSquare/>}</p>
            <p>{<FaLinkedin/>}</p>
        </div>
      </div>
    </div>
    );
  };
  
  export default Detail;
  