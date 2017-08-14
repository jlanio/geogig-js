const fs = require ('fs');
const rp = require ('request-promise');
const refactoringGET = require ('../helpers/web-api.helper');

class Api  {
  //Transactions
  static beginTransaction (params, options = {})  {
    return rp(
      refactoringGET({baseRequest: `${params.Adress}beginTransaction.json?`},{
      }),{json: true}
    );
  }
  static endTransaction(params, options = {}) {
    return rp(
      refactoringGET({baseRequest: `${params.Adress}endTransaction.json?`},{
        transactionId: params.transactionId,
        cancel: options.cancel,
      }),{json: true}
    );
  }
  //Porcelain commands supported
  static Add (params, options = {}) {
    return rp(
      refactoringGET({baseRequest: `${params.Adress}add.json?`},{
        transactionId: params.transactionId,
        path: options.path
      }),{json: true}
    );
  }
  static Blame (params, options = {}) {
    return rp(
      refactoringGET({baseRequest: `${params.Adress}blame.json?`},{
        path: params.path,
        commit: options.commit
      }),{json: true}
    );
  }
  static Branch (params, options = {}){
    return rp(
      refactoringGET({baseRequest: `${params.Adress}branch.json?`},{
        list: params.list,
        remotes: options.remotes
      }),{json: true}
    );
  }
  static Checkout (params, options = {}){
    return rp(
      refactoringGET({baseRequest: `${params.Adress}checkout.json?`},{
        transactionId: params.transactionId,
        branch: options.branch,
        ours: options.ours,
        theirs: options.theirs,
        path: options.path
      }),{json: true}
    );
  }
  static Commit (params, options = {}){
    return rp(
      refactoringGET({baseRequest: `${params.Adress}commit.json?`},{
        transactionId: params.transactionId,
        message: options.message,
        all: options.all,
        authorName: options.authorName,
        authorEmail: options.authorEmail
      }),{json: true}
    );
  }
  static Diff (params, options = {}){
    return rp(
      refactoringGET({baseRequest: `${params.Adress}diff.json?`},{
        oldRefSpec: params.oldRefSpec,
        newRefSpec: options.newRefSpec,
        pathFilter: options.newRefSpec,
        showGeometryChanges: options.newRefSpec,
        page: options.newRefSpec,
        show: options.newRefSpec
      }),{json: true}
    );
  }
  static Fetch (params, options = {}){
    return rp(
      refactoringGET({baseRequest: `${params.Adress}fetch.json?`},{
        prune: options.prune,
        all: options.all,
        remote: options.remote
      }),{json: true}
    );
  }
  static Log (params, options = {}) {
    return rp(
      refactoringGET({baseRequest: `${params.Adress}log.json?`},{
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
  static Merge (params, options = {}){
    return rp(
      refactoringGET({baseRequest: `${params.Adress}merge.json?`},{
        transactionId: params.transactionId,
        commit: params.commit,
        noCommit: options.noCommit,
        authorName: options.authorName,
        authorEmail: options.authorEmail
      }),{json: true}
    );
  }
  static Pull (params, options = {}){
    return rp(
      refactoringGET({baseRequest: `${params.Adress}pull.json?`},{
        remoteName: options.remoteName,
        all: options.all,
        ref: options.ref,
        authorName: options.authorName,
        authorEmail: options.authorEmail
      }),{json: true}
    );
  }
  static Push (params, options = {}){
    return rp(
      refactoringGET({baseRequest: `${params.Adress}push.json?`},{
        all: options.all,
        ref: options.ref,
        remoteName: options.remoteName
      }),{json: true}
    );
  }
  static Remote (params, options = {}){
    return rp(
      refactoringGET({baseRequest: `${params.Adress}remote.json?`},{
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
      }),{json: true}
    );
  }
  static Remove (params, options = {}){
    return rp(
      refactoringGET({baseRequest: `${params.Adress}remove.json?`},{
        path: params.path,
        recursive: options.recursive
      }),{json: true}
    );
  }
  static Status (params, options = {}){
    return rp(
      refactoringGET({baseRequest: `${params.Adress}status.json?`},{
        limit: options.limit,
        offset: options.offset
      }),{json: true}
    );
  }
  static Tag (params, options = {}){
    return rp(
      refactoringGET({baseRequest: `${params.Adress}tag.json?`},{
        name: params.name,
        message: params.message,
        commit: params.commit
      }),{json: true}
    );
  }
  static Version (params, options = {}){
    return rp(
      refactoringGET({baseRequest: `${params.Adress}version.json?`},{
      }),{json: true}
    );
  }
  // Plumbing Commands Supported
  static FeatureDiff (params, options = {}){
    return rp(
      refactoringGET({baseRequest: `${params.Adress}featurediff.json?`},{
        path: params.path,
        newTreeish: options.newTreeish,
        oldTreeish: options.oldTreeish,
        all: options.all
      }),{json: true}
    );
  }
  static LsTree (params, options = {}){
    return rp(
      refactoringGET({baseRequest: `${params.Adress}ls-tree.json?`},{
        showTree: options.showTree,
        onlyTree : options.onlyTree,
        recursive: options.recursive,
        verbose: options.verbose,
        path: options.path
      }),{json: true}
    );
  }
  static RebuildGraph (params, options = {}){
    return rp(
      refactoringGET({baseRequest: `${params.Adress}rebuildgraph.json?`},{
        quiet: options.quiet
      }),{json: true}
    );
  }
  static RefParse (params, options = {}){
    return rp(
      refactoringGET({baseRequest: `${params.Adress}refparse.json?`},{
        name: params.name
      }),{json: true}
    );
  }
  static UpdateRef (params, options = {}){
    return rp(
      refactoringGET({baseRequest: `${params.Adress}updateref.json?`},{
        name: params.name,
        delete: options.delete,
        newValue: options.delete
      }),{json: true}
    );
  }

  //Web-API Specific
  static GetCommitGraph (params, options = {}){
    return rp(
      refactoringGET({baseRequest: `${params.Adress}getCommitGraph.json?`},{
        depth: options.depth,
        commitId: params.commitId,
        page: options.page,
        show: options.show
      }),{json: true}
    );
  }

  static ResolveConflict (params, options = {}){
    return rp(
      refactoringGET({baseRequest: `${params.Adress}resolveconflict.json?`},{
          transactionId: params.transactionId,
          path: options.path,
          objectid: options.objectid
        }),{json: true}
      );
    }
  static RevertFeature (){
    return rp(
      refactoringGET({baseRequest: `${params.Adress}revertfeature.json?`},{
        transactionId: params.transactionId,
        newCommitId: params.newCommitId,
        oldCommitId: params.oldCommitId,
        path: params.path,
        authorName: options.authorName,
        authorEmail: options.authorEmail,
        commitMessage: options.commitMessage,
        mergeMessage: options.mergeMessage
      }),{json: true}
    );
  }
  //Repo Commands
  static MergeFeature (){}
  static Manifest (){}

  //GeoPackage
  static Import (params, options = {}) {
    return rp({
      method: 'POST',
      uri: refactoringGET({baseRequest: `${params.Adress}import.json?`},{
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
      refactoringGET({baseRequest: `${params.Adress}export.json?`},{
        format: params.format,
        path: options.path,
        bbox: options.bbox,
        interchange: options.interchange
      }),{json: true}
    );
  }
}

module.exports = Api
