import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { ProductDTO } from "../../shared/models/ProductDTO";
import { RiDeleteBin6Line } from "react-icons/ri";
import Context from "../../main";

interface BasketItemProps {
  num: number;
  bgColor: string;
  product: ProductDTO;
}

const BasketItem: React.FC<BasketItemProps> = observer(
  ({ num, bgColor, product }) => {
    const [isOpen, setOpen] = useState(false);
    const {store} = useContext(Context);
    return (
      <div
        className={`flex items-center space-x-4 p-2`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex items-center space-x-4 w-3/5 justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-40 relative">
              <img
                className="w-full h-full object-cover"
                src={product.imgURL}
                alt={product.id.toString()}
                onClick={() => setOpen(!isOpen)}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mt-2">{product.name}</h3>
              <p className="text-gray-500">${product.price}</p>
            </div>
          </div>
          <div className="flex gap-12 items-center">
            <p className="text-3xl">X {num}</p>
            <button className=" bg-red-500 rounded-sm p-2" onClick={()=>{store.deleteProd(product.id)}}>
              <RiDeleteBin6Line size={30} color="#ffffff" />
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default BasketItem;
