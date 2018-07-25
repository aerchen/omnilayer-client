/**
 * Omnilayer JSON-RPC API Commands
 * See commands in https://github.com/OmniLayer/omnicore/blob/master/src/omnicore/doc/rpc-api.md
 */

'use strict';

module.exports = [
    'omni_send'
    , 'omni_senddexsell'
    , 'omni_senddexaccept'
    , 'omni_sendissuancecrowdsale'
    , 'omni_sendissuancefixed'
    , 'omni_sendissuancemanaged'
    , 'omni_sendsto'
    , 'omni_sendgrant'
    , 'omni_sendrevoke'
    , 'omni_sendclosecrowdsale'
    , 'omni_sendtrade'
    , 'omni_sendcanceltradesbyprice'
    , 'omni_sendcanceltradesbypair'
    , 'omni_sendcancelalltrades'
    , 'omni_sendchangeissuer'
    , 'omni_sendall'
    , 'omni_sendenablefreezing'
    , 'omni_senddisablefreezing'
    , 'omni_sendfreeze'
    , 'omni_sendunfreeze'
    , 'omni_sendrawtx'
    , 'omni_getinfo'
    , 'omni_getbalance'
    , 'omni_getallbalancesforid'
    , 'omni_getallbalancesforaddress'
    , 'omni_gettransaction'
    , 'omni_listtransactions'
    , 'omni_listblocktransactions'
    , 'omni_listpendingtransactions'
    , 'omni_getactivedexsells'
    , 'omni_listproperties'
    , 'omni_getproperty'
    , 'omni_getactivecrowdsales'
    , 'omni_getcrowdsale'
    , 'omni_getgrants'
    , 'omni_getsto'
    , 'omni_gettrade'
    , 'omni_getorderbook'
    , 'omni_gettradehistoryforpair'
    , 'omni_gettradehistoryforaddress'
    , 'omni_getactivations'
    , 'omni_getpayload'
    , 'omni_getseedblocks'
    , 'omni_getcurrentconsensushash'
    , 'omni_decodetransaction'
    , 'omni_createrawtx_opreturn'
    , 'omni_createrawtx_multisig'
    , 'omni_createrawtx_input'
    , 'omni_createrawtx_reference'
    , 'omni_createrawtx_change'
    , 'omni_createpayload_simplesend'
    , 'omni_createpayload_sendall'
    , 'omni_createpayload_dexsell'
    , 'omni_createpayload_dexaccept'
    , 'omni_createpayload_sto'
    , 'omni_createpayload_issuancefixed'
    , 'omni_createpayload_issuancecrowdsale'
    , 'omni_createpayload_issuancemanaged'
    , 'omni_createpayload_closecrowdsale'
    , 'omni_createpayload_grant'
    , 'omni_createpayload_revoke'
    , 'omni_createpayload_changeissuer'
    , 'omni_createpayload_trade'
    , 'omni_createpayload_canceltradesbyprice'
    , 'omni_createpayload_canceltradesbypair'
    , 'omni_createpayload_cancelalltrades'
    , 'omni_getfeecache'
    , 'omni_getfeetrigger'
    , 'omni_getfeeshare'
    , 'omni_getfeedistribution'
    , 'omni_getfeedistributions'
    , 'omni_setautocommit'
];
