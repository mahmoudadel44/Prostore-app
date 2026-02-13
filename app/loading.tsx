import Image from "next/image";

import loader from "@/assets/loader.gif";
export default function LoadingPage() {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center"
    >
      <Image src={loader} width={150} height={150} alt="logo" />
    </div>
  );
}

