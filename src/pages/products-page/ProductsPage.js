import React from "react";

import ProductCardContent from "../../components/product-card-content/ProductCardContent";

import uuid from "react-uuid";

import { useSelector } from "react-redux";

import productsImg from "../../assets/phone.png";

import Slide from "react-reveal/Slide";

import {
  ProductsContainer,
  Summary,
  ProductsAmount,
} from "./products-page.styled";

const ProductsPage = () => {
  const state = useSelector((state) => state);

  const operatorName = state.operator;

  const selectedOperator = state.operators.find(
    (operator) => operatorName === operator.name
  );

  const arrayProducts = state.products
    .filter((product) => product.id === selectedOperator.id)
    .map((product) => product.products);

  const productCard = arrayProducts.map((value) => (
    <ProductCardContent key={uuid()} selectedProduct={value} />
  ));

  return (
    <ProductsContainer>
      <Summary>
        <h3>
          You chose <span>{state?.operator ?? "NA"}</span> operator.
        </h3>
      </Summary>
      <img src={productsImg} alt="Credit Card" />
      <h2>Choose an amount to continue</h2>
      <Slide bottom>
        <ProductsAmount>{productCard}</ProductsAmount>
      </Slide>
    </ProductsContainer>
  );
};

export default ProductsPage;
