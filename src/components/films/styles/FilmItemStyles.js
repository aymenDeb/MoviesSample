import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  image: {
    width: 100,
    height: 150,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  heartImg: {
    width: 26,
    height: 24,
    marginTop: -10,
    marginLeft: -10,
  },
});

export default styles;
