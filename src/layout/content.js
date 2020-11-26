import React, { Component } from 'react'

export default class Content extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let {children} = this.props
        return (
            <div>
          <div>
             {children}
         </div>
            </div>
        )
    }
}
