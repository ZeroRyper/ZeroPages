import { useState } from "react";
import "./Description.css";
import References from "./References";

function Description() {
  const [referenceShow, setShowReferences] = useState(true);
  return (
    <section className="flex justify-center w-full" id="descrip">
      <div className="grid grid-cols-2 gap-10 ">
        <div className="card mx-10 lg:w-[45rem] md:w-[25rem] bg-white">
          <img
            className="rounded-full h-40 mx-auto"
            src="./ZeroRyper.png"
            alt=""
          />
            <div className="css-typing lg:text-lg md:text-base mx-12 py-5 font-protest">
             I am a software developer 
             with over 2 years of 
             experience developing 
             high-performance, scalable
             web applications. I have a 
             strong focus on innovation 
             and am passionate about 
             creating solutions that 
             the needs of businesses
             efficiently and effectively.

            </div>
        </div>
        <div className="card2 mx-10 lg:w-[45rem] md:w-[25rem] bg-[#222439]">
          {referenceShow ? (
            <div className="descrip ">
              <div className="flex bg-black w-auto">
                <h4 className="my-2 mx-auto px-10 text-xl text-red-600 bg-white font-black font-bills">
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
                  <p className="flex lg:text-lg md:text-base my-2 h-6 text-white rounded-full font-protest">
                    MSC Andres Salas
                  </p>
                  <p className="css-typing flex lg:text-lg md:text-base ml-3 h-8 text-slate-400 rounded-full font-protest">
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
    </section>
  );
}

export default Description;
