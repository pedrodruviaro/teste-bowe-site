import { createGlobalStyle } from "styled-components"
import { defaultTheme } from "./theme"

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  font-family: "Syne", sans-serif;
	line-height: 1;
  background: ${({ color }) => defaultTheme.colors[color]}; 
  overflow-x: hidden;
}
ol, ul {
	list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
  border-spacing: 0;
  
  * {
    box-sizing: border-box;
    font-family: "Syne", sans-serif;
  }
  html,
  body,
  #gatsby-focus-wrapper,
  #___gatsby {
    height: 100%;
    
  }
  body {
    margin: 0;
    padding: 0;
  }
  div[role="group"][tabindex] {
    height: 100%;
  }
}`

export default GlobalStyle