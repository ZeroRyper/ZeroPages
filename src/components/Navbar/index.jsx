import "./Navbar.css";
import { Link } from "react-scroll";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { IoMail } from "react-icons/io5";

function Navbar() {
  return (
    <section className=" navbarflex-col">
      <div className="flex justify-between py-7">
        <img className="flex ml-4" src="../ZR_1.png" alt="" />
        <h1 className="flex text-6xl text-white font-metal -mr-32">
          ZERO PAGES
        </h1>
        <div className="flex">
          <a
            className="m-auto mr-4"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ZeroRyper"
          >
            <BiLogoGithub style={{ color: "white", fontSize: "2.5rem" }} />
          </a>
          <a
            className="m-auto mr-4"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/erick-irvin-padilla-mercado-786463194/"
          >
            <BiLogoLinkedinSquare
              style={{ color: "white", fontSize: "2.5rem" }}
            />
          </a>
          <a className="m-auto mr-4" href="mailto:erick100520@gmail.com">
            <IoMail style={{ color: "white", fontSize: "2.5rem" }} />
          </a>
        </div>
      </div>
      <div className="bg-white py-0.5">
        <ul className="navbar flex justify-around pt-0.5">
          <li className=" text-white font-nosifer">
            <Link
              to="descrip"
              spy={true}
              smooth={true}
              offset={40}
              duration={500}
              className="cursor-pointer"
            >
              About Me
            </Link>
          </li>
          <li className=" text-white font-nosifer">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              EXP
            </Link>
          </li>
          <li className=" text-white font-nosifer">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              PROJECTS
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
