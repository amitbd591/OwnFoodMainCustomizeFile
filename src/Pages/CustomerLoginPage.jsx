import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const CustomerLoginComponent = React.lazy(() =>
  import("../Components/RootComponents/CustomerLoginComponent")
);
const CustomerLoginPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader__item"}>
        <Helmet>
          <title>Customer Login || OwnFood</title>
          <meta name='description' content='Our OwnFood' />
        </Helmet>
        <CustomerLoginComponent />
      </Suspense>
    </Fragment>
  );
};

export default CustomerLoginPage;
