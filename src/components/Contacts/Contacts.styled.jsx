import styled from '@emotion/styled';

export const List = styled.ul`
  font-size: 14px;
  color: #212121;
  list-style: disc;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
  font-style: italic;
`;
export const Button = styled.button`
  padding: 8px;
  width: 70px;
  margin-left: 20px;
  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  
  border: 0;
  border-radius: 25px;
  // margin-top: 10px;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;

  &:hover,
  &:focus {
    outline: none;
    transition: transform 0.15s ease;
    transform: scale(0.95);
  }
`;