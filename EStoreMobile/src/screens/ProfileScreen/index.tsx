import {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { Avatar } from 'react-native-paper';
import { AppBar } from '../../components';
import { useDispatch } from 'react-redux';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { setSearch } from '../../redux/reducer/settingsOption';

export default function ProfileScreen() {
    const dispatch = useDispatch();
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (text: string) => {
        setSearchValue(text);
    }

    const handleSearchPress = () => {
        setSearchValue('');
        dispatch(setSearch(searchValue));
        navigation.navigate('ProductListingScreen');
    }
    return(
        <View style={styles.container}>
                <AppBar handleSearchPress={handleSearchPress} containerStyle={{marginBottom: 10}} searchValue={searchValue} handleSearch={(text) => handleSearch(text)} />
                <Avatar.Image size={84} source={{uri: 'https://picsum.photos/700'}} />
                <View style={styles.content}>
                    <Text style={styles.name}>John Smith</Text>
                    <View style={styles.holder}>
                        <Text style={styles.text1}>Position: </Text>
                        <Text style={styles.text2}>Developer</Text>
                    </View>
                    <View style={styles.holder}>
                        <Text style={styles.text1}>Email: </Text>
                        <Text style={styles.text2}>example@gmail.com</Text>
                    </View>
                </View>
        </View>
    )
}