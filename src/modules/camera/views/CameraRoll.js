import PropTypes from 'prop-types';
import React from 'react';
import { CameraRoll, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles/CameraRollStyles';

class CameraRollView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Minimala: []
    };
  }

  componentDidMount() {
    const params = {
      first: 999,
      assetType: this.props.assetType
    };
    CameraRoll.getPhotos(params).then(r => {
      this.setState({ Minimala: r.edges });
    });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.state.Minimala.map((m, i) => (
          <TouchableOpacity
            key={i}
            activeOpacity={0.8}
            onPress={() => this.props.onMinimalaSelected(m.node.image.uri.replace('file://', ''))}
          >
            <Image style={styles.image} source={{ uri: m.node.image.uri }} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

CameraRollView.propTypes = {
  assetType: PropTypes.string.isRequired,
  onMinimalaSelected: PropTypes.func.isRequired
};

export default CameraRollView;
