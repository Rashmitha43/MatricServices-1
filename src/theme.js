import { extendTheme } from "@chakra-ui/react";
const colors = {
    sixty:'white',
    thirty:'#FFB722',
    ten:'#656692'
};
const fonts = {
    body:'Inter',
    header:''
};
const theme=extendTheme({colors,fonts})
export default theme;