import React  from 'react';
import { View , ScrollView} from 'react-native';
import{
    Box,
    Image,
    Center,
    VStack

} from 'native-base';
import globalStyles from '../styles/styles';

export const Home = () => {

    const miArray = ["xs", "sm", "md", "lg", "xl", "2xl"]
  return (
    <View>
        <Box style={globalStyles.container}>
           <ScrollView px="20" style={globalStyles.content}>
                <VStack space={2} alignItems="center" safeAreaTop my={6}>
                    {
                    miArray.map(size => 
                        <Image 
                            key={size} 
                            size={300} 
                            resizeMode="cover" 
                            source={
                                {
                                    uri: "https://wallpaperaccess.com/full/317501.jpg"
                                }
                            } alt={"Alternate Text " + size} 
                        /> )
                    }
                </VStack>
           </ScrollView>
         
        </Box>
    </View>
  )
}
