import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-height: 95vh;
  background: ${({ theme }) => theme.colors.background.main.color};
`;
