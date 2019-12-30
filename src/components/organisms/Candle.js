import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Candle extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  };

  state = {
    type: 'positive'
  }

  render () {
    const classes = this._getClasses()
    const label = this._getLabel()
    return (
      <div
        className={classes}
        onClick={this._toggleDirection}
      >{label}</div>
    )
  };

  _getClasses = () => {
    let classes = ['candle']
    const { type } = this.state
    if (type === 'positive') {
      classes.push('candle--positive')
    } else {
      classes.push('candle--negative')
    }
    return classes.join(' ')
  }

  _getLabel = () => {
    const { type } = this.state
    return type === 'positive'
      ? 'P'
      : 'N'
  }

  _toggleDirection = () => {
    const type = this.state.type === 'positive'
      ? 'negative'
      : 'positive'
    this.setState({ type }, () => {
      this.props.onChange(type)
    })
  }
}

export default Candle
