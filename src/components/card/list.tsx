interface IList {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const List: React.FC<IList> = ({ icon, title, description }) => {
  return (
    <>
      <div className="flex ml-5 flex-row rounded-lg w-[250px] overflow-auto bg-pink-200 font-mono text-sm space-x-5 border-b-[1px] shrink-0 shadow-md border-gray-200">
        <div className="flex justify-center items-center w-10 h-10 bg-white rounded-lg">
          {icon}
        </div>
        <div className="flex flex-col">
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default List;
