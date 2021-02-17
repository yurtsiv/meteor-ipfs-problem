This is a reproduction of the issue of `ipfs-http-client` with Meteor framework.

# Running

1. Clone the repo
2. [Install Meteor](https://www.meteor.com/developers/install)
3. `meteor npm install`
4. `meteor npm start`

# Reproducing the issue

Everyting is working in its current form since `ipfs-http-client` is locked to version `41.0.1`. In order to see the problem:

1. `meteor npm install ipfs-http-client@latest`
2. Rerun the app with `meteor npm start`
3. You may see warnings about uninstalled packages (f.e. `electron`) which you can install, although it doesn't solve the problem.
