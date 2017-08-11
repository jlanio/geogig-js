const fs = require ('fs');
const rp = require ('request-promise');
const refactoringGET = require ('../helpers/web-api.helper');

class Api  {

  static beginTransaction (params, options = {})  {
    return rp(
      refactoringGET({baseRequest: params.Adress+'beginTransaction.json?'},{
      }),{json: true}
    );
  }
  static endTransaction(params, options = {}) {
    return rp(
      refactoringGET({baseRequest: params.Adress+'endTransaction.json?'},{
        transactionId: params.transactionId,
        cancel: options.cancel,
      }),{json: true}
    );
  }
  static Add (params, options = {}) {
    return {
      path: path,
      transactionId: transactionId
    }
  }
  static Blame (params, options = {}) {
    return {
      commit: commit,
      path: path
    }
  }
  static Log (params, options = {}) {
    return rp(
      refactoringGET({baseRequest: params.Adress+'log.json?'},{
        limit: options.limit,
        offset: options.offset,
        path: options.path,
        since: options.since,
        until: options.until,
        sinceTime: options.sinceTime,
        untilTime: options.untilTime,
        page: options.page,
        show: options.show,
        firstParentOnly: options.firstParentOnly,
        countChanges: options.countChanges,
        returnRange: options.returnRange,
        summary: options.summary
      }),{json: true}
    );
  }
  static Import (params, options = {}) {
    return rp({
      method: 'POST',
      uri: refactoringGET({baseRequest: params.Adress+'import.json?'},{
        format: params.format,
        transactionId: params.transactionId,
        root: options.root,
        layer: options.layer,
        interchange: options.interchange,
        add: options.add,
        alter: options.alter,
        forceFeatureType: options.forceFeatureType,
        dest: options.dest,
        fidAttribute: options.fidAttribute,
        authorName: options.authorName,
        authorEmail: options.authorEmail,
        message: options.message
      }),
      formData: {
        fileUpload:{
          value: fs.createReadStream(params.fileUpload),
          options: { filename: 'imovel.gpkg', contentType: 'application/octet-stream;type=geopackage' }
        }
      },
      json: true
    });
  }
  static Export (params, options = {}){
    return rp(
      refactoringGET({baseRequest: params.Adress+'export.json?'},{
        format: params.format,
        path: options.path,
        bbox: options.bbox,
        interchange: options.interchange
      }),{json: true}
    );
  }
}

module.exports = Api
