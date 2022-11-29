const INITIAL_STATE = {
  userData: {},
  isLoggedIn: false,
  storeLinkId: 0,
  delivering: false
};

const session = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case 'SESSION_LOGIN': {
      return { ...state, ...payload };
    }
    case 'SESSION_LOGOUT': {
      return { ...state, ...payload };
    }
    // case actionTypes.SESSION_USERDATA_UPDATE: {
    //   return {
    //     ...state,
    //     userData: { ...state.userData, DeliverName: payload },
    //   };
    // }
    // case actionTypes.SESSION_STORE_ID: {
    //   return { ...state, storeLinkId: payload };
    // }
    // case actionTypes.SESSION_DELIVERING: {
    //   return { ...state, delivering: payload };
    // }
    default: {
      return state;
    }
  }
};

export default session;
