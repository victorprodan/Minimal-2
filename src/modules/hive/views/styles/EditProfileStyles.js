import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1
  },
  backgroundOpacity: {
    flex: 1,
    opacity: 0.95,
    backgroundColor: 'white'
  },
  textInput: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    fontSize: 17
  },
  multilineTextInput: {
    height: 150,
    width: '100%',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 17,
    fontWeight: '400',
    textAlignVertical: 'top'
  },

  // FilterOption
  optionContainer: {
    flex: 1,
    marginHorizontal: 10,
    minHeight: 50
  },
  optionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 7
  },
  optionContent: {
    flex: 1
  },
  optionTitleText: {
    fontSize: 10,
    color: theme.colors.primaryText,
    backgroundColor: 'transparent',
    paddingBottom: 4,
    paddingTop: 7
  },
  optionValueText: {
    fontSize: 17,
    color: theme.colors.primary,
    backgroundColor: 'transparent',
    paddingBottom: 7,
    flex: 1
  },
  optionIcon: {
    width: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  editIcon: {
    transform: [{ rotate: '45deg' }]
  }
});
