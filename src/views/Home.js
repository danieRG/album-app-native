import React, { useEffect }  from 'react';
import { ScrollView} from 'react-native';
import{
    Box,
    Pressable,
    Text,
    HStack,
    Badge,
    Image
} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingAlbumList } from '../actions/album';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/styles';

export const Home = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    useEffect(() => {
        dispatch(startLoadingAlbumList());
    } , [dispatch]);
    

    const albumList = useSelector(state => state.albumList);

return <Box safeAreaTop={2}><ScrollView>
    { 
        albumList?.map(album =>{
        return <Pressable 
            onPress={() => navigation.navigate('AlbumDetail', { id: album.id })}
            key={album.id}>
            {({
            isPressed
            }) => {
            return <Box 
                        maxW="96" 
                        borderWidth="1" 
                        borderColor="coolGray.300" 
                        shadow="3" 
                        bg={isPressed ? "coolGray.200" : "coolGray.100"} 
                        p="5" 
                        rounded="8" 
                        style={{
                            transform: [{
                            scale: isPressed ? 0.96 : 1
                        }]
                }}>
                    <HStack alignItems="center">
                    <Box>
                        <Image shadow={2} source={{
                            uri: 'https://wallpaperaccess.com/full/317501.jpg'
                        }} alt="Alternate Text" size="sm" />
                    </Box>
                    </HStack>
                    <Text 
                        color="coolGray.800" 
                        mt="3" 
                        fontWeight="medium" 
                        fontSize="xl"
                    >
                    {album.title}
                    </Text>

                </Box>

            }}
            </Pressable>
    })
}
</ScrollView> 
</Box> 
}
