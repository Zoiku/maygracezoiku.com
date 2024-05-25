import "../styles/Home.css";
import Centered from "../components/Center";
import landingart from "../assets/Environment-bro.svg";
import Marquee from "react-fast-marquee";
import svg from "../assets/Finance leaders-pana.svg";

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
    title: "Experience",
    value: "5+ Years",
  },
  {
    title: "Employer",
    value: "Lloyds Bank",
  },
];

const Home = () => (
  <div className="home">
    <Centered className={"landing-container"}>
      <section className="landing">
        <div className="landing-art-container">
          <img className="landing-art" src={landingart} alt="" />
        </div>
        <div className="landing-text-container">
          <div className="landing-text">
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
            <img className="about-left-background" src={svg} alt="" />
          </div>
        </div>

        <div className="about-right">
          <div className="about-details-title">
            With over 3 Years experience in the banking industry, I am a
            dedicated Senior Customer Advisor at Lloyds Bank, committed to
            providing personalized financial solutions and exceptional customer
            service to help clients achieve their financial goals.
          </div>
          <div className="about-details-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos repellendus ea ab fugit veritatis? Voluptatem
            voluptatibus suscipit, provident architecto quis ipsa voluptates
            unde iure asperiores totam quidem modi accusantium reprehenderit
            ullam eos, veritatis dicta laboriosam quaerat autem quia labore
            assumenda!
          </div>
          <div className="about-summary">
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
