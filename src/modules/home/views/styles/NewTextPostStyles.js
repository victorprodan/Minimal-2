import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  // level 1
  container: {
    flex: 1
  },
  // level 2
  headerContainer: {
    flexShrink: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: theme.colors.snow
  },
  postContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: theme.colors.snow
  },
  submitButtonContainer: {
    flexShrink: 1
  },
  // level 3
  textContainer: {
    justifyContent: 'center',
    flexDirection: 'column'
  },
  textInput: {
    flex: 1,
    fontSize: 26,
    color: theme.colors.primaryText,
    height: '100%',
    textAlignVertical: 'top'
  },
  buttonContainerStyle: {
    marginRight: 0,
    marginLeft: 0
  },
  buttonStyle: {
    paddingTop: 15,
    paddingBottom: 15
  },
  // level 4
  userName: {
    marginLeft: 15,
    fontSize: 22,
    fontWeight: '600',
    color: theme.colors.primaryText,
    width: theme.metrics.device.width - 90
  },
  // Community - component
  // level 1
  community: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  // level 2
  communityText: {
    marginLeft: 5,
    fontSize: 13,
    color: theme.colors.grey
  }
});
