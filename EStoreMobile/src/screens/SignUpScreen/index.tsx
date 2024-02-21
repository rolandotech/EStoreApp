import {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { AppTextInput } from '../../components';
import { Button } from 'react-native-paper';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/reducer/userData';

export default function SignUpScreen() {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const dispatch = useDispatch();
    const [formErr, setFormErr] = useState({
        fname: false,
        lname: false,
        email: false,
        password: false,
        confirm_password: false
    })
    const [credentials, setCredentials] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirm_password: ''
    });

    const handleCredentials = (key: string, value: string) => {
        console.log("value here -=-=-=-=-=-=-=-", value)
        setCredentials(state => ({...state, [key]: value}));
    }

    const handleSignUp = async () => {
        const isvalid = await validation();
        console.log("isvalid", isvalid)
        if(isvalid){
            const params = {
                fname: credentials.fname,
                lname: credentials.lname,
                email: credentials.email,
                password: credentials.password,
            }
            dispatch(setUserData(params));
            navigation.navigate('LoginScreen');
        }
    }

    const handleLogin = () => {
        navigation.navigate('LoginScreen');
    }

    const validation = async () => {
        let status = true;
        let err = {...formErr}
        const {fname, lname, email, password, confirm_password} = credentials;

        if(fname !== ''){
            status = false;
            err = {...err, fname: true}
        }else{
            status = true;
            err = {...err, fname: false}
        }

        if(lname !== ''){
            status = false;
            err = {...err, lname: true}
        }else{
            status = true;
            err = {...err, lname: false}
        }

        const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
        console.log("credentials", JSON.stringify(credentials, null, 4))
        console.log("email", email)
        console.log("(email === '' || !emailRegex.test(email)", email === '' || !emailRegex.test(email))
        if(email === '' || !emailRegex.test(email)){
            status = false;
            err = {...err, email: true}
        }else{
            err = {...err, email: false}
            status = true;
        }

        if(password === ''){
            status = false;
            err = {...err, password: true}
        }else{
            status = true;
            err = {...err, password: false}
        }

        if(confirm_password === '' || password !== confirm_password){
            status = false;
            err = {...err, confirm_password: true}
        }else{
            status = true;
            err = {...err, confirm_password: false}
        }

        setFormErr(err)
        return status;
    }

    console.log("formErr", formErr)

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Sign Up</Text>
                <View style={{marginBottom: 15}}>
                    <AppTextInput
                        label="First Name"
                        error={formErr.fname}
                        containerStyle={{marginBottom: 13}}
                        onChangeText={(text: string) => handleCredentials('fname', text)}
                        placeholder="John"
                    />
                    <AppTextInput
                        label="Last Name"
                        error={formErr.lname}
                        containerStyle={{marginBottom: 13}}
                        onChangeText={(text: string) => handleCredentials('lname', text)}
                        placeholder="Smith"
                    />
                    <AppTextInput
                        label="Email"
                        error={formErr.email}
                        containerStyle={{marginBottom: 13}}
                        onChangeText={(text: string) => handleCredentials('email', text)}
                        placeholder="Example@email.com"
                    />
                    <AppTextInput
                        label="Password"
                        error={formErr.password}
                        containerStyle={{marginBottom: 10}}
                        onChangeText={(text: string)  => handleCredentials('password', text)}
                        placeholder="******"
                    />
                    <AppTextInput
                        label="Confirm Password"
                        error={formErr.confirm_password}
                        containerStyle={{marginBottom: 10}}
                        onChangeText={(text: string)  => handleCredentials('confirm_password', text)}
                        placeholder="******"
                    />
                </View>
                <Button style={{borderRadius: 4, backgroundColor: '#1D24CA'}} mode="contained" onPress={() => handleSignUp()}>
                    Submit
                </Button>
                <Button style={{borderWidth: 0}} labelStyle={{ color: "#000000"}} mode="outlined" onPress={() => handleLogin()}>
                    Login
                </Button>
            </View>
        </View>
    )
}