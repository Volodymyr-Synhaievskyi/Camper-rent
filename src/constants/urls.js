

const mockApiEndPoint = 'https://6645ed96b8925626f893c2ce.mockapi.io/rentCampers/API'

const catalog = `/Catalog`

const urls = {
    campers:{
        base:`${catalog}`,
        byId:(id)=>`${catalog}${id}`
    }
}

export {
    urls,mockApiEndPoint
}