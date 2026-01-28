export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Hoodie',
    description: 'Comfortable cotton blend hoodie with logo',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80',
    category: 'Apparel',
    inStock: true,
  },
  {
    id: '2',
    name: 'Logo T-Shirt',
    description: 'Classic cotton t-shirt with embroidered logo',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80',
    category: 'Apparel',
    inStock: true,
  },
  {
    id: '3',
    name: 'Coffee Mug',
    description: 'Ceramic mug perfect for your morning coffee',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80',
    category: 'Accessories',
    inStock: true,
  },
  {
    id: '4',
    name: 'Tote Bag',
    description: 'Eco-friendly canvas tote bag',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80',
    category: 'Accessories',
    inStock: true,
  },
  {
    id: '5',
    name: 'Baseball Cap',
    description: 'Adjustable baseball cap with embroidered logo',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80',
    category: 'Apparel',
    inStock: true,
  },
  {
    id: '6',
    name: 'Laptop Sticker Pack',
    description: 'Set of 10 premium vinyl stickers',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    category: 'Accessories',
    inStock: true,
  },
];
