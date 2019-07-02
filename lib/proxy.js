const { createGlobalProxyAgent } = require('global-agent');

module.exports = {
  bootstrap,
};

// istanbul ignore next
function bootstrap() {
  if (!process.env.HTTP_PROXY && process.env.http_proxy) {
    process.env.HTTP_PROXY = process.env.http_proxy;
  }
  if (!process.env.HTTPS_PROXY && process.env.https_proxy) {
    process.env.HTTPS_PROXY = process.env.https_proxy;
  }
  if (!process.env.NO_PROXY && process.env.no_proxy) {
    process.env.NO_PROXY = process.env.no_proxy;
  }
  return createGlobalProxyAgent({
    environmentVariableNamespace: '',
  });
}
