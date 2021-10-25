import http from "http"

http.createServer(
    function(req, resp) {
        resp.write('API WEB SDG JALAN')
        resp.end()
    }
).listen(8080);