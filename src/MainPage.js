import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';

import {getImages, setText} from './redux/MainPageReducer';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './styles/styles';

class MainPage extends Component {
  componentDidMount() {
    this.props.getImages();
  }

  render() {
    const {defoultImage} = this.props;
    const images = this.props.images.map(image => {
      const img = image.urls.small === null ? defoultImage : image.urls.small;
      return (
        <TouchableOpacity
          key={image.id}
          onPress={() => {
            this.props.navigation.navigate('Detail', {
              bigUrl: image.urls.regular,
            });
          }}>
          <Image style={styles.image} source={{uri: img}} />
          <Text style={styles.nameImg}>{image.alt_description}</Text>
        </TouchableOpacity>
      );
    });
    console.log(this.props);
    return (
      <ScrollView>
        <View style={styles.mainPage}>{images}</View>
      </ScrollView>
    );
  }
}

let mapStateToProps = state => ({
  store: state,
  defoultImage: state.images.defoultImage,
  images: state.images.images,
});

export default connect(
  mapStateToProps,
  {getImages, setText},
)(MainPage);
