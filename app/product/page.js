// app/products/page.js
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Laptop A',
    price: '$999',
    description: 'A high-performance laptop suitable for all your needs.',
    imageUrl: '/images/laptop1.jpg', // Ensure these paths are correct
  },
  {
    id: 2,
    name: 'Laptop B',
    price: '$1299',
    description: 'A premium laptop with advanced features for professionals.',
    imageUrl: '/images/laptop1.jpg',
  },
  {
    id: 3,
    name: 'Printer X',
    price: '$199',
    description: 'A reliable printer with high-quality printouts.',
    imageUrl: '/images/laptop1.jpg',
  },

  {
    id: 4,
    name: 'Printer Y',
    price: '$249',
    description: 'An efficient printer with fast print speeds and low maintenance.',
    imageUrl: '/images/laptop1.jpg',
  },

  {
    id: 4,
    name: 'Printer Y',
    price: '$249',
    description: 'An efficient printer with fast print speeds and low maintenance.',
    imageUrl: '/images/laptop1.jpg',
  },

  {
    id: 4,
    name: 'Printer Y',
    price: '$249',
    description: 'An efficient printer with fast print speeds and low maintenance.',
    imageUrl: '/images/laptop1.jpg',
  },

  {
    id: 4,
    name: 'Printer Y',
    price: '$249',
    description: 'An efficient printer with fast print speeds and low maintenance.',
    imageUrl: '/images/laptop1.jpg',
  },

  {
    id: 4,
    name: 'Printer Y',
    price: '$249',
    description: 'An efficient printer with fast print speeds and low maintenance.',
    imageUrl: '/images/laptop1.jpg',
  },

  {
    id: 4,
    name: 'Printer Y',
    price: '$249',
    description: 'An efficient printer with fast print speeds and low maintenance.',
    imageUrl: '/images/laptop1.jpg',
  },

  {
    id: 4,
    name: 'Printer Y',
    price: '$249',
    description: 'An efficient printer with fast print speeds and low maintenance.',
    imageUrl: '/images/laptop1.jpg',
  },

  {
    id: 4,
    name: 'Printer Y',
    price: '$249',
    description: 'An efficient printer with fast print speeds and low maintenance.',
    imageUrl: '/images/laptop1.jpg',
  },

  {
    id: 4,
    name: 'Printer Y',
    price: '$249',
    description: 'An efficient printer with fast print speeds and low maintenance.',
    imageUrl: '/images/laptop1.jpg',
  },

  {
    id: 4,
    name: 'Printer Y',
    price: '$249',
    description: 'An efficient printer with fast print speeds and low maintenance.',
    imageUrl: '/images/laptop1.jpg',
  },

  {
    id: 4,
    name: 'Printer Y',
    price: '$249',
    description: 'An efficient printer with fast print speeds and low maintenance.',
    imageUrl: '/images/laptop1.jpg',
  },

  {
    id: 4,
    name: 'Printer Y',
    price: '$249',
    description: 'An efficient printer with fast print speeds and low maintenance.',
    imageUrl: '/images/laptop1.jpg',
  },

];

const whatsappNumber = '+2348036409836'; // Chuks' WhatsApp number

export default function Product() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="relative h-64 w-full mb-4">
              <Image
                src={product.imageUrl}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold mb-4">{product.price}</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=I'm%20interested%20in%20the%20${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Contact on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
