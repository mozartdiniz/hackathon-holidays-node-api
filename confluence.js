// Nothing is working :(

// var options = {
//     host: 'netwerven.atlassian.net',
//     path: '/wiki/rest/api/content?title=Warm+lunch&spaceKey=HACK&expand=body.storage',
//     auth: '---@endouble.com' + ':' + '***'
// };
//
// request = http.get(options, function(res){
//   res.setEncoding('utf8');
//   res.on('data', function(chunk){
//       console.log(chunk);
//   });
//
// });

// requestify.get('https://netwerven.atlassian.net/wiki/rest/api/content?title=Warm+lunch&spaceKey=HACK&expand=body.storage', {
//   headers: {
//       'Content-Type': 'application/json',
//       'Cookie': 'JSESSIONID=92F6D8B5652E41D3E1B8C775E295B3DF; confluence.user.history=0b5e21a1-2680-40dd-aed8-44063767ad0d; atl.xsrf.token=95f7a9ec94196faa2e9af09b80606c4045906a91; confluence.uiconfluence.recentchanges.size=40; __atl_path=172.26.26.14.1465823200753097; studio.crowd.tokenkey=mq4J0F0I0BaLT4dL27xCVw00; mywork.tab.tasks=false'
//   },
//   auth: {
//       username: 'user',
//       password: '***'
//   },
// }).then(function(response) {
//   let body = response.getBody();
//   console.log(body.results[0].body.storage.value);
// });

//
// var Confluence = require("confluence-api");
// var config = {
//     username: "---@endouble.com",
//     password: "***",
//     baseUrl:  "https://netwerven.atlassian.net/wiki/"
// };
// var confluence = new Confluence(config);
// confluence.getContentByPageTitle("HACK", "Warm+lunch", function(err, data) {
//     console.log(data);
// });
