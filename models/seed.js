const reviewSchema = require("./review")

const monitors = [
    {
        name: "Dell U2723QE",
        description: "Features an IPS Black panel that shows deeper black colors. A USB hub with 5 USB-A and 3 USB-C ports.",
        screenSize: 27,
        resolution: "3840x2160",
        refreshRate: 60,
        responseTime: "5ms",
        panelType: "IPS",
        curved: false,
        category: "Office",
        photo: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u2723qe/media-gallery/monitor-u2723qe-gallery-2.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=471&qlt=100,1&resMode=sharp2&size=471,402&chrss=full"
    },
    {
        name: "Asus ProArt Display PA278CV",
        description: "Features an integrated USB-C port, factory calibrated and Calman Verified to deliver superb color accuracy, industry-standard 100% sRGB / 100% Rec. 709 color space coverage.",
        screenSize: 27,
        resolution: "2560x1440",
        refreshRate: 75,
        responseTime: "5ms",
        panelType: "IPS",
        curved: false,
        category: "Office",
        photo: "https://dlcdnwebimgs.asus.com/gain/e2956064-f3f1-4886-824a-e20dc0206153/w692"
    },
    {
        name: "LG 40WP95C-W",
        description: "Features autobrightness with ambient light sensor. Wider color spectrum, vibrant color reproduction with the support of HDR10.",
        screenSize: 40,
        resolution: "5120x2160",
        refreshRate: 72,
        responseTime: "5ms",
        panelType: "IPS",
        curved: true,
        category: "Office",
        photo: "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/30538bb2-cdde-41d2-ad7b-967ab86eff3d/md08001731-large01-jpg"
    },
    {
        name: "Gigabyte M32U",
        description: "World's first KVM gaming monitor.",
        screenSize: 32,
        resolution: "3840x2160",
        refreshRate: 144,
        responseTime: "1ms",
        panelType: "IPS",
        curved: false,
        category: "Gaming",
        photo: "https://www.gigabyte.com/Image/8e554ae8c9fe25b1201cfd45a548112d/Product/29526/webp/1000"
    },
    {
        name: "LG 27GR95QE-B",
        description: "World's first 240hz OLED monitor.",
        screenSize: 27,
        resolution: "2560x1440",
        refreshRate: 240,
        responseTime: "0.3ms",
        panelType: "OLED",
        curved: false,
        category: "Gaming",
        photo: "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/52474457-645f-4d1b-bbe6-3d7648cd5b09/md08003480-DZ-01"
    },
    {
        name: "LG UltraGear 34GP950G-B",
        description: "Features VESA DisplayHDR™ 600 to elevate visuals, Black Stabilizer® to balance darker contrasts.",
        screenSize: 34,
        resolution: "3440x1440",
        refreshRate: 180,
        responseTime: "1ms",
        panelType: "IPS",
        curved: true,
        category: "Gaming",
        photo: "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/f74fb7e5-cf6b-4bd6-8fd9-3f77cc41b7b6/md08000841-Z-01-jpg"
    },
    {
        name: "ViewSonic XG2431",
        description: "Blur Busters approved, capable of reaching <0.5ms MPRT response times. ",
        screenSize: 24,
        resolution: "1920x1080",
        refreshRate: 240,
        responseTime: "0.5ms",
        panelType: "IPS",
        curved: false,
        category: "Gaming",
        photo: "https://m.media-amazon.com/images/I/61AP9G5K2pL._AC_SL1500_.jpg"
    },
    {
        name: "Samsung Odyssey OLED G8",
        description: "OLED screen enhanced with the Neo Quantum Processor to improve color contrasts. Access to streaming services via Gaming Hub with Samsung's streaming technology.",
        screenSize: 34,
        resolution: "3440x1440",
        refreshRate: 175,
        responseTime: "0.03ms",
        panelType: "QD-OLED",
        curved: true,
        category: "Gaming",
        photo: "https://images.samsung.com/is/image/samsung/p6pim/ca/ls34bg850snxza/gallery/ca-odyssey-oled-g8-g85sb-ls34bg850snxza-534932670?$684_547_PNG$"
    },
]

module.exports = monitors