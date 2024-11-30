import * as types from "./actionTypes";

const initalState = {
  isLoading: false,
  isError: false,
  getInTouch: [],
  contactUs: [],
  campusAmbReg: [],
  workshopReg:[],
  workshopadd:[],
  productadd:[],
  workshopsingledata:{},
  productsingledata:{},


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

        //get workshop by id
      case types.GET_WORKSHOPID_REQUEST:
        return{
          ...state,
          isLoading:true,
          isError:false,
          workshopsingledata:{}
        }
      case types.GET_WORKSHOPID_SUCCESS:
       
        return{
          ...state,
          isLoading:false,
          isError:false,
          workshopsingledata:payload
        }
      case types.GET_WORKSHOPID_FAILURE:
        return{
          ...state,
          isLoading:false,
          isError:payload,
          workshopsingledata:{}
        }
      //patch workhop
      case types.PATCH_WORKSHOPID_REQUEST:
        return{
          ...state,
          isLoading:true,
          isError:false,
        }
      // case types.PATCH_WORKSHOPID_SUCCESS:
      //   return{
      //     ...state,
      //     isLoading:false,
      //     isError:false
      //   }
      case types.PATCH_WORKSHOPID_SUCCESS:
        return {
          ...state,
          workshopadd: state.workshopadd.map((workshop) =>
            workshop._id === payload._id ? { ...workshop, ...payload } : workshop
          ),
          workshopsingledata: payload,
          isLoading: false,
          isError: false,
        };
      
      

        
      case types.PATCH_WORKSHOPID_FAILURE:
        return{
          ...state,
          isLoading:false,
          isError:payload
        }
        //delete workshop
        case types.DELETE_WORKSHOPID_REQUEST:
          return{
            ...state,
            isLoading:true,
            isError:false
          }
        case types.DELETE_WORKSHOPID_SUCCESS:
          return{
            ...state,
            isLoading:false,
            isError:false
          }
        case types.DELETE_WORKSHOPID_FAILURE:
          return{
            ...state,
            isLoading:false,
            isError:true
          }
      

      //post products
      case types.POST_PRODUCT_REQUEST:
        return{
         ...state,
         isLoading:true,
         isError:false
        };
      case types.POST_PRODUCT_SUCCESS:
        return{
          ...state,
          isLoading:false,
          isError:false
        };
      case types.POST_PRODUCT_FAILURE:
        return{
        ...state,
        isLoading:false,
        isError:payload
        };

      //get products
      case types.GET_PRODUCT_REQUEST:
        return{
          ...state,
          isLoading:true,
          isError:false,
          productadd:[]
        };
      case types.GET_PRODUCT_SUCCESS:
        return{
          ...state,
          isLoading:false,
          isError:false,
          productadd:payload
        };
      case types.GET_PRODUCT_FAILURE:
        return{
          ...state,
          isLoading:false,
          isError:payload,
          productadd:[]
        };
      //get product by id
      case types.GET_PRODUCTID_REQUEST:
        return{
          ...state,
          isLoading:true,
          isError:false,
          productsingledata:{}
        };
      case types.GET_PRODUCTID_SUCCESS:
    
        return{
          ...state,
          isLoading:false,
          isError:false,
          productsingledata:payload
        };
      case types.GET_PRODUCTID_FAILURE:
        return{
          ...state,
          isLoading:false,
          isError:payload,
          productsingledata:{}
        };
        //patch products
      case types.PATCH_PRODUCTID_REQUEST:
        return{
          ...state,
          isLoading:true,
          isError:false
        };
      case types.PATCH_PRODUCTID_SUCCESS:
        return {
          ...state,
          workshopadd: state.workshopadd.map((workshop) =>
            workshop._id === payload._id ? { ...workshop, ...payload } : workshop
          ),
          workshopsingledata: { ...state.workshopsingledata, ...payload },
          isLoading: false,
          isError: false,
        };
      case types.PATCH_PRODUCTID_FAILURE:
        return{
          ...state,
          isLoading:false,
          isError:payload
        }
        //delete product
      case types.DELETE_PRODUCTID_REQUEST:
        return{
          ...state,
          isLoading:true,
          isError:false
        };
      case types.DELETE_PRODUCTID_SUCCESS:
        return{
          ...state,
          isLoading:false,
          isError:false
        };
      case types.DELETE_PRODUCTID_FAILURE:
        return{
          ...state,
          isLoading:false,
          isError:payload
        }


    default: {
      return state;
    }
  }
};
