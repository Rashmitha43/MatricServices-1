import * as types from "./actionTypes";

const initalState = {
  isLoading: false,
  isError: false,
  getInTouch: [],
  contactUs: [],
  campusAmbReg: [],
  workshopReg:[],
  workshopadd:[]
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

    // post workshopreg
    case types.POST_WORKSHOP_REG_REQUEST:
      return{
        ...state,
        isLoading:true,
        isError:false
      };
    case types.POST_WORKSHOP_REG_SUCCESS:
      return{
        ...state,
        isLoading:false,
        isError:false
      };
    case types.POST_WORKSHOP_REG_FAILURE:
      return{
        ...state,
        isLoading:false,
        isError:payload
      };
    
      //get workshopreg
    case types.GET_WORKSHOP_REG_REQUEST:
      return{
       ...state,
       isLoading:true,
       isError:false,
       workshopReg:[]
      };
    case types.GET_WORKSHOP_REG_SUCCESS:
      return{
        ...state,
        isLoading:false,
        isError:false,
        workshopReg:payload
      };
    case types.GET_WORKSHOP_REG_FAILURE:
      return{
        ...state,
        isLoading:false,
        isError:payload,
        workshopReg:[]
      }

      //post workshop
    case types.POST_WORKSHOP_REQUEST:
      return{
       ...state,
       isLoading:true,
       isError:false
      };
    case types.POST_WORKSHOP_SUCCESS:
      return{
        ...state,
        isLoading:false,
        isError:true
      };
    case types.POST_WORKSHOP_FAILURE:
      return{
        ...state,
        isLoading:false,
        isError:payload
      };
      
      //get workshop
      case types.GET_WORKSHOP_REQUEST:
        return{
          ...state,
          isLoading:true,
          isError:false,
          workshopadd:[]
        };
      case types.GET_WORKSHOP_SUCCESS:
        return{
          ...state,
          isLoading:false,
          isError:false,
          workshopadd:payload
        };
      case types.GET_WORKSHOP_FAILURE:
        return{
          ...state,
          isLoading:false,
          isError:payload,
          workshopadd:[]
        }

    default: {
      return state;
    }
  }
};
