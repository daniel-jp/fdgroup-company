import '@fontsource/inter/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/raleway/700.css';
import '@fontsource/righteous/400.css';
import '@fontsource/roboto/700.css';

import {
  background,
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  IconProps,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { Eye } from 'phosphor-react';
import React, {useEffect, useRef} from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import ScrollReveal from 'scrollreveal';

import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import WhatsAppButton from '../components/WhatsApp/WhatsAppButton';
import Layout from '../layout/Layout';

const sr = ScrollReveal();
function Products() {

  const topRef = useRef<HTMLDivElement>(null);
  if(topRef.current) {
    topRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
  useEffect(() => {

    sr.reveal('.product1', {
      rotate: {x: 0, y: 20, z: 0},
      duration: 800,

    },);

    sr.reveal('.product2', {
      origin: 'bottom',
      distance: '100px',
      duration: 900,
      opacity: 0,
    });

    sr.reveal('.product3', {
      origin: 'bottom',
      distance: '100px',
      duration: 1000,
      opacity: 0,
    });
    sr.reveal('.product4', {
      origin: 'bottom',
      distance: '200px',
      duration: 2000,
      opacity: 0,

    });

    sr.reveal('.product5', {
      origin: 'bottom',
      distance: '200px',
      duration: 2000,
      opacity: 0,
    });

    sr.reveal('.product6', {
      origin: 'bottom',
      distance: '300px',
      duration: 2000,
      opacity: 0,
    });

    sr.reveal('.product7', {
      origin: 'bottom',
      distance: '300px',
      duration: 2000,
      opacity: 0,
    });


    sr.reveal('.product8', {
      origin: 'bottom',
      distance: '400px',
      duration: 2000,
      opacity: 0,
    });


    sr.reveal('.product9', {
      origin: 'bottom',
      distance: '400px',
      duration: 2000,
      opacity: 0,
    });

  }, []);

  const {t} = useTranslation()

  return (
    <>
      <Box bg={"gray.200"} pt={10} mt={-10}>
        <div ref={topRef} />
    <Layout>

        <Box  fontFamily={"'Inter', sans-serif"} color={"gray.600"}
          h="full" w="full" 
          overflowY={'hidden'} overflowX={'hidden'} justifyContent={'center'}>
          <Box textAlign="center" h={314}   bg={ useColorModeValue('white', 'gray.900') }>
            <Flex className='product1'  
              h={ "70px" }
              p={4}
              w={300}              
              maxW={ "full" }
              bg={"red.800"}
              gap={ 4 }  textAlign={ "end" }
              fontSize={ "2xl"} color={"gray.800"}
              fontWeight={ "bold" }
              boxShadow={"8px 0px"}
              visibility={"hidden"}>

              <Text color={"white"} textTransform={'uppercase'}>
                {t("HeadProd0")}
              </Text>
            </Flex>

            </Box>

            <Divider />

      {/*   PROD 1 */ }

      <Stack mt={4}
        align={ "center" } bg={'white'} px={4}
        spacing={ { base: 8, md: 10 } }
        py={ { base: 20, md: 28 } }
            direction={{base: "column", md: "row"}}>
            <Stack flex={1} spacing={{base: 2, md: 5}} className='product2' visibility={'hidden'}>
              <Heading lineHeight={1.1} fontWeight={"800"} fontSize={{base: "sm", sm: "xl", lg: "3xl"}}>
                <Text 
                  as={"span"}
                  align={'justify'}
                  position={ "relative" }
                  _after={ {
                    content: "''",
                    width: "full",
                    height: "30%",
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    zIndex: -1,
                      }}>
                    {t("HeadProd1")}
              </Text>
                  <br />
          </Heading>
              <Text color={"gray.600"}>
                {t("TextProd0")}
          </Text>
          <Stack spacing={ { base: 4, sm: 6 } } direction={ { base: "column", sm: "row" } }>


                  <Link to={`/products/server`}
                    style={{alignItems: "center", color: "#F7FAFC"}}
                    className="btn btn-dark
                  bg-red p-2  px-2 d-flex
                    justify-content-center">
              <Eye size={ 32 } />
                  <span style={{marginLeft: "4px"}}>{t("btnProduct")}</span>
                  </Link>

          </Stack>
        </Stack>

        <Flex flex={ 1 } justify={ "center" } align={ "center" } position={ "relative" } w={ "full" }>
       
              <Box className='product3' visibility={'hidden'}
                position={"relative"}
                height={"300px"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}>
                <IconButton
                  aria-label={"Play Button"}
                  variant={"ghost"}
                  _hover={{bg: "transparent"}}
                  size={"lg"}
                  color={"white"}
                  position={"absolute"}
                  left={"50%"}
                  top={"50%"}
                  transform={"translateX(-50%) translateY(-50%)"}
                />
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={"../../assets/prod/im1.webp"}
                />
          </Box>
        </Flex>
      </Stack>

      {/* PROD 2 */ }

      <Stack  bg={'white'} px={4} mt={4}
        align={ "center" }
        spacing={ { base: 8, md: 10 } }
        py={ { base: 20, md: 28 } }
            direction={{base: "column", md: "row"}}>
              
        <Flex flex={ 1 } justify={ "center" } align={ "center" } position={ "relative" } w={ "full" }>
         
              <Box className='product4' visibility={'hidden'}
                position={"relative"}
                height={"300px"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}>
                <IconButton
                  aria-label={"Play Button"}
                  variant={"ghost"}
                  _hover={{bg: "transparent"}}
                  size={"lg"} 
                  color={"white"}
                  position={"absolute"}
                  left={"50%"}
                  top={"50%"}
                  transform={"translateX(-50%) translateY(-50%)"} />
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={"../../assets/prod/im2.jpeg"} />
              </Box>


        </Flex>
            <Stack className='product5' visibility={'hidden'} flex={1} spacing={{base: 2, md: 5}}>
              <Heading lineHeight={1.1} fontWeight={"800"} fontSize={{base: "sm", sm: "xl", lg: "3xl"}}>
            <Text
              as={ "span" }
              position={ "relative" }
              _after={ {
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                zIndex: -1,
                  }}>
                  {t("HeadProd2")}

            </Text>
                  <br />

                </Heading>
              <Text color={"gray.600"}>
                {t("TextProd1")}
                </Text>
                <Stack spacing={{base: 4, sm: 6}} direction={{base: "column", sm: "row"}}>

                  <Link to={"/products/devices"}
                    style={{alignItems: "center", color: "#F7FAFC"}}
                    className="btn btn-dark
                     bg-red p-2  px-2 d-flex
                    justify-content-center">
                    <Eye size={32} />
                    <span style={{marginLeft: "4px"}}>{t("btnProduct")}</span>
                  </Link>
          </Stack>
        </Stack>
      </Stack>

      {/* PROD 3  */ }

     <Stack className='product6' visibility={'hidden'}  bg={'white'} px={4} mt={4}
        align={ "center" }
        spacing={ { base: 8, md: 10 } }
        py={ { base: 20, md: 28 } }
            direction={{base: "column", md: "row"}}>
            <Stack flex={1} spacing={{base: 2, md: 5}}>
              <Heading lineHeight={1.1} fontWeight={"800"} fontSize={{base: "sm", sm: "xl", lg: "3xl"}}>
            <Text
              as={ "span" }
              position={ "relative" }
              _after={ {
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
              
                zIndex: -1,
                  }}>
                  {t("HeadProd3")}

            </Text>
                  <br />
          </Heading>
              <Text color={"gray.600"}>
                {t("TextProd2")}
          </Text>
          <Stack spacing={ { base: 4, sm: 6 } } direction={ { base: "column", sm: "row" } }>
                  <Link
                    to={`/products/parts`}
                    style={{alignItems: "center", color: "#F7FAFC"}}
                    className="btn btn-dark
                     bg-red p-2  px-2 d-flex
                    justify-content-center">
                  <Eye size={32} />  <span style={{marginLeft: "4px"}}>{t("btnProduct")}</span>
                  </Link>
          </Stack>
        </Stack>

        <Flex flex={ 1 } justify={ "center" } align={ "center" } position={ "relative" } w={ "full" }>
     
              <Box className='product7' visibility={'hidden'}
            position={ "relative" }
            height={ "300px" }
            rounded={ "2xl" }
            boxShadow={ "2xl" }
            width={ "full" }
                overflow={"hidden"}>
            <IconButton
              aria-label={ "Play Button" }
              variant={ "ghost" }
              _hover={ { bg: "transparent" } }
              size={ "lg" }
              color={ "white" }
              position={ "absolute" }
              left={ "50%" }
              top={ "50%" }
                  transform={"translateX(-50%) translateY(-50%)"} />
            <Image
              alt={ "Hero Image" }
              fit={ "cover" }
              align={ "center" }
              w={ "100%" }
              h={ "100%" }
                  src={"../../assets/prod/im3.webp"} />
          </Box>
        </Flex>
      </Stack>


      {/* PROD 4 */ }

          <Stack  bg={'white'} px={4} mt={4} mb={20}
            align={"center"}
            spacing={{base: 8, md: 10}}
            py={{base: 20, md: 28}}
            direction={{base: "column", md: "row"}}>
            <Flex className='product8' visibility={'hidden'} 
            flex={1} justify={"center"} align={"center"} 
            position={"relative"} w={"full"}>
      
          <Box
            position={ "relative" }
            height={ "300px" }
            rounded={ "2xl" }
            boxShadow={ "2xl" }
            width={ "full" }
                overflow={"hidden"}>
            <IconButton
              aria-label={ "Play Button" }
              variant={ "ghost" }
              _hover={ { bg: "transparent" } }
              size={ "lg" }
              color={ "white" }
              position={ "absolute" }
              left={ "50%" }
              top={ "50%" }
                  transform={"translateX(-50%) translateY(-50%)"} />
            <Image
              alt={ "Hero Image" }
              fit={ "cover" }
              align={ "center" }
              w={ "100%" }
              h={ "100%" }
                  src={"../../assets/prod/im41.jpeg"} />
          </Box>
            </Flex>


            <Stack className='product9' visibility={'hidden'} flex={1} spacing={{base: 2, md: 5}}>
              <Heading lineHeight={1.1} fontWeight={"800"} fontSize={{base: "sm", sm: "xl", lg: "3xl"}}>
            <Text
              as={ "span" }
              position={ "relative" }
              _after={ {
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
          
                zIndex: -1,
                  }}>
                  {t("HeadProd4")}

            </Text>
                  <br />

          </Heading>
              <Text color={"gray.600"}>
                {t("TextProd3")}
          </Text>
          <Stack spacing={ { base: 4, sm: 6 } } direction={ { base: "column", sm: "row" } }>
                  <Link
                    to={`/products/audiovisuel`}
                    style={{alignItems: "center", color: "#F7FAFC"}}
                    className="btn btn-dark
                     bg-red p-2  px-2 d-flex
                    justify-content-center">
                  <Eye size={32} />   <span style={{marginLeft: "4px"}}>{t("btnProduct")}</span>
                  </Link>
          </Stack>
        </Stack>

          </Stack>
        </Box>

        <WhatsAppButton />
        <BackToTopButton />

      </Layout> 
    </Box></>
  );
}
export default Products;


