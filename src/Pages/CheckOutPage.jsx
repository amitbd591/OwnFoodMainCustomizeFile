import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const CheckOutComponent = React.lazy(() =>
  import("../Components/RootComponents/CheckOutComponent")
);
const CheckOutPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader__item"}>
        <Helmet>
          <title>Home || OwnFood</title>
          <meta name='description' content='Our OwnFood' />
        </Helmet>
        <CheckOutComponent />
      </Suspense>
    </Fragment>
  );
};

export default CheckOutPage;
