import { SlActionUndo } from "react-icons/sl";

function References({ setShowReferences }) {
  return (
    <div className=" bg-black h-full  ">
      <div className="flex bg-slate-800 pl-2">
        <SlActionUndo
          className="flex my-auto mr-2 cursor-pointer"
          onClick={() => setShowReferences(true)}
          style={{ color: "white", fontSize: "3rem" }}
        />
        <img
          className="flex text-white h-14 m-2 rounded-full"
          src="../Profile_MSCSALAS.png"
          alt="Foto Ing Salas"
        />
        <div className="my-auto">
          <p className="flex text-xl xl:text-3xl sm:text-base text-white rounded-full m-2 h-6 font-sixtyfour">
            MSC Andres Salas
          </p>
          <p className="flex text-xl xl:text-2xl sm:text-base text-slate-400 rounded-full m-2 mt-3 h-6 font-sixtyfour">
            2023
          </p>
        </div>
      </div>
      <div className="flex h-5/6">
        <p className="flex my-auto ml-5 mr-4 w-8/12 p-2 xl:text-sm sm:text-xs rounded-3xl text-white bg-slate-500 font-sixtyfour">
          Erick Irvin Padilla Mercado is a highly qualified Full Stack developer
          with extensive experience in designing, developing and maintaining
          full-stack web applications. You have a deep understanding of both
          client-side and server-side technologies, and are able to work
          independently and as part of a team.
        </p>
        <p className="flex mt-auto ml-auto mr-4 mb-5 w-4/12 p-2 rounded-3xl xl:text-sm sm:text-xs text-white bg-sky-600 font-sixtyfour">
        Thanks Ing Salas :).
        </p>
      </div>
    </div>
  );
}

export default References;
