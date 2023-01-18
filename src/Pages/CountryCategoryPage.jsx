import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const CountryCategoryComponent = React.lazy(() =>
  import("../Components/RootComponents/CountryCategoryComponent")
);
const CountryCategoryPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader__item"}>
        <Helmet>
          <title>Country Category || OwnFood</title>
          <meta name='description' content='Our OwnFood' />
        </Helmet>
        <CountryCategoryComponent />
      </Suspense>
    </Fragment>
  );
};

export default CountryCategoryPage;
