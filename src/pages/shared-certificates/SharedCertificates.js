import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/context";
import { getSharedCertificatesByUser } from "../../helpers/functions";
import Card from "../Card";

export default function SharedCertificates() {
  const { Contract, userData, accounts } = useContext(GlobalContext);
  const [certificates, setCertificates] = useState([]);

  // Dummy Data

  // expiresAt: "2222-08-05"
  // id: "IITCSE11100003"
  // isActive: true
  // isPermanent: true
  // isPublic: true
  // issuedDate: "2022-08-05"
  // issuerPublicKey: "0x0408c21CAb4ead80476c61BCd139E9E274E05b9E"
  // name: "Sandeep Kumar"
  // typeOfCertificate: "Degree"
  // userPublicKey: "0x461dE63c9b38F8717ba387B9ea483711C47C6145"
  // version: "1"

  useEffect(() => {
    (async () => {
      try {
        console.log(userData.firstName, "User");
        const issuedCertificates = await getSharedCertificatesByUser(Contract, accounts[0]);
        console.log(issuedCertificates, "issuedCertificates");
        setCertificates(issuedCertificates);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  return (
    <section className="w-full py-12 bg-white lg:py-24">
      <div className="max-w-6xl px-12 mx-auto text-center">
        <div className="space-y-12 md:text-center">
          <div className="max-w-3xl mb-20 space-y-5 sm:mx-auto sm:space-y-4">
            <h2 className="relative text-4xl font-extrabold tracking-tight sm:text-5xl">Shared Certificates</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.length ? (
            certificates.map((item, i) => {
              return item.isActive && <Card data={item} key={i} />;
            })
          ) : (
            <>No Certificates Found</>
          )}
        </div>
      </div>
    </section>
  );
}
