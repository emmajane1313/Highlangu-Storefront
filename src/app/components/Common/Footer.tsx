"use client";

import { FunctionComponent } from "react";
import Transmissions from "./Transmissions";
import Image from "next/image";
import useLanguage from "./hooks/useLanguage";
import { INFURA_GATEWAY_INTERNAL } from "@/app/lib/constantes";

const Footer: FunctionComponent<{
  dict: Record<string, string>;
  lang: string;
}> = ({ dict, lang }) => {
  const { changeLanguage } = useLanguage();

  return (
    <div className="relative w-full h-fit bg-white p-4 flex flex-col gap-2">
      <div className="relative w-full h-fit bg-white border-2 px-2 border-black flex flex-col sm:flex-row sm:items-stretch">
        <div className="relative w-full h-auto flex justify-between flex-col border-b-2 sm:border-b-0 sm:border-r-2 p-2 gap-2">
          <div className="relative w-full h-fit flex flex-col gap-2 sm:mb-0 mb-20">
            <div className="relative w-fit h-fit flex text-[7vw] sm:text-[4vw] uppercase font-lemon">
              Highlaŋu
            </div>
            <div className="relative w-full h-fit flex text-[7vw] sm:text-[4vw] uppercase font-faceT">
              The Highland-Yolŋu Alliance.
            </div>
          </div>
          <div className="relative w-full h-fit  text-lg font-klar">
            From Gaels to First Nations, the threads were never just fabric.
            Handwoven legacies to zero-knowledge silk, heritage doesn’t fade. It
            forks. Coded through songline and signal, across the longest arc of
            connected memory. A cross-temporal mesh of transmission techniques
            refined through contact, refusal, adaptation, and return. Trace the{" "}
            <a
              className="underline cursor-pointer"
              href="https://highlangu.com"
            >
              lore.
            </a>
          </div>
        </div>
        <div className="relative w-full h-full flex flex-col">
          <div className="relative w-full h-full flex flex-col mid:flex-row justify-between border-b-2 gap-2 p-2">
            <div className="relative w-full flex h-[30rem] sm:h-[24rem] mid:h-auto">
              <Image
                draggable={false}
                layout="fill"
                className="w-full h-full"
                alt="Highlaŋu electric couture dress"
                src="/images/glitterdress.png"
              />
            </div>
            <div className="relative w-full h-fit flex text-justify text-[4vw] sm:text-[1.7vw] mid:text-[1vw] font-face">
              Maritime kinship routes cross landscape memory grids. Versioned across generations, carved into stone, held in breath, encoded in place. At the edges of this world, Highlaŋu endures. Shaped over millennia and carried forward intact. Turns out that all that irreverant palimpsest syncs geography, technology and memory into shared resistance architecture. Into alliance systems that learned the taste of many poisons. Into cultural transmission networks immune from systematic imperial erasure. What happens when we recompile knowledge infrastructure built to survive deletion? Libraries that read between dimensions. Archives that pulse through bloodlines. Keepers who download centuries while lexing dreaming tracks. The transmission never stops. And the cores might be overheating. But not as long as the template is living and the zarjaz of anemoia purrs with silicon gardens.
            </div>
          </div>
          <div className="relative w-full h-full flex font-built flex-col  p-2">
            <div className="relative w-fit h-fit flex text-[7vw] sm:text-[4.5vw] mid:text-[3.7vw]">
              Maximum Resistance Experience.
            </div>
            <div className="relative w-fit h-fit flex text-[7vw] sm:text-[4.5vw] mid:text-[3.45vw]">
              Maximum Knowledge Preservation.
            </div>
            <div className="relative w-fit h-fit font-faceL flex text-xl">
              Where navigation becomes interface, and the archive remembers you
              back.
            </div>
          </div>
        </div>
      </div>
      <Transmissions dict={dict} />
      <div className="mt-7 relative w-full h-fit flex flex-row justify-between gap-3 text-xs font-klar">
        <div className="relative flex flex-row gap-2 items-center justify-center">
          <div className="relative w-fit h-fit flex">
            {lang == "en"
              ? dict?.lang
              : lang == "gd"
              ? "Gàidhlig"
              : "Gupapuyŋu"}
          </div>
          <div
            className="relative w-fit h-fit flex text-xl cursor-pointer"
            onClick={() =>
              changeLanguage(lang == "en" ? "gd" : lang == "gd" ? "guf" : "en")
            }
          >
            ↣
          </div>
        </div>

        <div className="relative w-fit h-fit flex">
          <div className="relative w-6 h-6 border border-black flex rounded-full">
            <Image
              key={lang}
              draggable={false}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              alt="Lang"
              src={`${INFURA_GATEWAY_INTERNAL}${
                lang == "gd"
                  ? "QmNNGAHi3HDzkawV15sNmJAfUrnjsjwWHPxnM7v6RPBBDr"
                  : lang == "guf"
                  ? "QmbHPRQainisMmrpprAhXGLbSF8PABXke33uTJHSWbGVQ8"
                  : "Qmer9mKhSsBBcwhSg9KNAxexHzSgcunTHfddJQ5QixqL7A"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
