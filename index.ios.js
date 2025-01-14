import {NativeModules} from "react-native";

const {IGImagePicker} = NativeModules;
const defaultOption = {
  compressImageMaxWidth: 1024,
  compressImageMaxHeight: 2048,
  library: {
    maxNumberOfItems: 10,
    defaultMultipleSelection: false,
    minNumberOfItems: 1
  },
  video: {
    recordingTimeLimit: 60.0,
    libraryTimeLimit: 60,
    minimumTimeLimit: 3,
    trimmerMaxDuration: 60,
    trimmerMinDuration: 3
  },
  showsVideoTrimmer: true,
  showsPhotoFilters: true,
  usesFrontCamera: false,
  cropWidth: null,
  cropHeight: null
};

export const showImagePicker = (options = {}) => {
  return IGImagePicker.showImagePicker({...defaultOption, ...options});
};

export const libraryPicker = (options = {}) => {
  return IGImagePicker.libraryPicker({...defaultOption, ...options});
};

export const videoPicker = (options = {}) => {
  return IGImagePicker.videoPicker({...defaultOption, ...options});
};

export default {
  showImagePicker,
  libraryPicker,
  videoPicker
};
