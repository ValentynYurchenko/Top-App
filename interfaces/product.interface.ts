export interface ReviewModel {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  createdAt: Date;
}

export interface ProductModel {
  _id: string;
  categories: string[];
  tag: string[];
  title: string;
  link: string;
  price: number;
  credit: number;
  oldPrice: number;
  description: string;
  characteristics: ProductCharacteristic[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  image: string;
  initialRating: number;
  reviews: ReviewModel[];
  reviewCount: number;
  reviewAvg?: number;
}

export interface ProductCharacteristic {
  value: string;
  name: string;
}
