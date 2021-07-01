import styled from "styled-components";

const TopupErrorContainer = styled.div`
  display: grid;
  place-content: center;
  margin: 3rem auto;
  gap: 1.5rem;
  text-align: center;

  img {
    width: 15%;
    margin: 1.5rem auto;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 40%;
    }
  }
`;

const TopupErrorContent = styled.div`
  h2 {
    margin: 1rem auto;
    padding: 0.5rem;
    width: 100vw;
    background: var(--clr-white);
  }

  p {
    padding: 1rem;
    font-style: italic;
    color: var(--clr-primary-2);
    font-weight: var(--bold);
    font-size: medium;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 0.9rem;
    }
  }
`;

export { TopupErrorContainer, TopupErrorContent };
