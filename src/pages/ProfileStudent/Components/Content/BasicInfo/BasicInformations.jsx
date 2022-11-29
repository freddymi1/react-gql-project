import React, { useState, useRef } from 'react';
import {
  FaUserTie,
  FaMapMarkerAlt,
  FaUserGraduate,
  FaLaptopCode,
  FaArrowRight,
  FaGamepad,
  FaRegMoneyBillAlt,
} from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';
import { BsCloudUpload } from 'react-icons/bs';
import { AiTwotoneMail, AiOutlineCode } from 'react-icons/ai';
import { SiOpslevel } from 'react-icons/si';
import { CgGenderFemale } from 'react-icons/cg';
import { HiCheck } from 'react-icons/hi';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './Style/PhoneNumber.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Styles/OtherComp.css';

export default function BasicInformations() {
  const { phone, setPhone } = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [active, setActive] = useState('');
  const [height, setHeight] = useState('0px');
  const [otherHeight, setOtherHeight] = useState('0px');
  const [jobHeight, setJobHeight] = useState('0px');
  const [modePHeight, setModePHeight] = useState('0px');
  const content = useRef(null);
  const otherContent = useRef(null);
  const jobContent = useRef(null);
  const modePContent = useRef(null);

  function toggleCompetence() {
    setActive(active === '' ? 'active' : '');
    setHeight(
      active === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );
    // console.log(content.current.scrollHeight)
  }
  function toggleLevel() {
    setActive(active === '' ? 'active' : '');
    setOtherHeight(
      active === 'active' ? '0px' : `${otherContent.current.scrollHeight}px`
    );
    // console.log(otherContent.current.scrollHeight)
  }
  function toggleJob() {
    setActive(active === '' ? 'active' : '');
    setJobHeight(
      active === 'active' ? '0px' : `${jobContent.current.scrollHeight}px`
    );
    // console.log(jobContent.current.scrollHeight)
  }
  function toggleModeP() {
    setActive(active === '' ? 'active' : '');
    setModePHeight(
      active === 'active' ? '0px' : `${modePContent.current.scrollHeight}px`
    );
    // console.log(modePContent.current.scrollHeight)
  }

  return (
    <>
      <div className="w-full">
        <form className="space-y-4">
          <div className="w-full h-auto block md:flex md:space-x-4">
            <div className="w-full h-auto md:w-1/2 block space-y-4 p-4 bg-gray-50">
              <fieldset>
                <legend className="text-gray-500 font-semibold">
                  Nom et prenoms
                </legend>
                <div className="w-full flex">
                  <span className="input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest">
                    <FaUserTie className="text-green-600" size="2em" />
                  </span>
                  <input
                    className="input w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none"
                    type="text"
                    placeholder="Nom et prenoms"
                  />
                </div>
              </fieldset>
              <fieldset>
                <legend className="text-gray-500 font-semibold">
                  Date de naissance
                </legend>
                <div className="w-full flex">
                  <span className="input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest">
                    <BiCalendar className="text-green-600" size="2em" />
                  </span>
                  <DatePicker
                    className="w-full pl-4 h-12 text-gray-500 font-semibold outline-none focus:outline-none"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </fieldset>
              <fieldset className="w-full">
                <legend className="text-gray-500 font-semibold">Genre</legend>
                <div className="w-full flex">
                  <span className="input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest">
                    <CgGenderFemale className="text-green-600" size="2em" />
                  </span>
                  <select className=" w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none">
                    <option value="">Genre...</option>
                    <option value="homme">Homme</option>
                    <option value="femme">Femme</option>
                  </select>
                </div>
              </fieldset>
            </div>
            <div className="w-full h-auto mt-4 md:mt-0 md:w-1/2 block space-y-4 p-4 bg-gray-50">
              <fieldset>
                <legend className="text-gray-500 font-semibold">Adresse</legend>
                <div className="w-full flex">
                  <span className="input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest">
                    <FaMapMarkerAlt className="text-green-600" size="2em" />
                  </span>
                  <input
                    className="input w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none"
                    type="text"
                    placeholder="Adresse"
                  />
                </div>
              </fieldset>
              <fieldset>
                <legend className="text-gray-500 font-semibold">
                  Adresse email
                </legend>
                <div className="w-full flex">
                  <span className="input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest">
                    <AiTwotoneMail className="text-green-600" size="2em" />
                  </span>
                  <input
                    className="input w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </fieldset>
              <fieldset>
                <legend className="text-gray-500 font-semibold">Mobile</legend>
                <div className="w-full">
                  <PhoneInput
                    inputExtraProps={{
                      name: 'phone',
                      required: true,
                      autoFocus: true,
                    }}
                    country={'us'}
                    value={phone}
                    onChange={setPhone}
                    inputClass="w-full h-12 text-gray-500 font-semibold outline-none focus:outline-none"
                    containerClass="w-full h-12 text-gray-500 font-semibold outline-none focus:outline-none"
                  />
                </div>
              </fieldset>
            </div>
          </div>
          <div className="w-full block md:flex md:space-x-4">
            <div className="w-full md:w-1/2 p-4 bg-gray-50">
              <fieldset>
                <legend className="text-gray-500 font-semibold">
                  Tes principales ambitions
                </legend>
                <textarea
                  class="resize-y w-full px-5 py-2 h-32 text-gray-500 font-semibold outline-none focus:outline-none"
                  placeholder="Peux-tu nous donner tes principales ambitions à t'inscrire chez nous ? Cette question est requise*"
                ></textarea>
              </fieldset>
            </div>
            <div className="w-full mt-4 md:mt-0  space-y-4 md:w-1/2 p-4 bg-gray-50">
              <fieldset>
                <legend className="text-gray-500 font-semibold">
                  Niveau d'etudes
                </legend>
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <input
                    className="hidden"
                    type="radio"
                    id="annee1"
                    value="annee1"
                    name="etude"
                  />
                  <label
                    className="bg-gray-400 text-white font-semibold py-2 pl-10 pr-4 cursor-pointer"
                    for="annee1"
                  >
                    Bac + 1
                  </label>

                  <input
                    className="hidden"
                    type="radio"
                    id="annee2"
                    value="annee2"
                    name="etude"
                  />
                  <label
                    className="bg-gray-400 text-white font-semibold py-2 pl-10 pr-4 cursor-pointer"
                    for="annee2"
                  >
                    Bac + 2
                  </label>

                  <input
                    className="hidden"
                    type="radio"
                    id="annee3"
                    value="annee3"
                    name="etude"
                  />
                  <label
                    className="bg-gray-400 text-white font-semibold py-2 pl-10 pr-4 cursor-pointer"
                    for="annee3"
                  >
                    Bac + 3
                  </label>

                  <input
                    className="hidden"
                    type="radio"
                    id="annee4"
                    value="annee4"
                    name="etude"
                  />
                  <label
                    className="bg-gray-400 text-white font-semibold py-2 pl-10 pr-4 cursor-pointer"
                    for="annee4"
                  >
                    Bac + 4
                  </label>

                  <input
                    className="hidden"
                    type="radio"
                    id="annee5"
                    value="annee5"
                    name="etude"
                  />
                  <label
                    className="bg-gray-400 text-white font-semibold py-2 pl-10 pr-4 cursor-pointer"
                    for="annee5"
                  >
                    Bac + 5
                  </label>

                  <div className="other_level">
                    <input
                      className="hidden"
                      type="radio"
                      id="autre"
                      value="autre"
                      name="etude"
                    />
                    <p
                      className="otherLevel bg-gray-400 text-white font-semibold py-2 pl-10 pr-4 cursor-pointer"
                      for="autre"
                      onClick={toggleLevel}
                    >
                      Autres
                    </p>
                  </div>
                </div>

                <div
                  ref={otherContent}
                  style={{ maxHeight: `${otherHeight}` }}
                  className="level_content"
                >
                  <div className="mt-2 w-full justify-items-auto">
                    <fieldset>
                      <legend className="text-gray-500 font-semibold">
                        Votre niveau d'etude
                      </legend>
                      <div className="w-full flex">
                        <span className="input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest">
                          <SiOpslevel className="text-green-600" size="2em" />
                        </span>
                        <input
                          className="input w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none"
                          type="text"
                          placeholder="Mettez votre niveau d'etude ici"
                        />
                      </div>
                    </fieldset>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend className="text-gray-500 font-semibold">Filiere</legend>
                <div className="w-full flex">
                  <span className="input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest">
                    <FaUserGraduate className="text-green-600" size="2em" />
                  </span>
                  <input
                    className="input w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none"
                    type="text"
                    placeholder="Mettez votre filiere ici"
                  />
                </div>
              </fieldset>
            </div>
          </div>
          <div className="w-full block md:flex">
            <div className="w-full p-4 bg-gray-50">
              <fieldset>
                <legend className="text-gray-500 font-semibold">
                  Tes experiences professionnels(Si il y en a)
                </legend>
                <textarea
                  class="resize-y px-5 py-2 w-full h-32 text-gray-500 font-semibold outline-none focus:outline-none"
                  placeholder="As-tu déjà travaillé ? Si oui parle nous de tes expériences les plus significatives ! (Élevage de poulet de chair ça compte !)"
                ></textarea>
              </fieldset>
            </div>
          </div>
          <div className="w-full block md:flex md:space-x-4">
            <div className="w-full md:w-1/2 p-4 bg-gray-50">
              <div className="my-1 px-1 w-full ">
                <label className="text-2xl text-center text-gray-500"></label>
                <div className="flex w-full items-center justify-center">
                  <label
                    className="w-full flex flex-col items-center hover:bg-blue-100 py-6 bg-white text-blue  tracking-wide border border-blue cursor-pointer hover:text-blue-500"
                    style={{ transition: 'all .4s' }}
                  >
                    <BsCloudUpload className="text-gray-500" size="3em" />
                    <span className="mt-2 text-base text-gray-500 font-bold leading-normal">
                      Importer vos CV (PDF, JPG)
                    </span>
                    <span className="bolk text-gray-500">
                      Taille maximale : 10Mo
                    </span>
                    <input type="file" class="hidden" />
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full mt-4 md:mt-0 space-y-4 md:w-1/2 p-4 bg-gray-50">
              <div className="my-1 px-1 w-full ">
                <label className="text-2xl text-center text-gray-500"></label>
                <div className="flex w-full items-center justify-center">
                  <label
                    className="w-full flex flex-col items-center hover:bg-blue-100 py-6 bg-white text-blue  tracking-wide border border-blue cursor-pointer hover:text-blue-500"
                    style={{ transition: 'all .4s' }}
                  >
                    <BsCloudUpload className="text-gray-500" size="3em" />
                    <span className="mt-2 text-base text-gray-500 font-bold leading-normal">
                      Importer vos CIN (PDF, JPG)
                    </span>
                    <span className="bolk text-gray-500">
                      Taille maximale : 10Mo
                    </span>
                    <input type="file" class="hidden" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full block md:flex">
            <div className="w-full space-y-4 p-4 bg-gray-50">
              <fieldset>
                <legend className="text-gray-500 font-semibold">
                  URL de votre site web ou Linkedin ou portfolio
                </legend>
                <textarea
                  class="resize-y px-5 py-2 w-full h-32 text-gray-500 font-semibold outline-none focus:outline-none"
                  placeholder="A présent, bb, on aura besoin de ton site Web ou tout autre lien utile te concernant :
                                LinkedIn, Portfolio, CV Online ..."
                ></textarea>
              </fieldset>
              <fieldset>
                <legend className="text-gray-500 font-semibold">
                  Renconte ici une anecdote drole sur toi
                </legend>
                <textarea
                  class="resize-y px-5 py-2 w-full h-32 text-gray-500 font-semibold outline-none focus:outline-none"
                  placeholder="Racontes-moi une anecdote drôle sur toi (oui on aime l’humour chez SAYNA)"
                ></textarea>
              </fieldset>
            </div>
          </div>

          <div className="w-full block md:flex md:space-x-4">
            <div className="w-full h-auto md:w-1/2 block space-y-4 p-4 bg-gray-50">
              <fieldset>
                <legend className="text-gray-500 font-semibold">
                  Numero de ton contact
                </legend>
                <div className="w-full">
                  <PhoneInput
                    inputExtraProps={{
                      name: 'phone',
                      required: true,
                      autoFocus: true,
                    }}
                    country={'us'}
                    value={phone}
                    onChange={setPhone}
                    inputClass="w-full h-12 text-gray-500 font-semibold outline-none focus:outline-none"
                    containerClass="w-full h-12 text-gray-500 font-semibold outline-none focus:outline-none"
                  />
                </div>
              </fieldset>
              <fieldset>
                <legend className="text-gray-500 font-semibold">
                  Language que tu a deja utilisee
                </legend>
                <div className="w-full flex">
                  <span className="input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest">
                    <FaLaptopCode className="text-green-600" size="2em" />
                  </span>
                  <input
                    className="input w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none"
                    type="text"
                    placeholder="Exemple PHP, JAVA, Python, Ruby, ..."
                  />
                </div>
              </fieldset>
              <div className="w-full space-y-8 bg-gray-50">
                <fieldset className="block lg:flex flex-col">
                  <legend className="text-gray-500 font-semibold">
                    Parcour que vous souhaitez suivre
                  </legend>
                  <label className="competence flex justify-between leading-tight py-1 space-x-4 px-2 cursor-pointer w-full bg-gray-100 border-2 border-gray-300 justify-start items-start rounded-md">
                    <div className="w-1/5">
                      <div
                        className="w-7 h-7 mt-0.5 border-2 border-gray-50 bg-white rounded-md text-center text-gray-400 font-semibold select-none"
                        style={{ lineHeight: '1.5em' }}
                      >
                        A
                      </div>
                    </div>

                    <div className="w-4/5 flex justify-between leading-tight">
                      <div
                        className="text-gray-400 mt-1 -ml-12 font-semibold select-none"
                        style={{ lineHeight: '1.8em' }}
                      >
                        Developpeur Web
                      </div>
                      <div className="w-8 h-8 relative text-right flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                        <input
                          type="checkbox"
                          name="parkour1"
                          className="opacity-0 absolute right-0"
                        />
                        <HiCheck
                          size="5em"
                          className="icons fill-current hidden text-gray-400 right-0 pointer-events-none"
                        />
                      </div>
                    </div>
                  </label>

                  <label className="competence flex py-1 mt-2 space-x-4 cursor-pointer px-2 w-full bg-gray-100 border-2 border-gray-300 justify-start items-start rounded-md">
                    <div className="w-1/5">
                      <div
                        className="w-7 h-7 mt-0.5 border-2 border-gray-50 bg-white rounded-md text-center text-gray-400 font-semibold select-none"
                        style={{ lineHeight: '1.5em' }}
                      >
                        B
                      </div>
                    </div>

                    <div className="w-4/5 flex justify-between leading-tight">
                      <div
                        className="text-gray-400 mt-1 -ml-12 font-semibold select-none"
                        style={{ lineHeight: '1.8em' }}
                      >
                        Marketing Digital
                      </div>
                      <div className="w-8 h-8 relative text-right flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                        <input
                          type="checkbox"
                          name="parkour2"
                          className="opacity-0 absolute right-0"
                        />
                        <HiCheck
                          size="5em"
                          className="icons fill-current hidden text-gray-400 right-0 pointer-events-none"
                        />
                      </div>
                    </div>
                  </label>
                </fieldset>
              </div>
              <fieldset>
                <legend className="text-gray-500 font-semibold">
                  Votre centre d'interet
                </legend>
                <div className="w-full flex">
                  <span className="input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest">
                    <FaGamepad className="text-green-600" size="2em" />
                  </span>
                  <input
                    className="input w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none"
                    type="text"
                    placeholder="Exemple Foot-Ball, Lecture, Chant, ..."
                  />
                </div>
              </fieldset>
            </div>
            <div className="w-full mt-4 md:mt-0 md:w-1/2 block">
              <div className="w-full space-y-8 p-4 bg-gray-50">
                <fieldset>
                  <legend className="text-gray-500 font-semibold">
                    Competence souhaitee
                  </legend>
                  <label className="competence flex py-1 space-x-4 px-4 cursor-pointer w-auto bg-gray-100 border-2 border-gray-300 justify-start items-start rounded-md">
                    <div
                      className="w-7 h-7 mt-0.5 border-2 border-gray-50 bg-white rounded-md text-center text-gray-400 font-semibold select-none"
                      style={{ lineHeight: '1.5em' }}
                    >
                      A
                    </div>
                    <div
                      className="text-gray-400 mt-1 font-semibold select-none"
                      style={{ lineHeight: '1.8em' }}
                    >
                      Developpeur Front-End
                    </div>
                    <div className="w-8 h-8 float-right right-6 absolute text-right flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                      <input
                        type="checkbox"
                        name="competence1"
                        className="opacity-0 absolute"
                      />
                      <HiCheck
                        size="5em"
                        className="icons fill-current hidden text-gray-400 pointer-events-none"
                      />
                    </div>
                  </label>

                  <label className="competence flex py-1 mt-2 space-x-4 cursor-pointer px-4 w-auto bg-gray-100 border-2 border-gray-300 justify-start items-start rounded-md">
                    <div
                      className="w-7 h-7 mt-0.5 border-2 border-gray-50 bg-white rounded-md text-center text-gray-400 font-semibold select-none"
                      style={{ lineHeight: '1.5em' }}
                    >
                      B
                    </div>
                    <div
                      className="text-gray-400 mt-1 font-semibold select-none"
                      style={{ lineHeight: '1.8em' }}
                    >
                      Developpeur Back-End
                    </div>
                    <div className="w-8 h-8 float-right right-6 absolute text-right flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                      <input
                        type="checkbox"
                        name="competence2"
                        className="opacity-0 absolute"
                      />
                      <HiCheck
                        size="5em"
                        className="icons fill-current hidden text-gray-400 pointer-events-none"
                      />
                    </div>
                  </label>

                  <label className="competence flex py-1 mt-2 space-x-4 cursor-pointer px-4 w-auto bg-gray-100 border-2 border-gray-300 justify-start items-start rounded-md">
                    <div
                      className="w-7 h-7 mt-0.5 border-2 border-gray-50 bg-white rounded-md text-center text-gray-400 font-semibold select-none"
                      style={{ lineHeight: '1.5em' }}
                    >
                      C
                    </div>
                    <div
                      className="text-gray-400 mt-1 font-semibold select-none"
                      style={{ lineHeight: '1.8em' }}
                    >
                      Product Design
                    </div>
                    <div className="w-8 h-8 float-right right-6 absolute text-right flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                      <input
                        type="checkbox"
                        name="competence3"
                        className="opacity-0 absolute"
                      />
                      <HiCheck
                        size="5em"
                        className="icons fill-current hidden text-gray-400 pointer-events-none"
                      />
                    </div>
                  </label>

                  <label className="competence flex py-1 mt-2 space-x-4 cursor-pointer px-4 w-auto bg-gray-100 border-2 border-gray-300 justify-start items-start rounded-md">
                    <div
                      className="w-7 h-7 mt-0.5 border-2 border-gray-50 bg-white rounded-md text-center text-gray-400 font-semibold select-none"
                      style={{ lineHeight: '1.5em' }}
                    >
                      D
                    </div>
                    <div
                      className="text-gray-400 mt-1 font-semibold select-none"
                      style={{ lineHeight: '1.8em' }}
                    >
                      Data Science
                    </div>
                    <div className="w-8 h-8 float-right right-6 absolute text-right flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                      <input
                        type="checkbox"
                        name="competence4"
                        className="opacity-0 absolute"
                      />
                      <HiCheck
                        size="5em"
                        className="icons fill-current hidden text-gray-400 pointer-events-none"
                      />
                    </div>
                  </label>

                  <label className="competence flex py-1 mt-2 space-x-4 cursor-pointer px-4 w-auto bg-gray-100 border-2 border-gray-300 justify-start items-start rounded-md">
                    <div
                      className="w-7 h-7 mt-0.5 border-2 border-gray-50 bg-white rounded-md text-center text-gray-400 font-semibold select-none"
                      style={{ lineHeight: '1.5em' }}
                    >
                      E
                    </div>
                    <div
                      className="text-gray-400 mt-1 font-semibold select-none"
                      style={{ lineHeight: '1.8em' }}
                    >
                      Developpeur App.Mobile
                    </div>
                    <div className="w-8 h-8 float-right right-6 absolute text-right flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                      <input
                        type="checkbox"
                        name="competence5"
                        className="opacity-0 absolute"
                      />
                      <HiCheck
                        size="5em"
                        className="icons fill-current hidden text-gray-400 pointer-events-none"
                      />
                    </div>
                  </label>

                  <label className="competence flex py-1 mt-2 space-x-4 cursor-pointer px-4 w-auto bg-gray-100 border-2 border-gray-300 justify-start items-start rounded-md">
                    <div
                      className="w-7 h-7 mt-0.5 border-2 border-gray-50 bg-white rounded-md text-center text-gray-400 font-semibold select-none"
                      style={{ lineHeight: '1.5em' }}
                    >
                      F
                    </div>
                    <div
                      className="text-gray-400 mt-1 font-semibold select-none"
                      style={{ lineHeight: '1.8em' }}
                    >
                      Designer / Web Designer
                    </div>
                    <div className="w-8 h-8 float-right right-6 absolute text-right flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                      <input
                        type="checkbox"
                        name="competence6"
                        className="opacity-0 absolute"
                      />
                      <HiCheck
                        size="5em"
                        className="icons fill-current hidden text-gray-400 pointer-events-none"
                      />
                    </div>
                  </label>
                  <div className="competence_other">
                    <p
                      className="accordion_o competence flex py-1 mt-2 space-x-4 cursor-pointer px-4 w-auto bg-gray-100 border-2 border-gray-300 justify-start items-start rounded-md"
                      onClick={toggleCompetence}
                    >
                      <div
                        className="w-7 h-7 mt-0.5 border-2 border-gray-50 bg-green-700 rounded-md text-center text-white font-semibold select-none"
                        style={{ lineHeight: '1.5em' }}
                      >
                        G
                      </div>
                      <div
                        className="text-gray-400 mt-1 font-semibold select-none"
                        style={{ lineHeight: '1.8em' }}
                      >
                        Autre
                      </div>
                      <div className="w-8 h-8 float-right right-6 absolute text-right flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                        <input
                          type="checkbox"
                          name="autresCompetence"
                          className="opacity-0 absolute"
                        />
                        <HiCheck
                          size="5em"
                          className="icons fill-current hidden text-gray-400 pointer-events-none"
                        />
                      </div>
                    </p>
                    <div
                      ref={content}
                      style={{ maxHeight: `${height}` }}
                      className="competence_content"
                    >
                      <div className="mt-2 w-full justify-items-auto">
                        <fieldset>
                          <legend className="text-gray-500 font-semibold">
                            Votre competence souhaitee
                          </legend>
                          <div className="w-full flex">
                            <span className="input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest">
                              <AiOutlineCode
                                className="text-green-600"
                                size="2em"
                              />
                            </span>
                            <input
                              className="input w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none"
                              type="text"
                              placeholder="Mettez votre competence souhaitee ici"
                            />
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          <div className="w-full h-auto block md:flex md:space-x-4">
            <div className="w-full h-auto md:w-1/2 block space-y-4 p-4 bg-gray-50">
              <fieldset className="block lg:flex flex-col">
                <legend className="text-gray-500 font-semibold">
                  Type de travail que tu cherche
                </legend>
                <label className="competence flex justify-between leading-tight py-1 space-x-4 px-2 cursor-pointer w-full bg-gray-100 border-2 border-gray-300 justify-start items-start rounded-md">
                  <div className="w-1/5">
                    <div
                      className="w-7 h-7 mt-0.5 border-2 border-gray-50 bg-white rounded-md text-center text-gray-400 font-semibold select-none"
                      style={{ lineHeight: '1.5em' }}
                    >
                      A
                    </div>
                  </div>

                  <div className="w-4/5 flex justify-between leading-tight">
                    <div
                      className="text-gray-400 mt-1 -ml-12 font-semibold select-none"
                      style={{ lineHeight: '1.8em' }}
                    >
                      CDI Madagascar
                    </div>
                    <div className="w-8 h-8 relative text-right flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                      <input
                        type="checkbox"
                        name="trav1"
                        className="opacity-0 absolute right-0"
                      />
                      <HiCheck
                        size="5em"
                        className="icons fill-current hidden text-gray-400 right-0 pointer-events-none"
                      />
                    </div>
                  </div>
                </label>

                <label className="competence flex justify-between leading-tight py-1 mt-2 space-x-4 px-2 cursor-pointer w-full bg-gray-100 border-2 border-gray-300 justify-start items-start rounded-md">
                  <div className="w-1/5">
                    <div
                      className="w-7 h-7 mt-0.5 border-2 border-gray-50 bg-white rounded-md text-center text-gray-400 font-semibold select-none"
                      style={{ lineHeight: '1.5em' }}
                    >
                      B
                    </div>
                  </div>

                  <div className="w-4/5 flex justify-between leading-tight">
                    <div
                      className="text-gray-400 mt-1 -ml-12 font-semibold select-none"
                      style={{ lineHeight: '1.8em' }}
                    >
                      CDI a Mada pour l'international
                    </div>
                    <div className="w-8 h-8 relative text-right flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                      <input
                        type="checkbox"
                        name="trav2"
                        className="opacity-0 absolute right-0"
                      />
                      <HiCheck
                        size="5em"
                        className="icons fill-current hidden text-gray-400 right-0 pointer-events-none"
                      />
                    </div>
                  </div>
                </label>
                <label className="competence flex justify-between leading-tight py-1 mt-2 space-x-4 px-2 cursor-pointer w-full bg-gray-100 border-2 border-gray-300 justify-start items-start rounded-md">
                  <div className="w-1/5">
                    <div
                      className="w-7 h-7 mt-0.5 border-2 border-gray-50 bg-white rounded-md text-center text-gray-400 font-semibold select-none"
                      style={{ lineHeight: '1.5em' }}
                    >
                      C
                    </div>
                  </div>

                  <div className="w-4/5 flex justify-between leading-tight">
                    <div
                      className="text-gray-400 mt-1 -ml-12 font-semibold select-none"
                      style={{ lineHeight: '1.8em' }}
                    >
                      Freelance
                    </div>
                    <div className="w-8 h-8 relative text-right flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                      <input
                        type="checkbox"
                        name="trav3"
                        className="opacity-0 absolute right-0"
                      />
                      <HiCheck
                        size="5em"
                        className="icons fill-current hidden text-gray-400 right-0 pointer-events-none"
                      />
                    </div>
                  </div>
                </label>
                <div className="competence_other">
                  <div
                    className="accordion_o competence flex justify-between leading-tight py-1 mt-2 space-x-4 px-2 cursor-pointer w-full bg-gray-100 border-2 border-gray-300 justify-start items-start rounded-md"
                    onClick={toggleJob}
                  >
                    <div className="w-1/5">
                      <div
                        className="w-7 h-7 mt-0.5 border-2 border-gray-50 bg-green-700 rounded-md text-center text-white font-semibold select-none"
                        style={{ lineHeight: '1.5em' }}
                      >
                        D
                      </div>
                    </div>

                    <div className="w-4/5 flex justify-between leading-tight">
                      <div
                        className="text-gray-400 mt-1 -ml-12 font-semibold select-none"
                        style={{ lineHeight: '1.8em' }}
                      >
                        Autre
                      </div>
                      <div className="w-8 h-8 relative text-right flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                        <input
                          type="checkbox"
                          name="otherTrav"
                          className="opacity-0 absolute right-0"
                        />
                        <HiCheck
                          size="5em"
                          className="icons fill-current hidden text-gray-400 right-0 pointer-events-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    ref={jobContent}
                    style={{ maxHeight: `${jobHeight}` }}
                    className="competence_content"
                  >
                    <div className="mt-2 w-full justify-items-auto">
                      <fieldset>
                        <legend className="text-gray-500 font-semibold">
                          Votre travail souhaitee
                        </legend>
                        <div className="w-full flex">
                          <span className="input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest">
                            <AiOutlineCode
                              className="text-green-600"
                              size="2em"
                            />
                          </span>
                          <input
                            className="input w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none"
                            type="text"
                            placeholder="Mettez votre travail souhaitee ici"
                          />
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="w-full mt-4 md:mt-0 h-auto md:w-1/2 block space-y-4 p-4 bg-gray-50">
              <fieldset>
                <legend className="text-gray-500 font-semibold">
                  Votre mode de paiement
                </legend>
                <label className="competence flex py-1 space-x-4 px-4 cursor-pointer w-auto bg-gray-100 border-2 border-gray-300 justify-start items-start rounded-md">
                  <div
                    className="w-7 h-7 mt-0.5 border-2 border-gray-50 bg-white rounded-md text-center text-gray-400 font-semibold select-none"
                    style={{ lineHeight: '1.5em' }}
                  >
                    A
                  </div>
                  <div
                    className="text-gray-400 mt-1 font-semibold select-none"
                    style={{ lineHeight: '1.8em' }}
                  >
                    Espece
                  </div>
                  <div className="w-8 h-8 float-right right-6 absolute text-right flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                    <input
                      type="checkbox"
                      name="modep1"
                      className="opacity-0 absolute"
                    />
                    <HiCheck
                      size="5em"
                      className="icons fill-current hidden text-gray-400 pointer-events-none"
                    />
                  </div>
                </label>

                <label className="competence flex py-1 mt-2 space-x-4 cursor-pointer px-4 w-auto bg-gray-100 border-2 border-gray-300 justify-start items-start rounded-md">
                  <div
                    className="w-7 h-7 mt-0.5 border-2 border-gray-50 bg-white rounded-md text-center text-gray-400 font-semibold select-none"
                    style={{ lineHeight: '1.5em' }}
                  >
                    B
                  </div>
                  <div
                    className="text-gray-400 mt-1 font-semibold select-none"
                    style={{ lineHeight: '1.8em' }}
                  >
                    MVola
                  </div>
                  <div className="w-8 h-8 float-right right-6 absolute text-right flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                    <input
                      type="checkbox"
                      name="modep2"
                      className="opacity-0 absolute"
                    />
                    <HiCheck
                      size="5em"
                      className="icons fill-current hidden text-gray-400 pointer-events-none"
                    />
                  </div>
                </label>

                <label className="competence flex py-1 mt-2 space-x-4 cursor-pointer px-4 w-auto bg-gray-100 border-2 border-gray-300 justify-start items-start rounded-md">
                  <div
                    className="w-7 h-7 mt-0.5 border-2 border-gray-50 bg-white rounded-md text-center text-gray-400 font-semibold select-none"
                    style={{ lineHeight: '1.5em' }}
                  >
                    C
                  </div>
                  <div
                    className="text-gray-400 mt-1 font-semibold select-none"
                    style={{ lineHeight: '1.8em' }}
                  >
                    Virement Bancaire
                  </div>
                  <div className="w-8 h-8 float-right right-6 absolute text-right flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                    <input
                      type="checkbox"
                      name="modep3"
                      className="opacity-0 absolute"
                    />
                    <HiCheck
                      size="5em"
                      className="icons fill-current hidden text-gray-400 pointer-events-none"
                    />
                  </div>
                </label>

                <label className="competence flex py-1 mt-2 space-x-4 cursor-pointer px-4 w-auto bg-gray-100 border-2 border-gray-300 justify-start items-start rounded-md">
                  <div
                    className="w-7 h-7 mt-0.5 border-2 border-gray-50 bg-white rounded-md text-center text-gray-400 font-semibold select-none"
                    style={{ lineHeight: '1.5em' }}
                  >
                    D
                  </div>
                  <div
                    className="text-gray-400 mt-1 font-semibold select-none"
                    style={{ lineHeight: '1.8em' }}
                  >
                    Cheque
                  </div>
                  <div className="w-8 h-8 float-right right-6 absolute text-right flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                    <input
                      type="checkbox"
                      name="modep4"
                      className="opacity-0 absolute"
                    />
                    <HiCheck
                      size="5em"
                      className="icons fill-current hidden text-gray-400 pointer-events-none"
                    />
                  </div>
                </label>
                <div className="competence_other">
                  <p
                    className="accordion_o competence flex py-1 mt-2 space-x-4 cursor-pointer px-4 w-auto bg-gray-100 border-2 border-gray-300 justify-start items-start rounded-md"
                    onClick={toggleModeP}
                  >
                    <div
                      className="w-7 h-7 mt-0.5 border-2 border-gray-50 bg-green-700 rounded-md text-center text-white font-semibold select-none"
                      style={{ lineHeight: '1.5em' }}
                    >
                      E
                    </div>
                    <div
                      className="text-gray-400 mt-1 font-semibold select-none"
                      style={{ lineHeight: '1.8em' }}
                    >
                      Autres ...
                    </div>
                    <div className="w-8 h-8 float-right right-6 absolute text-right flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                      <input
                        type="checkbox"
                        name="modep4"
                        className="opacity-0 absolute"
                      />
                      <HiCheck
                        size="5em"
                        className="icons fill-current hidden text-gray-400 pointer-events-none"
                      />
                    </div>
                  </p>
                  <div
                    ref={modePContent}
                    style={{ maxHeight: `${modePHeight}` }}
                    className="competence_content"
                  >
                    <div className="mt-2 w-full justify-items-auto">
                      <fieldset>
                        <legend className="text-gray-500 font-semibold">
                          Votre mode de paiement
                        </legend>
                        <div className="w-full flex">
                          <span className="input w-12 bg-gray-200 flex justify-end items-center text-green-600 p-2 hover:text-grey-darkest">
                            <FaRegMoneyBillAlt
                              className="text-green-600"
                              size="2em"
                            />
                          </span>
                          <input
                            className="input w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none"
                            type="text"
                            placeholder="Mettez votre mode de paiement ici"
                          />
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="text-center w-full md:w-1/2 mx-auto">
            <button
              className="bg-green-700 w-1/2 m-auto px-6 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase py-3 shadow hover:shadow-lg outline-none focus:outline-none"
              type="button"
              style={{ transition: 'all .15s ease' }}
            >
              Validez
              <FaArrowRight className="ml-4 text-white inline" size="1.5em" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
