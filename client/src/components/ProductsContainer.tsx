import styled from "styled-components";
import Product from "./Product";
import { useContext, useEffect } from "react";
import Context from "../main";
import { observer } from "mobx-react-lite";

const Container = styled.div`
  width: calc(100% - 200px);
  margin-left: 220px;
  margin-top: 80px;
  padding-top: 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const ProductsContainer = observer(() => {
  const { store } = useContext(Context);
  useEffect(() => {
    store.getAllProduct();
  }, []);
  return (
    <Container>
      {store.products.map((value) => (
        <Product
          key={value.id}
          product={value}
          numInBuscket={store.choosenProduct.find(
            (product) => product.id === value.id
          )?.num || 0}
        />
      ))}
    </Container>
  );
});

export default ProductsContainer;
