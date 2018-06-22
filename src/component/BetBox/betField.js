/**
 * Created by lilu on 2018/6/19.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {appConfigAction, appConfigSelector} from '../../util/config'
import { Button ,Grid, Row, Col } from 'react-bootstrap';
import "./betBox.css"

class BetField extends Component {
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
      <div className = "bet-field">
        <div className="bet-field-header">"头奖"</div>
        <p className="bet-field-lotto">1000000</p>
        <p className="bet-field-betno">已添加一注</p>
        <p className="bet-field-balance">0.1Eos/注</p>
        <Button className="bet-field-button" >投注</Button>
        <p className="bet-field-contract">收否授权</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(BetField)
