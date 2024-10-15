import { Box, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import theme from '../../theme'
const Projectform = () => {
  const init={
    name:'',
    phone:'',
    email:''
  }
  const [formdata,setFormdata]=useState(init)
 

  const handleFormdata=(e)=>{
    const {name,value}=e.target
    setFormdata((prev)=>({
        ...prev,
        [name]:value
    }))

  }
  const handleSubmit=(e)=>{
  e.preventDefault()
  setFormdata(init)
  }
  return (
   <>
   <Box
      maxW="1200px"
      w="95%"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      fontFamily={theme.fonts.body}
      mx="auto"
      my={{ base: "3rem", md: "4rem", lg: "5rem" }}
    >
      <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={"700"}>
      Contact Us
      </Text>
      <Box
        w="80px"
        h="3px"
        bg={theme.colors.ten}
        borderRadius={"20px"}
      ></Box>
     
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}  mt={5} bg={theme.colors.thirty} w={{base:'100%',md:'80%'}} py='50px' > 
        <form onSubmit={handleSubmit}  >
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={5}>
        <Box><Input type='text' name='name' placeholder='name'value={formdata.name} onChange={handleFormdata}  border={`2px solid ${theme.colors.thirty}`} p='10px 30px'/></Box>
       
        <Box><Input type='text' name='phone' placeholder='phone'value={formdata.phone} onChange={handleFormdata}  border={`2px solid ${theme.colors.thirty}`} p='10px 30px'/></Box>
       
        <Box><Input type='text' name='email' placeholder='email' value={formdata.email} onChange={handleFormdata} border={`2px solid ${theme.colors.thirty}`} p='10px 30px'/></Box>

        <Box><textarea cols='30' rows={'5'}></textarea></Box>
       
        <Box w='100%' display={'flex'} justifyContent={'space-around'}><Input type='submit' p='10px 30px' bg={theme.colors.ten} color='white' borderRadius='15px' cursor='pointer'/><Input type='reset'  p='10px 30px' bg={'white'} color={theme.colors.ten} borderRadius='15px' cursor='pointer'/></Box>

        
        </Box>
        </form>
        </Box>
      
      </Box>
   </>
  )
}

export default Projectform