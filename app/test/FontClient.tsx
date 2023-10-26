'use clinet'

import { serifKorean } from "@/fonts/Fonts"

export default function Fonts() {
    return (
        <>
          <div className={`${serifKorean.className} leading-loose mt-20`}>
            <p className="text-4xl md:text-6xl font-black">
              Black 黑
            </p>
            <p className="text-4xl md:text-6xl font-bold">
              Bold 粗
            </p>
            <p className="text-4xl md:text-6xl font-semibold">
              SemiBold 半粗
            </p>
            <p className="text-4xl md:text-6xl font-medium">
              Medium 中
            </p>
            <p className="text-4xl md:text-6xl font-normal">
              Normal 正常
            </p>
            <p className="text-4xl md:text-6xl font-light">
              Light 輕
            </p>
            <p className="text-4xl md:text-6xl font-extralight">
              Extralight 特輕
            </p>
          </div>
        </>
    )
}