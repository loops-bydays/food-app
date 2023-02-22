import { createGlobalStyle } from "styled-components";

const GlobalStyle= createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    scroll-behavior: smooth;
}
body{
    font-family: 'Noto Sans', sans-serif;
    font-size: 400;
    width: 100%;
    overflow-x: hidden;
}
`;
export const orangeDefault="#F77246";
export const defaultPadding="1rem";
export default  GlobalStyle;