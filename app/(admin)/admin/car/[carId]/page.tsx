import AdminCarEditor from "./car.edit";

const Page = async ({ params }: { params: Promise<{ [carId: string]: string }> }) => {
  const { carId } = await params;
  return <AdminCarEditor id={carId} />;
};

export default Page;
