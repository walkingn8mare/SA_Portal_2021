import {
    VISITART_TEAM_CREATE_REQUEST,
    VISITART_TEAM_LIST_REQUEST,
    VISITART_TEAM_EDIT_REQUEST,
    VISITART_TEAM_DELETE_REQUEST,
  } from "../constants";
  import * as api from "../api";

  export const listTeam = () => async (dispatch) => {
    try {
      const { data } = await api.fetchVisitart();
      dispatch({
        type: VISITART_TEAM_LIST_REQUEST,
        payload: data.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const deleteTeam = (id) => async (dispatch) => {
    try {
      await api.deleteVisitart(id);
      dispatch({ type: VISITART_TEAM_DELETE_REQUEST, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createTeam = (formData) => async (dispatch) => {
    try {
      const { data } = await api.createVisitart(formData);
      console.log(data);
      dispatch({ type: VISITART_TEAM_CREATE_REQUEST, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const editTeam = (id, formData) => async (dispatch) => {
    try {
      const { data } = await api.editVisitart(id, formData);
      console.log(data);
      dispatch({ type: VISITART_TEAM_EDIT_REQUEST, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  