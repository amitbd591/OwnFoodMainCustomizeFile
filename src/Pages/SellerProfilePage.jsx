import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const SellerProfileComponent = React.lazy(() =>
  import("../Components/RootComponents/SellerProfileComponent")
);
const SellerProfilePage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader__item"}>
        <Helmet>
          <title>Seller Profile || OwnFood</title>
          <meta name='description' content='Our OwnFood' />
        </Helmet>
        <SellerProfileComponent />
      </Suspense>
    </Fragment>
  );
};

export default SellerProfilePage;
