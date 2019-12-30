import React, { Component } from 'react'
import Candle from './Candle'
import {
  Button
} from 'react-bootstrap'
import PropTypes from 'prop-types'

class FilterCandles extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  };

  state = {
    candles: []
  }

  render () {
    return (
      <div className="filter-candles">
        <div className="filter-candles--label">
          <strong>Filtrar candles</strong>
        </div>
        <div className="filter-candles--label">
          As velas serão filtradas da data mais recente para mais antiga, ou seja, a primeira vela é referente a ontem, depois a de ante-ontem, e assim por diante. Clique na vela para alternar entre <code>positiva</code> e <code>negativa</code>.
        </div>
        <div className="filter-candles--actions">
          <Button size='sm' variant='success' onClick={this._add}>+</Button>
          <Button size='sm' variant='warning' onClick={this._pop}>-</Button>
        </div>
        <div className="filter-candles--list">
          {this.state.candles.map((item, index) => {
            return (
              <Candle
                key={index}
                onChange={(type) => this._onChange(index, type)}
              />
            )
          })}
        </div>
      </div>
    )
  }

  _onChange = (index, type) => {
    const candles = this.state.candles.map((item, _index) => {
      if (+index === +_index) {
        item = type
      }
      return item
    })
    this.setState({ candles })
    this.props.onChange(candles)
  }

  _add = () => {
    let candles = [].concat(this.state.candles)
    candles.push('positive')
    this.setState({ candles })
    this.props.onChange(candles)
  }

  _pop = () => {
    let candles = [].concat(this.state.candles)
    candles.pop()
    this.setState({ candles })
    this.props.onChange(candles)
  }
}

export default FilterCandles
