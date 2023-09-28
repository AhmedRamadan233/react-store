import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import CategoryCard from "./../Category/CategoryCard";
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";
import { useDispatch, useSelector } from "react-redux";
import getAllCategory from "../../redux/actions/categoryAction";

const HomeCategory = () => {
  const dispatch = useDispatch(); // Get the dispatch function from React-Redux
  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]); // Include dispatch in the dependency array to avoid warnings

  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]
  return (
    <Container>
      <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {category.data
          ? category.data
              .slice(0,3)
              .map((item , index) => (
                <CategoryCard
                  key={item.id}
                  title={item.name}
                  img={item.image}
                  background={colors[index]}

                />
              ))
          : null}
      </Row>
    </Container>
  );
};

export default HomeCategory;
