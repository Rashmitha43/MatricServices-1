import axios from "axios";
import * as types from "./actionTypes";

const api = `https://matricservices.onrender.com/api`;

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
