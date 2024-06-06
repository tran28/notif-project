import Hero from "./components/Hero";
import Nav from "./components/Nav";

function Home() {
    return (
        < div className="flex flex-col gap-10">
            <Nav />
            <Hero />
        </div>
    );
}

export default Home;