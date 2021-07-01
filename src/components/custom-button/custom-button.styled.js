import styled from "styled-components";

const CustomButtonContainer = styled.div`
  button {
    margin-right: 0.5rem;
    font-weight: var(--bold);
    letter-spacing: var(--spacing);
    border: 1px solid grey;
    border-radius: 999px;
    background: var(--clr-primary-8);
  }

  &:hover {
    button {
      color: var(clr-primary-2);
      transition: all 0.5s ease;
    }
  }
`;

export { CustomButtonContainer };
