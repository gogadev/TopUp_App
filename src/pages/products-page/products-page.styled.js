import styled from "styled-components";

const ProductsContainer = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  text-align: center;

  img {
    width: 5%;
    background: transparent;
    margin: 0.9rem auto;
  }

  h2 {
    display: grid;
    padding: 0.1rem;
    border-bottom: 3px solid var(--clr-primary-5);
    transform: translateY(0.6rem);
  }

  .show-product-content {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  .show-product-content span {
    color: var(--clr-primary-2);
    font-weight: var(--bold);
  }

  .show-product-content .MuiSvgIcon-root {
    font-size: 0.9rem;
    margin-top: 0.2rem;
    color: var(--clr-primary-5) !important;
  }

  @media screen and (max-width: 768px) {
    margin: 1.5rem auto;

    h2 {
      font-size: 1.1rem;
    }

    img {
      width: 25%;
    }

    button {
      margin-top: 1.5rem;
    }

    .show-product-content .MuiSvgIcon-root {
      font-size: 0.6rem;
      margin-top: 0.3rem;
    }
  }
`;

const Summary = styled.div`
  width: 100vw;
  padding-top: 0.5rem;
  background: var(--clr-white);
  text-transform: capitalize;
  font-style: italic;
  margin-top: 1.5rem;

  span {
    color: var(--clr-primary-2);
  }

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const ProductsAmount = styled.div`
  display: grid;
  margin: 1rem auto;
  width: 70vw;
`;

export { ProductsContainer, Summary, ProductsAmount };
