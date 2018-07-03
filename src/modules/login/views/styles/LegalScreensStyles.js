import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'flex-end'
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    flex: 10,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  vr: {
    height: 200,
    width: theme.metrics.device.width
  },

  // temp
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  },
  actionButtonIcon2: {
    fontSize: 20,
    height: 22,
    color: 'white'
  },
  footerContainer: {
    height: 100,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  drawerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  // text: {
  //   padding: 20,
  //   color: theme.colors.primaryText,
  //   fontSize: 12
  // },
  drawerButton: {
    marginBottom: 10,
    marginRight: 10
  },
  footerLogo: {
    marginLeft: 20,
    width: 100,
    height: 100
  },
  footerLogoTwo: {
    width: 75,
    height: 75,
    marginBottom: 9
  },
  titleBlack: {
    fontSize: 22,
    fontWeight: '400',
    color: theme.colors.primaryText
  },
  titleRed: {
    fontSize: 22,
    fontWeight: '500',
    color: '#F93348'
  },
  buttonContainer: {
    marginTop: 6,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#F93348',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#F93348',
    paddingTop: 1,
    fontWeight: '700',
    fontSize: 14,
    paddingHorizontal: 10
  },
  separator: {
    marginTop: 10,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#F93348',
    width: 50
  },
  separatorLarge: {
    marginTop: 10,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#F93348',
    width: 80
  }

  // footerContainer: {
  //   height: 100,
  //   width: '100%',
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'flex-end',
  //   alignItems: 'flex-end'
  // },
  // title: {
  //   fontWeight: 'bold',
  //   fontSize: 17,
  //   color: theme.colors.secondary
  // },
  // subtitle: {
  //   fontWeight: 'bold',
  //   fontSize: 15
  // }
});
