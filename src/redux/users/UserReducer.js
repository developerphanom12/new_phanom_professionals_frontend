import {
  HIDE_LOADER,
  PORTFOLIO_DATA,
  SHOW_LOADER,
  UPLOAD_DATA,
  BOOKING_DATA
} from "./action";

const initialState = {
  user: {},
  userCheck: false,
  role: "",
  appDetails: {},
  isLoading: false,
  gigId: "",
  id: "",
  port:{},
  bookid:""
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_GIG_ID":
      return {
        ...state,
        gigId: action.payload,
      };
    case "USER_DATA":
      return {
        ...state,
        user: action.payload,
      };
    case "LOADING_DATA":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "USER_CHECK":
      return {
        ...state,
        userCheck: action.payload,
      };
    case "APP_DETAILS":
      return {
        ...state,
        appDetails: action.payload,
      };
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };
    case UPLOAD_DATA:
      return {
        ...state,
        id: action.payload,
      };
    case PORTFOLIO_DATA: // Handle the USER_DETAILS action
      return {
        ...state,
        port: action.payload, // Store user details in state
      };

    case BOOKING_DATA:
      return {
        ...state,
        bookid: action.payload, 
      };

    default:
      return state;
  }
};

export default UserReducer;
