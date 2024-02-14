import { useState } from "react";
import "./Descrip.css";
import References from "../References";

function Descrip() {
  const [referenceShow, setShowReferences] = useState(true);
  return (
    <serction id="descrip" className="descrip flex-col mb-96">
      <h1 className="flex justify-center items-center h-40 w-full text-8xl text-white font-metal">
        ZERO PAGES
      </h1>
      <div className="flex">
        <div className="card flex-col w-full mx-10 py-5  bg-white">
          <img
            className="rounded-full h-40 mx-auto"
            src="./ZeroRyper.png"
            alt=""
          />
          <p className="text-xl xl:text-lg sm:text-sm px-10 py-5 w-40 font-sixtyfour">
            <div className="css-typing  xl:m-2 md:-ml-28">
              <p>I am a software developer </p>
              <p>with over 2 years of </p>
              <p>experience developing </p>
              <p>high-performance, scalable</p>
              <p>web applications. I have a </p>
              <p>strong focus on innovation </p>
              <p>and am passionate about </p>
              <p>creating solutions that </p>
              <p>the needs of businesses</p>
              <p>efficiently and effectively.</p>

            </div>
          </p>
        </div>
        <div className="card2 flex-col mx-10 w-full bg-[#222439]">
          {referenceShow ? (
            <div className="descrip ">
              <div className="flex bg-black w-auto">
                <h4 className="my-2 mx-auto px-10 text-2xl text-red-600 bg-white font-black font-bills">
                  REFERENCES
                </h4>
              </div>
              <div
                className="flex mt-1 py-2 bg-black hover:bg-stone-900 hover:border-l-8 cursor-pointer"
                onClick={() => setShowReferences(false)}
              >
                <img
                  className="flex text-white h-14 m-2 rounded-full"
                  src="./Profile_MSCSALAS.png"
                  alt="Foto Ing Salas"
                />
                <div className="my-auto">
                  <p className="flex text-xl xl:text-3xl sm:text-lg m-2 h-6 text-white rounded-full font-sixtyfour">
                    MSC Andres Salas
                  </p>
                  <p className="css-typing flex text-xl xl:text-base sm:text-xs m-1  mt-3 h-6 text-slate-400 rounded-full font-sixtyfour">
                    An excellent developer and student
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <References setShowReferences={setShowReferences} />
          )}
        </div>
      </div>
    </serction>
  );
}

export default Descrip;
