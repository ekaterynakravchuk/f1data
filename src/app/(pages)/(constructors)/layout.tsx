import React, { Suspense } from "react";

const ConstructorsLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Suspense fallback={<div>...Loading</div>}>{children}</Suspense>;
};

export default ConstructorsLayout;
