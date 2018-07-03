import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  sectionsContainer: {
    flex: 1,
    paddingHorizontal: 15,
    flexDirection: 'column'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  listItemContainer: {
    backgroundColor: 'white'
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center'
  },
  versionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },

  formatColumns: {
    flexDirection: 'column'
  },
  settingsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '33%'
  },
  settingsSectionButtonLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: theme.colors.grey
  },
  settingsSectionButtonRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: theme.colors.lightGrey
  },
  notificationsTab: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  // RightChevron
  rightChevronContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },

  // MenuItem
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    backgroundColor: 'transparent'
  },
  menuIconStyle: {
    backgroundColor: 'transparent',
    marginLeft: 5
  },
  menuItemText: {
    color: theme.colors.primaryText,
    fontSize: 17,
    backgroundColor: 'transparent',
    paddingLeft: 10
  }
});
