import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const SingleRecipeCategoryAllFoodComponent = React.lazy(() =>
  import("../Components/RootComponents/SingleRecipeCategoryAllFoodComponent")
);
const SingleRecipeCategoryAllFoodPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader__item"}>
        <Helmet>
          <title>Home || OwnFood</title>
          <meta name='description' content='Our OwnFood' />
        </Helmet>
        <SingleRecipeCategoryAllFoodComponent />
      </Suspense>
    </Fragment>
  );
};

export default SingleRecipeCategoryAllFoodPage;
