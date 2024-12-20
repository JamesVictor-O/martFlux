import ItemDetails from "../ItemDetails/itemDetails";
import { FaTrash } from "react-icons/fa6";
import { CartItemProps } from "../../../context/contextApi/UserContext";
import { useContext } from "react";
import { UserContext } from "../../../context/contextApi/UserContext";
import { FaMinus,FaPlus } from "react-icons/fa6";
interface itemProps{
  product:CartItemProps
}



const Items = ({product}:itemProps) => {
   const {setCartItems} = useContext(UserContext)!;

       const handleDeleteItem=(itemId:number)=>{
            setCartItems((prevCartItems:CartItemProps[])=>
              prevCartItems.filter(items => items.id !== itemId)
            )
       }
    return (
      <div className="flex flex-row items-center justify-between w-[95%] lg:w-[90%] mb-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        {/* Image and Details */}
        <div className="flex flex-row items-center gap-4">
          <div className="w-[64px] h-[64px] md:w-[140px] md:h-[140px] rounded-md overflow-hidden">
            <img
              src={product.productImage}
              alt={product.productName}
              className="w-full h-full object-cover"
            />
          </div>
          <ItemDetails product={product} />
        </div>
  
        {/* Quantity and Price */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-8">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-md p-2">
            <button className="text-gray-600 hover:text-black">
              <FaMinus />
            </button>
            <span className="px-4 font-medium text-gray-800">{product.quantityOnCart}</span>
            <button className="text-gray-600 hover:text-black">
              <FaPlus />
            </button>
          </div>
  
          {/* Price */}
          <span className="font-bold text-lg text-gray-800">
            ₦{product.price}
          </span>
  
          {/* Trash Icon */}
          <button 
          onClick={()=>handleDeleteItem(product.id)}
          className="hidden md:block text-red-500 hover:text-red-700 transition-colors duration-200">
            <FaTrash size={20} />
          </button>
        </div>
      </div>
    );
  };
  
  export default Items;