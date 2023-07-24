import React from "react";
import { Link } from "react-router-dom";
import Header from "../../component/homeComp/header";
import Footer from "../../component/homeComp/footer";
import Sidebar from "../../component/homeComp/sidebar";
import TransferReceiv from "../../component/transfComp/searchReceiv";
import InputAmount from "../../component/transfComp/inputAmount";
import Confirmation from "../../component/transfComp/confirmation";
import StatusTransf from "../../component/transfComp/statusTransf";

function Transfer() {
    return (
        <>
        <Header />
        <div className="flex gap-10 md:px-[150px] justify-center">
            <div className="hidden lg:flex bg-white rounded-lg my-10 shadow-sm rounded-[15px]">
                <Sidebar />
            </div>
            <div className="w-full bg-white shadow-sm rounded-[15px] my-10 px-10 py-10">
                {/* <TransferReceiv /> */}
                {/* <InputAmount /> */}
                {/* <Confirmation /> */}
                <StatusTransf />

            </div>
        </div>
        <Footer />
        </>
    )
}


export default Transfer