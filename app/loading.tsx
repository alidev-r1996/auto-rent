import Image from "next/image";

export default function Loading() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        <Image src="/assets/logo/header-logo.svg" alt="Logo" width={160} height={160}  className="animate-pulse"/>
      </div>

      <p className="mt-6 text font-semibold text-indigo-600 animate-pulse">
        در حال بارگذاری...
      </p>
    </section>
  );
}
