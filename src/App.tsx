import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import MyTabs from './Router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

const App = () => {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <View style={styles.container}>
        <StatusBar backgroundColor={'#000000'} barStyle={'light-content'} />
        <MyTabs />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

export default App;
