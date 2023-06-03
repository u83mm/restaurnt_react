import SectionContent from "./section.content";
import SectionTitle from "./section.title";

export default function MainSection() {
    return(
        <section className="col-12 col-lg-9 p-sm-0 pe-lg-3">
            <div className="col mb-3 mainImg"></div>
            <SectionTitle />
            <SectionContent />
        </section>
    );
}