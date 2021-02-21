import styled from 'styled-components';

export const FooterItemsWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.main.color};
  padding: 16px 60px;
  margin: auto 0;
  
  a:not(:last-child) {
    margin-right: 32px;
  }

  img {
    width: 32px;
    height: 32px;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 5vh;
  background: ${({ theme }) => theme.colors.secondary.main.color};
`;
