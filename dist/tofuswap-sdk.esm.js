import JSBI from 'jsbi';
export { default as JSBI } from 'jsbi';
import invariant from 'tiny-invariant';
import warning from 'tiny-warning';
import { getAddress, getCreate2Address } from '@ethersproject/address';
import _Big from 'big.js';
import toFormat from 'toformat';
import _Decimal from 'decimal.js-light';
import { keccak256, pack } from '@ethersproject/solidity';
import { Contract } from '@ethersproject/contracts';
import { getNetwork } from '@ethersproject/networks';
import { getDefaultProvider } from '@ethersproject/providers';

var _SOLIDITY_TYPE_MAXIMA;
var ChainId;

(function (ChainId) {
  ChainId[ChainId["MAINNET"] = 11111] = "MAINNET";
  ChainId[ChainId["NILE"] = 201910292] = "NILE";
  ChainId[ChainId["SHASTA"] = 1] = "SHASTA";
})(ChainId || (ChainId = {}));

var TradeType;

(function (TradeType) {
  TradeType[TradeType["EXACT_INPUT"] = 0] = "EXACT_INPUT";
  TradeType[TradeType["EXACT_OUTPUT"] = 1] = "EXACT_OUTPUT";
})(TradeType || (TradeType = {}));

var Rounding;

(function (Rounding) {
  Rounding[Rounding["ROUND_DOWN"] = 0] = "ROUND_DOWN";
  Rounding[Rounding["ROUND_HALF_UP"] = 1] = "ROUND_HALF_UP";
  Rounding[Rounding["ROUND_UP"] = 2] = "ROUND_UP";
})(Rounding || (Rounding = {})); // mainnet


var FACTORY_ADDRESS = '0xc31f30448cb48d0822c0e94573b1fb7671883e09';
var TOFU_FREEZER_ADDRESS = '0x4B51442c89d2A87480F29A5470FDc3f9619869E1'; // local tests
//export const INIT_CODE_HASH = '0x67362b6851b5759acb891575dad6796f51c77306b174ae6c6fd05882d9bd1bf3'
//mainnet

var INIT_CODE_HASH = '0x9a276da79c5556bb068dcd272cffa5b6a813c757c1d161722caaf65234be463b';
var MINIMUM_LIQUIDITY = /*#__PURE__*/JSBI.BigInt(1000); // exports for internal consumption

var ZERO = /*#__PURE__*/JSBI.BigInt(0);
var ONE = /*#__PURE__*/JSBI.BigInt(1);
var TWO = /*#__PURE__*/JSBI.BigInt(2);
var THREE = /*#__PURE__*/JSBI.BigInt(3);
var FIVE = /*#__PURE__*/JSBI.BigInt(5);
var TEN = /*#__PURE__*/JSBI.BigInt(10);
var _100 = /*#__PURE__*/JSBI.BigInt(100);
var _9970 = /*#__PURE__*/JSBI.BigInt(9970);
var _9975 = /*#__PURE__*/JSBI.BigInt(9975);
var _9980 = /*#__PURE__*/JSBI.BigInt(9980);
var _9985 = /*#__PURE__*/JSBI.BigInt(9985);
var _9990 = /*#__PURE__*/JSBI.BigInt(9990);
var _10000 = /*#__PURE__*/JSBI.BigInt(10000);
var _100000000 = /*#__PURE__*/JSBI.BigInt(100000000);
var _1000000000 = /*#__PURE__*/JSBI.BigInt(1000000000);
var _10000000000 = /*#__PURE__*/JSBI.BigInt(10000000000);
var _100000000000 = /*#__PURE__*/JSBI.BigInt(100000000000);
var SolidityType;

(function (SolidityType) {
  SolidityType["uint8"] = "uint8";
  SolidityType["uint256"] = "uint256";
})(SolidityType || (SolidityType = {}));

var SOLIDITY_TYPE_MAXIMA = (_SOLIDITY_TYPE_MAXIMA = {}, _SOLIDITY_TYPE_MAXIMA[SolidityType.uint8] = /*#__PURE__*/JSBI.BigInt('0xff'), _SOLIDITY_TYPE_MAXIMA[SolidityType.uint256] = /*#__PURE__*/JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'), _SOLIDITY_TYPE_MAXIMA);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// see https://stackoverflow.com/a/41102306
var CAN_SET_PROTOTYPE = ('setPrototypeOf' in Object);
/**
 * Indicates that the pair has insufficient reserves for a desired output amount. I.e. the amount of output cannot be
 * obtained by sending any amount of input.
 */

var InsufficientReservesError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(InsufficientReservesError, _Error);

  function InsufficientReservesError() {
    var _this;

    _this = _Error.call(this) || this;
    _this.isInsufficientReservesError = true;
    _this.name = _this.constructor.name;
    if (CAN_SET_PROTOTYPE) Object.setPrototypeOf(_assertThisInitialized(_this), (this instanceof InsufficientReservesError ? this.constructor : void 0).prototype);
    return _this;
  }

  return InsufficientReservesError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Indicates that the input amount is too small to produce any amount of output. I.e. the amount of input sent is less
 * than the price of a single unit of output after fees.
 */

var InsufficientInputAmountError = /*#__PURE__*/function (_Error2) {
  _inheritsLoose(InsufficientInputAmountError, _Error2);

  function InsufficientInputAmountError() {
    var _this2;

    _this2 = _Error2.call(this) || this;
    _this2.isInsufficientInputAmountError = true;
    _this2.name = _this2.constructor.name;
    if (CAN_SET_PROTOTYPE) Object.setPrototypeOf(_assertThisInitialized(_this2), (this instanceof InsufficientInputAmountError ? this.constructor : void 0).prototype);
    return _this2;
  }

  return InsufficientInputAmountError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function validateSolidityTypeInstance(value, solidityType) {
  !JSBI.greaterThanOrEqual(value, ZERO) ? process.env.NODE_ENV !== "production" ? invariant(false, value + " is not a " + solidityType + ".") : invariant(false) : void 0;
  !JSBI.lessThanOrEqual(value, SOLIDITY_TYPE_MAXIMA[solidityType]) ? process.env.NODE_ENV !== "production" ? invariant(false, value + " is not a " + solidityType + ".") : invariant(false) : void 0;
} // warns if addresses are not checksummed

function validateAndParseAddress(address) {
  try {
    var checksummedAddress = getAddress(address);
    process.env.NODE_ENV !== "production" ? warning(address === checksummedAddress, address + " is not checksummed.") : void 0;
    return checksummedAddress;
  } catch (error) {
     process.env.NODE_ENV !== "production" ? invariant(false, address + " is not a valid address.") : invariant(false) ;
  }
}
function parseBigintIsh(bigintIsh) {
  return bigintIsh instanceof JSBI ? bigintIsh : typeof bigintIsh === 'bigint' ? JSBI.BigInt(bigintIsh.toString()) : JSBI.BigInt(bigintIsh);
} // mock the on-chain sqrt function

function sqrt(y) {
  validateSolidityTypeInstance(y, SolidityType.uint256);
  var z = ZERO;
  var x;

  if (JSBI.greaterThan(y, THREE)) {
    z = y;
    x = JSBI.add(JSBI.divide(y, TWO), ONE);

    while (JSBI.lessThan(x, z)) {
      z = x;
      x = JSBI.divide(JSBI.add(JSBI.divide(y, x), x), TWO);
    }
  } else if (JSBI.notEqual(y, ZERO)) {
    z = ONE;
  }

  return z;
} // given an array of items sorted by `comparator`, insert an item into its sort index and constrain the size to
// `maxSize` by removing the last item

function sortedInsert(items, add, maxSize, comparator) {
  !(maxSize > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MAX_SIZE_ZERO') : invariant(false) : void 0; // this is an invariant because the interface cannot return multiple removed items if items.length exceeds maxSize

  !(items.length <= maxSize) ? process.env.NODE_ENV !== "production" ? invariant(false, 'ITEMS_SIZE') : invariant(false) : void 0; // short circuit first item add

  if (items.length === 0) {
    items.push(add);
    return null;
  } else {
    var isFull = items.length === maxSize; // short circuit if full and the additional item does not come before the last item

    if (isFull && comparator(items[items.length - 1], add) <= 0) {
      return add;
    }

    var lo = 0,
        hi = items.length;

    while (lo < hi) {
      var mid = lo + hi >>> 1;

      if (comparator(items[mid], add) <= 0) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }

    items.splice(lo, 0, add);
    return isFull ? items.pop() : null;
  }
}

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */

var Currency =
/**
 * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
 * @param decimals decimals of the currency
 * @param symbol symbol of the currency
 * @param name of the currency
 */
function Currency(decimals, symbol, name) {
  validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8);
  this.decimals = decimals;
  this.symbol = symbol;
  this.name = name;
};
/**
 * The only instance of the base class `Currency`.
 */
// @TRON
// public static readonly ETHER: Currency = new Currency(18, 'ETH', 'Ether')

Currency.TRX = /*#__PURE__*/new Currency(6, 'TRX', 'Tron');
var TRX = Currency.TRX;

var _WTRX;
/**
 * Represents an ERC20 token with a unique address and some metadata.
 */

var Token = /*#__PURE__*/function (_Currency) {
  _inheritsLoose(Token, _Currency);

  function Token(chainId, address, decimals, symbol, name) {
    var _this;

    _this = _Currency.call(this, decimals, symbol, name) || this;
    _this.chainId = chainId;
    _this.address = validateAndParseAddress(address);
    return _this;
  }
  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */


  var _proto = Token.prototype;

  _proto.equals = function equals(other) {
    // short circuit on reference equality
    if (this === other) {
      return true;
    }

    return this.chainId === other.chainId && this.address === other.address;
  }
  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  ;

  _proto.sortsBefore = function sortsBefore(other) {
    !(this.chainId === other.chainId) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_IDS') : invariant(false) : void 0;
    !(this.address !== other.address) ? process.env.NODE_ENV !== "production" ? invariant(false, 'ADDRESSES') : invariant(false) : void 0;
    return this.address.toLowerCase() < other.address.toLowerCase();
  };

  return Token;
}(Currency);
/**
 * Compares two currencies for equality
 */

function currencyEquals(currencyA, currencyB) {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB);
  } else if (currencyA instanceof Token) {
    return false;
  } else if (currencyB instanceof Token) {
    return false;
  } else {
    return currencyA === currencyB;
  }
} // TODO: TRON: deploy WTRX and set contract addresses here

var WTRX = (_WTRX = {}, _WTRX[ChainId.MAINNET] = /*#__PURE__*/new Token( // Deployed by Tron Foundation
// https://tronscan.io/#/token20/TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR/code
ChainId.MAINNET, '0x891cdb91d149f23b1a45d9c5ca78a88d0cb44c18', 6, 'WTRX', 'Wrapped TRX'), _WTRX[ChainId.NILE] = /*#__PURE__*/new Token(ChainId.NILE, '0x6659eaba214be518345a157bd7e1aee20fa64e3d', 6, 'WTRX', 'Wrapped Tron'), _WTRX[ChainId.SHASTA] = /*#__PURE__*/new Token(ChainId.SHASTA, '0xb440ae27ef6b066a1fd2d1bb9c2bb6e61b3373e5', 6, 'WTRX', 'Wrapped Tron'), _WTRX);

var _toSignificantRoundin, _toFixedRounding;
var Decimal = /*#__PURE__*/toFormat(_Decimal);
var Big = /*#__PURE__*/toFormat(_Big);
var toSignificantRounding = (_toSignificantRoundin = {}, _toSignificantRoundin[Rounding.ROUND_DOWN] = Decimal.ROUND_DOWN, _toSignificantRoundin[Rounding.ROUND_HALF_UP] = Decimal.ROUND_HALF_UP, _toSignificantRoundin[Rounding.ROUND_UP] = Decimal.ROUND_UP, _toSignificantRoundin);
var toFixedRounding = (_toFixedRounding = {}, _toFixedRounding[Rounding.ROUND_DOWN] = 0, _toFixedRounding[Rounding.ROUND_HALF_UP] = 1, _toFixedRounding[Rounding.ROUND_UP] = 3, _toFixedRounding);
var Fraction = /*#__PURE__*/function () {
  function Fraction(numerator, denominator) {
    if (denominator === void 0) {
      denominator = ONE;
    }

    this.numerator = parseBigintIsh(numerator);
    this.denominator = parseBigintIsh(denominator);
  } // performs floor division


  var _proto = Fraction.prototype;

  _proto.invert = function invert() {
    return new Fraction(this.denominator, this.numerator);
  };

  _proto.add = function add(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));

    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.add(this.numerator, otherParsed.numerator), this.denominator);
    }

    return new Fraction(JSBI.add(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.subtract = function subtract(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));

    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.subtract(this.numerator, otherParsed.numerator), this.denominator);
    }

    return new Fraction(JSBI.subtract(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.lessThan = function lessThan(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return JSBI.lessThan(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };

  _proto.equalTo = function equalTo(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return JSBI.equal(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };

  _proto.greaterThan = function greaterThan(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return JSBI.greaterThan(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };

  _proto.multiply = function multiply(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return new Fraction(JSBI.multiply(this.numerator, otherParsed.numerator), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.divide = function divide(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return new Fraction(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(this.denominator, otherParsed.numerator));
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_HALF_UP;
    }

    !Number.isInteger(significantDigits) ? process.env.NODE_ENV !== "production" ? invariant(false, significantDigits + " is not an integer.") : invariant(false) : void 0;
    !(significantDigits > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, significantDigits + " is not positive.") : invariant(false) : void 0;
    Decimal.set({
      precision: significantDigits + 1,
      rounding: toSignificantRounding[rounding]
    });
    var quotient = new Decimal(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(significantDigits);
    return quotient.toFormat(quotient.decimalPlaces(), format);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_HALF_UP;
    }

    !Number.isInteger(decimalPlaces) ? process.env.NODE_ENV !== "production" ? invariant(false, decimalPlaces + " is not an integer.") : invariant(false) : void 0;
    !(decimalPlaces >= 0) ? process.env.NODE_ENV !== "production" ? invariant(false, decimalPlaces + " is negative.") : invariant(false) : void 0;
    Big.DP = decimalPlaces;
    Big.RM = toFixedRounding[rounding];
    return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(decimalPlaces, format);
  };

  _createClass(Fraction, [{
    key: "quotient",
    get: function get() {
      return JSBI.divide(this.numerator, this.denominator);
    } // remainder after floor division

  }, {
    key: "remainder",
    get: function get() {
      return new Fraction(JSBI.remainder(this.numerator, this.denominator), this.denominator);
    }
  }]);

  return Fraction;
}();

var Big$1 = /*#__PURE__*/toFormat(_Big);
var CurrencyAmount = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(CurrencyAmount, _Fraction);

  // amount _must_ be raw, i.e. in the native representation
  function CurrencyAmount(currency, amount) {
    var _this;

    var parsedAmount = parseBigintIsh(amount);
    validateSolidityTypeInstance(parsedAmount, SolidityType.uint256);
    _this = _Fraction.call(this, parsedAmount, JSBI.exponentiate(TEN, JSBI.BigInt(currency.decimals))) || this;
    _this.currency = currency;
    return _this;
  }
  /**
   * Helper that calls the constructor with the TRX currency
   * @param amount ether amount in wei
   */


  CurrencyAmount.trx = function trx(amount) {
    return new CurrencyAmount(TRX, amount);
  };

  var _proto = CurrencyAmount.prototype;

  _proto.add = function add(other) {
    !currencyEquals(this.currency, other.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return new CurrencyAmount(this.currency, JSBI.add(this.raw, other.raw));
  };

  _proto.subtract = function subtract(other) {
    !currencyEquals(this.currency, other.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return new CurrencyAmount(this.currency, JSBI.subtract(this.raw, other.raw));
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 6;
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_DOWN;
    }

    return _Fraction.prototype.toSignificant.call(this, significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = this.currency.decimals;
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_DOWN;
    }

    !(decimalPlaces <= this.currency.decimals) ? process.env.NODE_ENV !== "production" ? invariant(false, 'DECIMALS') : invariant(false) : void 0;
    return _Fraction.prototype.toFixed.call(this, decimalPlaces, format, rounding);
  };

  _proto.toExact = function toExact(format) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    Big$1.DP = this.currency.decimals;
    return new Big$1(this.numerator.toString()).div(this.denominator.toString()).toFormat(format);
  };

  _createClass(CurrencyAmount, [{
    key: "raw",
    get: function get() {
      return this.numerator;
    }
  }]);

  return CurrencyAmount;
}(Fraction);

var TokenAmount = /*#__PURE__*/function (_CurrencyAmount) {
  _inheritsLoose(TokenAmount, _CurrencyAmount);

  // amount _must_ be raw, i.e. in the native representation
  function TokenAmount(token, amount) {
    var _this;

    _this = _CurrencyAmount.call(this, token, amount) || this;
    _this.token = token;
    return _this;
  }

  var _proto = TokenAmount.prototype;

  _proto.add = function add(other) {
    !this.token.equals(other.token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return new TokenAmount(this.token, JSBI.add(this.raw, other.raw));
  };

  _proto.subtract = function subtract(other) {
    !this.token.equals(other.token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return new TokenAmount(this.token, JSBI.subtract(this.raw, other.raw));
  };

  return TokenAmount;
}(CurrencyAmount);

var Price = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(Price, _Fraction);

  // denominator and numerator _must_ be raw, i.e. in the native representation
  function Price(baseCurrency, quoteCurrency, denominator, numerator) {
    var _this;

    _this = _Fraction.call(this, numerator, denominator) || this;
    _this.baseCurrency = baseCurrency;
    _this.quoteCurrency = quoteCurrency;
    _this.scalar = new Fraction(JSBI.exponentiate(TEN, JSBI.BigInt(baseCurrency.decimals)), JSBI.exponentiate(TEN, JSBI.BigInt(quoteCurrency.decimals)));
    return _this;
  }

  Price.fromRoute = function fromRoute(route) {
    var prices = [];

    for (var _iterator = _createForOfIteratorHelperLoose(route.pairs.entries()), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          i = _step$value[0],
          pair = _step$value[1];
      prices.push(route.path[i].equals(pair.token0) ? new Price(pair.reserve0.currency, pair.reserve1.currency, pair.reserve0.raw, pair.reserve1.raw) : new Price(pair.reserve1.currency, pair.reserve0.currency, pair.reserve1.raw, pair.reserve0.raw));
    }

    return prices.slice(1).reduce(function (accumulator, currentValue) {
      return accumulator.multiply(currentValue);
    }, prices[0]);
  };

  var _proto = Price.prototype;

  _proto.invert = function invert() {
    return new Price(this.quoteCurrency, this.baseCurrency, this.numerator, this.denominator);
  };

  _proto.multiply = function multiply(other) {
    !currencyEquals(this.quoteCurrency, other.baseCurrency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    var fraction = _Fraction.prototype.multiply.call(this, other);

    return new Price(this.baseCurrency, other.quoteCurrency, fraction.denominator, fraction.numerator);
  } // performs floor division on overflow
  ;

  _proto.quote = function quote(currencyAmount) {
    !currencyEquals(currencyAmount.currency, this.baseCurrency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    if (this.quoteCurrency instanceof Token) {
      return new TokenAmount(this.quoteCurrency, _Fraction.prototype.multiply.call(this, currencyAmount.raw).quotient);
    }

    return CurrencyAmount.trx(_Fraction.prototype.multiply.call(this, currencyAmount.raw).quotient);
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 6;
    }

    return this.adjusted.toSignificant(significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 4;
    }

    return this.adjusted.toFixed(decimalPlaces, format, rounding);
  };

  _createClass(Price, [{
    key: "raw",
    get: function get() {
      return new Fraction(this.numerator, this.denominator);
    }
  }, {
    key: "adjusted",
    get: function get() {
      return _Fraction.prototype.multiply.call(this, this.scalar);
    }
  }]);

  return Price;
}(Fraction);

var _100_PERCENT = /*#__PURE__*/new Fraction(_100);

var Percent = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(Percent, _Fraction);

  function Percent() {
    return _Fraction.apply(this, arguments) || this;
  }

  var _proto = Percent.prototype;

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 5;
    }

    return this.multiply(_100_PERCENT).toSignificant(significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 2;
    }

    return this.multiply(_100_PERCENT).toFixed(decimalPlaces, format, rounding);
  };

  return Percent;
}(Fraction);

var PAIR_ADDRESS_CACHE = {};
var Pair = /*#__PURE__*/function () {
  function Pair(tokenAmountA, tokenAmountB) {
    var tokenAmounts = tokenAmountA.token.sortsBefore(tokenAmountB.token) // does safety checks
    ? [tokenAmountA, tokenAmountB] : [tokenAmountB, tokenAmountA];
    this.liquidityToken = new Token(tokenAmounts[0].token.chainId, Pair.getAddress(tokenAmounts[0].token, tokenAmounts[1].token), 18, 'TOFU-V2', 'Tofuswap V2');
    this.tokenAmounts = tokenAmounts;
  }

  Pair.getAddress = function getAddress(tokenA, tokenB) {
    var _PAIR_ADDRESS_CACHE, _PAIR_ADDRESS_CACHE$t;

    var tokens = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]; // does safety checks

    if (((_PAIR_ADDRESS_CACHE = PAIR_ADDRESS_CACHE) === null || _PAIR_ADDRESS_CACHE === void 0 ? void 0 : (_PAIR_ADDRESS_CACHE$t = _PAIR_ADDRESS_CACHE[tokens[0].address]) === null || _PAIR_ADDRESS_CACHE$t === void 0 ? void 0 : _PAIR_ADDRESS_CACHE$t[tokens[1].address]) === undefined) {
      var _PAIR_ADDRESS_CACHE2, _extends2, _extends3;

      PAIR_ADDRESS_CACHE = _extends({}, PAIR_ADDRESS_CACHE, (_extends3 = {}, _extends3[tokens[0].address] = _extends({}, (_PAIR_ADDRESS_CACHE2 = PAIR_ADDRESS_CACHE) === null || _PAIR_ADDRESS_CACHE2 === void 0 ? void 0 : _PAIR_ADDRESS_CACHE2[tokens[0].address], (_extends2 = {}, _extends2[tokens[1].address] = getCreate2Address(FACTORY_ADDRESS, keccak256(['bytes'], [pack(['address', 'address'], [tokens[0].address, tokens[1].address])]), INIT_CODE_HASH), _extends2)), _extends3));
    }

    return PAIR_ADDRESS_CACHE[tokens[0].address][tokens[1].address];
  }
  /**
   * Returns true if the token is either token0 or token1
   * @param token to check
   */
  ;

  var _proto = Pair.prototype;

  _proto.involvesToken = function involvesToken(token) {
    return token.equals(this.token0) || token.equals(this.token1);
  }
  /**
   * Returns the current mid price of the pair in terms of token0, i.e. the ratio of reserve1 to reserve0
   */
  ;

  /**
   * Return the price of the given token in terms of the other token in the pair.
   * @param token token to return price of
   */
  _proto.priceOf = function priceOf(token) {
    !this.involvesToken(token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return token.equals(this.token0) ? this.token0Price : this.token1Price;
  }
  /**
   * Returns the chain ID of the tokens in the pair.
   */
  ;

  _proto.reserveOf = function reserveOf(token) {
    !this.involvesToken(token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return token.equals(this.token0) ? this.reserve0 : this.reserve1;
  };

  _proto.getOutputAmount = function getOutputAmount(inputAmount, tofuFreezedAmount) {
    !this.involvesToken(inputAmount.token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    if (JSBI.equal(this.reserve0.raw, ZERO) || JSBI.equal(this.reserve1.raw, ZERO)) {
      throw new InsufficientReservesError();
    }

    var inputReserve = this.reserveOf(inputAmount.token);
    var outputReserve = this.reserveOf(inputAmount.token.equals(this.token0) ? this.token1 : this.token0); // need update

    var inputAmountWithFee = JSBI.multiply(inputAmount.raw, this.getFeeCoefficient(tofuFreezedAmount));
    var numerator = JSBI.multiply(inputAmountWithFee, outputReserve.raw);
    var denominator = JSBI.add(JSBI.multiply(inputReserve.raw, _10000), inputAmountWithFee);
    var outputAmount = new TokenAmount(inputAmount.token.equals(this.token0) ? this.token1 : this.token0, JSBI.divide(numerator, denominator));

    if (JSBI.equal(outputAmount.raw, ZERO)) {
      throw new InsufficientInputAmountError();
    }

    return [outputAmount, new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount))];
  };

  _proto.getInputAmount = function getInputAmount(outputAmount, tofuFreezedAmount) {
    !this.involvesToken(outputAmount.token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    if (JSBI.equal(this.reserve0.raw, ZERO) || JSBI.equal(this.reserve1.raw, ZERO) || JSBI.greaterThanOrEqual(outputAmount.raw, this.reserveOf(outputAmount.token).raw)) {
      throw new InsufficientReservesError();
    }

    var outputReserve = this.reserveOf(outputAmount.token);
    var inputReserve = this.reserveOf(outputAmount.token.equals(this.token0) ? this.token1 : this.token0);
    var numerator = JSBI.multiply(JSBI.multiply(inputReserve.raw, outputAmount.raw), _10000);
    var denominator = JSBI.multiply(JSBI.subtract(outputReserve.raw, outputAmount.raw), this.getFeeCoefficient(tofuFreezedAmount));
    var inputAmount = new TokenAmount(outputAmount.token.equals(this.token0) ? this.token1 : this.token0, JSBI.add(JSBI.divide(numerator, denominator), ONE));
    return [inputAmount, new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount))];
  };

  _proto.getLiquidityMinted = function getLiquidityMinted(totalSupply, tokenAmountA, tokenAmountB) {
    !totalSupply.token.equals(this.liquidityToken) ? process.env.NODE_ENV !== "production" ? invariant(false, 'LIQUIDITY') : invariant(false) : void 0;
    var tokenAmounts = tokenAmountA.token.sortsBefore(tokenAmountB.token) // does safety checks
    ? [tokenAmountA, tokenAmountB] : [tokenAmountB, tokenAmountA];
    !(tokenAmounts[0].token.equals(this.token0) && tokenAmounts[1].token.equals(this.token1)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    var liquidity;

    if (JSBI.equal(totalSupply.raw, ZERO)) {
      liquidity = JSBI.subtract(sqrt(JSBI.multiply(tokenAmounts[0].raw, tokenAmounts[1].raw)), MINIMUM_LIQUIDITY);
    } else {
      var amount0 = JSBI.divide(JSBI.multiply(tokenAmounts[0].raw, totalSupply.raw), this.reserve0.raw);
      var amount1 = JSBI.divide(JSBI.multiply(tokenAmounts[1].raw, totalSupply.raw), this.reserve1.raw);
      liquidity = JSBI.lessThanOrEqual(amount0, amount1) ? amount0 : amount1;
    }

    if (!JSBI.greaterThan(liquidity, ZERO)) {
      throw new InsufficientInputAmountError();
    }

    return new TokenAmount(this.liquidityToken, liquidity);
  };

  _proto.getLiquidityValue = function getLiquidityValue(token, totalSupply, liquidity, feeOn, kLast) {
    if (feeOn === void 0) {
      feeOn = false;
    }

    !this.involvesToken(token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    !totalSupply.token.equals(this.liquidityToken) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOTAL_SUPPLY') : invariant(false) : void 0;
    !liquidity.token.equals(this.liquidityToken) ? process.env.NODE_ENV !== "production" ? invariant(false, 'LIQUIDITY') : invariant(false) : void 0;
    !JSBI.lessThanOrEqual(liquidity.raw, totalSupply.raw) ? process.env.NODE_ENV !== "production" ? invariant(false, 'LIQUIDITY') : invariant(false) : void 0;
    var totalSupplyAdjusted;

    if (!feeOn) {
      totalSupplyAdjusted = totalSupply;
    } else {
      !!!kLast ? process.env.NODE_ENV !== "production" ? invariant(false, 'K_LAST') : invariant(false) : void 0;
      var kLastParsed = parseBigintIsh(kLast);

      if (!JSBI.equal(kLastParsed, ZERO)) {
        var rootK = sqrt(JSBI.multiply(this.reserve0.raw, this.reserve1.raw));
        var rootKLast = sqrt(kLastParsed);

        if (JSBI.greaterThan(rootK, rootKLast)) {
          var numerator = JSBI.multiply(totalSupply.raw, JSBI.subtract(rootK, rootKLast));
          var denominator = JSBI.add(JSBI.multiply(rootK, FIVE), rootKLast);
          var feeLiquidity = JSBI.divide(numerator, denominator);
          totalSupplyAdjusted = totalSupply.add(new TokenAmount(this.liquidityToken, feeLiquidity));
        } else {
          totalSupplyAdjusted = totalSupply;
        }
      } else {
        totalSupplyAdjusted = totalSupply;
      }
    }

    return new TokenAmount(token, JSBI.divide(JSBI.multiply(liquidity.raw, this.reserveOf(token).raw), totalSupplyAdjusted.raw));
  };

  _proto.getFeeCoefficient = function getFeeCoefficient(tofuFreezedAmount) {
    if (tofuFreezedAmount === undefined) {
      return _9970;
    } // should be checksumed address


    !(tofuFreezedAmount.token.address === TOFU_FREEZER_ADDRESS) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOFU_FREEZER_ADDRESS') : invariant(false) : void 0;

    if (JSBI.greaterThanOrEqual(tofuFreezedAmount.numerator, _100000000000)) {
      return _9990;
    }

    if (JSBI.greaterThanOrEqual(tofuFreezedAmount.numerator, _10000000000)) {
      return _9985;
    }

    if (JSBI.greaterThanOrEqual(tofuFreezedAmount.numerator, _1000000000)) {
      return _9980;
    }

    if (JSBI.greaterThanOrEqual(tofuFreezedAmount.numerator, _100000000)) {
      return _9975;
    }

    return _9970;
  };

  _proto.getFeePercent = function getFeePercent(tofuFreezedAmount) {
    return new Percent(this.getFeeCoefficient(tofuFreezedAmount), _10000);
  };

  _createClass(Pair, [{
    key: "token0Price",
    get: function get() {
      return new Price(this.token0, this.token1, this.tokenAmounts[0].raw, this.tokenAmounts[1].raw);
    }
    /**
     * Returns the current mid price of the pair in terms of token1, i.e. the ratio of reserve0 to reserve1
     */

  }, {
    key: "token1Price",
    get: function get() {
      return new Price(this.token1, this.token0, this.tokenAmounts[1].raw, this.tokenAmounts[0].raw);
    }
  }, {
    key: "chainId",
    get: function get() {
      return this.token0.chainId;
    }
  }, {
    key: "token0",
    get: function get() {
      return this.tokenAmounts[0].token;
    }
  }, {
    key: "token1",
    get: function get() {
      return this.tokenAmounts[1].token;
    }
  }, {
    key: "reserve0",
    get: function get() {
      return this.tokenAmounts[0];
    }
  }, {
    key: "reserve1",
    get: function get() {
      return this.tokenAmounts[1];
    }
  }]);

  return Pair;
}();

var Route = /*#__PURE__*/function () {
  function Route(pairs, input, output) {
    !(pairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'PAIRS') : invariant(false) : void 0;
    !pairs.every(function (pair) {
      return pair.chainId === pairs[0].chainId;
    }) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_IDS') : invariant(false) : void 0;
    !(input instanceof Token && pairs[0].involvesToken(input) || input === TRX && pairs[0].involvesToken(WTRX[pairs[0].chainId])) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INPUT') : invariant(false) : void 0;
    !(typeof output === 'undefined' || output instanceof Token && pairs[pairs.length - 1].involvesToken(output) || output === TRX && pairs[pairs.length - 1].involvesToken(WTRX[pairs[0].chainId])) ? process.env.NODE_ENV !== "production" ? invariant(false, 'OUTPUT') : invariant(false) : void 0;
    var path = [input instanceof Token ? input : WTRX[pairs[0].chainId]];

    for (var _iterator = _createForOfIteratorHelperLoose(pairs.entries()), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          i = _step$value[0],
          pair = _step$value[1];
      var currentInput = path[i];
      !(currentInput.equals(pair.token0) || currentInput.equals(pair.token1)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'PATH') : invariant(false) : void 0;

      var _output = currentInput.equals(pair.token0) ? pair.token1 : pair.token0;

      path.push(_output);
    }

    this.pairs = pairs;
    this.path = path;
    this.midPrice = Price.fromRoute(this);
    this.input = input;
    this.output = output !== null && output !== void 0 ? output : path[path.length - 1];
  }

  _createClass(Route, [{
    key: "chainId",
    get: function get() {
      return this.pairs[0].chainId;
    }
  }]);

  return Route;
}();

/**
 * Returns the percent difference between the mid price and the execution price, i.e. price impact.
 * @param midPrice mid price before the trade
 * @param inputAmount the input amount of the trade
 * @param outputAmount the output amount of the trade
 */

function computePriceImpact(midPrice, inputAmount, outputAmount) {
  var exactQuote = midPrice.raw.multiply(inputAmount.raw); // calculate slippage := (exactQuote - outputAmount) / exactQuote

  var slippage = exactQuote.subtract(outputAmount.raw).divide(exactQuote);
  return new Percent(slippage.numerator, slippage.denominator);
} // comparator function that allows sorting trades by their output amounts, in decreasing order, and then input amounts
// in increasing order. i.e. the best trades have the most outputs for the least inputs and are sorted first


function inputOutputComparator(a, b) {
  // must have same input and output token for comparison
  !currencyEquals(a.inputAmount.currency, b.inputAmount.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INPUT_CURRENCY') : invariant(false) : void 0;
  !currencyEquals(a.outputAmount.currency, b.outputAmount.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'OUTPUT_CURRENCY') : invariant(false) : void 0;

  if (a.outputAmount.equalTo(b.outputAmount)) {
    if (a.inputAmount.equalTo(b.inputAmount)) {
      return 0;
    } // trade A requires less input than trade B, so A should come first


    if (a.inputAmount.lessThan(b.inputAmount)) {
      return -1;
    } else {
      return 1;
    }
  } else {
    // tradeA has less output than trade B, so should come second
    if (a.outputAmount.lessThan(b.outputAmount)) {
      return 1;
    } else {
      return -1;
    }
  }
} // extension of the input output comparator that also considers other dimensions of the trade in ranking them

function tradeComparator(a, b) {
  var ioComp = inputOutputComparator(a, b);

  if (ioComp !== 0) {
    return ioComp;
  } // consider lowest slippage next, since these are less likely to fail


  if (a.priceImpact.lessThan(b.priceImpact)) {
    return -1;
  } else if (a.priceImpact.greaterThan(b.priceImpact)) {
    return 1;
  } // finally consider the number of hops since each hop costs gas


  return a.route.path.length - b.route.path.length;
}
/**
 * Given a currency amount and a chain ID, returns the equivalent representation as the token amount.
 * In other words, if the currency is TRX, returns the WTRX token amount for the given chain. Otherwise, returns
 * the input currency amount.
 */

function wrappedAmount(currencyAmount, chainId) {
  if (currencyAmount instanceof TokenAmount) return currencyAmount;
  if (currencyAmount.currency === TRX) return new TokenAmount(WTRX[chainId], currencyAmount.raw);
   process.env.NODE_ENV !== "production" ? invariant(false, 'CURRENCY') : invariant(false) ;
}

function wrappedCurrency(currency, chainId) {
  if (currency instanceof Token) return currency;
  if (currency === TRX) return WTRX[chainId];
   process.env.NODE_ENV !== "production" ? invariant(false, 'CURRENCY') : invariant(false) ;
}
/**
 * Represents a trade executed against a list of pairs.
 * Does not account for slippage, i.e. trades that front run this trade and move the price.
 */


var Trade = /*#__PURE__*/function () {
  function Trade(route, amount, tradeType, tofuFreezedAmount) {
    this.tofuFreezed = tofuFreezedAmount;
    var amounts = new Array(route.path.length);
    var nextPairs = new Array(route.pairs.length);

    if (tradeType === TradeType.EXACT_INPUT) {
      !currencyEquals(amount.currency, route.input) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INPUT') : invariant(false) : void 0;
      amounts[0] = wrappedAmount(amount, route.chainId);

      for (var i = 0; i < route.path.length - 1; i++) {
        var pair = route.pairs[i];

        var _pair$getOutputAmount = pair.getOutputAmount(amounts[i], this.tofuFreezed),
            outputAmount = _pair$getOutputAmount[0],
            nextPair = _pair$getOutputAmount[1];

        amounts[i + 1] = outputAmount;
        nextPairs[i] = nextPair;
      }
    } else {
      !currencyEquals(amount.currency, route.output) ? process.env.NODE_ENV !== "production" ? invariant(false, 'OUTPUT') : invariant(false) : void 0;
      amounts[amounts.length - 1] = wrappedAmount(amount, route.chainId);

      for (var _i = route.path.length - 1; _i > 0; _i--) {
        var _pair = route.pairs[_i - 1];

        var _pair$getInputAmount = _pair.getInputAmount(amounts[_i], this.tofuFreezed),
            inputAmount = _pair$getInputAmount[0],
            _nextPair = _pair$getInputAmount[1];

        amounts[_i - 1] = inputAmount;
        nextPairs[_i - 1] = _nextPair;
      }
    }

    this.route = route;
    this.tradeType = tradeType;
    this.inputAmount = tradeType === TradeType.EXACT_INPUT ? amount : route.input === TRX ? CurrencyAmount.trx(amounts[0].raw) : amounts[0];
    this.outputAmount = tradeType === TradeType.EXACT_OUTPUT ? amount : route.output === TRX ? CurrencyAmount.trx(amounts[amounts.length - 1].raw) : amounts[amounts.length - 1];
    this.executionPrice = new Price(this.inputAmount.currency, this.outputAmount.currency, this.inputAmount.raw, this.outputAmount.raw);
    this.nextMidPrice = Price.fromRoute(new Route(nextPairs, route.input));
    this.priceImpact = computePriceImpact(route.midPrice, this.inputAmount, this.outputAmount);
  }
  /**
   * Constructs an exact in trade with the given amount in and route
   * @param route route of the exact in trade
   * @param amountIn the amount being passed in
   */


  Trade.exactIn = function exactIn(route, amountIn) {
    return new Trade(route, amountIn, TradeType.EXACT_INPUT);
  }
  /**
   * Constructs an exact out trade with the given amount out and route
   * @param route route of the exact out trade
   * @param amountOut the amount returned by the trade
   */
  ;

  Trade.exactOut = function exactOut(route, amountOut) {
    return new Trade(route, amountOut, TradeType.EXACT_OUTPUT);
  }
  /**
   * Get the minimum amount that must be received from this trade for the given slippage tolerance
   * @param slippageTolerance tolerance of unfavorable slippage from the execution price of this trade
   */
  ;

  var _proto = Trade.prototype;

  _proto.minimumAmountOut = function minimumAmountOut(slippageTolerance) {
    !!slippageTolerance.lessThan(ZERO) ? process.env.NODE_ENV !== "production" ? invariant(false, 'SLIPPAGE_TOLERANCE') : invariant(false) : void 0;

    if (this.tradeType === TradeType.EXACT_OUTPUT) {
      return this.outputAmount;
    } else {
      var slippageAdjustedAmountOut = new Fraction(ONE).add(slippageTolerance).invert().multiply(this.outputAmount.raw).quotient;
      return this.outputAmount instanceof TokenAmount ? new TokenAmount(this.outputAmount.token, slippageAdjustedAmountOut) : CurrencyAmount.trx(slippageAdjustedAmountOut);
    }
  }
  /**
   * Get the maximum amount in that can be spent via this trade for the given slippage tolerance
   * @param slippageTolerance tolerance of unfavorable slippage from the execution price of this trade
   */
  ;

  _proto.maximumAmountIn = function maximumAmountIn(slippageTolerance) {
    !!slippageTolerance.lessThan(ZERO) ? process.env.NODE_ENV !== "production" ? invariant(false, 'SLIPPAGE_TOLERANCE') : invariant(false) : void 0;

    if (this.tradeType === TradeType.EXACT_INPUT) {
      return this.inputAmount;
    } else {
      var slippageAdjustedAmountIn = new Fraction(ONE).add(slippageTolerance).multiply(this.inputAmount.raw).quotient;
      return this.inputAmount instanceof TokenAmount ? new TokenAmount(this.inputAmount.token, slippageAdjustedAmountIn) : CurrencyAmount.trx(slippageAdjustedAmountIn);
    }
  }
  /**
   * Given a list of pairs, and a fixed amount in, returns the top `maxNumResults` trades that go from an input token
   * amount to an output token, making at most `maxHops` hops.
   * Note this does not consider aggregation, as routes are linear. It's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pairs the pairs to consider in finding the best trade
   * @param currencyAmountIn exact amount of input currency to spend
   * @param currencyOut the desired currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pair
   * @param currentPairs used in recursion; the current list of pairs
   * @param originalAmountIn used in recursion; the original value of the currencyAmountIn parameter
   * @param bestTrades used in recursion; the current list of best trades
   */
  ;

  Trade.bestTradeExactIn = function bestTradeExactIn(pairs, currencyAmountIn, currencyOut, _temp, tofuFreezedAmount, // used in recursion.
  currentPairs, originalAmountIn, bestTrades) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$maxNumResults = _ref.maxNumResults,
        maxNumResults = _ref$maxNumResults === void 0 ? 3 : _ref$maxNumResults,
        _ref$maxHops = _ref.maxHops,
        maxHops = _ref$maxHops === void 0 ? 3 : _ref$maxHops;

    if (currentPairs === void 0) {
      currentPairs = [];
    }

    if (originalAmountIn === void 0) {
      originalAmountIn = currencyAmountIn;
    }

    if (bestTrades === void 0) {
      bestTrades = [];
    }

    !(pairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'PAIRS') : invariant(false) : void 0;
    !(maxHops > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MAX_HOPS') : invariant(false) : void 0;
    !(originalAmountIn === currencyAmountIn || currentPairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INVALID_RECURSION') : invariant(false) : void 0;
    var chainId = currencyAmountIn instanceof TokenAmount ? currencyAmountIn.token.chainId : currencyOut instanceof Token ? currencyOut.chainId : undefined;
    !(chainId !== undefined) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_ID') : invariant(false) : void 0;
    var amountIn = wrappedAmount(currencyAmountIn, chainId);
    var tokenOut = wrappedCurrency(currencyOut, chainId);

    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i]; // pair irrelevant

      if (!pair.token0.equals(amountIn.token) && !pair.token1.equals(amountIn.token)) continue;
      if (pair.reserve0.equalTo(ZERO) || pair.reserve1.equalTo(ZERO)) continue;
      var amountOut = void 0;

      try {
        ;

        var _pair$getOutputAmount2 = pair.getOutputAmount(amountIn, tofuFreezedAmount);

        amountOut = _pair$getOutputAmount2[0];
      } catch (error) {
        // input too low
        if (error.isInsufficientInputAmountError) {
          continue;
        }

        throw error;
      } // we have arrived at the output token, so this is the final trade of one of the paths


      if (amountOut.token.equals(tokenOut)) {
        sortedInsert(bestTrades, new Trade(new Route([].concat(currentPairs, [pair]), originalAmountIn.currency, currencyOut), originalAmountIn, TradeType.EXACT_INPUT, tofuFreezedAmount), maxNumResults, tradeComparator);
      } else if (maxHops > 1 && pairs.length > 1) {
        var pairsExcludingThisPair = pairs.slice(0, i).concat(pairs.slice(i + 1, pairs.length)); // otherwise, consider all the other paths that lead from this token as long as we have not exceeded maxHops

        Trade.bestTradeExactIn(pairsExcludingThisPair, amountOut, currencyOut, {
          maxNumResults: maxNumResults,
          maxHops: maxHops - 1
        }, tofuFreezedAmount, [].concat(currentPairs, [pair]), originalAmountIn, bestTrades);
      }
    }

    return bestTrades;
  }
  /**
   * similar to the above method but instead targets a fixed output amount
   * given a list of pairs, and a fixed amount out, returns the top `maxNumResults` trades that go from an input token
   * to an output token amount, making at most `maxHops` hops
   * note this does not consider aggregation, as routes are linear. it's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pairs the pairs to consider in finding the best trade
   * @param currencyIn the currency to spend
   * @param currencyAmountOut the exact amount of currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pair
   * @param currentPairs used in recursion; the current list of pairs
   * @param originalAmountOut used in recursion; the original value of the currencyAmountOut parameter
   * @param bestTrades used in recursion; the current list of best trades
   */
  ;

  Trade.bestTradeExactOut = function bestTradeExactOut(pairs, currencyIn, currencyAmountOut, _temp2, tofuFreezedAmount, // used in recursion.
  currentPairs, originalAmountOut, bestTrades) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$maxNumResults = _ref2.maxNumResults,
        maxNumResults = _ref2$maxNumResults === void 0 ? 3 : _ref2$maxNumResults,
        _ref2$maxHops = _ref2.maxHops,
        maxHops = _ref2$maxHops === void 0 ? 3 : _ref2$maxHops;

    if (currentPairs === void 0) {
      currentPairs = [];
    }

    if (originalAmountOut === void 0) {
      originalAmountOut = currencyAmountOut;
    }

    if (bestTrades === void 0) {
      bestTrades = [];
    }

    !(pairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'PAIRS') : invariant(false) : void 0;
    !(maxHops > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MAX_HOPS') : invariant(false) : void 0;
    !(originalAmountOut === currencyAmountOut || currentPairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INVALID_RECURSION') : invariant(false) : void 0;
    var chainId = currencyAmountOut instanceof TokenAmount ? currencyAmountOut.token.chainId : currencyIn instanceof Token ? currencyIn.chainId : undefined;
    !(chainId !== undefined) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_ID') : invariant(false) : void 0;
    var amountOut = wrappedAmount(currencyAmountOut, chainId);
    var tokenIn = wrappedCurrency(currencyIn, chainId);

    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i]; // pair irrelevant

      if (!pair.token0.equals(amountOut.token) && !pair.token1.equals(amountOut.token)) continue;
      if (pair.reserve0.equalTo(ZERO) || pair.reserve1.equalTo(ZERO)) continue;
      var amountIn = void 0;

      try {
        ;

        var _pair$getInputAmount2 = pair.getInputAmount(amountOut, tofuFreezedAmount);

        amountIn = _pair$getInputAmount2[0];
      } catch (error) {
        // not enough liquidity in this pair
        if (error.isInsufficientReservesError) {
          continue;
        }

        throw error;
      } // we have arrived at the input token, so this is the first trade of one of the paths


      if (amountIn.token.equals(tokenIn)) {
        sortedInsert(bestTrades, new Trade(new Route([pair].concat(currentPairs), currencyIn, originalAmountOut.currency), originalAmountOut, TradeType.EXACT_OUTPUT, tofuFreezedAmount), maxNumResults, tradeComparator);
      } else if (maxHops > 1 && pairs.length > 1) {
        var pairsExcludingThisPair = pairs.slice(0, i).concat(pairs.slice(i + 1, pairs.length)); // otherwise, consider all the other paths that arrive at this token as long as we have not exceeded maxHops

        Trade.bestTradeExactOut(pairsExcludingThisPair, currencyIn, amountIn, {
          maxNumResults: maxNumResults,
          maxHops: maxHops - 1
        }, tofuFreezedAmount, [pair].concat(currentPairs), originalAmountOut, bestTrades);
      }
    }

    return bestTrades;
  };

  return Trade;
}();

function toHex(currencyAmount) {
  return "0x" + currencyAmount.raw.toString(16);
}

var ZERO_HEX = '0x0';
/**
 * Represents the Uniswap V2 Router, and has static methods for helping execute trades.
 */

var Router = /*#__PURE__*/function () {
  /**
   * Cannot be constructed.
   */
  function Router() {}
  /**
   * Produces the on-chain method name to call and the hex encoded parameters to pass as arguments for a given trade.
   * @param trade to produce call parameters for
   * @param options options for the call parameters
   */


  Router.swapCallParameters = function swapCallParameters(trade, options) {
    var etherIn = trade.inputAmount.currency === TRX;
    var etherOut = trade.outputAmount.currency === TRX; // the router does not support both ether in and out

    !!(etherIn && etherOut) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TRX_IN_OUT') : invariant(false) : void 0;
    !(!('ttl' in options) || options.ttl > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TTL') : invariant(false) : void 0;
    var to = validateAndParseAddress(options.recipient);
    var amountIn = toHex(trade.maximumAmountIn(options.allowedSlippage));
    var amountOut = toHex(trade.minimumAmountOut(options.allowedSlippage));
    var path = trade.route.path.map(function (token) {
      return token.address;
    });
    var deadline = 'ttl' in options ? "0x" + (Math.floor(new Date().getTime() / 1000) + options.ttl).toString(16) : "0x" + options.deadline.toString(16);
    var useFeeOnTransfer = Boolean(options.feeOnTransfer);
    var methodName;
    var args;
    var value;

    switch (trade.tradeType) {
      case TradeType.EXACT_INPUT:
        if (etherIn) {
          methodName = useFeeOnTransfer ? 'swapExactTRXForTokensSupportingFeeOnTransferTokens' : 'swapExactTRXForTokens'; // (uint amountOutMin, address[] calldata path, address to, uint deadline)

          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          methodName = useFeeOnTransfer ? 'swapExactTokensForTRXSupportingFeeOnTransferTokens' : 'swapExactTokensForTRX'; // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)

          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX;
        } else {
          methodName = useFeeOnTransfer ? 'swapExactTokensForTokensSupportingFeeOnTransferTokens' : 'swapExactTokensForTokens'; // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)

          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX;
        }

        break;

      case TradeType.EXACT_OUTPUT:
        !!useFeeOnTransfer ? process.env.NODE_ENV !== "production" ? invariant(false, 'EXACT_OUT_FOT') : invariant(false) : void 0;

        if (etherIn) {
          methodName = 'swapTRXForExactTokens'; // (uint amountOut, address[] calldata path, address to, uint deadline)

          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          methodName = 'swapTokensForExactTRX'; // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)

          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX;
        } else {
          methodName = 'swapTokensForExactTokens'; // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)

          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX;
        }

        break;
    }

    return {
      methodName: methodName,
      args: args,
      value: value
    };
  };

  return Router;
}();

var contractName = "IUniswapV2Pair";
var abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "Burn",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			}
		],
		name: "Mint",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0In",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1In",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount0Out",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount1Out",
				type: "uint256"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "Swap",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint112",
				name: "reserve0",
				type: "uint112"
			},
			{
				indexed: false,
				internalType: "uint112",
				name: "reserve1",
				type: "uint112"
			}
		],
		name: "Sync",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		constant: true,
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "pure",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "pure",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8"
			}
		],
		payable: false,
		stateMutability: "pure",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "DOMAIN_SEPARATOR",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "PERMIT_TYPEHASH",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "pure",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "nonces",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "deadline",
				type: "uint256"
			},
			{
				internalType: "uint8",
				name: "v",
				type: "uint8"
			},
			{
				internalType: "bytes32",
				name: "r",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "s",
				type: "bytes32"
			}
		],
		name: "permit",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "MINIMUM_LIQUIDITY",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "pure",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "factory",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "token0",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "token1",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "getReserves",
		outputs: [
			{
				internalType: "uint112",
				name: "reserve0",
				type: "uint112"
			},
			{
				internalType: "uint112",
				name: "reserve1",
				type: "uint112"
			},
			{
				internalType: "uint32",
				name: "blockTimestampLast",
				type: "uint32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "price0CumulativeLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "price1CumulativeLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "kLast",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "mint",
		outputs: [
			{
				internalType: "uint256",
				name: "liquidity",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "burn",
		outputs: [
			{
				internalType: "uint256",
				name: "amount0",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amount1",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "uint256",
				name: "amount0Out",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "amount1Out",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "swap",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "skim",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
		],
		name: "sync",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "initialize",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	}
];
var bytecode = "0x";
var deployedBytecode = "0x";
var sourceMap = "";
var deployedSourceMap = "";
var source = "pragma solidity >=0.5.0;\n\ninterface IUniswapV2Pair {\n    event Approval(address indexed owner, address indexed spender, uint value);\n    event Transfer(address indexed from, address indexed to, uint value);\n\n    function name() external pure returns (string memory);\n    function symbol() external pure returns (string memory);\n    function decimals() external pure returns (uint8);\n    function totalSupply() external view returns (uint);\n    function balanceOf(address owner) external view returns (uint);\n    function allowance(address owner, address spender) external view returns (uint);\n\n    function approve(address spender, uint value) external returns (bool);\n    function transfer(address to, uint value) external returns (bool);\n    function transferFrom(address from, address to, uint value) external returns (bool);\n\n    function DOMAIN_SEPARATOR() external view returns (bytes32);\n    function PERMIT_TYPEHASH() external pure returns (bytes32);\n    function nonces(address owner) external view returns (uint);\n\n    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;\n\n    event Mint(address indexed sender, uint amount0, uint amount1);\n    event Burn(address indexed sender, uint amount0, uint amount1, address indexed to);\n    event Swap(\n        address indexed sender,\n        uint amount0In,\n        uint amount1In,\n        uint amount0Out,\n        uint amount1Out,\n        address indexed to\n    );\n    event Sync(uint112 reserve0, uint112 reserve1);\n\n    function MINIMUM_LIQUIDITY() external pure returns (uint);\n    function factory() external view returns (address);\n    function token0() external view returns (address);\n    function token1() external view returns (address);\n    function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);\n    function price0CumulativeLast() external view returns (uint);\n    function price1CumulativeLast() external view returns (uint);\n    function kLast() external view returns (uint);\n\n    function mint(address to) external returns (uint liquidity);\n    function burn(address to) external returns (uint amount0, uint amount1);\n    function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external;\n    function skim(address to) external;\n    function sync() external;\n\n    function initialize(address, address) external;\n}\n";
var sourcePath = "/Users/kaionyan/projects/mcswap/mcswap-v2-core/contracts/interfaces/IUniswapV2Pair.sol";
var ast = {
	absolutePath: "/Users/kaionyan/projects/mcswap/mcswap-v2-core/contracts/interfaces/IUniswapV2Pair.sol",
	exportedSymbols: {
		IUniswapV2Pair: [
			2198
		]
	},
	id: 2199,
	nodeType: "SourceUnit",
	nodes: [
		{
			id: 1958,
			literals: [
				"solidity",
				">=",
				"0.5",
				".0"
			],
			nodeType: "PragmaDirective",
			src: "0:24:8"
		},
		{
			baseContracts: [
			],
			contractDependencies: [
			],
			contractKind: "interface",
			documentation: null,
			fullyImplemented: false,
			id: 2198,
			linearizedBaseContracts: [
				2198
			],
			name: "IUniswapV2Pair",
			nodeType: "ContractDefinition",
			nodes: [
				{
					anonymous: false,
					documentation: null,
					id: 1966,
					name: "Approval",
					nodeType: "EventDefinition",
					parameters: {
						id: 1965,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 1960,
								indexed: true,
								name: "owner",
								nodeType: "VariableDeclaration",
								scope: 1966,
								src: "72:21:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 1959,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "72:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 1962,
								indexed: true,
								name: "spender",
								nodeType: "VariableDeclaration",
								scope: 1966,
								src: "95:23:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 1961,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "95:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 1964,
								indexed: false,
								name: "value",
								nodeType: "VariableDeclaration",
								scope: 1966,
								src: "120:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 1963,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "120:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "71:60:8"
					},
					src: "57:75:8"
				},
				{
					anonymous: false,
					documentation: null,
					id: 1974,
					name: "Transfer",
					nodeType: "EventDefinition",
					parameters: {
						id: 1973,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 1968,
								indexed: true,
								name: "from",
								nodeType: "VariableDeclaration",
								scope: 1974,
								src: "152:20:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 1967,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "152:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 1970,
								indexed: true,
								name: "to",
								nodeType: "VariableDeclaration",
								scope: 1974,
								src: "174:18:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 1969,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "174:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 1972,
								indexed: false,
								name: "value",
								nodeType: "VariableDeclaration",
								scope: 1974,
								src: "194:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 1971,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "194:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "151:54:8"
					},
					src: "137:69:8"
				},
				{
					body: null,
					documentation: null,
					id: 1979,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "name",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 1975,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "225:2:8"
					},
					returnParameters: {
						id: 1978,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 1977,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 1979,
								src: "251:13:8",
								stateVariable: false,
								storageLocation: "memory",
								typeDescriptions: {
									typeIdentifier: "t_string_memory_ptr",
									typeString: "string"
								},
								typeName: {
									id: 1976,
									name: "string",
									nodeType: "ElementaryTypeName",
									src: "251:6:8",
									typeDescriptions: {
										typeIdentifier: "t_string_storage_ptr",
										typeString: "string"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "250:15:8"
					},
					scope: 2198,
					src: "212:54:8",
					stateMutability: "pure",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 1984,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "symbol",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 1980,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "286:2:8"
					},
					returnParameters: {
						id: 1983,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 1982,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 1984,
								src: "312:13:8",
								stateVariable: false,
								storageLocation: "memory",
								typeDescriptions: {
									typeIdentifier: "t_string_memory_ptr",
									typeString: "string"
								},
								typeName: {
									id: 1981,
									name: "string",
									nodeType: "ElementaryTypeName",
									src: "312:6:8",
									typeDescriptions: {
										typeIdentifier: "t_string_storage_ptr",
										typeString: "string"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "311:15:8"
					},
					scope: 2198,
					src: "271:56:8",
					stateMutability: "pure",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 1989,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "decimals",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 1985,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "349:2:8"
					},
					returnParameters: {
						id: 1988,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 1987,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 1989,
								src: "375:5:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint8",
									typeString: "uint8"
								},
								typeName: {
									id: 1986,
									name: "uint8",
									nodeType: "ElementaryTypeName",
									src: "375:5:8",
									typeDescriptions: {
										typeIdentifier: "t_uint8",
										typeString: "uint8"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "374:7:8"
					},
					scope: 2198,
					src: "332:50:8",
					stateMutability: "pure",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 1994,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "totalSupply",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 1990,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "407:2:8"
					},
					returnParameters: {
						id: 1993,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 1992,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 1994,
								src: "433:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 1991,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "433:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "432:6:8"
					},
					scope: 2198,
					src: "387:52:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2001,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "balanceOf",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 1997,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 1996,
								name: "owner",
								nodeType: "VariableDeclaration",
								scope: 2001,
								src: "463:13:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 1995,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "463:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "462:15:8"
					},
					returnParameters: {
						id: 2000,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 1999,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2001,
								src: "501:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 1998,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "501:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "500:6:8"
					},
					scope: 2198,
					src: "444:63:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2010,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "allowance",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2006,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2003,
								name: "owner",
								nodeType: "VariableDeclaration",
								scope: 2010,
								src: "531:13:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2002,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "531:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2005,
								name: "spender",
								nodeType: "VariableDeclaration",
								scope: 2010,
								src: "546:15:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2004,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "546:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "530:32:8"
					},
					returnParameters: {
						id: 2009,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2008,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2010,
								src: "586:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2007,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "586:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "585:6:8"
					},
					scope: 2198,
					src: "512:80:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2019,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "approve",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2015,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2012,
								name: "spender",
								nodeType: "VariableDeclaration",
								scope: 2019,
								src: "615:15:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2011,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "615:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2014,
								name: "value",
								nodeType: "VariableDeclaration",
								scope: 2019,
								src: "632:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2013,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "632:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "614:29:8"
					},
					returnParameters: {
						id: 2018,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2017,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2019,
								src: "662:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_bool",
									typeString: "bool"
								},
								typeName: {
									id: 2016,
									name: "bool",
									nodeType: "ElementaryTypeName",
									src: "662:4:8",
									typeDescriptions: {
										typeIdentifier: "t_bool",
										typeString: "bool"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "661:6:8"
					},
					scope: 2198,
					src: "598:70:8",
					stateMutability: "nonpayable",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2028,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "transfer",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2024,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2021,
								name: "to",
								nodeType: "VariableDeclaration",
								scope: 2028,
								src: "691:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2020,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "691:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2023,
								name: "value",
								nodeType: "VariableDeclaration",
								scope: 2028,
								src: "703:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2022,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "703:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "690:24:8"
					},
					returnParameters: {
						id: 2027,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2026,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2028,
								src: "733:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_bool",
									typeString: "bool"
								},
								typeName: {
									id: 2025,
									name: "bool",
									nodeType: "ElementaryTypeName",
									src: "733:4:8",
									typeDescriptions: {
										typeIdentifier: "t_bool",
										typeString: "bool"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "732:6:8"
					},
					scope: 2198,
					src: "673:66:8",
					stateMutability: "nonpayable",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2039,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "transferFrom",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2035,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2030,
								name: "from",
								nodeType: "VariableDeclaration",
								scope: 2039,
								src: "766:12:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2029,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "766:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2032,
								name: "to",
								nodeType: "VariableDeclaration",
								scope: 2039,
								src: "780:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2031,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "780:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2034,
								name: "value",
								nodeType: "VariableDeclaration",
								scope: 2039,
								src: "792:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2033,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "792:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "765:38:8"
					},
					returnParameters: {
						id: 2038,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2037,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2039,
								src: "822:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_bool",
									typeString: "bool"
								},
								typeName: {
									id: 2036,
									name: "bool",
									nodeType: "ElementaryTypeName",
									src: "822:4:8",
									typeDescriptions: {
										typeIdentifier: "t_bool",
										typeString: "bool"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "821:6:8"
					},
					scope: 2198,
					src: "744:84:8",
					stateMutability: "nonpayable",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2044,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "DOMAIN_SEPARATOR",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2040,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "859:2:8"
					},
					returnParameters: {
						id: 2043,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2042,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2044,
								src: "885:7:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_bytes32",
									typeString: "bytes32"
								},
								typeName: {
									id: 2041,
									name: "bytes32",
									nodeType: "ElementaryTypeName",
									src: "885:7:8",
									typeDescriptions: {
										typeIdentifier: "t_bytes32",
										typeString: "bytes32"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "884:9:8"
					},
					scope: 2198,
					src: "834:60:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2049,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "PERMIT_TYPEHASH",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2045,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "923:2:8"
					},
					returnParameters: {
						id: 2048,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2047,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2049,
								src: "949:7:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_bytes32",
									typeString: "bytes32"
								},
								typeName: {
									id: 2046,
									name: "bytes32",
									nodeType: "ElementaryTypeName",
									src: "949:7:8",
									typeDescriptions: {
										typeIdentifier: "t_bytes32",
										typeString: "bytes32"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "948:9:8"
					},
					scope: 2198,
					src: "899:59:8",
					stateMutability: "pure",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2056,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "nonces",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2052,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2051,
								name: "owner",
								nodeType: "VariableDeclaration",
								scope: 2056,
								src: "979:13:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2050,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "979:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "978:15:8"
					},
					returnParameters: {
						id: 2055,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2054,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2056,
								src: "1017:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2053,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1017:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1016:6:8"
					},
					scope: 2198,
					src: "963:60:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2073,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "permit",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2071,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2058,
								name: "owner",
								nodeType: "VariableDeclaration",
								scope: 2073,
								src: "1045:13:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2057,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "1045:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2060,
								name: "spender",
								nodeType: "VariableDeclaration",
								scope: 2073,
								src: "1060:15:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2059,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "1060:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2062,
								name: "value",
								nodeType: "VariableDeclaration",
								scope: 2073,
								src: "1077:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2061,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1077:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2064,
								name: "deadline",
								nodeType: "VariableDeclaration",
								scope: 2073,
								src: "1089:13:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2063,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1089:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2066,
								name: "v",
								nodeType: "VariableDeclaration",
								scope: 2073,
								src: "1104:7:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint8",
									typeString: "uint8"
								},
								typeName: {
									id: 2065,
									name: "uint8",
									nodeType: "ElementaryTypeName",
									src: "1104:5:8",
									typeDescriptions: {
										typeIdentifier: "t_uint8",
										typeString: "uint8"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2068,
								name: "r",
								nodeType: "VariableDeclaration",
								scope: 2073,
								src: "1113:9:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_bytes32",
									typeString: "bytes32"
								},
								typeName: {
									id: 2067,
									name: "bytes32",
									nodeType: "ElementaryTypeName",
									src: "1113:7:8",
									typeDescriptions: {
										typeIdentifier: "t_bytes32",
										typeString: "bytes32"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2070,
								name: "s",
								nodeType: "VariableDeclaration",
								scope: 2073,
								src: "1124:9:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_bytes32",
									typeString: "bytes32"
								},
								typeName: {
									id: 2069,
									name: "bytes32",
									nodeType: "ElementaryTypeName",
									src: "1124:7:8",
									typeDescriptions: {
										typeIdentifier: "t_bytes32",
										typeString: "bytes32"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1044:90:8"
					},
					returnParameters: {
						id: 2072,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "1143:0:8"
					},
					scope: 2198,
					src: "1029:115:8",
					stateMutability: "nonpayable",
					superFunction: null,
					visibility: "external"
				},
				{
					anonymous: false,
					documentation: null,
					id: 2081,
					name: "Mint",
					nodeType: "EventDefinition",
					parameters: {
						id: 2080,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2075,
								indexed: true,
								name: "sender",
								nodeType: "VariableDeclaration",
								scope: 2081,
								src: "1161:22:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2074,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "1161:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2077,
								indexed: false,
								name: "amount0",
								nodeType: "VariableDeclaration",
								scope: 2081,
								src: "1185:12:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2076,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1185:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2079,
								indexed: false,
								name: "amount1",
								nodeType: "VariableDeclaration",
								scope: 2081,
								src: "1199:12:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2078,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1199:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1160:52:8"
					},
					src: "1150:63:8"
				},
				{
					anonymous: false,
					documentation: null,
					id: 2091,
					name: "Burn",
					nodeType: "EventDefinition",
					parameters: {
						id: 2090,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2083,
								indexed: true,
								name: "sender",
								nodeType: "VariableDeclaration",
								scope: 2091,
								src: "1229:22:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2082,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "1229:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2085,
								indexed: false,
								name: "amount0",
								nodeType: "VariableDeclaration",
								scope: 2091,
								src: "1253:12:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2084,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1253:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2087,
								indexed: false,
								name: "amount1",
								nodeType: "VariableDeclaration",
								scope: 2091,
								src: "1267:12:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2086,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1267:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2089,
								indexed: true,
								name: "to",
								nodeType: "VariableDeclaration",
								scope: 2091,
								src: "1281:18:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2088,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "1281:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1228:72:8"
					},
					src: "1218:83:8"
				},
				{
					anonymous: false,
					documentation: null,
					id: 2105,
					name: "Swap",
					nodeType: "EventDefinition",
					parameters: {
						id: 2104,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2093,
								indexed: true,
								name: "sender",
								nodeType: "VariableDeclaration",
								scope: 2105,
								src: "1326:22:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2092,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "1326:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2095,
								indexed: false,
								name: "amount0In",
								nodeType: "VariableDeclaration",
								scope: 2105,
								src: "1358:14:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2094,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1358:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2097,
								indexed: false,
								name: "amount1In",
								nodeType: "VariableDeclaration",
								scope: 2105,
								src: "1382:14:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2096,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1382:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2099,
								indexed: false,
								name: "amount0Out",
								nodeType: "VariableDeclaration",
								scope: 2105,
								src: "1406:15:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2098,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1406:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2101,
								indexed: false,
								name: "amount1Out",
								nodeType: "VariableDeclaration",
								scope: 2105,
								src: "1431:15:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2100,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1431:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2103,
								indexed: true,
								name: "to",
								nodeType: "VariableDeclaration",
								scope: 2105,
								src: "1456:18:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2102,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "1456:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1316:164:8"
					},
					src: "1306:175:8"
				},
				{
					anonymous: false,
					documentation: null,
					id: 2111,
					name: "Sync",
					nodeType: "EventDefinition",
					parameters: {
						id: 2110,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2107,
								indexed: false,
								name: "reserve0",
								nodeType: "VariableDeclaration",
								scope: 2111,
								src: "1497:16:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint112",
									typeString: "uint112"
								},
								typeName: {
									id: 2106,
									name: "uint112",
									nodeType: "ElementaryTypeName",
									src: "1497:7:8",
									typeDescriptions: {
										typeIdentifier: "t_uint112",
										typeString: "uint112"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2109,
								indexed: false,
								name: "reserve1",
								nodeType: "VariableDeclaration",
								scope: 2111,
								src: "1515:16:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint112",
									typeString: "uint112"
								},
								typeName: {
									id: 2108,
									name: "uint112",
									nodeType: "ElementaryTypeName",
									src: "1515:7:8",
									typeDescriptions: {
										typeIdentifier: "t_uint112",
										typeString: "uint112"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1496:36:8"
					},
					src: "1486:47:8"
				},
				{
					body: null,
					documentation: null,
					id: 2116,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "MINIMUM_LIQUIDITY",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2112,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "1565:2:8"
					},
					returnParameters: {
						id: 2115,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2114,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2116,
								src: "1591:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2113,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1591:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1590:6:8"
					},
					scope: 2198,
					src: "1539:58:8",
					stateMutability: "pure",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2121,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "factory",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2117,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "1618:2:8"
					},
					returnParameters: {
						id: 2120,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2119,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2121,
								src: "1644:7:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2118,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "1644:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1643:9:8"
					},
					scope: 2198,
					src: "1602:51:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2126,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "token0",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2122,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "1673:2:8"
					},
					returnParameters: {
						id: 2125,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2124,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2126,
								src: "1699:7:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2123,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "1699:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1698:9:8"
					},
					scope: 2198,
					src: "1658:50:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2131,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "token1",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2127,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "1728:2:8"
					},
					returnParameters: {
						id: 2130,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2129,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2131,
								src: "1754:7:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2128,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "1754:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1753:9:8"
					},
					scope: 2198,
					src: "1713:50:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2140,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "getReserves",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2132,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "1788:2:8"
					},
					returnParameters: {
						id: 2139,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2134,
								name: "reserve0",
								nodeType: "VariableDeclaration",
								scope: 2140,
								src: "1814:16:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint112",
									typeString: "uint112"
								},
								typeName: {
									id: 2133,
									name: "uint112",
									nodeType: "ElementaryTypeName",
									src: "1814:7:8",
									typeDescriptions: {
										typeIdentifier: "t_uint112",
										typeString: "uint112"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2136,
								name: "reserve1",
								nodeType: "VariableDeclaration",
								scope: 2140,
								src: "1832:16:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint112",
									typeString: "uint112"
								},
								typeName: {
									id: 2135,
									name: "uint112",
									nodeType: "ElementaryTypeName",
									src: "1832:7:8",
									typeDescriptions: {
										typeIdentifier: "t_uint112",
										typeString: "uint112"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2138,
								name: "blockTimestampLast",
								nodeType: "VariableDeclaration",
								scope: 2140,
								src: "1850:25:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint32",
									typeString: "uint32"
								},
								typeName: {
									id: 2137,
									name: "uint32",
									nodeType: "ElementaryTypeName",
									src: "1850:6:8",
									typeDescriptions: {
										typeIdentifier: "t_uint32",
										typeString: "uint32"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1813:63:8"
					},
					scope: 2198,
					src: "1768:109:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2145,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "price0CumulativeLast",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2141,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "1911:2:8"
					},
					returnParameters: {
						id: 2144,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2143,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2145,
								src: "1937:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2142,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1937:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1936:6:8"
					},
					scope: 2198,
					src: "1882:61:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2150,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "price1CumulativeLast",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2146,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "1977:2:8"
					},
					returnParameters: {
						id: 2149,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2148,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2150,
								src: "2003:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2147,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "2003:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "2002:6:8"
					},
					scope: 2198,
					src: "1948:61:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2155,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "kLast",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2151,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "2028:2:8"
					},
					returnParameters: {
						id: 2154,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2153,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2155,
								src: "2054:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2152,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "2054:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "2053:6:8"
					},
					scope: 2198,
					src: "2014:46:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2162,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "mint",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2158,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2157,
								name: "to",
								nodeType: "VariableDeclaration",
								scope: 2162,
								src: "2080:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2156,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "2080:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "2079:12:8"
					},
					returnParameters: {
						id: 2161,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2160,
								name: "liquidity",
								nodeType: "VariableDeclaration",
								scope: 2162,
								src: "2110:14:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2159,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "2110:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "2109:16:8"
					},
					scope: 2198,
					src: "2066:60:8",
					stateMutability: "nonpayable",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2171,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "burn",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2165,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2164,
								name: "to",
								nodeType: "VariableDeclaration",
								scope: 2171,
								src: "2145:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2163,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "2145:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "2144:12:8"
					},
					returnParameters: {
						id: 2170,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2167,
								name: "amount0",
								nodeType: "VariableDeclaration",
								scope: 2171,
								src: "2175:12:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2166,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "2175:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2169,
								name: "amount1",
								nodeType: "VariableDeclaration",
								scope: 2171,
								src: "2189:12:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2168,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "2189:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "2174:28:8"
					},
					scope: 2198,
					src: "2131:72:8",
					stateMutability: "nonpayable",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2182,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "swap",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2180,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2173,
								name: "amount0Out",
								nodeType: "VariableDeclaration",
								scope: 2182,
								src: "2222:15:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2172,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "2222:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2175,
								name: "amount1Out",
								nodeType: "VariableDeclaration",
								scope: 2182,
								src: "2239:15:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2174,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "2239:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2177,
								name: "to",
								nodeType: "VariableDeclaration",
								scope: 2182,
								src: "2256:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2176,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "2256:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2179,
								name: "data",
								nodeType: "VariableDeclaration",
								scope: 2182,
								src: "2268:19:8",
								stateVariable: false,
								storageLocation: "calldata",
								typeDescriptions: {
									typeIdentifier: "t_bytes_calldata_ptr",
									typeString: "bytes"
								},
								typeName: {
									id: 2178,
									name: "bytes",
									nodeType: "ElementaryTypeName",
									src: "2268:5:8",
									typeDescriptions: {
										typeIdentifier: "t_bytes_storage_ptr",
										typeString: "bytes"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "2221:67:8"
					},
					returnParameters: {
						id: 2181,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "2297:0:8"
					},
					scope: 2198,
					src: "2208:90:8",
					stateMutability: "nonpayable",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2187,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "skim",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2185,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2184,
								name: "to",
								nodeType: "VariableDeclaration",
								scope: 2187,
								src: "2317:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2183,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "2317:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "2316:12:8"
					},
					returnParameters: {
						id: 2186,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "2337:0:8"
					},
					scope: 2198,
					src: "2303:35:8",
					stateMutability: "nonpayable",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2190,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "sync",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2188,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "2356:2:8"
					},
					returnParameters: {
						id: 2189,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "2367:0:8"
					},
					scope: 2198,
					src: "2343:25:8",
					stateMutability: "nonpayable",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2197,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "initialize",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2195,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2192,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2197,
								src: "2394:7:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2191,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "2394:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2194,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2197,
								src: "2403:7:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2193,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "2403:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "2393:18:8"
					},
					returnParameters: {
						id: 2196,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "2420:0:8"
					},
					scope: 2198,
					src: "2374:47:8",
					stateMutability: "nonpayable",
					superFunction: null,
					visibility: "external"
				}
			],
			scope: 2199,
			src: "26:2397:8"
		}
	],
	src: "0:2424:8"
};
var legacyAST = {
	absolutePath: "/Users/kaionyan/projects/mcswap/mcswap-v2-core/contracts/interfaces/IUniswapV2Pair.sol",
	exportedSymbols: {
		IUniswapV2Pair: [
			2198
		]
	},
	id: 2199,
	nodeType: "SourceUnit",
	nodes: [
		{
			id: 1958,
			literals: [
				"solidity",
				">=",
				"0.5",
				".0"
			],
			nodeType: "PragmaDirective",
			src: "0:24:8"
		},
		{
			baseContracts: [
			],
			contractDependencies: [
			],
			contractKind: "interface",
			documentation: null,
			fullyImplemented: false,
			id: 2198,
			linearizedBaseContracts: [
				2198
			],
			name: "IUniswapV2Pair",
			nodeType: "ContractDefinition",
			nodes: [
				{
					anonymous: false,
					documentation: null,
					id: 1966,
					name: "Approval",
					nodeType: "EventDefinition",
					parameters: {
						id: 1965,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 1960,
								indexed: true,
								name: "owner",
								nodeType: "VariableDeclaration",
								scope: 1966,
								src: "72:21:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 1959,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "72:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 1962,
								indexed: true,
								name: "spender",
								nodeType: "VariableDeclaration",
								scope: 1966,
								src: "95:23:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 1961,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "95:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 1964,
								indexed: false,
								name: "value",
								nodeType: "VariableDeclaration",
								scope: 1966,
								src: "120:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 1963,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "120:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "71:60:8"
					},
					src: "57:75:8"
				},
				{
					anonymous: false,
					documentation: null,
					id: 1974,
					name: "Transfer",
					nodeType: "EventDefinition",
					parameters: {
						id: 1973,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 1968,
								indexed: true,
								name: "from",
								nodeType: "VariableDeclaration",
								scope: 1974,
								src: "152:20:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 1967,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "152:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 1970,
								indexed: true,
								name: "to",
								nodeType: "VariableDeclaration",
								scope: 1974,
								src: "174:18:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 1969,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "174:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 1972,
								indexed: false,
								name: "value",
								nodeType: "VariableDeclaration",
								scope: 1974,
								src: "194:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 1971,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "194:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "151:54:8"
					},
					src: "137:69:8"
				},
				{
					body: null,
					documentation: null,
					id: 1979,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "name",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 1975,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "225:2:8"
					},
					returnParameters: {
						id: 1978,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 1977,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 1979,
								src: "251:13:8",
								stateVariable: false,
								storageLocation: "memory",
								typeDescriptions: {
									typeIdentifier: "t_string_memory_ptr",
									typeString: "string"
								},
								typeName: {
									id: 1976,
									name: "string",
									nodeType: "ElementaryTypeName",
									src: "251:6:8",
									typeDescriptions: {
										typeIdentifier: "t_string_storage_ptr",
										typeString: "string"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "250:15:8"
					},
					scope: 2198,
					src: "212:54:8",
					stateMutability: "pure",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 1984,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "symbol",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 1980,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "286:2:8"
					},
					returnParameters: {
						id: 1983,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 1982,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 1984,
								src: "312:13:8",
								stateVariable: false,
								storageLocation: "memory",
								typeDescriptions: {
									typeIdentifier: "t_string_memory_ptr",
									typeString: "string"
								},
								typeName: {
									id: 1981,
									name: "string",
									nodeType: "ElementaryTypeName",
									src: "312:6:8",
									typeDescriptions: {
										typeIdentifier: "t_string_storage_ptr",
										typeString: "string"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "311:15:8"
					},
					scope: 2198,
					src: "271:56:8",
					stateMutability: "pure",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 1989,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "decimals",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 1985,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "349:2:8"
					},
					returnParameters: {
						id: 1988,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 1987,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 1989,
								src: "375:5:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint8",
									typeString: "uint8"
								},
								typeName: {
									id: 1986,
									name: "uint8",
									nodeType: "ElementaryTypeName",
									src: "375:5:8",
									typeDescriptions: {
										typeIdentifier: "t_uint8",
										typeString: "uint8"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "374:7:8"
					},
					scope: 2198,
					src: "332:50:8",
					stateMutability: "pure",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 1994,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "totalSupply",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 1990,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "407:2:8"
					},
					returnParameters: {
						id: 1993,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 1992,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 1994,
								src: "433:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 1991,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "433:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "432:6:8"
					},
					scope: 2198,
					src: "387:52:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2001,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "balanceOf",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 1997,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 1996,
								name: "owner",
								nodeType: "VariableDeclaration",
								scope: 2001,
								src: "463:13:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 1995,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "463:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "462:15:8"
					},
					returnParameters: {
						id: 2000,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 1999,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2001,
								src: "501:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 1998,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "501:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "500:6:8"
					},
					scope: 2198,
					src: "444:63:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2010,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "allowance",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2006,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2003,
								name: "owner",
								nodeType: "VariableDeclaration",
								scope: 2010,
								src: "531:13:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2002,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "531:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2005,
								name: "spender",
								nodeType: "VariableDeclaration",
								scope: 2010,
								src: "546:15:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2004,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "546:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "530:32:8"
					},
					returnParameters: {
						id: 2009,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2008,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2010,
								src: "586:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2007,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "586:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "585:6:8"
					},
					scope: 2198,
					src: "512:80:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2019,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "approve",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2015,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2012,
								name: "spender",
								nodeType: "VariableDeclaration",
								scope: 2019,
								src: "615:15:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2011,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "615:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2014,
								name: "value",
								nodeType: "VariableDeclaration",
								scope: 2019,
								src: "632:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2013,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "632:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "614:29:8"
					},
					returnParameters: {
						id: 2018,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2017,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2019,
								src: "662:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_bool",
									typeString: "bool"
								},
								typeName: {
									id: 2016,
									name: "bool",
									nodeType: "ElementaryTypeName",
									src: "662:4:8",
									typeDescriptions: {
										typeIdentifier: "t_bool",
										typeString: "bool"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "661:6:8"
					},
					scope: 2198,
					src: "598:70:8",
					stateMutability: "nonpayable",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2028,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "transfer",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2024,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2021,
								name: "to",
								nodeType: "VariableDeclaration",
								scope: 2028,
								src: "691:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2020,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "691:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2023,
								name: "value",
								nodeType: "VariableDeclaration",
								scope: 2028,
								src: "703:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2022,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "703:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "690:24:8"
					},
					returnParameters: {
						id: 2027,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2026,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2028,
								src: "733:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_bool",
									typeString: "bool"
								},
								typeName: {
									id: 2025,
									name: "bool",
									nodeType: "ElementaryTypeName",
									src: "733:4:8",
									typeDescriptions: {
										typeIdentifier: "t_bool",
										typeString: "bool"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "732:6:8"
					},
					scope: 2198,
					src: "673:66:8",
					stateMutability: "nonpayable",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2039,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "transferFrom",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2035,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2030,
								name: "from",
								nodeType: "VariableDeclaration",
								scope: 2039,
								src: "766:12:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2029,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "766:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2032,
								name: "to",
								nodeType: "VariableDeclaration",
								scope: 2039,
								src: "780:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2031,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "780:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2034,
								name: "value",
								nodeType: "VariableDeclaration",
								scope: 2039,
								src: "792:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2033,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "792:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "765:38:8"
					},
					returnParameters: {
						id: 2038,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2037,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2039,
								src: "822:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_bool",
									typeString: "bool"
								},
								typeName: {
									id: 2036,
									name: "bool",
									nodeType: "ElementaryTypeName",
									src: "822:4:8",
									typeDescriptions: {
										typeIdentifier: "t_bool",
										typeString: "bool"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "821:6:8"
					},
					scope: 2198,
					src: "744:84:8",
					stateMutability: "nonpayable",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2044,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "DOMAIN_SEPARATOR",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2040,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "859:2:8"
					},
					returnParameters: {
						id: 2043,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2042,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2044,
								src: "885:7:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_bytes32",
									typeString: "bytes32"
								},
								typeName: {
									id: 2041,
									name: "bytes32",
									nodeType: "ElementaryTypeName",
									src: "885:7:8",
									typeDescriptions: {
										typeIdentifier: "t_bytes32",
										typeString: "bytes32"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "884:9:8"
					},
					scope: 2198,
					src: "834:60:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2049,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "PERMIT_TYPEHASH",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2045,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "923:2:8"
					},
					returnParameters: {
						id: 2048,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2047,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2049,
								src: "949:7:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_bytes32",
									typeString: "bytes32"
								},
								typeName: {
									id: 2046,
									name: "bytes32",
									nodeType: "ElementaryTypeName",
									src: "949:7:8",
									typeDescriptions: {
										typeIdentifier: "t_bytes32",
										typeString: "bytes32"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "948:9:8"
					},
					scope: 2198,
					src: "899:59:8",
					stateMutability: "pure",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2056,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "nonces",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2052,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2051,
								name: "owner",
								nodeType: "VariableDeclaration",
								scope: 2056,
								src: "979:13:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2050,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "979:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "978:15:8"
					},
					returnParameters: {
						id: 2055,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2054,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2056,
								src: "1017:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2053,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1017:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1016:6:8"
					},
					scope: 2198,
					src: "963:60:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2073,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "permit",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2071,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2058,
								name: "owner",
								nodeType: "VariableDeclaration",
								scope: 2073,
								src: "1045:13:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2057,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "1045:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2060,
								name: "spender",
								nodeType: "VariableDeclaration",
								scope: 2073,
								src: "1060:15:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2059,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "1060:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2062,
								name: "value",
								nodeType: "VariableDeclaration",
								scope: 2073,
								src: "1077:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2061,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1077:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2064,
								name: "deadline",
								nodeType: "VariableDeclaration",
								scope: 2073,
								src: "1089:13:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2063,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1089:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2066,
								name: "v",
								nodeType: "VariableDeclaration",
								scope: 2073,
								src: "1104:7:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint8",
									typeString: "uint8"
								},
								typeName: {
									id: 2065,
									name: "uint8",
									nodeType: "ElementaryTypeName",
									src: "1104:5:8",
									typeDescriptions: {
										typeIdentifier: "t_uint8",
										typeString: "uint8"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2068,
								name: "r",
								nodeType: "VariableDeclaration",
								scope: 2073,
								src: "1113:9:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_bytes32",
									typeString: "bytes32"
								},
								typeName: {
									id: 2067,
									name: "bytes32",
									nodeType: "ElementaryTypeName",
									src: "1113:7:8",
									typeDescriptions: {
										typeIdentifier: "t_bytes32",
										typeString: "bytes32"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2070,
								name: "s",
								nodeType: "VariableDeclaration",
								scope: 2073,
								src: "1124:9:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_bytes32",
									typeString: "bytes32"
								},
								typeName: {
									id: 2069,
									name: "bytes32",
									nodeType: "ElementaryTypeName",
									src: "1124:7:8",
									typeDescriptions: {
										typeIdentifier: "t_bytes32",
										typeString: "bytes32"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1044:90:8"
					},
					returnParameters: {
						id: 2072,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "1143:0:8"
					},
					scope: 2198,
					src: "1029:115:8",
					stateMutability: "nonpayable",
					superFunction: null,
					visibility: "external"
				},
				{
					anonymous: false,
					documentation: null,
					id: 2081,
					name: "Mint",
					nodeType: "EventDefinition",
					parameters: {
						id: 2080,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2075,
								indexed: true,
								name: "sender",
								nodeType: "VariableDeclaration",
								scope: 2081,
								src: "1161:22:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2074,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "1161:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2077,
								indexed: false,
								name: "amount0",
								nodeType: "VariableDeclaration",
								scope: 2081,
								src: "1185:12:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2076,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1185:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2079,
								indexed: false,
								name: "amount1",
								nodeType: "VariableDeclaration",
								scope: 2081,
								src: "1199:12:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2078,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1199:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1160:52:8"
					},
					src: "1150:63:8"
				},
				{
					anonymous: false,
					documentation: null,
					id: 2091,
					name: "Burn",
					nodeType: "EventDefinition",
					parameters: {
						id: 2090,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2083,
								indexed: true,
								name: "sender",
								nodeType: "VariableDeclaration",
								scope: 2091,
								src: "1229:22:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2082,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "1229:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2085,
								indexed: false,
								name: "amount0",
								nodeType: "VariableDeclaration",
								scope: 2091,
								src: "1253:12:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2084,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1253:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2087,
								indexed: false,
								name: "amount1",
								nodeType: "VariableDeclaration",
								scope: 2091,
								src: "1267:12:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2086,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1267:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2089,
								indexed: true,
								name: "to",
								nodeType: "VariableDeclaration",
								scope: 2091,
								src: "1281:18:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2088,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "1281:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1228:72:8"
					},
					src: "1218:83:8"
				},
				{
					anonymous: false,
					documentation: null,
					id: 2105,
					name: "Swap",
					nodeType: "EventDefinition",
					parameters: {
						id: 2104,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2093,
								indexed: true,
								name: "sender",
								nodeType: "VariableDeclaration",
								scope: 2105,
								src: "1326:22:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2092,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "1326:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2095,
								indexed: false,
								name: "amount0In",
								nodeType: "VariableDeclaration",
								scope: 2105,
								src: "1358:14:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2094,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1358:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2097,
								indexed: false,
								name: "amount1In",
								nodeType: "VariableDeclaration",
								scope: 2105,
								src: "1382:14:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2096,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1382:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2099,
								indexed: false,
								name: "amount0Out",
								nodeType: "VariableDeclaration",
								scope: 2105,
								src: "1406:15:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2098,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1406:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2101,
								indexed: false,
								name: "amount1Out",
								nodeType: "VariableDeclaration",
								scope: 2105,
								src: "1431:15:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2100,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1431:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2103,
								indexed: true,
								name: "to",
								nodeType: "VariableDeclaration",
								scope: 2105,
								src: "1456:18:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2102,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "1456:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1316:164:8"
					},
					src: "1306:175:8"
				},
				{
					anonymous: false,
					documentation: null,
					id: 2111,
					name: "Sync",
					nodeType: "EventDefinition",
					parameters: {
						id: 2110,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2107,
								indexed: false,
								name: "reserve0",
								nodeType: "VariableDeclaration",
								scope: 2111,
								src: "1497:16:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint112",
									typeString: "uint112"
								},
								typeName: {
									id: 2106,
									name: "uint112",
									nodeType: "ElementaryTypeName",
									src: "1497:7:8",
									typeDescriptions: {
										typeIdentifier: "t_uint112",
										typeString: "uint112"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2109,
								indexed: false,
								name: "reserve1",
								nodeType: "VariableDeclaration",
								scope: 2111,
								src: "1515:16:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint112",
									typeString: "uint112"
								},
								typeName: {
									id: 2108,
									name: "uint112",
									nodeType: "ElementaryTypeName",
									src: "1515:7:8",
									typeDescriptions: {
										typeIdentifier: "t_uint112",
										typeString: "uint112"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1496:36:8"
					},
					src: "1486:47:8"
				},
				{
					body: null,
					documentation: null,
					id: 2116,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "MINIMUM_LIQUIDITY",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2112,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "1565:2:8"
					},
					returnParameters: {
						id: 2115,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2114,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2116,
								src: "1591:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2113,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1591:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1590:6:8"
					},
					scope: 2198,
					src: "1539:58:8",
					stateMutability: "pure",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2121,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "factory",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2117,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "1618:2:8"
					},
					returnParameters: {
						id: 2120,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2119,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2121,
								src: "1644:7:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2118,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "1644:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1643:9:8"
					},
					scope: 2198,
					src: "1602:51:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2126,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "token0",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2122,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "1673:2:8"
					},
					returnParameters: {
						id: 2125,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2124,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2126,
								src: "1699:7:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2123,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "1699:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1698:9:8"
					},
					scope: 2198,
					src: "1658:50:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2131,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "token1",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2127,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "1728:2:8"
					},
					returnParameters: {
						id: 2130,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2129,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2131,
								src: "1754:7:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2128,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "1754:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1753:9:8"
					},
					scope: 2198,
					src: "1713:50:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2140,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "getReserves",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2132,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "1788:2:8"
					},
					returnParameters: {
						id: 2139,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2134,
								name: "reserve0",
								nodeType: "VariableDeclaration",
								scope: 2140,
								src: "1814:16:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint112",
									typeString: "uint112"
								},
								typeName: {
									id: 2133,
									name: "uint112",
									nodeType: "ElementaryTypeName",
									src: "1814:7:8",
									typeDescriptions: {
										typeIdentifier: "t_uint112",
										typeString: "uint112"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2136,
								name: "reserve1",
								nodeType: "VariableDeclaration",
								scope: 2140,
								src: "1832:16:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint112",
									typeString: "uint112"
								},
								typeName: {
									id: 2135,
									name: "uint112",
									nodeType: "ElementaryTypeName",
									src: "1832:7:8",
									typeDescriptions: {
										typeIdentifier: "t_uint112",
										typeString: "uint112"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2138,
								name: "blockTimestampLast",
								nodeType: "VariableDeclaration",
								scope: 2140,
								src: "1850:25:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint32",
									typeString: "uint32"
								},
								typeName: {
									id: 2137,
									name: "uint32",
									nodeType: "ElementaryTypeName",
									src: "1850:6:8",
									typeDescriptions: {
										typeIdentifier: "t_uint32",
										typeString: "uint32"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1813:63:8"
					},
					scope: 2198,
					src: "1768:109:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2145,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "price0CumulativeLast",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2141,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "1911:2:8"
					},
					returnParameters: {
						id: 2144,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2143,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2145,
								src: "1937:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2142,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "1937:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "1936:6:8"
					},
					scope: 2198,
					src: "1882:61:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2150,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "price1CumulativeLast",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2146,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "1977:2:8"
					},
					returnParameters: {
						id: 2149,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2148,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2150,
								src: "2003:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2147,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "2003:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "2002:6:8"
					},
					scope: 2198,
					src: "1948:61:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2155,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "kLast",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2151,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "2028:2:8"
					},
					returnParameters: {
						id: 2154,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2153,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2155,
								src: "2054:4:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2152,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "2054:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "2053:6:8"
					},
					scope: 2198,
					src: "2014:46:8",
					stateMutability: "view",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2162,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "mint",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2158,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2157,
								name: "to",
								nodeType: "VariableDeclaration",
								scope: 2162,
								src: "2080:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2156,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "2080:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "2079:12:8"
					},
					returnParameters: {
						id: 2161,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2160,
								name: "liquidity",
								nodeType: "VariableDeclaration",
								scope: 2162,
								src: "2110:14:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2159,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "2110:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "2109:16:8"
					},
					scope: 2198,
					src: "2066:60:8",
					stateMutability: "nonpayable",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2171,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "burn",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2165,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2164,
								name: "to",
								nodeType: "VariableDeclaration",
								scope: 2171,
								src: "2145:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2163,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "2145:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "2144:12:8"
					},
					returnParameters: {
						id: 2170,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2167,
								name: "amount0",
								nodeType: "VariableDeclaration",
								scope: 2171,
								src: "2175:12:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2166,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "2175:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2169,
								name: "amount1",
								nodeType: "VariableDeclaration",
								scope: 2171,
								src: "2189:12:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2168,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "2189:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "2174:28:8"
					},
					scope: 2198,
					src: "2131:72:8",
					stateMutability: "nonpayable",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2182,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "swap",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2180,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2173,
								name: "amount0Out",
								nodeType: "VariableDeclaration",
								scope: 2182,
								src: "2222:15:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2172,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "2222:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2175,
								name: "amount1Out",
								nodeType: "VariableDeclaration",
								scope: 2182,
								src: "2239:15:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 2174,
									name: "uint",
									nodeType: "ElementaryTypeName",
									src: "2239:4:8",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2177,
								name: "to",
								nodeType: "VariableDeclaration",
								scope: 2182,
								src: "2256:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2176,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "2256:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2179,
								name: "data",
								nodeType: "VariableDeclaration",
								scope: 2182,
								src: "2268:19:8",
								stateVariable: false,
								storageLocation: "calldata",
								typeDescriptions: {
									typeIdentifier: "t_bytes_calldata_ptr",
									typeString: "bytes"
								},
								typeName: {
									id: 2178,
									name: "bytes",
									nodeType: "ElementaryTypeName",
									src: "2268:5:8",
									typeDescriptions: {
										typeIdentifier: "t_bytes_storage_ptr",
										typeString: "bytes"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "2221:67:8"
					},
					returnParameters: {
						id: 2181,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "2297:0:8"
					},
					scope: 2198,
					src: "2208:90:8",
					stateMutability: "nonpayable",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2187,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "skim",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2185,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2184,
								name: "to",
								nodeType: "VariableDeclaration",
								scope: 2187,
								src: "2317:10:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2183,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "2317:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "2316:12:8"
					},
					returnParameters: {
						id: 2186,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "2337:0:8"
					},
					scope: 2198,
					src: "2303:35:8",
					stateMutability: "nonpayable",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2190,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "sync",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2188,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "2356:2:8"
					},
					returnParameters: {
						id: 2189,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "2367:0:8"
					},
					scope: 2198,
					src: "2343:25:8",
					stateMutability: "nonpayable",
					superFunction: null,
					visibility: "external"
				},
				{
					body: null,
					documentation: null,
					id: 2197,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "initialize",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 2195,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 2192,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2197,
								src: "2394:7:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2191,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "2394:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							},
							{
								constant: false,
								id: 2194,
								name: "",
								nodeType: "VariableDeclaration",
								scope: 2197,
								src: "2403:7:8",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_address",
									typeString: "address"
								},
								typeName: {
									id: 2193,
									name: "address",
									nodeType: "ElementaryTypeName",
									src: "2403:7:8",
									stateMutability: "nonpayable",
									typeDescriptions: {
										typeIdentifier: "t_address",
										typeString: "address"
									}
								},
								value: null,
								visibility: "internal"
							}
						],
						src: "2393:18:8"
					},
					returnParameters: {
						id: 2196,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "2420:0:8"
					},
					scope: 2198,
					src: "2374:47:8",
					stateMutability: "nonpayable",
					superFunction: null,
					visibility: "external"
				}
			],
			scope: 2199,
			src: "26:2397:8"
		}
	],
	src: "0:2424:8"
};
var compiler = {
	name: "solc",
	version: "0.5.15+commit.fd7f48cf.Emscripten.clang"
};
var networks = {
};
var schemaVersion = "2.0.1";
var updatedAt = "2021-06-11T07:00:08.981Z";
var ITofuswapV2Pair = {
	contractName: contractName,
	abi: abi,
	bytecode: bytecode,
	deployedBytecode: deployedBytecode,
	sourceMap: sourceMap,
	deployedSourceMap: deployedSourceMap,
	source: source,
	sourcePath: sourcePath,
	ast: ast,
	legacyAST: legacyAST,
	compiler: compiler,
	networks: networks,
	schemaVersion: schemaVersion,
	updatedAt: updatedAt
};

var ERC20 = [
	{
		constant: true,
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				name: "",
				type: "uint8"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	}
];

var _TOKEN_DECIMALS_CACHE;
var TOKEN_DECIMALS_CACHE = (_TOKEN_DECIMALS_CACHE = {}, _TOKEN_DECIMALS_CACHE[ChainId.MAINNET] = {// @TRON
  // '0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A': 9 // DGD
}, _TOKEN_DECIMALS_CACHE);
/**
 * Contains methods for constructing instances of pairs and tokens from on-chain data.
 */

var Fetcher = /*#__PURE__*/function () {
  /**
   * Cannot be constructed.
   */
  function Fetcher() {}
  /**
   * Fetch information for a given token on the given chain, using the given ethers provider.
   * @param chainId chain of the token
   * @param address address of the token on the chain
   * @param provider provider used to fetch the token
   * @param symbol optional symbol of the token
   * @param name optional name of the token
   */


  Fetcher.fetchTokenData = function fetchTokenData(chainId, address, // TODO(tron): use java-tron-provider...
  provider, symbol, name) {
    try {
      var _TOKEN_DECIMALS_CACHE2, _TOKEN_DECIMALS_CACHE3;

      var _temp3 = function _temp3(parsedDecimals) {
        return new Token(chainId, address, parsedDecimals, symbol, name);
      };

      if (provider === undefined) provider = getDefaultProvider(getNetwork(chainId));

      var _temp4 = typeof ((_TOKEN_DECIMALS_CACHE2 = TOKEN_DECIMALS_CACHE) === null || _TOKEN_DECIMALS_CACHE2 === void 0 ? void 0 : (_TOKEN_DECIMALS_CACHE3 = _TOKEN_DECIMALS_CACHE2[chainId]) === null || _TOKEN_DECIMALS_CACHE3 === void 0 ? void 0 : _TOKEN_DECIMALS_CACHE3[address]) === 'number';

      return Promise.resolve(_temp4 ? _temp3(TOKEN_DECIMALS_CACHE[chainId][address]) : Promise.resolve(new Contract(address, ERC20, provider).decimals().then(function (decimals) {
        var _TOKEN_DECIMALS_CACHE4, _extends2, _extends3;

        TOKEN_DECIMALS_CACHE = _extends({}, TOKEN_DECIMALS_CACHE, (_extends3 = {}, _extends3[chainId] = _extends({}, (_TOKEN_DECIMALS_CACHE4 = TOKEN_DECIMALS_CACHE) === null || _TOKEN_DECIMALS_CACHE4 === void 0 ? void 0 : _TOKEN_DECIMALS_CACHE4[chainId], (_extends2 = {}, _extends2[address] = decimals, _extends2)), _extends3));
        return decimals;
      })).then(_temp3));
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /**
   * Fetches information about a pair and constructs a pair from the given two tokens.
   * @param tokenA first token
   * @param tokenB second token
   * @param provider the provider to use to fetch the data
   */
  ;

  Fetcher.fetchPairData = function fetchPairData(tokenA, tokenB, provider) {
    try {
      if (provider === undefined) provider = getDefaultProvider(getNetwork(tokenA.chainId));
      !(tokenA.chainId === tokenB.chainId) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_ID') : invariant(false) : void 0;
      var address = Pair.getAddress(tokenA, tokenB);
      return Promise.resolve(new Contract(address, ITofuswapV2Pair.abi, provider).getReserves()).then(function (_ref) {
        var reserves0 = _ref[0],
            reserves1 = _ref[1];
        var balances = tokenA.sortsBefore(tokenB) ? [reserves0, reserves1] : [reserves1, reserves0];
        return new Pair(new TokenAmount(tokenA, balances[0]), new TokenAmount(tokenB, balances[1]));
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return Fetcher;
}();

export { ChainId, Currency, CurrencyAmount, FACTORY_ADDRESS, Fetcher, Fraction, INIT_CODE_HASH, InsufficientInputAmountError, InsufficientReservesError, MINIMUM_LIQUIDITY, Pair, Percent, Price, Rounding, Route, Router, TOFU_FREEZER_ADDRESS, TRX, Token, TokenAmount, Trade, TradeType, WTRX, currencyEquals, inputOutputComparator, tradeComparator };
//# sourceMappingURL=tofuswap-sdk.esm.js.map
