import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { RiFileCodeLine } from 'react-icons/ri';
import { FiFileText } from 'react-icons/fi';
import { FaPlay } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import CodeEditor from '../CodeEditor/CodeEditor';
import DescriptionEditor from './components/DescriptionEditor/DescriptionEditor';
import ErrorNotification from './components/ErrorNotification/ErrorNotification';
import SuccessNotification from './components/SuccessNotification/SuccessNotification';
import Title from '../Title/Title';

import { useMutation } from '@apollo/client';

import { CREATE_CODE } from '../../../../services/mutations/MutationsCode';

const currentUser = sessionStorage.getItem('currentUser');

const ExerciseContent = () => {
  let [lineCodes, setLineCodes] = useState(['', '', '']);

  const history = useHistory();

  const [description, setDescription] = useState();
  const [content, setContent] = useState();
  const [languages, setLanguages] = useState(['html', 'css', 'javascript']);
  const [privacy, setPrivacy] = useState('public');

  const student = JSON.parse(currentUser).data.data;

  const [createCode, { loading, error, data }] = useMutation(CREATE_CODE, {
    onCompleted: () => {
      toast.success(
        <SuccessNotification message="Votre code a ete bien enregistrer!" />
      );
      setTimeout(() => {
        history.push('/code');
      }, 1500);
    },
  });

  let [showDescription, setShowDescription] = useState(true);
  let [showCode, setShowCode] = useState(false);
  let [showResult, setShowResult] = useState(false);

  let handleCodeChange = (lineOfCodes) => {
    setLineCodes(lineOfCodes);
    // console.log(lineOfCodes)
  };

  const saveWebCode = () => {
    // console.log({ description, lineCodes, languages, privacy })
    createCode({
      variables: {
        languages: JSON.stringify(languages),
        description: description,
        content: JSON.stringify(lineCodes),
        privacy: privacy,
        studentId: student.id,
      },
    });
  };

  return (
    <>
      <div className="tab w-full overflow-auto">
        <div
          className="w-full overflow-hidden z-10"
          style={{ position: 'absolute', top: '6.5%', bottom: '120px' }}
        >
          <div
            className={
              (showDescription
                ? 'h-full opacity-100'
                : 'h-0 overflow-hidden opacity-0') + ' w-full'
            }
          >
            <DescriptionEditor
              setDescription={setDescription}
              setPrivacy={setPrivacy}
              saveWebCode={saveWebCode}
              privacy={privacy}
            />
          </div>

          <div
            className={
              (showCode
                ? 'h-full opacity-100'
                : 'h-0 overflow-hidden opacity-0') + ' w-full'
            }
          >
            <CodeEditor
              lineOfCode={lineCodes}
              handleCodeChange={handleCodeChange}
              setPrivacy={setPrivacy}
              privacy={privacy}
              saveWebCode={saveWebCode}
            />
          </div>
          <div
            className={
              (showResult
                ? 'h-full opacity-100'
                : 'h-0 overflow-hidden shadow opacity-0') + ' w-full bg-white'
            }
          >
            <div className="bg-gray-500 w-full px-6 py-3">
              <Title
                setPrivacy={setPrivacy}
                saveWebCode={saveWebCode}
                privacy={privacy}
              />
            </div>
            <iframe
              className="block w-full h-full shadow-lg border-2 border-gray-200"
              id="runCode"
            ></iframe>
          </div>
        </div>

        <div
          className="w-full bg-gray-500 flex h-14 pr-5 text-gray-700 float-right"
          style={{ position: 'absolute', bottom: '5.75%' }}
        >
          <button
            className="block px-6 py-3 w-full text-gray-50 bg-transparent hover:shadow-md outline-none focus:outline-none"
            onClick={(e) => {
              setShowDescription(true);
              setShowCode(false);
              setShowResult(false);
            }}
          >
            <FiFileText className="inline mr-2" size="2em" />
            <span>Description</span>
          </button>
          <button
            className="block px-6 py-3 w-full text-gray-50 bg-transparent hover:shadow-md outline-none focus:outline-none"
            onClick={(e) => {
              setShowDescription(false);
              setShowCode(true);
              setShowResult(false);
            }}
          >
            <RiFileCodeLine className="inline mr-2" size="2em" />
            <span>Code</span>
          </button>
          <button
            className="bg-transparent w-full px-6 text-gray-50 active:bg-indigo-800 text-sm font-bold uppercase outline-none focus:outline-none"
            type="button"
            style={{ transition: 'all .15s ease' }}
            onClick={(e) => {
              var code = document.getElementById('runCode').contentWindow
                .document;
              code.open();
              code.writeln(
                lineCodes[0] +
                  '<style>' +
                  lineCodes[1] +
                  '</style>' +
                  '<script>' +
                  lineCodes[2] +
                  '</script>'
              );
              code.close();
              setShowDescription(false);
              setShowCode(false);
              setShowResult(true);
            }}
          >
            <span>RUN</span>
            <FaPlay className="inline ml-2 text-green-500" size="1.2em" />
          </button>
        </div>
      </div>
      <ToastContainer
        toastClassName="toast"
        position="top-left"
        autoClose={15000}
        showProgressBar
        newestOnTop={true}
        closeOnClick
      ></ToastContainer>
    </>
  );
};

export default ExerciseContent;
