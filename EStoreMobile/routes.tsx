import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import AuthNavigation from './src/navigations/AuthNavigation';
import MainNavigation from './src/navigations/MainNavigation';
import { RootState } from './src/redux/store';

function Routes(): React.JSX.Element {
    const isConfirm = useSelector((state: RootState) => state.user.isConfirm);
    return (
        <NavigationContainer >
            {!isConfirm ? (
                <AuthNavigation />
            ) : (
                <MainNavigation />
            )}
        </NavigationContainer>
    );
}

export default Routes;
