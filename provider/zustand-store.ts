import { create } from "zustand";
import { persist } from "zustand/middleware";

type PersonalInfo = {
  name: string;
  phone: string;
  nationalId: string;
  address: string;
  insurance: "Basic" | "Premium";
};

type rentInfo = {
  receive_date: Date;
  receive_time: string;
  receive_location: "airport" | "east-port" | "south-port";
  return_date: Date;
  return_time: string;
  return_location: "airport" | "east-port" | "south-port";
  rent_type: "driver" | "none";
};

type ReservationState = {
  step: number;
  rentInfo: rentInfo;
  personalInfo: PersonalInfo;
  setStep: (step: number) => void;
  setPersonalInfo: (info: PersonalInfo) => void;
  setRentInfo: (info: rentInfo) => void;
  reset: () => void;
};

export const useReservationStore = create<ReservationState>()(
  persist(
    set => ({
      step: 1,
      rentInfo: {
        receive_date: new Date(),
        receive_time: "10:00",
        receive_location: "airport",
        return_date: new Date(),
        return_time: "10:00",
        return_location: "airport",
        rent_type: "none",
      },
      personalInfo: { name: "", phone: "", address: "", nationalId: "", insurance: "Basic" },
      setStep: step => set({ step }),
      setPersonalInfo: personalInfo => set({ personalInfo }),
      setRentInfo: rentInfo => set({ rentInfo }),
      reset: () =>
        set({
          step: 1,
          rentInfo: {
            receive_date: new Date(),
            receive_time: "10:00",
            receive_location: "airport",
            return_date: new Date(),
            return_time: "10:00",
            return_location: "airport",
            rent_type: "none",
          },
          personalInfo: { name: "", phone: "", address: "", nationalId: "", insurance: "Basic" },
        }),
    }),
    { name: "reservation-storage" }
  )
);
