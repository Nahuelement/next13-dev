import { Navbar } from "@/components";



//lrc
export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <> 
    <Navbar/>
    <div className="text-4xl flex justify-center py-20">
      {children}
    </div>
    </>
  );
}