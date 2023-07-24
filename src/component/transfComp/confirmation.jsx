import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Cards from "../transfComp/cardsContact";
import image from "../../assets/img/Default_Profile.png"

function Confirmation() {
    const [showModal, setShowModal] = useState(false);
    const [pin, setPin] = useState(["", "", "", "", "", ""]); // Array untuk menyimpan PIN di setiap input
    const pinInputs = useRef([]); // Referensi ke setiap input PIN
  
    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  
    const handlePinChange = (index, e) => {
      // Validasi hanya menerima angka
      const newPin = e.target.value.replace(/\D/, "");
      // Update nilai PIN di input dengan mengganti karakter pada index tertentu
      const newPinArray = [...pin];
      newPinArray[index] = newPin.slice(0, 1);
      setPin(newPinArray);
  
      // Beralih fokus ke input berikutnya setelah pengguna memasukkan karakter
      if (index < pinInputs.current.length - 1 && newPin) {
        pinInputs.current[index + 1].focus();
      }
    };
  

    return (
        <>
        <div className="relative">
            <h1 className="text-sm md:text-md font-bold">Transfer To</h1>
            <div className="flex flex-col gap-3 mt-5 md:mt-10">
                <Cards
                    image={image}
                    name="Samuel Suhi"
                    telp="+62 813 8456 9876"
                />
            </div>
            <div className="w-full bg-white shadow-sm rounded-[15px] my-10 px-10 py-10">
                <h1 className="font-bold">Details</h1>
                <div className="flex flex-col gap-3">
                    <div className="w-full bg-white shadow-sm rounded-lg p-5 flex flex-col">
                        <label className="text-gray-400 text-sm">Amount</label>
                        <input type="text" name="FirstName" value="Rp100.000" className="font-medium text-md" />
                    </div>
                    <div className="w-full bg-white shadow-sm rounded-lg p-5 flex flex-col">
                        <label className="text-gray-400 text-sm">Balance Left</label>
                        <input type="email" name="FirstName" value="Rp20.000" className="font-medium text-md" />
                    </div>
                    <div className="w-full bg-white shadow-sm rounded-lg p-5 flex flex-col">
                        <label className="text-gray-400 text-sm">Date & Time</label>
                        <input type="email" name="FirstName" value="May 11, 2020 - 12.20" className="font-medium text-md" />
                    </div>
                    <div className="w-full bg-white shadow-sm rounded-lg p-5 flex flex-col">
                        <label className="text-gray-400 text-sm">Notes</label>
                        <input type="email" name="FirstName" value="For buying some socks" className="font-medium text-md" />
                    </div>
                </div>
            </div>

            <div className="flex justify-end">
          <button
            onClick={openModal}
            className="bg-primary w-[80px] p-2 text-white text-xs rounded-lg"
          >
            Continue
          </button>
        </div>

        {/* Modal */}
        {showModal ? (
          <>
            <div
              className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 flex justify-center items-center"
              onClick={closeModal}
            >
              {/* Konten Modal */}
              <div className="bg-white p-6 rounded-lg">
                <h2 className="text-lg font-bold mb-4">Enter PIN to Transfer</h2>
                <p className="text-xs text-gray-400">Enter your 6 digits PIN for confirmation to continue transferring money. </p>
                <div className="flex justify-center py-5">
                    <div className="flex gap-2">
                    {pin.map((digit, index) => (
                        <input
                        key={index}
                        ref={(el) => (pinInputs.current[index] = el)}
                        type="text"
                        value={digit}
                        onChange={(e) => handlePinChange(index, e)}
                        maxLength="1"
                        className="border border-gray-400 rounded-lg px-3 py-2 text-center w-10"
                        />
                    ))}
                    </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-primary text-white rounded-lg"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}


export default Confirmation