import SuccessPayment from "./success";
import FailPayment from "./fail";
import Stepper from "../[carId]/_components/stepper";

const Page = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string }> }) => {
  const { status, refId, authority, orderId } = await searchParams;
  return (
    <>
      <Stepper steps={5} />
      {status == "success" ? (
        <SuccessPayment refId={refId} orderId={orderId} />
      ) : (
        <FailPayment authority={authority} orderId={orderId} />
      )}
    </>
  );
};

export default Page;
