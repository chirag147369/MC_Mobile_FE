/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, Text, View} from 'react-native';
import React, {Component} from 'react';
import {styles} from './styles';
import PagerView from 'react-native-pager-view';
import colors from '../../utility/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import urls from '../../utility/urls';
import http from '../../utility/http';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  getUser,
  NavigationRoutes,
  windowHeight,
  windowWidth,
} from '../../utility/util';
import {HeaderBar} from '../../components/HeaderBar';
import ActivityLoader from '../../components/ActivityLoader';
import LinearGradient from 'react-native-linear-gradient';
// import {images} from '../assests/images/images';
import {images} from '../../assests/images/images';

export class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishlist: [],
      showLoader: false,
    };
  }

  toggleLoader = showLoader => {
    this.setState({showLoader});
  };

  componentDidMount() {
    const {navigation} = this.props;
    navigation.setOptions({
      header: () => (
        <HeaderBar
          navigation={navigation}
          title="Help"
          onBackPress={() => navigation.goBack()}
        />
      ),
    });
  }

  render() {
    const {wishlist, showLoader} = this.state;
    return (
      <LinearGradient
        colors={[colors.secondary, colors.prime]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={{
          flex: 1,
          // justifyContent: 'center',
          alignItems: 'center',
          width: windowWidth,
          height: windowHeight,
        }}>
        <View
          style={{
            // flex: 1,
            width: windowWidth,
            height: windowHeight,
            // justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 40,
            paddingTop: 20,
            backgroundColor: colors.white,
          }}>
          {showLoader && <ActivityLoader showLoader={showLoader} />}

          <Image
            source={images.help_logo}
            style={styles.logo}
            resizeMode="stretch"
          />
          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                shadowColor: '#000000',
                elevation: 10,
                borderRadius: 5,
              }}>
              <Text
                style={{
                  fontSize: 24,
                  color: colors.black,
                  paddingLeft: 5,
                }}>
                For Any Queries You Can Contact Us On
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: colors.prime,
                  paddingBottom: 10,
                }}>
                +91-7389576808
              </Text>
            </View>
            <View style={{paddingVertical: 10}} />
            <View
              style={{
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                shadowColor: '#000000',
                elevation: 10,
                borderRadius: 5,
              }}>
              <Text
                style={{
                  fontSize: 24,
                  color: colors.black,
                  paddingHorizontal: 5,
                }}>
                You Can Also Email Us On Given Mail ID
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: colors.prime,
                  paddingBottom: 10,
                }}>
                Marketconveniencecustomercare@gmail.com
              </Text>
            </View>
          </View>

          {/* </LinearGradient> */}
        </View>
      </LinearGradient>
    );
  }
}

export default Help;
