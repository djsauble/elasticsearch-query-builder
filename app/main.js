var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'http://localhost:9200'
});

client.search({
  q: '*'
}).then(function (body) {
  console.log(`${body.hits.hits.length} results found`);
});
