import styled from 'styled-components';

const CabecalhoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  min-height: 5vh;
  background: ${({ theme }) => theme.colors.secondary.main.color};
  border-top: 2px solid ${({ theme }) => theme.colors.primary.main.color};
`;

CabecalhoWrapper.ButtonWrapper = styled.div`
  display: flex;
`;

export default CabecalhoWrapper;
