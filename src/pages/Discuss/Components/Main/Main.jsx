import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Menu from './Components/Menu';

export default function Main() {

	// const [showModal, setShowModal] = React.useState(false);

	return (
		<>

			<div className="space-y-4 md:space-y-0 bg-white pt-3 px-4 mx-auto">

				<div className="w-full pb-4 md:flex">
					<div className="w-full text-center md:text-left md:w-2/3">
						<h1 className="mb-4 text-2xl font-semibold capitalize text-gray-500 dark:text-gray-300">
							Discussions
						</h1>
					</div>
					{/* <div className="w-full flex"> */}
						{/* <div className="w-full">
							<button className="text-lg cursor-pointer rounded bg-green-500 py-1 px-3 text-white font-bold hover:shadow-sm hover:bg-green-600 outline-none focus:outline-none"
								type='button'
								style={{ transition: 'all .4s ease' }}
								onClick={() => setShowModal(true)}
							>
								NEW QUESTION
                                </button>
							{showModal ? (
								<>
									<div
										className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"

									>
										<div className="relative w-auto my-6 mx-auto max-w-6xl">
											
											<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
												
												<div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
													<h3 className="text-3xl font-semibold">
														Question
                                            </h3>
													<button
														className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
														onClick={() => setShowModal(false)}
													>
														<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
															×
                                                </span>
													</button>
												</div>
												
												<div className="relative p-6 flex-auto">
													<input type="text" placeholder="Question.." className="h-12 px-2 leading-relaxed w-full rounded border outline-none focus:outline-none" />

												</div>
												
												<div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
													<button
														className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
														type="button"
														style={{ transition: "all .15s ease" }}
														onClick={() => setShowModal(false)}
													>
														Annuler
                                            </button>
													<button
														className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
														type="button"
														style={{ transition: "all .15s ease" }}
														onClick={() => setShowModal(false)}
													>
														Poster
                                            </button>
												</div>
											</div>
										</div>
									</div>
									<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
								</>
							) : null}
						</div> */}
						
					{/* </div> */}
					<div className="w-full md:w-1/3 flex border-grey-light border float-right">
						<div className="w-full flex">
							<input className="input w-full h-12 pl-4 text-gray-500 font-semibold outline-none focus:outline-none" type="text" placeholder="Recherche..." />
							<button className="w-12 bg-gray-200 flex justify-end items-center p-2">
								<BsSearch className="text-gray-500 font-bold" size="1.5em"/>
							</button>
						</div>
					</div>
					
				</div>
				<div className="pt-8">
					<Menu />
				</div>
			</div>
		</>
	)
}