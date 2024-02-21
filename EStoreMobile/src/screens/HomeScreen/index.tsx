import {useState, useEffect} from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';
import { AppBar, AppCategoryCard } from '../../components';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { categories } from '../../utils/productlist';
import { setSearch } from '../../redux/reducer/settingsOption';
import { useDispatch } from 'react-redux';

export default function HomeScreen() {
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
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                <AppBar handleSearchPress={() => handleSearchPress()} containerStyle={{marginBottom: 20}} searchValue={searchValue} handleSearch={(text) => handleSearch(text)} />
                <View style={styles.content}>
                    {
                        categories.map((items) => {
                            return (
                            <AppCategoryCard
                                key={items.id}
                                containerStyle={{width: '29.5%'}}
                                data={items}
                                handleCardPress={() => {
                                    dispatch(setSearch(items.category))
                                    navigation.navigate('ProductListingScreen')
                                }}
                            />
                            );
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}