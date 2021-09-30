document.getElementById('gtinType').addEventListener('change', function () {
	chrome.storage.sync.set({ type: this.value })
})

function constructOptions() {
	chrome.storage.sync.get('type', ({ type }) => {
		document.getElementById('gtinType').value = type
	})
}

constructOptions()
