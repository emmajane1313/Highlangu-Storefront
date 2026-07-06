export type tParams = Promise<{ lang: string }>;

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "guf" }, { lang: "gd" }];
}

export default function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: tParams;
}>) {
  return children;
}
