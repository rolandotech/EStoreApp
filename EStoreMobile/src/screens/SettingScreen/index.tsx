import {useState, useEffect, useRef} from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles';
import { AppAlert, AppBar } from '../../components';
import {  Button } from 'react-native-paper';
import { setRecordPerPage, setSearch } from '../../redux/reducer/settingsOption';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { RootState } from '../../redux/store';

export default function SettingScreen() {
    const inputRef = useRef<TextInput>(null);
    const dispatch = useDispatch();
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const recordPerPage = useSelector((state: RootState) => state.settings.settingData.recordPerPage);
    const [searchValue, setSearchValue] = useState('');
    const [numPerPage, setNumPerPage] = useState(`${recordPerPage}`);
    const [error, setError] = useState(false);
    const [alert, setAlert] = useState(false);
    const [alertContent, setAlertContent] = useState({
        title: '',
        bodyText: ''
    });

    const handleSearch = (text: string) => {
        setSearchValue(text);
    }

    const handleSearchPress = () => {
        setSearchValue('');
        dispatch(setSearch(searchValue));
        navigation.navigate('ProductListingScreen');
    }

    const handleChange = (value: string) => {
        setNumPerPage(value);
    }

    const handleSave = () => {
        if(inputRef.current){
            inputRef.current.blur();
        }
        if(numPerPage !== ''){
            const checkNum = /^100$|^\d{1,2}$/;
            if (checkNum.test(numPerPage)) {
                setError(false);
                dispatch(setRecordPerPage(Number(numPerPage)));
            }else{
                const checkLetters = /[a-zA-Z]/;
                if(checkLetters.test(numPerPage)){
                    setAlertContent({
                        title: 'Warning',
                        bodyText: 'Please insert numbers only.'
                    })
                }else{
                    setAlertContent({
                        title: 'Warning',
                        bodyText: 'Please insert numbers ranging from 0 - 100.'
                    })
                }
                
                setAlert(true);
                setError(true);
            }
        }else{
            setAlertContent({
                title: 'Warning',
                bodyText: 'Please fill up the field.'
            })
            setAlert(true);
            setError(true);
        }
    }

    return(
        <View style={styles.container}>
            <AppBar handleSearchPress={handleSearchPress} searchValue={searchValue} handleSearch={(text) => handleSearch(text)} />
            <View style={styles.content}>
                <View style={styles.holder}>
                    <TextInput
                        ref={inputRef}
                        style={[styles.input, error ? {borderColor: 'red'} : null]}
                        onChangeText={(text) => handleChange(text)}
                        value={numPerPage}
                        placeholder='Record Per Page'
                        keyboardType="numeric"
                    />
                    <Button style={styles.btnSave} icon="content-save" mode="contained" onPress={handleSave}>
                        Save
                    </Button>
                </View>
            </View>
            <AppAlert
                visible={alert}
                handleClose={() => setAlert(false)}
                data={alertContent}
            />
        </View>
    )
}