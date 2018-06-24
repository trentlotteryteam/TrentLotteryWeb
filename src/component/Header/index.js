/**
 * Created by yangyang on 2018/4/20.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {appConfigAction, appConfigSelector} from '../../util/config'
import {Button, Grid, Row, Col, Image} from 'react-bootstrap';
import "./header.css"
import ShareBox from './shareBox'
import Hitnumber from './hitnumber'

class Header extends Component {
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
      <Grid className = "grid">
        <Row className = "header-row">
          <Col xs={12} md={3} className = "header-col">
              <img src={require("../../asset/png/trentlogo.png")} />
          </Col>
          <Col xs={6} md={7} className = "header-col">
            <Hitnumber />
          </Col>
          <Col xs={6} md={2} className = "header-col">
            <ShareBox />
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)
