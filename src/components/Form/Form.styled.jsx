import styled from '@emotion/styled';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 8px 16px;
  max-width: 100%;
  border: 0px;
  outline: 0px;
  border-radius: 4px;
  color: rgb(6, 58, 54);
  background-color: rgb(247, 255, 250);
  box-shadow: rgb(139, 167, 147) 1px 1px 3px inset,
    rgb(255, 255, 255) -1px -1px 5px inset;
  font-style: italic;
  text-shadow: rgb(255, 255, 255) 0px 1px 1px;
  font-size: 14px;
`;

export const Label = styled.label`
  font-size: 14px;
  text-align:left;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 5px;
`;

export const SubmitBtn = styled.button`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-right: auto;
  padding: 8px;
  width: 220px;

  box-shadow: 0px 7px 12px -3px rgba(0, 0, 0, 0.5);
  
  border: 0;
  border-radius: 25px;
  margin-top: 10px;
  cursor: pointer;
  font-family: inherit;
  font-size: 20px;
  font-weight: 500;

  &:hover,
  &:focus {
    outline: none;
    transition: transform 0.15s ease;
    transform: scale(0.95);
  }
`;
