import Footer from "../../components/Footer";
import HallProducts from "../../components/HallProducts";
import Header from "../../components/Header";

export default function Home() {
    return (
        <div className="flex flex-col justify-between bg-secundary ">
            <Header />
            <HallProducts />
            <Footer />
        </div>
    )
}
