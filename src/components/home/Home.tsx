import React, {Component} from 'react';
import {Text, SafeAreaView} from 'react-native';
import Header from '../commons/Header';
import SplashScreen from 'react-native-splash-screen';
import {getBestFilms} from '../../api/Api';
import FilmList from '../films/FilmList';
import Spinner from '../commons/Spinner';
import {connect} from 'react-redux';
import {getFavoriteList, setNetworkStatus} from '../../actions';
import {alertConnexion} from '../../constants/commonFunctions';
import styles from './HomeStyles';

interface Props {
  navigation: any;
  getFavoriteList: () => void;
  setNetworkStatus: () => void;
  isConnected: boolean;
}

interface State {
  films: any[];
  isLoading: boolean;
}

class Home extends Component<Props, State> {
  private totalPages: number;
  private page: number;
  constructor(props: Props) {
    super(props);
    this.page = 0;
    this.totalPages = 0;
    this.state = {
      films: [],
      isLoading: false,
    };
  }

  render(): JSX.Element {
    const {films, isLoading} = this.state;
    const {navigation, isConnected} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <Text style={styles.title}>Tendance actuelles {isConnected}</Text>
        <FilmList
          films={films}
          navigation={navigation}
          loadFilms={this.loadFilms}
          page={this.page}
          totalPages={this.totalPages}
        />
        {isLoading && isConnected ? <Spinner /> : null}
        {!isConnected ? alertConnexion(this.loadFilms) : null}
      </SafeAreaView>
    );
  }
  componentDidMount(): void {
    this.props.getFavoriteList();
    this.loadFilms();
    SplashScreen.hide();
  }

  loadFilms = () => {
    this.setState({isLoading: true});
    getBestFilms(this.page + 1, this.props.setNetworkStatus).then((data) => {
      this.page = data.page;
      this.totalPages = data.total_pages;
      this.setState({
        films: [...this.state.films, ...data.results],
        isLoading: false,
      });
    });
  };
}

const mapStateToProps = (state: any) => {
  return {
    isConnected: state.network.isConnected,
  };
};

export default connect(mapStateToProps, {getFavoriteList, setNetworkStatus})(
  Home,
);
