// import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="fixed inset-y-0 flex h-[80px] w-full px-4 md:px-12">
        <Navbar />
      </div>
      <div className="bg-[#f2efe7]">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;
