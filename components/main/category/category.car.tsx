import { CardCategory } from "./category.card";
import { carCategory } from "./category.constant";

const CarCategory = () => {
  return (
    <section className="max-w-[1690px] flex flex-col md:gap-8 mx-auto md:p-8 gap-2 p-2 my-8">
      <h2 className="font-bold md:text-4xl mb-4 text-2xl text-center flex items-center gap-4 justify-center">
        دسته‌بندی <p className="text-amber-400">خودروها</p>
      </h2>
      <div className="flex flex-wrap md:justify-center items-center gap-2 md:gap-8 mx-auto">
        {carCategory.map(i => (
          <CardCategory key={i.id} {...i} />
        ))}
        <p className="md:hidden size-40 mx-auto"></p>
      </div>
    </section>
  );
};

export default CarCategory;
