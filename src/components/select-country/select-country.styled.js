import styled from "styled-components";

const SelectCountryContainer = styled.div`
  background-color: var(--clr-primary-3);
  margin-top: 3.5rem;
  border-bottom-left-radius: 60px;
  border-top-right-radius: 60px;
`;

const SelectCountryForm = styled.div`
  margin: 1rem auto;
  padding: 1rem;
  display: grid;
  gap: 0.5rem;
  border-style: 1px solid white;
  justify-content: center;
  text-align: center;

  p {
    padding-bottom: 10px;
    color: var(--clr-primary-2);
    font-weight: var(--bold);
  }

  select {
    background: transparent;
    border: none;
    border-bottom: 2px solid var(--clr-primary-5);
    outline: lightgrey;
    width: 100%;
  }

  select > option {
    text-align: left;
    font-style: italic;
  }

  button {
    margin-top: 1rem;
    font-weight: var(--bold);
    letter-spacing: var(--spacing);
    border: 1px solid grey;
    border-radius: 999px;
    background: var(--clr-primary-8);
    font-size: 0.8rem;
  }

  @media screen and (max-width: 768px) {
    button {
      font-size: 0.7rem;
    }
  }
`;

const Buttons = styled.div`
  margin-top: 0.5rem;
`;

export { SelectCountryContainer, SelectCountryForm, Buttons };
