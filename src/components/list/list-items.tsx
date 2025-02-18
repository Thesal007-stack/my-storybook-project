type Props ={
    children?: React.ReactNode
}
const ListItems:React.FC<Props> = ({children}) => {
  return (
    <div className="py-2 px-4 border-b border-gray-200 hover:bg-gray-100 transition-colors">
        {children}
    </div>
  )
}

export  {ListItems}