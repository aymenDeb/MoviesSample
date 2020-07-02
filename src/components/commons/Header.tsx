import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {clickableZone} from '../../constants/commonFunctions';

interface Props {
  navigation?: any;
}

const Header: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.blankView}>
        {props.navigation ? (
          <TouchableWithoutFeedback
            hitSlop={clickableZone}
            onPress={() => props.navigation.goBack()}>
            <Image
              source={require('../../assets/img/back_arrow.png')}
              style={styles.backArrow}
            />
          </TouchableWithoutFeedback>
        ) : null}
      </View>
      <View style={styles.containerLogo}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/img/logo.png')}
        />
        <Text style={styles.title}>Hall Of Movies</Text>
      </View>
      <View style={styles.blankView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 40,
    height: 40,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    paddingLeft: 10,
  },
  backArrow: {
    width: 20,
    height: 15,
    margin: 10,
  },
  blankView: {
    width: 30,
    height: 20,
  },
});

export default Header;
