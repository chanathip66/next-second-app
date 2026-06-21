import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <h2 className="text-2xl font-bold">SMARTPHONE PAGE</h2>
      <Image src="/momo23.png" alt="momo23" width={150} height={150} />
    </div>
  );
}
