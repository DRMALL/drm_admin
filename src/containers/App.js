

import React, { Component } from 'react'
import store from '../commons/store'
import '../styles/css/index.css'
import 'antd/dist/antd.css'



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe( ()=> this.setState(store.getState()) )
    // verifyToken()
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return(
      <div>
        {
          this.props.children && React.cloneElement(this.props.children, { state: this.state })
        }
      </div>
      )
  }
}
