import React from "react"

class KomponenClass2 extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      angka: 8
    }
  }

	render (){

		return (
			<div>
        {this.state.angka}
				{this.props.mencoba}
			</div>
		)
	}
}

export default KomponenClass2
