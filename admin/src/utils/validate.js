export const validSpecial = (rule, value, callback) => {
  const reg = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/g
  if (!reg.test(value)) {
    callback(new Error('只能输入字母和汉字！'));
  } else {
    callback();
  }
};