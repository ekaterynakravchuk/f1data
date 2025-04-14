import { notFound } from "next/navigation";

type DriverPageProps = {
  params: { slug: string };
};

export default function DriverPage({ params }: DriverPageProps) {
  if (!params?.slug) return notFound();

  return <div>DriverPage: {params.slug}</div>;
}
