import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const ShoppingDetailsComponent = React.lazy(() =>
  import("../Components/RootComponents/ShoppingDetailsComponent")
);
const ShoppingDetailsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader__item"}>
        <Helmet>
          <title>Home || OwnFood</title>
          <meta name='description' content='Our OwnFood' />
        </Helmet>
        <ShoppingDetailsComponent />
      </Suspense>
    </Fragment>
  );
};

export default ShoppingDetailsPage;
