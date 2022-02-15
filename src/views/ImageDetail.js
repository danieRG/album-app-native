import React, { useEffect } from 'react';
import  { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingImageDetail } from '../actions/album';

export const ImageDetail = ({ route, navigation}) => {
  const { id } = route.params;
  const dispatch = useDispatch();
  

useEffect(() => {
    dispatch(LoadingImageDetail(id));
},[id])

const imageDetail = useSelector(state => state.imageDetail);

console.log(imageDetail);
  return (
    <View>
      <Text>{imageDetail.url}</Text>
    </View>
  )
}
