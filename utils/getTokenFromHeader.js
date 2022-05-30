module.exports = function (req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  )
    return req.headers.authorization.split(" ")[1];
  else if (req.query && req.query.token) return req.query.token;
  else if (req.headers["x-access-token"]) return req.headers["x-access-token"];
  return null;
};