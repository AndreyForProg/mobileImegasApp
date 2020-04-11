import {StyleSheet} from 'react-native';
import {w, h} from '../../constants';

export const styles = StyleSheet.create({
  mainPage: {
    width: w,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  image: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10,
    marginTop: 3,
    marginBottom: 1,
  },
  nameImg: {
    marginBottom: 3,
    color: 'grey',
    fontSize: 15,
    textAlign: 'center',
    width: w / 2.4,
    height: 20,
  },
  bigImage: {
    width: w,
    height: h,
  },
});
