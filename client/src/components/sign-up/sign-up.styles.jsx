import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

export const AddButton = styled(CustomButton)`
  width: 80%;

  @media screen and (max-width: 800px){
    min-width: unset;
    padding: 0 10px;
    margin: 0 auto;

  }
`;