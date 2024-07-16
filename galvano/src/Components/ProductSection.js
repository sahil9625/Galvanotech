import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/ProductSection.css";

const mainGrids = [
  {
    id: 1,
    category: "PRETREATMENT",
    imageUrl: "Assets/ppr.jpg",
    productIds: [
      "product1",
      "product2",
      "product3",
      "product4",
      "product5",
      "product6",
      "product7",
      "product8",
      "product9",
      "product10",
      "product11",
      "product12",
      "product13",
      "product14",
      "product15",
      "product16",
      "product17",
    ],
  },
  {
    id: 2,
    category: "ALKALINE ZINC",
    productIds: ["product18", "product19", "product20"],
  },
  {
    id: 3,
    category: "ALKALINE ZINC NICKEL",
    productIds: ["product21", "product22"],
  },
  { id: 4, category: "ALKALINE ZINC IRON", productIds: ["product23"] },
  {
    id: 5,
    category: "ACID ZINC / CHLORIDE ZINC",
    productIds: ["product24", "product25", "product26", "product27", "product28"],
  },
  {
    id: 6,
    category: "TRIVALENT BLUE PASSIVATION (ZnNi)",
    productIds: ["product29", "product30", "product31", "product32"],
  },
  {
    id: 7,
    category: "TRIVALENT BLUE PASSIVATION (Zinc)",
    productIds: ["product33", "product34", "product35", "product36"],
  },
  {
    id: 8,
    category: "TRIVALENT BLACK PASSIVATION (ZnFe)",
    productIds: ["product37"],
  },
  {
    id: 9,
    category: "TRIVALENT BLACK PASSIVATION (ZnNi)",
    productIds: ["product38"],
  },
  {
    id: 10,
    category: "TRIVALENT BLACK PASSIVATION (Zinc)",
    productIds: ["product39", "product40", "product41"],
  },
  {
    id: 11,
    category: "TRIVALENT PASSIVATION (ALUMINIUM)",
    productIds: ["product42"],
  },
  {
    id: 12,
    category: "TRIVALENT IRRIDESCENT PASSIVATION (Zinc)",
    productIds: ["product43", "product44", "product45", "product46", "product47", "product48", "product49"],
  },
  {
    id: 13,
    category: "TOPCOAT",
    productIds: ["product50", "product51", "product52", "product53"],
  },
  {
    id: 14,
    category: "SEALER",
    productIds: ["product54", "product55", "product56", "product57"],
  },
  {
    id: 15,
    category: "POSTDIP",
    productIds: ["product58", "product59", "product60"],
  },
  {
    id: 16,
    category: "ALKALINE COPPER",
    productIds: ["product61", "product62"],
  },
  {
    id: 17,
    category: "ACID COPPER",
    productIds: ["product63", "product64", "product65", "product66"],
  },
  { id: 18, category: "ANTITARNISH", productIds: ["product67", "product68"] },
  {
    id: 19,
    category: "ELECTROLYTIC NICKEL PLATING",
    productIds: ["product69", "product70"],
  },
  { id: 20, category: "SEMI BRIGHT", productIds: ["product71"] },
  { id: 21, category: "BRIGHT CHROME PLATING", productIds: ["product72"] },
  {
    id: 22, 
    category: "ELECTROLESS NICKEL",
    productIds: ["product73", "product74", "product75", "product76"],
  },
  {
    id: 23, 
    category: "TIN PLATING",
    productIds: ["product77", "product78", "product79"],
  },
  { id: 24, category: "HARD CHROME", productIds: ["product80", "product81"] },
  {
    id: 25,
    category: "ALUMINIUM TREATMENT",
    productIds: ["product82", "product83", "product84", "product85", "product86", "product87"],
  },
];

const products = [
  //pretreatment
  { id: "product1", name: "Isoclean Wetter", description: "Powerful laptop for your needs" },
  { id: "product2", name: "Electropolish ES-30", description: "Latest smartphone with advanced features" },
  { id: "product3", name: "Iso-Degrease 100", description: "Comfortable cotton T-shirt" },
  { id: "product4", name: "Iso-Inhibitor 50", description: "Classic blue jeans for any occasion" },
  { id: "product5", name: "Iso-pickle 20", description: "Stylish and comfortable sofa for your home" },
  { id: "product6", name: "Isoclean Descale", description: "Modern coffee table for your living room" },
  { id: "product7", name: "Isoclean FS 701", description: "Modern coffee table for your living room" },
  { id: "product8", name: "Isoclean FS 704", description: "Modern coffee table for your living room" },
  { id: "product9", name: "Isoclean FS 740", description: "Modern coffee table for your living room" },
  { id: "product10", name: "Isoclean FS 745", description: "Modern coffee table for your living room" },
  { id: "product11", name: "Isoclean FS 761", description: "Modern coffee table for your living room" },
  { id: "product12", name: "Isoclean FS 780", description: "Modern coffee table for your living room" },
  { id: "product13", name: "Isoclean FS 781", description: "Modern coffee table for your living room" },
  { id: "product14", name: "Isoclean FSS 200", description: "Modern coffee table for your living room" },
  { id: "product15", name: "Isoclean NFS 773", description: "Modern coffee table for your living room" },
  { id: "product16", name: "Isoclean S-55", description: "Modern coffee table for your living room" },
  { id: "product17", name: "Isoclean US 700", description: "Modern coffee table for your living room" },

  //ALKALINE ZINC
  { id: "product18", name: "Octaline 511", description: "Modern coffee table for your living room" },
  { id: "product19", name: "Octaline 521", description: "Modern coffee table for your living room" },
  { id: "product20", name: "Octaline 540", description: "Modern coffee table for your living room" },

  //ALKALINE ZINC NICKEL
  { id: "product21", name: "Octaline ZnNi 685", description: "Modern coffee table for your living room" },
  { id: "product22", name: "Octaline ZnNi 690", description: "Modern coffee table for your living room" },

  //ALKALINE ZINC IRON
  { id: "product23", name: "Octaline Fe 365", description: "Modern coffee table for your living room" },

  //ACID ZINC / CHLORIDE ZINC
  { id: "product24", name: "Octacid 300", description: "Modern coffee table for your living room" },
  { id: "product25", name: "Octacid 308", description: "Modern coffee table for your living room" },
  { id: "product26", name: "Octacid 310", description: "Modern coffee table for your living room" },
  { id: "product27", name: "Octacid 318", description: "Modern coffee table for your living room" },
  { id: "product28", name: "Octacid 321", description: "Modern coffee table for your living room" },

  //TRIVALENT BLUE PASSIVATION (ZnNi)
  { id: "product29", name: "Isodip TB 228", description: "Modern coffee table for your living room" },
  { id: "product30", name: "Isodip TB 228 CF", description: "Modern coffee table for your living room" },
  { id: "product31", name: "Isodip TB 229", description: "Modern coffee table for your living room" },
  { id: "product32", name: "Isodip TB 229 CF", description: "Modern coffee table for your living room" },

  //TRIVALENT BLUE PASSIVATION (Zinc)
  { id: "product33", name: "Isodip Blue 240", description: "Modern coffee table for your living room" },
  { id: "product34", name: "Isodip Blue 243", description: "Modern coffee table for your living room" },
  { id: "product35", name: "Isodip Blue 243L", description: "Modern coffee table for your living room" },
  { id: "product36", name: "Isodip Blue 245", description: "Modern coffee table for your living room" },

  //TRIVALENT BLACK PASSIVATION (ZnFe)
  { id: "product37", name: "Isodip TB 620", description: "Modern coffee table for your living room" },

  //TRIVALENT BLACK PASSIVATION (ZnNi)
  { id: "product38", name: "Isodip TB 600", description: "Modern coffee table for your living room" },

  //TRIVALENT BLACK PASSIVATION (Zinc)
  { id: "product39", name: "Isodip Black 600", description: "Modern coffee table for your living room" },
  { id: "product40", name: "Isodip Black 612", description: "Modern coffee table for your living room" },
  { id: "product41", name: "Isodip Black 618", description: "Modern coffee table for your living room" },

  //TRIVALENT PASSIVATION (ALUMINIUM)
  { id: "product42", name: "Isodip TN 100", description: "Modern coffee table for your living room" },

  //TRIVALENT IRRIDESCENT PASSIVATION (Zinc)
  { id: "product43", name: "Isodip Yellow 206", description: "Modern coffee table for your living room" },
  { id: "product44", name: "Isodip Yellow 210", description: "Modern coffee table for your living room" },
  { id: "product45", name: "Isodip Yellow 218", description: "Modern coffee table for your living room" },
  { id: "product46", name: "Isodip Yellow 220", description: "Modern coffee table for your living room" },
  { id: "product47", name: "Isodip Yellow 229", description: "Modern coffee table for your living room" },
  { id: "product48", name: "Isodip Yellow 232", description: "Modern coffee table for your living room" },
  { id: "product49", name: "Isodip Yellow 232 CF", description: "Modern coffee table for your living room" },

  //TOPCOAT
  { id: "product50", name: "Acrylic 233", description: "Modern coffee table for your living room" },
  { id: "product51", name: "Acrylic 236", description: "Modern coffee table for your living room" },
  { id: "product52", name: "Aquaseal 245", description: "Modern coffee table for your living room" },
  { id: "product53", name: "Aquaseal 256", description: "Modern coffee table for your living room" },

  //SEALER
  { id: "product54", name: "Isodip SE 320", description: "Modern coffee table for your living room" },
  { id: "product55", name: "Isodip SE 328", description: "Modern coffee table for your living room" },
  { id: "product56", name: "Isodip SE 360", description: "Modern coffee table for your living room" },
  { id: "product57", name: "Isodip SE 365", description: "Modern coffee table for your living room" },

  //POSTDIP
  { id: "product58", name: "Isodip PD 400", description: "Modern coffee table for your living room" },
  { id: "product59", name: "Isodip PD 425", description: "Modern coffee table for your living room" },
  { id: "product60", name: "Isodip PD 455", description: "Modern coffee table for your living room" },

  //ALKALINE COPPER
  { id: "product61", name: "Isoclear 600", description: "Modern coffee table for your living room" },
  { id: "product62", name: "Isoclear 615", description: "Modern coffee table for your living room" },

  //ACID COPPER
  { id: "product63", name: "Isoclear 700", description: "Modern coffee table for your living room" },
  { id: "product64", name: "Isoclear 718", description: "Modern coffee table for your living room" },
  { id: "product65", name: "Isoclear 750", description: "Modern coffee table for your living room" },
  { id: "product66", name: "Isoclear 755", description: "Modern coffee table for your living room" },

  //ANTITARNISH
  { id: "product67", name: "Isoclear AT 200", description: "Modern coffee table for your living room" },
  { id: "product68", name: "Isoclear AT 212", description: "Modern coffee table for your living room" },

  //ELECTROLYTIC NICKEL PLATING
  { id: "product69", name: "Isoclear Ni 500", description: "Modern coffee table for your living room" },
  { id: "product70", name: "Isoclear Ni 535", description: "Modern coffee table for your living room" },

  //SEMI BRIGHT
  { id: "product71", name: "Isoclear 601", description: "Modern coffee table for your living room" },

  //BRIGHT CHROME PLATING
  { id: "product72", name: "Isoclear 801", description: "Modern coffee table for your living room" },

  //ELECTROLESS NICKEL
  { id: "product73", name: "Isoclear EN 100", description: "Modern coffee table for your living room" },
  { id: "product74", name: "Isoclear EN 120", description: "Modern coffee table for your living room" },
  { id: "product75", name: "Isoclear EN 140", description: "Modern coffee table for your living room" },
  { id: "product76", name: "Isoclear EN 160", description: "Modern coffee table for your living room" },

  //TIN PLATING
  { id: "product77", name: "Isoclear 900", description: "Modern coffee table for your living room" },
  { id: "product78", name: "Isoclear 920", description: "Modern coffee table for your living room" },
  { id: "product79", name: "Isoclear 950", description: "Modern coffee table for your living room" },

  //HARD CHROME
  { id: "product80", name: "Isoclear 400", description: "Modern coffee table for your living room" },
  { id: "product81", name: "Isoclear 420", description: "Modern coffee table for your living room" },

  //ALUMINIUM TREATMENT
  { id: "product82", name: "Isoclear Al 100", description: "Modern coffee table for your living room" },
  { id: "product83", name: "Isoclear Al 110", description: "Modern coffee table for your living room" },
  { id: "product84", name: "Isoclear Al 115", description: "Modern coffee table for your living room" },
  { id: "product85", name: "Isoclear Al 120", description: "Modern coffee table for your living room" },
  { id: "product86", name: "Isoclear Al 140", description: "Modern coffee table for your living room" },
  { id: "product87", name: "Isoclear Al 160", description: "Modern coffee table for your living room" },
];

const ProductSection = () => {
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);

  const handleCategoryClick = (categoryId) => {
    if (expandedCategoryId === categoryId) {
      setExpandedCategoryId(null);
    } else {
      setExpandedCategoryId(categoryId);
    }
  };

  return (
    <div className="product-section">
      <h1>OUR PRODUCTS</h1>
      {mainGrids.map((mainGrid) => (
        <div key={mainGrid.id} className="category">
          <h2 onClick={() => handleCategoryClick(mainGrid.id)}>
            {mainGrid.category}
          </h2>
          {expandedCategoryId === mainGrid.id && (
            <div className="subcategory">
              {mainGrid.productIds.map((productId) => {
                const product = products.find((p) => p.id === productId);
                return (
                  <div key={product.id} className="product">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductSection;

