require('../config/config');

module.exports = (_, res) => res.send(
`<html>
<head><title>Node Express Hello World</title></head>
<body>
<div class="container">
    <h3>Welcome to ${process.env.MODULE_NAME}</h3>
    <p>A Hello World App written with <a href="https://nodejs.org/en/">Node</a> using
     <a href="https://expressjs.com/">ExpressJS</a></p>
    </p>
    <p>Formatting is done using the <a href="http://getskeleton.com/">Skeleton</a> css minimal framework</p>
     <link rel="stylesheet" href="static/skeleton.min.css">
</div>    
</body> 
</html>
`);
