import "./servicespagemonitor.css";
import BannerMonitor from "../../../components/Banner/BannerMonitor/BannerMonitor";
import ServiceDisplayMonitor from "../../../components/ServiceDisplay/SDMonitor/ServiceDisplayMonitor";
import weights from "../../../assets/wakeUp.jpg";
export function ServicesPageMonitor() {
  return (
    <div className="services-page-mont-main-container">
      <BannerMonitor
        img={weights}
        title={
          <h1 className=" m0 font3 f4 text-shadow">
            <span className="pinkText">S</span>ervices
          </h1>
        }
        desc="We provide some of the most reknown and up-to-date services to help you build strength and confidence"
        side={true}
        position="0 47%"
      />
      <div className="service-page-blerb-container">
        <div className="blerb">
          <p className="font2 f2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu
            sem fringilla euismod at at tortor. Nullam nec urna in arcu
            tristique facilisis. Sed fringilla velit at turpis aliquam, nec
            vestibulum libero ullamcorper.
          </p>
        </div>
      </div>

      <div className="service-page-display-container">
        <ServiceDisplayMonitor
          title="Pilates"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra."
        />
        <ServiceDisplayMonitor
          title="Strength Training"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra."
        />
        <ServiceDisplayMonitor
          title="Diet/Plan"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra."
        />
        <ServiceDisplayMonitor
          title="Injury Recovery"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra."
        />
        <ServiceDisplayMonitor
          title="Joint Renewal"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra."
        />
        <ServiceDisplayMonitor
          title="Target Workouts"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra."
        />
      </div>
    </div>
  );
}
