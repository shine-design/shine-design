/**
 * 表单校验规则、错误提示
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2019-05-04 21:31
 */
import _ from 'lodash';

const getByteLen = value => {
  let len = 0;
  for (let i = 0; i < value.length; i++) {
    if (value.charCodeAt(i) > 127 || value.charCodeAt(i) === 94) {
      len += 2;
    } else {
      len += 1;
    }
  }
  return len;
};

export const VALIDATION_RULES = {
  /** 非空校验 */
  required: /\S/,
  /** 电子邮箱 */
  /* eslint-disable no-useless-escape */
  email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  /** 正则表达式 */
  url: /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
  /** 数字类型 */
  number: /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/,
  date(value) {
    return _.isDate(value);
  },
  /** 最小长度 */
  minLen(value, rule) {
    const length = _.isArray(value) ? value.length : getByteLen(value);
    return _.gte(length, rule);
  },
  /** 最大长度 */
  maxLen(value, rule) {
    const length = _.isArray(value) ? value.length : getByteLen(value);
    return _.lte(length, rule);
  },
  /** 大于固定值 */
  min(value, rule) {
    return _.gte(value, rule);
  },
  /** 小于固定值 */
  max(value, rule) {
    return _.lte(value, rule);
  },
  /** 比较两个值是否相当 */
  equalTo(value, rule) {
    return _.isEqual(value, rule);
  },
};

/** 表单校验错误提示 */
export const VALIDATION_MSG = {
  required: '当前字段不能为空',
  email: '当前字段仅支持输入合法邮箱',
  url: '当前字段仅支持输入合法网址',
  number: '当前字段仅支持输入数字类型',
  minLen(rule) {
    return `当前字段不得少于${rule}个字符`;
  },
  maxLen(rule) {
    return `当前字段不得多于${rule}个字符`
  },
  min(rule) {
    return `当前字段不得少于${rule}`;
  },
  max(rule) {
    return `当前字段不得大于${rule}`;
  },
  equalTo: '当前字段与被校验值不一致',
};


/**
 * 判断是否为标准的默认校验规则
 * @param key 校验规则名称
 * @param value 用户设置的值
 * @returns {*} 若传入true，则返回默认校验规则，否则返回自定义规则。
 */
export const buildDefaultRules = (key, value) => {
  return VALIDATION_RULES[key] || value;
};

/**
 * 正则校验传入的值
 * @param reg 正则表达式
 * @param value 传入值
 * @returns {boolean|*} 是否校验通过
 */
export const runRegExp = (reg, value) => {
  return _.isString(value) && reg.test(value);
};
