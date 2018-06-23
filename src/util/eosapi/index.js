/**
 * Created by lilu on 2018/6/11.
 */
import webConfig from '../webconfig'
import Eos from 'eosjs'


/*
下注接口
 */
export async function betEos(params){
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
获取彩池中代币数量
 */
export async function getCurrencyBalance(params){
  let {scatter} = params
  let eos = scatter.eos( webConfig.eosNetConfig, Eos, {}, 'http' );
  try{
    let result = await eos.getCurrencyBalance('eosio.token','trentlottery')
    return result
  }catch(err){
    return err
  }

}
/*
添加eosio.code权限接口
 */
export async function addActionCode (params){
  let {scatter} = params
  let identity = await scatter.getIdentity({ accounts:[webConfig.eosNetConfig] })
  let account = identity.accounts.find(acc => acc.blockchain === 'eos');
  let eos = scatter.eos( webConfig.eosNetConfig, Eos, {}, 'http' );
  console.log('account=====>', account)
  console.log('identity=====>', identity)
  let eosaccount = await eos.getAccount(account.name)
  console.log('eosaccount=====>',eosaccount)
  console.log('eosaccount=====>',eosaccount.permissions)
  eosaccount.permissions[0].required_auth.accounts.push({"permission":{"actor":"trentlottery","permission":"eosio.code"},"weight":1})

  let newAuth = {
    "account": eosaccount.account_name,
    "permission": 'active',
    "parent": "owner",
    "auth": eosaccount.permissions[0].required_auth
  }
  let returnMessage = undefined
  try{
    returnMessage = await eos.updateauth(newAuth)
  }catch(err){
    console.log('err=======================>',err)
  }
  return returnMessage
}

