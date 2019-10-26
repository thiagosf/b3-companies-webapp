import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Container,
  FormCheck
} from 'react-bootstrap'
import { Companies } from '../organisms'
import { loadCompanies } from '../../store/actions/company'
import { number } from '../../utils'

class Home extends Component {
  state = {
    filters: {
      evenEmpty: false
    }
  };

  componentDidMount () {
    this.props.loadCompanies()
  };

  render () {
    const { filters } = this.state
    const data = this._getData()
    return (
      <Container fluid>
        <div className="home">
          <h1>Empresas B3</h1>
          <div className="home-filters">
            <label class="form-check">
              <FormCheck.Input
                checked={filters.evenEmpty}
                onChange={event => {
                  const newFilters = {
                    ...filters,
                    evenEmpty: !filters.evenEmpty
                  }
                  this.setState({ filters: newFilters })
                }}
              />
              <span>Exibir ações com preço em branco</span>
            </label>
          </div>
          <Companies
            data={data}
          />
        </div>
      </Container>
    )
  };

  _getData = () => {
    const { evenEmpty } = this.state.filters
    const { list } = this.props.company
    let rows = []
    list.forEach(item => {
      if (item.aggregate) {
        item.aggregate.forEach(aggregate => {
          const b3link = (
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={`http://bvmf.bmfbovespa.com.br/cias-listadas/empresas-listadas/ResumoEmpresaPrincipal.aspx?codigoCvm=${item.id}&idioma=pt-br`}
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
          let updated = null
          let dayVariation = 0
          let variation = 0
          let pL = 0
          if (aggregate.quote) {
            if (aggregate.quote.current) {
              price = +aggregate.quote.current
              dayVariation = ((+aggregate.quote.current / +aggregate.quote.open) - 1) * 100
              dayVariation = number.formatPercentage(dayVariation, false)
              updated = new Date(+aggregate.quote.updated)
              updated = updated.toLocaleString()
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
            day_variation: dayVariation,
            variation,
            p_l: pL,
            updated,
            b3link,
            fundamentuslink,
            tradingview
          })
        })
      }
    })

    if (!evenEmpty) {
      rows = rows.filter(item => {
        return item.price > 0
      })
    }

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
        label: 'Atualização',
        field: 'updated',
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
