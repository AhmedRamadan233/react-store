import React, { useEffect } from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Uitily/Pagination";
import getAllCategory from "../../redux/actions/categoryAction";
// import { useSelector, useDispatch } from "react-redux"; // Import useDispatch to dispatch actions

const AllCategoryPage = () => {
  // const dispatch = useDispatch(); // Get the dispatch function from React-Redux
  // useEffect(() => {
  //   dispatch(getAllCategory());
  // }, [dispatch]); // Include dispatch in the dependency array to avoid warnings

  // const data = useSelector((state) => state.allCategory.category);
  // const loading = useSelector((state) => state.allCategory.loading);

  // console.log(data.data);
  // console.log(loading);
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer />
      <Pagination />
    </div>
  );
};

export default AllCategoryPage;
