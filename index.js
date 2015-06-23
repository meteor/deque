// The meteor-deque package currently exists to work around a problem in
// the read-installed package (used by npm) that effectively forbids
// packages with prerelease versions (like double-ended-queue@2.1.0-0)
// from being installed in a top-level node_modules directory. In the
// future, we might supplement this package with our own queue features,
// but for now we export the double-ended-queue module unmodified.
module.exports = require("double-ended-queue");
