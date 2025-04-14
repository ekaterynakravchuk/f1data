type DriverPageProps = {
  params: {
    slug: string;
  };
};

export default function DriverPage({ params }: DriverPageProps) {
  return <div>DriverPage: {params.slug}</div>;
}
