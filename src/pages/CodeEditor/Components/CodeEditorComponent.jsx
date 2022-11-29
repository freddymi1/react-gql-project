import ContaintCodeEditor from './ContaintCodeEditor/ContaintCodeEditor';
import Title from './Title/Title';

export const CodeEditorComponent = () => {
  return(
    <>
    <section className="bg-white">
        <div className="container pt-3 pb-6 px-6 mx-auto">
            <h1>Progressbar</h1>
        </div>
    </section>
    {/* Section Titre */}
    <section className="bg-white">
        <div className="container pt-3 pb-6 px-6 mx-auto">
            <Title />
        </div>
    </section>
    {/* Fin Section Titre */}
    {/* Section Titre */}

    <div className="block h-screen overflow-y-auto pb-96">
        <section className="bg-white">
            <div className="container pt-3 pb-2 px-6 mx-auto">
                <ContaintCodeEditor />
            </div>
        </section>
    </div>
    </>
  )
}