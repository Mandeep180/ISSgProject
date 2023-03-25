Object.defineProperty(exports, "__esModule", { value: true });
exports.Secret = exports.HostName = exports.RemoteURI = exports.LocalURI = void 0;
// exports.LocalURI = "mongodb://localhost/"; // for local test please change to local path . not suggest, better use below the remote testing one
exports.RemoteURI = "mongodb+srv://yingying:34cXDNL6uKI0BsxS@cluster0.hxi0a3j.mongodb.net/?retryWrites=true&w=majority/ISSgProject"; // for remote testing 
// exports.RemoteURI = "mongodb+srv://wsxicang:YnnBaPWmfCHEtX9g@cluster0.bviu6g9.mongodb.net/?retryWrites=true&w=majority/ISSgProject"; // for project using
exports.HostName = (process.env.RemoteURI) ? "localHost" : "remoteHost";
exports.Secret = "someSecret";