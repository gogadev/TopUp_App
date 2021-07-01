import styled from "styled-components";

const TopupSuccessContainer = styled.div`
  margin: 2rem auto;

  img {
    display: grid;
    margin: 1rem auto;
    width: 20%;
  }

  button {
    display: flex;
    margin: 2.5rem auto;
  }

  @media screen and (max-width: 768px) {
    padding-top: 0.2rem;

    img {
      width: 60%;
    }

    button {
      margin-top: 2.5rem;
    }
  }
`;

const TopupSuccessText = styled.div`
  margin: 3.5rem auto;
  display: grid;
  justify-content: center;
  gap: 0.5rem;
  text-align: center;
  padding: 0.6rem;
  background-color: var(--clr-white);

  h3 span {
    color: var(--clr-primary-6);
  }

  p {
    letter-spacing: var(--spacing);
    color: var(--clr-primary-2);
    font-weight: var(--bold);
    font-style: italic;
  }

  .arrow-right {
    transform: translateY(0.4rem);
  }

  @media screen and (max-width: 768px) {
    h3 {
      font-size: 0.8rem;
    }
  }
`;

export { TopupSuccessContainer, TopupSuccessText };
