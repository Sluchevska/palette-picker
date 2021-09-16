import styled from '@emotion/styled';
import { iconSize } from '../../constants';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  margin: 0;
  margin-right:5px;
  border-radius:5px;  
  padding: 16px 24px;
  border: 1px solid black;
  box-shadow: 6px 7px 8px rgb(85, 42, 85);
  border-radius: 5px;
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.colors.success};
  }
  > svg {
    margin-right: 8px;
  }
`;

export const Button = ({ icon: Icon, children }) => {
  return (
    <StyledButton>
      {Icon && <Icon size={iconSize.sm} />}
      {children}
    </StyledButton>
  );
};
