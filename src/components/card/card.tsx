import { IoIosPhonePortrait } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import Detail from "./detail";
import List from "./list";
import Button from "../button/button";

const Card: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[500px] bg-pink-300 rounded-md space-y-2">
      <Detail className="absolute top-[-50px] left-[70px] rounded-lg" />
      <List
        icon={<IoIosPhonePortrait />}
        title={"Phone"}
        description={"+855 5445 567"}
      />
      <List
        icon={<CiMail />}
        title={"Email"}
        description={"Jennikim@gmail.com"}
      />
      <List
        icon={<CiLocationOn />}
        title={"Location"}
        description={"168st. Phnom Penh"}
      />
      <div className="absolute ml-24">
        <Button name="submit cv" type="success"/>
      </div>
    </div>
  );
};

export default Card;
