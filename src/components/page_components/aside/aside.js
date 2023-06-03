import Desserts from "./aside.desserts";
import Firsts from "./aside.firsts";
import AsideFooter from "./aside.footer";
import Seconds from "./aside.seconds";
import Title from "./aside.title";

export default function Aside() {
    return(
        <aside className="col-12 col-lg-3 mb-5 menuDia">
            <Title />
            <hr />
            <Firsts />
            <Seconds />
            <Desserts />
            <hr />
            <AsideFooter />
        </aside>
    );
}