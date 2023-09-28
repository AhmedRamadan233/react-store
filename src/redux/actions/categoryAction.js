import { GET_ALL_CATEGORY, GET_ERROR } from "../type";
import useGetData from "../../hooks/useGetData";

const getAllCategory = () => async (dispatch) => {
  try {
    // const res = await baseUrl.get("/api/dashboard/categories");
    // console.log(res.data);

    const res = await useGetData("/api/dashboard/categories");
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
