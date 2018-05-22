import axios from "axios";
import ItemFetch from "../Reducer/ItemFetch";

function ItemActionCreator(url) {
  return async dispatch => {
    dispatch({
      type: "ITEM_LOADING",
      value: "true"
    });

    try {
      const response = await axios.get(url);
      console.log(response.data);
      dispatch({
        type: "ITEM_DATA_SUCCESS",
        value: response.data
      });
      console.log("value:", response.data);
    } catch (e) {
      dispatch({
        type: "ITEM_ERROR"
      });
      console.log(e);
    }
  };
}

export default ItemActionCreator;
