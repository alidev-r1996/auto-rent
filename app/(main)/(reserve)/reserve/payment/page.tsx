import SuccessPayment from "./success";
import FailPayment from "./fail";
import Stepper from "../[carId]/_components/stepper";

const Page = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string }> }) => {
  const { status, refId } = await searchParams;
  return (
    <>
      <Stepper steps={5} />
      {status == "success" ? <SuccessPayment refId={refId} /> : <FailPayment refId={refId} />}
    </>
  );
};

export default Page;
