import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  gd: () => import("./dictionaries/gd.json").then((module) => module.default),
  guf: () => import("./dictionaries/guf.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries?.[locale]?.();
