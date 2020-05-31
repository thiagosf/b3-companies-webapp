import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Container,
  FormCheck
} from 'react-bootstrap'
import { Companies, FilterCandles } from '../organisms'
import { loadCompanies } from '../../store/actions/company'
import { number, api } from '../../utils'

class Home extends Component {
  state = {
    filters: {
      evenEmpty: false,
      justThreeFour: true,
      candles: [],
      activity: '',
      showCharts: true
    }
  }

  componentDidMount () {
    this._loadData()
  }

  render () {
    const { filters } = this.state
    const { sending, activities } = this.props.company
    const data = this._getData()
    return (
      <Container fluid>
        <div className="home">
          <h1 className="home__title">Empresas B3</h1>
          <div className="home-filters">
            <div className="row">
              <div className="col-4">
                <label className="form-check">
                  <FormCheck.Input
                    checked={filters.evenEmpty}
                    onChange={() => this._toggleFilter('evenEmpty')}
                  />
                  <span>Exibir ações com preço em branco</span>
                </label>
              </div>
              <div className="col-4">
                <label className="form-check">
                  <FormCheck.Input
                    checked={filters.justThreeFour}
                    onChange={() => this._toggleFilter('justThreeFour')}
                  />
                  <span>Apenas com final 3 e 4</span>
                </label>
              </div>
              <div className="col-4">
                <label className="form-check">
                  <FormCheck.Input
                    checked={filters.showCharts}
                    onChange={() => this._toggleFilter('showCharts')}
                  />
                  <span>Exibir gráficos</span>
                </label>
              </div>
              <div className="col-sm-12 col-md-8">
                <FilterCandles
                  onChange={this._onChangeCandles}
                />
              </div>
              <div className="col-sm-12 col-md-4">
                <label>Filtre pela atividade</label>
                <select
                  className="form-control"
                  onChange={this._onChangeActivity}
                >
                  <option value=''>Todas</option>
                  {activities.map((value, index) => {
                    return (
                      <option key={index}>{value}</option>
                    )
                  })}
                </select>
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
    const {
      evenEmpty,
      justThreeFour,
      activity,
      showCharts
    } = this.state.filters
    const { list } = this.props.company
    let rows = []
    list.forEach(item => {
      const b3link = (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={`http://bvmf.bmfbovespa.com.br/cias-listadas/empresas-listadas/BuscaEmpresaListada.aspx?Nome=${item.code}&idioma=pt-br`}
        >
          b3
        </a>
      )
      const fundamentuslink = (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={`https://www.fundamentus.com.br/detalhes.php?papel=${item.code}`}
        >
          fundamentus
        </a>
      )
      const tradingview = (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={`https://br.tradingview.com/chart/?symbol=BMFBOVESPA:${item.code}`}
        >
          tradingView
        </a>
      )
      let updated = null
      let dayVariation = 0
      let variation = 0
      let pL = +item.p_l
      let pVp = +item.p_vp
      let price = +item.price
      let open = +item.open
      if (item.price) {
        dayVariation = ((price / open) - 1) * 100
        dayVariation = number.formatPercentage(dayVariation, false)
        if (item.last_candle) {
          variation = ((price / +item.last_candle.close) - 1) * 100
          variation = number.formatPercentage(variation, false)
          updated = new Date(item.updated_at)
          updated = updated.toLocaleString()
        }
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
      if (
        item.screenshot &&
        item.screenshot.url &&
        showCharts
      ) {
        const fullScreenshot = `${api.getURL()}${item.screenshot.url}`
        const fullScreenshotWeekly = `${api.getURL()}${item.screenshot.url_weekly}`
        const fullScreenshotMonthly = `${api.getURL()}${item.screenshot.url_monthly}`
        let screenshotDate = new Date(+item.screenshot.date)
        screenshotDate = screenshotDate.toLocaleString()
        chart = (
          <div className="company-chart">
            <div className="company-chart__item">
              <p className="company-chart__item__title">Diário</p>
              <img
                className="company-chart__item__image"
                src={fullScreenshot}
                alt={`Data do screenshot: ${screenshotDate}`}
                title={`Data do screenshot: ${screenshotDate}`}
              />
            </div>
            <div className="company-chart__item">
              <p className="company-chart__item__title">Semanal</p>
              <img
                className="company-chart__item__image"
                src={fullScreenshotWeekly}
                alt={`Data do screenshot: ${screenshotDate}`}
                title={`Data do screenshot: ${screenshotDate}`}
              />
            </div>
            <div className="company-chart__item">
              <p className="company-chart__item__title">Mensal</p>
              <img
                className="company-chart__item__image"
                src={fullScreenshotMonthly}
                alt={`Data do screenshot: ${screenshotDate}`}
                title={`Data do screenshot: ${screenshotDate}`}
              />
            </div>
          </div>
        )
      }
      rows.push({
        company: item.name,
        code: item.code,
        price,
        day_variation: dayVariation,
        variation,
        p_l: pL,
        p_vp: pVp,
        updated,
        chart,
        links,
        activity: item.activity
      })
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

    if (activity) {
      rows = rows.filter(item => {
        return item.activity === activity
      })
    }

    rows = rows.map(item => {
      const newRow = { ...item }
      delete newRow.activity
      return newRow
    })

    return {
      showEntries: 1,
      columns: [{
        label: 'Empresa',
        field: 'company',
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
        label: 'Gráficos',
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

  _onChangeCandles = value => {
    const { filters } = this.state
    const newFilters = {
      ...filters,
      candles: value
    }
    this.setState({ filters: newFilters }, this._loadData)
  }

  _loadData = () => {
    const filters = {
      candles: this.state.filters.candles.map(item => {
        return item[0]
      }).join(',')
    }
    this.props.loadCompanies(filters)
  }

  _onChangeActivity = event => {
    const activity = event.target.value
    const { filters } = this.state
    const newFilters = { ...filters, activity }
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
    loadCompanies: filters => dispatch(loadCompanies(filters))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
