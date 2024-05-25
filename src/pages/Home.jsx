import "../styles/Home.css";
import Centered from "../components/Center";
import landingart from "../assets/Connected world-pana.svg";
import Marquee from "react-fast-marquee";
import svg from "../assets/Goal-cuate.svg";

const skills = [
  "Commercial Banking",
  "KYC Verification",
  "Research",
  "Customer Relationship Management",
  "Credit Risk Management",
  "Anti-Money Laundering",
  "Client Relations",
  "Strategic Communications",
];

const aboutSummary = [
  {
    title: "Nationality",
    value: "Ghanaian",
  },
  {
    title: "Location",
    value: "Swansea",
  },

  {
    title: "Employer",
    value: "Lloyds Bank",
  },
  {
    title: "Experience",
    value: "3+ Years",
  },
  {
    title: "Education",
    value: "MSc in International Finance",
  },
];

const Home = () => (
  <div className="home">
    <Centered className={"landing-container"}>
      <section className="landing">
        <div className="landing-art-container">
          <img
            data-aos-duration="1000"
            data-aos="fade-up"
            className="landing-art"
            src={landingart}
            alt="cover"
          />
        </div>
        <div className="landing-text-container">
          <div
            data-aos-duration="1000"
            data-aos="fade-down"
            className="landing-text"
          >
            www.<span className="highlight">maygracezoiku</span>.com
          </div>
        </div>
      </section>
    </Centered>

    <div className="skills">
      <Marquee>
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            {skill}
          </div>
        ))}
      </Marquee>
    </div>

    <Centered className={"about-container"}>
      <div className="about">
        <div className="about-left">
          <div className="about-left-background-container">
            <img
              data-aos-duration="1000"
              data-aos="fade-up"
              className="about-left-background"
              src={svg}
              alt=""
            />
          </div>
        </div>

        <div className="about-right">
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            className="about-details-title"
          >
            With over 3 Years experience in the banking industry, I am a
            dedicated Senior Customer Advisor at Lloyds Bank, committed to
            providing <span className="highlight">personalized financial solutions</span> and{" "}
            <span className="highlight">exceptional customer service</span> to
            help clients achieve their financial goals.
          </div>
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            className="about-details-text"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos repellendus ea ab fugit veritatis? Voluptatem
            voluptatibus suscipit, provident architecto quis ipsa voluptates
            unde iure asperiores totam quidem modi accusantium reprehenderit
            ullam eos, veritatis dicta laboriosam quaerat autem quia labore
            assumenda!
          </div>
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            className="about-summary"
          >
            {aboutSummary.map((summary, index) => (
              <div key={index} className="about-summary-item">
                <div className="about-summary-item-title">{summary.title}</div>
                <div className="about-summary-item-value">{summary.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Centered>
  </div>
);

export default Home;
