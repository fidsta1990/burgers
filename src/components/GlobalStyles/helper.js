export const setColor = {
  secondary: "#FFCB02",
  mainWhite: "#fff",
  lightGrey: "#F9F9F9",
  amber: "#F0A643",
  danger: "#ED4E53",
  mainDark: "#1D2228",
};

export const setFont = {
  main: "font-family: 'Fira Sans', sans-serif;",
  titled: "font-family: 'Fira Sans', sans-serif;",
};

export const setFlex = ({ x = "center", y = "center", d = "row" } = {}) => {
  return `display:flex; align-items:${y}; justify-content:${x}; flex-direction: ${d};`;
};

export const setGrid = ({ no = "2" } = {}) => {
  return `display: grid; grid-template-columns: repeat(${no},1fr)`;
};

export const setGridRes = ({ x = "center", size = "340px" } = {}) => {
  return `display:grid; grid-template-columns(auto-fill, minmax(${size}, 1fr)); justify-items:${x};`;
};

export const transition = ({
  element = "all",
  speed = "0.2",
  trans = "ease-in",
} = {}) => {
  return `transition: ${element} ${speed}s ${trans}`;
};

export const letterSpacing = (size = "2") => `${size}px`;

export const shadows = {
  light: `box-shadow: 0px 0px 5px rgba(255,255,255,.4)`,
  dark: `box-shadow: 0px 0px 5px rgba(0,0,0,.7)`,
  darker: `box-shadow: 0px 0px 10px rgba(0,0,0,.7)`,
  linearPrime: " box-shadow: 0px 0px 10px  rgb(58, 203, 184, 0.4)",
};

export const shadowsT = {
  light: `text-shadow: 0px 0px 5px rgba(255,255,255,.4)`,
  dark: `text-shadow: 0px 0px 5px rgba(0,0,0,.7)`,
  darker: `text-shadow: 0px 0px 10px rgba(0,0,0,.7)`,
  linearPrime: " text-shadow: 0px 0px 10px  rgb(58, 203, 184, 0.4)",
};

export const border = ({ size = "2", color = "#000" } = {}) => {
  return `border:${size}px solid ${color}`;
};

// media query
export const sizes = {
  xl: "1200px",
  l: "990px",
  m: "800px",
  s: "576px",
  xs: "414px",
  xss: "360px",
};