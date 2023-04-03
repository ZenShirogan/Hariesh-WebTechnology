const http = require("http");
url=require("url");
http.createServer((req,res)=>{
    console.log(req.url);
    var q=url.parse(req.url,true).query;
    console.log(q);
    console.log(q.length);
    console.log(q.breath);
    var len= Number(q.length);
    var bre= Number(q.breath);
    var area1 = len*bre;
    res.write("Area of rectangle is "+area1+"\n");
    
    console.log(q.radius);
    var rad= Number(q.radius);
    var area2 = 3.14*rad*rad;
    res.write("Area of circle is "+area2);
    res.end(); 
}).listen(2044);
console.log('Server has Started');