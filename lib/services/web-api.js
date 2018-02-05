const fs = require('fs');
const rp = require('request-promise');
const refactoringGET = require('./helpers/web-api.helper');

class Api {
  constructor(params = { uri: null }) {
    this._params = params.uri;
  }
  //Transactions
  beginTransaction(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}beginTransaction.json?` }, {}), { json: true });
  }
  endTransaction(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}endTransaction.json?` }, {
      transactionId: params.transactionId,
      cancel: options.cancel
    }), { json: true });
  }
  //Porcelain commands supported
  Add(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}add.json?` }, {
      transactionId: params.transactionId,
      path: options.path
    }), { json: true });
  }
  Blame(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}blame.json?` }, {
      path: params.path,
      commit: options.commit
    }), { json: true });
  }
  Branch(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}branch.json?` }, {
      list: params.list,
      remotes: options.remotes
    }), { json: true });
  }
  Checkout(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}checkout.json?` }, {
      transactionId: params.transactionId,
      branch: options.branch,
      ours: options.ours,
      theirs: options.theirs,
      path: options.path
    }), { json: true });
  }
  Commit(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}commit.json?` }, {
      transactionId: params.transactionId,
      message: options.message,
      all: options.all,
      authorName: options.authorName,
      authorEmail: options.authorEmail
    }), { json: true });
  }
  Diff(options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}diff.json?` }, {
      oldRefSpec: options.oldRefSpec,
      newRefSpec: options.newRefSpec,
      pathFilter: options.pathFilter,
      showGeometryChanges: options.showGeometryChanges,
      page: options.page,
      show: options.show
    }), { json: true });
  }
  Fetch(options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}fetch.json?` }, {
      prune: options.prune,
      all: options.all,
      remote: options.remote
    }), { json: true });
  }
  Log(options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}log.json?` }, {
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
    }), { json: true });
  }
  Merge(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}merge.json?` }, {
      transactionId: params.transactionId,
      commit: params.commit,
      noCommit: options.noCommit,
      authorName: options.authorName,
      authorEmail: options.authorEmail
    }), { json: true });
  }
  Pull(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}pull.json?` }, {
      remoteName: options.remoteName,
      all: options.all,
      ref: options.ref,
      authorName: options.authorName,
      authorEmail: options.authorEmail
    }), { json: true });
  }
  Push(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}push.json?` }, {
      all: options.all,
      ref: options.ref,
      remoteName: options.remoteName
    }), { json: true });
  }
  Remote(options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}remote.json?` }, {
      list: options.list,
      remove: options.remove,
      ping: options.ping,
      update: options.update,
      verbose: options.verbose,
      remoteName: options.remoteName,
      newName: options.newName,
      remoteURL: options.remoteURL,
      username: options.username,
      password: options.password
    }), { json: true });
  }
  Remove(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}remove.json?` }, {
      path: params.path,
      recursive: options.recursive
    }), { json: true });
  }
  Status(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}status.json?` }, {
      limit: options.limit,
      offset: options.offset
    }), { json: true });
  }
  Tag(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}tag.json?` }, {
      name: params.name,
      message: params.message,
      commit: params.commit
    }), { json: true });
  }
  Version(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}version.json?` }, {}), { json: true });
  }
  // Plumbing Commands Supported
  FeatureDiff(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}featurediff.json?` }, {
      path: params.path,
      newTreeish: options.newTreeish,
      oldTreeish: options.oldTreeish,
      all: options.all
    }), { json: true });
  }
  LsTree(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}ls-tree.json?` }, {
      showTree: options.showTree,
      onlyTree: options.onlyTree,
      recursive: options.recursive,
      verbose: options.verbose,
      path: options.path
    }), { json: true });
  }
  RebuildGraph(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}rebuildgraph.json?` }, {
      quiet: options.quiet
    }), { json: true });
  }
  RefParse(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}refparse.json?` }, {
      name: params.name
    }), { json: true });
  }
  UpdateRef(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}updateref.json?` }, {
      name: params.name,
      delete: options.delete,
      newValue: options.delete
    }), { json: true });
  }

  //Web-API Specific
  GetCommitGraph(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}getCommitGraph.json?` }, {
      depth: options.depth,
      commitId: params.commitId,
      page: options.page,
      show: options.show
    }), { json: true });
  }

  ResolveConflict(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}resolveconflict.json?` }, {
      transactionId: params.transactionId,
      path: options.path,
      objectid: options.objectid
    }), { json: true });
  }
  RevertFeature() {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}revertfeature.json?` }, {
      transactionId: params.transactionId,
      newCommitId: params.newCommitId,
      oldCommitId: params.oldCommitId,
      path: params.path,
      authorName: options.authorName,
      authorEmail: options.authorEmail,
      commitMessage: options.commitMessage,
      mergeMessage: options.mergeMessage
    }), { json: true });
  }
  //Repo Commands
  MergeFeature() {}
  Manifest() {}

  //GeoPackage
  Import(params, options = {}) {

    return rp({
      method: 'POST',
      uri: refactoringGET({ baseRequest: `${this._params.uri}import.json?` }, {
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
        fileUpload: {
          value: fs.createReadStream(params.fileUpload),
          options: { filename: 'imovel.gpkg', contentType: 'application/octet-stream;type=geopackage' }
        }
      },
      json: true
    });
  }
  Export(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}export.json?` }, {
      format: params.format,
      path: options.path,
      bbox: options.bbox,
      interchange: options.interchange
    }), { json: true });
  }
  // Web API: Serving and Managing Repositories
  Init(params, options = {}) {
    return rp(refactoringGET({ baseRequest: `${this._params.uri}/init.json?` }, {
      "parentDirectory": options.parentDirectory,
      "authorName": options.authorName,
      "authorEmail": options.authorEmail,
      "dbName": options.dbName,
      "dbPassword": options.dbPassword,
      "dbHost": options.dbHost,
      "dbPort": options.dbPort,
      "dbSchema": options.dbSchema,
      "dbUser": options.dbUser,
      "authorName": options.authorName,
      "authorEmail": options.authorEmail
    }), { json: true });
  }
}

module.exports = Api;