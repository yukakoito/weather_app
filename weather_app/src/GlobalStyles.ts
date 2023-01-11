import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --primary-color: #274c77;
    --secondary-color: #e7ecef;
    --max-content-width: 1200px;
    --heading-font-family: 'Poppins', sans-serif;
    --primary-background-color: #6096ba;
    --secondary-background-color: #a3cef1;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    color: var(--primary-color);
    font-family: var(--heading-font-family);
    margin: 5vh 15vw;
  }

  h1 {
    font-size: 22px;
    margin-bottom: 20px;
    border-bottom: 2px solid #c0c0c0;
  }

  h2 {
    font-size: 18px;
    margin: 10px 0;
  }

  button {
    color: var(--secondary-color);
    background-color: var(--primary-color);
    font-weight: bold;
    border-radius: 5px;
    border: none;
    outline: 1px solid var(--primary-color);
    padding: 5px;

    &:hover {  
      transition: 200ms ease-in-out;
      scale: 120%;
    }
  }

  input, select {
    padding: 2px;
    border-radius: 5px;
    outline: 1px solid var(--primary-color);
    border: none;
    font-family: var(--heading-font-family);
    margin: 0 10px;

    &:focus {
      outline: 2px solid var(--primary-color);
    }
  }

  li {
    list-style: none;
  }
`;