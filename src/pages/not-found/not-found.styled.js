import styled from "styled-components";

const NotFoundContainer = styled.div`
  margin: 4rem auto;
  display: grid;
  gap: 2rem;
  justify-content: center;
  justify-items: center;
  text-align: center;

  img {
    width: 40%;
    margin: 2rem auto;
  }

  button {
    margin: 0.5rem;
    font-weight: var(--bold);
    letter-spacing: var(--spacing);
    border: 1px solid grey;
    border-radius: 999px;
    background: var(--clr-primary-8);
  }

  @media screen and (max-width: 768px) {
    img {
      width: 70%;
    }
  }
`;

const NotFoundText = styled.div`
  margin: 0.5rem auto;
  color: var(--clr-primary-2);

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.4rem;
    }
  }
`;

export { NotFoundContainer, NotFoundText };
