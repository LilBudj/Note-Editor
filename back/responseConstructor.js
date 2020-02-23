class Response {
    constructor(){
            this.addData = (data) => {
                this.data = data
            }
    }
}

module.exports.createResponse = (data = null) => {
    let resObject = new Response;
    if (data){
        resObject.addData(data)
    }
    return resObject
};