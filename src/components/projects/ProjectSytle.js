import styled from "styled-components";
import { Theme } from "../../Theme/Them";

export const ProjectStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  background-color: #eee;
  .project-info {
    border: 1px solid #000;
    border-radius: 12px;
    overflow: hidden;
    transition: 0.4s ease-in-out;

    iframe {
      height: 40vh;
      width: 100%;
      box-shadow: 0 0 2px 0 #000;
    }
    .p-bottom {
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding: 20px;
      text-align: center;
      p {
        line-height: 1.2;
        color: ${Theme.colors.grey};
      }
      a {
        line-height: 1.1;
        align-items: center;
        gap: 3px;
      }
    }
    &:hover {
      box-shadow: 5px 5px 10px ${Theme.colors.grey};
    }
  }
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    .project-info {
      iframe {
        height: 50vh;
      }
    }
  }
  @media (max-width: 768px) {
    .project-info {
      iframe {
        pointer-events: none;
      }
    }
  }
`;
