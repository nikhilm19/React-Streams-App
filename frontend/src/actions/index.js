import streams from "../apis/streams";
import history from "../history";
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";
export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const res = await streams.post("/streams", { ...formValues, userId });
  history.push("/");

  dispatch({ type: CREATE_STREAM, payload: res.data });
};

export const fetchStreams = () => async (dispatch) => {
  const res = await streams.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: res.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const res = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: res.data });
};

export const editStream = (formValues, id) => async (dispatch) => {
  const res = await streams.put(`/streams/${id}`, formValues);
  dispatch({ type: FETCH_STREAM, payload: res.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: id });
};
