/**
 * Created by lilu on 2018/6/19.
 */
/**
 * Created by lilu on 2018/6/15.
 */
/**
 * Created by yangyang on 2018/4/20.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {appConfigAction, appConfigSelector} from '../../util/config'
import { Button ,Grid, Row, Col } from 'react-bootstrap';
import "./betBox.css"
import ChooseBallField from './chooseBallField'
import BetField from './betField'

class InfoBar extends Component {
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
      <Grid className = "grid" >
        <Row className="bet-box">
          <Col xs={12} md={9}>
            <ChooseBallField />
          </Col>
          <Col xs={6} md={3}>
            <BetField />
          </Col>
        </Row>
      </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoBar)
