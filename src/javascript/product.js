import SofaOne from '../home/images/sofa-one.png'
import ChairOne from '../home/images/chair-one.png'
import TableOne from '../home/images/tabel-one.png'
import VasOne from '../home/images/vash-one.png'
import LampOne from '../home/images/lamp-one.png'
import SectionalOne from '../home/images/sectional-one.png'


export     const products = [
  { id:"all", name:"Three Seater Sofa", price:45000, color:"Medium Grey",  rating:4.5, image:SofaOne },
  { id:"all", name:"Single Lounge Chair", price:12000, color:"Dark Grey", rating:4.1, image:ChairOne  },
  { id:"all", name:"Side Table", price:6000, color:"Dark Grey",  rating:4.1, image:TableOne },
  { id:"all", name:"Succulents Pot", price:2500, color:"Dark Charcoal",  rating:4.2, image:VasOne},
  { id:"all", name:"Floor Lamp", price:7500, color:"Soft White",  rating:4.4, image:LampOne },
  { id:"all", name:"Sectional Sofa", price:88000, color:"Muted Slate Blue",  rating:4.8, image:SectionalOne },

  { id:"sofa", name:"Three Seater Sofa", price:45000, color:"Medium Grey",  rating:4.5, image:SofaOne },
  { id:"sofa", name:"Two Seater Sofa", price:32000, color:"Emerald Green",  rating:4.2, image:"https://source.unsplash.com/400x300/?couch" },
  { id:"sofa", name:"L-Shaped Sofa", price:78000, color:"Charcoal Grey",  rating:4.7, image:"https://source.unsplash.com/400x300/?sectional-sofa" },
  { id:"sofa", name:"Recliner Sofa", price:65000, color:"Wine Red",  rating:4.6, image:"https://source.unsplash.com/400x300/?recliner" },
  { id:"sofa", name:"Sofa Cum Bed", price:52000, color:"Mustard Yellow",  rating:4.3, image:"https://source.unsplash.com/400x300/?sofa-bed" },
  { id:"sofa", name:"Sectional Sofa", price:88000, color:"Muted Slate Blue",  rating:4.8, image:SectionalOne },

  { id:"chair", name:"Single Lounge Chair", price:12000, color:"Dark Grey", rating:4.1, image:"https://source.unsplash.com/400x300/?lounge-chair" },
  { id:"chair", name:"Accent Chair", price:15000, color:"Ivory White", rating:4.4, image:"https://source.unsplash.com/400x300/?accent-chair" },
  { id:"chair", name:"Rocking Chair", price:18000, color:"Walnut Brown", rating:4.6, image:"https://source.unsplash.com/400x300/?rocking-chair" },
  { id:"chair", name:"Arm Chair", price:14000, color:"Olive Green", rating:4.2, image:"https://source.unsplash.com/400x300/?armchair" },
  { id:"chair", name:"Wingback Chair", price:22000, color:"Navy Blue", rating:4.7, image:"https://source.unsplash.com/400x300/?wingback-chair" },
  { id:"chair", name:"Bar Stool Chair", price:8000, color:"Matte Black", rating:4.0, image:"https://source.unsplash.com/400x300/?bar-stool" },

  { id:"table", name:"Coffee Table", price:10000, color:"Oak Finish", rating:4.3, image:"https://source.unsplash.com/400x300/?coffee-table" },
  { id:"table", name:"Dining Table", price:30000, color:"Mahogany Brown", rating:4.6, image:"https://source.unsplash.com/400x300/?dining-table" },
  { id:"table", name:"Side Table", price:6000, color:"Dark Grey", rating:4.1, image:"https://source.unsplash.com/400x300/?side-table" },
  { id:"table", name:"Console Table", price:14000, color:"Rust Orange", rating:4.4, image:"https://source.unsplash.com/400x300/?console-table" },
  { id:"table", name:"Bedside Table", price:7000, color:"Cream Beige", rating:4.2, image:"https://source.unsplash.com/400x300/?bedside-table" },
  { id:"table", name:"Study Table", price:18000, color:"Dark Walnut", rating:4.5, image:"https://source.unsplash.com/400x300/?study-table" },

  { id:"decorative", name:"Wall Art Frame", price:5000, color:"Golden Beige",  rating:4.3, image:"https://source.unsplash.com/400x300/?wall-art" },
  { id:"decorative", name:"Decorative Mirror", price:9000, color:"Antique Gold",  rating:4.6, image:"https://source.unsplash.com/400x300/?mirror-decor" },
  { id:"decorative", name:"Floor Lamp", price:7500, color:"Soft White",  rating:4.4, image:"https://source.unsplash.com/400x300/?floor-lamp" },
  { id:"decorative", name:"Table Lamp", price:3500, color:"Sky Blue",  rating:4.1, image:"https://source.unsplash.com/400x300/?table-lamp" },
  { id:"decorative", name:"Succulents Pot", price:2500, color:"Dark Charcoal",  rating:4.2, image:"https://source.unsplash.com/400x300/?plant-pot" },
  { id:"decorative", name:"Wall Shelf Decor", price:6500, color:"Pastel Lavender",  rating:4.5, image:"https://source.unsplash.com/400x300/?wall-shelf" }
];

export const showcaseProduct = [
  // 🛋️ SOFA
  { id: 1, category: "sofa", name: "Oak Wood White Sofa", price: 25000, rating: 4.5, isNew: true, isFeatured: true, image: "sofa1.jpg" },
  { id: 2, category: "sofa", name: "Velvet Blue Comfort Sofa", price: 32000, rating: 4.7, isNew: true, isFeatured: false, image: "sofa2.jpg" },
  { id: 3, category: "sofa", name: "Minimal Grey Fabric Sofa", price: 21000, rating: 4.2, isNew: false, isFeatured: true, image: "sofa3.jpg" },
  { id: 4, category: "sofa", name: "Classic Brown Leather Sofa", price: 40000, rating: 4.8, isNew: false, isFeatured: true, image: "sofa4.jpg" },
  { id: 5, category: "sofa", name: "Modern L Shape Sofa", price: 45000, rating: 4.6, isNew: true, isFeatured: true, image: "sofa5.jpg" },
  { id: 6, category: "sofa", name: "Compact Studio Sofa", price: 18000, rating: 4.1, isNew: true, isFeatured: false, image: "sofa6.jpg" },
  { id: 7, category: "sofa", name: "Premium Recliner Sofa", price: 55000, rating: 4.9, isNew: false, isFeatured: true, image: "sofa7.jpg" },
  { id: 8, category: "sofa", name: "Soft Cushion Beige Sofa", price: 27000, rating: 4.4, isNew: true, isFeatured: false, image: "sofa8.jpg" },
  { id: 9, category: "sofa", name: "Luxury Italian Sofa", price: 65000, rating: 4.9, isNew: false, isFeatured: true, image: "sofa9.jpg" },
  { id: 10, category: "sofa", name: "Wood Frame Fabric Sofa", price: 23000, rating: 4.3, isNew: true, isFeatured: false, image: "sofa10.jpg" },
  { id: 11, category: "sofa", name: "Urban Compact Sofa", price: 20000, rating: 4.2, isNew: false, isFeatured: false, image: "sofa11.jpg" },
  { id: 12, category: "sofa", name: "Royal Cushion Sofa Set", price: 48000, rating: 4.7, isNew: true, isFeatured: true, image: "sofa12.jpg" },

  // 🛋️ LARGE SOFA
  { id: 13, category: "large sofa", name: "Grand U Shape Sofa", price: 75000, rating: 4.8, isNew: true, isFeatured: true, image: "lsofa1.jpg" },
  { id: 14, category: "large sofa", name: "Luxury Sectional Sofa", price: 82000, rating: 4.9, isNew: false, isFeatured: true, image: "lsofa2.jpg" },
  { id: 15, category: "large sofa", name: "Family Size Fabric Sofa", price: 60000, rating: 4.5, isNew: true, isFeatured: false, image: "lsofa3.jpg" },
  { id: 16, category: "large sofa", name: "Modern Corner Sofa", price: 68000, rating: 4.6, isNew: true, isFeatured: true, image: "lsofa4.jpg" },
  { id: 17, category: "large sofa", name: "Wide Leather Sofa Set", price: 90000, rating: 4.9, isNew: false, isFeatured: true, image: "lsofa5.jpg" },
  { id: 18, category: "large sofa", name: "Elegant Living Room Sofa", price: 72000, rating: 4.7, isNew: true, isFeatured: false, image: "lsofa6.jpg" },
  { id: 19, category: "large sofa", name: "Classic Royal Sofa Set", price: 88000, rating: 4.8, isNew: false, isFeatured: true, image: "lsofa7.jpg" },
  { id: 20, category: "large sofa", name: "Soft Foam Corner Sofa", price: 64000, rating: 4.5, isNew: true, isFeatured: false, image: "lsofa8.jpg" },
  { id: 21, category: "large sofa", name: "Premium Lounge Sofa", price: 78000, rating: 4.7, isNew: false, isFeatured: true, image: "lsofa9.jpg" },
  { id: 22, category: "large sofa", name: "Designer Fabric Sofa", price: 70000, rating: 4.6, isNew: true, isFeatured: true, image: "lsofa10.jpg" },
  { id: 23, category: "large sofa", name: "Modern Luxury Sofa", price: 85000, rating: 4.9, isNew: false, isFeatured: true, image: "lsofa11.jpg" },
  { id: 24, category: "large sofa", name: "Wide Cushion Sofa Set", price: 73000, rating: 4.6, isNew: true, isFeatured: false, image: "lsofa12.jpg" },

  // 🪑 CHAIRS
  { id: 25, category: "chair", name: "Ergonomic Office Chair", price: 7000, rating: 4.5, isNew: true, isFeatured: true, image: "chair1.jpg" },
  { id: 26, category: "chair", name: "Wooden Dining Chair", price: 3500, rating: 4.2, isNew: true, isFeatured: false, image: "chair2.jpg" },
  { id: 27, category: "chair", name: "Modern Plastic Chair", price: 1200, rating: 4.0, isNew: false, isFeatured: false, image: "chair3.jpg" },
  { id: 28, category: "chair", name: "Cushioned Lounge Chair", price: 9000, rating: 4.6, isNew: true, isFeatured: true, image: "chair4.jpg" },
  { id: 29, category: "chair", name: "Luxury Leather Chair", price: 15000, rating: 4.8, isNew: false, isFeatured: true, image: "chair5.jpg" },
  { id: 30, category: "chair", name: "Foldable Study Chair", price: 2500, rating: 4.1, isNew: true, isFeatured: false, image: "chair6.jpg" },
  { id: 31, category: "chair", name: "Mesh Back Office Chair", price: 6500, rating: 4.4, isNew: false, isFeatured: true, image: "chair7.jpg" },
  { id: 32, category: "chair", name: "Rocking Chair Wooden", price: 11000, rating: 4.7, isNew: true, isFeatured: true, image: "chair8.jpg" },
  { id: 33, category: "chair", name: "Minimal Stool Chair", price: 1800, rating: 3.9, isNew: false, isFeatured: false, image: "chair9.jpg" },
  { id: 34, category: "chair", name: "Velvet Accent Chair", price: 9500, rating: 4.6, isNew: true, isFeatured: true, image: "chair10.jpg" },
  { id: 35, category: "chair", name: "Compact Balcony Chair", price: 2200, rating: 4.2, isNew: true, isFeatured: false, image: "chair11.jpg" },
  { id: 36, category: "chair", name: "Premium Lounge Chair", price: 13000, rating: 4.8, isNew: false, isFeatured: true, image: "chair12.jpg" },

  // 🍽️ TABLE
  { id: 37, category: "table", name: "Glass Top Dining Table", price: 15000, rating: 4.5, isNew: true, isFeatured: true, image: "table1.jpg" },
  { id: 38, category: "table", name: "Solid Wood Dining Table", price: 25000, rating: 4.7, isNew: false, isFeatured: true, image: "table2.jpg" },
  { id: 39, category: "table", name: "Compact Study Table", price: 8000, rating: 4.3, isNew: true, isFeatured: false, image: "table3.jpg" },
  { id: 40, category: "table", name: "Office Work Desk", price: 12000, rating: 4.4, isNew: true, isFeatured: true, image: "table4.jpg" },
  { id: 41, category: "table", name: "Marble Finish Table", price: 18000, rating: 4.6, isNew: false, isFeatured: true, image: "table5.jpg" },
  { id: 42, category: "table", name: "Foldable Coffee Table", price: 5000, rating: 4.1, isNew: true, isFeatured: false, image: "table6.jpg" },
  { id: 43, category: "table", name: "Minimal Side Table", price: 3000, rating: 4.0, isNew: false, isFeatured: false, image: "table7.jpg" },
  { id: 44, category: "table", name: "Luxury Dining Table Set", price: 40000, rating: 4.8, isNew: true, isFeatured: true, image: "table8.jpg" },
  { id: 45, category: "table", name: "Rustic Wooden Table", price: 14000, rating: 4.5, isNew: false, isFeatured: true, image: "table9.jpg" },
  { id: 46, category: "table", name: "Modern Console Table", price: 9000, rating: 4.3, isNew: true, isFeatured: false, image: "table10.jpg" },
  { id: 47, category: "table", name: "Classic Coffee Table", price: 7000, rating: 4.2, isNew: false, isFeatured: false, image: "table11.jpg" },
  { id: 48, category: "table", name: "Designer Center Table", price: 16000, rating: 4.7, isNew: true, isFeatured: true, image: "table12.jpg" },

  // 🎨 DECORATIVE
  { id: 49, category: "decorative", name: "Golden Vase Decor", price: 2000, rating: 4.5, isNew: true, isFeatured: true, image: "decor1.jpg" },
  { id: 50, category: "decorative", name: "Modern Table Lamp", price: 3500, rating: 4.6, isNew: true, isFeatured: false, image: "decor2.jpg" },
  { id: 51, category: "decorative", name: "Ceramic Flower Pot", price: 1200, rating: 4.2, isNew: false, isFeatured: false, image: "decor3.jpg" },
  { id: 52, category: "decorative", name: "Luxury Candle Stand", price: 1800, rating: 4.4, isNew: true, isFeatured: true, image: "decor4.jpg" },
  { id: 53, category: "decorative", name: "Minimal Desk Decor", price: 900, rating: 4.1, isNew: false, isFeatured: false, image: "decor5.jpg" },
  { id: 54, category: "decorative", name: "Classic Antique Decor", price: 4200, rating: 4.7, isNew: true, isFeatured: true, image: "decor6.jpg" },
  { id: 55, category: "decorative", name: "Modern Sculpture Piece", price: 5000, rating: 4.8, isNew: false, isFeatured: true, image: "decor7.jpg" },
  { id: 56, category: "decorative", name: "Wall Corner Decor Set", price: 2500, rating: 4.3, isNew: true, isFeatured: false, image: "decor8.jpg" },
  { id: 57, category: "decorative", name: "Glass Art Piece", price: 3200, rating: 4.6, isNew: false, isFeatured: true, image: "decor9.jpg" },
  { id: 58, category: "decorative", name: "Luxury Showpiece Decor", price: 6000, rating: 4.9, isNew: true, isFeatured: true, image: "decor10.jpg" },
  { id: 59, category: "decorative", name: "Small Table Decor", price: 800, rating: 4.0, isNew: false, isFeatured: false, image: "decor11.jpg" },
  { id: 60, category: "decorative", name: "Artistic Metal Decor", price: 3700, rating: 4.5, isNew: true, isFeatured: true, image: "decor12.jpg" },

  // 🖼️ WALL HANGINGS
  { id: 61, category: "wall hangings", name: "Abstract Wall Painting", price: 4500, rating: 4.6, isNew: true, isFeatured: true, image: "wall1.jpg" },
  { id: 62, category: "wall hangings", name: "Wooden Wall Frame", price: 2500, rating: 4.3, isNew: false, isFeatured: false, image: "wall2.jpg" },
  { id: 63, category: "wall hangings", name: "Modern Canvas Art", price: 6000, rating: 4.8, isNew: true, isFeatured: true, image: "wall3.jpg" },
  { id: 64, category: "wall hangings", name: "Minimal Wall Clock", price: 1800, rating: 4.2, isNew: false, isFeatured: false, image: "wall4.jpg" },
  { id: 65, category: "wall hangings", name: "Luxury Metal Wall Art", price: 8500, rating: 4.9, isNew: true, isFeatured: true, image: "wall5.jpg" },
  { id: 66, category: "wall hangings", name: "Traditional Wall Decor", price: 3000, rating: 4.4, isNew: true, isFeatured: false, image: "wall6.jpg" },
  { id: 67, category: "wall hangings", name: "Framed Nature Art", price: 4200, rating: 4.5, isNew: false, isFeatured: true, image: "wall7.jpg" },
  { id: 68, category: "wall hangings", name: "Geometric Wall Design", price: 5000, rating: 4.6, isNew: true, isFeatured: true, image: "wall8.jpg" },
  { id: 69, category: "wall hangings", name: "Vintage Wall Clock", price: 3500, rating: 4.3, isNew: false, isFeatured: false, image: "wall9.jpg" },
  { id: 70, category: "wall hangings", name: "Luxury Frame Art Set", price: 9200, rating: 4.9, isNew: true, isFeatured: true, image: "wall10.jpg" },
  { id: 71, category: "wall hangings", name: "Simple Canvas Print", price: 2000, rating: 4.1, isNew: false, isFeatured: false, image: "wall11.jpg" },
  { id: 72, category: "wall hangings", name: "Modern Wall Panel Art", price: 7800, rating: 4.7, isNew: true, isFeatured: true, image: "wall12.jpg" }
];