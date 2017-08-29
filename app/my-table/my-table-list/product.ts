export class Product {
    id: number;
    name: string;
    price: number;
    category: string
}

export const products: Product[] = [
    { id: 1, name : 'product 1', price : 100, category : 'Category1' },
    { id: 2, name : 'product 2', price : 200, category : 'Category2'  },
    { id: 3, name : 'product 3', price : 300, category : 'Category1'  },
    { id: 4, name : 'product 4', price : 400, category : 'Category3'  },
    { id: 5, name : 'product 5', price : 500, category : 'Category1'  },
    { id: 6, name : 'product 6', price : 600, category : 'Category3'  },
    { id: 7, name : 'product 7', price : 700, category : 'Category3'  },
    { id: 8, name : 'product 8', price : 800, category : 'Category2'  },
    { id: 9, name : 'product 9', price : 900, category : 'Category2'  },
    { id: 10, name : 'product 10', price : 1000, category : 'Category1'  }
];