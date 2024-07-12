import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import Context from '../main';
import { ProductDTO } from '../shared/models/ProductDTO';


interface AddBusketButProps {
    product:ProductDTO;
    numInBuscket:number;
    onClick: () => void;
}

  

const AddBusketBut:React.FC<AddBusketButProps> = observer(({product, numInBuscket, onClick}) => {

  const {store} = useContext(Context);
  return (
    <>
    {numInBuscket == 0 ? (
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md"
            onClick={() => {
              store.chooseProd(product.id);
              console.log(store.numOfProduct);
            }}
          >
            Добавить в корзину
          </button>
        ) : (
          <div className="flex items-center w-7/12   bg-gray-200 justify-between  gap-3 p-1 rounded-md">
            <p className="text-2xlw-7/12 p-1 rounded-md">X{numInBuscket}</p>
            <button
              className="bg-blue-200 text-white flex items-center rounded-md text-3xl px-4 pb-1"
              onClick={onClick}
            >
              <p>+</p>
            </button>
          </div>
        )}
    </>
  )
});

export default AddBusketBut