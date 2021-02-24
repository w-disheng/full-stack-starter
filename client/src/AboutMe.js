import "./AboutMe.scss";
import Gf from "./asset/gf.jpg";

function AboutMe() {
  return (
    <div id="about-me">
      <img className="img-fluid mb-3" src={Gf} alt="My Name" />
      <h1>Disheng Wang</h1>
      <p>
        Hi, My name is Sean Wang, I am a recent graduate student from UCM in
        Computer Science and Engineering. I was self tought to be a front end
        developer, I am looking to a fulltime position of front-end developer or
        fullstack engineer.
      </p>
    </div>
  );
}

export default AboutMe;
