import { createRef } from "react";
import React from "react";
import "./KomponenClass.css"

class KomponenClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      namaChildren: "inisial komponen",
      berubahBerapaKali: 0,
      stateLain: 5, 
    };
    this.refInput = createRef();
  }

  componentDidMount(){
    //lakukan saat pertama kali render seperti fetch dari api
  }

  componentDidUpdate(propSebelumnya, stateSebelumnya){
    console.log("")
    if(this.state.namaChildren !== stateSebelumnya.namaChildren){
      this.setState({
        berubahBerapaKali: this.state.berubahBerapaKali + 1
      })
    }

  }

  
  componentWillUnmount(){
    const abc = "abc"
    //fungsi bakal jalan saat komponen unmount untuk menghentikan fungsi
  }

  render() {
    const setNamaChildren = () => {
      this.setState({namaChildren: this.refInput.current.value})
    }

    return (
      <div className="komponen-class">
        <h1>
          halo, {this.props.teks}, ini komponen class
        </h1>
        <h5>
          nama: {this.state.namaChildren}
        </h5>
        <input ref={this.refInput}/>
        <button onClick={setNamaChildren}>
          Klik tombol
        </button>
        <h5>
          angka komponen kelas berubah {this.state.berubahBerapaKali}
        </h5>
      </div>
    );
  }
}

export default KomponenClass