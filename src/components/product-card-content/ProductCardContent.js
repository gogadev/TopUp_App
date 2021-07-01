import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";

import { useDispatch } from "react-redux";

import { selectProduct } from "../../actions/actions";

import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import { Buttons } from "../../pages/phone-page/phone-page.styled";

import { ProductCard } from "./product-card-content.styled";

const ProductCardContent = ({ selectedProduct }) => {
  const [product, setProduct] = useState("");

  const dispatch = useDispatch();

  const showProductContent = () => {
    if (product) {
      return (
        <div className="show-product-content">
          <FiberManualRecordIcon className="dot-icon" />
          <p>
            You selected <span className="product">{product ?? "NA"}</span>.
          </p>
        </div>
      );
    }
  };

  return (
    <>
      <ProductCard onClick={() => setProduct(selectedProduct[0])}>
        <h3>Recipient gets</h3>
        <ArrowRightIcon className="right-icon" />
        <p>{selectedProduct[0]}</p>
      </ProductCard>
      <ProductCard onClick={() => setProduct(selectedProduct[1])}>
        <h3>Recipient gets</h3>
        <ArrowRightIcon className="right-icon" />
        <p>{selectedProduct[1]}</p>
      </ProductCard>
      <ProductCard onClick={() => setProduct(selectedProduct[2])}>
        <h3>Recipient gets</h3>
        <ArrowRightIcon className="right-icon" />
        <p>{selectedProduct[2]}</p>
      </ProductCard>
      <ProductCard onClick={() => setProduct(selectedProduct[3])}>
        <h3>Recipient gets</h3>
        <ArrowRightIcon className="right-icon" />
        <p>{selectedProduct[3]}</p>
      </ProductCard>
      {showProductContent()}
      <Buttons>
        <Link to="/operators">
          <Button className="go-back">Go Back</Button>
        </Link>
        <Link to="/topup">
          <Button onClick={() => dispatch(selectProduct(product))}>
            Confirm
          </Button>
        </Link>
      </Buttons>
    </>
  );
};

export default ProductCardContent;
