import { useState } from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Contacts from './components/Contact';
import ProjectDetails from './components/ProjectDetails';
import HeroSection from './components/HeroSection';

function App() {
  const Body = styled.div`
    background-color: ${({ theme }) => theme.bg};
    width: 100%;
    overflow-x: hidden;
  `;

  const Wrapper = styled.div`
    background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  `;

  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contacts />
          </Wrapper>
          <Footer />
          {openModal.state && <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
