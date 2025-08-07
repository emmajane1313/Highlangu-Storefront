"use client";

import Image from "next/image";
import Footer from "./Footer";
import { IMAGE_MOBILE, IMAGE_SCREEN } from "@/app/lib/constantes";

export default function Entry({
  dict,
  lang,
}: {
  dict: Record<string, string>;
  lang: string;
}) {
  return (
    <div className="relative w-full h-fit flex flex-col h-fit bg-white">
      <div className="relative block sm:hidden w-full">
        <Image
          src={`/images/${IMAGE_MOBILE[lang]}.png`}
          draggable={false}
          layout="responsive"
          objectFit="contain"
          priority
          key={lang}
          alt={`Signal One Mobile | Highlaŋu | Emma-Jane MacKinnon-Lee`}
          width={944}
          height={1358}
        />
      </div>
      <div className="hidden sm:block relative w-full">
        <Image
          src={`/images/${IMAGE_SCREEN[lang]}.png`}
          draggable={false}
          layout="responsive"
          objectFit="contain"
          priority
          key={lang}
          alt={`Signal One | Highlaŋu | Emma-Jane MacKinnon-Lee`}
          width={1280}
          height={768}
        />
      </div>
      <Footer dict={dict} lang={lang} />
    </div>
  );
}
