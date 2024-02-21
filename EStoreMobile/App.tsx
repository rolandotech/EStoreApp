import React from 'react';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import Routes from './routes';
import { PaperProvider } from 'react-native-paper';

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </Provider>
  );
}

export default App;
