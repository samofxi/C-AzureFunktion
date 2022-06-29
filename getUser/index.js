require('dotenv').config();
const service = require('../bin/Services');
require('dotenv').config();
module.exports = async function (context, req) {  
 const result = await service.getUser(JSON)
    context.res = {  
        Body: result,
}
}