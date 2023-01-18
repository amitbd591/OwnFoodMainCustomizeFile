import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const ProductsDetailsComponent = React.lazy(() =>
  import("../Components/RootComponents/ProductsDetailsComponent")
);
const ProductsDetailsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader__item"}>
        <Helmet>
          <title>Products Details || OwnFood</title>
          <meta name='Products Details Page' content='Our OwnFood' />
        </Helmet>
        <ProductsDetailsComponent />
      </Suspense>
    </Fragment>
  );
};

export default ProductsDetailsPage;
