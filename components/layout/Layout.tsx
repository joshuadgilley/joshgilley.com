
import Footer from "../layout/Footer"
import Header from "../layout/Header"

export default function Layout({ children }: { children: any }) {
  return (
    <div className="h-full flex flex-col h-screen">
        <Header />
          <div className={"flex-grow"}>
           {children}
         </div>
        <Footer />
    </div>
  );
}

