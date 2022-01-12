import * as types from "../types";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: [],
  token: [],
  data:[]
};

const Auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        token:payload.token,
        data:payload
      };
    case types.LOGIN_FAIL:
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

export default Auth;
