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
      <div className="flex items-center gap-8 mt-10">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-2"
          className="flex-2/3 flex flex-col gap-2"
        >
          {faqItems.map(faq => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className="shadow-sm border border-slate-100 rounded-lg flex-1"
            >
              <AccordionTrigger className="bg-white p-4 cursor-pointer no-underline hover:no-underline  text-slate-700 data-[state=open]:bg-indigo-50 data-[state=open]:text-indigo-600 data-[state=open]:font-bold transition-all">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-white shadow text-slate-600">
                {faq.reply}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="w-1/3 aspect-video relative">
          <Image src={FaqImg} alt="faq picture" fill placeholder="blur" />
        </div>
      </div>
    </section>
  );
};

export default Faq;
