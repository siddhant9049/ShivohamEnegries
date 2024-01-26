// src/components/ProjectSection.js
import React from 'react';
import Slider from 'react-slick';
import './ProjectSection.css';

// Import slick carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import PR9 from "./Projects/20240119.jpg"
// Import images
const imageContext = require.context('./Projects', false, /\.(jpg)$/);
const imageFilenames = imageContext.keys();
const images = imageFilenames.map(filename => imageContext(filename));

const ProjectSection = () => {
  const projects = [
    { id: 1, image: images[0], title: 'Project 1', description: 'Description of Project 1' },
    { id: 2, image: images[1], title: 'Project 2', description: 'Description of Project 2' },
    { id: 3, image: images[2], title: 'Project 3', description: 'Description of Project 3' },
    { id: 4, image: images[3], title: 'Project 1', description: 'Description of Project 1' },
    { id: 5, image: images[4], title: 'Project 2', description: 'Description of Project 2' },
    { id: 6, image: images[5], title: 'Project 3', description: 'Description of Project 3' },
    { id: 7, image: images[6], title: 'Project 1', description: 'Description of Project 1' },
    { id: 8, image: images[7], title: 'Project 2', description: 'Description of Project 2' },
    // { id: 9, image: PR9, title: 'Project 3', description: 'Description of Project 3' },
    // Add more projects with their respective images
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="project-section">
      <h2>PROJECTS</h2>
      <Slider {...settings}>
        {projects.map(project => (
          <div
            key={project.id}
            className="project-card"
          >
            <div className="project-content">
                <img src={project.image} alt={project.title} />
              {/* <h3>{project.title}</h3>
              <p>{project.description}</p> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSection;
