import {useState, useEffect} from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

interface AppProductCard {
    containerStyle?: object,
    data: {
        image: string,
        title: string,
        description: string,
        price: number
    },
}

export default function AppProductCard(props: AppProductCard) {
    const {
        containerStyle,
        data = {
            image: 'https://picsum.photos/700',
            title: '',
            description: '',
            price: 0 
        }
    } = props; 

    return(
        <View style={[styles.container, containerStyle]}>
            <Image style={styles.image} source={{uri: data.image}}/>
            <View style={styles.content}>
                <Text style={styles.title}>{data?.title}</Text>
                <Text style={styles.description} numberOfLines={2}>{data?.description}</Text>
            </View>
            <Text style={styles.price}>${parseFloat(data?.price?.toString() ?? '0').toFixed(2)}</Text>
        </View>
    )
}