/**
 * Created by lilu on 2018/6/19.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {appConfigAction, appConfigSelector} from '../../util/config'
import { Button ,Grid, Row, Col ,Image} from 'react-bootstrap';
import "./betBox.css"
import EOS from 'eosjs'

class BetField extends Component {
  constructor(props) {
    super(props)
    this.scatter = undefined
  }

  configWallet = () => {
    this.props.updateHasWallet({hasWallet: true})
  }

  pressTest(){
    let eos = EOS()
    eos.getInfo((error, result) => { console.log(error, result) })
    // eos.getTableRows(true,'trentlottery','trentlottery','offerbets','id',1,3,100).then((error,result)=>{console.log(error,result)})
    eos.getTableRows({json:true,code:'trentlottery',scope:'trentlottery',table:'offerbets',table_key:'player',lower_bound:2,upper_bound:5,limit:5}).then((error,result)=>{console.log(error,result)})
    eos.getCurrencyBalance('eosio.token','trentlottery').then((error,result)=>{console.log(error,result)})
  }

  render() {
    let {hasWallet} = this.props
    return (
      <div className = "bet-field">
        <div className="bet-field-header">"头奖"</div>
        <p className="bet-field-lotto">1000000</p>
        <p className="bet-field-betno">已添加一注</p>
        <p className="bet-field-balance">0.1Eos/注</p>
        <Button className="bet-field-button" bsStyle="info" onClick={()=>{this.pressTest()}}>投注</Button>
        <div className="bet-field-contract">
          <img src={require("../../asset/png/fill_69.png")}  />
          收否授权
        </div>
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
