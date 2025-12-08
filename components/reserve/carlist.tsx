// components/reserve/carlist.tsx
import CarCard from "./carcard";

const CarList = async () => {
  let cars: any[] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cars/main`, {
      next: { tags: ["cars"], revalidate: 120 }, 
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();
    cars = data.cars || [];
  } catch (error) {
    console.warn("خطا در دریافت خودروها در زمان build:", error);
  }

  return (
    <section className="max-w-[1690px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cars.length > 0 ? (
        cars.map((car, index) => <CarCard key={car.id || index} {...car} />)
      ) : (
        <p className="col-span-full text-center text-gray-500 py-10">
          خودروهایی برای نمایش وجود ندارد.
        </p>
      )}
    </section>
  );
};

export default CarList;