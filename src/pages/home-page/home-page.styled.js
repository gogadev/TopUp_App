import styled from "styled-components";

const HomeContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
  background: var(--clr-white);

  .phone-icon {
    transform: translateY(1.4rem);
  }
`;

const HomeContent = styled.div`
  padding: 0.5rem;
  color: var(--clr-primary-2);
  transform: translateY(0.5rem);

  p {
    color: var(--clr-primary-2);
    font-style: italic;
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    h1 {
      margin-top: 1rem;
      font-size: 1.2rem;
      width: 100%;
    }
    p {
      display: none;
    }
  }
`;

const HomeImageWrapper = styled.div`
  img {
    width: 15%;
    margin: 1rem auto;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 45%;
    }
  }
`;

export { HomeContainer, HomeContent, HomeImageWrapper };
