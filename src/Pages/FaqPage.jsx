import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const FaqComponent = React.lazy(() =>
  import("../Components/RootComponents/FaqComponent")
);
const FaqPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader__item"}>
        <Helmet>
          <title>Faq || OwnFood</title>
          <meta name='description' content='Our OwnFood' />
        </Helmet>
        <FaqComponent />
      </Suspense>
    </Fragment>
  );
};

export default FaqPage;
