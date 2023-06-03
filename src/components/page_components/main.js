import Aside from "./aside/aside";
import Nav from "./nav";
import MainSection from "./section/main.section";

export default function Main({ links }) {
    return(
        <main className="container-fluid">
            <Nav links = { links } />
            <MainSection />
            <Aside />
        </main>
    );    
}