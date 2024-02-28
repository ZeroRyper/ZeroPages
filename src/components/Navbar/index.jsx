import "./Navbar.css";
import { Link } from "react-scroll";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { useState, useEffect } from "react";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSticky, setIsSticky] = useState("sticky");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setIsSticky("show");
      } else if (currentScrollPos < prevScrollPos) {
        setIsSticky("sticky");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <section className={`navbar flex-col -mb-20 z-50 ${isSticky}`}>
      <div className="flex w-full py-7 h-20 ">
        <div className="flex items-center mx-2 xl:w-2/12 md:w-2/12">
          <img
            className="w-10 sm:w-8 mr-4"
            src="./ZR_1.png"
            alt="Icon ZeroRyper"
          />
          <p className="xl:text-lg md:text-base text-white font-metal">
            ZERO PAGE
          </p>
        </div>
        <ul className=" flex items-center justify-around w-10/12">
          <li className="  text-[#cacaca] hover:text-white font-nosifer">
            <Link
              to="descrip"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
              className="cursor-pointer lg:text-sm md:text-xs"
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
              className="cursor-pointer lg:text-sm md:text-sm"
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
              className="cursor-pointer lg:text-sm md:text-sm"
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
              <BiLogoGithub className="text-2xl" style={{ color: "white" }} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/erick-irvin-padilla-mercado-786463194/"
            >
              <BiLogoLinkedinSquare
                className="text-2xl"
                style={{ color: "white" }}
              />
            </a>
            <a href="mailto:erick100520@gmail.com">
              <IoMail className="text-2xl" style={{ color: "white" }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
