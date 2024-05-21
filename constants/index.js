import pallete1 from "@/public/pallete1.png";
import pallete2 from "@/public/pallete2.png";
import pallete3 from "@/public/pallete3.png";
import pallete4 from "@/public/pallete4.png";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Array of availability statuses
const availabilities = ["Available Soon", "Out of Stock", "In Stock"];

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the availabilities array
shuffleArray(availabilities);

export const Products = [
  {
    id: 1,
    name: "Design Your Own Pallete",
    label: "Now Available!",
    description: "Customizable Palettes",
    colors: "Variety of",
    price: "Starting from  8999",
    image: pallete3,
  },
  {
    id: 2,
    name: "Metal Palettes",
    label: "New",
    description: "Ready-To-Go Palettes",
    colors: "4",
    price: " 13999",
    image: pallete1,
  },
  {
    id: 3,
    name: "Plastic Palettes",
    label: "Sale",
    description: "Rental Palettes",
    colors: 3,
    price: " 12999",
    image: pallete4,
  },
  {
    id: 4,
    name: "Steel Palettes",
    label: "Limited Edition",
    description: "Heavy Duty Palettes",
    colors: 4,
    price: " 16999",
    image: pallete2,
  },
  {
    id: 5,
    name: "Aluminum Palettes",
    label: "Limited Edition",
    description: "Lightweight Palettes",
    colors: 6,
    price: " 15999",
    image: pallete1,
  },
  {
    id: 6,
    name: "Wood Palettes",
    label: "",
    description: "Ready-To-Go Palettes",
    colors: 2,
    price: " 11999",
    image: pallete2,
  },
  {
    id: 7,
    name: "Composite Palettes",
    label: "Sale",
    description: "Durable Palettes",
    colors: 3,
    price: "13999",
    image: pallete2,
  },
  {
    id: 8,
    name: "Cardboard Palettes",
    label: "",
    description: "Eco-Friendly Palettes",
    colors: 5,
    price: " 10999",
    image: pallete4,
  },
  {
    id: 9,
    name: "Plastic Palettes",
    label: "Bestseller",
    description: "Rental Palettes",
    colors: 4,
    price: " 12999",
    image: pallete1,
  },
  {
    id: 10,
    name: "Wood Palettes",
    label: "",
    description: "Customizable Palettes",
    colors: 2,
    price: " 11999",
    image: pallete3,
  },
  {
    id: 11,
    name: "Plastic Palettes",
    label: "Bestseller",
    description: "Rental Palettes",
    colors: 5,
    price: " 14999",
    image: pallete4,
  },
].map((product, index) => ({
  ...product,
  availability: availabilities[index % availabilities.length],
  isChecked: false,
  colorRange: Array.from({ length: product.colors }, () => getRandomColor()),
}));
