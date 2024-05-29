import "../styles/Home.css";
import Centered from "../components/Center";
import landingart from "../assets/Investing-cuate.svg";
import Marquee from "react-fast-marquee";
import svg from "../assets/Saving money-cuate.svg";

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

        <div
          data-aos-duration="1000"
          data-aos="fade-up"
          className="about-right"
        >
          <div className="about-details-title">
            With over <span className="highlight">3 Years experience</span> in
            the <span className="highlight">banking industry</span>, I am a
            dedicated Senior Customer Advisor at Lloyds Bank, committed to
            providing{" "}
            <span className="highlight">personalized financial solutions</span>{" "}
            and <span className="highlight">exceptional customer service</span>{" "}
            to help clients achieve their financial goals.
          </div>
          <div className="about-details-text">
            I am a dedicated Customer Consultant at Lloyds Banking Group,
            passionate about delivering exceptional client service and financial
            guidance. Based in Swansea, West Glamorgan, I excel in clear
            communication and efficient support, ensuring clients receive the
            best advice. I enjoy staying updated with industry trends and
            engaging in community activities.
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

    {/* <Centered className={"outreach-container"}>
      <div className="outreach"></div>
    </Centered> */}
  </div>
);

export default Home;
