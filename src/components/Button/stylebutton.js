import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 75px;
  height: 75px;
  margin: 5px;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  transition: opacity 0.3s ease; /* Adiciona uma transição suave */

  &:hover {
    opacity: 0.6;
  }
`;
