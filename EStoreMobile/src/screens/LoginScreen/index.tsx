import {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { AppTextInput } from '../../components';
import { Button } from 'react-native-paper';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setIsConfirm, setUserData } from '../../redux/reducer/userData';
import { RootState } from '../../redux/store';

export default function LoginScreen() {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const userData = useSelector((state: RootState) => state.user.userData);
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const handleCredentials = (key: string, value: string) => {
        setCredentials(state => ({...state, [key]: value}));
    };

    const handleLogin = async () => {
        const {email, password} = credentials;
        if(email !== "" && email === userData.email && password !== "" && password === userData.password){
            setError(false);
            dispatch(setIsConfirm(true));
        }else{
            setError(true);
        }
    }

    const handleSignup = async () => {
        navigation.navigate('SignUpScreen')
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Login</Text>
                {
                    error ? (
                        <Text style={styles.errorLabel}>Invalid username and password!</Text>
                    ) : null
                }
                <AppTextInput
                    label='Email'
                    containerStyle={{marginBottom: 13}}
                    onChangeText={(text: string) => handleCredentials('email', text)}
                    placeholder="Example@email.com"
                />
                <AppTextInput
                    label='Password'
                    secureText={true}
                    containerStyle={{marginBottom: 20}}
                    onChangeText={(text: string)  => handleCredentials('password', text)}
                    placeholder="******"
                />
                <Button style={{borderRadius: 4, marginBottom: 10, backgroundColor: '#1D24CA'}} mode="contained" onPress={() => handleLogin()}>
                    Submit
                </Button>
                <Button style={{borderWidth: 0}} labelStyle={{ color: "#000000"}} mode="outlined" onPress={() => handleSignup()}>
                    Sign Up
                </Button>
            </View>
        </View>
    )
}