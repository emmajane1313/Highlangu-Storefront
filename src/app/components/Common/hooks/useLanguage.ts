import { usePathname, useRouter } from "next/navigation";

const useLanguage = () => {
  const router = useRouter();
  const path = usePathname();

  const changeLanguage = (lang: string) => {
    const segments = path.split("/");
    segments[1] = lang ?? "en";
    const newPath = segments.join("/");

    document.cookie = `NEXT_LOCALE=${lang}; path=/; SameSite=Lax`;

    router.push(newPath);
  };

  return {
    changeLanguage,
  };
};

export default useLanguage;
