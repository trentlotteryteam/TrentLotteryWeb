/**
 * Created by lilu on 2018/6/12.
 */

const EOS_HOST = ''
const EOS_CHAINID = ''
const EOS_HOST_PRO = ''
const EOS_HOST_DEV = '127.0.0.1'
const EOS_PORT = 8888

const EOS_CHAINID_DEV = 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f'


if(__DEV__){
  EOS_HOST = EOS_HOST_DEV,             //需要连接的eos链地址
  EOS_CHAINID = EOS_CHAINID_DEV        //需要连接的eos链ID
}

let EOS_NET_CONFIG = {
  blockchain:'eos',
  host: EOS_HOST,         // ( or null if endorsed chainId )
  port: EOS_PORT,         // ( or null if defaulting to 80 )
  chainId: EOS_CHAINID,
}

var webConfig = {
  eosNetConfig: EOS_NET_CONFIG,
}

module.exports = webConfig
