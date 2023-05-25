const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Product = require("../models/product");
const Category = require("../models/category");
const mongoose = require("mongoose");
const faker = require("faker");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  faker.seed(0);

  //----------------------Laptops
  const laptops_titles = [
    "Laptop Surface Laptop 4 Ryzen 5",
    "Laptop Dell XPS 15 9520 i9",
    "Laptop Apple MacBook Air M1 2020",
    "Laptop Lenovo IdeaPad 1 15AMN7 R5",
    "Laptop HP 15s fq2716TU",
    "Laptop Asus Vivobook X415EA",
    "Laptop itel SPIRIT 1",
    "Laptop MSI Modern 14 C11M i3",
    "Laptop HP Pavilion 15 eg2082TU i5",
    "Laptop Lenovo Legion 5 15IAH7 i5",
  ];
  const laptops_imgs = [
    "https://newtechshop.vn/wp-content/uploads/2021/11/Surface-Laptop-4-Ryzen-5-8GB-128GB-9.jpg",
    "https://newtechshop.vn/wp-content/uploads/2023/02/Dell-XPS-15-9520-i9-32GB-1TB-2-768x768.jpg",
    "https://cdn.tgdd.vn/Products/Images/44/231244/macbook-air-m1-2020-silver-01-org.jpg",
    "https://cdn.tgdd.vn/Products/Images/44/303562/lenovo-ideapad-1-15amn7-r5-82vg0061vn-glr-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/44/301634/hp-15s-fq2716tu-i3-7c0x3pa-glr-2.jpg",
    "https://cdn.tgdd.vn/Products/Images/44/304866/asus-vivobook-x415ea-i3-ek2034w-abc-glr-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/44/265530/itel-spirit-1-i3-71006300035-1-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/44/304539/msi-modern-14-c11m-i3-011vn-abc-glr-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/44/302533/hp-pavilion-15-eg2082tu-i5-7c0q5pa-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/44/292389/lenovo-legion-5-15iah7-i5-82rc003wvn-1-1.jpg",
  ];

  //--------------------PC
  const pc_titles = [
    "iMac 24 inch 2021 4.5K M1 PC",
    "Asus S501MD i5 PC",
    "HP Slim Desktop S01 pF2025d i5 PC",
    "Asus S501MD i5 PC",
    "Asus ExpertCenter AIO A3402WBAK i5 PC",
    "HP AIO 22 dd2002d i5 1235U PC",
    "HP AIO ProOne 240 G9 i5 PC",
    "Asus S500SD i5 12400 PC",
    "Dell Inspiron 3910 i5 12400 PC",
    "Lenovo IdeaCentre AIO 3 24IAP7 i5 PC",
    "MSI Creator P50 11SI i5 PC",
  ];

  const pc_imgs = [
    "https://cdn.tgdd.vn/Products/Images/5698/238053/imac-24-inch-45k-retina-m1-xanh-duong-1-org.jpg",
    "https://cdn.tgdd.vn/Products/Images/5698/304597/asus-s501md-i5-512400059w-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/5698/305833/hp-slim-desktop-s01-pf2025d-i5-6k7a3pa-abc-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/5698/305980/asus-s501md-i5-512400079w-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/5698/304413/asus-expertcenter-aio-a3402wbak-i5-wa066w-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/5698/293648/hp-aio-22-dd2002d-i5-6k7g1pa-1-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/5698/293650/hp-aio-proone-240-g9-i5-6m3v2pa-1-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/5698/304595/asus-s500sd-i5-512400050w-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/5698/305834/dell-inspiron-3910-i5-70297319-abc-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/5698/305765/lenovo-ideacentre-aio-3-24iap7-i5-f0gh00jwvn-glr-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/5698/290824/msi-creator-p50-11si-i5-058xvn-2-1.jpg",
  ];

  //--------------------Mini Bags
  const mobile_titles = [
    "Samsung Galaxy A24 6GB Phone",
    "OPPO Find N2 Flip 5G Phone",
    "IPhone 14 Pro Max",
    "Samsung Galaxy S21 FE 5G Phone",
    "Xiaomi Redmi 12C 64GB",
    "Samsung Galaxy S23 Ultra 5G 256GB Phone",
    "Xiaomi Redmi Note 12 8GB Phone",
    "Vivo Y35 Phone",
    "Samsung Galaxy S23+ 5G 256GB Phone",
    "iPhone 14 Plus 128GB Phone",
    "Samsung Galaxy Z Fold4 5G 256GB Phone",
    "Xiaomi 12T 5G 256GB Phone",
    "Xiaomi 13 5G Phone",
    "Samsung Galaxy A73 5G 128GB Phone",
  ];

  const mobile_imgs = [
    "https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-den-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/299034/oppo-n2-flip-tim-1-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/267211/samsung-galaxy-s21-fe-xanh-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/303575/xiaomi-redmi-12c-gray-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-xanh-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/303298/xiaomi-redmi-note-12-blue-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/286697/vivo-y35-vang-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/290829/samsung-galaxy-s23-plus-tim-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/245545/iphone-14-plus-ti-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/250625/samsung-galaxy-z-flod-4-den-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/291623/xiaomi-12t-glr-xanh-1-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/267984/xiaomi-13-den-glr-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/42/246195/samsung-galaxy-a73-1-1.jpg",
  ];

  //--------------------Large Handags

  const tablet_titles = [
    "iPad 9 WiFi Tablet",
    "iPad Pro M1 11 inch WiFi 2TB Tablet",
    "Samsung Galaxy Tab A8 (2022) Tablet",
    "Samsung Galaxy Tab S8 Ultra 5G Tablet",
    "iPad mini 6 WiFi Cellular 64GB Tablet",
    "iPad Air 5 M1 Wifi 64GB Tablet",
    "Lenovo Tab P11 Plus Tablet",
    "OPPO Pad Air 64GB Tablet",
    "Masstel Tab 10A Tablet",
    "Nokia Tab T20 WIFI Tablet",
    "iPad Pro M1 11 inch WiFi Cellular 2TB Tablet",
  ];
  const tablet_imgs = [
    "https://cdn.tgdd.vn/Products/Images/522/247517/ipad-9-wifi-trang-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/522/269328/ipad-pro-m1-11-inch-wifi-org-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/522/251704/samsung-galaxy-tab-a8-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/522/247513/samsung-galaxy-tab-s8-ultra-1-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/522/250734/ipad-mini-6-wifi-cellular-64gb-1-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/522/248096/ipad-air-5-m1-xanh-duong-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/522/244684/lenovo-tab-p11-plus-1-2.jpg",
    "https://cdn.tgdd.vn/Products/Images/522/281821/oppo-pad-air-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/522/260139/masstel-tab-10a-1-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/522/266337/nokia-tab-t20-wifi-1-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/522/269330/ipad-pro-m1-11-inch-wifi-cellular-bac-1.jpg",
  ];

  //-----------------------toy
  const watch_titles = [
    "CITIZEN C7 40 mm Watch",
    "Roberto Cavalli 42 mm Watch",
    "G-SHOCK 43.2 mm",
    "Xiaomi Redmi Watch 3 42.6mm Watch",
    "Xiaomi Redmi Watch 2 Lite 41.2mm Watch",
    "BeFit Sporty 2 44.5mm Watch",
    "Amazfit Bip 3 Pro 44.12mm Watch",
    "realme Watch 3 45mm dây silicone  Watch",
    "HONOR Watch GS3 45.9mm Watch",
  ];
  const watch_imgs = [
    "https://cdn.tgdd.vn/Products/Images/7264/234656/citizen-nh8395-77e-nam-2-org.jpg",
    "https://cdn.tgdd.vn/Products/Images/7264/305947/roberto-cavalli-rc5g049l0035-nam-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/7264/305814/g-shock-gm-5600g-9dr-nam-10.jpg",
    "https://cdn.tgdd.vn/Products/Images/7077/304166/redmi-watch-3-trang-11.jpg",
    "https://cdn.tgdd.vn/Products/Images/7077/262620/redmi-watch-2-lite-2-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/7077/296856/befit-sporty-2-hong-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/7077/283903/amazfit-bip-3-pro-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/7077/287056/realme-watch-3-day-silicone-den-1.jpg",
    "https://cdn.tgdd.vn/Products/Images/7077/285234/honor-watch-gs-3-day-cao-su-1-1.jpg",
  ];

  async function seedProducts(titlesArr, imgsArr, categStr) {
    try {
      const categ = await Category.findOne({ title: categStr });
      for (let i = 0; i < titlesArr.length; i++) {
        let prod = new Product({
          productCode: faker.helpers.replaceSymbolWithNumber("####-##########"),
          title: titlesArr[i],
          imagePath: imgsArr[i],
          description: faker.lorem.paragraph(),
          price: faker.random.number({ min: 10, max: 50 }),
          manufacturer: faker.company.companyName(0),
          available: true,
          category: categ._id,
        });
        await prod.save();
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }

  await seedProducts(laptops_titles, laptops_imgs, "Laptop");
  await seedProducts(pc_titles, pc_imgs, "PC");
  await seedProducts(mobile_titles, mobile_imgs, "Mobile");
  await seedProducts(tablet_titles, tablet_imgs, "Tablet");
  await seedProducts(watch_titles, watch_imgs, "Watch");

  await closeDB();
}

seedDB();
