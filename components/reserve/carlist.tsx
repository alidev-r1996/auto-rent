import CarCard from "./carcard";

const CarList = async ({ cars }) => {
  return (
    <section className="max-w-[1690px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cars.length > 0 && cars.map((i, index) => <CarCard key={index} {...i} />)}
    </section>
  );
};

export default CarList;
