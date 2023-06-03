import Nav from "./nav";

export default function Main({ links }) {
    return(
        <main className="container-fluid">
            <Nav links = { links } />
        </main>
    );    
}