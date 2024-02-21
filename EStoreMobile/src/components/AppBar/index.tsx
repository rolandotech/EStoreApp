import {useState, useEffect} from 'react';
import { TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { Searchbar } from 'react-native-paper';

interface AppBar {
    containerStyle?: object,
    isBackIcon?: boolean,
    searchValue: string,
    handleSearch: (text: string) => void,
    handleBackPress?: () => void,
    handleSearchPress?: () => void
    
}

export default function AppBar(props: AppBar) {
    const {
        containerStyle,
        isBackIcon,
        searchValue,
        handleSearch = () => {},
        handleBackPress = () => {},
        handleSearchPress = () => {}
    } = props;

    const [search, setSearch] = useState('');

    const onSearch = (text: string) => {
        setSearch(text)
    }

    return(
        <View style={[styles.container, containerStyle]}>
            {
                isBackIcon ? (
                    <TouchableOpacity style={styles.icon} onPress={handleBackPress}>
                        <MaterialCommunityIcons name="arrow-left" color="#000000" size={26}/>
                    </TouchableOpacity>
                ) : null
            }
            <Searchbar
                onIconPress={() => handleSearchPress()}
                style={styles.search}
                placeholder="Search"
                onChangeText={handleSearch}
                value={searchValue}
            />
        </View>
    )
}