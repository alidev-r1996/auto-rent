import FaqImg from "@/public/assets/images/faq.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "./faq.constant";
import Image from "next/image";

const Faq = () => {
  return (
    <section className="max-w-[1690px] mx-auto mt-12">
      <h2 className="font-bold md:text-4xl mb-4 text-2xl text-center flex items-center gap-4 justify-center">
        سؤالات <p className="text-amber-400">متداول</p>
      </h2>
      <p className=" text-slate-400 text-center">پر تکرارترین سؤالاتی که پرسیدید</p>
      <div className="flex items-center gap-8 mt-10 p-4 md:h-90 ">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-2"
          className="md:flex-2/3 flex-1 flex flex-col gap-2"
        >
          {faqItems.map(faq => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className="shadow-sm border border-slate-100 rounded-lg flex-1  data-[state=open]:border-r-indigo-500 overflow-hidden data-[state=open]:border-r-4"
            >
              <AccordionTrigger className="bg-white text-right p-4 text-sm md:text-base cursor-pointer no-underline hover:no-underline text-slate-700 data-[state=open]:bg-indigo-50 data-[state=open]:text-indigo-500 data-[state=open]:font-bold transition-all !important">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-white shadow text-slate-500 leading-6 text-xs md:text-sm !important">
                {faq.reply}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="md:w-1/3 hidden md:block h-full relative">
          <Image src={FaqImg} alt="faq picture" fill placeholder="blur" />
        </div>
      </div>
    </section>
  );
};

export default Faq;
