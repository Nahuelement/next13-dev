

//lrc
export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="text-7xl flex justify-center bg-red-600 ">
      {children}
    </div>
  );
}