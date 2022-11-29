import Main from './Main/Contenu/Main'
import NewCourse from './Main/NewCourse/NewCourse'
import NewExo from './Main/NewExo/NewExo';
import Sidebar from './Sidebar/Sidebar';

export const CommunityComponent = () => {
  return (
    <>
      <section className="w-full h-screen px-8 pt-8 pb-32 bg-gray-50 mx-auto overflow-auto">

        <div className="w-full md:flex md:space-y-0 w-full md:space-x-4">
          <div className="w-full md:w-2/3 h-full space-y-4">
            <div className="rounded-md bg-white w-full shadow">
              <Main />
            </div>
            <div className="rounded-md bg-white w-full shadow">
              <NewCourse />
            </div>
            <div className="rounded-md bg-white w-full shadow">
              <NewExo />
            </div>
          </div>
          <div className="w-full md:w-1/3 h-full rounded-md bg-white shadow">
            <Sidebar />
          </div>
        </div>
      </section>
    </>
  )
}