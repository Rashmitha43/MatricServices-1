import { extendTheme } from "@chakra-ui/react";
const colors = {
    sixty:'white',
    thirty:'#ededed',
    ten:'#a5a5a5'
};
const fonts = {
    body:'Inter',
    header:''
};
const theme=extendTheme({colors,fonts})
export default theme;