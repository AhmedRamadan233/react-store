import { GET_ALL_CATEGORY, GET_ERROR } from "../type";

import baseUrl from "../../Api/baseURL";

const getAllCategory = () => async (dispatch) => {
  try {
    const res = await baseUrl.get("/api/dashboard/categories");
    console.log(res.data);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
export default getAllCategory; // Don't forget to export your action creator
