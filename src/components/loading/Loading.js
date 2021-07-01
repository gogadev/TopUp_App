import React from "react";

import loadingGif from "../../assets/spinner.gif";

import { LoadingContainer, LoadingContent } from "./loading.styled";

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingContent>
        <img src={loadingGif} alt="Loading" />
      </LoadingContent>
    </LoadingContainer>
  );
};

export default Loading;
