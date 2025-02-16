import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p
          className="para"
          style={{
            textAlign: "justify",
            fontFamily: "Montserrat, sans-serif",
            color: "#555",
            width: "100%",
            margin: "0 auto",
            transition: "color 0.3s ease",
          }}
        >
          A results-driven technology professional specializing in cybersecurity
          research, threat intelligence, and security auditing. Expert in
          WordPress development, UI/UX design, digital marketing, and SEO.
          Experienced in leading cross-functional teams, delivering innovation,
          and training 1000+ individuals.
        </p>
      </div>
    </div>
  );
};

export default About;
