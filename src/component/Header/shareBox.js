/**
 * Created by lilu on 2018/6/22.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {appConfigAction, appConfigSelector} from '../../util/config'
import {Button, Grid, Row, Col} from 'react-bootstrap';
import "./header.css"

class ShareBox extends Component {
  constructor(props) {
    super(props)
    this.scatter = undefined
  }

  configWallet = () => {
    this.props.updateHasWallet({hasWallet: true})
  }

  render() {
    let {hasWallet} = this.props
    return (
      <div className="share-box">
        <div className="share-icon">face</div>
        <div className="share-icon">face</div>
        <div className="share-icon">face</div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // hasWallet: appConfigSelector.selectHasWallet(state)
  }
}

const mapDispatchToProps = {
  ...appConfigAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ShareBox)
