import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const ResetPasswordComponent = React.lazy(() =>
  import("../Components/RootComponents/ResetPasswordComponent")
);
const ResetPasswordPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader__item"}>
        <Helmet>
          <title>Customer Login || OwnFood</title>
          <meta name='description' content='Our OwnFood' />
        </Helmet>
        <ResetPasswordComponent />
      </Suspense>
    </Fragment>
  );
};

export default ResetPasswordPage;
