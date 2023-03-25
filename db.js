Object.defineProperty(exports, "__esModule", { value: true });
exports.Secret = exports.HostName = exports.RemoteURI = exports.LocalURI = void 0;
// exports.LocalURI = "mongodb://localhost/"; // for local test please change to local path .
exports.RemoteURI = "mongodb+srv://wsxicang:YnnBaPWmfCHEtX9g@cluster0.bviu6g9.mongodb.net/?retryWrites=true&w=majority/ISSgProject";
exports.HostName = (process.env.RemoteURI) ? "remoteHost" : "localHost";
exports.Secret = "someSecret";