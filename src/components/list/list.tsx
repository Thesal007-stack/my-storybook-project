type Props ={
    children?: React.ReactNode;
}
const List:React.FC<Props> = ({children}) => {

  return (
    <div className="p-0 m-0">
        {children}
    </div>
  )
}

export default List