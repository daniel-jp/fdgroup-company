import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { CameraSlash, QrCode } from 'phosphor-react';
import React, {useEffect, useRef} from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

import AudiovisuelProductCard1 from '../Audiovisuel/AudiovisuelProductCard1';
import AudiovisuelProductCard2 from '../Audiovisuel/AudiovisuelProductCard2';
import AudiovisuelProductCard from '../components/AudiovisuelProductCard/AudiovisuelProductCard';
import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import FdgLogo from '../components/fdgLogo';
import WhatsAppButton from '../components/WhatsApp/WhatsAppButton';
import Layout from '../layout/Layout';

const sr = ScrollReveal();

function Audiovisuel() {

  const topRef = useRef<HTMLDivElement>(null);
  if(topRef.current) {
    topRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
  useEffect(() => {

    sr.reveal('.audioV1', {
      rotate: {x: 0, y: 20, z: 0},
      duration: 1000,

    },);

    sr.reveal('.audioV2', {
      origin: 'bottom',
      distance: '200px',
      duration: 2000,
      opacity: 0,
    });

    sr.reveal('.audioV3', {
      origin: 'bottom',
      distance: '300px',
      duration: 2000,
      opacity: 0,
    });
    sr.reveal('.audioV4', {
      origin: 'bottom',
      distance: '400px',
      duration: 2000,
      opacity: 0,

    });

    sr.reveal('.audioV5', {
      origin: 'bottom',
      distance: '500px',
      duration: 2000,
      opacity: 0,
    });

  }, []);


  const audiovisuelProductCard1 = AudiovisuelProductCard1();
  const audiovisuelProductCard2 = AudiovisuelProductCard2();
  const {t} = useTranslation();


  return (

    <Box mt={-10} bg={"gray.200"}>
      <div ref={topRef} />
      <Layout>
        <Box overflowY={'hidden'} pt={20} overflowX={'hidden'}>


          <Flex className='audioV1' visibility={'hidden'} justify={'flex-end'} align={'center'} px={6}>

        <Heading mt={ 6 } mb={ 2 }  fontSize={[ 'md', 'lg', 'xl']} >
            {t("headAudiovisuel")}
        </Heading>
        <QrCode size={ 28 } color='#C53030' />
      </Flex>

          <Stack align={'center'} className='audioV2' visibility={'hidden'} >
          <Heading color={'gray.700'}  fontSize={[ 'md', 'lg', 'xl']} >{t("audioVisuel0")}</Heading>

          <Text fontSize={"lg"} color={"purple.600"} alignItems={"center"} display={'flex'}>
            {/* {t("TextServ0")} <CameraSlash size={20} color='#2F855A' /> */}
        </Text>
      </Stack>

          <Box pt={4} pb={10} className='audioV3' visibility={'hidden'} >

        <SimpleGrid columns={ { base: 1, md: 4 } } spacing={ 2 }>
          { audiovisuelProductCard1.map((server, key) => (
            <AudiovisuelProductCard title={ server.title } img={ server.img } key={ key } />
          )) }
        </SimpleGrid>
      </Box>

          <Stack align={'center'} className='audioV4' visibility={'hidden'} >
          <Heading color={'gray.700'}  fontSize={[ 'md', 'lg', 'xl']} > {t("audioVisuel1")} </Heading>
          <Text fontSize={"lg"} color={"purple.600"} alignItems={"center"} display={'flex'}>
            {/* {t("TextServ0")} <CameraSlash size={20} color='#2F855A' /> */}
        </Text>
      </Stack>

          <Box pt={4} pb={10} className='audioV5' visibility={'hidden'} >

        <SimpleGrid columns={ { base: 1, md: 4 } } spacing={ 2 }>
          { audiovisuelProductCard2.map((server, key) => (
            <AudiovisuelProductCard title={ server.title } img={ server.img } key={ key } />
          )) }
        </SimpleGrid>
          </Box>
      </Box>
      <WhatsAppButton />
      <BackToTopButton />

    </Layout>  </Box>
  );
}

export default Audiovisuel;
