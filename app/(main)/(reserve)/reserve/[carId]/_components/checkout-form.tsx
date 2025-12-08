"use client";

import { FC, useState } from "react";
import Stepper from "./stepper";
import SelectForm from "./select/select-form";
import Info from "./info/info";
import Payment from "./payment/payment";
import { isActiveDiscount } from "@/lib/utils";

type CheckoutFormProps = {
  price_day: string | number;
  price_month: string | number;
  guarranty: string | number;
  carName: string;
  min_Date: string;
  max_Date: string;
  carId: string;
  userId: string;
  discount: any;
};

const CheckoutForm: FC<CheckoutFormProps> = ({
  price_day,
  price_month,
  min_Date,
  max_Date,
  carName,
  guarranty,
  carId,
  userId,
  discount,
}) => {
  const [step, setStep] = useState(1);
  return (
    <>
      <Stepper steps={step} />
      {step == 1 && (
        <SelectForm
          price_day={price_day}
          price_month={price_month}
          min_Date={min_Date}
          max_Date={max_Date}
          setStep={setStep}
        />
      )}
      {step == 2 && <Info setStep={setStep} />}
      {step == 3 && (
        <Payment
          price_day={price_day}
          carName={carName}
          guarranty={guarranty}
          price_month={price_month}
          carId={carId}
          userId={userId}
          discount={discount}
        />
      )}
    </>
  );
};

export default CheckoutForm;
