const SET_CONTENT = 'SET_CONTENT';
const IMAGES_FAILD = 'IMAGES_FAILD';
const SET_TEXT = 'SET_TEXT';

const initState = {
  defoultImage:
    'https://www.smallbizgenius.net/wp-content/uploads/2019/06/smallbizgenius_favicon.png',
  images: [],
  error: '',
};

const MainPageReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CONTENT: {
      return {
        ...state,
        images: action.images,
      };
    }
    case IMAGES_FAILD: {
      return {
        ...state,
        error: action.error,
      };
    }
    case SET_TEXT: {
      return {
        ...state,
        text: action.text,
      };
    }
    default:
      return state;
  }
};

export const setContentAC = images => ({
  type: SET_CONTENT,
  images,
});

export const setText = text => ({
  type: SET_TEXT,
  text,
});

export const setErrorAC = error => ({
  type: SET_CONTENT,
  error,
});

export const getImages = () => async dispatch => {
  function onSucces(success) {
    dispatch(setContentAC(success));
    return success;
  }
  function onError(error) {
    dispatch(() => setErrorAC(error));
  }
  try {
    const URL =
      'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';
    const res = await fetch(URL, {method: 'GET'});
    const success = await res.json();
    return onSucces(success);
  } catch (error) {
    return onError(error);
  }
};

export default MainPageReducer;
