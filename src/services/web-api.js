import fs from 'fs';
import rp from 'request-promise';
import refactoringGET from '../helpers/web-api.helper';

class Api  {

  static beginTransaction (x)  {
    return x
  }
  static endTransaction(params, options = {}) {
    return refactoringGET({
      baseRequest: 'endTransaction.json?',
      transactionId: params.transactionId,
      cancel: options.cancel,
    })
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
  static GeopackageImport (params, options = {}) {
    return rp({
      method: 'POST',
      uri: refactoringGET({baseRequest: this._Adress+'import.json?'},{
        format: 'gpkg',
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
          options: { filename: 'imovel.gpkg', contentType: null }
        }
      },
      json: true
    });
  }
  static GeopackageExport(task){
    console.log(this._Adress+task+'/download');
    return rp(this._Adress+task+'/download');
  }
}

export default Api
