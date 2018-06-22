/**
 * Created by lilu on 2018/6/19.
 */
/**
 * Created by lilu on 2018/6/15.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {appConfigAction, appConfigSelector} from '../../util/config'
import { Button ,Grid, Row, Col } from 'react-bootstrap';
import "./betBox.css"

class ChooseBallField extends Component {
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
      <p className = "choose-ball-field">"choose ball box"</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChooseBallField)
