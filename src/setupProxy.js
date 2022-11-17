const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://localhost:8080',
            changeOrigin: true
        })
    );
    app.use(
        createProxyMiddleware('/recommend', {
            target : 'http://localhost:5000',
            changeOrigin: true
        })
    );
    app.use(
        createProxyMiddleware('/img', {
            target : 'http://localhost:4000',
            changeOrigin: true
        })
    );
    app.options('/write', (req, res) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers',
            'Content-Type, Authorization, Content-Length, X-Requested-With');
        res.send();
    });
    app.all('/api', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });
    app.all('/recommend', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });
};