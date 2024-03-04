import styled from "styled-components";
import { Theme } from "../../Theme/Them";

export const FooterStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 10%;
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: ${Theme.colors.black};
    font-size: 18px;
  }
`;
