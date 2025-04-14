import React from "react";

type DriverPageProps = {
  params: { slug: string };
};

export default function DriverPage({ params }: DriverPageProps) {
  const resolvedParams = React.use(Promise.resolve(params));

  return <div>DriverPage: {resolvedParams.slug}</div>;
}
