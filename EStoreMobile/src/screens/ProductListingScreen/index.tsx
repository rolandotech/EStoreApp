import {useState, useEffect} from 'react';
import { ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { AppBar, AppProductCard } from '../../components';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { productList } from '../../utils/productlist';
import { ActivityIndicator } from 'react-native-paper';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export default function ProductListingScreen() {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const recordPerPage = useSelector((state: RootState) => state.settings.settingData.recordPerPage);
    const searchGlobal = useSelector((state: RootState) => state.settings.settingData.searchGlobal);
    const [searchValue, setSearchValue] = useState('');
    const [allProduct, setAllProduct] = useState<Product[][]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pagination, setPagination] = useState<string[]>([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        let new_list;
        if(searchGlobal !== ''){
            setSearchValue(searchGlobal);
            new_list = productList.filter((item) => JSON.stringify(item).includes(searchGlobal));
        }else{
            new_list = productList;
        }
        
        const newList = filter(new_list);
        const paginatedData = Object.keys(newList);
        setPagination(paginatedData)
        setAllProduct(newList)
        setInterval(() => {
            setLoader(false);
        }, 800)
    }, [recordPerPage, searchGlobal])

    const handleSearch = (value: string) => {
        setSearchValue(value)
        if(value === ''){
            const new_list = productList.filter((item) => JSON.stringify(item).includes(value));
            const newList = filter(new_list);
            const paginatedData = Object.keys(newList);
            setPagination(paginatedData)
            setAllProduct(newList);
        }
    };

    const handleSearchPress = () => {
        if(searchValue !== ''){
            const new_list = productList.filter((item) => JSON.stringify(item).includes(searchValue));
            const newList = filter(new_list);
            const paginatedData = Object.keys(newList);
            setPagination(paginatedData)
            setAllProduct(newList);
        }
    }

    const filter = (new_list: Product[]) => {
        const groups: Product[][] = [];
        for (let i = 0; i < new_list.length; i += recordPerPage) {
            groups.push(new_list.slice(i, i + recordPerPage));
        }

        return groups;
    }

    const handlePrev = () => {
        if(pagination.length > 0 && Number(pagination[0]) < currentPage){
            setCurrentPage(prevState => prevState - 1);
        }
    }

    const handleNext = () => {
        if(pagination.length > 0 && Number(pagination[pagination.length - 1]) > currentPage){
            setCurrentPage(prevState => prevState + 1);
        }
    }

    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <AppBar
                    isBackIcon
                    searchValue={searchValue}
                    handleSearch={(text) => handleSearch(text)}
                    handleSearchPress={() => handleSearchPress()}
                    handleBackPress={() => {
                        navigation.goBack();
                    }}
                    containerStyle={{marginBottom: 10}}
                />
                <View style={styles.content}>
                    {
                        allProduct.length > 0 && allProduct[currentPage].map(data => {
                            return (
                                <AppProductCard
                                    key={data.id}
                                    data={data}
                                />
                            )
                        })
                    }
                    {
                        pagination.length > 0 ? (
                            <View style={styles.pagination}>
                                <TouchableOpacity style={styles.pagesBtn} onPress={handlePrev}>
                                    <FontAwesome6 name="angle-left" size={18} color="#000000"/>
                                </TouchableOpacity>
                                <View style={styles.pageGroup}>
                                {
                                    pagination.map((list, index) => {
                                        return (
                                            <TouchableOpacity key={index} style={[styles.pages, currentPage === Number(list) ? {backgroundColor: '#3c3c3c'} : null]} onPress={() => setCurrentPage(Number(list))}>
                                                <Text style={[currentPage === Number(list) ? {color: '#ffffff'} : null]}>{String(list)}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                                </View>
                                {
                                    Number(pagination[pagination.length - 1]) !== currentPage ? (
                                        <TouchableOpacity style={styles.pagesBtn} onPress={handleNext}>
                                            <FontAwesome6 name="angle-right" size={18} color="#000000"/>
                                        </TouchableOpacity>
                                    ) : null
                                }
                            </View>
                        ) : null
                    }
                    
                </View>
            </ScrollView>
            {
                loader ? (<ActivityIndicator style={styles.loader} size={50} animating={true} color={"#ffffff"} />) : null
            }
        </View>
    )
}