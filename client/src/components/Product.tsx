import { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import Context from "../main";
import { observer } from "mobx-react-lite";
import { ProductDTO } from "../shared/models/ProductDTO";
import AddBusketBut from "./AddBusketBut";

interface ProductProps {
  product: ProductDTO;
  numInBuscket: number;
}

const Product: React.FC<ProductProps> = observer(
  ({ product, numInBuscket }) => {
    const { store } = useContext(Context);

    const [isOpen, setOpen] = useState(false);

    return (
      <div>
        <div className="h-80 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={product.imgURL}
            alt="Product 2"
            onClick={() => {
              setOpen(!isOpen);
            }}
          />
        </div>
        <h3 className="text-xl font-bold mt-2">{product.name}</h3>
        <p className="text-gray-500">${product.price}</p>
        <AddBusketBut
          product={product}
          numInBuscket={numInBuscket}
          onClick={() => {
            store.chooseProd(product.id);
            console.log(store.numOfProduct);
          }}
        />

        <ProductCard
          product={product}
          numInBuscket={numInBuscket}
          isOpen={isOpen}
          onClose={() => {
            setOpen(false);
          }}
        />
      </div>
    );
  }
);

export default Product;
