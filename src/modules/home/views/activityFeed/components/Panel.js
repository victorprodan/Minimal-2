import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { Text } from '../../../../../lib/Text';
import styles from './styles/PanelStyles';
import { Icon } from 'react-native-elements';
import theme from '../../../../../theme';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.toggle}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{this.props.title}</Text>
            <Icon
              containerStyle={styles.iconContainerStyle}
              size={20}
              name={this.state.expanded ? 'ios-arrow-up' : 'ios-arrow-down'}
              type="ionicon"
              color={theme.colors.snow}
            />
          </View>
        </TouchableWithoutFeedback>

        <View>{this.state.expanded ? this.props.children : null}</View>
      </View>
    );
  }
}

Panel.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default Panel;
