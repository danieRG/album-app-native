import React, { useEffect } from 'react';
import  { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import  { LoadingAlbumDetail } from '../actions/album';
import { 
  HStack, 
  Heading, 
  Stack, 
  Box,
  AspectRatio, 
  Image,
  Badge, 
  Link,
  Center,
  ScrollView,
  Pressable,
  View,
  Text
} from "native-base";
import globalStyles from '../styles/styles';


export const Album = ({ route, navigation }) => {
  const { id:albumId }  = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(LoadingAlbumDetail(albumId));
  },[albumId])
    
  const details = useSelector(state => state.albumDetail);

   
  return (
    
  <ScrollView>
    <View style={styles.container}>
      {
        details.map((detail) => { return (
          <Pressable
            onPress={() => navigation.navigate('ImageDetail', {id: detail.id})}
          >
            {({
              isPressed
            }) => {
              return(
                <Center 
                  safeAreaTop={1} 
                  safeAreaLeft={1}
                  >
                    <Image 
                      p="5" 
                      rounded="10" 
                      style={{
                        transform: [{
                          scale: isPressed ? 0.96 : 1
                      }]
                      }} 
                      shadow={3} 
                      source={{
                        uri: `${detail.thumbnailUrl}`
                      }} 
                      alt={detail.thumbnailUrl} 
                      size={120} 
                      />
                    </Center>
                  )
            }}
            </Pressable>
              )
          })  
        }
    </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginRight:4,
        marginTop:2
    }
});