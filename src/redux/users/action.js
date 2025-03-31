 
// Action Types
export const SHOW_LOADER = "SHOW_LOADER";
export const HIDE_LOADER = "HIDE_LOADER";
export const UPLOAD_DATA = "UPLOAD_DATA";
export const PORTFOLIO_DATA = "PORTFOLIO_DATA";
export const BOOKING_DATA = "BOOKING_DATA";


// Action Creators
export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};

export const updateGigId = (gigId) => {
  console.log("gigggId",gigId)
  return{
  type: "UPDATE_GIG_ID",
  payload: gigId,
}};
export const UserDetails = (data) => {
    return {
      type: "USER_DETAILS",
      payload: data,
    };
  };
  export const userDataAction = (data) => {
    return {
      type: "USER_DATA",
      payload: data,
    };
  };
  export const loaderAction = (data) => {
    return {
      type: "LOADING_DATA",
      payload: data,
    };
  };
  export const userCheckAction = (data) => {
    return {
      type: "USER_CHECK",
      payload: data,
    };
  };

  export const appDetailsAction = (data) => {
    return {
      type: "APP_DETAILS",
      payload: data,
    };
  };


  export const uploadData = (id) => {
    return {
      type: UPLOAD_DATA,
      payload: id,
    };
  };


  export const fortfolioData = (data) => {
    console.log("formfoliodata")
    return{
      type: PORTFOLIO_DATA,
      payload: data
    }

  }
 

  export const setBookingData = (bookid) => {
    console.log("book data")
    return{
      type: BOOKING_DATA,
      payload: bookid
    }

  }
 


  console.log(userDataAction,"userDataAction")

  