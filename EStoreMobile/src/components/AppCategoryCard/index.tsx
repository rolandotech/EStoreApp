import {useState, useEffect} from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface AppCategoryCard {
    containerStyle?: object,
    handleCardPress?: Function,
    data?: {
        id: number,
        category: string,
        image: string
    },
}

export default function AppCategoryCard(props: AppCategoryCard) {
    const {
        containerStyle,
        data,
        handleCardPress = () => {}
    } = props; 

    return(
        <TouchableOpacity onPress={() => handleCardPress()} style={[styles.container, containerStyle]}>
            <Image style={styles.image} source={{uri: data?.image ? data.image : 'https://picsum.photos/700'}}/>
            <Text style={styles.categTitle}>{data?.category ? data?.category : 'Category'}</Text>
        </TouchableOpacity>
    )
}