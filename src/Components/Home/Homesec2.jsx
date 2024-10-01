import { Box,Text,Heading } from "@chakra-ui/react";
import theme from "../../theme";
const Homesec2 = () =>{
    return(
        <>
        <Box w='100%' p='0px' m='0px' display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} fontFamily={theme.fonts.body}>
            <Box w='70%' display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                <Box fontSize={'2rem'} fontWeight={'700'}>Easing the life of Engineers with...</Box>
                <Box w='20px' h='1px'></Box>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap='20px' mt='30px'>
                    <Box height={'300px'} w='300px' borderRadius={'15px'} bg={theme.colors.thirty} color='white' textAlign={'center'} p='20px 10px' display={'flex'} alignItems={'center'} justifyContent={'flex-start'} flexDirection={'column'}>
                        <Text fontSize={'2rem'} fontWeight={'600'}>INNOVATION</Text>
                        <Box w='80px' h='1px' bg='red'></Box>
                        <Text mt='15px'>Without the necessary support, a significant number of potentially groundbreaking research initiatives remain unrealized, limiting the overall innovation potential of aspiring researchers.</Text>
                    </Box>
                    <Box height={'300px'} w='300px' borderRadius={'15px'} bg={theme.colors.ten} color='black' textAlign={'center'} p='20px 10px' display={'flex'} alignItems={'center'} justifyContent={'flex-start'} flexDirection={'column'}>
                        <Text fontSize={'2rem'} fontWeight={'600'}>RESEARCH</Text>
                        <Box w='80px' h='1px' bg='red'></Box>
                        <Text mt='15px'>Without the necessary support, a significant number of potentially groundbreaking research initiatives remain unrealized, limiting the overall innovation potential of aspiring researchers.</Text>
                    </Box>

                    <Box height={'300px'} w='300px' borderRadius={'15px'} bg={theme.colors.thirty} color='white' textAlign={'center'} p='20px 10px' display={'flex'} alignItems={'center'} justifyContent={'flex-start'} flexDirection={'column'}>
                        <Text fontSize={'2rem'} fontWeight={'600'}>SUPPORT</Text>
                        <Box w='80px' h='1px' bg='red'></Box>
                        <Text mt='15px'>Without the necessary support, a significant number of potentially groundbreaking research initiatives remain unrealized, limiting the overall innovation potential of aspiring researchers.</Text>
                    </Box>
                    
                    
                    

                </Box>
            </Box>

        </Box>
        </>
    )
}
export default Homesec2;