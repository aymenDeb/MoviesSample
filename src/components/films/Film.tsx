import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Share,
} from 'react-native';
import Header from '../commons/Header';
import {img_base_url} from '../../constants/constant';
import moment from 'moment';
import {connect} from 'react-redux';
import {toggleFavorite, setNetworkStatus} from '../../actions';
import {
  displayFavoriteImage,
  renderGenreCompanies,
  alertConnexion,
} from '../../constants/commonFunctions';
import {getFilmWithId} from '../../api/Api';
import Spinner from '../commons/Spinner';
import styles from './styles/FilmStyles';

interface Film {
  backdrop_path: string;
  original_title: string;
  vote_average: number;
  release_date: string;
  vote_count: number;
  genres: any[];
  production_companies: any[];
  title: string;
  overview: string;
  id: number;
}

interface State {
  film: Film | undefined;
  isLoading: boolean;
}

interface Props {
  navigation: any;
  toggleFavorite: (film: Film) => void;
  favoritesFilm: any[];
  route: any;
  setNetworkStatus: () => void;
  isConnected: boolean;
}

class Film extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      film: undefined,
      isLoading: true,
    };
  }
  render(): JSX.Element {
    const {film, isLoading} = this.state;
    const {navigation, favoritesFilm, isConnected} = this.props;
    const backdrop_path: string = film !== undefined ? film.backdrop_path : '';
    const original_title: string =
      film !== undefined ? film.original_title : '';
    const vote_average: number = film !== undefined ? film.vote_average : 0;
    const overview: string = film !== undefined ? film.overview : '';
    const vote_count: number = film !== undefined ? film.vote_count : 0;
    const release_date: string = film !== undefined ? film.release_date : '';
    const genres: any[] = film !== undefined ? film.genres : [];
    const production_companies: any[] =
      film !== undefined ? film.production_companies : [];
    const isFavorite: boolean = displayFavoriteImage(film, favoritesFilm);
    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} />
        {isLoading && isConnected ? (
          <Spinner />
        ) : (
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View>
              <Image
                source={
                  backdrop_path
                    ? {uri: img_base_url + backdrop_path}
                    : require('../../assets/img/placeholder.jpg')
                }
                style={styles.coverImg}
              />
            </View>
            <View>
              <Text style={styles.title}>{original_title}</Text>
            </View>
            {film ? (
              <View style={styles.socialView}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    this.props.toggleFavorite(film);
                  }}>
                  {this.renderFavIcon(isFavorite)}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() => {
                    this.shareFilm(film);
                  }}>
                  <Image
                    source={require('../../assets/img/share.png')}
                    style={styles.shareImg}
                  />
                </TouchableWithoutFeedback>
                <Text style={[styles.scoreTxt, styles.boldTxt]}>
                  {vote_average}
                  <Text style={styles.scoreTxt}>/10</Text>
                </Text>
              </View>
            ) : null}
            <View>
              <Text style={[styles.descTxt, styles.margeTxt]}>{overview}</Text>
              <Text style={styles.descTxt}>
                <Text style={styles.boldTxt}>Sorti Le : </Text>
                {moment(new Date(release_date)).format('DD/MM/YYYY')}
              </Text>
              <Text style={styles.descTxt}>
                <Text style={styles.boldTxt}>Nombre de votes : </Text>
                {vote_count}
              </Text>
              <Text style={styles.descTxt}>
                <Text style={styles.boldTxt}>Genre(s) : </Text>
                {renderGenreCompanies(genres)}
              </Text>
              <Text style={styles.descTxt}>
                <Text style={styles.boldTxt}>Companie(s) : </Text>
                {renderGenreCompanies(production_companies)}
              </Text>
            </View>
          </ScrollView>
        )}
        {!isConnected ? alertConnexion(this.getfilmDetail) : null}
      </SafeAreaView>
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

  componentDidMount() {
    this.getfilmDetail();
  }

  getfilmDetail = () => {
    const {route, setNetworkStatus} = this.props;
    getFilmWithId(route.params.film_id, setNetworkStatus).then((data) => {
      this.setState({
        film: data,
        isLoading: false,
      });
    });
  };

  shareFilm = async (film: Film) => {
    Share.share({message: film.title + '\n\n' + film.overview});
  };
}

const mapStateToProps = (state: any) => {
  return {
    favoritesFilm: state.films.favoritesFilm,
    isConnected: state.network.isConnected,
  };
};

export default connect(mapStateToProps, {toggleFavorite, setNetworkStatus})(
  Film,
);
