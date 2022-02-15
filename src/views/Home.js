import React, { useEffect }  from 'react';
import { View , ScrollView} from 'react-native';
import{
    Box,
    Pressable,
    Text,
    HStack,
    Badge
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

return <ScrollView>
    { 
        albumList?.map(album =>{
        return <Pressable 
            onPress={() => navigation.navigate('AlbumDetail', { id: album.id })}
            key={album.id}>
            {({
            isHovered,
            isPressed
            }) => {
            return <Box 
                        maxW="96" 
                        borderWidth="1" 
                        borderColor="coolGray.300" 
                        shadow="3" 
                        bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} 
                        p="5" 
                        rounded="8" 
                        style={{
                            transform: [{
                            scale: isPressed ? 0.96 : 1
                        }]
                }}>
                    <HStack alignItems="center">
                    <Badge 
                        colorScheme="#121A2B" 
                        _text={{
                            color: "white"
                            }} 
                        variant="solid" 
                        rounded="4">
                        {album.id}
                    </Badge>
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
}
