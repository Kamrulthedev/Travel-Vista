export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      Navber
      <main>{children}</main>
      footer
    </div>
  );
}
