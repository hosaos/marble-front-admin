const STATUS = {
  OK: [0],
};

export function isOK(status) {
  return status == null || STATUS.OK.indexOf(String(status)) >= 0;
}

export function isNotOK(code) {
  return code != null && STATUS.OK !== code;
}
