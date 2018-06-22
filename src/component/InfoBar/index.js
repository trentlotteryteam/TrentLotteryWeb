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
import "./infoBar.css"

class InfoBar extends Component {
  constructor(props) {
    super(props)
    this.scatter = undefined
  }

  configWallet = () => {
    this.props.updateHasWallet({hasWallet: true})
  }

  renderDrawInfo(){
    return(
      <div className="draw-info-box">
        <div className="draw-info-logo"></div>
        <div className="draw-info-text-box">
            <p className="draw-info-text">第3666666期</p>
            <p className="draw-info-text">开奖时间：2018年7月1日</p>
        </div>
      </div>
    )
  }

  renderDrawLastTime(){
    return(
      <div className="draw-info-box">
        <div className="draw-info-text-box">
          <p className="draw-info-text">第3666666期</p>
          <p className="draw-info-text-white">开奖时间：2018年7月1日</p>
        </div>
      </div>
    )
  }

  renderBetPot(){
    return(
      <div className="draw-info-box">
        <div className="draw-info-text-box">
          <p className="draw-info-text">第3666666期</p>
          <p className="draw-info-text-white">开奖时间：2018年7月1日</p>
        </div>
      </div>
    )
  }

  render() {
    let {hasWallet} = this.props
    return (
      <Grid className = "grid">
        <Row className="show-grid">
          <Col xs={12} md={6}>
            {this.renderDrawInfo()}
          </Col>
          <Col xs={6} md={3}>
            {this.renderDrawLastTime()}
          </Col>
          <Col xs={6} md={3}>
            {this.renderBetPot()}
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
