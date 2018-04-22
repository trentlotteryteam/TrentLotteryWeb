/**
 * Created by yangyang on 2018/4/20.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {appConfigAction, appConfigSelector} from '../../util/config'
import { Button } from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props)
  }
  
  configWallet = () => {
    this.props.updateHasWallet({hasWallet: true})
  }
  
  render() {
    let {hasWallet} = this.props
    return (
      <div>
        <div>Home</div>
        <div>user wallet exist: {String(hasWallet)}</div>
        <div>
          <Button bsStyle="primary" block onClick={this.configWallet}>配置钱包</Button>
        </div>
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
