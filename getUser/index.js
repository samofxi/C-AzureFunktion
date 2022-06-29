require('dotenv').config();
const service = require('../bin/Services');
require('dotenv').config();
module.exports = async function (context, req) {
    const results = await service.Home(JSON);
    const responseMessage = "Hello, " + ". This HTTP triggered function executed successfully."
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}