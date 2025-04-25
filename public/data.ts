// Mock product data
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    inventory: number;
    status: 'active' | 'inactive';
    category: string;
    image: string;
    createdAt: string;
  }
  
  export const products: Product[] = [
    {
      id: '1',
      name: 'Wireless Headphones',
      description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
      price: 249.99,
      inventory: 45,
      status: 'active',
      category: 'Electronics',
      image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      createdAt: '2025-02-15T14:22:10Z'
    },
    {
      id: '2',
      name: 'Smart Watch Series 5',
      description: 'Advanced fitness tracking with heart rate monitor and GPS',
      price: 299.99,
      inventory: 28,
      status: 'active',
      category: 'Electronics',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      createdAt: '2025-03-01T09:15:33Z'
    },
    {
      id: '3',
      name: 'Ergonomic Office Chair',
      description: 'Adjustable lumbar support with breathable mesh back',
      price: 189.99,
      inventory: 12,
      status: 'active',
      category: 'Furniture',
      image: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      createdAt: '2025-03-10T11:45:22Z'
    },
    {
      id: '4',
      name: 'Mechanical Keyboard',
      description: 'Tactile mechanical switches with customizable RGB lighting',
      price: 129.99,
      inventory: 35,
      status: 'active',
      category: 'Electronics',
      image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      createdAt: '2025-03-15T16:30:45Z'
    },
    {
      id: '5',
      name: 'Premium Coffee Maker',
      description: 'Programmable 12-cup coffee maker with built-in grinder',
      price: 149.99,
      inventory: 0,
      status: 'inactive',
      category: 'Appliances',
      image: 'https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      createdAt: '2025-02-20T08:15:30Z'
    },
    {
      id: '6',
      name: 'Modern Desk Lamp',
      description: 'Adjustable LED desk lamp with wireless charging base',
      price: 79.99,
      inventory: 5,
      status: 'active',
      category: 'Home Decor',
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      createdAt: '2025-03-22T13:12:40Z'
    },
    {
      id: '7',
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse with precision tracking',
      price: 49.99,
      inventory: 67,
      status: 'active',
      category: 'Electronics',
      image: 'https://images.pexels.com/photos/399160/pexels-photo-399160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      createdAt: '2025-01-30T10:25:18Z'
    },
    {
      id: '8',
      name: 'Portable Bluetooth Speaker',
      description: 'Waterproof bluetooth speaker with 20-hour playback',
      price: 89.99,
      inventory: 3,
      status: 'active',
      category: 'Electronics',
      image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      createdAt: '2025-03-05T15:40:22Z'
    }
  ];
  
  export const categories = [...new Set(products.map(product => product.category))];
  
  export const getProductStats = () => {
    const totalProducts = products.length;
    const activeProducts = products.filter(p => p.status === 'active').length;
    const lowInventory = products.filter(p => p.inventory > 0 && p.inventory <= 5).length;
    const outOfStock = products.filter(p => p.inventory === 0).length;
    
    return {
      totalProducts,
      activeProducts,
      lowInventory,
      outOfStock
    };
  };