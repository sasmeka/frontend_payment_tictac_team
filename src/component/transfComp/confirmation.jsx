import React, { useState, useRef, useContext, useEffect } from "react";
import Cards from "../transfComp/cardsContact";
import moment from "moment/moment";
import SuccessContext from "../../helper/context_success";
import ErrorContext from "../../helper/context_error";
import { useNavigate } from 'react-router-dom'
import { logout, adddata } from '../../store/reducer/user'
import { useDispatch } from "react-redux";
import useApi from '../../helper/useApi'

function Confirmation({ id, name, image, phone, amount, notes, balance_left, create_date, pin_user, date_select, setstatus_transfer, status_transfer }) {
  const api = useApi()
  const [showModal, setShowModal] = useState(false);
  const [pin, setPin] = useState(["", "", "", "", "", ""]); // Array untuk menyimpan PIN di setiap input
  const pinInputs = useRef([]); // Referensi ke setiap input PIN
  const navigates = useNavigate();
  const dispatch = useDispatch()
  const { error_message, seterror_message } = useContext(ErrorContext);
  const { success_message, setsuccess_message } = useContext(SuccessContext);

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

  const btnlogout = () => {
    dispatch(logout())
    navigates(`/sign-in`)
  }

  const getDataUser = async () => {
    try {
      const { data } = await api({ method: 'get', url: `user/bytoken` })
      dispatch(adddata(data.data))
    } catch (error) {
      if (error.response.data.status == 401) {
        setsuccess_message('')
        seterror_message(error.response.data.message)
        btnlogout()
      }
      setsuccess_message('')
      seterror_message(error.response.data.message)
      console.log(error.response.data)
    }
  }

  const TranferMoney = async () => {
    try {
      await api({
        method: 'POST',
        url: 'transaction/transfer',
        data: {
          id_user_receiver: id,
          amount: amount,
          notes: notes,
          create_at: date_select
        }
      })
      getDataUser()
      seterror_message('')
      setsuccess_message('')
      setstatus_transfer(true)
    } catch (e) {
      setstatus_transfer(false)
      setsuccess_message('')
      seterror_message(e.response.data.error)
    }
  }

  const submitPIN = (e) => {
    e.preventDefault()
    if (pin.join("").length === 6) {
      if (pin.join("") == pin_user) {
        TranferMoney()
      } else {
        setsuccess_message('')
        seterror_message('wrong PIN.')
      }
    } else {
      setsuccess_message('')
      seterror_message('PIN need 6 number')
    }
    closeModal()
  }
  useEffect(() => {
    setTimeout(() => {
      seterror_message('')
      setsuccess_message('')
    }, 25000)
  }, [error_message, success_message])

  return (
    <>
      <div className={(status_transfer !== '' ? 'hidden' : '') + " relative m-10"}>
        <h1 className="text-sm md:text-md font-bold">Transfer To</h1>
        <div className="flex flex-col gap-3 mt-5 md:mt-10">
          <Cards
            image={image}
            name={name}
            telp={phone}
          />
        </div>
        <div className="w-full bg-white shadow-md rounded-[15px] my-10 px-10 py-10">
          <h1 className="font-bold mb-5">Details</h1>
          <div className="flex flex-col gap-3">
            <div className="w-full bg-white shadow-md rounded-lg p-5 flex flex-col mb-5">
              <label className="text-gray-400 text-sm">Amount</label>
              <h1 className="font-medium text-md">Rp. {new Intl.NumberFormat('en-DE').format(amount)}</h1>
            </div>
            <div className="w-full bg-white shadow-md rounded-lg p-5 flex flex-col mb-5">
              <label className="text-gray-400 text-sm">Balance Left</label>
              <h1 className="font-medium text-md">Rp. {new Intl.NumberFormat('en-DE').format(balance_left)}</h1>
            </div>
            <div className="w-full bg-white shadow-md rounded-lg p-5 flex flex-col mb-5">
              <label className="text-gray-400 text-sm">Date & Time</label>
              <h1 className="font-medium text-md">{moment().format('MMMM D, YYYY [-] H:mm')}</h1>
              <h1 className="font-medium text-md">{create_date(moment().format('YYYY-MM-DD[T]H:mm:ss'))}</h1>
            </div>
            <div className="w-full bg-white shadow-md rounded-lg p-5 flex flex-col mb-5">
              <label className="text-gray-400 text-sm">Notes</label>
              <h1 className="font-medium text-md">{notes}</h1>
            </div>
          </div>
        </div>
        {
          error_message != '' ? (
            <div className="text-red-400 text-center tracking-wide mb-3 text-sm">{error_message}</div>
          ) : (
            success_message != '' ? (
              <div className="text-green-600 text-center tracking-wide mb-3 text-sm">{success_message}</div>
            ) : (
              <div>&nbsp;</div>
            )
          )
        }
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
                    onClick={submitPIN}
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