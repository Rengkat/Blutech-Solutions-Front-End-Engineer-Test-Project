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
    name: "iPhone",
    title: "Amazing iPhone",
    description: "This is an amazing product that serves multiple purposes.",
    brand: "Apple",
    costPrice: 799.99,
    quantity: 50,
    size: "M",
  },
  {
    image: image2,
    sku: "SKU002",
    name: "Galaxy",
    title: "Amazing Galaxy",
    description: "A great product for everyday use.",
    brand: "Samsung",
    costPrice: 699.99,
    quantity: 100,
    size: "L",
  },
  {
    image: image3,
    sku: "SKU003",
    name: "WH-1000XM4",
    title: "Amazing WH-1000XM4",
    description: "This product is known for its exceptional quality.",
    brand: "Sony",
    costPrice: 349.99,
    quantity: 30,
    size: "S",
  },
  {
    image: image4,
    sku: "SKU004",
    name: "MacBook",
    title: "Amazing MacBook",
    description: "An innovative product that meets all your needs.",
    brand: "Apple",
    costPrice: 1299.99,
    quantity: 20,
    size: "XL",
  },
  {
    image: image5,
    sku: "SKU005",
    name: "XPS 13",
    title: "Amazing XPS 13",
    description: "This product has excellent features and is very durable.",
    brand: "Dell",
    costPrice: 999.99,
    quantity: 80,
    size: "M",
  },
  {
    image: image6,
    sku: "SKU006",
    name: "QC35",
    title: "Amazing QC35",
    description: "A top-selling product with great reviews.",
    brand: "Bose",
    costPrice: 299.99,
    quantity: 150,
    size: "L",
  },
  {
    image: image7,
    sku: "SKU007",
    name: "GoPro",
    title: "Amazing GoPro",
    description: "Highly recommended by users for its versatility.",
    brand: "GoPro",
    costPrice: 399.99,
    quantity: 60,
    size: "S",
  },
  {
    image: image8,
    sku: "SKU008",
    name: "Echo Dot",
    title: "Amazing Echo Dot",
    description: "A must-have product for every household.",
    brand: "Amazon",
    costPrice: 49.99,
    quantity: 40,
    size: "XL",
  },
  {
    image: image9,
    sku: "SKU009",
    name: "Fitbit",
    title: "Amazing Fitbit",
    description: "Known for its excellent design and functionality.",
    brand: "Fitbit",
    costPrice: 149.99,
    quantity: 70,
    size: "M",
  },
  {
    image: image5,
    sku: "SKU010",
    name: "Switch",
    title: "Amazing Switch",
    description: "A premium product that offers exceptional performance.",
    brand: "Nintendo",
    costPrice: 299.99,
    quantity: 90,
    size: "L",
  },
];
