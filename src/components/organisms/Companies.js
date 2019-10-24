import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MDBDataTable } from 'mdbreact';

class Companies extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render () {
    const { data } = this.props
    return (
      <MDBDataTable
        responsive
        striped
        bordered
        small
        data={data}
      />
    )
  };
}

export default Companies
