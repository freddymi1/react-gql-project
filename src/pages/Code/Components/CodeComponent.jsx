import { RiCodeSSlashLine } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa';
import Code1 from './Code1/Code1';
import ListLanguage from './ListLanguage/Listlanguage'

export const CodeComponent = ({ showModal, setShowModal, allCodes }) => {
  console.log("SHOW", showModal)
  return (
    <>
      <section className="w-full bg-gray-50 h-screen space-y-4 pb-32 overflow-auto">
        <div className="container flex pt-3 px-6 mx-auto">
          <div className="w-2/3 float-left">
            <label className="text-gray-500 text-xl font-bold">
              <RiCodeSSlashLine size="1.5em" className="text-gray-400 inline-block" />&nbsp;
              CODES
            </label>
          </div>
        </div>

        <div className="container pt-3 py-6 px-6 mx-auto">
          {
            allCodes.map((ac, i) => (
              <Code1 key={i} codeData={ac} />
            ))
          }
        </div>

        <button className="bg-green-500 text-white text-center absolute bottom-24 right-6 p-2 rounded-full shadow hover:bg-grey-lightest outline-none focus:outline-none"
          type='button'
          style={{ transition: 'all .4s ease' }}
          onClick={() => setShowModal(true)}
        >
          <FaPlus classname="text-lg  text-center" size="2em" />
        </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"

            >
              <div className="relative  w-auto my-6 mx-auto max-w-6xl">
                {/*content*/}
                <div className="border-0  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 py-3 rounded-t">
                    <h3 className="text-lg font-semibold text-gray-500">
                      Choisir un langage
                    </h3>
                    <button
                      className="p-1 ml-auto bg-white border-0 text-gray-900 float-right text-3xl leading-3 font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-red-400 -mt-1 text-white h-6 w-6 text-2xl block -leading-3 outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-2 overflow-auto" style={{ height: "400px" }}>
                    <ListLanguage />
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end px-6 py-3 rounded-b">
                    <button
                      className="text-white bg-red-500 font-bold uppercase px-6 py-1 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => setShowModal(false)}
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </section>
    </>
  )
}