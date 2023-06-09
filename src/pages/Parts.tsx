import { Box, Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { CameraSlash, QrCode } from 'phosphor-react';
import React, {useEffect, useRef} from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import PartProductCard from '../components/PartProductCard/PartProductCard';
import WhatsAppButton from '../components/WhatsApp/WhatsAppButton';
import Layout from '../layout/Layout';
import PartProduct1 from '../parts/PartProduct1';
import PartProduct2 from '../parts/PartProduct2';


const sr = ScrollReveal();
function Parts() {


  useEffect(() => {

    sr.reveal('.part1', {
      rotate: {x: 0, y: 20, z: 0},
      duration: 1000,

    },);

    sr.reveal('.part2', {
      origin: 'bottom',
      distance: '200px',
      duration: 2000,
      opacity: 0,
    });

    sr.reveal('.part3', {
      origin: 'bottom',
      distance: '300px',
      duration: 2000,
      opacity: 0,
    });
    sr.reveal('.part4', {
      origin: 'bottom',
      distance: '400px',
      duration: 2000,
      opacity: 0,

    });

    sr.reveal('.part5', {
      origin: 'bottom',
      distance: '500px',
      duration: 2000,
      opacity: 0,
    });



  }, []);

  const partProduct1 = PartProduct1();
  const partProduct2 = PartProduct2();
  const {t} = useTranslation();

  const topRef = useRef<HTMLDivElement>(null);
  if(topRef.current) {
    topRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  return ( 
    <Box bg={"gray.200"} mt={-10}>

      <div ref={topRef} />
      <Layout>

        <Box overflowY={'hidden'} pt={20} overflowX={'hidden'}>


          <Flex className='part1' visibility={'hidden'} justify={'flex-end'} align={'center'}  px={6}>

        <Heading mt={ 6 } mb={ 2 }  fontSize={[ 'md', 'lg', 'xl']} >
            {t("headParts")}
        </Heading>
            <QrCode size={28} color='#C53030' />


          </Flex>

          <Stack align={'center'} className='part2' visibility={'hidden'}>
          <Heading color={'gray.700'}  fontSize={[ 'md', 'lg', 'xl']} >{t("Part0")}</Heading>
          <Text fontSize={"lg"} color={"purple.600"} alignItems={"center"} display={'flex'}>
            {/* {t("TextServ0")} <CameraSlash size={20} color='#2F855A' /> */}
        </Text>
      </Stack>

          <Box pt={4} pb={10} className='part3' visibility={'hidden'}>

            <SimpleGrid columns={{base: 1, md: 3}} spacing={2}>
              {partProduct1.map((server, key) => (
                <PartProductCard title={server.title} img={server.img} key={key} />
              ))}
            </SimpleGrid>
      </Box>

          <Stack align={'center'} className='part4' visibility={'hidden'}>
            <Heading color={'gray.700'}  fontSize={[ 'md', 'lg', 'xl']} > {t("Part1")}</Heading>
            <Text fontSize={"lg"} color={"purple.600"} alignItems={"center"} display={'flex'}>
              {/* {t("TextServ0")} <CameraSlash size={20} color='#2F855A' /> */}
            </Text>
          </Stack>

          <Box pt={4} pb={10} className='part5' visibility={'hidden'}>
            <SimpleGrid columns={{base: 1, md: 3}} spacing={2}>
              {partProduct2.map((server, key) => (
                <PartProductCard title={server.title} img={server.img} key={key} />
              ))}
            </SimpleGrid>
          </Box>
        </Box>

        <WhatsAppButton/>
        <BackToTopButton />

      </Layout>
    </Box>
  );
}

export default Parts;
