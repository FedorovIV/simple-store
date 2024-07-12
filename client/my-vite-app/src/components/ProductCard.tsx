import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import Context from "../main";
import { ProductDTO } from "../shared/models/ProductDTO";
import AddBusketBut from "./AddBusketBut";

interface ProductCardProps {
  product: ProductDTO;
  isOpen: boolean;
  numInBuscket: number;

  onClose: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isOpen,
  onClose,
  numInBuscket,
}) => {
  const { store } = useContext(Context);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    isOpen && (
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.8)",
          paddingTop: "50px",
        }}
        onClick={handleOutsideClick}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white p-5 shadow-md opacity-100 flex">
                <img
                  src={product.imgURL}
                  alt="Товар"
                  style={{ height: "500px" }}
                />
                <div className="flex flex-col ml-4 justify-between">
                  <p className="text-lg font-bold inline">{product.name}</p>
                  <p className="text-sm text-gray-600 mt-2 max-w-64">
                    {product.description}
                  </p>
                  <div>
                    <p className="text-lg font-semibold mt-4">
                      Price: {product.price}
                    </p>
                    <AddBusketBut
                      product={product}
                      numInBuscket={numInBuscket}
                      onClick={() => {
                        store.chooseProd(product.id);
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  );
};

export default ProductCard;
