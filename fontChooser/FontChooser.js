class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state = {
		min: this.props.min,
		max: this.props.max,
		size: parseInt(this.props.size),
		initSize: parseInt(this.props.size),
		isBold: this.props.bold == 'true',
		makeRed: false,
		isHidden: true
	}
    }

    toggle() {
    	this.setState({isHidden: !this.state.isHidden})

    }

    makeBold() {
    	this.setState({isBold: !this.state.isBold});
    }

    increaseFontSize() {
    	this.setState({size: this.state.size + 1})
    	if (this.state.size >= this.props.max) {
    		this.setState({makeRed: true, size: this.props.max})
    	}
    }

    decreaseFontSize() {
    	this.setState({size: this.state.size - 1})
    	if (this.state.size <= this.props.min) {
    		this.setState({makeRed: true, size: this.props.min})
    	}
    }
    
    render() {
		var hidden = this.state.isHidden;
		var checked = this.state.isBold;

		var weight = this.state.isBold ? 'bold' : 'normal';
		var color = this.state.makeRed ? 'red' : 'black';
		var style = {fontSize: this.state.size, fontWeight: weight, color: color}
		console.log(hidden)
		console.log(checked)
	return(
	       <div>
	       <input type="checkbox" id="boldCheckbox" hidden={hidden} onChange={this.makeBold.bind(this)} checked={checked}/>
	       <button id="decreaseButton" hidden={hidden} onClick={this.decreaseFontSize.bind(this)}>-</button>
	       <span id="fontSizeSpan" hidden={hidden}>{this.state.size}</span>
	       <button id="increaseButton" hidden={hidden} onClick={this.increaseFontSize.bind(this)}>+</button>
	       <span id="textSpan" style={style} onClick={this.toggle.bind(this)}>{this.props.text}</span>
	       </div>
	);
    }
}

