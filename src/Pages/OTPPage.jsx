import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const OTPComponent = React.lazy(() =>
  import("../Components/RootComponents/OTPComponent")
);
const OTPPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader__item"}>
        <Helmet>
          <title>Customer Login || OwnFood</title>
          <meta name='description' content='Our OwnFood' />
        </Helmet>
        <OTPComponent />
      </Suspense>
    </Fragment>
  );
};

export default OTPPage;
