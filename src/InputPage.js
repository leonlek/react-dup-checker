import React from "react"

class InputPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            input: "",
            output: "",
            outputArr: "",
            outputSet: ""
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {

        e.preventDefault()

        const out = (this.state.input).toLowerCase().replace(";", ",").split(",").map((item) => {
            return item.trim()
        })
        this.setState({ output: out })

        const ss = new Set(out)
        this.setState({ outputSet: ss })

        const arr = Array.from (ss)
        var i = 0
        var result = ""
        for (i = 0; i < arr.length; i++) {
            result += arr[i]+", "
        }

        this.setState({ outputArr: result })

    }

    render() {

        const { input, output, outputSet, outputArr } = this.state

        return (
            <div className="container">
                <div className="row">
                    <div className="form-group"><label>input seperated with comma</label>
                    <textarea className="form-control"
                              name="input"
                              value={input}
                              onChange={this.onChange}></textarea></div>
                </div>
                <div className="row">
                    <button onClick={this.onSubmit} className="btn btn-primary">Summit</button>
                </div>
                <div className="row">
                    <p>original array size is :{output.length}</p>
                    <p>new array size is :{outputSet.size}</p>
                    {outputArr}
                </div>
            </div>
        )
    }
}

export default InputPage
