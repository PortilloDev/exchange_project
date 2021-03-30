//# fetch api =>Es una funcionalidad relativamente nueva que disponen los productos para poder hacer interacciones Http con servidores o con el api

const url = 'https://api.coincap.io/v2'

function getAssets() {
    return fetch(`${url}/assets?limit=20`)
        .then(res => res.json())
        .then(res => res.data)
}

export default {
    getAssets
}