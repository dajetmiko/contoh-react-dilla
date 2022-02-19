import { useCallback, useEffect, useRef, useState } from "react";
import "./KomponenFunction.css";
import React from "react";

const hooks = "hooks"

function KomponenFunction({teks}){
  //useState
  const [namaChildren, setNamaChildren] = useState("inisial");

  //ref
  const refInput = useRef(null)
  const handelNamaBerubah = () => {
    setNamaChildren(refInput.current.value)
  }

  const fungsiUnmount = () => {
    const abc = "abc"
  }
  
  //useEffect
  const [berubahBerapaKali, setBerubahBerapaKali] = useState(-1)
  useEffect(() => {
    setBerubahBerapaKali(berubahBerapaKali + 1);
    return fungsiUnmount
  }, [namaChildren])


  useEffect(() => {
    //lakukan saat pertama kali render seperti fetch dari api
  }, [])

  return (
    <div className="komponen-class">
      <h1>
        halo, {teks || "default value"}, ini komponen function
      </h1>
      <h5>
        angka: {namaChildren}
      </h5>
      <input ref={refInput}/>
      <button onClick={handelNamaBerubah}>
        Klik tombol
      </button>
      <h5>
        angka komponen function berubah {berubahBerapaKali}
      </h5>
    </div>
  );
  
}


export default KomponenFunction