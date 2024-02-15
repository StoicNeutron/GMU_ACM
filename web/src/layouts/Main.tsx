import Nav from "@/component/Nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
