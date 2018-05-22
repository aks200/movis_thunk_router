const initialState = {
  items: [],
  itemsLoading: false,
  itemsError: false
};
const types = {
  loading: "ITEM_LOADING",
  error: "ITEM_ERROR",
  itemsuccess: "ITEM_DATA_SUCCESS"
};
const ItemFetch = (state = initialState, action) => {
  switch (action.type) {
    case types.loading:
      console.log("ITEM_LOADING");
      return {
        ...state,
        itemsLoading: true
      };
    case types.error:
      console.log("ITEMRROR");
      return {
        ...state,
        itemsLoading: false,
        itemsError: true
      };

    case types.itemsuccess:
      console.log("my data", action.value);
      return {
        ...state,
        items: action.value,
        itemsLoading: false
      };

    default:
      return state;
  }
};

export default ItemFetch;
