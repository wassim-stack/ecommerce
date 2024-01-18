import ProductItem from "./ProductItem";

const ProductList = ({ productList }) => {
  return (
    <div>
      {productList.map((item, i) => (
        <div
          key={i}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2"
        >
          <ProductItem product={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
