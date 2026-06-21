import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 p-10">
      <h1 className="text-4xl font-bold text-center mb-4">WELCOME TO SAU PRODUCT SALE WEBSITE</h1>
      <p className="text-center">HOME PAGE: หน้าแรก</p>
      <div className="flex justify-center">
        <Image src="/momo.png" alt="momo" width={150} height={150} />
      </div>
    </div>
  );
}
