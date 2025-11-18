import prisma from "@/lib/prisma";

export async function seed() {
  await prisma.car.createMany({
    data: [
      // ------------------ بنز S500 ------------------
      {
        name: "بنز S500",
        model: 2018,
        brand: "mercedes",
        type: "Sedan",
        description:
          "مرسدس بنز S500 یکی از لوکس‌ترین سدان‌های دنیا است. این خودرو با سواری فوق‌العاده نرم، موتور قدرتمند و کابین فوق‌العاده راحت، مناسب سفرهای شهری و تشریفاتی می‌باشد.",
        mile_age: 10,
        capacity: 5,
        gear: "Automatic",
        steering: "Electric",
        fuel: "Gasoline",
        price_day: 4500000,
        price_month: 125000000,
        price_garranty: 60000000,
        cover: "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h31XTwpYVh6Vwro8skDKfTmc92FXBybIW3vSLz",
        images: ["s500-1.jpg", "s500-2.jpg"],
        features: [
          "گرمکن و تهویه صندلی",
          "سقف پانوراما",
          "سیستم PRE-SAFE",
          "نورپردازی داخلی 64 رنگ",
          "کروز کنترل هوشمند",
        ],
      },

      // ------------------ بنز LS کروک ------------------
      {
        name: "بنز LS کروک",
        model: 2014,
        brand: "mercedes",
        type: "Coupe",
        description:
          "بنز LS کروک یک خودروی کروک لوکس با طراحی منحصربه‌فرد و سیستم تعلیق نرم است. مناسب رانندگی تفریحی و تشریفاتی.",
        mile_age: 18,
        capacity: 4,
        gear: "Automatic",
        steering: "Electric",
        fuel: "Gasoline",
        price_day: 3800000,
        price_month: 95000000,
        price_garranty: 50000000,
        cover: "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3pq5Tmto2oOfdrvMTAqYiyHEXW5Lz68B0FJxD",
        images: ["ls-coupe-1.jpg", "ls-coupe-2.jpg"],
        features: [
          "سقف جمع‌شونده برقی",
          "صندلی برقی با مموری",
          "سیستم صوتی Burmester",
          "کروز کنترل",
        ],
      },

      // ------------------ بنز E250 ------------------
      {
        name: "بنز E250",
        model: 2016,
        brand: "mercedes",
        type: "Sedan",
        description:
          "بنز E250 خودرویی میان‌رده اما لوکس با امکانات رفاهی و امنیتی سطح بالا، مناسب استفاده روزمره و سفرهای شهری.",
        mile_age: 22,
        capacity: 5,
        gear: "Automatic",
        steering: "Hydraulic",
        fuel: "Gasoline",
        price_day: 2100000,
        price_month: 60000000,
        price_garranty: 25000000,
        cover: "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3XCXEk5N41Q5ckfuZTM86HF0zltLUPAdyYEVs",
        images: ["e250-1.jpg", "e250-2.jpg"],
        features: ["نورپردازی داخلی", "سیستم کنترل کشش", "سنسور جلو و عقب", "کروز کنترل"],
      },

      // ------------------ بنز CLS ------------------
      {
        name: "بنز CLS",
        model: 2017,
        brand: "mercedes",
        type: "Coupe",
        description:
          "مرسدس CLS یک کوپه چهاردر جذاب با طراحی اسپرت و عملکرد نرم و لوکس است. مناسب رانندگی تشریفاتی و اسپرت.",
        mile_age: 15,
        capacity: 4,
        gear: "Automatic",
        steering: "Electric",
        fuel: "Gasoline",
        price_day: 3200000,
        price_month: 89000000,
        price_garranty: 45000000,
        cover: "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3Yee9H8h6R4zrIsqcSJyUF3VTuK82awgpfkdh",
        images: ["cls-1.jpg", "cls-2.jpg"],
        features: ["سقف پانوراما", "سیستم Distronic", "گرمکن و سردکن صندلی", "سنسور پارک 360 درجه"],
      },

      // ------------------ بی ام و (سری 530 مثال) ------------------
      {
        name: "بی ام و 530i",
        model: 2018,
        brand: "bmw",
        type: "Sedan",
        description:
          "BMW 530i یک سدان لوکس اسپرت با عملکرد فوق‌العاده، هندلینگ عالی و کابین باکیفیت است.",
        mile_age: 20,
        capacity: 5,
        gear: "Automatic",
        steering: "Electric",
        fuel: "Gasoline",
        price_day: 3500000,
        price_month: 98000000,
        price_garranty: 45000000,
        cover: "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3MHNnsmgc0qFYmB1JoXhZzlT4xNeW6pjAsk3D",
        images: ["bmw530-1.jpg", "bmw530-2.jpg"],
        features: ["هدآپ دیسپلی", "پارک اتوماتیک", "نورپردازی داخلی", "سیستم صوتی Harman Kardon"],
      },

      // ------------------ لندکروز ------------------
      {
        name: "تويوتا لندکروز",
        model: 2013,
        brand: "toyota",
        type: "SUV",
        description:
          "لندکروز یکی از قوی‌ترین شاسی‌بلندهای دنیا با توانایی آفرود بالا و دوام بسیار زیاد است.",
        mile_age: 50,
        capacity: 7,
        gear: "Automatic",
        steering: "Hydraulic",
        fuel: "Gasoline",
        price_day: 4800000,
        price_month: 140000000,
        price_garranty: 70000000,
        cover: "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3golx7Z8ksEbMG1K5ltxjq64CWwDyROhmaSZA",
        images: ["landcruiser-1.jpg", "landcruiser-2.jpg"],
        features: [
          "قفل دیفرانسیل",
          "سیستم Crawl Control",
          "صندلی‌های بزرگ و راحت",
          "شاسی بسیار قوی",
        ],
      },

      // ------------------ هیوندای توسان ------------------
      {
        name: "هیوندای توسان",
        model: 2017,
        brand: "hyundai",
        type: "SUV",
        description:
          "هیوندای توسان یک کراس‌اوور محبوب با کیفیت سواری مناسب، ظاهری زیبا و مصرف سوخت مناسب است.",
        mile_age: 30,
        capacity: 5,
        gear: "Automatic",
        steering: "Electric",
        fuel: "Gasoline",
        price_day: 1500000,
        price_month: 38000000,
        price_garranty: 15000000,
        cover: "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h38AwLwXbVAKtZOYwimvy9GI4zdHPDBqa6eFoX",
        images: ["tucson-1.jpg", "tucson-2.jpg"],
        features: ["سقف پانوراما", "کروز کنترل", "مانیتور بزرگ", "سنسور باران"],
      },

      // ------------------ آزرا گرنجور ------------------
      {
        name: "هیوندای آزرا گرنجور",
        model: 2015,
        brand: "hyundai",
        type: "Sedan",
        description:
          "آزرا گرنجور یکی از سدان‌های لوکس هیوندای با فضای داخلی راحت و امکانات رفاهی فراوان است.",
        mile_age: 25,
        capacity: 5,
        gear: "Automatic",
        steering: "Electric",
        fuel: "Gasoline",
        price_day: 1800000,
        price_month: 50000000,
        price_garranty: 20000000,
        cover: "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3JAq7QSHCkn3G1dLh0ptwHM5rbN2VeosW8qJF",
        images: ["azera-1.jpg", "azera-2.jpg"],
        features: [
          "گرمکن و سردکن صندلی",
          "سقف پانوراما",
          "کروز کنترل هوشمند",
          "سیستم صوتی قدرتمند",
        ],
      },
    ],
  });
}

seed()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
