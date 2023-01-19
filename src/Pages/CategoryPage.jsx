import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const CategoryComponent = React.lazy(() =>
  import("../Components/RootComponents/CategoryComponent")
);
const CategoryPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader__item"}>
        <Helmet>
          <title>Home || OwnFood</title>
          <meta name='description' content='Our OwnFood' />
        </Helmet>
        <CategoryComponent />
      </Suspense>
    </Fragment>
  );
};

export default CategoryPage;
