const initialState = {
  isError: false,
  isLoading: false,
  data: [],
  pageInfo: {},
  msg: "",
};
const product = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_PRODUCT_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "GET_DATA_PRODUCT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination,
        msg: action.payload.data.msg,
      };
    }
    case "GET_DATA_PRODUCT_REJECTED": {
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

export default product;
