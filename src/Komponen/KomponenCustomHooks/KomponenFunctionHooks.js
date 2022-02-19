import { useCallback, useEffect, useRef, useState } from "react";
import useCekBerubahBerapaKali from "./useCekBerapaKaliBerubah";
import "./KomponenFunctionHooks.css"

const hooks = "hooks"

function KomponenCustomHooks({teks}){
  //useState
  const [namaChildren, setNamaChildren] = useState("inisial");

  //ref
  const refInput = useRef(null)
  const handelNamaBerubah = () => {setNamaChildren(refInput.current.value)}
  
  //custom hooks
  const [berubahBerapaKali] = useCekBerubahBerapaKali(namaChildren)

  return (
    <div className="komponen-class">
      <h1>
        halo, {teks || "default value"}, ini komponen function hooks
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


export default KomponenCustomHooks