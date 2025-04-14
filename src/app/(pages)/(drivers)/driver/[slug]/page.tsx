import React from "react";

type DriverPageProps = Promise<{ slug: string }>;

export default async function DriverPage(props: { params: DriverPageProps }) {
  const { slug } = await props.params;

  return <div>DriverPage: {slug}</div>;
}
