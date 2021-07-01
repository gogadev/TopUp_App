import styled from "styled-components";

const OperatorContainer = styled.div`
  margin: 1rem auto;
  display: grid;
  gap: 0.5rem;
  justify-content: center;
  justify-items: center;
  text-align: center;

  h3 {
    color: var(--clr-primary-2);
    font-weight: var(--bold);
    font-style: italic;
  }
`;

const Summary = styled.div`
  margin: 1rem auto;

  h2 {
    padding: 0.3rem;
  }

  p {
    padding: 0.5rem;
  }

  span {
    color: var(--clr-primary-2);
    font-weight: var(--bold);
  }

  .arrow-icon {
    font-size: small;
    transform: translateY(0.1rem);
  }

  .globe-icon {
    color: var(--clr-primary-5);
    opacity: 0.8;
  }
`;

const OperatorList = styled.div`
  background-color: var(--clr-white);
  width: 100vw;
  padding: 1rem;

  select {
    border: 1px solid var(--clr-primary-5);
    border-radius: 4px;
    font-style: italic;
    outline: lightgrey;
    padding: 0.1rem;
    margin: 0.8rem auto;
    padding: 0.2rem 0.5rem;
  }
`;

const OperatorImage = styled.div`
  background-color: var(--clr-white);

  img {
    width: 13%;
    margin: 0.4rem auto;
    margin-left: 4rem;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 50%;
    }
  }
`;

export { OperatorContainer, Summary, OperatorList, OperatorImage };
