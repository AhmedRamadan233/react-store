import React, { useEffect } from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Uitily/Pagination";
import getAllCategory from "../../redux/actions/categoryAction";
import { useDispatch } from "react-redux"; // Import useDispatch to dispatch actions

const AllCategoryPage = () => {
  const dispatch = useDispatch(); // Get the dispatch function from React-Redux
  useEffect(() => {
    // Dispatch the getAllCategory action when the component mounts
    dispatch(getAllCategory());
  }, [dispatch]); // Include dispatch in the dependency array to avoid warnings

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer />
      <Pagination />
    </div>
  );
};

export default AllCategoryPage;
