import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const HomeComponent = React.lazy(() =>
  import("../Components/RootComponents/HomeComponent")
);
const HomePage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader__item"}>
        <Helmet>
          <title>Home || OwnFood</title>
          <meta name='description' content='Our OwnFood' />
        </Helmet>
        <HomeComponent />
      </Suspense>
    </Fragment>
  );
};

export default HomePage;
