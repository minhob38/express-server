const allowOrigin = ['http://localhost:3000'];

const corsConfig = (req, callback) => {
  let corsOptions;
  /* [express cors]
  - https://expressjs.com/en/resources/middleware/cors.html
  🔎 origin header (fetch의 요청위치)
  (https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Origin)
  */
  if (allowOrigin.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

export default corsConfig;
