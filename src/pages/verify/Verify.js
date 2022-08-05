import React, { useContext } from "react";
import Search from "./Search";
import { verifyCertificate } from "../../helpers/functions";
import { GlobalContext } from "../../context/context";

const Verify = () => {
  const { Contract } = useContext(GlobalContext);

  const search = async (certId) => {
    console.log(certId, "certId");
    const isVerified = await verifyCertificate(Contract, certId);
    console.log(isVerified, "isVerified");
  };
  return (
    <section className="w-full py-12 bg-white lg:py-24">
      <div className="max-w-6xl px-12 mx-auto text-center">
        <div className="space-y-12 md:text-center">
          <div className="max-w-3xl mb-20 space-y-5 sm:mx-auto sm:space-y-4">
            <h2 className="relative text-4xl font-extrabold tracking-tight sm:text-5xl">Verify Using Cert ID</h2>
          </div>
        </div>
        <Search search={search} />
      </div>
    </section>
  );
};

export default Verify;
