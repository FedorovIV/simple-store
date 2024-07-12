import styled from "styled-components";
import BasketItem from "./BasketItem";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import Context from "../../main";

const Container = styled.div`
  width: calc(100% - 220px);
  height: calc(100vh - 100px);
  margin-left: 200px;
  margin-top: 80px;
  padding-top: 20px;
  padding-left: 50px;
`;

const BasketPage = observer(() => {
  const { store } = useContext(Context);

  return (
    <Container>
      <h2 className="text-2xl font-bold mb-8">Your Shopping Basket</h2>

      <div className="flex flex-col space-y-4 w-100">
        {store.choosenProduct.map((value, index) => (
          <BasketItem
            bgColor={index % 2 === 0 ? "#ffffff" : "#ebebeb"}
            num={value.num}
            key={value.id}
            product={
              store.products.filter((product) => {
                return product.id === value.id;
              })[0]
            }
          />
        ))}
      </div>

      <div className="mt-8">
        <p className="text-lg font-bold">Total: ${store.totalSum}</p>{" "}
        <button className="px-4 py-2 mt-4 bg-blue-500 text-white rounded">
          Make an order
        </button>
      </div>
    </Container>
  );
});

export default BasketPage;
