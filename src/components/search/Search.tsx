import React, {Component} from 'react';
import {TextInput, SafeAreaView, View} from 'react-native';
import Header from '../commons/Header';
import {getSearchedFilms} from '../../api/Api';
import Spinner from '../commons/Spinner';
import FilmList from '../films/FilmList';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './SearchStyles';
import {connect} from 'react-redux';
import {setNetworkStatus} from '../../actions';
import {alertConnexion} from '../../constants/commonFunctions';

interface Props {
  navigation?: any;
  isConnected: boolean;
  setNetworkStatus: () => void;
}

interface State {
  films: any[];
  searchTxt: string;
  isLoading: boolean;
}

class Search extends Component<Props, State> {
  private totalPages: number;
  private page: number;
  private timeout: any;
  constructor(props: Props) {
    super(props);
    this.timeout = 0;
    this.page = 0;
    this.totalPages = 0;
    this.state = {films: [], searchTxt: '', isLoading: false};
  }

  render(): JSX.Element {
    const {films, isLoading} = this.state;
    const {navigation, isConnected} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.inputView}>
          <MaterialCommunityIcons name="magnify" color={'#fff'} size={25} />
          <TextInput
            style={styles.textinput}
            placeholder="Recherchez un film par Titre..."
            placeholderTextColor="#fff"
            autoCorrect={false}
            onChangeText={(text) => this.getTextInputTxt(text)}
          />
        </View>
        <FilmList
          films={films}
          navigation={navigation}
          loadFilms={this.loadFilms}
          page={this.page}
          totalPages={this.totalPages}
        />
        {isLoading && isConnected ? <Spinner /> : null}
        {!isConnected ? alertConnexion(this.resetFilms) : null}
      </SafeAreaView>
    );
  }

  getTextInputTxt = (text: string) => {
    this.setState({searchTxt: text});
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.resetFilms();
    }, 500);
  };

  loadFilms = () => {
    const {searchTxt, films} = this.state;
    if (searchTxt.length > 0) {
      this.setState({isLoading: true});
      getSearchedFilms(
        searchTxt,
        this.page + 1,
        this.props.setNetworkStatus,
      ).then((data) => {
        this.page = data.page;
        this.totalPages = data.total_pages;
        this.setState({
          films: [...films, ...data.results],
          isLoading: false,
        });
      });
    }
  };

  resetFilms() {
    this.page = 0;
    this.totalPages = 0;
    this.setState(
      {
        films: [],
      },
      this.loadFilms,
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isConnected: state.network.isConnected,
  };
};

export default connect(mapStateToProps, {setNetworkStatus})(Search);
