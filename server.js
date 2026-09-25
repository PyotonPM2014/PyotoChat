const ws = require('ws')
const server = ws.Server({ port: 7000 })

server.on('connection', function(client) {
	console.log('Client connected')
	const filter = server.clients.filter(c => c != client)
	filter.forEach(function(client) {
		client.send('Person connected')
		return
	})

	client.on('message', function(message) {
		filter.forEach(function(client) {
			client.send(message)
			return
		}); return
	})

	client.on('close', function() {
		console.log('Client disconnected')
		filter.forEach(function(client) {
			client.send('Person disconnected')
			return
		}); return
	}); return
})
