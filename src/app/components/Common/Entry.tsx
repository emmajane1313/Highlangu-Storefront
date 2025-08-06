"use client";

import Image from "next/image";
import Footer from "./Footer";

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
          src={"/images/desert-mobile-highlaŋu-emmajanemackinnonlee.png"}
          draggable={false}
          layout="responsive"
          objectFit="contain"
          priority
          alt={`Signal One Mobile | Highlaŋu | Emma-Jane MacKinnon-Lee`}
          width={944}
          height={1358}
        />
      </div>
      <div className="hidden sm:block relative w-full">
        <Image
          src={"/images/desert-highlaŋu-emmajanemackinnonlee.png"}
          draggable={false}
          layout="responsive"
          objectFit="contain"
          priority
          alt={`Signal One | Highlaŋu | Emma-Jane MacKinnon-Lee`}
          width={1280}
          height={768}
        />
      </div>
      <Footer dict={dict} lang={lang} />
    </div>
  );
}
