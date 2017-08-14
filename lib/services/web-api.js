'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs');
var rp = require('request-promise');
var refactoringGET = require('../helpers/web-api.helper');

var Api = function () {
  function Api() {
    _classCallCheck(this, Api);
  }

  _createClass(Api, null, [{
    key: 'beginTransaction',

    //Transactions
    value: function beginTransaction(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'beginTransaction.json?' }, {}), { json: true });
    }
  }, {
    key: 'endTransaction',
    value: function endTransaction(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'endTransaction.json?' }, {
        transactionId: params.transactionId,
        cancel: options.cancel
      }), { json: true });
    }
    //Porcelain commands supported

  }, {
    key: 'Add',
    value: function Add(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'add.json?' }, {
        transactionId: params.transactionId,
        path: options.path
      }), { json: true });
    }
  }, {
    key: 'Blame',
    value: function Blame(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'blame.json?' }, {
        path: params.path,
        commit: options.commit
      }), { json: true });
    }
  }, {
    key: 'Branch',
    value: function Branch(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'branch.json?' }, {
        list: params.list,
        remotes: options.remotes
      }), { json: true });
    }
  }, {
    key: 'Checkout',
    value: function Checkout(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'checkout.json?' }, {
        transactionId: params.transactionId,
        branch: options.branch,
        ours: options.ours,
        theirs: options.theirs,
        path: options.path
      }), { json: true });
    }
  }, {
    key: 'Commit',
    value: function Commit(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'commit.json?' }, {
        transactionId: params.transactionId,
        message: options.message,
        all: options.all,
        authorName: options.authorName,
        authorEmail: options.authorEmail
      }), { json: true });
    }
  }, {
    key: 'Diff',
    value: function Diff(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'diff.json?' }, {
        oldRefSpec: params.oldRefSpec,
        newRefSpec: options.newRefSpec,
        pathFilter: options.newRefSpec,
        showGeometryChanges: options.newRefSpec,
        page: options.newRefSpec,
        show: options.newRefSpec
      }), { json: true });
    }
  }, {
    key: 'Fetch',
    value: function Fetch(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'fetch.json?' }, {
        prune: options.prune,
        all: options.all,
        remote: options.remote
      }), { json: true });
    }
  }, {
    key: 'Log',
    value: function Log(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'log.json?' }, {
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
  }, {
    key: 'Merge',
    value: function Merge(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'merge.json?' }, {
        transactionId: params.transactionId,
        commit: params.commit,
        noCommit: options.noCommit,
        authorName: options.authorName,
        authorEmail: options.authorEmail
      }), { json: true });
    }
  }, {
    key: 'Pull',
    value: function Pull(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'pull.json?' }, {
        remoteName: options.remoteName,
        all: options.all,
        ref: options.ref,
        authorName: options.authorName,
        authorEmail: options.authorEmail
      }), { json: true });
    }
  }, {
    key: 'Push',
    value: function Push(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'push.json?' }, {
        all: options.all,
        ref: options.ref,
        remoteName: options.remoteName
      }), { json: true });
    }
  }, {
    key: 'Remote',
    value: function Remote(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'remote.json?' }, {
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
  }, {
    key: 'Remove',
    value: function Remove(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'remove.json?' }, {
        path: params.path,
        recursive: options.recursive
      }), { json: true });
    }
  }, {
    key: 'Status',
    value: function Status(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'status.json?' }, {
        limit: options.limit,
        offset: options.offset
      }), { json: true });
    }
  }, {
    key: 'Tag',
    value: function Tag(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'tag.json?' }, {
        name: params.name,
        message: params.message,
        commit: params.commit
      }), { json: true });
    }
  }, {
    key: 'Version',
    value: function Version(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'version.json?' }, {}), { json: true });
    }
    // Plumbing Commands Supported

  }, {
    key: 'FeatureDiff',
    value: function FeatureDiff(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'featurediff.json?' }, {
        path: params.path,
        newTreeish: options.newTreeish,
        oldTreeish: options.oldTreeish,
        all: options.all
      }), { json: true });
    }
  }, {
    key: 'LsTree',
    value: function LsTree(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'ls-tree.json?' }, {
        showTree: options.showTree,
        onlyTree: options.onlyTree,
        recursive: options.recursive,
        verbose: options.verbose,
        path: options.path
      }), { json: true });
    }
  }, {
    key: 'RebuildGraph',
    value: function RebuildGraph(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'rebuildgraph.json?' }, {
        quiet: options.quiet
      }), { json: true });
    }
  }, {
    key: 'RefParse',
    value: function RefParse(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'refparse.json?' }, {
        name: params.name
      }), { json: true });
    }
  }, {
    key: 'UpdateRef',
    value: function UpdateRef(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'updateref.json?' }, {
        name: params.name,
        delete: options.delete,
        newValue: options.delete
      }), { json: true });
    }

    //Web-API Specific

  }, {
    key: 'GetCommitGraph',
    value: function GetCommitGraph(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'getCommitGraph.json?' }, {
        depth: options.depth,
        commitId: params.commitId,
        page: options.page,
        show: options.show
      }), { json: true });
    }
  }, {
    key: 'ResolveConflict',
    value: function ResolveConflict(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'resolveconflict.json?' }, {
        transactionId: params.transactionId,
        path: options.path,
        objectid: options.objectid
      }), { json: true });
    }
  }, {
    key: 'RevertFeature',
    value: function RevertFeature() {
      return rp(refactoringGET({ baseRequest: params.Adress + 'revertfeature.json?' }, {
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

  }, {
    key: 'MergeFeature',
    value: function MergeFeature() {}
  }, {
    key: 'Manifest',
    value: function Manifest() {}

    //GeoPackage

  }, {
    key: 'Import',
    value: function Import(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp({
        method: 'POST',
        uri: refactoringGET({ baseRequest: params.Adress + 'import.json?' }, {
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
  }, {
    key: 'Export',
    value: function Export(params) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return rp(refactoringGET({ baseRequest: params.Adress + 'export.json?' }, {
        format: params.format,
        path: options.path,
        bbox: options.bbox,
        interchange: options.interchange
      }), { json: true });
    }
  }]);

  return Api;
}();

module.exports = Api;