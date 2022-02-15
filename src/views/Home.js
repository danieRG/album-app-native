import React, { useEffect }  from 'react';
import { View , ScrollView} from 'react-native';
import{
    Box,
    Image,
    Center,
    VStack,
    Pressable,
    Text,
    HStack,
    Badge,
    Spacer,
    Flex
} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import globalStyles from '../styles/styles';
import { startLoadingAlbumList } from '../actions/albumList';


export const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoadingAlbumList());
    } , [dispatch]);
    

    const albumList = useSelector(state => state.albumList);
    console.log(albumList);

return <ScrollView>
    { 
        albumList.map(album =>{
        return <Pressable key={album.id}>
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
