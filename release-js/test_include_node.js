var datascript_mori = require('./datascript-mori');
var d = datascript_mori.datascript.js;
var conn = d.create_conn();
d.transact(conn, [[":db/add", -1, "name", "Ivan"]]);
var res = d.q("[:find ?e ?v :where [?e \"name\" ?v]]", d.db(conn));
var res_str = JSON.stringify(res);
console.log(res_str); // => [[1, "Ivan"]]
