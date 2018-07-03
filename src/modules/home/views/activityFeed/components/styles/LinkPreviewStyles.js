import { StyleSheet } from 'react-native';
import theme from '../../../../../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  detailsContainer: {
    borderWidth: 1,
    borderColor: theme.colors.lightGrey,
    padding: 10,
    flexDirection: 'row'
  },
  largeImageContainer: {
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: theme.colors.lightGrey,
    padding: 5
  },
  textContainer: {
    paddingRight: 20
  },
  image: {
    width: 30,
    height: 30
  },
  largeImage: {
    alignSelf: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
    paddingHorizontal: 10,
    backgroundColor: 'transparent'
  },
  description: {
    fontSize: 12,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    marginTop: 5
  }
});
