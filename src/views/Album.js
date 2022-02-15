import React, { useEffect } from 'react';
import {ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import  { LoadingAlbumDetail } from '../actions/album';
import { HStack, Center, Heading, Divider, Stack, Box, Flex, Spacer, AspectRatio, Image, Text, Badge, Link } from "native-base";
import globalStyles from '../styles/styles';


export const Album = ({ route, navigation }) => {
    const { id:albumId }  = route.params;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LoadingAlbumDetail(albumId));
    },[albumId])
    
    const details = useSelector(state => state.albumDetail);

   
  return (
    <Box alignItems="center">
      <ScrollView>
{ details.map(detail  => {
  return <Box style={globalStyles.boxDetails} maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: `${detail.thumbnailUrl}`
          }} alt="image" />
          </AspectRatio>
          <Badge 
              colorScheme="#121A2B" 
              _text={{
                  color: "white"
                  }} 
              variant="solid" 
              rounded="4">
              {detail.id}
          </Badge>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {detail.title.substring(0, 13)}...
            </Heading>
          </Stack>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Link 
              onPress={() => navigation.navigate('ImageDetail', {id: detail.id})}
              color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                View
              </Link>
            </HStack>
          </HStack>
        </Stack>
      </Box>
})     }
</ScrollView>
    </Box>
  )
}
