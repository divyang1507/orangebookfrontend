import Image from "next/image";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <>
      <div className="flex px-16 flex-wrap gap-8 items-center justify-between">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </>
  );
}
