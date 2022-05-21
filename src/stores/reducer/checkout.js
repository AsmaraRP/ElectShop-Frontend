const initialState = {
  isError: false,
  isLoading: false,
  data: [],
  pageInfo: {},
  msg: "",
};
const checkout = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_CHECKOUT_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "CREATE_CHECKOUT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination,
        msg: action.payload.data.msg,
      };
    }
    case "CREATE_CHECKOUT_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: false,
        data: [],
        msg: action.payload.response.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default checkout;
