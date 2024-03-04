import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container{
    padding: 15px 10%;
    max-width: 1800px;
    margin: 0 auto;
}
::-webkit-scrollbar{
    display: none;
}
`;
