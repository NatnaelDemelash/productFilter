import { Index } from '@upstash/vector';

import * as dotenv from 'dotenv';

dotenv.config();

export type Product = {
  id: string;
  imageId: string;
  name: string;
  color: 'white' | 'bedge' | 'blue' | 'green' | 'purple';
  size: 'S' | 'M' | 'L';
  price: number;
};

export const db = new Index<Product>();
