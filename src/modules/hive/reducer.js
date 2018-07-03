import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    deleteAccount: null,

    editProfileValueStarted: ['setting', 'value'],
    editProfileValueCancelled: null,
    editProfileSaveValue: null,
    editProfileValueChanged: ['value'],
    saveProfileSuccess: ['payload'],
    saveProfileError: ['error'],

    changeProfilePicture: null,
    cameraError: ['error'],
    uploadProfilePictureStarted: ['imageUrl'],
    uploadProfilePictureSuccess: ['payload'],
    uploadProfilePictureFail: ['payload'],

    openImageDetails: ['image'],
    deleteImage: ['id'],

    settingToggled: ['setting', 'value']
  },
  {
    prefix: 'hive/'
  }
);

const initialState = {
  profileSettingBeingEdited: null,
  busySavingProfile: false,
  profileSettingValue: null,
  selectedImage: null
};

const startProfileValueEdit = (state, action) => ({
  ...state,
  profileSettingBeingEdited: action.setting,
  profileSettingValue: action.value
});
const cancelProfileValueEdit = state => ({ ...state, profileSettingBeingEdited: null, profileSettingValue: null });
const saveProfileValue = state => ({ ...state, busySavingProfile: true });
const updateProfileValue = (state, action) => ({ ...state, profileSettingValue: action.value });
const saveProfileSuccess = state => ({ ...state, busySavingProfile: false, profileSettingBeingEdited: null });
const saveProfileError = state => ({ ...state, busySavingProfile: false, profileSettingBeingEdited: null });
const updateSelectedImage = (state, action) => ({ ...state, selectedImage: action.image });

export default createReducer(initialState, {
  [Types.EDIT_PROFILE_VALUE_STARTED]: startProfileValueEdit,
  [Types.EDIT_PROFILE_VALUE_CANCELLED]: cancelProfileValueEdit,
  [Types.EDIT_PROFILE_SAVE_VALUE]: saveProfileValue,
  [Types.EDIT_PROFILE_VALUE_CHANGED]: updateProfileValue,
  [Types.SAVE_PROFILE_SUCCESS]: saveProfileSuccess,
  [Types.SAVE_PROFILE_ERROR]: saveProfileError,
  [Types.OPEN_IMAGE_DETAILS]: updateSelectedImage
});

export const profileSettingBeingEdited = state => state.hive.profileSettingBeingEdited;
export const profileSettingValue = state => state.hive.profileSettingValue;
