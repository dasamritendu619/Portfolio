import { Facebook, Github, Instagram, Linkedin } from "lucide-react"

function Footer() {
    return (
      <footer className="dark:bg-black bg-white dark:text-gray-400 text-gray-500 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="dark:text-white text-black text-lg font-semibold mb-4">About Me</h2>
            <p className="mb-4">
                I am a Web Developer with a passion for web technologies. I love to create
                interactive and beautiful web applications.
            </p>
          </div>
          <div>
            <h2 className="dark:text-white text-black text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="dark:hover:text-white hover:text-black transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about-me"
                  className="dark:hover:text-white hover:text-black transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="dark:hover:text-white hover:text-black transition-colors duration-300"
                >
                  Skills 
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="dark:hover:text-white hover:text-black transition-colors duration-300"
                >
                    Projects
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="dark:hover:text-white hover:text-black transition-colors duration-300"
                >
                    Education
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="dark:text-white text-black text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex flex-col items-start justify-start space-y-2">
              <a target="_blank"
                href="https://github.com/dasamritendu619"
                className="dark:hover:text-white hover:text-black transition-colors duration-300 flex flex-nowrap items-center justify-start"
              >
                <Github /><span className="ml-2">Github</span>
              </a>
              <a target="_blank"
                href="https://www.linkedin.com/in/amritendu-das-b52104283/"
                className="dark:hover:text-white hover:text-black transition-colors duration-300 flex flex-nowrap items-center justify-start"
              >
                <Linkedin /><span className="ml-2">Linkdin</span>
              </a>
              <a target="_blank"
                href="https://www.instagram.com/__am_ri_ten_du__/" 
                className="dark:hover:text-white hover:text-black transition-colors duration-300 flex flex-nowrap items-center justify-start"
              >
                <Instagram /><span className="ml-2">Instagram</span>
              </a>
              <a target="_blank"
                href="https://www.facebook.com/amritendu.das.908/" 
                className="dark:hover:text-white hover:text-black transition-colors duration-300 flex flex-nowrap items-center justify-start"
              >
                <Facebook /><span className="ml-2">Facebook</span>
              </a>
            </div>
          </div>
          <div>
            <h2 className="dark:text-white text-black text-lg font-semibold mb-4">Contact Us</h2>
            <p>Dharinda-20</p>
            <p>Tamluk, Purba Mednipur,</p>
            <p>West Bengal- 721636, India</p>
            <p>Email:dasamritendu619@gmail.com</p>
            <p>Phone:+91 8116926300</p>
          </div>
          </div>
          <p className="text-center text-xs pt-8">© 2024 amritendu.tech. All rights reserved.</p>
      </footer>
    )
  }
  
  export default Footer