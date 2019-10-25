import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import { Companies } from '../organisms'
import { loadCompanies } from '../../store/actions/company'
import { number } from '../../utils'

class Home extends Component {
  componentDidMount () {
    this.props.loadCompanies()
  };

  render () {
    const data = this._getData()
    return (
      <Container fluid>
        <div className="home">
          <h1>Empresas B3</h1>
          <Companies
            data={data}
          />
        </div>
      </Container>
    )
  };

  _getData = () => {
    const { list } = this.props.company
    let rows = []
    list.forEach(item => {
      if (item.aggregate) {
        item.aggregate.forEach(aggregate => {
          const b3link = (
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={`http://bvmf.bmfbovespa.com.br/cias-listadas/empresas-listadas/ResumoEmpresaPrincipal.aspx?codigoCvm=${item.code}&idioma=pt-br`}
            >
              view
            </a>
          )
          const fundamentuslink = (
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={`https://www.fundamentus.com.br/detalhes.php?papel=${aggregate.code}`}
            >
              view
            </a>
          )
          const tradingview = (
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={`https://br.tradingview.com/chart/?symbol=BMFBOVESPA:${aggregate.code}`}
            >
              view
            </a>
          )
          let price = 0
          let priceUpdated = null
          let dayVariation = 0
          let variation = 0
          let pL = 0
          if (aggregate.quote) {
            if (aggregate.quote.current) {
              price = +aggregate.quote.current
              dayVariation = ((+aggregate.quote.current / +aggregate.quote.open) - 1) * 100
              dayVariation = number.formatPercentage(dayVariation, false)
              priceUpdated = new Date(+aggregate.quote.updated)
              priceUpdated = priceUpdated.toLocaleString()
            }
            variation = number.formatPercentage(aggregate.quote.variation, false)
          }
          if (
            aggregate.fundamentus &&
            aggregate.fundamentus.indicators
          ) {
            pL = +aggregate.fundamentus.indicators.p_l
          }
          const activity = (
            <div className="company-activity">
              {item.activity}
            </div>
          )
          rows.push({
            company: item.name,
            activity,
            code: aggregate.code,
            price,
            price_updated: priceUpdated,
            day_variation: dayVariation,
            variation,
            p_l: pL,
            b3link,
            fundamentuslink,
            tradingview
          })
        })
      }
    })
    return {
      showEntries: 1,
      columns: [{
        label: 'Empresa',
        field: 'company',
        sort: 'asc'
      }, {
        label: 'Atividade',
        field: 'activity',
        sort: 'asc'
      }, {
        label: 'Símbolo',
        field: 'code',
        sort: 'asc'
      }, {
        label: 'Preço atual',
        field: 'price',
        sort: 'asc'
      }, {
        label: 'Atualização do preço',
        field: 'price_updated',
        sort: 'asc'
      }, {
        label: 'Variação dia',
        field: 'day_variation',
        sort: 'asc'
      }, {
        label: 'Variação fech. ant.',
        field: 'variation',
        sort: 'asc'
      }, {
        label: 'P/L',
        field: 'p_l',
        sort: 'asc'
      }, {
        label: 'B3',
        field: 'b3link',
        sort: 'asc'
      }, {
        label: 'Fundamentus',
        field: 'fundamentuslink',
        sort: 'asc'
      }, {
        label: 'TradingView',
        field: 'tradingview',
        sort: 'asc'
      }],
      rows
    }
  };
}

const mapStateToProps = (state) => {
  return {
    company: state.company
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCompanies: () => dispatch(loadCompanies())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
