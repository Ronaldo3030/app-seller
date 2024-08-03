export interface Item {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
}