import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
} from "../assets/image";

export const TableHeading = [
  "S/N",
  "Image",
  "SKU",
  "Name",
  "Title",
  "Description",
  "Brand",
  "Cost Price",
  "Quantity",
  "Size",
];
export interface Product {
  image: string;
  sku: string;
  name: string;
  title: string;
  description: string;
  brand: string;
  costPrice: number;
  quantity: number;
  size: string;
}

export const products: Product[] = [
  {
    image: image1,
    sku: "SKU001",
    name: "Product 1",
    title: "Amazing Product 1",
    description: "This is an amazing product that serves multiple purposes.",
    brand: "Brand A",
    costPrice: 29.99,
    quantity: 50,
    size: "M",
  },
  {
    image: image2,
    sku: "SKU002",
    name: "Product 2",
    title: "Amazing Product 2",
    description: "A great product for everyday use.",
    brand: "Brand B",
    costPrice: 19.99,
    quantity: 100,
    size: "L",
  },
  {
    image: image3,
    sku: "SKU003",
    name: "Product 3",
    title: "Amazing Product 3",
    description: "This product is known for its exceptional quality.",
    brand: "Brand C",
    costPrice: 39.99,
    quantity: 30,
    size: "S",
  },
  {
    image: image4,
    sku: "SKU004",
    name: "Product 4",
    title: "Amazing Product 4",
    description: "An innovative product that meets all your needs.",
    brand: "Brand D",
    costPrice: 49.99,
    quantity: 20,
    size: "XL",
  },
  {
    image: image5,
    sku: "SKU005",
    name: "Product 5",
    title: "Amazing Product 5",
    description: "This product has excellent features and is very durable.",
    brand: "Brand E",
    costPrice: 59.99,
    quantity: 80,
    size: "M",
  },
  {
    image: image6,
    sku: "SKU006",
    name: "Product 6",
    title: "Amazing Product 6",
    description: "A top-selling product with great reviews.",
    brand: "Brand F",
    costPrice: 24.99,
    quantity: 150,
    size: "L",
  },
  {
    image: image7,
    sku: "SKU007",
    name: "Product 7",
    title: "Amazing Product 7",
    description: "Highly recommended by users for its versatility.",
    brand: "Brand G",
    costPrice: 34.99,
    quantity: 60,
    size: "S",
  },
  {
    image: image8,
    sku: "SKU008",
    name: "Product 8",
    title: "Amazing Product 8",
    description: "A must-have product for every household.",
    brand: "Brand H",
    costPrice: 44.99,
    quantity: 40,
    size: "XL",
  },
  {
    image: image9,
    sku: "SKU009",
    name: "Product 9",
    title: "Amazing Product 9",
    description: "Known for its excellent design and functionality.",
    brand: "Brand I",
    costPrice: 54.99,
    quantity: 70,
    size: "M",
  },
  {
    image: image1,
    sku: "SKU010",
    name: "Product 10",
    title: "Amazing Product 10",
    description: "A premium product that offers exceptional performance.",
    brand: "Brand J",
    costPrice: 64.99,
    quantity: 90,
    size: "L",
  },
];
