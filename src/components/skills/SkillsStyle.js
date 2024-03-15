import styled from "styled-components";
import { Theme } from "../../Theme/Them";

export const SkillsStyle = styled.div`
  color: ${Theme.colors.bgGrey};
  background-color: #bdbdbd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 40px;
  background-color: #36363c;
  h1 {
    line-height: 40px;
    color: #fff;
  }
  .skills-list {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    p {
      padding: 3px 8px;
      background-color: #757575;
      border-radius: 8px;
      color: ${Theme.colors.white};
      &:nth-child(3) {
        border: 1.5px solid #c258ad;
      }
      &:nth-child(4) {
        border: 1.5px solid #e8d44d;
      }
      &:nth-child(5) {
        border: 1.5px solid #149eca;
      }
      &:nth-child(6) {
        border: 1.5px solid #27c6ff;
      }
    }
  }
  @media (max-width: 992px) {
    padding: 30px 10%;
  }
`;
