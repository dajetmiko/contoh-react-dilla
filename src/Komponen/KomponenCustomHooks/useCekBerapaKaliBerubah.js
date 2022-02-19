import { useEffect, useState } from "react";


const useCekBerubahBerapaKali = (namaChildren) => {
  const [berubahBerapaKali, setBerubahBerapaKali] = useState(-1)

  useEffect(() => {
    setBerubahBerapaKali(berubahBerapaKali + 1);
    return () => {}
  }, [namaChildren])
  
  return [berubahBerapaKali]
}

export default useCekBerubahBerapaKali