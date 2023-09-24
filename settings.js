const fs = require('fs')

global.creator = 'shanachan' 
global.apikey = ["shanachan", "riza", "rizasuamishana"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
