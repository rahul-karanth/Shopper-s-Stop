import React from "react";
import "./FeaturedProduct.css";
import ProductCard from "../Products/ProductCard";
import ProductCardSkeleton from "../Products/ProductCardSkeleton";
import useData from "../../Hooks/useData";
const FeaturedProduct = () => {
  const { data, error, isLoading } = useData("/products/featured");
  const skeletons = [1, 2, 3];
  return (
    <section className="featured_products">
      <h2>Featured Products</h2>
      <div className="align_center featured_products_list">
        {isLoading
          ? skeletons.map((n) => <ProductCardSkeleton key={n} />)
          : data &&
            data.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;
