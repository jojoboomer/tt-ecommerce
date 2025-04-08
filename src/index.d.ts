interface Product {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
    title: string;
}

interface Category {
    id: string;
    name: string;
}

interface ProductOnCart extends Product {
    quantity: number;
  }