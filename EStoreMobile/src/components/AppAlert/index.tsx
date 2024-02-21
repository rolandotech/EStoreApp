import {useState, useEffect} from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Button, Dialog, Portal, Text } from 'react-native-paper';

interface AppAlert {
    visible: boolean,
    handleClose: () => void,
    data: {
        title: string,
        bodyText: string
    }
}

export default function AppAlert(props: AppAlert) {
    const {
        visible,
        handleClose,
        data = {
            title: '',
            bodyText: ''
        }
    } = props; 

    return(
        <View style={styles.container}>
            <Portal>
                <Dialog visible={visible} onDismiss={handleClose}>
                    <Dialog.Title>{data.title}</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">{data.bodyText}</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={handleClose}>Close</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    )
}