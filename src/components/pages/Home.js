import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Container,
  FormCheck
} from 'react-bootstrap'
import { Companies } from '../organisms'
import { loadCompanies } from '../../store/actions/company'
import { number, api } from '../../utils'

class Home extends Component {
  state = {
    filters: {
      evenEmpty: false,
      justThreeFour: true
    }
  }

  componentDidMount () {
    this.props.loadCompanies()
  }

  render () {
    const { filters } = this.state
    const { sending } = this.props.company
    const data = this._getData()
    return (
      <Container fluid>
        <div className="home">
          <h1 className="home__title">Empresas B3</h1>
          <div className="home-filters">
            <div className="row">
              <div className="col-6">
                <label className="form-check">
                  <FormCheck.Input
                    checked={filters.evenEmpty}
                    onChange={() => this._toggleFilter('evenEmpty')}
                  />
                  <span>Exibir ações com preço em branco</span>
                </label>
              </div>
              <div className="col-6">
                <label className="form-check">
                  <FormCheck.Input
                    checked={filters.justThreeFour}
                    onChange={() => this._toggleFilter('justThreeFour')}
                  />
                  <span>Apenas com final 3 e 4</span>
                </label>
              </div>
            </div>
          </div>
          {sending &&
            <p>Carregando...</p>
          }
          {!sending &&
            <Companies
              data={data}
            />
          }
        </div>
      </Container>
    )
  }

  _getData = () => {
    const { evenEmpty, justThreeFour } = this.state.filters
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
              b3
            </a>
          )
          const fundamentuslink = (
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={`https://www.fundamentus.com.br/detalhes.php?papel=${aggregate.code}`}
            >
              fundamentus
            </a>
          )
          const tradingview = (
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={`https://br.tradingview.com/chart/?symbol=BMFBOVESPA:${aggregate.code}`}
            >
              tradingView
            </a>
          )
          let price = 0
          let updated = null
          let dayVariation = 0
          let variation = 0
          let pL = 0
          let pVp = 0
          if (aggregate.quote) {
            if (aggregate.quote.current) {
              price = +aggregate.quote.current
              dayVariation = ((+aggregate.quote.current / +aggregate.quote.open) - 1) * 100
              dayVariation = number.formatPercentage(dayVariation, false)
              // dayVariation = (
              //   <span className={this._getPositiveNegativeClass(dayVariation)}>{dayVariation}</span>
              // )
              updated = new Date(+aggregate.quote.updated)
              updated = updated.toLocaleString()
            }
            variation = number.formatPercentage(aggregate.quote.variation, false)
            // variation = (
            //   <span className={this._getPositiveNegativeClass(variation)}>{variation}</span>
            // )
          }
          if (
            aggregate.fundamentus &&
            aggregate.fundamentus.indicators
          ) {
            pL = +aggregate.fundamentus.indicators.p_l
            pVp = +aggregate.fundamentus.indicators.p_vp
          }
          const links = (
            <div className="company-links">
              {b3link}
              <br />
              {fundamentuslink}
              <br />
              {tradingview}
            </div>
          )
          let chart = null
          if (aggregate.screenshot) {
            const fullScreenshot = `${api.getURL()}${aggregate.screenshot}`
            let screenshotDate = new Date(+aggregate.screenshot_date)
            screenshotDate = screenshotDate.toLocaleString()
            chart = (
              <div className="company-chart">
                <img
                  src={fullScreenshot}
                  alt={`Data do screenshot: ${screenshotDate}`}
                  title={`Data do screenshot: ${screenshotDate}`}
                />
              </div>
            )
          }
          rows.push({
            company: item.name,
            activity: item.activity,
            code: aggregate.code,
            price,
            day_variation: dayVariation,
            variation,
            p_l: pL,
            p_vp: pVp,
            updated,
            chart,
            links
          })
        })
      }
    })

    if (!evenEmpty) {
      rows = rows.filter(item => {
        return item.price > 0
      })
    }

    if (justThreeFour) {
      rows = rows.filter(item => {
        return (
          item.code.endsWith('3') ||
          item.code.endsWith('4')
        )
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
        label: 'P/VP',
        field: 'p_vp',
        sort: 'asc'
      }, {
        label: 'Atualização',
        field: 'updated',
        sort: 'asc'
      }, {
        label: 'Gráfico dia anterior',
        field: 'chart',
        sort: 'asc'
      }, {
        label: 'Links',
        field: 'links',
        sort: 'asc'
      }],
      rows
    }
  }

  _getPositiveNegativeClass = value => {
    if (+value > 0) {
      return 'positive'
    } else if (+value < 0) {
      return 'negative'
    }
  }

  _toggleFilter = name => {
    const { filters } = this.state
    const newFilters = {
      ...filters,
      [name]: !filters[name]
    }
    this.setState({ filters: newFilters })
  }
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
