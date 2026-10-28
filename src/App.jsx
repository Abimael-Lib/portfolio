import './App.css'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiVitest,
  SiGithub,
  SiGit,
  SiVite,
  SiVercel,
} from "@icons-pack/react-simple-icons";


function App() {
  
  return (
    <div>
    <header>
        <nav>
            <ul>
                <li className="li"><a href="#about-me">About me</a></li>
                <li className="li"><a href="#projects">Projects</a></li>
                <li className="li"><a href="#skills">Skills</a></li>
                <li className="li"><a href="#contact-me">Contact me</a></li>
            </ul>
        </nav>
    </header>

    <main>    
        <div id="presentation">
            <h1>I'm Carlos Abimael Gonzalez</h1>
            <h2>Front-end developer</h2>
            <img id="profile-image" src="/portfolio/images/perfil.jpg" alt="profile" />
            <div id="presentation-buttons">
                <a href="#projects"><button>Watch Projects</button></a>
                <a href="#contact-me"><button>Contact me</button></a>
            </div>
        </div>
        
        <div id="about-me">
            <h2>About me</h2>
            <p>Front-end developer passionate about creating clean and intuitive user interfaces. Currently studying an Associate Degree in Programming, focused on React, TypeScript and modern web development. I enjoy turning ideas into polished digital experiences.</p>
        </div>
        
        <div id="projects">
            <h2>Projects</h2>
            
            <div id="projects-container">
                <div id="landing-page" className="projects">
                    <h3>Gym Landing Page</h3>
                    <img src="/portfolio/images/gym-screenshot.png" alt="Gym app Screenshot" />
                    <p>A simple gym landing page</p>
                    <p>HTML + CSS</p>
                    <div className="project-buttons">
                        <a target="_blank" className="project-button" href="https://github.com/Abimael-Lib/landing-gimnasio">Code</a>
                        <a target="_blank" className="project-button" href="https://abimael-lib.github.io/landing-gimnasio/">Live Demo</a>
                    </div>
                </div>                
            </div>

        </div>

        <div id="skills">
            <h2>Skills</h2>

            <div id="skills-container">

                <div id="tools">

                    <h3>Tools</h3>
                    <ul>
                        <li><SiVercel size={32} color="#000000" /><p>Vercel</p></li>
                        <li><SiVite size={32} color="#9135FF" /><p>Vite</p></li>
                        <li><SiGit size={32} color="#F03C2E" /><p>Git</p></li>
                        <li><SiGithub size={32} color="#181717" /><p>Github</p></li>
                        <li><SiVitest size={32} color="#00FF74" /><p>Vitest</p></li>
                    </ul>
                </div>

                <div id="frameworks">
                    <h3>Frameworks</h3>
                    <ul>
                        <li><SiReact size={32} color="#61DAFB" /><p>React.js</p></li>
                        <li><SiNextdotjs size={32} color="#000000" /><p>Next.js</p></li>
                        <li><SiTailwindcss size={32} color="#06B6D4" /><p>TailwindCSS</p></li>
                    </ul>
                </div>
                
                <div id="programming-languages">

                    <h3>Programming Languages</h3>
                    <ul>
                        <li><SiTypescript size={32} color="#3178C6" /><p>TypeScript</p></li>
                        <li><SiJavascript size={32} color="#F7DF1E" /><p>JavaScript</p></li>
                        <li><SiCss size={32} color="#663399" /><p>CSS</p></li>
                        <li><SiHtml5 size={32} color="#E34F26" /><p>HTML</p></li>
                    </ul>
                </div>
                
                <div id="languages">
                    <h3>Languages</h3>
                    <ul>
                        <li>English C1</li>
                        <li>Spanish Native</li>
                        <li>Portuguese B1</li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="contact-me">
            <h2>Contact me</h2>
            <ul>
                <li><a href="mailto:abimaelmaidana007@gmail.com">abimaelmaidana007@gmail.com</a></li>
                <li><a href="https://www.linkedin.com/in/carlos-abimael-gonzalez-975086234/">Linkedin</a></li>
                <li><a href="https://x.com/CABIMAGO_7">X</a></li>
                <li><a href="https://github.com/Abimael-Lib">Github</a></li>
            </ul>
        </div>
    </main>


    <footer>
        <p>2026 Carlos Abimael Gonzalez</p>
    </footer>
    </div>
  )
}

export default App
