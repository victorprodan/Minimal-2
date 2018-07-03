import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.snow
  },
  container: {
    height: 90,
    width: theme.metrics.device.width - 17,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginVertical: 5,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGrey
  },
  avatarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  nameContainer: {
    flex: 3,
    justifyContent: 'center'
  },
  arrowContainer: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  nameText: {
    fontWeight: 'bold'
  },

  // no likes
  nolikesContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.metrics.device.height / 2 - 50
  },
  nolikesText: {
    fontSize: 17,
    color: theme.colors.purple
  }
});
