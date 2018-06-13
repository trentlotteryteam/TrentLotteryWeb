/**
 * Created by lilu on 2018/6/11.
 */
import webConfig from '../webconfig'
import Eos from 'eosjs'


/*
下注接口
 */
async function betEos(params){
  let {scatter,num} = params
  let identity = await scatter.getIdentity({ accounts:[webConfig.eosNetConfig] })
  let eos = scatter.eos( webConfig.eosNetConfig, Eos, {}, 'http' );
  let account = identity.accounts.find(acc => acc.blockchain === 'eos');
  let requiredField = {
    accounts: [webConfig.eosNetConfig]
  }
  try{
    await addActionCode(params)
  }catch(err){
    return err
  }

  try{
    let lotterygame = await eos.contract('trentlottery',{requiredField})
    lotterygame.playerbet(1,account.name,1,num,{authorization: account.name})
  }catch(e){
    console.log(e)
  }
}

/*
添加eosio.code权限接口
 */
async function addActionCode (params){
  let {scatter} = params
  let identity = await scatter.getIdentity({ accounts:[this.network] })
  let account = identity.accounts.find(acc => acc.blockchain === 'eos');
  console.log('account=====>', account)
  console.log('identity=====>', identity)
  let eosaccount = await this.eos.getAccount(account.name)
  console.log('eosaccount=====>',eosaccount)
  console.log('eosaccount=====>',eosaccount.permissions)
  eosaccount.permissions[0].required_auth.accounts.push({"permission":{"actor":"trentlottery","permission":"eosio.code"},"weight":1})

  let newAuth = {
    "account": eosaccount.account_name,
    "permission": 'active',
    "parent": "owner",
    "auth": eosaccount.permissions[0].required_auth
  }
  let returnMessage = await this.eos.updateauth(newAuth)
  return returnMessage
}

