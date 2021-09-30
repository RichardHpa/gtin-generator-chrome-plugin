// background.js
let type = '13'

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ type })
	console.log('Default GTIN type set to %c13', `Type: ${type}`)
})
