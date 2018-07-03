import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from '../../../lib/Text';
import * as Progress from 'react-native-progress';
import R from 'ramda';
import styles from './styles/UploadIndicatorStyles';
import theme from '../../../theme';

const UploadIndicator = ({ uploads }) => {
  if (R.isEmpty(uploads)) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.descriptionText}>Uploads in progress</Text>
      {Object.keys(uploads).map(file => (
        <View key={file} style={styles.bar}>
          <Progress.Bar
            progress={uploads[file]}
            width={theme.metrics.device.width - 30}
            useNativeDriver={true}
            borderRadius={3}
            color={theme.colors.primary}
          />
        </View>
      ))}
    </View>
  );
};

UploadIndicator.propTypes = {
  uploads: PropTypes.object.isRequired
};

export default UploadIndicator;
