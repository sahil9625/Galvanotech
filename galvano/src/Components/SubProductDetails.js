import React from 'react';
import { useParams } from 'react-router-dom';
import "../Styles/SubProductDetails.css";
// import Assets from "../Assets/ppr.jpg";



const SubProductDetails = () => {
  const { productId } = useParams();

  // Replace this with actual data or fetch from an API
  const productData = {
    product1: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product2: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product3: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product4: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product5: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product6: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product7: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product8: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product9: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product10: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product11: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product12: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product13: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product14: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product15: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product16: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product17: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product18: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product19: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product20: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product21: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product22: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product23: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product24: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product25: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product26: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product27: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product28: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
     product29: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product30: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product31: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product32: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product33: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
     product34: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product35: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product36: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
     product37: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product38: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product39: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product40: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product41: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product42: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product43: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product44: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product45: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product46: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product47: {
      title: 'TRIVALENT IRRIDESCENT PASSIVATION (Zinc)',
      name: 'ISOPASS TY755',
      description: 'High performance tivalent passivation ,iridescent yellow colour ,zinc layer protection upto 168 hours',
      image: 'ppr.jpg',
    },
    product48: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product49: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product50: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product51: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product52: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product53: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product54: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product55: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product56: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product57: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product58: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product59: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product60: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product61: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product62: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product63: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product64: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product65: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
     product66: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product67: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product68: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product69: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product70: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product71: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product72: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product73: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product74: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product75: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product76: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product77: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product78: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product79: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product80: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product81: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product82: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product83: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product84: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product85: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product86: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product87: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product88: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },
    product89: {
      title: 'Product 2',
      name: 'Sample Name 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
    },

    // Add more products as needed
  };

  // Check if productId is valid
  if (!productData[productId]) {
    return (
      <div>
        <h1>Invalid Product ID</h1>
      </div>
    );
  }

  const { title, name, description, image } = productData[productId];

  return (
    <div>
      <h1>{title}</h1>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <img src={image} alt={title} />
      {/* Add more details as needed */}
    </div>
  );
};

export default SubProductDetails;
