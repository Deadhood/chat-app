import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import './Modal.css'

class Modal extends Component {
  constructor (pr) {
    super(pr)
    this.state = {
      name: ''
    }
  }

  render () {
    return (
      <div className='Modal'>
        <div className='NameBox'>
          <h3>Your Name:</h3>
          <input
            type='text'
            onChange={e => this.setState({ name: e.target.value })}
          />
          <button
            onClick={e => {
              if (this.state.name.length > 1) {
                this.props.data.name = this.state.name
                this.props.ui.showName = false
              }
            }}
          >
            Done
          </button>
        </div>
      </div>
    )
  }
}

export default inject('ui', 'data')(observer(Modal))
