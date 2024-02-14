import "./Navbar.css";
import { Link } from "react-scroll";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { useState, useEffect } from "react";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSticky, setIsSticky] = useState('sticky');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setIsSticky('show');
      } else if (currentScrollPos < prevScrollPos) {
        setIsSticky('sticky');
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);



  return (
    <section className={`navbar flex-col mb-40 z-50 ${isSticky}`}>
      <div className="flex w-full justify-between py-7 h-20 ">
        <div className="flex items-center w-2/12">
          <img className=" w-20 " src="./ZR_1.png" alt="Icon ZeroRyper" />
        </div>
        <ul className=" flex items-center justify-around w-10/12">
          <li className="  text-[#cacaca] hover:text-white font-nosifer">
            <Link
              to="descrip"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className="cursor-pointer"
            >
              About Me
            </Link>
          </li>
          <li className="  text-[#cacaca] hover:text-white font-nosifer ">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className="cursor-pointer"
            >
              EXPERIENCES
            </Link>
          </li>
          <li className="  text-[#cacaca] hover:text-white font-nosifer">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className="cursor-pointer"
            >
              PROJECTS
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-around w-2/12">
          <div className="flex justify-around w-48">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ZeroRyper"
            >
              <BiLogoGithub style={{ color: "white", fontSize: "2.5rem" }} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/erick-irvin-padilla-mercado-786463194/"
            >
              <BiLogoLinkedinSquare
                style={{ color: "white", fontSize: "2.5rem" }}
              />
            </a>
            <a href="mailto:erick100520@gmail.com">
              <IoMail style={{ color: "white", fontSize: "2.5rem" }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
