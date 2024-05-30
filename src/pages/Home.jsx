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

const volunteering = [
  {
    title: "Cancer Research",
    role: "Office assistant",
    location: "UK, Swansea",
    details:
      "Helping with clerical tasks such as data entry, managing correspondence, organizing files, and other administrative duties that keep the organization running smoothly",
  },
  {
    title: "Cancer Research",
    role: "Community Outreach",
    location: "UK, Swansea",
    details:
      "Educating the public about cancer prevention, early detection, and treatment options through workshops, presentations, and informational booths at community events",
  },
  {
    title: "City Church",
    role: "Kid's tutor",
    location: "UK, Swansea",
    details:
      "Organizing engaging lecture notes for kids 5-11 which includes selecting captivating topics, colorful visuals, and interactive elements, showcasing leadership and communication skills through simple language and storytelling",
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
            I am a Customer Consultant at Lloyds Banking Group, passionate about
            delivering exceptional client service and financial guidance. Based
            in Swansea, West Glamorgan, I excel in clear communication and
            efficient support, ensuring clients receive the best advice. I enjoy
            staying updated with industry trends and engaging in community
            activities.
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

    <Centered className={"outreach-container"}>
      <div className="outreach">
        <div className="section-title">
          Volunteering & <span className="highlight">Community</span> Engagement
        </div>
        <div className="volunteering-row">
          {volunteering.map((volunteer, index) => (
            <div key={index} className="volunteering-item">
              <div className="volunteer-index">0{index}</div>
              <div className="volunteering-head">
                <div className="volunteering-role">{volunteer.role}</div>
                <div className="volunteering-title">
                  {volunteer.title} | {volunteer.location}
                </div>
              </div>
              <div className="volunteering-body">{volunteer.details}</div>
            </div>
          ))}
        </div>
      </div>
    </Centered>
  </div>
);

export default Home;
