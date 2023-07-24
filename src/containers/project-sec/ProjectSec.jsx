import React from "react";
import "./project-sec.css";
import img1 from "../../assets/smartube.png";
import img2 from "../../assets/ChefsCorner.png";
import img3 from "../../assets/Hemang Bairwa PortFoilo.png";
// import img4 from "../../assets/pro4.png";
import ProjectElement from "../../components/project-element/ProjectElement";
const projectsArray = [
  {
    id: "1",
    image: img1,
    heading: "Smartube",
    description:
      "SmarTube is a comprehensive YouTube clone that leverages the power of ReactJS, JavaScript, CSS, HTML, RapidAPI, and Material UI to provide users with a visually appealing, user-friendly, and feature-rich video-sharing platform. Whether you're a content creator or a viewer, SmarTube aims to replicate the essence of YouTube while delivering a seamless and enjoyable experience for all.",
    tech: ["ReactJS ", "Material UI" , "YouTube API "],
    demo: "https://smartube.vercel.app/",
    source: "https://github.com/hemang-2001/smartube",
    change: false,
  },
  {
    id: "2",
    image: img2,
    heading: "ChefsCorner - Recipe Web Application",
    description:
      "Recipe web Application to browse through a variety of options and enjoy delicious meals in just a few clicks from convenient and hassle-free!",
    tech: ["ReactJS ", "Tailwind ", "Rapid API "],
    demo: "https://chefs-corner.vercel.app/",
    source: "https://github.com/hemang-2001/ChefsCorner",
    change: true,
  },
  {
    id: "3",
    image: img3,
    heading: "Resume Website",
    description:
      "The untimate Resume Website created with HTML5, CSS3 and JavaScript.",
    tech: ["HTML ", "CSS ", "JavaScript "],
    demo: "https://hemang-2001.github.io/portfolio/",
    source: "https://github.com/hemang-2001/portfolio",
    change: false,
  },

  // {
  //   id: "4",
  //   image: img4,
  //   heading: "Youtube Clone",
  //   description:
  //     "📺 YouTube clone with video detail, homepage, and search page, offering users an immersive browsing experience. 🎥🏠🔎",
  //   tech: ["React", "Taiwlind", "React Router ", "Youtube API"],
  //   demo: "https://youtube-clone-sam.vercel.app/",
  //   source: "https://github.com/sujitmemane/Youtube_Clone",
  //   change: true,
  // },
];

const ProjectSec = () => {
  const project = projectsArray.map((pro) => {
    return (
      <ProjectElement
        key={pro.id}
        image={pro.image}
        heading={pro.heading}
        description={pro.description}
        tech={pro.tech}
        demo={pro.demo}
        source={pro.source}
        change={pro.change}
      ></ProjectElement>
    );
  });
  return (
    <section className="myPortfolio__projects" id="projects">
      <div className="container">
        <div className="projects">
          <h3>PORTFOLIO</h3>
          <h2>Each project is an exclusive development endeavor 🧩</h2>
          <div className="all-projects">{project}</div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSec;
