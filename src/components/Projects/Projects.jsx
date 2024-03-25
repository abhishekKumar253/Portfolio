import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ProjectCards from "./ProjectCards";
import chatapp from "../../Assets/Projects/chat.png";
import threads from "../../Assets/Projects/threads.png";
import github from "../../Assets/Projects/github.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={chatapp}
              title="Real Time Chat App"
              description="Created a real-time chat app using the MERN stack, with Socket.io for instant messaging. Ensured security with JWT authentication and bcrypt.js for password hashing. Managed state efficiently with Zustand. Styled with Tailwind CSS and Daisy UI. Deployed on Render for accessibility."
              ghLink="https://github.com/abhishekKumar253/mern-real-time-chat-app"
              demoLink="mern-chat-app-fue3.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={threads}
              title="Threads-Web-Clone"
              description="Created a feature-rich web app using the MERN stack. Implemented Socket.io for real-time updates, Cloudinary for secure image uploads, and JWT for user authentication. Deployed on Render for accessibility. Built with React.js, Recoil, Chakra UI, MongoDB, Node.js, Express.js, Socket.io, Cloudinary, JWT, bcrypt.js, React Icons, and Toastify."
              ghLink="https://github.com/abhishekKumar253/mern-threads-clone"
              demoLink="https://mern-threads-clone-9fm9.onrender.com"></ProjectCard>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              title="GitHub Like App"
              description="
                Built GitHub-like web app with MERN stack. Utilized React.js, Tailwind CSS for frontend, Express.js, Node.js for backend, MongoDB for storage, and Passport.js for authentication. Integrated GitHub API securely with environment variables."
              ghLink="https://github.com/abhishekKumar253/mern-github-app"
              demoLink="https://mern-github-app-cifc.onrender.com"></ProjectCard>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
