import CarCard from "./carcard";

const CarList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cars`, {
    next: { revalidate: 36000 },
  });
  const { cars } = await res.json();

  return (
    <section className="max-w-[1690px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cars.map((i, index) => (
        <CarCard key={index} {...i} />
      ))}
    </section>
  );
};

export default CarList;
