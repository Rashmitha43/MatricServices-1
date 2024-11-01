import * as types from "./actionTypes";

const initalState = {
  isLoading: false,
  isError: false,
  getInTouch: [],
  contactUs: [],
  campusAmbReg: [],
};

export const reducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    // Post Get in touch
    case types.POST_GET_IN_TOUCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.POST_GET_IN_TOUCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case types.POST_GET_IN_TOUCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: payload,
      };

    // Get Get in touch
    case types.GET_GET_IN_TOUCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        getInTouch: [],
      };

    case types.GET_GET_IN_TOUCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        getInTouch: payload,
      };

    case types.GET_GET_IN_TOUCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: payload,
        getInTouch: [],
      };

    // Post Contact Us
    case types.POST_CONTACT_US_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.POST_CONTACT_US_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case types.POST_CONTACT_US_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: payload,
      };

    // Get Contact Us
    case types.GET_CONTACT_US_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        contactUs: [],
      };

    case types.GET_CONTACT_US_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        contactUs: payload,
      };

    case types.GET_CONTACT_US_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: payload,
        contactUs: [],
      };

    // Post Campus Amb Reg
    case types.POST_CAMPUS_AMB_REG_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.POST_CAMPUS_AMB_REG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.POST_CAMPUS_AMB_REG_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: payload,
      };

    // Get Campus Amb Reg
    case types.GET_CAMPUS_AMB_REG_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        campusAmbReg: [],
      };
    case types.GET_CAMPUS_AMB_REG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        campusAmbReg: payload,
      };
    case types.GET_CAMPUS_AMB_REG_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: payload,
        campusAmbReg: [],
      };

    default: {
      return state;
    }
  }
};
