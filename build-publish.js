require('dotenv').config()

var exec = require('child_process').exec,
child;

child = exec('tfx extension publish --rev-version --share-with '+process.env.EPOKER_MKPLC_SHARE_WITH+' -t '+process.env.EPOKER_MKPLC_TOKEN,
function (error, stdout, stderr) {
 console.log('stdout: ' + stdout);
 console.log('stderr: ' + stderr);
 if (error !== null) {
      console.log('exec error: ' + error);
 }
});


