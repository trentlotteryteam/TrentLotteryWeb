/**
 * Created by lilu on 2018/6/22.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {appConfigAction, appConfigSelector} from '../../util/config'
import {Button, Grid, Row, Col} from 'react-bootstrap';
import "./header.css"

class HitNumber extends Component {
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
      <div className="hit-num-box">
        第45678期中奖号码为  1  2  3  4  5  6  7
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

export default connect(mapStateToProps, mapDispatchToProps)(HitNumber)
