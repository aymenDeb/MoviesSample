import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  coverImg: {
    width: '100%',
    height: 200,
  },
  title: {
    color: 'white',
    fontSize: 16,
    marginVertical: 20,
    fontWeight: '700',
    paddingLeft: 10,
    alignSelf: 'center',
  },
  socialView: {
    alignSelf: 'center',
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  heartImg: {
    width: 26,
    height: 24,
  },
  shareImg: {
    width: 26,
    height: 26,
  },
  scoreTxt: {
    color: 'white',
    fontSize: 13,
    fontWeight: '400',
  },
  boldTxt: {
    fontSize: 15,
    fontWeight: '900',
  },
  descTxt: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
    marginHorizontal: 10,
    marginBottom: 5,
  },
  scrollView: {
    paddingBottom: 20,
  },
  margeTxt: {
    marginBottom: 20,
  },
});

export default styles;
