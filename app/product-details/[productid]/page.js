"use client";
import BreadCrumb from "@/app/_components/BreadCrumb";
import React, { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import ProductBanner from "./_components/ProductBanner";
import ProductInfo from "./_components/ProductInfo";
import ProductList from "../../_components/ProductList";
import ProductApis from "../../_utils/ProductApis";

const ProductDetails = ({ params }) => {
  const path = usePathname();
  const [productDetails, setProductDetails] = useState({});
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProductById_();
  }, [params?.productid]);

  const getProductById_ = () => {
    ProductApis.getProductById(params?.productid).then((res) => {
      setProductDetails(res.data.data);
      getProductListByCategory(res.data.data);
    });
  };
  const getProductListByCategory = (product) => {
    ProductApis.getProductByCategory(product?.attributes.category).then(
      (res) => {
        setProductList(res?.data?.data);
      }
    );
  };
  return (
    <div className="px-10 py-8 md:px-28">
      <BreadCrumb path={path} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-0 mt-10 md:flex-row justify-around">
        <ProductBanner product={productDetails} />
        <ProductInfo product={productDetails} />
        <div>
          <h2 className="mt-24 mb-4 text-xl">Similar Products</h2>
          <ProductList productList={productList} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
