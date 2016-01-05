# BC Jobs Analytics Dashboard

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server --proxy http://analytics.bcjobs.ca`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

#### Preparation:
* Make sure `lftp` is installed
  * ` brew install lftp`
* Make sure `deploy.sh` exists:
  * `touch deploy.sh`
* Set content of `deploy.sh` to:

```
#!/bin/bash

FTP_USER={user}
FTP_PASSWORD={password}
FTP_HOST={host:port} (example: www.example.com:29)
FTP_DIR=/

# Deploy assets first
lftp -c "open -u $FTP_USER,$FTP_PASSWORD $FTP_HOST; set ssl:verify-certificate no; mirror --exclude index.html -R dist/ $FTP_DIR"

# Deploy index.html
lftp -c "open -u $FTP_USER,$FTP_PASSWORD $FTP_HOST; set ssl:verify-certificate no; put -O $FTP_DIR dist/index.html"
```

#### Deploy
* `make deploy`

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
