import { createGlobalStyle } from "styled-components";
import { setColor, setFont, letterSpacing, sizes } from "./helper";

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@600;700&family=Merriweather:wght@300;400&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
html{
  font-size: 62.5%;
}
body{
${setFont.main};
}
h1,h2,h3,h4,h5{
  ${setFont.titled};
text-align: center;
 text-transform: uppercase;
 letter-spacing: ${letterSpacing(2)};
 color:${setColor.primary};
}
h1{
  font-size: 4.8rem;
 line-height:1;
}
h2{
  font-size: 4rem;
 line-height:1;
}
h3{
  font-size: 3.2rem;
 line-height:1.2;
}
h4{
  font-size: 2.4rem;
 line-height:1.5;
  margin-bottom: .8rem;
}
h5{
  font-size: 1.6rem;
 line-height:1.5;
  margin-bottom: .8rem;
}
h1,h2,h3,h4,h5{
  &::selection {
      background: ${setColor.primary};
      color: ${setColor.mainWhite};
    }
}
p{
  line-height: 1.5;
  font-size: 1.6rem;
  letter-spacing: ${letterSpacing(1)};
  margin-bottom: .8rem;
  ${setFont.main};
  &::selection {
      background: ${setColor.primary};
      color: ${setColor.mainWhite};
    }
}
a{
  text-decoration: none;
  ${setFont.main};
  &::selection {
      background: ${setColor.primary};
      color: ${setColor.mainWhite};
    }
}
ul,li{
  list-style: none;
}
img{
  width: 100%;
  display: block;
  object-fit: cover;
}

@media (max-width: ${sizes.m}){
  
  h1{
    font-size:4rem;
  }
 h2{
  font-size:3.2rem;
 }
 h3{
  font-size:2.4rem;
 }
 h4{
  font-size:1.6rem;
 }
 h5{
  font-size:1.6rem;
 }
}
`;

export default Global;
