const errorHandlerMiddleware = (err, req, res, next) => {
  const defaultError = {
    statusCode: err.statusCode || 500,
    msg: err.message,
  };
  if (err.name === 'ValidationError') {
    defaultError.statusCode = 400;
    defaultError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(',');
  }
  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default errorHandlerMiddleware;
