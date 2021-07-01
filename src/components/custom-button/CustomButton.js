import React from "react";

import { CustomButtonContainer } from "./custom-button.styled";

import { Button } from "@material-ui/core";

const CustomButton = ({ children }) => {
  return (
    <CustomButtonContainer>
      <Button>{children}</Button>
    </CustomButtonContainer>
  );
};

export default CustomButton;
