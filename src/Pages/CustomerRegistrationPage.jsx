import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const CustomerRegistrationComponent = React.lazy(() =>
  import("../Components/RootComponents/CustomerRegistrationComponent")
);
const CustomerRegistrationPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader__item"}>
        <Helmet>
          <title>Customer Registration || OwnFood</title>
          <meta name='description' content='Our OwnFood' />
        </Helmet>
        <CustomerRegistrationComponent />
      </Suspense>
    </Fragment>
  );
};

export default CustomerRegistrationPage;
