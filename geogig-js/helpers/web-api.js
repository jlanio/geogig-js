'use strict'

const refactoringGET = require('./web-api.helper');

module.exports  = {
  beginTransaction:(x) => {
    return x
  },
  endTransaction:(params, options) => {
    return refactoringGET({
      baseRequest: 'endTransaction.json?',
      transactionId: params.transactionId,
      cancel: options.cancel,
    })
  },
  Add: (transactionId, path) => {
    return {
      path: path,
      transactionId: transactionId
    }
  },
  Blame: (commit, path) => {
    return {
      commit: commit,
      path: path
    }
  }
  ,
  Branch:{}

}
