import { Index } from '@upstash/vector';

type Product = {
  id: string;
  imageId: string;
  name: string;
  color: 'white' | 'bedge' | 'blue' | 'green' | 'purple';
  size: 'S' | 'M' | 'L';
  price: number;
};

export const db = new Index<Product>();
