import React, {Component} from 'react';
import {TouchableOpacity, Image} from 'react-native';

import {styles} from './styles/styles';

class Detail extends Component {
  render() {
    console.log(this.props);
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('MainPage')}>
        <Image
          style={styles.bigImage}
          source={{uri: this.props.route.params.bigUrl}}
        />
      </TouchableOpacity>
    );
  }
}

export default Detail;
