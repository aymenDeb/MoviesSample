import React, {Component} from 'react';
import {FlatList} from 'react-native';

import FilmItem from './FilmItem';
import styles from './styles/FilmListStyles';
import {connect} from 'react-redux';
import {displayFavoriteImage} from '../../constants/commonFunctions';
interface Props {
  films: any[];
  navigation: any;
  loadFilms?: () => void;
  page?: number;
  totalPages?: number;
  favoritesFilm: any[];
}

interface State {
  films: any[];
}

class FilmList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      films: [],
    };
  }
  render(): JSX.Element {
    const {
      page,
      totalPages,
      loadFilms,
      favoritesFilm,
      films,
      navigation,
    } = this.props;
    return (
      <FlatList
        style={styles.list}
        data={films}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <FilmItem
            film={item}
            navigation={navigation}
            isFavorite={displayFavoriteImage(item, favoritesFilm)}
          />
        )}
        onEndReachedThreshold={0.5}
        numColumns={3}
        onEndReached={() => {
          if (
            page !== undefined &&
            totalPages !== undefined &&
            loadFilms !== undefined
          ) {
            if (page < totalPages) {
              loadFilms();
            }
          }
        }}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    favoritesFilm: state.films.favoritesFilm,
  };
};

export default connect(mapStateToProps, {})(FilmList);
