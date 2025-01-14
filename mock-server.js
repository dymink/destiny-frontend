const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const rewriter = jsonServer.rewriter({
  'api/*': '/$1',
})

server.use(middlewares)
server.use(rewriter)
server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})
