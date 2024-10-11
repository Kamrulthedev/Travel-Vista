export default function Container({ children }: { children: React.ReactNode }) {
    return (
      <div className=" mx-auto max-w-7xl pt-16 px-6 flex-grow h-screen">
        {children}
      </div>
    );
  }
  