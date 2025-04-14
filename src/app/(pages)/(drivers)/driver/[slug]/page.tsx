

export default async function DriverPage({params}:{params: Promise<{slug: string}>}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  return <div>DriverPage: {slug}</div>;
}
