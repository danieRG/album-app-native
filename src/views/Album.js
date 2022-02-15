import React, { useEffect } from 'react';
import  { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import  { LoadingAlbumDetail } from '../actions/album';
import { 
  Image,
  Center,
  ScrollView,
  Pressable,
  View
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
    <View style={globalStyles.albumContainer}>
      {
        details.map((detail) => { return (
          <Pressable
            onPress={() => navigation.navigate('ImageDetail', {id: detail.id})}
            key={detail.id}
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