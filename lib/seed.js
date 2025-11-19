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
        description: "مرسدس بنز S500 نماد لوکس‌بودن، کیفیت ساخت بی‌نظیر و سواری فوق‌العاده نرم است. این خودرو با موتور قدرتمند، تعلیق هوشمند و کابین بسیار آرام، تجربه‌ای تشریفاتی و بی‌رقیب ارائه می‌دهد. صندلی‌های راحت با تنظیمات کامل برقی، نورپردازی داخلی پیشرفته، و سیستم‌های ایمنی سطح بالا این خودرو را به انتخاب مناسب برای سفرهای شهری، بین‌شهری و مراسم خاص تبدیل کرده است. علاوه بر این، امکانات هوشمند رانندگی و شتاب‌گیری عالی باعث می‌شود سوارشدن بر S500 همواره لذت‌بخش و سطح بالا باشد.",
        mile_age: 10,
        capacity: 5,
        gear: "Automatic",
        steering: "Electric",
        fuel: "Gasoline",
        price_day: 4500000,
        price_month: 125000000,
        price_garranty: 60000000,
        cover: "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h31XTwpYVh6Vwro8skDKfTmc92FXBybIW3vSLz",
        images: [
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3gnzMfv8ksEbMG1K5ltxjq64CWwDyROhmaSZA",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h389QGIibVAKtZOYwimvy9GI4zdHPDBqa6eFoX",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3bif58X93GDCdw36xAuU5yoZelBFEkvWSYJPV",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3cttGEErjDbLHQZ72UMWXArIRqdTY89zkpN61",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3lXNS8XeTsXN6EFRyqDnPiabt4gHj5BMZQ8Io",
        ],
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
        description:"بنز LS کروک یک خودروی کروک لوکس و جذاب است که برای رانندگی تفریحی، سفرهای ساحلی و تجربه‌ای کاملاً متفاوت طراحی شده است. با سقف جمع‌شونده برقی، طراحی چشم‌نواز و سواری نرم، حس آزادی و لذت رانندگی را چند برابر می‌کند. موتور قدرتمند و کابین باکیفیت همراه با امکانات رفاهی کاربردی باعث می‌شود این خودرو برای مراسم، عکس‌برداری و دورهمی‌های خاص بهترین گزینه باشد. LS کروک ترکیبی زیبا از اسپرت و لوکس‌بودن را در قالبی کروک ارائه می‌دهد.",
        mile_age: 18,
        capacity: 4,
        gear: "Automatic",
        steering: "Electric",
        fuel: "Gasoline",
        price_day: 3800000,
        price_month: 95000000,
        price_garranty: 50000000,
        cover: "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3pq5Tmto2oOfdrvMTAqYiyHEXW5Lz68B0FJxD",
        images: [
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3BwOBblizwSTtu79VxqyHJF6AbXpOcfUrvDRK",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3HTLgm3R4dEj9ZDTaktQC3GLPV7Oy1vu2zlwi",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3d5o1ARkbnUoO8DlrCt5M1weH6uAymNVKYkiB",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3OqoHdsa6RHb9T0FvYc1rmjxWuQM8siyUS3Vg",
        ],
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
                  "مرسدس بنز E250 یک سدان لوکس میان‌رده است که تعادل فوق‌العاده‌ای میان راحتی، کیفیت ساخت و امکانات رفاهی ارائه می‌دهد. این خودرو با کابین جادار، صندلی‌های راحت و سواری نرم، گزینه‌ای ایده‌آل برای سفرهای روزمره و شهری است. سیستم‌های امنیتی قدرتمند، امکانات هوشمند و طراحی کلاسیک بنز باعث شده E250 همچنان یکی از محبوب‌ترین گزینه‌ها برای استفاده حرفه‌ای و خانوادگی باشد. مصرف سوخت مناسب در کنار عملکرد مطمئن آن را به خودرویی اقتصادی و هم‌زمان لوکس تبدیل کرده است.",
        mile_age: 22,
        capacity: 5,
        gear: "Automatic",
        steering: "Hydraulic",
        fuel: "Gasoline",
        price_day: 2100000,
        price_month: 60000000,
        price_garranty: 25000000,
        cover: "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3XCXEk5N41Q5ckfuZTM86HF0zltLUPAdyYEVs",
        images: [
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3plgjdfo2oOfdrvMTAqYiyHEXW5Lz68B0FJxD",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3RChyYOM826h3kKvLEe9RQybZouMrjPCVcfNS",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3znKmvD2ODkEJcjTumpZGrA20MaF4Qwb9S1ho",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3rNCwEuJIY9P7J1apwyHgANF5Mih4OfjcS6tx",
        ],
        features: ["نورپردازی داخلی", "سیستم کنترل کشش", "سنسور جلو و عقب", "کروز کنترل"],
      },

      // ------------------ بنز CLS ------------------
      {
        name: "بنز CLS",
        model: 2017,
        brand: "mercedes",
        type: "Coupe",
        description:
          "مرسدس بنز CLS یک کوپه چهاردر لوکس با طراحی بسیار جذاب و اسپرت است که ترکیبی از زیبایی، قدرت و راحتی را ارائه می‌دهد. این خودرو با کابین مدرن، صندلی‌های مجهز، نورپردازی داخلی و امکانات ایمنی پیشرفته، تجربه‌ای سطح بالا برای راننده و سرنشینان فراهم می‌کند. موتور قدرتمند و هندلینگ عالی باعث می‌شود CLS در سفرهای شهری و بین‌شهری عملکردی فوق‌العاده داشته باشد. این خودرو برای افراد علاقه‌مند به طراحی متفاوت و رانندگی لوکس گزینه‌ای بی‌نظیر محسوب می‌شود.",
        mile_age: 15,
        capacity: 4,
        gear: "Automatic",
        steering: "Electric",
        fuel: "Gasoline",
        price_day: 3200000,
        price_month: 89000000,
        price_garranty: 45000000,
        cover: "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3Yee9H8h6R4zrIsqcSJyUF3VTuK82awgpfkdh",
        images: [
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3PWZ4vVXCKN0QaU4h3bXduwZjio1eH6A8JpGR",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3Bw9e98VzwSTtu79VxqyHJF6AbXpOcfUrvDRK",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3barwMu3GDCdw36xAuU5yoZelBFEkvWSYJPVj",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h38ZZWGypbVAKtZOYwimvy9GI4zdHPDBqa6eFo",
        ],
        features: ["سقف پانوراما", "سیستم Distronic", "گرمکن و سردکن صندلی", "سنسور پارک 360 درجه"],
      },

      // ------------------ بی ام و (سری 530 مثال) ------------------
      {
        name: "بی ام و 530i",
        model: 2018,
        brand: "bmw",
        type: "Sedan",
        description:
          "BMW 530i یک سدان لوکس اسپرت است که به خاطر هندلینگ فوق‌العاده، کیفیت ساخت بالا و تجربه رانندگی پویا شناخته می‌شود. این خودرو با موتور قدرتمند، سیستم تعلیق دقیق و فرمان‌پذیری عالی، حس رانندگی اسپرت واقعی را منتقل می‌کند. کابین باکیفیت با نورپردازی زیبا، صندلی‌های راحت و امکانات هوشمند، آن را برای استفاده روزانه و سفرهای طولانی ایده‌آل می‌سازد. 530i یکی از محبوب‌ترین مدل‌های بی‌ام‌و در میان علاقه‌مندان به خودروهای لوکس و اسپرت است.",
        mile_age: 20,
        capacity: 5,
        gear: "Automatic",
        steering: "Electric",
        fuel: "Gasoline",
        price_day: 3500000,
        price_month: 98000000,
        price_garranty: 45000000,
        cover: "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3MHNnsmgc0qFYmB1JoXhZzlT4xNeW6pjAsk3D",
        images: [
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3j0zF0OopEq4oBw0leSFTbsHtNYnI2pLVJGXd",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3DC2pTtBuIyq9Jn1FODXjV6fRNQZorhlKwWtg",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3MbbL1uagc0qFYmB1JoXhZzlT4xNeW6pjAsk3",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h39Xo6xiWjZFD5AiTmWU9VSHxpdRw1CL4Meohv",
        ],
        features: ["هدآپ دیسپلی", "پارک اتوماتیک", "نورپردازی داخلی", "سیستم صوتی Harman Kardon"],
      },

      // ------------------ لندکروز ------------------
      {
        name: "تويوتا لندکروز",
        model: 2013,
        brand: "toyota",
        type: "SUV",
        description:
         "لندکروز یکی از قدرتمندترین و محبوب‌ترین شاسی‌بلندهای جهان است که به‌خاطر دوام فوق‌العاده، توانایی آفرود و کیفیت ساخت بی‌نظیر شناخته می‌شود. این خودرو برای مسیرهای سخت، سفرهای طولانی و شرایط جاده‌ای چالش‌برانگیز ساخته شده است. کابین جادار و صندلی‌های بزرگ آن مناسب خانواده‌ها و گروه‌های سفری است. لندکروز ترکیبی از قدرت، راحتی و قابلیت اطمینان را ارائه می‌دهد و همچنان یکی از بهترین انتخاب‌ها برای سفرهای خارج جاده‌ای و شهری محسوب می‌شود.",
        mile_age: 50,
        capacity: 7,
        gear: "Automatic",
        steering: "Hydraulic",
        fuel: "Gasoline",
        price_day: 4800000,
        price_month: 140000000,
        price_garranty: 70000000,
        cover: "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3golx7Z8ksEbMG1K5ltxjq64CWwDyROhmaSZA",
        images: [
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3XE8cCpN41Q5ckfuZTM86HF0zltLUPAdyYEVs",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3rRb88d3JIY9P7J1apwyHgANF5Mih4OfjcS6t",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3JYVXBcHCkn3G1dLh0ptwHM5rbN2VeosW8qJF",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3AFm34QE1Uqh5tfNKX8rcTbVFL6OJoIQ0wHgy",
        ],
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
          "هیوندای توسان یک کراس‌اوور محبوب و اقتصادی است که با طراحی مدرن، مصرف سوخت مناسب و امکانات رفاهی کاربردی شناخته می‌شود. این خودرو سواری نرم و راحتی ارائه می‌دهد و کابین آن برای خانواده‌ها و سفرهای روزانه کاملاً مناسب است. امکاناتی مانند سقف پانوراما، نمایشگر بزرگ و سیستم‌های ایمنی به‌روز، تجربه رانندگی را دلپذیر می‌کند. توسان انتخابی عالی برای رانندگان به دنبال خودرویی زیبا، کم‌مصرف و خانوادگی است.",
        mile_age: 30,
        capacity: 5,
        gear: "Automatic",
        steering: "Electric",
        fuel: "Gasoline",
        price_day: 1500000,
        price_month: 38000000,
        price_garranty: 15000000,
        cover: "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h38AwLwXbVAKtZOYwimvy9GI4zdHPDBqa6eFoX",
        images: [
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3RL0WvoM826h3kKvLEe9RQybZouMrjPCVcfNS",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3uOFKQ74Sxjp72BgUXFolMhDbdnQELZTOw3zt",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3htWBiYnTaN9nxpMIFvwzCsbL7i8jKeoEGcDV",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3HNNlYrR4dEj9ZDTaktQC3GLPV7Oy1vu2zlwi",
        ],
        features: ["سقف پانوراما", "کروز کنترل", "مانیتور بزرگ", "سنسور باران"],
      },

      // ------------------ آزرا گرنجور ------------------
      {
        name: "هیوندای آزرا گرنجور",
        model: 2015,
        brand: "hyundai",
        type: "Sedan",
        description:
          "آزرا گرنجور یکی از لوکس‌ترین سدان‌های هیوندای است که با فضای داخلی جادار، سواری نرم و امکانات رفاهی فراوان، تجربه‌ای آرام و لذت‌بخش ارائه می‌دهد. این خودرو با موتور قدرتمند، صندلی‌های مجهز، نورپردازی زیبا و عایق‌بندی عالی کابین یکی از بهترین گزینه‌ها برای سفرهای طولانی است. کیفیت ساخت بالا و امکانات ایمنی هوشمند آن باعث می‌شود آزرا گرنجور انتخابی مناسب برای خانواده‌ها و افراد علاقه‌مند به خودروهای راحت و لوکس باشد.",
        mile_age: 25,
        capacity: 5,
        gear: "Automatic",
        steering: "Electric",
        fuel: "Gasoline",
        price_day: 1800000,
        price_month: 50000000,
        price_garranty: 20000000,
        cover: "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3JAq7QSHCkn3G1dLh0ptwHM5rbN2VeosW8qJF",
        images: [
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3kZrrxqjKWEUnm3YAixb2rO6lvuPGzywV548e",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3KE5wgtOisZXzcb4Y73LOoEmU9QnG5wkJAgNl",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3Ik95HMchUmpz9FZe7B1M6cdu3wrjqfCRl2y8",
          "https://j4j4h3h02f.ufs.sh/f/RWRrdYM826h3YqtyUYh6R4zrIsqcSJyUF3VTuK82awgpfkdh",
        ],
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
