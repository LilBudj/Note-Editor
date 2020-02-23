class Response {
    constructor(){
        return {
            resultCode: 200,
        }
    }
    addData(data){
        this.data = data
    }
}

exports.createResponse = (data = null) => {
    let resObject = new Response;
    if (data){
        resObject.addData(data)
    }
    return resObject
};