import Image from "next/image";
import { korean } from "./layout";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="min-h-500px text-[#4D4A47] text-center py-[35vh] ">
        <div className={`${korean.variable} font-korean`}>
          <p className="text-6xl">
            <strong>真正創新的醫療團隊</strong>
          </p>
        </div>
        <div className={`${korean.variable} font-korean`}>
          <p className="text-xl py-5">
            信基診所，帶來全新輔助療程樣貌
          </p>
        </div>
      </div>
    </div>
  );
}
