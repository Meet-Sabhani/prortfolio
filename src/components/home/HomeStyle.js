import styled from "styled-components";
import { Theme } from "../../Theme/Them";

export const HomeStyle = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1800px;
  .bg-layer {
    height: 150px;
    width: 100%;
    background-color: ${Theme.colors.bgBlack};
    filter: blur(20px);
  }
  .wrap-home {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${Theme.colors.white};

    .home-left {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 24px;
      z-index: 1;

      img {
        width: 120px;
        height: 120px;
        object-fit: contain;
        border-radius: 50%;
        border: 5px solid #fff;
      }
    }
    .home-Right {
      display: flex;
      gap: 10px;
      a {
        background-color: #0a66c2;
        border-radius: 8px;
        text-decoration: none;
        color: #fff;
        font-size: 16px;
        padding: 8px;
        &:nth-child(2) {
          background-color: #010409;
          color: #fff;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .wrap-home {
      .home-left {
        img {
          width: 50px;
          height: 50px;
          border: 2px solid #fff;
        }
        .name-wrap {
          h1 {
            font-size: 20px;
          }
        }
      }
      .home-Right {
        a {
          span {
            display: none;
          }
        }
      }
    }
  }
`;
