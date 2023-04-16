const http = require('http');
url=require("url");
const calculator = require('./cal.js');

http.createServer((req, res) => {
    console.log(req.url);
    var q=url.parse(req.url,true).query;
    var result;
    console.log(q);
    console.log(q.num1);
    console.log(q.num2);
    console.log(q.operator);

        if(q.operator=="+"){
            result=calculator.add(q.num1,q.num2);
            res.write("The result is "+result);

        }
        else if(q.operator=="-"){
            result=calculator.sub(q.num1,q.num2);
            res.write("The result is "+result);
            }
        else if(q.operator=="*"){
            result=calculator.mult(q.num1,q.num2);
            res.write("The result is "+result);
            }
        else if(q.operator=="/"){
            result=calculator.div(q.num1,q.num2);
            res.write("The result is "+result);
            }
        else if(q.operator=="%"){
            result=calculator.mod(q.num1,q.num2);
            res.write("The result is "+result);
        }
        
    res.end();
  
}).listen(2046);
console.log('Server has Started');