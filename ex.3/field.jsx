import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldActions'

class Field extends Component {

    handleChange(event){
        this.setState({ value: event.target.value })
    }

    render(){
        return(
            <div>
                <label>{this.props.value}</label>
                <input value={this.props.value} onChange={this.props.changeValue}></input>
            </div>
        )

    }
}


function mapStateToProps (state) {
    return {
        value: state.field.value
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeValue }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)