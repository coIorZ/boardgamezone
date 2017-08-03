export default ({ msg = 'unknown', code = code.UNKNOWN, status = 500 } = {}) => {
  const err = new Error(msg);
  err.msg = msg;
  err.code = code;
  err.status = status;
  err.__api__ = true;
  return err;
};

export const codes = {
  UNKNOWN: -999,
};
