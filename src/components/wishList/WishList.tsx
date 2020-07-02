import React, {Component} from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import styles from './WishListStyles';
import Header from '../commons/Header';
import {connect} from 'react-redux';
import FilmList from '../films/FilmList';

interface Props {
  favoritesFilm: any[];
  navigation: any;
}

class WishList extends Component<Props> {
  render(): JSX.Element {
    const {favoritesFilm, navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <Text style={styles.title}>Ma Liste</Text>
        {this.renderFavFilms(favoritesFilm, navigation)}
      </SafeAreaView>
    );
  }

  renderFavFilms = (favoritesFilm: any[], navigation: any) => {
    if (favoritesFilm != null && favoritesFilm.length > 0) {
      return <FilmList films={favoritesFilm} navigation={navigation} />;
    }
    return (
      <View style={styles.blankView}>
        <Text style={styles.blankTxt}>
          Les films que vous likez apparaîtront ici.
        </Text>
      </View>
    );
  };
}

const mapStateToProps = (state: any) => {
  return {
    favoritesFilm: state.films.favoritesFilm,
  };
};

export default connect(mapStateToProps, {})(WishList);
