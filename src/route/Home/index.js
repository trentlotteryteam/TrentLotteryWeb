/**
 * Created by yangyang on 2018/4/20.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {appConfigAction, appConfigSelector} from '../../util/config'
import { Button, Tab, Tabs, Row, Col, Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import "./home.css"
import {addActionCode} from '../../util/eosapi'
import Header from '../../component/Header'
import InfoBar from '../../component/InfoBar'
import BetBox from '../../component/BetBox'

class Home extends Component {
  constructor(props) {
    super(props)
    this.scatter = undefined
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      key: 1
    };
  }

  componentDidMount(){
    document.addEventListener('scatterLoaded', scatterExtension => {
      // this.scatter = window.scatter
      // addActionCode({scatter: this.scatter})
    })
  }

  configWallet = () => {
    this.props.updateHasWallet({hasWallet: true})
  }

  handleSelect(key) {
    // alert(`selected ${key}`);
    this.setState({ key });
  }

  renderBetHome(){
    return(
      <div className="bet-page">
        <InfoBar/>
        <BetBox />
      </div>
    )
  }

  renderTab(){
    return(
      <Tab.Container  id="tabs-with-no" defaultActiveKey="first">
        <Row className="clearfix">
          <Col sm={12}>
            <Navbar inverse collapseOnSelect style={{marginBottom: 0, borderRadius :0, backgroundImage:'linear-gradient(to bottom, #000000 0%, #000000 100%)'}}>
              <Nav>
                <NavItem eventKey="first">购彩大厅</NavItem>
                <NavItem eventKey="second">开奖历史</NavItem>
                <NavItem eventKey="third">中奖纪录</NavItem>
                <NavItem eventKey="fourth">智能合约</NavItem>
                <NavItem eventKey="fifth">投注规则</NavItem>
                <NavItem eventKey="sixth">问答</NavItem>
              </Nav>
            </Navbar>
          </Col>
          <Col sm={12}>
            <Tab.Content bsClass="test-pane" animation>
              <Tab.Pane bsClass="test-pane" eventKey="first">
                {this.renderBetHome()}
              </Tab.Pane>
              <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
              <Tab.Pane eventKey="third">Tab 3.1 content</Tab.Pane>
              <Tab.Pane eventKey="fourth">Tab 3.2 content</Tab.Pane>
              <Tab.Pane eventKey="fifth">Tab 3.3 content</Tab.Pane>
              <Tab.Pane eventKey="sixth">Tab 3.4 content</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    )
  }

  render() {
    let {hasWallet} = this.props
    return (
      <div className = "home-page">
        <Header/>
        {/*<div>Home</div>*/}
        {/*<div>user wallet exist: {String(hasWallet)}</div>*/}
        {/*<div>*/}
          {/*<Button bsStyle="primary" block onClick={this.configWallet}>配置钱包</Button>*/}
        {/*</div>*/}
        {this.renderTab()}

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    hasWallet: appConfigSelector.selectHasWallet(state)
  }
}

const mapDispatchToProps = {
  ...appConfigAction
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
