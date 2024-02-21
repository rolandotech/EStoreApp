import {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface _template {
    title?: any,
}

export default function _template(props: _template) {
    const {title} = props; 

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}