import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const ForgetPasswordComponent = React.lazy(() =>
  import("../Components/RootComponents/ForgetPasswordComponent")
);
const ForgetPasswordPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader__item"}>
        <Helmet>
          <title>Home || OwnFood</title>
          <meta name='description' content='Our OwnFood' />
        </Helmet>
        <ForgetPasswordComponent />
      </Suspense>
    </Fragment>
  );
};

export default ForgetPasswordPage;
