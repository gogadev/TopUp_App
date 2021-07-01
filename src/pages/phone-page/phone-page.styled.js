import styled from "styled-components";

const PhoneContainer = styled.div`
  width: 80vw;
  margin: 3rem auto;
  display: grid;
  justify-content: center;
  justify-items: center;
  text-align: center;
  gap: 1.5rem;
`;

const PhoneContent = styled.div`
  h2 {
    color: var(--clr-primary-2);
  }

  h4 {
    margin: 1.5rem auto;
  }

  span {
    text-transform: uppercase;
  }

  p {
    width: 100vw;
    font-style: italic;
    padding: 1rem;
    background: var(--clr-white);
  }

  img {
    width: 8%;
    margin: -1.1rem auto;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 16%;
      margin: -1rem auto;
    }
  }
`;

const PhoneForm = styled.div`
  padding: 0.5rem;

  form {
    display: grid;
    justify-items: center;
    gap: 1.2rem;
  }

  label {
    color: var(--clr-primary-2);
    font-weight: var(--bold);
    margin-bottom: 0.2rem;
  }

  input {
    padding: 0.2rem;
    border: none;
    background: whitesmoke;
    outline: lightgrey;
    border-radius: 999px;
    width: 100%;
  }

  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    text-align: center;
    font-style: italic;
    color: var(--clr-primary-5);
  }

  .phone-icon {
    color: var(--clr-primary-5);
    opacity: 0.8;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 1rem auto;
    margin-left: 0.5rem;
    font-weight: var(--bold);
    letter-spacing: var(--spacing);
    border: 1px solid grey;
    border-radius: 999px;
    background: var(--clr-primary-8);
  }

  .go-back {
    background: none;
  }

  &:hover {
    button {
      color: var(--clr-primary-2);
      transition: all 0.5s ease;
    }
  }

  @media screen and (max-width: 768px) {
    button {
      font-size: 0.8rem;
    }
  }
`;

export { PhoneContainer, PhoneContent, PhoneForm, Buttons };
