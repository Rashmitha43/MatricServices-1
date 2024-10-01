import { extendTheme } from "@chakra-ui/react";
const colors = {
    sixty:'white',
    thirty:'#320c86',
    ten:'#ffa441'
};
const fonts = {
    body:'Raleway',
    header:''
};
const theme=extendTheme({colors,fonts})
export default theme;