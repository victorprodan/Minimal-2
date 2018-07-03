import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EditModal from '../../../../../lib/views/EditModal';
import { Creators as HomeActions } from '../../../../home/reducer';

class EditPostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    this.hideModal = this.hideModal.bind(this);
    this.getDefaultValue = this.getDefaultValue.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  hideModal() {
    this.setState({ modalText: null });
    this.props.onModalStateChange('');
  }

  getDefaultValue() {
    if (
      !this.props.modalObject ||
      this.props.modalAction.endsWith('.comment') ||
      this.props.modalAction.endsWith('.reply')
    ) {
      return null;
    }
    return this.props.modalObject.text;
  }

  updateValue(value) {
    this.setState({ value });
  }

  onSave() {
    this.props.onSave(this.props.modalObject, this.props.modalAction, this.state.value);
  }

  render() {
    return (
      <EditModal
        shown={!!this.props.modalAction}
        onCancel={this.hideModal}
        busy={false}
        defaultValue={this.getDefaultValue()}
        multiline={true}
        saveDisabled={!this.state.value || this.state.value === this.getDefaultValue()}
        onChange={this.updateValue}
        onSave={this.onSave}
      />
    );
  }
}

EditPostModal.propTypes = {
  modalAction: PropTypes.string.isRequired,
  modalObject: PropTypes.object,
  onModalStateChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default connect(
  state => ({
    modalAction: state.home.modalAction,
    modalObject: state.home.modalObject
  }),
  {
    onModalStateChange: HomeActions.modalStateChanged,
    onSave: HomeActions.modalSave
  }
)(EditPostModal);
