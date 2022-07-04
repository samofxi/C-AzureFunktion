module.exports = async function (context, req) {
  const responseMessage =
    "Hello, This HTTP triggered function executed successfully.";
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  };
};
