import { createGlobalStyle } from "styled-components";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"], style: ["normal", "italic"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    margin: 0;
    padding: 2rem;
    font-family: ${lora.style.fontFamily}, serif;
    
  }
  #__next {
    max-width: 500px;
    margin: 0 auto;
  }
`;
