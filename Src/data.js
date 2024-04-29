
const products = [
    {
        id: 1,
        dataType: "T-shirts",
        dataGender: "All",
        dataSize: "All",
        name: "Boom Horse T-shirt",
        image: "/images/BoomHorseTshirt.jpeg",
        price: "$28.32",
        descriptionP: `The unisex soft-style t-shirt puts a new spin on casual comfort. Made from very soft materials, this tee is 100% cotton for solid colors. Heather colors and sports grey include polyester. The shoulders have twill tape for improved durability. There are no side seams. The collar is made with ribbed knitting to prevent curling damage.`,
        descriptionL:`              
                    <ul>
                        <li>Made with 100% ring-spun cotton, a lightweight fabric (4.5 oz/yd² (153 g/m²)), this unisex t-shirt feels like a bliss to wear all year round.</li>
                        <li>The classic fit with the crew neckline deliver a clean, versatile style that can match any occasion, whether it's formal or semi-formal.</li>
                        <li>All shirts feature a pearlized, tear-away label for total wearing comfort.</li>
                        <li>Made using ethically grown and harvested US cotton. Gildan is also a proud member of the US Cotton Trust Protocol ensuring ethical and sustainable means of production. This blank tee is certified by Oeko-Tex for safety and quality assurance.</li>
                        <li>Fabric blends: Heather colors - 35% ring-spun cotton, 65% polyester; Sport Grey and Antique colors - 90% cotton, 10% polyester, Graphite Heather - 50% ring-spun cotton, 50% polyester</li>
                      </ul>`
    },
    {
        id: 2,
        dataType: "Hats",
        dataGender: "All",
        dataSize: "All",
        name: "Boom Horse Hat",
        image: "/images/BoomHorseHat.jpeg",
        price: "$19.99",
        descriptionP: `Made with 100% cotton twill for high-end comfort and durability, these custom distressed hats bring all the style and practicality one needs in daily life. The low profile along with the d-ring closure on a self-fabric hideaway strap ensures both proper protection from the sun and that perfect, adjustable fit.`,
        descriptionL:`            
                    <ul>
                        <li>100% cotton twill</li>
                        <li>Sewn-in label</li>
                        <li>Closure: self-fabric hideaway strap with metal D-ring slider</li>
                    </ul>`
    },
    {
        id: 3,
        dataType: "Stickers",
        dataGender: "None",
        dataSize: "None",
        name: "Boom Horse Logo Sticker",
        image: "/images/BoomHorseSticker.jpeg",
        price: "$19.99",
        descriptionP: `These die-cut transparent stickers come in 5x sizes and are perfect for both indoor and outdoor use. Thanks to their water-resistant vinyl construction, they can maintain their looks & colors, even against the elements. Great for customizing laptops, cars, motorcycles & so much more.`,
        descriptionL:`            
                    <ul>
                        <li>Material: water-resistant vinyl</li>
                        <li>Suitable for indoor and outdoor use</li>
                        <li>Assembled in the USA from globally sourced parts</li>
                    </ul>`
    },
    {
        id: 4,
        dataType: "Long-Sleeve",
        dataGender: "Mens",
        dataSize: "All",
        name: "Boom Horse LongSleeve",
        image: "/images/BoomHorseLongSleeve.jpeg",
        price: "$19.99",
        descriptionP: `Made with 100% brushed polyester, these long-sleeve tees deliver all the style and comfort one can handle.`,
        descriptionL:`            
                    <ul>
                        <li>Material: 100% polyester</li>
                        <li>Light fabric (5.16 oz/yd² (175 g/m²))</li>
                        <li>Assembled in the USA from globally sourced parts</li>
                    </ul>`
    },
    {
        id: 5,
        dataType: "LongSleeve",
        dataGender: "All",
        dataSize: "All",
        name: "Boom Horse Hoodie",
        image: "/images/BoomHorseHoodie.jpeg",
        price: "$19.99",
        descriptionP: `This unisex heavy blend hooded sweatshirt is relaxation itself. Made with a thick blend of cotton and polyester, it feels plush, soft and warm, a perfect choice for any cold day. In the front, the spacious kangaroo pocket adds daily practicality while the hood's drawstring is the same color as the base sweater for extra style points.`,
        descriptionL:`            
                    <ul>
                        <li>Made with a medium-heavy fabric (8.0 oz/yd² (271 g/m²)) that consists of 50% cotton and 50% polyester for that cozy feel and warmth you need in a hoodie.</li>
                        <li>The classic fit along with the pouch pocket and the tear-away label make for a highly comfortable, scratch-free wearing experience</li>
                        <li>The color-matched drawcord and the double-lined hood add a stylish flair and durability that tie everything together.</li>
                        <li>Made using 100% ethically grown US cotton. Gildan is also a proud member of the US Cotton Trust Protocol ensuring ethical and sustainable means of production.</li>
                    </ul>`
    },
    {
        id: 6,
        dataType: "Mugs",
        dataGender: "None",
        dataSize: "None",
        name: "Boom Horse Mug",
        image: "/images/BoomHorseMugFront.png",
        price: "$19.99",
        descriptionP: `Warm your soul with a nice cuppa out of this Boom Horse ceramic mug. It’s BPA and lead-free, microwave and dishwasher-safe, and made of black durable ceramic.`,
        descriptionL:`            
                    <ul>
                        <li>Material: 100% ceramic with a glossy finish</li>
                        <li>C-shaped easy-grip handle</li>
                        <li>Microwave and dishwasher safe</li>
                        <li>Lead and BPA-free</li>
                    </ul>`
    },
    {
        id: 7,
        dataType: "Tank-Tops",
        dataGender: "Womens",
        dataSize: "All",
        name: "Boom Horse Tank Top",
        image: "/images/BoomHorseTankTopGray.jpeg",
        price: "$19.99",
        descriptionP: `A high-quality slim fit tank-top will turn heads. Bystanders won't be disappointed - the racerback cut looks good on any woman's shoulders.`,
        descriptionL:`            
                    <ul>
                        <li>Made with extra light fabric (60% combed, ring-spun cotton and 40% polyester: 4 oz/yd² (135 g/m²)) this racerback tank is supremely lightweight and an excellent choice for the active lifestyle.</li>
                        <li>The classic fit along make the tank a comfortable choice under high performance while the scooped neckline brings a sporty touch to the whole outfit.</li>
                        <li>For a completely scratch-free experience, all tanks come with a tear-away label for unhindered performance on a daily basis.</li>
                    </ul>`
    },
    {
        id: 8,
        dataType: "Skateboards",
        dataGender: "None",
        dataSize: "None",
        name: "Boom Horse Skateboard",
        image: "/images/BoomHorseSkateboard.png",
        price: "$19.99",
        descriptionP: `Pulling from a number of different classic shapes, the old school deck embodies all the feel and attitude of the past. Solid and wide it will support even the biggest 40-plus skaters.`,
        descriptionL:`            
                    <ul>
                        <li>Skateboards are made from 100% Canadian Maple, the best wood for making skateboards, period. We don't cut any corners. This is the best there is.</li>
                    </ul>`
    }
];

//possibly use in future
const size = [{size: "X-Small",id:"XSmall"}, {size: "Small",id:"Small"}, {size: "Medium",id:"Medium"}, {size: "Large",id:"Large"}, {size: "X-large",id:"XLarge"}, {size: "XX-Large",id:"XXLarge"}];

const gender = [{gender: "Men's", id:"Mens"}, {gender: "Women's", id:"Womens"}, {gender: "Unisex", id:"Unisex"}];

const type = [{type: "Long Sleeve", id:"LongSleeve"}, {type: "T-shirts", id:"TShirts"}, {type: "Tank Tops", id:"TankTops"}, {type: "Hats", id:"Hats"}, {type: "Skateboards", id:"Skateboards"}, {type: "Stickers", id:"Stickers"}, {type: "Mugs", id:"Mugs"}];


export default {products, size, gender, type};