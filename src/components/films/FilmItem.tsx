import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {img_base_url} from '../../constants/constant';
import {connect} from 'react-redux';
import {toggleFavorite} from '../../actions';
import styles from './styles/FilmItemStyles';
import {clickableZone} from '../../constants/commonFunctions';
interface Film {
  id: number;
  poster_path: string;
}

interface Props {
  film: Film;
  navigation: any;
  toggleFavorite: (film: Film) => void;
  isFavorite: boolean;
}

class FilmItem extends Component<Props> {
  render(): JSX.Element {
    const {film, navigation, isFavorite} = this.props;
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('Film', {
              film_id: film.id,
            })
          }>
          <ImageBackground
            source={
              film.poster_path
                ? {uri: img_base_url + film.poster_path}
                : require('../../assets/img/placeholder.jpg')
            }
            style={styles.image}>
            <TouchableWithoutFeedback
              hitSlop={clickableZone}
              onPress={() => {
                this.props.toggleFavorite(film);
              }}>
              {this.renderFavIcon(isFavorite)}
            </TouchableWithoutFeedback>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  renderFavIcon = (isFavorite: boolean) => {
    if (isFavorite) {
      return (
        <Image
          style={styles.heartImg}
          source={require('../../assets/img/red_heart.png')}
        />
      );
    }
    return (
      <Image
        style={styles.heartImg}
        source={require('../../assets/img/white_heart.png')}
      />
    );
  };
}

export default connect(null, {toggleFavorite})(FilmItem);
