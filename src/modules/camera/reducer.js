import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    toggleVideoMode: null,

    takePicture: ['image'],
    selectMedia: ['media'],
    saveImage: ['imageUri', 'comment', 'shouldPost'],
    discardImage: null,

    takeVideo: ['video'],
    saveVideo: ['videoUri', 'comment'],
    startRecording: null,
    stopRecording: null,
    discardVideo: null,

    cameraError: ['error'],
    navigateHomeFromConfirmation: null,
    uploadSuccess: null,
    uploadFail: ['error']
  },
  { prefix: 'camera/' }
);

const initialState = {
  mediaUri: null,
  imageUri: null,
  videoUri: null,
  videoMode: false,
  recording: false
};

const toggleVideoMode = state => ({ ...state, videoMode: !state.videoMode });
const setMedia = (state, action) => ({ ...state, mediaUri: action.media });
const setImage = (state, action) => ({ ...state, imageUri: action.image });
const setVideo = (state, action) => ({ ...state, videoUri: action.video });
const startRecording = state => ({ ...state, recording: true });
const stopRecording = state => ({ ...state, recording: false });

export default createReducer(initialState, {
  [Types.TOGGLE_VIDEO_MODE]: toggleVideoMode,
  [Types.TAKE_PICTURE]: setImage,
  [Types.TAKE_VIDEO]: setVideo,
  [Types.START_RECORDING]: startRecording,
  [Types.STOP_RECORDING]: stopRecording,
  [Types.SELECT_MEDIA]: setMedia
});

export const image = state => state.camera.imageUri;
export const video = state => state.camera.videoUri;
