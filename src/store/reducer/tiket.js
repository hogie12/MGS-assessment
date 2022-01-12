import * as types from "../types";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: [],
  data:[],
  type:[]
};

const allTiket = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_ALL_TIKET_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_ALL_TIKET_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        data:payload
      };
    case types.GET_ALL_TIKET_FAIL:
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: payload,
      };
    case types.GET_ALL_TYPE_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_ALL_TYPE_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        type:payload
      };
    case types.GET_ALL_TYPE_FAIL:
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: payload,
      };
    default:
      return state;
  }
};

export default allTiket;
