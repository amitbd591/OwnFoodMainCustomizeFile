import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const AllRecipeCategoryComponent = React.lazy(() =>
  import("../Components/RootComponents/AllRecipeCategoryComponent")
);
const AllRecipeCategoryPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader__item"}>
        <Helmet>
          <title>Home || OwnFood</title>
          <meta name='description' content='Our OwnFood' />
        </Helmet>
        <AllRecipeCategoryComponent />
      </Suspense>
    </Fragment>
  );
};

export default AllRecipeCategoryPage;
