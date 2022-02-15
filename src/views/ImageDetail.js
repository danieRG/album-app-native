import React, { useEffect } from 'react';
import  { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingImageDetail } from '../actions/album';
import { 
  Center, 
  Heading, 
  Stack, 
  Box, 
  AspectRatio, 
  Image, 
  Text
} from "native-base";
import { randomString } from '../helpers/randomString';
import globalStyles from '../styles/styles';

export const ImageDetail = ({ route }) => {
  const { id } = route.params;
  const dispatch = useDispatch();
  

  useEffect(() => {
      dispatch(LoadingImageDetail(id));
  },[id])

  const imageDetail = useSelector(state => state.imageDetail);
  imageDetail.description = randomString(50);
 
  return (
    <View style={globalStyles.viewImageDetail}>
      <Box alignItems="center">
        <Text 
          style={globalStyles.textTitle}
        >
          From Album {imageDetail.albumId}
        </Text>
      </Box>
        <Box alignItems="center">
          <Box 
          maxW="80" 
          rounded="lg" 
          overflow="hidden" 
          borderColor="coolGray.200" 
          borderWidth="1" 
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
          }}
          _web={{
            shadow: 2,
            borderWidth: 0
          }} 
          _light={{
            backgroundColor: "gray.50"
          }}
          >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image 
                source={{
                  uri: `${imageDetail.url} `
                }} 
                alt={imageDetail.url} />
            </AspectRatio>
            <Center 
              bg="violet.500" 
              _dark={{
                bg: "violet.400"
              }}
              _text={{
                color: "warmGray.50",
                fontWeight: "600",
                fontSize: "xs"
              }} 
              position="absolute" 
              bottom="0" 
              px="6" 
              py="1"
              >
                Image {imageDetail.id}
            </Center>
          </Box>
            <Stack 
              p="4" 
              space={3}
            >
              <Stack space={2}>
                <Heading 
                  size="md" 
                    ml="-1"
                  >
                  <Text 
                    fontSize={18}
                  >
                    {imageDetail.title}
                  </Text>
                </Heading>
              </Stack>
              <Text fontWeight="400">
                This is a random string {imageDetail.description}
              </Text>
            </Stack>
          </Box>
      </Box>
    </View>
  )
}
