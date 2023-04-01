import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export const ModalCV = (props: any) => {
  return (
    <>
      {props.show ? (
        <div>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-2">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#2b2b30] outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <p>Thanks for the interest in my work.</p>
                  <p>Download my Resume!</p>
                </div>
                <div className="flex items-center justify-end p-6 border-t rounded-b">
                  <Link
                    className="text-blue-800 shadow-lg shadow-gray-700 rounded-2xl background-transparent font-bold uppercase px-8 m-4 py-4 text-sm outline-none cursor-pointer hover:scale-105 ease-in duration-200"
                    target="_blank"
                    download
                    href={'/resume_LarissaRamos_en.pdf'}
                    onClick={props.onClose}
                  >
                    Download
                  </Link>
                  <button
                    className="text-red-300 rounded-2xl shadow-lg shadow-gray-700 background-transparent font-bold uppercase px-8 m-4 py-4 text-sm outline-none cursor-pointer hover:scale-105 ease-in duration-200"
                    type="button"
                    onClick={props.onClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
