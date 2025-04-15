import React, { Suspense } from "react";

const DriversLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Suspense fallback={<div>...Loading</div>}>{children}</Suspense>;
};

export default DriversLayout;
