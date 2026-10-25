import VisitHero from "../../components/visithero/VisitHero";
import PlanVisit from "../../components/planvisit/PlanVisit";
import FindUs from "../../components/findus/FindUs";
import HappeningToday from "../../components/happeningtoday/HappeningToday";

const Visit = () => {
  return (
    <>
      <VisitHero />
      <section className="visit-info">
        <div className="container visit-info-grid">
          <PlanVisit />
          <FindUs />
          <HappeningToday />
        </div>
      </section>
    </>
  );
};

export default Visit;