import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const SingleRecipeFoodComponent = React.lazy(() =>
  import("../Components/RootComponents/SingleRecipeFoodComponent")
);
const SingleRecipeFoodPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader__item"}>
        <Helmet>
          <title>Home || OwnFood</title>
          <meta name='description' content='Our OwnFood' />
        </Helmet>
        <SingleRecipeFoodComponent />
      </Suspense>
    </Fragment>
  );
};

export default SingleRecipeFoodPage;
