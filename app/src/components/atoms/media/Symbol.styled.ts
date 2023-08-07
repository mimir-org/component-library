import styled from "styled-components";

export const SymbolImage = styled.img`
  max-height: 100%;
  pointer-events: none;
`;

export const SymbolBox = styled.div`
  max-height: 30px;

  ${SymbolImage} {
    min-height: 30px;
  }
`;

export const LogoBox = styled.div`
  position: absolute;
  bottom: 0;
  height: 20px;
  width: 50px;
  align-self: flex-start;
  pointer-events: none;
  margin-left: 10px;

  img {
    min-height: 100%;
    filter: brightness(0%);
  }
`;
