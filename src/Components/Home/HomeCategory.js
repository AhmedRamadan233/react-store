import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import CategoryCard from "./../Category/CategoryCard";
// import clothe from "../../images/clothe.png";
// import cat2 from "../../images/cat2.png";
// import labtop from "../../images/labtop.png";
// import sale from "../../images/sale.png";
import loadingImg from "../../images/22.gif";
import { useDispatch, useSelector } from "react-redux";
import getAllCategory from "../../redux/actions/categoryAction";
import "./HomeCategory.css";
const HomeCategory = () => {
  const dispatch = useDispatch(); // Get the dispatch function from React-Redux
  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]); // Include dispatch in the dependency array to avoid warnings

  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];
  const imgURL = "http://localhost:8000/images/";
  return (
    <Container>
      <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          category.data ? (
            category.data
              .slice(0, 5)
              .map((item, index) => (
                <CategoryCard
                  key={item.id}
                  title={item.name}
                  img={`${imgURL}${item.image}`}
                  background={colors[index]}
                />
              ))
          ) : null
        ) : (
          <div className="spinner-container">
            <Spinner
              animation="border"
              role="status"
              className="custom-spinner"
            >
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        )}
      </Row>
    </Container>
  );
};

export default HomeCategory;
