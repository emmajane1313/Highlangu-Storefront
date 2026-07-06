import Entry from "../components/Common/Entry";
import { getDictionary } from "./dictionaries";
import { tParams } from "./layout";

export default async function IndexPage({ params }: { params: tParams }) {
  const { lang } = await params;
  const dict = await (
    getDictionary as (locale: string) => Promise<Record<string, string>>
  )(lang);
  return <Entry dict={dict} lang={lang} />;
}
