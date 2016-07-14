# Query builder prototype for Elasticsearch

## Before you start

* Ensure that an elasticsearch instance is available at `http://localhost:9200`
* Ensure that the following options are set in `elasticsearch.yml`
    http.enabled: true
    http.cors.enabled: true
    http.cors.allow-origin: "*"
* Install dependencies with `npm install`

## Develop

* Install node (>= 4.4.7)
* Install browsify `npm install browsify -g`
* Install watchify `npm install watchify -g`
* Build changes automatically `watchify app/main.js -o public/bundle.js`
* Run the server `node app.js`

## Run

* `node app.js`
* View in browser at `http://localhost:3000`
