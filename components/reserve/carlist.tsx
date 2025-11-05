import CarCard from "./carcard";

const CarList = () => {
  return (
    <section className="max-w-[1690px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
    </section>
  );
};

export default CarList;
