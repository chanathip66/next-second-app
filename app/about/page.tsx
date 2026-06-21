import Image from "next/image";

export default function Page() {
  return (
    <div className="flex-1 p-10 flex flex-col items-center">
      <h2 className="text-2xl font-bold">ABOUT PAGE</h2>
      <Image
        src="https://i.pinimg.com/736x/c3/1a/94/c31a94f0d3274d7786265e1bbe30dd75.jpg"
        alt="about image"
        width={150}
        height={150}
      />
    </div>
  );
}
