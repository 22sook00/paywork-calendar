import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 100px;
`;
export const FooterContext = styled.p`
  line-height: 100px;
  color: ${({ theme }) => theme.textColor};
`;
