import styled from "styled-components";

const ProductCard = styled.div`
  display: flex;
  place-content: center;
  margin: 0.4rem auto;
  border: 1px solid grey;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 90%;
  padding: 0 0.5rem;
  background: var(--clr-white);
  margin-left: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;

  h3 {
    margin-top: 0.5rem;
  }

  p {
    color: var(--clr-primary-2);
    font-weight: var(--bold);
    text-transform: uppercase;
    margin-top: 0.5rem;
  }

  .right-icon {
    margin-top: 0.4rem;
  }

  &:hover {
    border: 3px solid lightgrey;
    opacity: 0.9;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @media screen and (max-width: 768px) {
    h3,
    p {
      font-size: 0.8rem;
    }

    .right-icon {
      margin-top: 0.25rem;
    }
  }
`;

export { ProductCard };
