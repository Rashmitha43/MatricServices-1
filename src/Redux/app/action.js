import axios from "axios";
import * as types from "./actionTypes";

// const api = `https://matricservices.onrender.com/api`;

const api=`http://localhost:2345/api`

// PostGetInTouchInfo
export const postGetInTouchInfo = (payload) => (dispatch) => {
  dispatch({ type: types.POST_GET_IN_TOUCH_REQUEST });

  return axios
    .post(api + "/getInTouch/addEvent", payload)
    .then((res) => {
      return dispatch({
        type: types.POST_GET_IN_TOUCH_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.POST_GET_IN_TOUCH_FAILURE,
        payload: err.message,
      });
    });
};

// Get GetInTouchInfo
export const getGetInTouchInfo = () => (dispatch) => {
  dispatch({ type: types.GET_GET_IN_TOUCH_REQUEST });

  return axios
    .get(api + "/getInTouch")
    .then((res) => {
      return dispatch({
        type: types.GET_GET_IN_TOUCH_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.GET_GET_IN_TOUCH_FAILURE,
        payload: err.message,
      });
    });
};

// Post ContactInfo
export const postContactInfo = (payload) => (dispatch) => {
  dispatch({ type: types.POST_CONTACT_US_REQUEST });

  return axios
    .post(api + "/contactUs/addEvent", payload)
    .then((res) => {
      return dispatch({
        type: types.POST_CONTACT_US_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.POST_CONTACT_US_FAILURE,
        payload: err.message,
      });
    });
};

// Get ContactInfo
export const getContactInfo = () => (dispatch) => {
  dispatch({ type: types.GET_CONTACT_US_REQUEST });

  return axios
    .get(api + "/contactUs")
    .then((res) => {
      return dispatch({
        type: types.GET_CONTACT_US_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.GET_CONTACT_US_FAILURE,
        payload: err.message,
      });
    });
};

// Post CampusAmbReg
export const postCampusAmbReg = (payload) => (dispatch) => {
  dispatch({ type: types.POST_CAMPUS_AMB_REG_REQUEST });

  return axios
    .post(api + "/campusAmbReg/addEvent", payload)
    .then((res) => {
      return dispatch({
        type: types.POST_CAMPUS_AMB_REG_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.POST_CAMPUS_AMB_REG_FAILURE,
        payload: err.message,
      });
    });
};

// Get CampusAmbReg
export const getCampusAmbReg = () => (dispatch) => {
  dispatch({ type: types.GET_CAMPUS_AMB_REG_REQUEST });

  return axios
    .get(api + "/campusAmbReg")
    .then((res) => {
      return dispatch({
        type: types.GET_CAMPUS_AMB_REG_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.GET_CAMPUS_AMB_REG_FAILURE,
        payload: err.message,
      });
    });
};

//post workshop register
export const postworkshopRegister=(payload)=>(dispatch)=>{
  dispatch({type:types.POST_WORKSHOP_REG_REQUEST});

  return axios
  .post(api + "/workShopRegister/addEventRegistration",payload)
  .then((res)=>{
    return dispatch({
      type:types.POST_WORKSHOP_REG_SUCCESS,
      payload:res.data,
    });
  })
  .catch((err)=>{
    return dispatch({
      type:types.POST_WORKSHOP_REG_FAILURE,
      payload:err.message,
    });
  })
};

//get workshop register
export const getworkshopRegister=()=>(dispatch)=>{
  dispatch({type:types.GET_WORKSHOP_REG_REQUEST});

  return axios
  .get(api + '/workShopRegister')
  .then((res)=>{
    return dispatch({
        type:types.GET_WORKSHOP_REG_SUCCESS,
        payload:res.data.data,
    });
  })
.catch((err)=>{
  return dispatch({
    type:types.GET_WORKSHOP_REG_FAILURE,
    payload:err.message,
  });
})
};

//post workshop
export const postWorkshop=(formdata)=>(dispatch)=>{
  dispatch({type:types.POST_WORKSHOP_REQUEST});
  console.log(formdata)
  return axios.post(api + "/adminWorkShop/addWorkShop",formdata)
  .then((res)=>{
    return dispatch({
      type:types.POST_WORKSHOP_SUCCESS,
      payload:res.data
    });
  })
  .catch((err)=>{
    return dispatch({
      type:types.POST_WORKSHOP_FAILURE,
      payload:err.message
    })
  })
}

//get workshop
export const getWorkshop=()=>(dispatch)=>{
  dispatch({type:types.GET_WORKSHOP_REQUEST})
  return axios
  .get(api+"/adminWorkShop")
  .then((res)=>{
    return dispatch({
      type:types.GET_WORKSHOP_SUCCESS,
      payload:res.data.data
    });
  })
  .catch((err)=>{
    return dispatch({
      type:types.GET_WORKSHOP_FAILURE,
      payload:err.message
    })
  })
}
