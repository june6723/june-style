import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #222222;
  border-radius: 0.2rem;
  background-color: white;
  color: #0c0c0c;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  &:hover {
    border-color: #2093e4;
  }
  &:focus {
    outline: none;
    border-color: #2093e4;
  }
`;

export default Input;
