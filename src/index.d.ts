interface Product {
    category: Category;
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
    title: string;
    image: string;
}

interface ProductOnCart extends Product {
    quantity: number;
  }