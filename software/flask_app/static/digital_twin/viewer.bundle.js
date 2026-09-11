(() => {
  var t = "180";
  var e = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 };
  var s = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 };
  var i = 0;
  var r = 1;
  var n = 2;
  var h = 1;
  var l = 2;
  var c = 3;
  var u = 0;
  var d = 1;
  var p = 2;
  var m = 0;
  var y = 1;
  var g = 2;
  var f = 3;
  var x = 4;
  var b = 5;
  var v = 100;
  var w = 101;
  var M = 102;
  var S = 103;
  var _ = 104;
  var A = 200;
  var T = 201;
  var z = 202;
  var C = 203;
  var I = 204;
  var B = 205;
  var k = 206;
  var E = 207;
  var R = 208;
  var P = 209;
  var O = 210;
  var N = 211;
  var V = 212;
  var F = 213;
  var L = 214;
  var j = 0;
  var D = 1;
  var W = 2;
  var U = 3;
  var H = 4;
  var q = 5;
  var J = 6;
  var X = 7;
  var Y = 0;
  var Z = 1;
  var G = 2;
  var $ = 0;
  var Q = 1;
  var K = 2;
  var tt = 3;
  var et = 4;
  var st = 5;
  var it = 6;
  var rt = 7;
  var nt = "attached";
  var at = "detached";
  var ot = 300;
  var ht = 301;
  var lt = 302;
  var ct = 303;
  var ut = 304;
  var dt = 306;
  var pt = 1e3;
  var mt = 1001;
  var yt = 1002;
  var gt = 1003;
  var ft = 1004;
  var bt = 1005;
  var wt = 1006;
  var Mt = 1007;
  var _t = 1008;
  var Tt = 1009;
  var zt = 1010;
  var Ct = 1011;
  var It = 1012;
  var Bt = 1013;
  var kt = 1014;
  var Et = 1015;
  var Rt = 1016;
  var Pt = 1017;
  var Ot = 1018;
  var Nt = 1020;
  var Vt = 35902;
  var Ft = 35899;
  var Lt = 1021;
  var jt = 1022;
  var Dt = 1023;
  var Wt = 1026;
  var Ut = 1027;
  var Ht = 1028;
  var qt = 1029;
  var Jt = 1030;
  var Xt = 1031;
  var Zt = 1033;
  var Gt = 33776;
  var $t = 33777;
  var Qt = 33778;
  var Kt = 33779;
  var te = 35840;
  var ee = 35841;
  var se = 35842;
  var ie = 35843;
  var re = 36196;
  var ne = 37492;
  var ae = 37496;
  var oe = 37808;
  var he = 37809;
  var le = 37810;
  var ce = 37811;
  var ue = 37812;
  var de = 37813;
  var pe = 37814;
  var me = 37815;
  var ye = 37816;
  var ge = 37817;
  var fe = 37818;
  var xe = 37819;
  var be = 37820;
  var ve = 37821;
  var we = 36492;
  var Me = 36494;
  var Se = 36495;
  var _e = 36283;
  var Ae = 36284;
  var Te = 36285;
  var ze = 36286;
  var ke = 2300;
  var Ee = 2301;
  var Re = 2302;
  var Pe = 2400;
  var Oe = 2401;
  var Ne = 2402;
  var Le = 0;
  var je = 1;
  var De = 2;
  var Ue = 3201;
  var Je = 0;
  var Xe = 1;
  var Ye = "";
  var Ze = "srgb";
  var Ge = "srgb-linear";
  var $e = "linear";
  var Qe = "srgb";
  var ts = 7680;
  var ys = 512;
  var gs = 513;
  var fs = 514;
  var xs = 515;
  var bs = 516;
  var vs = 517;
  var ws = 518;
  var Ms = 519;
  var Ss = 35044;
  var Rs = "300 es";
  var Ps = 2e3;
  var Os = 2001;
  var Ls = class {
    addEventListener(t2, e2) {
      void 0 === this._listeners && (this._listeners = {});
      const s2 = this._listeners;
      void 0 === s2[t2] && (s2[t2] = []), -1 === s2[t2].indexOf(e2) && s2[t2].push(e2);
    }
    hasEventListener(t2, e2) {
      const s2 = this._listeners;
      return void 0 !== s2 && (void 0 !== s2[t2] && -1 !== s2[t2].indexOf(e2));
    }
    removeEventListener(t2, e2) {
      const s2 = this._listeners;
      if (void 0 === s2) return;
      const i2 = s2[t2];
      if (void 0 !== i2) {
        const t3 = i2.indexOf(e2);
        -1 !== t3 && i2.splice(t3, 1);
      }
    }
    dispatchEvent(t2) {
      const e2 = this._listeners;
      if (void 0 === e2) return;
      const s2 = e2[t2.type];
      if (void 0 !== s2) {
        t2.target = this;
        const e3 = s2.slice(0);
        for (let s3 = 0, i2 = e3.length; s3 < i2; s3++) e3[s3].call(this, t2);
        t2.target = null;
      }
    }
  };
  var js = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
  var Ds = 1234567;
  var Ws = Math.PI / 180;
  var Us = 180 / Math.PI;
  function Hs() {
    const t2 = 4294967295 * Math.random() | 0, e2 = 4294967295 * Math.random() | 0, s2 = 4294967295 * Math.random() | 0, i2 = 4294967295 * Math.random() | 0;
    return (js[255 & t2] + js[t2 >> 8 & 255] + js[t2 >> 16 & 255] + js[t2 >> 24 & 255] + "-" + js[255 & e2] + js[e2 >> 8 & 255] + "-" + js[e2 >> 16 & 15 | 64] + js[e2 >> 24 & 255] + "-" + js[63 & s2 | 128] + js[s2 >> 8 & 255] + "-" + js[s2 >> 16 & 255] + js[s2 >> 24 & 255] + js[255 & i2] + js[i2 >> 8 & 255] + js[i2 >> 16 & 255] + js[i2 >> 24 & 255]).toLowerCase();
  }
  function qs(t2, e2, s2) {
    return Math.max(e2, Math.min(s2, t2));
  }
  function Js(t2, e2) {
    return (t2 % e2 + e2) % e2;
  }
  function Xs(t2, e2, s2) {
    return (1 - s2) * t2 + s2 * e2;
  }
  function Ys(t2, e2) {
    switch (e2.constructor) {
      case Float32Array:
        return t2;
      case Uint32Array:
        return t2 / 4294967295;
      case Uint16Array:
        return t2 / 65535;
      case Uint8Array:
        return t2 / 255;
      case Int32Array:
        return Math.max(t2 / 2147483647, -1);
      case Int16Array:
        return Math.max(t2 / 32767, -1);
      case Int8Array:
        return Math.max(t2 / 127, -1);
      default:
        throw new Error("Invalid component type.");
    }
  }
  function Zs(t2, e2) {
    switch (e2.constructor) {
      case Float32Array:
        return t2;
      case Uint32Array:
        return Math.round(4294967295 * t2);
      case Uint16Array:
        return Math.round(65535 * t2);
      case Uint8Array:
        return Math.round(255 * t2);
      case Int32Array:
        return Math.round(2147483647 * t2);
      case Int16Array:
        return Math.round(32767 * t2);
      case Int8Array:
        return Math.round(127 * t2);
      default:
        throw new Error("Invalid component type.");
    }
  }
  var Gs = { DEG2RAD: Ws, RAD2DEG: Us, generateUUID: Hs, clamp: qs, euclideanModulo: Js, mapLinear: function(t2, e2, s2, i2, r2) {
    return i2 + (t2 - e2) * (r2 - i2) / (s2 - e2);
  }, inverseLerp: function(t2, e2, s2) {
    return t2 !== e2 ? (s2 - t2) / (e2 - t2) : 0;
  }, lerp: Xs, damp: function(t2, e2, s2, i2) {
    return Xs(t2, e2, 1 - Math.exp(-s2 * i2));
  }, pingpong: function(t2, e2 = 1) {
    return e2 - Math.abs(Js(t2, 2 * e2) - e2);
  }, smoothstep: function(t2, e2, s2) {
    return t2 <= e2 ? 0 : t2 >= s2 ? 1 : (t2 = (t2 - e2) / (s2 - e2)) * t2 * (3 - 2 * t2);
  }, smootherstep: function(t2, e2, s2) {
    return t2 <= e2 ? 0 : t2 >= s2 ? 1 : (t2 = (t2 - e2) / (s2 - e2)) * t2 * t2 * (t2 * (6 * t2 - 15) + 10);
  }, randInt: function(t2, e2) {
    return t2 + Math.floor(Math.random() * (e2 - t2 + 1));
  }, randFloat: function(t2, e2) {
    return t2 + Math.random() * (e2 - t2);
  }, randFloatSpread: function(t2) {
    return t2 * (0.5 - Math.random());
  }, seededRandom: function(t2) {
    void 0 !== t2 && (Ds = t2);
    let e2 = Ds += 1831565813;
    return e2 = Math.imul(e2 ^ e2 >>> 15, 1 | e2), e2 ^= e2 + Math.imul(e2 ^ e2 >>> 7, 61 | e2), ((e2 ^ e2 >>> 14) >>> 0) / 4294967296;
  }, degToRad: function(t2) {
    return t2 * Ws;
  }, radToDeg: function(t2) {
    return t2 * Us;
  }, isPowerOfTwo: function(t2) {
    return !(t2 & t2 - 1) && 0 !== t2;
  }, ceilPowerOfTwo: function(t2) {
    return Math.pow(2, Math.ceil(Math.log(t2) / Math.LN2));
  }, floorPowerOfTwo: function(t2) {
    return Math.pow(2, Math.floor(Math.log(t2) / Math.LN2));
  }, setQuaternionFromProperEuler: function(t2, e2, s2, i2, r2) {
    const n2 = Math.cos, a2 = Math.sin, o2 = n2(s2 / 2), h2 = a2(s2 / 2), l2 = n2((e2 + i2) / 2), c2 = a2((e2 + i2) / 2), u2 = n2((e2 - i2) / 2), d2 = a2((e2 - i2) / 2), p2 = n2((i2 - e2) / 2), m2 = a2((i2 - e2) / 2);
    switch (r2) {
      case "XYX":
        t2.set(o2 * c2, h2 * u2, h2 * d2, o2 * l2);
        break;
      case "YZY":
        t2.set(h2 * d2, o2 * c2, h2 * u2, o2 * l2);
        break;
      case "ZXZ":
        t2.set(h2 * u2, h2 * d2, o2 * c2, o2 * l2);
        break;
      case "XZX":
        t2.set(o2 * c2, h2 * m2, h2 * p2, o2 * l2);
        break;
      case "YXY":
        t2.set(h2 * p2, o2 * c2, h2 * m2, o2 * l2);
        break;
      case "ZYZ":
        t2.set(h2 * m2, h2 * p2, o2 * c2, o2 * l2);
        break;
      default:
        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r2);
    }
  }, normalize: Zs, denormalize: Ys };
  var $s = class _$s {
    constructor(t2 = 0, e2 = 0) {
      _$s.prototype.isVector2 = true, this.x = t2, this.y = e2;
    }
    get width() {
      return this.x;
    }
    set width(t2) {
      this.x = t2;
    }
    get height() {
      return this.y;
    }
    set height(t2) {
      this.y = t2;
    }
    set(t2, e2) {
      return this.x = t2, this.y = e2, this;
    }
    setScalar(t2) {
      return this.x = t2, this.y = t2, this;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setComponent(t2, e2) {
      switch (t2) {
        case 0:
          this.x = e2;
          break;
        case 1:
          this.y = e2;
          break;
        default:
          throw new Error("index is out of range: " + t2);
      }
      return this;
    }
    getComponent(t2) {
      switch (t2) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + t2);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(t2) {
      return this.x = t2.x, this.y = t2.y, this;
    }
    add(t2) {
      return this.x += t2.x, this.y += t2.y, this;
    }
    addScalar(t2) {
      return this.x += t2, this.y += t2, this;
    }
    addVectors(t2, e2) {
      return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this;
    }
    addScaledVector(t2, e2) {
      return this.x += t2.x * e2, this.y += t2.y * e2, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this;
    }
    subVectors(t2, e2) {
      return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this;
    }
    divide(t2) {
      return this.x /= t2.x, this.y /= t2.y, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    applyMatrix3(t2) {
      const e2 = this.x, s2 = this.y, i2 = t2.elements;
      return this.x = i2[0] * e2 + i2[3] * s2 + i2[6], this.y = i2[1] * e2 + i2[4] * s2 + i2[7], this;
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this;
    }
    clamp(t2, e2) {
      return this.x = qs(this.x, t2.x, e2.x), this.y = qs(this.y, t2.y, e2.y), this;
    }
    clampScalar(t2, e2) {
      return this.x = qs(this.x, t2, e2), this.y = qs(this.y, t2, e2), this;
    }
    clampLength(t2, e2) {
      const s2 = this.length();
      return this.divideScalar(s2 || 1).multiplyScalar(qs(s2, t2, e2));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this;
    }
    dot(t2) {
      return this.x * t2.x + this.y * t2.y;
    }
    cross(t2) {
      return this.x * t2.y - this.y * t2.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(t2) {
      const e2 = Math.sqrt(this.lengthSq() * t2.lengthSq());
      if (0 === e2) return Math.PI / 2;
      const s2 = this.dot(t2) / e2;
      return Math.acos(qs(s2, -1, 1));
    }
    distanceTo(t2) {
      return Math.sqrt(this.distanceToSquared(t2));
    }
    distanceToSquared(t2) {
      const e2 = this.x - t2.x, s2 = this.y - t2.y;
      return e2 * e2 + s2 * s2;
    }
    manhattanDistanceTo(t2) {
      return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y);
    }
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e2) {
      return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this;
    }
    lerpVectors(t2, e2, s2) {
      return this.x = t2.x + (e2.x - t2.x) * s2, this.y = t2.y + (e2.y - t2.y) * s2, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y;
    }
    fromArray(t2, e2 = 0) {
      return this.x = t2[e2], this.y = t2[e2 + 1], this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this.x, t2[e2 + 1] = this.y, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this.x = t2.getX(e2), this.y = t2.getY(e2), this;
    }
    rotateAround(t2, e2) {
      const s2 = Math.cos(e2), i2 = Math.sin(e2), r2 = this.x - t2.x, n2 = this.y - t2.y;
      return this.x = r2 * s2 - n2 * i2 + t2.x, this.y = r2 * i2 + n2 * s2 + t2.y, this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  };
  var Qs = class {
    constructor(t2 = 0, e2 = 0, s2 = 0, i2 = 1) {
      this.isQuaternion = true, this._x = t2, this._y = e2, this._z = s2, this._w = i2;
    }
    static slerpFlat(t2, e2, s2, i2, r2, n2, a2) {
      let o2 = s2[i2 + 0], h2 = s2[i2 + 1], l2 = s2[i2 + 2], c2 = s2[i2 + 3];
      const u2 = r2[n2 + 0], d2 = r2[n2 + 1], p2 = r2[n2 + 2], m2 = r2[n2 + 3];
      if (0 === a2) return t2[e2 + 0] = o2, t2[e2 + 1] = h2, t2[e2 + 2] = l2, void (t2[e2 + 3] = c2);
      if (1 === a2) return t2[e2 + 0] = u2, t2[e2 + 1] = d2, t2[e2 + 2] = p2, void (t2[e2 + 3] = m2);
      if (c2 !== m2 || o2 !== u2 || h2 !== d2 || l2 !== p2) {
        let t3 = 1 - a2;
        const e3 = o2 * u2 + h2 * d2 + l2 * p2 + c2 * m2, s3 = e3 >= 0 ? 1 : -1, i3 = 1 - e3 * e3;
        if (i3 > Number.EPSILON) {
          const r4 = Math.sqrt(i3), n3 = Math.atan2(r4, e3 * s3);
          t3 = Math.sin(t3 * n3) / r4, a2 = Math.sin(a2 * n3) / r4;
        }
        const r3 = a2 * s3;
        if (o2 = o2 * t3 + u2 * r3, h2 = h2 * t3 + d2 * r3, l2 = l2 * t3 + p2 * r3, c2 = c2 * t3 + m2 * r3, t3 === 1 - a2) {
          const t4 = 1 / Math.sqrt(o2 * o2 + h2 * h2 + l2 * l2 + c2 * c2);
          o2 *= t4, h2 *= t4, l2 *= t4, c2 *= t4;
        }
      }
      t2[e2] = o2, t2[e2 + 1] = h2, t2[e2 + 2] = l2, t2[e2 + 3] = c2;
    }
    static multiplyQuaternionsFlat(t2, e2, s2, i2, r2, n2) {
      const a2 = s2[i2], o2 = s2[i2 + 1], h2 = s2[i2 + 2], l2 = s2[i2 + 3], c2 = r2[n2], u2 = r2[n2 + 1], d2 = r2[n2 + 2], p2 = r2[n2 + 3];
      return t2[e2] = a2 * p2 + l2 * c2 + o2 * d2 - h2 * u2, t2[e2 + 1] = o2 * p2 + l2 * u2 + h2 * c2 - a2 * d2, t2[e2 + 2] = h2 * p2 + l2 * d2 + a2 * u2 - o2 * c2, t2[e2 + 3] = l2 * p2 - a2 * c2 - o2 * u2 - h2 * d2, t2;
    }
    get x() {
      return this._x;
    }
    set x(t2) {
      this._x = t2, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t2) {
      this._y = t2, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t2) {
      this._z = t2, this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(t2) {
      this._w = t2, this._onChangeCallback();
    }
    set(t2, e2, s2, i2) {
      return this._x = t2, this._y = e2, this._z = s2, this._w = i2, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(t2) {
      return this._x = t2.x, this._y = t2.y, this._z = t2.z, this._w = t2.w, this._onChangeCallback(), this;
    }
    setFromEuler(t2, e2 = true) {
      const s2 = t2._x, i2 = t2._y, r2 = t2._z, n2 = t2._order, a2 = Math.cos, o2 = Math.sin, h2 = a2(s2 / 2), l2 = a2(i2 / 2), c2 = a2(r2 / 2), u2 = o2(s2 / 2), d2 = o2(i2 / 2), p2 = o2(r2 / 2);
      switch (n2) {
        case "XYZ":
          this._x = u2 * l2 * c2 + h2 * d2 * p2, this._y = h2 * d2 * c2 - u2 * l2 * p2, this._z = h2 * l2 * p2 + u2 * d2 * c2, this._w = h2 * l2 * c2 - u2 * d2 * p2;
          break;
        case "YXZ":
          this._x = u2 * l2 * c2 + h2 * d2 * p2, this._y = h2 * d2 * c2 - u2 * l2 * p2, this._z = h2 * l2 * p2 - u2 * d2 * c2, this._w = h2 * l2 * c2 + u2 * d2 * p2;
          break;
        case "ZXY":
          this._x = u2 * l2 * c2 - h2 * d2 * p2, this._y = h2 * d2 * c2 + u2 * l2 * p2, this._z = h2 * l2 * p2 + u2 * d2 * c2, this._w = h2 * l2 * c2 - u2 * d2 * p2;
          break;
        case "ZYX":
          this._x = u2 * l2 * c2 - h2 * d2 * p2, this._y = h2 * d2 * c2 + u2 * l2 * p2, this._z = h2 * l2 * p2 - u2 * d2 * c2, this._w = h2 * l2 * c2 + u2 * d2 * p2;
          break;
        case "YZX":
          this._x = u2 * l2 * c2 + h2 * d2 * p2, this._y = h2 * d2 * c2 + u2 * l2 * p2, this._z = h2 * l2 * p2 - u2 * d2 * c2, this._w = h2 * l2 * c2 - u2 * d2 * p2;
          break;
        case "XZY":
          this._x = u2 * l2 * c2 - h2 * d2 * p2, this._y = h2 * d2 * c2 - u2 * l2 * p2, this._z = h2 * l2 * p2 + u2 * d2 * c2, this._w = h2 * l2 * c2 + u2 * d2 * p2;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + n2);
      }
      return true === e2 && this._onChangeCallback(), this;
    }
    setFromAxisAngle(t2, e2) {
      const s2 = e2 / 2, i2 = Math.sin(s2);
      return this._x = t2.x * i2, this._y = t2.y * i2, this._z = t2.z * i2, this._w = Math.cos(s2), this._onChangeCallback(), this;
    }
    setFromRotationMatrix(t2) {
      const e2 = t2.elements, s2 = e2[0], i2 = e2[4], r2 = e2[8], n2 = e2[1], a2 = e2[5], o2 = e2[9], h2 = e2[2], l2 = e2[6], c2 = e2[10], u2 = s2 + a2 + c2;
      if (u2 > 0) {
        const t3 = 0.5 / Math.sqrt(u2 + 1);
        this._w = 0.25 / t3, this._x = (l2 - o2) * t3, this._y = (r2 - h2) * t3, this._z = (n2 - i2) * t3;
      } else if (s2 > a2 && s2 > c2) {
        const t3 = 2 * Math.sqrt(1 + s2 - a2 - c2);
        this._w = (l2 - o2) / t3, this._x = 0.25 * t3, this._y = (i2 + n2) / t3, this._z = (r2 + h2) / t3;
      } else if (a2 > c2) {
        const t3 = 2 * Math.sqrt(1 + a2 - s2 - c2);
        this._w = (r2 - h2) / t3, this._x = (i2 + n2) / t3, this._y = 0.25 * t3, this._z = (o2 + l2) / t3;
      } else {
        const t3 = 2 * Math.sqrt(1 + c2 - s2 - a2);
        this._w = (n2 - i2) / t3, this._x = (r2 + h2) / t3, this._y = (o2 + l2) / t3, this._z = 0.25 * t3;
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(t2, e2) {
      let s2 = t2.dot(e2) + 1;
      return s2 < 1e-8 ? (s2 = 0, Math.abs(t2.x) > Math.abs(t2.z) ? (this._x = -t2.y, this._y = t2.x, this._z = 0, this._w = s2) : (this._x = 0, this._y = -t2.z, this._z = t2.y, this._w = s2)) : (this._x = t2.y * e2.z - t2.z * e2.y, this._y = t2.z * e2.x - t2.x * e2.z, this._z = t2.x * e2.y - t2.y * e2.x, this._w = s2), this.normalize();
    }
    angleTo(t2) {
      return 2 * Math.acos(Math.abs(qs(this.dot(t2), -1, 1)));
    }
    rotateTowards(t2, e2) {
      const s2 = this.angleTo(t2);
      if (0 === s2) return this;
      const i2 = Math.min(1, e2 / s2);
      return this.slerp(t2, i2), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
    }
    dot(t2) {
      return this._x * t2._x + this._y * t2._y + this._z * t2._z + this._w * t2._w;
    }
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
      let t2 = this.length();
      return 0 === t2 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t2 = 1 / t2, this._x = this._x * t2, this._y = this._y * t2, this._z = this._z * t2, this._w = this._w * t2), this._onChangeCallback(), this;
    }
    multiply(t2) {
      return this.multiplyQuaternions(this, t2);
    }
    premultiply(t2) {
      return this.multiplyQuaternions(t2, this);
    }
    multiplyQuaternions(t2, e2) {
      const s2 = t2._x, i2 = t2._y, r2 = t2._z, n2 = t2._w, a2 = e2._x, o2 = e2._y, h2 = e2._z, l2 = e2._w;
      return this._x = s2 * l2 + n2 * a2 + i2 * h2 - r2 * o2, this._y = i2 * l2 + n2 * o2 + r2 * a2 - s2 * h2, this._z = r2 * l2 + n2 * h2 + s2 * o2 - i2 * a2, this._w = n2 * l2 - s2 * a2 - i2 * o2 - r2 * h2, this._onChangeCallback(), this;
    }
    slerp(t2, e2) {
      if (0 === e2) return this;
      if (1 === e2) return this.copy(t2);
      const s2 = this._x, i2 = this._y, r2 = this._z, n2 = this._w;
      let a2 = n2 * t2._w + s2 * t2._x + i2 * t2._y + r2 * t2._z;
      if (a2 < 0 ? (this._w = -t2._w, this._x = -t2._x, this._y = -t2._y, this._z = -t2._z, a2 = -a2) : this.copy(t2), a2 >= 1) return this._w = n2, this._x = s2, this._y = i2, this._z = r2, this;
      const o2 = 1 - a2 * a2;
      if (o2 <= Number.EPSILON) {
        const t3 = 1 - e2;
        return this._w = t3 * n2 + e2 * this._w, this._x = t3 * s2 + e2 * this._x, this._y = t3 * i2 + e2 * this._y, this._z = t3 * r2 + e2 * this._z, this.normalize(), this;
      }
      const h2 = Math.sqrt(o2), l2 = Math.atan2(h2, a2), c2 = Math.sin((1 - e2) * l2) / h2, u2 = Math.sin(e2 * l2) / h2;
      return this._w = n2 * c2 + this._w * u2, this._x = s2 * c2 + this._x * u2, this._y = i2 * c2 + this._y * u2, this._z = r2 * c2 + this._z * u2, this._onChangeCallback(), this;
    }
    slerpQuaternions(t2, e2, s2) {
      return this.copy(t2).slerp(e2, s2);
    }
    random() {
      const t2 = 2 * Math.PI * Math.random(), e2 = 2 * Math.PI * Math.random(), s2 = Math.random(), i2 = Math.sqrt(1 - s2), r2 = Math.sqrt(s2);
      return this.set(i2 * Math.sin(t2), i2 * Math.cos(t2), r2 * Math.sin(e2), r2 * Math.cos(e2));
    }
    equals(t2) {
      return t2._x === this._x && t2._y === this._y && t2._z === this._z && t2._w === this._w;
    }
    fromArray(t2, e2 = 0) {
      return this._x = t2[e2], this._y = t2[e2 + 1], this._z = t2[e2 + 2], this._w = t2[e2 + 3], this._onChangeCallback(), this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this._x, t2[e2 + 1] = this._y, t2[e2 + 2] = this._z, t2[e2 + 3] = this._w, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this._x = t2.getX(e2), this._y = t2.getY(e2), this._z = t2.getZ(e2), this._w = t2.getW(e2), this._onChangeCallback(), this;
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(t2) {
      return this._onChangeCallback = t2, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  };
  var Ks = class _Ks {
    constructor(t2 = 0, e2 = 0, s2 = 0) {
      _Ks.prototype.isVector3 = true, this.x = t2, this.y = e2, this.z = s2;
    }
    set(t2, e2, s2) {
      return void 0 === s2 && (s2 = this.z), this.x = t2, this.y = e2, this.z = s2, this;
    }
    setScalar(t2) {
      return this.x = t2, this.y = t2, this.z = t2, this;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setZ(t2) {
      return this.z = t2, this;
    }
    setComponent(t2, e2) {
      switch (t2) {
        case 0:
          this.x = e2;
          break;
        case 1:
          this.y = e2;
          break;
        case 2:
          this.z = e2;
          break;
        default:
          throw new Error("index is out of range: " + t2);
      }
      return this;
    }
    getComponent(t2) {
      switch (t2) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + t2);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(t2) {
      return this.x = t2.x, this.y = t2.y, this.z = t2.z, this;
    }
    add(t2) {
      return this.x += t2.x, this.y += t2.y, this.z += t2.z, this;
    }
    addScalar(t2) {
      return this.x += t2, this.y += t2, this.z += t2, this;
    }
    addVectors(t2, e2) {
      return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this.z = t2.z + e2.z, this;
    }
    addScaledVector(t2, e2) {
      return this.x += t2.x * e2, this.y += t2.y * e2, this.z += t2.z * e2, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this.z -= t2, this;
    }
    subVectors(t2, e2) {
      return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this.z = t2.z - e2.z, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this.z *= t2, this;
    }
    multiplyVectors(t2, e2) {
      return this.x = t2.x * e2.x, this.y = t2.y * e2.y, this.z = t2.z * e2.z, this;
    }
    applyEuler(t2) {
      return this.applyQuaternion(ei.setFromEuler(t2));
    }
    applyAxisAngle(t2, e2) {
      return this.applyQuaternion(ei.setFromAxisAngle(t2, e2));
    }
    applyMatrix3(t2) {
      const e2 = this.x, s2 = this.y, i2 = this.z, r2 = t2.elements;
      return this.x = r2[0] * e2 + r2[3] * s2 + r2[6] * i2, this.y = r2[1] * e2 + r2[4] * s2 + r2[7] * i2, this.z = r2[2] * e2 + r2[5] * s2 + r2[8] * i2, this;
    }
    applyNormalMatrix(t2) {
      return this.applyMatrix3(t2).normalize();
    }
    applyMatrix4(t2) {
      const e2 = this.x, s2 = this.y, i2 = this.z, r2 = t2.elements, n2 = 1 / (r2[3] * e2 + r2[7] * s2 + r2[11] * i2 + r2[15]);
      return this.x = (r2[0] * e2 + r2[4] * s2 + r2[8] * i2 + r2[12]) * n2, this.y = (r2[1] * e2 + r2[5] * s2 + r2[9] * i2 + r2[13]) * n2, this.z = (r2[2] * e2 + r2[6] * s2 + r2[10] * i2 + r2[14]) * n2, this;
    }
    applyQuaternion(t2) {
      const e2 = this.x, s2 = this.y, i2 = this.z, r2 = t2.x, n2 = t2.y, a2 = t2.z, o2 = t2.w, h2 = 2 * (n2 * i2 - a2 * s2), l2 = 2 * (a2 * e2 - r2 * i2), c2 = 2 * (r2 * s2 - n2 * e2);
      return this.x = e2 + o2 * h2 + n2 * c2 - a2 * l2, this.y = s2 + o2 * l2 + a2 * h2 - r2 * c2, this.z = i2 + o2 * c2 + r2 * l2 - n2 * h2, this;
    }
    project(t2) {
      return this.applyMatrix4(t2.matrixWorldInverse).applyMatrix4(t2.projectionMatrix);
    }
    unproject(t2) {
      return this.applyMatrix4(t2.projectionMatrixInverse).applyMatrix4(t2.matrixWorld);
    }
    transformDirection(t2) {
      const e2 = this.x, s2 = this.y, i2 = this.z, r2 = t2.elements;
      return this.x = r2[0] * e2 + r2[4] * s2 + r2[8] * i2, this.y = r2[1] * e2 + r2[5] * s2 + r2[9] * i2, this.z = r2[2] * e2 + r2[6] * s2 + r2[10] * i2, this.normalize();
    }
    divide(t2) {
      return this.x /= t2.x, this.y /= t2.y, this.z /= t2.z, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this;
    }
    clamp(t2, e2) {
      return this.x = qs(this.x, t2.x, e2.x), this.y = qs(this.y, t2.y, e2.y), this.z = qs(this.z, t2.z, e2.z), this;
    }
    clampScalar(t2, e2) {
      return this.x = qs(this.x, t2, e2), this.y = qs(this.y, t2, e2), this.z = qs(this.z, t2, e2), this;
    }
    clampLength(t2, e2) {
      const s2 = this.length();
      return this.divideScalar(s2 || 1).multiplyScalar(qs(s2, t2, e2));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }
    dot(t2) {
      return this.x * t2.x + this.y * t2.y + this.z * t2.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e2) {
      return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this.z += (t2.z - this.z) * e2, this;
    }
    lerpVectors(t2, e2, s2) {
      return this.x = t2.x + (e2.x - t2.x) * s2, this.y = t2.y + (e2.y - t2.y) * s2, this.z = t2.z + (e2.z - t2.z) * s2, this;
    }
    cross(t2) {
      return this.crossVectors(this, t2);
    }
    crossVectors(t2, e2) {
      const s2 = t2.x, i2 = t2.y, r2 = t2.z, n2 = e2.x, a2 = e2.y, o2 = e2.z;
      return this.x = i2 * o2 - r2 * a2, this.y = r2 * n2 - s2 * o2, this.z = s2 * a2 - i2 * n2, this;
    }
    projectOnVector(t2) {
      const e2 = t2.lengthSq();
      if (0 === e2) return this.set(0, 0, 0);
      const s2 = t2.dot(this) / e2;
      return this.copy(t2).multiplyScalar(s2);
    }
    projectOnPlane(t2) {
      return ti.copy(this).projectOnVector(t2), this.sub(ti);
    }
    reflect(t2) {
      return this.sub(ti.copy(t2).multiplyScalar(2 * this.dot(t2)));
    }
    angleTo(t2) {
      const e2 = Math.sqrt(this.lengthSq() * t2.lengthSq());
      if (0 === e2) return Math.PI / 2;
      const s2 = this.dot(t2) / e2;
      return Math.acos(qs(s2, -1, 1));
    }
    distanceTo(t2) {
      return Math.sqrt(this.distanceToSquared(t2));
    }
    distanceToSquared(t2) {
      const e2 = this.x - t2.x, s2 = this.y - t2.y, i2 = this.z - t2.z;
      return e2 * e2 + s2 * s2 + i2 * i2;
    }
    manhattanDistanceTo(t2) {
      return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y) + Math.abs(this.z - t2.z);
    }
    setFromSpherical(t2) {
      return this.setFromSphericalCoords(t2.radius, t2.phi, t2.theta);
    }
    setFromSphericalCoords(t2, e2, s2) {
      const i2 = Math.sin(e2) * t2;
      return this.x = i2 * Math.sin(s2), this.y = Math.cos(e2) * t2, this.z = i2 * Math.cos(s2), this;
    }
    setFromCylindrical(t2) {
      return this.setFromCylindricalCoords(t2.radius, t2.theta, t2.y);
    }
    setFromCylindricalCoords(t2, e2, s2) {
      return this.x = t2 * Math.sin(e2), this.y = s2, this.z = t2 * Math.cos(e2), this;
    }
    setFromMatrixPosition(t2) {
      const e2 = t2.elements;
      return this.x = e2[12], this.y = e2[13], this.z = e2[14], this;
    }
    setFromMatrixScale(t2) {
      const e2 = this.setFromMatrixColumn(t2, 0).length(), s2 = this.setFromMatrixColumn(t2, 1).length(), i2 = this.setFromMatrixColumn(t2, 2).length();
      return this.x = e2, this.y = s2, this.z = i2, this;
    }
    setFromMatrixColumn(t2, e2) {
      return this.fromArray(t2.elements, 4 * e2);
    }
    setFromMatrix3Column(t2, e2) {
      return this.fromArray(t2.elements, 3 * e2);
    }
    setFromEuler(t2) {
      return this.x = t2._x, this.y = t2._y, this.z = t2._z, this;
    }
    setFromColor(t2) {
      return this.x = t2.r, this.y = t2.g, this.z = t2.b, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y && t2.z === this.z;
    }
    fromArray(t2, e2 = 0) {
      return this.x = t2[e2], this.y = t2[e2 + 1], this.z = t2[e2 + 2], this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this.x, t2[e2 + 1] = this.y, t2[e2 + 2] = this.z, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this.x = t2.getX(e2), this.y = t2.getY(e2), this.z = t2.getZ(e2), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
    }
    randomDirection() {
      const t2 = Math.random() * Math.PI * 2, e2 = 2 * Math.random() - 1, s2 = Math.sqrt(1 - e2 * e2);
      return this.x = s2 * Math.cos(t2), this.y = e2, this.z = s2 * Math.sin(t2), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  };
  var ti = new Ks();
  var ei = new Qs();
  var si = class _si {
    constructor(t2, e2, s2, i2, r2, n2, a2, o2, h2) {
      _si.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], void 0 !== t2 && this.set(t2, e2, s2, i2, r2, n2, a2, o2, h2);
    }
    set(t2, e2, s2, i2, r2, n2, a2, o2, h2) {
      const l2 = this.elements;
      return l2[0] = t2, l2[1] = i2, l2[2] = a2, l2[3] = e2, l2[4] = r2, l2[5] = o2, l2[6] = s2, l2[7] = n2, l2[8] = h2, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(t2) {
      const e2 = this.elements, s2 = t2.elements;
      return e2[0] = s2[0], e2[1] = s2[1], e2[2] = s2[2], e2[3] = s2[3], e2[4] = s2[4], e2[5] = s2[5], e2[6] = s2[6], e2[7] = s2[7], e2[8] = s2[8], this;
    }
    extractBasis(t2, e2, s2) {
      return t2.setFromMatrix3Column(this, 0), e2.setFromMatrix3Column(this, 1), s2.setFromMatrix3Column(this, 2), this;
    }
    setFromMatrix4(t2) {
      const e2 = t2.elements;
      return this.set(e2[0], e2[4], e2[8], e2[1], e2[5], e2[9], e2[2], e2[6], e2[10]), this;
    }
    multiply(t2) {
      return this.multiplyMatrices(this, t2);
    }
    premultiply(t2) {
      return this.multiplyMatrices(t2, this);
    }
    multiplyMatrices(t2, e2) {
      const s2 = t2.elements, i2 = e2.elements, r2 = this.elements, n2 = s2[0], a2 = s2[3], o2 = s2[6], h2 = s2[1], l2 = s2[4], c2 = s2[7], u2 = s2[2], d2 = s2[5], p2 = s2[8], m2 = i2[0], y2 = i2[3], g2 = i2[6], f2 = i2[1], x2 = i2[4], b2 = i2[7], v2 = i2[2], w2 = i2[5], M2 = i2[8];
      return r2[0] = n2 * m2 + a2 * f2 + o2 * v2, r2[3] = n2 * y2 + a2 * x2 + o2 * w2, r2[6] = n2 * g2 + a2 * b2 + o2 * M2, r2[1] = h2 * m2 + l2 * f2 + c2 * v2, r2[4] = h2 * y2 + l2 * x2 + c2 * w2, r2[7] = h2 * g2 + l2 * b2 + c2 * M2, r2[2] = u2 * m2 + d2 * f2 + p2 * v2, r2[5] = u2 * y2 + d2 * x2 + p2 * w2, r2[8] = u2 * g2 + d2 * b2 + p2 * M2, this;
    }
    multiplyScalar(t2) {
      const e2 = this.elements;
      return e2[0] *= t2, e2[3] *= t2, e2[6] *= t2, e2[1] *= t2, e2[4] *= t2, e2[7] *= t2, e2[2] *= t2, e2[5] *= t2, e2[8] *= t2, this;
    }
    determinant() {
      const t2 = this.elements, e2 = t2[0], s2 = t2[1], i2 = t2[2], r2 = t2[3], n2 = t2[4], a2 = t2[5], o2 = t2[6], h2 = t2[7], l2 = t2[8];
      return e2 * n2 * l2 - e2 * a2 * h2 - s2 * r2 * l2 + s2 * a2 * o2 + i2 * r2 * h2 - i2 * n2 * o2;
    }
    invert() {
      const t2 = this.elements, e2 = t2[0], s2 = t2[1], i2 = t2[2], r2 = t2[3], n2 = t2[4], a2 = t2[5], o2 = t2[6], h2 = t2[7], l2 = t2[8], c2 = l2 * n2 - a2 * h2, u2 = a2 * o2 - l2 * r2, d2 = h2 * r2 - n2 * o2, p2 = e2 * c2 + s2 * u2 + i2 * d2;
      if (0 === p2) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const m2 = 1 / p2;
      return t2[0] = c2 * m2, t2[1] = (i2 * h2 - l2 * s2) * m2, t2[2] = (a2 * s2 - i2 * n2) * m2, t2[3] = u2 * m2, t2[4] = (l2 * e2 - i2 * o2) * m2, t2[5] = (i2 * r2 - a2 * e2) * m2, t2[6] = d2 * m2, t2[7] = (s2 * o2 - h2 * e2) * m2, t2[8] = (n2 * e2 - s2 * r2) * m2, this;
    }
    transpose() {
      let t2;
      const e2 = this.elements;
      return t2 = e2[1], e2[1] = e2[3], e2[3] = t2, t2 = e2[2], e2[2] = e2[6], e2[6] = t2, t2 = e2[5], e2[5] = e2[7], e2[7] = t2, this;
    }
    getNormalMatrix(t2) {
      return this.setFromMatrix4(t2).invert().transpose();
    }
    transposeIntoArray(t2) {
      const e2 = this.elements;
      return t2[0] = e2[0], t2[1] = e2[3], t2[2] = e2[6], t2[3] = e2[1], t2[4] = e2[4], t2[5] = e2[7], t2[6] = e2[2], t2[7] = e2[5], t2[8] = e2[8], this;
    }
    setUvTransform(t2, e2, s2, i2, r2, n2, a2) {
      const o2 = Math.cos(r2), h2 = Math.sin(r2);
      return this.set(s2 * o2, s2 * h2, -s2 * (o2 * n2 + h2 * a2) + n2 + t2, -i2 * h2, i2 * o2, -i2 * (-h2 * n2 + o2 * a2) + a2 + e2, 0, 0, 1), this;
    }
    scale(t2, e2) {
      return this.premultiply(ii.makeScale(t2, e2)), this;
    }
    rotate(t2) {
      return this.premultiply(ii.makeRotation(-t2)), this;
    }
    translate(t2, e2) {
      return this.premultiply(ii.makeTranslation(t2, e2)), this;
    }
    makeTranslation(t2, e2) {
      return t2.isVector2 ? this.set(1, 0, t2.x, 0, 1, t2.y, 0, 0, 1) : this.set(1, 0, t2, 0, 1, e2, 0, 0, 1), this;
    }
    makeRotation(t2) {
      const e2 = Math.cos(t2), s2 = Math.sin(t2);
      return this.set(e2, -s2, 0, s2, e2, 0, 0, 0, 1), this;
    }
    makeScale(t2, e2) {
      return this.set(t2, 0, 0, 0, e2, 0, 0, 0, 1), this;
    }
    equals(t2) {
      const e2 = this.elements, s2 = t2.elements;
      for (let t3 = 0; t3 < 9; t3++) if (e2[t3] !== s2[t3]) return false;
      return true;
    }
    fromArray(t2, e2 = 0) {
      for (let s2 = 0; s2 < 9; s2++) this.elements[s2] = t2[s2 + e2];
      return this;
    }
    toArray(t2 = [], e2 = 0) {
      const s2 = this.elements;
      return t2[e2] = s2[0], t2[e2 + 1] = s2[1], t2[e2 + 2] = s2[2], t2[e2 + 3] = s2[3], t2[e2 + 4] = s2[4], t2[e2 + 5] = s2[5], t2[e2 + 6] = s2[6], t2[e2 + 7] = s2[7], t2[e2 + 8] = s2[8], t2;
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  };
  var ii = new si();
  function ri(t2) {
    for (let e2 = t2.length - 1; e2 >= 0; --e2) if (t2[e2] >= 65535) return true;
    return false;
  }
  function oi(t2) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", t2);
  }
  function hi() {
    const t2 = oi("canvas");
    return t2.style.display = "block", t2;
  }
  var li = {};
  function ci(t2) {
    t2 in li || (li[t2] = true, console.warn(t2));
  }
  function ui(t2, e2, s2) {
    return new Promise(function(i2, r2) {
      setTimeout(function n2() {
        switch (t2.clientWaitSync(e2, t2.SYNC_FLUSH_COMMANDS_BIT, 0)) {
          case t2.WAIT_FAILED:
            r2();
            break;
          case t2.TIMEOUT_EXPIRED:
            setTimeout(n2, s2);
            break;
          default:
            i2();
        }
      }, s2);
    });
  }
  var di = new si().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322);
  var pi = new si().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
  function mi() {
    const t2 = { enabled: true, workingColorSpace: Ge, spaces: {}, convert: function(t3, e3, s3) {
      return false !== this.enabled && e3 !== s3 && e3 && s3 ? (this.spaces[e3].transfer === Qe && (t3.r = gi(t3.r), t3.g = gi(t3.g), t3.b = gi(t3.b)), this.spaces[e3].primaries !== this.spaces[s3].primaries && (t3.applyMatrix3(this.spaces[e3].toXYZ), t3.applyMatrix3(this.spaces[s3].fromXYZ)), this.spaces[s3].transfer === Qe && (t3.r = fi(t3.r), t3.g = fi(t3.g), t3.b = fi(t3.b)), t3) : t3;
    }, workingToColorSpace: function(t3, e3) {
      return this.convert(t3, this.workingColorSpace, e3);
    }, colorSpaceToWorking: function(t3, e3) {
      return this.convert(t3, e3, this.workingColorSpace);
    }, getPrimaries: function(t3) {
      return this.spaces[t3].primaries;
    }, getTransfer: function(t3) {
      return "" === t3 ? $e : this.spaces[t3].transfer;
    }, getToneMappingMode: function(t3) {
      return this.spaces[t3].outputColorSpaceConfig.toneMappingMode || "standard";
    }, getLuminanceCoefficients: function(t3, e3 = this.workingColorSpace) {
      return t3.fromArray(this.spaces[e3].luminanceCoefficients);
    }, define: function(t3) {
      Object.assign(this.spaces, t3);
    }, _getMatrix: function(t3, e3, s3) {
      return t3.copy(this.spaces[e3].toXYZ).multiply(this.spaces[s3].fromXYZ);
    }, _getDrawingBufferColorSpace: function(t3) {
      return this.spaces[t3].outputColorSpaceConfig.drawingBufferColorSpace;
    }, _getUnpackColorSpace: function(t3 = this.workingColorSpace) {
      return this.spaces[t3].workingColorSpaceConfig.unpackColorSpace;
    }, fromWorkingColorSpace: function(e3, s3) {
      return ci("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), t2.workingToColorSpace(e3, s3);
    }, toWorkingColorSpace: function(e3, s3) {
      return ci("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), t2.colorSpaceToWorking(e3, s3);
    } }, e2 = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], s2 = [0.2126, 0.7152, 0.0722], i2 = [0.3127, 0.329];
    return t2.define({ [Ge]: { primaries: e2, whitePoint: i2, transfer: $e, toXYZ: di, fromXYZ: pi, luminanceCoefficients: s2, workingColorSpaceConfig: { unpackColorSpace: Ze }, outputColorSpaceConfig: { drawingBufferColorSpace: Ze } }, [Ze]: { primaries: e2, whitePoint: i2, transfer: Qe, toXYZ: di, fromXYZ: pi, luminanceCoefficients: s2, outputColorSpaceConfig: { drawingBufferColorSpace: Ze } } }), t2;
  }
  var yi = mi();
  function gi(t2) {
    return t2 < 0.04045 ? 0.0773993808 * t2 : Math.pow(0.9478672986 * t2 + 0.0521327014, 2.4);
  }
  function fi(t2) {
    return t2 < 31308e-7 ? 12.92 * t2 : 1.055 * Math.pow(t2, 0.41666) - 0.055;
  }
  var xi;
  var bi = class {
    static getDataURL(t2, e2 = "image/png") {
      if (/^data:/i.test(t2.src)) return t2.src;
      if ("undefined" == typeof HTMLCanvasElement) return t2.src;
      let s2;
      if (t2 instanceof HTMLCanvasElement) s2 = t2;
      else {
        void 0 === xi && (xi = oi("canvas")), xi.width = t2.width, xi.height = t2.height;
        const e3 = xi.getContext("2d");
        t2 instanceof ImageData ? e3.putImageData(t2, 0, 0) : e3.drawImage(t2, 0, 0, t2.width, t2.height), s2 = xi;
      }
      return s2.toDataURL(e2);
    }
    static sRGBToLinear(t2) {
      if ("undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t2 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t2 instanceof ImageBitmap) {
        const e2 = oi("canvas");
        e2.width = t2.width, e2.height = t2.height;
        const s2 = e2.getContext("2d");
        s2.drawImage(t2, 0, 0, t2.width, t2.height);
        const i2 = s2.getImageData(0, 0, t2.width, t2.height), r2 = i2.data;
        for (let t3 = 0; t3 < r2.length; t3++) r2[t3] = 255 * gi(r2[t3] / 255);
        return s2.putImageData(i2, 0, 0), e2;
      }
      if (t2.data) {
        const e2 = t2.data.slice(0);
        for (let t3 = 0; t3 < e2.length; t3++) e2 instanceof Uint8Array || e2 instanceof Uint8ClampedArray ? e2[t3] = Math.floor(255 * gi(e2[t3] / 255)) : e2[t3] = gi(e2[t3]);
        return { data: e2, width: t2.width, height: t2.height };
      }
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t2;
    }
  };
  var vi = 0;
  var wi = class {
    constructor(t2 = null) {
      this.isSource = true, Object.defineProperty(this, "id", { value: vi++ }), this.uuid = Hs(), this.data = t2, this.dataReady = true, this.version = 0;
    }
    getSize(t2) {
      const e2 = this.data;
      return "undefined" != typeof HTMLVideoElement && e2 instanceof HTMLVideoElement ? t2.set(e2.videoWidth, e2.videoHeight, 0) : e2 instanceof VideoFrame ? t2.set(e2.displayHeight, e2.displayWidth, 0) : null !== e2 ? t2.set(e2.width, e2.height, e2.depth || 0) : t2.set(0, 0, 0), t2;
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
    toJSON(t2) {
      const e2 = void 0 === t2 || "string" == typeof t2;
      if (!e2 && void 0 !== t2.images[this.uuid]) return t2.images[this.uuid];
      const s2 = { uuid: this.uuid, url: "" }, i2 = this.data;
      if (null !== i2) {
        let t3;
        if (Array.isArray(i2)) {
          t3 = [];
          for (let e3 = 0, s3 = i2.length; e3 < s3; e3++) i2[e3].isDataTexture ? t3.push(Mi(i2[e3].image)) : t3.push(Mi(i2[e3]));
        } else t3 = Mi(i2);
        s2.url = t3;
      }
      return e2 || (t2.images[this.uuid] = s2), s2;
    }
  };
  function Mi(t2) {
    return "undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t2 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t2 instanceof ImageBitmap ? bi.getDataURL(t2) : t2.data ? { data: Array.from(t2.data), width: t2.width, height: t2.height, type: t2.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }
  var Si = 0;
  var _i = new Ks();
  var Ai = class _Ai extends Ls {
    constructor(t2 = _Ai.DEFAULT_IMAGE, e2 = _Ai.DEFAULT_MAPPING, s2 = 1001, i2 = 1001, r2 = 1006, n2 = 1008, a2 = 1023, o2 = 1009, h2 = _Ai.DEFAULT_ANISOTROPY, l2 = "") {
      super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Si++ }), this.uuid = Hs(), this.name = "", this.source = new wi(t2), this.mipmaps = [], this.mapping = e2, this.channel = 0, this.wrapS = s2, this.wrapT = i2, this.magFilter = r2, this.minFilter = n2, this.anisotropy = h2, this.format = a2, this.internalFormat = null, this.type = o2, this.offset = new $s(0, 0), this.repeat = new $s(1, 1), this.center = new $s(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new si(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = l2, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(t2 && t2.depth && t2.depth > 1), this.pmremVersion = 0;
    }
    get width() {
      return this.source.getSize(_i).x;
    }
    get height() {
      return this.source.getSize(_i).y;
    }
    get depth() {
      return this.source.getSize(_i).z;
    }
    get image() {
      return this.source.data;
    }
    set image(t2 = null) {
      this.source.data = t2;
    }
    updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    addUpdateRange(t2, e2) {
      this.updateRanges.push({ start: t2, count: e2 });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.name = t2.name, this.source = t2.source, this.mipmaps = t2.mipmaps.slice(0), this.mapping = t2.mapping, this.channel = t2.channel, this.wrapS = t2.wrapS, this.wrapT = t2.wrapT, this.magFilter = t2.magFilter, this.minFilter = t2.minFilter, this.anisotropy = t2.anisotropy, this.format = t2.format, this.internalFormat = t2.internalFormat, this.type = t2.type, this.offset.copy(t2.offset), this.repeat.copy(t2.repeat), this.center.copy(t2.center), this.rotation = t2.rotation, this.matrixAutoUpdate = t2.matrixAutoUpdate, this.matrix.copy(t2.matrix), this.generateMipmaps = t2.generateMipmaps, this.premultiplyAlpha = t2.premultiplyAlpha, this.flipY = t2.flipY, this.unpackAlignment = t2.unpackAlignment, this.colorSpace = t2.colorSpace, this.renderTarget = t2.renderTarget, this.isRenderTargetTexture = t2.isRenderTargetTexture, this.isArrayTexture = t2.isArrayTexture, this.userData = JSON.parse(JSON.stringify(t2.userData)), this.needsUpdate = true, this;
    }
    setValues(t2) {
      for (const e2 in t2) {
        const s2 = t2[e2];
        if (void 0 === s2) {
          console.warn(`THREE.Texture.setValues(): parameter '${e2}' has value of undefined.`);
          continue;
        }
        const i2 = this[e2];
        void 0 !== i2 ? i2 && s2 && i2.isVector2 && s2.isVector2 || i2 && s2 && i2.isVector3 && s2.isVector3 || i2 && s2 && i2.isMatrix3 && s2.isMatrix3 ? i2.copy(s2) : this[e2] = s2 : console.warn(`THREE.Texture.setValues(): property '${e2}' does not exist.`);
      }
    }
    toJSON(t2) {
      const e2 = void 0 === t2 || "string" == typeof t2;
      if (!e2 && void 0 !== t2.textures[this.uuid]) return t2.textures[this.uuid];
      const s2 = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t2).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
      return Object.keys(this.userData).length > 0 && (s2.userData = this.userData), e2 || (t2.textures[this.uuid] = s2), s2;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(t2) {
      if (this.mapping !== ot) return t2;
      if (t2.applyMatrix3(this.matrix), t2.x < 0 || t2.x > 1) switch (this.wrapS) {
        case pt:
          t2.x = t2.x - Math.floor(t2.x);
          break;
        case mt:
          t2.x = t2.x < 0 ? 0 : 1;
          break;
        case yt:
          1 === Math.abs(Math.floor(t2.x) % 2) ? t2.x = Math.ceil(t2.x) - t2.x : t2.x = t2.x - Math.floor(t2.x);
      }
      if (t2.y < 0 || t2.y > 1) switch (this.wrapT) {
        case pt:
          t2.y = t2.y - Math.floor(t2.y);
          break;
        case mt:
          t2.y = t2.y < 0 ? 0 : 1;
          break;
        case yt:
          1 === Math.abs(Math.floor(t2.y) % 2) ? t2.y = Math.ceil(t2.y) - t2.y : t2.y = t2.y - Math.floor(t2.y);
      }
      return this.flipY && (t2.y = 1 - t2.y), t2;
    }
    set needsUpdate(t2) {
      true === t2 && (this.version++, this.source.needsUpdate = true);
    }
    set needsPMREMUpdate(t2) {
      true === t2 && this.pmremVersion++;
    }
  };
  Ai.DEFAULT_IMAGE = null, Ai.DEFAULT_MAPPING = ot, Ai.DEFAULT_ANISOTROPY = 1;
  var Ti = class _Ti {
    constructor(t2 = 0, e2 = 0, s2 = 0, i2 = 1) {
      _Ti.prototype.isVector4 = true, this.x = t2, this.y = e2, this.z = s2, this.w = i2;
    }
    get width() {
      return this.z;
    }
    set width(t2) {
      this.z = t2;
    }
    get height() {
      return this.w;
    }
    set height(t2) {
      this.w = t2;
    }
    set(t2, e2, s2, i2) {
      return this.x = t2, this.y = e2, this.z = s2, this.w = i2, this;
    }
    setScalar(t2) {
      return this.x = t2, this.y = t2, this.z = t2, this.w = t2, this;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setZ(t2) {
      return this.z = t2, this;
    }
    setW(t2) {
      return this.w = t2, this;
    }
    setComponent(t2, e2) {
      switch (t2) {
        case 0:
          this.x = e2;
          break;
        case 1:
          this.y = e2;
          break;
        case 2:
          this.z = e2;
          break;
        case 3:
          this.w = e2;
          break;
        default:
          throw new Error("index is out of range: " + t2);
      }
      return this;
    }
    getComponent(t2) {
      switch (t2) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + t2);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(t2) {
      return this.x = t2.x, this.y = t2.y, this.z = t2.z, this.w = void 0 !== t2.w ? t2.w : 1, this;
    }
    add(t2) {
      return this.x += t2.x, this.y += t2.y, this.z += t2.z, this.w += t2.w, this;
    }
    addScalar(t2) {
      return this.x += t2, this.y += t2, this.z += t2, this.w += t2, this;
    }
    addVectors(t2, e2) {
      return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this.z = t2.z + e2.z, this.w = t2.w + e2.w, this;
    }
    addScaledVector(t2, e2) {
      return this.x += t2.x * e2, this.y += t2.y * e2, this.z += t2.z * e2, this.w += t2.w * e2, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this.w -= t2.w, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this.z -= t2, this.w -= t2, this;
    }
    subVectors(t2, e2) {
      return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this.z = t2.z - e2.z, this.w = t2.w - e2.w, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this.w *= t2.w, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this.z *= t2, this.w *= t2, this;
    }
    applyMatrix4(t2) {
      const e2 = this.x, s2 = this.y, i2 = this.z, r2 = this.w, n2 = t2.elements;
      return this.x = n2[0] * e2 + n2[4] * s2 + n2[8] * i2 + n2[12] * r2, this.y = n2[1] * e2 + n2[5] * s2 + n2[9] * i2 + n2[13] * r2, this.z = n2[2] * e2 + n2[6] * s2 + n2[10] * i2 + n2[14] * r2, this.w = n2[3] * e2 + n2[7] * s2 + n2[11] * i2 + n2[15] * r2, this;
    }
    divide(t2) {
      return this.x /= t2.x, this.y /= t2.y, this.z /= t2.z, this.w /= t2.w, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    setAxisAngleFromQuaternion(t2) {
      this.w = 2 * Math.acos(t2.w);
      const e2 = Math.sqrt(1 - t2.w * t2.w);
      return e2 < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t2.x / e2, this.y = t2.y / e2, this.z = t2.z / e2), this;
    }
    setAxisAngleFromRotationMatrix(t2) {
      let e2, s2, i2, r2;
      const n2 = 0.01, a2 = 0.1, o2 = t2.elements, h2 = o2[0], l2 = o2[4], c2 = o2[8], u2 = o2[1], d2 = o2[5], p2 = o2[9], m2 = o2[2], y2 = o2[6], g2 = o2[10];
      if (Math.abs(l2 - u2) < n2 && Math.abs(c2 - m2) < n2 && Math.abs(p2 - y2) < n2) {
        if (Math.abs(l2 + u2) < a2 && Math.abs(c2 + m2) < a2 && Math.abs(p2 + y2) < a2 && Math.abs(h2 + d2 + g2 - 3) < a2) return this.set(1, 0, 0, 0), this;
        e2 = Math.PI;
        const t3 = (h2 + 1) / 2, o3 = (d2 + 1) / 2, f3 = (g2 + 1) / 2, x2 = (l2 + u2) / 4, b2 = (c2 + m2) / 4, v2 = (p2 + y2) / 4;
        return t3 > o3 && t3 > f3 ? t3 < n2 ? (s2 = 0, i2 = 0.707106781, r2 = 0.707106781) : (s2 = Math.sqrt(t3), i2 = x2 / s2, r2 = b2 / s2) : o3 > f3 ? o3 < n2 ? (s2 = 0.707106781, i2 = 0, r2 = 0.707106781) : (i2 = Math.sqrt(o3), s2 = x2 / i2, r2 = v2 / i2) : f3 < n2 ? (s2 = 0.707106781, i2 = 0.707106781, r2 = 0) : (r2 = Math.sqrt(f3), s2 = b2 / r2, i2 = v2 / r2), this.set(s2, i2, r2, e2), this;
      }
      let f2 = Math.sqrt((y2 - p2) * (y2 - p2) + (c2 - m2) * (c2 - m2) + (u2 - l2) * (u2 - l2));
      return Math.abs(f2) < 1e-3 && (f2 = 1), this.x = (y2 - p2) / f2, this.y = (c2 - m2) / f2, this.z = (u2 - l2) / f2, this.w = Math.acos((h2 + d2 + g2 - 1) / 2), this;
    }
    setFromMatrixPosition(t2) {
      const e2 = t2.elements;
      return this.x = e2[12], this.y = e2[13], this.z = e2[14], this.w = e2[15], this;
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this.w = Math.min(this.w, t2.w), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this.w = Math.max(this.w, t2.w), this;
    }
    clamp(t2, e2) {
      return this.x = qs(this.x, t2.x, e2.x), this.y = qs(this.y, t2.y, e2.y), this.z = qs(this.z, t2.z, e2.z), this.w = qs(this.w, t2.w, e2.w), this;
    }
    clampScalar(t2, e2) {
      return this.x = qs(this.x, t2, e2), this.y = qs(this.y, t2, e2), this.z = qs(this.z, t2, e2), this.w = qs(this.w, t2, e2), this;
    }
    clampLength(t2, e2) {
      const s2 = this.length();
      return this.divideScalar(s2 || 1).multiplyScalar(qs(s2, t2, e2));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
    }
    dot(t2) {
      return this.x * t2.x + this.y * t2.y + this.z * t2.z + this.w * t2.w;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e2) {
      return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this.z += (t2.z - this.z) * e2, this.w += (t2.w - this.w) * e2, this;
    }
    lerpVectors(t2, e2, s2) {
      return this.x = t2.x + (e2.x - t2.x) * s2, this.y = t2.y + (e2.y - t2.y) * s2, this.z = t2.z + (e2.z - t2.z) * s2, this.w = t2.w + (e2.w - t2.w) * s2, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y && t2.z === this.z && t2.w === this.w;
    }
    fromArray(t2, e2 = 0) {
      return this.x = t2[e2], this.y = t2[e2 + 1], this.z = t2[e2 + 2], this.w = t2[e2 + 3], this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this.x, t2[e2 + 1] = this.y, t2[e2 + 2] = this.z, t2[e2 + 3] = this.w, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this.x = t2.getX(e2), this.y = t2.getY(e2), this.z = t2.getZ(e2), this.w = t2.getW(e2), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  };
  var zi = class extends Ls {
    constructor(t2 = 1, e2 = 1, s2 = {}) {
      super(), s2 = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: wt, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: false }, s2), this.isRenderTarget = true, this.width = t2, this.height = e2, this.depth = s2.depth, this.scissor = new Ti(0, 0, t2, e2), this.scissorTest = false, this.viewport = new Ti(0, 0, t2, e2);
      const i2 = { width: t2, height: e2, depth: s2.depth }, r2 = new Ai(i2);
      this.textures = [];
      const n2 = s2.count;
      for (let t3 = 0; t3 < n2; t3++) this.textures[t3] = r2.clone(), this.textures[t3].isRenderTargetTexture = true, this.textures[t3].renderTarget = this;
      this._setTextureOptions(s2), this.depthBuffer = s2.depthBuffer, this.stencilBuffer = s2.stencilBuffer, this.resolveDepthBuffer = s2.resolveDepthBuffer, this.resolveStencilBuffer = s2.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = s2.depthTexture, this.samples = s2.samples, this.multiview = s2.multiview;
    }
    _setTextureOptions(t2 = {}) {
      const e2 = { minFilter: wt, generateMipmaps: false, flipY: false, internalFormat: null };
      void 0 !== t2.mapping && (e2.mapping = t2.mapping), void 0 !== t2.wrapS && (e2.wrapS = t2.wrapS), void 0 !== t2.wrapT && (e2.wrapT = t2.wrapT), void 0 !== t2.wrapR && (e2.wrapR = t2.wrapR), void 0 !== t2.magFilter && (e2.magFilter = t2.magFilter), void 0 !== t2.minFilter && (e2.minFilter = t2.minFilter), void 0 !== t2.format && (e2.format = t2.format), void 0 !== t2.type && (e2.type = t2.type), void 0 !== t2.anisotropy && (e2.anisotropy = t2.anisotropy), void 0 !== t2.colorSpace && (e2.colorSpace = t2.colorSpace), void 0 !== t2.flipY && (e2.flipY = t2.flipY), void 0 !== t2.generateMipmaps && (e2.generateMipmaps = t2.generateMipmaps), void 0 !== t2.internalFormat && (e2.internalFormat = t2.internalFormat);
      for (let t3 = 0; t3 < this.textures.length; t3++) {
        this.textures[t3].setValues(e2);
      }
    }
    get texture() {
      return this.textures[0];
    }
    set texture(t2) {
      this.textures[0] = t2;
    }
    set depthTexture(t2) {
      null !== this._depthTexture && (this._depthTexture.renderTarget = null), null !== t2 && (t2.renderTarget = this), this._depthTexture = t2;
    }
    get depthTexture() {
      return this._depthTexture;
    }
    setSize(t2, e2, s2 = 1) {
      if (this.width !== t2 || this.height !== e2 || this.depth !== s2) {
        this.width = t2, this.height = e2, this.depth = s2;
        for (let i2 = 0, r2 = this.textures.length; i2 < r2; i2++) this.textures[i2].image.width = t2, this.textures[i2].image.height = e2, this.textures[i2].image.depth = s2, this.textures[i2].isArrayTexture = this.textures[i2].image.depth > 1;
        this.dispose();
      }
      this.viewport.set(0, 0, t2, e2), this.scissor.set(0, 0, t2, e2);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.width = t2.width, this.height = t2.height, this.depth = t2.depth, this.scissor.copy(t2.scissor), this.scissorTest = t2.scissorTest, this.viewport.copy(t2.viewport), this.textures.length = 0;
      for (let e2 = 0, s2 = t2.textures.length; e2 < s2; e2++) {
        this.textures[e2] = t2.textures[e2].clone(), this.textures[e2].isRenderTargetTexture = true, this.textures[e2].renderTarget = this;
        const s3 = Object.assign({}, t2.textures[e2].image);
        this.textures[e2].source = new wi(s3);
      }
      return this.depthBuffer = t2.depthBuffer, this.stencilBuffer = t2.stencilBuffer, this.resolveDepthBuffer = t2.resolveDepthBuffer, this.resolveStencilBuffer = t2.resolveStencilBuffer, null !== t2.depthTexture && (this.depthTexture = t2.depthTexture.clone()), this.samples = t2.samples, this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
  var Ci = class extends zi {
    constructor(t2 = 1, e2 = 1, s2 = {}) {
      super(t2, e2, s2), this.isWebGLRenderTarget = true;
    }
  };
  var Ii = class extends Ai {
    constructor(t2 = null, e2 = 1, s2 = 1, i2 = 1) {
      super(null), this.isDataArrayTexture = true, this.image = { data: t2, width: e2, height: s2, depth: i2 }, this.magFilter = gt, this.minFilter = gt, this.wrapR = mt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
    }
    addLayerUpdate(t2) {
      this.layerUpdates.add(t2);
    }
    clearLayerUpdates() {
      this.layerUpdates.clear();
    }
  };
  var ki = class extends Ai {
    constructor(t2 = null, e2 = 1, s2 = 1, i2 = 1) {
      super(null), this.isData3DTexture = true, this.image = { data: t2, width: e2, height: s2, depth: i2 }, this.magFilter = gt, this.minFilter = gt, this.wrapR = mt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  };
  var Ri = class {
    constructor(t2 = new Ks(1 / 0, 1 / 0, 1 / 0), e2 = new Ks(-1 / 0, -1 / 0, -1 / 0)) {
      this.isBox3 = true, this.min = t2, this.max = e2;
    }
    set(t2, e2) {
      return this.min.copy(t2), this.max.copy(e2), this;
    }
    setFromArray(t2) {
      this.makeEmpty();
      for (let e2 = 0, s2 = t2.length; e2 < s2; e2 += 3) this.expandByPoint(Oi.fromArray(t2, e2));
      return this;
    }
    setFromBufferAttribute(t2) {
      this.makeEmpty();
      for (let e2 = 0, s2 = t2.count; e2 < s2; e2++) this.expandByPoint(Oi.fromBufferAttribute(t2, e2));
      return this;
    }
    setFromPoints(t2) {
      this.makeEmpty();
      for (let e2 = 0, s2 = t2.length; e2 < s2; e2++) this.expandByPoint(t2[e2]);
      return this;
    }
    setFromCenterAndSize(t2, e2) {
      const s2 = Oi.copy(e2).multiplyScalar(0.5);
      return this.min.copy(t2).sub(s2), this.max.copy(t2).add(s2), this;
    }
    setFromObject(t2, e2 = false) {
      return this.makeEmpty(), this.expandByObject(t2, e2);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.min.copy(t2.min), this.max.copy(t2.max), this;
    }
    makeEmpty() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(t2) {
      return this.isEmpty() ? t2.set(0, 0, 0) : t2.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(t2) {
      return this.isEmpty() ? t2.set(0, 0, 0) : t2.subVectors(this.max, this.min);
    }
    expandByPoint(t2) {
      return this.min.min(t2), this.max.max(t2), this;
    }
    expandByVector(t2) {
      return this.min.sub(t2), this.max.add(t2), this;
    }
    expandByScalar(t2) {
      return this.min.addScalar(-t2), this.max.addScalar(t2), this;
    }
    expandByObject(t2, e2 = false) {
      t2.updateWorldMatrix(false, false);
      const s2 = t2.geometry;
      if (void 0 !== s2) {
        const i3 = s2.getAttribute("position");
        if (true === e2 && void 0 !== i3 && true !== t2.isInstancedMesh) for (let e3 = 0, s3 = i3.count; e3 < s3; e3++) true === t2.isMesh ? t2.getVertexPosition(e3, Oi) : Oi.fromBufferAttribute(i3, e3), Oi.applyMatrix4(t2.matrixWorld), this.expandByPoint(Oi);
        else void 0 !== t2.boundingBox ? (null === t2.boundingBox && t2.computeBoundingBox(), Ni.copy(t2.boundingBox)) : (null === s2.boundingBox && s2.computeBoundingBox(), Ni.copy(s2.boundingBox)), Ni.applyMatrix4(t2.matrixWorld), this.union(Ni);
      }
      const i2 = t2.children;
      for (let t3 = 0, s3 = i2.length; t3 < s3; t3++) this.expandByObject(i2[t3], e2);
      return this;
    }
    containsPoint(t2) {
      return t2.x >= this.min.x && t2.x <= this.max.x && t2.y >= this.min.y && t2.y <= this.max.y && t2.z >= this.min.z && t2.z <= this.max.z;
    }
    containsBox(t2) {
      return this.min.x <= t2.min.x && t2.max.x <= this.max.x && this.min.y <= t2.min.y && t2.max.y <= this.max.y && this.min.z <= t2.min.z && t2.max.z <= this.max.z;
    }
    getParameter(t2, e2) {
      return e2.set((t2.x - this.min.x) / (this.max.x - this.min.x), (t2.y - this.min.y) / (this.max.y - this.min.y), (t2.z - this.min.z) / (this.max.z - this.min.z));
    }
    intersectsBox(t2) {
      return t2.max.x >= this.min.x && t2.min.x <= this.max.x && t2.max.y >= this.min.y && t2.min.y <= this.max.y && t2.max.z >= this.min.z && t2.min.z <= this.max.z;
    }
    intersectsSphere(t2) {
      return this.clampPoint(t2.center, Oi), Oi.distanceToSquared(t2.center) <= t2.radius * t2.radius;
    }
    intersectsPlane(t2) {
      let e2, s2;
      return t2.normal.x > 0 ? (e2 = t2.normal.x * this.min.x, s2 = t2.normal.x * this.max.x) : (e2 = t2.normal.x * this.max.x, s2 = t2.normal.x * this.min.x), t2.normal.y > 0 ? (e2 += t2.normal.y * this.min.y, s2 += t2.normal.y * this.max.y) : (e2 += t2.normal.y * this.max.y, s2 += t2.normal.y * this.min.y), t2.normal.z > 0 ? (e2 += t2.normal.z * this.min.z, s2 += t2.normal.z * this.max.z) : (e2 += t2.normal.z * this.max.z, s2 += t2.normal.z * this.min.z), e2 <= -t2.constant && s2 >= -t2.constant;
    }
    intersectsTriangle(t2) {
      if (this.isEmpty()) return false;
      this.getCenter(Ui), Hi.subVectors(this.max, Ui), Vi.subVectors(t2.a, Ui), Fi.subVectors(t2.b, Ui), Li.subVectors(t2.c, Ui), ji.subVectors(Fi, Vi), Di.subVectors(Li, Fi), Wi.subVectors(Vi, Li);
      let e2 = [0, -ji.z, ji.y, 0, -Di.z, Di.y, 0, -Wi.z, Wi.y, ji.z, 0, -ji.x, Di.z, 0, -Di.x, Wi.z, 0, -Wi.x, -ji.y, ji.x, 0, -Di.y, Di.x, 0, -Wi.y, Wi.x, 0];
      return !!Xi(e2, Vi, Fi, Li, Hi) && (e2 = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!Xi(e2, Vi, Fi, Li, Hi) && (qi.crossVectors(ji, Di), e2 = [qi.x, qi.y, qi.z], Xi(e2, Vi, Fi, Li, Hi)));
    }
    clampPoint(t2, e2) {
      return e2.copy(t2).clamp(this.min, this.max);
    }
    distanceToPoint(t2) {
      return this.clampPoint(t2, Oi).distanceTo(t2);
    }
    getBoundingSphere(t2) {
      return this.isEmpty() ? t2.makeEmpty() : (this.getCenter(t2.center), t2.radius = 0.5 * this.getSize(Oi).length()), t2;
    }
    intersect(t2) {
      return this.min.max(t2.min), this.max.min(t2.max), this.isEmpty() && this.makeEmpty(), this;
    }
    union(t2) {
      return this.min.min(t2.min), this.max.max(t2.max), this;
    }
    applyMatrix4(t2) {
      return this.isEmpty() || (Pi[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t2), Pi[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t2), Pi[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t2), Pi[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t2), Pi[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t2), Pi[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t2), Pi[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t2), Pi[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t2), this.setFromPoints(Pi)), this;
    }
    translate(t2) {
      return this.min.add(t2), this.max.add(t2), this;
    }
    equals(t2) {
      return t2.min.equals(this.min) && t2.max.equals(this.max);
    }
    toJSON() {
      return { min: this.min.toArray(), max: this.max.toArray() };
    }
    fromJSON(t2) {
      return this.min.fromArray(t2.min), this.max.fromArray(t2.max), this;
    }
  };
  var Pi = [new Ks(), new Ks(), new Ks(), new Ks(), new Ks(), new Ks(), new Ks(), new Ks()];
  var Oi = new Ks();
  var Ni = new Ri();
  var Vi = new Ks();
  var Fi = new Ks();
  var Li = new Ks();
  var ji = new Ks();
  var Di = new Ks();
  var Wi = new Ks();
  var Ui = new Ks();
  var Hi = new Ks();
  var qi = new Ks();
  var Ji = new Ks();
  function Xi(t2, e2, s2, i2, r2) {
    for (let n2 = 0, a2 = t2.length - 3; n2 <= a2; n2 += 3) {
      Ji.fromArray(t2, n2);
      const a3 = r2.x * Math.abs(Ji.x) + r2.y * Math.abs(Ji.y) + r2.z * Math.abs(Ji.z), o2 = e2.dot(Ji), h2 = s2.dot(Ji), l2 = i2.dot(Ji);
      if (Math.max(-Math.max(o2, h2, l2), Math.min(o2, h2, l2)) > a3) return false;
    }
    return true;
  }
  var Yi = new Ri();
  var Zi = new Ks();
  var Gi = new Ks();
  var $i = class {
    constructor(t2 = new Ks(), e2 = -1) {
      this.isSphere = true, this.center = t2, this.radius = e2;
    }
    set(t2, e2) {
      return this.center.copy(t2), this.radius = e2, this;
    }
    setFromPoints(t2, e2) {
      const s2 = this.center;
      void 0 !== e2 ? s2.copy(e2) : Yi.setFromPoints(t2).getCenter(s2);
      let i2 = 0;
      for (let e3 = 0, r2 = t2.length; e3 < r2; e3++) i2 = Math.max(i2, s2.distanceToSquared(t2[e3]));
      return this.radius = Math.sqrt(i2), this;
    }
    copy(t2) {
      return this.center.copy(t2.center), this.radius = t2.radius, this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), this.radius = -1, this;
    }
    containsPoint(t2) {
      return t2.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(t2) {
      return t2.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(t2) {
      const e2 = this.radius + t2.radius;
      return t2.center.distanceToSquared(this.center) <= e2 * e2;
    }
    intersectsBox(t2) {
      return t2.intersectsSphere(this);
    }
    intersectsPlane(t2) {
      return Math.abs(t2.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(t2, e2) {
      const s2 = this.center.distanceToSquared(t2);
      return e2.copy(t2), s2 > this.radius * this.radius && (e2.sub(this.center).normalize(), e2.multiplyScalar(this.radius).add(this.center)), e2;
    }
    getBoundingBox(t2) {
      return this.isEmpty() ? (t2.makeEmpty(), t2) : (t2.set(this.center, this.center), t2.expandByScalar(this.radius), t2);
    }
    applyMatrix4(t2) {
      return this.center.applyMatrix4(t2), this.radius = this.radius * t2.getMaxScaleOnAxis(), this;
    }
    translate(t2) {
      return this.center.add(t2), this;
    }
    expandByPoint(t2) {
      if (this.isEmpty()) return this.center.copy(t2), this.radius = 0, this;
      Zi.subVectors(t2, this.center);
      const e2 = Zi.lengthSq();
      if (e2 > this.radius * this.radius) {
        const t3 = Math.sqrt(e2), s2 = 0.5 * (t3 - this.radius);
        this.center.addScaledVector(Zi, s2 / t3), this.radius += s2;
      }
      return this;
    }
    union(t2) {
      return t2.isEmpty() ? this : this.isEmpty() ? (this.copy(t2), this) : (true === this.center.equals(t2.center) ? this.radius = Math.max(this.radius, t2.radius) : (Gi.subVectors(t2.center, this.center).setLength(t2.radius), this.expandByPoint(Zi.copy(t2.center).add(Gi)), this.expandByPoint(Zi.copy(t2.center).sub(Gi))), this);
    }
    equals(t2) {
      return t2.center.equals(this.center) && t2.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      return { radius: this.radius, center: this.center.toArray() };
    }
    fromJSON(t2) {
      return this.radius = t2.radius, this.center.fromArray(t2.center), this;
    }
  };
  var Qi = new Ks();
  var Ki = new Ks();
  var tr = new Ks();
  var er = new Ks();
  var sr = new Ks();
  var ir = new Ks();
  var rr = new Ks();
  var nr = class {
    constructor(t2 = new Ks(), e2 = new Ks(0, 0, -1)) {
      this.origin = t2, this.direction = e2;
    }
    set(t2, e2) {
      return this.origin.copy(t2), this.direction.copy(e2), this;
    }
    copy(t2) {
      return this.origin.copy(t2.origin), this.direction.copy(t2.direction), this;
    }
    at(t2, e2) {
      return e2.copy(this.origin).addScaledVector(this.direction, t2);
    }
    lookAt(t2) {
      return this.direction.copy(t2).sub(this.origin).normalize(), this;
    }
    recast(t2) {
      return this.origin.copy(this.at(t2, Qi)), this;
    }
    closestPointToPoint(t2, e2) {
      e2.subVectors(t2, this.origin);
      const s2 = e2.dot(this.direction);
      return s2 < 0 ? e2.copy(this.origin) : e2.copy(this.origin).addScaledVector(this.direction, s2);
    }
    distanceToPoint(t2) {
      return Math.sqrt(this.distanceSqToPoint(t2));
    }
    distanceSqToPoint(t2) {
      const e2 = Qi.subVectors(t2, this.origin).dot(this.direction);
      return e2 < 0 ? this.origin.distanceToSquared(t2) : (Qi.copy(this.origin).addScaledVector(this.direction, e2), Qi.distanceToSquared(t2));
    }
    distanceSqToSegment(t2, e2, s2, i2) {
      Ki.copy(t2).add(e2).multiplyScalar(0.5), tr.copy(e2).sub(t2).normalize(), er.copy(this.origin).sub(Ki);
      const r2 = 0.5 * t2.distanceTo(e2), n2 = -this.direction.dot(tr), a2 = er.dot(this.direction), o2 = -er.dot(tr), h2 = er.lengthSq(), l2 = Math.abs(1 - n2 * n2);
      let c2, u2, d2, p2;
      if (l2 > 0) if (c2 = n2 * o2 - a2, u2 = n2 * a2 - o2, p2 = r2 * l2, c2 >= 0) if (u2 >= -p2) if (u2 <= p2) {
        const t3 = 1 / l2;
        c2 *= t3, u2 *= t3, d2 = c2 * (c2 + n2 * u2 + 2 * a2) + u2 * (n2 * c2 + u2 + 2 * o2) + h2;
      } else u2 = r2, c2 = Math.max(0, -(n2 * u2 + a2)), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2;
      else u2 = -r2, c2 = Math.max(0, -(n2 * u2 + a2)), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2;
      else u2 <= -p2 ? (c2 = Math.max(0, -(-n2 * r2 + a2)), u2 = c2 > 0 ? -r2 : Math.min(Math.max(-r2, -o2), r2), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2) : u2 <= p2 ? (c2 = 0, u2 = Math.min(Math.max(-r2, -o2), r2), d2 = u2 * (u2 + 2 * o2) + h2) : (c2 = Math.max(0, -(n2 * r2 + a2)), u2 = c2 > 0 ? r2 : Math.min(Math.max(-r2, -o2), r2), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2);
      else u2 = n2 > 0 ? -r2 : r2, c2 = Math.max(0, -(n2 * u2 + a2)), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2;
      return s2 && s2.copy(this.origin).addScaledVector(this.direction, c2), i2 && i2.copy(Ki).addScaledVector(tr, u2), d2;
    }
    intersectSphere(t2, e2) {
      Qi.subVectors(t2.center, this.origin);
      const s2 = Qi.dot(this.direction), i2 = Qi.dot(Qi) - s2 * s2, r2 = t2.radius * t2.radius;
      if (i2 > r2) return null;
      const n2 = Math.sqrt(r2 - i2), a2 = s2 - n2, o2 = s2 + n2;
      return o2 < 0 ? null : a2 < 0 ? this.at(o2, e2) : this.at(a2, e2);
    }
    intersectsSphere(t2) {
      return !(t2.radius < 0) && this.distanceSqToPoint(t2.center) <= t2.radius * t2.radius;
    }
    distanceToPlane(t2) {
      const e2 = t2.normal.dot(this.direction);
      if (0 === e2) return 0 === t2.distanceToPoint(this.origin) ? 0 : null;
      const s2 = -(this.origin.dot(t2.normal) + t2.constant) / e2;
      return s2 >= 0 ? s2 : null;
    }
    intersectPlane(t2, e2) {
      const s2 = this.distanceToPlane(t2);
      return null === s2 ? null : this.at(s2, e2);
    }
    intersectsPlane(t2) {
      const e2 = t2.distanceToPoint(this.origin);
      if (0 === e2) return true;
      return t2.normal.dot(this.direction) * e2 < 0;
    }
    intersectBox(t2, e2) {
      let s2, i2, r2, n2, a2, o2;
      const h2 = 1 / this.direction.x, l2 = 1 / this.direction.y, c2 = 1 / this.direction.z, u2 = this.origin;
      return h2 >= 0 ? (s2 = (t2.min.x - u2.x) * h2, i2 = (t2.max.x - u2.x) * h2) : (s2 = (t2.max.x - u2.x) * h2, i2 = (t2.min.x - u2.x) * h2), l2 >= 0 ? (r2 = (t2.min.y - u2.y) * l2, n2 = (t2.max.y - u2.y) * l2) : (r2 = (t2.max.y - u2.y) * l2, n2 = (t2.min.y - u2.y) * l2), s2 > n2 || r2 > i2 ? null : ((r2 > s2 || isNaN(s2)) && (s2 = r2), (n2 < i2 || isNaN(i2)) && (i2 = n2), c2 >= 0 ? (a2 = (t2.min.z - u2.z) * c2, o2 = (t2.max.z - u2.z) * c2) : (a2 = (t2.max.z - u2.z) * c2, o2 = (t2.min.z - u2.z) * c2), s2 > o2 || a2 > i2 ? null : ((a2 > s2 || s2 != s2) && (s2 = a2), (o2 < i2 || i2 != i2) && (i2 = o2), i2 < 0 ? null : this.at(s2 >= 0 ? s2 : i2, e2)));
    }
    intersectsBox(t2) {
      return null !== this.intersectBox(t2, Qi);
    }
    intersectTriangle(t2, e2, s2, i2, r2) {
      sr.subVectors(e2, t2), ir.subVectors(s2, t2), rr.crossVectors(sr, ir);
      let n2, a2 = this.direction.dot(rr);
      if (a2 > 0) {
        if (i2) return null;
        n2 = 1;
      } else {
        if (!(a2 < 0)) return null;
        n2 = -1, a2 = -a2;
      }
      er.subVectors(this.origin, t2);
      const o2 = n2 * this.direction.dot(ir.crossVectors(er, ir));
      if (o2 < 0) return null;
      const h2 = n2 * this.direction.dot(sr.cross(er));
      if (h2 < 0) return null;
      if (o2 + h2 > a2) return null;
      const l2 = -n2 * er.dot(rr);
      return l2 < 0 ? null : this.at(l2 / a2, r2);
    }
    applyMatrix4(t2) {
      return this.origin.applyMatrix4(t2), this.direction.transformDirection(t2), this;
    }
    equals(t2) {
      return t2.origin.equals(this.origin) && t2.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var ar = class _ar {
    constructor(t2, e2, s2, i2, r2, n2, a2, o2, h2, l2, c2, u2, d2, p2, m2, y2) {
      _ar.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], void 0 !== t2 && this.set(t2, e2, s2, i2, r2, n2, a2, o2, h2, l2, c2, u2, d2, p2, m2, y2);
    }
    set(t2, e2, s2, i2, r2, n2, a2, o2, h2, l2, c2, u2, d2, p2, m2, y2) {
      const g2 = this.elements;
      return g2[0] = t2, g2[4] = e2, g2[8] = s2, g2[12] = i2, g2[1] = r2, g2[5] = n2, g2[9] = a2, g2[13] = o2, g2[2] = h2, g2[6] = l2, g2[10] = c2, g2[14] = u2, g2[3] = d2, g2[7] = p2, g2[11] = m2, g2[15] = y2, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new _ar().fromArray(this.elements);
    }
    copy(t2) {
      const e2 = this.elements, s2 = t2.elements;
      return e2[0] = s2[0], e2[1] = s2[1], e2[2] = s2[2], e2[3] = s2[3], e2[4] = s2[4], e2[5] = s2[5], e2[6] = s2[6], e2[7] = s2[7], e2[8] = s2[8], e2[9] = s2[9], e2[10] = s2[10], e2[11] = s2[11], e2[12] = s2[12], e2[13] = s2[13], e2[14] = s2[14], e2[15] = s2[15], this;
    }
    copyPosition(t2) {
      const e2 = this.elements, s2 = t2.elements;
      return e2[12] = s2[12], e2[13] = s2[13], e2[14] = s2[14], this;
    }
    setFromMatrix3(t2) {
      const e2 = t2.elements;
      return this.set(e2[0], e2[3], e2[6], 0, e2[1], e2[4], e2[7], 0, e2[2], e2[5], e2[8], 0, 0, 0, 0, 1), this;
    }
    extractBasis(t2, e2, s2) {
      return t2.setFromMatrixColumn(this, 0), e2.setFromMatrixColumn(this, 1), s2.setFromMatrixColumn(this, 2), this;
    }
    makeBasis(t2, e2, s2) {
      return this.set(t2.x, e2.x, s2.x, 0, t2.y, e2.y, s2.y, 0, t2.z, e2.z, s2.z, 0, 0, 0, 0, 1), this;
    }
    extractRotation(t2) {
      const e2 = this.elements, s2 = t2.elements, i2 = 1 / or.setFromMatrixColumn(t2, 0).length(), r2 = 1 / or.setFromMatrixColumn(t2, 1).length(), n2 = 1 / or.setFromMatrixColumn(t2, 2).length();
      return e2[0] = s2[0] * i2, e2[1] = s2[1] * i2, e2[2] = s2[2] * i2, e2[3] = 0, e2[4] = s2[4] * r2, e2[5] = s2[5] * r2, e2[6] = s2[6] * r2, e2[7] = 0, e2[8] = s2[8] * n2, e2[9] = s2[9] * n2, e2[10] = s2[10] * n2, e2[11] = 0, e2[12] = 0, e2[13] = 0, e2[14] = 0, e2[15] = 1, this;
    }
    makeRotationFromEuler(t2) {
      const e2 = this.elements, s2 = t2.x, i2 = t2.y, r2 = t2.z, n2 = Math.cos(s2), a2 = Math.sin(s2), o2 = Math.cos(i2), h2 = Math.sin(i2), l2 = Math.cos(r2), c2 = Math.sin(r2);
      if ("XYZ" === t2.order) {
        const t3 = n2 * l2, s3 = n2 * c2, i3 = a2 * l2, r3 = a2 * c2;
        e2[0] = o2 * l2, e2[4] = -o2 * c2, e2[8] = h2, e2[1] = s3 + i3 * h2, e2[5] = t3 - r3 * h2, e2[9] = -a2 * o2, e2[2] = r3 - t3 * h2, e2[6] = i3 + s3 * h2, e2[10] = n2 * o2;
      } else if ("YXZ" === t2.order) {
        const t3 = o2 * l2, s3 = o2 * c2, i3 = h2 * l2, r3 = h2 * c2;
        e2[0] = t3 + r3 * a2, e2[4] = i3 * a2 - s3, e2[8] = n2 * h2, e2[1] = n2 * c2, e2[5] = n2 * l2, e2[9] = -a2, e2[2] = s3 * a2 - i3, e2[6] = r3 + t3 * a2, e2[10] = n2 * o2;
      } else if ("ZXY" === t2.order) {
        const t3 = o2 * l2, s3 = o2 * c2, i3 = h2 * l2, r3 = h2 * c2;
        e2[0] = t3 - r3 * a2, e2[4] = -n2 * c2, e2[8] = i3 + s3 * a2, e2[1] = s3 + i3 * a2, e2[5] = n2 * l2, e2[9] = r3 - t3 * a2, e2[2] = -n2 * h2, e2[6] = a2, e2[10] = n2 * o2;
      } else if ("ZYX" === t2.order) {
        const t3 = n2 * l2, s3 = n2 * c2, i3 = a2 * l2, r3 = a2 * c2;
        e2[0] = o2 * l2, e2[4] = i3 * h2 - s3, e2[8] = t3 * h2 + r3, e2[1] = o2 * c2, e2[5] = r3 * h2 + t3, e2[9] = s3 * h2 - i3, e2[2] = -h2, e2[6] = a2 * o2, e2[10] = n2 * o2;
      } else if ("YZX" === t2.order) {
        const t3 = n2 * o2, s3 = n2 * h2, i3 = a2 * o2, r3 = a2 * h2;
        e2[0] = o2 * l2, e2[4] = r3 - t3 * c2, e2[8] = i3 * c2 + s3, e2[1] = c2, e2[5] = n2 * l2, e2[9] = -a2 * l2, e2[2] = -h2 * l2, e2[6] = s3 * c2 + i3, e2[10] = t3 - r3 * c2;
      } else if ("XZY" === t2.order) {
        const t3 = n2 * o2, s3 = n2 * h2, i3 = a2 * o2, r3 = a2 * h2;
        e2[0] = o2 * l2, e2[4] = -c2, e2[8] = h2 * l2, e2[1] = t3 * c2 + r3, e2[5] = n2 * l2, e2[9] = s3 * c2 - i3, e2[2] = i3 * c2 - s3, e2[6] = a2 * l2, e2[10] = r3 * c2 + t3;
      }
      return e2[3] = 0, e2[7] = 0, e2[11] = 0, e2[12] = 0, e2[13] = 0, e2[14] = 0, e2[15] = 1, this;
    }
    makeRotationFromQuaternion(t2) {
      return this.compose(lr, t2, cr);
    }
    lookAt(t2, e2, s2) {
      const i2 = this.elements;
      return pr.subVectors(t2, e2), 0 === pr.lengthSq() && (pr.z = 1), pr.normalize(), ur.crossVectors(s2, pr), 0 === ur.lengthSq() && (1 === Math.abs(s2.z) ? pr.x += 1e-4 : pr.z += 1e-4, pr.normalize(), ur.crossVectors(s2, pr)), ur.normalize(), dr.crossVectors(pr, ur), i2[0] = ur.x, i2[4] = dr.x, i2[8] = pr.x, i2[1] = ur.y, i2[5] = dr.y, i2[9] = pr.y, i2[2] = ur.z, i2[6] = dr.z, i2[10] = pr.z, this;
    }
    multiply(t2) {
      return this.multiplyMatrices(this, t2);
    }
    premultiply(t2) {
      return this.multiplyMatrices(t2, this);
    }
    multiplyMatrices(t2, e2) {
      const s2 = t2.elements, i2 = e2.elements, r2 = this.elements, n2 = s2[0], a2 = s2[4], o2 = s2[8], h2 = s2[12], l2 = s2[1], c2 = s2[5], u2 = s2[9], d2 = s2[13], p2 = s2[2], m2 = s2[6], y2 = s2[10], g2 = s2[14], f2 = s2[3], x2 = s2[7], b2 = s2[11], v2 = s2[15], w2 = i2[0], M2 = i2[4], S2 = i2[8], _2 = i2[12], A2 = i2[1], T2 = i2[5], z2 = i2[9], C2 = i2[13], I2 = i2[2], B2 = i2[6], k2 = i2[10], E2 = i2[14], R2 = i2[3], P2 = i2[7], O2 = i2[11], N2 = i2[15];
      return r2[0] = n2 * w2 + a2 * A2 + o2 * I2 + h2 * R2, r2[4] = n2 * M2 + a2 * T2 + o2 * B2 + h2 * P2, r2[8] = n2 * S2 + a2 * z2 + o2 * k2 + h2 * O2, r2[12] = n2 * _2 + a2 * C2 + o2 * E2 + h2 * N2, r2[1] = l2 * w2 + c2 * A2 + u2 * I2 + d2 * R2, r2[5] = l2 * M2 + c2 * T2 + u2 * B2 + d2 * P2, r2[9] = l2 * S2 + c2 * z2 + u2 * k2 + d2 * O2, r2[13] = l2 * _2 + c2 * C2 + u2 * E2 + d2 * N2, r2[2] = p2 * w2 + m2 * A2 + y2 * I2 + g2 * R2, r2[6] = p2 * M2 + m2 * T2 + y2 * B2 + g2 * P2, r2[10] = p2 * S2 + m2 * z2 + y2 * k2 + g2 * O2, r2[14] = p2 * _2 + m2 * C2 + y2 * E2 + g2 * N2, r2[3] = f2 * w2 + x2 * A2 + b2 * I2 + v2 * R2, r2[7] = f2 * M2 + x2 * T2 + b2 * B2 + v2 * P2, r2[11] = f2 * S2 + x2 * z2 + b2 * k2 + v2 * O2, r2[15] = f2 * _2 + x2 * C2 + b2 * E2 + v2 * N2, this;
    }
    multiplyScalar(t2) {
      const e2 = this.elements;
      return e2[0] *= t2, e2[4] *= t2, e2[8] *= t2, e2[12] *= t2, e2[1] *= t2, e2[5] *= t2, e2[9] *= t2, e2[13] *= t2, e2[2] *= t2, e2[6] *= t2, e2[10] *= t2, e2[14] *= t2, e2[3] *= t2, e2[7] *= t2, e2[11] *= t2, e2[15] *= t2, this;
    }
    determinant() {
      const t2 = this.elements, e2 = t2[0], s2 = t2[4], i2 = t2[8], r2 = t2[12], n2 = t2[1], a2 = t2[5], o2 = t2[9], h2 = t2[13], l2 = t2[2], c2 = t2[6], u2 = t2[10], d2 = t2[14];
      return t2[3] * (+r2 * o2 * c2 - i2 * h2 * c2 - r2 * a2 * u2 + s2 * h2 * u2 + i2 * a2 * d2 - s2 * o2 * d2) + t2[7] * (+e2 * o2 * d2 - e2 * h2 * u2 + r2 * n2 * u2 - i2 * n2 * d2 + i2 * h2 * l2 - r2 * o2 * l2) + t2[11] * (+e2 * h2 * c2 - e2 * a2 * d2 - r2 * n2 * c2 + s2 * n2 * d2 + r2 * a2 * l2 - s2 * h2 * l2) + t2[15] * (-i2 * a2 * l2 - e2 * o2 * c2 + e2 * a2 * u2 + i2 * n2 * c2 - s2 * n2 * u2 + s2 * o2 * l2);
    }
    transpose() {
      const t2 = this.elements;
      let e2;
      return e2 = t2[1], t2[1] = t2[4], t2[4] = e2, e2 = t2[2], t2[2] = t2[8], t2[8] = e2, e2 = t2[6], t2[6] = t2[9], t2[9] = e2, e2 = t2[3], t2[3] = t2[12], t2[12] = e2, e2 = t2[7], t2[7] = t2[13], t2[13] = e2, e2 = t2[11], t2[11] = t2[14], t2[14] = e2, this;
    }
    setPosition(t2, e2, s2) {
      const i2 = this.elements;
      return t2.isVector3 ? (i2[12] = t2.x, i2[13] = t2.y, i2[14] = t2.z) : (i2[12] = t2, i2[13] = e2, i2[14] = s2), this;
    }
    invert() {
      const t2 = this.elements, e2 = t2[0], s2 = t2[1], i2 = t2[2], r2 = t2[3], n2 = t2[4], a2 = t2[5], o2 = t2[6], h2 = t2[7], l2 = t2[8], c2 = t2[9], u2 = t2[10], d2 = t2[11], p2 = t2[12], m2 = t2[13], y2 = t2[14], g2 = t2[15], f2 = c2 * y2 * h2 - m2 * u2 * h2 + m2 * o2 * d2 - a2 * y2 * d2 - c2 * o2 * g2 + a2 * u2 * g2, x2 = p2 * u2 * h2 - l2 * y2 * h2 - p2 * o2 * d2 + n2 * y2 * d2 + l2 * o2 * g2 - n2 * u2 * g2, b2 = l2 * m2 * h2 - p2 * c2 * h2 + p2 * a2 * d2 - n2 * m2 * d2 - l2 * a2 * g2 + n2 * c2 * g2, v2 = p2 * c2 * o2 - l2 * m2 * o2 - p2 * a2 * u2 + n2 * m2 * u2 + l2 * a2 * y2 - n2 * c2 * y2, w2 = e2 * f2 + s2 * x2 + i2 * b2 + r2 * v2;
      if (0 === w2) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const M2 = 1 / w2;
      return t2[0] = f2 * M2, t2[1] = (m2 * u2 * r2 - c2 * y2 * r2 - m2 * i2 * d2 + s2 * y2 * d2 + c2 * i2 * g2 - s2 * u2 * g2) * M2, t2[2] = (a2 * y2 * r2 - m2 * o2 * r2 + m2 * i2 * h2 - s2 * y2 * h2 - a2 * i2 * g2 + s2 * o2 * g2) * M2, t2[3] = (c2 * o2 * r2 - a2 * u2 * r2 - c2 * i2 * h2 + s2 * u2 * h2 + a2 * i2 * d2 - s2 * o2 * d2) * M2, t2[4] = x2 * M2, t2[5] = (l2 * y2 * r2 - p2 * u2 * r2 + p2 * i2 * d2 - e2 * y2 * d2 - l2 * i2 * g2 + e2 * u2 * g2) * M2, t2[6] = (p2 * o2 * r2 - n2 * y2 * r2 - p2 * i2 * h2 + e2 * y2 * h2 + n2 * i2 * g2 - e2 * o2 * g2) * M2, t2[7] = (n2 * u2 * r2 - l2 * o2 * r2 + l2 * i2 * h2 - e2 * u2 * h2 - n2 * i2 * d2 + e2 * o2 * d2) * M2, t2[8] = b2 * M2, t2[9] = (p2 * c2 * r2 - l2 * m2 * r2 - p2 * s2 * d2 + e2 * m2 * d2 + l2 * s2 * g2 - e2 * c2 * g2) * M2, t2[10] = (n2 * m2 * r2 - p2 * a2 * r2 + p2 * s2 * h2 - e2 * m2 * h2 - n2 * s2 * g2 + e2 * a2 * g2) * M2, t2[11] = (l2 * a2 * r2 - n2 * c2 * r2 - l2 * s2 * h2 + e2 * c2 * h2 + n2 * s2 * d2 - e2 * a2 * d2) * M2, t2[12] = v2 * M2, t2[13] = (l2 * m2 * i2 - p2 * c2 * i2 + p2 * s2 * u2 - e2 * m2 * u2 - l2 * s2 * y2 + e2 * c2 * y2) * M2, t2[14] = (p2 * a2 * i2 - n2 * m2 * i2 - p2 * s2 * o2 + e2 * m2 * o2 + n2 * s2 * y2 - e2 * a2 * y2) * M2, t2[15] = (n2 * c2 * i2 - l2 * a2 * i2 + l2 * s2 * o2 - e2 * c2 * o2 - n2 * s2 * u2 + e2 * a2 * u2) * M2, this;
    }
    scale(t2) {
      const e2 = this.elements, s2 = t2.x, i2 = t2.y, r2 = t2.z;
      return e2[0] *= s2, e2[4] *= i2, e2[8] *= r2, e2[1] *= s2, e2[5] *= i2, e2[9] *= r2, e2[2] *= s2, e2[6] *= i2, e2[10] *= r2, e2[3] *= s2, e2[7] *= i2, e2[11] *= r2, this;
    }
    getMaxScaleOnAxis() {
      const t2 = this.elements, e2 = t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2], s2 = t2[4] * t2[4] + t2[5] * t2[5] + t2[6] * t2[6], i2 = t2[8] * t2[8] + t2[9] * t2[9] + t2[10] * t2[10];
      return Math.sqrt(Math.max(e2, s2, i2));
    }
    makeTranslation(t2, e2, s2) {
      return t2.isVector3 ? this.set(1, 0, 0, t2.x, 0, 1, 0, t2.y, 0, 0, 1, t2.z, 0, 0, 0, 1) : this.set(1, 0, 0, t2, 0, 1, 0, e2, 0, 0, 1, s2, 0, 0, 0, 1), this;
    }
    makeRotationX(t2) {
      const e2 = Math.cos(t2), s2 = Math.sin(t2);
      return this.set(1, 0, 0, 0, 0, e2, -s2, 0, 0, s2, e2, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(t2) {
      const e2 = Math.cos(t2), s2 = Math.sin(t2);
      return this.set(e2, 0, s2, 0, 0, 1, 0, 0, -s2, 0, e2, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(t2) {
      const e2 = Math.cos(t2), s2 = Math.sin(t2);
      return this.set(e2, -s2, 0, 0, s2, e2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(t2, e2) {
      const s2 = Math.cos(e2), i2 = Math.sin(e2), r2 = 1 - s2, n2 = t2.x, a2 = t2.y, o2 = t2.z, h2 = r2 * n2, l2 = r2 * a2;
      return this.set(h2 * n2 + s2, h2 * a2 - i2 * o2, h2 * o2 + i2 * a2, 0, h2 * a2 + i2 * o2, l2 * a2 + s2, l2 * o2 - i2 * n2, 0, h2 * o2 - i2 * a2, l2 * o2 + i2 * n2, r2 * o2 * o2 + s2, 0, 0, 0, 0, 1), this;
    }
    makeScale(t2, e2, s2) {
      return this.set(t2, 0, 0, 0, 0, e2, 0, 0, 0, 0, s2, 0, 0, 0, 0, 1), this;
    }
    makeShear(t2, e2, s2, i2, r2, n2) {
      return this.set(1, s2, r2, 0, t2, 1, n2, 0, e2, i2, 1, 0, 0, 0, 0, 1), this;
    }
    compose(t2, e2, s2) {
      const i2 = this.elements, r2 = e2._x, n2 = e2._y, a2 = e2._z, o2 = e2._w, h2 = r2 + r2, l2 = n2 + n2, c2 = a2 + a2, u2 = r2 * h2, d2 = r2 * l2, p2 = r2 * c2, m2 = n2 * l2, y2 = n2 * c2, g2 = a2 * c2, f2 = o2 * h2, x2 = o2 * l2, b2 = o2 * c2, v2 = s2.x, w2 = s2.y, M2 = s2.z;
      return i2[0] = (1 - (m2 + g2)) * v2, i2[1] = (d2 + b2) * v2, i2[2] = (p2 - x2) * v2, i2[3] = 0, i2[4] = (d2 - b2) * w2, i2[5] = (1 - (u2 + g2)) * w2, i2[6] = (y2 + f2) * w2, i2[7] = 0, i2[8] = (p2 + x2) * M2, i2[9] = (y2 - f2) * M2, i2[10] = (1 - (u2 + m2)) * M2, i2[11] = 0, i2[12] = t2.x, i2[13] = t2.y, i2[14] = t2.z, i2[15] = 1, this;
    }
    decompose(t2, e2, s2) {
      const i2 = this.elements;
      let r2 = or.set(i2[0], i2[1], i2[2]).length();
      const n2 = or.set(i2[4], i2[5], i2[6]).length(), a2 = or.set(i2[8], i2[9], i2[10]).length();
      this.determinant() < 0 && (r2 = -r2), t2.x = i2[12], t2.y = i2[13], t2.z = i2[14], hr.copy(this);
      const o2 = 1 / r2, h2 = 1 / n2, l2 = 1 / a2;
      return hr.elements[0] *= o2, hr.elements[1] *= o2, hr.elements[2] *= o2, hr.elements[4] *= h2, hr.elements[5] *= h2, hr.elements[6] *= h2, hr.elements[8] *= l2, hr.elements[9] *= l2, hr.elements[10] *= l2, e2.setFromRotationMatrix(hr), s2.x = r2, s2.y = n2, s2.z = a2, this;
    }
    makePerspective(t2, e2, s2, i2, r2, n2, a2 = 2e3, o2 = false) {
      const h2 = this.elements, l2 = 2 * r2 / (e2 - t2), c2 = 2 * r2 / (s2 - i2), u2 = (e2 + t2) / (e2 - t2), d2 = (s2 + i2) / (s2 - i2);
      let p2, m2;
      if (o2) p2 = r2 / (n2 - r2), m2 = n2 * r2 / (n2 - r2);
      else if (a2 === Ps) p2 = -(n2 + r2) / (n2 - r2), m2 = -2 * n2 * r2 / (n2 - r2);
      else {
        if (a2 !== Os) throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a2);
        p2 = -n2 / (n2 - r2), m2 = -n2 * r2 / (n2 - r2);
      }
      return h2[0] = l2, h2[4] = 0, h2[8] = u2, h2[12] = 0, h2[1] = 0, h2[5] = c2, h2[9] = d2, h2[13] = 0, h2[2] = 0, h2[6] = 0, h2[10] = p2, h2[14] = m2, h2[3] = 0, h2[7] = 0, h2[11] = -1, h2[15] = 0, this;
    }
    makeOrthographic(t2, e2, s2, i2, r2, n2, a2 = 2e3, o2 = false) {
      const h2 = this.elements, l2 = 2 / (e2 - t2), c2 = 2 / (s2 - i2), u2 = -(e2 + t2) / (e2 - t2), d2 = -(s2 + i2) / (s2 - i2);
      let p2, m2;
      if (o2) p2 = 1 / (n2 - r2), m2 = n2 / (n2 - r2);
      else if (a2 === Ps) p2 = -2 / (n2 - r2), m2 = -(n2 + r2) / (n2 - r2);
      else {
        if (a2 !== Os) throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a2);
        p2 = -1 / (n2 - r2), m2 = -r2 / (n2 - r2);
      }
      return h2[0] = l2, h2[4] = 0, h2[8] = 0, h2[12] = u2, h2[1] = 0, h2[5] = c2, h2[9] = 0, h2[13] = d2, h2[2] = 0, h2[6] = 0, h2[10] = p2, h2[14] = m2, h2[3] = 0, h2[7] = 0, h2[11] = 0, h2[15] = 1, this;
    }
    equals(t2) {
      const e2 = this.elements, s2 = t2.elements;
      for (let t3 = 0; t3 < 16; t3++) if (e2[t3] !== s2[t3]) return false;
      return true;
    }
    fromArray(t2, e2 = 0) {
      for (let s2 = 0; s2 < 16; s2++) this.elements[s2] = t2[s2 + e2];
      return this;
    }
    toArray(t2 = [], e2 = 0) {
      const s2 = this.elements;
      return t2[e2] = s2[0], t2[e2 + 1] = s2[1], t2[e2 + 2] = s2[2], t2[e2 + 3] = s2[3], t2[e2 + 4] = s2[4], t2[e2 + 5] = s2[5], t2[e2 + 6] = s2[6], t2[e2 + 7] = s2[7], t2[e2 + 8] = s2[8], t2[e2 + 9] = s2[9], t2[e2 + 10] = s2[10], t2[e2 + 11] = s2[11], t2[e2 + 12] = s2[12], t2[e2 + 13] = s2[13], t2[e2 + 14] = s2[14], t2[e2 + 15] = s2[15], t2;
    }
  };
  var or = new Ks();
  var hr = new ar();
  var lr = new Ks(0, 0, 0);
  var cr = new Ks(1, 1, 1);
  var ur = new Ks();
  var dr = new Ks();
  var pr = new Ks();
  var mr = new ar();
  var yr = new Qs();
  var gr = class _gr {
    constructor(t2 = 0, e2 = 0, s2 = 0, i2 = _gr.DEFAULT_ORDER) {
      this.isEuler = true, this._x = t2, this._y = e2, this._z = s2, this._order = i2;
    }
    get x() {
      return this._x;
    }
    set x(t2) {
      this._x = t2, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t2) {
      this._y = t2, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t2) {
      this._z = t2, this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(t2) {
      this._order = t2, this._onChangeCallback();
    }
    set(t2, e2, s2, i2 = this._order) {
      return this._x = t2, this._y = e2, this._z = s2, this._order = i2, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(t2) {
      return this._x = t2._x, this._y = t2._y, this._z = t2._z, this._order = t2._order, this._onChangeCallback(), this;
    }
    setFromRotationMatrix(t2, e2 = this._order, s2 = true) {
      const i2 = t2.elements, r2 = i2[0], n2 = i2[4], a2 = i2[8], o2 = i2[1], h2 = i2[5], l2 = i2[9], c2 = i2[2], u2 = i2[6], d2 = i2[10];
      switch (e2) {
        case "XYZ":
          this._y = Math.asin(qs(a2, -1, 1)), Math.abs(a2) < 0.9999999 ? (this._x = Math.atan2(-l2, d2), this._z = Math.atan2(-n2, r2)) : (this._x = Math.atan2(u2, h2), this._z = 0);
          break;
        case "YXZ":
          this._x = Math.asin(-qs(l2, -1, 1)), Math.abs(l2) < 0.9999999 ? (this._y = Math.atan2(a2, d2), this._z = Math.atan2(o2, h2)) : (this._y = Math.atan2(-c2, r2), this._z = 0);
          break;
        case "ZXY":
          this._x = Math.asin(qs(u2, -1, 1)), Math.abs(u2) < 0.9999999 ? (this._y = Math.atan2(-c2, d2), this._z = Math.atan2(-n2, h2)) : (this._y = 0, this._z = Math.atan2(o2, r2));
          break;
        case "ZYX":
          this._y = Math.asin(-qs(c2, -1, 1)), Math.abs(c2) < 0.9999999 ? (this._x = Math.atan2(u2, d2), this._z = Math.atan2(o2, r2)) : (this._x = 0, this._z = Math.atan2(-n2, h2));
          break;
        case "YZX":
          this._z = Math.asin(qs(o2, -1, 1)), Math.abs(o2) < 0.9999999 ? (this._x = Math.atan2(-l2, h2), this._y = Math.atan2(-c2, r2)) : (this._x = 0, this._y = Math.atan2(a2, d2));
          break;
        case "XZY":
          this._z = Math.asin(-qs(n2, -1, 1)), Math.abs(n2) < 0.9999999 ? (this._x = Math.atan2(u2, h2), this._y = Math.atan2(a2, r2)) : (this._x = Math.atan2(-l2, d2), this._y = 0);
          break;
        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e2);
      }
      return this._order = e2, true === s2 && this._onChangeCallback(), this;
    }
    setFromQuaternion(t2, e2, s2) {
      return mr.makeRotationFromQuaternion(t2), this.setFromRotationMatrix(mr, e2, s2);
    }
    setFromVector3(t2, e2 = this._order) {
      return this.set(t2.x, t2.y, t2.z, e2);
    }
    reorder(t2) {
      return yr.setFromEuler(this), this.setFromQuaternion(yr, t2);
    }
    equals(t2) {
      return t2._x === this._x && t2._y === this._y && t2._z === this._z && t2._order === this._order;
    }
    fromArray(t2) {
      return this._x = t2[0], this._y = t2[1], this._z = t2[2], void 0 !== t2[3] && (this._order = t2[3]), this._onChangeCallback(), this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this._x, t2[e2 + 1] = this._y, t2[e2 + 2] = this._z, t2[e2 + 3] = this._order, t2;
    }
    _onChange(t2) {
      return this._onChangeCallback = t2, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
  };
  gr.DEFAULT_ORDER = "XYZ";
  var fr = class {
    constructor() {
      this.mask = 1;
    }
    set(t2) {
      this.mask = 1 << t2 >>> 0;
    }
    enable(t2) {
      this.mask |= 1 << t2;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(t2) {
      this.mask ^= 1 << t2;
    }
    disable(t2) {
      this.mask &= ~(1 << t2);
    }
    disableAll() {
      this.mask = 0;
    }
    test(t2) {
      return 0 !== (this.mask & t2.mask);
    }
    isEnabled(t2) {
      return !!(this.mask & 1 << t2);
    }
  };
  var xr = 0;
  var br = new Ks();
  var vr = new Qs();
  var wr = new ar();
  var Mr = new Ks();
  var Sr = new Ks();
  var _r = new Ks();
  var Ar = new Qs();
  var Tr = new Ks(1, 0, 0);
  var zr = new Ks(0, 1, 0);
  var Cr = new Ks(0, 0, 1);
  var Ir = { type: "added" };
  var Br = { type: "removed" };
  var kr = { type: "childadded", child: null };
  var Er = { type: "childremoved", child: null };
  var Rr = class _Rr extends Ls {
    constructor() {
      super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: xr++ }), this.uuid = Hs(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = _Rr.DEFAULT_UP.clone();
      const t2 = new Ks(), e2 = new gr(), s2 = new Qs(), i2 = new Ks(1, 1, 1);
      e2._onChange(function() {
        s2.setFromEuler(e2, false);
      }), s2._onChange(function() {
        e2.setFromQuaternion(s2, void 0, false);
      }), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t2 }, rotation: { configurable: true, enumerable: true, value: e2 }, quaternion: { configurable: true, enumerable: true, value: s2 }, scale: { configurable: true, enumerable: true, value: i2 }, modelViewMatrix: { value: new ar() }, normalMatrix: { value: new si() } }), this.matrix = new ar(), this.matrixWorld = new ar(), this.matrixAutoUpdate = _Rr.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = _Rr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new fr(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
    }
    onBeforeShadow() {
    }
    onAfterShadow() {
    }
    onBeforeRender() {
    }
    onAfterRender() {
    }
    applyMatrix4(t2) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t2), this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(t2) {
      return this.quaternion.premultiply(t2), this;
    }
    setRotationFromAxisAngle(t2, e2) {
      this.quaternion.setFromAxisAngle(t2, e2);
    }
    setRotationFromEuler(t2) {
      this.quaternion.setFromEuler(t2, true);
    }
    setRotationFromMatrix(t2) {
      this.quaternion.setFromRotationMatrix(t2);
    }
    setRotationFromQuaternion(t2) {
      this.quaternion.copy(t2);
    }
    rotateOnAxis(t2, e2) {
      return vr.setFromAxisAngle(t2, e2), this.quaternion.multiply(vr), this;
    }
    rotateOnWorldAxis(t2, e2) {
      return vr.setFromAxisAngle(t2, e2), this.quaternion.premultiply(vr), this;
    }
    rotateX(t2) {
      return this.rotateOnAxis(Tr, t2);
    }
    rotateY(t2) {
      return this.rotateOnAxis(zr, t2);
    }
    rotateZ(t2) {
      return this.rotateOnAxis(Cr, t2);
    }
    translateOnAxis(t2, e2) {
      return br.copy(t2).applyQuaternion(this.quaternion), this.position.add(br.multiplyScalar(e2)), this;
    }
    translateX(t2) {
      return this.translateOnAxis(Tr, t2);
    }
    translateY(t2) {
      return this.translateOnAxis(zr, t2);
    }
    translateZ(t2) {
      return this.translateOnAxis(Cr, t2);
    }
    localToWorld(t2) {
      return this.updateWorldMatrix(true, false), t2.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(t2) {
      return this.updateWorldMatrix(true, false), t2.applyMatrix4(wr.copy(this.matrixWorld).invert());
    }
    lookAt(t2, e2, s2) {
      t2.isVector3 ? Mr.copy(t2) : Mr.set(t2, e2, s2);
      const i2 = this.parent;
      this.updateWorldMatrix(true, false), Sr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? wr.lookAt(Sr, Mr, this.up) : wr.lookAt(Mr, Sr, this.up), this.quaternion.setFromRotationMatrix(wr), i2 && (wr.extractRotation(i2.matrixWorld), vr.setFromRotationMatrix(wr), this.quaternion.premultiply(vr.invert()));
    }
    add(t2) {
      if (arguments.length > 1) {
        for (let t3 = 0; t3 < arguments.length; t3++) this.add(arguments[t3]);
        return this;
      }
      return t2 === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t2), this) : (t2 && t2.isObject3D ? (t2.removeFromParent(), t2.parent = this, this.children.push(t2), t2.dispatchEvent(Ir), kr.child = t2, this.dispatchEvent(kr), kr.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t2), this);
    }
    remove(t2) {
      if (arguments.length > 1) {
        for (let t3 = 0; t3 < arguments.length; t3++) this.remove(arguments[t3]);
        return this;
      }
      const e2 = this.children.indexOf(t2);
      return -1 !== e2 && (t2.parent = null, this.children.splice(e2, 1), t2.dispatchEvent(Br), Er.child = t2, this.dispatchEvent(Er), Er.child = null), this;
    }
    removeFromParent() {
      const t2 = this.parent;
      return null !== t2 && t2.remove(this), this;
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(t2) {
      return this.updateWorldMatrix(true, false), wr.copy(this.matrixWorld).invert(), null !== t2.parent && (t2.parent.updateWorldMatrix(true, false), wr.multiply(t2.parent.matrixWorld)), t2.applyMatrix4(wr), t2.removeFromParent(), t2.parent = this, this.children.push(t2), t2.updateWorldMatrix(false, true), t2.dispatchEvent(Ir), kr.child = t2, this.dispatchEvent(kr), kr.child = null, this;
    }
    getObjectById(t2) {
      return this.getObjectByProperty("id", t2);
    }
    getObjectByName(t2) {
      return this.getObjectByProperty("name", t2);
    }
    getObjectByProperty(t2, e2) {
      if (this[t2] === e2) return this;
      for (let s2 = 0, i2 = this.children.length; s2 < i2; s2++) {
        const i3 = this.children[s2].getObjectByProperty(t2, e2);
        if (void 0 !== i3) return i3;
      }
    }
    getObjectsByProperty(t2, e2, s2 = []) {
      this[t2] === e2 && s2.push(this);
      const i2 = this.children;
      for (let r2 = 0, n2 = i2.length; r2 < n2; r2++) i2[r2].getObjectsByProperty(t2, e2, s2);
      return s2;
    }
    getWorldPosition(t2) {
      return this.updateWorldMatrix(true, false), t2.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(t2) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Sr, t2, _r), t2;
    }
    getWorldScale(t2) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Sr, Ar, t2), t2;
    }
    getWorldDirection(t2) {
      this.updateWorldMatrix(true, false);
      const e2 = this.matrixWorld.elements;
      return t2.set(e2[8], e2[9], e2[10]).normalize();
    }
    raycast() {
    }
    traverse(t2) {
      t2(this);
      const e2 = this.children;
      for (let s2 = 0, i2 = e2.length; s2 < i2; s2++) e2[s2].traverse(t2);
    }
    traverseVisible(t2) {
      if (false === this.visible) return;
      t2(this);
      const e2 = this.children;
      for (let s2 = 0, i2 = e2.length; s2 < i2; s2++) e2[s2].traverseVisible(t2);
    }
    traverseAncestors(t2) {
      const e2 = this.parent;
      null !== e2 && (t2(e2), e2.traverseAncestors(t2));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
    }
    updateMatrixWorld(t2) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t2) && (true === this.matrixWorldAutoUpdate && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, t2 = true);
      const e2 = this.children;
      for (let s2 = 0, i2 = e2.length; s2 < i2; s2++) {
        e2[s2].updateMatrixWorld(t2);
      }
    }
    updateWorldMatrix(t2, e2) {
      const s2 = this.parent;
      if (true === t2 && null !== s2 && s2.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), true === this.matrixWorldAutoUpdate && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), true === e2) {
        const t3 = this.children;
        for (let e3 = 0, s3 = t3.length; e3 < s3; e3++) {
          t3[e3].updateWorldMatrix(false, true);
        }
      }
    }
    toJSON(t2) {
      const e2 = void 0 === t2 || "string" == typeof t2, s2 = {};
      e2 && (t2 = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, s2.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" });
      const i2 = {};
      function r2(e3, s3) {
        return void 0 === e3[s3.uuid] && (e3[s3.uuid] = s3.toJSON(t2)), s3.uuid;
      }
      if (i2.uuid = this.uuid, i2.type = this.type, "" !== this.name && (i2.name = this.name), true === this.castShadow && (i2.castShadow = true), true === this.receiveShadow && (i2.receiveShadow = true), false === this.visible && (i2.visible = false), false === this.frustumCulled && (i2.frustumCulled = false), 0 !== this.renderOrder && (i2.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i2.userData = this.userData), i2.layers = this.layers.mask, i2.matrix = this.matrix.toArray(), i2.up = this.up.toArray(), false === this.matrixAutoUpdate && (i2.matrixAutoUpdate = false), this.isInstancedMesh && (i2.type = "InstancedMesh", i2.count = this.count, i2.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i2.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i2.type = "BatchedMesh", i2.perObjectFrustumCulled = this.perObjectFrustumCulled, i2.sortObjects = this.sortObjects, i2.drawRanges = this._drawRanges, i2.reservedRanges = this._reservedRanges, i2.geometryInfo = this._geometryInfo.map((t3) => ({ ...t3, boundingBox: t3.boundingBox ? t3.boundingBox.toJSON() : void 0, boundingSphere: t3.boundingSphere ? t3.boundingSphere.toJSON() : void 0 })), i2.instanceInfo = this._instanceInfo.map((t3) => ({ ...t3 })), i2.availableInstanceIds = this._availableInstanceIds.slice(), i2.availableGeometryIds = this._availableGeometryIds.slice(), i2.nextIndexStart = this._nextIndexStart, i2.nextVertexStart = this._nextVertexStart, i2.geometryCount = this._geometryCount, i2.maxInstanceCount = this._maxInstanceCount, i2.maxVertexCount = this._maxVertexCount, i2.maxIndexCount = this._maxIndexCount, i2.geometryInitialized = this._geometryInitialized, i2.matricesTexture = this._matricesTexture.toJSON(t2), i2.indirectTexture = this._indirectTexture.toJSON(t2), null !== this._colorsTexture && (i2.colorsTexture = this._colorsTexture.toJSON(t2)), null !== this.boundingSphere && (i2.boundingSphere = this.boundingSphere.toJSON()), null !== this.boundingBox && (i2.boundingBox = this.boundingBox.toJSON())), this.isScene) this.background && (this.background.isColor ? i2.background = this.background.toJSON() : this.background.isTexture && (i2.background = this.background.toJSON(t2).uuid)), this.environment && this.environment.isTexture && true !== this.environment.isRenderTargetTexture && (i2.environment = this.environment.toJSON(t2).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        i2.geometry = r2(t2.geometries, this.geometry);
        const e3 = this.geometry.parameters;
        if (void 0 !== e3 && void 0 !== e3.shapes) {
          const s3 = e3.shapes;
          if (Array.isArray(s3)) for (let e4 = 0, i3 = s3.length; e4 < i3; e4++) {
            const i4 = s3[e4];
            r2(t2.shapes, i4);
          }
          else r2(t2.shapes, s3);
        }
      }
      if (this.isSkinnedMesh && (i2.bindMode = this.bindMode, i2.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r2(t2.skeletons, this.skeleton), i2.skeleton = this.skeleton.uuid)), void 0 !== this.material) if (Array.isArray(this.material)) {
        const e3 = [];
        for (let s3 = 0, i3 = this.material.length; s3 < i3; s3++) e3.push(r2(t2.materials, this.material[s3]));
        i2.material = e3;
      } else i2.material = r2(t2.materials, this.material);
      if (this.children.length > 0) {
        i2.children = [];
        for (let e3 = 0; e3 < this.children.length; e3++) i2.children.push(this.children[e3].toJSON(t2).object);
      }
      if (this.animations.length > 0) {
        i2.animations = [];
        for (let e3 = 0; e3 < this.animations.length; e3++) {
          const s3 = this.animations[e3];
          i2.animations.push(r2(t2.animations, s3));
        }
      }
      if (e2) {
        const e3 = n2(t2.geometries), i3 = n2(t2.materials), r3 = n2(t2.textures), a2 = n2(t2.images), o2 = n2(t2.shapes), h2 = n2(t2.skeletons), l2 = n2(t2.animations), c2 = n2(t2.nodes);
        e3.length > 0 && (s2.geometries = e3), i3.length > 0 && (s2.materials = i3), r3.length > 0 && (s2.textures = r3), a2.length > 0 && (s2.images = a2), o2.length > 0 && (s2.shapes = o2), h2.length > 0 && (s2.skeletons = h2), l2.length > 0 && (s2.animations = l2), c2.length > 0 && (s2.nodes = c2);
      }
      return s2.object = i2, s2;
      function n2(t3) {
        const e3 = [];
        for (const s3 in t3) {
          const i3 = t3[s3];
          delete i3.metadata, e3.push(i3);
        }
        return e3;
      }
    }
    clone(t2) {
      return new this.constructor().copy(this, t2);
    }
    copy(t2, e2 = true) {
      if (this.name = t2.name, this.up.copy(t2.up), this.position.copy(t2.position), this.rotation.order = t2.rotation.order, this.quaternion.copy(t2.quaternion), this.scale.copy(t2.scale), this.matrix.copy(t2.matrix), this.matrixWorld.copy(t2.matrixWorld), this.matrixAutoUpdate = t2.matrixAutoUpdate, this.matrixWorldAutoUpdate = t2.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t2.matrixWorldNeedsUpdate, this.layers.mask = t2.layers.mask, this.visible = t2.visible, this.castShadow = t2.castShadow, this.receiveShadow = t2.receiveShadow, this.frustumCulled = t2.frustumCulled, this.renderOrder = t2.renderOrder, this.animations = t2.animations.slice(), this.userData = JSON.parse(JSON.stringify(t2.userData)), true === e2) for (let e3 = 0; e3 < t2.children.length; e3++) {
        const s2 = t2.children[e3];
        this.add(s2.clone());
      }
      return this;
    }
  };
  Rr.DEFAULT_UP = new Ks(0, 1, 0), Rr.DEFAULT_MATRIX_AUTO_UPDATE = true, Rr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
  var Pr = new Ks();
  var Or = new Ks();
  var Nr = new Ks();
  var Vr = new Ks();
  var Fr = new Ks();
  var Lr = new Ks();
  var jr = new Ks();
  var Dr = new Ks();
  var Wr = new Ks();
  var Ur = new Ks();
  var Hr = new Ti();
  var qr = new Ti();
  var Jr = new Ti();
  var Xr = class _Xr {
    constructor(t2 = new Ks(), e2 = new Ks(), s2 = new Ks()) {
      this.a = t2, this.b = e2, this.c = s2;
    }
    static getNormal(t2, e2, s2, i2) {
      i2.subVectors(s2, e2), Pr.subVectors(t2, e2), i2.cross(Pr);
      const r2 = i2.lengthSq();
      return r2 > 0 ? i2.multiplyScalar(1 / Math.sqrt(r2)) : i2.set(0, 0, 0);
    }
    static getBarycoord(t2, e2, s2, i2, r2) {
      Pr.subVectors(i2, e2), Or.subVectors(s2, e2), Nr.subVectors(t2, e2);
      const n2 = Pr.dot(Pr), a2 = Pr.dot(Or), o2 = Pr.dot(Nr), h2 = Or.dot(Or), l2 = Or.dot(Nr), c2 = n2 * h2 - a2 * a2;
      if (0 === c2) return r2.set(0, 0, 0), null;
      const u2 = 1 / c2, d2 = (h2 * o2 - a2 * l2) * u2, p2 = (n2 * l2 - a2 * o2) * u2;
      return r2.set(1 - d2 - p2, p2, d2);
    }
    static containsPoint(t2, e2, s2, i2) {
      return null !== this.getBarycoord(t2, e2, s2, i2, Vr) && (Vr.x >= 0 && Vr.y >= 0 && Vr.x + Vr.y <= 1);
    }
    static getInterpolation(t2, e2, s2, i2, r2, n2, a2, o2) {
      return null === this.getBarycoord(t2, e2, s2, i2, Vr) ? (o2.x = 0, o2.y = 0, "z" in o2 && (o2.z = 0), "w" in o2 && (o2.w = 0), null) : (o2.setScalar(0), o2.addScaledVector(r2, Vr.x), o2.addScaledVector(n2, Vr.y), o2.addScaledVector(a2, Vr.z), o2);
    }
    static getInterpolatedAttribute(t2, e2, s2, i2, r2, n2) {
      return Hr.setScalar(0), qr.setScalar(0), Jr.setScalar(0), Hr.fromBufferAttribute(t2, e2), qr.fromBufferAttribute(t2, s2), Jr.fromBufferAttribute(t2, i2), n2.setScalar(0), n2.addScaledVector(Hr, r2.x), n2.addScaledVector(qr, r2.y), n2.addScaledVector(Jr, r2.z), n2;
    }
    static isFrontFacing(t2, e2, s2, i2) {
      return Pr.subVectors(s2, e2), Or.subVectors(t2, e2), Pr.cross(Or).dot(i2) < 0;
    }
    set(t2, e2, s2) {
      return this.a.copy(t2), this.b.copy(e2), this.c.copy(s2), this;
    }
    setFromPointsAndIndices(t2, e2, s2, i2) {
      return this.a.copy(t2[e2]), this.b.copy(t2[s2]), this.c.copy(t2[i2]), this;
    }
    setFromAttributeAndIndices(t2, e2, s2, i2) {
      return this.a.fromBufferAttribute(t2, e2), this.b.fromBufferAttribute(t2, s2), this.c.fromBufferAttribute(t2, i2), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.a.copy(t2.a), this.b.copy(t2.b), this.c.copy(t2.c), this;
    }
    getArea() {
      return Pr.subVectors(this.c, this.b), Or.subVectors(this.a, this.b), 0.5 * Pr.cross(Or).length();
    }
    getMidpoint(t2) {
      return t2.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(t2) {
      return _Xr.getNormal(this.a, this.b, this.c, t2);
    }
    getPlane(t2) {
      return t2.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t2, e2) {
      return _Xr.getBarycoord(t2, this.a, this.b, this.c, e2);
    }
    getInterpolation(t2, e2, s2, i2, r2) {
      return _Xr.getInterpolation(t2, this.a, this.b, this.c, e2, s2, i2, r2);
    }
    containsPoint(t2) {
      return _Xr.containsPoint(t2, this.a, this.b, this.c);
    }
    isFrontFacing(t2) {
      return _Xr.isFrontFacing(this.a, this.b, this.c, t2);
    }
    intersectsBox(t2) {
      return t2.intersectsTriangle(this);
    }
    closestPointToPoint(t2, e2) {
      const s2 = this.a, i2 = this.b, r2 = this.c;
      let n2, a2;
      Fr.subVectors(i2, s2), Lr.subVectors(r2, s2), Dr.subVectors(t2, s2);
      const o2 = Fr.dot(Dr), h2 = Lr.dot(Dr);
      if (o2 <= 0 && h2 <= 0) return e2.copy(s2);
      Wr.subVectors(t2, i2);
      const l2 = Fr.dot(Wr), c2 = Lr.dot(Wr);
      if (l2 >= 0 && c2 <= l2) return e2.copy(i2);
      const u2 = o2 * c2 - l2 * h2;
      if (u2 <= 0 && o2 >= 0 && l2 <= 0) return n2 = o2 / (o2 - l2), e2.copy(s2).addScaledVector(Fr, n2);
      Ur.subVectors(t2, r2);
      const d2 = Fr.dot(Ur), p2 = Lr.dot(Ur);
      if (p2 >= 0 && d2 <= p2) return e2.copy(r2);
      const m2 = d2 * h2 - o2 * p2;
      if (m2 <= 0 && h2 >= 0 && p2 <= 0) return a2 = h2 / (h2 - p2), e2.copy(s2).addScaledVector(Lr, a2);
      const y2 = l2 * p2 - d2 * c2;
      if (y2 <= 0 && c2 - l2 >= 0 && d2 - p2 >= 0) return jr.subVectors(r2, i2), a2 = (c2 - l2) / (c2 - l2 + (d2 - p2)), e2.copy(i2).addScaledVector(jr, a2);
      const g2 = 1 / (y2 + m2 + u2);
      return n2 = m2 * g2, a2 = u2 * g2, e2.copy(s2).addScaledVector(Fr, n2).addScaledVector(Lr, a2);
    }
    equals(t2) {
      return t2.a.equals(this.a) && t2.b.equals(this.b) && t2.c.equals(this.c);
    }
  };
  var Yr = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
  var Zr = { h: 0, s: 0, l: 0 };
  var Gr = { h: 0, s: 0, l: 0 };
  function $r(t2, e2, s2) {
    return s2 < 0 && (s2 += 1), s2 > 1 && (s2 -= 1), s2 < 1 / 6 ? t2 + 6 * (e2 - t2) * s2 : s2 < 0.5 ? e2 : s2 < 2 / 3 ? t2 + 6 * (e2 - t2) * (2 / 3 - s2) : t2;
  }
  var Qr = class {
    constructor(t2, e2, s2) {
      return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(t2, e2, s2);
    }
    set(t2, e2, s2) {
      if (void 0 === e2 && void 0 === s2) {
        const e3 = t2;
        e3 && e3.isColor ? this.copy(e3) : "number" == typeof e3 ? this.setHex(e3) : "string" == typeof e3 && this.setStyle(e3);
      } else this.setRGB(t2, e2, s2);
      return this;
    }
    setScalar(t2) {
      return this.r = t2, this.g = t2, this.b = t2, this;
    }
    setHex(t2, e2 = Ze) {
      return t2 = Math.floor(t2), this.r = (t2 >> 16 & 255) / 255, this.g = (t2 >> 8 & 255) / 255, this.b = (255 & t2) / 255, yi.colorSpaceToWorking(this, e2), this;
    }
    setRGB(t2, e2, s2, i2 = yi.workingColorSpace) {
      return this.r = t2, this.g = e2, this.b = s2, yi.colorSpaceToWorking(this, i2), this;
    }
    setHSL(t2, e2, s2, i2 = yi.workingColorSpace) {
      if (t2 = Js(t2, 1), e2 = qs(e2, 0, 1), s2 = qs(s2, 0, 1), 0 === e2) this.r = this.g = this.b = s2;
      else {
        const i3 = s2 <= 0.5 ? s2 * (1 + e2) : s2 + e2 - s2 * e2, r2 = 2 * s2 - i3;
        this.r = $r(r2, i3, t2 + 1 / 3), this.g = $r(r2, i3, t2), this.b = $r(r2, i3, t2 - 1 / 3);
      }
      return yi.colorSpaceToWorking(this, i2), this;
    }
    setStyle(t2, e2 = Ze) {
      function s2(e3) {
        void 0 !== e3 && parseFloat(e3) < 1 && console.warn("THREE.Color: Alpha component of " + t2 + " will be ignored.");
      }
      let i2;
      if (i2 = /^(\w+)\(([^\)]*)\)/.exec(t2)) {
        let r2;
        const n2 = i2[1], a2 = i2[2];
        switch (n2) {
          case "rgb":
          case "rgba":
            if (r2 = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a2)) return s2(r2[4]), this.setRGB(Math.min(255, parseInt(r2[1], 10)) / 255, Math.min(255, parseInt(r2[2], 10)) / 255, Math.min(255, parseInt(r2[3], 10)) / 255, e2);
            if (r2 = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a2)) return s2(r2[4]), this.setRGB(Math.min(100, parseInt(r2[1], 10)) / 100, Math.min(100, parseInt(r2[2], 10)) / 100, Math.min(100, parseInt(r2[3], 10)) / 100, e2);
            break;
          case "hsl":
          case "hsla":
            if (r2 = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a2)) return s2(r2[4]), this.setHSL(parseFloat(r2[1]) / 360, parseFloat(r2[2]) / 100, parseFloat(r2[3]) / 100, e2);
            break;
          default:
            console.warn("THREE.Color: Unknown color model " + t2);
        }
      } else if (i2 = /^\#([A-Fa-f\d]+)$/.exec(t2)) {
        const s3 = i2[1], r2 = s3.length;
        if (3 === r2) return this.setRGB(parseInt(s3.charAt(0), 16) / 15, parseInt(s3.charAt(1), 16) / 15, parseInt(s3.charAt(2), 16) / 15, e2);
        if (6 === r2) return this.setHex(parseInt(s3, 16), e2);
        console.warn("THREE.Color: Invalid hex color " + t2);
      } else if (t2 && t2.length > 0) return this.setColorName(t2, e2);
      return this;
    }
    setColorName(t2, e2 = Ze) {
      const s2 = Yr[t2.toLowerCase()];
      return void 0 !== s2 ? this.setHex(s2, e2) : console.warn("THREE.Color: Unknown color " + t2), this;
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(t2) {
      return this.r = t2.r, this.g = t2.g, this.b = t2.b, this;
    }
    copySRGBToLinear(t2) {
      return this.r = gi(t2.r), this.g = gi(t2.g), this.b = gi(t2.b), this;
    }
    copyLinearToSRGB(t2) {
      return this.r = fi(t2.r), this.g = fi(t2.g), this.b = fi(t2.b), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(t2 = Ze) {
      return yi.workingToColorSpace(Kr.copy(this), t2), 65536 * Math.round(qs(255 * Kr.r, 0, 255)) + 256 * Math.round(qs(255 * Kr.g, 0, 255)) + Math.round(qs(255 * Kr.b, 0, 255));
    }
    getHexString(t2 = Ze) {
      return ("000000" + this.getHex(t2).toString(16)).slice(-6);
    }
    getHSL(t2, e2 = yi.workingColorSpace) {
      yi.workingToColorSpace(Kr.copy(this), e2);
      const s2 = Kr.r, i2 = Kr.g, r2 = Kr.b, n2 = Math.max(s2, i2, r2), a2 = Math.min(s2, i2, r2);
      let o2, h2;
      const l2 = (a2 + n2) / 2;
      if (a2 === n2) o2 = 0, h2 = 0;
      else {
        const t3 = n2 - a2;
        switch (h2 = l2 <= 0.5 ? t3 / (n2 + a2) : t3 / (2 - n2 - a2), n2) {
          case s2:
            o2 = (i2 - r2) / t3 + (i2 < r2 ? 6 : 0);
            break;
          case i2:
            o2 = (r2 - s2) / t3 + 2;
            break;
          case r2:
            o2 = (s2 - i2) / t3 + 4;
        }
        o2 /= 6;
      }
      return t2.h = o2, t2.s = h2, t2.l = l2, t2;
    }
    getRGB(t2, e2 = yi.workingColorSpace) {
      return yi.workingToColorSpace(Kr.copy(this), e2), t2.r = Kr.r, t2.g = Kr.g, t2.b = Kr.b, t2;
    }
    getStyle(t2 = Ze) {
      yi.workingToColorSpace(Kr.copy(this), t2);
      const e2 = Kr.r, s2 = Kr.g, i2 = Kr.b;
      return t2 !== Ze ? `color(${t2} ${e2.toFixed(3)} ${s2.toFixed(3)} ${i2.toFixed(3)})` : `rgb(${Math.round(255 * e2)},${Math.round(255 * s2)},${Math.round(255 * i2)})`;
    }
    offsetHSL(t2, e2, s2) {
      return this.getHSL(Zr), this.setHSL(Zr.h + t2, Zr.s + e2, Zr.l + s2);
    }
    add(t2) {
      return this.r += t2.r, this.g += t2.g, this.b += t2.b, this;
    }
    addColors(t2, e2) {
      return this.r = t2.r + e2.r, this.g = t2.g + e2.g, this.b = t2.b + e2.b, this;
    }
    addScalar(t2) {
      return this.r += t2, this.g += t2, this.b += t2, this;
    }
    sub(t2) {
      return this.r = Math.max(0, this.r - t2.r), this.g = Math.max(0, this.g - t2.g), this.b = Math.max(0, this.b - t2.b), this;
    }
    multiply(t2) {
      return this.r *= t2.r, this.g *= t2.g, this.b *= t2.b, this;
    }
    multiplyScalar(t2) {
      return this.r *= t2, this.g *= t2, this.b *= t2, this;
    }
    lerp(t2, e2) {
      return this.r += (t2.r - this.r) * e2, this.g += (t2.g - this.g) * e2, this.b += (t2.b - this.b) * e2, this;
    }
    lerpColors(t2, e2, s2) {
      return this.r = t2.r + (e2.r - t2.r) * s2, this.g = t2.g + (e2.g - t2.g) * s2, this.b = t2.b + (e2.b - t2.b) * s2, this;
    }
    lerpHSL(t2, e2) {
      this.getHSL(Zr), t2.getHSL(Gr);
      const s2 = Xs(Zr.h, Gr.h, e2), i2 = Xs(Zr.s, Gr.s, e2), r2 = Xs(Zr.l, Gr.l, e2);
      return this.setHSL(s2, i2, r2), this;
    }
    setFromVector3(t2) {
      return this.r = t2.x, this.g = t2.y, this.b = t2.z, this;
    }
    applyMatrix3(t2) {
      const e2 = this.r, s2 = this.g, i2 = this.b, r2 = t2.elements;
      return this.r = r2[0] * e2 + r2[3] * s2 + r2[6] * i2, this.g = r2[1] * e2 + r2[4] * s2 + r2[7] * i2, this.b = r2[2] * e2 + r2[5] * s2 + r2[8] * i2, this;
    }
    equals(t2) {
      return t2.r === this.r && t2.g === this.g && t2.b === this.b;
    }
    fromArray(t2, e2 = 0) {
      return this.r = t2[e2], this.g = t2[e2 + 1], this.b = t2[e2 + 2], this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this.r, t2[e2 + 1] = this.g, t2[e2 + 2] = this.b, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this.r = t2.getX(e2), this.g = t2.getY(e2), this.b = t2.getZ(e2), this;
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  };
  var Kr = new Qr();
  Qr.NAMES = Yr;
  var tn = 0;
  var en = class extends Ls {
    constructor() {
      super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: tn++ }), this.uuid = Hs(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Qr(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ts, this.stencilZFail = ts, this.stencilZPass = ts, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(t2) {
      this._alphaTest > 0 != t2 > 0 && this.version++, this._alphaTest = t2;
    }
    onBeforeRender() {
    }
    onBeforeCompile() {
    }
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(t2) {
      if (void 0 !== t2) for (const e2 in t2) {
        const s2 = t2[e2];
        if (void 0 === s2) {
          console.warn(`THREE.Material: parameter '${e2}' has value of undefined.`);
          continue;
        }
        const i2 = this[e2];
        void 0 !== i2 ? i2 && i2.isColor ? i2.set(s2) : i2 && i2.isVector3 && s2 && s2.isVector3 ? i2.copy(s2) : this[e2] = s2 : console.warn(`THREE.Material: '${e2}' is not a property of THREE.${this.type}.`);
      }
    }
    toJSON(t2) {
      const e2 = void 0 === t2 || "string" == typeof t2;
      e2 && (t2 = { textures: {}, images: {} });
      const s2 = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
      function i2(t3) {
        const e3 = [];
        for (const s3 in t3) {
          const i3 = t3[s3];
          delete i3.metadata, e3.push(i3);
        }
        return e3;
      }
      if (s2.uuid = this.uuid, s2.type = this.type, "" !== this.name && (s2.name = this.name), this.color && this.color.isColor && (s2.color = this.color.getHex()), void 0 !== this.roughness && (s2.roughness = this.roughness), void 0 !== this.metalness && (s2.metalness = this.metalness), void 0 !== this.sheen && (s2.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (s2.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (s2.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (s2.emissive = this.emissive.getHex()), void 0 !== this.emissiveIntensity && 1 !== this.emissiveIntensity && (s2.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (s2.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (s2.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (s2.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (s2.shininess = this.shininess), void 0 !== this.clearcoat && (s2.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (s2.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (s2.clearcoatMap = this.clearcoatMap.toJSON(t2).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (s2.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t2).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (s2.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t2).uuid, s2.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (s2.sheenColorMap = this.sheenColorMap.toJSON(t2).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (s2.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t2).uuid), void 0 !== this.dispersion && (s2.dispersion = this.dispersion), void 0 !== this.iridescence && (s2.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (s2.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (s2.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (s2.iridescenceMap = this.iridescenceMap.toJSON(t2).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (s2.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t2).uuid), void 0 !== this.anisotropy && (s2.anisotropy = this.anisotropy), void 0 !== this.anisotropyRotation && (s2.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (s2.anisotropyMap = this.anisotropyMap.toJSON(t2).uuid), this.map && this.map.isTexture && (s2.map = this.map.toJSON(t2).uuid), this.matcap && this.matcap.isTexture && (s2.matcap = this.matcap.toJSON(t2).uuid), this.alphaMap && this.alphaMap.isTexture && (s2.alphaMap = this.alphaMap.toJSON(t2).uuid), this.lightMap && this.lightMap.isTexture && (s2.lightMap = this.lightMap.toJSON(t2).uuid, s2.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (s2.aoMap = this.aoMap.toJSON(t2).uuid, s2.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (s2.bumpMap = this.bumpMap.toJSON(t2).uuid, s2.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (s2.normalMap = this.normalMap.toJSON(t2).uuid, s2.normalMapType = this.normalMapType, s2.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (s2.displacementMap = this.displacementMap.toJSON(t2).uuid, s2.displacementScale = this.displacementScale, s2.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (s2.roughnessMap = this.roughnessMap.toJSON(t2).uuid), this.metalnessMap && this.metalnessMap.isTexture && (s2.metalnessMap = this.metalnessMap.toJSON(t2).uuid), this.emissiveMap && this.emissiveMap.isTexture && (s2.emissiveMap = this.emissiveMap.toJSON(t2).uuid), this.specularMap && this.specularMap.isTexture && (s2.specularMap = this.specularMap.toJSON(t2).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (s2.specularIntensityMap = this.specularIntensityMap.toJSON(t2).uuid), this.specularColorMap && this.specularColorMap.isTexture && (s2.specularColorMap = this.specularColorMap.toJSON(t2).uuid), this.envMap && this.envMap.isTexture && (s2.envMap = this.envMap.toJSON(t2).uuid, void 0 !== this.combine && (s2.combine = this.combine)), void 0 !== this.envMapRotation && (s2.envMapRotation = this.envMapRotation.toArray()), void 0 !== this.envMapIntensity && (s2.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (s2.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (s2.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (s2.gradientMap = this.gradientMap.toJSON(t2).uuid), void 0 !== this.transmission && (s2.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (s2.transmissionMap = this.transmissionMap.toJSON(t2).uuid), void 0 !== this.thickness && (s2.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (s2.thicknessMap = this.thicknessMap.toJSON(t2).uuid), void 0 !== this.attenuationDistance && this.attenuationDistance !== 1 / 0 && (s2.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (s2.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (s2.size = this.size), null !== this.shadowSide && (s2.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (s2.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (s2.blending = this.blending), 0 !== this.side && (s2.side = this.side), true === this.vertexColors && (s2.vertexColors = true), this.opacity < 1 && (s2.opacity = this.opacity), true === this.transparent && (s2.transparent = true), 204 !== this.blendSrc && (s2.blendSrc = this.blendSrc), 205 !== this.blendDst && (s2.blendDst = this.blendDst), 100 !== this.blendEquation && (s2.blendEquation = this.blendEquation), null !== this.blendSrcAlpha && (s2.blendSrcAlpha = this.blendSrcAlpha), null !== this.blendDstAlpha && (s2.blendDstAlpha = this.blendDstAlpha), null !== this.blendEquationAlpha && (s2.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (s2.blendColor = this.blendColor.getHex()), 0 !== this.blendAlpha && (s2.blendAlpha = this.blendAlpha), 3 !== this.depthFunc && (s2.depthFunc = this.depthFunc), false === this.depthTest && (s2.depthTest = this.depthTest), false === this.depthWrite && (s2.depthWrite = this.depthWrite), false === this.colorWrite && (s2.colorWrite = this.colorWrite), 255 !== this.stencilWriteMask && (s2.stencilWriteMask = this.stencilWriteMask), 519 !== this.stencilFunc && (s2.stencilFunc = this.stencilFunc), 0 !== this.stencilRef && (s2.stencilRef = this.stencilRef), 255 !== this.stencilFuncMask && (s2.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== ts && (s2.stencilFail = this.stencilFail), this.stencilZFail !== ts && (s2.stencilZFail = this.stencilZFail), this.stencilZPass !== ts && (s2.stencilZPass = this.stencilZPass), true === this.stencilWrite && (s2.stencilWrite = this.stencilWrite), void 0 !== this.rotation && 0 !== this.rotation && (s2.rotation = this.rotation), true === this.polygonOffset && (s2.polygonOffset = true), 0 !== this.polygonOffsetFactor && (s2.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (s2.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (s2.linewidth = this.linewidth), void 0 !== this.dashSize && (s2.dashSize = this.dashSize), void 0 !== this.gapSize && (s2.gapSize = this.gapSize), void 0 !== this.scale && (s2.scale = this.scale), true === this.dithering && (s2.dithering = true), this.alphaTest > 0 && (s2.alphaTest = this.alphaTest), true === this.alphaHash && (s2.alphaHash = true), true === this.alphaToCoverage && (s2.alphaToCoverage = true), true === this.premultipliedAlpha && (s2.premultipliedAlpha = true), true === this.forceSinglePass && (s2.forceSinglePass = true), true === this.wireframe && (s2.wireframe = true), this.wireframeLinewidth > 1 && (s2.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (s2.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (s2.wireframeLinejoin = this.wireframeLinejoin), true === this.flatShading && (s2.flatShading = true), false === this.visible && (s2.visible = false), false === this.toneMapped && (s2.toneMapped = false), false === this.fog && (s2.fog = false), Object.keys(this.userData).length > 0 && (s2.userData = this.userData), e2) {
        const e3 = i2(t2.textures), r2 = i2(t2.images);
        e3.length > 0 && (s2.textures = e3), r2.length > 0 && (s2.images = r2);
      }
      return s2;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.name = t2.name, this.blending = t2.blending, this.side = t2.side, this.vertexColors = t2.vertexColors, this.opacity = t2.opacity, this.transparent = t2.transparent, this.blendSrc = t2.blendSrc, this.blendDst = t2.blendDst, this.blendEquation = t2.blendEquation, this.blendSrcAlpha = t2.blendSrcAlpha, this.blendDstAlpha = t2.blendDstAlpha, this.blendEquationAlpha = t2.blendEquationAlpha, this.blendColor.copy(t2.blendColor), this.blendAlpha = t2.blendAlpha, this.depthFunc = t2.depthFunc, this.depthTest = t2.depthTest, this.depthWrite = t2.depthWrite, this.stencilWriteMask = t2.stencilWriteMask, this.stencilFunc = t2.stencilFunc, this.stencilRef = t2.stencilRef, this.stencilFuncMask = t2.stencilFuncMask, this.stencilFail = t2.stencilFail, this.stencilZFail = t2.stencilZFail, this.stencilZPass = t2.stencilZPass, this.stencilWrite = t2.stencilWrite;
      const e2 = t2.clippingPlanes;
      let s2 = null;
      if (null !== e2) {
        const t3 = e2.length;
        s2 = new Array(t3);
        for (let i2 = 0; i2 !== t3; ++i2) s2[i2] = e2[i2].clone();
      }
      return this.clippingPlanes = s2, this.clipIntersection = t2.clipIntersection, this.clipShadows = t2.clipShadows, this.shadowSide = t2.shadowSide, this.colorWrite = t2.colorWrite, this.precision = t2.precision, this.polygonOffset = t2.polygonOffset, this.polygonOffsetFactor = t2.polygonOffsetFactor, this.polygonOffsetUnits = t2.polygonOffsetUnits, this.dithering = t2.dithering, this.alphaTest = t2.alphaTest, this.alphaHash = t2.alphaHash, this.alphaToCoverage = t2.alphaToCoverage, this.premultipliedAlpha = t2.premultipliedAlpha, this.forceSinglePass = t2.forceSinglePass, this.visible = t2.visible, this.toneMapped = t2.toneMapped, this.userData = JSON.parse(JSON.stringify(t2.userData)), this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
  };
  var sn = class extends en {
    constructor(t2) {
      super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Qr(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new gr(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.lightMap = t2.lightMap, this.lightMapIntensity = t2.lightMapIntensity, this.aoMap = t2.aoMap, this.aoMapIntensity = t2.aoMapIntensity, this.specularMap = t2.specularMap, this.alphaMap = t2.alphaMap, this.envMap = t2.envMap, this.envMapRotation.copy(t2.envMapRotation), this.combine = t2.combine, this.reflectivity = t2.reflectivity, this.refractionRatio = t2.refractionRatio, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.wireframeLinecap = t2.wireframeLinecap, this.wireframeLinejoin = t2.wireframeLinejoin, this.fog = t2.fog, this;
    }
  };
  var rn = nn();
  function nn() {
    const t2 = new ArrayBuffer(4), e2 = new Float32Array(t2), s2 = new Uint32Array(t2), i2 = new Uint32Array(512), r2 = new Uint32Array(512);
    for (let t3 = 0; t3 < 256; ++t3) {
      const e3 = t3 - 127;
      e3 < -27 ? (i2[t3] = 0, i2[256 | t3] = 32768, r2[t3] = 24, r2[256 | t3] = 24) : e3 < -14 ? (i2[t3] = 1024 >> -e3 - 14, i2[256 | t3] = 1024 >> -e3 - 14 | 32768, r2[t3] = -e3 - 1, r2[256 | t3] = -e3 - 1) : e3 <= 15 ? (i2[t3] = e3 + 15 << 10, i2[256 | t3] = e3 + 15 << 10 | 32768, r2[t3] = 13, r2[256 | t3] = 13) : e3 < 128 ? (i2[t3] = 31744, i2[256 | t3] = 64512, r2[t3] = 24, r2[256 | t3] = 24) : (i2[t3] = 31744, i2[256 | t3] = 64512, r2[t3] = 13, r2[256 | t3] = 13);
    }
    const n2 = new Uint32Array(2048), a2 = new Uint32Array(64), o2 = new Uint32Array(64);
    for (let t3 = 1; t3 < 1024; ++t3) {
      let e3 = t3 << 13, s3 = 0;
      for (; !(8388608 & e3); ) e3 <<= 1, s3 -= 8388608;
      e3 &= -8388609, s3 += 947912704, n2[t3] = e3 | s3;
    }
    for (let t3 = 1024; t3 < 2048; ++t3) n2[t3] = 939524096 + (t3 - 1024 << 13);
    for (let t3 = 1; t3 < 31; ++t3) a2[t3] = t3 << 23;
    a2[31] = 1199570944, a2[32] = 2147483648;
    for (let t3 = 33; t3 < 63; ++t3) a2[t3] = 2147483648 + (t3 - 32 << 23);
    a2[63] = 3347054592;
    for (let t3 = 1; t3 < 64; ++t3) 32 !== t3 && (o2[t3] = 1024);
    return { floatView: e2, uint32View: s2, baseTable: i2, shiftTable: r2, mantissaTable: n2, exponentTable: a2, offsetTable: o2 };
  }
  var ln = new Ks();
  var cn = new $s();
  var un = 0;
  var dn = class {
    constructor(t2, e2, s2 = false) {
      if (Array.isArray(t2)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: un++ }), this.name = "", this.array = t2, this.itemSize = e2, this.count = void 0 !== t2 ? t2.length / e2 : 0, this.normalized = s2, this.usage = Ss, this.updateRanges = [], this.gpuType = Et, this.version = 0;
    }
    onUploadCallback() {
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
    setUsage(t2) {
      return this.usage = t2, this;
    }
    addUpdateRange(t2, e2) {
      this.updateRanges.push({ start: t2, count: e2 });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(t2) {
      return this.name = t2.name, this.array = new t2.array.constructor(t2.array), this.itemSize = t2.itemSize, this.count = t2.count, this.normalized = t2.normalized, this.usage = t2.usage, this.gpuType = t2.gpuType, this;
    }
    copyAt(t2, e2, s2) {
      t2 *= this.itemSize, s2 *= e2.itemSize;
      for (let i2 = 0, r2 = this.itemSize; i2 < r2; i2++) this.array[t2 + i2] = e2.array[s2 + i2];
      return this;
    }
    copyArray(t2) {
      return this.array.set(t2), this;
    }
    applyMatrix3(t2) {
      if (2 === this.itemSize) for (let e2 = 0, s2 = this.count; e2 < s2; e2++) cn.fromBufferAttribute(this, e2), cn.applyMatrix3(t2), this.setXY(e2, cn.x, cn.y);
      else if (3 === this.itemSize) for (let e2 = 0, s2 = this.count; e2 < s2; e2++) ln.fromBufferAttribute(this, e2), ln.applyMatrix3(t2), this.setXYZ(e2, ln.x, ln.y, ln.z);
      return this;
    }
    applyMatrix4(t2) {
      for (let e2 = 0, s2 = this.count; e2 < s2; e2++) ln.fromBufferAttribute(this, e2), ln.applyMatrix4(t2), this.setXYZ(e2, ln.x, ln.y, ln.z);
      return this;
    }
    applyNormalMatrix(t2) {
      for (let e2 = 0, s2 = this.count; e2 < s2; e2++) ln.fromBufferAttribute(this, e2), ln.applyNormalMatrix(t2), this.setXYZ(e2, ln.x, ln.y, ln.z);
      return this;
    }
    transformDirection(t2) {
      for (let e2 = 0, s2 = this.count; e2 < s2; e2++) ln.fromBufferAttribute(this, e2), ln.transformDirection(t2), this.setXYZ(e2, ln.x, ln.y, ln.z);
      return this;
    }
    set(t2, e2 = 0) {
      return this.array.set(t2, e2), this;
    }
    getComponent(t2, e2) {
      let s2 = this.array[t2 * this.itemSize + e2];
      return this.normalized && (s2 = Ys(s2, this.array)), s2;
    }
    setComponent(t2, e2, s2) {
      return this.normalized && (s2 = Zs(s2, this.array)), this.array[t2 * this.itemSize + e2] = s2, this;
    }
    getX(t2) {
      let e2 = this.array[t2 * this.itemSize];
      return this.normalized && (e2 = Ys(e2, this.array)), e2;
    }
    setX(t2, e2) {
      return this.normalized && (e2 = Zs(e2, this.array)), this.array[t2 * this.itemSize] = e2, this;
    }
    getY(t2) {
      let e2 = this.array[t2 * this.itemSize + 1];
      return this.normalized && (e2 = Ys(e2, this.array)), e2;
    }
    setY(t2, e2) {
      return this.normalized && (e2 = Zs(e2, this.array)), this.array[t2 * this.itemSize + 1] = e2, this;
    }
    getZ(t2) {
      let e2 = this.array[t2 * this.itemSize + 2];
      return this.normalized && (e2 = Ys(e2, this.array)), e2;
    }
    setZ(t2, e2) {
      return this.normalized && (e2 = Zs(e2, this.array)), this.array[t2 * this.itemSize + 2] = e2, this;
    }
    getW(t2) {
      let e2 = this.array[t2 * this.itemSize + 3];
      return this.normalized && (e2 = Ys(e2, this.array)), e2;
    }
    setW(t2, e2) {
      return this.normalized && (e2 = Zs(e2, this.array)), this.array[t2 * this.itemSize + 3] = e2, this;
    }
    setXY(t2, e2, s2) {
      return t2 *= this.itemSize, this.normalized && (e2 = Zs(e2, this.array), s2 = Zs(s2, this.array)), this.array[t2 + 0] = e2, this.array[t2 + 1] = s2, this;
    }
    setXYZ(t2, e2, s2, i2) {
      return t2 *= this.itemSize, this.normalized && (e2 = Zs(e2, this.array), s2 = Zs(s2, this.array), i2 = Zs(i2, this.array)), this.array[t2 + 0] = e2, this.array[t2 + 1] = s2, this.array[t2 + 2] = i2, this;
    }
    setXYZW(t2, e2, s2, i2, r2) {
      return t2 *= this.itemSize, this.normalized && (e2 = Zs(e2, this.array), s2 = Zs(s2, this.array), i2 = Zs(i2, this.array), r2 = Zs(r2, this.array)), this.array[t2 + 0] = e2, this.array[t2 + 1] = s2, this.array[t2 + 2] = i2, this.array[t2 + 3] = r2, this;
    }
    onUpload(t2) {
      return this.onUploadCallback = t2, this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const t2 = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
      return "" !== this.name && (t2.name = this.name), this.usage !== Ss && (t2.usage = this.usage), t2;
    }
  };
  var fn = class extends dn {
    constructor(t2, e2, s2) {
      super(new Uint16Array(t2), e2, s2);
    }
  };
  var bn = class extends dn {
    constructor(t2, e2, s2) {
      super(new Uint32Array(t2), e2, s2);
    }
  };
  var wn = class extends dn {
    constructor(t2, e2, s2) {
      super(new Float32Array(t2), e2, s2);
    }
  };
  var Mn = 0;
  var Sn = new ar();
  var _n = new Rr();
  var An = new Ks();
  var Tn = new Ri();
  var zn = new Ri();
  var Cn = new Ks();
  var In = class _In extends Ls {
    constructor() {
      super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: Mn++ }), this.uuid = Hs(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
    }
    getIndex() {
      return this.index;
    }
    setIndex(t2) {
      return Array.isArray(t2) ? this.index = new (ri(t2) ? bn : fn)(t2, 1) : this.index = t2, this;
    }
    setIndirect(t2) {
      return this.indirect = t2, this;
    }
    getIndirect() {
      return this.indirect;
    }
    getAttribute(t2) {
      return this.attributes[t2];
    }
    setAttribute(t2, e2) {
      return this.attributes[t2] = e2, this;
    }
    deleteAttribute(t2) {
      return delete this.attributes[t2], this;
    }
    hasAttribute(t2) {
      return void 0 !== this.attributes[t2];
    }
    addGroup(t2, e2, s2 = 0) {
      this.groups.push({ start: t2, count: e2, materialIndex: s2 });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(t2, e2) {
      this.drawRange.start = t2, this.drawRange.count = e2;
    }
    applyMatrix4(t2) {
      const e2 = this.attributes.position;
      void 0 !== e2 && (e2.applyMatrix4(t2), e2.needsUpdate = true);
      const s2 = this.attributes.normal;
      if (void 0 !== s2) {
        const e3 = new si().getNormalMatrix(t2);
        s2.applyNormalMatrix(e3), s2.needsUpdate = true;
      }
      const i2 = this.attributes.tangent;
      return void 0 !== i2 && (i2.transformDirection(t2), i2.needsUpdate = true), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
    }
    applyQuaternion(t2) {
      return Sn.makeRotationFromQuaternion(t2), this.applyMatrix4(Sn), this;
    }
    rotateX(t2) {
      return Sn.makeRotationX(t2), this.applyMatrix4(Sn), this;
    }
    rotateY(t2) {
      return Sn.makeRotationY(t2), this.applyMatrix4(Sn), this;
    }
    rotateZ(t2) {
      return Sn.makeRotationZ(t2), this.applyMatrix4(Sn), this;
    }
    translate(t2, e2, s2) {
      return Sn.makeTranslation(t2, e2, s2), this.applyMatrix4(Sn), this;
    }
    scale(t2, e2, s2) {
      return Sn.makeScale(t2, e2, s2), this.applyMatrix4(Sn), this;
    }
    lookAt(t2) {
      return _n.lookAt(t2), _n.updateMatrix(), this.applyMatrix4(_n.matrix), this;
    }
    center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(An).negate(), this.translate(An.x, An.y, An.z), this;
    }
    setFromPoints(t2) {
      const e2 = this.getAttribute("position");
      if (void 0 === e2) {
        const e3 = [];
        for (let s2 = 0, i2 = t2.length; s2 < i2; s2++) {
          const i3 = t2[s2];
          e3.push(i3.x, i3.y, i3.z || 0);
        }
        this.setAttribute("position", new wn(e3, 3));
      } else {
        const s2 = Math.min(t2.length, e2.count);
        for (let i2 = 0; i2 < s2; i2++) {
          const s3 = t2[i2];
          e2.setXYZ(i2, s3.x, s3.y, s3.z || 0);
        }
        t2.length > e2.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e2.needsUpdate = true;
      }
      return this;
    }
    computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new Ri());
      const t2 = this.attributes.position, e2 = this.morphAttributes.position;
      if (t2 && t2.isGLBufferAttribute) return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), void this.boundingBox.set(new Ks(-1 / 0, -1 / 0, -1 / 0), new Ks(1 / 0, 1 / 0, 1 / 0));
      if (void 0 !== t2) {
        if (this.boundingBox.setFromBufferAttribute(t2), e2) for (let t3 = 0, s2 = e2.length; t3 < s2; t3++) {
          const s3 = e2[t3];
          Tn.setFromBufferAttribute(s3), this.morphTargetsRelative ? (Cn.addVectors(this.boundingBox.min, Tn.min), this.boundingBox.expandByPoint(Cn), Cn.addVectors(this.boundingBox.max, Tn.max), this.boundingBox.expandByPoint(Cn)) : (this.boundingBox.expandByPoint(Tn.min), this.boundingBox.expandByPoint(Tn.max));
        }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new $i());
      const t2 = this.attributes.position, e2 = this.morphAttributes.position;
      if (t2 && t2.isGLBufferAttribute) return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), void this.boundingSphere.set(new Ks(), 1 / 0);
      if (t2) {
        const s2 = this.boundingSphere.center;
        if (Tn.setFromBufferAttribute(t2), e2) for (let t3 = 0, s3 = e2.length; t3 < s3; t3++) {
          const s4 = e2[t3];
          zn.setFromBufferAttribute(s4), this.morphTargetsRelative ? (Cn.addVectors(Tn.min, zn.min), Tn.expandByPoint(Cn), Cn.addVectors(Tn.max, zn.max), Tn.expandByPoint(Cn)) : (Tn.expandByPoint(zn.min), Tn.expandByPoint(zn.max));
        }
        Tn.getCenter(s2);
        let i2 = 0;
        for (let e3 = 0, r2 = t2.count; e3 < r2; e3++) Cn.fromBufferAttribute(t2, e3), i2 = Math.max(i2, s2.distanceToSquared(Cn));
        if (e2) for (let r2 = 0, n2 = e2.length; r2 < n2; r2++) {
          const n3 = e2[r2], a2 = this.morphTargetsRelative;
          for (let e3 = 0, r3 = n3.count; e3 < r3; e3++) Cn.fromBufferAttribute(n3, e3), a2 && (An.fromBufferAttribute(t2, e3), Cn.add(An)), i2 = Math.max(i2, s2.distanceToSquared(Cn));
        }
        this.boundingSphere.radius = Math.sqrt(i2), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
    computeTangents() {
      const t2 = this.index, e2 = this.attributes;
      if (null === t2 || void 0 === e2.position || void 0 === e2.normal || void 0 === e2.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      const s2 = e2.position, i2 = e2.normal, r2 = e2.uv;
      false === this.hasAttribute("tangent") && this.setAttribute("tangent", new dn(new Float32Array(4 * s2.count), 4));
      const n2 = this.getAttribute("tangent"), a2 = [], o2 = [];
      for (let t3 = 0; t3 < s2.count; t3++) a2[t3] = new Ks(), o2[t3] = new Ks();
      const h2 = new Ks(), l2 = new Ks(), c2 = new Ks(), u2 = new $s(), d2 = new $s(), p2 = new $s(), m2 = new Ks(), y2 = new Ks();
      function g2(t3, e3, i3) {
        h2.fromBufferAttribute(s2, t3), l2.fromBufferAttribute(s2, e3), c2.fromBufferAttribute(s2, i3), u2.fromBufferAttribute(r2, t3), d2.fromBufferAttribute(r2, e3), p2.fromBufferAttribute(r2, i3), l2.sub(h2), c2.sub(h2), d2.sub(u2), p2.sub(u2);
        const n3 = 1 / (d2.x * p2.y - p2.x * d2.y);
        isFinite(n3) && (m2.copy(l2).multiplyScalar(p2.y).addScaledVector(c2, -d2.y).multiplyScalar(n3), y2.copy(c2).multiplyScalar(d2.x).addScaledVector(l2, -p2.x).multiplyScalar(n3), a2[t3].add(m2), a2[e3].add(m2), a2[i3].add(m2), o2[t3].add(y2), o2[e3].add(y2), o2[i3].add(y2));
      }
      let f2 = this.groups;
      0 === f2.length && (f2 = [{ start: 0, count: t2.count }]);
      for (let e3 = 0, s3 = f2.length; e3 < s3; ++e3) {
        const s4 = f2[e3], i3 = s4.start;
        for (let e4 = i3, r3 = i3 + s4.count; e4 < r3; e4 += 3) g2(t2.getX(e4 + 0), t2.getX(e4 + 1), t2.getX(e4 + 2));
      }
      const x2 = new Ks(), b2 = new Ks(), v2 = new Ks(), w2 = new Ks();
      function M2(t3) {
        v2.fromBufferAttribute(i2, t3), w2.copy(v2);
        const e3 = a2[t3];
        x2.copy(e3), x2.sub(v2.multiplyScalar(v2.dot(e3))).normalize(), b2.crossVectors(w2, e3);
        const s3 = b2.dot(o2[t3]) < 0 ? -1 : 1;
        n2.setXYZW(t3, x2.x, x2.y, x2.z, s3);
      }
      for (let e3 = 0, s3 = f2.length; e3 < s3; ++e3) {
        const s4 = f2[e3], i3 = s4.start;
        for (let e4 = i3, r3 = i3 + s4.count; e4 < r3; e4 += 3) M2(t2.getX(e4 + 0)), M2(t2.getX(e4 + 1)), M2(t2.getX(e4 + 2));
      }
    }
    computeVertexNormals() {
      const t2 = this.index, e2 = this.getAttribute("position");
      if (void 0 !== e2) {
        let s2 = this.getAttribute("normal");
        if (void 0 === s2) s2 = new dn(new Float32Array(3 * e2.count), 3), this.setAttribute("normal", s2);
        else for (let t3 = 0, e3 = s2.count; t3 < e3; t3++) s2.setXYZ(t3, 0, 0, 0);
        const i2 = new Ks(), r2 = new Ks(), n2 = new Ks(), a2 = new Ks(), o2 = new Ks(), h2 = new Ks(), l2 = new Ks(), c2 = new Ks();
        if (t2) for (let u2 = 0, d2 = t2.count; u2 < d2; u2 += 3) {
          const d3 = t2.getX(u2 + 0), p2 = t2.getX(u2 + 1), m2 = t2.getX(u2 + 2);
          i2.fromBufferAttribute(e2, d3), r2.fromBufferAttribute(e2, p2), n2.fromBufferAttribute(e2, m2), l2.subVectors(n2, r2), c2.subVectors(i2, r2), l2.cross(c2), a2.fromBufferAttribute(s2, d3), o2.fromBufferAttribute(s2, p2), h2.fromBufferAttribute(s2, m2), a2.add(l2), o2.add(l2), h2.add(l2), s2.setXYZ(d3, a2.x, a2.y, a2.z), s2.setXYZ(p2, o2.x, o2.y, o2.z), s2.setXYZ(m2, h2.x, h2.y, h2.z);
        }
        else for (let t3 = 0, a3 = e2.count; t3 < a3; t3 += 3) i2.fromBufferAttribute(e2, t3 + 0), r2.fromBufferAttribute(e2, t3 + 1), n2.fromBufferAttribute(e2, t3 + 2), l2.subVectors(n2, r2), c2.subVectors(i2, r2), l2.cross(c2), s2.setXYZ(t3 + 0, l2.x, l2.y, l2.z), s2.setXYZ(t3 + 1, l2.x, l2.y, l2.z), s2.setXYZ(t3 + 2, l2.x, l2.y, l2.z);
        this.normalizeNormals(), s2.needsUpdate = true;
      }
    }
    normalizeNormals() {
      const t2 = this.attributes.normal;
      for (let e2 = 0, s2 = t2.count; e2 < s2; e2++) Cn.fromBufferAttribute(t2, e2), Cn.normalize(), t2.setXYZ(e2, Cn.x, Cn.y, Cn.z);
    }
    toNonIndexed() {
      function t2(t3, e3) {
        const s3 = t3.array, i3 = t3.itemSize, r3 = t3.normalized, n3 = new s3.constructor(e3.length * i3);
        let a2 = 0, o2 = 0;
        for (let r4 = 0, h2 = e3.length; r4 < h2; r4++) {
          a2 = t3.isInterleavedBufferAttribute ? e3[r4] * t3.data.stride + t3.offset : e3[r4] * i3;
          for (let t4 = 0; t4 < i3; t4++) n3[o2++] = s3[a2++];
        }
        return new dn(n3, i3, r3);
      }
      if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
      const e2 = new _In(), s2 = this.index.array, i2 = this.attributes;
      for (const r3 in i2) {
        const n3 = t2(i2[r3], s2);
        e2.setAttribute(r3, n3);
      }
      const r2 = this.morphAttributes;
      for (const i3 in r2) {
        const n3 = [], a2 = r2[i3];
        for (let e3 = 0, i4 = a2.length; e3 < i4; e3++) {
          const i5 = t2(a2[e3], s2);
          n3.push(i5);
        }
        e2.morphAttributes[i3] = n3;
      }
      e2.morphTargetsRelative = this.morphTargetsRelative;
      const n2 = this.groups;
      for (let t3 = 0, s3 = n2.length; t3 < s3; t3++) {
        const s4 = n2[t3];
        e2.addGroup(s4.start, s4.count, s4.materialIndex);
      }
      return e2;
    }
    toJSON() {
      const t2 = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
      if (t2.uuid = this.uuid, t2.type = this.type, "" !== this.name && (t2.name = this.name), Object.keys(this.userData).length > 0 && (t2.userData = this.userData), void 0 !== this.parameters) {
        const e3 = this.parameters;
        for (const s3 in e3) void 0 !== e3[s3] && (t2[s3] = e3[s3]);
        return t2;
      }
      t2.data = { attributes: {} };
      const e2 = this.index;
      null !== e2 && (t2.data.index = { type: e2.array.constructor.name, array: Array.prototype.slice.call(e2.array) });
      const s2 = this.attributes;
      for (const e3 in s2) {
        const i3 = s2[e3];
        t2.data.attributes[e3] = i3.toJSON(t2.data);
      }
      const i2 = {};
      let r2 = false;
      for (const e3 in this.morphAttributes) {
        const s3 = this.morphAttributes[e3], n3 = [];
        for (let e4 = 0, i3 = s3.length; e4 < i3; e4++) {
          const i4 = s3[e4];
          n3.push(i4.toJSON(t2.data));
        }
        n3.length > 0 && (i2[e3] = n3, r2 = true);
      }
      r2 && (t2.data.morphAttributes = i2, t2.data.morphTargetsRelative = this.morphTargetsRelative);
      const n2 = this.groups;
      n2.length > 0 && (t2.data.groups = JSON.parse(JSON.stringify(n2)));
      const a2 = this.boundingSphere;
      return null !== a2 && (t2.data.boundingSphere = a2.toJSON()), t2;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
      const e2 = {};
      this.name = t2.name;
      const s2 = t2.index;
      null !== s2 && this.setIndex(s2.clone());
      const i2 = t2.attributes;
      for (const t3 in i2) {
        const s3 = i2[t3];
        this.setAttribute(t3, s3.clone(e2));
      }
      const r2 = t2.morphAttributes;
      for (const t3 in r2) {
        const s3 = [], i3 = r2[t3];
        for (let t4 = 0, r3 = i3.length; t4 < r3; t4++) s3.push(i3[t4].clone(e2));
        this.morphAttributes[t3] = s3;
      }
      this.morphTargetsRelative = t2.morphTargetsRelative;
      const n2 = t2.groups;
      for (let t3 = 0, e3 = n2.length; t3 < e3; t3++) {
        const e4 = n2[t3];
        this.addGroup(e4.start, e4.count, e4.materialIndex);
      }
      const a2 = t2.boundingBox;
      null !== a2 && (this.boundingBox = a2.clone());
      const o2 = t2.boundingSphere;
      return null !== o2 && (this.boundingSphere = o2.clone()), this.drawRange.start = t2.drawRange.start, this.drawRange.count = t2.drawRange.count, this.userData = t2.userData, this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
  var Bn = new ar();
  var kn = new nr();
  var En = new $i();
  var Rn = new Ks();
  var Pn = new Ks();
  var On = new Ks();
  var Nn = new Ks();
  var Vn = new Ks();
  var Fn = new Ks();
  var Ln = new Ks();
  var jn = new Ks();
  var Dn = class extends Rr {
    constructor(t2 = new In(), e2 = new sn()) {
      super(), this.isMesh = true, this.type = "Mesh", this.geometry = t2, this.material = e2, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), void 0 !== t2.morphTargetInfluences && (this.morphTargetInfluences = t2.morphTargetInfluences.slice()), void 0 !== t2.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t2.morphTargetDictionary)), this.material = Array.isArray(t2.material) ? t2.material.slice() : t2.material, this.geometry = t2.geometry, this;
    }
    updateMorphTargets() {
      const t2 = this.geometry.morphAttributes, e2 = Object.keys(t2);
      if (e2.length > 0) {
        const s2 = t2[e2[0]];
        if (void 0 !== s2) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let t3 = 0, e3 = s2.length; t3 < e3; t3++) {
            const e4 = s2[t3].name || String(t3);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[e4] = t3;
          }
        }
      }
    }
    getVertexPosition(t2, e2) {
      const s2 = this.geometry, i2 = s2.attributes.position, r2 = s2.morphAttributes.position, n2 = s2.morphTargetsRelative;
      e2.fromBufferAttribute(i2, t2);
      const a2 = this.morphTargetInfluences;
      if (r2 && a2) {
        Fn.set(0, 0, 0);
        for (let s3 = 0, i3 = r2.length; s3 < i3; s3++) {
          const i4 = a2[s3], o2 = r2[s3];
          0 !== i4 && (Vn.fromBufferAttribute(o2, t2), n2 ? Fn.addScaledVector(Vn, i4) : Fn.addScaledVector(Vn.sub(e2), i4));
        }
        e2.add(Fn);
      }
      return e2;
    }
    raycast(t2, e2) {
      const s2 = this.geometry, i2 = this.material, r2 = this.matrixWorld;
      if (void 0 !== i2) {
        if (null === s2.boundingSphere && s2.computeBoundingSphere(), En.copy(s2.boundingSphere), En.applyMatrix4(r2), kn.copy(t2.ray).recast(t2.near), false === En.containsPoint(kn.origin)) {
          if (null === kn.intersectSphere(En, Rn)) return;
          if (kn.origin.distanceToSquared(Rn) > (t2.far - t2.near) ** 2) return;
        }
        Bn.copy(r2).invert(), kn.copy(t2.ray).applyMatrix4(Bn), null !== s2.boundingBox && false === kn.intersectsBox(s2.boundingBox) || this._computeIntersections(t2, e2, kn);
      }
    }
    _computeIntersections(t2, e2, s2) {
      let i2;
      const r2 = this.geometry, n2 = this.material, a2 = r2.index, o2 = r2.attributes.position, h2 = r2.attributes.uv, l2 = r2.attributes.uv1, c2 = r2.attributes.normal, u2 = r2.groups, d2 = r2.drawRange;
      if (null !== a2) if (Array.isArray(n2)) for (let r3 = 0, o3 = u2.length; r3 < o3; r3++) {
        const o4 = u2[r3], p2 = n2[o4.materialIndex];
        for (let r4 = Math.max(o4.start, d2.start), n3 = Math.min(a2.count, Math.min(o4.start + o4.count, d2.start + d2.count)); r4 < n3; r4 += 3) {
          i2 = Wn(this, p2, t2, s2, h2, l2, c2, a2.getX(r4), a2.getX(r4 + 1), a2.getX(r4 + 2)), i2 && (i2.faceIndex = Math.floor(r4 / 3), i2.face.materialIndex = o4.materialIndex, e2.push(i2));
        }
      }
      else {
        for (let r3 = Math.max(0, d2.start), o3 = Math.min(a2.count, d2.start + d2.count); r3 < o3; r3 += 3) {
          i2 = Wn(this, n2, t2, s2, h2, l2, c2, a2.getX(r3), a2.getX(r3 + 1), a2.getX(r3 + 2)), i2 && (i2.faceIndex = Math.floor(r3 / 3), e2.push(i2));
        }
      }
      else if (void 0 !== o2) if (Array.isArray(n2)) for (let r3 = 0, a3 = u2.length; r3 < a3; r3++) {
        const a4 = u2[r3], p2 = n2[a4.materialIndex];
        for (let r4 = Math.max(a4.start, d2.start), n3 = Math.min(o2.count, Math.min(a4.start + a4.count, d2.start + d2.count)); r4 < n3; r4 += 3) {
          i2 = Wn(this, p2, t2, s2, h2, l2, c2, r4, r4 + 1, r4 + 2), i2 && (i2.faceIndex = Math.floor(r4 / 3), i2.face.materialIndex = a4.materialIndex, e2.push(i2));
        }
      }
      else {
        for (let r3 = Math.max(0, d2.start), a3 = Math.min(o2.count, d2.start + d2.count); r3 < a3; r3 += 3) {
          i2 = Wn(this, n2, t2, s2, h2, l2, c2, r3, r3 + 1, r3 + 2), i2 && (i2.faceIndex = Math.floor(r3 / 3), e2.push(i2));
        }
      }
    }
  };
  function Wn(t2, e2, s2, i2, r2, n2, a2, o2, h2, l2) {
    t2.getVertexPosition(o2, Pn), t2.getVertexPosition(h2, On), t2.getVertexPosition(l2, Nn);
    const c2 = function(t3, e3, s3, i3, r3, n3, a3, o3) {
      let h3;
      if (h3 = 1 === e3.side ? i3.intersectTriangle(a3, n3, r3, true, o3) : i3.intersectTriangle(r3, n3, a3, 0 === e3.side, o3), null === h3) return null;
      jn.copy(o3), jn.applyMatrix4(t3.matrixWorld);
      const l3 = s3.ray.origin.distanceTo(jn);
      return l3 < s3.near || l3 > s3.far ? null : { distance: l3, point: jn.clone(), object: t3 };
    }(t2, e2, s2, i2, Pn, On, Nn, Ln);
    if (c2) {
      const t3 = new Ks();
      Xr.getBarycoord(Ln, Pn, On, Nn, t3), r2 && (c2.uv = Xr.getInterpolatedAttribute(r2, o2, h2, l2, t3, new $s())), n2 && (c2.uv1 = Xr.getInterpolatedAttribute(n2, o2, h2, l2, t3, new $s())), a2 && (c2.normal = Xr.getInterpolatedAttribute(a2, o2, h2, l2, t3, new Ks()), c2.normal.dot(i2.direction) > 0 && c2.normal.multiplyScalar(-1));
      const e3 = { a: o2, b: h2, c: l2, normal: new Ks(), materialIndex: 0 };
      Xr.getNormal(Pn, On, Nn, e3.normal), c2.face = e3, c2.barycoord = t3;
    }
    return c2;
  }
  var Un = class _Un extends In {
    constructor(t2 = 1, e2 = 1, s2 = 1, i2 = 1, r2 = 1, n2 = 1) {
      super(), this.type = "BoxGeometry", this.parameters = { width: t2, height: e2, depth: s2, widthSegments: i2, heightSegments: r2, depthSegments: n2 };
      const a2 = this;
      i2 = Math.floor(i2), r2 = Math.floor(r2), n2 = Math.floor(n2);
      const o2 = [], h2 = [], l2 = [], c2 = [];
      let u2 = 0, d2 = 0;
      function p2(t3, e3, s3, i3, r3, n3, p3, m2, y2, g2, f2) {
        const x2 = n3 / y2, b2 = p3 / g2, v2 = n3 / 2, w2 = p3 / 2, M2 = m2 / 2, S2 = y2 + 1, _2 = g2 + 1;
        let A2 = 0, T2 = 0;
        const z2 = new Ks();
        for (let n4 = 0; n4 < _2; n4++) {
          const a3 = n4 * b2 - w2;
          for (let o3 = 0; o3 < S2; o3++) {
            const u3 = o3 * x2 - v2;
            z2[t3] = u3 * i3, z2[e3] = a3 * r3, z2[s3] = M2, h2.push(z2.x, z2.y, z2.z), z2[t3] = 0, z2[e3] = 0, z2[s3] = m2 > 0 ? 1 : -1, l2.push(z2.x, z2.y, z2.z), c2.push(o3 / y2), c2.push(1 - n4 / g2), A2 += 1;
          }
        }
        for (let t4 = 0; t4 < g2; t4++) for (let e4 = 0; e4 < y2; e4++) {
          const s4 = u2 + e4 + S2 * t4, i4 = u2 + e4 + S2 * (t4 + 1), r4 = u2 + (e4 + 1) + S2 * (t4 + 1), n4 = u2 + (e4 + 1) + S2 * t4;
          o2.push(s4, i4, n4), o2.push(i4, r4, n4), T2 += 6;
        }
        a2.addGroup(d2, T2, f2), d2 += T2, u2 += A2;
      }
      p2("z", "y", "x", -1, -1, s2, e2, t2, n2, r2, 0), p2("z", "y", "x", 1, -1, s2, e2, -t2, n2, r2, 1), p2("x", "z", "y", 1, 1, t2, s2, e2, i2, n2, 2), p2("x", "z", "y", 1, -1, t2, s2, -e2, i2, n2, 3), p2("x", "y", "z", 1, -1, t2, e2, s2, i2, r2, 4), p2("x", "y", "z", -1, -1, t2, e2, -s2, i2, r2, 5), this.setIndex(o2), this.setAttribute("position", new wn(h2, 3)), this.setAttribute("normal", new wn(l2, 3)), this.setAttribute("uv", new wn(c2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Un(t2.width, t2.height, t2.depth, t2.widthSegments, t2.heightSegments, t2.depthSegments);
    }
  };
  function Hn(t2) {
    const e2 = {};
    for (const s2 in t2) {
      e2[s2] = {};
      for (const i2 in t2[s2]) {
        const r2 = t2[s2][i2];
        r2 && (r2.isColor || r2.isMatrix3 || r2.isMatrix4 || r2.isVector2 || r2.isVector3 || r2.isVector4 || r2.isTexture || r2.isQuaternion) ? r2.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e2[s2][i2] = null) : e2[s2][i2] = r2.clone() : Array.isArray(r2) ? e2[s2][i2] = r2.slice() : e2[s2][i2] = r2;
      }
    }
    return e2;
  }
  function qn(t2) {
    const e2 = {};
    for (let s2 = 0; s2 < t2.length; s2++) {
      const i2 = Hn(t2[s2]);
      for (const t3 in i2) e2[t3] = i2[t3];
    }
    return e2;
  }
  function Jn(t2) {
    const e2 = t2.getRenderTarget();
    return null === e2 ? t2.outputColorSpace : true === e2.isXRRenderTarget ? e2.texture.colorSpace : yi.workingColorSpace;
  }
  var Xn = { clone: Hn, merge: qn };
  var Yn = class extends en {
    constructor(t2) {
      super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, void 0 !== t2 && this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.fragmentShader = t2.fragmentShader, this.vertexShader = t2.vertexShader, this.uniforms = Hn(t2.uniforms), this.uniformsGroups = function(t3) {
        const e2 = [];
        for (let s2 = 0; s2 < t3.length; s2++) e2.push(t3[s2].clone());
        return e2;
      }(t2.uniformsGroups), this.defines = Object.assign({}, t2.defines), this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.fog = t2.fog, this.lights = t2.lights, this.clipping = t2.clipping, this.extensions = Object.assign({}, t2.extensions), this.glslVersion = t2.glslVersion, this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      e2.glslVersion = this.glslVersion, e2.uniforms = {};
      for (const s3 in this.uniforms) {
        const i2 = this.uniforms[s3].value;
        i2 && i2.isTexture ? e2.uniforms[s3] = { type: "t", value: i2.toJSON(t2).uuid } : i2 && i2.isColor ? e2.uniforms[s3] = { type: "c", value: i2.getHex() } : i2 && i2.isVector2 ? e2.uniforms[s3] = { type: "v2", value: i2.toArray() } : i2 && i2.isVector3 ? e2.uniforms[s3] = { type: "v3", value: i2.toArray() } : i2 && i2.isVector4 ? e2.uniforms[s3] = { type: "v4", value: i2.toArray() } : i2 && i2.isMatrix3 ? e2.uniforms[s3] = { type: "m3", value: i2.toArray() } : i2 && i2.isMatrix4 ? e2.uniforms[s3] = { type: "m4", value: i2.toArray() } : e2.uniforms[s3] = { value: i2 };
      }
      Object.keys(this.defines).length > 0 && (e2.defines = this.defines), e2.vertexShader = this.vertexShader, e2.fragmentShader = this.fragmentShader, e2.lights = this.lights, e2.clipping = this.clipping;
      const s2 = {};
      for (const t3 in this.extensions) true === this.extensions[t3] && (s2[t3] = true);
      return Object.keys(s2).length > 0 && (e2.extensions = s2), e2;
    }
  };
  var Zn = class extends Rr {
    constructor() {
      super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new ar(), this.projectionMatrix = new ar(), this.projectionMatrixInverse = new ar(), this.coordinateSystem = Ps, this._reversedDepth = false;
    }
    get reversedDepth() {
      return this._reversedDepth;
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.matrixWorldInverse.copy(t2.matrixWorldInverse), this.projectionMatrix.copy(t2.projectionMatrix), this.projectionMatrixInverse.copy(t2.projectionMatrixInverse), this.coordinateSystem = t2.coordinateSystem, this;
    }
    getWorldDirection(t2) {
      return super.getWorldDirection(t2).negate();
    }
    updateMatrixWorld(t2) {
      super.updateMatrixWorld(t2), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(t2, e2) {
      super.updateWorldMatrix(t2, e2), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var Gn = new Ks();
  var $n = new $s();
  var Qn = new $s();
  var Kn = class extends Zn {
    constructor(t2 = 50, e2 = 1, s2 = 0.1, i2 = 2e3) {
      super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t2, this.zoom = 1, this.near = s2, this.far = i2, this.focus = 10, this.aspect = e2, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.fov = t2.fov, this.zoom = t2.zoom, this.near = t2.near, this.far = t2.far, this.focus = t2.focus, this.aspect = t2.aspect, this.view = null === t2.view ? null : Object.assign({}, t2.view), this.filmGauge = t2.filmGauge, this.filmOffset = t2.filmOffset, this;
    }
    setFocalLength(t2) {
      const e2 = 0.5 * this.getFilmHeight() / t2;
      this.fov = 2 * Us * Math.atan(e2), this.updateProjectionMatrix();
    }
    getFocalLength() {
      const t2 = Math.tan(0.5 * Ws * this.fov);
      return 0.5 * this.getFilmHeight() / t2;
    }
    getEffectiveFOV() {
      return 2 * Us * Math.atan(Math.tan(0.5 * Ws * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    getViewBounds(t2, e2, s2) {
      Gn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e2.set(Gn.x, Gn.y).multiplyScalar(-t2 / Gn.z), Gn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), s2.set(Gn.x, Gn.y).multiplyScalar(-t2 / Gn.z);
    }
    getViewSize(t2, e2) {
      return this.getViewBounds(t2, $n, Qn), e2.subVectors(Qn, $n);
    }
    setViewOffset(t2, e2, s2, i2, r2, n2) {
      this.aspect = t2 / e2, null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t2, this.view.fullHeight = e2, this.view.offsetX = s2, this.view.offsetY = i2, this.view.width = r2, this.view.height = n2, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t2 = this.near;
      let e2 = t2 * Math.tan(0.5 * Ws * this.fov) / this.zoom, s2 = 2 * e2, i2 = this.aspect * s2, r2 = -0.5 * i2;
      const n2 = this.view;
      if (null !== this.view && this.view.enabled) {
        const t3 = n2.fullWidth, a3 = n2.fullHeight;
        r2 += n2.offsetX * i2 / t3, e2 -= n2.offsetY * s2 / a3, i2 *= n2.width / t3, s2 *= n2.height / a3;
      }
      const a2 = this.filmOffset;
      0 !== a2 && (r2 += t2 * a2 / this.getFilmWidth()), this.projectionMatrix.makePerspective(r2, r2 + i2, e2, e2 - s2, t2, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return e2.object.fov = this.fov, e2.object.zoom = this.zoom, e2.object.near = this.near, e2.object.far = this.far, e2.object.focus = this.focus, e2.object.aspect = this.aspect, null !== this.view && (e2.object.view = Object.assign({}, this.view)), e2.object.filmGauge = this.filmGauge, e2.object.filmOffset = this.filmOffset, e2;
    }
  };
  var ta = -90;
  var ea = class extends Rr {
    constructor(t2, e2, s2) {
      super(), this.type = "CubeCamera", this.renderTarget = s2, this.coordinateSystem = null, this.activeMipmapLevel = 0;
      const i2 = new Kn(ta, 1, t2, e2);
      i2.layers = this.layers, this.add(i2);
      const r2 = new Kn(ta, 1, t2, e2);
      r2.layers = this.layers, this.add(r2);
      const n2 = new Kn(ta, 1, t2, e2);
      n2.layers = this.layers, this.add(n2);
      const a2 = new Kn(ta, 1, t2, e2);
      a2.layers = this.layers, this.add(a2);
      const o2 = new Kn(ta, 1, t2, e2);
      o2.layers = this.layers, this.add(o2);
      const h2 = new Kn(ta, 1, t2, e2);
      h2.layers = this.layers, this.add(h2);
    }
    updateCoordinateSystem() {
      const t2 = this.coordinateSystem, e2 = this.children.concat(), [s2, i2, r2, n2, a2, o2] = e2;
      for (const t3 of e2) this.remove(t3);
      if (t2 === Ps) s2.up.set(0, 1, 0), s2.lookAt(1, 0, 0), i2.up.set(0, 1, 0), i2.lookAt(-1, 0, 0), r2.up.set(0, 0, -1), r2.lookAt(0, 1, 0), n2.up.set(0, 0, 1), n2.lookAt(0, -1, 0), a2.up.set(0, 1, 0), a2.lookAt(0, 0, 1), o2.up.set(0, 1, 0), o2.lookAt(0, 0, -1);
      else {
        if (t2 !== Os) throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t2);
        s2.up.set(0, -1, 0), s2.lookAt(-1, 0, 0), i2.up.set(0, -1, 0), i2.lookAt(1, 0, 0), r2.up.set(0, 0, 1), r2.lookAt(0, 1, 0), n2.up.set(0, 0, -1), n2.lookAt(0, -1, 0), a2.up.set(0, -1, 0), a2.lookAt(0, 0, 1), o2.up.set(0, -1, 0), o2.lookAt(0, 0, -1);
      }
      for (const t3 of e2) this.add(t3), t3.updateMatrixWorld();
    }
    update(t2, e2) {
      null === this.parent && this.updateMatrixWorld();
      const { renderTarget: s2, activeMipmapLevel: i2 } = this;
      this.coordinateSystem !== t2.coordinateSystem && (this.coordinateSystem = t2.coordinateSystem, this.updateCoordinateSystem());
      const [r2, n2, a2, o2, h2, l2] = this.children, c2 = t2.getRenderTarget(), u2 = t2.getActiveCubeFace(), d2 = t2.getActiveMipmapLevel(), p2 = t2.xr.enabled;
      t2.xr.enabled = false;
      const m2 = s2.texture.generateMipmaps;
      s2.texture.generateMipmaps = false, t2.setRenderTarget(s2, 0, i2), t2.render(e2, r2), t2.setRenderTarget(s2, 1, i2), t2.render(e2, n2), t2.setRenderTarget(s2, 2, i2), t2.render(e2, a2), t2.setRenderTarget(s2, 3, i2), t2.render(e2, o2), t2.setRenderTarget(s2, 4, i2), t2.render(e2, h2), s2.texture.generateMipmaps = m2, t2.setRenderTarget(s2, 5, i2), t2.render(e2, l2), t2.setRenderTarget(c2, u2, d2), t2.xr.enabled = p2, s2.texture.needsPMREMUpdate = true;
    }
  };
  var sa = class extends Ai {
    constructor(t2 = [], e2 = 301, s2, i2, r2, n2, a2, o2, h2, l2) {
      super(t2, e2, s2, i2, r2, n2, a2, o2, h2, l2), this.isCubeTexture = true, this.flipY = false;
    }
    get images() {
      return this.image;
    }
    set images(t2) {
      this.image = t2;
    }
  };
  var ia = class extends Ci {
    constructor(t2 = 1, e2 = {}) {
      super(t2, t2, e2), this.isWebGLCubeRenderTarget = true;
      const s2 = { width: t2, height: t2, depth: 1 }, i2 = [s2, s2, s2, s2, s2, s2];
      this.texture = new sa(i2), this._setTextureOptions(e2), this.texture.isRenderTargetTexture = true;
    }
    fromEquirectangularTexture(t2, e2) {
      this.texture.type = e2.type, this.texture.colorSpace = e2.colorSpace, this.texture.generateMipmaps = e2.generateMipmaps, this.texture.minFilter = e2.minFilter, this.texture.magFilter = e2.magFilter;
      const s2 = { uniforms: { tEquirect: { value: null } }, vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			", fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			" }, i2 = new Un(5, 5, 5), r2 = new Yn({ name: "CubemapFromEquirect", uniforms: Hn(s2.uniforms), vertexShader: s2.vertexShader, fragmentShader: s2.fragmentShader, side: 1, blending: 0 });
      r2.uniforms.tEquirect.value = e2;
      const n2 = new Dn(i2, r2), a2 = e2.minFilter;
      e2.minFilter === _t && (e2.minFilter = wt);
      return new ea(1, 10, this).update(t2, n2), e2.minFilter = a2, n2.geometry.dispose(), n2.material.dispose(), this;
    }
    clear(t2, e2 = true, s2 = true, i2 = true) {
      const r2 = t2.getRenderTarget();
      for (let r3 = 0; r3 < 6; r3++) t2.setRenderTarget(this, r3), t2.clear(e2, s2, i2);
      t2.setRenderTarget(r2);
    }
  };
  var ra = class extends Rr {
    constructor() {
      super(), this.isGroup = true, this.type = "Group";
    }
  };
  var na = { type: "move" };
  var aa = class {
    constructor() {
      this._targetRay = null, this._grip = null, this._hand = null;
    }
    getHandSpace() {
      return null === this._hand && (this._hand = new ra(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
    }
    getTargetRaySpace() {
      return null === this._targetRay && (this._targetRay = new ra(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new Ks(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new Ks()), this._targetRay;
    }
    getGripSpace() {
      return null === this._grip && (this._grip = new ra(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new Ks(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new Ks()), this._grip;
    }
    dispatchEvent(t2) {
      return null !== this._targetRay && this._targetRay.dispatchEvent(t2), null !== this._grip && this._grip.dispatchEvent(t2), null !== this._hand && this._hand.dispatchEvent(t2), this;
    }
    connect(t2) {
      if (t2 && t2.hand) {
        const e2 = this._hand;
        if (e2) for (const s2 of t2.hand.values()) this._getHandJoint(e2, s2);
      }
      return this.dispatchEvent({ type: "connected", data: t2 }), this;
    }
    disconnect(t2) {
      return this.dispatchEvent({ type: "disconnected", data: t2 }), null !== this._targetRay && (this._targetRay.visible = false), null !== this._grip && (this._grip.visible = false), null !== this._hand && (this._hand.visible = false), this;
    }
    update(t2, e2, s2) {
      let i2 = null, r2 = null, n2 = null;
      const a2 = this._targetRay, o2 = this._grip, h2 = this._hand;
      if (t2 && "visible-blurred" !== e2.session.visibilityState) {
        if (h2 && t2.hand) {
          n2 = true;
          for (const i4 of t2.hand.values()) {
            const t3 = e2.getJointPose(i4, s2), r4 = this._getHandJoint(h2, i4);
            null !== t3 && (r4.matrix.fromArray(t3.transform.matrix), r4.matrix.decompose(r4.position, r4.rotation, r4.scale), r4.matrixWorldNeedsUpdate = true, r4.jointRadius = t3.radius), r4.visible = null !== t3;
          }
          const i3 = h2.joints["index-finger-tip"], r3 = h2.joints["thumb-tip"], a3 = i3.position.distanceTo(r3.position), o3 = 0.02, l2 = 5e-3;
          h2.inputState.pinching && a3 > o3 + l2 ? (h2.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: t2.handedness, target: this })) : !h2.inputState.pinching && a3 <= o3 - l2 && (h2.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: t2.handedness, target: this }));
        } else null !== o2 && t2.gripSpace && (r2 = e2.getPose(t2.gripSpace, s2), null !== r2 && (o2.matrix.fromArray(r2.transform.matrix), o2.matrix.decompose(o2.position, o2.rotation, o2.scale), o2.matrixWorldNeedsUpdate = true, r2.linearVelocity ? (o2.hasLinearVelocity = true, o2.linearVelocity.copy(r2.linearVelocity)) : o2.hasLinearVelocity = false, r2.angularVelocity ? (o2.hasAngularVelocity = true, o2.angularVelocity.copy(r2.angularVelocity)) : o2.hasAngularVelocity = false));
        null !== a2 && (i2 = e2.getPose(t2.targetRaySpace, s2), null === i2 && null !== r2 && (i2 = r2), null !== i2 && (a2.matrix.fromArray(i2.transform.matrix), a2.matrix.decompose(a2.position, a2.rotation, a2.scale), a2.matrixWorldNeedsUpdate = true, i2.linearVelocity ? (a2.hasLinearVelocity = true, a2.linearVelocity.copy(i2.linearVelocity)) : a2.hasLinearVelocity = false, i2.angularVelocity ? (a2.hasAngularVelocity = true, a2.angularVelocity.copy(i2.angularVelocity)) : a2.hasAngularVelocity = false, this.dispatchEvent(na)));
      }
      return null !== a2 && (a2.visible = null !== i2), null !== o2 && (o2.visible = null !== r2), null !== h2 && (h2.visible = null !== n2), this;
    }
    _getHandJoint(t2, e2) {
      if (void 0 === t2.joints[e2.jointName]) {
        const s2 = new ra();
        s2.matrixAutoUpdate = false, s2.visible = false, t2.joints[e2.jointName] = s2, t2.add(s2);
      }
      return t2.joints[e2.jointName];
    }
  };
  var ha = class _ha {
    constructor(t2, e2 = 1, s2 = 1e3) {
      this.isFog = true, this.name = "", this.color = new Qr(t2), this.near = e2, this.far = s2;
    }
    clone() {
      return new _ha(this.color, this.near, this.far);
    }
    toJSON() {
      return { type: "Fog", name: this.name, color: this.color.getHex(), near: this.near, far: this.far };
    }
  };
  var la = class extends Rr {
    constructor() {
      super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new gr(), this.environmentIntensity = 1, this.environmentRotation = new gr(), this.overrideMaterial = null, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    copy(t2, e2) {
      return super.copy(t2, e2), null !== t2.background && (this.background = t2.background.clone()), null !== t2.environment && (this.environment = t2.environment.clone()), null !== t2.fog && (this.fog = t2.fog.clone()), this.backgroundBlurriness = t2.backgroundBlurriness, this.backgroundIntensity = t2.backgroundIntensity, this.backgroundRotation.copy(t2.backgroundRotation), this.environmentIntensity = t2.environmentIntensity, this.environmentRotation.copy(t2.environmentRotation), null !== t2.overrideMaterial && (this.overrideMaterial = t2.overrideMaterial.clone()), this.matrixAutoUpdate = t2.matrixAutoUpdate, this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return null !== this.fog && (e2.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e2.object.backgroundBlurriness = this.backgroundBlurriness), 1 !== this.backgroundIntensity && (e2.object.backgroundIntensity = this.backgroundIntensity), e2.object.backgroundRotation = this.backgroundRotation.toArray(), 1 !== this.environmentIntensity && (e2.object.environmentIntensity = this.environmentIntensity), e2.object.environmentRotation = this.environmentRotation.toArray(), e2;
    }
  };
  var ca = class {
    constructor(t2, e2) {
      this.isInterleavedBuffer = true, this.array = t2, this.stride = e2, this.count = void 0 !== t2 ? t2.length / e2 : 0, this.usage = Ss, this.updateRanges = [], this.version = 0, this.uuid = Hs();
    }
    onUploadCallback() {
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
    setUsage(t2) {
      return this.usage = t2, this;
    }
    addUpdateRange(t2, e2) {
      this.updateRanges.push({ start: t2, count: e2 });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(t2) {
      return this.array = new t2.array.constructor(t2.array), this.count = t2.count, this.stride = t2.stride, this.usage = t2.usage, this;
    }
    copyAt(t2, e2, s2) {
      t2 *= this.stride, s2 *= e2.stride;
      for (let i2 = 0, r2 = this.stride; i2 < r2; i2++) this.array[t2 + i2] = e2.array[s2 + i2];
      return this;
    }
    set(t2, e2 = 0) {
      return this.array.set(t2, e2), this;
    }
    clone(t2) {
      void 0 === t2.arrayBuffers && (t2.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = Hs()), void 0 === t2.arrayBuffers[this.array.buffer._uuid] && (t2.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
      const e2 = new this.array.constructor(t2.arrayBuffers[this.array.buffer._uuid]), s2 = new this.constructor(e2, this.stride);
      return s2.setUsage(this.usage), s2;
    }
    onUpload(t2) {
      return this.onUploadCallback = t2, this;
    }
    toJSON(t2) {
      return void 0 === t2.arrayBuffers && (t2.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = Hs()), void 0 === t2.arrayBuffers[this.array.buffer._uuid] && (t2.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
    }
  };
  var ua = new Ks();
  var da = class _da {
    constructor(t2, e2, s2, i2 = false) {
      this.isInterleavedBufferAttribute = true, this.name = "", this.data = t2, this.itemSize = e2, this.offset = s2, this.normalized = i2;
    }
    get count() {
      return this.data.count;
    }
    get array() {
      return this.data.array;
    }
    set needsUpdate(t2) {
      this.data.needsUpdate = t2;
    }
    applyMatrix4(t2) {
      for (let e2 = 0, s2 = this.data.count; e2 < s2; e2++) ua.fromBufferAttribute(this, e2), ua.applyMatrix4(t2), this.setXYZ(e2, ua.x, ua.y, ua.z);
      return this;
    }
    applyNormalMatrix(t2) {
      for (let e2 = 0, s2 = this.count; e2 < s2; e2++) ua.fromBufferAttribute(this, e2), ua.applyNormalMatrix(t2), this.setXYZ(e2, ua.x, ua.y, ua.z);
      return this;
    }
    transformDirection(t2) {
      for (let e2 = 0, s2 = this.count; e2 < s2; e2++) ua.fromBufferAttribute(this, e2), ua.transformDirection(t2), this.setXYZ(e2, ua.x, ua.y, ua.z);
      return this;
    }
    getComponent(t2, e2) {
      let s2 = this.array[t2 * this.data.stride + this.offset + e2];
      return this.normalized && (s2 = Ys(s2, this.array)), s2;
    }
    setComponent(t2, e2, s2) {
      return this.normalized && (s2 = Zs(s2, this.array)), this.data.array[t2 * this.data.stride + this.offset + e2] = s2, this;
    }
    setX(t2, e2) {
      return this.normalized && (e2 = Zs(e2, this.array)), this.data.array[t2 * this.data.stride + this.offset] = e2, this;
    }
    setY(t2, e2) {
      return this.normalized && (e2 = Zs(e2, this.array)), this.data.array[t2 * this.data.stride + this.offset + 1] = e2, this;
    }
    setZ(t2, e2) {
      return this.normalized && (e2 = Zs(e2, this.array)), this.data.array[t2 * this.data.stride + this.offset + 2] = e2, this;
    }
    setW(t2, e2) {
      return this.normalized && (e2 = Zs(e2, this.array)), this.data.array[t2 * this.data.stride + this.offset + 3] = e2, this;
    }
    getX(t2) {
      let e2 = this.data.array[t2 * this.data.stride + this.offset];
      return this.normalized && (e2 = Ys(e2, this.array)), e2;
    }
    getY(t2) {
      let e2 = this.data.array[t2 * this.data.stride + this.offset + 1];
      return this.normalized && (e2 = Ys(e2, this.array)), e2;
    }
    getZ(t2) {
      let e2 = this.data.array[t2 * this.data.stride + this.offset + 2];
      return this.normalized && (e2 = Ys(e2, this.array)), e2;
    }
    getW(t2) {
      let e2 = this.data.array[t2 * this.data.stride + this.offset + 3];
      return this.normalized && (e2 = Ys(e2, this.array)), e2;
    }
    setXY(t2, e2, s2) {
      return t2 = t2 * this.data.stride + this.offset, this.normalized && (e2 = Zs(e2, this.array), s2 = Zs(s2, this.array)), this.data.array[t2 + 0] = e2, this.data.array[t2 + 1] = s2, this;
    }
    setXYZ(t2, e2, s2, i2) {
      return t2 = t2 * this.data.stride + this.offset, this.normalized && (e2 = Zs(e2, this.array), s2 = Zs(s2, this.array), i2 = Zs(i2, this.array)), this.data.array[t2 + 0] = e2, this.data.array[t2 + 1] = s2, this.data.array[t2 + 2] = i2, this;
    }
    setXYZW(t2, e2, s2, i2, r2) {
      return t2 = t2 * this.data.stride + this.offset, this.normalized && (e2 = Zs(e2, this.array), s2 = Zs(s2, this.array), i2 = Zs(i2, this.array), r2 = Zs(r2, this.array)), this.data.array[t2 + 0] = e2, this.data.array[t2 + 1] = s2, this.data.array[t2 + 2] = i2, this.data.array[t2 + 3] = r2, this;
    }
    clone(t2) {
      if (void 0 === t2) {
        console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
        const t3 = [];
        for (let e2 = 0; e2 < this.count; e2++) {
          const s2 = e2 * this.data.stride + this.offset;
          for (let e3 = 0; e3 < this.itemSize; e3++) t3.push(this.data.array[s2 + e3]);
        }
        return new dn(new this.array.constructor(t3), this.itemSize, this.normalized);
      }
      return void 0 === t2.interleavedBuffers && (t2.interleavedBuffers = {}), void 0 === t2.interleavedBuffers[this.data.uuid] && (t2.interleavedBuffers[this.data.uuid] = this.data.clone(t2)), new _da(t2.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
    }
    toJSON(t2) {
      if (void 0 === t2) {
        console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
        const t3 = [];
        for (let e2 = 0; e2 < this.count; e2++) {
          const s2 = e2 * this.data.stride + this.offset;
          for (let e3 = 0; e3 < this.itemSize; e3++) t3.push(this.data.array[s2 + e3]);
        }
        return { itemSize: this.itemSize, type: this.array.constructor.name, array: t3, normalized: this.normalized };
      }
      return void 0 === t2.interleavedBuffers && (t2.interleavedBuffers = {}), void 0 === t2.interleavedBuffers[this.data.uuid] && (t2.interleavedBuffers[this.data.uuid] = this.data.toJSON(t2)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
    }
  };
  var ya = new Ks();
  var ga = new Ks();
  var fa = new Ks();
  var xa = new $s();
  var ba = new $s();
  var va = new ar();
  var wa = new Ks();
  var Ma = new Ks();
  var Sa = new Ks();
  var _a = new $s();
  var Aa = new $s();
  var Ta = new $s();
  var Ia = new Ks();
  var Ba = new Ks();
  var Ea = new Ks();
  var Ra = new Ti();
  var Pa = new Ti();
  var Oa = new Ks();
  var Na = new ar();
  var Va = new Ks();
  var Fa = new $i();
  var La = new ar();
  var ja = new nr();
  var Da = class extends Dn {
    constructor(t2, e2) {
      super(t2, e2), this.isSkinnedMesh = true, this.type = "SkinnedMesh", this.bindMode = nt, this.bindMatrix = new ar(), this.bindMatrixInverse = new ar(), this.boundingBox = null, this.boundingSphere = null;
    }
    computeBoundingBox() {
      const t2 = this.geometry;
      null === this.boundingBox && (this.boundingBox = new Ri()), this.boundingBox.makeEmpty();
      const e2 = t2.getAttribute("position");
      for (let t3 = 0; t3 < e2.count; t3++) this.getVertexPosition(t3, Va), this.boundingBox.expandByPoint(Va);
    }
    computeBoundingSphere() {
      const t2 = this.geometry;
      null === this.boundingSphere && (this.boundingSphere = new $i()), this.boundingSphere.makeEmpty();
      const e2 = t2.getAttribute("position");
      for (let t3 = 0; t3 < e2.count; t3++) this.getVertexPosition(t3, Va), this.boundingSphere.expandByPoint(Va);
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.bindMode = t2.bindMode, this.bindMatrix.copy(t2.bindMatrix), this.bindMatrixInverse.copy(t2.bindMatrixInverse), this.skeleton = t2.skeleton, null !== t2.boundingBox && (this.boundingBox = t2.boundingBox.clone()), null !== t2.boundingSphere && (this.boundingSphere = t2.boundingSphere.clone()), this;
    }
    raycast(t2, e2) {
      const s2 = this.material, i2 = this.matrixWorld;
      void 0 !== s2 && (null === this.boundingSphere && this.computeBoundingSphere(), Fa.copy(this.boundingSphere), Fa.applyMatrix4(i2), false !== t2.ray.intersectsSphere(Fa) && (La.copy(i2).invert(), ja.copy(t2.ray).applyMatrix4(La), null !== this.boundingBox && false === ja.intersectsBox(this.boundingBox) || this._computeIntersections(t2, e2, ja)));
    }
    getVertexPosition(t2, e2) {
      return super.getVertexPosition(t2, e2), this.applyBoneTransform(t2, e2), e2;
    }
    bind(t2, e2) {
      this.skeleton = t2, void 0 === e2 && (this.updateMatrixWorld(true), this.skeleton.calculateInverses(), e2 = this.matrixWorld), this.bindMatrix.copy(e2), this.bindMatrixInverse.copy(e2).invert();
    }
    pose() {
      this.skeleton.pose();
    }
    normalizeSkinWeights() {
      const t2 = new Ti(), e2 = this.geometry.attributes.skinWeight;
      for (let s2 = 0, i2 = e2.count; s2 < i2; s2++) {
        t2.fromBufferAttribute(e2, s2);
        const i3 = 1 / t2.manhattanLength();
        i3 !== 1 / 0 ? t2.multiplyScalar(i3) : t2.set(1, 0, 0, 0), e2.setXYZW(s2, t2.x, t2.y, t2.z, t2.w);
      }
    }
    updateMatrixWorld(t2) {
      super.updateMatrixWorld(t2), this.bindMode === nt ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === at ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
    }
    applyBoneTransform(t2, e2) {
      const s2 = this.skeleton, i2 = this.geometry;
      Ra.fromBufferAttribute(i2.attributes.skinIndex, t2), Pa.fromBufferAttribute(i2.attributes.skinWeight, t2), Ea.copy(e2).applyMatrix4(this.bindMatrix), e2.set(0, 0, 0);
      for (let t3 = 0; t3 < 4; t3++) {
        const i3 = Pa.getComponent(t3);
        if (0 !== i3) {
          const r2 = Ra.getComponent(t3);
          Na.multiplyMatrices(s2.bones[r2].matrixWorld, s2.boneInverses[r2]), e2.addScaledVector(Oa.copy(Ea).applyMatrix4(Na), i3);
        }
      }
      return e2.applyMatrix4(this.bindMatrixInverse);
    }
  };
  var Wa = class extends Rr {
    constructor() {
      super(), this.isBone = true, this.type = "Bone";
    }
  };
  var Ua = class extends Ai {
    constructor(t2 = null, e2 = 1, s2 = 1, i2, r2, n2, a2, o2, h2 = 1003, l2 = 1003, c2, u2) {
      super(null, n2, a2, o2, h2, l2, i2, r2, c2, u2), this.isDataTexture = true, this.image = { data: t2, width: e2, height: s2 }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  };
  var Ha = new ar();
  var qa = new ar();
  var Ja = class _Ja {
    constructor(t2 = [], e2 = []) {
      this.uuid = Hs(), this.bones = t2.slice(0), this.boneInverses = e2, this.boneMatrices = null, this.boneTexture = null, this.init();
    }
    init() {
      const t2 = this.bones, e2 = this.boneInverses;
      if (this.boneMatrices = new Float32Array(16 * t2.length), 0 === e2.length) this.calculateInverses();
      else if (t2.length !== e2.length) {
        console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
        for (let t3 = 0, e3 = this.bones.length; t3 < e3; t3++) this.boneInverses.push(new ar());
      }
    }
    calculateInverses() {
      this.boneInverses.length = 0;
      for (let t2 = 0, e2 = this.bones.length; t2 < e2; t2++) {
        const e3 = new ar();
        this.bones[t2] && e3.copy(this.bones[t2].matrixWorld).invert(), this.boneInverses.push(e3);
      }
    }
    pose() {
      for (let t2 = 0, e2 = this.bones.length; t2 < e2; t2++) {
        const e3 = this.bones[t2];
        e3 && e3.matrixWorld.copy(this.boneInverses[t2]).invert();
      }
      for (let t2 = 0, e2 = this.bones.length; t2 < e2; t2++) {
        const e3 = this.bones[t2];
        e3 && (e3.parent && e3.parent.isBone ? (e3.matrix.copy(e3.parent.matrixWorld).invert(), e3.matrix.multiply(e3.matrixWorld)) : e3.matrix.copy(e3.matrixWorld), e3.matrix.decompose(e3.position, e3.quaternion, e3.scale));
      }
    }
    update() {
      const t2 = this.bones, e2 = this.boneInverses, s2 = this.boneMatrices, i2 = this.boneTexture;
      for (let i3 = 0, r2 = t2.length; i3 < r2; i3++) {
        const r3 = t2[i3] ? t2[i3].matrixWorld : qa;
        Ha.multiplyMatrices(r3, e2[i3]), Ha.toArray(s2, 16 * i3);
      }
      null !== i2 && (i2.needsUpdate = true);
    }
    clone() {
      return new _Ja(this.bones, this.boneInverses);
    }
    computeBoneTexture() {
      let t2 = Math.sqrt(4 * this.bones.length);
      t2 = 4 * Math.ceil(t2 / 4), t2 = Math.max(t2, 4);
      const e2 = new Float32Array(t2 * t2 * 4);
      e2.set(this.boneMatrices);
      const s2 = new Ua(e2, t2, t2, Dt, Et);
      return s2.needsUpdate = true, this.boneMatrices = e2, this.boneTexture = s2, this;
    }
    getBoneByName(t2) {
      for (let e2 = 0, s2 = this.bones.length; e2 < s2; e2++) {
        const s3 = this.bones[e2];
        if (s3.name === t2) return s3;
      }
    }
    dispose() {
      null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null);
    }
    fromJSON(t2, e2) {
      this.uuid = t2.uuid;
      for (let s2 = 0, i2 = t2.bones.length; s2 < i2; s2++) {
        const i3 = t2.bones[s2];
        let r2 = e2[i3];
        void 0 === r2 && (console.warn("THREE.Skeleton: No bone found with UUID:", i3), r2 = new Wa()), this.bones.push(r2), this.boneInverses.push(new ar().fromArray(t2.boneInverses[s2]));
      }
      return this.init(), this;
    }
    toJSON() {
      const t2 = { metadata: { version: 4.7, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] };
      t2.uuid = this.uuid;
      const e2 = this.bones, s2 = this.boneInverses;
      for (let i2 = 0, r2 = e2.length; i2 < r2; i2++) {
        const r3 = e2[i2];
        t2.bones.push(r3.uuid);
        const n2 = s2[i2];
        t2.boneInverses.push(n2.toArray());
      }
      return t2;
    }
  };
  var Xa = class extends dn {
    constructor(t2, e2, s2, i2 = 1) {
      super(t2, e2, s2), this.isInstancedBufferAttribute = true, this.meshPerAttribute = i2;
    }
    copy(t2) {
      return super.copy(t2), this.meshPerAttribute = t2.meshPerAttribute, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.meshPerAttribute = this.meshPerAttribute, t2.isInstancedBufferAttribute = true, t2;
    }
  };
  var Ya = new ar();
  var Za = new ar();
  var Ga = [];
  var $a = new Ri();
  var Qa = new ar();
  var Ka = new Dn();
  var to = new $i();
  var eo = class extends Dn {
    constructor(t2, e2, s2) {
      super(t2, e2), this.isInstancedMesh = true, this.instanceMatrix = new Xa(new Float32Array(16 * s2), 16), this.instanceColor = null, this.morphTexture = null, this.count = s2, this.boundingBox = null, this.boundingSphere = null;
      for (let t3 = 0; t3 < s2; t3++) this.setMatrixAt(t3, Qa);
    }
    computeBoundingBox() {
      const t2 = this.geometry, e2 = this.count;
      null === this.boundingBox && (this.boundingBox = new Ri()), null === t2.boundingBox && t2.computeBoundingBox(), this.boundingBox.makeEmpty();
      for (let s2 = 0; s2 < e2; s2++) this.getMatrixAt(s2, Ya), $a.copy(t2.boundingBox).applyMatrix4(Ya), this.boundingBox.union($a);
    }
    computeBoundingSphere() {
      const t2 = this.geometry, e2 = this.count;
      null === this.boundingSphere && (this.boundingSphere = new $i()), null === t2.boundingSphere && t2.computeBoundingSphere(), this.boundingSphere.makeEmpty();
      for (let s2 = 0; s2 < e2; s2++) this.getMatrixAt(s2, Ya), to.copy(t2.boundingSphere).applyMatrix4(Ya), this.boundingSphere.union(to);
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.instanceMatrix.copy(t2.instanceMatrix), null !== t2.morphTexture && (this.morphTexture = t2.morphTexture.clone()), null !== t2.instanceColor && (this.instanceColor = t2.instanceColor.clone()), this.count = t2.count, null !== t2.boundingBox && (this.boundingBox = t2.boundingBox.clone()), null !== t2.boundingSphere && (this.boundingSphere = t2.boundingSphere.clone()), this;
    }
    getColorAt(t2, e2) {
      e2.fromArray(this.instanceColor.array, 3 * t2);
    }
    getMatrixAt(t2, e2) {
      e2.fromArray(this.instanceMatrix.array, 16 * t2);
    }
    getMorphAt(t2, e2) {
      const s2 = e2.morphTargetInfluences, i2 = this.morphTexture.source.data.data, r2 = t2 * (s2.length + 1) + 1;
      for (let t3 = 0; t3 < s2.length; t3++) s2[t3] = i2[r2 + t3];
    }
    raycast(t2, e2) {
      const s2 = this.matrixWorld, i2 = this.count;
      if (Ka.geometry = this.geometry, Ka.material = this.material, void 0 !== Ka.material && (null === this.boundingSphere && this.computeBoundingSphere(), to.copy(this.boundingSphere), to.applyMatrix4(s2), false !== t2.ray.intersectsSphere(to))) for (let r2 = 0; r2 < i2; r2++) {
        this.getMatrixAt(r2, Ya), Za.multiplyMatrices(s2, Ya), Ka.matrixWorld = Za, Ka.raycast(t2, Ga);
        for (let t3 = 0, s3 = Ga.length; t3 < s3; t3++) {
          const s4 = Ga[t3];
          s4.instanceId = r2, s4.object = this, e2.push(s4);
        }
        Ga.length = 0;
      }
    }
    setColorAt(t2, e2) {
      null === this.instanceColor && (this.instanceColor = new Xa(new Float32Array(3 * this.instanceMatrix.count).fill(1), 3)), e2.toArray(this.instanceColor.array, 3 * t2);
    }
    setMatrixAt(t2, e2) {
      e2.toArray(this.instanceMatrix.array, 16 * t2);
    }
    setMorphAt(t2, e2) {
      const s2 = e2.morphTargetInfluences, i2 = s2.length + 1;
      null === this.morphTexture && (this.morphTexture = new Ua(new Float32Array(i2 * this.count), i2, this.count, Ht, Et));
      const r2 = this.morphTexture.source.data.data;
      let n2 = 0;
      for (let t3 = 0; t3 < s2.length; t3++) n2 += s2[t3];
      const a2 = this.geometry.morphTargetsRelative ? 1 : 1 - n2, o2 = i2 * t2;
      r2[o2] = a2, r2.set(s2, o2 + 1);
    }
    updateMorphTargets() {
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" }), null !== this.morphTexture && (this.morphTexture.dispose(), this.morphTexture = null);
    }
  };
  var so = new Ks();
  var io = new Ks();
  var ro = new si();
  var no = class {
    constructor(t2 = new Ks(1, 0, 0), e2 = 0) {
      this.isPlane = true, this.normal = t2, this.constant = e2;
    }
    set(t2, e2) {
      return this.normal.copy(t2), this.constant = e2, this;
    }
    setComponents(t2, e2, s2, i2) {
      return this.normal.set(t2, e2, s2), this.constant = i2, this;
    }
    setFromNormalAndCoplanarPoint(t2, e2) {
      return this.normal.copy(t2), this.constant = -e2.dot(this.normal), this;
    }
    setFromCoplanarPoints(t2, e2, s2) {
      const i2 = so.subVectors(s2, e2).cross(io.subVectors(t2, e2)).normalize();
      return this.setFromNormalAndCoplanarPoint(i2, t2), this;
    }
    copy(t2) {
      return this.normal.copy(t2.normal), this.constant = t2.constant, this;
    }
    normalize() {
      const t2 = 1 / this.normal.length();
      return this.normal.multiplyScalar(t2), this.constant *= t2, this;
    }
    negate() {
      return this.constant *= -1, this.normal.negate(), this;
    }
    distanceToPoint(t2) {
      return this.normal.dot(t2) + this.constant;
    }
    distanceToSphere(t2) {
      return this.distanceToPoint(t2.center) - t2.radius;
    }
    projectPoint(t2, e2) {
      return e2.copy(t2).addScaledVector(this.normal, -this.distanceToPoint(t2));
    }
    intersectLine(t2, e2) {
      const s2 = t2.delta(so), i2 = this.normal.dot(s2);
      if (0 === i2) return 0 === this.distanceToPoint(t2.start) ? e2.copy(t2.start) : null;
      const r2 = -(t2.start.dot(this.normal) + this.constant) / i2;
      return r2 < 0 || r2 > 1 ? null : e2.copy(t2.start).addScaledVector(s2, r2);
    }
    intersectsLine(t2) {
      const e2 = this.distanceToPoint(t2.start), s2 = this.distanceToPoint(t2.end);
      return e2 < 0 && s2 > 0 || s2 < 0 && e2 > 0;
    }
    intersectsBox(t2) {
      return t2.intersectsPlane(this);
    }
    intersectsSphere(t2) {
      return t2.intersectsPlane(this);
    }
    coplanarPoint(t2) {
      return t2.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(t2, e2) {
      const s2 = e2 || ro.getNormalMatrix(t2), i2 = this.coplanarPoint(so).applyMatrix4(t2), r2 = this.normal.applyMatrix3(s2).normalize();
      return this.constant = -i2.dot(r2), this;
    }
    translate(t2) {
      return this.constant -= t2.dot(this.normal), this;
    }
    equals(t2) {
      return t2.normal.equals(this.normal) && t2.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var ao = new $i();
  var oo = new $s(0.5, 0.5);
  var ho = new Ks();
  var lo = class {
    constructor(t2 = new no(), e2 = new no(), s2 = new no(), i2 = new no(), r2 = new no(), n2 = new no()) {
      this.planes = [t2, e2, s2, i2, r2, n2];
    }
    set(t2, e2, s2, i2, r2, n2) {
      const a2 = this.planes;
      return a2[0].copy(t2), a2[1].copy(e2), a2[2].copy(s2), a2[3].copy(i2), a2[4].copy(r2), a2[5].copy(n2), this;
    }
    copy(t2) {
      const e2 = this.planes;
      for (let s2 = 0; s2 < 6; s2++) e2[s2].copy(t2.planes[s2]);
      return this;
    }
    setFromProjectionMatrix(t2, e2 = 2e3, s2 = false) {
      const i2 = this.planes, r2 = t2.elements, n2 = r2[0], a2 = r2[1], o2 = r2[2], h2 = r2[3], l2 = r2[4], c2 = r2[5], u2 = r2[6], d2 = r2[7], p2 = r2[8], m2 = r2[9], y2 = r2[10], g2 = r2[11], f2 = r2[12], x2 = r2[13], b2 = r2[14], v2 = r2[15];
      if (i2[0].setComponents(h2 - n2, d2 - l2, g2 - p2, v2 - f2).normalize(), i2[1].setComponents(h2 + n2, d2 + l2, g2 + p2, v2 + f2).normalize(), i2[2].setComponents(h2 + a2, d2 + c2, g2 + m2, v2 + x2).normalize(), i2[3].setComponents(h2 - a2, d2 - c2, g2 - m2, v2 - x2).normalize(), s2) i2[4].setComponents(o2, u2, y2, b2).normalize(), i2[5].setComponents(h2 - o2, d2 - u2, g2 - y2, v2 - b2).normalize();
      else if (i2[4].setComponents(h2 - o2, d2 - u2, g2 - y2, v2 - b2).normalize(), e2 === Ps) i2[5].setComponents(h2 + o2, d2 + u2, g2 + y2, v2 + b2).normalize();
      else {
        if (e2 !== Os) throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e2);
        i2[5].setComponents(o2, u2, y2, b2).normalize();
      }
      return this;
    }
    intersectsObject(t2) {
      if (void 0 !== t2.boundingSphere) null === t2.boundingSphere && t2.computeBoundingSphere(), ao.copy(t2.boundingSphere).applyMatrix4(t2.matrixWorld);
      else {
        const e2 = t2.geometry;
        null === e2.boundingSphere && e2.computeBoundingSphere(), ao.copy(e2.boundingSphere).applyMatrix4(t2.matrixWorld);
      }
      return this.intersectsSphere(ao);
    }
    intersectsSprite(t2) {
      ao.center.set(0, 0, 0);
      const e2 = oo.distanceTo(t2.center);
      return ao.radius = 0.7071067811865476 + e2, ao.applyMatrix4(t2.matrixWorld), this.intersectsSphere(ao);
    }
    intersectsSphere(t2) {
      const e2 = this.planes, s2 = t2.center, i2 = -t2.radius;
      for (let t3 = 0; t3 < 6; t3++) {
        if (e2[t3].distanceToPoint(s2) < i2) return false;
      }
      return true;
    }
    intersectsBox(t2) {
      const e2 = this.planes;
      for (let s2 = 0; s2 < 6; s2++) {
        const i2 = e2[s2];
        if (ho.x = i2.normal.x > 0 ? t2.max.x : t2.min.x, ho.y = i2.normal.y > 0 ? t2.max.y : t2.min.y, ho.z = i2.normal.z > 0 ? t2.max.z : t2.min.z, i2.distanceToPoint(ho) < 0) return false;
      }
      return true;
    }
    containsPoint(t2) {
      const e2 = this.planes;
      for (let s2 = 0; s2 < 6; s2++) if (e2[s2].distanceToPoint(t2) < 0) return false;
      return true;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var co = new ar();
  var uo = new lo();
  var po = class _po {
    constructor() {
      this.coordinateSystem = Ps;
    }
    intersectsObject(t2, e2) {
      if (!e2.isArrayCamera || 0 === e2.cameras.length) return false;
      for (let s2 = 0; s2 < e2.cameras.length; s2++) {
        const i2 = e2.cameras[s2];
        if (co.multiplyMatrices(i2.projectionMatrix, i2.matrixWorldInverse), uo.setFromProjectionMatrix(co, i2.coordinateSystem, i2.reversedDepth), uo.intersectsObject(t2)) return true;
      }
      return false;
    }
    intersectsSprite(t2, e2) {
      if (!e2 || !e2.cameras || 0 === e2.cameras.length) return false;
      for (let s2 = 0; s2 < e2.cameras.length; s2++) {
        const i2 = e2.cameras[s2];
        if (co.multiplyMatrices(i2.projectionMatrix, i2.matrixWorldInverse), uo.setFromProjectionMatrix(co, i2.coordinateSystem, i2.reversedDepth), uo.intersectsSprite(t2)) return true;
      }
      return false;
    }
    intersectsSphere(t2, e2) {
      if (!e2 || !e2.cameras || 0 === e2.cameras.length) return false;
      for (let s2 = 0; s2 < e2.cameras.length; s2++) {
        const i2 = e2.cameras[s2];
        if (co.multiplyMatrices(i2.projectionMatrix, i2.matrixWorldInverse), uo.setFromProjectionMatrix(co, i2.coordinateSystem, i2.reversedDepth), uo.intersectsSphere(t2)) return true;
      }
      return false;
    }
    intersectsBox(t2, e2) {
      if (!e2 || !e2.cameras || 0 === e2.cameras.length) return false;
      for (let s2 = 0; s2 < e2.cameras.length; s2++) {
        const i2 = e2.cameras[s2];
        if (co.multiplyMatrices(i2.projectionMatrix, i2.matrixWorldInverse), uo.setFromProjectionMatrix(co, i2.coordinateSystem, i2.reversedDepth), uo.intersectsBox(t2)) return true;
      }
      return false;
    }
    containsPoint(t2, e2) {
      if (!e2 || !e2.cameras || 0 === e2.cameras.length) return false;
      for (let s2 = 0; s2 < e2.cameras.length; s2++) {
        const i2 = e2.cameras[s2];
        if (co.multiplyMatrices(i2.projectionMatrix, i2.matrixWorldInverse), uo.setFromProjectionMatrix(co, i2.coordinateSystem, i2.reversedDepth), uo.containsPoint(t2)) return true;
      }
      return false;
    }
    clone() {
      return new _po();
    }
  };
  var fo = class {
    constructor() {
      this.index = 0, this.pool = [], this.list = [];
    }
    push(t2, e2, s2, i2) {
      const r2 = this.pool, n2 = this.list;
      this.index >= r2.length && r2.push({ start: -1, count: -1, z: -1, index: -1 });
      const a2 = r2[this.index];
      n2.push(a2), this.index++, a2.start = t2, a2.count = e2, a2.z = s2, a2.index = i2;
    }
    reset() {
      this.list.length = 0, this.index = 0;
    }
  };
  var xo = new ar();
  var bo = new Qr(1, 1, 1);
  var vo = new lo();
  var wo = new po();
  var Mo = new Ri();
  var So = new $i();
  var _o = new Ks();
  var Ao = new Ks();
  var To = new Ks();
  var zo = new fo();
  var Co = new Dn();
  var Ro = class extends en {
    constructor(t2) {
      super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Qr(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.linewidth = t2.linewidth, this.linecap = t2.linecap, this.linejoin = t2.linejoin, this.fog = t2.fog, this;
    }
  };
  var Po = new Ks();
  var Oo = new Ks();
  var No = new ar();
  var Vo = new nr();
  var Fo = new $i();
  var Lo = new Ks();
  var jo = new Ks();
  var Do = class extends Rr {
    constructor(t2 = new In(), e2 = new Ro()) {
      super(), this.isLine = true, this.type = "Line", this.geometry = t2, this.material = e2, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.material = Array.isArray(t2.material) ? t2.material.slice() : t2.material, this.geometry = t2.geometry, this;
    }
    computeLineDistances() {
      const t2 = this.geometry;
      if (null === t2.index) {
        const e2 = t2.attributes.position, s2 = [0];
        for (let t3 = 1, i2 = e2.count; t3 < i2; t3++) Po.fromBufferAttribute(e2, t3 - 1), Oo.fromBufferAttribute(e2, t3), s2[t3] = s2[t3 - 1], s2[t3] += Po.distanceTo(Oo);
        t2.setAttribute("lineDistance", new wn(s2, 1));
      } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
    raycast(t2, e2) {
      const s2 = this.geometry, i2 = this.matrixWorld, r2 = t2.params.Line.threshold, n2 = s2.drawRange;
      if (null === s2.boundingSphere && s2.computeBoundingSphere(), Fo.copy(s2.boundingSphere), Fo.applyMatrix4(i2), Fo.radius += r2, false === t2.ray.intersectsSphere(Fo)) return;
      No.copy(i2).invert(), Vo.copy(t2.ray).applyMatrix4(No);
      const a2 = r2 / ((this.scale.x + this.scale.y + this.scale.z) / 3), o2 = a2 * a2, h2 = this.isLineSegments ? 2 : 1, l2 = s2.index, c2 = s2.attributes.position;
      if (null !== l2) {
        const s3 = Math.max(0, n2.start), i3 = Math.min(l2.count, n2.start + n2.count);
        for (let r3 = s3, n3 = i3 - 1; r3 < n3; r3 += h2) {
          const s4 = l2.getX(r3), i4 = l2.getX(r3 + 1), n4 = Wo(this, t2, Vo, o2, s4, i4, r3);
          n4 && e2.push(n4);
        }
        if (this.isLineLoop) {
          const r3 = l2.getX(i3 - 1), n3 = l2.getX(s3), a3 = Wo(this, t2, Vo, o2, r3, n3, i3 - 1);
          a3 && e2.push(a3);
        }
      } else {
        const s3 = Math.max(0, n2.start), i3 = Math.min(c2.count, n2.start + n2.count);
        for (let r3 = s3, n3 = i3 - 1; r3 < n3; r3 += h2) {
          const s4 = Wo(this, t2, Vo, o2, r3, r3 + 1, r3);
          s4 && e2.push(s4);
        }
        if (this.isLineLoop) {
          const r3 = Wo(this, t2, Vo, o2, i3 - 1, s3, i3 - 1);
          r3 && e2.push(r3);
        }
      }
    }
    updateMorphTargets() {
      const t2 = this.geometry.morphAttributes, e2 = Object.keys(t2);
      if (e2.length > 0) {
        const s2 = t2[e2[0]];
        if (void 0 !== s2) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let t3 = 0, e3 = s2.length; t3 < e3; t3++) {
            const e4 = s2[t3].name || String(t3);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[e4] = t3;
          }
        }
      }
    }
  };
  function Wo(t2, e2, s2, i2, r2, n2, a2) {
    const o2 = t2.geometry.attributes.position;
    Po.fromBufferAttribute(o2, r2), Oo.fromBufferAttribute(o2, n2);
    if (s2.distanceSqToSegment(Po, Oo, Lo, jo) > i2) return;
    Lo.applyMatrix4(t2.matrixWorld);
    const h2 = e2.ray.origin.distanceTo(Lo);
    return h2 < e2.near || h2 > e2.far ? void 0 : { distance: h2, point: jo.clone().applyMatrix4(t2.matrixWorld), index: a2, face: null, faceIndex: null, barycoord: null, object: t2 };
  }
  var Uo = new Ks();
  var Ho = new Ks();
  var qo = class extends Do {
    constructor(t2, e2) {
      super(t2, e2), this.isLineSegments = true, this.type = "LineSegments";
    }
    computeLineDistances() {
      const t2 = this.geometry;
      if (null === t2.index) {
        const e2 = t2.attributes.position, s2 = [];
        for (let t3 = 0, i2 = e2.count; t3 < i2; t3 += 2) Uo.fromBufferAttribute(e2, t3), Ho.fromBufferAttribute(e2, t3 + 1), s2[t3] = 0 === t3 ? 0 : s2[t3 - 1], s2[t3 + 1] = s2[t3] + Uo.distanceTo(Ho);
        t2.setAttribute("lineDistance", new wn(s2, 1));
      } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
  };
  var Jo = class extends Do {
    constructor(t2, e2) {
      super(t2, e2), this.isLineLoop = true, this.type = "LineLoop";
    }
  };
  var Xo = class extends en {
    constructor(t2) {
      super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new Qr(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.alphaMap = t2.alphaMap, this.size = t2.size, this.sizeAttenuation = t2.sizeAttenuation, this.fog = t2.fog, this;
    }
  };
  var Yo = new ar();
  var Zo = new nr();
  var Go = new $i();
  var $o = new Ks();
  var Qo = class extends Rr {
    constructor(t2 = new In(), e2 = new Xo()) {
      super(), this.isPoints = true, this.type = "Points", this.geometry = t2, this.material = e2, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.material = Array.isArray(t2.material) ? t2.material.slice() : t2.material, this.geometry = t2.geometry, this;
    }
    raycast(t2, e2) {
      const s2 = this.geometry, i2 = this.matrixWorld, r2 = t2.params.Points.threshold, n2 = s2.drawRange;
      if (null === s2.boundingSphere && s2.computeBoundingSphere(), Go.copy(s2.boundingSphere), Go.applyMatrix4(i2), Go.radius += r2, false === t2.ray.intersectsSphere(Go)) return;
      Yo.copy(i2).invert(), Zo.copy(t2.ray).applyMatrix4(Yo);
      const a2 = r2 / ((this.scale.x + this.scale.y + this.scale.z) / 3), o2 = a2 * a2, h2 = s2.index, l2 = s2.attributes.position;
      if (null !== h2) {
        for (let s3 = Math.max(0, n2.start), r3 = Math.min(h2.count, n2.start + n2.count); s3 < r3; s3++) {
          const r4 = h2.getX(s3);
          $o.fromBufferAttribute(l2, r4), Ko($o, r4, o2, i2, t2, e2, this);
        }
      } else {
        for (let s3 = Math.max(0, n2.start), r3 = Math.min(l2.count, n2.start + n2.count); s3 < r3; s3++) $o.fromBufferAttribute(l2, s3), Ko($o, s3, o2, i2, t2, e2, this);
      }
    }
    updateMorphTargets() {
      const t2 = this.geometry.morphAttributes, e2 = Object.keys(t2);
      if (e2.length > 0) {
        const s2 = t2[e2[0]];
        if (void 0 !== s2) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let t3 = 0, e3 = s2.length; t3 < e3; t3++) {
            const e4 = s2[t3].name || String(t3);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[e4] = t3;
          }
        }
      }
    }
  };
  function Ko(t2, e2, s2, i2, r2, n2, a2) {
    const o2 = Zo.distanceSqToPoint(t2);
    if (o2 < s2) {
      const s3 = new Ks();
      Zo.closestPointToPoint(t2, s3), s3.applyMatrix4(i2);
      const h2 = r2.ray.origin.distanceTo(s3);
      if (h2 < r2.near || h2 > r2.far) return;
      n2.push({ distance: h2, distanceToRay: Math.sqrt(o2), point: s3, index: e2, face: null, faceIndex: null, barycoord: null, object: a2 });
    }
  }
  var oh = class extends Ai {
    constructor(t2, e2, s2 = 1014, i2, r2, n2, a2 = 1003, o2 = 1003, h2, l2 = 1026, c2 = 1) {
      if (l2 !== Wt && 1027 !== l2) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      super({ width: t2, height: e2, depth: c2 }, i2, r2, n2, a2, o2, l2, s2, h2), this.isDepthTexture = true, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
    }
    copy(t2) {
      return super.copy(t2), this.source = new wi(Object.assign({}, t2.image)), this.compareFunction = t2.compareFunction, this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return null !== this.compareFunction && (e2.compareFunction = this.compareFunction), e2;
    }
  };
  var hh = class extends Ai {
    constructor(t2 = null) {
      super(), this.sourceTexture = t2, this.isExternalTexture = true;
    }
    copy(t2) {
      return super.copy(t2), this.sourceTexture = t2.sourceTexture, this;
    }
  };
  var lh = class _lh extends In {
    constructor(t2 = 1, e2 = 1, s2 = 4, i2 = 8, r2 = 1) {
      super(), this.type = "CapsuleGeometry", this.parameters = { radius: t2, height: e2, capSegments: s2, radialSegments: i2, heightSegments: r2 }, e2 = Math.max(0, e2), s2 = Math.max(1, Math.floor(s2)), i2 = Math.max(3, Math.floor(i2)), r2 = Math.max(1, Math.floor(r2));
      const n2 = [], a2 = [], o2 = [], h2 = [], l2 = e2 / 2, c2 = Math.PI / 2 * t2, u2 = e2, d2 = 2 * c2 + u2, p2 = 2 * s2 + r2, m2 = i2 + 1, y2 = new Ks(), g2 = new Ks();
      for (let f2 = 0; f2 <= p2; f2++) {
        let x2 = 0, b2 = 0, v2 = 0, w2 = 0;
        if (f2 <= s2) {
          const e3 = f2 / s2, i3 = e3 * Math.PI / 2;
          b2 = -l2 - t2 * Math.cos(i3), v2 = t2 * Math.sin(i3), w2 = -t2 * Math.cos(i3), x2 = e3 * c2;
        } else if (f2 <= s2 + r2) {
          const i3 = (f2 - s2) / r2;
          b2 = i3 * e2 - l2, v2 = t2, w2 = 0, x2 = c2 + i3 * u2;
        } else {
          const e3 = (f2 - s2 - r2) / s2, i3 = e3 * Math.PI / 2;
          b2 = l2 + t2 * Math.sin(i3), v2 = t2 * Math.cos(i3), w2 = t2 * Math.sin(i3), x2 = c2 + u2 + e3 * c2;
        }
        const M2 = Math.max(0, Math.min(1, x2 / d2));
        let S2 = 0;
        0 === f2 ? S2 = 0.5 / i2 : f2 === p2 && (S2 = -0.5 / i2);
        for (let t3 = 0; t3 <= i2; t3++) {
          const e3 = t3 / i2, s3 = e3 * Math.PI * 2, r3 = Math.sin(s3), n3 = Math.cos(s3);
          g2.x = -v2 * n3, g2.y = b2, g2.z = v2 * r3, a2.push(g2.x, g2.y, g2.z), y2.set(-v2 * n3, w2, v2 * r3), y2.normalize(), o2.push(y2.x, y2.y, y2.z), h2.push(e3 + S2, M2);
        }
        if (f2 > 0) {
          const t3 = (f2 - 1) * m2;
          for (let e3 = 0; e3 < i2; e3++) {
            const s3 = t3 + e3, i3 = t3 + e3 + 1, r3 = f2 * m2 + e3, a3 = f2 * m2 + e3 + 1;
            n2.push(s3, i3, r3), n2.push(i3, a3, r3);
          }
        }
      }
      this.setIndex(n2), this.setAttribute("position", new wn(a2, 3)), this.setAttribute("normal", new wn(o2, 3)), this.setAttribute("uv", new wn(h2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _lh(t2.radius, t2.height, t2.capSegments, t2.radialSegments, t2.heightSegments);
    }
  };
  var ch = class _ch extends In {
    constructor(t2 = 1, e2 = 32, s2 = 0, i2 = 2 * Math.PI) {
      super(), this.type = "CircleGeometry", this.parameters = { radius: t2, segments: e2, thetaStart: s2, thetaLength: i2 }, e2 = Math.max(3, e2);
      const r2 = [], n2 = [], a2 = [], o2 = [], h2 = new Ks(), l2 = new $s();
      n2.push(0, 0, 0), a2.push(0, 0, 1), o2.push(0.5, 0.5);
      for (let r3 = 0, c2 = 3; r3 <= e2; r3++, c2 += 3) {
        const u2 = s2 + r3 / e2 * i2;
        h2.x = t2 * Math.cos(u2), h2.y = t2 * Math.sin(u2), n2.push(h2.x, h2.y, h2.z), a2.push(0, 0, 1), l2.x = (n2[c2] / t2 + 1) / 2, l2.y = (n2[c2 + 1] / t2 + 1) / 2, o2.push(l2.x, l2.y);
      }
      for (let t3 = 1; t3 <= e2; t3++) r2.push(t3, t3 + 1, 0);
      this.setIndex(r2), this.setAttribute("position", new wn(n2, 3)), this.setAttribute("normal", new wn(a2, 3)), this.setAttribute("uv", new wn(o2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _ch(t2.radius, t2.segments, t2.thetaStart, t2.thetaLength);
    }
  };
  var uh = class _uh extends In {
    constructor(t2 = 1, e2 = 1, s2 = 1, i2 = 32, r2 = 1, n2 = false, a2 = 0, o2 = 2 * Math.PI) {
      super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: t2, radiusBottom: e2, height: s2, radialSegments: i2, heightSegments: r2, openEnded: n2, thetaStart: a2, thetaLength: o2 };
      const h2 = this;
      i2 = Math.floor(i2), r2 = Math.floor(r2);
      const l2 = [], c2 = [], u2 = [], d2 = [];
      let p2 = 0;
      const m2 = [], y2 = s2 / 2;
      let g2 = 0;
      function f2(s3) {
        const r3 = p2, n3 = new $s(), m3 = new Ks();
        let f3 = 0;
        const x2 = true === s3 ? t2 : e2, b2 = true === s3 ? 1 : -1;
        for (let t3 = 1; t3 <= i2; t3++) c2.push(0, y2 * b2, 0), u2.push(0, b2, 0), d2.push(0.5, 0.5), p2++;
        const v2 = p2;
        for (let t3 = 0; t3 <= i2; t3++) {
          const e3 = t3 / i2 * o2 + a2, s4 = Math.cos(e3), r4 = Math.sin(e3);
          m3.x = x2 * r4, m3.y = y2 * b2, m3.z = x2 * s4, c2.push(m3.x, m3.y, m3.z), u2.push(0, b2, 0), n3.x = 0.5 * s4 + 0.5, n3.y = 0.5 * r4 * b2 + 0.5, d2.push(n3.x, n3.y), p2++;
        }
        for (let t3 = 0; t3 < i2; t3++) {
          const e3 = r3 + t3, i3 = v2 + t3;
          true === s3 ? l2.push(i3, i3 + 1, e3) : l2.push(i3 + 1, i3, e3), f3 += 3;
        }
        h2.addGroup(g2, f3, true === s3 ? 1 : 2), g2 += f3;
      }
      !function() {
        const n3 = new Ks(), f3 = new Ks();
        let x2 = 0;
        const b2 = (e2 - t2) / s2;
        for (let h3 = 0; h3 <= r2; h3++) {
          const l3 = [], g3 = h3 / r2, x3 = g3 * (e2 - t2) + t2;
          for (let t3 = 0; t3 <= i2; t3++) {
            const e3 = t3 / i2, r3 = e3 * o2 + a2, h4 = Math.sin(r3), m3 = Math.cos(r3);
            f3.x = x3 * h4, f3.y = -g3 * s2 + y2, f3.z = x3 * m3, c2.push(f3.x, f3.y, f3.z), n3.set(h4, b2, m3).normalize(), u2.push(n3.x, n3.y, n3.z), d2.push(e3, 1 - g3), l3.push(p2++);
          }
          m2.push(l3);
        }
        for (let s3 = 0; s3 < i2; s3++) for (let i3 = 0; i3 < r2; i3++) {
          const n4 = m2[i3][s3], a3 = m2[i3 + 1][s3], o3 = m2[i3 + 1][s3 + 1], h3 = m2[i3][s3 + 1];
          (t2 > 0 || 0 !== i3) && (l2.push(n4, a3, h3), x2 += 3), (e2 > 0 || i3 !== r2 - 1) && (l2.push(a3, o3, h3), x2 += 3);
        }
        h2.addGroup(g2, x2, 0), g2 += x2;
      }(), false === n2 && (t2 > 0 && f2(true), e2 > 0 && f2(false)), this.setIndex(l2), this.setAttribute("position", new wn(c2, 3)), this.setAttribute("normal", new wn(u2, 3)), this.setAttribute("uv", new wn(d2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _uh(t2.radiusTop, t2.radiusBottom, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
    }
  };
  var dh = class _dh extends uh {
    constructor(t2 = 1, e2 = 1, s2 = 32, i2 = 1, r2 = false, n2 = 0, a2 = 2 * Math.PI) {
      super(0, t2, e2, s2, i2, r2, n2, a2), this.type = "ConeGeometry", this.parameters = { radius: t2, height: e2, radialSegments: s2, heightSegments: i2, openEnded: r2, thetaStart: n2, thetaLength: a2 };
    }
    static fromJSON(t2) {
      return new _dh(t2.radius, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
    }
  };
  var ph = class _ph extends In {
    constructor(t2 = [], e2 = [], s2 = 1, i2 = 0) {
      super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: t2, indices: e2, radius: s2, detail: i2 };
      const r2 = [], n2 = [];
      function a2(t3, e3, s3, i3) {
        const r3 = i3 + 1, n3 = [];
        for (let i4 = 0; i4 <= r3; i4++) {
          n3[i4] = [];
          const a3 = t3.clone().lerp(s3, i4 / r3), o3 = e3.clone().lerp(s3, i4 / r3), h3 = r3 - i4;
          for (let t4 = 0; t4 <= h3; t4++) n3[i4][t4] = 0 === t4 && i4 === r3 ? a3 : a3.clone().lerp(o3, t4 / h3);
        }
        for (let t4 = 0; t4 < r3; t4++) for (let e4 = 0; e4 < 2 * (r3 - t4) - 1; e4++) {
          const s4 = Math.floor(e4 / 2);
          e4 % 2 == 0 ? (o2(n3[t4][s4 + 1]), o2(n3[t4 + 1][s4]), o2(n3[t4][s4])) : (o2(n3[t4][s4 + 1]), o2(n3[t4 + 1][s4 + 1]), o2(n3[t4 + 1][s4]));
        }
      }
      function o2(t3) {
        r2.push(t3.x, t3.y, t3.z);
      }
      function h2(e3, s3) {
        const i3 = 3 * e3;
        s3.x = t2[i3 + 0], s3.y = t2[i3 + 1], s3.z = t2[i3 + 2];
      }
      function l2(t3, e3, s3, i3) {
        i3 < 0 && 1 === t3.x && (n2[e3] = t3.x - 1), 0 === s3.x && 0 === s3.z && (n2[e3] = i3 / 2 / Math.PI + 0.5);
      }
      function c2(t3) {
        return Math.atan2(t3.z, -t3.x);
      }
      function u2(t3) {
        return Math.atan2(-t3.y, Math.sqrt(t3.x * t3.x + t3.z * t3.z));
      }
      !function(t3) {
        const s3 = new Ks(), i3 = new Ks(), r3 = new Ks();
        for (let n3 = 0; n3 < e2.length; n3 += 3) h2(e2[n3 + 0], s3), h2(e2[n3 + 1], i3), h2(e2[n3 + 2], r3), a2(s3, i3, r3, t3);
      }(i2), function(t3) {
        const e3 = new Ks();
        for (let s3 = 0; s3 < r2.length; s3 += 3) e3.x = r2[s3 + 0], e3.y = r2[s3 + 1], e3.z = r2[s3 + 2], e3.normalize().multiplyScalar(t3), r2[s3 + 0] = e3.x, r2[s3 + 1] = e3.y, r2[s3 + 2] = e3.z;
      }(s2), function() {
        const t3 = new Ks();
        for (let e3 = 0; e3 < r2.length; e3 += 3) {
          t3.x = r2[e3 + 0], t3.y = r2[e3 + 1], t3.z = r2[e3 + 2];
          const s3 = c2(t3) / 2 / Math.PI + 0.5, i3 = u2(t3) / Math.PI + 0.5;
          n2.push(s3, 1 - i3);
        }
        (function() {
          const t4 = new Ks(), e3 = new Ks(), s3 = new Ks(), i3 = new Ks(), a3 = new $s(), o3 = new $s(), h3 = new $s();
          for (let u3 = 0, d2 = 0; u3 < r2.length; u3 += 9, d2 += 6) {
            t4.set(r2[u3 + 0], r2[u3 + 1], r2[u3 + 2]), e3.set(r2[u3 + 3], r2[u3 + 4], r2[u3 + 5]), s3.set(r2[u3 + 6], r2[u3 + 7], r2[u3 + 8]), a3.set(n2[d2 + 0], n2[d2 + 1]), o3.set(n2[d2 + 2], n2[d2 + 3]), h3.set(n2[d2 + 4], n2[d2 + 5]), i3.copy(t4).add(e3).add(s3).divideScalar(3);
            const p2 = c2(i3);
            l2(a3, d2 + 0, t4, p2), l2(o3, d2 + 2, e3, p2), l2(h3, d2 + 4, s3, p2);
          }
        })(), function() {
          for (let t4 = 0; t4 < n2.length; t4 += 6) {
            const e3 = n2[t4 + 0], s3 = n2[t4 + 2], i3 = n2[t4 + 4], r3 = Math.max(e3, s3, i3), a3 = Math.min(e3, s3, i3);
            r3 > 0.9 && a3 < 0.1 && (e3 < 0.2 && (n2[t4 + 0] += 1), s3 < 0.2 && (n2[t4 + 2] += 1), i3 < 0.2 && (n2[t4 + 4] += 1));
          }
        }();
      }(), this.setAttribute("position", new wn(r2, 3)), this.setAttribute("normal", new wn(r2.slice(), 3)), this.setAttribute("uv", new wn(n2, 2)), 0 === i2 ? this.computeVertexNormals() : this.normalizeNormals();
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _ph(t2.vertices, t2.indices, t2.radius, t2.details);
    }
  };
  var mh = class _mh extends ph {
    constructor(t2 = 1, e2 = 0) {
      const s2 = (1 + Math.sqrt(5)) / 2, i2 = 1 / s2;
      super([-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i2, -s2, 0, -i2, s2, 0, i2, -s2, 0, i2, s2, -i2, -s2, 0, -i2, s2, 0, i2, -s2, 0, i2, s2, 0, -s2, 0, -i2, s2, 0, -i2, -s2, 0, i2, s2, 0, i2], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t2, e2), this.type = "DodecahedronGeometry", this.parameters = { radius: t2, detail: e2 };
    }
    static fromJSON(t2) {
      return new _mh(t2.radius, t2.detail);
    }
  };
  var yh = new Ks();
  var gh = new Ks();
  var fh = new Ks();
  var xh = new Xr();
  var bh = class extends In {
    constructor(t2 = null, e2 = 1) {
      if (super(), this.type = "EdgesGeometry", this.parameters = { geometry: t2, thresholdAngle: e2 }, null !== t2) {
        const s2 = 4, i2 = Math.pow(10, s2), r2 = Math.cos(Ws * e2), n2 = t2.getIndex(), a2 = t2.getAttribute("position"), o2 = n2 ? n2.count : a2.count, h2 = [0, 0, 0], l2 = ["a", "b", "c"], c2 = new Array(3), u2 = {}, d2 = [];
        for (let t3 = 0; t3 < o2; t3 += 3) {
          n2 ? (h2[0] = n2.getX(t3), h2[1] = n2.getX(t3 + 1), h2[2] = n2.getX(t3 + 2)) : (h2[0] = t3, h2[1] = t3 + 1, h2[2] = t3 + 2);
          const { a: e3, b: s3, c: o3 } = xh;
          if (e3.fromBufferAttribute(a2, h2[0]), s3.fromBufferAttribute(a2, h2[1]), o3.fromBufferAttribute(a2, h2[2]), xh.getNormal(fh), c2[0] = `${Math.round(e3.x * i2)},${Math.round(e3.y * i2)},${Math.round(e3.z * i2)}`, c2[1] = `${Math.round(s3.x * i2)},${Math.round(s3.y * i2)},${Math.round(s3.z * i2)}`, c2[2] = `${Math.round(o3.x * i2)},${Math.round(o3.y * i2)},${Math.round(o3.z * i2)}`, c2[0] !== c2[1] && c2[1] !== c2[2] && c2[2] !== c2[0]) for (let t4 = 0; t4 < 3; t4++) {
            const e4 = (t4 + 1) % 3, s4 = c2[t4], i3 = c2[e4], n3 = xh[l2[t4]], a3 = xh[l2[e4]], o4 = `${s4}_${i3}`, p2 = `${i3}_${s4}`;
            p2 in u2 && u2[p2] ? (fh.dot(u2[p2].normal) <= r2 && (d2.push(n3.x, n3.y, n3.z), d2.push(a3.x, a3.y, a3.z)), u2[p2] = null) : o4 in u2 || (u2[o4] = { index0: h2[t4], index1: h2[e4], normal: fh.clone() });
          }
        }
        for (const t3 in u2) if (u2[t3]) {
          const { index0: e3, index1: s3 } = u2[t3];
          yh.fromBufferAttribute(a2, e3), gh.fromBufferAttribute(a2, s3), d2.push(yh.x, yh.y, yh.z), d2.push(gh.x, gh.y, gh.z);
        }
        this.setAttribute("position", new wn(d2, 3));
      }
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
  };
  var vh = class {
    constructor() {
      this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = false, this.cacheArcLengths = null;
    }
    getPoint() {
      console.warn("THREE.Curve: .getPoint() not implemented.");
    }
    getPointAt(t2, e2) {
      const s2 = this.getUtoTmapping(t2);
      return this.getPoint(s2, e2);
    }
    getPoints(t2 = 5) {
      const e2 = [];
      for (let s2 = 0; s2 <= t2; s2++) e2.push(this.getPoint(s2 / t2));
      return e2;
    }
    getSpacedPoints(t2 = 5) {
      const e2 = [];
      for (let s2 = 0; s2 <= t2; s2++) e2.push(this.getPointAt(s2 / t2));
      return e2;
    }
    getLength() {
      const t2 = this.getLengths();
      return t2[t2.length - 1];
    }
    getLengths(t2 = this.arcLengthDivisions) {
      if (this.cacheArcLengths && this.cacheArcLengths.length === t2 + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = false;
      const e2 = [];
      let s2, i2 = this.getPoint(0), r2 = 0;
      e2.push(0);
      for (let n2 = 1; n2 <= t2; n2++) s2 = this.getPoint(n2 / t2), r2 += s2.distanceTo(i2), e2.push(r2), i2 = s2;
      return this.cacheArcLengths = e2, e2;
    }
    updateArcLengths() {
      this.needsUpdate = true, this.getLengths();
    }
    getUtoTmapping(t2, e2 = null) {
      const s2 = this.getLengths();
      let i2 = 0;
      const r2 = s2.length;
      let n2;
      n2 = e2 || t2 * s2[r2 - 1];
      let a2, o2 = 0, h2 = r2 - 1;
      for (; o2 <= h2; ) if (i2 = Math.floor(o2 + (h2 - o2) / 2), a2 = s2[i2] - n2, a2 < 0) o2 = i2 + 1;
      else {
        if (!(a2 > 0)) {
          h2 = i2;
          break;
        }
        h2 = i2 - 1;
      }
      if (i2 = h2, s2[i2] === n2) return i2 / (r2 - 1);
      const l2 = s2[i2];
      return (i2 + (n2 - l2) / (s2[i2 + 1] - l2)) / (r2 - 1);
    }
    getTangent(t2, e2) {
      const s2 = 1e-4;
      let i2 = t2 - s2, r2 = t2 + s2;
      i2 < 0 && (i2 = 0), r2 > 1 && (r2 = 1);
      const n2 = this.getPoint(i2), a2 = this.getPoint(r2), o2 = e2 || (n2.isVector2 ? new $s() : new Ks());
      return o2.copy(a2).sub(n2).normalize(), o2;
    }
    getTangentAt(t2, e2) {
      const s2 = this.getUtoTmapping(t2);
      return this.getTangent(s2, e2);
    }
    computeFrenetFrames(t2, e2 = false) {
      const s2 = new Ks(), i2 = [], r2 = [], n2 = [], a2 = new Ks(), o2 = new ar();
      for (let e3 = 0; e3 <= t2; e3++) {
        const s3 = e3 / t2;
        i2[e3] = this.getTangentAt(s3, new Ks());
      }
      r2[0] = new Ks(), n2[0] = new Ks();
      let h2 = Number.MAX_VALUE;
      const l2 = Math.abs(i2[0].x), c2 = Math.abs(i2[0].y), u2 = Math.abs(i2[0].z);
      l2 <= h2 && (h2 = l2, s2.set(1, 0, 0)), c2 <= h2 && (h2 = c2, s2.set(0, 1, 0)), u2 <= h2 && s2.set(0, 0, 1), a2.crossVectors(i2[0], s2).normalize(), r2[0].crossVectors(i2[0], a2), n2[0].crossVectors(i2[0], r2[0]);
      for (let e3 = 1; e3 <= t2; e3++) {
        if (r2[e3] = r2[e3 - 1].clone(), n2[e3] = n2[e3 - 1].clone(), a2.crossVectors(i2[e3 - 1], i2[e3]), a2.length() > Number.EPSILON) {
          a2.normalize();
          const t3 = Math.acos(qs(i2[e3 - 1].dot(i2[e3]), -1, 1));
          r2[e3].applyMatrix4(o2.makeRotationAxis(a2, t3));
        }
        n2[e3].crossVectors(i2[e3], r2[e3]);
      }
      if (true === e2) {
        let e3 = Math.acos(qs(r2[0].dot(r2[t2]), -1, 1));
        e3 /= t2, i2[0].dot(a2.crossVectors(r2[0], r2[t2])) > 0 && (e3 = -e3);
        for (let s3 = 1; s3 <= t2; s3++) r2[s3].applyMatrix4(o2.makeRotationAxis(i2[s3], e3 * s3)), n2[s3].crossVectors(i2[s3], r2[s3]);
      }
      return { tangents: i2, normals: r2, binormals: n2 };
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.arcLengthDivisions = t2.arcLengthDivisions, this;
    }
    toJSON() {
      const t2 = { metadata: { version: 4.7, type: "Curve", generator: "Curve.toJSON" } };
      return t2.arcLengthDivisions = this.arcLengthDivisions, t2.type = this.type, t2;
    }
    fromJSON(t2) {
      return this.arcLengthDivisions = t2.arcLengthDivisions, this;
    }
  };
  var wh = class extends vh {
    constructor(t2 = 0, e2 = 0, s2 = 1, i2 = 1, r2 = 0, n2 = 2 * Math.PI, a2 = false, o2 = 0) {
      super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = t2, this.aY = e2, this.xRadius = s2, this.yRadius = i2, this.aStartAngle = r2, this.aEndAngle = n2, this.aClockwise = a2, this.aRotation = o2;
    }
    getPoint(t2, e2 = new $s()) {
      const s2 = e2, i2 = 2 * Math.PI;
      let r2 = this.aEndAngle - this.aStartAngle;
      const n2 = Math.abs(r2) < Number.EPSILON;
      for (; r2 < 0; ) r2 += i2;
      for (; r2 > i2; ) r2 -= i2;
      r2 < Number.EPSILON && (r2 = n2 ? 0 : i2), true !== this.aClockwise || n2 || (r2 === i2 ? r2 = -i2 : r2 -= i2);
      const a2 = this.aStartAngle + t2 * r2;
      let o2 = this.aX + this.xRadius * Math.cos(a2), h2 = this.aY + this.yRadius * Math.sin(a2);
      if (0 !== this.aRotation) {
        const t3 = Math.cos(this.aRotation), e3 = Math.sin(this.aRotation), s3 = o2 - this.aX, i3 = h2 - this.aY;
        o2 = s3 * t3 - i3 * e3 + this.aX, h2 = s3 * e3 + i3 * t3 + this.aY;
      }
      return s2.set(o2, h2);
    }
    copy(t2) {
      return super.copy(t2), this.aX = t2.aX, this.aY = t2.aY, this.xRadius = t2.xRadius, this.yRadius = t2.yRadius, this.aStartAngle = t2.aStartAngle, this.aEndAngle = t2.aEndAngle, this.aClockwise = t2.aClockwise, this.aRotation = t2.aRotation, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.aX = this.aX, t2.aY = this.aY, t2.xRadius = this.xRadius, t2.yRadius = this.yRadius, t2.aStartAngle = this.aStartAngle, t2.aEndAngle = this.aEndAngle, t2.aClockwise = this.aClockwise, t2.aRotation = this.aRotation, t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.aX = t2.aX, this.aY = t2.aY, this.xRadius = t2.xRadius, this.yRadius = t2.yRadius, this.aStartAngle = t2.aStartAngle, this.aEndAngle = t2.aEndAngle, this.aClockwise = t2.aClockwise, this.aRotation = t2.aRotation, this;
    }
  };
  var Mh = class extends wh {
    constructor(t2, e2, s2, i2, r2, n2) {
      super(t2, e2, s2, s2, i2, r2, n2), this.isArcCurve = true, this.type = "ArcCurve";
    }
  };
  function Sh() {
    let t2 = 0, e2 = 0, s2 = 0, i2 = 0;
    function r2(r3, n2, a2, o2) {
      t2 = r3, e2 = a2, s2 = -3 * r3 + 3 * n2 - 2 * a2 - o2, i2 = 2 * r3 - 2 * n2 + a2 + o2;
    }
    return { initCatmullRom: function(t3, e3, s3, i3, n2) {
      r2(e3, s3, n2 * (s3 - t3), n2 * (i3 - e3));
    }, initNonuniformCatmullRom: function(t3, e3, s3, i3, n2, a2, o2) {
      let h2 = (e3 - t3) / n2 - (s3 - t3) / (n2 + a2) + (s3 - e3) / a2, l2 = (s3 - e3) / a2 - (i3 - e3) / (a2 + o2) + (i3 - s3) / o2;
      h2 *= a2, l2 *= a2, r2(e3, s3, h2, l2);
    }, calc: function(r3) {
      const n2 = r3 * r3;
      return t2 + e2 * r3 + s2 * n2 + i2 * (n2 * r3);
    } };
  }
  var _h = new Ks();
  var Ah = new Sh();
  var Th = new Sh();
  var zh = new Sh();
  var Ch = class extends vh {
    constructor(t2 = [], e2 = false, s2 = "centripetal", i2 = 0.5) {
      super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = t2, this.closed = e2, this.curveType = s2, this.tension = i2;
    }
    getPoint(t2, e2 = new Ks()) {
      const s2 = e2, i2 = this.points, r2 = i2.length, n2 = (r2 - (this.closed ? 0 : 1)) * t2;
      let a2, o2, h2 = Math.floor(n2), l2 = n2 - h2;
      this.closed ? h2 += h2 > 0 ? 0 : (Math.floor(Math.abs(h2) / r2) + 1) * r2 : 0 === l2 && h2 === r2 - 1 && (h2 = r2 - 2, l2 = 1), this.closed || h2 > 0 ? a2 = i2[(h2 - 1) % r2] : (_h.subVectors(i2[0], i2[1]).add(i2[0]), a2 = _h);
      const c2 = i2[h2 % r2], u2 = i2[(h2 + 1) % r2];
      if (this.closed || h2 + 2 < r2 ? o2 = i2[(h2 + 2) % r2] : (_h.subVectors(i2[r2 - 1], i2[r2 - 2]).add(i2[r2 - 1]), o2 = _h), "centripetal" === this.curveType || "chordal" === this.curveType) {
        const t3 = "chordal" === this.curveType ? 0.5 : 0.25;
        let e3 = Math.pow(a2.distanceToSquared(c2), t3), s3 = Math.pow(c2.distanceToSquared(u2), t3), i3 = Math.pow(u2.distanceToSquared(o2), t3);
        s3 < 1e-4 && (s3 = 1), e3 < 1e-4 && (e3 = s3), i3 < 1e-4 && (i3 = s3), Ah.initNonuniformCatmullRom(a2.x, c2.x, u2.x, o2.x, e3, s3, i3), Th.initNonuniformCatmullRom(a2.y, c2.y, u2.y, o2.y, e3, s3, i3), zh.initNonuniformCatmullRom(a2.z, c2.z, u2.z, o2.z, e3, s3, i3);
      } else "catmullrom" === this.curveType && (Ah.initCatmullRom(a2.x, c2.x, u2.x, o2.x, this.tension), Th.initCatmullRom(a2.y, c2.y, u2.y, o2.y, this.tension), zh.initCatmullRom(a2.z, c2.z, u2.z, o2.z, this.tension));
      return s2.set(Ah.calc(l2), Th.calc(l2), zh.calc(l2)), s2;
    }
    copy(t2) {
      super.copy(t2), this.points = [];
      for (let e2 = 0, s2 = t2.points.length; e2 < s2; e2++) {
        const s3 = t2.points[e2];
        this.points.push(s3.clone());
      }
      return this.closed = t2.closed, this.curveType = t2.curveType, this.tension = t2.tension, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.points = [];
      for (let e2 = 0, s2 = this.points.length; e2 < s2; e2++) {
        const s3 = this.points[e2];
        t2.points.push(s3.toArray());
      }
      return t2.closed = this.closed, t2.curveType = this.curveType, t2.tension = this.tension, t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.points = [];
      for (let e2 = 0, s2 = t2.points.length; e2 < s2; e2++) {
        const s3 = t2.points[e2];
        this.points.push(new Ks().fromArray(s3));
      }
      return this.closed = t2.closed, this.curveType = t2.curveType, this.tension = t2.tension, this;
    }
  };
  function Ih(t2, e2, s2, i2, r2) {
    const n2 = 0.5 * (i2 - e2), a2 = 0.5 * (r2 - s2), o2 = t2 * t2;
    return (2 * s2 - 2 * i2 + n2 + a2) * (t2 * o2) + (-3 * s2 + 3 * i2 - 2 * n2 - a2) * o2 + n2 * t2 + s2;
  }
  function Bh(t2, e2, s2, i2) {
    return function(t3, e3) {
      const s3 = 1 - t3;
      return s3 * s3 * e3;
    }(t2, e2) + function(t3, e3) {
      return 2 * (1 - t3) * t3 * e3;
    }(t2, s2) + function(t3, e3) {
      return t3 * t3 * e3;
    }(t2, i2);
  }
  function kh(t2, e2, s2, i2, r2) {
    return function(t3, e3) {
      const s3 = 1 - t3;
      return s3 * s3 * s3 * e3;
    }(t2, e2) + function(t3, e3) {
      const s3 = 1 - t3;
      return 3 * s3 * s3 * t3 * e3;
    }(t2, s2) + function(t3, e3) {
      return 3 * (1 - t3) * t3 * t3 * e3;
    }(t2, i2) + function(t3, e3) {
      return t3 * t3 * t3 * e3;
    }(t2, r2);
  }
  var Eh = class extends vh {
    constructor(t2 = new $s(), e2 = new $s(), s2 = new $s(), i2 = new $s()) {
      super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = t2, this.v1 = e2, this.v2 = s2, this.v3 = i2;
    }
    getPoint(t2, e2 = new $s()) {
      const s2 = e2, i2 = this.v0, r2 = this.v1, n2 = this.v2, a2 = this.v3;
      return s2.set(kh(t2, i2.x, r2.x, n2.x, a2.x), kh(t2, i2.y, r2.y, n2.y, a2.y)), s2;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this.v3.copy(t2.v3), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2.v3 = this.v3.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this.v3.fromArray(t2.v3), this;
    }
  };
  var Rh = class extends vh {
    constructor(t2 = new Ks(), e2 = new Ks(), s2 = new Ks(), i2 = new Ks()) {
      super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = t2, this.v1 = e2, this.v2 = s2, this.v3 = i2;
    }
    getPoint(t2, e2 = new Ks()) {
      const s2 = e2, i2 = this.v0, r2 = this.v1, n2 = this.v2, a2 = this.v3;
      return s2.set(kh(t2, i2.x, r2.x, n2.x, a2.x), kh(t2, i2.y, r2.y, n2.y, a2.y), kh(t2, i2.z, r2.z, n2.z, a2.z)), s2;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this.v3.copy(t2.v3), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2.v3 = this.v3.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this.v3.fromArray(t2.v3), this;
    }
  };
  var Ph = class extends vh {
    constructor(t2 = new $s(), e2 = new $s()) {
      super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = t2, this.v2 = e2;
    }
    getPoint(t2, e2 = new $s()) {
      const s2 = e2;
      return 1 === t2 ? s2.copy(this.v2) : (s2.copy(this.v2).sub(this.v1), s2.multiplyScalar(t2).add(this.v1)), s2;
    }
    getPointAt(t2, e2) {
      return this.getPoint(t2, e2);
    }
    getTangent(t2, e2 = new $s()) {
      return e2.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t2, e2) {
      return this.getTangent(t2, e2);
    }
    copy(t2) {
      return super.copy(t2), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var Oh = class extends vh {
    constructor(t2 = new Ks(), e2 = new Ks()) {
      super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = t2, this.v2 = e2;
    }
    getPoint(t2, e2 = new Ks()) {
      const s2 = e2;
      return 1 === t2 ? s2.copy(this.v2) : (s2.copy(this.v2).sub(this.v1), s2.multiplyScalar(t2).add(this.v1)), s2;
    }
    getPointAt(t2, e2) {
      return this.getPoint(t2, e2);
    }
    getTangent(t2, e2 = new Ks()) {
      return e2.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t2, e2) {
      return this.getTangent(t2, e2);
    }
    copy(t2) {
      return super.copy(t2), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var Nh = class extends vh {
    constructor(t2 = new $s(), e2 = new $s(), s2 = new $s()) {
      super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = t2, this.v1 = e2, this.v2 = s2;
    }
    getPoint(t2, e2 = new $s()) {
      const s2 = e2, i2 = this.v0, r2 = this.v1, n2 = this.v2;
      return s2.set(Bh(t2, i2.x, r2.x, n2.x), Bh(t2, i2.y, r2.y, n2.y)), s2;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var Vh = class extends vh {
    constructor(t2 = new Ks(), e2 = new Ks(), s2 = new Ks()) {
      super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = t2, this.v1 = e2, this.v2 = s2;
    }
    getPoint(t2, e2 = new Ks()) {
      const s2 = e2, i2 = this.v0, r2 = this.v1, n2 = this.v2;
      return s2.set(Bh(t2, i2.x, r2.x, n2.x), Bh(t2, i2.y, r2.y, n2.y), Bh(t2, i2.z, r2.z, n2.z)), s2;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var Fh = class extends vh {
    constructor(t2 = []) {
      super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = t2;
    }
    getPoint(t2, e2 = new $s()) {
      const s2 = e2, i2 = this.points, r2 = (i2.length - 1) * t2, n2 = Math.floor(r2), a2 = r2 - n2, o2 = i2[0 === n2 ? n2 : n2 - 1], h2 = i2[n2], l2 = i2[n2 > i2.length - 2 ? i2.length - 1 : n2 + 1], c2 = i2[n2 > i2.length - 3 ? i2.length - 1 : n2 + 2];
      return s2.set(Ih(a2, o2.x, h2.x, l2.x, c2.x), Ih(a2, o2.y, h2.y, l2.y, c2.y)), s2;
    }
    copy(t2) {
      super.copy(t2), this.points = [];
      for (let e2 = 0, s2 = t2.points.length; e2 < s2; e2++) {
        const s3 = t2.points[e2];
        this.points.push(s3.clone());
      }
      return this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.points = [];
      for (let e2 = 0, s2 = this.points.length; e2 < s2; e2++) {
        const s3 = this.points[e2];
        t2.points.push(s3.toArray());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.points = [];
      for (let e2 = 0, s2 = t2.points.length; e2 < s2; e2++) {
        const s3 = t2.points[e2];
        this.points.push(new $s().fromArray(s3));
      }
      return this;
    }
  };
  var Lh = Object.freeze({ __proto__: null, ArcCurve: Mh, CatmullRomCurve3: Ch, CubicBezierCurve: Eh, CubicBezierCurve3: Rh, EllipseCurve: wh, LineCurve: Ph, LineCurve3: Oh, QuadraticBezierCurve: Nh, QuadraticBezierCurve3: Vh, SplineCurve: Fh });
  var jh = class extends vh {
    constructor() {
      super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
    }
    add(t2) {
      this.curves.push(t2);
    }
    closePath() {
      const t2 = this.curves[0].getPoint(0), e2 = this.curves[this.curves.length - 1].getPoint(1);
      if (!t2.equals(e2)) {
        const s2 = true === t2.isVector2 ? "LineCurve" : "LineCurve3";
        this.curves.push(new Lh[s2](e2, t2));
      }
      return this;
    }
    getPoint(t2, e2) {
      const s2 = t2 * this.getLength(), i2 = this.getCurveLengths();
      let r2 = 0;
      for (; r2 < i2.length; ) {
        if (i2[r2] >= s2) {
          const t3 = i2[r2] - s2, n2 = this.curves[r2], a2 = n2.getLength(), o2 = 0 === a2 ? 0 : 1 - t3 / a2;
          return n2.getPointAt(o2, e2);
        }
        r2++;
      }
      return null;
    }
    getLength() {
      const t2 = this.getCurveLengths();
      return t2[t2.length - 1];
    }
    updateArcLengths() {
      this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
    }
    getCurveLengths() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
      const t2 = [];
      let e2 = 0;
      for (let s2 = 0, i2 = this.curves.length; s2 < i2; s2++) e2 += this.curves[s2].getLength(), t2.push(e2);
      return this.cacheLengths = t2, t2;
    }
    getSpacedPoints(t2 = 40) {
      const e2 = [];
      for (let s2 = 0; s2 <= t2; s2++) e2.push(this.getPoint(s2 / t2));
      return this.autoClose && e2.push(e2[0]), e2;
    }
    getPoints(t2 = 12) {
      const e2 = [];
      let s2;
      for (let i2 = 0, r2 = this.curves; i2 < r2.length; i2++) {
        const n2 = r2[i2], a2 = n2.isEllipseCurve ? 2 * t2 : n2.isLineCurve || n2.isLineCurve3 ? 1 : n2.isSplineCurve ? t2 * n2.points.length : t2, o2 = n2.getPoints(a2);
        for (let t3 = 0; t3 < o2.length; t3++) {
          const i3 = o2[t3];
          s2 && s2.equals(i3) || (e2.push(i3), s2 = i3);
        }
      }
      return this.autoClose && e2.length > 1 && !e2[e2.length - 1].equals(e2[0]) && e2.push(e2[0]), e2;
    }
    copy(t2) {
      super.copy(t2), this.curves = [];
      for (let e2 = 0, s2 = t2.curves.length; e2 < s2; e2++) {
        const s3 = t2.curves[e2];
        this.curves.push(s3.clone());
      }
      return this.autoClose = t2.autoClose, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.autoClose = this.autoClose, t2.curves = [];
      for (let e2 = 0, s2 = this.curves.length; e2 < s2; e2++) {
        const s3 = this.curves[e2];
        t2.curves.push(s3.toJSON());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.autoClose = t2.autoClose, this.curves = [];
      for (let e2 = 0, s2 = t2.curves.length; e2 < s2; e2++) {
        const s3 = t2.curves[e2];
        this.curves.push(new Lh[s3.type]().fromJSON(s3));
      }
      return this;
    }
  };
  var Dh = class extends jh {
    constructor(t2) {
      super(), this.type = "Path", this.currentPoint = new $s(), t2 && this.setFromPoints(t2);
    }
    setFromPoints(t2) {
      this.moveTo(t2[0].x, t2[0].y);
      for (let e2 = 1, s2 = t2.length; e2 < s2; e2++) this.lineTo(t2[e2].x, t2[e2].y);
      return this;
    }
    moveTo(t2, e2) {
      return this.currentPoint.set(t2, e2), this;
    }
    lineTo(t2, e2) {
      const s2 = new Ph(this.currentPoint.clone(), new $s(t2, e2));
      return this.curves.push(s2), this.currentPoint.set(t2, e2), this;
    }
    quadraticCurveTo(t2, e2, s2, i2) {
      const r2 = new Nh(this.currentPoint.clone(), new $s(t2, e2), new $s(s2, i2));
      return this.curves.push(r2), this.currentPoint.set(s2, i2), this;
    }
    bezierCurveTo(t2, e2, s2, i2, r2, n2) {
      const a2 = new Eh(this.currentPoint.clone(), new $s(t2, e2), new $s(s2, i2), new $s(r2, n2));
      return this.curves.push(a2), this.currentPoint.set(r2, n2), this;
    }
    splineThru(t2) {
      const e2 = [this.currentPoint.clone()].concat(t2), s2 = new Fh(e2);
      return this.curves.push(s2), this.currentPoint.copy(t2[t2.length - 1]), this;
    }
    arc(t2, e2, s2, i2, r2, n2) {
      const a2 = this.currentPoint.x, o2 = this.currentPoint.y;
      return this.absarc(t2 + a2, e2 + o2, s2, i2, r2, n2), this;
    }
    absarc(t2, e2, s2, i2, r2, n2) {
      return this.absellipse(t2, e2, s2, s2, i2, r2, n2), this;
    }
    ellipse(t2, e2, s2, i2, r2, n2, a2, o2) {
      const h2 = this.currentPoint.x, l2 = this.currentPoint.y;
      return this.absellipse(t2 + h2, e2 + l2, s2, i2, r2, n2, a2, o2), this;
    }
    absellipse(t2, e2, s2, i2, r2, n2, a2, o2) {
      const h2 = new wh(t2, e2, s2, i2, r2, n2, a2, o2);
      if (this.curves.length > 0) {
        const t3 = h2.getPoint(0);
        t3.equals(this.currentPoint) || this.lineTo(t3.x, t3.y);
      }
      this.curves.push(h2);
      const l2 = h2.getPoint(1);
      return this.currentPoint.copy(l2), this;
    }
    copy(t2) {
      return super.copy(t2), this.currentPoint.copy(t2.currentPoint), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.currentPoint = this.currentPoint.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.currentPoint.fromArray(t2.currentPoint), this;
    }
  };
  var Wh = class extends Dh {
    constructor(t2) {
      super(t2), this.uuid = Hs(), this.type = "Shape", this.holes = [];
    }
    getPointsHoles(t2) {
      const e2 = [];
      for (let s2 = 0, i2 = this.holes.length; s2 < i2; s2++) e2[s2] = this.holes[s2].getPoints(t2);
      return e2;
    }
    extractPoints(t2) {
      return { shape: this.getPoints(t2), holes: this.getPointsHoles(t2) };
    }
    copy(t2) {
      super.copy(t2), this.holes = [];
      for (let e2 = 0, s2 = t2.holes.length; e2 < s2; e2++) {
        const s3 = t2.holes[e2];
        this.holes.push(s3.clone());
      }
      return this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.uuid = this.uuid, t2.holes = [];
      for (let e2 = 0, s2 = this.holes.length; e2 < s2; e2++) {
        const s3 = this.holes[e2];
        t2.holes.push(s3.toJSON());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.uuid = t2.uuid, this.holes = [];
      for (let e2 = 0, s2 = t2.holes.length; e2 < s2; e2++) {
        const s3 = t2.holes[e2];
        this.holes.push(new Dh().fromJSON(s3));
      }
      return this;
    }
  };
  function Uh(t2, e2, s2 = 2) {
    const i2 = e2 && e2.length, r2 = i2 ? e2[0] * s2 : t2.length;
    let n2 = Hh(t2, 0, r2, s2, true);
    const a2 = [];
    if (!n2 || n2.next === n2.prev) return a2;
    let o2, h2, l2;
    if (i2 && (n2 = function(t3, e3, s3, i3) {
      const r3 = [];
      for (let s4 = 0, n3 = e3.length; s4 < n3; s4++) {
        const a3 = Hh(t3, e3[s4] * i3, s4 < n3 - 1 ? e3[s4 + 1] * i3 : t3.length, i3, false);
        a3 === a3.next && (a3.steiner = true), r3.push(el(a3));
      }
      r3.sort($h);
      for (let t4 = 0; t4 < r3.length; t4++) s3 = Qh(r3[t4], s3);
      return s3;
    }(t2, e2, n2, s2)), t2.length > 80 * s2) {
      o2 = 1 / 0, h2 = 1 / 0;
      let e3 = -1 / 0, i3 = -1 / 0;
      for (let n3 = s2; n3 < r2; n3 += s2) {
        const s3 = t2[n3], r3 = t2[n3 + 1];
        s3 < o2 && (o2 = s3), r3 < h2 && (h2 = r3), s3 > e3 && (e3 = s3), r3 > i3 && (i3 = r3);
      }
      l2 = Math.max(e3 - o2, i3 - h2), l2 = 0 !== l2 ? 32767 / l2 : 0;
    }
    return Jh(n2, a2, s2, o2, h2, l2, 0), a2;
  }
  function Hh(t2, e2, s2, i2, r2) {
    let n2;
    if (r2 === function(t3, e3, s3, i3) {
      let r3 = 0;
      for (let n3 = e3, a2 = s3 - i3; n3 < s3; n3 += i3) r3 += (t3[a2] - t3[n3]) * (t3[n3 + 1] + t3[a2 + 1]), a2 = n3;
      return r3;
    }(t2, e2, s2, i2) > 0) for (let r3 = e2; r3 < s2; r3 += i2) n2 = dl(r3 / i2 | 0, t2[r3], t2[r3 + 1], n2);
    else for (let r3 = s2 - i2; r3 >= e2; r3 -= i2) n2 = dl(r3 / i2 | 0, t2[r3], t2[r3 + 1], n2);
    return n2 && al(n2, n2.next) && (pl(n2), n2 = n2.next), n2;
  }
  function qh(t2, e2) {
    if (!t2) return t2;
    e2 || (e2 = t2);
    let s2, i2 = t2;
    do {
      if (s2 = false, i2.steiner || !al(i2, i2.next) && 0 !== nl(i2.prev, i2, i2.next)) i2 = i2.next;
      else {
        if (pl(i2), i2 = e2 = i2.prev, i2 === i2.next) break;
        s2 = true;
      }
    } while (s2 || i2 !== e2);
    return e2;
  }
  function Jh(t2, e2, s2, i2, r2, n2, a2) {
    if (!t2) return;
    !a2 && n2 && function(t3, e3, s3, i3) {
      let r3 = t3;
      do {
        0 === r3.z && (r3.z = tl(r3.x, r3.y, e3, s3, i3)), r3.prevZ = r3.prev, r3.nextZ = r3.next, r3 = r3.next;
      } while (r3 !== t3);
      r3.prevZ.nextZ = null, r3.prevZ = null, function(t4) {
        let e4, s4 = 1;
        do {
          let i4, r4 = t4;
          t4 = null;
          let n3 = null;
          for (e4 = 0; r4; ) {
            e4++;
            let a3 = r4, o3 = 0;
            for (let t5 = 0; t5 < s4 && (o3++, a3 = a3.nextZ, a3); t5++) ;
            let h2 = s4;
            for (; o3 > 0 || h2 > 0 && a3; ) 0 !== o3 && (0 === h2 || !a3 || r4.z <= a3.z) ? (i4 = r4, r4 = r4.nextZ, o3--) : (i4 = a3, a3 = a3.nextZ, h2--), n3 ? n3.nextZ = i4 : t4 = i4, i4.prevZ = n3, n3 = i4;
            r4 = a3;
          }
          n3.nextZ = null, s4 *= 2;
        } while (e4 > 1);
      }(r3);
    }(t2, i2, r2, n2);
    let o2 = t2;
    for (; t2.prev !== t2.next; ) {
      const h2 = t2.prev, l2 = t2.next;
      if (n2 ? Yh(t2, i2, r2, n2) : Xh(t2)) e2.push(h2.i, t2.i, l2.i), pl(t2), t2 = l2.next, o2 = l2.next;
      else if ((t2 = l2) === o2) {
        a2 ? 1 === a2 ? Jh(t2 = Zh(qh(t2), e2), e2, s2, i2, r2, n2, 2) : 2 === a2 && Gh(t2, e2, s2, i2, r2, n2) : Jh(qh(t2), e2, s2, i2, r2, n2, 1);
        break;
      }
    }
  }
  function Xh(t2) {
    const e2 = t2.prev, s2 = t2, i2 = t2.next;
    if (nl(e2, s2, i2) >= 0) return false;
    const r2 = e2.x, n2 = s2.x, a2 = i2.x, o2 = e2.y, h2 = s2.y, l2 = i2.y, c2 = Math.min(r2, n2, a2), u2 = Math.min(o2, h2, l2), d2 = Math.max(r2, n2, a2), p2 = Math.max(o2, h2, l2);
    let m2 = i2.next;
    for (; m2 !== e2; ) {
      if (m2.x >= c2 && m2.x <= d2 && m2.y >= u2 && m2.y <= p2 && il(r2, o2, n2, h2, a2, l2, m2.x, m2.y) && nl(m2.prev, m2, m2.next) >= 0) return false;
      m2 = m2.next;
    }
    return true;
  }
  function Yh(t2, e2, s2, i2) {
    const r2 = t2.prev, n2 = t2, a2 = t2.next;
    if (nl(r2, n2, a2) >= 0) return false;
    const o2 = r2.x, h2 = n2.x, l2 = a2.x, c2 = r2.y, u2 = n2.y, d2 = a2.y, p2 = Math.min(o2, h2, l2), m2 = Math.min(c2, u2, d2), y2 = Math.max(o2, h2, l2), g2 = Math.max(c2, u2, d2), f2 = tl(p2, m2, e2, s2, i2), x2 = tl(y2, g2, e2, s2, i2);
    let b2 = t2.prevZ, v2 = t2.nextZ;
    for (; b2 && b2.z >= f2 && v2 && v2.z <= x2; ) {
      if (b2.x >= p2 && b2.x <= y2 && b2.y >= m2 && b2.y <= g2 && b2 !== r2 && b2 !== a2 && il(o2, c2, h2, u2, l2, d2, b2.x, b2.y) && nl(b2.prev, b2, b2.next) >= 0) return false;
      if (b2 = b2.prevZ, v2.x >= p2 && v2.x <= y2 && v2.y >= m2 && v2.y <= g2 && v2 !== r2 && v2 !== a2 && il(o2, c2, h2, u2, l2, d2, v2.x, v2.y) && nl(v2.prev, v2, v2.next) >= 0) return false;
      v2 = v2.nextZ;
    }
    for (; b2 && b2.z >= f2; ) {
      if (b2.x >= p2 && b2.x <= y2 && b2.y >= m2 && b2.y <= g2 && b2 !== r2 && b2 !== a2 && il(o2, c2, h2, u2, l2, d2, b2.x, b2.y) && nl(b2.prev, b2, b2.next) >= 0) return false;
      b2 = b2.prevZ;
    }
    for (; v2 && v2.z <= x2; ) {
      if (v2.x >= p2 && v2.x <= y2 && v2.y >= m2 && v2.y <= g2 && v2 !== r2 && v2 !== a2 && il(o2, c2, h2, u2, l2, d2, v2.x, v2.y) && nl(v2.prev, v2, v2.next) >= 0) return false;
      v2 = v2.nextZ;
    }
    return true;
  }
  function Zh(t2, e2) {
    let s2 = t2;
    do {
      const i2 = s2.prev, r2 = s2.next.next;
      !al(i2, r2) && ol(i2, s2, s2.next, r2) && cl(i2, r2) && cl(r2, i2) && (e2.push(i2.i, s2.i, r2.i), pl(s2), pl(s2.next), s2 = t2 = r2), s2 = s2.next;
    } while (s2 !== t2);
    return qh(s2);
  }
  function Gh(t2, e2, s2, i2, r2, n2) {
    let a2 = t2;
    do {
      let t3 = a2.next.next;
      for (; t3 !== a2.prev; ) {
        if (a2.i !== t3.i && rl(a2, t3)) {
          let o2 = ul(a2, t3);
          return a2 = qh(a2, a2.next), o2 = qh(o2, o2.next), Jh(a2, e2, s2, i2, r2, n2, 0), void Jh(o2, e2, s2, i2, r2, n2, 0);
        }
        t3 = t3.next;
      }
      a2 = a2.next;
    } while (a2 !== t2);
  }
  function $h(t2, e2) {
    let s2 = t2.x - e2.x;
    if (0 === s2 && (s2 = t2.y - e2.y, 0 === s2)) {
      s2 = (t2.next.y - t2.y) / (t2.next.x - t2.x) - (e2.next.y - e2.y) / (e2.next.x - e2.x);
    }
    return s2;
  }
  function Qh(t2, e2) {
    const s2 = function(t3, e3) {
      let s3 = e3;
      const i3 = t3.x, r2 = t3.y;
      let n2, a2 = -1 / 0;
      if (al(t3, s3)) return s3;
      do {
        if (al(t3, s3.next)) return s3.next;
        if (r2 <= s3.y && r2 >= s3.next.y && s3.next.y !== s3.y) {
          const t4 = s3.x + (r2 - s3.y) * (s3.next.x - s3.x) / (s3.next.y - s3.y);
          if (t4 <= i3 && t4 > a2 && (a2 = t4, n2 = s3.x < s3.next.x ? s3 : s3.next, t4 === i3)) return n2;
        }
        s3 = s3.next;
      } while (s3 !== e3);
      if (!n2) return null;
      const o2 = n2, h2 = n2.x, l2 = n2.y;
      let c2 = 1 / 0;
      s3 = n2;
      do {
        if (i3 >= s3.x && s3.x >= h2 && i3 !== s3.x && sl(r2 < l2 ? i3 : a2, r2, h2, l2, r2 < l2 ? a2 : i3, r2, s3.x, s3.y)) {
          const e4 = Math.abs(r2 - s3.y) / (i3 - s3.x);
          cl(s3, t3) && (e4 < c2 || e4 === c2 && (s3.x > n2.x || s3.x === n2.x && Kh(n2, s3))) && (n2 = s3, c2 = e4);
        }
        s3 = s3.next;
      } while (s3 !== o2);
      return n2;
    }(t2, e2);
    if (!s2) return e2;
    const i2 = ul(s2, t2);
    return qh(i2, i2.next), qh(s2, s2.next);
  }
  function Kh(t2, e2) {
    return nl(t2.prev, t2, e2.prev) < 0 && nl(e2.next, t2, t2.next) < 0;
  }
  function tl(t2, e2, s2, i2, r2) {
    return (t2 = 1431655765 & ((t2 = 858993459 & ((t2 = 252645135 & ((t2 = 16711935 & ((t2 = (t2 - s2) * r2 | 0) | t2 << 8)) | t2 << 4)) | t2 << 2)) | t2 << 1)) | (e2 = 1431655765 & ((e2 = 858993459 & ((e2 = 252645135 & ((e2 = 16711935 & ((e2 = (e2 - i2) * r2 | 0) | e2 << 8)) | e2 << 4)) | e2 << 2)) | e2 << 1)) << 1;
  }
  function el(t2) {
    let e2 = t2, s2 = t2;
    do {
      (e2.x < s2.x || e2.x === s2.x && e2.y < s2.y) && (s2 = e2), e2 = e2.next;
    } while (e2 !== t2);
    return s2;
  }
  function sl(t2, e2, s2, i2, r2, n2, a2, o2) {
    return (r2 - a2) * (e2 - o2) >= (t2 - a2) * (n2 - o2) && (t2 - a2) * (i2 - o2) >= (s2 - a2) * (e2 - o2) && (s2 - a2) * (n2 - o2) >= (r2 - a2) * (i2 - o2);
  }
  function il(t2, e2, s2, i2, r2, n2, a2, o2) {
    return !(t2 === a2 && e2 === o2) && sl(t2, e2, s2, i2, r2, n2, a2, o2);
  }
  function rl(t2, e2) {
    return t2.next.i !== e2.i && t2.prev.i !== e2.i && !function(t3, e3) {
      let s2 = t3;
      do {
        if (s2.i !== t3.i && s2.next.i !== t3.i && s2.i !== e3.i && s2.next.i !== e3.i && ol(s2, s2.next, t3, e3)) return true;
        s2 = s2.next;
      } while (s2 !== t3);
      return false;
    }(t2, e2) && (cl(t2, e2) && cl(e2, t2) && function(t3, e3) {
      let s2 = t3, i2 = false;
      const r2 = (t3.x + e3.x) / 2, n2 = (t3.y + e3.y) / 2;
      do {
        s2.y > n2 != s2.next.y > n2 && s2.next.y !== s2.y && r2 < (s2.next.x - s2.x) * (n2 - s2.y) / (s2.next.y - s2.y) + s2.x && (i2 = !i2), s2 = s2.next;
      } while (s2 !== t3);
      return i2;
    }(t2, e2) && (nl(t2.prev, t2, e2.prev) || nl(t2, e2.prev, e2)) || al(t2, e2) && nl(t2.prev, t2, t2.next) > 0 && nl(e2.prev, e2, e2.next) > 0);
  }
  function nl(t2, e2, s2) {
    return (e2.y - t2.y) * (s2.x - e2.x) - (e2.x - t2.x) * (s2.y - e2.y);
  }
  function al(t2, e2) {
    return t2.x === e2.x && t2.y === e2.y;
  }
  function ol(t2, e2, s2, i2) {
    const r2 = ll(nl(t2, e2, s2)), n2 = ll(nl(t2, e2, i2)), a2 = ll(nl(s2, i2, t2)), o2 = ll(nl(s2, i2, e2));
    return r2 !== n2 && a2 !== o2 || (!(0 !== r2 || !hl(t2, s2, e2)) || (!(0 !== n2 || !hl(t2, i2, e2)) || (!(0 !== a2 || !hl(s2, t2, i2)) || !(0 !== o2 || !hl(s2, e2, i2)))));
  }
  function hl(t2, e2, s2) {
    return e2.x <= Math.max(t2.x, s2.x) && e2.x >= Math.min(t2.x, s2.x) && e2.y <= Math.max(t2.y, s2.y) && e2.y >= Math.min(t2.y, s2.y);
  }
  function ll(t2) {
    return t2 > 0 ? 1 : t2 < 0 ? -1 : 0;
  }
  function cl(t2, e2) {
    return nl(t2.prev, t2, t2.next) < 0 ? nl(t2, e2, t2.next) >= 0 && nl(t2, t2.prev, e2) >= 0 : nl(t2, e2, t2.prev) < 0 || nl(t2, t2.next, e2) < 0;
  }
  function ul(t2, e2) {
    const s2 = ml(t2.i, t2.x, t2.y), i2 = ml(e2.i, e2.x, e2.y), r2 = t2.next, n2 = e2.prev;
    return t2.next = e2, e2.prev = t2, s2.next = r2, r2.prev = s2, i2.next = s2, s2.prev = i2, n2.next = i2, i2.prev = n2, i2;
  }
  function dl(t2, e2, s2, i2) {
    const r2 = ml(t2, e2, s2);
    return i2 ? (r2.next = i2.next, r2.prev = i2, i2.next.prev = r2, i2.next = r2) : (r2.prev = r2, r2.next = r2), r2;
  }
  function pl(t2) {
    t2.next.prev = t2.prev, t2.prev.next = t2.next, t2.prevZ && (t2.prevZ.nextZ = t2.nextZ), t2.nextZ && (t2.nextZ.prevZ = t2.prevZ);
  }
  function ml(t2, e2, s2) {
    return { i: t2, x: e2, y: s2, prev: null, next: null, z: 0, prevZ: null, nextZ: null, steiner: false };
  }
  var yl = class {
    static triangulate(t2, e2, s2 = 2) {
      return Uh(t2, e2, s2);
    }
  };
  var gl = class _gl {
    static area(t2) {
      const e2 = t2.length;
      let s2 = 0;
      for (let i2 = e2 - 1, r2 = 0; r2 < e2; i2 = r2++) s2 += t2[i2].x * t2[r2].y - t2[r2].x * t2[i2].y;
      return 0.5 * s2;
    }
    static isClockWise(t2) {
      return _gl.area(t2) < 0;
    }
    static triangulateShape(t2, e2) {
      const s2 = [], i2 = [], r2 = [];
      fl(t2), xl(s2, t2);
      let n2 = t2.length;
      e2.forEach(fl);
      for (let t3 = 0; t3 < e2.length; t3++) i2.push(n2), n2 += e2[t3].length, xl(s2, e2[t3]);
      const a2 = yl.triangulate(s2, i2);
      for (let t3 = 0; t3 < a2.length; t3 += 3) r2.push(a2.slice(t3, t3 + 3));
      return r2;
    }
  };
  function fl(t2) {
    const e2 = t2.length;
    e2 > 2 && t2[e2 - 1].equals(t2[0]) && t2.pop();
  }
  function xl(t2, e2) {
    for (let s2 = 0; s2 < e2.length; s2++) t2.push(e2[s2].x), t2.push(e2[s2].y);
  }
  var bl = class _bl extends In {
    constructor(t2 = new Wh([new $s(0.5, 0.5), new $s(-0.5, 0.5), new $s(-0.5, -0.5), new $s(0.5, -0.5)]), e2 = {}) {
      super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: t2, options: e2 }, t2 = Array.isArray(t2) ? t2 : [t2];
      const s2 = this, i2 = [], r2 = [];
      for (let e3 = 0, s3 = t2.length; e3 < s3; e3++) {
        n2(t2[e3]);
      }
      function n2(t3) {
        const n3 = [], a2 = void 0 !== e2.curveSegments ? e2.curveSegments : 12, o2 = void 0 !== e2.steps ? e2.steps : 1, h2 = void 0 !== e2.depth ? e2.depth : 1;
        let l2 = void 0 === e2.bevelEnabled || e2.bevelEnabled, c2 = void 0 !== e2.bevelThickness ? e2.bevelThickness : 0.2, u2 = void 0 !== e2.bevelSize ? e2.bevelSize : c2 - 0.1, d2 = void 0 !== e2.bevelOffset ? e2.bevelOffset : 0, p2 = void 0 !== e2.bevelSegments ? e2.bevelSegments : 3;
        const m2 = e2.extrudePath, y2 = void 0 !== e2.UVGenerator ? e2.UVGenerator : vl;
        let g2, f2, x2, b2, v2, w2 = false;
        m2 && (g2 = m2.getSpacedPoints(o2), w2 = true, l2 = false, f2 = m2.computeFrenetFrames(o2, false), x2 = new Ks(), b2 = new Ks(), v2 = new Ks()), l2 || (p2 = 0, c2 = 0, u2 = 0, d2 = 0);
        const M2 = t3.extractPoints(a2);
        let S2 = M2.shape;
        const _2 = M2.holes;
        if (!gl.isClockWise(S2)) {
          S2 = S2.reverse();
          for (let t4 = 0, e3 = _2.length; t4 < e3; t4++) {
            const e4 = _2[t4];
            gl.isClockWise(e4) && (_2[t4] = e4.reverse());
          }
        }
        function A2(t4) {
          const e3 = 1e-10 * 1e-10;
          let s3 = t4[0];
          for (let i3 = 1; i3 <= t4.length; i3++) {
            const r3 = i3 % t4.length, n4 = t4[r3], a3 = n4.x - s3.x, o3 = n4.y - s3.y, h3 = a3 * a3 + o3 * o3, l3 = Math.max(Math.abs(n4.x), Math.abs(n4.y), Math.abs(s3.x), Math.abs(s3.y));
            h3 <= e3 * l3 * l3 ? (t4.splice(r3, 1), i3--) : s3 = n4;
          }
        }
        A2(S2), _2.forEach(A2);
        const T2 = _2.length, z2 = S2;
        for (let t4 = 0; t4 < T2; t4++) {
          const e3 = _2[t4];
          S2 = S2.concat(e3);
        }
        function C2(t4, e3, s3) {
          return e3 || console.error("THREE.ExtrudeGeometry: vec does not exist"), t4.clone().addScaledVector(e3, s3);
        }
        const I2 = S2.length;
        function B2(t4, e3, s3) {
          let i3, r3, n4;
          const a3 = t4.x - e3.x, o3 = t4.y - e3.y, h3 = s3.x - t4.x, l3 = s3.y - t4.y, c3 = a3 * a3 + o3 * o3, u3 = a3 * l3 - o3 * h3;
          if (Math.abs(u3) > Number.EPSILON) {
            const u4 = Math.sqrt(c3), d3 = Math.sqrt(h3 * h3 + l3 * l3), p3 = e3.x - o3 / u4, m3 = e3.y + a3 / u4, y3 = ((s3.x - l3 / d3 - p3) * l3 - (s3.y + h3 / d3 - m3) * h3) / (a3 * l3 - o3 * h3);
            i3 = p3 + a3 * y3 - t4.x, r3 = m3 + o3 * y3 - t4.y;
            const g3 = i3 * i3 + r3 * r3;
            if (g3 <= 2) return new $s(i3, r3);
            n4 = Math.sqrt(g3 / 2);
          } else {
            let t5 = false;
            a3 > Number.EPSILON ? h3 > Number.EPSILON && (t5 = true) : a3 < -Number.EPSILON ? h3 < -Number.EPSILON && (t5 = true) : Math.sign(o3) === Math.sign(l3) && (t5 = true), t5 ? (i3 = -o3, r3 = a3, n4 = Math.sqrt(c3)) : (i3 = a3, r3 = o3, n4 = Math.sqrt(c3 / 2));
          }
          return new $s(i3 / n4, r3 / n4);
        }
        const k2 = [];
        for (let t4 = 0, e3 = z2.length, s3 = e3 - 1, i3 = t4 + 1; t4 < e3; t4++, s3++, i3++) s3 === e3 && (s3 = 0), i3 === e3 && (i3 = 0), k2[t4] = B2(z2[t4], z2[s3], z2[i3]);
        const E2 = [];
        let R2, P2, O2 = k2.concat();
        for (let t4 = 0, e3 = T2; t4 < e3; t4++) {
          const e4 = _2[t4];
          R2 = [];
          for (let t5 = 0, s3 = e4.length, i3 = s3 - 1, r3 = t5 + 1; t5 < s3; t5++, i3++, r3++) i3 === s3 && (i3 = 0), r3 === s3 && (r3 = 0), R2[t5] = B2(e4[t5], e4[i3], e4[r3]);
          E2.push(R2), O2 = O2.concat(R2);
        }
        if (0 === p2) P2 = gl.triangulateShape(z2, _2);
        else {
          const t4 = [], e3 = [];
          for (let s3 = 0; s3 < p2; s3++) {
            const i3 = s3 / p2, r3 = c2 * Math.cos(i3 * Math.PI / 2), n4 = u2 * Math.sin(i3 * Math.PI / 2) + d2;
            for (let e4 = 0, s4 = z2.length; e4 < s4; e4++) {
              const s5 = C2(z2[e4], k2[e4], n4);
              L2(s5.x, s5.y, -r3), 0 === i3 && t4.push(s5);
            }
            for (let t5 = 0, s4 = T2; t5 < s4; t5++) {
              const s5 = _2[t5];
              R2 = E2[t5];
              const a3 = [];
              for (let t6 = 0, e4 = s5.length; t6 < e4; t6++) {
                const e5 = C2(s5[t6], R2[t6], n4);
                L2(e5.x, e5.y, -r3), 0 === i3 && a3.push(e5);
              }
              0 === i3 && e3.push(a3);
            }
          }
          P2 = gl.triangulateShape(t4, e3);
        }
        const N2 = P2.length, V2 = u2 + d2;
        for (let t4 = 0; t4 < I2; t4++) {
          const e3 = l2 ? C2(S2[t4], O2[t4], V2) : S2[t4];
          w2 ? (b2.copy(f2.normals[0]).multiplyScalar(e3.x), x2.copy(f2.binormals[0]).multiplyScalar(e3.y), v2.copy(g2[0]).add(b2).add(x2), L2(v2.x, v2.y, v2.z)) : L2(e3.x, e3.y, 0);
        }
        for (let t4 = 1; t4 <= o2; t4++) for (let e3 = 0; e3 < I2; e3++) {
          const s3 = l2 ? C2(S2[e3], O2[e3], V2) : S2[e3];
          w2 ? (b2.copy(f2.normals[t4]).multiplyScalar(s3.x), x2.copy(f2.binormals[t4]).multiplyScalar(s3.y), v2.copy(g2[t4]).add(b2).add(x2), L2(v2.x, v2.y, v2.z)) : L2(s3.x, s3.y, h2 / o2 * t4);
        }
        for (let t4 = p2 - 1; t4 >= 0; t4--) {
          const e3 = t4 / p2, s3 = c2 * Math.cos(e3 * Math.PI / 2), i3 = u2 * Math.sin(e3 * Math.PI / 2) + d2;
          for (let t5 = 0, e4 = z2.length; t5 < e4; t5++) {
            const e5 = C2(z2[t5], k2[t5], i3);
            L2(e5.x, e5.y, h2 + s3);
          }
          for (let t5 = 0, e4 = _2.length; t5 < e4; t5++) {
            const e5 = _2[t5];
            R2 = E2[t5];
            for (let t6 = 0, r3 = e5.length; t6 < r3; t6++) {
              const r4 = C2(e5[t6], R2[t6], i3);
              w2 ? L2(r4.x, r4.y + g2[o2 - 1].y, g2[o2 - 1].x + s3) : L2(r4.x, r4.y, h2 + s3);
            }
          }
        }
        function F2(t4, e3) {
          let s3 = t4.length;
          for (; --s3 >= 0; ) {
            const i3 = s3;
            let r3 = s3 - 1;
            r3 < 0 && (r3 = t4.length - 1);
            for (let t5 = 0, s4 = o2 + 2 * p2; t5 < s4; t5++) {
              const s5 = I2 * t5, n4 = I2 * (t5 + 1);
              D2(e3 + i3 + s5, e3 + r3 + s5, e3 + r3 + n4, e3 + i3 + n4);
            }
          }
        }
        function L2(t4, e3, s3) {
          n3.push(t4), n3.push(e3), n3.push(s3);
        }
        function j2(t4, e3, r3) {
          W2(t4), W2(e3), W2(r3);
          const n4 = i2.length / 3, a3 = y2.generateTopUV(s2, i2, n4 - 3, n4 - 2, n4 - 1);
          U2(a3[0]), U2(a3[1]), U2(a3[2]);
        }
        function D2(t4, e3, r3, n4) {
          W2(t4), W2(e3), W2(n4), W2(e3), W2(r3), W2(n4);
          const a3 = i2.length / 3, o3 = y2.generateSideWallUV(s2, i2, a3 - 6, a3 - 3, a3 - 2, a3 - 1);
          U2(o3[0]), U2(o3[1]), U2(o3[3]), U2(o3[1]), U2(o3[2]), U2(o3[3]);
        }
        function W2(t4) {
          i2.push(n3[3 * t4 + 0]), i2.push(n3[3 * t4 + 1]), i2.push(n3[3 * t4 + 2]);
        }
        function U2(t4) {
          r2.push(t4.x), r2.push(t4.y);
        }
        !function() {
          const t4 = i2.length / 3;
          if (l2) {
            let t5 = 0, e3 = I2 * t5;
            for (let t6 = 0; t6 < N2; t6++) {
              const s3 = P2[t6];
              j2(s3[2] + e3, s3[1] + e3, s3[0] + e3);
            }
            t5 = o2 + 2 * p2, e3 = I2 * t5;
            for (let t6 = 0; t6 < N2; t6++) {
              const s3 = P2[t6];
              j2(s3[0] + e3, s3[1] + e3, s3[2] + e3);
            }
          } else {
            for (let t5 = 0; t5 < N2; t5++) {
              const e3 = P2[t5];
              j2(e3[2], e3[1], e3[0]);
            }
            for (let t5 = 0; t5 < N2; t5++) {
              const e3 = P2[t5];
              j2(e3[0] + I2 * o2, e3[1] + I2 * o2, e3[2] + I2 * o2);
            }
          }
          s2.addGroup(t4, i2.length / 3 - t4, 0);
        }(), function() {
          const t4 = i2.length / 3;
          let e3 = 0;
          F2(z2, e3), e3 += z2.length;
          for (let t5 = 0, s3 = _2.length; t5 < s3; t5++) {
            const s4 = _2[t5];
            F2(s4, e3), e3 += s4.length;
          }
          s2.addGroup(t4, i2.length / 3 - t4, 1);
        }();
      }
      this.setAttribute("position", new wn(i2, 3)), this.setAttribute("uv", new wn(r2, 2)), this.computeVertexNormals();
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return function(t3, e2, s2) {
        if (s2.shapes = [], Array.isArray(t3)) for (let e3 = 0, i2 = t3.length; e3 < i2; e3++) {
          const i3 = t3[e3];
          s2.shapes.push(i3.uuid);
        }
        else s2.shapes.push(t3.uuid);
        s2.options = Object.assign({}, e2), void 0 !== e2.extrudePath && (s2.options.extrudePath = e2.extrudePath.toJSON());
        return s2;
      }(this.parameters.shapes, this.parameters.options, t2);
    }
    static fromJSON(t2, e2) {
      const s2 = [];
      for (let i3 = 0, r2 = t2.shapes.length; i3 < r2; i3++) {
        const r3 = e2[t2.shapes[i3]];
        s2.push(r3);
      }
      const i2 = t2.options.extrudePath;
      return void 0 !== i2 && (t2.options.extrudePath = new Lh[i2.type]().fromJSON(i2)), new _bl(s2, t2.options);
    }
  };
  var vl = { generateTopUV: function(t2, e2, s2, i2, r2) {
    const n2 = e2[3 * s2], a2 = e2[3 * s2 + 1], o2 = e2[3 * i2], h2 = e2[3 * i2 + 1], l2 = e2[3 * r2], c2 = e2[3 * r2 + 1];
    return [new $s(n2, a2), new $s(o2, h2), new $s(l2, c2)];
  }, generateSideWallUV: function(t2, e2, s2, i2, r2, n2) {
    const a2 = e2[3 * s2], o2 = e2[3 * s2 + 1], h2 = e2[3 * s2 + 2], l2 = e2[3 * i2], c2 = e2[3 * i2 + 1], u2 = e2[3 * i2 + 2], d2 = e2[3 * r2], p2 = e2[3 * r2 + 1], m2 = e2[3 * r2 + 2], y2 = e2[3 * n2], g2 = e2[3 * n2 + 1], f2 = e2[3 * n2 + 2];
    return Math.abs(o2 - c2) < Math.abs(a2 - l2) ? [new $s(a2, 1 - h2), new $s(l2, 1 - u2), new $s(d2, 1 - m2), new $s(y2, 1 - f2)] : [new $s(o2, 1 - h2), new $s(c2, 1 - u2), new $s(p2, 1 - m2), new $s(g2, 1 - f2)];
  } };
  var wl = class _wl extends ph {
    constructor(t2 = 1, e2 = 0) {
      const s2 = (1 + Math.sqrt(5)) / 2;
      super([-1, s2, 0, 1, s2, 0, -1, -s2, 0, 1, -s2, 0, 0, -1, s2, 0, 1, s2, 0, -1, -s2, 0, 1, -s2, s2, 0, -1, s2, 0, 1, -s2, 0, -1, -s2, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t2, e2), this.type = "IcosahedronGeometry", this.parameters = { radius: t2, detail: e2 };
    }
    static fromJSON(t2) {
      return new _wl(t2.radius, t2.detail);
    }
  };
  var Ml = class _Ml extends In {
    constructor(t2 = [new $s(0, -0.5), new $s(0.5, 0), new $s(0, 0.5)], e2 = 12, s2 = 0, i2 = 2 * Math.PI) {
      super(), this.type = "LatheGeometry", this.parameters = { points: t2, segments: e2, phiStart: s2, phiLength: i2 }, e2 = Math.floor(e2), i2 = qs(i2, 0, 2 * Math.PI);
      const r2 = [], n2 = [], a2 = [], o2 = [], h2 = [], l2 = 1 / e2, c2 = new Ks(), u2 = new $s(), d2 = new Ks(), p2 = new Ks(), m2 = new Ks();
      let y2 = 0, g2 = 0;
      for (let e3 = 0; e3 <= t2.length - 1; e3++) switch (e3) {
        case 0:
          y2 = t2[e3 + 1].x - t2[e3].x, g2 = t2[e3 + 1].y - t2[e3].y, d2.x = 1 * g2, d2.y = -y2, d2.z = 0 * g2, m2.copy(d2), d2.normalize(), o2.push(d2.x, d2.y, d2.z);
          break;
        case t2.length - 1:
          o2.push(m2.x, m2.y, m2.z);
          break;
        default:
          y2 = t2[e3 + 1].x - t2[e3].x, g2 = t2[e3 + 1].y - t2[e3].y, d2.x = 1 * g2, d2.y = -y2, d2.z = 0 * g2, p2.copy(d2), d2.x += m2.x, d2.y += m2.y, d2.z += m2.z, d2.normalize(), o2.push(d2.x, d2.y, d2.z), m2.copy(p2);
      }
      for (let r3 = 0; r3 <= e2; r3++) {
        const d3 = s2 + r3 * l2 * i2, p3 = Math.sin(d3), m3 = Math.cos(d3);
        for (let s3 = 0; s3 <= t2.length - 1; s3++) {
          c2.x = t2[s3].x * p3, c2.y = t2[s3].y, c2.z = t2[s3].x * m3, n2.push(c2.x, c2.y, c2.z), u2.x = r3 / e2, u2.y = s3 / (t2.length - 1), a2.push(u2.x, u2.y);
          const i3 = o2[3 * s3 + 0] * p3, l3 = o2[3 * s3 + 1], d4 = o2[3 * s3 + 0] * m3;
          h2.push(i3, l3, d4);
        }
      }
      for (let s3 = 0; s3 < e2; s3++) for (let e3 = 0; e3 < t2.length - 1; e3++) {
        const i3 = e3 + s3 * t2.length, n3 = i3, a3 = i3 + t2.length, o3 = i3 + t2.length + 1, h3 = i3 + 1;
        r2.push(n3, a3, h3), r2.push(o3, h3, a3);
      }
      this.setIndex(r2), this.setAttribute("position", new wn(n2, 3)), this.setAttribute("uv", new wn(a2, 2)), this.setAttribute("normal", new wn(h2, 3));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Ml(t2.points, t2.segments, t2.phiStart, t2.phiLength);
    }
  };
  var Sl = class _Sl extends ph {
    constructor(t2 = 1, e2 = 0) {
      super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t2, e2), this.type = "OctahedronGeometry", this.parameters = { radius: t2, detail: e2 };
    }
    static fromJSON(t2) {
      return new _Sl(t2.radius, t2.detail);
    }
  };
  var _l = class __l extends In {
    constructor(t2 = 1, e2 = 1, s2 = 1, i2 = 1) {
      super(), this.type = "PlaneGeometry", this.parameters = { width: t2, height: e2, widthSegments: s2, heightSegments: i2 };
      const r2 = t2 / 2, n2 = e2 / 2, a2 = Math.floor(s2), o2 = Math.floor(i2), h2 = a2 + 1, l2 = o2 + 1, c2 = t2 / a2, u2 = e2 / o2, d2 = [], p2 = [], m2 = [], y2 = [];
      for (let t3 = 0; t3 < l2; t3++) {
        const e3 = t3 * u2 - n2;
        for (let s3 = 0; s3 < h2; s3++) {
          const i3 = s3 * c2 - r2;
          p2.push(i3, -e3, 0), m2.push(0, 0, 1), y2.push(s3 / a2), y2.push(1 - t3 / o2);
        }
      }
      for (let t3 = 0; t3 < o2; t3++) for (let e3 = 0; e3 < a2; e3++) {
        const s3 = e3 + h2 * t3, i3 = e3 + h2 * (t3 + 1), r3 = e3 + 1 + h2 * (t3 + 1), n3 = e3 + 1 + h2 * t3;
        d2.push(s3, i3, n3), d2.push(i3, r3, n3);
      }
      this.setIndex(d2), this.setAttribute("position", new wn(p2, 3)), this.setAttribute("normal", new wn(m2, 3)), this.setAttribute("uv", new wn(y2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new __l(t2.width, t2.height, t2.widthSegments, t2.heightSegments);
    }
  };
  var Al = class _Al extends In {
    constructor(t2 = 0.5, e2 = 1, s2 = 32, i2 = 1, r2 = 0, n2 = 2 * Math.PI) {
      super(), this.type = "RingGeometry", this.parameters = { innerRadius: t2, outerRadius: e2, thetaSegments: s2, phiSegments: i2, thetaStart: r2, thetaLength: n2 }, s2 = Math.max(3, s2);
      const a2 = [], o2 = [], h2 = [], l2 = [];
      let c2 = t2;
      const u2 = (e2 - t2) / (i2 = Math.max(1, i2)), d2 = new Ks(), p2 = new $s();
      for (let t3 = 0; t3 <= i2; t3++) {
        for (let t4 = 0; t4 <= s2; t4++) {
          const i3 = r2 + t4 / s2 * n2;
          d2.x = c2 * Math.cos(i3), d2.y = c2 * Math.sin(i3), o2.push(d2.x, d2.y, d2.z), h2.push(0, 0, 1), p2.x = (d2.x / e2 + 1) / 2, p2.y = (d2.y / e2 + 1) / 2, l2.push(p2.x, p2.y);
        }
        c2 += u2;
      }
      for (let t3 = 0; t3 < i2; t3++) {
        const e3 = t3 * (s2 + 1);
        for (let t4 = 0; t4 < s2; t4++) {
          const i3 = t4 + e3, r3 = i3, n3 = i3 + s2 + 1, o3 = i3 + s2 + 2, h3 = i3 + 1;
          a2.push(r3, n3, h3), a2.push(n3, o3, h3);
        }
      }
      this.setIndex(a2), this.setAttribute("position", new wn(o2, 3)), this.setAttribute("normal", new wn(h2, 3)), this.setAttribute("uv", new wn(l2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Al(t2.innerRadius, t2.outerRadius, t2.thetaSegments, t2.phiSegments, t2.thetaStart, t2.thetaLength);
    }
  };
  var Tl = class _Tl extends In {
    constructor(t2 = new Wh([new $s(0, 0.5), new $s(-0.5, -0.5), new $s(0.5, -0.5)]), e2 = 12) {
      super(), this.type = "ShapeGeometry", this.parameters = { shapes: t2, curveSegments: e2 };
      const s2 = [], i2 = [], r2 = [], n2 = [];
      let a2 = 0, o2 = 0;
      if (false === Array.isArray(t2)) h2(t2);
      else for (let e3 = 0; e3 < t2.length; e3++) h2(t2[e3]), this.addGroup(a2, o2, e3), a2 += o2, o2 = 0;
      function h2(t3) {
        const a3 = i2.length / 3, h3 = t3.extractPoints(e2);
        let l2 = h3.shape;
        const c2 = h3.holes;
        false === gl.isClockWise(l2) && (l2 = l2.reverse());
        for (let t4 = 0, e3 = c2.length; t4 < e3; t4++) {
          const e4 = c2[t4];
          true === gl.isClockWise(e4) && (c2[t4] = e4.reverse());
        }
        const u2 = gl.triangulateShape(l2, c2);
        for (let t4 = 0, e3 = c2.length; t4 < e3; t4++) {
          const e4 = c2[t4];
          l2 = l2.concat(e4);
        }
        for (let t4 = 0, e3 = l2.length; t4 < e3; t4++) {
          const e4 = l2[t4];
          i2.push(e4.x, e4.y, 0), r2.push(0, 0, 1), n2.push(e4.x, e4.y);
        }
        for (let t4 = 0, e3 = u2.length; t4 < e3; t4++) {
          const e4 = u2[t4], i3 = e4[0] + a3, r3 = e4[1] + a3, n3 = e4[2] + a3;
          s2.push(i3, r3, n3), o2 += 3;
        }
      }
      this.setIndex(s2), this.setAttribute("position", new wn(i2, 3)), this.setAttribute("normal", new wn(r2, 3)), this.setAttribute("uv", new wn(n2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return function(t3, e2) {
        if (e2.shapes = [], Array.isArray(t3)) for (let s2 = 0, i2 = t3.length; s2 < i2; s2++) {
          const i3 = t3[s2];
          e2.shapes.push(i3.uuid);
        }
        else e2.shapes.push(t3.uuid);
        return e2;
      }(this.parameters.shapes, t2);
    }
    static fromJSON(t2, e2) {
      const s2 = [];
      for (let i2 = 0, r2 = t2.shapes.length; i2 < r2; i2++) {
        const r3 = e2[t2.shapes[i2]];
        s2.push(r3);
      }
      return new _Tl(s2, t2.curveSegments);
    }
  };
  var zl = class _zl extends In {
    constructor(t2 = 1, e2 = 32, s2 = 16, i2 = 0, r2 = 2 * Math.PI, n2 = 0, a2 = Math.PI) {
      super(), this.type = "SphereGeometry", this.parameters = { radius: t2, widthSegments: e2, heightSegments: s2, phiStart: i2, phiLength: r2, thetaStart: n2, thetaLength: a2 }, e2 = Math.max(3, Math.floor(e2)), s2 = Math.max(2, Math.floor(s2));
      const o2 = Math.min(n2 + a2, Math.PI);
      let h2 = 0;
      const l2 = [], c2 = new Ks(), u2 = new Ks(), d2 = [], p2 = [], m2 = [], y2 = [];
      for (let d3 = 0; d3 <= s2; d3++) {
        const g2 = [], f2 = d3 / s2;
        let x2 = 0;
        0 === d3 && 0 === n2 ? x2 = 0.5 / e2 : d3 === s2 && o2 === Math.PI && (x2 = -0.5 / e2);
        for (let s3 = 0; s3 <= e2; s3++) {
          const o3 = s3 / e2;
          c2.x = -t2 * Math.cos(i2 + o3 * r2) * Math.sin(n2 + f2 * a2), c2.y = t2 * Math.cos(n2 + f2 * a2), c2.z = t2 * Math.sin(i2 + o3 * r2) * Math.sin(n2 + f2 * a2), p2.push(c2.x, c2.y, c2.z), u2.copy(c2).normalize(), m2.push(u2.x, u2.y, u2.z), y2.push(o3 + x2, 1 - f2), g2.push(h2++);
        }
        l2.push(g2);
      }
      for (let t3 = 0; t3 < s2; t3++) for (let i3 = 0; i3 < e2; i3++) {
        const e3 = l2[t3][i3 + 1], r3 = l2[t3][i3], a3 = l2[t3 + 1][i3], h3 = l2[t3 + 1][i3 + 1];
        (0 !== t3 || n2 > 0) && d2.push(e3, r3, h3), (t3 !== s2 - 1 || o2 < Math.PI) && d2.push(r3, a3, h3);
      }
      this.setIndex(d2), this.setAttribute("position", new wn(p2, 3)), this.setAttribute("normal", new wn(m2, 3)), this.setAttribute("uv", new wn(y2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _zl(t2.radius, t2.widthSegments, t2.heightSegments, t2.phiStart, t2.phiLength, t2.thetaStart, t2.thetaLength);
    }
  };
  var Cl = class _Cl extends ph {
    constructor(t2 = 1, e2 = 0) {
      super([1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t2, e2), this.type = "TetrahedronGeometry", this.parameters = { radius: t2, detail: e2 };
    }
    static fromJSON(t2) {
      return new _Cl(t2.radius, t2.detail);
    }
  };
  var Il = class _Il extends In {
    constructor(t2 = 1, e2 = 0.4, s2 = 12, i2 = 48, r2 = 2 * Math.PI) {
      super(), this.type = "TorusGeometry", this.parameters = { radius: t2, tube: e2, radialSegments: s2, tubularSegments: i2, arc: r2 }, s2 = Math.floor(s2), i2 = Math.floor(i2);
      const n2 = [], a2 = [], o2 = [], h2 = [], l2 = new Ks(), c2 = new Ks(), u2 = new Ks();
      for (let n3 = 0; n3 <= s2; n3++) for (let d2 = 0; d2 <= i2; d2++) {
        const p2 = d2 / i2 * r2, m2 = n3 / s2 * Math.PI * 2;
        c2.x = (t2 + e2 * Math.cos(m2)) * Math.cos(p2), c2.y = (t2 + e2 * Math.cos(m2)) * Math.sin(p2), c2.z = e2 * Math.sin(m2), a2.push(c2.x, c2.y, c2.z), l2.x = t2 * Math.cos(p2), l2.y = t2 * Math.sin(p2), u2.subVectors(c2, l2).normalize(), o2.push(u2.x, u2.y, u2.z), h2.push(d2 / i2), h2.push(n3 / s2);
      }
      for (let t3 = 1; t3 <= s2; t3++) for (let e3 = 1; e3 <= i2; e3++) {
        const s3 = (i2 + 1) * t3 + e3 - 1, r3 = (i2 + 1) * (t3 - 1) + e3 - 1, a3 = (i2 + 1) * (t3 - 1) + e3, o3 = (i2 + 1) * t3 + e3;
        n2.push(s3, r3, o3), n2.push(r3, a3, o3);
      }
      this.setIndex(n2), this.setAttribute("position", new wn(a2, 3)), this.setAttribute("normal", new wn(o2, 3)), this.setAttribute("uv", new wn(h2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Il(t2.radius, t2.tube, t2.radialSegments, t2.tubularSegments, t2.arc);
    }
  };
  var Bl = class _Bl extends In {
    constructor(t2 = 1, e2 = 0.4, s2 = 64, i2 = 8, r2 = 2, n2 = 3) {
      super(), this.type = "TorusKnotGeometry", this.parameters = { radius: t2, tube: e2, tubularSegments: s2, radialSegments: i2, p: r2, q: n2 }, s2 = Math.floor(s2), i2 = Math.floor(i2);
      const a2 = [], o2 = [], h2 = [], l2 = [], c2 = new Ks(), u2 = new Ks(), d2 = new Ks(), p2 = new Ks(), m2 = new Ks(), y2 = new Ks(), g2 = new Ks();
      for (let a3 = 0; a3 <= s2; ++a3) {
        const x2 = a3 / s2 * r2 * Math.PI * 2;
        f2(x2, r2, n2, t2, d2), f2(x2 + 0.01, r2, n2, t2, p2), y2.subVectors(p2, d2), g2.addVectors(p2, d2), m2.crossVectors(y2, g2), g2.crossVectors(m2, y2), m2.normalize(), g2.normalize();
        for (let t3 = 0; t3 <= i2; ++t3) {
          const r3 = t3 / i2 * Math.PI * 2, n3 = -e2 * Math.cos(r3), p3 = e2 * Math.sin(r3);
          c2.x = d2.x + (n3 * g2.x + p3 * m2.x), c2.y = d2.y + (n3 * g2.y + p3 * m2.y), c2.z = d2.z + (n3 * g2.z + p3 * m2.z), o2.push(c2.x, c2.y, c2.z), u2.subVectors(c2, d2).normalize(), h2.push(u2.x, u2.y, u2.z), l2.push(a3 / s2), l2.push(t3 / i2);
        }
      }
      for (let t3 = 1; t3 <= s2; t3++) for (let e3 = 1; e3 <= i2; e3++) {
        const s3 = (i2 + 1) * (t3 - 1) + (e3 - 1), r3 = (i2 + 1) * t3 + (e3 - 1), n3 = (i2 + 1) * t3 + e3, o3 = (i2 + 1) * (t3 - 1) + e3;
        a2.push(s3, r3, o3), a2.push(r3, n3, o3);
      }
      function f2(t3, e3, s3, i3, r3) {
        const n3 = Math.cos(t3), a3 = Math.sin(t3), o3 = s3 / e3 * t3, h3 = Math.cos(o3);
        r3.x = i3 * (2 + h3) * 0.5 * n3, r3.y = i3 * (2 + h3) * a3 * 0.5, r3.z = i3 * Math.sin(o3) * 0.5;
      }
      this.setIndex(a2), this.setAttribute("position", new wn(o2, 3)), this.setAttribute("normal", new wn(h2, 3)), this.setAttribute("uv", new wn(l2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Bl(t2.radius, t2.tube, t2.tubularSegments, t2.radialSegments, t2.p, t2.q);
    }
  };
  var kl = class _kl extends In {
    constructor(t2 = new Vh(new Ks(-1, -1, 0), new Ks(-1, 1, 0), new Ks(1, 1, 0)), e2 = 64, s2 = 1, i2 = 8, r2 = false) {
      super(), this.type = "TubeGeometry", this.parameters = { path: t2, tubularSegments: e2, radius: s2, radialSegments: i2, closed: r2 };
      const n2 = t2.computeFrenetFrames(e2, r2);
      this.tangents = n2.tangents, this.normals = n2.normals, this.binormals = n2.binormals;
      const a2 = new Ks(), o2 = new Ks(), h2 = new $s();
      let l2 = new Ks();
      const c2 = [], u2 = [], d2 = [], p2 = [];
      function m2(r3) {
        l2 = t2.getPointAt(r3 / e2, l2);
        const h3 = n2.normals[r3], d3 = n2.binormals[r3];
        for (let t3 = 0; t3 <= i2; t3++) {
          const e3 = t3 / i2 * Math.PI * 2, r4 = Math.sin(e3), n3 = -Math.cos(e3);
          o2.x = n3 * h3.x + r4 * d3.x, o2.y = n3 * h3.y + r4 * d3.y, o2.z = n3 * h3.z + r4 * d3.z, o2.normalize(), u2.push(o2.x, o2.y, o2.z), a2.x = l2.x + s2 * o2.x, a2.y = l2.y + s2 * o2.y, a2.z = l2.z + s2 * o2.z, c2.push(a2.x, a2.y, a2.z);
        }
      }
      !function() {
        for (let t3 = 0; t3 < e2; t3++) m2(t3);
        m2(false === r2 ? e2 : 0), function() {
          for (let t3 = 0; t3 <= e2; t3++) for (let s3 = 0; s3 <= i2; s3++) h2.x = t3 / e2, h2.y = s3 / i2, d2.push(h2.x, h2.y);
        }(), function() {
          for (let t3 = 1; t3 <= e2; t3++) for (let e3 = 1; e3 <= i2; e3++) {
            const s3 = (i2 + 1) * (t3 - 1) + (e3 - 1), r3 = (i2 + 1) * t3 + (e3 - 1), n3 = (i2 + 1) * t3 + e3, a3 = (i2 + 1) * (t3 - 1) + e3;
            p2.push(s3, r3, a3), p2.push(r3, n3, a3);
          }
        }();
      }(), this.setIndex(p2), this.setAttribute("position", new wn(c2, 3)), this.setAttribute("normal", new wn(u2, 3)), this.setAttribute("uv", new wn(d2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.path = this.parameters.path.toJSON(), t2;
    }
    static fromJSON(t2) {
      return new _kl(new Lh[t2.path.type]().fromJSON(t2.path), t2.tubularSegments, t2.radius, t2.radialSegments, t2.closed);
    }
  };
  var El = class extends In {
    constructor(t2 = null) {
      if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: t2 }, null !== t2) {
        const e2 = [], s2 = /* @__PURE__ */ new Set(), i2 = new Ks(), r2 = new Ks();
        if (null !== t2.index) {
          const n2 = t2.attributes.position, a2 = t2.index;
          let o2 = t2.groups;
          0 === o2.length && (o2 = [{ start: 0, count: a2.count, materialIndex: 0 }]);
          for (let t3 = 0, h2 = o2.length; t3 < h2; ++t3) {
            const h3 = o2[t3], l2 = h3.start;
            for (let t4 = l2, o3 = l2 + h3.count; t4 < o3; t4 += 3) for (let o4 = 0; o4 < 3; o4++) {
              const h4 = a2.getX(t4 + o4), l3 = a2.getX(t4 + (o4 + 1) % 3);
              i2.fromBufferAttribute(n2, h4), r2.fromBufferAttribute(n2, l3), true === Rl(i2, r2, s2) && (e2.push(i2.x, i2.y, i2.z), e2.push(r2.x, r2.y, r2.z));
            }
          }
        } else {
          const n2 = t2.attributes.position;
          for (let t3 = 0, a2 = n2.count / 3; t3 < a2; t3++) for (let a3 = 0; a3 < 3; a3++) {
            const o2 = 3 * t3 + a3, h2 = 3 * t3 + (a3 + 1) % 3;
            i2.fromBufferAttribute(n2, o2), r2.fromBufferAttribute(n2, h2), true === Rl(i2, r2, s2) && (e2.push(i2.x, i2.y, i2.z), e2.push(r2.x, r2.y, r2.z));
          }
        }
        this.setAttribute("position", new wn(e2, 3));
      }
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
  };
  function Rl(t2, e2, s2) {
    const i2 = `${t2.x},${t2.y},${t2.z}-${e2.x},${e2.y},${e2.z}`, r2 = `${e2.x},${e2.y},${e2.z}-${t2.x},${t2.y},${t2.z}`;
    return true !== s2.has(i2) && true !== s2.has(r2) && (s2.add(i2), s2.add(r2), true);
  }
  var Pl = Object.freeze({ __proto__: null, BoxGeometry: Un, CapsuleGeometry: lh, CircleGeometry: ch, ConeGeometry: dh, CylinderGeometry: uh, DodecahedronGeometry: mh, EdgesGeometry: bh, ExtrudeGeometry: bl, IcosahedronGeometry: wl, LatheGeometry: Ml, OctahedronGeometry: Sl, PlaneGeometry: _l, PolyhedronGeometry: ph, RingGeometry: Al, ShapeGeometry: Tl, SphereGeometry: zl, TetrahedronGeometry: Cl, TorusGeometry: Il, TorusKnotGeometry: Bl, TubeGeometry: kl, WireframeGeometry: El });
  var Vl = class extends en {
    constructor(t2) {
      super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Qr(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Qr(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new $s(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new gr(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.defines = { STANDARD: "" }, this.color.copy(t2.color), this.roughness = t2.roughness, this.metalness = t2.metalness, this.map = t2.map, this.lightMap = t2.lightMap, this.lightMapIntensity = t2.lightMapIntensity, this.aoMap = t2.aoMap, this.aoMapIntensity = t2.aoMapIntensity, this.emissive.copy(t2.emissive), this.emissiveMap = t2.emissiveMap, this.emissiveIntensity = t2.emissiveIntensity, this.bumpMap = t2.bumpMap, this.bumpScale = t2.bumpScale, this.normalMap = t2.normalMap, this.normalMapType = t2.normalMapType, this.normalScale.copy(t2.normalScale), this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.roughnessMap = t2.roughnessMap, this.metalnessMap = t2.metalnessMap, this.alphaMap = t2.alphaMap, this.envMap = t2.envMap, this.envMapRotation.copy(t2.envMapRotation), this.envMapIntensity = t2.envMapIntensity, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.wireframeLinecap = t2.wireframeLinecap, this.wireframeLinejoin = t2.wireframeLinejoin, this.flatShading = t2.flatShading, this.fog = t2.fog, this;
    }
  };
  var Fl = class extends Vl {
    constructor(t2) {
      super(), this.isMeshPhysicalMaterial = true, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new $s(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function() {
        return qs(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      }, set: function(t3) {
        this.ior = (1 + 0.4 * t3) / (1 - 0.4 * t3);
      } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Qr(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Qr(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Qr(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(t2);
    }
    get anisotropy() {
      return this._anisotropy;
    }
    set anisotropy(t2) {
      this._anisotropy > 0 != t2 > 0 && this.version++, this._anisotropy = t2;
    }
    get clearcoat() {
      return this._clearcoat;
    }
    set clearcoat(t2) {
      this._clearcoat > 0 != t2 > 0 && this.version++, this._clearcoat = t2;
    }
    get iridescence() {
      return this._iridescence;
    }
    set iridescence(t2) {
      this._iridescence > 0 != t2 > 0 && this.version++, this._iridescence = t2;
    }
    get dispersion() {
      return this._dispersion;
    }
    set dispersion(t2) {
      this._dispersion > 0 != t2 > 0 && this.version++, this._dispersion = t2;
    }
    get sheen() {
      return this._sheen;
    }
    set sheen(t2) {
      this._sheen > 0 != t2 > 0 && this.version++, this._sheen = t2;
    }
    get transmission() {
      return this._transmission;
    }
    set transmission(t2) {
      this._transmission > 0 != t2 > 0 && this.version++, this._transmission = t2;
    }
    copy(t2) {
      return super.copy(t2), this.defines = { STANDARD: "", PHYSICAL: "" }, this.anisotropy = t2.anisotropy, this.anisotropyRotation = t2.anisotropyRotation, this.anisotropyMap = t2.anisotropyMap, this.clearcoat = t2.clearcoat, this.clearcoatMap = t2.clearcoatMap, this.clearcoatRoughness = t2.clearcoatRoughness, this.clearcoatRoughnessMap = t2.clearcoatRoughnessMap, this.clearcoatNormalMap = t2.clearcoatNormalMap, this.clearcoatNormalScale.copy(t2.clearcoatNormalScale), this.dispersion = t2.dispersion, this.ior = t2.ior, this.iridescence = t2.iridescence, this.iridescenceMap = t2.iridescenceMap, this.iridescenceIOR = t2.iridescenceIOR, this.iridescenceThicknessRange = [...t2.iridescenceThicknessRange], this.iridescenceThicknessMap = t2.iridescenceThicknessMap, this.sheen = t2.sheen, this.sheenColor.copy(t2.sheenColor), this.sheenColorMap = t2.sheenColorMap, this.sheenRoughness = t2.sheenRoughness, this.sheenRoughnessMap = t2.sheenRoughnessMap, this.transmission = t2.transmission, this.transmissionMap = t2.transmissionMap, this.thickness = t2.thickness, this.thicknessMap = t2.thicknessMap, this.attenuationDistance = t2.attenuationDistance, this.attenuationColor.copy(t2.attenuationColor), this.specularIntensity = t2.specularIntensity, this.specularIntensityMap = t2.specularIntensityMap, this.specularColor.copy(t2.specularColor), this.specularColorMap = t2.specularColorMap, this;
    }
  };
  var Wl = class extends en {
    constructor(t2) {
      super(), this.isMeshLambertMaterial = true, this.type = "MeshLambertMaterial", this.color = new Qr(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Qr(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new $s(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new gr(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.lightMap = t2.lightMap, this.lightMapIntensity = t2.lightMapIntensity, this.aoMap = t2.aoMap, this.aoMapIntensity = t2.aoMapIntensity, this.emissive.copy(t2.emissive), this.emissiveMap = t2.emissiveMap, this.emissiveIntensity = t2.emissiveIntensity, this.bumpMap = t2.bumpMap, this.bumpScale = t2.bumpScale, this.normalMap = t2.normalMap, this.normalMapType = t2.normalMapType, this.normalScale.copy(t2.normalScale), this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.specularMap = t2.specularMap, this.alphaMap = t2.alphaMap, this.envMap = t2.envMap, this.envMapRotation.copy(t2.envMapRotation), this.combine = t2.combine, this.reflectivity = t2.reflectivity, this.refractionRatio = t2.refractionRatio, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.wireframeLinecap = t2.wireframeLinecap, this.wireframeLinejoin = t2.wireframeLinejoin, this.flatShading = t2.flatShading, this.fog = t2.fog, this;
    }
  };
  var Ul = class extends en {
    constructor(t2) {
      super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.depthPacking = t2.depthPacking, this.map = t2.map, this.alphaMap = t2.alphaMap, this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this;
    }
  };
  var Hl = class extends en {
    constructor(t2) {
      super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.map = t2.map, this.alphaMap = t2.alphaMap, this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this;
    }
  };
  function Xl(t2, e2) {
    return t2 && t2.constructor !== e2 ? "number" == typeof e2.BYTES_PER_ELEMENT ? new e2(t2) : Array.prototype.slice.call(t2) : t2;
  }
  function Yl(t2) {
    return ArrayBuffer.isView(t2) && !(t2 instanceof DataView);
  }
  function Zl(t2) {
    const e2 = t2.length, s2 = new Array(e2);
    for (let t3 = 0; t3 !== e2; ++t3) s2[t3] = t3;
    return s2.sort(function(e3, s3) {
      return t2[e3] - t2[s3];
    }), s2;
  }
  function Gl(t2, e2, s2) {
    const i2 = t2.length, r2 = new t2.constructor(i2);
    for (let n2 = 0, a2 = 0; a2 !== i2; ++n2) {
      const i3 = s2[n2] * e2;
      for (let s3 = 0; s3 !== e2; ++s3) r2[a2++] = t2[i3 + s3];
    }
    return r2;
  }
  function $l(t2, e2, s2, i2) {
    let r2 = 1, n2 = t2[0];
    for (; void 0 !== n2 && void 0 === n2[i2]; ) n2 = t2[r2++];
    if (void 0 === n2) return;
    let a2 = n2[i2];
    if (void 0 !== a2) if (Array.isArray(a2)) do {
      a2 = n2[i2], void 0 !== a2 && (e2.push(n2.time), s2.push(...a2)), n2 = t2[r2++];
    } while (void 0 !== n2);
    else if (void 0 !== a2.toArray) do {
      a2 = n2[i2], void 0 !== a2 && (e2.push(n2.time), a2.toArray(s2, s2.length)), n2 = t2[r2++];
    } while (void 0 !== n2);
    else do {
      a2 = n2[i2], void 0 !== a2 && (e2.push(n2.time), s2.push(a2)), n2 = t2[r2++];
    } while (void 0 !== n2);
  }
  var Kl = class {
    constructor(t2, e2, s2, i2) {
      this.parameterPositions = t2, this._cachedIndex = 0, this.resultBuffer = void 0 !== i2 ? i2 : new e2.constructor(s2), this.sampleValues = e2, this.valueSize = s2, this.settings = null, this.DefaultSettings_ = {};
    }
    evaluate(t2) {
      const e2 = this.parameterPositions;
      let s2 = this._cachedIndex, i2 = e2[s2], r2 = e2[s2 - 1];
      t: {
        e: {
          let n2;
          s: {
            i: if (!(t2 < i2)) {
              for (let n3 = s2 + 2; ; ) {
                if (void 0 === i2) {
                  if (t2 < r2) break i;
                  return s2 = e2.length, this._cachedIndex = s2, this.copySampleValue_(s2 - 1);
                }
                if (s2 === n3) break;
                if (r2 = i2, i2 = e2[++s2], t2 < i2) break e;
              }
              n2 = e2.length;
              break s;
            }
            if (!(t2 >= r2)) {
              const a2 = e2[1];
              t2 < a2 && (s2 = 2, r2 = a2);
              for (let n3 = s2 - 2; ; ) {
                if (void 0 === r2) return this._cachedIndex = 0, this.copySampleValue_(0);
                if (s2 === n3) break;
                if (i2 = r2, r2 = e2[--s2 - 1], t2 >= r2) break e;
              }
              n2 = s2, s2 = 0;
              break s;
            }
            break t;
          }
          for (; s2 < n2; ) {
            const i3 = s2 + n2 >>> 1;
            t2 < e2[i3] ? n2 = i3 : s2 = i3 + 1;
          }
          if (i2 = e2[s2], r2 = e2[s2 - 1], void 0 === r2) return this._cachedIndex = 0, this.copySampleValue_(0);
          if (void 0 === i2) return s2 = e2.length, this._cachedIndex = s2, this.copySampleValue_(s2 - 1);
        }
        this._cachedIndex = s2, this.intervalChanged_(s2, r2, i2);
      }
      return this.interpolate_(s2, r2, t2, i2);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(t2) {
      const e2 = this.resultBuffer, s2 = this.sampleValues, i2 = this.valueSize, r2 = t2 * i2;
      for (let t3 = 0; t3 !== i2; ++t3) e2[t3] = s2[r2 + t3];
      return e2;
    }
    interpolate_() {
      throw new Error("call to abstract method");
    }
    intervalChanged_() {
    }
  };
  var tc = class extends Kl {
    constructor(t2, e2, s2, i2) {
      super(t2, e2, s2, i2), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: Pe, endingEnd: Pe };
    }
    intervalChanged_(t2, e2, s2) {
      const i2 = this.parameterPositions;
      let r2 = t2 - 2, n2 = t2 + 1, a2 = i2[r2], o2 = i2[n2];
      if (void 0 === a2) switch (this.getSettings_().endingStart) {
        case Oe:
          r2 = t2, a2 = 2 * e2 - s2;
          break;
        case Ne:
          r2 = i2.length - 2, a2 = e2 + i2[r2] - i2[r2 + 1];
          break;
        default:
          r2 = t2, a2 = s2;
      }
      if (void 0 === o2) switch (this.getSettings_().endingEnd) {
        case Oe:
          n2 = t2, o2 = 2 * s2 - e2;
          break;
        case Ne:
          n2 = 1, o2 = s2 + i2[1] - i2[0];
          break;
        default:
          n2 = t2 - 1, o2 = e2;
      }
      const h2 = 0.5 * (s2 - e2), l2 = this.valueSize;
      this._weightPrev = h2 / (e2 - a2), this._weightNext = h2 / (o2 - s2), this._offsetPrev = r2 * l2, this._offsetNext = n2 * l2;
    }
    interpolate_(t2, e2, s2, i2) {
      const r2 = this.resultBuffer, n2 = this.sampleValues, a2 = this.valueSize, o2 = t2 * a2, h2 = o2 - a2, l2 = this._offsetPrev, c2 = this._offsetNext, u2 = this._weightPrev, d2 = this._weightNext, p2 = (s2 - e2) / (i2 - e2), m2 = p2 * p2, y2 = m2 * p2, g2 = -u2 * y2 + 2 * u2 * m2 - u2 * p2, f2 = (1 + u2) * y2 + (-1.5 - 2 * u2) * m2 + (-0.5 + u2) * p2 + 1, x2 = (-1 - d2) * y2 + (1.5 + d2) * m2 + 0.5 * p2, b2 = d2 * y2 - d2 * m2;
      for (let t3 = 0; t3 !== a2; ++t3) r2[t3] = g2 * n2[l2 + t3] + f2 * n2[h2 + t3] + x2 * n2[o2 + t3] + b2 * n2[c2 + t3];
      return r2;
    }
  };
  var ec = class extends Kl {
    constructor(t2, e2, s2, i2) {
      super(t2, e2, s2, i2);
    }
    interpolate_(t2, e2, s2, i2) {
      const r2 = this.resultBuffer, n2 = this.sampleValues, a2 = this.valueSize, o2 = t2 * a2, h2 = o2 - a2, l2 = (s2 - e2) / (i2 - e2), c2 = 1 - l2;
      for (let t3 = 0; t3 !== a2; ++t3) r2[t3] = n2[h2 + t3] * c2 + n2[o2 + t3] * l2;
      return r2;
    }
  };
  var sc = class extends Kl {
    constructor(t2, e2, s2, i2) {
      super(t2, e2, s2, i2);
    }
    interpolate_(t2) {
      return this.copySampleValue_(t2 - 1);
    }
  };
  var ic = class {
    constructor(t2, e2, s2, i2) {
      if (void 0 === t2) throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (void 0 === e2 || 0 === e2.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t2);
      this.name = t2, this.times = Xl(e2, this.TimeBufferType), this.values = Xl(s2, this.ValueBufferType), this.setInterpolation(i2 || this.DefaultInterpolation);
    }
    static toJSON(t2) {
      const e2 = t2.constructor;
      let s2;
      if (e2.toJSON !== this.toJSON) s2 = e2.toJSON(t2);
      else {
        s2 = { name: t2.name, times: Xl(t2.times, Array), values: Xl(t2.values, Array) };
        const e3 = t2.getInterpolation();
        e3 !== t2.DefaultInterpolation && (s2.interpolation = e3);
      }
      return s2.type = t2.ValueTypeName, s2;
    }
    InterpolantFactoryMethodDiscrete(t2) {
      return new sc(this.times, this.values, this.getValueSize(), t2);
    }
    InterpolantFactoryMethodLinear(t2) {
      return new ec(this.times, this.values, this.getValueSize(), t2);
    }
    InterpolantFactoryMethodSmooth(t2) {
      return new tc(this.times, this.values, this.getValueSize(), t2);
    }
    setInterpolation(t2) {
      let e2;
      switch (t2) {
        case ke:
          e2 = this.InterpolantFactoryMethodDiscrete;
          break;
        case Ee:
          e2 = this.InterpolantFactoryMethodLinear;
          break;
        case Re:
          e2 = this.InterpolantFactoryMethodSmooth;
      }
      if (void 0 === e2) {
        const e3 = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (void 0 === this.createInterpolant) {
          if (t2 === this.DefaultInterpolation) throw new Error(e3);
          this.setInterpolation(this.DefaultInterpolation);
        }
        return console.warn("THREE.KeyframeTrack:", e3), this;
      }
      return this.createInterpolant = e2, this;
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return ke;
        case this.InterpolantFactoryMethodLinear:
          return Ee;
        case this.InterpolantFactoryMethodSmooth:
          return Re;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(t2) {
      if (0 !== t2) {
        const e2 = this.times;
        for (let s2 = 0, i2 = e2.length; s2 !== i2; ++s2) e2[s2] += t2;
      }
      return this;
    }
    scale(t2) {
      if (1 !== t2) {
        const e2 = this.times;
        for (let s2 = 0, i2 = e2.length; s2 !== i2; ++s2) e2[s2] *= t2;
      }
      return this;
    }
    trim(t2, e2) {
      const s2 = this.times, i2 = s2.length;
      let r2 = 0, n2 = i2 - 1;
      for (; r2 !== i2 && s2[r2] < t2; ) ++r2;
      for (; -1 !== n2 && s2[n2] > e2; ) --n2;
      if (++n2, 0 !== r2 || n2 !== i2) {
        r2 >= n2 && (n2 = Math.max(n2, 1), r2 = n2 - 1);
        const t3 = this.getValueSize();
        this.times = s2.slice(r2, n2), this.values = this.values.slice(r2 * t3, n2 * t3);
      }
      return this;
    }
    validate() {
      let t2 = true;
      const e2 = this.getValueSize();
      e2 - Math.floor(e2) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t2 = false);
      const s2 = this.times, i2 = this.values, r2 = s2.length;
      0 === r2 && (console.error("THREE.KeyframeTrack: Track is empty.", this), t2 = false);
      let n2 = null;
      for (let e3 = 0; e3 !== r2; e3++) {
        const i3 = s2[e3];
        if ("number" == typeof i3 && isNaN(i3)) {
          console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e3, i3), t2 = false;
          break;
        }
        if (null !== n2 && n2 > i3) {
          console.error("THREE.KeyframeTrack: Out of order keys.", this, e3, i3, n2), t2 = false;
          break;
        }
        n2 = i3;
      }
      if (void 0 !== i2 && Yl(i2)) for (let e3 = 0, s3 = i2.length; e3 !== s3; ++e3) {
        const s4 = i2[e3];
        if (isNaN(s4)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e3, s4), t2 = false;
          break;
        }
      }
      return t2;
    }
    optimize() {
      const t2 = this.times.slice(), e2 = this.values.slice(), s2 = this.getValueSize(), i2 = this.getInterpolation() === Re, r2 = t2.length - 1;
      let n2 = 1;
      for (let a2 = 1; a2 < r2; ++a2) {
        let r3 = false;
        const o2 = t2[a2];
        if (o2 !== t2[a2 + 1] && (1 !== a2 || o2 !== t2[0])) if (i2) r3 = true;
        else {
          const t3 = a2 * s2, i3 = t3 - s2, n3 = t3 + s2;
          for (let a3 = 0; a3 !== s2; ++a3) {
            const s3 = e2[t3 + a3];
            if (s3 !== e2[i3 + a3] || s3 !== e2[n3 + a3]) {
              r3 = true;
              break;
            }
          }
        }
        if (r3) {
          if (a2 !== n2) {
            t2[n2] = t2[a2];
            const i3 = a2 * s2, r4 = n2 * s2;
            for (let t3 = 0; t3 !== s2; ++t3) e2[r4 + t3] = e2[i3 + t3];
          }
          ++n2;
        }
      }
      if (r2 > 0) {
        t2[n2] = t2[r2];
        for (let t3 = r2 * s2, i3 = n2 * s2, a2 = 0; a2 !== s2; ++a2) e2[i3 + a2] = e2[t3 + a2];
        ++n2;
      }
      return n2 !== t2.length ? (this.times = t2.slice(0, n2), this.values = e2.slice(0, n2 * s2)) : (this.times = t2, this.values = e2), this;
    }
    clone() {
      const t2 = this.times.slice(), e2 = this.values.slice(), s2 = new (0, this.constructor)(this.name, t2, e2);
      return s2.createInterpolant = this.createInterpolant, s2;
    }
  };
  ic.prototype.ValueTypeName = "", ic.prototype.TimeBufferType = Float32Array, ic.prototype.ValueBufferType = Float32Array, ic.prototype.DefaultInterpolation = Ee;
  var rc = class extends ic {
    constructor(t2, e2, s2) {
      super(t2, e2, s2);
    }
  };
  rc.prototype.ValueTypeName = "bool", rc.prototype.ValueBufferType = Array, rc.prototype.DefaultInterpolation = ke, rc.prototype.InterpolantFactoryMethodLinear = void 0, rc.prototype.InterpolantFactoryMethodSmooth = void 0;
  var nc = class extends ic {
    constructor(t2, e2, s2, i2) {
      super(t2, e2, s2, i2);
    }
  };
  nc.prototype.ValueTypeName = "color";
  var ac = class extends ic {
    constructor(t2, e2, s2, i2) {
      super(t2, e2, s2, i2);
    }
  };
  ac.prototype.ValueTypeName = "number";
  var oc = class extends Kl {
    constructor(t2, e2, s2, i2) {
      super(t2, e2, s2, i2);
    }
    interpolate_(t2, e2, s2, i2) {
      const r2 = this.resultBuffer, n2 = this.sampleValues, a2 = this.valueSize, o2 = (s2 - e2) / (i2 - e2);
      let h2 = t2 * a2;
      for (let t3 = h2 + a2; h2 !== t3; h2 += 4) Qs.slerpFlat(r2, 0, n2, h2 - a2, n2, h2, o2);
      return r2;
    }
  };
  var hc = class extends ic {
    constructor(t2, e2, s2, i2) {
      super(t2, e2, s2, i2);
    }
    InterpolantFactoryMethodLinear(t2) {
      return new oc(this.times, this.values, this.getValueSize(), t2);
    }
  };
  hc.prototype.ValueTypeName = "quaternion", hc.prototype.InterpolantFactoryMethodSmooth = void 0;
  var lc = class extends ic {
    constructor(t2, e2, s2) {
      super(t2, e2, s2);
    }
  };
  lc.prototype.ValueTypeName = "string", lc.prototype.ValueBufferType = Array, lc.prototype.DefaultInterpolation = ke, lc.prototype.InterpolantFactoryMethodLinear = void 0, lc.prototype.InterpolantFactoryMethodSmooth = void 0;
  var cc = class extends ic {
    constructor(t2, e2, s2, i2) {
      super(t2, e2, s2, i2);
    }
  };
  cc.prototype.ValueTypeName = "vector";
  var uc = class {
    constructor(t2 = "", e2 = -1, s2 = [], i2 = 2500) {
      this.name = t2, this.tracks = s2, this.duration = e2, this.blendMode = i2, this.uuid = Hs(), this.userData = {}, this.duration < 0 && this.resetDuration();
    }
    static parse(t2) {
      const e2 = [], s2 = t2.tracks, i2 = 1 / (t2.fps || 1);
      for (let t3 = 0, r3 = s2.length; t3 !== r3; ++t3) e2.push(dc(s2[t3]).scale(i2));
      const r2 = new this(t2.name, t2.duration, e2, t2.blendMode);
      return r2.uuid = t2.uuid, r2.userData = JSON.parse(t2.userData || "{}"), r2;
    }
    static toJSON(t2) {
      const e2 = [], s2 = t2.tracks, i2 = { name: t2.name, duration: t2.duration, tracks: e2, uuid: t2.uuid, blendMode: t2.blendMode, userData: JSON.stringify(t2.userData) };
      for (let t3 = 0, i3 = s2.length; t3 !== i3; ++t3) e2.push(ic.toJSON(s2[t3]));
      return i2;
    }
    static CreateFromMorphTargetSequence(t2, e2, s2, i2) {
      const r2 = e2.length, n2 = [];
      for (let t3 = 0; t3 < r2; t3++) {
        let a2 = [], o2 = [];
        a2.push((t3 + r2 - 1) % r2, t3, (t3 + 1) % r2), o2.push(0, 1, 0);
        const h2 = Zl(a2);
        a2 = Gl(a2, 1, h2), o2 = Gl(o2, 1, h2), i2 || 0 !== a2[0] || (a2.push(r2), o2.push(o2[0])), n2.push(new ac(".morphTargetInfluences[" + e2[t3].name + "]", a2, o2).scale(1 / s2));
      }
      return new this(t2, -1, n2);
    }
    static findByName(t2, e2) {
      let s2 = t2;
      if (!Array.isArray(t2)) {
        const e3 = t2;
        s2 = e3.geometry && e3.geometry.animations || e3.animations;
      }
      for (let t3 = 0; t3 < s2.length; t3++) if (s2[t3].name === e2) return s2[t3];
      return null;
    }
    static CreateClipsFromMorphTargetSequences(t2, e2, s2) {
      const i2 = {}, r2 = /^([\w-]*?)([\d]+)$/;
      for (let e3 = 0, s3 = t2.length; e3 < s3; e3++) {
        const s4 = t2[e3], n3 = s4.name.match(r2);
        if (n3 && n3.length > 1) {
          const t3 = n3[1];
          let e4 = i2[t3];
          e4 || (i2[t3] = e4 = []), e4.push(s4);
        }
      }
      const n2 = [];
      for (const t3 in i2) n2.push(this.CreateFromMorphTargetSequence(t3, i2[t3], e2, s2));
      return n2;
    }
    static parseAnimation(t2, e2) {
      if (console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"), !t2) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
      const s2 = function(t3, e3, s3, i3, r3) {
        if (0 !== s3.length) {
          const n3 = [], a3 = [];
          $l(s3, n3, a3, i3), 0 !== n3.length && r3.push(new t3(e3, n3, a3));
        }
      }, i2 = [], r2 = t2.name || "default", n2 = t2.fps || 30, a2 = t2.blendMode;
      let o2 = t2.length || -1;
      const h2 = t2.hierarchy || [];
      for (let t3 = 0; t3 < h2.length; t3++) {
        const r3 = h2[t3].keys;
        if (r3 && 0 !== r3.length) if (r3[0].morphTargets) {
          const t4 = {};
          let e3;
          for (e3 = 0; e3 < r3.length; e3++) if (r3[e3].morphTargets) for (let s3 = 0; s3 < r3[e3].morphTargets.length; s3++) t4[r3[e3].morphTargets[s3]] = -1;
          for (const s3 in t4) {
            const t5 = [], n3 = [];
            for (let i3 = 0; i3 !== r3[e3].morphTargets.length; ++i3) {
              const i4 = r3[e3];
              t5.push(i4.time), n3.push(i4.morphTarget === s3 ? 1 : 0);
            }
            i2.push(new ac(".morphTargetInfluence[" + s3 + "]", t5, n3));
          }
          o2 = t4.length * n2;
        } else {
          const n3 = ".bones[" + e2[t3].name + "]";
          s2(cc, n3 + ".position", r3, "pos", i2), s2(hc, n3 + ".quaternion", r3, "rot", i2), s2(cc, n3 + ".scale", r3, "scl", i2);
        }
      }
      if (0 === i2.length) return null;
      return new this(r2, o2, i2, a2);
    }
    resetDuration() {
      let t2 = 0;
      for (let e2 = 0, s2 = this.tracks.length; e2 !== s2; ++e2) {
        const s3 = this.tracks[e2];
        t2 = Math.max(t2, s3.times[s3.times.length - 1]);
      }
      return this.duration = t2, this;
    }
    trim() {
      for (let t2 = 0; t2 < this.tracks.length; t2++) this.tracks[t2].trim(0, this.duration);
      return this;
    }
    validate() {
      let t2 = true;
      for (let e2 = 0; e2 < this.tracks.length; e2++) t2 = t2 && this.tracks[e2].validate();
      return t2;
    }
    optimize() {
      for (let t2 = 0; t2 < this.tracks.length; t2++) this.tracks[t2].optimize();
      return this;
    }
    clone() {
      const t2 = [];
      for (let e3 = 0; e3 < this.tracks.length; e3++) t2.push(this.tracks[e3].clone());
      const e2 = new this.constructor(this.name, this.duration, t2, this.blendMode);
      return e2.userData = JSON.parse(JSON.stringify(this.userData)), e2;
    }
    toJSON() {
      return this.constructor.toJSON(this);
    }
  };
  function dc(t2) {
    if (void 0 === t2.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    const e2 = function(t3) {
      switch (t3.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
          return ac;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
          return cc;
        case "color":
          return nc;
        case "quaternion":
          return hc;
        case "bool":
        case "boolean":
          return rc;
        case "string":
          return lc;
      }
      throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t3);
    }(t2.type);
    if (void 0 === t2.times) {
      const e3 = [], s2 = [];
      $l(t2.keys, e3, s2, "value"), t2.times = e3, t2.values = s2;
    }
    return void 0 !== e2.parse ? e2.parse(t2) : new e2(t2.name, t2.times, t2.values, t2.interpolation);
  }
  var pc = { enabled: false, files: {}, add: function(t2, e2) {
    false !== this.enabled && (this.files[t2] = e2);
  }, get: function(t2) {
    if (false !== this.enabled) return this.files[t2];
  }, remove: function(t2) {
    delete this.files[t2];
  }, clear: function() {
    this.files = {};
  } };
  var mc = class {
    constructor(t2, e2, s2) {
      const i2 = this;
      let r2, n2 = false, a2 = 0, o2 = 0;
      const h2 = [];
      this.onStart = void 0, this.onLoad = t2, this.onProgress = e2, this.onError = s2, this.abortController = new AbortController(), this.itemStart = function(t3) {
        o2++, false === n2 && void 0 !== i2.onStart && i2.onStart(t3, a2, o2), n2 = true;
      }, this.itemEnd = function(t3) {
        a2++, void 0 !== i2.onProgress && i2.onProgress(t3, a2, o2), a2 === o2 && (n2 = false, void 0 !== i2.onLoad && i2.onLoad());
      }, this.itemError = function(t3) {
        void 0 !== i2.onError && i2.onError(t3);
      }, this.resolveURL = function(t3) {
        return r2 ? r2(t3) : t3;
      }, this.setURLModifier = function(t3) {
        return r2 = t3, this;
      }, this.addHandler = function(t3, e3) {
        return h2.push(t3, e3), this;
      }, this.removeHandler = function(t3) {
        const e3 = h2.indexOf(t3);
        return -1 !== e3 && h2.splice(e3, 2), this;
      }, this.getHandler = function(t3) {
        for (let e3 = 0, s3 = h2.length; e3 < s3; e3 += 2) {
          const s4 = h2[e3], i3 = h2[e3 + 1];
          if (s4.global && (s4.lastIndex = 0), s4.test(t3)) return i3;
        }
        return null;
      }, this.abort = function() {
        return this.abortController.abort(), this.abortController = new AbortController(), this;
      };
    }
  };
  var yc = new mc();
  var gc = class {
    constructor(t2) {
      this.manager = void 0 !== t2 ? t2 : yc, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
    }
    load() {
    }
    loadAsync(t2, e2) {
      const s2 = this;
      return new Promise(function(i2, r2) {
        s2.load(t2, i2, e2, r2);
      });
    }
    parse() {
    }
    setCrossOrigin(t2) {
      return this.crossOrigin = t2, this;
    }
    setWithCredentials(t2) {
      return this.withCredentials = t2, this;
    }
    setPath(t2) {
      return this.path = t2, this;
    }
    setResourcePath(t2) {
      return this.resourcePath = t2, this;
    }
    setRequestHeader(t2) {
      return this.requestHeader = t2, this;
    }
    abort() {
      return this;
    }
  };
  gc.DEFAULT_MATERIAL_NAME = "__DEFAULT";
  var fc = {};
  var xc = class extends Error {
    constructor(t2, e2) {
      super(t2), this.response = e2;
    }
  };
  var bc = class extends gc {
    constructor(t2) {
      super(t2), this.mimeType = "", this.responseType = "", this._abortController = new AbortController();
    }
    load(t2, e2, s2, i2) {
      void 0 === t2 && (t2 = ""), void 0 !== this.path && (t2 = this.path + t2), t2 = this.manager.resolveURL(t2);
      const r2 = pc.get(`file:${t2}`);
      if (void 0 !== r2) return this.manager.itemStart(t2), setTimeout(() => {
        e2 && e2(r2), this.manager.itemEnd(t2);
      }, 0), r2;
      if (void 0 !== fc[t2]) return void fc[t2].push({ onLoad: e2, onProgress: s2, onError: i2 });
      fc[t2] = [], fc[t2].push({ onLoad: e2, onProgress: s2, onError: i2 });
      const n2 = new Request(t2, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin", signal: "function" == typeof AbortSignal.any ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal }), a2 = this.mimeType, o2 = this.responseType;
      fetch(n2).then((e3) => {
        if (200 === e3.status || 0 === e3.status) {
          if (0 === e3.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), "undefined" == typeof ReadableStream || void 0 === e3.body || void 0 === e3.body.getReader) return e3;
          const s3 = fc[t2], i3 = e3.body.getReader(), r3 = e3.headers.get("X-File-Size") || e3.headers.get("Content-Length"), n3 = r3 ? parseInt(r3) : 0, a3 = 0 !== n3;
          let o3 = 0;
          const h2 = new ReadableStream({ start(t3) {
            !function e4() {
              i3.read().then(({ done: i4, value: r4 }) => {
                if (i4) t3.close();
                else {
                  o3 += r4.byteLength;
                  const i5 = new ProgressEvent("progress", { lengthComputable: a3, loaded: o3, total: n3 });
                  for (let t4 = 0, e5 = s3.length; t4 < e5; t4++) {
                    const e6 = s3[t4];
                    e6.onProgress && e6.onProgress(i5);
                  }
                  t3.enqueue(r4), e4();
                }
              }, (e5) => {
                t3.error(e5);
              });
            }();
          } });
          return new Response(h2);
        }
        throw new xc(`fetch for "${e3.url}" responded with ${e3.status}: ${e3.statusText}`, e3);
      }).then((t3) => {
        switch (o2) {
          case "arraybuffer":
            return t3.arrayBuffer();
          case "blob":
            return t3.blob();
          case "document":
            return t3.text().then((t4) => new DOMParser().parseFromString(t4, a2));
          case "json":
            return t3.json();
          default:
            if ("" === a2) return t3.text();
            {
              const e3 = /charset="?([^;"\s]*)"?/i.exec(a2), s3 = e3 && e3[1] ? e3[1].toLowerCase() : void 0, i3 = new TextDecoder(s3);
              return t3.arrayBuffer().then((t4) => i3.decode(t4));
            }
        }
      }).then((e3) => {
        pc.add(`file:${t2}`, e3);
        const s3 = fc[t2];
        delete fc[t2];
        for (let t3 = 0, i3 = s3.length; t3 < i3; t3++) {
          const i4 = s3[t3];
          i4.onLoad && i4.onLoad(e3);
        }
      }).catch((e3) => {
        const s3 = fc[t2];
        if (void 0 === s3) throw this.manager.itemError(t2), e3;
        delete fc[t2];
        for (let t3 = 0, i3 = s3.length; t3 < i3; t3++) {
          const i4 = s3[t3];
          i4.onError && i4.onError(e3);
        }
        this.manager.itemError(t2);
      }).finally(() => {
        this.manager.itemEnd(t2);
      }), this.manager.itemStart(t2);
    }
    setResponseType(t2) {
      return this.responseType = t2, this;
    }
    setMimeType(t2) {
      return this.mimeType = t2, this;
    }
    abort() {
      return this._abortController.abort(), this._abortController = new AbortController(), this;
    }
  };
  var Mc = /* @__PURE__ */ new WeakMap();
  var Sc = class extends gc {
    constructor(t2) {
      super(t2);
    }
    load(t2, e2, s2, i2) {
      void 0 !== this.path && (t2 = this.path + t2), t2 = this.manager.resolveURL(t2);
      const r2 = this, n2 = pc.get(`image:${t2}`);
      if (void 0 !== n2) {
        if (true === n2.complete) r2.manager.itemStart(t2), setTimeout(function() {
          e2 && e2(n2), r2.manager.itemEnd(t2);
        }, 0);
        else {
          let t3 = Mc.get(n2);
          void 0 === t3 && (t3 = [], Mc.set(n2, t3)), t3.push({ onLoad: e2, onError: i2 });
        }
        return n2;
      }
      const a2 = oi("img");
      function o2() {
        l2(), e2 && e2(this);
        const s3 = Mc.get(this) || [];
        for (let t3 = 0; t3 < s3.length; t3++) {
          const e3 = s3[t3];
          e3.onLoad && e3.onLoad(this);
        }
        Mc.delete(this), r2.manager.itemEnd(t2);
      }
      function h2(e3) {
        l2(), i2 && i2(e3), pc.remove(`image:${t2}`);
        const s3 = Mc.get(this) || [];
        for (let t3 = 0; t3 < s3.length; t3++) {
          const i3 = s3[t3];
          i3.onError && i3.onError(e3);
        }
        Mc.delete(this), r2.manager.itemError(t2), r2.manager.itemEnd(t2);
      }
      function l2() {
        a2.removeEventListener("load", o2, false), a2.removeEventListener("error", h2, false);
      }
      return a2.addEventListener("load", o2, false), a2.addEventListener("error", h2, false), "data:" !== t2.slice(0, 5) && void 0 !== this.crossOrigin && (a2.crossOrigin = this.crossOrigin), pc.add(`image:${t2}`, a2), r2.manager.itemStart(t2), a2.src = t2, a2;
    }
  };
  var Tc = class extends gc {
    constructor(t2) {
      super(t2);
    }
    load(t2, e2, s2, i2) {
      const r2 = new Ai(), n2 = new Sc(this.manager);
      return n2.setCrossOrigin(this.crossOrigin), n2.setPath(this.path), n2.load(t2, function(t3) {
        r2.image = t3, r2.needsUpdate = true, void 0 !== e2 && e2(r2);
      }, s2, i2), r2;
    }
  };
  var zc = class extends Rr {
    constructor(t2, e2 = 1) {
      super(), this.isLight = true, this.type = "Light", this.color = new Qr(t2), this.intensity = e2;
    }
    dispose() {
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.color.copy(t2.color), this.intensity = t2.intensity, this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return e2.object.color = this.color.getHex(), e2.object.intensity = this.intensity, void 0 !== this.groundColor && (e2.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e2.object.distance = this.distance), void 0 !== this.angle && (e2.object.angle = this.angle), void 0 !== this.decay && (e2.object.decay = this.decay), void 0 !== this.penumbra && (e2.object.penumbra = this.penumbra), void 0 !== this.shadow && (e2.object.shadow = this.shadow.toJSON()), void 0 !== this.target && (e2.object.target = this.target.uuid), e2;
    }
  };
  var Cc = class extends zc {
    constructor(t2, e2, s2) {
      super(t2, s2), this.isHemisphereLight = true, this.type = "HemisphereLight", this.position.copy(Rr.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Qr(e2);
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.groundColor.copy(t2.groundColor), this;
    }
  };
  var Ic = new ar();
  var Bc = new Ks();
  var kc = new Ks();
  var Ec = class {
    constructor(t2) {
      this.camera = t2, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new $s(512, 512), this.mapType = Tt, this.map = null, this.mapPass = null, this.matrix = new ar(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new lo(), this._frameExtents = new $s(1, 1), this._viewportCount = 1, this._viewports = [new Ti(0, 0, 1, 1)];
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(t2) {
      const e2 = this.camera, s2 = this.matrix;
      Bc.setFromMatrixPosition(t2.matrixWorld), e2.position.copy(Bc), kc.setFromMatrixPosition(t2.target.matrixWorld), e2.lookAt(kc), e2.updateMatrixWorld(), Ic.multiplyMatrices(e2.projectionMatrix, e2.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ic, e2.coordinateSystem, e2.reversedDepth), e2.reversedDepth ? s2.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1) : s2.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), s2.multiply(Ic);
    }
    getViewport(t2) {
      return this._viewports[t2];
    }
    getFrameExtents() {
      return this._frameExtents;
    }
    dispose() {
      this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
    }
    copy(t2) {
      return this.camera = t2.camera.clone(), this.intensity = t2.intensity, this.bias = t2.bias, this.radius = t2.radius, this.autoUpdate = t2.autoUpdate, this.needsUpdate = t2.needsUpdate, this.normalBias = t2.normalBias, this.blurSamples = t2.blurSamples, this.mapSize.copy(t2.mapSize), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      const t2 = {};
      return 1 !== this.intensity && (t2.intensity = this.intensity), 0 !== this.bias && (t2.bias = this.bias), 0 !== this.normalBias && (t2.normalBias = this.normalBias), 1 !== this.radius && (t2.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t2.mapSize = this.mapSize.toArray()), t2.camera = this.camera.toJSON(false).object, delete t2.camera.matrix, t2;
    }
  };
  var Rc = class extends Ec {
    constructor() {
      super(new Kn(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1, this.aspect = 1;
    }
    updateMatrices(t2) {
      const e2 = this.camera, s2 = 2 * Us * t2.angle * this.focus, i2 = this.mapSize.width / this.mapSize.height * this.aspect, r2 = t2.distance || e2.far;
      s2 === e2.fov && i2 === e2.aspect && r2 === e2.far || (e2.fov = s2, e2.aspect = i2, e2.far = r2, e2.updateProjectionMatrix()), super.updateMatrices(t2);
    }
    copy(t2) {
      return super.copy(t2), this.focus = t2.focus, this;
    }
  };
  var Pc = class extends zc {
    constructor(t2, e2, s2 = 0, i2 = Math.PI / 3, r2 = 0, n2 = 2) {
      super(t2, e2), this.isSpotLight = true, this.type = "SpotLight", this.position.copy(Rr.DEFAULT_UP), this.updateMatrix(), this.target = new Rr(), this.distance = s2, this.angle = i2, this.penumbra = r2, this.decay = n2, this.map = null, this.shadow = new Rc();
    }
    get power() {
      return this.intensity * Math.PI;
    }
    set power(t2) {
      this.intensity = t2 / Math.PI;
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.distance = t2.distance, this.angle = t2.angle, this.penumbra = t2.penumbra, this.decay = t2.decay, this.target = t2.target.clone(), this.shadow = t2.shadow.clone(), this;
    }
  };
  var Oc = new ar();
  var Nc = new Ks();
  var Vc = new Ks();
  var Fc = class extends Ec {
    constructor() {
      super(new Kn(90, 1, 0.5, 500)), this.isPointLightShadow = true, this._frameExtents = new $s(4, 2), this._viewportCount = 6, this._viewports = [new Ti(2, 1, 1, 1), new Ti(0, 1, 1, 1), new Ti(3, 1, 1, 1), new Ti(1, 1, 1, 1), new Ti(3, 0, 1, 1), new Ti(1, 0, 1, 1)], this._cubeDirections = [new Ks(1, 0, 0), new Ks(-1, 0, 0), new Ks(0, 0, 1), new Ks(0, 0, -1), new Ks(0, 1, 0), new Ks(0, -1, 0)], this._cubeUps = [new Ks(0, 1, 0), new Ks(0, 1, 0), new Ks(0, 1, 0), new Ks(0, 1, 0), new Ks(0, 0, 1), new Ks(0, 0, -1)];
    }
    updateMatrices(t2, e2 = 0) {
      const s2 = this.camera, i2 = this.matrix, r2 = t2.distance || s2.far;
      r2 !== s2.far && (s2.far = r2, s2.updateProjectionMatrix()), Nc.setFromMatrixPosition(t2.matrixWorld), s2.position.copy(Nc), Vc.copy(s2.position), Vc.add(this._cubeDirections[e2]), s2.up.copy(this._cubeUps[e2]), s2.lookAt(Vc), s2.updateMatrixWorld(), i2.makeTranslation(-Nc.x, -Nc.y, -Nc.z), Oc.multiplyMatrices(s2.projectionMatrix, s2.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Oc, s2.coordinateSystem, s2.reversedDepth);
    }
  };
  var Lc = class extends zc {
    constructor(t2, e2, s2 = 0, i2 = 2) {
      super(t2, e2), this.isPointLight = true, this.type = "PointLight", this.distance = s2, this.decay = i2, this.shadow = new Fc();
    }
    get power() {
      return 4 * this.intensity * Math.PI;
    }
    set power(t2) {
      this.intensity = t2 / (4 * Math.PI);
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.distance = t2.distance, this.decay = t2.decay, this.shadow = t2.shadow.clone(), this;
    }
  };
  var jc = class extends Zn {
    constructor(t2 = -1, e2 = 1, s2 = 1, i2 = -1, r2 = 0.1, n2 = 2e3) {
      super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t2, this.right = e2, this.top = s2, this.bottom = i2, this.near = r2, this.far = n2, this.updateProjectionMatrix();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.left = t2.left, this.right = t2.right, this.top = t2.top, this.bottom = t2.bottom, this.near = t2.near, this.far = t2.far, this.zoom = t2.zoom, this.view = null === t2.view ? null : Object.assign({}, t2.view), this;
    }
    setViewOffset(t2, e2, s2, i2, r2, n2) {
      null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t2, this.view.fullHeight = e2, this.view.offsetX = s2, this.view.offsetY = i2, this.view.width = r2, this.view.height = n2, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t2 = (this.right - this.left) / (2 * this.zoom), e2 = (this.top - this.bottom) / (2 * this.zoom), s2 = (this.right + this.left) / 2, i2 = (this.top + this.bottom) / 2;
      let r2 = s2 - t2, n2 = s2 + t2, a2 = i2 + e2, o2 = i2 - e2;
      if (null !== this.view && this.view.enabled) {
        const t3 = (this.right - this.left) / this.view.fullWidth / this.zoom, e3 = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        r2 += t3 * this.view.offsetX, n2 = r2 + t3 * this.view.width, a2 -= e3 * this.view.offsetY, o2 = a2 - e3 * this.view.height;
      }
      this.projectionMatrix.makeOrthographic(r2, n2, a2, o2, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return e2.object.zoom = this.zoom, e2.object.left = this.left, e2.object.right = this.right, e2.object.top = this.top, e2.object.bottom = this.bottom, e2.object.near = this.near, e2.object.far = this.far, null !== this.view && (e2.object.view = Object.assign({}, this.view)), e2;
    }
  };
  var Dc = class extends Ec {
    constructor() {
      super(new jc(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
    }
  };
  var Wc = class extends zc {
    constructor(t2, e2) {
      super(t2, e2), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(Rr.DEFAULT_UP), this.updateMatrix(), this.target = new Rr(), this.shadow = new Dc();
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(t2) {
      return super.copy(t2), this.target = t2.target.clone(), this.shadow = t2.shadow.clone(), this;
    }
  };
  var Uc = class extends zc {
    constructor(t2, e2) {
      super(t2, e2), this.isAmbientLight = true, this.type = "AmbientLight";
    }
  };
  var Yc = class {
    static extractUrlBase(t2) {
      const e2 = t2.lastIndexOf("/");
      return -1 === e2 ? "./" : t2.slice(0, e2 + 1);
    }
    static resolveURL(t2, e2) {
      return "string" != typeof t2 || "" === t2 ? "" : (/^https?:\/\//i.test(e2) && /^\//.test(t2) && (e2 = e2.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(t2) || /^data:.*,.*$/i.test(t2) || /^blob:.*$/i.test(t2) ? t2 : e2 + t2);
    }
  };
  var eu = /* @__PURE__ */ new WeakMap();
  var su = class extends gc {
    constructor(t2) {
      super(t2), this.isImageBitmapLoader = true, "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" }, this._abortController = new AbortController();
    }
    setOptions(t2) {
      return this.options = t2, this;
    }
    load(t2, e2, s2, i2) {
      void 0 === t2 && (t2 = ""), void 0 !== this.path && (t2 = this.path + t2), t2 = this.manager.resolveURL(t2);
      const r2 = this, n2 = pc.get(`image-bitmap:${t2}`);
      if (void 0 !== n2) return r2.manager.itemStart(t2), n2.then ? void n2.then((s3) => {
        if (true !== eu.has(n2)) return e2 && e2(s3), r2.manager.itemEnd(t2), s3;
        i2 && i2(eu.get(n2)), r2.manager.itemError(t2), r2.manager.itemEnd(t2);
      }) : (setTimeout(function() {
        e2 && e2(n2), r2.manager.itemEnd(t2);
      }, 0), n2);
      const a2 = {};
      a2.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", a2.headers = this.requestHeader, a2.signal = "function" == typeof AbortSignal.any ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal;
      const o2 = fetch(t2, a2).then(function(t3) {
        return t3.blob();
      }).then(function(t3) {
        return createImageBitmap(t3, Object.assign(r2.options, { colorSpaceConversion: "none" }));
      }).then(function(s3) {
        return pc.add(`image-bitmap:${t2}`, s3), e2 && e2(s3), r2.manager.itemEnd(t2), s3;
      }).catch(function(e3) {
        i2 && i2(e3), eu.set(o2, e3), pc.remove(`image-bitmap:${t2}`), r2.manager.itemError(t2), r2.manager.itemEnd(t2);
      });
      pc.add(`image-bitmap:${t2}`, o2), r2.manager.itemStart(t2);
    }
    abort() {
      return this._abortController.abort(), this._abortController = new AbortController(), this;
    }
  };
  var au = new ar();
  var ou = new ar();
  var hu = new ar();
  var cu = class extends Kn {
    constructor(t2 = []) {
      super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = t2;
    }
  };
  var du = new Ks();
  var pu = new Qs();
  var mu = new Ks();
  var yu = new Ks();
  var gu = new Ks();
  var bu = new Ks();
  var vu = new Qs();
  var wu = new Ks();
  var Mu = new Ks();
  var Tu = "\\[\\]\\.:\\/";
  var zu = new RegExp("[" + Tu + "]", "g");
  var Cu = "[^" + Tu + "]";
  var Iu = "[^" + Tu.replace("\\.", "") + "]";
  var Bu = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", Cu) + /(WCOD+)?/.source.replace("WCOD", Iu) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Cu) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Cu) + "$");
  var ku = ["material", "materials", "bones", "map"];
  var Eu = class _Eu {
    constructor(t2, e2, s2) {
      this.path = e2, this.parsedPath = s2 || _Eu.parseTrackName(e2), this.node = _Eu.findNode(t2, this.parsedPath.nodeName), this.rootNode = t2, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
    static create(t2, e2, s2) {
      return t2 && t2.isAnimationObjectGroup ? new _Eu.Composite(t2, e2, s2) : new _Eu(t2, e2, s2);
    }
    static sanitizeNodeName(t2) {
      return t2.replace(/\s/g, "_").replace(zu, "");
    }
    static parseTrackName(t2) {
      const e2 = Bu.exec(t2);
      if (null === e2) throw new Error("PropertyBinding: Cannot parse trackName: " + t2);
      const s2 = { nodeName: e2[2], objectName: e2[3], objectIndex: e2[4], propertyName: e2[5], propertyIndex: e2[6] }, i2 = s2.nodeName && s2.nodeName.lastIndexOf(".");
      if (void 0 !== i2 && -1 !== i2) {
        const t3 = s2.nodeName.substring(i2 + 1);
        -1 !== ku.indexOf(t3) && (s2.nodeName = s2.nodeName.substring(0, i2), s2.objectName = t3);
      }
      if (null === s2.propertyName || 0 === s2.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t2);
      return s2;
    }
    static findNode(t2, e2) {
      if (void 0 === e2 || "" === e2 || "." === e2 || -1 === e2 || e2 === t2.name || e2 === t2.uuid) return t2;
      if (t2.skeleton) {
        const s2 = t2.skeleton.getBoneByName(e2);
        if (void 0 !== s2) return s2;
      }
      if (t2.children) {
        const s2 = function(t3) {
          for (let i3 = 0; i3 < t3.length; i3++) {
            const r2 = t3[i3];
            if (r2.name === e2 || r2.uuid === e2) return r2;
            const n2 = s2(r2.children);
            if (n2) return n2;
          }
          return null;
        }, i2 = s2(t2.children);
        if (i2) return i2;
      }
      return null;
    }
    _getValue_unavailable() {
    }
    _setValue_unavailable() {
    }
    _getValue_direct(t2, e2) {
      t2[e2] = this.targetObject[this.propertyName];
    }
    _getValue_array(t2, e2) {
      const s2 = this.resolvedProperty;
      for (let i2 = 0, r2 = s2.length; i2 !== r2; ++i2) t2[e2++] = s2[i2];
    }
    _getValue_arrayElement(t2, e2) {
      t2[e2] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(t2, e2) {
      this.resolvedProperty.toArray(t2, e2);
    }
    _setValue_direct(t2, e2) {
      this.targetObject[this.propertyName] = t2[e2];
    }
    _setValue_direct_setNeedsUpdate(t2, e2) {
      this.targetObject[this.propertyName] = t2[e2], this.targetObject.needsUpdate = true;
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(t2, e2) {
      this.targetObject[this.propertyName] = t2[e2], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_array(t2, e2) {
      const s2 = this.resolvedProperty;
      for (let i2 = 0, r2 = s2.length; i2 !== r2; ++i2) s2[i2] = t2[e2++];
    }
    _setValue_array_setNeedsUpdate(t2, e2) {
      const s2 = this.resolvedProperty;
      for (let i2 = 0, r2 = s2.length; i2 !== r2; ++i2) s2[i2] = t2[e2++];
      this.targetObject.needsUpdate = true;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(t2, e2) {
      const s2 = this.resolvedProperty;
      for (let i2 = 0, r2 = s2.length; i2 !== r2; ++i2) s2[i2] = t2[e2++];
      this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_arrayElement(t2, e2) {
      this.resolvedProperty[this.propertyIndex] = t2[e2];
    }
    _setValue_arrayElement_setNeedsUpdate(t2, e2) {
      this.resolvedProperty[this.propertyIndex] = t2[e2], this.targetObject.needsUpdate = true;
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(t2, e2) {
      this.resolvedProperty[this.propertyIndex] = t2[e2], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_fromArray(t2, e2) {
      this.resolvedProperty.fromArray(t2, e2);
    }
    _setValue_fromArray_setNeedsUpdate(t2, e2) {
      this.resolvedProperty.fromArray(t2, e2), this.targetObject.needsUpdate = true;
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(t2, e2) {
      this.resolvedProperty.fromArray(t2, e2), this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _getValue_unbound(t2, e2) {
      this.bind(), this.getValue(t2, e2);
    }
    _setValue_unbound(t2, e2) {
      this.bind(), this.setValue(t2, e2);
    }
    bind() {
      let t2 = this.node;
      const e2 = this.parsedPath, s2 = e2.objectName, i2 = e2.propertyName;
      let r2 = e2.propertyIndex;
      if (t2 || (t2 = _Eu.findNode(this.rootNode, e2.nodeName), this.node = t2), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t2) return void console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      if (s2) {
        let i3 = e2.objectIndex;
        switch (s2) {
          case "materials":
            if (!t2.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            if (!t2.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            t2 = t2.material.materials;
            break;
          case "bones":
            if (!t2.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            t2 = t2.skeleton.bones;
            for (let e3 = 0; e3 < t2.length; e3++) if (t2[e3].name === i3) {
              i3 = e3;
              break;
            }
            break;
          case "map":
            if ("map" in t2) {
              t2 = t2.map;
              break;
            }
            if (!t2.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            if (!t2.material.map) return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            t2 = t2.material.map;
            break;
          default:
            if (void 0 === t2[s2]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            t2 = t2[s2];
        }
        if (void 0 !== i3) {
          if (void 0 === t2[i3]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t2);
          t2 = t2[i3];
        }
      }
      const n2 = t2[i2];
      if (void 0 === n2) {
        const s3 = e2.nodeName;
        return void console.error("THREE.PropertyBinding: Trying to update property for track: " + s3 + "." + i2 + " but it wasn't found.", t2);
      }
      let a2 = this.Versioning.None;
      this.targetObject = t2, true === t2.isMaterial ? a2 = this.Versioning.NeedsUpdate : true === t2.isObject3D && (a2 = this.Versioning.MatrixWorldNeedsUpdate);
      let o2 = this.BindingType.Direct;
      if (void 0 !== r2) {
        if ("morphTargetInfluences" === i2) {
          if (!t2.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          if (!t2.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          void 0 !== t2.morphTargetDictionary[r2] && (r2 = t2.morphTargetDictionary[r2]);
        }
        o2 = this.BindingType.ArrayElement, this.resolvedProperty = n2, this.propertyIndex = r2;
      } else void 0 !== n2.fromArray && void 0 !== n2.toArray ? (o2 = this.BindingType.HasFromToArray, this.resolvedProperty = n2) : Array.isArray(n2) ? (o2 = this.BindingType.EntireArray, this.resolvedProperty = n2) : this.propertyName = i2;
      this.getValue = this.GetterByBindingType[o2], this.setValue = this.SetterByBindingTypeAndVersioning[o2][a2];
    }
    unbind() {
      this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
  };
  Eu.Composite = class {
    constructor(t2, e2, s2) {
      const i2 = s2 || Eu.parseTrackName(e2);
      this._targetGroup = t2, this._bindings = t2.subscribe_(e2, i2);
    }
    getValue(t2, e2) {
      this.bind();
      const s2 = this._targetGroup.nCachedObjects_, i2 = this._bindings[s2];
      void 0 !== i2 && i2.getValue(t2, e2);
    }
    setValue(t2, e2) {
      const s2 = this._bindings;
      for (let i2 = this._targetGroup.nCachedObjects_, r2 = s2.length; i2 !== r2; ++i2) s2[i2].setValue(t2, e2);
    }
    bind() {
      const t2 = this._bindings;
      for (let e2 = this._targetGroup.nCachedObjects_, s2 = t2.length; e2 !== s2; ++e2) t2[e2].bind();
    }
    unbind() {
      const t2 = this._bindings;
      for (let e2 = this._targetGroup.nCachedObjects_, s2 = t2.length; e2 !== s2; ++e2) t2[e2].unbind();
    }
  }, Eu.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }, Eu.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }, Eu.prototype.GetterByBindingType = [Eu.prototype._getValue_direct, Eu.prototype._getValue_array, Eu.prototype._getValue_arrayElement, Eu.prototype._getValue_toArray], Eu.prototype.SetterByBindingTypeAndVersioning = [[Eu.prototype._setValue_direct, Eu.prototype._setValue_direct_setNeedsUpdate, Eu.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [Eu.prototype._setValue_array, Eu.prototype._setValue_array_setNeedsUpdate, Eu.prototype._setValue_array_setMatrixWorldNeedsUpdate], [Eu.prototype._setValue_arrayElement, Eu.prototype._setValue_arrayElement_setNeedsUpdate, Eu.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [Eu.prototype._setValue_fromArray, Eu.prototype._setValue_fromArray_setNeedsUpdate, Eu.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
  var Ou = new Float32Array(1);
  var Uu = new ar();
  var Zu = class {
    constructor(t2 = 1, e2 = 0, s2 = 0) {
      this.radius = t2, this.phi = e2, this.theta = s2;
    }
    set(t2, e2, s2) {
      return this.radius = t2, this.phi = e2, this.theta = s2, this;
    }
    copy(t2) {
      return this.radius = t2.radius, this.phi = t2.phi, this.theta = t2.theta, this;
    }
    makeSafe() {
      const t2 = 1e-6;
      return this.phi = qs(this.phi, t2, Math.PI - t2), this;
    }
    setFromVector3(t2) {
      return this.setFromCartesianCoords(t2.x, t2.y, t2.z);
    }
    setFromCartesianCoords(t2, e2, s2) {
      return this.radius = Math.sqrt(t2 * t2 + e2 * e2 + s2 * s2), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t2, s2), this.phi = Math.acos(qs(e2 / this.radius, -1, 1))), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var Qu = new $s();
  var td = new Ks();
  var ed = new Ks();
  var sd = new Ks();
  var id = new Ks();
  var rd = new Ks();
  var nd = new Ks();
  var ad = new Ks();
  var hd = new Ks();
  var cd = new Ks();
  var ud = new ar();
  var dd = new ar();
  var gd = new Ks();
  var fd = new Qr();
  var xd = new Qr();
  var vd = class extends qo {
    constructor(t2 = 10, e2 = 10, s2 = 4473924, i2 = 8947848) {
      s2 = new Qr(s2), i2 = new Qr(i2);
      const r2 = e2 / 2, n2 = t2 / e2, a2 = t2 / 2, o2 = [], h2 = [];
      for (let t3 = 0, l3 = 0, c2 = -a2; t3 <= e2; t3++, c2 += n2) {
        o2.push(-a2, 0, c2, a2, 0, c2), o2.push(c2, 0, -a2, c2, 0, a2);
        const e3 = t3 === r2 ? s2 : i2;
        e3.toArray(h2, l3), l3 += 3, e3.toArray(h2, l3), l3 += 3, e3.toArray(h2, l3), l3 += 3, e3.toArray(h2, l3), l3 += 3;
      }
      const l2 = new In();
      l2.setAttribute("position", new wn(o2, 3)), l2.setAttribute("color", new wn(h2, 3));
      super(l2, new Ro({ vertexColors: true, toneMapped: false })), this.type = "GridHelper";
    }
    dispose() {
      this.geometry.dispose(), this.material.dispose();
    }
  };
  var Md = new Ks();
  var Sd = new Ks();
  var _d = new Ks();
  var Td = new Ks();
  var zd = new Zn();
  var Bd = new Ri();
  var Pd = new Ks();
  var jd = class extends Ls {
    constructor(t2, e2 = null) {
      super(), this.object = t2, this.domElement = e2, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
    }
    connect(t2) {
      void 0 !== t2 ? (null !== this.domElement && this.disconnect(), this.domElement = t2) : console.warn("THREE.Controls: connect() now requires an element.");
    }
    disconnect() {
    }
    dispose() {
    }
    update() {
    }
  };
  function Dd(t2, e2, s2, i2) {
    const r2 = function(t3) {
      switch (t3) {
        case Tt:
        case zt:
          return { byteLength: 1, components: 1 };
        case It:
        case Ct:
        case Rt:
          return { byteLength: 2, components: 1 };
        case Pt:
        case Ot:
          return { byteLength: 2, components: 4 };
        case kt:
        case Bt:
        case Et:
          return { byteLength: 4, components: 1 };
        case Vt:
        case Ft:
          return { byteLength: 4, components: 3 };
      }
      throw new Error(`Unknown texture type ${t3}.`);
    }(i2);
    switch (s2) {
      case 1021:
        return t2 * e2;
      case Ht:
      case qt:
        return t2 * e2 / r2.components * r2.byteLength;
      case 1030:
      case 1031:
        return t2 * e2 * 2 / r2.components * r2.byteLength;
      case 1022:
        return t2 * e2 * 3 / r2.components * r2.byteLength;
      case Dt:
      case 1033:
        return t2 * e2 * 4 / r2.components * r2.byteLength;
      case 33776:
      case 33777:
        return Math.floor((t2 + 3) / 4) * Math.floor((e2 + 3) / 4) * 8;
      case 33778:
      case 33779:
        return Math.floor((t2 + 3) / 4) * Math.floor((e2 + 3) / 4) * 16;
      case 35841:
      case 35843:
        return Math.max(t2, 16) * Math.max(e2, 8) / 4;
      case 35840:
      case 35842:
        return Math.max(t2, 8) * Math.max(e2, 8) / 2;
      case 36196:
      case 37492:
        return Math.floor((t2 + 3) / 4) * Math.floor((e2 + 3) / 4) * 8;
      case 37496:
      case 37808:
        return Math.floor((t2 + 3) / 4) * Math.floor((e2 + 3) / 4) * 16;
      case 37809:
        return Math.floor((t2 + 4) / 5) * Math.floor((e2 + 3) / 4) * 16;
      case 37810:
        return Math.floor((t2 + 4) / 5) * Math.floor((e2 + 4) / 5) * 16;
      case 37811:
        return Math.floor((t2 + 5) / 6) * Math.floor((e2 + 4) / 5) * 16;
      case 37812:
        return Math.floor((t2 + 5) / 6) * Math.floor((e2 + 5) / 6) * 16;
      case 37813:
        return Math.floor((t2 + 7) / 8) * Math.floor((e2 + 4) / 5) * 16;
      case 37814:
        return Math.floor((t2 + 7) / 8) * Math.floor((e2 + 5) / 6) * 16;
      case 37815:
        return Math.floor((t2 + 7) / 8) * Math.floor((e2 + 7) / 8) * 16;
      case 37816:
        return Math.floor((t2 + 9) / 10) * Math.floor((e2 + 4) / 5) * 16;
      case 37817:
        return Math.floor((t2 + 9) / 10) * Math.floor((e2 + 5) / 6) * 16;
      case 37818:
        return Math.floor((t2 + 9) / 10) * Math.floor((e2 + 7) / 8) * 16;
      case 37819:
        return Math.floor((t2 + 9) / 10) * Math.floor((e2 + 9) / 10) * 16;
      case 37820:
        return Math.floor((t2 + 11) / 12) * Math.floor((e2 + 9) / 10) * 16;
      case 37821:
        return Math.floor((t2 + 11) / 12) * Math.floor((e2 + 11) / 12) * 16;
      case 36492:
      case 36494:
      case 36495:
        return Math.ceil(t2 / 4) * Math.ceil(e2 / 4) * 16;
      case 36283:
      case 36284:
        return Math.ceil(t2 / 4) * Math.ceil(e2 / 4) * 8;
      case 36285:
      case 36286:
        return Math.ceil(t2 / 4) * Math.ceil(e2 / 4) * 16;
    }
    throw new Error(`Unable to determine texture byte length for ${s2} format.`);
  }
  "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: t } })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = t);

  // work/cad_import_20260802/digital_twin_preview/vendor/three.module.min.js
  function Cn2() {
    let e2 = null, t2 = false, n2 = null, r2 = null;
    function i2(t3, a2) {
      n2(t3, a2), r2 = e2.requestAnimationFrame(i2);
    }
    return { start: function() {
      true !== t2 && null !== n2 && (r2 = e2.requestAnimationFrame(i2), t2 = true);
    }, stop: function() {
      e2.cancelAnimationFrame(r2), t2 = false;
    }, setAnimationLoop: function(e3) {
      n2 = e3;
    }, setContext: function(t3) {
      e2 = t3;
    } };
  }
  function Ln2(e2) {
    const t2 = /* @__PURE__ */ new WeakMap();
    return { get: function(e3) {
      return e3.isInterleavedBufferAttribute && (e3 = e3.data), t2.get(e3);
    }, remove: function(n2) {
      n2.isInterleavedBufferAttribute && (n2 = n2.data);
      const r2 = t2.get(n2);
      r2 && (e2.deleteBuffer(r2.buffer), t2.delete(n2));
    }, update: function(n2, r2) {
      if (n2.isInterleavedBufferAttribute && (n2 = n2.data), n2.isGLBufferAttribute) {
        const e3 = t2.get(n2);
        return void ((!e3 || e3.version < n2.version) && t2.set(n2, { buffer: n2.buffer, type: n2.type, bytesPerElement: n2.elementSize, version: n2.version }));
      }
      const i2 = t2.get(n2);
      if (void 0 === i2) t2.set(n2, function(t3, n3) {
        const r3 = t3.array, i3 = t3.usage, a2 = r3.byteLength, o2 = e2.createBuffer();
        let s2;
        if (e2.bindBuffer(n3, o2), e2.bufferData(n3, r3, i3), t3.onUploadCallback(), r3 instanceof Float32Array) s2 = e2.FLOAT;
        else if ("undefined" != typeof Float16Array && r3 instanceof Float16Array) s2 = e2.HALF_FLOAT;
        else if (r3 instanceof Uint16Array) s2 = t3.isFloat16BufferAttribute ? e2.HALF_FLOAT : e2.UNSIGNED_SHORT;
        else if (r3 instanceof Int16Array) s2 = e2.SHORT;
        else if (r3 instanceof Uint32Array) s2 = e2.UNSIGNED_INT;
        else if (r3 instanceof Int32Array) s2 = e2.INT;
        else if (r3 instanceof Int8Array) s2 = e2.BYTE;
        else if (r3 instanceof Uint8Array) s2 = e2.UNSIGNED_BYTE;
        else {
          if (!(r3 instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r3);
          s2 = e2.UNSIGNED_BYTE;
        }
        return { buffer: o2, type: s2, bytesPerElement: r3.BYTES_PER_ELEMENT, version: t3.version, size: a2 };
      }(n2, r2));
      else if (i2.version < n2.version) {
        if (i2.size !== n2.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
        !function(t3, n3, r3) {
          const i3 = n3.array, a2 = n3.updateRanges;
          if (e2.bindBuffer(r3, t3), 0 === a2.length) e2.bufferSubData(r3, 0, i3);
          else {
            a2.sort((e3, t5) => e3.start - t5.start);
            let t4 = 0;
            for (let e3 = 1; e3 < a2.length; e3++) {
              const n4 = a2[t4], r4 = a2[e3];
              r4.start <= n4.start + n4.count + 1 ? n4.count = Math.max(n4.count, r4.start + r4.count - n4.start) : (++t4, a2[t4] = r4);
            }
            a2.length = t4 + 1;
            for (let t5 = 0, n4 = a2.length; t5 < n4; t5++) {
              const n5 = a2[t5];
              e2.bufferSubData(r3, n5.start * i3.BYTES_PER_ELEMENT, i3, n5.start, n5.count);
            }
            n3.clearUpdateRanges();
          }
          n3.onUploadCallback();
        }(i2.buffer, n2, r2), i2.version = n2.version;
      }
    } };
  }
  var Pn2 = { alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif", alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif", alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif", alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", alphatest_fragment: "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif", alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif", aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif", aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif", batching_pars_vertex: "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec3 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n	}\n#endif", batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif", begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif", beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif", bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated", iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif", bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif", clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif", clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif", clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif", clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif", color_fragment: "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif", color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif", color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec3 vColor;\n#endif", color_vertex: "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );\n	vColor.xyz *= batchingColor.xyz;\n#endif", common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated", cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif", defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif", displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif", displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif", emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif", emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif", colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );", colorspace_pars_fragment: "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}", envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif", envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif", envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif", envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif", envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif", envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif", fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif", fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif", fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif", fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif", gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}", lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif", lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;", lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert", lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif", lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;", lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon", lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;", lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong", lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif", lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	float dispersion;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		float v = 0.5 / ( gv + gl );\n		return saturate(v);\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColor;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}", lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif", lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometryNormal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif", lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif", logdepthbuf_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", logdepthbuf_pars_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif", logdepthbuf_pars_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif", logdepthbuf_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif", map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif", map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif", map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif", map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif", metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif", morphinstance_vertex: "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif", morphcolor_vertex: "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif", morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif", morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif", morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif", normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;", normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif", normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif", normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif", clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif", clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif", clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif", iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif", opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );", packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * depth - far );\n}", premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif", project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;", dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif", dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif", roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif", roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif", shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );\n		#ifdef USE_REVERSED_DEPTH_BUFFER\n			return step( depth, compare );\n		#else\n			return step( compare, depth );\n		#endif\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		#ifdef USE_REVERSED_DEPTH_BUFFER\n			float hard_shadow = step( distribution.x, compare );\n		#else\n			float hard_shadow = step( compare, distribution.x );\n		#endif\n		if ( hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		\n		float lightToPositionLength = length( lightToPosition );\n		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {\n			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n				shadow = (\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n				) * ( 1.0 / 9.0 );\n			#else\n				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n			#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n#endif", shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif", shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif", shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}", skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif", skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif", skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif", specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif", specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif", tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif", tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }", transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif", transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		#else\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif", uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif", worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif", background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}", background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}", depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];\n	#else\n		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;\n	#endif\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}", distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}", distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}", equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}", equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}", meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}", meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}", meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}", meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}", meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}", points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}", sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}" };
  var Un2 = { common: { diffuse: { value: new Qr(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new si() }, alphaMap: { value: null }, alphaMapTransform: { value: new si() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new si() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new si() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new si() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new si() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new si() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new si() }, normalScale: { value: new $s(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new si() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new si() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new si() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new si() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Qr(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Qr(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new si() }, alphaTest: { value: 0 }, uvTransform: { value: new si() } }, sprite: { diffuse: { value: new Qr(16777215) }, opacity: { value: 1 }, center: { value: new $s(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new si() }, alphaMap: { value: null }, alphaMapTransform: { value: new si() }, alphaTest: { value: 0 } } };
  var Dn2 = { basic: { uniforms: qn([Un2.common, Un2.specularmap, Un2.envmap, Un2.aomap, Un2.lightmap, Un2.fog]), vertexShader: Pn2.meshbasic_vert, fragmentShader: Pn2.meshbasic_frag }, lambert: { uniforms: qn([Un2.common, Un2.specularmap, Un2.envmap, Un2.aomap, Un2.lightmap, Un2.emissivemap, Un2.bumpmap, Un2.normalmap, Un2.displacementmap, Un2.fog, Un2.lights, { emissive: { value: new Qr(0) } }]), vertexShader: Pn2.meshlambert_vert, fragmentShader: Pn2.meshlambert_frag }, phong: { uniforms: qn([Un2.common, Un2.specularmap, Un2.envmap, Un2.aomap, Un2.lightmap, Un2.emissivemap, Un2.bumpmap, Un2.normalmap, Un2.displacementmap, Un2.fog, Un2.lights, { emissive: { value: new Qr(0) }, specular: { value: new Qr(1118481) }, shininess: { value: 30 } }]), vertexShader: Pn2.meshphong_vert, fragmentShader: Pn2.meshphong_frag }, standard: { uniforms: qn([Un2.common, Un2.envmap, Un2.aomap, Un2.lightmap, Un2.emissivemap, Un2.bumpmap, Un2.normalmap, Un2.displacementmap, Un2.roughnessmap, Un2.metalnessmap, Un2.fog, Un2.lights, { emissive: { value: new Qr(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Pn2.meshphysical_vert, fragmentShader: Pn2.meshphysical_frag }, toon: { uniforms: qn([Un2.common, Un2.aomap, Un2.lightmap, Un2.emissivemap, Un2.bumpmap, Un2.normalmap, Un2.displacementmap, Un2.gradientmap, Un2.fog, Un2.lights, { emissive: { value: new Qr(0) } }]), vertexShader: Pn2.meshtoon_vert, fragmentShader: Pn2.meshtoon_frag }, matcap: { uniforms: qn([Un2.common, Un2.bumpmap, Un2.normalmap, Un2.displacementmap, Un2.fog, { matcap: { value: null } }]), vertexShader: Pn2.meshmatcap_vert, fragmentShader: Pn2.meshmatcap_frag }, points: { uniforms: qn([Un2.points, Un2.fog]), vertexShader: Pn2.points_vert, fragmentShader: Pn2.points_frag }, dashed: { uniforms: qn([Un2.common, Un2.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Pn2.linedashed_vert, fragmentShader: Pn2.linedashed_frag }, depth: { uniforms: qn([Un2.common, Un2.displacementmap]), vertexShader: Pn2.depth_vert, fragmentShader: Pn2.depth_frag }, normal: { uniforms: qn([Un2.common, Un2.bumpmap, Un2.normalmap, Un2.displacementmap, { opacity: { value: 1 } }]), vertexShader: Pn2.meshnormal_vert, fragmentShader: Pn2.meshnormal_frag }, sprite: { uniforms: qn([Un2.sprite, Un2.fog]), vertexShader: Pn2.sprite_vert, fragmentShader: Pn2.sprite_frag }, background: { uniforms: { uvTransform: { value: new si() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Pn2.background_vert, fragmentShader: Pn2.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new si() } }, vertexShader: Pn2.backgroundCube_vert, fragmentShader: Pn2.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Pn2.cube_vert, fragmentShader: Pn2.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Pn2.equirect_vert, fragmentShader: Pn2.equirect_frag }, distanceRGBA: { uniforms: qn([Un2.common, Un2.displacementmap, { referencePosition: { value: new Ks() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Pn2.distanceRGBA_vert, fragmentShader: Pn2.distanceRGBA_frag }, shadow: { uniforms: qn([Un2.lights, Un2.fog, { color: { value: new Qr(0) }, opacity: { value: 1 } }]), vertexShader: Pn2.shadow_vert, fragmentShader: Pn2.shadow_frag } };
  Dn2.physical = { uniforms: qn([Dn2.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new si() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new si() }, clearcoatNormalScale: { value: new $s(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new si() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new si() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new si() }, sheen: { value: 0 }, sheenColor: { value: new Qr(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new si() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new si() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new si() }, transmissionSamplerSize: { value: new $s() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new si() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Qr(0) }, specularColor: { value: new Qr(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new si() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new si() }, anisotropyVector: { value: new $s() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new si() } }]), vertexShader: Pn2.meshphysical_vert, fragmentShader: Pn2.meshphysical_frag };
  var wn2 = { r: 0, b: 0, g: 0 };
  var In2 = new gr();
  var yn2 = new ar();
  function Nn2(e2, t2, r2, i2, u2, f2, v2) {
    const E2 = new Qr(0);
    let S2, T2, M2 = true === f2 ? 0 : 1, x2 = null, R2 = 0, A2 = null;
    function b2(e3) {
      let n2 = true === e3.isScene ? e3.background : null;
      if (n2 && n2.isTexture) {
        n2 = (e3.backgroundBlurriness > 0 ? r2 : t2).get(n2);
      }
      return n2;
    }
    function C2(t3, n2) {
      t3.getRGB(wn2, Jn(e2)), i2.buffers.color.setClear(wn2.r, wn2.g, wn2.b, n2, v2);
    }
    return { getClearColor: function() {
      return E2;
    }, setClearColor: function(e3, t3 = 1) {
      E2.set(e3), M2 = t3, C2(E2, M2);
    }, getClearAlpha: function() {
      return M2;
    }, setClearAlpha: function(e3) {
      M2 = e3, C2(E2, M2);
    }, render: function(t3) {
      let n2 = false;
      const r3 = b2(t3);
      null === r3 ? C2(E2, M2) : r3 && r3.isColor && (C2(r3, 1), n2 = true);
      const a2 = e2.xr.getEnvironmentBlendMode();
      "additive" === a2 ? i2.buffers.color.setClear(0, 0, 0, 1, v2) : "alpha-blend" === a2 && i2.buffers.color.setClear(0, 0, 0, 0, v2), (e2.autoClear || n2) && (i2.buffers.depth.setTest(true), i2.buffers.depth.setMask(true), i2.buffers.color.setMask(true), e2.clear(e2.autoClearColor, e2.autoClearDepth, e2.autoClearStencil));
    }, addToRenderList: function(t3, n2) {
      const r3 = b2(n2);
      r3 && (r3.isCubeTexture || r3.mapping === dt) ? (void 0 === T2 && (T2 = new Dn(new Un(1, 1, 1), new Yn({ name: "BackgroundCubeMaterial", uniforms: Hn(Dn2.backgroundCube.uniforms), vertexShader: Dn2.backgroundCube.vertexShader, fragmentShader: Dn2.backgroundCube.fragmentShader, side: d, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), T2.geometry.deleteAttribute("normal"), T2.geometry.deleteAttribute("uv"), T2.onBeforeRender = function(e3, t4, n3) {
        this.matrixWorld.copyPosition(n3.matrixWorld);
      }, Object.defineProperty(T2.material, "envMap", { get: function() {
        return this.uniforms.envMap.value;
      } }), u2.update(T2)), In2.copy(n2.backgroundRotation), In2.x *= -1, In2.y *= -1, In2.z *= -1, r3.isCubeTexture && false === r3.isRenderTargetTexture && (In2.y *= -1, In2.z *= -1), T2.material.uniforms.envMap.value = r3, T2.material.uniforms.flipEnvMap.value = r3.isCubeTexture && false === r3.isRenderTargetTexture ? -1 : 1, T2.material.uniforms.backgroundBlurriness.value = n2.backgroundBlurriness, T2.material.uniforms.backgroundIntensity.value = n2.backgroundIntensity, T2.material.uniforms.backgroundRotation.value.setFromMatrix4(yn2.makeRotationFromEuler(In2)), T2.material.toneMapped = yi.getTransfer(r3.colorSpace) !== Qe, x2 === r3 && R2 === r3.version && A2 === e2.toneMapping || (T2.material.needsUpdate = true, x2 = r3, R2 = r3.version, A2 = e2.toneMapping), T2.layers.enableAll(), t3.unshift(T2, T2.geometry, T2.material, 0, 0, null)) : r3 && r3.isTexture && (void 0 === S2 && (S2 = new Dn(new _l(2, 2), new Yn({ name: "BackgroundMaterial", uniforms: Hn(Dn2.background.uniforms), vertexShader: Dn2.background.vertexShader, fragmentShader: Dn2.background.fragmentShader, side: u, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), S2.geometry.deleteAttribute("normal"), Object.defineProperty(S2.material, "map", { get: function() {
        return this.uniforms.t2D.value;
      } }), u2.update(S2)), S2.material.uniforms.t2D.value = r3, S2.material.uniforms.backgroundIntensity.value = n2.backgroundIntensity, S2.material.toneMapped = yi.getTransfer(r3.colorSpace) !== Qe, true === r3.matrixAutoUpdate && r3.updateMatrix(), S2.material.uniforms.uvTransform.value.copy(r3.matrix), x2 === r3 && R2 === r3.version && A2 === e2.toneMapping || (S2.material.needsUpdate = true, x2 = r3, R2 = r3.version, A2 = e2.toneMapping), S2.layers.enableAll(), t3.unshift(S2, S2.geometry, S2.material, 0, 0, null));
    }, dispose: function() {
      void 0 !== T2 && (T2.geometry.dispose(), T2.material.dispose(), T2 = void 0), void 0 !== S2 && (S2.geometry.dispose(), S2.material.dispose(), S2 = void 0);
    } };
  }
  function On2(e2, t2) {
    const n2 = e2.getParameter(e2.MAX_VERTEX_ATTRIBS), r2 = {}, i2 = c2(null);
    let a2 = i2, o2 = false;
    function s2(t3) {
      return e2.bindVertexArray(t3);
    }
    function l2(t3) {
      return e2.deleteVertexArray(t3);
    }
    function c2(e3) {
      const t3 = [], r3 = [], i3 = [];
      for (let e4 = 0; e4 < n2; e4++) t3[e4] = 0, r3[e4] = 0, i3[e4] = 0;
      return { geometry: null, program: null, wireframe: false, newAttributes: t3, enabledAttributes: r3, attributeDivisors: i3, object: e3, attributes: {}, index: null };
    }
    function d2() {
      const e3 = a2.newAttributes;
      for (let t3 = 0, n3 = e3.length; t3 < n3; t3++) e3[t3] = 0;
    }
    function u2(e3) {
      f2(e3, 0);
    }
    function f2(t3, n3) {
      const r3 = a2.newAttributes, i3 = a2.enabledAttributes, o3 = a2.attributeDivisors;
      r3[t3] = 1, 0 === i3[t3] && (e2.enableVertexAttribArray(t3), i3[t3] = 1), o3[t3] !== n3 && (e2.vertexAttribDivisor(t3, n3), o3[t3] = n3);
    }
    function p2() {
      const t3 = a2.newAttributes, n3 = a2.enabledAttributes;
      for (let r3 = 0, i3 = n3.length; r3 < i3; r3++) n3[r3] !== t3[r3] && (e2.disableVertexAttribArray(r3), n3[r3] = 0);
    }
    function m2(t3, n3, r3, i3, a3, o3, s3) {
      true === s3 ? e2.vertexAttribIPointer(t3, n3, r3, a3, o3) : e2.vertexAttribPointer(t3, n3, r3, i3, a3, o3);
    }
    function h2() {
      _2(), o2 = true, a2 !== i2 && (a2 = i2, s2(a2.object));
    }
    function _2() {
      i2.geometry = null, i2.program = null, i2.wireframe = false;
    }
    return { setup: function(n3, i3, l3, h3, _3) {
      let g2 = false;
      const E2 = function(t3, n4, i4) {
        const a3 = true === i4.wireframe;
        let o3 = r2[t3.id];
        void 0 === o3 && (o3 = {}, r2[t3.id] = o3);
        let s3 = o3[n4.id];
        void 0 === s3 && (s3 = {}, o3[n4.id] = s3);
        let l4 = s3[a3];
        void 0 === l4 && (l4 = c2(e2.createVertexArray()), s3[a3] = l4);
        return l4;
      }(h3, l3, i3);
      a2 !== E2 && (a2 = E2, s2(a2.object)), g2 = function(e3, t3, n4, r3) {
        const i4 = a2.attributes, o3 = t3.attributes;
        let s3 = 0;
        const l4 = n4.getAttributes();
        for (const t4 in l4) {
          if (l4[t4].location >= 0) {
            const n5 = i4[t4];
            let r4 = o3[t4];
            if (void 0 === r4 && ("instanceMatrix" === t4 && e3.instanceMatrix && (r4 = e3.instanceMatrix), "instanceColor" === t4 && e3.instanceColor && (r4 = e3.instanceColor)), void 0 === n5) return true;
            if (n5.attribute !== r4) return true;
            if (r4 && n5.data !== r4.data) return true;
            s3++;
          }
        }
        return a2.attributesNum !== s3 || a2.index !== r3;
      }(n3, h3, l3, _3), g2 && function(e3, t3, n4, r3) {
        const i4 = {}, o3 = t3.attributes;
        let s3 = 0;
        const l4 = n4.getAttributes();
        for (const t4 in l4) {
          if (l4[t4].location >= 0) {
            let n5 = o3[t4];
            void 0 === n5 && ("instanceMatrix" === t4 && e3.instanceMatrix && (n5 = e3.instanceMatrix), "instanceColor" === t4 && e3.instanceColor && (n5 = e3.instanceColor));
            const r4 = {};
            r4.attribute = n5, n5 && n5.data && (r4.data = n5.data), i4[t4] = r4, s3++;
          }
        }
        a2.attributes = i4, a2.attributesNum = s3, a2.index = r3;
      }(n3, h3, l3, _3), null !== _3 && t2.update(_3, e2.ELEMENT_ARRAY_BUFFER), (g2 || o2) && (o2 = false, function(n4, r3, i4, a3) {
        d2();
        const o3 = a3.attributes, s3 = i4.getAttributes(), l4 = r3.defaultAttributeValues;
        for (const r4 in s3) {
          const i5 = s3[r4];
          if (i5.location >= 0) {
            let s4 = o3[r4];
            if (void 0 === s4 && ("instanceMatrix" === r4 && n4.instanceMatrix && (s4 = n4.instanceMatrix), "instanceColor" === r4 && n4.instanceColor && (s4 = n4.instanceColor)), void 0 !== s4) {
              const r5 = s4.normalized, o4 = s4.itemSize, l5 = t2.get(s4);
              if (void 0 === l5) continue;
              const c3 = l5.buffer, d3 = l5.type, p3 = l5.bytesPerElement, h4 = d3 === e2.INT || d3 === e2.UNSIGNED_INT || s4.gpuType === Bt;
              if (s4.isInterleavedBufferAttribute) {
                const t3 = s4.data, l6 = t3.stride, _4 = s4.offset;
                if (t3.isInstancedInterleavedBuffer) {
                  for (let e3 = 0; e3 < i5.locationSize; e3++) f2(i5.location + e3, t3.meshPerAttribute);
                  true !== n4.isInstancedMesh && void 0 === a3._maxInstanceCount && (a3._maxInstanceCount = t3.meshPerAttribute * t3.count);
                } else for (let e3 = 0; e3 < i5.locationSize; e3++) u2(i5.location + e3);
                e2.bindBuffer(e2.ARRAY_BUFFER, c3);
                for (let e3 = 0; e3 < i5.locationSize; e3++) m2(i5.location + e3, o4 / i5.locationSize, d3, r5, l6 * p3, (_4 + o4 / i5.locationSize * e3) * p3, h4);
              } else {
                if (s4.isInstancedBufferAttribute) {
                  for (let e3 = 0; e3 < i5.locationSize; e3++) f2(i5.location + e3, s4.meshPerAttribute);
                  true !== n4.isInstancedMesh && void 0 === a3._maxInstanceCount && (a3._maxInstanceCount = s4.meshPerAttribute * s4.count);
                } else for (let e3 = 0; e3 < i5.locationSize; e3++) u2(i5.location + e3);
                e2.bindBuffer(e2.ARRAY_BUFFER, c3);
                for (let e3 = 0; e3 < i5.locationSize; e3++) m2(i5.location + e3, o4 / i5.locationSize, d3, r5, o4 * p3, o4 / i5.locationSize * e3 * p3, h4);
              }
            } else if (void 0 !== l4) {
              const t3 = l4[r4];
              if (void 0 !== t3) switch (t3.length) {
                case 2:
                  e2.vertexAttrib2fv(i5.location, t3);
                  break;
                case 3:
                  e2.vertexAttrib3fv(i5.location, t3);
                  break;
                case 4:
                  e2.vertexAttrib4fv(i5.location, t3);
                  break;
                default:
                  e2.vertexAttrib1fv(i5.location, t3);
              }
            }
          }
        }
        p2();
      }(n3, i3, l3, h3), null !== _3 && e2.bindBuffer(e2.ELEMENT_ARRAY_BUFFER, t2.get(_3).buffer));
    }, reset: h2, resetDefaultState: _2, dispose: function() {
      h2();
      for (const e3 in r2) {
        const t3 = r2[e3];
        for (const e4 in t3) {
          const n3 = t3[e4];
          for (const e5 in n3) l2(n3[e5].object), delete n3[e5];
          delete t3[e4];
        }
        delete r2[e3];
      }
    }, releaseStatesOfGeometry: function(e3) {
      if (void 0 === r2[e3.id]) return;
      const t3 = r2[e3.id];
      for (const e4 in t3) {
        const n3 = t3[e4];
        for (const e5 in n3) l2(n3[e5].object), delete n3[e5];
        delete t3[e4];
      }
      delete r2[e3.id];
    }, releaseStatesOfProgram: function(e3) {
      for (const t3 in r2) {
        const n3 = r2[t3];
        if (void 0 === n3[e3.id]) continue;
        const i3 = n3[e3.id];
        for (const e4 in i3) l2(i3[e4].object), delete i3[e4];
        delete n3[e3.id];
      }
    }, initAttributes: d2, enableAttribute: u2, disableUnusedAttributes: p2 };
  }
  function Fn2(e2, t2, n2) {
    let r2;
    function i2(t3, i3, a2) {
      0 !== a2 && (e2.drawArraysInstanced(r2, t3, i3, a2), n2.update(i3, r2, a2));
    }
    this.setMode = function(e3) {
      r2 = e3;
    }, this.render = function(t3, i3) {
      e2.drawArrays(r2, t3, i3), n2.update(i3, r2, 1);
    }, this.renderInstances = i2, this.renderMultiDraw = function(e3, i3, a2) {
      if (0 === a2) return;
      t2.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r2, e3, 0, i3, 0, a2);
      let o2 = 0;
      for (let e4 = 0; e4 < a2; e4++) o2 += i3[e4];
      n2.update(o2, r2, 1);
    }, this.renderMultiDrawInstances = function(e3, a2, o2, s2) {
      if (0 === o2) return;
      const l2 = t2.get("WEBGL_multi_draw");
      if (null === l2) for (let t3 = 0; t3 < e3.length; t3++) i2(e3[t3], a2[t3], s2[t3]);
      else {
        l2.multiDrawArraysInstancedWEBGL(r2, e3, 0, a2, 0, s2, 0, o2);
        let t3 = 0;
        for (let e4 = 0; e4 < o2; e4++) t3 += a2[e4] * s2[e4];
        n2.update(t3, r2, 1);
      }
    };
  }
  function Bn2(e2, t2, n2, r2) {
    let i2;
    function a2(t3) {
      if ("highp" === t3) {
        if (e2.getShaderPrecisionFormat(e2.VERTEX_SHADER, e2.HIGH_FLOAT).precision > 0 && e2.getShaderPrecisionFormat(e2.FRAGMENT_SHADER, e2.HIGH_FLOAT).precision > 0) return "highp";
        t3 = "mediump";
      }
      return "mediump" === t3 && e2.getShaderPrecisionFormat(e2.VERTEX_SHADER, e2.MEDIUM_FLOAT).precision > 0 && e2.getShaderPrecisionFormat(e2.FRAGMENT_SHADER, e2.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
    }
    let o2 = void 0 !== n2.precision ? n2.precision : "highp";
    const s2 = a2(o2);
    s2 !== o2 && (console.warn("THREE.WebGLRenderer:", o2, "not supported, using", s2, "instead."), o2 = s2);
    const l2 = true === n2.logarithmicDepthBuffer, c2 = true === n2.reversedDepthBuffer && t2.has("EXT_clip_control"), d2 = e2.getParameter(e2.MAX_TEXTURE_IMAGE_UNITS), u2 = e2.getParameter(e2.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
    return { isWebGL2: true, getMaxAnisotropy: function() {
      if (void 0 !== i2) return i2;
      if (true === t2.has("EXT_texture_filter_anisotropic")) {
        const n3 = t2.get("EXT_texture_filter_anisotropic");
        i2 = e2.getParameter(n3.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else i2 = 0;
      return i2;
    }, getMaxPrecision: a2, textureFormatReadable: function(t3) {
      return t3 === Dt || r2.convert(t3) === e2.getParameter(e2.IMPLEMENTATION_COLOR_READ_FORMAT);
    }, textureTypeReadable: function(n3) {
      const i3 = n3 === Rt && (t2.has("EXT_color_buffer_half_float") || t2.has("EXT_color_buffer_float"));
      return !(n3 !== Tt && r2.convert(n3) !== e2.getParameter(e2.IMPLEMENTATION_COLOR_READ_TYPE) && n3 !== Et && !i3);
    }, precision: o2, logarithmicDepthBuffer: l2, reversedDepthBuffer: c2, maxTextures: d2, maxVertexTextures: u2, maxTextureSize: e2.getParameter(e2.MAX_TEXTURE_SIZE), maxCubemapSize: e2.getParameter(e2.MAX_CUBE_MAP_TEXTURE_SIZE), maxAttributes: e2.getParameter(e2.MAX_VERTEX_ATTRIBS), maxVertexUniforms: e2.getParameter(e2.MAX_VERTEX_UNIFORM_VECTORS), maxVaryings: e2.getParameter(e2.MAX_VARYING_VECTORS), maxFragmentUniforms: e2.getParameter(e2.MAX_FRAGMENT_UNIFORM_VECTORS), vertexTextures: u2 > 0, maxSamples: e2.getParameter(e2.MAX_SAMPLES) };
  }
  function Hn2(t2) {
    const n2 = this;
    let r2 = null, i2 = 0, a2 = false, o2 = false;
    const s2 = new no(), l2 = new si(), c2 = { value: null, needsUpdate: false };
    function d2(e2, t3, r3, i3) {
      const a3 = null !== e2 ? e2.length : 0;
      let o3 = null;
      if (0 !== a3) {
        if (o3 = c2.value, true !== i3 || null === o3) {
          const n3 = r3 + 4 * a3, i4 = t3.matrixWorldInverse;
          l2.getNormalMatrix(i4), (null === o3 || o3.length < n3) && (o3 = new Float32Array(n3));
          for (let t4 = 0, n4 = r3; t4 !== a3; ++t4, n4 += 4) s2.copy(e2[t4]).applyMatrix4(i4, l2), s2.normal.toArray(o3, n4), o3[n4 + 3] = s2.constant;
        }
        c2.value = o3, c2.needsUpdate = true;
      }
      return n2.numPlanes = a3, n2.numIntersection = 0, o3;
    }
    this.uniform = c2, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e2, t3) {
      const n3 = 0 !== e2.length || t3 || 0 !== i2 || a2;
      return a2 = t3, i2 = e2.length, n3;
    }, this.beginShadows = function() {
      o2 = true, d2(null);
    }, this.endShadows = function() {
      o2 = false;
    }, this.setGlobalState = function(e2, t3) {
      r2 = d2(e2, t3, 0);
    }, this.setState = function(e2, s3, l3) {
      const u2 = e2.clippingPlanes, f2 = e2.clipIntersection, p2 = e2.clipShadows, m2 = t2.get(e2);
      if (!a2 || null === u2 || 0 === u2.length || o2 && !p2) o2 ? d2(null) : function() {
        c2.value !== r2 && (c2.value = r2, c2.needsUpdate = i2 > 0);
        n2.numPlanes = i2, n2.numIntersection = 0;
      }();
      else {
        const e3 = o2 ? 0 : i2, t3 = 4 * e3;
        let n3 = m2.clippingState || null;
        c2.value = n3, n3 = d2(u2, s3, t3, l3);
        for (let e4 = 0; e4 !== t3; ++e4) n3[e4] = r2[e4];
        m2.clippingState = n3, this.numIntersection = f2 ? this.numPlanes : 0, this.numPlanes += e3;
      }
    };
  }
  function Gn2(e2) {
    let t2 = /* @__PURE__ */ new WeakMap();
    function n2(e3, t3) {
      return t3 === ct ? e3.mapping = ht : t3 === ut && (e3.mapping = lt), e3;
    }
    function r2(e3) {
      const n3 = e3.target;
      n3.removeEventListener("dispose", r2);
      const i2 = t2.get(n3);
      void 0 !== i2 && (t2.delete(n3), i2.dispose());
    }
    return { get: function(i2) {
      if (i2 && i2.isTexture) {
        const a2 = i2.mapping;
        if (a2 === ct || a2 === ut) {
          if (t2.has(i2)) {
            return n2(t2.get(i2).texture, i2.mapping);
          }
          {
            const a3 = i2.image;
            if (a3 && a3.height > 0) {
              const o2 = new ia(a3.height);
              return o2.fromEquirectangularTexture(e2, i2), t2.set(i2, o2), i2.addEventListener("dispose", r2), n2(o2.texture, i2.mapping);
            }
            return null;
          }
        }
      }
      return i2;
    }, dispose: function() {
      t2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  var Vn2 = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582];
  var zn2 = 20;
  var kn2 = new jc();
  var Wn2 = new Qr();
  var Xn2 = null;
  var Yn2 = 0;
  var Kn2 = 0;
  var qn2 = false;
  var jn2 = (1 + Math.sqrt(5)) / 2;
  var Zn2 = 1 / jn2;
  var $n2 = [new Ks(-jn2, Zn2, 0), new Ks(jn2, Zn2, 0), new Ks(-Zn2, 0, jn2), new Ks(Zn2, 0, jn2), new Ks(0, jn2, -Zn2), new Ks(0, jn2, Zn2), new Ks(-1, 1, -1), new Ks(1, 1, -1), new Ks(-1, 1, 1), new Ks(1, 1, 1)];
  var Qn2 = new Ks();
  var Jn2 = class {
    constructor(e2) {
      this._renderer = e2, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
    }
    fromScene(e2, t2 = 0, n2 = 0.1, r2 = 100, i2 = {}) {
      const { size: a2 = 256, position: o2 = Qn2 } = i2;
      Xn2 = this._renderer.getRenderTarget(), Yn2 = this._renderer.getActiveCubeFace(), Kn2 = this._renderer.getActiveMipmapLevel(), qn2 = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(a2);
      const s2 = this._allocateTargets();
      return s2.depthBuffer = true, this._sceneToCubeUV(e2, n2, r2, s2, o2), t2 > 0 && this._blur(s2, 0, 0, t2), this._applyPMREM(s2), this._cleanup(s2), s2;
    }
    fromEquirectangular(e2, t2 = null) {
      return this._fromTexture(e2, t2);
    }
    fromCubemap(e2, t2 = null) {
      return this._fromTexture(e2, t2);
    }
    compileCubemapShader() {
      null === this._cubemapMaterial && (this._cubemapMaterial = rr2(), this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      null === this._equirectMaterial && (this._equirectMaterial = nr2(), this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose();
    }
    _setSize(e2) {
      this._lodMax = Math.floor(Math.log2(e2)), this._cubeSize = Math.pow(2, this._lodMax);
    }
    _dispose() {
      null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
      for (let e2 = 0; e2 < this._lodPlanes.length; e2++) this._lodPlanes[e2].dispose();
    }
    _cleanup(e2) {
      this._renderer.setRenderTarget(Xn2, Yn2, Kn2), this._renderer.xr.enabled = qn2, e2.scissorTest = false, tr2(e2, 0, 0, e2.width, e2.height);
    }
    _fromTexture(e2, t2) {
      e2.mapping === ht || e2.mapping === lt ? this._setSize(0 === e2.image.length ? 16 : e2.image[0].width || e2.image[0].image.width) : this._setSize(e2.image.width / 4), Xn2 = this._renderer.getRenderTarget(), Yn2 = this._renderer.getActiveCubeFace(), Kn2 = this._renderer.getActiveMipmapLevel(), qn2 = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
      const n2 = t2 || this._allocateTargets();
      return this._textureToCubeUV(e2, n2), this._applyPMREM(n2), this._cleanup(n2), n2;
    }
    _allocateTargets() {
      const e2 = 3 * Math.max(this._cubeSize, 112), t2 = 4 * this._cubeSize, n2 = { magFilter: wt, minFilter: wt, generateMipmaps: false, type: Rt, format: Dt, colorSpace: Ge, depthBuffer: false }, r2 = er2(e2, t2, n2);
      if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== e2 || this._pingPongRenderTarget.height !== t2) {
        null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = er2(e2, t2, n2);
        const { _lodMax: r3 } = this;
        ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = function(e3) {
          const t3 = [], n3 = [], r4 = [];
          let i2 = e3;
          const a2 = e3 - 4 + 1 + Vn2.length;
          for (let o2 = 0; o2 < a2; o2++) {
            const a3 = Math.pow(2, i2);
            n3.push(a3);
            let s2 = 1 / a3;
            o2 > e3 - 4 ? s2 = Vn2[o2 - e3 + 4 - 1] : 0 === o2 && (s2 = 0), r4.push(s2);
            const l2 = 1 / (a3 - 2), c2 = -l2, d2 = 1 + l2, u2 = [c2, c2, d2, c2, d2, d2, c2, c2, d2, d2, c2, d2], f2 = 6, p2 = 6, m2 = 3, h2 = 2, _2 = 1, g2 = new Float32Array(m2 * p2 * f2), v2 = new Float32Array(h2 * p2 * f2), E2 = new Float32Array(_2 * p2 * f2);
            for (let e4 = 0; e4 < f2; e4++) {
              const t4 = e4 % 3 * 2 / 3 - 1, n4 = e4 > 2 ? 0 : -1, r5 = [t4, n4, 0, t4 + 2 / 3, n4, 0, t4 + 2 / 3, n4 + 1, 0, t4, n4, 0, t4 + 2 / 3, n4 + 1, 0, t4, n4 + 1, 0];
              g2.set(r5, m2 * p2 * e4), v2.set(u2, h2 * p2 * e4);
              const i3 = [e4, e4, e4, e4, e4, e4];
              E2.set(i3, _2 * p2 * e4);
            }
            const S2 = new In();
            S2.setAttribute("position", new dn(g2, m2)), S2.setAttribute("uv", new dn(v2, h2)), S2.setAttribute("faceIndex", new dn(E2, _2)), t3.push(S2), i2 > 4 && i2--;
          }
          return { lodPlanes: t3, sizeLods: n3, sigmas: r4 };
        }(r3)), this._blurMaterial = function(e3, t3, n3) {
          const r4 = new Float32Array(zn2), a2 = new Ks(0, 1, 0), o2 = new Yn({ name: "SphericalGaussianBlur", defines: { n: zn2, CUBEUV_TEXEL_WIDTH: 1 / t3, CUBEUV_TEXEL_HEIGHT: 1 / n3, CUBEUV_MAX_MIP: `${e3}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: r4 }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: a2 } }, vertexShader: ir2(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		", blending: m, depthTest: false, depthWrite: false });
          return o2;
        }(r3, e2, t2);
      }
      return r2;
    }
    _compileMaterial(e2) {
      const t2 = new Dn(this._lodPlanes[0], e2);
      this._renderer.compile(t2, kn2);
    }
    _sceneToCubeUV(e2, t2, n2, r2, i2) {
      const a2 = new Kn(90, 1, t2, n2), l2 = [1, -1, 1, 1, 1, 1], d2 = [1, 1, 1, -1, -1, -1], u2 = this._renderer, f2 = u2.autoClear, p2 = u2.toneMapping;
      u2.getClearColor(Wn2), u2.toneMapping = $, u2.autoClear = false;
      u2.state.buffers.depth.getReversed() && (u2.setRenderTarget(r2), u2.clearDepth(), u2.setRenderTarget(null));
      const m2 = new sn({ name: "PMREM.Background", side: d, depthWrite: false, depthTest: false }), h2 = new Dn(new Un(), m2);
      let _2 = false;
      const g2 = e2.background;
      g2 ? g2.isColor && (m2.color.copy(g2), e2.background = null, _2 = true) : (m2.color.copy(Wn2), _2 = true);
      for (let t3 = 0; t3 < 6; t3++) {
        const n3 = t3 % 3;
        0 === n3 ? (a2.up.set(0, l2[t3], 0), a2.position.set(i2.x, i2.y, i2.z), a2.lookAt(i2.x + d2[t3], i2.y, i2.z)) : 1 === n3 ? (a2.up.set(0, 0, l2[t3]), a2.position.set(i2.x, i2.y, i2.z), a2.lookAt(i2.x, i2.y + d2[t3], i2.z)) : (a2.up.set(0, l2[t3], 0), a2.position.set(i2.x, i2.y, i2.z), a2.lookAt(i2.x, i2.y, i2.z + d2[t3]));
        const o2 = this._cubeSize;
        tr2(r2, n3 * o2, t3 > 2 ? o2 : 0, o2, o2), u2.setRenderTarget(r2), _2 && u2.render(h2, a2), u2.render(e2, a2);
      }
      h2.geometry.dispose(), h2.material.dispose(), u2.toneMapping = p2, u2.autoClear = f2, e2.background = g2;
    }
    _textureToCubeUV(e2, t2) {
      const n2 = this._renderer, r2 = e2.mapping === ht || e2.mapping === lt;
      r2 ? (null === this._cubemapMaterial && (this._cubemapMaterial = rr2()), this._cubemapMaterial.uniforms.flipEnvMap.value = false === e2.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = nr2());
      const i2 = r2 ? this._cubemapMaterial : this._equirectMaterial, a2 = new Dn(this._lodPlanes[0], i2);
      i2.uniforms.envMap.value = e2;
      const s2 = this._cubeSize;
      tr2(t2, 0, 0, 3 * s2, 2 * s2), n2.setRenderTarget(t2), n2.render(a2, kn2);
    }
    _applyPMREM(e2) {
      const t2 = this._renderer, n2 = t2.autoClear;
      t2.autoClear = false;
      const r2 = this._lodPlanes.length;
      for (let t3 = 1; t3 < r2; t3++) {
        const n3 = Math.sqrt(this._sigmas[t3] * this._sigmas[t3] - this._sigmas[t3 - 1] * this._sigmas[t3 - 1]), i2 = $n2[(r2 - t3 - 1) % $n2.length];
        this._blur(e2, t3 - 1, t3, n3, i2);
      }
      t2.autoClear = n2;
    }
    _blur(e2, t2, n2, r2, i2) {
      const a2 = this._pingPongRenderTarget;
      this._halfBlur(e2, a2, t2, n2, r2, "latitudinal", i2), this._halfBlur(a2, e2, n2, n2, r2, "longitudinal", i2);
    }
    _halfBlur(e2, t2, n2, r2, i2, a2, s2) {
      const l2 = this._renderer, c2 = this._blurMaterial;
      "latitudinal" !== a2 && "longitudinal" !== a2 && console.error("blur direction must be either latitudinal or longitudinal!");
      const d2 = new Dn(this._lodPlanes[r2], c2), u2 = c2.uniforms, f2 = this._sizeLods[n2] - 1, p2 = isFinite(i2) ? Math.PI / (2 * f2) : 2 * Math.PI / 39, m2 = i2 / p2, h2 = isFinite(i2) ? 1 + Math.floor(3 * m2) : zn2;
      h2 > zn2 && console.warn(`sigmaRadians, ${i2}, is too large and will clip, as it requested ${h2} samples when the maximum is set to 20`);
      const _2 = [];
      let g2 = 0;
      for (let e3 = 0; e3 < zn2; ++e3) {
        const t3 = e3 / m2, n3 = Math.exp(-t3 * t3 / 2);
        _2.push(n3), 0 === e3 ? g2 += n3 : e3 < h2 && (g2 += 2 * n3);
      }
      for (let e3 = 0; e3 < _2.length; e3++) _2[e3] = _2[e3] / g2;
      u2.envMap.value = e2.texture, u2.samples.value = h2, u2.weights.value = _2, u2.latitudinal.value = "latitudinal" === a2, s2 && (u2.poleAxis.value = s2);
      const { _lodMax: v2 } = this;
      u2.dTheta.value = p2, u2.mipInt.value = v2 - n2;
      const E2 = this._sizeLods[r2];
      tr2(t2, 3 * E2 * (r2 > v2 - 4 ? r2 - v2 + 4 : 0), 4 * (this._cubeSize - E2), 3 * E2, 2 * E2), l2.setRenderTarget(t2), l2.render(d2, kn2);
    }
  };
  function er2(e2, t2, n2) {
    const r2 = new Ci(e2, t2, n2);
    return r2.texture.mapping = dt, r2.texture.name = "PMREM.cubeUv", r2.scissorTest = true, r2;
  }
  function tr2(e2, t2, n2, r2, i2) {
    e2.viewport.set(t2, n2, r2, i2), e2.scissor.set(t2, n2, r2, i2);
  }
  function nr2() {
    return new Yn({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: ir2(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		", blending: m, depthTest: false, depthWrite: false });
  }
  function rr2() {
    return new Yn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: ir2(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		", blending: m, depthTest: false, depthWrite: false });
  }
  function ir2() {
    return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
  }
  function ar2(e2) {
    let t2 = /* @__PURE__ */ new WeakMap(), n2 = null;
    function r2(e3) {
      const n3 = e3.target;
      n3.removeEventListener("dispose", r2);
      const i2 = t2.get(n3);
      void 0 !== i2 && (t2.delete(n3), i2.dispose());
    }
    return { get: function(i2) {
      if (i2 && i2.isTexture) {
        const a2 = i2.mapping, o2 = a2 === ct || a2 === ut, s2 = a2 === ht || a2 === lt;
        if (o2 || s2) {
          let a3 = t2.get(i2);
          const l2 = void 0 !== a3 ? a3.texture.pmremVersion : 0;
          if (i2.isRenderTargetTexture && i2.pmremVersion !== l2) return null === n2 && (n2 = new Jn2(e2)), a3 = o2 ? n2.fromEquirectangular(i2, a3) : n2.fromCubemap(i2, a3), a3.texture.pmremVersion = i2.pmremVersion, t2.set(i2, a3), a3.texture;
          if (void 0 !== a3) return a3.texture;
          {
            const l3 = i2.image;
            return o2 && l3 && l3.height > 0 || s2 && l3 && function(e3) {
              let t3 = 0;
              const n3 = 6;
              for (let r3 = 0; r3 < n3; r3++) void 0 !== e3[r3] && t3++;
              return t3 === n3;
            }(l3) ? (null === n2 && (n2 = new Jn2(e2)), a3 = o2 ? n2.fromEquirectangular(i2) : n2.fromCubemap(i2), a3.texture.pmremVersion = i2.pmremVersion, t2.set(i2, a3), i2.addEventListener("dispose", r2), a3.texture) : null;
          }
        }
      }
      return i2;
    }, dispose: function() {
      t2 = /* @__PURE__ */ new WeakMap(), null !== n2 && (n2.dispose(), n2 = null);
    } };
  }
  function or2(e2) {
    const t2 = {};
    function n2(n3) {
      if (void 0 !== t2[n3]) return t2[n3];
      let r2;
      switch (n3) {
        case "WEBGL_depth_texture":
          r2 = e2.getExtension("WEBGL_depth_texture") || e2.getExtension("MOZ_WEBGL_depth_texture") || e2.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          r2 = e2.getExtension("EXT_texture_filter_anisotropic") || e2.getExtension("MOZ_EXT_texture_filter_anisotropic") || e2.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          r2 = e2.getExtension("WEBGL_compressed_texture_s3tc") || e2.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e2.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          r2 = e2.getExtension("WEBGL_compressed_texture_pvrtc") || e2.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          r2 = e2.getExtension(n3);
      }
      return t2[n3] = r2, r2;
    }
    return { has: function(e3) {
      return null !== n2(e3);
    }, init: function() {
      n2("EXT_color_buffer_float"), n2("WEBGL_clip_cull_distance"), n2("OES_texture_float_linear"), n2("EXT_color_buffer_half_float"), n2("WEBGL_multisampled_render_to_texture"), n2("WEBGL_render_shared_exponent");
    }, get: function(e3) {
      const t3 = n2(e3);
      return null === t3 && ci("THREE.WebGLRenderer: " + e3 + " extension not supported."), t3;
    } };
  }
  function sr2(e2, t2, n2, r2) {
    const i2 = {}, a2 = /* @__PURE__ */ new WeakMap();
    function o2(e3) {
      const s3 = e3.target;
      null !== s3.index && t2.remove(s3.index);
      for (const e4 in s3.attributes) t2.remove(s3.attributes[e4]);
      s3.removeEventListener("dispose", o2), delete i2[s3.id];
      const l2 = a2.get(s3);
      l2 && (t2.remove(l2), a2.delete(s3)), r2.releaseStatesOfGeometry(s3), true === s3.isInstancedBufferGeometry && delete s3._maxInstanceCount, n2.memory.geometries--;
    }
    function s2(e3) {
      const n3 = [], r3 = e3.index, i3 = e3.attributes.position;
      let o3 = 0;
      if (null !== r3) {
        const e4 = r3.array;
        o3 = r3.version;
        for (let t3 = 0, r4 = e4.length; t3 < r4; t3 += 3) {
          const r5 = e4[t3 + 0], i4 = e4[t3 + 1], a3 = e4[t3 + 2];
          n3.push(r5, i4, i4, a3, a3, r5);
        }
      } else {
        if (void 0 === i3) return;
        {
          const e4 = i3.array;
          o3 = i3.version;
          for (let t3 = 0, r4 = e4.length / 3 - 1; t3 < r4; t3 += 3) {
            const e5 = t3 + 0, r5 = t3 + 1, i4 = t3 + 2;
            n3.push(e5, r5, r5, i4, i4, e5);
          }
        }
      }
      const s3 = new (ri(n3) ? bn : fn)(n3, 1);
      s3.version = o3;
      const l2 = a2.get(e3);
      l2 && t2.remove(l2), a2.set(e3, s3);
    }
    return { get: function(e3, t3) {
      return true === i2[t3.id] || (t3.addEventListener("dispose", o2), i2[t3.id] = true, n2.memory.geometries++), t3;
    }, update: function(n3) {
      const r3 = n3.attributes;
      for (const n4 in r3) t2.update(r3[n4], e2.ARRAY_BUFFER);
    }, getWireframeAttribute: function(e3) {
      const t3 = a2.get(e3);
      if (t3) {
        const n3 = e3.index;
        null !== n3 && t3.version < n3.version && s2(e3);
      } else s2(e3);
      return a2.get(e3);
    } };
  }
  function lr2(e2, t2, n2) {
    let r2, i2, a2;
    function o2(t3, o3, s2) {
      0 !== s2 && (e2.drawElementsInstanced(r2, o3, i2, t3 * a2, s2), n2.update(o3, r2, s2));
    }
    this.setMode = function(e3) {
      r2 = e3;
    }, this.setIndex = function(e3) {
      i2 = e3.type, a2 = e3.bytesPerElement;
    }, this.render = function(t3, o3) {
      e2.drawElements(r2, o3, i2, t3 * a2), n2.update(o3, r2, 1);
    }, this.renderInstances = o2, this.renderMultiDraw = function(e3, a3, o3) {
      if (0 === o3) return;
      t2.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r2, a3, 0, i2, e3, 0, o3);
      let s2 = 0;
      for (let e4 = 0; e4 < o3; e4++) s2 += a3[e4];
      n2.update(s2, r2, 1);
    }, this.renderMultiDrawInstances = function(e3, s2, l2, c2) {
      if (0 === l2) return;
      const d2 = t2.get("WEBGL_multi_draw");
      if (null === d2) for (let t3 = 0; t3 < e3.length; t3++) o2(e3[t3] / a2, s2[t3], c2[t3]);
      else {
        d2.multiDrawElementsInstancedWEBGL(r2, s2, 0, i2, e3, 0, c2, 0, l2);
        let t3 = 0;
        for (let e4 = 0; e4 < l2; e4++) t3 += s2[e4] * c2[e4];
        n2.update(t3, r2, 1);
      }
    };
  }
  function cr2(e2) {
    const t2 = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    return { memory: { geometries: 0, textures: 0 }, render: t2, programs: null, autoReset: true, reset: function() {
      t2.calls = 0, t2.triangles = 0, t2.points = 0, t2.lines = 0;
    }, update: function(n2, r2, i2) {
      switch (t2.calls++, r2) {
        case e2.TRIANGLES:
          t2.triangles += i2 * (n2 / 3);
          break;
        case e2.LINES:
          t2.lines += i2 * (n2 / 2);
          break;
        case e2.LINE_STRIP:
          t2.lines += i2 * (n2 - 1);
          break;
        case e2.LINE_LOOP:
          t2.lines += i2 * n2;
          break;
        case e2.POINTS:
          t2.points += i2 * n2;
          break;
        default:
          console.error("THREE.WebGLInfo: Unknown draw mode:", r2);
      }
    } };
  }
  function dr2(e2, n2, r2) {
    const i2 = /* @__PURE__ */ new WeakMap(), a2 = new Ti();
    return { update: function(o2, s2, l2) {
      const c2 = o2.morphTargetInfluences, d2 = s2.morphAttributes.position || s2.morphAttributes.normal || s2.morphAttributes.color, u2 = void 0 !== d2 ? d2.length : 0;
      let f2 = i2.get(s2);
      if (void 0 === f2 || f2.count !== u2) {
        let b2 = function() {
          R2.dispose(), i2.delete(s2), s2.removeEventListener("dispose", b2);
        };
        void 0 !== f2 && f2.texture.dispose();
        const p2 = void 0 !== s2.morphAttributes.position, m2 = void 0 !== s2.morphAttributes.normal, h2 = void 0 !== s2.morphAttributes.color, _2 = s2.morphAttributes.position || [], g2 = s2.morphAttributes.normal || [], v2 = s2.morphAttributes.color || [];
        let E2 = 0;
        true === p2 && (E2 = 1), true === m2 && (E2 = 2), true === h2 && (E2 = 3);
        let S2 = s2.attributes.position.count * E2, M2 = 1;
        S2 > n2.maxTextureSize && (M2 = Math.ceil(S2 / n2.maxTextureSize), S2 = n2.maxTextureSize);
        const x2 = new Float32Array(S2 * M2 * 4 * u2), R2 = new Ii(x2, S2, M2, u2);
        R2.type = Et, R2.needsUpdate = true;
        const A2 = 4 * E2;
        for (let C2 = 0; C2 < u2; C2++) {
          const L2 = _2[C2], P2 = g2[C2], U2 = v2[C2], D2 = S2 * M2 * 4 * C2;
          for (let w2 = 0; w2 < L2.count; w2++) {
            const I2 = w2 * A2;
            true === p2 && (a2.fromBufferAttribute(L2, w2), x2[D2 + I2 + 0] = a2.x, x2[D2 + I2 + 1] = a2.y, x2[D2 + I2 + 2] = a2.z, x2[D2 + I2 + 3] = 0), true === m2 && (a2.fromBufferAttribute(P2, w2), x2[D2 + I2 + 4] = a2.x, x2[D2 + I2 + 5] = a2.y, x2[D2 + I2 + 6] = a2.z, x2[D2 + I2 + 7] = 0), true === h2 && (a2.fromBufferAttribute(U2, w2), x2[D2 + I2 + 8] = a2.x, x2[D2 + I2 + 9] = a2.y, x2[D2 + I2 + 10] = a2.z, x2[D2 + I2 + 11] = 4 === U2.itemSize ? a2.w : 1);
          }
        }
        f2 = { count: u2, texture: R2, size: new $s(S2, M2) }, i2.set(s2, f2), s2.addEventListener("dispose", b2);
      }
      if (true === o2.isInstancedMesh && null !== o2.morphTexture) l2.getUniforms().setValue(e2, "morphTexture", o2.morphTexture, r2);
      else {
        let y2 = 0;
        for (let O2 = 0; O2 < c2.length; O2++) y2 += c2[O2];
        const N2 = s2.morphTargetsRelative ? 1 : 1 - y2;
        l2.getUniforms().setValue(e2, "morphTargetBaseInfluence", N2), l2.getUniforms().setValue(e2, "morphTargetInfluences", c2);
      }
      l2.getUniforms().setValue(e2, "morphTargetsTexture", f2.texture, r2), l2.getUniforms().setValue(e2, "morphTargetsTextureSize", f2.size);
    } };
  }
  function ur2(e2, t2, n2, r2) {
    let i2 = /* @__PURE__ */ new WeakMap();
    function a2(e3) {
      const t3 = e3.target;
      t3.removeEventListener("dispose", a2), n2.remove(t3.instanceMatrix), null !== t3.instanceColor && n2.remove(t3.instanceColor);
    }
    return { update: function(o2) {
      const s2 = r2.render.frame, l2 = o2.geometry, c2 = t2.get(o2, l2);
      if (i2.get(c2) !== s2 && (t2.update(c2), i2.set(c2, s2)), o2.isInstancedMesh && (false === o2.hasEventListener("dispose", a2) && o2.addEventListener("dispose", a2), i2.get(o2) !== s2 && (n2.update(o2.instanceMatrix, e2.ARRAY_BUFFER), null !== o2.instanceColor && n2.update(o2.instanceColor, e2.ARRAY_BUFFER), i2.set(o2, s2))), o2.isSkinnedMesh) {
        const e3 = o2.skeleton;
        i2.get(e3) !== s2 && (e3.update(), i2.set(e3, s2));
      }
      return c2;
    }, dispose: function() {
      i2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  var fr2 = new Ai();
  var pr2 = new oh(1, 1);
  var mr2 = new Ii();
  var hr2 = new ki();
  var _r2 = new sa();
  var gr2 = [];
  var vr2 = [];
  var Er2 = new Float32Array(16);
  var Sr2 = new Float32Array(9);
  var Tr2 = new Float32Array(4);
  function Mr2(e2, t2, n2) {
    const r2 = e2[0];
    if (r2 <= 0 || r2 > 0) return e2;
    const i2 = t2 * n2;
    let a2 = gr2[i2];
    if (void 0 === a2 && (a2 = new Float32Array(i2), gr2[i2] = a2), 0 !== t2) {
      r2.toArray(a2, 0);
      for (let r3 = 1, i3 = 0; r3 !== t2; ++r3) i3 += n2, e2[r3].toArray(a2, i3);
    }
    return a2;
  }
  function xr2(e2, t2) {
    if (e2.length !== t2.length) return false;
    for (let n2 = 0, r2 = e2.length; n2 < r2; n2++) if (e2[n2] !== t2[n2]) return false;
    return true;
  }
  function Rr2(e2, t2) {
    for (let n2 = 0, r2 = t2.length; n2 < r2; n2++) e2[n2] = t2[n2];
  }
  function Ar2(e2, t2) {
    let n2 = vr2[t2];
    void 0 === n2 && (n2 = new Int32Array(t2), vr2[t2] = n2);
    for (let r2 = 0; r2 !== t2; ++r2) n2[r2] = e2.allocateTextureUnit();
    return n2;
  }
  function br2(e2, t2) {
    const n2 = this.cache;
    n2[0] !== t2 && (e2.uniform1f(this.addr, t2), n2[0] = t2);
  }
  function Cr2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y || (e2.uniform2f(this.addr, t2.x, t2.y), n2[0] = t2.x, n2[1] = t2.y);
    else {
      if (xr2(n2, t2)) return;
      e2.uniform2fv(this.addr, t2), Rr2(n2, t2);
    }
  }
  function Lr2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z || (e2.uniform3f(this.addr, t2.x, t2.y, t2.z), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z);
    else if (void 0 !== t2.r) n2[0] === t2.r && n2[1] === t2.g && n2[2] === t2.b || (e2.uniform3f(this.addr, t2.r, t2.g, t2.b), n2[0] = t2.r, n2[1] = t2.g, n2[2] = t2.b);
    else {
      if (xr2(n2, t2)) return;
      e2.uniform3fv(this.addr, t2), Rr2(n2, t2);
    }
  }
  function Pr2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z && n2[3] === t2.w || (e2.uniform4f(this.addr, t2.x, t2.y, t2.z, t2.w), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z, n2[3] = t2.w);
    else {
      if (xr2(n2, t2)) return;
      e2.uniform4fv(this.addr, t2), Rr2(n2, t2);
    }
  }
  function Ur2(e2, t2) {
    const n2 = this.cache, r2 = t2.elements;
    if (void 0 === r2) {
      if (xr2(n2, t2)) return;
      e2.uniformMatrix2fv(this.addr, false, t2), Rr2(n2, t2);
    } else {
      if (xr2(n2, r2)) return;
      Tr2.set(r2), e2.uniformMatrix2fv(this.addr, false, Tr2), Rr2(n2, r2);
    }
  }
  function Dr2(e2, t2) {
    const n2 = this.cache, r2 = t2.elements;
    if (void 0 === r2) {
      if (xr2(n2, t2)) return;
      e2.uniformMatrix3fv(this.addr, false, t2), Rr2(n2, t2);
    } else {
      if (xr2(n2, r2)) return;
      Sr2.set(r2), e2.uniformMatrix3fv(this.addr, false, Sr2), Rr2(n2, r2);
    }
  }
  function wr2(e2, t2) {
    const n2 = this.cache, r2 = t2.elements;
    if (void 0 === r2) {
      if (xr2(n2, t2)) return;
      e2.uniformMatrix4fv(this.addr, false, t2), Rr2(n2, t2);
    } else {
      if (xr2(n2, r2)) return;
      Er2.set(r2), e2.uniformMatrix4fv(this.addr, false, Er2), Rr2(n2, r2);
    }
  }
  function Ir2(e2, t2) {
    const n2 = this.cache;
    n2[0] !== t2 && (e2.uniform1i(this.addr, t2), n2[0] = t2);
  }
  function yr2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y || (e2.uniform2i(this.addr, t2.x, t2.y), n2[0] = t2.x, n2[1] = t2.y);
    else {
      if (xr2(n2, t2)) return;
      e2.uniform2iv(this.addr, t2), Rr2(n2, t2);
    }
  }
  function Nr2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z || (e2.uniform3i(this.addr, t2.x, t2.y, t2.z), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z);
    else {
      if (xr2(n2, t2)) return;
      e2.uniform3iv(this.addr, t2), Rr2(n2, t2);
    }
  }
  function Or2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z && n2[3] === t2.w || (e2.uniform4i(this.addr, t2.x, t2.y, t2.z, t2.w), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z, n2[3] = t2.w);
    else {
      if (xr2(n2, t2)) return;
      e2.uniform4iv(this.addr, t2), Rr2(n2, t2);
    }
  }
  function Fr2(e2, t2) {
    const n2 = this.cache;
    n2[0] !== t2 && (e2.uniform1ui(this.addr, t2), n2[0] = t2);
  }
  function Br2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y || (e2.uniform2ui(this.addr, t2.x, t2.y), n2[0] = t2.x, n2[1] = t2.y);
    else {
      if (xr2(n2, t2)) return;
      e2.uniform2uiv(this.addr, t2), Rr2(n2, t2);
    }
  }
  function Hr2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z || (e2.uniform3ui(this.addr, t2.x, t2.y, t2.z), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z);
    else {
      if (xr2(n2, t2)) return;
      e2.uniform3uiv(this.addr, t2), Rr2(n2, t2);
    }
  }
  function Gr2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z && n2[3] === t2.w || (e2.uniform4ui(this.addr, t2.x, t2.y, t2.z, t2.w), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z, n2[3] = t2.w);
    else {
      if (xr2(n2, t2)) return;
      e2.uniform4uiv(this.addr, t2), Rr2(n2, t2);
    }
  }
  function Vr2(e2, t2, n2) {
    const r2 = this.cache, i2 = n2.allocateTextureUnit();
    let a2;
    r2[0] !== i2 && (e2.uniform1i(this.addr, i2), r2[0] = i2), this.type === e2.SAMPLER_2D_SHADOW ? (pr2.compareFunction = xs, a2 = pr2) : a2 = fr2, n2.setTexture2D(t2 || a2, i2);
  }
  function zr2(e2, t2, n2) {
    const r2 = this.cache, i2 = n2.allocateTextureUnit();
    r2[0] !== i2 && (e2.uniform1i(this.addr, i2), r2[0] = i2), n2.setTexture3D(t2 || hr2, i2);
  }
  function kr2(e2, t2, n2) {
    const r2 = this.cache, i2 = n2.allocateTextureUnit();
    r2[0] !== i2 && (e2.uniform1i(this.addr, i2), r2[0] = i2), n2.setTextureCube(t2 || _r2, i2);
  }
  function Wr2(e2, t2, n2) {
    const r2 = this.cache, i2 = n2.allocateTextureUnit();
    r2[0] !== i2 && (e2.uniform1i(this.addr, i2), r2[0] = i2), n2.setTexture2DArray(t2 || mr2, i2);
  }
  function Xr2(e2, t2) {
    e2.uniform1fv(this.addr, t2);
  }
  function Yr2(e2, t2) {
    const n2 = Mr2(t2, this.size, 2);
    e2.uniform2fv(this.addr, n2);
  }
  function Kr2(e2, t2) {
    const n2 = Mr2(t2, this.size, 3);
    e2.uniform3fv(this.addr, n2);
  }
  function qr2(e2, t2) {
    const n2 = Mr2(t2, this.size, 4);
    e2.uniform4fv(this.addr, n2);
  }
  function jr2(e2, t2) {
    const n2 = Mr2(t2, this.size, 4);
    e2.uniformMatrix2fv(this.addr, false, n2);
  }
  function Zr2(e2, t2) {
    const n2 = Mr2(t2, this.size, 9);
    e2.uniformMatrix3fv(this.addr, false, n2);
  }
  function $r2(e2, t2) {
    const n2 = Mr2(t2, this.size, 16);
    e2.uniformMatrix4fv(this.addr, false, n2);
  }
  function Qr2(e2, t2) {
    e2.uniform1iv(this.addr, t2);
  }
  function Jr2(e2, t2) {
    e2.uniform2iv(this.addr, t2);
  }
  function ei2(e2, t2) {
    e2.uniform3iv(this.addr, t2);
  }
  function ti2(e2, t2) {
    e2.uniform4iv(this.addr, t2);
  }
  function ni(e2, t2) {
    e2.uniform1uiv(this.addr, t2);
  }
  function ri2(e2, t2) {
    e2.uniform2uiv(this.addr, t2);
  }
  function ii2(e2, t2) {
    e2.uniform3uiv(this.addr, t2);
  }
  function ai(e2, t2) {
    e2.uniform4uiv(this.addr, t2);
  }
  function oi2(e2, t2, n2) {
    const r2 = this.cache, i2 = t2.length, a2 = Ar2(n2, i2);
    xr2(r2, a2) || (e2.uniform1iv(this.addr, a2), Rr2(r2, a2));
    for (let e3 = 0; e3 !== i2; ++e3) n2.setTexture2D(t2[e3] || fr2, a2[e3]);
  }
  function si2(e2, t2, n2) {
    const r2 = this.cache, i2 = t2.length, a2 = Ar2(n2, i2);
    xr2(r2, a2) || (e2.uniform1iv(this.addr, a2), Rr2(r2, a2));
    for (let e3 = 0; e3 !== i2; ++e3) n2.setTexture3D(t2[e3] || hr2, a2[e3]);
  }
  function li2(e2, t2, n2) {
    const r2 = this.cache, i2 = t2.length, a2 = Ar2(n2, i2);
    xr2(r2, a2) || (e2.uniform1iv(this.addr, a2), Rr2(r2, a2));
    for (let e3 = 0; e3 !== i2; ++e3) n2.setTextureCube(t2[e3] || _r2, a2[e3]);
  }
  function ci2(e2, t2, n2) {
    const r2 = this.cache, i2 = t2.length, a2 = Ar2(n2, i2);
    xr2(r2, a2) || (e2.uniform1iv(this.addr, a2), Rr2(r2, a2));
    for (let e3 = 0; e3 !== i2; ++e3) n2.setTexture2DArray(t2[e3] || mr2, a2[e3]);
  }
  var di2 = class {
    constructor(e2, t2, n2) {
      this.id = e2, this.addr = n2, this.cache = [], this.type = t2.type, this.setValue = function(e3) {
        switch (e3) {
          case 5126:
            return br2;
          case 35664:
            return Cr2;
          case 35665:
            return Lr2;
          case 35666:
            return Pr2;
          case 35674:
            return Ur2;
          case 35675:
            return Dr2;
          case 35676:
            return wr2;
          case 5124:
          case 35670:
            return Ir2;
          case 35667:
          case 35671:
            return yr2;
          case 35668:
          case 35672:
            return Nr2;
          case 35669:
          case 35673:
            return Or2;
          case 5125:
            return Fr2;
          case 36294:
            return Br2;
          case 36295:
            return Hr2;
          case 36296:
            return Gr2;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return Vr2;
          case 35679:
          case 36299:
          case 36307:
            return zr2;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return kr2;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return Wr2;
        }
      }(t2.type);
    }
  };
  var ui2 = class {
    constructor(e2, t2, n2) {
      this.id = e2, this.addr = n2, this.cache = [], this.type = t2.type, this.size = t2.size, this.setValue = function(e3) {
        switch (e3) {
          case 5126:
            return Xr2;
          case 35664:
            return Yr2;
          case 35665:
            return Kr2;
          case 35666:
            return qr2;
          case 35674:
            return jr2;
          case 35675:
            return Zr2;
          case 35676:
            return $r2;
          case 5124:
          case 35670:
            return Qr2;
          case 35667:
          case 35671:
            return Jr2;
          case 35668:
          case 35672:
            return ei2;
          case 35669:
          case 35673:
            return ti2;
          case 5125:
            return ni;
          case 36294:
            return ri2;
          case 36295:
            return ii2;
          case 36296:
            return ai;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return oi2;
          case 35679:
          case 36299:
          case 36307:
            return si2;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return li2;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return ci2;
        }
      }(t2.type);
    }
  };
  var fi2 = class {
    constructor(e2) {
      this.id = e2, this.seq = [], this.map = {};
    }
    setValue(e2, t2, n2) {
      const r2 = this.seq;
      for (let i2 = 0, a2 = r2.length; i2 !== a2; ++i2) {
        const a3 = r2[i2];
        a3.setValue(e2, t2[a3.id], n2);
      }
    }
  };
  var pi2 = /(\w+)(\])?(\[|\.)?/g;
  function mi2(e2, t2) {
    e2.seq.push(t2), e2.map[t2.id] = t2;
  }
  function hi2(e2, t2, n2) {
    const r2 = e2.name, i2 = r2.length;
    for (pi2.lastIndex = 0; ; ) {
      const a2 = pi2.exec(r2), o2 = pi2.lastIndex;
      let s2 = a2[1];
      const l2 = "]" === a2[2], c2 = a2[3];
      if (l2 && (s2 |= 0), void 0 === c2 || "[" === c2 && o2 + 2 === i2) {
        mi2(n2, void 0 === c2 ? new di2(s2, e2, t2) : new ui2(s2, e2, t2));
        break;
      }
      {
        let e3 = n2.map[s2];
        void 0 === e3 && (e3 = new fi2(s2), mi2(n2, e3)), n2 = e3;
      }
    }
  }
  var _i2 = class {
    constructor(e2, t2) {
      this.seq = [], this.map = {};
      const n2 = e2.getProgramParameter(t2, e2.ACTIVE_UNIFORMS);
      for (let r2 = 0; r2 < n2; ++r2) {
        const n3 = e2.getActiveUniform(t2, r2);
        hi2(n3, e2.getUniformLocation(t2, n3.name), this);
      }
    }
    setValue(e2, t2, n2, r2) {
      const i2 = this.map[t2];
      void 0 !== i2 && i2.setValue(e2, n2, r2);
    }
    setOptional(e2, t2, n2) {
      const r2 = t2[n2];
      void 0 !== r2 && this.setValue(e2, n2, r2);
    }
    static upload(e2, t2, n2, r2) {
      for (let i2 = 0, a2 = t2.length; i2 !== a2; ++i2) {
        const a3 = t2[i2], o2 = n2[a3.id];
        false !== o2.needsUpdate && a3.setValue(e2, o2.value, r2);
      }
    }
    static seqWithValue(e2, t2) {
      const n2 = [];
      for (let r2 = 0, i2 = e2.length; r2 !== i2; ++r2) {
        const i3 = e2[r2];
        i3.id in t2 && n2.push(i3);
      }
      return n2;
    }
  };
  function gi2(e2, t2, n2) {
    const r2 = e2.createShader(t2);
    return e2.shaderSource(r2, n2), e2.compileShader(r2), r2;
  }
  var vi2 = 0;
  var Ei2 = new si();
  function Si2(e2, t2, n2) {
    const r2 = e2.getShaderParameter(t2, e2.COMPILE_STATUS), i2 = (e2.getShaderInfoLog(t2) || "").trim();
    if (r2 && "" === i2) return "";
    const a2 = /ERROR: 0:(\d+)/.exec(i2);
    if (a2) {
      const r3 = parseInt(a2[1]);
      return n2.toUpperCase() + "\n\n" + i2 + "\n\n" + function(e3, t3) {
        const n3 = e3.split("\n"), r4 = [], i3 = Math.max(t3 - 6, 0), a3 = Math.min(t3 + 6, n3.length);
        for (let e4 = i3; e4 < a3; e4++) {
          const i4 = e4 + 1;
          r4.push(`${i4 === t3 ? ">" : " "} ${i4}: ${n3[e4]}`);
        }
        return r4.join("\n");
      }(e2.getShaderSource(t2), r3);
    }
    return i2;
  }
  function Ti2(e2, t2) {
    const n2 = function(e3) {
      yi._getMatrix(Ei2, yi.workingColorSpace, e3);
      const t3 = `mat3( ${Ei2.elements.map((e4) => e4.toFixed(4))} )`;
      switch (yi.getTransfer(e3)) {
        case $e:
          return [t3, "LinearTransferOETF"];
        case Qe:
          return [t3, "sRGBTransferOETF"];
        default:
          return console.warn("THREE.WebGLProgram: Unsupported color space: ", e3), [t3, "LinearTransferOETF"];
      }
    }(t2);
    return [`vec4 ${e2}( vec4 value ) {`, `	return ${n2[1]}( vec4( value.rgb * ${n2[0]}, value.a ) );`, "}"].join("\n");
  }
  function Mi2(e2, t2) {
    let n2;
    switch (t2) {
      case Q:
        n2 = "Linear";
        break;
      case K:
        n2 = "Reinhard";
        break;
      case tt:
        n2 = "Cineon";
        break;
      case et:
        n2 = "ACESFilmic";
        break;
      case it:
        n2 = "AgX";
        break;
      case rt:
        n2 = "Neutral";
        break;
      case st:
        n2 = "Custom";
        break;
      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t2), n2 = "Linear";
    }
    return "vec3 " + e2 + "( vec3 color ) { return " + n2 + "ToneMapping( color ); }";
  }
  var xi2 = new Ks();
  function Ri2() {
    yi.getLuminanceCoefficients(xi2);
    return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${xi2.x.toFixed(4)}, ${xi2.y.toFixed(4)}, ${xi2.z.toFixed(4)} );`, "	return dot( weights, rgb );", "}"].join("\n");
  }
  function Ai2(e2) {
    return "" !== e2;
  }
  function bi2(e2, t2) {
    const n2 = t2.numSpotLightShadows + t2.numSpotLightMaps - t2.numSpotLightShadowsWithMaps;
    return e2.replace(/NUM_DIR_LIGHTS/g, t2.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t2.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t2.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n2).replace(/NUM_RECT_AREA_LIGHTS/g, t2.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t2.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t2.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t2.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t2.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t2.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t2.numPointLightShadows);
  }
  function Ci2(e2, t2) {
    return e2.replace(/NUM_CLIPPING_PLANES/g, t2.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t2.numClippingPlanes - t2.numClipIntersection);
  }
  var Li2 = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function Pi2(e2) {
    return e2.replace(Li2, Di2);
  }
  var Ui2 = /* @__PURE__ */ new Map();
  function Di2(e2, t2) {
    let n2 = Pn2[t2];
    if (void 0 === n2) {
      const e3 = Ui2.get(t2);
      if (void 0 === e3) throw new Error("Can not resolve #include <" + t2 + ">");
      n2 = Pn2[e3], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t2, e3);
    }
    return Pi2(n2);
  }
  var wi2 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function Ii2(e2) {
    return e2.replace(wi2, yi2);
  }
  function yi2(e2, t2, n2, r2) {
    let i2 = "";
    for (let e3 = parseInt(t2); e3 < parseInt(n2); e3++) i2 += r2.replace(/\[\s*i\s*\]/g, "[ " + e3 + " ]").replace(/UNROLLED_LOOP_INDEX/g, e3);
    return i2;
  }
  function Ni2(e2) {
    let t2 = `precision ${e2.precision} float;
	precision ${e2.precision} int;
	precision ${e2.precision} sampler2D;
	precision ${e2.precision} samplerCube;
	precision ${e2.precision} sampler3D;
	precision ${e2.precision} sampler2DArray;
	precision ${e2.precision} sampler2DShadow;
	precision ${e2.precision} samplerCubeShadow;
	precision ${e2.precision} sampler2DArrayShadow;
	precision ${e2.precision} isampler2D;
	precision ${e2.precision} isampler3D;
	precision ${e2.precision} isamplerCube;
	precision ${e2.precision} isampler2DArray;
	precision ${e2.precision} usampler2D;
	precision ${e2.precision} usampler3D;
	precision ${e2.precision} usamplerCube;
	precision ${e2.precision} usampler2DArray;
	`;
    return "highp" === e2.precision ? t2 += "\n#define HIGH_PRECISION" : "mediump" === e2.precision ? t2 += "\n#define MEDIUM_PRECISION" : "lowp" === e2.precision && (t2 += "\n#define LOW_PRECISION"), t2;
  }
  function Oi2(e2, t2, n2, r2) {
    const i2 = e2.getContext(), o2 = n2.defines;
    let s2 = n2.vertexShader, l2 = n2.fragmentShader;
    const c2 = function(e3) {
      let t3 = "SHADOWMAP_TYPE_BASIC";
      return e3.shadowMapType === h ? t3 = "SHADOWMAP_TYPE_PCF" : e3.shadowMapType === l ? t3 = "SHADOWMAP_TYPE_PCF_SOFT" : e3.shadowMapType === c && (t3 = "SHADOWMAP_TYPE_VSM"), t3;
    }(n2), d2 = function(e3) {
      let t3 = "ENVMAP_TYPE_CUBE";
      if (e3.envMap) switch (e3.envMapMode) {
        case ht:
        case lt:
          t3 = "ENVMAP_TYPE_CUBE";
          break;
        case dt:
          t3 = "ENVMAP_TYPE_CUBE_UV";
      }
      return t3;
    }(n2), u2 = function(e3) {
      let t3 = "ENVMAP_MODE_REFLECTION";
      e3.envMap && e3.envMapMode === lt && (t3 = "ENVMAP_MODE_REFRACTION");
      return t3;
    }(n2), f2 = function(e3) {
      let t3 = "ENVMAP_BLENDING_NONE";
      if (e3.envMap) switch (e3.combine) {
        case Y:
          t3 = "ENVMAP_BLENDING_MULTIPLY";
          break;
        case Z:
          t3 = "ENVMAP_BLENDING_MIX";
          break;
        case G:
          t3 = "ENVMAP_BLENDING_ADD";
      }
      return t3;
    }(n2), p2 = function(e3) {
      const t3 = e3.envMapCubeUVHeight;
      if (null === t3) return null;
      const n3 = Math.log2(t3) - 2, r3 = 1 / t3;
      return { texelWidth: 1 / (3 * Math.max(Math.pow(2, n3), 112)), texelHeight: r3, maxMip: n3 };
    }(n2), m2 = function(e3) {
      return [e3.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e3.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Ai2).join("\n");
    }(n2), h2 = function(e3) {
      const t3 = [];
      for (const n3 in e3) {
        const r3 = e3[n3];
        false !== r3 && t3.push("#define " + n3 + " " + r3);
      }
      return t3.join("\n");
    }(o2), _2 = i2.createProgram();
    let g2, v2, E2 = n2.glslVersion ? "#version " + n2.glslVersion + "\n" : "";
    n2.isRawShaderMaterial ? (g2 = ["#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, h2].filter(Ai2).join("\n"), g2.length > 0 && (g2 += "\n"), v2 = ["#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, h2].filter(Ai2).join("\n"), v2.length > 0 && (v2 += "\n")) : (g2 = [Ni2(n2), "#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, h2, n2.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", n2.batching ? "#define USE_BATCHING" : "", n2.batchingColor ? "#define USE_BATCHING_COLOR" : "", n2.instancing ? "#define USE_INSTANCING" : "", n2.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n2.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", n2.useFog && n2.fog ? "#define USE_FOG" : "", n2.useFog && n2.fogExp2 ? "#define FOG_EXP2" : "", n2.map ? "#define USE_MAP" : "", n2.envMap ? "#define USE_ENVMAP" : "", n2.envMap ? "#define " + u2 : "", n2.lightMap ? "#define USE_LIGHTMAP" : "", n2.aoMap ? "#define USE_AOMAP" : "", n2.bumpMap ? "#define USE_BUMPMAP" : "", n2.normalMap ? "#define USE_NORMALMAP" : "", n2.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n2.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n2.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", n2.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n2.anisotropy ? "#define USE_ANISOTROPY" : "", n2.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n2.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n2.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n2.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n2.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n2.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n2.specularMap ? "#define USE_SPECULARMAP" : "", n2.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n2.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n2.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n2.metalnessMap ? "#define USE_METALNESSMAP" : "", n2.alphaMap ? "#define USE_ALPHAMAP" : "", n2.alphaHash ? "#define USE_ALPHAHASH" : "", n2.transmission ? "#define USE_TRANSMISSION" : "", n2.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n2.thicknessMap ? "#define USE_THICKNESSMAP" : "", n2.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n2.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n2.mapUv ? "#define MAP_UV " + n2.mapUv : "", n2.alphaMapUv ? "#define ALPHAMAP_UV " + n2.alphaMapUv : "", n2.lightMapUv ? "#define LIGHTMAP_UV " + n2.lightMapUv : "", n2.aoMapUv ? "#define AOMAP_UV " + n2.aoMapUv : "", n2.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n2.emissiveMapUv : "", n2.bumpMapUv ? "#define BUMPMAP_UV " + n2.bumpMapUv : "", n2.normalMapUv ? "#define NORMALMAP_UV " + n2.normalMapUv : "", n2.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n2.displacementMapUv : "", n2.metalnessMapUv ? "#define METALNESSMAP_UV " + n2.metalnessMapUv : "", n2.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n2.roughnessMapUv : "", n2.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n2.anisotropyMapUv : "", n2.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n2.clearcoatMapUv : "", n2.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n2.clearcoatNormalMapUv : "", n2.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n2.clearcoatRoughnessMapUv : "", n2.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n2.iridescenceMapUv : "", n2.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n2.iridescenceThicknessMapUv : "", n2.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n2.sheenColorMapUv : "", n2.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n2.sheenRoughnessMapUv : "", n2.specularMapUv ? "#define SPECULARMAP_UV " + n2.specularMapUv : "", n2.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n2.specularColorMapUv : "", n2.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n2.specularIntensityMapUv : "", n2.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n2.transmissionMapUv : "", n2.thicknessMapUv ? "#define THICKNESSMAP_UV " + n2.thicknessMapUv : "", n2.vertexTangents && false === n2.flatShading ? "#define USE_TANGENT" : "", n2.vertexColors ? "#define USE_COLOR" : "", n2.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n2.vertexUv1s ? "#define USE_UV1" : "", n2.vertexUv2s ? "#define USE_UV2" : "", n2.vertexUv3s ? "#define USE_UV3" : "", n2.pointsUvs ? "#define USE_POINTS_UV" : "", n2.flatShading ? "#define FLAT_SHADED" : "", n2.skinning ? "#define USE_SKINNING" : "", n2.morphTargets ? "#define USE_MORPHTARGETS" : "", n2.morphNormals && false === n2.flatShading ? "#define USE_MORPHNORMALS" : "", n2.morphColors ? "#define USE_MORPHCOLORS" : "", n2.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n2.morphTextureStride : "", n2.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n2.morphTargetsCount : "", n2.doubleSided ? "#define DOUBLE_SIDED" : "", n2.flipSided ? "#define FLIP_SIDED" : "", n2.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n2.shadowMapEnabled ? "#define " + c2 : "", n2.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n2.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n2.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", n2.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(Ai2).join("\n"), v2 = [Ni2(n2), "#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, h2, n2.useFog && n2.fog ? "#define USE_FOG" : "", n2.useFog && n2.fogExp2 ? "#define FOG_EXP2" : "", n2.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", n2.map ? "#define USE_MAP" : "", n2.matcap ? "#define USE_MATCAP" : "", n2.envMap ? "#define USE_ENVMAP" : "", n2.envMap ? "#define " + d2 : "", n2.envMap ? "#define " + u2 : "", n2.envMap ? "#define " + f2 : "", p2 ? "#define CUBEUV_TEXEL_WIDTH " + p2.texelWidth : "", p2 ? "#define CUBEUV_TEXEL_HEIGHT " + p2.texelHeight : "", p2 ? "#define CUBEUV_MAX_MIP " + p2.maxMip + ".0" : "", n2.lightMap ? "#define USE_LIGHTMAP" : "", n2.aoMap ? "#define USE_AOMAP" : "", n2.bumpMap ? "#define USE_BUMPMAP" : "", n2.normalMap ? "#define USE_NORMALMAP" : "", n2.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n2.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n2.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n2.anisotropy ? "#define USE_ANISOTROPY" : "", n2.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n2.clearcoat ? "#define USE_CLEARCOAT" : "", n2.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n2.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n2.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n2.dispersion ? "#define USE_DISPERSION" : "", n2.iridescence ? "#define USE_IRIDESCENCE" : "", n2.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n2.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n2.specularMap ? "#define USE_SPECULARMAP" : "", n2.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n2.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n2.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n2.metalnessMap ? "#define USE_METALNESSMAP" : "", n2.alphaMap ? "#define USE_ALPHAMAP" : "", n2.alphaTest ? "#define USE_ALPHATEST" : "", n2.alphaHash ? "#define USE_ALPHAHASH" : "", n2.sheen ? "#define USE_SHEEN" : "", n2.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n2.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n2.transmission ? "#define USE_TRANSMISSION" : "", n2.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n2.thicknessMap ? "#define USE_THICKNESSMAP" : "", n2.vertexTangents && false === n2.flatShading ? "#define USE_TANGENT" : "", n2.vertexColors || n2.instancingColor || n2.batchingColor ? "#define USE_COLOR" : "", n2.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n2.vertexUv1s ? "#define USE_UV1" : "", n2.vertexUv2s ? "#define USE_UV2" : "", n2.vertexUv3s ? "#define USE_UV3" : "", n2.pointsUvs ? "#define USE_POINTS_UV" : "", n2.gradientMap ? "#define USE_GRADIENTMAP" : "", n2.flatShading ? "#define FLAT_SHADED" : "", n2.doubleSided ? "#define DOUBLE_SIDED" : "", n2.flipSided ? "#define FLIP_SIDED" : "", n2.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n2.shadowMapEnabled ? "#define " + c2 : "", n2.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n2.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n2.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n2.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", n2.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", n2.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", n2.toneMapping !== $ ? "#define TONE_MAPPING" : "", n2.toneMapping !== $ ? Pn2.tonemapping_pars_fragment : "", n2.toneMapping !== $ ? Mi2("toneMapping", n2.toneMapping) : "", n2.dithering ? "#define DITHERING" : "", n2.opaque ? "#define OPAQUE" : "", Pn2.colorspace_pars_fragment, Ti2("linearToOutputTexel", n2.outputColorSpace), Ri2(), n2.useDepthPacking ? "#define DEPTH_PACKING " + n2.depthPacking : "", "\n"].filter(Ai2).join("\n")), s2 = Pi2(s2), s2 = bi2(s2, n2), s2 = Ci2(s2, n2), l2 = Pi2(l2), l2 = bi2(l2, n2), l2 = Ci2(l2, n2), s2 = Ii2(s2), l2 = Ii2(l2), true !== n2.isRawShaderMaterial && (E2 = "#version 300 es\n", g2 = [m2, "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + g2, v2 = ["#define varying in", n2.glslVersion === Rs ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n2.glslVersion === Rs ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + v2);
    const S2 = E2 + g2 + s2, T2 = E2 + v2 + l2, M2 = gi2(i2, i2.VERTEX_SHADER, S2), x2 = gi2(i2, i2.FRAGMENT_SHADER, T2);
    function R2(t3) {
      if (e2.debug.checkShaderErrors) {
        const n3 = i2.getProgramInfoLog(_2) || "", r3 = i2.getShaderInfoLog(M2) || "", a2 = i2.getShaderInfoLog(x2) || "", o3 = n3.trim(), s3 = r3.trim(), l3 = a2.trim();
        let c3 = true, d3 = true;
        if (false === i2.getProgramParameter(_2, i2.LINK_STATUS)) if (c3 = false, "function" == typeof e2.debug.onShaderError) e2.debug.onShaderError(i2, _2, M2, x2);
        else {
          const e3 = Si2(i2, M2, "vertex"), n4 = Si2(i2, x2, "fragment");
          console.error("THREE.WebGLProgram: Shader Error " + i2.getError() + " - VALIDATE_STATUS " + i2.getProgramParameter(_2, i2.VALIDATE_STATUS) + "\n\nMaterial Name: " + t3.name + "\nMaterial Type: " + t3.type + "\n\nProgram Info Log: " + o3 + "\n" + e3 + "\n" + n4);
        }
        else "" !== o3 ? console.warn("THREE.WebGLProgram: Program Info Log:", o3) : "" !== s3 && "" !== l3 || (d3 = false);
        d3 && (t3.diagnostics = { runnable: c3, programLog: o3, vertexShader: { log: s3, prefix: g2 }, fragmentShader: { log: l3, prefix: v2 } });
      }
      i2.deleteShader(M2), i2.deleteShader(x2), A2 = new _i2(i2, _2), b2 = function(e3, t4) {
        const n3 = {}, r3 = e3.getProgramParameter(t4, e3.ACTIVE_ATTRIBUTES);
        for (let i3 = 0; i3 < r3; i3++) {
          const r4 = e3.getActiveAttrib(t4, i3), a2 = r4.name;
          let o3 = 1;
          r4.type === e3.FLOAT_MAT2 && (o3 = 2), r4.type === e3.FLOAT_MAT3 && (o3 = 3), r4.type === e3.FLOAT_MAT4 && (o3 = 4), n3[a2] = { type: r4.type, location: e3.getAttribLocation(t4, a2), locationSize: o3 };
        }
        return n3;
      }(i2, _2);
    }
    let A2, b2;
    i2.attachShader(_2, M2), i2.attachShader(_2, x2), void 0 !== n2.index0AttributeName ? i2.bindAttribLocation(_2, 0, n2.index0AttributeName) : true === n2.morphTargets && i2.bindAttribLocation(_2, 0, "position"), i2.linkProgram(_2), this.getUniforms = function() {
      return void 0 === A2 && R2(this), A2;
    }, this.getAttributes = function() {
      return void 0 === b2 && R2(this), b2;
    };
    let P2 = false === n2.rendererExtensionParallelShaderCompile;
    return this.isReady = function() {
      return false === P2 && (P2 = i2.getProgramParameter(_2, 37297)), P2;
    }, this.destroy = function() {
      r2.releaseStatesOfProgram(this), i2.deleteProgram(_2), this.program = void 0;
    }, this.type = n2.shaderType, this.name = n2.shaderName, this.id = vi2++, this.cacheKey = t2, this.usedTimes = 1, this.program = _2, this.vertexShader = M2, this.fragmentShader = x2, this;
  }
  var Fi2 = 0;
  var Bi2 = class {
    constructor() {
      this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
    }
    update(e2) {
      const t2 = e2.vertexShader, n2 = e2.fragmentShader, r2 = this._getShaderStage(t2), i2 = this._getShaderStage(n2), a2 = this._getShaderCacheForMaterial(e2);
      return false === a2.has(r2) && (a2.add(r2), r2.usedTimes++), false === a2.has(i2) && (a2.add(i2), i2.usedTimes++), this;
    }
    remove(e2) {
      const t2 = this.materialCache.get(e2);
      for (const e3 of t2) e3.usedTimes--, 0 === e3.usedTimes && this.shaderCache.delete(e3.code);
      return this.materialCache.delete(e2), this;
    }
    getVertexShaderID(e2) {
      return this._getShaderStage(e2.vertexShader).id;
    }
    getFragmentShaderID(e2) {
      return this._getShaderStage(e2.fragmentShader).id;
    }
    dispose() {
      this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(e2) {
      const t2 = this.materialCache;
      let n2 = t2.get(e2);
      return void 0 === n2 && (n2 = /* @__PURE__ */ new Set(), t2.set(e2, n2)), n2;
    }
    _getShaderStage(e2) {
      const t2 = this.shaderCache;
      let n2 = t2.get(e2);
      return void 0 === n2 && (n2 = new Hi2(e2), t2.set(e2, n2)), n2;
    }
  };
  var Hi2 = class {
    constructor(e2) {
      this.id = Fi2++, this.code = e2, this.usedTimes = 0;
    }
  };
  function Gi2(e2, t2, n2, r2, i2, o2, s2) {
    const l2 = new fr(), d2 = new Bi2(), u2 = /* @__PURE__ */ new Set(), f2 = [], h2 = i2.logarithmicDepthBuffer, _2 = i2.vertexTextures;
    let g2 = i2.precision;
    const v2 = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
    function E2(e3) {
      return u2.add(e3), 0 === e3 ? "uv" : `uv${e3}`;
    }
    return { getParameters: function(o3, l3, f3, S2, T2) {
      const M2 = S2.fog, x2 = T2.geometry, R2 = o3.isMeshStandardMaterial ? S2.environment : null, A2 = (o3.isMeshStandardMaterial ? n2 : t2).get(o3.envMap || R2), b2 = A2 && A2.mapping === dt ? A2.image.height : null, C2 = v2[o3.type];
      null !== o3.precision && (g2 = i2.getMaxPrecision(o3.precision), g2 !== o3.precision && console.warn("THREE.WebGLProgram.getParameters:", o3.precision, "not supported, using", g2, "instead."));
      const L2 = x2.morphAttributes.position || x2.morphAttributes.normal || x2.morphAttributes.color, P2 = void 0 !== L2 ? L2.length : 0;
      let U2, w2, I2, y2, N2 = 0;
      if (void 0 !== x2.morphAttributes.position && (N2 = 1), void 0 !== x2.morphAttributes.normal && (N2 = 2), void 0 !== x2.morphAttributes.color && (N2 = 3), C2) {
        const e3 = Dn2[C2];
        U2 = e3.vertexShader, w2 = e3.fragmentShader;
      } else U2 = o3.vertexShader, w2 = o3.fragmentShader, d2.update(o3), I2 = d2.getVertexShaderID(o3), y2 = d2.getFragmentShaderID(o3);
      const O2 = e2.getRenderTarget(), B2 = e2.state.buffers.depth.getReversed(), H2 = true === T2.isInstancedMesh, G2 = true === T2.isBatchedMesh, V2 = !!o3.map, z2 = !!o3.matcap, k2 = !!A2, W2 = !!o3.aoMap, X2 = !!o3.lightMap, Y2 = !!o3.bumpMap, K2 = !!o3.normalMap, q2 = !!o3.displacementMap, j2 = !!o3.emissiveMap, Z2 = !!o3.metalnessMap, $2 = !!o3.roughnessMap, Q2 = o3.anisotropy > 0, J2 = o3.clearcoat > 0, ee2 = o3.dispersion > 0, te2 = o3.iridescence > 0, ne2 = o3.sheen > 0, re2 = o3.transmission > 0, ie2 = Q2 && !!o3.anisotropyMap, ae2 = J2 && !!o3.clearcoatMap, oe2 = J2 && !!o3.clearcoatNormalMap, se2 = J2 && !!o3.clearcoatRoughnessMap, le2 = te2 && !!o3.iridescenceMap, ce2 = te2 && !!o3.iridescenceThicknessMap, de2 = ne2 && !!o3.sheenColorMap, ue2 = ne2 && !!o3.sheenRoughnessMap, _e2 = !!o3.specularMap, ge2 = !!o3.specularColorMap, ve2 = !!o3.specularIntensityMap, Ee2 = re2 && !!o3.transmissionMap, Se2 = re2 && !!o3.thicknessMap, Te2 = !!o3.gradientMap, Me2 = !!o3.alphaMap, xe2 = o3.alphaTest > 0, Re2 = !!o3.alphaHash, Ae2 = !!o3.extensions;
      let be2 = $;
      o3.toneMapped && (null !== O2 && true !== O2.isXRRenderTarget || (be2 = e2.toneMapping));
      const Ce2 = { shaderID: C2, shaderType: o3.type, shaderName: o3.name, vertexShader: U2, fragmentShader: w2, defines: o3.defines, customVertexShaderID: I2, customFragmentShaderID: y2, isRawShaderMaterial: true === o3.isRawShaderMaterial, glslVersion: o3.glslVersion, precision: g2, batching: G2, batchingColor: G2 && null !== T2._colorsTexture, instancing: H2, instancingColor: H2 && null !== T2.instanceColor, instancingMorph: H2 && null !== T2.morphTexture, supportsVertexTextures: _2, outputColorSpace: null === O2 ? e2.outputColorSpace : true === O2.isXRRenderTarget ? O2.texture.colorSpace : Ge, alphaToCoverage: !!o3.alphaToCoverage, map: V2, matcap: z2, envMap: k2, envMapMode: k2 && A2.mapping, envMapCubeUVHeight: b2, aoMap: W2, lightMap: X2, bumpMap: Y2, normalMap: K2, displacementMap: _2 && q2, emissiveMap: j2, normalMapObjectSpace: K2 && o3.normalMapType === Xe, normalMapTangentSpace: K2 && o3.normalMapType === Je, metalnessMap: Z2, roughnessMap: $2, anisotropy: Q2, anisotropyMap: ie2, clearcoat: J2, clearcoatMap: ae2, clearcoatNormalMap: oe2, clearcoatRoughnessMap: se2, dispersion: ee2, iridescence: te2, iridescenceMap: le2, iridescenceThicknessMap: ce2, sheen: ne2, sheenColorMap: de2, sheenRoughnessMap: ue2, specularMap: _e2, specularColorMap: ge2, specularIntensityMap: ve2, transmission: re2, transmissionMap: Ee2, thicknessMap: Se2, gradientMap: Te2, opaque: false === o3.transparent && o3.blending === y && false === o3.alphaToCoverage, alphaMap: Me2, alphaTest: xe2, alphaHash: Re2, combine: o3.combine, mapUv: V2 && E2(o3.map.channel), aoMapUv: W2 && E2(o3.aoMap.channel), lightMapUv: X2 && E2(o3.lightMap.channel), bumpMapUv: Y2 && E2(o3.bumpMap.channel), normalMapUv: K2 && E2(o3.normalMap.channel), displacementMapUv: q2 && E2(o3.displacementMap.channel), emissiveMapUv: j2 && E2(o3.emissiveMap.channel), metalnessMapUv: Z2 && E2(o3.metalnessMap.channel), roughnessMapUv: $2 && E2(o3.roughnessMap.channel), anisotropyMapUv: ie2 && E2(o3.anisotropyMap.channel), clearcoatMapUv: ae2 && E2(o3.clearcoatMap.channel), clearcoatNormalMapUv: oe2 && E2(o3.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: se2 && E2(o3.clearcoatRoughnessMap.channel), iridescenceMapUv: le2 && E2(o3.iridescenceMap.channel), iridescenceThicknessMapUv: ce2 && E2(o3.iridescenceThicknessMap.channel), sheenColorMapUv: de2 && E2(o3.sheenColorMap.channel), sheenRoughnessMapUv: ue2 && E2(o3.sheenRoughnessMap.channel), specularMapUv: _e2 && E2(o3.specularMap.channel), specularColorMapUv: ge2 && E2(o3.specularColorMap.channel), specularIntensityMapUv: ve2 && E2(o3.specularIntensityMap.channel), transmissionMapUv: Ee2 && E2(o3.transmissionMap.channel), thicknessMapUv: Se2 && E2(o3.thicknessMap.channel), alphaMapUv: Me2 && E2(o3.alphaMap.channel), vertexTangents: !!x2.attributes.tangent && (K2 || Q2), vertexColors: o3.vertexColors, vertexAlphas: true === o3.vertexColors && !!x2.attributes.color && 4 === x2.attributes.color.itemSize, pointsUvs: true === T2.isPoints && !!x2.attributes.uv && (V2 || Me2), fog: !!M2, useFog: true === o3.fog, fogExp2: !!M2 && M2.isFogExp2, flatShading: true === o3.flatShading && false === o3.wireframe, sizeAttenuation: true === o3.sizeAttenuation, logarithmicDepthBuffer: h2, reversedDepthBuffer: B2, skinning: true === T2.isSkinnedMesh, morphTargets: void 0 !== x2.morphAttributes.position, morphNormals: void 0 !== x2.morphAttributes.normal, morphColors: void 0 !== x2.morphAttributes.color, morphTargetsCount: P2, morphTextureStride: N2, numDirLights: l3.directional.length, numPointLights: l3.point.length, numSpotLights: l3.spot.length, numSpotLightMaps: l3.spotLightMap.length, numRectAreaLights: l3.rectArea.length, numHemiLights: l3.hemi.length, numDirLightShadows: l3.directionalShadowMap.length, numPointLightShadows: l3.pointShadowMap.length, numSpotLightShadows: l3.spotShadowMap.length, numSpotLightShadowsWithMaps: l3.numSpotLightShadowsWithMaps, numLightProbes: l3.numLightProbes, numClippingPlanes: s2.numPlanes, numClipIntersection: s2.numIntersection, dithering: o3.dithering, shadowMapEnabled: e2.shadowMap.enabled && f3.length > 0, shadowMapType: e2.shadowMap.type, toneMapping: be2, decodeVideoTexture: V2 && true === o3.map.isVideoTexture && yi.getTransfer(o3.map.colorSpace) === Qe, decodeVideoTextureEmissive: j2 && true === o3.emissiveMap.isVideoTexture && yi.getTransfer(o3.emissiveMap.colorSpace) === Qe, premultipliedAlpha: o3.premultipliedAlpha, doubleSided: o3.side === p, flipSided: o3.side === d, useDepthPacking: o3.depthPacking >= 0, depthPacking: o3.depthPacking || 0, index0AttributeName: o3.index0AttributeName, extensionClipCullDistance: Ae2 && true === o3.extensions.clipCullDistance && r2.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (Ae2 && true === o3.extensions.multiDraw || G2) && r2.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: r2.has("KHR_parallel_shader_compile"), customProgramCacheKey: o3.customProgramCacheKey() };
      return Ce2.vertexUv1s = u2.has(1), Ce2.vertexUv2s = u2.has(2), Ce2.vertexUv3s = u2.has(3), u2.clear(), Ce2;
    }, getProgramCacheKey: function(t3) {
      const n3 = [];
      if (t3.shaderID ? n3.push(t3.shaderID) : (n3.push(t3.customVertexShaderID), n3.push(t3.customFragmentShaderID)), void 0 !== t3.defines) for (const e3 in t3.defines) n3.push(e3), n3.push(t3.defines[e3]);
      return false === t3.isRawShaderMaterial && (!function(e3, t4) {
        e3.push(t4.precision), e3.push(t4.outputColorSpace), e3.push(t4.envMapMode), e3.push(t4.envMapCubeUVHeight), e3.push(t4.mapUv), e3.push(t4.alphaMapUv), e3.push(t4.lightMapUv), e3.push(t4.aoMapUv), e3.push(t4.bumpMapUv), e3.push(t4.normalMapUv), e3.push(t4.displacementMapUv), e3.push(t4.emissiveMapUv), e3.push(t4.metalnessMapUv), e3.push(t4.roughnessMapUv), e3.push(t4.anisotropyMapUv), e3.push(t4.clearcoatMapUv), e3.push(t4.clearcoatNormalMapUv), e3.push(t4.clearcoatRoughnessMapUv), e3.push(t4.iridescenceMapUv), e3.push(t4.iridescenceThicknessMapUv), e3.push(t4.sheenColorMapUv), e3.push(t4.sheenRoughnessMapUv), e3.push(t4.specularMapUv), e3.push(t4.specularColorMapUv), e3.push(t4.specularIntensityMapUv), e3.push(t4.transmissionMapUv), e3.push(t4.thicknessMapUv), e3.push(t4.combine), e3.push(t4.fogExp2), e3.push(t4.sizeAttenuation), e3.push(t4.morphTargetsCount), e3.push(t4.morphAttributeCount), e3.push(t4.numDirLights), e3.push(t4.numPointLights), e3.push(t4.numSpotLights), e3.push(t4.numSpotLightMaps), e3.push(t4.numHemiLights), e3.push(t4.numRectAreaLights), e3.push(t4.numDirLightShadows), e3.push(t4.numPointLightShadows), e3.push(t4.numSpotLightShadows), e3.push(t4.numSpotLightShadowsWithMaps), e3.push(t4.numLightProbes), e3.push(t4.shadowMapType), e3.push(t4.toneMapping), e3.push(t4.numClippingPlanes), e3.push(t4.numClipIntersection), e3.push(t4.depthPacking);
      }(n3, t3), function(e3, t4) {
        l2.disableAll(), t4.supportsVertexTextures && l2.enable(0);
        t4.instancing && l2.enable(1);
        t4.instancingColor && l2.enable(2);
        t4.instancingMorph && l2.enable(3);
        t4.matcap && l2.enable(4);
        t4.envMap && l2.enable(5);
        t4.normalMapObjectSpace && l2.enable(6);
        t4.normalMapTangentSpace && l2.enable(7);
        t4.clearcoat && l2.enable(8);
        t4.iridescence && l2.enable(9);
        t4.alphaTest && l2.enable(10);
        t4.vertexColors && l2.enable(11);
        t4.vertexAlphas && l2.enable(12);
        t4.vertexUv1s && l2.enable(13);
        t4.vertexUv2s && l2.enable(14);
        t4.vertexUv3s && l2.enable(15);
        t4.vertexTangents && l2.enable(16);
        t4.anisotropy && l2.enable(17);
        t4.alphaHash && l2.enable(18);
        t4.batching && l2.enable(19);
        t4.dispersion && l2.enable(20);
        t4.batchingColor && l2.enable(21);
        t4.gradientMap && l2.enable(22);
        e3.push(l2.mask), l2.disableAll(), t4.fog && l2.enable(0);
        t4.useFog && l2.enable(1);
        t4.flatShading && l2.enable(2);
        t4.logarithmicDepthBuffer && l2.enable(3);
        t4.reversedDepthBuffer && l2.enable(4);
        t4.skinning && l2.enable(5);
        t4.morphTargets && l2.enable(6);
        t4.morphNormals && l2.enable(7);
        t4.morphColors && l2.enable(8);
        t4.premultipliedAlpha && l2.enable(9);
        t4.shadowMapEnabled && l2.enable(10);
        t4.doubleSided && l2.enable(11);
        t4.flipSided && l2.enable(12);
        t4.useDepthPacking && l2.enable(13);
        t4.dithering && l2.enable(14);
        t4.transmission && l2.enable(15);
        t4.sheen && l2.enable(16);
        t4.opaque && l2.enable(17);
        t4.pointsUvs && l2.enable(18);
        t4.decodeVideoTexture && l2.enable(19);
        t4.decodeVideoTextureEmissive && l2.enable(20);
        t4.alphaToCoverage && l2.enable(21);
        e3.push(l2.mask);
      }(n3, t3), n3.push(e2.outputColorSpace)), n3.push(t3.customProgramCacheKey), n3.join();
    }, getUniforms: function(e3) {
      const t3 = v2[e3.type];
      let n3;
      if (t3) {
        const e4 = Dn2[t3];
        n3 = Xn.clone(e4.uniforms);
      } else n3 = e3.uniforms;
      return n3;
    }, acquireProgram: function(t3, n3) {
      let r3;
      for (let e3 = 0, t4 = f2.length; e3 < t4; e3++) {
        const t5 = f2[e3];
        if (t5.cacheKey === n3) {
          r3 = t5, ++r3.usedTimes;
          break;
        }
      }
      return void 0 === r3 && (r3 = new Oi2(e2, n3, t3, o2), f2.push(r3)), r3;
    }, releaseProgram: function(e3) {
      if (0 === --e3.usedTimes) {
        const t3 = f2.indexOf(e3);
        f2[t3] = f2[f2.length - 1], f2.pop(), e3.destroy();
      }
    }, releaseShaderCache: function(e3) {
      d2.remove(e3);
    }, programs: f2, dispose: function() {
      d2.dispose();
    } };
  }
  function Vi2() {
    let e2 = /* @__PURE__ */ new WeakMap();
    return { has: function(t2) {
      return e2.has(t2);
    }, get: function(t2) {
      let n2 = e2.get(t2);
      return void 0 === n2 && (n2 = {}, e2.set(t2, n2)), n2;
    }, remove: function(t2) {
      e2.delete(t2);
    }, update: function(t2, n2, r2) {
      e2.get(t2)[n2] = r2;
    }, dispose: function() {
      e2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  function zi2(e2, t2) {
    return e2.groupOrder !== t2.groupOrder ? e2.groupOrder - t2.groupOrder : e2.renderOrder !== t2.renderOrder ? e2.renderOrder - t2.renderOrder : e2.material.id !== t2.material.id ? e2.material.id - t2.material.id : e2.z !== t2.z ? e2.z - t2.z : e2.id - t2.id;
  }
  function ki2(e2, t2) {
    return e2.groupOrder !== t2.groupOrder ? e2.groupOrder - t2.groupOrder : e2.renderOrder !== t2.renderOrder ? e2.renderOrder - t2.renderOrder : e2.z !== t2.z ? t2.z - e2.z : e2.id - t2.id;
  }
  function Wi2() {
    const e2 = [];
    let t2 = 0;
    const n2 = [], r2 = [], i2 = [];
    function a2(n3, r3, i3, a3, o2, s2) {
      let l2 = e2[t2];
      return void 0 === l2 ? (l2 = { id: n3.id, object: n3, geometry: r3, material: i3, groupOrder: a3, renderOrder: n3.renderOrder, z: o2, group: s2 }, e2[t2] = l2) : (l2.id = n3.id, l2.object = n3, l2.geometry = r3, l2.material = i3, l2.groupOrder = a3, l2.renderOrder = n3.renderOrder, l2.z = o2, l2.group = s2), t2++, l2;
    }
    return { opaque: n2, transmissive: r2, transparent: i2, init: function() {
      t2 = 0, n2.length = 0, r2.length = 0, i2.length = 0;
    }, push: function(e3, t3, o2, s2, l2, c2) {
      const d2 = a2(e3, t3, o2, s2, l2, c2);
      o2.transmission > 0 ? r2.push(d2) : true === o2.transparent ? i2.push(d2) : n2.push(d2);
    }, unshift: function(e3, t3, o2, s2, l2, c2) {
      const d2 = a2(e3, t3, o2, s2, l2, c2);
      o2.transmission > 0 ? r2.unshift(d2) : true === o2.transparent ? i2.unshift(d2) : n2.unshift(d2);
    }, finish: function() {
      for (let n3 = t2, r3 = e2.length; n3 < r3; n3++) {
        const t3 = e2[n3];
        if (null === t3.id) break;
        t3.id = null, t3.object = null, t3.geometry = null, t3.material = null, t3.group = null;
      }
    }, sort: function(e3, t3) {
      n2.length > 1 && n2.sort(e3 || zi2), r2.length > 1 && r2.sort(t3 || ki2), i2.length > 1 && i2.sort(t3 || ki2);
    } };
  }
  function Xi2() {
    let e2 = /* @__PURE__ */ new WeakMap();
    return { get: function(t2, n2) {
      const r2 = e2.get(t2);
      let i2;
      return void 0 === r2 ? (i2 = new Wi2(), e2.set(t2, [i2])) : n2 >= r2.length ? (i2 = new Wi2(), r2.push(i2)) : i2 = r2[n2], i2;
    }, dispose: function() {
      e2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  function Yi2() {
    const e2 = {};
    return { get: function(t2) {
      if (void 0 !== e2[t2.id]) return e2[t2.id];
      let r2;
      switch (t2.type) {
        case "DirectionalLight":
          r2 = { direction: new Ks(), color: new Qr() };
          break;
        case "SpotLight":
          r2 = { position: new Ks(), direction: new Ks(), color: new Qr(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
          break;
        case "PointLight":
          r2 = { position: new Ks(), color: new Qr(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          r2 = { direction: new Ks(), skyColor: new Qr(), groundColor: new Qr() };
          break;
        case "RectAreaLight":
          r2 = { color: new Qr(), position: new Ks(), halfWidth: new Ks(), halfHeight: new Ks() };
      }
      return e2[t2.id] = r2, r2;
    } };
  }
  var Ki2 = 0;
  function qi2(e2, t2) {
    return (t2.castShadow ? 2 : 0) - (e2.castShadow ? 2 : 0) + (t2.map ? 1 : 0) - (e2.map ? 1 : 0);
  }
  function ji2(e2) {
    const n2 = new Yi2(), r2 = /* @__PURE__ */ function() {
      const e3 = {};
      return { get: function(n3) {
        if (void 0 !== e3[n3.id]) return e3[n3.id];
        let r3;
        switch (n3.type) {
          case "DirectionalLight":
          case "SpotLight":
            r3 = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new $s() };
            break;
          case "PointLight":
            r3 = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new $s(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        }
        return e3[n3.id] = r3, r3;
      } };
    }(), a2 = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
    for (let e3 = 0; e3 < 9; e3++) a2.probe.push(new Ks());
    const o2 = new Ks(), s2 = new ar(), l2 = new ar();
    return { setup: function(t2) {
      let i2 = 0, o3 = 0, s3 = 0;
      for (let e3 = 0; e3 < 9; e3++) a2.probe[e3].set(0, 0, 0);
      let l3 = 0, c2 = 0, d2 = 0, u2 = 0, f2 = 0, p2 = 0, m2 = 0, h2 = 0, _2 = 0, g2 = 0, v2 = 0;
      t2.sort(qi2);
      for (let e3 = 0, E3 = t2.length; e3 < E3; e3++) {
        const E4 = t2[e3], S2 = E4.color, T2 = E4.intensity, M2 = E4.distance, x2 = E4.shadow && E4.shadow.map ? E4.shadow.map.texture : null;
        if (E4.isAmbientLight) i2 += S2.r * T2, o3 += S2.g * T2, s3 += S2.b * T2;
        else if (E4.isLightProbe) {
          for (let e4 = 0; e4 < 9; e4++) a2.probe[e4].addScaledVector(E4.sh.coefficients[e4], T2);
          v2++;
        } else if (E4.isDirectionalLight) {
          const e4 = n2.get(E4);
          if (e4.color.copy(E4.color).multiplyScalar(E4.intensity), E4.castShadow) {
            const e5 = E4.shadow, t3 = r2.get(E4);
            t3.shadowIntensity = e5.intensity, t3.shadowBias = e5.bias, t3.shadowNormalBias = e5.normalBias, t3.shadowRadius = e5.radius, t3.shadowMapSize = e5.mapSize, a2.directionalShadow[l3] = t3, a2.directionalShadowMap[l3] = x2, a2.directionalShadowMatrix[l3] = E4.shadow.matrix, p2++;
          }
          a2.directional[l3] = e4, l3++;
        } else if (E4.isSpotLight) {
          const e4 = n2.get(E4);
          e4.position.setFromMatrixPosition(E4.matrixWorld), e4.color.copy(S2).multiplyScalar(T2), e4.distance = M2, e4.coneCos = Math.cos(E4.angle), e4.penumbraCos = Math.cos(E4.angle * (1 - E4.penumbra)), e4.decay = E4.decay, a2.spot[d2] = e4;
          const t3 = E4.shadow;
          if (E4.map && (a2.spotLightMap[_2] = E4.map, _2++, t3.updateMatrices(E4), E4.castShadow && g2++), a2.spotLightMatrix[d2] = t3.matrix, E4.castShadow) {
            const e5 = r2.get(E4);
            e5.shadowIntensity = t3.intensity, e5.shadowBias = t3.bias, e5.shadowNormalBias = t3.normalBias, e5.shadowRadius = t3.radius, e5.shadowMapSize = t3.mapSize, a2.spotShadow[d2] = e5, a2.spotShadowMap[d2] = x2, h2++;
          }
          d2++;
        } else if (E4.isRectAreaLight) {
          const e4 = n2.get(E4);
          e4.color.copy(S2).multiplyScalar(T2), e4.halfWidth.set(0.5 * E4.width, 0, 0), e4.halfHeight.set(0, 0.5 * E4.height, 0), a2.rectArea[u2] = e4, u2++;
        } else if (E4.isPointLight) {
          const e4 = n2.get(E4);
          if (e4.color.copy(E4.color).multiplyScalar(E4.intensity), e4.distance = E4.distance, e4.decay = E4.decay, E4.castShadow) {
            const e5 = E4.shadow, t3 = r2.get(E4);
            t3.shadowIntensity = e5.intensity, t3.shadowBias = e5.bias, t3.shadowNormalBias = e5.normalBias, t3.shadowRadius = e5.radius, t3.shadowMapSize = e5.mapSize, t3.shadowCameraNear = e5.camera.near, t3.shadowCameraFar = e5.camera.far, a2.pointShadow[c2] = t3, a2.pointShadowMap[c2] = x2, a2.pointShadowMatrix[c2] = E4.shadow.matrix, m2++;
          }
          a2.point[c2] = e4, c2++;
        } else if (E4.isHemisphereLight) {
          const e4 = n2.get(E4);
          e4.skyColor.copy(E4.color).multiplyScalar(T2), e4.groundColor.copy(E4.groundColor).multiplyScalar(T2), a2.hemi[f2] = e4, f2++;
        }
      }
      u2 > 0 && (true === e2.has("OES_texture_float_linear") ? (a2.rectAreaLTC1 = Un2.LTC_FLOAT_1, a2.rectAreaLTC2 = Un2.LTC_FLOAT_2) : (a2.rectAreaLTC1 = Un2.LTC_HALF_1, a2.rectAreaLTC2 = Un2.LTC_HALF_2)), a2.ambient[0] = i2, a2.ambient[1] = o3, a2.ambient[2] = s3;
      const E2 = a2.hash;
      E2.directionalLength === l3 && E2.pointLength === c2 && E2.spotLength === d2 && E2.rectAreaLength === u2 && E2.hemiLength === f2 && E2.numDirectionalShadows === p2 && E2.numPointShadows === m2 && E2.numSpotShadows === h2 && E2.numSpotMaps === _2 && E2.numLightProbes === v2 || (a2.directional.length = l3, a2.spot.length = d2, a2.rectArea.length = u2, a2.point.length = c2, a2.hemi.length = f2, a2.directionalShadow.length = p2, a2.directionalShadowMap.length = p2, a2.pointShadow.length = m2, a2.pointShadowMap.length = m2, a2.spotShadow.length = h2, a2.spotShadowMap.length = h2, a2.directionalShadowMatrix.length = p2, a2.pointShadowMatrix.length = m2, a2.spotLightMatrix.length = h2 + _2 - g2, a2.spotLightMap.length = _2, a2.numSpotLightShadowsWithMaps = g2, a2.numLightProbes = v2, E2.directionalLength = l3, E2.pointLength = c2, E2.spotLength = d2, E2.rectAreaLength = u2, E2.hemiLength = f2, E2.numDirectionalShadows = p2, E2.numPointShadows = m2, E2.numSpotShadows = h2, E2.numSpotMaps = _2, E2.numLightProbes = v2, a2.version = Ki2++);
    }, setupView: function(e3, t2) {
      let n3 = 0, r3 = 0, i2 = 0, c2 = 0, d2 = 0;
      const u2 = t2.matrixWorldInverse;
      for (let t3 = 0, f2 = e3.length; t3 < f2; t3++) {
        const f3 = e3[t3];
        if (f3.isDirectionalLight) {
          const e4 = a2.directional[n3];
          e4.direction.setFromMatrixPosition(f3.matrixWorld), o2.setFromMatrixPosition(f3.target.matrixWorld), e4.direction.sub(o2), e4.direction.transformDirection(u2), n3++;
        } else if (f3.isSpotLight) {
          const e4 = a2.spot[i2];
          e4.position.setFromMatrixPosition(f3.matrixWorld), e4.position.applyMatrix4(u2), e4.direction.setFromMatrixPosition(f3.matrixWorld), o2.setFromMatrixPosition(f3.target.matrixWorld), e4.direction.sub(o2), e4.direction.transformDirection(u2), i2++;
        } else if (f3.isRectAreaLight) {
          const e4 = a2.rectArea[c2];
          e4.position.setFromMatrixPosition(f3.matrixWorld), e4.position.applyMatrix4(u2), l2.identity(), s2.copy(f3.matrixWorld), s2.premultiply(u2), l2.extractRotation(s2), e4.halfWidth.set(0.5 * f3.width, 0, 0), e4.halfHeight.set(0, 0.5 * f3.height, 0), e4.halfWidth.applyMatrix4(l2), e4.halfHeight.applyMatrix4(l2), c2++;
        } else if (f3.isPointLight) {
          const e4 = a2.point[r3];
          e4.position.setFromMatrixPosition(f3.matrixWorld), e4.position.applyMatrix4(u2), r3++;
        } else if (f3.isHemisphereLight) {
          const e4 = a2.hemi[d2];
          e4.direction.setFromMatrixPosition(f3.matrixWorld), e4.direction.transformDirection(u2), d2++;
        }
      }
    }, state: a2 };
  }
  function Zi2(e2) {
    const t2 = new ji2(e2), n2 = [], r2 = [];
    const i2 = { lightsArray: n2, shadowsArray: r2, camera: null, lights: t2, transmissionRenderTarget: {} };
    return { init: function(e3) {
      i2.camera = e3, n2.length = 0, r2.length = 0;
    }, state: i2, setupLights: function() {
      t2.setup(n2);
    }, setupLightsView: function(e3) {
      t2.setupView(n2, e3);
    }, pushLight: function(e3) {
      n2.push(e3);
    }, pushShadow: function(e3) {
      r2.push(e3);
    } };
  }
  function $i2(e2) {
    let t2 = /* @__PURE__ */ new WeakMap();
    return { get: function(n2, r2 = 0) {
      const i2 = t2.get(n2);
      let a2;
      return void 0 === i2 ? (a2 = new Zi2(e2), t2.set(n2, [a2])) : r2 >= i2.length ? (a2 = new Zi2(e2), i2.push(a2)) : a2 = i2[r2], a2;
    }, dispose: function() {
      t2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  function Qi2(e2, n2, r2) {
    let i2 = new lo();
    const a2 = new $s(), s2 = new $s(), d2 = new Ti(), u2 = new Ul({ depthPacking: Ue }), f2 = new Hl(), p2 = {}, m2 = r2.maxTextureSize, h2 = { [u]: d, [d]: u, [p]: p }, g2 = new Yn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new $s() }, radius: { value: 4 } }, vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}" }), v2 = g2.clone();
    v2.defines.HORIZONTAL_PASS = 1;
    const E2 = new In();
    E2.setAttribute("position", new dn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
    const S2 = new Dn(E2, g2), T2 = this;
    this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = h;
    let M2 = this.type;
    function x2(t2, r3) {
      const i3 = n2.update(S2);
      g2.defines.VSM_SAMPLES !== t2.blurSamples && (g2.defines.VSM_SAMPLES = t2.blurSamples, v2.defines.VSM_SAMPLES = t2.blurSamples, g2.needsUpdate = true, v2.needsUpdate = true), null === t2.mapPass && (t2.mapPass = new Ci(a2.x, a2.y)), g2.uniforms.shadow_pass.value = t2.map.texture, g2.uniforms.resolution.value = t2.mapSize, g2.uniforms.radius.value = t2.radius, e2.setRenderTarget(t2.mapPass), e2.clear(), e2.renderBufferDirect(r3, null, i3, g2, S2, null), v2.uniforms.shadow_pass.value = t2.mapPass.texture, v2.uniforms.resolution.value = t2.mapSize, v2.uniforms.radius.value = t2.radius, e2.setRenderTarget(t2.map), e2.clear(), e2.renderBufferDirect(r3, null, i3, v2, S2, null);
    }
    function R2(t2, n3, r3, i3) {
      let a3 = null;
      const o2 = true === r3.isPointLight ? t2.customDistanceMaterial : t2.customDepthMaterial;
      if (void 0 !== o2) a3 = o2;
      else if (a3 = true === r3.isPointLight ? f2 : u2, e2.localClippingEnabled && true === n3.clipShadows && Array.isArray(n3.clippingPlanes) && 0 !== n3.clippingPlanes.length || n3.displacementMap && 0 !== n3.displacementScale || n3.alphaMap && n3.alphaTest > 0 || n3.map && n3.alphaTest > 0 || true === n3.alphaToCoverage) {
        const e3 = a3.uuid, t3 = n3.uuid;
        let r4 = p2[e3];
        void 0 === r4 && (r4 = {}, p2[e3] = r4);
        let i4 = r4[t3];
        void 0 === i4 && (i4 = a3.clone(), r4[t3] = i4, n3.addEventListener("dispose", b2)), a3 = i4;
      }
      if (a3.visible = n3.visible, a3.wireframe = n3.wireframe, a3.side = i3 === c ? null !== n3.shadowSide ? n3.shadowSide : n3.side : null !== n3.shadowSide ? n3.shadowSide : h2[n3.side], a3.alphaMap = n3.alphaMap, a3.alphaTest = true === n3.alphaToCoverage ? 0.5 : n3.alphaTest, a3.map = n3.map, a3.clipShadows = n3.clipShadows, a3.clippingPlanes = n3.clippingPlanes, a3.clipIntersection = n3.clipIntersection, a3.displacementMap = n3.displacementMap, a3.displacementScale = n3.displacementScale, a3.displacementBias = n3.displacementBias, a3.wireframeLinewidth = n3.wireframeLinewidth, a3.linewidth = n3.linewidth, true === r3.isPointLight && true === a3.isMeshDistanceMaterial) {
        e2.properties.get(a3).light = r3;
      }
      return a3;
    }
    function A2(t2, r3, a3, o2, s3) {
      if (false === t2.visible) return;
      if (t2.layers.test(r3.layers) && (t2.isMesh || t2.isLine || t2.isPoints) && (t2.castShadow || t2.receiveShadow && s3 === c) && (!t2.frustumCulled || i2.intersectsObject(t2))) {
        t2.modelViewMatrix.multiplyMatrices(a3.matrixWorldInverse, t2.matrixWorld);
        const i3 = n2.update(t2), l3 = t2.material;
        if (Array.isArray(l3)) {
          const n3 = i3.groups;
          for (let c2 = 0, d3 = n3.length; c2 < d3; c2++) {
            const d4 = n3[c2], u3 = l3[d4.materialIndex];
            if (u3 && u3.visible) {
              const n4 = R2(t2, u3, o2, s3);
              t2.onBeforeShadow(e2, t2, r3, a3, i3, n4, d4), e2.renderBufferDirect(a3, null, i3, n4, t2, d4), t2.onAfterShadow(e2, t2, r3, a3, i3, n4, d4);
            }
          }
        } else if (l3.visible) {
          const n3 = R2(t2, l3, o2, s3);
          t2.onBeforeShadow(e2, t2, r3, a3, i3, n3, null), e2.renderBufferDirect(a3, null, i3, n3, t2, null), t2.onAfterShadow(e2, t2, r3, a3, i3, n3, null);
        }
      }
      const l2 = t2.children;
      for (let e3 = 0, t3 = l2.length; e3 < t3; e3++) A2(l2[e3], r3, a3, o2, s3);
    }
    function b2(e3) {
      e3.target.removeEventListener("dispose", b2);
      for (const t2 in p2) {
        const n3 = p2[t2], r3 = e3.target.uuid;
        if (r3 in n3) {
          n3[r3].dispose(), delete n3[r3];
        }
      }
    }
    this.render = function(t2, n3, r3) {
      if (false === T2.enabled) return;
      if (false === T2.autoUpdate && false === T2.needsUpdate) return;
      if (0 === t2.length) return;
      const o2 = e2.getRenderTarget(), l2 = e2.getActiveCubeFace(), c2 = e2.getActiveMipmapLevel(), u3 = e2.state;
      u3.setBlending(m), true === u3.buffers.depth.getReversed() ? u3.buffers.color.setClear(0, 0, 0, 0) : u3.buffers.color.setClear(1, 1, 1, 1), u3.buffers.depth.setTest(true), u3.setScissorTest(false);
      const f3 = M2 !== c && this.type === c, p3 = M2 === c && this.type !== c;
      for (let o3 = 0, l3 = t2.length; o3 < l3; o3++) {
        const l4 = t2[o3], c3 = l4.shadow;
        if (void 0 === c3) {
          console.warn("THREE.WebGLShadowMap:", l4, "has no shadow.");
          continue;
        }
        if (false === c3.autoUpdate && false === c3.needsUpdate) continue;
        a2.copy(c3.mapSize);
        const h3 = c3.getFrameExtents();
        if (a2.multiply(h3), s2.copy(c3.mapSize), (a2.x > m2 || a2.y > m2) && (a2.x > m2 && (s2.x = Math.floor(m2 / h3.x), a2.x = s2.x * h3.x, c3.mapSize.x = s2.x), a2.y > m2 && (s2.y = Math.floor(m2 / h3.y), a2.y = s2.y * h3.y, c3.mapSize.y = s2.y)), null === c3.map || true === f3 || true === p3) {
          const e3 = this.type !== c ? { minFilter: gt, magFilter: gt } : {};
          null !== c3.map && c3.map.dispose(), c3.map = new Ci(a2.x, a2.y, e3), c3.map.texture.name = l4.name + ".shadowMap", c3.camera.updateProjectionMatrix();
        }
        e2.setRenderTarget(c3.map), e2.clear();
        const _2 = c3.getViewportCount();
        for (let e3 = 0; e3 < _2; e3++) {
          const t3 = c3.getViewport(e3);
          d2.set(s2.x * t3.x, s2.y * t3.y, s2.x * t3.z, s2.y * t3.w), u3.viewport(d2), c3.updateMatrices(l4, e3), i2 = c3.getFrustum(), A2(n3, r3, c3.camera, l4, this.type);
        }
        true !== c3.isPointLightShadow && this.type === c && x2(c3, r3), c3.needsUpdate = false;
      }
      M2 = this.type, T2.needsUpdate = false, e2.setRenderTarget(o2, l2, c2);
    };
  }
  var Ji2 = { [j]: D, [W]: J, [H]: X, [U]: q, [D]: j, [J]: W, [X]: H, [q]: U };
  function ea2(e2, t2) {
    const r2 = new function() {
      let t3 = false;
      const n2 = new Ti();
      let r3 = null;
      const i3 = new Ti(0, 0, 0, 0);
      return { setMask: function(n3) {
        r3 === n3 || t3 || (e2.colorMask(n3, n3, n3, n3), r3 = n3);
      }, setLocked: function(e3) {
        t3 = e3;
      }, setClear: function(t4, r4, a3, o3, s3) {
        true === s3 && (t4 *= o3, r4 *= o3, a3 *= o3), n2.set(t4, r4, a3, o3), false === i3.equals(n2) && (e2.clearColor(t4, r4, a3, o3), i3.copy(n2));
      }, reset: function() {
        t3 = false, r3 = null, i3.set(-1, 0, 0, 0);
      } };
    }(), i2 = new function() {
      let n2 = false, r3 = false, i3 = null, a3 = null, o3 = null;
      return { setReversed: function(e3) {
        if (r3 !== e3) {
          const n3 = t2.get("EXT_clip_control");
          e3 ? n3.clipControlEXT(n3.LOWER_LEFT_EXT, n3.ZERO_TO_ONE_EXT) : n3.clipControlEXT(n3.LOWER_LEFT_EXT, n3.NEGATIVE_ONE_TO_ONE_EXT), r3 = e3;
          const i4 = o3;
          o3 = null, this.setClear(i4);
        }
      }, getReversed: function() {
        return r3;
      }, setTest: function(t3) {
        t3 ? W2(e2.DEPTH_TEST) : X2(e2.DEPTH_TEST);
      }, setMask: function(t3) {
        i3 === t3 || n2 || (e2.depthMask(t3), i3 = t3);
      }, setFunc: function(t3) {
        if (r3 && (t3 = Ji2[t3]), a3 !== t3) {
          switch (t3) {
            case j:
              e2.depthFunc(e2.NEVER);
              break;
            case D:
              e2.depthFunc(e2.ALWAYS);
              break;
            case W:
              e2.depthFunc(e2.LESS);
              break;
            case U:
              e2.depthFunc(e2.LEQUAL);
              break;
            case H:
              e2.depthFunc(e2.EQUAL);
              break;
            case q:
              e2.depthFunc(e2.GEQUAL);
              break;
            case J:
              e2.depthFunc(e2.GREATER);
              break;
            case X:
              e2.depthFunc(e2.NOTEQUAL);
              break;
            default:
              e2.depthFunc(e2.LEQUAL);
          }
          a3 = t3;
        }
      }, setLocked: function(e3) {
        n2 = e3;
      }, setClear: function(t3) {
        o3 !== t3 && (r3 && (t3 = 1 - t3), e2.clearDepth(t3), o3 = t3);
      }, reset: function() {
        n2 = false, i3 = null, a3 = null, o3 = null, r3 = false;
      } };
    }(), a2 = new function() {
      let t3 = false, n2 = null, r3 = null, i3 = null, a3 = null, o3 = null, s3 = null, l3 = null, c2 = null;
      return { setTest: function(n3) {
        t3 || (n3 ? W2(e2.STENCIL_TEST) : X2(e2.STENCIL_TEST));
      }, setMask: function(r4) {
        n2 === r4 || t3 || (e2.stencilMask(r4), n2 = r4);
      }, setFunc: function(t4, n3, o4) {
        r3 === t4 && i3 === n3 && a3 === o4 || (e2.stencilFunc(t4, n3, o4), r3 = t4, i3 = n3, a3 = o4);
      }, setOp: function(t4, n3, r4) {
        o3 === t4 && s3 === n3 && l3 === r4 || (e2.stencilOp(t4, n3, r4), o3 = t4, s3 = n3, l3 = r4);
      }, setLocked: function(e3) {
        t3 = e3;
      }, setClear: function(t4) {
        c2 !== t4 && (e2.clearStencil(t4), c2 = t4);
      }, reset: function() {
        t3 = false, n2 = null, r3 = null, i3 = null, a3 = null, o3 = null, s3 = null, l3 = null, c2 = null;
      } };
    }(), o2 = /* @__PURE__ */ new WeakMap(), s2 = /* @__PURE__ */ new WeakMap();
    let l2 = {}, d2 = {}, u2 = /* @__PURE__ */ new WeakMap(), f2 = [], p2 = null, m2 = false, h2 = null, _2 = null, g2 = null, v2 = null, E2 = null, S2 = null, T2 = null, M2 = new Qr(0, 0, 0), x2 = 0, R2 = false, A2 = null, b2 = null, C2 = null, L2 = null, P2 = null;
    const U2 = e2.getParameter(e2.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let D2 = false, w2 = 0;
    const y2 = e2.getParameter(e2.VERSION);
    -1 !== y2.indexOf("WebGL") ? (w2 = parseFloat(/^WebGL (\d)/.exec(y2)[1]), D2 = w2 >= 1) : -1 !== y2.indexOf("OpenGL ES") && (w2 = parseFloat(/^OpenGL ES (\d)/.exec(y2)[1]), D2 = w2 >= 2);
    let N2 = null, O2 = {};
    const F2 = e2.getParameter(e2.SCISSOR_BOX), B2 = e2.getParameter(e2.VIEWPORT), H2 = new Ti().fromArray(F2), G2 = new Ti().fromArray(B2);
    function V2(t3, n2, r3, i3) {
      const a3 = new Uint8Array(4), o3 = e2.createTexture();
      e2.bindTexture(t3, o3), e2.texParameteri(t3, e2.TEXTURE_MIN_FILTER, e2.NEAREST), e2.texParameteri(t3, e2.TEXTURE_MAG_FILTER, e2.NEAREST);
      for (let o4 = 0; o4 < r3; o4++) t3 === e2.TEXTURE_3D || t3 === e2.TEXTURE_2D_ARRAY ? e2.texImage3D(n2, 0, e2.RGBA, 1, 1, i3, 0, e2.RGBA, e2.UNSIGNED_BYTE, a3) : e2.texImage2D(n2 + o4, 0, e2.RGBA, 1, 1, 0, e2.RGBA, e2.UNSIGNED_BYTE, a3);
      return o3;
    }
    const z2 = {};
    function W2(t3) {
      true !== l2[t3] && (e2.enable(t3), l2[t3] = true);
    }
    function X2(t3) {
      false !== l2[t3] && (e2.disable(t3), l2[t3] = false);
    }
    z2[e2.TEXTURE_2D] = V2(e2.TEXTURE_2D, e2.TEXTURE_2D, 1), z2[e2.TEXTURE_CUBE_MAP] = V2(e2.TEXTURE_CUBE_MAP, e2.TEXTURE_CUBE_MAP_POSITIVE_X, 6), z2[e2.TEXTURE_2D_ARRAY] = V2(e2.TEXTURE_2D_ARRAY, e2.TEXTURE_2D_ARRAY, 1, 1), z2[e2.TEXTURE_3D] = V2(e2.TEXTURE_3D, e2.TEXTURE_3D, 1, 1), r2.setClear(0, 0, 0, 1), i2.setClear(1), a2.setClear(0), W2(e2.DEPTH_TEST), i2.setFunc(U), j2(false), Z2(r), W2(e2.CULL_FACE), q2(m);
    const Y2 = { [v]: e2.FUNC_ADD, [w]: e2.FUNC_SUBTRACT, [M]: e2.FUNC_REVERSE_SUBTRACT };
    Y2[S] = e2.MIN, Y2[_] = e2.MAX;
    const K2 = { [A]: e2.ZERO, [T]: e2.ONE, [z]: e2.SRC_COLOR, [I]: e2.SRC_ALPHA, [O]: e2.SRC_ALPHA_SATURATE, [R]: e2.DST_COLOR, [k]: e2.DST_ALPHA, [C]: e2.ONE_MINUS_SRC_COLOR, [B]: e2.ONE_MINUS_SRC_ALPHA, [P]: e2.ONE_MINUS_DST_COLOR, [E]: e2.ONE_MINUS_DST_ALPHA, [N]: e2.CONSTANT_COLOR, [V]: e2.ONE_MINUS_CONSTANT_COLOR, [F]: e2.CONSTANT_ALPHA, [L]: e2.ONE_MINUS_CONSTANT_ALPHA };
    function q2(t3, n2, r3, i3, a3, o3, s3, l3, c2, d3) {
      if (t3 !== m) {
        if (false === m2 && (W2(e2.BLEND), m2 = true), t3 === b) a3 = a3 || n2, o3 = o3 || r3, s3 = s3 || i3, n2 === _2 && a3 === E2 || (e2.blendEquationSeparate(Y2[n2], Y2[a3]), _2 = n2, E2 = a3), r3 === g2 && i3 === v2 && o3 === S2 && s3 === T2 || (e2.blendFuncSeparate(K2[r3], K2[i3], K2[o3], K2[s3]), g2 = r3, v2 = i3, S2 = o3, T2 = s3), false !== l3.equals(M2) && c2 === x2 || (e2.blendColor(l3.r, l3.g, l3.b, c2), M2.copy(l3), x2 = c2), h2 = t3, R2 = false;
        else if (t3 !== h2 || d3 !== R2) {
          if (_2 === v && E2 === v || (e2.blendEquation(e2.FUNC_ADD), _2 = v, E2 = v), d3) switch (t3) {
            case y:
              e2.blendFuncSeparate(e2.ONE, e2.ONE_MINUS_SRC_ALPHA, e2.ONE, e2.ONE_MINUS_SRC_ALPHA);
              break;
            case g:
              e2.blendFunc(e2.ONE, e2.ONE);
              break;
            case f:
              e2.blendFuncSeparate(e2.ZERO, e2.ONE_MINUS_SRC_COLOR, e2.ZERO, e2.ONE);
              break;
            case x:
              e2.blendFuncSeparate(e2.DST_COLOR, e2.ONE_MINUS_SRC_ALPHA, e2.ZERO, e2.ONE);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", t3);
          }
          else switch (t3) {
            case y:
              e2.blendFuncSeparate(e2.SRC_ALPHA, e2.ONE_MINUS_SRC_ALPHA, e2.ONE, e2.ONE_MINUS_SRC_ALPHA);
              break;
            case g:
              e2.blendFuncSeparate(e2.SRC_ALPHA, e2.ONE, e2.ONE, e2.ONE);
              break;
            case f:
              console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case x:
              console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", t3);
          }
          g2 = null, v2 = null, S2 = null, T2 = null, M2.set(0, 0, 0), x2 = 0, h2 = t3, R2 = d3;
        }
      } else true === m2 && (X2(e2.BLEND), m2 = false);
    }
    function j2(t3) {
      A2 !== t3 && (t3 ? e2.frontFace(e2.CW) : e2.frontFace(e2.CCW), A2 = t3);
    }
    function Z2(t3) {
      t3 !== i ? (W2(e2.CULL_FACE), t3 !== b2 && (t3 === r ? e2.cullFace(e2.BACK) : t3 === n ? e2.cullFace(e2.FRONT) : e2.cullFace(e2.FRONT_AND_BACK))) : X2(e2.CULL_FACE), b2 = t3;
    }
    function $2(t3, n2, r3) {
      t3 ? (W2(e2.POLYGON_OFFSET_FILL), L2 === n2 && P2 === r3 || (e2.polygonOffset(n2, r3), L2 = n2, P2 = r3)) : X2(e2.POLYGON_OFFSET_FILL);
    }
    return { buffers: { color: r2, depth: i2, stencil: a2 }, enable: W2, disable: X2, bindFramebuffer: function(t3, n2) {
      return d2[t3] !== n2 && (e2.bindFramebuffer(t3, n2), d2[t3] = n2, t3 === e2.DRAW_FRAMEBUFFER && (d2[e2.FRAMEBUFFER] = n2), t3 === e2.FRAMEBUFFER && (d2[e2.DRAW_FRAMEBUFFER] = n2), true);
    }, drawBuffers: function(t3, n2) {
      let r3 = f2, i3 = false;
      if (t3) {
        r3 = u2.get(n2), void 0 === r3 && (r3 = [], u2.set(n2, r3));
        const a3 = t3.textures;
        if (r3.length !== a3.length || r3[0] !== e2.COLOR_ATTACHMENT0) {
          for (let t4 = 0, n3 = a3.length; t4 < n3; t4++) r3[t4] = e2.COLOR_ATTACHMENT0 + t4;
          r3.length = a3.length, i3 = true;
        }
      } else r3[0] !== e2.BACK && (r3[0] = e2.BACK, i3 = true);
      i3 && e2.drawBuffers(r3);
    }, useProgram: function(t3) {
      return p2 !== t3 && (e2.useProgram(t3), p2 = t3, true);
    }, setBlending: q2, setMaterial: function(t3, n2) {
      t3.side === p ? X2(e2.CULL_FACE) : W2(e2.CULL_FACE);
      let o3 = t3.side === d;
      n2 && (o3 = !o3), j2(o3), t3.blending === y && false === t3.transparent ? q2(m) : q2(t3.blending, t3.blendEquation, t3.blendSrc, t3.blendDst, t3.blendEquationAlpha, t3.blendSrcAlpha, t3.blendDstAlpha, t3.blendColor, t3.blendAlpha, t3.premultipliedAlpha), i2.setFunc(t3.depthFunc), i2.setTest(t3.depthTest), i2.setMask(t3.depthWrite), r2.setMask(t3.colorWrite);
      const s3 = t3.stencilWrite;
      a2.setTest(s3), s3 && (a2.setMask(t3.stencilWriteMask), a2.setFunc(t3.stencilFunc, t3.stencilRef, t3.stencilFuncMask), a2.setOp(t3.stencilFail, t3.stencilZFail, t3.stencilZPass)), $2(t3.polygonOffset, t3.polygonOffsetFactor, t3.polygonOffsetUnits), true === t3.alphaToCoverage ? W2(e2.SAMPLE_ALPHA_TO_COVERAGE) : X2(e2.SAMPLE_ALPHA_TO_COVERAGE);
    }, setFlipSided: j2, setCullFace: Z2, setLineWidth: function(t3) {
      t3 !== C2 && (D2 && e2.lineWidth(t3), C2 = t3);
    }, setPolygonOffset: $2, setScissorTest: function(t3) {
      t3 ? W2(e2.SCISSOR_TEST) : X2(e2.SCISSOR_TEST);
    }, activeTexture: function(t3) {
      void 0 === t3 && (t3 = e2.TEXTURE0 + U2 - 1), N2 !== t3 && (e2.activeTexture(t3), N2 = t3);
    }, bindTexture: function(t3, n2, r3) {
      void 0 === r3 && (r3 = null === N2 ? e2.TEXTURE0 + U2 - 1 : N2);
      let i3 = O2[r3];
      void 0 === i3 && (i3 = { type: void 0, texture: void 0 }, O2[r3] = i3), i3.type === t3 && i3.texture === n2 || (N2 !== r3 && (e2.activeTexture(r3), N2 = r3), e2.bindTexture(t3, n2 || z2[t3]), i3.type = t3, i3.texture = n2);
    }, unbindTexture: function() {
      const t3 = O2[N2];
      void 0 !== t3 && void 0 !== t3.type && (e2.bindTexture(t3.type, null), t3.type = void 0, t3.texture = void 0);
    }, compressedTexImage2D: function() {
      try {
        e2.compressedTexImage2D(...arguments);
      } catch (e3) {
        console.error("THREE.WebGLState:", e3);
      }
    }, compressedTexImage3D: function() {
      try {
        e2.compressedTexImage3D(...arguments);
      } catch (e3) {
        console.error("THREE.WebGLState:", e3);
      }
    }, texImage2D: function() {
      try {
        e2.texImage2D(...arguments);
      } catch (e3) {
        console.error("THREE.WebGLState:", e3);
      }
    }, texImage3D: function() {
      try {
        e2.texImage3D(...arguments);
      } catch (e3) {
        console.error("THREE.WebGLState:", e3);
      }
    }, updateUBOMapping: function(t3, n2) {
      let r3 = s2.get(n2);
      void 0 === r3 && (r3 = /* @__PURE__ */ new WeakMap(), s2.set(n2, r3));
      let i3 = r3.get(t3);
      void 0 === i3 && (i3 = e2.getUniformBlockIndex(n2, t3.name), r3.set(t3, i3));
    }, uniformBlockBinding: function(t3, n2) {
      const r3 = s2.get(n2).get(t3);
      o2.get(n2) !== r3 && (e2.uniformBlockBinding(n2, r3, t3.__bindingPointIndex), o2.set(n2, r3));
    }, texStorage2D: function() {
      try {
        e2.texStorage2D(...arguments);
      } catch (e3) {
        console.error("THREE.WebGLState:", e3);
      }
    }, texStorage3D: function() {
      try {
        e2.texStorage3D(...arguments);
      } catch (e3) {
        console.error("THREE.WebGLState:", e3);
      }
    }, texSubImage2D: function() {
      try {
        e2.texSubImage2D(...arguments);
      } catch (e3) {
        console.error("THREE.WebGLState:", e3);
      }
    }, texSubImage3D: function() {
      try {
        e2.texSubImage3D(...arguments);
      } catch (e3) {
        console.error("THREE.WebGLState:", e3);
      }
    }, compressedTexSubImage2D: function() {
      try {
        e2.compressedTexSubImage2D(...arguments);
      } catch (e3) {
        console.error("THREE.WebGLState:", e3);
      }
    }, compressedTexSubImage3D: function() {
      try {
        e2.compressedTexSubImage3D(...arguments);
      } catch (e3) {
        console.error("THREE.WebGLState:", e3);
      }
    }, scissor: function(t3) {
      false === H2.equals(t3) && (e2.scissor(t3.x, t3.y, t3.z, t3.w), H2.copy(t3));
    }, viewport: function(t3) {
      false === G2.equals(t3) && (e2.viewport(t3.x, t3.y, t3.z, t3.w), G2.copy(t3));
    }, reset: function() {
      e2.disable(e2.BLEND), e2.disable(e2.CULL_FACE), e2.disable(e2.DEPTH_TEST), e2.disable(e2.POLYGON_OFFSET_FILL), e2.disable(e2.SCISSOR_TEST), e2.disable(e2.STENCIL_TEST), e2.disable(e2.SAMPLE_ALPHA_TO_COVERAGE), e2.blendEquation(e2.FUNC_ADD), e2.blendFunc(e2.ONE, e2.ZERO), e2.blendFuncSeparate(e2.ONE, e2.ZERO, e2.ONE, e2.ZERO), e2.blendColor(0, 0, 0, 0), e2.colorMask(true, true, true, true), e2.clearColor(0, 0, 0, 0), e2.depthMask(true), e2.depthFunc(e2.LESS), i2.setReversed(false), e2.clearDepth(1), e2.stencilMask(4294967295), e2.stencilFunc(e2.ALWAYS, 0, 4294967295), e2.stencilOp(e2.KEEP, e2.KEEP, e2.KEEP), e2.clearStencil(0), e2.cullFace(e2.BACK), e2.frontFace(e2.CCW), e2.polygonOffset(0, 0), e2.activeTexture(e2.TEXTURE0), e2.bindFramebuffer(e2.FRAMEBUFFER, null), e2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, null), e2.bindFramebuffer(e2.READ_FRAMEBUFFER, null), e2.useProgram(null), e2.lineWidth(1), e2.scissor(0, 0, e2.canvas.width, e2.canvas.height), e2.viewport(0, 0, e2.canvas.width, e2.canvas.height), l2 = {}, N2 = null, O2 = {}, d2 = {}, u2 = /* @__PURE__ */ new WeakMap(), f2 = [], p2 = null, m2 = false, h2 = null, _2 = null, g2 = null, v2 = null, E2 = null, S2 = null, T2 = null, M2 = new Qr(0, 0, 0), x2 = 0, R2 = false, A2 = null, b2 = null, C2 = null, L2 = null, P2 = null, H2.set(0, 0, e2.canvas.width, e2.canvas.height), G2.set(0, 0, e2.canvas.width, e2.canvas.height), r2.reset(), i2.reset(), a2.reset();
    } };
  }
  function ta2(e2, n2, r2, i2, a2, o2, s2) {
    const l2 = n2.has("WEBGL_multisampled_render_to_texture") ? n2.get("WEBGL_multisampled_render_to_texture") : null, c2 = "undefined" != typeof navigator && /OculusBrowser/g.test(navigator.userAgent), d2 = new $s(), u2 = /* @__PURE__ */ new WeakMap();
    let f2;
    const h2 = /* @__PURE__ */ new WeakMap();
    let _2 = false;
    try {
      _2 = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (e3) {
    }
    function g2(e3, t2) {
      return _2 ? new OffscreenCanvas(e3, t2) : oi("canvas");
    }
    function v2(e3, t2, n3) {
      let r3 = 1;
      const i3 = Q2(e3);
      if ((i3.width > n3 || i3.height > n3) && (r3 = n3 / Math.max(i3.width, i3.height)), r3 < 1) {
        if ("undefined" != typeof HTMLImageElement && e3 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e3 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e3 instanceof ImageBitmap || "undefined" != typeof VideoFrame && e3 instanceof VideoFrame) {
          const n4 = Math.floor(r3 * i3.width), a3 = Math.floor(r3 * i3.height);
          void 0 === f2 && (f2 = g2(n4, a3));
          const o3 = t2 ? g2(n4, a3) : f2;
          o3.width = n4, o3.height = a3;
          return o3.getContext("2d").drawImage(e3, 0, 0, n4, a3), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + i3.width + "x" + i3.height + ") to (" + n4 + "x" + a3 + ")."), o3;
        }
        return "data" in e3 && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + i3.width + "x" + i3.height + ")."), e3;
      }
      return e3;
    }
    function E2(e3) {
      return e3.generateMipmaps;
    }
    function x2(t2) {
      e2.generateMipmap(t2);
    }
    function R2(t2) {
      return t2.isWebGLCubeRenderTarget ? e2.TEXTURE_CUBE_MAP : t2.isWebGL3DRenderTarget ? e2.TEXTURE_3D : t2.isWebGLArrayRenderTarget || t2.isCompressedArrayTexture ? e2.TEXTURE_2D_ARRAY : e2.TEXTURE_2D;
    }
    function A2(t2, r3, i3, a3, o3 = false) {
      if (null !== t2) {
        if (void 0 !== e2[t2]) return e2[t2];
        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + t2 + "'");
      }
      let s3 = r3;
      if (r3 === e2.RED && (i3 === e2.FLOAT && (s3 = e2.R32F), i3 === e2.HALF_FLOAT && (s3 = e2.R16F), i3 === e2.UNSIGNED_BYTE && (s3 = e2.R8)), r3 === e2.RED_INTEGER && (i3 === e2.UNSIGNED_BYTE && (s3 = e2.R8UI), i3 === e2.UNSIGNED_SHORT && (s3 = e2.R16UI), i3 === e2.UNSIGNED_INT && (s3 = e2.R32UI), i3 === e2.BYTE && (s3 = e2.R8I), i3 === e2.SHORT && (s3 = e2.R16I), i3 === e2.INT && (s3 = e2.R32I)), r3 === e2.RG && (i3 === e2.FLOAT && (s3 = e2.RG32F), i3 === e2.HALF_FLOAT && (s3 = e2.RG16F), i3 === e2.UNSIGNED_BYTE && (s3 = e2.RG8)), r3 === e2.RG_INTEGER && (i3 === e2.UNSIGNED_BYTE && (s3 = e2.RG8UI), i3 === e2.UNSIGNED_SHORT && (s3 = e2.RG16UI), i3 === e2.UNSIGNED_INT && (s3 = e2.RG32UI), i3 === e2.BYTE && (s3 = e2.RG8I), i3 === e2.SHORT && (s3 = e2.RG16I), i3 === e2.INT && (s3 = e2.RG32I)), r3 === e2.RGB_INTEGER && (i3 === e2.UNSIGNED_BYTE && (s3 = e2.RGB8UI), i3 === e2.UNSIGNED_SHORT && (s3 = e2.RGB16UI), i3 === e2.UNSIGNED_INT && (s3 = e2.RGB32UI), i3 === e2.BYTE && (s3 = e2.RGB8I), i3 === e2.SHORT && (s3 = e2.RGB16I), i3 === e2.INT && (s3 = e2.RGB32I)), r3 === e2.RGBA_INTEGER && (i3 === e2.UNSIGNED_BYTE && (s3 = e2.RGBA8UI), i3 === e2.UNSIGNED_SHORT && (s3 = e2.RGBA16UI), i3 === e2.UNSIGNED_INT && (s3 = e2.RGBA32UI), i3 === e2.BYTE && (s3 = e2.RGBA8I), i3 === e2.SHORT && (s3 = e2.RGBA16I), i3 === e2.INT && (s3 = e2.RGBA32I)), r3 === e2.RGB && (i3 === e2.UNSIGNED_INT_5_9_9_9_REV && (s3 = e2.RGB9_E5), i3 === e2.UNSIGNED_INT_10F_11F_11F_REV && (s3 = e2.R11F_G11F_B10F)), r3 === e2.RGBA) {
        const t3 = o3 ? $e : yi.getTransfer(a3);
        i3 === e2.FLOAT && (s3 = e2.RGBA32F), i3 === e2.HALF_FLOAT && (s3 = e2.RGBA16F), i3 === e2.UNSIGNED_BYTE && (s3 = t3 === Qe ? e2.SRGB8_ALPHA8 : e2.RGBA8), i3 === e2.UNSIGNED_SHORT_4_4_4_4 && (s3 = e2.RGBA4), i3 === e2.UNSIGNED_SHORT_5_5_5_1 && (s3 = e2.RGB5_A1);
      }
      return s3 !== e2.R16F && s3 !== e2.R32F && s3 !== e2.RG16F && s3 !== e2.RG32F && s3 !== e2.RGBA16F && s3 !== e2.RGBA32F || n2.get("EXT_color_buffer_float"), s3;
    }
    function b2(t2, n3) {
      let r3;
      return t2 ? null === n3 || n3 === kt || n3 === Nt ? r3 = e2.DEPTH24_STENCIL8 : n3 === Et ? r3 = e2.DEPTH32F_STENCIL8 : n3 === It && (r3 = e2.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : null === n3 || n3 === kt || n3 === Nt ? r3 = e2.DEPTH_COMPONENT24 : n3 === Et ? r3 = e2.DEPTH_COMPONENT32F : n3 === It && (r3 = e2.DEPTH_COMPONENT16), r3;
    }
    function C2(e3, t2) {
      return true === E2(e3) || e3.isFramebufferTexture && e3.minFilter !== gt && e3.minFilter !== wt ? Math.log2(Math.max(t2.width, t2.height)) + 1 : void 0 !== e3.mipmaps && e3.mipmaps.length > 0 ? e3.mipmaps.length : e3.isCompressedTexture && Array.isArray(e3.image) ? t2.mipmaps.length : 1;
    }
    function L2(e3) {
      const t2 = e3.target;
      t2.removeEventListener("dispose", L2), function(e4) {
        const t3 = i2.get(e4);
        if (void 0 === t3.__webglInit) return;
        const n3 = e4.source, r3 = h2.get(n3);
        if (r3) {
          const i3 = r3[t3.__cacheKey];
          i3.usedTimes--, 0 === i3.usedTimes && U2(e4), 0 === Object.keys(r3).length && h2.delete(n3);
        }
        i2.remove(e4);
      }(t2), t2.isVideoTexture && u2.delete(t2);
    }
    function P2(t2) {
      const n3 = t2.target;
      n3.removeEventListener("dispose", P2), function(t3) {
        const n4 = i2.get(t3);
        t3.depthTexture && (t3.depthTexture.dispose(), i2.remove(t3.depthTexture));
        if (t3.isWebGLCubeRenderTarget) for (let t4 = 0; t4 < 6; t4++) {
          if (Array.isArray(n4.__webglFramebuffer[t4])) for (let r4 = 0; r4 < n4.__webglFramebuffer[t4].length; r4++) e2.deleteFramebuffer(n4.__webglFramebuffer[t4][r4]);
          else e2.deleteFramebuffer(n4.__webglFramebuffer[t4]);
          n4.__webglDepthbuffer && e2.deleteRenderbuffer(n4.__webglDepthbuffer[t4]);
        }
        else {
          if (Array.isArray(n4.__webglFramebuffer)) for (let t4 = 0; t4 < n4.__webglFramebuffer.length; t4++) e2.deleteFramebuffer(n4.__webglFramebuffer[t4]);
          else e2.deleteFramebuffer(n4.__webglFramebuffer);
          if (n4.__webglDepthbuffer && e2.deleteRenderbuffer(n4.__webglDepthbuffer), n4.__webglMultisampledFramebuffer && e2.deleteFramebuffer(n4.__webglMultisampledFramebuffer), n4.__webglColorRenderbuffer) for (let t4 = 0; t4 < n4.__webglColorRenderbuffer.length; t4++) n4.__webglColorRenderbuffer[t4] && e2.deleteRenderbuffer(n4.__webglColorRenderbuffer[t4]);
          n4.__webglDepthRenderbuffer && e2.deleteRenderbuffer(n4.__webglDepthRenderbuffer);
        }
        const r3 = t3.textures;
        for (let t4 = 0, n5 = r3.length; t4 < n5; t4++) {
          const n6 = i2.get(r3[t4]);
          n6.__webglTexture && (e2.deleteTexture(n6.__webglTexture), s2.memory.textures--), i2.remove(r3[t4]);
        }
        i2.remove(t3);
      }(n3);
    }
    function U2(t2) {
      const n3 = i2.get(t2);
      e2.deleteTexture(n3.__webglTexture);
      const r3 = t2.source;
      delete h2.get(r3)[n3.__cacheKey], s2.memory.textures--;
    }
    let D2 = 0;
    function w2(t2, n3) {
      const a3 = i2.get(t2);
      if (t2.isVideoTexture && function(e3) {
        const t3 = s2.render.frame;
        u2.get(e3) !== t3 && (u2.set(e3, t3), e3.update());
      }(t2), false === t2.isRenderTargetTexture && true !== t2.isExternalTexture && t2.version > 0 && a3.__version !== t2.version) {
        const e3 = t2.image;
        if (null === e3) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
        else {
          if (false !== e3.complete) return void V2(a3, t2, n3);
          console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
        }
      } else t2.isExternalTexture && (a3.__webglTexture = t2.sourceTexture ? t2.sourceTexture : null);
      r2.bindTexture(e2.TEXTURE_2D, a3.__webglTexture, e2.TEXTURE0 + n3);
    }
    const I2 = { [pt]: e2.REPEAT, [mt]: e2.CLAMP_TO_EDGE, [yt]: e2.MIRRORED_REPEAT }, y2 = { [gt]: e2.NEAREST, [ft]: e2.NEAREST_MIPMAP_NEAREST, [bt]: e2.NEAREST_MIPMAP_LINEAR, [wt]: e2.LINEAR, [Mt]: e2.LINEAR_MIPMAP_NEAREST, [_t]: e2.LINEAR_MIPMAP_LINEAR }, N2 = { [ys]: e2.NEVER, [Ms]: e2.ALWAYS, [gs]: e2.LESS, [xs]: e2.LEQUAL, [fs]: e2.EQUAL, [ws]: e2.GEQUAL, [bs]: e2.GREATER, [vs]: e2.NOTEQUAL };
    function O2(t2, r3) {
      if (r3.type !== Et || false !== n2.has("OES_texture_float_linear") || r3.magFilter !== wt && r3.magFilter !== Mt && r3.magFilter !== bt && r3.magFilter !== _t && r3.minFilter !== wt && r3.minFilter !== Mt && r3.minFilter !== bt && r3.minFilter !== _t || console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e2.texParameteri(t2, e2.TEXTURE_WRAP_S, I2[r3.wrapS]), e2.texParameteri(t2, e2.TEXTURE_WRAP_T, I2[r3.wrapT]), t2 !== e2.TEXTURE_3D && t2 !== e2.TEXTURE_2D_ARRAY || e2.texParameteri(t2, e2.TEXTURE_WRAP_R, I2[r3.wrapR]), e2.texParameteri(t2, e2.TEXTURE_MAG_FILTER, y2[r3.magFilter]), e2.texParameteri(t2, e2.TEXTURE_MIN_FILTER, y2[r3.minFilter]), r3.compareFunction && (e2.texParameteri(t2, e2.TEXTURE_COMPARE_MODE, e2.COMPARE_REF_TO_TEXTURE), e2.texParameteri(t2, e2.TEXTURE_COMPARE_FUNC, N2[r3.compareFunction])), true === n2.has("EXT_texture_filter_anisotropic")) {
        if (r3.magFilter === gt) return;
        if (r3.minFilter !== bt && r3.minFilter !== _t) return;
        if (r3.type === Et && false === n2.has("OES_texture_float_linear")) return;
        if (r3.anisotropy > 1 || i2.get(r3).__currentAnisotropy) {
          const o3 = n2.get("EXT_texture_filter_anisotropic");
          e2.texParameterf(t2, o3.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(r3.anisotropy, a2.getMaxAnisotropy())), i2.get(r3).__currentAnisotropy = r3.anisotropy;
        }
      }
    }
    function H2(t2, n3) {
      let r3 = false;
      void 0 === t2.__webglInit && (t2.__webglInit = true, n3.addEventListener("dispose", L2));
      const i3 = n3.source;
      let a3 = h2.get(i3);
      void 0 === a3 && (a3 = {}, h2.set(i3, a3));
      const o3 = function(e3) {
        const t3 = [];
        return t3.push(e3.wrapS), t3.push(e3.wrapT), t3.push(e3.wrapR || 0), t3.push(e3.magFilter), t3.push(e3.minFilter), t3.push(e3.anisotropy), t3.push(e3.internalFormat), t3.push(e3.format), t3.push(e3.type), t3.push(e3.generateMipmaps), t3.push(e3.premultiplyAlpha), t3.push(e3.flipY), t3.push(e3.unpackAlignment), t3.push(e3.colorSpace), t3.join();
      }(n3);
      if (o3 !== t2.__cacheKey) {
        void 0 === a3[o3] && (a3[o3] = { texture: e2.createTexture(), usedTimes: 0 }, s2.memory.textures++, r3 = true), a3[o3].usedTimes++;
        const i4 = a3[t2.__cacheKey];
        void 0 !== i4 && (a3[t2.__cacheKey].usedTimes--, 0 === i4.usedTimes && U2(n3)), t2.__cacheKey = o3, t2.__webglTexture = a3[o3].texture;
      }
      return r3;
    }
    function G2(e3, t2, n3) {
      return Math.floor(Math.floor(e3 / n3) / t2);
    }
    function V2(t2, n3, s3) {
      let l3 = e2.TEXTURE_2D;
      (n3.isDataArrayTexture || n3.isCompressedArrayTexture) && (l3 = e2.TEXTURE_2D_ARRAY), n3.isData3DTexture && (l3 = e2.TEXTURE_3D);
      const c3 = H2(t2, n3), d3 = n3.source;
      r2.bindTexture(l3, t2.__webglTexture, e2.TEXTURE0 + s3);
      const u3 = i2.get(d3);
      if (d3.version !== u3.__version || true === c3) {
        r2.activeTexture(e2.TEXTURE0 + s3);
        const t3 = yi.getPrimaries(yi.workingColorSpace), i3 = n3.colorSpace === Ye ? null : yi.getPrimaries(n3.colorSpace), f3 = n3.colorSpace === Ye || t3 === i3 ? e2.NONE : e2.BROWSER_DEFAULT_WEBGL;
        e2.pixelStorei(e2.UNPACK_FLIP_Y_WEBGL, n3.flipY), e2.pixelStorei(e2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n3.premultiplyAlpha), e2.pixelStorei(e2.UNPACK_ALIGNMENT, n3.unpackAlignment), e2.pixelStorei(e2.UNPACK_COLORSPACE_CONVERSION_WEBGL, f3);
        let m2 = v2(n3.image, false, a2.maxTextureSize);
        m2 = $2(n3, m2);
        const h3 = o2.convert(n3.format, n3.colorSpace), _3 = o2.convert(n3.type);
        let g3, S2 = A2(n3.internalFormat, h3, _3, n3.colorSpace, n3.isVideoTexture);
        O2(l3, n3);
        const T2 = n3.mipmaps, R3 = true !== n3.isVideoTexture, L3 = void 0 === u3.__version || true === c3, P3 = d3.dataReady, U3 = C2(n3, m2);
        if (n3.isDepthTexture) S2 = b2(n3.format === Ut, n3.type), L3 && (R3 ? r2.texStorage2D(e2.TEXTURE_2D, 1, S2, m2.width, m2.height) : r2.texImage2D(e2.TEXTURE_2D, 0, S2, m2.width, m2.height, 0, h3, _3, null));
        else if (n3.isDataTexture) if (T2.length > 0) {
          R3 && L3 && r2.texStorage2D(e2.TEXTURE_2D, U3, S2, T2[0].width, T2[0].height);
          for (let t4 = 0, n4 = T2.length; t4 < n4; t4++) g3 = T2[t4], R3 ? P3 && r2.texSubImage2D(e2.TEXTURE_2D, t4, 0, 0, g3.width, g3.height, h3, _3, g3.data) : r2.texImage2D(e2.TEXTURE_2D, t4, S2, g3.width, g3.height, 0, h3, _3, g3.data);
          n3.generateMipmaps = false;
        } else R3 ? (L3 && r2.texStorage2D(e2.TEXTURE_2D, U3, S2, m2.width, m2.height), P3 && function(t4, n4, i4, a3) {
          const o3 = t4.updateRanges;
          if (0 === o3.length) r2.texSubImage2D(e2.TEXTURE_2D, 0, 0, 0, n4.width, n4.height, i4, a3, n4.data);
          else {
            o3.sort((e3, t5) => e3.start - t5.start);
            let s4 = 0;
            for (let e3 = 1; e3 < o3.length; e3++) {
              const t5 = o3[s4], r3 = o3[e3], i5 = t5.start + t5.count, a4 = G2(r3.start, n4.width, 4), l5 = G2(t5.start, n4.width, 4);
              r3.start <= i5 + 1 && a4 === l5 && G2(r3.start + r3.count - 1, n4.width, 4) === a4 ? t5.count = Math.max(t5.count, r3.start + r3.count - t5.start) : (++s4, o3[s4] = r3);
            }
            o3.length = s4 + 1;
            const l4 = e2.getParameter(e2.UNPACK_ROW_LENGTH), c4 = e2.getParameter(e2.UNPACK_SKIP_PIXELS), d4 = e2.getParameter(e2.UNPACK_SKIP_ROWS);
            e2.pixelStorei(e2.UNPACK_ROW_LENGTH, n4.width);
            for (let t5 = 0, s5 = o3.length; t5 < s5; t5++) {
              const s6 = o3[t5], l5 = Math.floor(s6.start / 4), c5 = Math.ceil(s6.count / 4), d5 = l5 % n4.width, u4 = Math.floor(l5 / n4.width), f4 = c5, p2 = 1;
              e2.pixelStorei(e2.UNPACK_SKIP_PIXELS, d5), e2.pixelStorei(e2.UNPACK_SKIP_ROWS, u4), r2.texSubImage2D(e2.TEXTURE_2D, 0, d5, u4, f4, p2, i4, a3, n4.data);
            }
            t4.clearUpdateRanges(), e2.pixelStorei(e2.UNPACK_ROW_LENGTH, l4), e2.pixelStorei(e2.UNPACK_SKIP_PIXELS, c4), e2.pixelStorei(e2.UNPACK_SKIP_ROWS, d4);
          }
        }(n3, m2, h3, _3)) : r2.texImage2D(e2.TEXTURE_2D, 0, S2, m2.width, m2.height, 0, h3, _3, m2.data);
        else if (n3.isCompressedTexture) if (n3.isCompressedArrayTexture) {
          R3 && L3 && r2.texStorage3D(e2.TEXTURE_2D_ARRAY, U3, S2, T2[0].width, T2[0].height, m2.depth);
          for (let t4 = 0, i4 = T2.length; t4 < i4; t4++) if (g3 = T2[t4], n3.format !== Dt) if (null !== h3) if (R3) {
            if (P3) if (n3.layerUpdates.size > 0) {
              const i5 = Dd(g3.width, g3.height, n3.format, n3.type);
              for (const a3 of n3.layerUpdates) {
                const n4 = g3.data.subarray(a3 * i5 / g3.data.BYTES_PER_ELEMENT, (a3 + 1) * i5 / g3.data.BYTES_PER_ELEMENT);
                r2.compressedTexSubImage3D(e2.TEXTURE_2D_ARRAY, t4, 0, 0, a3, g3.width, g3.height, 1, h3, n4);
              }
              n3.clearLayerUpdates();
            } else r2.compressedTexSubImage3D(e2.TEXTURE_2D_ARRAY, t4, 0, 0, 0, g3.width, g3.height, m2.depth, h3, g3.data);
          } else r2.compressedTexImage3D(e2.TEXTURE_2D_ARRAY, t4, S2, g3.width, g3.height, m2.depth, 0, g3.data, 0, 0);
          else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
          else R3 ? P3 && r2.texSubImage3D(e2.TEXTURE_2D_ARRAY, t4, 0, 0, 0, g3.width, g3.height, m2.depth, h3, _3, g3.data) : r2.texImage3D(e2.TEXTURE_2D_ARRAY, t4, S2, g3.width, g3.height, m2.depth, 0, h3, _3, g3.data);
        } else {
          R3 && L3 && r2.texStorage2D(e2.TEXTURE_2D, U3, S2, T2[0].width, T2[0].height);
          for (let t4 = 0, i4 = T2.length; t4 < i4; t4++) g3 = T2[t4], n3.format !== Dt ? null !== h3 ? R3 ? P3 && r2.compressedTexSubImage2D(e2.TEXTURE_2D, t4, 0, 0, g3.width, g3.height, h3, g3.data) : r2.compressedTexImage2D(e2.TEXTURE_2D, t4, S2, g3.width, g3.height, 0, g3.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : R3 ? P3 && r2.texSubImage2D(e2.TEXTURE_2D, t4, 0, 0, g3.width, g3.height, h3, _3, g3.data) : r2.texImage2D(e2.TEXTURE_2D, t4, S2, g3.width, g3.height, 0, h3, _3, g3.data);
        }
        else if (n3.isDataArrayTexture) if (R3) {
          if (L3 && r2.texStorage3D(e2.TEXTURE_2D_ARRAY, U3, S2, m2.width, m2.height, m2.depth), P3) if (n3.layerUpdates.size > 0) {
            const t4 = Dd(m2.width, m2.height, n3.format, n3.type);
            for (const i4 of n3.layerUpdates) {
              const n4 = m2.data.subarray(i4 * t4 / m2.data.BYTES_PER_ELEMENT, (i4 + 1) * t4 / m2.data.BYTES_PER_ELEMENT);
              r2.texSubImage3D(e2.TEXTURE_2D_ARRAY, 0, 0, 0, i4, m2.width, m2.height, 1, h3, _3, n4);
            }
            n3.clearLayerUpdates();
          } else r2.texSubImage3D(e2.TEXTURE_2D_ARRAY, 0, 0, 0, 0, m2.width, m2.height, m2.depth, h3, _3, m2.data);
        } else r2.texImage3D(e2.TEXTURE_2D_ARRAY, 0, S2, m2.width, m2.height, m2.depth, 0, h3, _3, m2.data);
        else if (n3.isData3DTexture) R3 ? (L3 && r2.texStorage3D(e2.TEXTURE_3D, U3, S2, m2.width, m2.height, m2.depth), P3 && r2.texSubImage3D(e2.TEXTURE_3D, 0, 0, 0, 0, m2.width, m2.height, m2.depth, h3, _3, m2.data)) : r2.texImage3D(e2.TEXTURE_3D, 0, S2, m2.width, m2.height, m2.depth, 0, h3, _3, m2.data);
        else if (n3.isFramebufferTexture) {
          if (L3) if (R3) r2.texStorage2D(e2.TEXTURE_2D, U3, S2, m2.width, m2.height);
          else {
            let t4 = m2.width, n4 = m2.height;
            for (let i4 = 0; i4 < U3; i4++) r2.texImage2D(e2.TEXTURE_2D, i4, S2, t4, n4, 0, h3, _3, null), t4 >>= 1, n4 >>= 1;
          }
        } else if (T2.length > 0) {
          if (R3 && L3) {
            const t4 = Q2(T2[0]);
            r2.texStorage2D(e2.TEXTURE_2D, U3, S2, t4.width, t4.height);
          }
          for (let t4 = 0, n4 = T2.length; t4 < n4; t4++) g3 = T2[t4], R3 ? P3 && r2.texSubImage2D(e2.TEXTURE_2D, t4, 0, 0, h3, _3, g3) : r2.texImage2D(e2.TEXTURE_2D, t4, S2, h3, _3, g3);
          n3.generateMipmaps = false;
        } else if (R3) {
          if (L3) {
            const t4 = Q2(m2);
            r2.texStorage2D(e2.TEXTURE_2D, U3, S2, t4.width, t4.height);
          }
          P3 && r2.texSubImage2D(e2.TEXTURE_2D, 0, 0, 0, h3, _3, m2);
        } else r2.texImage2D(e2.TEXTURE_2D, 0, S2, h3, _3, m2);
        E2(n3) && x2(l3), u3.__version = d3.version, n3.onUpdate && n3.onUpdate(n3);
      }
      t2.__version = n3.version;
    }
    function z2(t2, n3, a3, s3, c3, d3) {
      const u3 = o2.convert(a3.format, a3.colorSpace), f3 = o2.convert(a3.type), p2 = A2(a3.internalFormat, u3, f3, a3.colorSpace), m2 = i2.get(n3), h3 = i2.get(a3);
      if (h3.__renderTarget = n3, !m2.__hasExternalTextures) {
        const t3 = Math.max(1, n3.width >> d3), i3 = Math.max(1, n3.height >> d3);
        c3 === e2.TEXTURE_3D || c3 === e2.TEXTURE_2D_ARRAY ? r2.texImage3D(c3, d3, p2, t3, i3, n3.depth, 0, u3, f3, null) : r2.texImage2D(c3, d3, p2, t3, i3, 0, u3, f3, null);
      }
      r2.bindFramebuffer(e2.FRAMEBUFFER, t2), Z2(n3) ? l2.framebufferTexture2DMultisampleEXT(e2.FRAMEBUFFER, s3, c3, h3.__webglTexture, 0, j2(n3)) : (c3 === e2.TEXTURE_2D || c3 >= e2.TEXTURE_CUBE_MAP_POSITIVE_X && c3 <= e2.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e2.framebufferTexture2D(e2.FRAMEBUFFER, s3, c3, h3.__webglTexture, d3), r2.bindFramebuffer(e2.FRAMEBUFFER, null);
    }
    function k2(t2, n3, r3) {
      if (e2.bindRenderbuffer(e2.RENDERBUFFER, t2), n3.depthBuffer) {
        const i3 = n3.depthTexture, a3 = i3 && i3.isDepthTexture ? i3.type : null, o3 = b2(n3.stencilBuffer, a3), s3 = n3.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT, c3 = j2(n3);
        Z2(n3) ? l2.renderbufferStorageMultisampleEXT(e2.RENDERBUFFER, c3, o3, n3.width, n3.height) : r3 ? e2.renderbufferStorageMultisample(e2.RENDERBUFFER, c3, o3, n3.width, n3.height) : e2.renderbufferStorage(e2.RENDERBUFFER, o3, n3.width, n3.height), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, s3, e2.RENDERBUFFER, t2);
      } else {
        const t3 = n3.textures;
        for (let i3 = 0; i3 < t3.length; i3++) {
          const a3 = t3[i3], s3 = o2.convert(a3.format, a3.colorSpace), c3 = o2.convert(a3.type), d3 = A2(a3.internalFormat, s3, c3, a3.colorSpace), u3 = j2(n3);
          r3 && false === Z2(n3) ? e2.renderbufferStorageMultisample(e2.RENDERBUFFER, u3, d3, n3.width, n3.height) : Z2(n3) ? l2.renderbufferStorageMultisampleEXT(e2.RENDERBUFFER, u3, d3, n3.width, n3.height) : e2.renderbufferStorage(e2.RENDERBUFFER, d3, n3.width, n3.height);
        }
      }
      e2.bindRenderbuffer(e2.RENDERBUFFER, null);
    }
    function W2(t2, n3) {
      if (n3 && n3.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
      if (r2.bindFramebuffer(e2.FRAMEBUFFER, t2), !n3.depthTexture || !n3.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
      const a3 = i2.get(n3.depthTexture);
      a3.__renderTarget = n3, a3.__webglTexture && n3.depthTexture.image.width === n3.width && n3.depthTexture.image.height === n3.height || (n3.depthTexture.image.width = n3.width, n3.depthTexture.image.height = n3.height, n3.depthTexture.needsUpdate = true), w2(n3.depthTexture, 0);
      const o3 = a3.__webglTexture, s3 = j2(n3);
      if (n3.depthTexture.format === Wt) Z2(n3) ? l2.framebufferTexture2DMultisampleEXT(e2.FRAMEBUFFER, e2.DEPTH_ATTACHMENT, e2.TEXTURE_2D, o3, 0, s3) : e2.framebufferTexture2D(e2.FRAMEBUFFER, e2.DEPTH_ATTACHMENT, e2.TEXTURE_2D, o3, 0);
      else {
        if (n3.depthTexture.format !== Ut) throw new Error("Unknown depthTexture format");
        Z2(n3) ? l2.framebufferTexture2DMultisampleEXT(e2.FRAMEBUFFER, e2.DEPTH_STENCIL_ATTACHMENT, e2.TEXTURE_2D, o3, 0, s3) : e2.framebufferTexture2D(e2.FRAMEBUFFER, e2.DEPTH_STENCIL_ATTACHMENT, e2.TEXTURE_2D, o3, 0);
      }
    }
    function X2(t2) {
      const n3 = i2.get(t2), a3 = true === t2.isWebGLCubeRenderTarget;
      if (n3.__boundDepthTexture !== t2.depthTexture) {
        const e3 = t2.depthTexture;
        if (n3.__depthDisposeCallback && n3.__depthDisposeCallback(), e3) {
          const t3 = () => {
            delete n3.__boundDepthTexture, delete n3.__depthDisposeCallback, e3.removeEventListener("dispose", t3);
          };
          e3.addEventListener("dispose", t3), n3.__depthDisposeCallback = t3;
        }
        n3.__boundDepthTexture = e3;
      }
      if (t2.depthTexture && !n3.__autoAllocateDepthBuffer) {
        if (a3) throw new Error("target.depthTexture not supported in Cube render targets");
        const e3 = t2.texture.mipmaps;
        e3 && e3.length > 0 ? W2(n3.__webglFramebuffer[0], t2) : W2(n3.__webglFramebuffer, t2);
      } else if (a3) {
        n3.__webglDepthbuffer = [];
        for (let i3 = 0; i3 < 6; i3++) if (r2.bindFramebuffer(e2.FRAMEBUFFER, n3.__webglFramebuffer[i3]), void 0 === n3.__webglDepthbuffer[i3]) n3.__webglDepthbuffer[i3] = e2.createRenderbuffer(), k2(n3.__webglDepthbuffer[i3], t2, false);
        else {
          const r3 = t2.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT, a4 = n3.__webglDepthbuffer[i3];
          e2.bindRenderbuffer(e2.RENDERBUFFER, a4), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, r3, e2.RENDERBUFFER, a4);
        }
      } else {
        const i3 = t2.texture.mipmaps;
        if (i3 && i3.length > 0 ? r2.bindFramebuffer(e2.FRAMEBUFFER, n3.__webglFramebuffer[0]) : r2.bindFramebuffer(e2.FRAMEBUFFER, n3.__webglFramebuffer), void 0 === n3.__webglDepthbuffer) n3.__webglDepthbuffer = e2.createRenderbuffer(), k2(n3.__webglDepthbuffer, t2, false);
        else {
          const r3 = t2.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT, i4 = n3.__webglDepthbuffer;
          e2.bindRenderbuffer(e2.RENDERBUFFER, i4), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, r3, e2.RENDERBUFFER, i4);
        }
      }
      r2.bindFramebuffer(e2.FRAMEBUFFER, null);
    }
    const Y2 = [], q2 = [];
    function j2(e3) {
      return Math.min(a2.maxSamples, e3.samples);
    }
    function Z2(e3) {
      const t2 = i2.get(e3);
      return e3.samples > 0 && true === n2.has("WEBGL_multisampled_render_to_texture") && false !== t2.__useRenderToTexture;
    }
    function $2(e3, t2) {
      const n3 = e3.colorSpace, r3 = e3.format, i3 = e3.type;
      return true === e3.isCompressedTexture || true === e3.isVideoTexture || n3 !== Ge && n3 !== Ye && (yi.getTransfer(n3) === Qe ? r3 === Dt && i3 === Tt || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", n3)), t2;
    }
    function Q2(e3) {
      return "undefined" != typeof HTMLImageElement && e3 instanceof HTMLImageElement ? (d2.width = e3.naturalWidth || e3.width, d2.height = e3.naturalHeight || e3.height) : "undefined" != typeof VideoFrame && e3 instanceof VideoFrame ? (d2.width = e3.displayWidth, d2.height = e3.displayHeight) : (d2.width = e3.width, d2.height = e3.height), d2;
    }
    this.allocateTextureUnit = function() {
      const e3 = D2;
      return e3 >= a2.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + e3 + " texture units while this GPU supports only " + a2.maxTextures), D2 += 1, e3;
    }, this.resetTextureUnits = function() {
      D2 = 0;
    }, this.setTexture2D = w2, this.setTexture2DArray = function(t2, n3) {
      const a3 = i2.get(t2);
      false === t2.isRenderTargetTexture && t2.version > 0 && a3.__version !== t2.version ? V2(a3, t2, n3) : r2.bindTexture(e2.TEXTURE_2D_ARRAY, a3.__webglTexture, e2.TEXTURE0 + n3);
    }, this.setTexture3D = function(t2, n3) {
      const a3 = i2.get(t2);
      false === t2.isRenderTargetTexture && t2.version > 0 && a3.__version !== t2.version ? V2(a3, t2, n3) : r2.bindTexture(e2.TEXTURE_3D, a3.__webglTexture, e2.TEXTURE0 + n3);
    }, this.setTextureCube = function(t2, n3) {
      const s3 = i2.get(t2);
      t2.version > 0 && s3.__version !== t2.version ? function(t3, n4, s4) {
        if (6 !== n4.image.length) return;
        const l3 = H2(t3, n4), c3 = n4.source;
        r2.bindTexture(e2.TEXTURE_CUBE_MAP, t3.__webglTexture, e2.TEXTURE0 + s4);
        const d3 = i2.get(c3);
        if (c3.version !== d3.__version || true === l3) {
          r2.activeTexture(e2.TEXTURE0 + s4);
          const t4 = yi.getPrimaries(yi.workingColorSpace), i3 = n4.colorSpace === Ye ? null : yi.getPrimaries(n4.colorSpace), u3 = n4.colorSpace === Ye || t4 === i3 ? e2.NONE : e2.BROWSER_DEFAULT_WEBGL;
          e2.pixelStorei(e2.UNPACK_FLIP_Y_WEBGL, n4.flipY), e2.pixelStorei(e2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n4.premultiplyAlpha), e2.pixelStorei(e2.UNPACK_ALIGNMENT, n4.unpackAlignment), e2.pixelStorei(e2.UNPACK_COLORSPACE_CONVERSION_WEBGL, u3);
          const f3 = n4.isCompressedTexture || n4.image[0].isCompressedTexture, m2 = n4.image[0] && n4.image[0].isDataTexture, h3 = [];
          for (let e3 = 0; e3 < 6; e3++) h3[e3] = f3 || m2 ? m2 ? n4.image[e3].image : n4.image[e3] : v2(n4.image[e3], true, a2.maxCubemapSize), h3[e3] = $2(n4, h3[e3]);
          const _3 = h3[0], g3 = o2.convert(n4.format, n4.colorSpace), S2 = o2.convert(n4.type), T2 = A2(n4.internalFormat, g3, S2, n4.colorSpace), R3 = true !== n4.isVideoTexture, b3 = void 0 === d3.__version || true === l3, L3 = c3.dataReady;
          let P3, U3 = C2(n4, _3);
          if (O2(e2.TEXTURE_CUBE_MAP, n4), f3) {
            R3 && b3 && r2.texStorage2D(e2.TEXTURE_CUBE_MAP, U3, T2, _3.width, _3.height);
            for (let t5 = 0; t5 < 6; t5++) {
              P3 = h3[t5].mipmaps;
              for (let i4 = 0; i4 < P3.length; i4++) {
                const a3 = P3[i4];
                n4.format !== Dt ? null !== g3 ? R3 ? L3 && r2.compressedTexSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, i4, 0, 0, a3.width, a3.height, g3, a3.data) : r2.compressedTexImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, i4, T2, a3.width, a3.height, 0, a3.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : R3 ? L3 && r2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, i4, 0, 0, a3.width, a3.height, g3, S2, a3.data) : r2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, i4, T2, a3.width, a3.height, 0, g3, S2, a3.data);
              }
            }
          } else {
            if (P3 = n4.mipmaps, R3 && b3) {
              P3.length > 0 && U3++;
              const t5 = Q2(h3[0]);
              r2.texStorage2D(e2.TEXTURE_CUBE_MAP, U3, T2, t5.width, t5.height);
            }
            for (let t5 = 0; t5 < 6; t5++) if (m2) {
              R3 ? L3 && r2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, 0, 0, 0, h3[t5].width, h3[t5].height, g3, S2, h3[t5].data) : r2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, 0, T2, h3[t5].width, h3[t5].height, 0, g3, S2, h3[t5].data);
              for (let n5 = 0; n5 < P3.length; n5++) {
                const i4 = P3[n5].image[t5].image;
                R3 ? L3 && r2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, n5 + 1, 0, 0, i4.width, i4.height, g3, S2, i4.data) : r2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, n5 + 1, T2, i4.width, i4.height, 0, g3, S2, i4.data);
              }
            } else {
              R3 ? L3 && r2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, 0, 0, 0, g3, S2, h3[t5]) : r2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, 0, T2, g3, S2, h3[t5]);
              for (let n5 = 0; n5 < P3.length; n5++) {
                const i4 = P3[n5];
                R3 ? L3 && r2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, n5 + 1, 0, 0, g3, S2, i4.image[t5]) : r2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, n5 + 1, T2, g3, S2, i4.image[t5]);
              }
            }
          }
          E2(n4) && x2(e2.TEXTURE_CUBE_MAP), d3.__version = c3.version, n4.onUpdate && n4.onUpdate(n4);
        }
        t3.__version = n4.version;
      }(s3, t2, n3) : r2.bindTexture(e2.TEXTURE_CUBE_MAP, s3.__webglTexture, e2.TEXTURE0 + n3);
    }, this.rebindTextures = function(t2, n3, r3) {
      const a3 = i2.get(t2);
      void 0 !== n3 && z2(a3.__webglFramebuffer, t2, t2.texture, e2.COLOR_ATTACHMENT0, e2.TEXTURE_2D, 0), void 0 !== r3 && X2(t2);
    }, this.setupRenderTarget = function(t2) {
      const n3 = t2.texture, a3 = i2.get(t2), l3 = i2.get(n3);
      t2.addEventListener("dispose", P2);
      const c3 = t2.textures, d3 = true === t2.isWebGLCubeRenderTarget, u3 = c3.length > 1;
      if (u3 || (void 0 === l3.__webglTexture && (l3.__webglTexture = e2.createTexture()), l3.__version = n3.version, s2.memory.textures++), d3) {
        a3.__webglFramebuffer = [];
        for (let t3 = 0; t3 < 6; t3++) if (n3.mipmaps && n3.mipmaps.length > 0) {
          a3.__webglFramebuffer[t3] = [];
          for (let r3 = 0; r3 < n3.mipmaps.length; r3++) a3.__webglFramebuffer[t3][r3] = e2.createFramebuffer();
        } else a3.__webglFramebuffer[t3] = e2.createFramebuffer();
      } else {
        if (n3.mipmaps && n3.mipmaps.length > 0) {
          a3.__webglFramebuffer = [];
          for (let t3 = 0; t3 < n3.mipmaps.length; t3++) a3.__webglFramebuffer[t3] = e2.createFramebuffer();
        } else a3.__webglFramebuffer = e2.createFramebuffer();
        if (u3) for (let t3 = 0, n4 = c3.length; t3 < n4; t3++) {
          const n5 = i2.get(c3[t3]);
          void 0 === n5.__webglTexture && (n5.__webglTexture = e2.createTexture(), s2.memory.textures++);
        }
        if (t2.samples > 0 && false === Z2(t2)) {
          a3.__webglMultisampledFramebuffer = e2.createFramebuffer(), a3.__webglColorRenderbuffer = [], r2.bindFramebuffer(e2.FRAMEBUFFER, a3.__webglMultisampledFramebuffer);
          for (let n4 = 0; n4 < c3.length; n4++) {
            const r3 = c3[n4];
            a3.__webglColorRenderbuffer[n4] = e2.createRenderbuffer(), e2.bindRenderbuffer(e2.RENDERBUFFER, a3.__webglColorRenderbuffer[n4]);
            const i3 = o2.convert(r3.format, r3.colorSpace), s3 = o2.convert(r3.type), l4 = A2(r3.internalFormat, i3, s3, r3.colorSpace, true === t2.isXRRenderTarget), d4 = j2(t2);
            e2.renderbufferStorageMultisample(e2.RENDERBUFFER, d4, l4, t2.width, t2.height), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + n4, e2.RENDERBUFFER, a3.__webglColorRenderbuffer[n4]);
          }
          e2.bindRenderbuffer(e2.RENDERBUFFER, null), t2.depthBuffer && (a3.__webglDepthRenderbuffer = e2.createRenderbuffer(), k2(a3.__webglDepthRenderbuffer, t2, true)), r2.bindFramebuffer(e2.FRAMEBUFFER, null);
        }
      }
      if (d3) {
        r2.bindTexture(e2.TEXTURE_CUBE_MAP, l3.__webglTexture), O2(e2.TEXTURE_CUBE_MAP, n3);
        for (let r3 = 0; r3 < 6; r3++) if (n3.mipmaps && n3.mipmaps.length > 0) for (let i3 = 0; i3 < n3.mipmaps.length; i3++) z2(a3.__webglFramebuffer[r3][i3], t2, n3, e2.COLOR_ATTACHMENT0, e2.TEXTURE_CUBE_MAP_POSITIVE_X + r3, i3);
        else z2(a3.__webglFramebuffer[r3], t2, n3, e2.COLOR_ATTACHMENT0, e2.TEXTURE_CUBE_MAP_POSITIVE_X + r3, 0);
        E2(n3) && x2(e2.TEXTURE_CUBE_MAP), r2.unbindTexture();
      } else if (u3) {
        for (let n4 = 0, o3 = c3.length; n4 < o3; n4++) {
          const o4 = c3[n4], s3 = i2.get(o4);
          let l4 = e2.TEXTURE_2D;
          (t2.isWebGL3DRenderTarget || t2.isWebGLArrayRenderTarget) && (l4 = t2.isWebGL3DRenderTarget ? e2.TEXTURE_3D : e2.TEXTURE_2D_ARRAY), r2.bindTexture(l4, s3.__webglTexture), O2(l4, o4), z2(a3.__webglFramebuffer, t2, o4, e2.COLOR_ATTACHMENT0 + n4, l4, 0), E2(o4) && x2(l4);
        }
        r2.unbindTexture();
      } else {
        let i3 = e2.TEXTURE_2D;
        if ((t2.isWebGL3DRenderTarget || t2.isWebGLArrayRenderTarget) && (i3 = t2.isWebGL3DRenderTarget ? e2.TEXTURE_3D : e2.TEXTURE_2D_ARRAY), r2.bindTexture(i3, l3.__webglTexture), O2(i3, n3), n3.mipmaps && n3.mipmaps.length > 0) for (let r3 = 0; r3 < n3.mipmaps.length; r3++) z2(a3.__webglFramebuffer[r3], t2, n3, e2.COLOR_ATTACHMENT0, i3, r3);
        else z2(a3.__webglFramebuffer, t2, n3, e2.COLOR_ATTACHMENT0, i3, 0);
        E2(n3) && x2(i3), r2.unbindTexture();
      }
      t2.depthBuffer && X2(t2);
    }, this.updateRenderTargetMipmap = function(e3) {
      const t2 = e3.textures;
      for (let n3 = 0, a3 = t2.length; n3 < a3; n3++) {
        const a4 = t2[n3];
        if (E2(a4)) {
          const t3 = R2(e3), n4 = i2.get(a4).__webglTexture;
          r2.bindTexture(t3, n4), x2(t3), r2.unbindTexture();
        }
      }
    }, this.updateMultisampleRenderTarget = function(t2) {
      if (t2.samples > 0) {
        if (false === Z2(t2)) {
          const n3 = t2.textures, a3 = t2.width, o3 = t2.height;
          let s3 = e2.COLOR_BUFFER_BIT;
          const l3 = t2.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT, d3 = i2.get(t2), u3 = n3.length > 1;
          if (u3) for (let t3 = 0; t3 < n3.length; t3++) r2.bindFramebuffer(e2.FRAMEBUFFER, d3.__webglMultisampledFramebuffer), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + t3, e2.RENDERBUFFER, null), r2.bindFramebuffer(e2.FRAMEBUFFER, d3.__webglFramebuffer), e2.framebufferTexture2D(e2.DRAW_FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + t3, e2.TEXTURE_2D, null, 0);
          r2.bindFramebuffer(e2.READ_FRAMEBUFFER, d3.__webglMultisampledFramebuffer);
          const f3 = t2.texture.mipmaps;
          f3 && f3.length > 0 ? r2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, d3.__webglFramebuffer[0]) : r2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, d3.__webglFramebuffer);
          for (let r3 = 0; r3 < n3.length; r3++) {
            if (t2.resolveDepthBuffer && (t2.depthBuffer && (s3 |= e2.DEPTH_BUFFER_BIT), t2.stencilBuffer && t2.resolveStencilBuffer && (s3 |= e2.STENCIL_BUFFER_BIT)), u3) {
              e2.framebufferRenderbuffer(e2.READ_FRAMEBUFFER, e2.COLOR_ATTACHMENT0, e2.RENDERBUFFER, d3.__webglColorRenderbuffer[r3]);
              const t3 = i2.get(n3[r3]).__webglTexture;
              e2.framebufferTexture2D(e2.DRAW_FRAMEBUFFER, e2.COLOR_ATTACHMENT0, e2.TEXTURE_2D, t3, 0);
            }
            e2.blitFramebuffer(0, 0, a3, o3, 0, 0, a3, o3, s3, e2.NEAREST), true === c2 && (Y2.length = 0, q2.length = 0, Y2.push(e2.COLOR_ATTACHMENT0 + r3), t2.depthBuffer && false === t2.resolveDepthBuffer && (Y2.push(l3), q2.push(l3), e2.invalidateFramebuffer(e2.DRAW_FRAMEBUFFER, q2)), e2.invalidateFramebuffer(e2.READ_FRAMEBUFFER, Y2));
          }
          if (r2.bindFramebuffer(e2.READ_FRAMEBUFFER, null), r2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, null), u3) for (let t3 = 0; t3 < n3.length; t3++) {
            r2.bindFramebuffer(e2.FRAMEBUFFER, d3.__webglMultisampledFramebuffer), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + t3, e2.RENDERBUFFER, d3.__webglColorRenderbuffer[t3]);
            const a4 = i2.get(n3[t3]).__webglTexture;
            r2.bindFramebuffer(e2.FRAMEBUFFER, d3.__webglFramebuffer), e2.framebufferTexture2D(e2.DRAW_FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + t3, e2.TEXTURE_2D, a4, 0);
          }
          r2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, d3.__webglMultisampledFramebuffer);
        } else if (t2.depthBuffer && false === t2.resolveDepthBuffer && c2) {
          const n3 = t2.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT;
          e2.invalidateFramebuffer(e2.DRAW_FRAMEBUFFER, [n3]);
        }
      }
    }, this.setupDepthRenderbuffer = X2, this.setupFrameBufferTexture = z2, this.useMultisampledRTT = Z2;
  }
  function na2(e2, t2) {
    return { convert: function(n2, r2 = Ye) {
      let i2;
      const a2 = yi.getTransfer(r2);
      if (n2 === Tt) return e2.UNSIGNED_BYTE;
      if (n2 === Pt) return e2.UNSIGNED_SHORT_4_4_4_4;
      if (n2 === Ot) return e2.UNSIGNED_SHORT_5_5_5_1;
      if (n2 === Vt) return e2.UNSIGNED_INT_5_9_9_9_REV;
      if (n2 === Ft) return e2.UNSIGNED_INT_10F_11F_11F_REV;
      if (n2 === zt) return e2.BYTE;
      if (n2 === Ct) return e2.SHORT;
      if (n2 === It) return e2.UNSIGNED_SHORT;
      if (n2 === Bt) return e2.INT;
      if (n2 === kt) return e2.UNSIGNED_INT;
      if (n2 === Et) return e2.FLOAT;
      if (n2 === Rt) return e2.HALF_FLOAT;
      if (n2 === Lt) return e2.ALPHA;
      if (n2 === jt) return e2.RGB;
      if (n2 === Dt) return e2.RGBA;
      if (n2 === Wt) return e2.DEPTH_COMPONENT;
      if (n2 === Ut) return e2.DEPTH_STENCIL;
      if (n2 === Ht) return e2.RED;
      if (n2 === qt) return e2.RED_INTEGER;
      if (n2 === Jt) return e2.RG;
      if (n2 === Xt) return e2.RG_INTEGER;
      if (n2 === Zt) return e2.RGBA_INTEGER;
      if (n2 === Gt || n2 === $t || n2 === Qt || n2 === Kt) if (a2 === Qe) {
        if (i2 = t2.get("WEBGL_compressed_texture_s3tc_srgb"), null === i2) return null;
        if (n2 === Gt) return i2.COMPRESSED_SRGB_S3TC_DXT1_EXT;
        if (n2 === $t) return i2.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
        if (n2 === Qt) return i2.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
        if (n2 === Kt) return i2.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
      } else {
        if (i2 = t2.get("WEBGL_compressed_texture_s3tc"), null === i2) return null;
        if (n2 === Gt) return i2.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n2 === $t) return i2.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n2 === Qt) return i2.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n2 === Kt) return i2.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      }
      if (n2 === te || n2 === ee || n2 === se || n2 === ie) {
        if (i2 = t2.get("WEBGL_compressed_texture_pvrtc"), null === i2) return null;
        if (n2 === te) return i2.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n2 === ee) return i2.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n2 === se) return i2.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n2 === ie) return i2.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      }
      if (n2 === re || n2 === ne || n2 === ae) {
        if (i2 = t2.get("WEBGL_compressed_texture_etc"), null === i2) return null;
        if (n2 === re || n2 === ne) return a2 === Qe ? i2.COMPRESSED_SRGB8_ETC2 : i2.COMPRESSED_RGB8_ETC2;
        if (n2 === ae) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : i2.COMPRESSED_RGBA8_ETC2_EAC;
      }
      if (n2 === oe || n2 === he || n2 === le || n2 === ce || n2 === ue || n2 === de || n2 === pe || n2 === me || n2 === ye || n2 === ge || n2 === fe || n2 === xe || n2 === be || n2 === ve) {
        if (i2 = t2.get("WEBGL_compressed_texture_astc"), null === i2) return null;
        if (n2 === oe) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : i2.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n2 === he) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : i2.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n2 === le) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : i2.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n2 === ce) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : i2.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n2 === ue) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : i2.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n2 === de) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : i2.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n2 === pe) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : i2.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n2 === me) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : i2.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n2 === ye) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : i2.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n2 === ge) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : i2.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n2 === fe) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : i2.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n2 === xe) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : i2.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n2 === be) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : i2.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n2 === ve) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : i2.COMPRESSED_RGBA_ASTC_12x12_KHR;
      }
      if (n2 === we || n2 === Me || n2 === Se) {
        if (i2 = t2.get("EXT_texture_compression_bptc"), null === i2) return null;
        if (n2 === we) return a2 === Qe ? i2.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : i2.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n2 === Me) return i2.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n2 === Se) return i2.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      }
      if (n2 === _e || n2 === Ae || n2 === Te || n2 === ze) {
        if (i2 = t2.get("EXT_texture_compression_rgtc"), null === i2) return null;
        if (n2 === _e) return i2.COMPRESSED_RED_RGTC1_EXT;
        if (n2 === Ae) return i2.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n2 === Te) return i2.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n2 === ze) return i2.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      }
      return n2 === Nt ? e2.UNSIGNED_INT_24_8 : void 0 !== e2[n2] ? e2[n2] : null;
    } };
  }
  var ra2 = class {
    constructor() {
      this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
    }
    init(e2, t2) {
      if (null === this.texture) {
        const n2 = new hh(e2.texture);
        e2.depthNear === t2.depthNear && e2.depthFar === t2.depthFar || (this.depthNear = e2.depthNear, this.depthFar = e2.depthFar), this.texture = n2;
      }
    }
    getMesh(e2) {
      if (null !== this.texture && null === this.mesh) {
        const t2 = e2.cameras[0].viewport, n2 = new Yn({ vertexShader: "\nvoid main() {\n\n	gl_Position = vec4( position, 1.0 );\n\n}", fragmentShader: "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n	if ( coord.x >= 1.0 ) {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n	} else {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n	}\n\n}", uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t2.z }, depthHeight: { value: t2.w } } });
        this.mesh = new Dn(new _l(20, 20), n2);
      }
      return this.mesh;
    }
    reset() {
      this.texture = null, this.mesh = null;
    }
    getDepthTexture() {
      return this.texture;
    }
  };
  var ia2 = class extends Ls {
    constructor(e2, n2) {
      super();
      const r2 = this;
      let a2 = null, o2 = 1, s2 = null, l2 = "local-floor", c2 = 1, d2 = null, u2 = null, f2 = null, p2 = null, m2 = null, h2 = null;
      const _2 = "undefined" != typeof XRWebGLBinding, g2 = new ra2(), v2 = {}, E2 = n2.getContextAttributes();
      let T2 = null, x2 = null;
      const R2 = [], A2 = [], b2 = new $s();
      let C2 = null;
      const L2 = new Kn();
      L2.viewport = new Ti();
      const P2 = new Kn();
      P2.viewport = new Ti();
      const D2 = [L2, P2], w2 = new cu();
      let I2 = null, N2 = null;
      function O2(e3) {
        const t2 = A2.indexOf(e3.inputSource);
        if (-1 === t2) return;
        const n3 = R2[t2];
        void 0 !== n3 && (n3.update(e3.inputSource, e3.frame, d2 || s2), n3.dispatchEvent({ type: e3.type, data: e3.inputSource }));
      }
      function F2() {
        a2.removeEventListener("select", O2), a2.removeEventListener("selectstart", O2), a2.removeEventListener("selectend", O2), a2.removeEventListener("squeeze", O2), a2.removeEventListener("squeezestart", O2), a2.removeEventListener("squeezeend", O2), a2.removeEventListener("end", F2), a2.removeEventListener("inputsourceschange", B2);
        for (let e3 = 0; e3 < R2.length; e3++) {
          const t2 = A2[e3];
          null !== t2 && (A2[e3] = null, R2[e3].disconnect(t2));
        }
        I2 = null, N2 = null, g2.reset();
        for (const e3 in v2) delete v2[e3];
        e2.setRenderTarget(T2), m2 = null, p2 = null, f2 = null, a2 = null, x2 = null, W2.stop(), r2.isPresenting = false, e2.setPixelRatio(C2), e2.setSize(b2.width, b2.height, false), r2.dispatchEvent({ type: "sessionend" });
      }
      function B2(e3) {
        for (let t2 = 0; t2 < e3.removed.length; t2++) {
          const n3 = e3.removed[t2], r3 = A2.indexOf(n3);
          r3 >= 0 && (A2[r3] = null, R2[r3].disconnect(n3));
        }
        for (let t2 = 0; t2 < e3.added.length; t2++) {
          const n3 = e3.added[t2];
          let r3 = A2.indexOf(n3);
          if (-1 === r3) {
            for (let e4 = 0; e4 < R2.length; e4++) {
              if (e4 >= A2.length) {
                A2.push(n3), r3 = e4;
                break;
              }
              if (null === A2[e4]) {
                A2[e4] = n3, r3 = e4;
                break;
              }
            }
            if (-1 === r3) break;
          }
          const i2 = R2[r3];
          i2 && i2.connect(n3);
        }
      }
      this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(e3) {
        let t2 = R2[e3];
        return void 0 === t2 && (t2 = new aa(), R2[e3] = t2), t2.getTargetRaySpace();
      }, this.getControllerGrip = function(e3) {
        let t2 = R2[e3];
        return void 0 === t2 && (t2 = new aa(), R2[e3] = t2), t2.getGripSpace();
      }, this.getHand = function(e3) {
        let t2 = R2[e3];
        return void 0 === t2 && (t2 = new aa(), R2[e3] = t2), t2.getHandSpace();
      }, this.setFramebufferScaleFactor = function(e3) {
        o2 = e3, true === r2.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
      }, this.setReferenceSpaceType = function(e3) {
        l2 = e3, true === r2.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
      }, this.getReferenceSpace = function() {
        return d2 || s2;
      }, this.setReferenceSpace = function(e3) {
        d2 = e3;
      }, this.getBaseLayer = function() {
        return null !== p2 ? p2 : m2;
      }, this.getBinding = function() {
        return null === f2 && _2 && (f2 = new XRWebGLBinding(a2, n2)), f2;
      }, this.getFrame = function() {
        return h2;
      }, this.getSession = function() {
        return a2;
      }, this.setSession = async function(t2) {
        if (a2 = t2, null !== a2) {
          T2 = e2.getRenderTarget(), a2.addEventListener("select", O2), a2.addEventListener("selectstart", O2), a2.addEventListener("selectend", O2), a2.addEventListener("squeeze", O2), a2.addEventListener("squeezestart", O2), a2.addEventListener("squeezeend", O2), a2.addEventListener("end", F2), a2.addEventListener("inputsourceschange", B2), true !== E2.xrCompatible && await n2.makeXRCompatible(), C2 = e2.getPixelRatio(), e2.getSize(b2);
          if (_2 && "createProjectionLayer" in XRWebGLBinding.prototype) {
            let t3 = null, r3 = null, i2 = null;
            E2.depth && (i2 = E2.stencil ? n2.DEPTH24_STENCIL8 : n2.DEPTH_COMPONENT24, t3 = E2.stencil ? Ut : Wt, r3 = E2.stencil ? Nt : kt);
            const s3 = { colorFormat: n2.RGBA8, depthFormat: i2, scaleFactor: o2 };
            f2 = this.getBinding(), p2 = f2.createProjectionLayer(s3), a2.updateRenderState({ layers: [p2] }), e2.setPixelRatio(1), e2.setSize(p2.textureWidth, p2.textureHeight, false), x2 = new Ci(p2.textureWidth, p2.textureHeight, { format: Dt, type: Tt, depthTexture: new oh(p2.textureWidth, p2.textureHeight, r3, void 0, void 0, void 0, void 0, void 0, void 0, t3), stencilBuffer: E2.stencil, colorSpace: e2.outputColorSpace, samples: E2.antialias ? 4 : 0, resolveDepthBuffer: false === p2.ignoreDepthValues, resolveStencilBuffer: false === p2.ignoreDepthValues });
          } else {
            const t3 = { antialias: E2.antialias, alpha: true, depth: E2.depth, stencil: E2.stencil, framebufferScaleFactor: o2 };
            m2 = new XRWebGLLayer(a2, n2, t3), a2.updateRenderState({ baseLayer: m2 }), e2.setPixelRatio(1), e2.setSize(m2.framebufferWidth, m2.framebufferHeight, false), x2 = new Ci(m2.framebufferWidth, m2.framebufferHeight, { format: Dt, type: Tt, colorSpace: e2.outputColorSpace, stencilBuffer: E2.stencil, resolveDepthBuffer: false === m2.ignoreDepthValues, resolveStencilBuffer: false === m2.ignoreDepthValues });
          }
          x2.isXRRenderTarget = true, this.setFoveation(c2), d2 = null, s2 = await a2.requestReferenceSpace(l2), W2.setContext(a2), W2.start(), r2.isPresenting = true, r2.dispatchEvent({ type: "sessionstart" });
        }
      }, this.getEnvironmentBlendMode = function() {
        if (null !== a2) return a2.environmentBlendMode;
      }, this.getDepthTexture = function() {
        return g2.getDepthTexture();
      };
      const H2 = new Ks(), G2 = new Ks();
      function V2(e3, t2) {
        null === t2 ? e3.matrixWorld.copy(e3.matrix) : e3.matrixWorld.multiplyMatrices(t2.matrixWorld, e3.matrix), e3.matrixWorldInverse.copy(e3.matrixWorld).invert();
      }
      this.updateCamera = function(e3) {
        if (null === a2) return;
        let t2 = e3.near, n3 = e3.far;
        null !== g2.texture && (g2.depthNear > 0 && (t2 = g2.depthNear), g2.depthFar > 0 && (n3 = g2.depthFar)), w2.near = P2.near = L2.near = t2, w2.far = P2.far = L2.far = n3, I2 === w2.near && N2 === w2.far || (a2.updateRenderState({ depthNear: w2.near, depthFar: w2.far }), I2 = w2.near, N2 = w2.far), w2.layers.mask = 6 | e3.layers.mask, L2.layers.mask = 3 & w2.layers.mask, P2.layers.mask = 5 & w2.layers.mask;
        const r3 = e3.parent, i2 = w2.cameras;
        V2(w2, r3);
        for (let e4 = 0; e4 < i2.length; e4++) V2(i2[e4], r3);
        2 === i2.length ? function(e4, t3, n4) {
          H2.setFromMatrixPosition(t3.matrixWorld), G2.setFromMatrixPosition(n4.matrixWorld);
          const r4 = H2.distanceTo(G2), i3 = t3.projectionMatrix.elements, a3 = n4.projectionMatrix.elements, o3 = i3[14] / (i3[10] - 1), s3 = i3[14] / (i3[10] + 1), l3 = (i3[9] + 1) / i3[5], c3 = (i3[9] - 1) / i3[5], d3 = (i3[8] - 1) / i3[0], u3 = (a3[8] + 1) / a3[0], f3 = o3 * d3, p3 = o3 * u3, m3 = r4 / (-d3 + u3), h3 = m3 * -d3;
          if (t3.matrixWorld.decompose(e4.position, e4.quaternion, e4.scale), e4.translateX(h3), e4.translateZ(m3), e4.matrixWorld.compose(e4.position, e4.quaternion, e4.scale), e4.matrixWorldInverse.copy(e4.matrixWorld).invert(), -1 === i3[10]) e4.projectionMatrix.copy(t3.projectionMatrix), e4.projectionMatrixInverse.copy(t3.projectionMatrixInverse);
          else {
            const t4 = o3 + m3, n5 = s3 + m3, i4 = f3 - h3, a4 = p3 + (r4 - h3), d4 = l3 * s3 / n5 * t4, u4 = c3 * s3 / n5 * t4;
            e4.projectionMatrix.makePerspective(i4, a4, d4, u4, t4, n5), e4.projectionMatrixInverse.copy(e4.projectionMatrix).invert();
          }
        }(w2, L2, P2) : w2.projectionMatrix.copy(L2.projectionMatrix), function(e4, t3, n4) {
          null === n4 ? e4.matrix.copy(t3.matrixWorld) : (e4.matrix.copy(n4.matrixWorld), e4.matrix.invert(), e4.matrix.multiply(t3.matrixWorld));
          e4.matrix.decompose(e4.position, e4.quaternion, e4.scale), e4.updateMatrixWorld(true), e4.projectionMatrix.copy(t3.projectionMatrix), e4.projectionMatrixInverse.copy(t3.projectionMatrixInverse), e4.isPerspectiveCamera && (e4.fov = 2 * Us * Math.atan(1 / e4.projectionMatrix.elements[5]), e4.zoom = 1);
        }(e3, w2, r3);
      }, this.getCamera = function() {
        return w2;
      }, this.getFoveation = function() {
        if (null !== p2 || null !== m2) return c2;
      }, this.setFoveation = function(e3) {
        c2 = e3, null !== p2 && (p2.fixedFoveation = e3), null !== m2 && void 0 !== m2.fixedFoveation && (m2.fixedFoveation = e3);
      }, this.hasDepthSensing = function() {
        return null !== g2.texture;
      }, this.getDepthSensingMesh = function() {
        return g2.getMesh(w2);
      }, this.getCameraTexture = function(e3) {
        return v2[e3];
      };
      let z2 = null;
      const W2 = new Cn2();
      W2.setAnimationLoop(function(t2, n3) {
        if (u2 = n3.getViewerPose(d2 || s2), h2 = n3, null !== u2) {
          const t3 = u2.views;
          null !== m2 && (e2.setRenderTargetFramebuffer(x2, m2.framebuffer), e2.setRenderTarget(x2));
          let n4 = false;
          t3.length !== w2.cameras.length && (w2.cameras.length = 0, n4 = true);
          for (let r3 = 0; r3 < t3.length; r3++) {
            const i3 = t3[r3];
            let a3 = null;
            if (null !== m2) a3 = m2.getViewport(i3);
            else {
              const t4 = f2.getViewSubImage(p2, i3);
              a3 = t4.viewport, 0 === r3 && (e2.setRenderTargetTextures(x2, t4.colorTexture, t4.depthStencilTexture), e2.setRenderTarget(x2));
            }
            let o3 = D2[r3];
            void 0 === o3 && (o3 = new Kn(), o3.layers.enable(r3), o3.viewport = new Ti(), D2[r3] = o3), o3.matrix.fromArray(i3.transform.matrix), o3.matrix.decompose(o3.position, o3.quaternion, o3.scale), o3.projectionMatrix.fromArray(i3.projectionMatrix), o3.projectionMatrixInverse.copy(o3.projectionMatrix).invert(), o3.viewport.set(a3.x, a3.y, a3.width, a3.height), 0 === r3 && (w2.matrix.copy(o3.matrix), w2.matrix.decompose(w2.position, w2.quaternion, w2.scale)), true === n4 && w2.cameras.push(o3);
          }
          const i2 = a2.enabledFeatures;
          if (i2 && i2.includes("depth-sensing") && "gpu-optimized" == a2.depthUsage && _2) {
            f2 = r2.getBinding();
            const e3 = f2.getDepthInformation(t3[0]);
            e3 && e3.isValid && e3.texture && g2.init(e3, a2.renderState);
          }
          if (i2 && i2.includes("camera-access") && _2) {
            e2.state.unbindTexture(), f2 = r2.getBinding();
            for (let e3 = 0; e3 < t3.length; e3++) {
              const n5 = t3[e3].camera;
              if (n5) {
                let e4 = v2[n5];
                e4 || (e4 = new hh(), v2[n5] = e4);
                const t4 = f2.getCameraImage(n5);
                e4.sourceTexture = t4;
              }
            }
          }
        }
        for (let e3 = 0; e3 < R2.length; e3++) {
          const t3 = A2[e3], r3 = R2[e3];
          null !== t3 && void 0 !== r3 && r3.update(t3, n3, d2 || s2);
        }
        z2 && z2(t2, n3), n3.detectedPlanes && r2.dispatchEvent({ type: "planesdetected", data: n3 }), h2 = null;
      }), this.setAnimationLoop = function(e3) {
        z2 = e3;
      }, this.dispose = function() {
      };
    }
  };
  var aa2 = new gr();
  var oa2 = new ar();
  function sa2(e2, t2) {
    function n2(e3, t3) {
      true === e3.matrixAutoUpdate && e3.updateMatrix(), t3.value.copy(e3.matrix);
    }
    function r2(e3, r3) {
      e3.opacity.value = r3.opacity, r3.color && e3.diffuse.value.copy(r3.color), r3.emissive && e3.emissive.value.copy(r3.emissive).multiplyScalar(r3.emissiveIntensity), r3.map && (e3.map.value = r3.map, n2(r3.map, e3.mapTransform)), r3.alphaMap && (e3.alphaMap.value = r3.alphaMap, n2(r3.alphaMap, e3.alphaMapTransform)), r3.bumpMap && (e3.bumpMap.value = r3.bumpMap, n2(r3.bumpMap, e3.bumpMapTransform), e3.bumpScale.value = r3.bumpScale, r3.side === d && (e3.bumpScale.value *= -1)), r3.normalMap && (e3.normalMap.value = r3.normalMap, n2(r3.normalMap, e3.normalMapTransform), e3.normalScale.value.copy(r3.normalScale), r3.side === d && e3.normalScale.value.negate()), r3.displacementMap && (e3.displacementMap.value = r3.displacementMap, n2(r3.displacementMap, e3.displacementMapTransform), e3.displacementScale.value = r3.displacementScale, e3.displacementBias.value = r3.displacementBias), r3.emissiveMap && (e3.emissiveMap.value = r3.emissiveMap, n2(r3.emissiveMap, e3.emissiveMapTransform)), r3.specularMap && (e3.specularMap.value = r3.specularMap, n2(r3.specularMap, e3.specularMapTransform)), r3.alphaTest > 0 && (e3.alphaTest.value = r3.alphaTest);
      const i2 = t2.get(r3), a2 = i2.envMap, o2 = i2.envMapRotation;
      a2 && (e3.envMap.value = a2, aa2.copy(o2), aa2.x *= -1, aa2.y *= -1, aa2.z *= -1, a2.isCubeTexture && false === a2.isRenderTargetTexture && (aa2.y *= -1, aa2.z *= -1), e3.envMapRotation.value.setFromMatrix4(oa2.makeRotationFromEuler(aa2)), e3.flipEnvMap.value = a2.isCubeTexture && false === a2.isRenderTargetTexture ? -1 : 1, e3.reflectivity.value = r3.reflectivity, e3.ior.value = r3.ior, e3.refractionRatio.value = r3.refractionRatio), r3.lightMap && (e3.lightMap.value = r3.lightMap, e3.lightMapIntensity.value = r3.lightMapIntensity, n2(r3.lightMap, e3.lightMapTransform)), r3.aoMap && (e3.aoMap.value = r3.aoMap, e3.aoMapIntensity.value = r3.aoMapIntensity, n2(r3.aoMap, e3.aoMapTransform));
    }
    return { refreshFogUniforms: function(t3, n3) {
      n3.color.getRGB(t3.fogColor.value, Jn(e2)), n3.isFog ? (t3.fogNear.value = n3.near, t3.fogFar.value = n3.far) : n3.isFogExp2 && (t3.fogDensity.value = n3.density);
    }, refreshMaterialUniforms: function(e3, i2, a2, o2, s2) {
      i2.isMeshBasicMaterial || i2.isMeshLambertMaterial ? r2(e3, i2) : i2.isMeshToonMaterial ? (r2(e3, i2), function(e4, t3) {
        t3.gradientMap && (e4.gradientMap.value = t3.gradientMap);
      }(e3, i2)) : i2.isMeshPhongMaterial ? (r2(e3, i2), function(e4, t3) {
        e4.specular.value.copy(t3.specular), e4.shininess.value = Math.max(t3.shininess, 1e-4);
      }(e3, i2)) : i2.isMeshStandardMaterial ? (r2(e3, i2), function(e4, t3) {
        e4.metalness.value = t3.metalness, t3.metalnessMap && (e4.metalnessMap.value = t3.metalnessMap, n2(t3.metalnessMap, e4.metalnessMapTransform));
        e4.roughness.value = t3.roughness, t3.roughnessMap && (e4.roughnessMap.value = t3.roughnessMap, n2(t3.roughnessMap, e4.roughnessMapTransform));
        t3.envMap && (e4.envMapIntensity.value = t3.envMapIntensity);
      }(e3, i2), i2.isMeshPhysicalMaterial && function(e4, t3, r3) {
        e4.ior.value = t3.ior, t3.sheen > 0 && (e4.sheenColor.value.copy(t3.sheenColor).multiplyScalar(t3.sheen), e4.sheenRoughness.value = t3.sheenRoughness, t3.sheenColorMap && (e4.sheenColorMap.value = t3.sheenColorMap, n2(t3.sheenColorMap, e4.sheenColorMapTransform)), t3.sheenRoughnessMap && (e4.sheenRoughnessMap.value = t3.sheenRoughnessMap, n2(t3.sheenRoughnessMap, e4.sheenRoughnessMapTransform)));
        t3.clearcoat > 0 && (e4.clearcoat.value = t3.clearcoat, e4.clearcoatRoughness.value = t3.clearcoatRoughness, t3.clearcoatMap && (e4.clearcoatMap.value = t3.clearcoatMap, n2(t3.clearcoatMap, e4.clearcoatMapTransform)), t3.clearcoatRoughnessMap && (e4.clearcoatRoughnessMap.value = t3.clearcoatRoughnessMap, n2(t3.clearcoatRoughnessMap, e4.clearcoatRoughnessMapTransform)), t3.clearcoatNormalMap && (e4.clearcoatNormalMap.value = t3.clearcoatNormalMap, n2(t3.clearcoatNormalMap, e4.clearcoatNormalMapTransform), e4.clearcoatNormalScale.value.copy(t3.clearcoatNormalScale), t3.side === d && e4.clearcoatNormalScale.value.negate()));
        t3.dispersion > 0 && (e4.dispersion.value = t3.dispersion);
        t3.iridescence > 0 && (e4.iridescence.value = t3.iridescence, e4.iridescenceIOR.value = t3.iridescenceIOR, e4.iridescenceThicknessMinimum.value = t3.iridescenceThicknessRange[0], e4.iridescenceThicknessMaximum.value = t3.iridescenceThicknessRange[1], t3.iridescenceMap && (e4.iridescenceMap.value = t3.iridescenceMap, n2(t3.iridescenceMap, e4.iridescenceMapTransform)), t3.iridescenceThicknessMap && (e4.iridescenceThicknessMap.value = t3.iridescenceThicknessMap, n2(t3.iridescenceThicknessMap, e4.iridescenceThicknessMapTransform)));
        t3.transmission > 0 && (e4.transmission.value = t3.transmission, e4.transmissionSamplerMap.value = r3.texture, e4.transmissionSamplerSize.value.set(r3.width, r3.height), t3.transmissionMap && (e4.transmissionMap.value = t3.transmissionMap, n2(t3.transmissionMap, e4.transmissionMapTransform)), e4.thickness.value = t3.thickness, t3.thicknessMap && (e4.thicknessMap.value = t3.thicknessMap, n2(t3.thicknessMap, e4.thicknessMapTransform)), e4.attenuationDistance.value = t3.attenuationDistance, e4.attenuationColor.value.copy(t3.attenuationColor));
        t3.anisotropy > 0 && (e4.anisotropyVector.value.set(t3.anisotropy * Math.cos(t3.anisotropyRotation), t3.anisotropy * Math.sin(t3.anisotropyRotation)), t3.anisotropyMap && (e4.anisotropyMap.value = t3.anisotropyMap, n2(t3.anisotropyMap, e4.anisotropyMapTransform)));
        e4.specularIntensity.value = t3.specularIntensity, e4.specularColor.value.copy(t3.specularColor), t3.specularColorMap && (e4.specularColorMap.value = t3.specularColorMap, n2(t3.specularColorMap, e4.specularColorMapTransform));
        t3.specularIntensityMap && (e4.specularIntensityMap.value = t3.specularIntensityMap, n2(t3.specularIntensityMap, e4.specularIntensityMapTransform));
      }(e3, i2, s2)) : i2.isMeshMatcapMaterial ? (r2(e3, i2), function(e4, t3) {
        t3.matcap && (e4.matcap.value = t3.matcap);
      }(e3, i2)) : i2.isMeshDepthMaterial ? r2(e3, i2) : i2.isMeshDistanceMaterial ? (r2(e3, i2), function(e4, n3) {
        const r3 = t2.get(n3).light;
        e4.referencePosition.value.setFromMatrixPosition(r3.matrixWorld), e4.nearDistance.value = r3.shadow.camera.near, e4.farDistance.value = r3.shadow.camera.far;
      }(e3, i2)) : i2.isMeshNormalMaterial ? r2(e3, i2) : i2.isLineBasicMaterial ? (function(e4, t3) {
        e4.diffuse.value.copy(t3.color), e4.opacity.value = t3.opacity, t3.map && (e4.map.value = t3.map, n2(t3.map, e4.mapTransform));
      }(e3, i2), i2.isLineDashedMaterial && function(e4, t3) {
        e4.dashSize.value = t3.dashSize, e4.totalSize.value = t3.dashSize + t3.gapSize, e4.scale.value = t3.scale;
      }(e3, i2)) : i2.isPointsMaterial ? function(e4, t3, r3, i3) {
        e4.diffuse.value.copy(t3.color), e4.opacity.value = t3.opacity, e4.size.value = t3.size * r3, e4.scale.value = 0.5 * i3, t3.map && (e4.map.value = t3.map, n2(t3.map, e4.uvTransform));
        t3.alphaMap && (e4.alphaMap.value = t3.alphaMap, n2(t3.alphaMap, e4.alphaMapTransform));
        t3.alphaTest > 0 && (e4.alphaTest.value = t3.alphaTest);
      }(e3, i2, a2, o2) : i2.isSpriteMaterial ? function(e4, t3) {
        e4.diffuse.value.copy(t3.color), e4.opacity.value = t3.opacity, e4.rotation.value = t3.rotation, t3.map && (e4.map.value = t3.map, n2(t3.map, e4.mapTransform));
        t3.alphaMap && (e4.alphaMap.value = t3.alphaMap, n2(t3.alphaMap, e4.alphaMapTransform));
        t3.alphaTest > 0 && (e4.alphaTest.value = t3.alphaTest);
      }(e3, i2) : i2.isShadowMaterial ? (e3.color.value.copy(i2.color), e3.opacity.value = i2.opacity) : i2.isShaderMaterial && (i2.uniformsNeedUpdate = false);
    } };
  }
  function la2(e2, t2, n2, r2) {
    let i2 = {}, a2 = {}, o2 = [];
    const s2 = e2.getParameter(e2.MAX_UNIFORM_BUFFER_BINDINGS);
    function l2(e3, t3, n3, r3) {
      const i3 = e3.value, a3 = t3 + "_" + n3;
      if (void 0 === r3[a3]) return r3[a3] = "number" == typeof i3 || "boolean" == typeof i3 ? i3 : i3.clone(), true;
      {
        const e4 = r3[a3];
        if ("number" == typeof i3 || "boolean" == typeof i3) {
          if (e4 !== i3) return r3[a3] = i3, true;
        } else if (false === e4.equals(i3)) return e4.copy(i3), true;
      }
      return false;
    }
    function c2(e3) {
      const t3 = { boundary: 0, storage: 0 };
      return "number" == typeof e3 || "boolean" == typeof e3 ? (t3.boundary = 4, t3.storage = 4) : e3.isVector2 ? (t3.boundary = 8, t3.storage = 8) : e3.isVector3 || e3.isColor ? (t3.boundary = 16, t3.storage = 12) : e3.isVector4 ? (t3.boundary = 16, t3.storage = 16) : e3.isMatrix3 ? (t3.boundary = 48, t3.storage = 48) : e3.isMatrix4 ? (t3.boundary = 64, t3.storage = 64) : e3.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", e3), t3;
    }
    function d2(t3) {
      const n3 = t3.target;
      n3.removeEventListener("dispose", d2);
      const r3 = o2.indexOf(n3.__bindingPointIndex);
      o2.splice(r3, 1), e2.deleteBuffer(i2[n3.id]), delete i2[n3.id], delete a2[n3.id];
    }
    return { bind: function(e3, t3) {
      const n3 = t3.program;
      r2.uniformBlockBinding(e3, n3);
    }, update: function(n3, u2) {
      let f2 = i2[n3.id];
      void 0 === f2 && (!function(e3) {
        const t3 = e3.uniforms;
        let n4 = 0;
        const r3 = 16;
        for (let e4 = 0, i4 = t3.length; e4 < i4; e4++) {
          const i5 = Array.isArray(t3[e4]) ? t3[e4] : [t3[e4]];
          for (let e5 = 0, t4 = i5.length; e5 < t4; e5++) {
            const t5 = i5[e5], a3 = Array.isArray(t5.value) ? t5.value : [t5.value];
            for (let e6 = 0, i6 = a3.length; e6 < i6; e6++) {
              const i7 = c2(a3[e6]), o3 = n4 % r3, s3 = o3 % i7.boundary, l3 = o3 + s3;
              n4 += s3, 0 !== l3 && r3 - l3 < i7.storage && (n4 += r3 - l3), t5.__data = new Float32Array(i7.storage / Float32Array.BYTES_PER_ELEMENT), t5.__offset = n4, n4 += i7.storage;
            }
          }
        }
        const i3 = n4 % r3;
        i3 > 0 && (n4 += r3 - i3);
        e3.__size = n4, e3.__cache = {};
      }(n3), f2 = function(t3) {
        const n4 = function() {
          for (let e3 = 0; e3 < s2; e3++) if (-1 === o2.indexOf(e3)) return o2.push(e3), e3;
          return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
        }();
        t3.__bindingPointIndex = n4;
        const r3 = e2.createBuffer(), i3 = t3.__size, a3 = t3.usage;
        return e2.bindBuffer(e2.UNIFORM_BUFFER, r3), e2.bufferData(e2.UNIFORM_BUFFER, i3, a3), e2.bindBuffer(e2.UNIFORM_BUFFER, null), e2.bindBufferBase(e2.UNIFORM_BUFFER, n4, r3), r3;
      }(n3), i2[n3.id] = f2, n3.addEventListener("dispose", d2));
      const p2 = u2.program;
      r2.updateUBOMapping(n3, p2);
      const m2 = t2.render.frame;
      a2[n3.id] !== m2 && (!function(t3) {
        const n4 = i2[t3.id], r3 = t3.uniforms, a3 = t3.__cache;
        e2.bindBuffer(e2.UNIFORM_BUFFER, n4);
        for (let t4 = 0, n5 = r3.length; t4 < n5; t4++) {
          const n6 = Array.isArray(r3[t4]) ? r3[t4] : [r3[t4]];
          for (let r4 = 0, i3 = n6.length; r4 < i3; r4++) {
            const i4 = n6[r4];
            if (true === l2(i4, t4, r4, a3)) {
              const t5 = i4.__offset, n7 = Array.isArray(i4.value) ? i4.value : [i4.value];
              let r5 = 0;
              for (let a4 = 0; a4 < n7.length; a4++) {
                const o3 = n7[a4], s3 = c2(o3);
                "number" == typeof o3 || "boolean" == typeof o3 ? (i4.__data[0] = o3, e2.bufferSubData(e2.UNIFORM_BUFFER, t5 + r5, i4.__data)) : o3.isMatrix3 ? (i4.__data[0] = o3.elements[0], i4.__data[1] = o3.elements[1], i4.__data[2] = o3.elements[2], i4.__data[3] = 0, i4.__data[4] = o3.elements[3], i4.__data[5] = o3.elements[4], i4.__data[6] = o3.elements[5], i4.__data[7] = 0, i4.__data[8] = o3.elements[6], i4.__data[9] = o3.elements[7], i4.__data[10] = o3.elements[8], i4.__data[11] = 0) : (o3.toArray(i4.__data, r5), r5 += s3.storage / Float32Array.BYTES_PER_ELEMENT);
              }
              e2.bufferSubData(e2.UNIFORM_BUFFER, t5, i4.__data);
            }
          }
        }
        e2.bindBuffer(e2.UNIFORM_BUFFER, null);
      }(n3), a2[n3.id] = m2);
    }, dispose: function() {
      for (const t3 in i2) e2.deleteBuffer(i2[t3]);
      o2 = [], i2 = {}, a2 = {};
    } };
  }
  var ca2 = class {
    constructor(e2 = {}) {
      const { canvas: t2 = hi(), context: r2 = null, depth: a2 = true, stencil: o2 = false, alpha: s2 = false, antialias: l2 = false, premultipliedAlpha: d2 = true, preserveDrawingBuffer: u2 = false, powerPreference: m2 = "default", failIfMajorPerformanceCaveat: h2 = false, reversedDepthBuffer: g2 = false } = e2;
      let v2;
      if (this.isWebGLRenderer = true, null !== r2) {
        if ("undefined" != typeof WebGLRenderingContext && r2 instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
        v2 = r2.getContextAttributes().alpha;
      } else v2 = s2;
      const T2 = new Uint32Array(4), M2 = new Int32Array(4);
      let x2 = null, R2 = null;
      const A2 = [], b2 = [];
      this.domElement = t2, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = $, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
      const C2 = this;
      let L2 = false;
      this._outputColorSpace = Ze;
      let P2 = 0, U2 = 0, w2 = null, I2 = -1, N2 = null;
      const O2 = new Ti(), B2 = new Ti();
      let G2 = null;
      const V2 = new Qr(0);
      let z2 = 0, W2 = t2.width, X2 = t2.height, Y2 = 1, K2 = null, q2 = null;
      const j2 = new Ti(0, 0, W2, X2), Z2 = new Ti(0, 0, W2, X2);
      let $2 = false;
      const Q2 = new lo();
      let J2 = false, ee2 = false;
      const te2 = new ar(), ne2 = new Ks(), re2 = new Ti(), ie2 = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
      let ae2 = false;
      function oe2() {
        return null === w2 ? Y2 : 1;
      }
      let se2, le2, ce2, de2, ue2, pe2, me2, he2, _e2, ve2, Ee2, Se2, Te2, Me2, xe2, Re2, Ae2, be2, Ce2, Le2, Pe2, Ue2, De2, we2, Ie2 = r2;
      function ye2(e3, n2) {
        return t2.getContext(e3, n2);
      }
      try {
        const e3 = { alpha: true, depth: a2, stencil: o2, antialias: l2, premultipliedAlpha: d2, preserveDrawingBuffer: u2, powerPreference: m2, failIfMajorPerformanceCaveat: h2 };
        if ("setAttribute" in t2 && t2.setAttribute("data-engine", `three.js r${t}`), t2.addEventListener("webglcontextlost", Fe2, false), t2.addEventListener("webglcontextrestored", Be2, false), t2.addEventListener("webglcontextcreationerror", He2, false), null === Ie2) {
          const t3 = "webgl2";
          if (Ie2 = ye2(t3, e3), null === Ie2) throw ye2(t3) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
        }
      } catch (e3) {
        throw console.error("THREE.WebGLRenderer: " + e3.message), e3;
      }
      function Ne2() {
        se2 = new or2(Ie2), se2.init(), Ue2 = new na2(Ie2, se2), le2 = new Bn2(Ie2, se2, e2, Ue2), ce2 = new ea2(Ie2, se2), le2.reversedDepthBuffer && g2 && ce2.buffers.depth.setReversed(true), de2 = new cr2(Ie2), ue2 = new Vi2(), pe2 = new ta2(Ie2, se2, ce2, ue2, le2, Ue2, de2), me2 = new Gn2(C2), he2 = new ar2(C2), _e2 = new Ln2(Ie2), De2 = new On2(Ie2, _e2), ve2 = new sr2(Ie2, _e2, de2, De2), Ee2 = new ur2(Ie2, ve2, _e2, de2), Ce2 = new dr2(Ie2, le2, pe2), Re2 = new Hn2(ue2), Se2 = new Gi2(C2, me2, he2, se2, le2, De2, Re2), Te2 = new sa2(C2, ue2), Me2 = new Xi2(), xe2 = new $i2(se2), be2 = new Nn2(C2, me2, he2, ce2, Ee2, v2, d2), Ae2 = new Qi2(C2, Ee2, le2), we2 = new la2(Ie2, de2, le2, ce2), Le2 = new Fn2(Ie2, se2, de2), Pe2 = new lr2(Ie2, se2, de2), de2.programs = Se2.programs, C2.capabilities = le2, C2.extensions = se2, C2.properties = ue2, C2.renderLists = Me2, C2.shadowMap = Ae2, C2.state = ce2, C2.info = de2;
      }
      Ne2();
      const Oe2 = new ia2(C2, Ie2);
      function Fe2(e3) {
        e3.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), L2 = true;
      }
      function Be2() {
        console.log("THREE.WebGLRenderer: Context Restored."), L2 = false;
        const e3 = de2.autoReset, t3 = Ae2.enabled, n2 = Ae2.autoUpdate, r3 = Ae2.needsUpdate, i2 = Ae2.type;
        Ne2(), de2.autoReset = e3, Ae2.enabled = t3, Ae2.autoUpdate = n2, Ae2.needsUpdate = r3, Ae2.type = i2;
      }
      function He2(e3) {
        console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", e3.statusMessage);
      }
      function Ge2(e3) {
        const t3 = e3.target;
        t3.removeEventListener("dispose", Ge2), function(e4) {
          (function(e5) {
            const t4 = ue2.get(e5).programs;
            void 0 !== t4 && (t4.forEach(function(e6) {
              Se2.releaseProgram(e6);
            }), e5.isShaderMaterial && Se2.releaseShaderCache(e5));
          })(e4), ue2.remove(e4);
        }(t3);
      }
      function Ve2(e3, t3, n2) {
        true === e3.transparent && e3.side === p && false === e3.forceSinglePass ? (e3.side = d, e3.needsUpdate = true, $e2(e3, t3, n2), e3.side = u, e3.needsUpdate = true, $e2(e3, t3, n2), e3.side = p) : $e2(e3, t3, n2);
      }
      this.xr = Oe2, this.getContext = function() {
        return Ie2;
      }, this.getContextAttributes = function() {
        return Ie2.getContextAttributes();
      }, this.forceContextLoss = function() {
        const e3 = se2.get("WEBGL_lose_context");
        e3 && e3.loseContext();
      }, this.forceContextRestore = function() {
        const e3 = se2.get("WEBGL_lose_context");
        e3 && e3.restoreContext();
      }, this.getPixelRatio = function() {
        return Y2;
      }, this.setPixelRatio = function(e3) {
        void 0 !== e3 && (Y2 = e3, this.setSize(W2, X2, false));
      }, this.getSize = function(e3) {
        return e3.set(W2, X2);
      }, this.setSize = function(e3, n2, r3 = true) {
        Oe2.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (W2 = e3, X2 = n2, t2.width = Math.floor(e3 * Y2), t2.height = Math.floor(n2 * Y2), true === r3 && (t2.style.width = e3 + "px", t2.style.height = n2 + "px"), this.setViewport(0, 0, e3, n2));
      }, this.getDrawingBufferSize = function(e3) {
        return e3.set(W2 * Y2, X2 * Y2).floor();
      }, this.setDrawingBufferSize = function(e3, n2, r3) {
        W2 = e3, X2 = n2, Y2 = r3, t2.width = Math.floor(e3 * r3), t2.height = Math.floor(n2 * r3), this.setViewport(0, 0, e3, n2);
      }, this.getCurrentViewport = function(e3) {
        return e3.copy(O2);
      }, this.getViewport = function(e3) {
        return e3.copy(j2);
      }, this.setViewport = function(e3, t3, n2, r3) {
        e3.isVector4 ? j2.set(e3.x, e3.y, e3.z, e3.w) : j2.set(e3, t3, n2, r3), ce2.viewport(O2.copy(j2).multiplyScalar(Y2).round());
      }, this.getScissor = function(e3) {
        return e3.copy(Z2);
      }, this.setScissor = function(e3, t3, n2, r3) {
        e3.isVector4 ? Z2.set(e3.x, e3.y, e3.z, e3.w) : Z2.set(e3, t3, n2, r3), ce2.scissor(B2.copy(Z2).multiplyScalar(Y2).round());
      }, this.getScissorTest = function() {
        return $2;
      }, this.setScissorTest = function(e3) {
        ce2.setScissorTest($2 = e3);
      }, this.setOpaqueSort = function(e3) {
        K2 = e3;
      }, this.setTransparentSort = function(e3) {
        q2 = e3;
      }, this.getClearColor = function(e3) {
        return e3.copy(be2.getClearColor());
      }, this.setClearColor = function() {
        be2.setClearColor(...arguments);
      }, this.getClearAlpha = function() {
        return be2.getClearAlpha();
      }, this.setClearAlpha = function() {
        be2.setClearAlpha(...arguments);
      }, this.clear = function(e3 = true, t3 = true, n2 = true) {
        let r3 = 0;
        if (e3) {
          let e4 = false;
          if (null !== w2) {
            const t4 = w2.texture.format;
            e4 = t4 === Zt || t4 === Xt || t4 === qt;
          }
          if (e4) {
            const e5 = w2.texture.type, t4 = e5 === Tt || e5 === kt || e5 === It || e5 === Nt || e5 === Pt || e5 === Ot, n3 = be2.getClearColor(), r4 = be2.getClearAlpha(), i2 = n3.r, a3 = n3.g, o3 = n3.b;
            t4 ? (T2[0] = i2, T2[1] = a3, T2[2] = o3, T2[3] = r4, Ie2.clearBufferuiv(Ie2.COLOR, 0, T2)) : (M2[0] = i2, M2[1] = a3, M2[2] = o3, M2[3] = r4, Ie2.clearBufferiv(Ie2.COLOR, 0, M2));
          } else r3 |= Ie2.COLOR_BUFFER_BIT;
        }
        t3 && (r3 |= Ie2.DEPTH_BUFFER_BIT), n2 && (r3 |= Ie2.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), Ie2.clear(r3);
      }, this.clearColor = function() {
        this.clear(true, false, false);
      }, this.clearDepth = function() {
        this.clear(false, true, false);
      }, this.clearStencil = function() {
        this.clear(false, false, true);
      }, this.dispose = function() {
        t2.removeEventListener("webglcontextlost", Fe2, false), t2.removeEventListener("webglcontextrestored", Be2, false), t2.removeEventListener("webglcontextcreationerror", He2, false), be2.dispose(), Me2.dispose(), xe2.dispose(), ue2.dispose(), me2.dispose(), he2.dispose(), Ee2.dispose(), De2.dispose(), we2.dispose(), Se2.dispose(), Oe2.dispose(), Oe2.removeEventListener("sessionstart", ke2), Oe2.removeEventListener("sessionend", We2), Xe2.stop();
      }, this.renderBufferDirect = function(e3, t3, n2, r3, i2, a3) {
        null === t3 && (t3 = ie2);
        const o3 = i2.isMesh && i2.matrixWorld.determinant() < 0, s3 = function(e4, t4, n3, r4, i3) {
          true !== t4.isScene && (t4 = ie2);
          pe2.resetTextureUnits();
          const a4 = t4.fog, o4 = r4.isMeshStandardMaterial ? t4.environment : null, s4 = null === w2 ? C2.outputColorSpace : true === w2.isXRRenderTarget ? w2.texture.colorSpace : Ge, l4 = (r4.isMeshStandardMaterial ? he2 : me2).get(r4.envMap || o4), c3 = true === r4.vertexColors && !!n3.attributes.color && 4 === n3.attributes.color.itemSize, d4 = !!n3.attributes.tangent && (!!r4.normalMap || r4.anisotropy > 0), u4 = !!n3.morphAttributes.position, f3 = !!n3.morphAttributes.normal, p3 = !!n3.morphAttributes.color;
          let m4 = $;
          r4.toneMapped && (null !== w2 && true !== w2.isXRRenderTarget || (m4 = C2.toneMapping));
          const h4 = n3.morphAttributes.position || n3.morphAttributes.normal || n3.morphAttributes.color, _3 = void 0 !== h4 ? h4.length : 0, g3 = ue2.get(r4), v3 = R2.state.lights;
          if (true === J2 && (true === ee2 || e4 !== N2)) {
            const t5 = e4 === N2 && r4.id === I2;
            Re2.setState(r4, e4, t5);
          }
          let E2 = false;
          r4.version === g3.__version ? g3.needsLights && g3.lightsStateVersion !== v3.state.version || g3.outputColorSpace !== s4 || i3.isBatchedMesh && false === g3.batching ? E2 = true : i3.isBatchedMesh || true !== g3.batching ? i3.isBatchedMesh && true === g3.batchingColor && null === i3.colorTexture || i3.isBatchedMesh && false === g3.batchingColor && null !== i3.colorTexture || i3.isInstancedMesh && false === g3.instancing ? E2 = true : i3.isInstancedMesh || true !== g3.instancing ? i3.isSkinnedMesh && false === g3.skinning ? E2 = true : i3.isSkinnedMesh || true !== g3.skinning ? i3.isInstancedMesh && true === g3.instancingColor && null === i3.instanceColor || i3.isInstancedMesh && false === g3.instancingColor && null !== i3.instanceColor || i3.isInstancedMesh && true === g3.instancingMorph && null === i3.morphTexture || i3.isInstancedMesh && false === g3.instancingMorph && null !== i3.morphTexture || g3.envMap !== l4 || true === r4.fog && g3.fog !== a4 ? E2 = true : void 0 === g3.numClippingPlanes || g3.numClippingPlanes === Re2.numPlanes && g3.numIntersection === Re2.numIntersection ? (g3.vertexAlphas !== c3 || g3.vertexTangents !== d4 || g3.morphTargets !== u4 || g3.morphNormals !== f3 || g3.morphColors !== p3 || g3.toneMapping !== m4 || g3.morphTargetsCount !== _3) && (E2 = true) : E2 = true : E2 = true : E2 = true : E2 = true : (E2 = true, g3.__version = r4.version);
          let S2 = g3.currentProgram;
          true === E2 && (S2 = $e2(r4, t4, i3));
          let T3 = false, M3 = false, x3 = false;
          const A3 = S2.getUniforms(), b3 = g3.uniforms;
          ce2.useProgram(S2.program) && (T3 = true, M3 = true, x3 = true);
          r4.id !== I2 && (I2 = r4.id, M3 = true);
          if (T3 || N2 !== e4) {
            ce2.buffers.depth.getReversed() && true !== e4.reversedDepth && (e4._reversedDepth = true, e4.updateProjectionMatrix()), A3.setValue(Ie2, "projectionMatrix", e4.projectionMatrix), A3.setValue(Ie2, "viewMatrix", e4.matrixWorldInverse);
            const t5 = A3.map.cameraPosition;
            void 0 !== t5 && t5.setValue(Ie2, ne2.setFromMatrixPosition(e4.matrixWorld)), le2.logarithmicDepthBuffer && A3.setValue(Ie2, "logDepthBufFC", 2 / (Math.log(e4.far + 1) / Math.LN2)), (r4.isMeshPhongMaterial || r4.isMeshToonMaterial || r4.isMeshLambertMaterial || r4.isMeshBasicMaterial || r4.isMeshStandardMaterial || r4.isShaderMaterial) && A3.setValue(Ie2, "isOrthographic", true === e4.isOrthographicCamera), N2 !== e4 && (N2 = e4, M3 = true, x3 = true);
          }
          if (i3.isSkinnedMesh) {
            A3.setOptional(Ie2, i3, "bindMatrix"), A3.setOptional(Ie2, i3, "bindMatrixInverse");
            const e5 = i3.skeleton;
            e5 && (null === e5.boneTexture && e5.computeBoneTexture(), A3.setValue(Ie2, "boneTexture", e5.boneTexture, pe2));
          }
          i3.isBatchedMesh && (A3.setOptional(Ie2, i3, "batchingTexture"), A3.setValue(Ie2, "batchingTexture", i3._matricesTexture, pe2), A3.setOptional(Ie2, i3, "batchingIdTexture"), A3.setValue(Ie2, "batchingIdTexture", i3._indirectTexture, pe2), A3.setOptional(Ie2, i3, "batchingColorTexture"), null !== i3._colorsTexture && A3.setValue(Ie2, "batchingColorTexture", i3._colorsTexture, pe2));
          const L3 = n3.morphAttributes;
          void 0 === L3.position && void 0 === L3.normal && void 0 === L3.color || Ce2.update(i3, n3, S2);
          (M3 || g3.receiveShadow !== i3.receiveShadow) && (g3.receiveShadow = i3.receiveShadow, A3.setValue(Ie2, "receiveShadow", i3.receiveShadow));
          r4.isMeshGouraudMaterial && null !== r4.envMap && (b3.envMap.value = l4, b3.flipEnvMap.value = l4.isCubeTexture && false === l4.isRenderTargetTexture ? -1 : 1);
          r4.isMeshStandardMaterial && null === r4.envMap && null !== t4.environment && (b3.envMapIntensity.value = t4.environmentIntensity);
          M3 && (A3.setValue(Ie2, "toneMappingExposure", C2.toneMappingExposure), g3.needsLights && (U3 = x3, (P3 = b3).ambientLightColor.needsUpdate = U3, P3.lightProbe.needsUpdate = U3, P3.directionalLights.needsUpdate = U3, P3.directionalLightShadows.needsUpdate = U3, P3.pointLights.needsUpdate = U3, P3.pointLightShadows.needsUpdate = U3, P3.spotLights.needsUpdate = U3, P3.spotLightShadows.needsUpdate = U3, P3.rectAreaLights.needsUpdate = U3, P3.hemisphereLights.needsUpdate = U3), a4 && true === r4.fog && Te2.refreshFogUniforms(b3, a4), Te2.refreshMaterialUniforms(b3, r4, Y2, X2, R2.state.transmissionRenderTarget[e4.id]), _i2.upload(Ie2, Qe2(g3), b3, pe2));
          var P3, U3;
          r4.isShaderMaterial && true === r4.uniformsNeedUpdate && (_i2.upload(Ie2, Qe2(g3), b3, pe2), r4.uniformsNeedUpdate = false);
          r4.isSpriteMaterial && A3.setValue(Ie2, "center", i3.center);
          if (A3.setValue(Ie2, "modelViewMatrix", i3.modelViewMatrix), A3.setValue(Ie2, "normalMatrix", i3.normalMatrix), A3.setValue(Ie2, "modelMatrix", i3.matrixWorld), r4.isShaderMaterial || r4.isRawShaderMaterial) {
            const e5 = r4.uniformsGroups;
            for (let t5 = 0, n4 = e5.length; t5 < n4; t5++) {
              const n5 = e5[t5];
              we2.update(n5, S2), we2.bind(n5, S2);
            }
          }
          return S2;
        }(e3, t3, n2, r3, i2);
        ce2.setMaterial(r3, o3);
        let l3 = n2.index, c2 = 1;
        if (true === r3.wireframe) {
          if (l3 = ve2.getWireframeAttribute(n2), void 0 === l3) return;
          c2 = 2;
        }
        const d3 = n2.drawRange, u3 = n2.attributes.position;
        let f2 = d3.start * c2, p2 = (d3.start + d3.count) * c2;
        null !== a3 && (f2 = Math.max(f2, a3.start * c2), p2 = Math.min(p2, (a3.start + a3.count) * c2)), null !== l3 ? (f2 = Math.max(f2, 0), p2 = Math.min(p2, l3.count)) : null != u3 && (f2 = Math.max(f2, 0), p2 = Math.min(p2, u3.count));
        const m3 = p2 - f2;
        if (m3 < 0 || m3 === 1 / 0) return;
        let h3;
        De2.setup(i2, r3, s3, n2, l3);
        let _2 = Le2;
        if (null !== l3 && (h3 = _e2.get(l3), _2 = Pe2, _2.setIndex(h3)), i2.isMesh) true === r3.wireframe ? (ce2.setLineWidth(r3.wireframeLinewidth * oe2()), _2.setMode(Ie2.LINES)) : _2.setMode(Ie2.TRIANGLES);
        else if (i2.isLine) {
          let e4 = r3.linewidth;
          void 0 === e4 && (e4 = 1), ce2.setLineWidth(e4 * oe2()), i2.isLineSegments ? _2.setMode(Ie2.LINES) : i2.isLineLoop ? _2.setMode(Ie2.LINE_LOOP) : _2.setMode(Ie2.LINE_STRIP);
        } else i2.isPoints ? _2.setMode(Ie2.POINTS) : i2.isSprite && _2.setMode(Ie2.TRIANGLES);
        if (i2.isBatchedMesh) if (null !== i2._multiDrawInstances) ci("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), _2.renderMultiDrawInstances(i2._multiDrawStarts, i2._multiDrawCounts, i2._multiDrawCount, i2._multiDrawInstances);
        else if (se2.get("WEBGL_multi_draw")) _2.renderMultiDraw(i2._multiDrawStarts, i2._multiDrawCounts, i2._multiDrawCount);
        else {
          const e4 = i2._multiDrawStarts, t4 = i2._multiDrawCounts, n3 = i2._multiDrawCount, a4 = l3 ? _e2.get(l3).bytesPerElement : 1, o4 = ue2.get(r3).currentProgram.getUniforms();
          for (let r4 = 0; r4 < n3; r4++) o4.setValue(Ie2, "_gl_DrawID", r4), _2.render(e4[r4] / a4, t4[r4]);
        }
        else if (i2.isInstancedMesh) _2.renderInstances(f2, m3, i2.count);
        else if (n2.isInstancedBufferGeometry) {
          const e4 = void 0 !== n2._maxInstanceCount ? n2._maxInstanceCount : 1 / 0, t4 = Math.min(n2.instanceCount, e4);
          _2.renderInstances(f2, m3, t4);
        } else _2.render(f2, m3);
      }, this.compile = function(e3, t3, n2 = null) {
        null === n2 && (n2 = e3), R2 = xe2.get(n2), R2.init(t3), b2.push(R2), n2.traverseVisible(function(e4) {
          e4.isLight && e4.layers.test(t3.layers) && (R2.pushLight(e4), e4.castShadow && R2.pushShadow(e4));
        }), e3 !== n2 && e3.traverseVisible(function(e4) {
          e4.isLight && e4.layers.test(t3.layers) && (R2.pushLight(e4), e4.castShadow && R2.pushShadow(e4));
        }), R2.setupLights();
        const r3 = /* @__PURE__ */ new Set();
        return e3.traverse(function(e4) {
          if (!(e4.isMesh || e4.isPoints || e4.isLine || e4.isSprite)) return;
          const t4 = e4.material;
          if (t4) if (Array.isArray(t4)) for (let i2 = 0; i2 < t4.length; i2++) {
            const a3 = t4[i2];
            Ve2(a3, n2, e4), r3.add(a3);
          }
          else Ve2(t4, n2, e4), r3.add(t4);
        }), R2 = b2.pop(), r3;
      }, this.compileAsync = function(e3, t3, n2 = null) {
        const r3 = this.compile(e3, t3, n2);
        return new Promise((t4) => {
          function n3() {
            r3.forEach(function(e4) {
              ue2.get(e4).currentProgram.isReady() && r3.delete(e4);
            }), 0 !== r3.size ? setTimeout(n3, 10) : t4(e3);
          }
          null !== se2.get("KHR_parallel_shader_compile") ? n3() : setTimeout(n3, 10);
        });
      };
      let ze2 = null;
      function ke2() {
        Xe2.stop();
      }
      function We2() {
        Xe2.start();
      }
      const Xe2 = new Cn2();
      function Ye2(e3, t3, n2, r3) {
        if (false === e3.visible) return;
        if (e3.layers.test(t3.layers)) {
          if (e3.isGroup) n2 = e3.renderOrder;
          else if (e3.isLOD) true === e3.autoUpdate && e3.update(t3);
          else if (e3.isLight) R2.pushLight(e3), e3.castShadow && R2.pushShadow(e3);
          else if (e3.isSprite) {
            if (!e3.frustumCulled || Q2.intersectsSprite(e3)) {
              r3 && re2.setFromMatrixPosition(e3.matrixWorld).applyMatrix4(te2);
              const t4 = Ee2.update(e3), i3 = e3.material;
              i3.visible && x2.push(e3, t4, i3, n2, re2.z, null);
            }
          } else if ((e3.isMesh || e3.isLine || e3.isPoints) && (!e3.frustumCulled || Q2.intersectsObject(e3))) {
            const t4 = Ee2.update(e3), i3 = e3.material;
            if (r3 && (void 0 !== e3.boundingSphere ? (null === e3.boundingSphere && e3.computeBoundingSphere(), re2.copy(e3.boundingSphere.center)) : (null === t4.boundingSphere && t4.computeBoundingSphere(), re2.copy(t4.boundingSphere.center)), re2.applyMatrix4(e3.matrixWorld).applyMatrix4(te2)), Array.isArray(i3)) {
              const r4 = t4.groups;
              for (let a3 = 0, o3 = r4.length; a3 < o3; a3++) {
                const o4 = r4[a3], s3 = i3[o4.materialIndex];
                s3 && s3.visible && x2.push(e3, t4, s3, n2, re2.z, o4);
              }
            } else i3.visible && x2.push(e3, t4, i3, n2, re2.z, null);
          }
        }
        const i2 = e3.children;
        for (let e4 = 0, a3 = i2.length; e4 < a3; e4++) Ye2(i2[e4], t3, n2, r3);
      }
      function Ke2(e3, t3, n2, r3) {
        const i2 = e3.opaque, a3 = e3.transmissive, o3 = e3.transparent;
        R2.setupLightsView(n2), true === J2 && Re2.setGlobalState(C2.clippingPlanes, n2), r3 && ce2.viewport(O2.copy(r3)), i2.length > 0 && je2(i2, t3, n2), a3.length > 0 && je2(a3, t3, n2), o3.length > 0 && je2(o3, t3, n2), ce2.buffers.depth.setTest(true), ce2.buffers.depth.setMask(true), ce2.buffers.color.setMask(true), ce2.setPolygonOffset(false);
      }
      function qe2(e3, t3, n2, r3) {
        if (null !== (true === n2.isScene ? n2.overrideMaterial : null)) return;
        void 0 === R2.state.transmissionRenderTarget[r3.id] && (R2.state.transmissionRenderTarget[r3.id] = new Ci(1, 1, { generateMipmaps: true, type: se2.has("EXT_color_buffer_half_float") || se2.has("EXT_color_buffer_float") ? Rt : Tt, minFilter: _t, samples: 4, stencilBuffer: o2, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: yi.workingColorSpace }));
        const i2 = R2.state.transmissionRenderTarget[r3.id], a3 = r3.viewport || O2;
        i2.setSize(a3.z * C2.transmissionResolutionScale, a3.w * C2.transmissionResolutionScale);
        const s3 = C2.getRenderTarget(), l3 = C2.getActiveCubeFace(), d3 = C2.getActiveMipmapLevel();
        C2.setRenderTarget(i2), C2.getClearColor(V2), z2 = C2.getClearAlpha(), z2 < 1 && C2.setClearColor(16777215, 0.5), C2.clear(), ae2 && be2.render(n2);
        const u3 = C2.toneMapping;
        C2.toneMapping = $;
        const f2 = r3.viewport;
        if (void 0 !== r3.viewport && (r3.viewport = void 0), R2.setupLightsView(r3), true === J2 && Re2.setGlobalState(C2.clippingPlanes, r3), je2(e3, n2, r3), pe2.updateMultisampleRenderTarget(i2), pe2.updateRenderTargetMipmap(i2), false === se2.has("WEBGL_multisampled_render_to_texture")) {
          let e4 = false;
          for (let i3 = 0, a4 = t3.length; i3 < a4; i3++) {
            const a5 = t3[i3], o3 = a5.object, s4 = a5.geometry, l4 = a5.material, d4 = a5.group;
            if (l4.side === p && o3.layers.test(r3.layers)) {
              const t4 = l4.side;
              l4.side = d, l4.needsUpdate = true, Ze2(o3, n2, r3, s4, l4, d4), l4.side = t4, l4.needsUpdate = true, e4 = true;
            }
          }
          true === e4 && (pe2.updateMultisampleRenderTarget(i2), pe2.updateRenderTargetMipmap(i2));
        }
        C2.setRenderTarget(s3, l3, d3), C2.setClearColor(V2, z2), void 0 !== f2 && (r3.viewport = f2), C2.toneMapping = u3;
      }
      function je2(e3, t3, n2) {
        const r3 = true === t3.isScene ? t3.overrideMaterial : null;
        for (let i2 = 0, a3 = e3.length; i2 < a3; i2++) {
          const a4 = e3[i2], o3 = a4.object, s3 = a4.geometry, l3 = a4.group;
          let c2 = a4.material;
          true === c2.allowOverride && null !== r3 && (c2 = r3), o3.layers.test(n2.layers) && Ze2(o3, t3, n2, s3, c2, l3);
        }
      }
      function Ze2(e3, t3, n2, r3, i2, a3) {
        e3.onBeforeRender(C2, t3, n2, r3, i2, a3), e3.modelViewMatrix.multiplyMatrices(n2.matrixWorldInverse, e3.matrixWorld), e3.normalMatrix.getNormalMatrix(e3.modelViewMatrix), i2.onBeforeRender(C2, t3, n2, r3, e3, a3), true === i2.transparent && i2.side === p && false === i2.forceSinglePass ? (i2.side = d, i2.needsUpdate = true, C2.renderBufferDirect(n2, t3, r3, i2, e3, a3), i2.side = u, i2.needsUpdate = true, C2.renderBufferDirect(n2, t3, r3, i2, e3, a3), i2.side = p) : C2.renderBufferDirect(n2, t3, r3, i2, e3, a3), e3.onAfterRender(C2, t3, n2, r3, i2, a3);
      }
      function $e2(e3, t3, n2) {
        true !== t3.isScene && (t3 = ie2);
        const r3 = ue2.get(e3), i2 = R2.state.lights, a3 = R2.state.shadowsArray, o3 = i2.state.version, s3 = Se2.getParameters(e3, i2.state, a3, t3, n2), l3 = Se2.getProgramCacheKey(s3);
        let c2 = r3.programs;
        r3.environment = e3.isMeshStandardMaterial ? t3.environment : null, r3.fog = t3.fog, r3.envMap = (e3.isMeshStandardMaterial ? he2 : me2).get(e3.envMap || r3.environment), r3.envMapRotation = null !== r3.environment && null === e3.envMap ? t3.environmentRotation : e3.envMapRotation, void 0 === c2 && (e3.addEventListener("dispose", Ge2), c2 = /* @__PURE__ */ new Map(), r3.programs = c2);
        let d3 = c2.get(l3);
        if (void 0 !== d3) {
          if (r3.currentProgram === d3 && r3.lightsStateVersion === o3) return Je2(e3, s3), d3;
        } else s3.uniforms = Se2.getUniforms(e3), e3.onBeforeCompile(s3, C2), d3 = Se2.acquireProgram(s3, l3), c2.set(l3, d3), r3.uniforms = s3.uniforms;
        const u3 = r3.uniforms;
        return (e3.isShaderMaterial || e3.isRawShaderMaterial) && true !== e3.clipping || (u3.clippingPlanes = Re2.uniform), Je2(e3, s3), r3.needsLights = function(e4) {
          return e4.isMeshLambertMaterial || e4.isMeshToonMaterial || e4.isMeshPhongMaterial || e4.isMeshStandardMaterial || e4.isShadowMaterial || e4.isShaderMaterial && true === e4.lights;
        }(e3), r3.lightsStateVersion = o3, r3.needsLights && (u3.ambientLightColor.value = i2.state.ambient, u3.lightProbe.value = i2.state.probe, u3.directionalLights.value = i2.state.directional, u3.directionalLightShadows.value = i2.state.directionalShadow, u3.spotLights.value = i2.state.spot, u3.spotLightShadows.value = i2.state.spotShadow, u3.rectAreaLights.value = i2.state.rectArea, u3.ltc_1.value = i2.state.rectAreaLTC1, u3.ltc_2.value = i2.state.rectAreaLTC2, u3.pointLights.value = i2.state.point, u3.pointLightShadows.value = i2.state.pointShadow, u3.hemisphereLights.value = i2.state.hemi, u3.directionalShadowMap.value = i2.state.directionalShadowMap, u3.directionalShadowMatrix.value = i2.state.directionalShadowMatrix, u3.spotShadowMap.value = i2.state.spotShadowMap, u3.spotLightMatrix.value = i2.state.spotLightMatrix, u3.spotLightMap.value = i2.state.spotLightMap, u3.pointShadowMap.value = i2.state.pointShadowMap, u3.pointShadowMatrix.value = i2.state.pointShadowMatrix), r3.currentProgram = d3, r3.uniformsList = null, d3;
      }
      function Qe2(e3) {
        if (null === e3.uniformsList) {
          const t3 = e3.currentProgram.getUniforms();
          e3.uniformsList = _i2.seqWithValue(t3.seq, e3.uniforms);
        }
        return e3.uniformsList;
      }
      function Je2(e3, t3) {
        const n2 = ue2.get(e3);
        n2.outputColorSpace = t3.outputColorSpace, n2.batching = t3.batching, n2.batchingColor = t3.batchingColor, n2.instancing = t3.instancing, n2.instancingColor = t3.instancingColor, n2.instancingMorph = t3.instancingMorph, n2.skinning = t3.skinning, n2.morphTargets = t3.morphTargets, n2.morphNormals = t3.morphNormals, n2.morphColors = t3.morphColors, n2.morphTargetsCount = t3.morphTargetsCount, n2.numClippingPlanes = t3.numClippingPlanes, n2.numIntersection = t3.numClipIntersection, n2.vertexAlphas = t3.vertexAlphas, n2.vertexTangents = t3.vertexTangents, n2.toneMapping = t3.toneMapping;
      }
      Xe2.setAnimationLoop(function(e3) {
        ze2 && ze2(e3);
      }), "undefined" != typeof self && Xe2.setContext(self), this.setAnimationLoop = function(e3) {
        ze2 = e3, Oe2.setAnimationLoop(e3), null === e3 ? Xe2.stop() : Xe2.start();
      }, Oe2.addEventListener("sessionstart", ke2), Oe2.addEventListener("sessionend", We2), this.render = function(e3, t3) {
        if (void 0 !== t3 && true !== t3.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        if (true === L2) return;
        if (true === e3.matrixWorldAutoUpdate && e3.updateMatrixWorld(), null === t3.parent && true === t3.matrixWorldAutoUpdate && t3.updateMatrixWorld(), true === Oe2.enabled && true === Oe2.isPresenting && (true === Oe2.cameraAutoUpdate && Oe2.updateCamera(t3), t3 = Oe2.getCamera()), true === e3.isScene && e3.onBeforeRender(C2, e3, t3, w2), R2 = xe2.get(e3, b2.length), R2.init(t3), b2.push(R2), te2.multiplyMatrices(t3.projectionMatrix, t3.matrixWorldInverse), Q2.setFromProjectionMatrix(te2, Ps, t3.reversedDepth), ee2 = this.localClippingEnabled, J2 = Re2.init(this.clippingPlanes, ee2), x2 = Me2.get(e3, A2.length), x2.init(), A2.push(x2), true === Oe2.enabled && true === Oe2.isPresenting) {
          const e4 = C2.xr.getDepthSensingMesh();
          null !== e4 && Ye2(e4, t3, -1 / 0, C2.sortObjects);
        }
        Ye2(e3, t3, 0, C2.sortObjects), x2.finish(), true === C2.sortObjects && x2.sort(K2, q2), ae2 = false === Oe2.enabled || false === Oe2.isPresenting || false === Oe2.hasDepthSensing(), ae2 && be2.addToRenderList(x2, e3), this.info.render.frame++, true === J2 && Re2.beginShadows();
        const n2 = R2.state.shadowsArray;
        Ae2.render(n2, e3, t3), true === J2 && Re2.endShadows(), true === this.info.autoReset && this.info.reset();
        const r3 = x2.opaque, i2 = x2.transmissive;
        if (R2.setupLights(), t3.isArrayCamera) {
          const n3 = t3.cameras;
          if (i2.length > 0) for (let t4 = 0, a3 = n3.length; t4 < a3; t4++) {
            qe2(r3, i2, e3, n3[t4]);
          }
          ae2 && be2.render(e3);
          for (let t4 = 0, r4 = n3.length; t4 < r4; t4++) {
            const r5 = n3[t4];
            Ke2(x2, e3, r5, r5.viewport);
          }
        } else i2.length > 0 && qe2(r3, i2, e3, t3), ae2 && be2.render(e3), Ke2(x2, e3, t3);
        null !== w2 && 0 === U2 && (pe2.updateMultisampleRenderTarget(w2), pe2.updateRenderTargetMipmap(w2)), true === e3.isScene && e3.onAfterRender(C2, e3, t3), De2.resetDefaultState(), I2 = -1, N2 = null, b2.pop(), b2.length > 0 ? (R2 = b2[b2.length - 1], true === J2 && Re2.setGlobalState(C2.clippingPlanes, R2.state.camera)) : R2 = null, A2.pop(), x2 = A2.length > 0 ? A2[A2.length - 1] : null;
      }, this.getActiveCubeFace = function() {
        return P2;
      }, this.getActiveMipmapLevel = function() {
        return U2;
      }, this.getRenderTarget = function() {
        return w2;
      }, this.setRenderTargetTextures = function(e3, t3, n2) {
        const r3 = ue2.get(e3);
        r3.__autoAllocateDepthBuffer = false === e3.resolveDepthBuffer, false === r3.__autoAllocateDepthBuffer && (r3.__useRenderToTexture = false), ue2.get(e3.texture).__webglTexture = t3, ue2.get(e3.depthTexture).__webglTexture = r3.__autoAllocateDepthBuffer ? void 0 : n2, r3.__hasExternalTextures = true;
      }, this.setRenderTargetFramebuffer = function(e3, t3) {
        const n2 = ue2.get(e3);
        n2.__webglFramebuffer = t3, n2.__useDefaultFramebuffer = void 0 === t3;
      };
      const et2 = Ie2.createFramebuffer();
      this.setRenderTarget = function(e3, t3 = 0, n2 = 0) {
        w2 = e3, P2 = t3, U2 = n2;
        let r3 = true, i2 = null, a3 = false, o3 = false;
        if (e3) {
          const s3 = ue2.get(e3);
          if (void 0 !== s3.__useDefaultFramebuffer) ce2.bindFramebuffer(Ie2.FRAMEBUFFER, null), r3 = false;
          else if (void 0 === s3.__webglFramebuffer) pe2.setupRenderTarget(e3);
          else if (s3.__hasExternalTextures) pe2.rebindTextures(e3, ue2.get(e3.texture).__webglTexture, ue2.get(e3.depthTexture).__webglTexture);
          else if (e3.depthBuffer) {
            const t4 = e3.depthTexture;
            if (s3.__boundDepthTexture !== t4) {
              if (null !== t4 && ue2.has(t4) && (e3.width !== t4.image.width || e3.height !== t4.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
              pe2.setupDepthRenderbuffer(e3);
            }
          }
          const l3 = e3.texture;
          (l3.isData3DTexture || l3.isDataArrayTexture || l3.isCompressedArrayTexture) && (o3 = true);
          const c2 = ue2.get(e3).__webglFramebuffer;
          e3.isWebGLCubeRenderTarget ? (i2 = Array.isArray(c2[t3]) ? c2[t3][n2] : c2[t3], a3 = true) : i2 = e3.samples > 0 && false === pe2.useMultisampledRTT(e3) ? ue2.get(e3).__webglMultisampledFramebuffer : Array.isArray(c2) ? c2[n2] : c2, O2.copy(e3.viewport), B2.copy(e3.scissor), G2 = e3.scissorTest;
        } else O2.copy(j2).multiplyScalar(Y2).floor(), B2.copy(Z2).multiplyScalar(Y2).floor(), G2 = $2;
        0 !== n2 && (i2 = et2);
        if (ce2.bindFramebuffer(Ie2.FRAMEBUFFER, i2) && r3 && ce2.drawBuffers(e3, i2), ce2.viewport(O2), ce2.scissor(B2), ce2.setScissorTest(G2), a3) {
          const r4 = ue2.get(e3.texture);
          Ie2.framebufferTexture2D(Ie2.FRAMEBUFFER, Ie2.COLOR_ATTACHMENT0, Ie2.TEXTURE_CUBE_MAP_POSITIVE_X + t3, r4.__webglTexture, n2);
        } else if (o3) {
          const r4 = t3;
          for (let t4 = 0; t4 < e3.textures.length; t4++) {
            const i3 = ue2.get(e3.textures[t4]);
            Ie2.framebufferTextureLayer(Ie2.FRAMEBUFFER, Ie2.COLOR_ATTACHMENT0 + t4, i3.__webglTexture, n2, r4);
          }
        } else if (null !== e3 && 0 !== n2) {
          const t4 = ue2.get(e3.texture);
          Ie2.framebufferTexture2D(Ie2.FRAMEBUFFER, Ie2.COLOR_ATTACHMENT0, Ie2.TEXTURE_2D, t4.__webglTexture, n2);
        }
        I2 = -1;
      }, this.readRenderTargetPixels = function(e3, t3, n2, r3, i2, a3, o3, s3 = 0) {
        if (!e3 || !e3.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let l3 = ue2.get(e3).__webglFramebuffer;
        if (e3.isWebGLCubeRenderTarget && void 0 !== o3 && (l3 = l3[o3]), l3) {
          ce2.bindFramebuffer(Ie2.FRAMEBUFFER, l3);
          try {
            const o4 = e3.textures[s3], l4 = o4.format, c2 = o4.type;
            if (!le2.textureFormatReadable(l4)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            if (!le2.textureTypeReadable(c2)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            t3 >= 0 && t3 <= e3.width - r3 && n2 >= 0 && n2 <= e3.height - i2 && (e3.textures.length > 1 && Ie2.readBuffer(Ie2.COLOR_ATTACHMENT0 + s3), Ie2.readPixels(t3, n2, r3, i2, Ue2.convert(l4), Ue2.convert(c2), a3));
          } finally {
            const e4 = null !== w2 ? ue2.get(w2).__webglFramebuffer : null;
            ce2.bindFramebuffer(Ie2.FRAMEBUFFER, e4);
          }
        }
      }, this.readRenderTargetPixelsAsync = async function(e3, t3, n2, r3, i2, a3, o3, s3 = 0) {
        if (!e3 || !e3.isWebGLRenderTarget) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let l3 = ue2.get(e3).__webglFramebuffer;
        if (e3.isWebGLCubeRenderTarget && void 0 !== o3 && (l3 = l3[o3]), l3) {
          if (t3 >= 0 && t3 <= e3.width - r3 && n2 >= 0 && n2 <= e3.height - i2) {
            ce2.bindFramebuffer(Ie2.FRAMEBUFFER, l3);
            const o4 = e3.textures[s3], c2 = o4.format, d3 = o4.type;
            if (!le2.textureFormatReadable(c2)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
            if (!le2.textureTypeReadable(d3)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
            const u3 = Ie2.createBuffer();
            Ie2.bindBuffer(Ie2.PIXEL_PACK_BUFFER, u3), Ie2.bufferData(Ie2.PIXEL_PACK_BUFFER, a3.byteLength, Ie2.STREAM_READ), e3.textures.length > 1 && Ie2.readBuffer(Ie2.COLOR_ATTACHMENT0 + s3), Ie2.readPixels(t3, n2, r3, i2, Ue2.convert(c2), Ue2.convert(d3), 0);
            const f2 = null !== w2 ? ue2.get(w2).__webglFramebuffer : null;
            ce2.bindFramebuffer(Ie2.FRAMEBUFFER, f2);
            const p2 = Ie2.fenceSync(Ie2.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return Ie2.flush(), await ui(Ie2, p2, 4), Ie2.bindBuffer(Ie2.PIXEL_PACK_BUFFER, u3), Ie2.getBufferSubData(Ie2.PIXEL_PACK_BUFFER, 0, a3), Ie2.deleteBuffer(u3), Ie2.deleteSync(p2), a3;
          }
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
        }
      }, this.copyFramebufferToTexture = function(e3, t3 = null, n2 = 0) {
        const r3 = Math.pow(2, -n2), i2 = Math.floor(e3.image.width * r3), a3 = Math.floor(e3.image.height * r3), o3 = null !== t3 ? t3.x : 0, s3 = null !== t3 ? t3.y : 0;
        pe2.setTexture2D(e3, 0), Ie2.copyTexSubImage2D(Ie2.TEXTURE_2D, n2, 0, 0, o3, s3, i2, a3), ce2.unbindTexture();
      };
      const tt2 = Ie2.createFramebuffer(), nt2 = Ie2.createFramebuffer();
      this.copyTextureToTexture = function(e3, t3, n2 = null, r3 = null, i2 = 0, a3 = null) {
        let o3, s3, l3, c2, d3, u3, f2, p2, m3;
        null === a3 && (0 !== i2 ? (ci("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), a3 = i2, i2 = 0) : a3 = 0);
        const h3 = e3.isCompressedTexture ? e3.mipmaps[a3] : e3.image;
        if (null !== n2) o3 = n2.max.x - n2.min.x, s3 = n2.max.y - n2.min.y, l3 = n2.isBox3 ? n2.max.z - n2.min.z : 1, c2 = n2.min.x, d3 = n2.min.y, u3 = n2.isBox3 ? n2.min.z : 0;
        else {
          const t4 = Math.pow(2, -i2);
          o3 = Math.floor(h3.width * t4), s3 = Math.floor(h3.height * t4), l3 = e3.isDataArrayTexture ? h3.depth : e3.isData3DTexture ? Math.floor(h3.depth * t4) : 1, c2 = 0, d3 = 0, u3 = 0;
        }
        null !== r3 ? (f2 = r3.x, p2 = r3.y, m3 = r3.z) : (f2 = 0, p2 = 0, m3 = 0);
        const _2 = Ue2.convert(t3.format), g3 = Ue2.convert(t3.type);
        let v3;
        t3.isData3DTexture ? (pe2.setTexture3D(t3, 0), v3 = Ie2.TEXTURE_3D) : t3.isDataArrayTexture || t3.isCompressedArrayTexture ? (pe2.setTexture2DArray(t3, 0), v3 = Ie2.TEXTURE_2D_ARRAY) : (pe2.setTexture2D(t3, 0), v3 = Ie2.TEXTURE_2D), Ie2.pixelStorei(Ie2.UNPACK_FLIP_Y_WEBGL, t3.flipY), Ie2.pixelStorei(Ie2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t3.premultiplyAlpha), Ie2.pixelStorei(Ie2.UNPACK_ALIGNMENT, t3.unpackAlignment);
        const E2 = Ie2.getParameter(Ie2.UNPACK_ROW_LENGTH), S2 = Ie2.getParameter(Ie2.UNPACK_IMAGE_HEIGHT), T3 = Ie2.getParameter(Ie2.UNPACK_SKIP_PIXELS), M3 = Ie2.getParameter(Ie2.UNPACK_SKIP_ROWS), x3 = Ie2.getParameter(Ie2.UNPACK_SKIP_IMAGES);
        Ie2.pixelStorei(Ie2.UNPACK_ROW_LENGTH, h3.width), Ie2.pixelStorei(Ie2.UNPACK_IMAGE_HEIGHT, h3.height), Ie2.pixelStorei(Ie2.UNPACK_SKIP_PIXELS, c2), Ie2.pixelStorei(Ie2.UNPACK_SKIP_ROWS, d3), Ie2.pixelStorei(Ie2.UNPACK_SKIP_IMAGES, u3);
        const R3 = e3.isDataArrayTexture || e3.isData3DTexture, A3 = t3.isDataArrayTexture || t3.isData3DTexture;
        if (e3.isDepthTexture) {
          const n3 = ue2.get(e3), r4 = ue2.get(t3), h4 = ue2.get(n3.__renderTarget), _3 = ue2.get(r4.__renderTarget);
          ce2.bindFramebuffer(Ie2.READ_FRAMEBUFFER, h4.__webglFramebuffer), ce2.bindFramebuffer(Ie2.DRAW_FRAMEBUFFER, _3.__webglFramebuffer);
          for (let n4 = 0; n4 < l3; n4++) R3 && (Ie2.framebufferTextureLayer(Ie2.READ_FRAMEBUFFER, Ie2.COLOR_ATTACHMENT0, ue2.get(e3).__webglTexture, i2, u3 + n4), Ie2.framebufferTextureLayer(Ie2.DRAW_FRAMEBUFFER, Ie2.COLOR_ATTACHMENT0, ue2.get(t3).__webglTexture, a3, m3 + n4)), Ie2.blitFramebuffer(c2, d3, o3, s3, f2, p2, o3, s3, Ie2.DEPTH_BUFFER_BIT, Ie2.NEAREST);
          ce2.bindFramebuffer(Ie2.READ_FRAMEBUFFER, null), ce2.bindFramebuffer(Ie2.DRAW_FRAMEBUFFER, null);
        } else if (0 !== i2 || e3.isRenderTargetTexture || ue2.has(e3)) {
          const n3 = ue2.get(e3), r4 = ue2.get(t3);
          ce2.bindFramebuffer(Ie2.READ_FRAMEBUFFER, tt2), ce2.bindFramebuffer(Ie2.DRAW_FRAMEBUFFER, nt2);
          for (let e4 = 0; e4 < l3; e4++) R3 ? Ie2.framebufferTextureLayer(Ie2.READ_FRAMEBUFFER, Ie2.COLOR_ATTACHMENT0, n3.__webglTexture, i2, u3 + e4) : Ie2.framebufferTexture2D(Ie2.READ_FRAMEBUFFER, Ie2.COLOR_ATTACHMENT0, Ie2.TEXTURE_2D, n3.__webglTexture, i2), A3 ? Ie2.framebufferTextureLayer(Ie2.DRAW_FRAMEBUFFER, Ie2.COLOR_ATTACHMENT0, r4.__webglTexture, a3, m3 + e4) : Ie2.framebufferTexture2D(Ie2.DRAW_FRAMEBUFFER, Ie2.COLOR_ATTACHMENT0, Ie2.TEXTURE_2D, r4.__webglTexture, a3), 0 !== i2 ? Ie2.blitFramebuffer(c2, d3, o3, s3, f2, p2, o3, s3, Ie2.COLOR_BUFFER_BIT, Ie2.NEAREST) : A3 ? Ie2.copyTexSubImage3D(v3, a3, f2, p2, m3 + e4, c2, d3, o3, s3) : Ie2.copyTexSubImage2D(v3, a3, f2, p2, c2, d3, o3, s3);
          ce2.bindFramebuffer(Ie2.READ_FRAMEBUFFER, null), ce2.bindFramebuffer(Ie2.DRAW_FRAMEBUFFER, null);
        } else A3 ? e3.isDataTexture || e3.isData3DTexture ? Ie2.texSubImage3D(v3, a3, f2, p2, m3, o3, s3, l3, _2, g3, h3.data) : t3.isCompressedArrayTexture ? Ie2.compressedTexSubImage3D(v3, a3, f2, p2, m3, o3, s3, l3, _2, h3.data) : Ie2.texSubImage3D(v3, a3, f2, p2, m3, o3, s3, l3, _2, g3, h3) : e3.isDataTexture ? Ie2.texSubImage2D(Ie2.TEXTURE_2D, a3, f2, p2, o3, s3, _2, g3, h3.data) : e3.isCompressedTexture ? Ie2.compressedTexSubImage2D(Ie2.TEXTURE_2D, a3, f2, p2, h3.width, h3.height, _2, h3.data) : Ie2.texSubImage2D(Ie2.TEXTURE_2D, a3, f2, p2, o3, s3, _2, g3, h3);
        Ie2.pixelStorei(Ie2.UNPACK_ROW_LENGTH, E2), Ie2.pixelStorei(Ie2.UNPACK_IMAGE_HEIGHT, S2), Ie2.pixelStorei(Ie2.UNPACK_SKIP_PIXELS, T3), Ie2.pixelStorei(Ie2.UNPACK_SKIP_ROWS, M3), Ie2.pixelStorei(Ie2.UNPACK_SKIP_IMAGES, x3), 0 === a3 && t3.generateMipmaps && Ie2.generateMipmap(v3), ce2.unbindTexture();
      }, this.initRenderTarget = function(e3) {
        void 0 === ue2.get(e3).__webglFramebuffer && pe2.setupRenderTarget(e3);
      }, this.initTexture = function(e3) {
        e3.isCubeTexture ? pe2.setTextureCube(e3, 0) : e3.isData3DTexture ? pe2.setTexture3D(e3, 0) : e3.isDataArrayTexture || e3.isCompressedArrayTexture ? pe2.setTexture2DArray(e3, 0) : pe2.setTexture2D(e3, 0), ce2.unbindTexture();
      }, this.resetState = function() {
        P2 = 0, U2 = 0, w2 = null, ce2.reset(), De2.reset();
      }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    get coordinateSystem() {
      return Ps;
    }
    get outputColorSpace() {
      return this._outputColorSpace;
    }
    set outputColorSpace(e2) {
      this._outputColorSpace = e2;
      const t2 = this.getContext();
      t2.drawingBufferColorSpace = yi._getDrawingBufferColorSpace(e2), t2.unpackColorSpace = yi._getUnpackColorSpace();
    }
  };

  // work/cad_import_20260802/digital_twin_preview/vendor/OrbitControls.js
  var _changeEvent = { type: "change" };
  var _startEvent = { type: "start" };
  var _endEvent = { type: "end" };
  var _ray = new nr();
  var _plane = new no();
  var _TILT_LIMIT = Math.cos(70 * Gs.DEG2RAD);
  var _v = new Ks();
  var _twoPI = 2 * Math.PI;
  var _STATE = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6
  };
  var _EPS = 1e-6;
  var OrbitControls = class extends jd {
    /**
     * Constructs a new controls instance.
     *
     * @param {Object3D} object - The object that is managed by the controls.
     * @param {?HTMLDOMElement} domElement - The HTML element used for event listeners.
     */
    constructor(object, domElement = null) {
      super(object, domElement);
      this.state = _STATE.NONE;
      this.target = new Ks();
      this.cursor = new Ks();
      this.minDistance = 0;
      this.maxDistance = Infinity;
      this.minZoom = 0;
      this.maxZoom = Infinity;
      this.minTargetRadius = 0;
      this.maxTargetRadius = Infinity;
      this.minPolarAngle = 0;
      this.maxPolarAngle = Math.PI;
      this.minAzimuthAngle = -Infinity;
      this.maxAzimuthAngle = Infinity;
      this.enableDamping = false;
      this.dampingFactor = 0.05;
      this.enableZoom = true;
      this.zoomSpeed = 1;
      this.enableRotate = true;
      this.rotateSpeed = 1;
      this.keyRotateSpeed = 1;
      this.enablePan = true;
      this.panSpeed = 1;
      this.screenSpacePanning = true;
      this.keyPanSpeed = 7;
      this.zoomToCursor = false;
      this.autoRotate = false;
      this.autoRotateSpeed = 2;
      this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" };
      this.mouseButtons = { LEFT: e.ROTATE, MIDDLE: e.DOLLY, RIGHT: e.PAN };
      this.touches = { ONE: s.ROTATE, TWO: s.DOLLY_PAN };
      this.target0 = this.target.clone();
      this.position0 = this.object.position.clone();
      this.zoom0 = this.object.zoom;
      this._domElementKeyEvents = null;
      this._lastPosition = new Ks();
      this._lastQuaternion = new Qs();
      this._lastTargetPosition = new Ks();
      this._quat = new Qs().setFromUnitVectors(object.up, new Ks(0, 1, 0));
      this._quatInverse = this._quat.clone().invert();
      this._spherical = new Zu();
      this._sphericalDelta = new Zu();
      this._scale = 1;
      this._panOffset = new Ks();
      this._rotateStart = new $s();
      this._rotateEnd = new $s();
      this._rotateDelta = new $s();
      this._panStart = new $s();
      this._panEnd = new $s();
      this._panDelta = new $s();
      this._dollyStart = new $s();
      this._dollyEnd = new $s();
      this._dollyDelta = new $s();
      this._dollyDirection = new Ks();
      this._mouse = new $s();
      this._performCursorZoom = false;
      this._pointers = [];
      this._pointerPositions = {};
      this._controlActive = false;
      this._onPointerMove = onPointerMove.bind(this);
      this._onPointerDown = onPointerDown.bind(this);
      this._onPointerUp = onPointerUp.bind(this);
      this._onContextMenu = onContextMenu.bind(this);
      this._onMouseWheel = onMouseWheel.bind(this);
      this._onKeyDown = onKeyDown.bind(this);
      this._onTouchStart = onTouchStart.bind(this);
      this._onTouchMove = onTouchMove.bind(this);
      this._onMouseDown = onMouseDown.bind(this);
      this._onMouseMove = onMouseMove.bind(this);
      this._interceptControlDown = interceptControlDown.bind(this);
      this._interceptControlUp = interceptControlUp.bind(this);
      if (this.domElement !== null) {
        this.connect(this.domElement);
      }
      this.update();
    }
    connect(element) {
      super.connect(element);
      this.domElement.addEventListener("pointerdown", this._onPointerDown);
      this.domElement.addEventListener("pointercancel", this._onPointerUp);
      this.domElement.addEventListener("contextmenu", this._onContextMenu);
      this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false });
      const document2 = this.domElement.getRootNode();
      document2.addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true });
      this.domElement.style.touchAction = "none";
    }
    disconnect() {
      this.domElement.removeEventListener("pointerdown", this._onPointerDown);
      this.domElement.removeEventListener("pointermove", this._onPointerMove);
      this.domElement.removeEventListener("pointerup", this._onPointerUp);
      this.domElement.removeEventListener("pointercancel", this._onPointerUp);
      this.domElement.removeEventListener("wheel", this._onMouseWheel);
      this.domElement.removeEventListener("contextmenu", this._onContextMenu);
      this.stopListenToKeyEvents();
      const document2 = this.domElement.getRootNode();
      document2.removeEventListener("keydown", this._interceptControlDown, { capture: true });
      this.domElement.style.touchAction = "auto";
    }
    dispose() {
      this.disconnect();
    }
    /**
     * Get the current vertical rotation, in radians.
     *
     * @return {number} The current vertical rotation, in radians.
     */
    getPolarAngle() {
      return this._spherical.phi;
    }
    /**
     * Get the current horizontal rotation, in radians.
     *
     * @return {number} The current horizontal rotation, in radians.
     */
    getAzimuthalAngle() {
      return this._spherical.theta;
    }
    /**
     * Returns the distance from the camera to the target.
     *
     * @return {number} The distance from the camera to the target.
     */
    getDistance() {
      return this.object.position.distanceTo(this.target);
    }
    /**
     * Adds key event listeners to the given DOM element.
     * `window` is a recommended argument for using this method.
     *
     * @param {HTMLDOMElement} domElement - The DOM element
     */
    listenToKeyEvents(domElement) {
      domElement.addEventListener("keydown", this._onKeyDown);
      this._domElementKeyEvents = domElement;
    }
    /**
     * Removes the key event listener previously defined with `listenToKeyEvents()`.
     */
    stopListenToKeyEvents() {
      if (this._domElementKeyEvents !== null) {
        this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown);
        this._domElementKeyEvents = null;
      }
    }
    /**
     * Save the current state of the controls. This can later be recovered with `reset()`.
     */
    saveState() {
      this.target0.copy(this.target);
      this.position0.copy(this.object.position);
      this.zoom0 = this.object.zoom;
    }
    /**
     * Reset the controls to their state from either the last time the `saveState()`
     * was called, or the initial state.
     */
    reset() {
      this.target.copy(this.target0);
      this.object.position.copy(this.position0);
      this.object.zoom = this.zoom0;
      this.object.updateProjectionMatrix();
      this.dispatchEvent(_changeEvent);
      this.update();
      this.state = _STATE.NONE;
    }
    update(deltaTime = null) {
      const position = this.object.position;
      _v.copy(position).sub(this.target);
      _v.applyQuaternion(this._quat);
      this._spherical.setFromVector3(_v);
      if (this.autoRotate && this.state === _STATE.NONE) {
        this._rotateLeft(this._getAutoRotationAngle(deltaTime));
      }
      if (this.enableDamping) {
        this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor;
        this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor;
      } else {
        this._spherical.theta += this._sphericalDelta.theta;
        this._spherical.phi += this._sphericalDelta.phi;
      }
      let min = this.minAzimuthAngle;
      let max = this.maxAzimuthAngle;
      if (isFinite(min) && isFinite(max)) {
        if (min < -Math.PI) min += _twoPI;
        else if (min > Math.PI) min -= _twoPI;
        if (max < -Math.PI) max += _twoPI;
        else if (max > Math.PI) max -= _twoPI;
        if (min <= max) {
          this._spherical.theta = Math.max(min, Math.min(max, this._spherical.theta));
        } else {
          this._spherical.theta = this._spherical.theta > (min + max) / 2 ? Math.max(min, this._spherical.theta) : Math.min(max, this._spherical.theta);
        }
      }
      this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi));
      this._spherical.makeSafe();
      if (this.enableDamping === true) {
        this.target.addScaledVector(this._panOffset, this.dampingFactor);
      } else {
        this.target.add(this._panOffset);
      }
      this.target.sub(this.cursor);
      this.target.clampLength(this.minTargetRadius, this.maxTargetRadius);
      this.target.add(this.cursor);
      let zoomChanged = false;
      if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) {
        this._spherical.radius = this._clampDistance(this._spherical.radius);
      } else {
        const prevRadius = this._spherical.radius;
        this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale);
        zoomChanged = prevRadius != this._spherical.radius;
      }
      _v.setFromSpherical(this._spherical);
      _v.applyQuaternion(this._quatInverse);
      position.copy(this.target).add(_v);
      this.object.lookAt(this.target);
      if (this.enableDamping === true) {
        this._sphericalDelta.theta *= 1 - this.dampingFactor;
        this._sphericalDelta.phi *= 1 - this.dampingFactor;
        this._panOffset.multiplyScalar(1 - this.dampingFactor);
      } else {
        this._sphericalDelta.set(0, 0, 0);
        this._panOffset.set(0, 0, 0);
      }
      if (this.zoomToCursor && this._performCursorZoom) {
        let newRadius = null;
        if (this.object.isPerspectiveCamera) {
          const prevRadius = _v.length();
          newRadius = this._clampDistance(prevRadius * this._scale);
          const radiusDelta = prevRadius - newRadius;
          this.object.position.addScaledVector(this._dollyDirection, radiusDelta);
          this.object.updateMatrixWorld();
          zoomChanged = !!radiusDelta;
        } else if (this.object.isOrthographicCamera) {
          const mouseBefore = new Ks(this._mouse.x, this._mouse.y, 0);
          mouseBefore.unproject(this.object);
          const prevZoom = this.object.zoom;
          this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale));
          this.object.updateProjectionMatrix();
          zoomChanged = prevZoom !== this.object.zoom;
          const mouseAfter = new Ks(this._mouse.x, this._mouse.y, 0);
          mouseAfter.unproject(this.object);
          this.object.position.sub(mouseAfter).add(mouseBefore);
          this.object.updateMatrixWorld();
          newRadius = _v.length();
        } else {
          console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.");
          this.zoomToCursor = false;
        }
        if (newRadius !== null) {
          if (this.screenSpacePanning) {
            this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(newRadius).add(this.object.position);
          } else {
            _ray.origin.copy(this.object.position);
            _ray.direction.set(0, 0, -1).transformDirection(this.object.matrix);
            if (Math.abs(this.object.up.dot(_ray.direction)) < _TILT_LIMIT) {
              this.object.lookAt(this.target);
            } else {
              _plane.setFromNormalAndCoplanarPoint(this.object.up, this.target);
              _ray.intersectPlane(_plane, this.target);
            }
          }
        }
      } else if (this.object.isOrthographicCamera) {
        const prevZoom = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale));
        if (prevZoom !== this.object.zoom) {
          this.object.updateProjectionMatrix();
          zoomChanged = true;
        }
      }
      this._scale = 1;
      this._performCursorZoom = false;
      if (zoomChanged || this._lastPosition.distanceToSquared(this.object.position) > _EPS || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > _EPS || this._lastTargetPosition.distanceToSquared(this.target) > _EPS) {
        this.dispatchEvent(_changeEvent);
        this._lastPosition.copy(this.object.position);
        this._lastQuaternion.copy(this.object.quaternion);
        this._lastTargetPosition.copy(this.target);
        return true;
      }
      return false;
    }
    _getAutoRotationAngle(deltaTime) {
      if (deltaTime !== null) {
        return _twoPI / 60 * this.autoRotateSpeed * deltaTime;
      } else {
        return _twoPI / 60 / 60 * this.autoRotateSpeed;
      }
    }
    _getZoomScale(delta) {
      const normalizedDelta = Math.abs(delta * 0.01);
      return Math.pow(0.95, this.zoomSpeed * normalizedDelta);
    }
    _rotateLeft(angle) {
      this._sphericalDelta.theta -= angle;
    }
    _rotateUp(angle) {
      this._sphericalDelta.phi -= angle;
    }
    _panLeft(distance, objectMatrix) {
      _v.setFromMatrixColumn(objectMatrix, 0);
      _v.multiplyScalar(-distance);
      this._panOffset.add(_v);
    }
    _panUp(distance, objectMatrix) {
      if (this.screenSpacePanning === true) {
        _v.setFromMatrixColumn(objectMatrix, 1);
      } else {
        _v.setFromMatrixColumn(objectMatrix, 0);
        _v.crossVectors(this.object.up, _v);
      }
      _v.multiplyScalar(distance);
      this._panOffset.add(_v);
    }
    // deltaX and deltaY are in pixels; right and down are positive
    _pan(deltaX, deltaY) {
      const element = this.domElement;
      if (this.object.isPerspectiveCamera) {
        const position = this.object.position;
        _v.copy(position).sub(this.target);
        let targetDistance = _v.length();
        targetDistance *= Math.tan(this.object.fov / 2 * Math.PI / 180);
        this._panLeft(2 * deltaX * targetDistance / element.clientHeight, this.object.matrix);
        this._panUp(2 * deltaY * targetDistance / element.clientHeight, this.object.matrix);
      } else if (this.object.isOrthographicCamera) {
        this._panLeft(deltaX * (this.object.right - this.object.left) / this.object.zoom / element.clientWidth, this.object.matrix);
        this._panUp(deltaY * (this.object.top - this.object.bottom) / this.object.zoom / element.clientHeight, this.object.matrix);
      } else {
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.");
        this.enablePan = false;
      }
    }
    _dollyOut(dollyScale) {
      if (this.object.isPerspectiveCamera || this.object.isOrthographicCamera) {
        this._scale /= dollyScale;
      } else {
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
        this.enableZoom = false;
      }
    }
    _dollyIn(dollyScale) {
      if (this.object.isPerspectiveCamera || this.object.isOrthographicCamera) {
        this._scale *= dollyScale;
      } else {
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
        this.enableZoom = false;
      }
    }
    _updateZoomParameters(x2, y2) {
      if (!this.zoomToCursor) {
        return;
      }
      this._performCursorZoom = true;
      const rect = this.domElement.getBoundingClientRect();
      const dx = x2 - rect.left;
      const dy = y2 - rect.top;
      const w2 = rect.width;
      const h2 = rect.height;
      this._mouse.x = dx / w2 * 2 - 1;
      this._mouse.y = -(dy / h2) * 2 + 1;
      this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
    }
    _clampDistance(dist) {
      return Math.max(this.minDistance, Math.min(this.maxDistance, dist));
    }
    //
    // event callbacks - update the object state
    //
    _handleMouseDownRotate(event) {
      this._rotateStart.set(event.clientX, event.clientY);
    }
    _handleMouseDownDolly(event) {
      this._updateZoomParameters(event.clientX, event.clientX);
      this._dollyStart.set(event.clientX, event.clientY);
    }
    _handleMouseDownPan(event) {
      this._panStart.set(event.clientX, event.clientY);
    }
    _handleMouseMoveRotate(event) {
      this._rotateEnd.set(event.clientX, event.clientY);
      this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
      const element = this.domElement;
      this._rotateLeft(_twoPI * this._rotateDelta.x / element.clientHeight);
      this._rotateUp(_twoPI * this._rotateDelta.y / element.clientHeight);
      this._rotateStart.copy(this._rotateEnd);
      this.update();
    }
    _handleMouseMoveDolly(event) {
      this._dollyEnd.set(event.clientX, event.clientY);
      this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart);
      if (this._dollyDelta.y > 0) {
        this._dollyOut(this._getZoomScale(this._dollyDelta.y));
      } else if (this._dollyDelta.y < 0) {
        this._dollyIn(this._getZoomScale(this._dollyDelta.y));
      }
      this._dollyStart.copy(this._dollyEnd);
      this.update();
    }
    _handleMouseMovePan(event) {
      this._panEnd.set(event.clientX, event.clientY);
      this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed);
      this._pan(this._panDelta.x, this._panDelta.y);
      this._panStart.copy(this._panEnd);
      this.update();
    }
    _handleMouseWheel(event) {
      this._updateZoomParameters(event.clientX, event.clientY);
      if (event.deltaY < 0) {
        this._dollyIn(this._getZoomScale(event.deltaY));
      } else if (event.deltaY > 0) {
        this._dollyOut(this._getZoomScale(event.deltaY));
      }
      this.update();
    }
    _handleKeyDown(event) {
      let needsUpdate = false;
      switch (event.code) {
        case this.keys.UP:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (this.enableRotate) {
              this._rotateUp(_twoPI * this.keyRotateSpeed / this.domElement.clientHeight);
            }
          } else {
            if (this.enablePan) {
              this._pan(0, this.keyPanSpeed);
            }
          }
          needsUpdate = true;
          break;
        case this.keys.BOTTOM:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (this.enableRotate) {
              this._rotateUp(-_twoPI * this.keyRotateSpeed / this.domElement.clientHeight);
            }
          } else {
            if (this.enablePan) {
              this._pan(0, -this.keyPanSpeed);
            }
          }
          needsUpdate = true;
          break;
        case this.keys.LEFT:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (this.enableRotate) {
              this._rotateLeft(_twoPI * this.keyRotateSpeed / this.domElement.clientHeight);
            }
          } else {
            if (this.enablePan) {
              this._pan(this.keyPanSpeed, 0);
            }
          }
          needsUpdate = true;
          break;
        case this.keys.RIGHT:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (this.enableRotate) {
              this._rotateLeft(-_twoPI * this.keyRotateSpeed / this.domElement.clientHeight);
            }
          } else {
            if (this.enablePan) {
              this._pan(-this.keyPanSpeed, 0);
            }
          }
          needsUpdate = true;
          break;
      }
      if (needsUpdate) {
        event.preventDefault();
        this.update();
      }
    }
    _handleTouchStartRotate(event) {
      if (this._pointers.length === 1) {
        this._rotateStart.set(event.pageX, event.pageY);
      } else {
        const position = this._getSecondPointerPosition(event);
        const x2 = 0.5 * (event.pageX + position.x);
        const y2 = 0.5 * (event.pageY + position.y);
        this._rotateStart.set(x2, y2);
      }
    }
    _handleTouchStartPan(event) {
      if (this._pointers.length === 1) {
        this._panStart.set(event.pageX, event.pageY);
      } else {
        const position = this._getSecondPointerPosition(event);
        const x2 = 0.5 * (event.pageX + position.x);
        const y2 = 0.5 * (event.pageY + position.y);
        this._panStart.set(x2, y2);
      }
    }
    _handleTouchStartDolly(event) {
      const position = this._getSecondPointerPosition(event);
      const dx = event.pageX - position.x;
      const dy = event.pageY - position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      this._dollyStart.set(0, distance);
    }
    _handleTouchStartDollyPan(event) {
      if (this.enableZoom) this._handleTouchStartDolly(event);
      if (this.enablePan) this._handleTouchStartPan(event);
    }
    _handleTouchStartDollyRotate(event) {
      if (this.enableZoom) this._handleTouchStartDolly(event);
      if (this.enableRotate) this._handleTouchStartRotate(event);
    }
    _handleTouchMoveRotate(event) {
      if (this._pointers.length == 1) {
        this._rotateEnd.set(event.pageX, event.pageY);
      } else {
        const position = this._getSecondPointerPosition(event);
        const x2 = 0.5 * (event.pageX + position.x);
        const y2 = 0.5 * (event.pageY + position.y);
        this._rotateEnd.set(x2, y2);
      }
      this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
      const element = this.domElement;
      this._rotateLeft(_twoPI * this._rotateDelta.x / element.clientHeight);
      this._rotateUp(_twoPI * this._rotateDelta.y / element.clientHeight);
      this._rotateStart.copy(this._rotateEnd);
    }
    _handleTouchMovePan(event) {
      if (this._pointers.length === 1) {
        this._panEnd.set(event.pageX, event.pageY);
      } else {
        const position = this._getSecondPointerPosition(event);
        const x2 = 0.5 * (event.pageX + position.x);
        const y2 = 0.5 * (event.pageY + position.y);
        this._panEnd.set(x2, y2);
      }
      this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed);
      this._pan(this._panDelta.x, this._panDelta.y);
      this._panStart.copy(this._panEnd);
    }
    _handleTouchMoveDolly(event) {
      const position = this._getSecondPointerPosition(event);
      const dx = event.pageX - position.x;
      const dy = event.pageY - position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      this._dollyEnd.set(0, distance);
      this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed));
      this._dollyOut(this._dollyDelta.y);
      this._dollyStart.copy(this._dollyEnd);
      const centerX = (event.pageX + position.x) * 0.5;
      const centerY = (event.pageY + position.y) * 0.5;
      this._updateZoomParameters(centerX, centerY);
    }
    _handleTouchMoveDollyPan(event) {
      if (this.enableZoom) this._handleTouchMoveDolly(event);
      if (this.enablePan) this._handleTouchMovePan(event);
    }
    _handleTouchMoveDollyRotate(event) {
      if (this.enableZoom) this._handleTouchMoveDolly(event);
      if (this.enableRotate) this._handleTouchMoveRotate(event);
    }
    // pointers
    _addPointer(event) {
      this._pointers.push(event.pointerId);
    }
    _removePointer(event) {
      delete this._pointerPositions[event.pointerId];
      for (let i2 = 0; i2 < this._pointers.length; i2++) {
        if (this._pointers[i2] == event.pointerId) {
          this._pointers.splice(i2, 1);
          return;
        }
      }
    }
    _isTrackingPointer(event) {
      for (let i2 = 0; i2 < this._pointers.length; i2++) {
        if (this._pointers[i2] == event.pointerId) return true;
      }
      return false;
    }
    _trackPointer(event) {
      let position = this._pointerPositions[event.pointerId];
      if (position === void 0) {
        position = new $s();
        this._pointerPositions[event.pointerId] = position;
      }
      position.set(event.pageX, event.pageY);
    }
    _getSecondPointerPosition(event) {
      const pointerId = event.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
      return this._pointerPositions[pointerId];
    }
    //
    _customWheelEvent(event) {
      const mode = event.deltaMode;
      const newEvent = {
        clientX: event.clientX,
        clientY: event.clientY,
        deltaY: event.deltaY
      };
      switch (mode) {
        case 1:
          newEvent.deltaY *= 16;
          break;
        case 2:
          newEvent.deltaY *= 100;
          break;
      }
      if (event.ctrlKey && !this._controlActive) {
        newEvent.deltaY *= 10;
      }
      return newEvent;
    }
  };
  function onPointerDown(event) {
    if (this.enabled === false) return;
    if (this._pointers.length === 0) {
      this.domElement.setPointerCapture(event.pointerId);
      this.domElement.addEventListener("pointermove", this._onPointerMove);
      this.domElement.addEventListener("pointerup", this._onPointerUp);
    }
    if (this._isTrackingPointer(event)) return;
    this._addPointer(event);
    if (event.pointerType === "touch") {
      this._onTouchStart(event);
    } else {
      this._onMouseDown(event);
    }
  }
  function onPointerMove(event) {
    if (this.enabled === false) return;
    if (event.pointerType === "touch") {
      this._onTouchMove(event);
    } else {
      this._onMouseMove(event);
    }
  }
  function onPointerUp(event) {
    this._removePointer(event);
    switch (this._pointers.length) {
      case 0:
        this.domElement.releasePointerCapture(event.pointerId);
        this.domElement.removeEventListener("pointermove", this._onPointerMove);
        this.domElement.removeEventListener("pointerup", this._onPointerUp);
        this.dispatchEvent(_endEvent);
        this.state = _STATE.NONE;
        break;
      case 1:
        const pointerId = this._pointers[0];
        const position = this._pointerPositions[pointerId];
        this._onTouchStart({ pointerId, pageX: position.x, pageY: position.y });
        break;
    }
  }
  function onMouseDown(event) {
    let mouseAction;
    switch (event.button) {
      case 0:
        mouseAction = this.mouseButtons.LEFT;
        break;
      case 1:
        mouseAction = this.mouseButtons.MIDDLE;
        break;
      case 2:
        mouseAction = this.mouseButtons.RIGHT;
        break;
      default:
        mouseAction = -1;
    }
    switch (mouseAction) {
      case e.DOLLY:
        if (this.enableZoom === false) return;
        this._handleMouseDownDolly(event);
        this.state = _STATE.DOLLY;
        break;
      case e.ROTATE:
        if (event.ctrlKey || event.metaKey || event.shiftKey) {
          if (this.enablePan === false) return;
          this._handleMouseDownPan(event);
          this.state = _STATE.PAN;
        } else {
          if (this.enableRotate === false) return;
          this._handleMouseDownRotate(event);
          this.state = _STATE.ROTATE;
        }
        break;
      case e.PAN:
        if (event.ctrlKey || event.metaKey || event.shiftKey) {
          if (this.enableRotate === false) return;
          this._handleMouseDownRotate(event);
          this.state = _STATE.ROTATE;
        } else {
          if (this.enablePan === false) return;
          this._handleMouseDownPan(event);
          this.state = _STATE.PAN;
        }
        break;
      default:
        this.state = _STATE.NONE;
    }
    if (this.state !== _STATE.NONE) {
      this.dispatchEvent(_startEvent);
    }
  }
  function onMouseMove(event) {
    switch (this.state) {
      case _STATE.ROTATE:
        if (this.enableRotate === false) return;
        this._handleMouseMoveRotate(event);
        break;
      case _STATE.DOLLY:
        if (this.enableZoom === false) return;
        this._handleMouseMoveDolly(event);
        break;
      case _STATE.PAN:
        if (this.enablePan === false) return;
        this._handleMouseMovePan(event);
        break;
    }
  }
  function onMouseWheel(event) {
    if (this.enabled === false || this.enableZoom === false || this.state !== _STATE.NONE) return;
    event.preventDefault();
    this.dispatchEvent(_startEvent);
    this._handleMouseWheel(this._customWheelEvent(event));
    this.dispatchEvent(_endEvent);
  }
  function onKeyDown(event) {
    if (this.enabled === false) return;
    this._handleKeyDown(event);
  }
  function onTouchStart(event) {
    this._trackPointer(event);
    switch (this._pointers.length) {
      case 1:
        switch (this.touches.ONE) {
          case s.ROTATE:
            if (this.enableRotate === false) return;
            this._handleTouchStartRotate(event);
            this.state = _STATE.TOUCH_ROTATE;
            break;
          case s.PAN:
            if (this.enablePan === false) return;
            this._handleTouchStartPan(event);
            this.state = _STATE.TOUCH_PAN;
            break;
          default:
            this.state = _STATE.NONE;
        }
        break;
      case 2:
        switch (this.touches.TWO) {
          case s.DOLLY_PAN:
            if (this.enableZoom === false && this.enablePan === false) return;
            this._handleTouchStartDollyPan(event);
            this.state = _STATE.TOUCH_DOLLY_PAN;
            break;
          case s.DOLLY_ROTATE:
            if (this.enableZoom === false && this.enableRotate === false) return;
            this._handleTouchStartDollyRotate(event);
            this.state = _STATE.TOUCH_DOLLY_ROTATE;
            break;
          default:
            this.state = _STATE.NONE;
        }
        break;
      default:
        this.state = _STATE.NONE;
    }
    if (this.state !== _STATE.NONE) {
      this.dispatchEvent(_startEvent);
    }
  }
  function onTouchMove(event) {
    this._trackPointer(event);
    switch (this.state) {
      case _STATE.TOUCH_ROTATE:
        if (this.enableRotate === false) return;
        this._handleTouchMoveRotate(event);
        this.update();
        break;
      case _STATE.TOUCH_PAN:
        if (this.enablePan === false) return;
        this._handleTouchMovePan(event);
        this.update();
        break;
      case _STATE.TOUCH_DOLLY_PAN:
        if (this.enableZoom === false && this.enablePan === false) return;
        this._handleTouchMoveDollyPan(event);
        this.update();
        break;
      case _STATE.TOUCH_DOLLY_ROTATE:
        if (this.enableZoom === false && this.enableRotate === false) return;
        this._handleTouchMoveDollyRotate(event);
        this.update();
        break;
      default:
        this.state = _STATE.NONE;
    }
  }
  function onContextMenu(event) {
    if (this.enabled === false) return;
    event.preventDefault();
  }
  function interceptControlDown(event) {
    if (event.key === "Control") {
      this._controlActive = true;
      const document2 = this.domElement.getRootNode();
      document2.addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true });
    }
  }
  function interceptControlUp(event) {
    if (event.key === "Control") {
      this._controlActive = false;
      const document2 = this.domElement.getRootNode();
      document2.removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true });
    }
  }

  // work/cad_import_20260802/digital_twin_preview/utils/BufferGeometryUtils.js
  function toTrianglesDrawMode(geometry, drawMode) {
    if (drawMode === Le) {
      console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.");
      return geometry;
    }
    if (drawMode === De || drawMode === je) {
      let index = geometry.getIndex();
      if (index === null) {
        const indices = [];
        const position = geometry.getAttribute("position");
        if (position !== void 0) {
          for (let i2 = 0; i2 < position.count; i2++) {
            indices.push(i2);
          }
          geometry.setIndex(indices);
          index = geometry.getIndex();
        } else {
          console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.");
          return geometry;
        }
      }
      const numberOfTriangles = index.count - 2;
      const newIndices = [];
      if (drawMode === De) {
        for (let i2 = 1; i2 <= numberOfTriangles; i2++) {
          newIndices.push(index.getX(0));
          newIndices.push(index.getX(i2));
          newIndices.push(index.getX(i2 + 1));
        }
      } else {
        for (let i2 = 0; i2 < numberOfTriangles; i2++) {
          if (i2 % 2 === 0) {
            newIndices.push(index.getX(i2));
            newIndices.push(index.getX(i2 + 1));
            newIndices.push(index.getX(i2 + 2));
          } else {
            newIndices.push(index.getX(i2 + 2));
            newIndices.push(index.getX(i2 + 1));
            newIndices.push(index.getX(i2));
          }
        }
      }
      if (newIndices.length / 3 !== numberOfTriangles) {
        console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
      }
      const newGeometry = geometry.clone();
      newGeometry.setIndex(newIndices);
      newGeometry.clearGroups();
      return newGeometry;
    } else {
      console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", drawMode);
      return geometry;
    }
  }

  // work/cad_import_20260802/digital_twin_preview/vendor/GLTFLoader.js
  var GLTFLoader = class extends gc {
    /**
     * Constructs a new glTF loader.
     *
     * @param {LoadingManager} [manager] - The loading manager.
     */
    constructor(manager) {
      super(manager);
      this.dracoLoader = null;
      this.ktx2Loader = null;
      this.meshoptDecoder = null;
      this.pluginCallbacks = [];
      this.register(function(parser) {
        return new GLTFMaterialsClearcoatExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsDispersionExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFTextureBasisUExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFTextureWebPExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFTextureAVIFExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsSheenExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsTransmissionExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsVolumeExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsIorExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsEmissiveStrengthExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsSpecularExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsIridescenceExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsAnisotropyExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMaterialsBumpExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFLightsExtension(parser);
      });
      this.register(function(parser) {
        return new GLTFMeshoptCompression(parser);
      });
      this.register(function(parser) {
        return new GLTFMeshGpuInstancing(parser);
      });
    }
    /**
     * Starts loading from the given URL and passes the loaded glTF asset
     * to the `onLoad()` callback.
     *
     * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
     * @param {function(GLTFLoader~LoadObject)} onLoad - Executed when the loading process has been finished.
     * @param {onProgressCallback} onProgress - Executed while the loading is in progress.
     * @param {onErrorCallback} onError - Executed when errors occur.
     */
    load(url, onLoad, onProgress, onError) {
      const scope = this;
      let resourcePath;
      if (this.resourcePath !== "") {
        resourcePath = this.resourcePath;
      } else if (this.path !== "") {
        const relativeUrl = Yc.extractUrlBase(url);
        resourcePath = Yc.resolveURL(relativeUrl, this.path);
      } else {
        resourcePath = Yc.extractUrlBase(url);
      }
      this.manager.itemStart(url);
      const _onError = function(e2) {
        if (onError) {
          onError(e2);
        } else {
          console.error(e2);
        }
        scope.manager.itemError(url);
        scope.manager.itemEnd(url);
      };
      const loader2 = new bc(this.manager);
      loader2.setPath(this.path);
      loader2.setResponseType("arraybuffer");
      loader2.setRequestHeader(this.requestHeader);
      loader2.setWithCredentials(this.withCredentials);
      loader2.load(url, function(data) {
        try {
          scope.parse(data, resourcePath, function(gltf) {
            onLoad(gltf);
            scope.manager.itemEnd(url);
          }, _onError);
        } catch (e2) {
          _onError(e2);
        }
      }, onProgress, _onError);
    }
    /**
     * Sets the given Draco loader to this loader. Required for decoding assets
     * compressed with the `KHR_draco_mesh_compression` extension.
     *
     * @param {DRACOLoader} dracoLoader - The Draco loader to set.
     * @return {GLTFLoader} A reference to this loader.
     */
    setDRACOLoader(dracoLoader) {
      this.dracoLoader = dracoLoader;
      return this;
    }
    /**
     * Sets the given KTX2 loader to this loader. Required for loading KTX2
     * compressed textures.
     *
     * @param {KTX2Loader} ktx2Loader - The KTX2 loader to set.
     * @return {GLTFLoader} A reference to this loader.
     */
    setKTX2Loader(ktx2Loader) {
      this.ktx2Loader = ktx2Loader;
      return this;
    }
    /**
     * Sets the given meshopt decoder. Required for decoding assets
     * compressed with the `EXT_meshopt_compression` extension.
     *
     * @param {Object} meshoptDecoder - The meshopt decoder to set.
     * @return {GLTFLoader} A reference to this loader.
     */
    setMeshoptDecoder(meshoptDecoder) {
      this.meshoptDecoder = meshoptDecoder;
      return this;
    }
    /**
     * Registers a plugin callback. This API is internally used to implement the various
     * glTF extensions but can also used by third-party code to add additional logic
     * to the loader.
     *
     * @param {function(parser:GLTFParser)} callback - The callback function to register.
     * @return {GLTFLoader} A reference to this loader.
     */
    register(callback) {
      if (this.pluginCallbacks.indexOf(callback) === -1) {
        this.pluginCallbacks.push(callback);
      }
      return this;
    }
    /**
     * Unregisters a plugin callback.
     *
     * @param {Function} callback - The callback function to unregister.
     * @return {GLTFLoader} A reference to this loader.
     */
    unregister(callback) {
      if (this.pluginCallbacks.indexOf(callback) !== -1) {
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(callback), 1);
      }
      return this;
    }
    /**
     * Parses the given FBX data and returns the resulting group.
     *
     * @param {string|ArrayBuffer} data - The raw glTF data.
     * @param {string} path - The URL base path.
     * @param {function(GLTFLoader~LoadObject)} onLoad - Executed when the loading process has been finished.
     * @param {onErrorCallback} onError - Executed when errors occur.
     */
    parse(data, path, onLoad, onError) {
      let json;
      const extensions = {};
      const plugins = {};
      const textDecoder = new TextDecoder();
      if (typeof data === "string") {
        json = JSON.parse(data);
      } else if (data instanceof ArrayBuffer) {
        const magic = textDecoder.decode(new Uint8Array(data, 0, 4));
        if (magic === BINARY_EXTENSION_HEADER_MAGIC) {
          try {
            extensions[EXTENSIONS.KHR_BINARY_GLTF] = new GLTFBinaryExtension(data);
          } catch (error) {
            if (onError) onError(error);
            return;
          }
          json = JSON.parse(extensions[EXTENSIONS.KHR_BINARY_GLTF].content);
        } else {
          json = JSON.parse(textDecoder.decode(data));
        }
      } else {
        json = data;
      }
      if (json.asset === void 0 || json.asset.version[0] < 2) {
        if (onError) onError(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
        return;
      }
      const parser = new GLTFParser(json, {
        path: path || this.resourcePath || "",
        crossOrigin: this.crossOrigin,
        requestHeader: this.requestHeader,
        manager: this.manager,
        ktx2Loader: this.ktx2Loader,
        meshoptDecoder: this.meshoptDecoder
      });
      parser.fileLoader.setRequestHeader(this.requestHeader);
      for (let i2 = 0; i2 < this.pluginCallbacks.length; i2++) {
        const plugin = this.pluginCallbacks[i2](parser);
        if (!plugin.name) console.error("THREE.GLTFLoader: Invalid plugin found: missing name");
        plugins[plugin.name] = plugin;
        extensions[plugin.name] = true;
      }
      if (json.extensionsUsed) {
        for (let i2 = 0; i2 < json.extensionsUsed.length; ++i2) {
          const extensionName = json.extensionsUsed[i2];
          const extensionsRequired = json.extensionsRequired || [];
          switch (extensionName) {
            case EXTENSIONS.KHR_MATERIALS_UNLIT:
              extensions[extensionName] = new GLTFMaterialsUnlitExtension();
              break;
            case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
              extensions[extensionName] = new GLTFDracoMeshCompressionExtension(json, this.dracoLoader);
              break;
            case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
              extensions[extensionName] = new GLTFTextureTransformExtension();
              break;
            case EXTENSIONS.KHR_MESH_QUANTIZATION:
              extensions[extensionName] = new GLTFMeshQuantizationExtension();
              break;
            default:
              if (extensionsRequired.indexOf(extensionName) >= 0 && plugins[extensionName] === void 0) {
                console.warn('THREE.GLTFLoader: Unknown extension "' + extensionName + '".');
              }
          }
        }
      }
      parser.setExtensions(extensions);
      parser.setPlugins(plugins);
      parser.parse(onLoad, onError);
    }
    /**
     * Async version of {@link GLTFLoader#parse}.
     *
     * @async
     * @param {string|ArrayBuffer} data - The raw glTF data.
     * @param {string} path - The URL base path.
     * @return {Promise<GLTFLoader~LoadObject>} A Promise that resolves with the loaded glTF when the parsing has been finished.
     */
    parseAsync(data, path) {
      const scope = this;
      return new Promise(function(resolve, reject) {
        scope.parse(data, path, resolve, reject);
      });
    }
  };
  function GLTFRegistry() {
    let objects = {};
    return {
      get: function(key2) {
        return objects[key2];
      },
      add: function(key2, object) {
        objects[key2] = object;
      },
      remove: function(key2) {
        delete objects[key2];
      },
      removeAll: function() {
        objects = {};
      }
    };
  }
  var EXTENSIONS = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
    KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
    EXT_MATERIALS_BUMP: "EXT_materials_bump",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_TEXTURE_AVIF: "EXT_texture_avif",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
    EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
  };
  var GLTFLightsExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;
      this.cache = { refs: {}, uses: {} };
    }
    _markDefs() {
      const parser = this.parser;
      const nodeDefs = this.parser.json.nodes || [];
      for (let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++) {
        const nodeDef = nodeDefs[nodeIndex];
        if (nodeDef.extensions && nodeDef.extensions[this.name] && nodeDef.extensions[this.name].light !== void 0) {
          parser._addNodeRef(this.cache, nodeDef.extensions[this.name].light);
        }
      }
    }
    _loadLight(lightIndex) {
      const parser = this.parser;
      const cacheKey = "light:" + lightIndex;
      let dependency = parser.cache.get(cacheKey);
      if (dependency) return dependency;
      const json = parser.json;
      const extensions = json.extensions && json.extensions[this.name] || {};
      const lightDefs = extensions.lights || [];
      const lightDef = lightDefs[lightIndex];
      let lightNode;
      const color = new Qr(16777215);
      if (lightDef.color !== void 0) color.setRGB(lightDef.color[0], lightDef.color[1], lightDef.color[2], Ge);
      const range = lightDef.range !== void 0 ? lightDef.range : 0;
      switch (lightDef.type) {
        case "directional":
          lightNode = new Wc(color);
          lightNode.target.position.set(0, 0, -1);
          lightNode.add(lightNode.target);
          break;
        case "point":
          lightNode = new Lc(color);
          lightNode.distance = range;
          break;
        case "spot":
          lightNode = new Pc(color);
          lightNode.distance = range;
          lightDef.spot = lightDef.spot || {};
          lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== void 0 ? lightDef.spot.innerConeAngle : 0;
          lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== void 0 ? lightDef.spot.outerConeAngle : Math.PI / 4;
          lightNode.angle = lightDef.spot.outerConeAngle;
          lightNode.penumbra = 1 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
          lightNode.target.position.set(0, 0, -1);
          lightNode.add(lightNode.target);
          break;
        default:
          throw new Error("THREE.GLTFLoader: Unexpected light type: " + lightDef.type);
      }
      lightNode.position.set(0, 0, 0);
      assignExtrasToUserData(lightNode, lightDef);
      if (lightDef.intensity !== void 0) lightNode.intensity = lightDef.intensity;
      lightNode.name = parser.createUniqueName(lightDef.name || "light_" + lightIndex);
      dependency = Promise.resolve(lightNode);
      parser.cache.add(cacheKey, dependency);
      return dependency;
    }
    getDependency(type, index) {
      if (type !== "light") return;
      return this._loadLight(index);
    }
    createNodeAttachment(nodeIndex) {
      const self2 = this;
      const parser = this.parser;
      const json = parser.json;
      const nodeDef = json.nodes[nodeIndex];
      const lightDef = nodeDef.extensions && nodeDef.extensions[this.name] || {};
      const lightIndex = lightDef.light;
      if (lightIndex === void 0) return null;
      return this._loadLight(lightIndex).then(function(light) {
        return parser._getNodeRef(self2.cache, lightIndex, light);
      });
    }
  };
  var GLTFMaterialsUnlitExtension = class {
    constructor() {
      this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
      return sn;
    }
    extendParams(materialParams, materialDef, parser) {
      const pending = [];
      materialParams.color = new Qr(1, 1, 1);
      materialParams.opacity = 1;
      const metallicRoughness = materialDef.pbrMetallicRoughness;
      if (metallicRoughness) {
        if (Array.isArray(metallicRoughness.baseColorFactor)) {
          const array = metallicRoughness.baseColorFactor;
          materialParams.color.setRGB(array[0], array[1], array[2], Ge);
          materialParams.opacity = array[3];
        }
        if (metallicRoughness.baseColorTexture !== void 0) {
          pending.push(parser.assignTexture(materialParams, "map", metallicRoughness.baseColorTexture, Ze));
        }
      }
      return Promise.all(pending);
    }
  };
  var GLTFMaterialsEmissiveStrengthExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_EMISSIVE_STRENGTH;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const emissiveStrength = materialDef.extensions[this.name].emissiveStrength;
      if (emissiveStrength !== void 0) {
        materialParams.emissiveIntensity = emissiveStrength;
      }
      return Promise.resolve();
    }
  };
  var GLTFMaterialsClearcoatExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return Fl;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      const extension = materialDef.extensions[this.name];
      if (extension.clearcoatFactor !== void 0) {
        materialParams.clearcoat = extension.clearcoatFactor;
      }
      if (extension.clearcoatTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "clearcoatMap", extension.clearcoatTexture));
      }
      if (extension.clearcoatRoughnessFactor !== void 0) {
        materialParams.clearcoatRoughness = extension.clearcoatRoughnessFactor;
      }
      if (extension.clearcoatRoughnessTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "clearcoatRoughnessMap", extension.clearcoatRoughnessTexture));
      }
      if (extension.clearcoatNormalTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "clearcoatNormalMap", extension.clearcoatNormalTexture));
        if (extension.clearcoatNormalTexture.scale !== void 0) {
          const scale = extension.clearcoatNormalTexture.scale;
          materialParams.clearcoatNormalScale = new $s(scale, scale);
        }
      }
      return Promise.all(pending);
    }
  };
  var GLTFMaterialsDispersionExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_DISPERSION;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return Fl;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const extension = materialDef.extensions[this.name];
      materialParams.dispersion = extension.dispersion !== void 0 ? extension.dispersion : 0;
      return Promise.resolve();
    }
  };
  var GLTFMaterialsIridescenceExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_IRIDESCENCE;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return Fl;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      const extension = materialDef.extensions[this.name];
      if (extension.iridescenceFactor !== void 0) {
        materialParams.iridescence = extension.iridescenceFactor;
      }
      if (extension.iridescenceTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "iridescenceMap", extension.iridescenceTexture));
      }
      if (extension.iridescenceIor !== void 0) {
        materialParams.iridescenceIOR = extension.iridescenceIor;
      }
      if (materialParams.iridescenceThicknessRange === void 0) {
        materialParams.iridescenceThicknessRange = [100, 400];
      }
      if (extension.iridescenceThicknessMinimum !== void 0) {
        materialParams.iridescenceThicknessRange[0] = extension.iridescenceThicknessMinimum;
      }
      if (extension.iridescenceThicknessMaximum !== void 0) {
        materialParams.iridescenceThicknessRange[1] = extension.iridescenceThicknessMaximum;
      }
      if (extension.iridescenceThicknessTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "iridescenceThicknessMap", extension.iridescenceThicknessTexture));
      }
      return Promise.all(pending);
    }
  };
  var GLTFMaterialsSheenExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_SHEEN;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return Fl;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      materialParams.sheenColor = new Qr(0, 0, 0);
      materialParams.sheenRoughness = 0;
      materialParams.sheen = 1;
      const extension = materialDef.extensions[this.name];
      if (extension.sheenColorFactor !== void 0) {
        const colorFactor = extension.sheenColorFactor;
        materialParams.sheenColor.setRGB(colorFactor[0], colorFactor[1], colorFactor[2], Ge);
      }
      if (extension.sheenRoughnessFactor !== void 0) {
        materialParams.sheenRoughness = extension.sheenRoughnessFactor;
      }
      if (extension.sheenColorTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "sheenColorMap", extension.sheenColorTexture, Ze));
      }
      if (extension.sheenRoughnessTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "sheenRoughnessMap", extension.sheenRoughnessTexture));
      }
      return Promise.all(pending);
    }
  };
  var GLTFMaterialsTransmissionExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_TRANSMISSION;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return Fl;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      const extension = materialDef.extensions[this.name];
      if (extension.transmissionFactor !== void 0) {
        materialParams.transmission = extension.transmissionFactor;
      }
      if (extension.transmissionTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "transmissionMap", extension.transmissionTexture));
      }
      return Promise.all(pending);
    }
  };
  var GLTFMaterialsVolumeExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_VOLUME;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return Fl;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      const extension = materialDef.extensions[this.name];
      materialParams.thickness = extension.thicknessFactor !== void 0 ? extension.thicknessFactor : 0;
      if (extension.thicknessTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "thicknessMap", extension.thicknessTexture));
      }
      materialParams.attenuationDistance = extension.attenuationDistance || Infinity;
      const colorArray = extension.attenuationColor || [1, 1, 1];
      materialParams.attenuationColor = new Qr().setRGB(colorArray[0], colorArray[1], colorArray[2], Ge);
      return Promise.all(pending);
    }
  };
  var GLTFMaterialsIorExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_IOR;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return Fl;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const extension = materialDef.extensions[this.name];
      materialParams.ior = extension.ior !== void 0 ? extension.ior : 1.5;
      return Promise.resolve();
    }
  };
  var GLTFMaterialsSpecularExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_SPECULAR;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return Fl;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      const extension = materialDef.extensions[this.name];
      materialParams.specularIntensity = extension.specularFactor !== void 0 ? extension.specularFactor : 1;
      if (extension.specularTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "specularIntensityMap", extension.specularTexture));
      }
      const colorArray = extension.specularColorFactor || [1, 1, 1];
      materialParams.specularColor = new Qr().setRGB(colorArray[0], colorArray[1], colorArray[2], Ge);
      if (extension.specularColorTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "specularColorMap", extension.specularColorTexture, Ze));
      }
      return Promise.all(pending);
    }
  };
  var GLTFMaterialsBumpExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.EXT_MATERIALS_BUMP;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return Fl;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      const extension = materialDef.extensions[this.name];
      materialParams.bumpScale = extension.bumpFactor !== void 0 ? extension.bumpFactor : 1;
      if (extension.bumpTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "bumpMap", extension.bumpTexture));
      }
      return Promise.all(pending);
    }
  };
  var GLTFMaterialsAnisotropyExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_MATERIALS_ANISOTROPY;
    }
    getMaterialType(materialIndex) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
      return Fl;
    }
    extendMaterialParams(materialIndex, materialParams) {
      const parser = this.parser;
      const materialDef = parser.json.materials[materialIndex];
      if (!materialDef.extensions || !materialDef.extensions[this.name]) {
        return Promise.resolve();
      }
      const pending = [];
      const extension = materialDef.extensions[this.name];
      if (extension.anisotropyStrength !== void 0) {
        materialParams.anisotropy = extension.anisotropyStrength;
      }
      if (extension.anisotropyRotation !== void 0) {
        materialParams.anisotropyRotation = extension.anisotropyRotation;
      }
      if (extension.anisotropyTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "anisotropyMap", extension.anisotropyTexture));
      }
      return Promise.all(pending);
    }
  };
  var GLTFTextureBasisUExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.KHR_TEXTURE_BASISU;
    }
    loadTexture(textureIndex) {
      const parser = this.parser;
      const json = parser.json;
      const textureDef = json.textures[textureIndex];
      if (!textureDef.extensions || !textureDef.extensions[this.name]) {
        return null;
      }
      const extension = textureDef.extensions[this.name];
      const loader2 = parser.options.ktx2Loader;
      if (!loader2) {
        if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) {
          throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
        } else {
          return null;
        }
      }
      return parser.loadTextureImage(textureIndex, extension.source, loader2);
    }
  };
  var GLTFTextureWebPExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.EXT_TEXTURE_WEBP;
    }
    loadTexture(textureIndex) {
      const name = this.name;
      const parser = this.parser;
      const json = parser.json;
      const textureDef = json.textures[textureIndex];
      if (!textureDef.extensions || !textureDef.extensions[name]) {
        return null;
      }
      const extension = textureDef.extensions[name];
      const source = json.images[extension.source];
      let loader2 = parser.textureLoader;
      if (source.uri) {
        const handler = parser.options.manager.getHandler(source.uri);
        if (handler !== null) loader2 = handler;
      }
      return parser.loadTextureImage(textureIndex, extension.source, loader2);
    }
  };
  var GLTFTextureAVIFExtension = class {
    constructor(parser) {
      this.parser = parser;
      this.name = EXTENSIONS.EXT_TEXTURE_AVIF;
    }
    loadTexture(textureIndex) {
      const name = this.name;
      const parser = this.parser;
      const json = parser.json;
      const textureDef = json.textures[textureIndex];
      if (!textureDef.extensions || !textureDef.extensions[name]) {
        return null;
      }
      const extension = textureDef.extensions[name];
      const source = json.images[extension.source];
      let loader2 = parser.textureLoader;
      if (source.uri) {
        const handler = parser.options.manager.getHandler(source.uri);
        if (handler !== null) loader2 = handler;
      }
      return parser.loadTextureImage(textureIndex, extension.source, loader2);
    }
  };
  var GLTFMeshoptCompression = class {
    constructor(parser) {
      this.name = EXTENSIONS.EXT_MESHOPT_COMPRESSION;
      this.parser = parser;
    }
    loadBufferView(index) {
      const json = this.parser.json;
      const bufferView = json.bufferViews[index];
      if (bufferView.extensions && bufferView.extensions[this.name]) {
        const extensionDef = bufferView.extensions[this.name];
        const buffer = this.parser.getDependency("buffer", extensionDef.buffer);
        const decoder = this.parser.options.meshoptDecoder;
        if (!decoder || !decoder.supported) {
          if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) {
            throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
          } else {
            return null;
          }
        }
        return buffer.then(function(res) {
          const byteOffset = extensionDef.byteOffset || 0;
          const byteLength = extensionDef.byteLength || 0;
          const count = extensionDef.count;
          const stride = extensionDef.byteStride;
          const source = new Uint8Array(res, byteOffset, byteLength);
          if (decoder.decodeGltfBufferAsync) {
            return decoder.decodeGltfBufferAsync(count, stride, source, extensionDef.mode, extensionDef.filter).then(function(res2) {
              return res2.buffer;
            });
          } else {
            return decoder.ready.then(function() {
              const result = new ArrayBuffer(count * stride);
              decoder.decodeGltfBuffer(new Uint8Array(result), count, stride, source, extensionDef.mode, extensionDef.filter);
              return result;
            });
          }
        });
      } else {
        return null;
      }
    }
  };
  var GLTFMeshGpuInstancing = class {
    constructor(parser) {
      this.name = EXTENSIONS.EXT_MESH_GPU_INSTANCING;
      this.parser = parser;
    }
    createNodeMesh(nodeIndex) {
      const json = this.parser.json;
      const nodeDef = json.nodes[nodeIndex];
      if (!nodeDef.extensions || !nodeDef.extensions[this.name] || nodeDef.mesh === void 0) {
        return null;
      }
      const meshDef = json.meshes[nodeDef.mesh];
      for (const primitive of meshDef.primitives) {
        if (primitive.mode !== WEBGL_CONSTANTS.TRIANGLES && primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_STRIP && primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_FAN && primitive.mode !== void 0) {
          return null;
        }
      }
      const extensionDef = nodeDef.extensions[this.name];
      const attributesDef = extensionDef.attributes;
      const pending = [];
      const attributes = {};
      for (const key2 in attributesDef) {
        pending.push(this.parser.getDependency("accessor", attributesDef[key2]).then((accessor) => {
          attributes[key2] = accessor;
          return attributes[key2];
        }));
      }
      if (pending.length < 1) {
        return null;
      }
      pending.push(this.parser.createNodeMesh(nodeIndex));
      return Promise.all(pending).then((results) => {
        const nodeObject = results.pop();
        const meshes = nodeObject.isGroup ? nodeObject.children : [nodeObject];
        const count = results[0].count;
        const instancedMeshes = [];
        for (const mesh of meshes) {
          const m2 = new ar();
          const p2 = new Ks();
          const q2 = new Qs();
          const s2 = new Ks(1, 1, 1);
          const instancedMesh = new eo(mesh.geometry, mesh.material, count);
          for (let i2 = 0; i2 < count; i2++) {
            if (attributes.TRANSLATION) {
              p2.fromBufferAttribute(attributes.TRANSLATION, i2);
            }
            if (attributes.ROTATION) {
              q2.fromBufferAttribute(attributes.ROTATION, i2);
            }
            if (attributes.SCALE) {
              s2.fromBufferAttribute(attributes.SCALE, i2);
            }
            instancedMesh.setMatrixAt(i2, m2.compose(p2, q2, s2));
          }
          for (const attributeName in attributes) {
            if (attributeName === "_COLOR_0") {
              const attr = attributes[attributeName];
              instancedMesh.instanceColor = new Xa(attr.array, attr.itemSize, attr.normalized);
            } else if (attributeName !== "TRANSLATION" && attributeName !== "ROTATION" && attributeName !== "SCALE") {
              mesh.geometry.setAttribute(attributeName, attributes[attributeName]);
            }
          }
          Rr.prototype.copy.call(instancedMesh, mesh);
          this.parser.assignFinalMaterial(instancedMesh);
          instancedMeshes.push(instancedMesh);
        }
        if (nodeObject.isGroup) {
          nodeObject.clear();
          nodeObject.add(...instancedMeshes);
          return nodeObject;
        }
        return instancedMeshes[0];
      });
    }
  };
  var BINARY_EXTENSION_HEADER_MAGIC = "glTF";
  var BINARY_EXTENSION_HEADER_LENGTH = 12;
  var BINARY_EXTENSION_CHUNK_TYPES = { JSON: 1313821514, BIN: 5130562 };
  var GLTFBinaryExtension = class {
    constructor(data) {
      this.name = EXTENSIONS.KHR_BINARY_GLTF;
      this.content = null;
      this.body = null;
      const headerView = new DataView(data, 0, BINARY_EXTENSION_HEADER_LENGTH);
      const textDecoder = new TextDecoder();
      this.header = {
        magic: textDecoder.decode(new Uint8Array(data.slice(0, 4))),
        version: headerView.getUint32(4, true),
        length: headerView.getUint32(8, true)
      };
      if (this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC) {
        throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
      } else if (this.header.version < 2) {
        throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
      }
      const chunkContentsLength = this.header.length - BINARY_EXTENSION_HEADER_LENGTH;
      const chunkView = new DataView(data, BINARY_EXTENSION_HEADER_LENGTH);
      let chunkIndex = 0;
      while (chunkIndex < chunkContentsLength) {
        const chunkLength = chunkView.getUint32(chunkIndex, true);
        chunkIndex += 4;
        const chunkType = chunkView.getUint32(chunkIndex, true);
        chunkIndex += 4;
        if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON) {
          const contentArray = new Uint8Array(data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength);
          this.content = textDecoder.decode(contentArray);
        } else if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN) {
          const byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
          this.body = data.slice(byteOffset, byteOffset + chunkLength);
        }
        chunkIndex += chunkLength;
      }
      if (this.content === null) {
        throw new Error("THREE.GLTFLoader: JSON content not found.");
      }
    }
  };
  var GLTFDracoMeshCompressionExtension = class {
    constructor(json, dracoLoader) {
      if (!dracoLoader) {
        throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
      }
      this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
      this.json = json;
      this.dracoLoader = dracoLoader;
      this.dracoLoader.preload();
    }
    decodePrimitive(primitive, parser) {
      const json = this.json;
      const dracoLoader = this.dracoLoader;
      const bufferViewIndex = primitive.extensions[this.name].bufferView;
      const gltfAttributeMap = primitive.extensions[this.name].attributes;
      const threeAttributeMap = {};
      const attributeNormalizedMap = {};
      const attributeTypeMap = {};
      for (const attributeName in gltfAttributeMap) {
        const threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
        threeAttributeMap[threeAttributeName] = gltfAttributeMap[attributeName];
      }
      for (const attributeName in primitive.attributes) {
        const threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
        if (gltfAttributeMap[attributeName] !== void 0) {
          const accessorDef = json.accessors[primitive.attributes[attributeName]];
          const componentType = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
          attributeTypeMap[threeAttributeName] = componentType.name;
          attributeNormalizedMap[threeAttributeName] = accessorDef.normalized === true;
        }
      }
      return parser.getDependency("bufferView", bufferViewIndex).then(function(bufferView) {
        return new Promise(function(resolve, reject) {
          dracoLoader.decodeDracoFile(bufferView, function(geometry) {
            for (const attributeName in geometry.attributes) {
              const attribute = geometry.attributes[attributeName];
              const normalized = attributeNormalizedMap[attributeName];
              if (normalized !== void 0) attribute.normalized = normalized;
            }
            resolve(geometry);
          }, threeAttributeMap, attributeTypeMap, Ge, reject);
        });
      });
    }
  };
  var GLTFTextureTransformExtension = class {
    constructor() {
      this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(texture, transform) {
      if ((transform.texCoord === void 0 || transform.texCoord === texture.channel) && transform.offset === void 0 && transform.rotation === void 0 && transform.scale === void 0) {
        return texture;
      }
      texture = texture.clone();
      if (transform.texCoord !== void 0) {
        texture.channel = transform.texCoord;
      }
      if (transform.offset !== void 0) {
        texture.offset.fromArray(transform.offset);
      }
      if (transform.rotation !== void 0) {
        texture.rotation = transform.rotation;
      }
      if (transform.scale !== void 0) {
        texture.repeat.fromArray(transform.scale);
      }
      texture.needsUpdate = true;
      return texture;
    }
  };
  var GLTFMeshQuantizationExtension = class {
    constructor() {
      this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;
    }
  };
  var GLTFCubicSplineInterpolant = class extends Kl {
    constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
      super(parameterPositions, sampleValues, sampleSize, resultBuffer);
    }
    copySampleValue_(index) {
      const result = this.resultBuffer, values = this.sampleValues, valueSize = this.valueSize, offset = index * valueSize * 3 + valueSize;
      for (let i2 = 0; i2 !== valueSize; i2++) {
        result[i2] = values[offset + i2];
      }
      return result;
    }
    interpolate_(i1, t0, t2, t1) {
      const result = this.resultBuffer;
      const values = this.sampleValues;
      const stride = this.valueSize;
      const stride2 = stride * 2;
      const stride3 = stride * 3;
      const td2 = t1 - t0;
      const p2 = (t2 - t0) / td2;
      const pp = p2 * p2;
      const ppp = pp * p2;
      const offset1 = i1 * stride3;
      const offset0 = offset1 - stride3;
      const s2 = -2 * ppp + 3 * pp;
      const s3 = ppp - pp;
      const s0 = 1 - s2;
      const s1 = s3 - pp + p2;
      for (let i2 = 0; i2 !== stride; i2++) {
        const p0 = values[offset0 + i2 + stride];
        const m0 = values[offset0 + i2 + stride2] * td2;
        const p1 = values[offset1 + i2 + stride];
        const m1 = values[offset1 + i2] * td2;
        result[i2] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;
      }
      return result;
    }
  };
  var _quaternion = new Qs();
  var GLTFCubicSplineQuaternionInterpolant = class extends GLTFCubicSplineInterpolant {
    interpolate_(i1, t0, t2, t1) {
      const result = super.interpolate_(i1, t0, t2, t1);
      _quaternion.fromArray(result).normalize().toArray(result);
      return result;
    }
  };
  var WEBGL_CONSTANTS = {
    FLOAT: 5126,
    //FLOAT_MAT2: 35674,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123
  };
  var WEBGL_COMPONENT_TYPES = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
  };
  var WEBGL_FILTERS = {
    9728: gt,
    9729: wt,
    9984: ft,
    9985: Mt,
    9986: bt,
    9987: _t
  };
  var WEBGL_WRAPPINGS = {
    33071: mt,
    33648: yt,
    10497: pt
  };
  var WEBGL_TYPE_SIZES = {
    "SCALAR": 1,
    "VEC2": 2,
    "VEC3": 3,
    "VEC4": 4,
    "MAT2": 4,
    "MAT3": 9,
    "MAT4": 16
  };
  var ATTRIBUTES = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
  };
  var PATH_PROPERTIES = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences"
  };
  var INTERPOLATION = {
    CUBICSPLINE: void 0,
    // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
    // keyframe track will be initialized with a default interpolation type, then modified.
    LINEAR: Ee,
    STEP: ke
  };
  var ALPHA_MODES = {
    OPAQUE: "OPAQUE",
    MASK: "MASK",
    BLEND: "BLEND"
  };
  function createDefaultMaterial(cache) {
    if (cache["DefaultMaterial"] === void 0) {
      cache["DefaultMaterial"] = new Vl({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: false,
        depthTest: true,
        side: u
      });
    }
    return cache["DefaultMaterial"];
  }
  function addUnknownExtensionsToUserData(knownExtensions, object, objectDef) {
    for (const name in objectDef.extensions) {
      if (knownExtensions[name] === void 0) {
        object.userData.gltfExtensions = object.userData.gltfExtensions || {};
        object.userData.gltfExtensions[name] = objectDef.extensions[name];
      }
    }
  }
  function assignExtrasToUserData(object, gltfDef) {
    if (gltfDef.extras !== void 0) {
      if (typeof gltfDef.extras === "object") {
        Object.assign(object.userData, gltfDef.extras);
      } else {
        console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + gltfDef.extras);
      }
    }
  }
  function addMorphTargets(geometry, targets, parser) {
    let hasMorphPosition = false;
    let hasMorphNormal = false;
    let hasMorphColor = false;
    for (let i2 = 0, il2 = targets.length; i2 < il2; i2++) {
      const target = targets[i2];
      if (target.POSITION !== void 0) hasMorphPosition = true;
      if (target.NORMAL !== void 0) hasMorphNormal = true;
      if (target.COLOR_0 !== void 0) hasMorphColor = true;
      if (hasMorphPosition && hasMorphNormal && hasMorphColor) break;
    }
    if (!hasMorphPosition && !hasMorphNormal && !hasMorphColor) return Promise.resolve(geometry);
    const pendingPositionAccessors = [];
    const pendingNormalAccessors = [];
    const pendingColorAccessors = [];
    for (let i2 = 0, il2 = targets.length; i2 < il2; i2++) {
      const target = targets[i2];
      if (hasMorphPosition) {
        const pendingAccessor = target.POSITION !== void 0 ? parser.getDependency("accessor", target.POSITION) : geometry.attributes.position;
        pendingPositionAccessors.push(pendingAccessor);
      }
      if (hasMorphNormal) {
        const pendingAccessor = target.NORMAL !== void 0 ? parser.getDependency("accessor", target.NORMAL) : geometry.attributes.normal;
        pendingNormalAccessors.push(pendingAccessor);
      }
      if (hasMorphColor) {
        const pendingAccessor = target.COLOR_0 !== void 0 ? parser.getDependency("accessor", target.COLOR_0) : geometry.attributes.color;
        pendingColorAccessors.push(pendingAccessor);
      }
    }
    return Promise.all([
      Promise.all(pendingPositionAccessors),
      Promise.all(pendingNormalAccessors),
      Promise.all(pendingColorAccessors)
    ]).then(function(accessors) {
      const morphPositions = accessors[0];
      const morphNormals = accessors[1];
      const morphColors = accessors[2];
      if (hasMorphPosition) geometry.morphAttributes.position = morphPositions;
      if (hasMorphNormal) geometry.morphAttributes.normal = morphNormals;
      if (hasMorphColor) geometry.morphAttributes.color = morphColors;
      geometry.morphTargetsRelative = true;
      return geometry;
    });
  }
  function updateMorphTargets(mesh, meshDef) {
    mesh.updateMorphTargets();
    if (meshDef.weights !== void 0) {
      for (let i2 = 0, il2 = meshDef.weights.length; i2 < il2; i2++) {
        mesh.morphTargetInfluences[i2] = meshDef.weights[i2];
      }
    }
    if (meshDef.extras && Array.isArray(meshDef.extras.targetNames)) {
      const targetNames = meshDef.extras.targetNames;
      if (mesh.morphTargetInfluences.length === targetNames.length) {
        mesh.morphTargetDictionary = {};
        for (let i2 = 0, il2 = targetNames.length; i2 < il2; i2++) {
          mesh.morphTargetDictionary[targetNames[i2]] = i2;
        }
      } else {
        console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
      }
    }
  }
  function createPrimitiveKey(primitiveDef) {
    let geometryKey;
    const dracoExtension = primitiveDef.extensions && primitiveDef.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION];
    if (dracoExtension) {
      geometryKey = "draco:" + dracoExtension.bufferView + ":" + dracoExtension.indices + ":" + createAttributesKey(dracoExtension.attributes);
    } else {
      geometryKey = primitiveDef.indices + ":" + createAttributesKey(primitiveDef.attributes) + ":" + primitiveDef.mode;
    }
    if (primitiveDef.targets !== void 0) {
      for (let i2 = 0, il2 = primitiveDef.targets.length; i2 < il2; i2++) {
        geometryKey += ":" + createAttributesKey(primitiveDef.targets[i2]);
      }
    }
    return geometryKey;
  }
  function createAttributesKey(attributes) {
    let attributesKey = "";
    const keys = Object.keys(attributes).sort();
    for (let i2 = 0, il2 = keys.length; i2 < il2; i2++) {
      attributesKey += keys[i2] + ":" + attributes[keys[i2]] + ";";
    }
    return attributesKey;
  }
  function getNormalizedComponentScale(constructor) {
    switch (constructor) {
      case Int8Array:
        return 1 / 127;
      case Uint8Array:
        return 1 / 255;
      case Int16Array:
        return 1 / 32767;
      case Uint16Array:
        return 1 / 65535;
      default:
        throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
    }
  }
  function getImageURIMimeType(uri) {
    if (uri.search(/\.jpe?g($|\?)/i) > 0 || uri.search(/^data\:image\/jpeg/) === 0) return "image/jpeg";
    if (uri.search(/\.webp($|\?)/i) > 0 || uri.search(/^data\:image\/webp/) === 0) return "image/webp";
    if (uri.search(/\.ktx2($|\?)/i) > 0 || uri.search(/^data\:image\/ktx2/) === 0) return "image/ktx2";
    return "image/png";
  }
  var _identityMatrix = new ar();
  var GLTFParser = class {
    constructor(json = {}, options = {}) {
      this.json = json;
      this.extensions = {};
      this.plugins = {};
      this.options = options;
      this.cache = new GLTFRegistry();
      this.associations = /* @__PURE__ */ new Map();
      this.primitiveCache = {};
      this.nodeCache = {};
      this.meshCache = { refs: {}, uses: {} };
      this.cameraCache = { refs: {}, uses: {} };
      this.lightCache = { refs: {}, uses: {} };
      this.sourceCache = {};
      this.textureCache = {};
      this.nodeNamesUsed = {};
      let isSafari = false;
      let safariVersion = -1;
      let isFirefox = false;
      let firefoxVersion = -1;
      if (typeof navigator !== "undefined") {
        const userAgent = navigator.userAgent;
        isSafari = /^((?!chrome|android).)*safari/i.test(userAgent) === true;
        const safariMatch = userAgent.match(/Version\/(\d+)/);
        safariVersion = isSafari && safariMatch ? parseInt(safariMatch[1], 10) : -1;
        isFirefox = userAgent.indexOf("Firefox") > -1;
        firefoxVersion = isFirefox ? userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
      }
      if (typeof createImageBitmap === "undefined" || isSafari && safariVersion < 17 || isFirefox && firefoxVersion < 98) {
        this.textureLoader = new Tc(this.options.manager);
      } else {
        this.textureLoader = new su(this.options.manager);
      }
      this.textureLoader.setCrossOrigin(this.options.crossOrigin);
      this.textureLoader.setRequestHeader(this.options.requestHeader);
      this.fileLoader = new bc(this.options.manager);
      this.fileLoader.setResponseType("arraybuffer");
      if (this.options.crossOrigin === "use-credentials") {
        this.fileLoader.setWithCredentials(true);
      }
    }
    setExtensions(extensions) {
      this.extensions = extensions;
    }
    setPlugins(plugins) {
      this.plugins = plugins;
    }
    parse(onLoad, onError) {
      const parser = this;
      const json = this.json;
      const extensions = this.extensions;
      this.cache.removeAll();
      this.nodeCache = {};
      this._invokeAll(function(ext) {
        return ext._markDefs && ext._markDefs();
      });
      Promise.all(this._invokeAll(function(ext) {
        return ext.beforeRoot && ext.beforeRoot();
      })).then(function() {
        return Promise.all([
          parser.getDependencies("scene"),
          parser.getDependencies("animation"),
          parser.getDependencies("camera")
        ]);
      }).then(function(dependencies) {
        const result = {
          scene: dependencies[0][json.scene || 0],
          scenes: dependencies[0],
          animations: dependencies[1],
          cameras: dependencies[2],
          asset: json.asset,
          parser,
          userData: {}
        };
        addUnknownExtensionsToUserData(extensions, result, json);
        assignExtrasToUserData(result, json);
        return Promise.all(parser._invokeAll(function(ext) {
          return ext.afterRoot && ext.afterRoot(result);
        })).then(function() {
          for (const scene2 of result.scenes) {
            scene2.updateMatrixWorld();
          }
          onLoad(result);
        });
      }).catch(onError);
    }
    /**
     * Marks the special nodes/meshes in json for efficient parse.
     *
     * @private
     */
    _markDefs() {
      const nodeDefs = this.json.nodes || [];
      const skinDefs = this.json.skins || [];
      const meshDefs = this.json.meshes || [];
      for (let skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex++) {
        const joints2 = skinDefs[skinIndex].joints;
        for (let i2 = 0, il2 = joints2.length; i2 < il2; i2++) {
          nodeDefs[joints2[i2]].isBone = true;
        }
      }
      for (let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++) {
        const nodeDef = nodeDefs[nodeIndex];
        if (nodeDef.mesh !== void 0) {
          this._addNodeRef(this.meshCache, nodeDef.mesh);
          if (nodeDef.skin !== void 0) {
            meshDefs[nodeDef.mesh].isSkinnedMesh = true;
          }
        }
        if (nodeDef.camera !== void 0) {
          this._addNodeRef(this.cameraCache, nodeDef.camera);
        }
      }
    }
    /**
     * Counts references to shared node / Object3D resources. These resources
     * can be reused, or "instantiated", at multiple nodes in the scene
     * hierarchy. Mesh, Camera, and Light instances are instantiated and must
     * be marked. Non-scenegraph resources (like Materials, Geometries, and
     * Textures) can be reused directly and are not marked here.
     *
     * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
     *
     * @private
     * @param {Object} cache
     * @param {Object3D} index
     */
    _addNodeRef(cache, index) {
      if (index === void 0) return;
      if (cache.refs[index] === void 0) {
        cache.refs[index] = cache.uses[index] = 0;
      }
      cache.refs[index]++;
    }
    /**
     * Returns a reference to a shared resource, cloning it if necessary.
     *
     * @private
     * @param {Object} cache
     * @param {number} index
     * @param {Object} object
     * @return {Object}
     */
    _getNodeRef(cache, index, object) {
      if (cache.refs[index] <= 1) return object;
      const ref = object.clone();
      const updateMappings = (original, clone) => {
        const mappings = this.associations.get(original);
        if (mappings != null) {
          this.associations.set(clone, mappings);
        }
        for (const [i2, child] of original.children.entries()) {
          updateMappings(child, clone.children[i2]);
        }
      };
      updateMappings(object, ref);
      ref.name += "_instance_" + cache.uses[index]++;
      return ref;
    }
    _invokeOne(func) {
      const extensions = Object.values(this.plugins);
      extensions.push(this);
      for (let i2 = 0; i2 < extensions.length; i2++) {
        const result = func(extensions[i2]);
        if (result) return result;
      }
      return null;
    }
    _invokeAll(func) {
      const extensions = Object.values(this.plugins);
      extensions.unshift(this);
      const pending = [];
      for (let i2 = 0; i2 < extensions.length; i2++) {
        const result = func(extensions[i2]);
        if (result) pending.push(result);
      }
      return pending;
    }
    /**
     * Requests the specified dependency asynchronously, with caching.
     *
     * @private
     * @param {string} type
     * @param {number} index
     * @return {Promise<Object3D|Material|Texture|AnimationClip|ArrayBuffer|Object>}
     */
    getDependency(type, index) {
      const cacheKey = type + ":" + index;
      let dependency = this.cache.get(cacheKey);
      if (!dependency) {
        switch (type) {
          case "scene":
            dependency = this.loadScene(index);
            break;
          case "node":
            dependency = this._invokeOne(function(ext) {
              return ext.loadNode && ext.loadNode(index);
            });
            break;
          case "mesh":
            dependency = this._invokeOne(function(ext) {
              return ext.loadMesh && ext.loadMesh(index);
            });
            break;
          case "accessor":
            dependency = this.loadAccessor(index);
            break;
          case "bufferView":
            dependency = this._invokeOne(function(ext) {
              return ext.loadBufferView && ext.loadBufferView(index);
            });
            break;
          case "buffer":
            dependency = this.loadBuffer(index);
            break;
          case "material":
            dependency = this._invokeOne(function(ext) {
              return ext.loadMaterial && ext.loadMaterial(index);
            });
            break;
          case "texture":
            dependency = this._invokeOne(function(ext) {
              return ext.loadTexture && ext.loadTexture(index);
            });
            break;
          case "skin":
            dependency = this.loadSkin(index);
            break;
          case "animation":
            dependency = this._invokeOne(function(ext) {
              return ext.loadAnimation && ext.loadAnimation(index);
            });
            break;
          case "camera":
            dependency = this.loadCamera(index);
            break;
          default:
            dependency = this._invokeOne(function(ext) {
              return ext != this && ext.getDependency && ext.getDependency(type, index);
            });
            if (!dependency) {
              throw new Error("Unknown type: " + type);
            }
            break;
        }
        this.cache.add(cacheKey, dependency);
      }
      return dependency;
    }
    /**
     * Requests all dependencies of the specified type asynchronously, with caching.
     *
     * @private
     * @param {string} type
     * @return {Promise<Array<Object>>}
     */
    getDependencies(type) {
      let dependencies = this.cache.get(type);
      if (!dependencies) {
        const parser = this;
        const defs = this.json[type + (type === "mesh" ? "es" : "s")] || [];
        dependencies = Promise.all(defs.map(function(def, index) {
          return parser.getDependency(type, index);
        }));
        this.cache.add(type, dependencies);
      }
      return dependencies;
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
     *
     * @private
     * @param {number} bufferIndex
     * @return {Promise<ArrayBuffer>}
     */
    loadBuffer(bufferIndex) {
      const bufferDef = this.json.buffers[bufferIndex];
      const loader2 = this.fileLoader;
      if (bufferDef.type && bufferDef.type !== "arraybuffer") {
        throw new Error("THREE.GLTFLoader: " + bufferDef.type + " buffer type is not supported.");
      }
      if (bufferDef.uri === void 0 && bufferIndex === 0) {
        return Promise.resolve(this.extensions[EXTENSIONS.KHR_BINARY_GLTF].body);
      }
      const options = this.options;
      return new Promise(function(resolve, reject) {
        loader2.load(Yc.resolveURL(bufferDef.uri, options.path), resolve, void 0, function() {
          reject(new Error('THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".'));
        });
      });
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
     *
     * @private
     * @param {number} bufferViewIndex
     * @return {Promise<ArrayBuffer>}
     */
    loadBufferView(bufferViewIndex) {
      const bufferViewDef = this.json.bufferViews[bufferViewIndex];
      return this.getDependency("buffer", bufferViewDef.buffer).then(function(buffer) {
        const byteLength = bufferViewDef.byteLength || 0;
        const byteOffset = bufferViewDef.byteOffset || 0;
        return buffer.slice(byteOffset, byteOffset + byteLength);
      });
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
     *
     * @private
     * @param {number} accessorIndex
     * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
     */
    loadAccessor(accessorIndex) {
      const parser = this;
      const json = this.json;
      const accessorDef = this.json.accessors[accessorIndex];
      if (accessorDef.bufferView === void 0 && accessorDef.sparse === void 0) {
        const itemSize = WEBGL_TYPE_SIZES[accessorDef.type];
        const TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
        const normalized = accessorDef.normalized === true;
        const array = new TypedArray(accessorDef.count * itemSize);
        return Promise.resolve(new dn(array, itemSize, normalized));
      }
      const pendingBufferViews = [];
      if (accessorDef.bufferView !== void 0) {
        pendingBufferViews.push(this.getDependency("bufferView", accessorDef.bufferView));
      } else {
        pendingBufferViews.push(null);
      }
      if (accessorDef.sparse !== void 0) {
        pendingBufferViews.push(this.getDependency("bufferView", accessorDef.sparse.indices.bufferView));
        pendingBufferViews.push(this.getDependency("bufferView", accessorDef.sparse.values.bufferView));
      }
      return Promise.all(pendingBufferViews).then(function(bufferViews) {
        const bufferView = bufferViews[0];
        const itemSize = WEBGL_TYPE_SIZES[accessorDef.type];
        const TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
        const elementBytes = TypedArray.BYTES_PER_ELEMENT;
        const itemBytes = elementBytes * itemSize;
        const byteOffset = accessorDef.byteOffset || 0;
        const byteStride = accessorDef.bufferView !== void 0 ? json.bufferViews[accessorDef.bufferView].byteStride : void 0;
        const normalized = accessorDef.normalized === true;
        let array, bufferAttribute;
        if (byteStride && byteStride !== itemBytes) {
          const ibSlice = Math.floor(byteOffset / byteStride);
          const ibCacheKey = "InterleavedBuffer:" + accessorDef.bufferView + ":" + accessorDef.componentType + ":" + ibSlice + ":" + accessorDef.count;
          let ib = parser.cache.get(ibCacheKey);
          if (!ib) {
            array = new TypedArray(bufferView, ibSlice * byteStride, accessorDef.count * byteStride / elementBytes);
            ib = new ca(array, byteStride / elementBytes);
            parser.cache.add(ibCacheKey, ib);
          }
          bufferAttribute = new da(ib, itemSize, byteOffset % byteStride / elementBytes, normalized);
        } else {
          if (bufferView === null) {
            array = new TypedArray(accessorDef.count * itemSize);
          } else {
            array = new TypedArray(bufferView, byteOffset, accessorDef.count * itemSize);
          }
          bufferAttribute = new dn(array, itemSize, normalized);
        }
        if (accessorDef.sparse !== void 0) {
          const itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
          const TypedArrayIndices = WEBGL_COMPONENT_TYPES[accessorDef.sparse.indices.componentType];
          const byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
          const byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;
          const sparseIndices = new TypedArrayIndices(bufferViews[1], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices);
          const sparseValues = new TypedArray(bufferViews[2], byteOffsetValues, accessorDef.sparse.count * itemSize);
          if (bufferView !== null) {
            bufferAttribute = new dn(bufferAttribute.array.slice(), bufferAttribute.itemSize, bufferAttribute.normalized);
          }
          bufferAttribute.normalized = false;
          for (let i2 = 0, il2 = sparseIndices.length; i2 < il2; i2++) {
            const index = sparseIndices[i2];
            bufferAttribute.setX(index, sparseValues[i2 * itemSize]);
            if (itemSize >= 2) bufferAttribute.setY(index, sparseValues[i2 * itemSize + 1]);
            if (itemSize >= 3) bufferAttribute.setZ(index, sparseValues[i2 * itemSize + 2]);
            if (itemSize >= 4) bufferAttribute.setW(index, sparseValues[i2 * itemSize + 3]);
            if (itemSize >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
          }
          bufferAttribute.normalized = normalized;
        }
        return bufferAttribute;
      });
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
     *
     * @private
     * @param {number} textureIndex
     * @return {Promise<?Texture>}
     */
    loadTexture(textureIndex) {
      const json = this.json;
      const options = this.options;
      const textureDef = json.textures[textureIndex];
      const sourceIndex = textureDef.source;
      const sourceDef = json.images[sourceIndex];
      let loader2 = this.textureLoader;
      if (sourceDef.uri) {
        const handler = options.manager.getHandler(sourceDef.uri);
        if (handler !== null) loader2 = handler;
      }
      return this.loadTextureImage(textureIndex, sourceIndex, loader2);
    }
    loadTextureImage(textureIndex, sourceIndex, loader2) {
      const parser = this;
      const json = this.json;
      const textureDef = json.textures[textureIndex];
      const sourceDef = json.images[sourceIndex];
      const cacheKey = (sourceDef.uri || sourceDef.bufferView) + ":" + textureDef.sampler;
      if (this.textureCache[cacheKey]) {
        return this.textureCache[cacheKey];
      }
      const promise = this.loadImageSource(sourceIndex, loader2).then(function(texture) {
        texture.flipY = false;
        texture.name = textureDef.name || sourceDef.name || "";
        if (texture.name === "" && typeof sourceDef.uri === "string" && sourceDef.uri.startsWith("data:image/") === false) {
          texture.name = sourceDef.uri;
        }
        const samplers = json.samplers || {};
        const sampler = samplers[textureDef.sampler] || {};
        texture.magFilter = WEBGL_FILTERS[sampler.magFilter] || wt;
        texture.minFilter = WEBGL_FILTERS[sampler.minFilter] || _t;
        texture.wrapS = WEBGL_WRAPPINGS[sampler.wrapS] || pt;
        texture.wrapT = WEBGL_WRAPPINGS[sampler.wrapT] || pt;
        texture.generateMipmaps = !texture.isCompressedTexture && texture.minFilter !== gt && texture.minFilter !== wt;
        parser.associations.set(texture, { textures: textureIndex });
        return texture;
      }).catch(function() {
        return null;
      });
      this.textureCache[cacheKey] = promise;
      return promise;
    }
    loadImageSource(sourceIndex, loader2) {
      const parser = this;
      const json = this.json;
      const options = this.options;
      if (this.sourceCache[sourceIndex] !== void 0) {
        return this.sourceCache[sourceIndex].then((texture) => texture.clone());
      }
      const sourceDef = json.images[sourceIndex];
      const URL = self.URL || self.webkitURL;
      let sourceURI = sourceDef.uri || "";
      let isObjectURL = false;
      if (sourceDef.bufferView !== void 0) {
        sourceURI = parser.getDependency("bufferView", sourceDef.bufferView).then(function(bufferView) {
          isObjectURL = true;
          const blob = new Blob([bufferView], { type: sourceDef.mimeType });
          sourceURI = URL.createObjectURL(blob);
          return sourceURI;
        });
      } else if (sourceDef.uri === void 0) {
        throw new Error("THREE.GLTFLoader: Image " + sourceIndex + " is missing URI and bufferView");
      }
      const promise = Promise.resolve(sourceURI).then(function(sourceURI2) {
        return new Promise(function(resolve, reject) {
          let onLoad = resolve;
          if (loader2.isImageBitmapLoader === true) {
            onLoad = function(imageBitmap) {
              const texture = new Ai(imageBitmap);
              texture.needsUpdate = true;
              resolve(texture);
            };
          }
          loader2.load(Yc.resolveURL(sourceURI2, options.path), onLoad, void 0, reject);
        });
      }).then(function(texture) {
        if (isObjectURL === true) {
          URL.revokeObjectURL(sourceURI);
        }
        assignExtrasToUserData(texture, sourceDef);
        texture.userData.mimeType = sourceDef.mimeType || getImageURIMimeType(sourceDef.uri);
        return texture;
      }).catch(function(error) {
        console.error("THREE.GLTFLoader: Couldn't load texture", sourceURI);
        throw error;
      });
      this.sourceCache[sourceIndex] = promise;
      return promise;
    }
    /**
     * Asynchronously assigns a texture to the given material parameters.
     *
     * @private
     * @param {Object} materialParams
     * @param {string} mapName
     * @param {Object} mapDef
     * @param {string} [colorSpace]
     * @return {Promise<Texture>}
     */
    assignTexture(materialParams, mapName, mapDef, colorSpace) {
      const parser = this;
      return this.getDependency("texture", mapDef.index).then(function(texture) {
        if (!texture) return null;
        if (mapDef.texCoord !== void 0 && mapDef.texCoord > 0) {
          texture = texture.clone();
          texture.channel = mapDef.texCoord;
        }
        if (parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM]) {
          const transform = mapDef.extensions !== void 0 ? mapDef.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM] : void 0;
          if (transform) {
            const gltfReference = parser.associations.get(texture);
            texture = parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM].extendTexture(texture, transform);
            parser.associations.set(texture, gltfReference);
          }
        }
        if (colorSpace !== void 0) {
          texture.colorSpace = colorSpace;
        }
        materialParams[mapName] = texture;
        return texture;
      });
    }
    /**
     * Assigns final material to a Mesh, Line, or Points instance. The instance
     * already has a material (generated from the glTF material options alone)
     * but reuse of the same glTF material may require multiple threejs materials
     * to accommodate different primitive types, defines, etc. New materials will
     * be created if necessary, and reused from a cache.
     *
     * @private
     * @param {Object3D} mesh Mesh, Line, or Points instance.
     */
    assignFinalMaterial(mesh) {
      const geometry = mesh.geometry;
      let material = mesh.material;
      const useDerivativeTangents = geometry.attributes.tangent === void 0;
      const useVertexColors = geometry.attributes.color !== void 0;
      const useFlatShading = geometry.attributes.normal === void 0;
      if (mesh.isPoints) {
        const cacheKey = "PointsMaterial:" + material.uuid;
        let pointsMaterial = this.cache.get(cacheKey);
        if (!pointsMaterial) {
          pointsMaterial = new Xo();
          en.prototype.copy.call(pointsMaterial, material);
          pointsMaterial.color.copy(material.color);
          pointsMaterial.map = material.map;
          pointsMaterial.sizeAttenuation = false;
          this.cache.add(cacheKey, pointsMaterial);
        }
        material = pointsMaterial;
      } else if (mesh.isLine) {
        const cacheKey = "LineBasicMaterial:" + material.uuid;
        let lineMaterial = this.cache.get(cacheKey);
        if (!lineMaterial) {
          lineMaterial = new Ro();
          en.prototype.copy.call(lineMaterial, material);
          lineMaterial.color.copy(material.color);
          lineMaterial.map = material.map;
          this.cache.add(cacheKey, lineMaterial);
        }
        material = lineMaterial;
      }
      if (useDerivativeTangents || useVertexColors || useFlatShading) {
        let cacheKey = "ClonedMaterial:" + material.uuid + ":";
        if (useDerivativeTangents) cacheKey += "derivative-tangents:";
        if (useVertexColors) cacheKey += "vertex-colors:";
        if (useFlatShading) cacheKey += "flat-shading:";
        let cachedMaterial = this.cache.get(cacheKey);
        if (!cachedMaterial) {
          cachedMaterial = material.clone();
          if (useVertexColors) cachedMaterial.vertexColors = true;
          if (useFlatShading) cachedMaterial.flatShading = true;
          if (useDerivativeTangents) {
            if (cachedMaterial.normalScale) cachedMaterial.normalScale.y *= -1;
            if (cachedMaterial.clearcoatNormalScale) cachedMaterial.clearcoatNormalScale.y *= -1;
          }
          this.cache.add(cacheKey, cachedMaterial);
          this.associations.set(cachedMaterial, this.associations.get(material));
        }
        material = cachedMaterial;
      }
      mesh.material = material;
    }
    getMaterialType() {
      return Vl;
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
     *
     * @private
     * @param {number} materialIndex
     * @return {Promise<Material>}
     */
    loadMaterial(materialIndex) {
      const parser = this;
      const json = this.json;
      const extensions = this.extensions;
      const materialDef = json.materials[materialIndex];
      let materialType;
      const materialParams = {};
      const materialExtensions = materialDef.extensions || {};
      const pending = [];
      if (materialExtensions[EXTENSIONS.KHR_MATERIALS_UNLIT]) {
        const kmuExtension = extensions[EXTENSIONS.KHR_MATERIALS_UNLIT];
        materialType = kmuExtension.getMaterialType();
        pending.push(kmuExtension.extendParams(materialParams, materialDef, parser));
      } else {
        const metallicRoughness = materialDef.pbrMetallicRoughness || {};
        materialParams.color = new Qr(1, 1, 1);
        materialParams.opacity = 1;
        if (Array.isArray(metallicRoughness.baseColorFactor)) {
          const array = metallicRoughness.baseColorFactor;
          materialParams.color.setRGB(array[0], array[1], array[2], Ge);
          materialParams.opacity = array[3];
        }
        if (metallicRoughness.baseColorTexture !== void 0) {
          pending.push(parser.assignTexture(materialParams, "map", metallicRoughness.baseColorTexture, Ze));
        }
        materialParams.metalness = metallicRoughness.metallicFactor !== void 0 ? metallicRoughness.metallicFactor : 1;
        materialParams.roughness = metallicRoughness.roughnessFactor !== void 0 ? metallicRoughness.roughnessFactor : 1;
        if (metallicRoughness.metallicRoughnessTexture !== void 0) {
          pending.push(parser.assignTexture(materialParams, "metalnessMap", metallicRoughness.metallicRoughnessTexture));
          pending.push(parser.assignTexture(materialParams, "roughnessMap", metallicRoughness.metallicRoughnessTexture));
        }
        materialType = this._invokeOne(function(ext) {
          return ext.getMaterialType && ext.getMaterialType(materialIndex);
        });
        pending.push(Promise.all(this._invokeAll(function(ext) {
          return ext.extendMaterialParams && ext.extendMaterialParams(materialIndex, materialParams);
        })));
      }
      if (materialDef.doubleSided === true) {
        materialParams.side = p;
      }
      const alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;
      if (alphaMode === ALPHA_MODES.BLEND) {
        materialParams.transparent = true;
        materialParams.depthWrite = false;
      } else {
        materialParams.transparent = false;
        if (alphaMode === ALPHA_MODES.MASK) {
          materialParams.alphaTest = materialDef.alphaCutoff !== void 0 ? materialDef.alphaCutoff : 0.5;
        }
      }
      if (materialDef.normalTexture !== void 0 && materialType !== sn) {
        pending.push(parser.assignTexture(materialParams, "normalMap", materialDef.normalTexture));
        materialParams.normalScale = new $s(1, 1);
        if (materialDef.normalTexture.scale !== void 0) {
          const scale = materialDef.normalTexture.scale;
          materialParams.normalScale.set(scale, scale);
        }
      }
      if (materialDef.occlusionTexture !== void 0 && materialType !== sn) {
        pending.push(parser.assignTexture(materialParams, "aoMap", materialDef.occlusionTexture));
        if (materialDef.occlusionTexture.strength !== void 0) {
          materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;
        }
      }
      if (materialDef.emissiveFactor !== void 0 && materialType !== sn) {
        const emissiveFactor = materialDef.emissiveFactor;
        materialParams.emissive = new Qr().setRGB(emissiveFactor[0], emissiveFactor[1], emissiveFactor[2], Ge);
      }
      if (materialDef.emissiveTexture !== void 0 && materialType !== sn) {
        pending.push(parser.assignTexture(materialParams, "emissiveMap", materialDef.emissiveTexture, Ze));
      }
      return Promise.all(pending).then(function() {
        const material = new materialType(materialParams);
        if (materialDef.name) material.name = materialDef.name;
        assignExtrasToUserData(material, materialDef);
        parser.associations.set(material, { materials: materialIndex });
        if (materialDef.extensions) addUnknownExtensionsToUserData(extensions, material, materialDef);
        return material;
      });
    }
    /**
     * When Object3D instances are targeted by animation, they need unique names.
     *
     * @private
     * @param {string} originalName
     * @return {string}
     */
    createUniqueName(originalName) {
      const sanitizedName = Eu.sanitizeNodeName(originalName || "");
      if (sanitizedName in this.nodeNamesUsed) {
        return sanitizedName + "_" + ++this.nodeNamesUsed[sanitizedName];
      } else {
        this.nodeNamesUsed[sanitizedName] = 0;
        return sanitizedName;
      }
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
     *
     * Creates BufferGeometries from primitives.
     *
     * @private
     * @param {Array<GLTF.Primitive>} primitives
     * @return {Promise<Array<BufferGeometry>>}
     */
    loadGeometries(primitives) {
      const parser = this;
      const extensions = this.extensions;
      const cache = this.primitiveCache;
      function createDracoPrimitive(primitive) {
        return extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(primitive, parser).then(function(geometry) {
          return addPrimitiveAttributes(geometry, primitive, parser);
        });
      }
      const pending = [];
      for (let i2 = 0, il2 = primitives.length; i2 < il2; i2++) {
        const primitive = primitives[i2];
        const cacheKey = createPrimitiveKey(primitive);
        const cached = cache[cacheKey];
        if (cached) {
          pending.push(cached.promise);
        } else {
          let geometryPromise;
          if (primitive.extensions && primitive.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION]) {
            geometryPromise = createDracoPrimitive(primitive);
          } else {
            geometryPromise = addPrimitiveAttributes(new In(), primitive, parser);
          }
          cache[cacheKey] = { primitive, promise: geometryPromise };
          pending.push(geometryPromise);
        }
      }
      return Promise.all(pending);
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
     *
     * @private
     * @param {number} meshIndex
     * @return {Promise<Group|Mesh|SkinnedMesh|Line|Points>}
     */
    loadMesh(meshIndex) {
      const parser = this;
      const json = this.json;
      const extensions = this.extensions;
      const meshDef = json.meshes[meshIndex];
      const primitives = meshDef.primitives;
      const pending = [];
      for (let i2 = 0, il2 = primitives.length; i2 < il2; i2++) {
        const material = primitives[i2].material === void 0 ? createDefaultMaterial(this.cache) : this.getDependency("material", primitives[i2].material);
        pending.push(material);
      }
      pending.push(parser.loadGeometries(primitives));
      return Promise.all(pending).then(function(results) {
        const materials = results.slice(0, results.length - 1);
        const geometries = results[results.length - 1];
        const meshes = [];
        for (let i2 = 0, il2 = geometries.length; i2 < il2; i2++) {
          const geometry = geometries[i2];
          const primitive = primitives[i2];
          let mesh;
          const material = materials[i2];
          if (primitive.mode === WEBGL_CONSTANTS.TRIANGLES || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN || primitive.mode === void 0) {
            mesh = meshDef.isSkinnedMesh === true ? new Da(geometry, material) : new Dn(geometry, material);
            if (mesh.isSkinnedMesh === true) {
              mesh.normalizeSkinWeights();
            }
            if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP) {
              mesh.geometry = toTrianglesDrawMode(mesh.geometry, je);
            } else if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN) {
              mesh.geometry = toTrianglesDrawMode(mesh.geometry, De);
            }
          } else if (primitive.mode === WEBGL_CONSTANTS.LINES) {
            mesh = new qo(geometry, material);
          } else if (primitive.mode === WEBGL_CONSTANTS.LINE_STRIP) {
            mesh = new Do(geometry, material);
          } else if (primitive.mode === WEBGL_CONSTANTS.LINE_LOOP) {
            mesh = new Jo(geometry, material);
          } else if (primitive.mode === WEBGL_CONSTANTS.POINTS) {
            mesh = new Qo(geometry, material);
          } else {
            throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + primitive.mode);
          }
          if (Object.keys(mesh.geometry.morphAttributes).length > 0) {
            updateMorphTargets(mesh, meshDef);
          }
          mesh.name = parser.createUniqueName(meshDef.name || "mesh_" + meshIndex);
          assignExtrasToUserData(mesh, meshDef);
          if (primitive.extensions) addUnknownExtensionsToUserData(extensions, mesh, primitive);
          parser.assignFinalMaterial(mesh);
          meshes.push(mesh);
        }
        for (let i2 = 0, il2 = meshes.length; i2 < il2; i2++) {
          parser.associations.set(meshes[i2], {
            meshes: meshIndex,
            primitives: i2
          });
        }
        if (meshes.length === 1) {
          if (meshDef.extensions) addUnknownExtensionsToUserData(extensions, meshes[0], meshDef);
          return meshes[0];
        }
        const group = new ra();
        if (meshDef.extensions) addUnknownExtensionsToUserData(extensions, group, meshDef);
        parser.associations.set(group, { meshes: meshIndex });
        for (let i2 = 0, il2 = meshes.length; i2 < il2; i2++) {
          group.add(meshes[i2]);
        }
        return group;
      });
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
     *
     * @private
     * @param {number} cameraIndex
     * @return {Promise<Camera>|undefined}
     */
    loadCamera(cameraIndex) {
      let camera2;
      const cameraDef = this.json.cameras[cameraIndex];
      const params = cameraDef[cameraDef.type];
      if (!params) {
        console.warn("THREE.GLTFLoader: Missing camera parameters.");
        return;
      }
      if (cameraDef.type === "perspective") {
        camera2 = new Kn(Gs.radToDeg(params.yfov), params.aspectRatio || 1, params.znear || 1, params.zfar || 2e6);
      } else if (cameraDef.type === "orthographic") {
        camera2 = new jc(-params.xmag, params.xmag, params.ymag, -params.ymag, params.znear, params.zfar);
      }
      if (cameraDef.name) camera2.name = this.createUniqueName(cameraDef.name);
      assignExtrasToUserData(camera2, cameraDef);
      return Promise.resolve(camera2);
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
     *
     * @private
     * @param {number} skinIndex
     * @return {Promise<Skeleton>}
     */
    loadSkin(skinIndex) {
      const skinDef = this.json.skins[skinIndex];
      const pending = [];
      for (let i2 = 0, il2 = skinDef.joints.length; i2 < il2; i2++) {
        pending.push(this._loadNodeShallow(skinDef.joints[i2]));
      }
      if (skinDef.inverseBindMatrices !== void 0) {
        pending.push(this.getDependency("accessor", skinDef.inverseBindMatrices));
      } else {
        pending.push(null);
      }
      return Promise.all(pending).then(function(results) {
        const inverseBindMatrices = results.pop();
        const jointNodes = results;
        const bones = [];
        const boneInverses = [];
        for (let i2 = 0, il2 = jointNodes.length; i2 < il2; i2++) {
          const jointNode = jointNodes[i2];
          if (jointNode) {
            bones.push(jointNode);
            const mat = new ar();
            if (inverseBindMatrices !== null) {
              mat.fromArray(inverseBindMatrices.array, i2 * 16);
            }
            boneInverses.push(mat);
          } else {
            console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', skinDef.joints[i2]);
          }
        }
        return new Ja(bones, boneInverses);
      });
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
     *
     * @private
     * @param {number} animationIndex
     * @return {Promise<AnimationClip>}
     */
    loadAnimation(animationIndex) {
      const json = this.json;
      const parser = this;
      const animationDef = json.animations[animationIndex];
      const animationName = animationDef.name ? animationDef.name : "animation_" + animationIndex;
      const pendingNodes = [];
      const pendingInputAccessors = [];
      const pendingOutputAccessors = [];
      const pendingSamplers = [];
      const pendingTargets = [];
      for (let i2 = 0, il2 = animationDef.channels.length; i2 < il2; i2++) {
        const channel = animationDef.channels[i2];
        const sampler = animationDef.samplers[channel.sampler];
        const target = channel.target;
        const name = target.node;
        const input = animationDef.parameters !== void 0 ? animationDef.parameters[sampler.input] : sampler.input;
        const output = animationDef.parameters !== void 0 ? animationDef.parameters[sampler.output] : sampler.output;
        if (target.node === void 0) continue;
        pendingNodes.push(this.getDependency("node", name));
        pendingInputAccessors.push(this.getDependency("accessor", input));
        pendingOutputAccessors.push(this.getDependency("accessor", output));
        pendingSamplers.push(sampler);
        pendingTargets.push(target);
      }
      return Promise.all([
        Promise.all(pendingNodes),
        Promise.all(pendingInputAccessors),
        Promise.all(pendingOutputAccessors),
        Promise.all(pendingSamplers),
        Promise.all(pendingTargets)
      ]).then(function(dependencies) {
        const nodes = dependencies[0];
        const inputAccessors = dependencies[1];
        const outputAccessors = dependencies[2];
        const samplers = dependencies[3];
        const targets = dependencies[4];
        const tracks = [];
        for (let i2 = 0, il2 = nodes.length; i2 < il2; i2++) {
          const node = nodes[i2];
          const inputAccessor = inputAccessors[i2];
          const outputAccessor = outputAccessors[i2];
          const sampler = samplers[i2];
          const target = targets[i2];
          if (node === void 0) continue;
          if (node.updateMatrix) {
            node.updateMatrix();
          }
          const createdTracks = parser._createAnimationTracks(node, inputAccessor, outputAccessor, sampler, target);
          if (createdTracks) {
            for (let k2 = 0; k2 < createdTracks.length; k2++) {
              tracks.push(createdTracks[k2]);
            }
          }
        }
        const animation = new uc(animationName, void 0, tracks);
        assignExtrasToUserData(animation, animationDef);
        return animation;
      });
    }
    createNodeMesh(nodeIndex) {
      const json = this.json;
      const parser = this;
      const nodeDef = json.nodes[nodeIndex];
      if (nodeDef.mesh === void 0) return null;
      return parser.getDependency("mesh", nodeDef.mesh).then(function(mesh) {
        const node = parser._getNodeRef(parser.meshCache, nodeDef.mesh, mesh);
        if (nodeDef.weights !== void 0) {
          node.traverse(function(o2) {
            if (!o2.isMesh) return;
            for (let i2 = 0, il2 = nodeDef.weights.length; i2 < il2; i2++) {
              o2.morphTargetInfluences[i2] = nodeDef.weights[i2];
            }
          });
        }
        return node;
      });
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
     *
     * @private
     * @param {number} nodeIndex
     * @return {Promise<Object3D>}
     */
    loadNode(nodeIndex) {
      const json = this.json;
      const parser = this;
      const nodeDef = json.nodes[nodeIndex];
      const nodePending = parser._loadNodeShallow(nodeIndex);
      const childPending = [];
      const childrenDef = nodeDef.children || [];
      for (let i2 = 0, il2 = childrenDef.length; i2 < il2; i2++) {
        childPending.push(parser.getDependency("node", childrenDef[i2]));
      }
      const skeletonPending = nodeDef.skin === void 0 ? Promise.resolve(null) : parser.getDependency("skin", nodeDef.skin);
      return Promise.all([
        nodePending,
        Promise.all(childPending),
        skeletonPending
      ]).then(function(results) {
        const node = results[0];
        const children = results[1];
        const skeleton = results[2];
        if (skeleton !== null) {
          node.traverse(function(mesh) {
            if (!mesh.isSkinnedMesh) return;
            mesh.bind(skeleton, _identityMatrix);
          });
        }
        for (let i2 = 0, il2 = children.length; i2 < il2; i2++) {
          node.add(children[i2]);
        }
        return node;
      });
    }
    // ._loadNodeShallow() parses a single node.
    // skin and child nodes are created and added in .loadNode() (no '_' prefix).
    _loadNodeShallow(nodeIndex) {
      const json = this.json;
      const extensions = this.extensions;
      const parser = this;
      if (this.nodeCache[nodeIndex] !== void 0) {
        return this.nodeCache[nodeIndex];
      }
      const nodeDef = json.nodes[nodeIndex];
      const nodeName = nodeDef.name ? parser.createUniqueName(nodeDef.name) : "";
      const pending = [];
      const meshPromise = parser._invokeOne(function(ext) {
        return ext.createNodeMesh && ext.createNodeMesh(nodeIndex);
      });
      if (meshPromise) {
        pending.push(meshPromise);
      }
      if (nodeDef.camera !== void 0) {
        pending.push(parser.getDependency("camera", nodeDef.camera).then(function(camera2) {
          return parser._getNodeRef(parser.cameraCache, nodeDef.camera, camera2);
        }));
      }
      parser._invokeAll(function(ext) {
        return ext.createNodeAttachment && ext.createNodeAttachment(nodeIndex);
      }).forEach(function(promise) {
        pending.push(promise);
      });
      this.nodeCache[nodeIndex] = Promise.all(pending).then(function(objects) {
        let node;
        if (nodeDef.isBone === true) {
          node = new Wa();
        } else if (objects.length > 1) {
          node = new ra();
        } else if (objects.length === 1) {
          node = objects[0];
        } else {
          node = new Rr();
        }
        if (node !== objects[0]) {
          for (let i2 = 0, il2 = objects.length; i2 < il2; i2++) {
            node.add(objects[i2]);
          }
        }
        if (nodeDef.name) {
          node.userData.name = nodeDef.name;
          node.name = nodeName;
        }
        assignExtrasToUserData(node, nodeDef);
        if (nodeDef.extensions) addUnknownExtensionsToUserData(extensions, node, nodeDef);
        if (nodeDef.matrix !== void 0) {
          const matrix = new ar();
          matrix.fromArray(nodeDef.matrix);
          node.applyMatrix4(matrix);
        } else {
          if (nodeDef.translation !== void 0) {
            node.position.fromArray(nodeDef.translation);
          }
          if (nodeDef.rotation !== void 0) {
            node.quaternion.fromArray(nodeDef.rotation);
          }
          if (nodeDef.scale !== void 0) {
            node.scale.fromArray(nodeDef.scale);
          }
        }
        if (!parser.associations.has(node)) {
          parser.associations.set(node, {});
        } else if (nodeDef.mesh !== void 0 && parser.meshCache.refs[nodeDef.mesh] > 1) {
          const mapping = parser.associations.get(node);
          parser.associations.set(node, { ...mapping });
        }
        parser.associations.get(node).nodes = nodeIndex;
        return node;
      });
      return this.nodeCache[nodeIndex];
    }
    /**
     * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
     *
     * @private
     * @param {number} sceneIndex
     * @return {Promise<Group>}
     */
    loadScene(sceneIndex) {
      const extensions = this.extensions;
      const sceneDef = this.json.scenes[sceneIndex];
      const parser = this;
      const scene2 = new ra();
      if (sceneDef.name) scene2.name = parser.createUniqueName(sceneDef.name);
      assignExtrasToUserData(scene2, sceneDef);
      if (sceneDef.extensions) addUnknownExtensionsToUserData(extensions, scene2, sceneDef);
      const nodeIds = sceneDef.nodes || [];
      const pending = [];
      for (let i2 = 0, il2 = nodeIds.length; i2 < il2; i2++) {
        pending.push(parser.getDependency("node", nodeIds[i2]));
      }
      return Promise.all(pending).then(function(nodes) {
        for (let i2 = 0, il2 = nodes.length; i2 < il2; i2++) {
          scene2.add(nodes[i2]);
        }
        const reduceAssociations = (node) => {
          const reducedAssociations = /* @__PURE__ */ new Map();
          for (const [key2, value2] of parser.associations) {
            if (key2 instanceof en || key2 instanceof Ai) {
              reducedAssociations.set(key2, value2);
            }
          }
          node.traverse((node2) => {
            const mappings = parser.associations.get(node2);
            if (mappings != null) {
              reducedAssociations.set(node2, mappings);
            }
          });
          return reducedAssociations;
        };
        parser.associations = reduceAssociations(scene2);
        return scene2;
      });
    }
    _createAnimationTracks(node, inputAccessor, outputAccessor, sampler, target) {
      const tracks = [];
      const targetName = node.name ? node.name : node.uuid;
      const targetNames = [];
      if (PATH_PROPERTIES[target.path] === PATH_PROPERTIES.weights) {
        node.traverse(function(object) {
          if (object.morphTargetInfluences) {
            targetNames.push(object.name ? object.name : object.uuid);
          }
        });
      } else {
        targetNames.push(targetName);
      }
      let TypedKeyframeTrack;
      switch (PATH_PROPERTIES[target.path]) {
        case PATH_PROPERTIES.weights:
          TypedKeyframeTrack = ac;
          break;
        case PATH_PROPERTIES.rotation:
          TypedKeyframeTrack = hc;
          break;
        case PATH_PROPERTIES.translation:
        case PATH_PROPERTIES.scale:
          TypedKeyframeTrack = cc;
          break;
        default:
          switch (outputAccessor.itemSize) {
            case 1:
              TypedKeyframeTrack = ac;
              break;
            case 2:
            case 3:
            default:
              TypedKeyframeTrack = cc;
              break;
          }
          break;
      }
      const interpolation = sampler.interpolation !== void 0 ? INTERPOLATION[sampler.interpolation] : Ee;
      const outputArray = this._getArrayFromAccessor(outputAccessor);
      for (let j2 = 0, jl2 = targetNames.length; j2 < jl2; j2++) {
        const track = new TypedKeyframeTrack(
          targetNames[j2] + "." + PATH_PROPERTIES[target.path],
          inputAccessor.array,
          outputArray,
          interpolation
        );
        if (sampler.interpolation === "CUBICSPLINE") {
          this._createCubicSplineTrackInterpolant(track);
        }
        tracks.push(track);
      }
      return tracks;
    }
    _getArrayFromAccessor(accessor) {
      let outputArray = accessor.array;
      if (accessor.normalized) {
        const scale = getNormalizedComponentScale(outputArray.constructor);
        const scaled = new Float32Array(outputArray.length);
        for (let j2 = 0, jl2 = outputArray.length; j2 < jl2; j2++) {
          scaled[j2] = outputArray[j2] * scale;
        }
        outputArray = scaled;
      }
      return outputArray;
    }
    _createCubicSplineTrackInterpolant(track) {
      track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline(result) {
        const interpolantType = this instanceof hc ? GLTFCubicSplineQuaternionInterpolant : GLTFCubicSplineInterpolant;
        return new interpolantType(this.times, this.values, this.getValueSize() / 3, result);
      };
      track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
    }
  };
  function computeBounds(geometry, primitiveDef, parser) {
    const attributes = primitiveDef.attributes;
    const box = new Ri();
    if (attributes.POSITION !== void 0) {
      const accessor = parser.json.accessors[attributes.POSITION];
      const min = accessor.min;
      const max = accessor.max;
      if (min !== void 0 && max !== void 0) {
        box.set(
          new Ks(min[0], min[1], min[2]),
          new Ks(max[0], max[1], max[2])
        );
        if (accessor.normalized) {
          const boxScale = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor.componentType]);
          box.min.multiplyScalar(boxScale);
          box.max.multiplyScalar(boxScale);
        }
      } else {
        console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
        return;
      }
    } else {
      return;
    }
    const targets = primitiveDef.targets;
    if (targets !== void 0) {
      const maxDisplacement = new Ks();
      const vector2 = new Ks();
      for (let i2 = 0, il2 = targets.length; i2 < il2; i2++) {
        const target = targets[i2];
        if (target.POSITION !== void 0) {
          const accessor = parser.json.accessors[target.POSITION];
          const min = accessor.min;
          const max = accessor.max;
          if (min !== void 0 && max !== void 0) {
            vector2.setX(Math.max(Math.abs(min[0]), Math.abs(max[0])));
            vector2.setY(Math.max(Math.abs(min[1]), Math.abs(max[1])));
            vector2.setZ(Math.max(Math.abs(min[2]), Math.abs(max[2])));
            if (accessor.normalized) {
              const boxScale = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor.componentType]);
              vector2.multiplyScalar(boxScale);
            }
            maxDisplacement.max(vector2);
          } else {
            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
          }
        }
      }
      box.expandByVector(maxDisplacement);
    }
    geometry.boundingBox = box;
    const sphere = new $i();
    box.getCenter(sphere.center);
    sphere.radius = box.min.distanceTo(box.max) / 2;
    geometry.boundingSphere = sphere;
  }
  function addPrimitiveAttributes(geometry, primitiveDef, parser) {
    const attributes = primitiveDef.attributes;
    const pending = [];
    function assignAttributeAccessor(accessorIndex, attributeName) {
      return parser.getDependency("accessor", accessorIndex).then(function(accessor) {
        geometry.setAttribute(attributeName, accessor);
      });
    }
    for (const gltfAttributeName in attributes) {
      const threeAttributeName = ATTRIBUTES[gltfAttributeName] || gltfAttributeName.toLowerCase();
      if (threeAttributeName in geometry.attributes) continue;
      pending.push(assignAttributeAccessor(attributes[gltfAttributeName], threeAttributeName));
    }
    if (primitiveDef.indices !== void 0 && !geometry.index) {
      const accessor = parser.getDependency("accessor", primitiveDef.indices).then(function(accessor2) {
        geometry.setIndex(accessor2);
      });
      pending.push(accessor);
    }
    if (yi.workingColorSpace !== Ge && "COLOR_0" in attributes) {
      console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yi.workingColorSpace}" not supported.`);
    }
    assignExtrasToUserData(geometry, primitiveDef);
    computeBounds(geometry, primitiveDef, parser);
    return Promise.all(pending).then(function() {
      return primitiveDef.targets !== void 0 ? addMorphTargets(geometry, primitiveDef.targets, parser) : geometry;
    });
  }

  // work/cad_import_20260802/digital_twin_preview/viewer.js
  var canvas = document.querySelector("#scene");
  var renderer = new ca2({ canvas, antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  renderer.outputColorSpace = Ze;
  renderer.toneMapping = et;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = l;
  var scene = new la();
  scene.background = new Qr(1514013);
  scene.fog = new ha(1514013, 1400, 2600);
  var camera = new Kn(42, 1, 1, 5e3);
  camera.up.set(0, 0, 1);
  var controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.07;
  controls.target.set(300, 420, 250);
  scene.add(new Uc(16777215, 0.85));
  scene.add(new Cc(15266303, 7103576, 1.65));
  var key = new Wc(16777215, 2.4);
  key.position.set(450, -500, 1050);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  scene.add(key);
  var fill = new Wc(16766840, 0.75);
  fill.position.set(-600, 900, 500);
  scene.add(fill);
  var grid = new vd(1800, 36, 5462881, 3159611);
  grid.rotation.x = Math.PI / 2;
  grid.position.z = -1;
  scene.add(grid);
  var loader = new GLTFLoader();
  var loadModel = (file) => new Promise((resolve, reject) => loader.load(`./models/${file}`, (gltf) => resolve(gltf.scene), void 0, reject));
  var applyMaterial = (object, color, metalness = 0.15, roughness = 0.72) => {
    object.traverse((child) => {
      if (!child.isMesh) return;
      child.geometry.computeVertexNormals();
      child.material = new Wl({
        color,
        emissive: color,
        emissiveIntensity: 0.12,
        side: p
      });
      child.castShadow = true;
      child.receiveShadow = true;
    });
  };
  var negate = (v2) => new Ks(-v2.x, -v2.y, -v2.z);
  var vector = (a2) => new Ks(a2[0], a2[1], a2[2]);
  var deg = Gs.degToRad;
  var assemblyReferenceMm = 0;
  var joints = null;
  var carriageRoot = null;
  var containerSystem = null;
  var toolVisual = null;
  var collisionModels = null;
  var activePayload = null;
  var CONTAINER_COLORS = Object.freeze({
    white: "#edf1f2",
    lightGreen: "#81d66d",
    blue: "#2f6fff",
    red: "#dc3c45"
  });
  var APPLE_COLORS = Object.freeze({ red: "#dc3c45", green: "#65a853", yellow: "#e6bf3f" });
  var STATION_SLOTS = Object.freeze({
    yellow: new Ks(566.885958, 256.046995, 61.031901),
    green: new Ks(413.014958, 256.046995, 61.031901),
    red: new Ks(259.143958, 256.046995, 61.031901)
  });
  var FILLED_STACK_X = Object.freeze({ yellow: 566.885958, green: 413.014958, red: 259.143958 });
  var STACK_BASE_Z = 61.031901;
  var STACK_STEP_Z = 93;
  var EMPTY_STACK_CENTER = Object.freeze({ x: -148.479042, y: 626.507995 });
  var EMPTY_STACK_CAPACITY = 6;
  var FILLED_STACK_CAPACITY = 4;
  var SAFE_FORK_OFFSET_MIN = -63;
  var PAYLOAD_CLEARANCE_MM = 1;
  var EMPTY_PICKUP_LIFT_MM = 24;
  var FORK_SLOT_FLOOR_CLEARANCE_MM = 6;
  var CARRY_FORK_PITCH = deg(15);
  var computedSafeForkOffsetMin = SAFE_FORK_OFFSET_MIN;
  function normalizeAppleClass(value2) {
    const key2 = String(value2 || "").trim().toLowerCase();
    const aliases = { red: "red", green: "green", yellow: "yellow", "\u043A\u0440\u0430\u0441\u043D\u044B\u0439": "red", "\u0437\u0435\u043B\u0451\u043D\u044B\u0439": "green", "\u0437\u0435\u043B\u0435\u043D\u044B\u0439": "green", "\u0436\u0451\u043B\u0442\u044B\u0439": "yellow", "\u0436\u0435\u043B\u0442\u044B\u0439": "yellow" };
    if (!aliases[key2]) throw new Error(`\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0446\u0432\u0435\u0442 \u044F\u0431\u043B\u043E\u043A\u0430: ${value2}`);
    return aliases[key2];
  }
  function savedSpareOrder(ids) {
    const storageKey = "berets.digitalTwin.containerOrder.v1";
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey));
      if (Array.isArray(saved) && saved.length === ids.length && ids.every((id2) => saved.includes(id2))) return saved;
    } catch (_2) {
    }
    const shuffled = [...ids];
    for (let i2 = shuffled.length - 1; i2 > 0; i2 -= 1) {
      const j2 = Math.floor(Math.random() * (i2 + 1));
      [shuffled[i2], shuffled[j2]] = [shuffled[j2], shuffled[i2]];
    }
    try {
      localStorage.setItem(storageKey, JSON.stringify(shuffled));
    } catch (_2) {
    }
    return shuffled;
  }
  function makeApple(appleClass, index) {
    const apple = new ra();
    apple.name = `apple-${appleClass}-${index}`;
    const fruit = new Dn(
      new wl(35, 2),
      new Wl({ color: APPLE_COLORS[appleClass], emissive: APPLE_COLORS[appleClass], emissiveIntensity: 0.08 })
    );
    fruit.scale.set(1, 1, 0.92);
    fruit.castShadow = true;
    fruit.receiveShadow = true;
    apple.add(fruit);
    const stem = new Dn(new uh(2.2, 2.8, 12, 8), new Wl({ color: 4797727 }));
    stem.rotation.x = Math.PI / 2;
    stem.position.z = 35;
    apple.add(stem);
    const layer = Math.floor(index / 4);
    const positions = [[0, -46], [0, 46], [-18, -8], [18, 8]];
    const [x2, y2] = positions[index % positions.length];
    apple.position.set(x2, y2, -8 + layer * 52);
    return apple;
  }
  function cloneContainer(template, id2, shellColor) {
    const group = template.clone(true);
    group.name = `container-${id2}`;
    applyMaterial(group, shellColor, 0.05, 0.74);
    group.userData = {
      id: id2,
      shellColor,
      state: "reserve",
      appleClass: null,
      fruitCount: 0,
      slot: null,
      eventIds: /* @__PURE__ */ new Set()
    };
    return group;
  }
  function createContainerSystem(templateModel) {
    const root = new ra();
    root.name = "dynamic-container-system";
    scene.add(root);
    const bounds = new Ri().setFromObject(templateModel);
    const center = bounds.getCenter(new Ks());
    const template = new ra();
    templateModel.position.copy(center).multiplyScalar(-1);
    template.add(templateModel);
    const definitions = [
      ["W1", CONTAINER_COLORS.white],
      ["W2", CONTAINER_COLORS.white],
      ["W3", CONTAINER_COLORS.white],
      ["LG1", CONTAINER_COLORS.lightGreen],
      ["LG2", CONTAINER_COLORS.lightGreen],
      ["LG3", CONTAINER_COLORS.lightGreen],
      ["LG4", CONTAINER_COLORS.lightGreen],
      ["LG5", CONTAINER_COLORS.lightGreen],
      ["BL1", CONTAINER_COLORS.blue],
      ["BL2", CONTAINER_COLORS.blue],
      ["RD1", CONTAINER_COLORS.red],
      ["RD2", CONTAINER_COLORS.red]
    ];
    const containers = new Map(definitions.map(([id2, color]) => {
      const model = cloneContainer(template, id2, color);
      root.add(model);
      return [id2, model];
    }));
    const stationOccupancy = { red: null, green: null, yellow: null };
    const emptyOccupancy = Array(EMPTY_STACK_CAPACITY).fill(null);
    const filledOccupancy = {
      red: Array(FILLED_STACK_CAPACITY).fill(null),
      green: Array(FILLED_STACK_CAPACITY).fill(null),
      yellow: Array(FILLED_STACK_CAPACITY).fill(null)
    };
    const acceptedEvents = /* @__PURE__ */ new Set();
    let previewStationColor = null;
    function place(container, state, slot, position, rotationZ = 0) {
      container.visible = state !== "reserve";
      container.position.copy(position);
      container.rotation.set(0, 0, rotationZ);
      container.userData.state = state;
      container.userData.slot = slot;
    }
    function station(containerId, appleClass) {
      const kind = normalizeAppleClass(appleClass);
      const container = containers.get(containerId);
      if (!container) throw new Error(`\u041D\u0435\u0442 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430 ${containerId}`);
      stationOccupancy[kind] = containerId;
      container.userData.appleClass = kind;
      place(container, "station", kind, STATION_SLOTS[kind]);
    }
    station("W1", "red");
    station("W2", "green");
    station("W3", "yellow");
    const spareIds = savedSpareOrder(definitions.slice(3).map(([id2]) => id2));
    spareIds.forEach((id2, index) => {
      const container = containers.get(id2);
      if (index < EMPTY_STACK_CAPACITY) {
        emptyOccupancy[index] = id2;
        place(container, "empty_stack", index, new Ks(EMPTY_STACK_CENTER.x, EMPTY_STACK_CENTER.y, STACK_BASE_Z + index * STACK_STEP_Z), -Math.PI / 2);
      } else {
        place(container, "reserve", null, new Ks());
      }
    });
    function clearApples(container) {
      for (const child of [...container.children]) {
        if (String(child.name || "").startsWith("apple-")) container.remove(child);
      }
      container.userData.fruitCount = 0;
      container.userData.eventIds.clear();
    }
    function configureEmptyStack(count) {
      const numeric = Number(count);
      const requested = Math.max(0, Math.min(EMPTY_STACK_CAPACITY, Math.round(Number.isFinite(numeric) ? numeric : EMPTY_STACK_CAPACITY)));
      const mutable = [...containers.values()].filter((container) => container.userData.state !== "station" && container.userData.state !== "filled_stack" && container.userData.state !== "carried");
      if (mutable.length < requested) throw new Error("\u041D\u0435\u043B\u044C\u0437\u044F \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0441\u0445\u043E\u0434\u043D\u0443\u044E \u0441\u0442\u043E\u043F\u043A\u0443 \u043F\u043E\u0441\u043B\u0435 \u043D\u0430\u0447\u0430\u043B\u0430 \u043E\u0431\u043C\u0435\u043D\u0430");
      emptyOccupancy.fill(null);
      mutable.forEach((container, index) => {
        clearApples(container);
        container.userData.appleClass = null;
        if (index < requested) {
          emptyOccupancy[index] = container.userData.id;
          place(container, "empty_stack", index, new Ks(EMPTY_STACK_CENTER.x, EMPTY_STACK_CENTER.y, STACK_BASE_Z + index * STACK_STEP_Z), -Math.PI / 2);
        } else {
          place(container, "reserve", null, new Ks());
        }
      });
      return { count: requested };
    }
    function previewStationApples(color, count = 2) {
      const kind = normalizeAppleClass(color);
      if (previewStationColor && previewStationColor !== kind) {
        const previous = containers.get(stationOccupancy[previewStationColor]);
        if (previous && previous.userData.state === "station") clearApples(previous);
      }
      const container = containers.get(stationOccupancy[kind]);
      if (!container) throw new Error(`\u041D\u0430 \u0441\u0442\u0430\u043D\u0446\u0438\u0438 ${kind} \u043D\u0435\u0442 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430`);
      clearApples(container);
      const apples = Math.max(0, Math.min(8, Math.round(Number(count) || 0)));
      for (let index = 0; index < apples; index += 1) container.add(makeApple(kind, index));
      container.userData.fruitCount = apples;
      container.userData.appleClass = kind;
      previewStationColor = kind;
      return { containerId: container.userData.id, fruitCount: apples, appleClass: kind };
    }
    function addConfirmedApple({ color, appleClass, eventId } = {}) {
      const kind = normalizeAppleClass(appleClass || color);
      const id2 = String(eventId || "").trim();
      if (!id2) throw new Error("\u0414\u043B\u044F +1 \u044F\u0431\u043B\u043E\u043A\u0430 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D eventId");
      if (acceptedEvents.has(id2)) return { accepted: false, duplicate: true, eventId: id2 };
      const containerId = stationOccupancy[kind];
      if (!containerId) throw new Error(`\u041D\u0430 \u0441\u0442\u0430\u043D\u0446\u0438\u0438 ${kind} \u043D\u0435\u0442 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430`);
      const container = containers.get(containerId);
      acceptedEvents.add(id2);
      container.userData.eventIds.add(id2);
      const apple = makeApple(kind, container.userData.fruitCount);
      apple.userData.eventId = id2;
      container.add(apple);
      container.userData.fruitCount += 1;
      container.userData.appleClass = kind;
      return { accepted: true, duplicate: false, eventId: id2, containerId, fruitCount: container.userData.fruitCount };
    }
    function startFullContainerTransfer(color) {
      const kind = normalizeAppleClass(color);
      const containerId = stationOccupancy[kind];
      if (!containerId) throw new Error(`\u041D\u0430 \u0441\u0442\u0430\u043D\u0446\u0438\u0438 ${kind} \u043D\u0435\u0442 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430`);
      const container = containers.get(containerId);
      stationOccupancy[kind] = null;
      container.userData.state = "carried";
      container.userData.slot = null;
      return { containerId, appleClass: kind };
    }
    function setCarriedPose(containerId, { position, quaternion, rotation } = {}) {
      const container = containers.get(containerId);
      if (!container || container.userData.state !== "carried") throw new Error(`${containerId} \u043D\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0435`);
      if (position) container.position.fromArray(position);
      if (quaternion) container.quaternion.fromArray(quaternion);
      else if (rotation) container.rotation.fromArray(rotation);
      return { containerId };
    }
    function finishFullContainerTransfer(containerId, color) {
      const kind = normalizeAppleClass(color);
      const container = containers.get(containerId);
      if (!container || container.userData.state !== "carried") throw new Error(`${containerId} \u043D\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0435`);
      const slot = filledOccupancy[kind].findIndex((id2) => id2 === null);
      if (slot < 0) throw new Error(`\u0421\u0442\u043E\u043F\u043A\u0430 ${kind} \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0430`);
      filledOccupancy[kind][slot] = containerId;
      container.userData.appleClass = kind;
      place(container, "filled_stack", `${kind}:${slot}`, new Ks(FILLED_STACK_X[kind], 995.112906, STACK_BASE_Z + slot * STACK_STEP_Z), Math.PI);
      return { containerId, appleClass: kind, slot };
    }
    function clearFilledStack(color) {
      const kind = normalizeAppleClass(color);
      if (activePayload?.type === "full" && activePayload.appleClass === kind) throw new Error(`\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 ${kind} \u0435\u0449\u0451 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u043D\u0430 \u0432\u0438\u043B\u0430\u0445`);
      const removed = [];
      for (let slot = 0; slot < FILLED_STACK_CAPACITY; slot += 1) {
        const containerId = filledOccupancy[kind][slot];
        if (!containerId) continue;
        const container = containers.get(containerId);
        filledOccupancy[kind][slot] = null;
        clearApples(container);
        container.userData.appleClass = null;
        place(container, "reserve", null, new Ks());
        removed.push(containerId);
      }
      return { appleClass: kind, removed };
    }
    function configureFilledStack(color, count) {
      const kind = normalizeAppleClass(color);
      const numeric = Number(count);
      const requested = Math.max(0, Math.min(FILLED_STACK_CAPACITY, Math.round(Number.isFinite(numeric) ? numeric : 0)));
      clearFilledStack(kind);
      const reserve = [...containers.values()].filter((container) => container.userData.state === "reserve");
      if (reserve.length < requested) throw new Error("Недостаточно резервных контейнеров для выбранных уровней стопок");
      for (let slot = 0; slot < requested; slot += 1) {
        const container = reserve[slot];
        clearApples(container);
        for (let appleIndex = 0; appleIndex < 2; appleIndex += 1) container.add(makeApple(kind, appleIndex));
        container.userData.fruitCount = 2;
        container.userData.appleClass = kind;
        filledOccupancy[kind][slot] = container.userData.id;
        place(container, "filled_stack", `${kind}:${slot}`, new Ks(FILLED_STACK_X[kind], 995.112906, STACK_BASE_Z + slot * STACK_STEP_Z), Math.PI);
      }
      return { appleClass: kind, count: requested };
    }
    function cancelFullContainerTransfer(containerId, color) {
      const kind = normalizeAppleClass(color);
      const container = containers.get(containerId);
      if (!container || container.userData.state !== "carried") throw new Error(`${containerId} \u043D\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0435`);
      if (stationOccupancy[kind]) throw new Error(`\u0421\u0442\u0430\u043D\u0446\u0438\u044F ${kind} \u0443\u0436\u0435 \u0437\u0430\u043D\u044F\u0442\u0430`);
      stationOccupancy[kind] = containerId;
      container.userData.appleClass = kind;
      place(container, "station", kind, STATION_SLOTS[kind]);
      return { containerId, appleClass: kind };
    }
    function startEmptyContainerTransfer() {
      let slot = -1;
      for (let index = emptyOccupancy.length - 1; index >= 0; index -= 1) {
        if (emptyOccupancy[index]) {
          slot = index;
          break;
        }
      }
      if (slot < 0) throw new Error("\u0421\u0442\u043E\u043F\u043A\u0430 \u043F\u0443\u0441\u0442\u044B\u0445 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043E\u0432 \u043F\u0443\u0441\u0442\u0430");
      const containerId = emptyOccupancy[slot];
      emptyOccupancy[slot] = null;
      const container = containers.get(containerId);
      container.userData.state = "carried";
      container.userData.slot = null;
      return { containerId, sourceSlot: slot };
    }
    function cancelEmptyContainerTransfer(containerId, sourceSlot) {
      const slot = Number(sourceSlot);
      const container = containers.get(containerId);
      if (!container || container.userData.state !== "carried") throw new Error(`${containerId} \u043D\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0435`);
      if (!Number.isInteger(slot) || slot < 0 || slot >= EMPTY_STACK_CAPACITY || emptyOccupancy[slot]) throw new Error("\u041D\u0435\u043B\u044C\u0437\u044F \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u0443\u0441\u0442\u043E\u0439 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0432 \u0438\u0441\u0445\u043E\u0434\u043D\u0443\u044E \u0441\u0442\u043E\u043F\u043A\u0443");
      emptyOccupancy[slot] = containerId;
      place(container, "empty_stack", slot, new Ks(EMPTY_STACK_CENTER.x, EMPTY_STACK_CENTER.y, STACK_BASE_Z + slot * STACK_STEP_Z), -Math.PI / 2);
      return { containerId, sourceSlot: slot };
    }
    function finishEmptyContainerTransfer(containerId, color) {
      const kind = normalizeAppleClass(color);
      if (stationOccupancy[kind]) throw new Error(`\u0421\u0442\u0430\u043D\u0446\u0438\u044F ${kind} \u0443\u0436\u0435 \u0437\u0430\u043D\u044F\u0442\u0430`);
      const container = containers.get(containerId);
      if (!container || container.userData.state !== "carried") throw new Error(`${containerId} \u043D\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0435`);
      container.userData.appleClass = kind;
      stationOccupancy[kind] = containerId;
      place(container, "station", kind, STATION_SLOTS[kind]);
      return { containerId, appleClass: kind };
    }
    function installNextEmptyContainer(color) {
      const started = startEmptyContainerTransfer();
      return { ...finishEmptyContainerTransfer(started.containerId, color), sourceSlot: started.sourceSlot };
    }
    function completeContainerExchange(color) {
      const started = startFullContainerTransfer(color);
      const filled = finishFullContainerTransfer(started.containerId, started.appleClass);
      const replacement = installNextEmptyContainer(started.appleClass);
      return { filled, replacement };
    }
    function getState() {
      return {
        stations: { ...stationOccupancy },
        emptyStack: [...emptyOccupancy],
        filledStacks: Object.fromEntries(Object.entries(filledOccupancy).map(([key2, ids]) => [key2, [...ids]])),
        containers: [...containers.values()].map((container) => ({
          id: container.userData.id,
          shellColor: container.userData.shellColor,
          state: container.userData.state,
          appleClass: container.userData.appleClass,
          fruitCount: container.userData.fruitCount,
          slot: container.userData.slot
        }))
      };
    }
    return {
      root,
      containers,
      addConfirmedApple,
      configureEmptyStack,
      configureFilledStack,
      previewStationApples,
      startFullContainerTransfer,
      setCarriedPose,
      finishFullContainerTransfer,
      cancelFullContainerTransfer,
      startEmptyContainerTransfer,
      cancelEmptyContainerTransfer,
      finishEmptyContainerTransfer,
      installNextEmptyContainer,
      completeContainerExchange,
      clearFilledStack,
      getState
    };
  }
  function attachPivot(parent, pivotAbs, parentPivotAbs, mesh) {
    const group = new ra();
    group.position.copy(pivotAbs).sub(parentPivotAbs);
    mesh.position.copy(negate(pivotAbs));
    group.add(mesh);
    parent.add(group);
    return group;
  }
  function setAssemblyTransform(object, rows) {
    object.matrixAutoUpdate = false;
    object.matrix.set(
      rows[0][0],
      rows[0][1],
      rows[0][2],
      rows[0][3],
      rows[1][0],
      rows[1][1],
      rows[1][2],
      rows[1][3],
      rows[2][0],
      rows[2][1],
      rows[2][2],
      rows[2][3],
      rows[3][0],
      rows[3][1],
      rows[3][2],
      rows[3][3]
    );
  }
  async function loadColoredParts(parts, parent, excluded = /* @__PURE__ */ new Set()) {
    const entries = await Promise.all(Object.entries(parts).filter(([name]) => !excluded.has(name)).map(async ([name, spec]) => {
      const model = await loadModel(spec.file);
      return [name, spec, model];
    }));
    for (const [, spec, model] of entries) {
      applyMaterial(model, spec.color);
      parent.add(model);
    }
  }
  async function buildArmPartGroup(spec) {
    const group = new ra();
    await loadColoredParts(spec.parts, group);
    return group;
  }
  async function buildScene() {
    const manifest = await fetch("./models/manifest.json?v=20260809-2").then((response) => response.json());
    assemblyReferenceMm = Number(manifest.rail.assembly_reference_mm);
    document.querySelector("#rail").max = String(manifest.rail.max_travel_mm);
    const staticRoot = new ra();
    scene.add(staticRoot);
    carriageRoot = new ra();
    scene.add(carriageRoot);
    const containerSpec = manifest.scene.container;
    if (!containerSpec?.file) throw new Error("\u0412 manifest.json \u043D\u0435\u0442 scene.container.file");
    const [fixedModel, j1Model, j10Model, j11Model, j16Model, toolModel, containerModel] = await Promise.all([
      buildArmPartGroup(manifest.arm.groups.arm_fixed),
      buildArmPartGroup(manifest.arm.groups.joint_1),
      buildArmPartGroup(manifest.arm.groups.joint_10),
      buildArmPartGroup(manifest.arm.groups.joint_11),
      buildArmPartGroup(manifest.arm.groups.joint_16),
      loadModel(manifest.scene.tool.file),
      loadModel(containerSpec.file),
      loadColoredParts(manifest.scene.parts, staticRoot),
      loadColoredParts(manifest.scene.carriage_parts, carriageRoot)
    ]);
    containerSystem = createContainerSystem(containerModel);
    window.BERETSDigitalTwin = Object.freeze({
      addConfirmedApple: containerSystem.addConfirmedApple,
      configureEmptyStack: containerSystem.configureEmptyStack,
      configureFilledStack: containerSystem.configureFilledStack,
      previewStationApples: containerSystem.previewStationApples,
      startFullContainerTransfer: containerSystem.startFullContainerTransfer,
      setCarriedPose: containerSystem.setCarriedPose,
      finishFullContainerTransfer: containerSystem.finishFullContainerTransfer,
      cancelFullContainerTransfer: containerSystem.cancelFullContainerTransfer,
      startEmptyContainerTransfer: containerSystem.startEmptyContainerTransfer,
      cancelEmptyContainerTransfer: containerSystem.cancelEmptyContainerTransfer,
      finishEmptyContainerTransfer: containerSystem.finishEmptyContainerTransfer,
      installNextEmptyContainer: containerSystem.installNextEmptyContainer,
      completeContainerExchange: containerSystem.completeContainerExchange,
      clearFilledStack: containerSystem.clearFilledStack,
      getContainerState: containerSystem.getState
    });
    document.body.dataset.containerCount = String(containerSystem.getState().containers.length);
    const initialEmptyCount = Number(document.querySelector("#empty-container-count")?.value || EMPTY_STACK_CAPACITY);
    containerSystem.configureEmptyStack(initialEmptyCount);
    containerSystem.previewStationApples(document.querySelector("#trajectory-color")?.value || "red", 2);
    const armPlacement = new ra();
    setAssemblyTransform(armPlacement, manifest.arm.assembly_from_arm_local);
    carriageRoot.add(armPlacement);
    armPlacement.add(fixedModel);
    const p1 = vector(manifest.arm.pivots["1"]);
    const p10 = vector(manifest.arm.pivots["10"]);
    const p11 = vector(manifest.arm.pivots["11"]);
    const p16 = vector(manifest.arm.pivots["16"]);
    const origin = new Ks();
    const joint1 = attachPivot(armPlacement, p1, origin, j1Model);
    const joint10 = attachPivot(joint1, p10, p1, j10Model);
    const joint11 = attachPivot(joint10, p11, p10, j11Model);
    const joint16 = attachPivot(joint11, p16, p11, j16Model);
    toolModel.position.copy(negate(p16));
    applyMaterial(toolModel, manifest.scene.tool.color);
    joint16.add(toolModel);
    toolVisual = toolModel;
    collisionModels = { fixedModel, j1Model, j10Model, j11Model, j16Model, toolModel };
    joints = {
      joint1,
      joint10,
      joint11,
      joint16,
      axes: {
        joint1: vector(manifest.arm.axes["1"]).normalize(),
        joint10: vector(manifest.arm.axes["10"]).normalize(),
        joint11: vector(manifest.arm.axes["11"]).normalize(),
        joint16: vector(manifest.arm.axes["16"]).normalize()
      }
    };
    applyJointLimits(manifest.arm.limits);
    updatePose();
    window.BERETSRoutePreview = Object.freeze({
      ready: true,
      setPose(pose) {
        const current = readPose();
        writePose({ ...current, ...pose });
        return readPose();
      },
      getPose() {
        return readPose();
      },
      prepareRoute(color, fullLevel = 1, emptyLevel = 6) {
        cancelPayload();
        for (const stackColor of ["red", "green", "yellow"]) containerSystem.clearFilledStack(stackColor);
        containerSystem.configureEmptyStack(Math.max(1, Math.min(6, Number(emptyLevel) || 6)));
        containerSystem.configureFilledStack(color, Math.max(0, Math.min(3, (Number(fullLevel) || 1) - 1)));
        containerSystem.previewStationApples(color, 2);
        return containerSystem.getState();
      },
      performAction(action, color) {
        if (action === "take_full") takeFullPayload(color);
        if (action === "place_full") placeFullPayload();
        if (action === "take_empty") takeEmptyPayload();
        if (action === "place_empty") placeEmptyPayload(color);
        return containerSystem.getState();
      }
    });
    window.dispatchEvent(new CustomEvent("berets-route-preview-ready"));
    document.querySelector(".status").classList.add("ready");
    document.querySelector("#status-text").textContent = "\u0426\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u0434\u0432\u043E\u0439\u043D\u0438\u043A \u0433\u043E\u0442\u043E\u0432 \xB7 12 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043E\u0432";
    activateRouteColor(document.querySelector("#trajectory-color").value);
  }
  function value(id2) {
    return Number(document.querySelector(id2).value);
  }
  function updatePose() {
    if (!joints || !carriageRoot) return;
    const rail = value("#rail");
    carriageRoot.position.x = assemblyReferenceMm - rail;
    joints.joint1.quaternion.setFromAxisAngle(joints.axes.joint1, deg((500 - value("#joint-1")) * 0.24));
    joints.joint10.quaternion.setFromAxisAngle(joints.axes.joint10, deg((value("#joint-10") - 500) * 0.24));
    joints.joint11.quaternion.setFromAxisAngle(joints.axes.joint11, deg((value("#joint-11") - 375) * 0.24));
    joints.joint16.quaternion.setFromAxisAngle(joints.axes.joint16, deg((value("#joint-16") - 500) * 0.24));
    updateCollisionStatus();
  }
  var CONTROL_MAP = Object.freeze({ rail: "#rail", j1: "#joint-1", j10: "#joint-10", j11: "#joint-11", j16: "#joint-16" });
  var OUTPUT_MAP = Object.freeze({ rail: "#rail-value", j1: "#joint-1-value", j10: "#joint-10-value", j11: "#joint-11-value", j16: "#joint-16-value" });
  var HOME_POSE = Object.freeze({ rail: 0, j1: 500, j10: 500, j11: 375, j16: 500 });
  var STATION_RAIL = Object.freeze({ red: 322, green: 169, yellow: 14 });
  var PICKUP_TORQUE = 28.5;
  var SERVO_NOMINAL_TORQUE = 20;
  var trajectoryToken = 0;
  var trajectoryRunning = false;
  var trajectoryPaused = false;
  var trajectoryLoadFactor = 0;
  function applyJointLimits(limits) {
    const ids = { "1": "#joint-1", "10": "#joint-10", "11": "#joint-11", "16": "#joint-16" };
    for (const [id2, selector] of Object.entries(ids)) {
      const spec = limits?.[id2];
      if (!spec) continue;
      const input = document.querySelector(selector);
      input.min = String(spec.min);
      input.max = String(spec.max);
      const note = input.closest("label")?.querySelector("small");
      if (note && !note.dataset.limitsApplied) {
        note.textContent += ` \xB7 ${spec.min}\u2013${spec.max}`;
        note.dataset.limitsApplied = "1";
      }
    }
  }
  function readPose() {
    return Object.fromEntries(Object.entries(CONTROL_MAP).map(([key2, selector]) => [key2, value(selector)]));
  }
  function writePose(pose) {
    for (const [key2, raw] of Object.entries(pose)) {
      const input = document.querySelector(CONTROL_MAP[key2]);
      if (!input) continue;
      const minimum = Number(input.min || -Infinity);
      const maximum = Number(input.max || Infinity);
      const next = Math.max(minimum, Math.min(maximum, Math.round(Number(raw))));
      input.value = String(next);
      document.querySelector(OUTPUT_MAP[key2]).textContent = key2 === "rail" ? `${next} \u043C\u043C` : String(next);
    }
    updatePose();
  }
  function modelBox(model, inset = 9) {
    const box = new Ri().setFromObject(model);
    const size = box.getSize(new Ks());
    const safeInset = Math.min(inset, Math.max(0, Math.min(size.x, size.y, size.z) / 2 - 0.5));
    if (safeInset > 0) box.expandByScalar(-safeInset);
    return box;
  }
  function detectSelfCollision() {
    if (!collisionModels) return null;
    scene.updateMatrixWorld(true);
    const m2 = collisionModels;
    const pairs = [
      ["\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043F\u0440\u0435\u0434\u043F\u043B\u0435\u0447\u044C\u0435", m2.fixedModel, m2.j11Model],
      ["\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043A\u0438\u0441\u0442\u044C", m2.fixedModel, m2.j16Model],
      ["\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0432\u0438\u043B\u044B", m2.fixedModel, m2.toolModel],
      ["\u043F\u043B\u0435\u0447\u043E \u0438 \u043A\u0438\u0441\u0442\u044C", m2.j1Model, m2.j16Model],
      ["\u043F\u043B\u0435\u0447\u043E \u0438 \u0432\u0438\u043B\u044B", m2.j1Model, m2.toolModel],
      ["\u043B\u043E\u043A\u043E\u0442\u044C \u0438 \u0432\u0438\u043B\u044B", m2.j10Model, m2.toolModel]
    ];
    for (const [label, first, second] of pairs) {
      if (modelBox(first).intersectsBox(modelBox(second))) return label;
    }
    return null;
  }
  function updateCollisionStatus() {
    const node = document.querySelector("#collision-status");
    if (!node || !collisionModels) return null;
    const collision = detectSelfCollision();
    node.textContent = collision ? `\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0435 \u043F\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u0435: ${collision}` : "\u0421\u0430\u043C\u043E\u043F\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u044F \u0437\u0432\u0435\u043D\u044C\u0435\u0432: \u043D\u0435 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u044B";
    node.classList.toggle("collision-warning", Boolean(collision));
    return collision;
  }
  function setManualLocked(locked) {
    for (const selector of Object.values(CONTROL_MAP)) document.querySelector(selector).disabled = locked;
    for (const selector of ["#trajectory-color", "#fork-offset", "#empty-container-count", "#deliver-empty-containers", "#keyframe-label", "#keyframe-duration", "#keyframe-action", "#keyframe-record", "#keyframe-clear", "#trajectory-json", "#trajectory-json-apply", "#route-calculate", "#route-copy-source", "#route-copy-joints", "#route-reset-color"]) {
      const node = document.querySelector(selector);
      if (node) node.disabled = locked;
    }
  }
  function formatDecimal(value2) {
    return Number(value2).toFixed(1).replace(".", ",");
  }
  function updateLoad(factor = trajectoryLoadFactor) {
    trajectoryLoadFactor = Math.max(0, Math.min(1, factor));
    const assist = Number(document.querySelector("#latex-assist").value);
    const raw = PICKUP_TORQUE * trajectoryLoadFactor;
    const servoLoad = Math.max(0, raw - assist * trajectoryLoadFactor);
    const reserve = SERVO_NOMINAL_TORQUE - servoLoad;
    const fill2 = document.querySelector("#load-fill");
    fill2.style.width = `${Math.min(100, servoLoad / PICKUP_TORQUE * 100)}%`;
    fill2.style.background = servoLoad > SERVO_NOMINAL_TORQUE ? "#d75b5b" : "#55b77c";
    document.querySelector("#shoulder-load").textContent = formatDecimal(servoLoad);
    document.querySelector("#latex-assist-value").textContent = `${formatDecimal(assist)} \u043A\u0433\xB7\u0441\u043C`;
    document.querySelector("#latex-summary").textContent = `${formatDecimal(assist)} \u043A\u0433\xB7\u0441\u043C`;
    document.querySelector("#torque-reserve").textContent = `${reserve >= 0 ? "+" : "\u2212"}${formatDecimal(Math.abs(reserve))} \u043A\u0433\xB7\u0441\u043C`;
    const warning = document.querySelector("#load-warning");
    warning.className = "load-warning";
    if (!activePayload) warning.textContent = "\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u043D\u0435 \u0437\u0430\u0445\u0432\u0430\u0447\u0435\u043D";
    else if (servoLoad > SERVO_NOMINAL_TORQUE) {
      warning.textContent = `\u041F\u0435\u0440\u0435\u0433\u0440\u0443\u0437\u043A\u0430 ID10 \u043D\u0430 ${formatDecimal(servoLoad - SERVO_NOMINAL_TORQUE)} \u043A\u0433\xB7\u0441\u043C`;
      warning.classList.add("overload");
    } else {
      warning.textContent = reserve < 2 ? "\u041D\u043E\u043C\u0438\u043D\u0430\u043B \u043D\u0435 \u043F\u0440\u0435\u0432\u044B\u0448\u0435\u043D, \u043D\u043E \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0437\u0430\u043F\u0430\u0441\u0430 \u043F\u043E\u0447\u0442\u0438 \u043D\u0435\u0442" : "\u0420\u0430\u0441\u0447\u0451\u0442\u043D\u0430\u044F \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043D\u0438\u0436\u0435 \u043D\u043E\u043C\u0438\u043D\u0430\u043B\u0430";
      warning.classList.add("safe");
    }
  }
  function updateForkOffset() {
    const control = document.querySelector("#fork-offset");
    const offset = Math.max(computedSafeForkOffsetMin, Math.min(0, Number(control.value)));
    control.value = String(offset);
    const degrees = offset * 0.24;
    const sign = (number) => number < 0 ? "\u2212" : "+";
    document.querySelector("#fork-offset-value").textContent = `${sign(offset)}${Math.abs(offset)} \xB7 ${sign(degrees)}${formatDecimal(Math.abs(degrees))}\xB0`;
  }
  function setTrajectoryStage(index, label, state = "running") {
    const status = document.querySelector("#trajectory-state");
    status.textContent = label;
    status.className = `trajectory-state ${state}`;
    document.querySelectorAll("#trajectory-steps span").forEach((step, stepIndex) => {
      step.classList.toggle("active", stepIndex === index);
      step.classList.toggle("done", stepIndex < index);
    });
  }
  function worldBounds(object) {
    object.updateWorldMatrix(true, true);
    return new Ri().setFromObject(object);
  }
  function boxClearance(a2, b2) {
    const dx = Math.max(0, a2.min.x - b2.max.x, b2.min.x - a2.max.x);
    const dy = Math.max(0, a2.min.y - b2.max.y, b2.min.y - a2.max.y);
    const dz = Math.max(0, a2.min.z - b2.max.z, b2.min.z - a2.max.z);
    return Math.hypot(dx, dy, dz);
  }
  function containerArmClearance(container) {
    if (!container || !collisionModels) return Infinity;
    const payloadBounds = worldBounds(container);
    return Math.min(
      boxClearance(payloadBounds, worldBounds(collisionModels.j16Model)),
      boxClearance(payloadBounds, worldBounds(collisionModels.j11Model))
    );
  }
  function lerpPose(start, target, ratio) {
    const pose = {};
    for (const key2 of Object.keys(HOME_POSE)) pose[key2] = Gs.lerp(Number(start[key2]), Number(target[key2]), ratio);
    return pose;
  }
  function findDeepestSafeInsertion(approach, requested, container, clearance = PAYLOAD_CLEARANCE_MM) {
    if (!container || !joints) return { ...requested };
    const restore = readPose();
    const originalParent = container.parent;
    const originalPosition = container.position.clone();
    const originalQuaternion = container.quaternion.clone();
    const originalScale = container.scale.clone();
    let low = 0;
    let high = 1;
    let best = { ...approach };
    for (let iteration = 0; iteration < 18; iteration += 1) {
      const ratio = (low + high) / 2;
      let candidate = horizontalizeFork(lerpPose(approach, requested, ratio));
      candidate = alignToolHeight(approach, candidate);
      writePose(candidate);
      const horizontalClearance = containerArmClearance(container);
      scene.updateMatrixWorld(true);
      toolVisual.attach(container);
      writePose(withForkWorldPitch(candidate, CARRY_FORK_PITCH));
      const carryClearance = containerArmClearance(container);
      originalParent.add(container);
      container.position.copy(originalPosition);
      container.quaternion.copy(originalQuaternion);
      container.scale.copy(originalScale);
      if (horizontalClearance >= clearance && carryClearance >= clearance) {
        best = candidate;
        low = ratio;
      } else {
        high = ratio;
      }
    }
    writePose(restore);
    return best;
  }
  function attachPayload(started, type) {
    if (activePayload) throw new Error("\u041C\u0430\u043D\u0438\u043F\u0443\u043B\u044F\u0442\u043E\u0440 \u0443\u0436\u0435 \u043D\u0435\u0441\u0451\u0442 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440");
    const container = containerSystem.containers.get(started.containerId);
    scene.updateMatrixWorld(true);
    toolVisual.attach(container);
    scene.updateMatrixWorld(true);
    activePayload = { ...started, type, container };
  }
  function takeFullPayload(color) {
    attachPayload(containerSystem.startFullContainerTransfer(color), "full");
  }
  function placeFullPayload() {
    if (!activePayload || activePayload.type !== "full") throw new Error("\u041F\u043E\u043B\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u043D\u0435 \u0437\u0430\u0445\u0432\u0430\u0447\u0435\u043D");
    const payload = activePayload;
    containerSystem.root.attach(payload.container);
    containerSystem.finishFullContainerTransfer(payload.containerId, payload.appleClass);
    activePayload = null;
  }
  function takeEmptyPayload() {
    attachPayload(containerSystem.startEmptyContainerTransfer(), "empty");
    syncEmptyStackUI();
  }
  function placeEmptyPayload(color) {
    if (!activePayload || activePayload.type !== "empty") throw new Error("\u041F\u0443\u0441\u0442\u043E\u0439 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u043D\u0435 \u0437\u0430\u0445\u0432\u0430\u0447\u0435\u043D");
    const payload = activePayload;
    containerSystem.root.attach(payload.container);
    containerSystem.finishEmptyContainerTransfer(payload.containerId, color);
    activePayload = null;
  }
  function cancelPayload() {
    if (!activePayload) return;
    const payload = activePayload;
    containerSystem.root.attach(payload.container);
    if (payload.type === "full") containerSystem.cancelFullContainerTransfer(payload.containerId, payload.appleClass);
    else containerSystem.cancelEmptyContainerTransfer(payload.containerId, payload.sourceSlot);
    activePayload = null;
    syncEmptyStackUI();
  }
  function syncEmptyStackUI() {
    if (!containerSystem) return;
    const count = containerSystem.getState().emptyStack.filter(Boolean).length;
    const control = document.querySelector("#empty-container-count");
    control.value = String(count);
    document.querySelector("#empty-container-count-value").textContent = String(count);
  }
  function tweenPose(target, duration, targetLoad, token) {
    const start = readPose();
    const initialLoad = trajectoryLoadFactor;
    const speed = Number(document.querySelector("#trajectory-speed").value) / 100;
    return new Promise((resolve) => {
      let elapsed = 0;
      let previous = performance.now();
      function tick(now) {
        if (token !== trajectoryToken) {
          resolve(false);
          return;
        }
        const delta = trajectoryPaused ? 0 : (now - previous) * speed;
        previous = now;
        elapsed += delta;
        const progress = Math.min(1, elapsed / duration);
        const eased = progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
        const pose = {};
        for (const key2 of Object.keys(HOME_POSE)) pose[key2] = start[key2] + (target[key2] - start[key2]) * eased;
        writePose(pose);
        updateLoad(initialLoad + (targetLoad - initialLoad) * eased);
        if (progress >= 1) resolve(true);
        else requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }
  async function safeTweenPose(target, duration, targetLoad, token) {
    return tweenPose(target, duration, targetLoad, token);
  }
  function transitPose(rail, j1 = 500) {
    return { rail, j1, j10: 230, j11: 970, j16: 550 };
  }
  async function tweenRouteFrame(index, target, duration, targetLoad, token) {
    const start = readPose();
    const legs = [];
    let targetAlreadyIncluded = false;
    if ([1, 5, 7, 10].includes(index)) {
      legs.push(...horizontalForkLegs(start, target));
      targetAlreadyIncluded = true;
    } else if ([2, 8].includes(index)) {
      legs.push(...retractTiltLegs(start, target));
      targetAlreadyIncluded = true;
    } else if (index === 0) {
      legs.push(transitPose(start.rail, 500));
      legs.push(transitPose(target.rail, 500));
      legs.push(transitPose(target.rail, target.j1));
    } else if (index === 6) {
      legs.push(transitPose(start.rail, start.j1));
      legs.push(transitPose(start.rail, 500));
      legs.push(transitPose(target.rail, 500));
    } else if (index === 9) {
      const lifted = solveVerticalLevel(start, 70);
      legs.push(lifted);
      legs.push({ ...lifted, rail: target.rail });
      legs.push({ ...lifted, rail: target.rail, j1: target.j1 });
    } else if (index === 4) {
      legs.push({ rail: target.rail, j1: target.j1, j10: start.j10, j11: start.j11, j16: start.j16 });
    } else if (index === 11) {
      legs.push(transitPose(start.rail, start.j1));
      legs.push(transitPose(start.rail, 500));
      legs.push(transitPose(0, 500));
    }
    if (!targetAlreadyIncluded) legs.push(target);
    const perLeg = Math.max([1, 2, 5, 7, 8, 10].includes(index) ? 120 : 250, Math.round(duration / legs.length));
    for (const leg of legs) {
      const completed = await safeTweenPose(leg, perLeg, targetLoad, token);
      if (!completed) return false;
    }
    return true;
  }
  function resetTrajectory() {
    trajectoryToken += 1;
    trajectoryRunning = false;
    trajectoryPaused = false;
    cancelPayload();
    setManualLocked(false);
    writePose(HOME_POSE);
    updateLoad(0);
    document.querySelector("#trajectory-start").disabled = false;
    document.querySelector("#trajectory-pause").disabled = true;
    document.querySelector("#trajectory-pause").textContent = "\u041F\u0430\u0443\u0437\u0430";
    setTrajectoryStage(-1, "\u0413\u043E\u0442\u043E\u0432 \u043A \u0437\u0430\u043F\u0443\u0441\u043A\u0443", "");
  }
  var RECORDED_TRAJECTORY_KEY = "berets.digitalTwin.recordedTrajectory.v1";
  var ACTION_LABELS = Object.freeze({
    none: "\u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435",
    "take-full": "\u0432\u0437\u044F\u0442\u044C \u043F\u043E\u043B\u043D\u044B\u0439",
    "place-full": "\u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u043D\u044B\u0439",
    "take-empty": "\u0432\u0437\u044F\u0442\u044C \u043F\u0443\u0441\u0442\u043E\u0439",
    "place-empty": "\u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u0443\u0441\u0442\u043E\u0439"
  });
  var recordedFrames = [];
  function normalizeRecordedFrame(frame, index) {
    const source = frame && typeof frame === "object" ? frame : {};
    const pose = source.pose && typeof source.pose === "object" ? source.pose : {};
    const action = Object.hasOwn(ACTION_LABELS, source.action) ? source.action : "none";
    const label = String(source.label || `\u041A\u0430\u0434\u0440 ${index + 1}`).trim().slice(0, 40) || `\u041A\u0430\u0434\u0440 ${index + 1}`;
    const duration = Math.max(100, Math.min(3e4, Math.round(Number(source.duration) || 1200)));
    if (source.configured === false && !source.pose) {
      return { label, duration, action, pose: null, configured: false };
    }
    const safePose = {};
    for (const key2 of Object.keys(HOME_POSE)) {
      const control = document.querySelector(CONTROL_MAP[key2]);
      const low = Number(control?.min ?? 0);
      const high = Number(control?.max ?? 1e3);
      safePose[key2] = Math.max(low, Math.min(high, Math.round(Number(pose[key2] ?? HOME_POSE[key2]))));
    }
    return { label, duration, action, pose: safePose, configured: source.configured !== false };
  }
  function saveRecordedFrames() {
    try {
      localStorage.setItem(RECORDED_TRAJECTORY_KEY, JSON.stringify(recordedFrames));
    } catch (_2) {
    }
    document.querySelector("#trajectory-json").value = JSON.stringify(recordedFrames, null, 2);
  }
  function loadRecordedFrames() {
    try {
      const parsed = JSON.parse(localStorage.getItem(RECORDED_TRAJECTORY_KEY) || "[]");
      if (Array.isArray(parsed)) recordedFrames = parsed.map(normalizeRecordedFrame);
    } catch (_2) {
      recordedFrames = [];
    }
  }
  function framePoseText(pose) {
    if (!pose) return "\u0435\u0449\u0451 \u043D\u0435 \u0437\u0430\u043F\u0438\u0441\u0430\u043D";
    return `\u0420 ${pose.rail} \u043C\u043C \xB7 1:${pose.j1} \xB7 10:${pose.j10} \xB7 11:${pose.j11} \xB7 16:${pose.j16}`;
  }
  function renderRecordedFrames() {
    const list = document.querySelector("#keyframe-list");
    list.replaceChildren();
    document.querySelector("#keyframe-count").textContent = `${recordedFrames.length} ${recordedFrames.length === 1 ? "\u043A\u0430\u0434\u0440" : "\u043A\u0430\u0434\u0440\u043E\u0432"}`;
    if (!recordedFrames.length) {
      const empty = document.createElement("li");
      empty.className = "keyframe-empty";
      empty.textContent = "\u041A\u0430\u0434\u0440\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442. \u0412\u044B\u0441\u0442\u0430\u0432\u044C \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u0437\u0443\u043D\u043A\u0430\u043C\u0438 \u0438 \u0437\u0430\u043F\u0438\u0448\u0438 \u043F\u0435\u0440\u0432\u044B\u0439.";
      list.append(empty);
    }
    recordedFrames.forEach((frame, index) => {
      const item = document.createElement("li");
      item.className = "keyframe-item";
      const number = document.createElement("span");
      number.className = "keyframe-index";
      number.textContent = String(index + 1);
      const title = document.createElement("span");
      const strong = document.createElement("strong");
      strong.textContent = frame.label;
      const small = document.createElement("small");
      small.textContent = `${frame.duration} \u043C\u0441 \xB7 ${ACTION_LABELS[frame.action]} \xB7 ${framePoseText(frame.pose)}`;
      title.append(strong, small);
      const apply = document.createElement("button");
      apply.type = "button";
      apply.textContent = "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C";
      apply.disabled = !frame.configured;
      apply.addEventListener("click", () => {
        if (frame.pose) {
          writePose(frame.pose);
          setTrajectoryStage(Math.min(index, 6), frame.label, "");
        }
      });
      const remove = document.createElement("button");
      remove.type = "button";
      remove.textContent = "\u0423\u0434\u0430\u043B\u0438\u0442\u044C";
      remove.addEventListener("click", () => {
        recordedFrames.splice(index, 1);
        saveRecordedFrames();
        renderRecordedFrames();
      });
      item.append(number, title, apply, remove);
      list.append(item);
    });
    saveRecordedFrames();
  }
  var ROUTE_STORAGE_PREFIX = "berets.digitalTwin.route.v4.";
  var ROUTE_MODE_PREFIX = "berets.digitalTwin.routeMode.v2.";
  var ROUTE_STANDBY_POSE = Object.freeze({ rail: 0, j1: 500, j10: 500, j11: 375, j16: 500 });
  var ROUTE_STEPS = Object.freeze([
    { short: "\u041F\u043E\u0434\u043E\u0439\u0442\u0438", label: "\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043A \u043F\u043E\u043B\u043D\u043E\u043C\u0443 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0443", action: "none", duration: 1600 },
    { short: "\u0412\u0432\u0435\u0441\u0442\u0438", label: "\u0412\u0432\u0435\u0441\u0442\u0438 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0432\u0438\u043B\u044B \u043F\u043E\u0434 \u043F\u043E\u043B\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440", action: "take-full", duration: 1300 },
    { short: "\u041F\u043E\u0434\u0436\u0430\u0442\u044C", label: "\u041D\u0430\u043A\u043B\u043E\u043D\u0438\u0442\u044C \u043A\u0438\u0441\u0442\u044C \u0438 \u043F\u043E\u0434\u0442\u044F\u043D\u0443\u0442\u044C \u043F\u043E\u043B\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u043A \u043F\u043B\u0435\u0447\u0443", action: "none", duration: 1300 },
    { short: "\u041F\u043E\u0434\u043D\u044F\u0442\u044C", label: "\u041F\u043E\u0434\u043D\u044F\u0442\u044C \u043F\u043E\u043B\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0432 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u044B\u0439 \u043A\u043E\u0440\u0438\u0434\u043E\u0440", action: "none", duration: 1500 },
    { short: "\u0421\u0442\u043E\u043F\u043A\u0430", label: "\u041F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u043D\u0430 \u043E\u043F\u043E\u0440\u044B \u0441\u0432\u043E\u0435\u0439 \u0441\u0442\u043E\u043F\u043A\u0438", action: "place-full", duration: 1800 },
    { short: "\u0412\u044B\u0439\u0442\u0438", label: "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u0432\u0438\u043B\u044B \u0438 \u0432\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430", action: "none", duration: 1100 },
    { short: "\u041F\u0443\u0441\u0442\u043E\u0439", label: "\u041F\u043E\u0434\u043E\u0439\u0442\u0438 \u043A \u0432\u0435\u0440\u0445\u043D\u0435\u043C\u0443 \u043F\u0443\u0441\u0442\u043E\u043C\u0443 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0443", action: "none", duration: 1700 },
    { short: "\u0412\u0432\u0435\u0441\u0442\u0438", label: "\u0412\u0432\u0435\u0441\u0442\u0438 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0432\u0438\u043B\u044B \u043F\u043E\u0434 \u043F\u0443\u0441\u0442\u043E\u0439 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440", action: "take-empty", duration: 1300 },
    { short: "\u041F\u043E\u0434\u0436\u0430\u0442\u044C", label: "\u041D\u0430\u043A\u043B\u043E\u043D\u0438\u0442\u044C \u043A\u0438\u0441\u0442\u044C \u0438 \u043F\u043E\u0434\u043D\u044F\u0442\u044C \u043F\u0443\u0441\u0442\u043E\u0439 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440", action: "none", duration: 1400 },
    { short: "\u0421\u0442\u0430\u043D\u0446\u0438\u044F", label: "\u041F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u0443\u0441\u0442\u043E\u0439 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u043D\u0430 \u043E\u0441\u0432\u043E\u0431\u043E\u0434\u0438\u0432\u0448\u0443\u044E\u0441\u044F \u0441\u0442\u0430\u043D\u0446\u0438\u044E", action: "place-empty", duration: 1800 },
    { short: "\u0412\u044B\u0439\u0442\u0438", label: "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u0432\u0438\u043B\u044B \u0438 \u0432\u044B\u0439\u0442\u0438 \u0438\u0437 \u043D\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430", action: "none", duration: 1e3 },
    { short: "HOME", label: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u0434\u043E\u043C\u0430\u0448\u043D\u0435\u0435 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435", action: "none", duration: 1600 }
  ]);
  var selectedRouteStep = 0;
  function toolCentreWorld() {
    scene.updateMatrixWorld(true);
    return new Ri().setFromObject(toolVisual).getCenter(new Ks());
  }
  function solveVerticalLevel(seed, verticalShift) {
    if (!joints || !toolVisual || Math.abs(verticalShift) < 0.5) return { ...seed };
    const restore = readPose();
    writePose(seed);
    const target = toolCentreWorld().add(new Ks(0, 0, verticalShift));
    scene.updateMatrixWorld(true);
    const targetOrientation = toolVisual.getWorldQuaternion(new Qs());
    const wristControl = document.querySelector(CONTROL_MAP.j16);
    const wristMin = Number(wristControl.min);
    const wristMax = Number(wristControl.max);
    const targetPitch = forkWorldPitchAtPose(seed);
    const preservePitch = (candidate) => {
      const pitched = withForkWorldPitch(candidate, targetPitch);
      if (pitched.j16 < wristMin || pitched.j16 > wristMax) return null;
      return pitched;
    };
    let best = { ...seed };
    let bestCost = Infinity;
    const cost = (candidate) => {
      writePose(candidate);
      const point = toolCentreWorld();
      scene.updateMatrixWorld(true);
      const orientation = toolVisual.getWorldQuaternion(new Qs());
      const angle = orientation.angleTo(targetOrientation);
      const belowBoard = Math.max(0, 10 - new Ri().setFromObject(toolVisual).min.z);
      const collision = detectSelfCollision();
      return point.distanceToSquared(target) + angle * angle * 25e4 + belowBoard * belowBoard * 5e3 + (collision ? 1e9 : 0);
    };
    bestCost = cost(best);
    for (const step of [180, 90, 45, 20, 10, 5, 2, 1]) {
      let improved = true;
      let iterations = 0;
      while (improved && iterations < 80) {
        improved = false;
        iterations += 1;
        for (const key2 of ["j10", "j11"]) {
          const control = document.querySelector(CONTROL_MAP[key2]);
          for (const direction of [-1, 1]) {
            const raw = { ...best, [key2]: Math.max(Number(control.min), Math.min(Number(control.max), best[key2] + direction * step)) };
            const candidate = preservePitch(raw);
            if (!candidate) continue;
            const candidateCost = cost(candidate);
            if (candidateCost + 0.01 < bestCost) {
              best = candidate;
              bestCost = candidateCost;
              improved = true;
            }
          }
        }
      }
    }
    writePose(restore);
    return best;
  }
  function toolCentreAtPose(pose) {
    const restore = readPose();
    writePose(pose);
    const centre = toolCentreWorld();
    writePose(restore);
    return centre;
  }
  function alignToolHeight(referencePose, movingPose) {
    const referenceZ = toolCentreAtPose(referencePose).z;
    const movingZ = toolCentreAtPose(movingPose).z;
    return solveVerticalLevel(movingPose, referenceZ - movingZ);
  }
  function alignForkToContainerSlots(pose, container) {
    if (!container || !toolVisual) return { ...pose };
    const restore = readPose();
    writePose(pose);
    scene.updateMatrixWorld(true);
    const forkBottom = worldBounds(toolVisual).min.z;
    const slotFloor = worldBounds(container).min.z + FORK_SLOT_FLOOR_CLEARANCE_MM;
    writePose(restore);
    return solveVerticalLevel(pose, slotFloor - forkBottom);
  }
  function forkWorldPitchAtPose(pose) {
    const restore = readPose();
    writePose(pose);
    scene.updateMatrixWorld(true);
    const direction = new Ks(0, 0, 1).applyQuaternion(toolVisual.getWorldQuaternion(new Qs())).normalize();
    const pitch = Math.asin(Gs.clamp(direction.z, -1, 1));
    writePose(restore);
    return pitch;
  }
  function withForkWorldPitch(pose, targetPitch = 0) {
    const control = document.querySelector(CONTROL_MAP.j16);
    const low = Number(control.min);
    const high = Number(control.max);
    const restore = readPose();
    const pitchFor = (candidate) => {
      writePose(candidate);
      scene.updateMatrixWorld(true);
      const direction = new Ks(0, 0, 1).applyQuaternion(toolVisual.getWorldQuaternion(new Qs())).normalize();
      return Math.asin(Gs.clamp(direction.z, -1, 1));
    };
    const solveWrist = (base) => {
      const candidate = { ...base, j16: Math.max(low, Math.min(high, Number(base.j16))) };
      for (let iteration = 0; iteration < 4; iteration += 1) {
        const pitch = pitchFor(candidate);
        const probeWrist = candidate.j16 < high ? candidate.j16 + 1 : candidate.j16 - 1;
        const probePitch = pitchFor({ ...candidate, j16: probeWrist });
        const slope = (probePitch - pitch) / (probeWrist - candidate.j16 || 1);
        if (Math.abs(slope) < 1e-6) break;
        candidate.j16 = Math.max(low, Math.min(high, candidate.j16 + (targetPitch - pitch) / slope));
      }
      return candidate;
    };
    let best = solveWrist(pose);
    let bestError = Math.abs(pitchFor(best) - targetPitch);
    if (bestError > deg(0.35)) {
      const elbowControl = document.querySelector(CONTROL_MAP.j11);
      for (let delta = -80; delta <= 80; delta += 2) {
        const j11 = Math.max(Number(elbowControl.min), Math.min(Number(elbowControl.max), Number(pose.j11) + delta));
        const candidate = solveWrist({ ...pose, j11 });
        const error = Math.abs(pitchFor(candidate) - targetPitch);
        if (error + Math.abs(delta) * 1e-7 < bestError) {
          best = candidate;
          bestError = error;
        }
      }
    }
    best.j16 = Math.round(best.j16);
    writePose(restore);
    return best;
  }
  function horizontalizeFork(pose) {
    return withForkWorldPitch(pose, 0);
  }
  function horizontalForkLegs(start, target, samples = 4) {
    const restore = readPose();
    const startCentre = toolCentreAtPose(start);
    const targetCentre = toolCentreAtPose(target);
    const legs = [];
    for (let index = 1; index <= samples; index += 1) {
      const ratio = index / samples;
      const raw = {};
      for (const key2 of Object.keys(HOME_POSE)) raw[key2] = start[key2] + (target[key2] - start[key2]) * ratio;
      let candidate = withForkWorldPitch(raw, 0);
      const desiredZ = Gs.lerp(startCentre.z, targetCentre.z, ratio);
      const actualZ = toolCentreAtPose(candidate).z;
      candidate = solveVerticalLevel(candidate, desiredZ - actualZ);
      legs.push(candidate);
    }
    writePose(restore);
    return legs;
  }
  function retractTiltLegs(start, target, samples = 6) {
    const startCentre = toolCentreAtPose(start);
    const targetCentre = toolCentreAtPose(target);
    const startPitch = forkWorldPitchAtPose(start);
    const targetPitch = forkWorldPitchAtPose(target);
    const legs = [];
    for (let index = 1; index <= samples; index += 1) {
      const ratio = index / samples;
      let candidate = withForkWorldPitch(lerpPose(start, target, ratio), Gs.lerp(startPitch, targetPitch, ratio));
      const desiredZ = Gs.lerp(startCentre.z, targetCentre.z, ratio);
      candidate = solveVerticalLevel(candidate, desiredZ - toolCentreAtPose(candidate).z);
      legs.push(candidate);
    }
    return legs;
  }
  function retractAndTiltPose(insertedPose, approachPose, liftMm) {
    let pose = lerpPose(insertedPose, approachPose, 0.32);
    pose = withForkWorldPitch(pose, CARRY_FORK_PITCH);
    return solveVerticalLevel(pose, liftMm);
  }
  function withdrawalPose(placePose, approachPose, insertedPose) {
    const withdrawn = { ...placePose };
    for (const key2 of ["j10", "j11", "j16"]) {
      withdrawn[key2] += (Number(approachPose[key2]) - Number(insertedPose[key2])) * 1.12;
    }
    return alignToolHeight(placePose, horizontalizeFork(withdrawn));
  }
  function forkBottomAtPose(pose) {
    const restore = readPose();
    writePose(pose);
    const bottom = worldBounds(toolVisual).min.z;
    writePose(restore);
    return bottom;
  }
  function validateRouteGeometry(frames2, color) {
    if (!joints || !toolVisual || !containerSystem) return ["3D-\u043C\u043E\u0434\u0435\u043B\u044C \u0435\u0449\u0451 \u043D\u0435 \u0433\u043E\u0442\u043E\u0432\u0430"];
    const restore = readPose();
    const errors = [];
    const contact = /* @__PURE__ */ new Set([0, 1, 4, 5, 6, 7, 9, 10]);
    const carrying = /* @__PURE__ */ new Set([2, 3, 8]);
    frames2.forEach((frame, index) => {
      const pose = frame.pose;
      if (!pose) return;
      writePose(pose);
      const pitch = Math.abs(Gs.radToDeg(forkWorldPitchAtPose(pose)));
      if (contact.has(index) && pitch > 0.8) errors.push(`\u044D\u0442\u0430\u043F ${index + 1}: \u0432\u0438\u043B\u044B \u043D\u0435 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B (${pitch.toFixed(1)}\xB0)`);
      if (carrying.has(index) && (pitch < 14 || pitch > 15.8)) errors.push(`\u044D\u0442\u0430\u043F ${index + 1}: \u0443\u0433\u043E\u043B \u0443\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044F ${pitch.toFixed(1)}\xB0 \u0432\u043C\u0435\u0441\u0442\u043E 15\xB0`);
      if (forkBottomAtPose(pose) < 8) errors.push(`\u044D\u0442\u0430\u043F ${index + 1}: \u0432\u0438\u043B\u044B \u043D\u0438\u0436\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0439 \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u0438 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F`);
    });
    const state = containerSystem.getState();
    const station = containerSystem.containers.get(state.stations[color]);
    const topIndex = state.emptyStack.reduce((top, id2, index) => id2 ? index : top, -1);
    const empty = topIndex >= 0 ? containerSystem.containers.get(state.emptyStack[topIndex]) : null;
    for (const [index, container, label] of [[1, station, "\u043F\u043E\u043B\u043D\u043E\u0433\u043E"], [7, empty, "\u043F\u0443\u0441\u0442\u043E\u0433\u043E"]]) {
      if (!container || !frames2[index]?.pose) continue;
      const target = worldBounds(container).min.z + FORK_SLOT_FLOOR_CLEARANCE_MM;
      const delta = Math.abs(forkBottomAtPose(frames2[index].pose) - target);
      if (delta > 2.5) errors.push(`\u044D\u0442\u0430\u043F ${index + 1}: \u0432\u0438\u043B\u044B \u0441\u043C\u0435\u0449\u0435\u043D\u044B \u043E\u0442 \u043F\u0430\u0437\u043E\u0432 ${label} \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430 \u043D\u0430 ${delta.toFixed(1)} \u043C\u043C`);
    }
    for (const [placeIndex, exitIndex] of [[4, 5], [9, 10]]) {
      const distance = toolCentreAtPose(frames2[placeIndex].pose).distanceTo(toolCentreAtPose(frames2[exitIndex].pose));
      if (distance < 55) errors.push(`\u044D\u0442\u0430\u043F ${exitIndex + 1}: \u0432\u0438\u043B\u044B \u0432\u044B\u0432\u0435\u0434\u0435\u043D\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 ${distance.toFixed(0)} \u043C\u043C`);
    }
    writePose(restore);
    return [...new Set(errors)];
  }
  function calculatedRoute(color) {
    const railByColor = {
      // The empty-container stack is physically on the red-side end of the
      // rail.  Therefore red is already adjacent to it, while green and yellow
      // must explicitly travel there before picking a replacement.
      red: { station: STATION_RAIL.red, exit: STATION_RAIL.red + 9, empty: 343 },
      green: { station: STATION_RAIL.green, exit: STATION_RAIL.green + 9, empty: 343 },
      yellow: { station: STATION_RAIL.yellow, exit: STATION_RAIL.yellow + 9, empty: 343 }
    };
    const rail = railByColor[color] || railByColor.red;
    const poses = [
      { rail: rail.station, j1: 875, j10: 926, j11: 831, j16: 0 },
      { rail: rail.station, j1: 875, j10: 905, j11: 696, j16: 156 },
      { rail: rail.station, j1: 875, j10: 796, j11: 901, j16: 0 },
      { rail: rail.station, j1: 875, j10: 100, j11: 1e3, j16: 563 },
      { rail: rail.station, j1: 125, j10: 905, j11: 696, j16: 156 },
      { rail: rail.exit, j1: 125, j10: 926, j11: 831, j16: 0 },
      { rail: rail.empty, j1: 500, j10: 408, j11: 734, j16: 608 },
      { rail: rail.empty, j1: 500, j10: 603, j11: 538, j16: 608 },
      { rail: rail.empty, j1: 500, j10: 174, j11: 1e3, j16: 426 },
      { rail: rail.station, j1: 875, j10: 905, j11: 696, j16: 156 },
      { rail: rail.exit, j1: 875, j10: 926, j11: 831, j16: 0 },
      ROUTE_STANDBY_POSE
    ];
    const state = containerSystem?.getState?.();
    const stationId = state?.stations?.[color];
    const stationContainer = stationId ? containerSystem.containers.get(stationId) : null;
    const topEmptyIndex = state ? state.emptyStack.reduce((top, id2, index) => id2 ? index : top, -1) : -1;
    const topEmptyId = topEmptyIndex >= 0 ? state.emptyStack[topEmptyIndex] : null;
    const topEmptyContainer = topEmptyId ? containerSystem.containers.get(topEmptyId) : null;
    for (const index of [0, 1, 4, 5, 6, 7, 9, 10]) poses[index] = horizontalizeFork(poses[index]);
    poses[0] = alignForkToContainerSlots(poses[0], stationContainer);
    poses[1] = alignToolHeight(poses[0], poses[1]);
    poses[1] = findDeepestSafeInsertion(poses[0], poses[1], stationContainer);
    if (state) {
      const filledLevel = state.filledStacks[color].filter(Boolean).length;
      const emptyLevel = topEmptyIndex;
      if (filledLevel > 0) {
        const shift = filledLevel * STACK_STEP_Z;
        poses[4] = solveVerticalLevel(poses[4], shift);
      }
      if (emptyLevel >= 0 && emptyLevel !== EMPTY_STACK_CAPACITY - 1) {
        const shift = (emptyLevel - (EMPTY_STACK_CAPACITY - 1)) * STACK_STEP_Z;
        poses[6] = solveVerticalLevel(poses[6], shift);
      }
    }
    poses[4] = horizontalizeFork(poses[4]);
    poses[5] = withdrawalPose(poses[4], poses[0], poses[1]);
    poses[6] = alignForkToContainerSlots(horizontalizeFork(poses[6]), topEmptyContainer);
    poses[7] = alignToolHeight(poses[6], horizontalizeFork(poses[7]));
    poses[7] = findDeepestSafeInsertion(poses[6], poses[7], topEmptyContainer);
    poses[9] = alignForkToContainerSlots(horizontalizeFork(poses[9]), stationContainer);
    poses[10] = withdrawalPose(poses[9], poses[0], poses[1]);
    const control = document.querySelector("#fork-offset");
    const requestedOffset = Math.max(SAFE_FORK_OFFSET_MIN, Math.min(0, Number(control.value)));
    computedSafeForkOffsetMin = SAFE_FORK_OFFSET_MIN;
    control.min = String(computedSafeForkOffsetMin);
    if (Number(control.value) < computedSafeForkOffsetMin) control.value = String(computedSafeForkOffsetMin);
    updateForkOffset();
    const carryPitch = Math.min(CARRY_FORK_PITCH, deg(Math.abs(requestedOffset) * 0.24));
    poses[2] = retractAndTiltPose(poses[1], poses[0], 18);
    poses[2] = withForkWorldPitch(poses[2], carryPitch);
    poses[3] = withForkWorldPitch(poses[3], carryPitch);
    poses[8] = retractAndTiltPose(poses[7], poses[6], EMPTY_PICKUP_LIFT_MM);
    poses[8] = withForkWorldPitch(poses[8], carryPitch);
    return ROUTE_STEPS.map((step, index) => normalizeRecordedFrame({
      ...step,
      duration: [1, 5, 7, 10].includes(index) ? 850 : step.duration,
      pose: poses[index],
      configured: true
    }, index));
  }
  function routeKey(color) {
    return `${ROUTE_STORAGE_PREFIX}${color}`;
  }
  function routeModeKey(color) {
    return `${ROUTE_MODE_PREFIX}${color}`;
  }
  function routeIsCalculated(color) {
    try {
      return localStorage.getItem(routeModeKey(color)) !== "manual";
    } catch (_2) {
      return true;
    }
  }
  function setRouteCalculated(color, calculated) {
    try {
      localStorage.setItem(routeModeKey(color), calculated ? "calculated" : "manual");
    } catch (_2) {
    }
  }
  function newRoute() {
    return ROUTE_STEPS.map((step, index) => normalizeRecordedFrame({
      label: step.label,
      action: step.action,
      duration: step.duration,
      pose: index === ROUTE_STEPS.length - 1 ? ROUTE_STANDBY_POSE : null,
      configured: index === ROUTE_STEPS.length - 1
    }, index));
  }
  function applyCalculatedRoute() {
    if (trajectoryRunning) return;
    const color = document.querySelector("#trajectory-color").value;
    recordedFrames = calculatedRoute(color);
    setRouteCalculated(color, true);
    selectedRouteStep = 0;
    saveRoute(color);
    renderRouteWizard();
    renderRecordedFrames();
    setTrajectoryStage(-1, "\u0420\u0430\u0441\u0447\u0451\u0442\u043D\u044B\u0439 \u043C\u0430\u0440\u0448\u0440\u0443\u0442 \u043E\u0431\u043D\u043E\u0432\u043B\u0451\u043D \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043C\u0430\u043D\u0438\u043F\u0443\u043B\u044F\u0442\u043E\u0440\u0430.", "warning");
  }
  function loadRoute(color) {
    try {
      const stored = JSON.parse(localStorage.getItem(routeKey(color)) || "null");
      if (Array.isArray(stored) && stored.length === ROUTE_STEPS.length) {
        return stored.map((frame, index) => normalizeRecordedFrame({
          ...frame,
          label: ROUTE_STEPS[index].label,
          action: ROUTE_STEPS[index].action
        }, index));
      }
    } catch (_2) {
    }
    return newRoute();
  }
  function saveRoute(color = document.querySelector("#trajectory-color").value) {
    try {
      localStorage.setItem(routeKey(color), JSON.stringify(recordedFrames));
    } catch (_2) {
    }
    saveRecordedFrames();
  }
  function renderRouteWizard() {
    const tabs = document.querySelector("#route-stage-tabs");
    const editor = document.querySelector("#route-stage-editor");
    if (!tabs || !editor || !recordedFrames.length) return;
    if (selectedRouteStep >= recordedFrames.length) selectedRouteStep = 0;
    tabs.replaceChildren();
    const complete = recordedFrames.filter((frame2) => frame2.configured && frame2.pose).length;
    document.querySelector("#route-progress").textContent = `${complete} / ${ROUTE_STEPS.length}`;
    recordedFrames.forEach((frame2, index) => {
      const tab = document.createElement("button");
      tab.type = "button";
      tab.role = "tab";
      tab.className = `route-stage-tab${index === selectedRouteStep ? " active" : ""}${frame2.configured ? " configured" : ""}`;
      tab.textContent = `${index + 1}. ${ROUTE_STEPS[index].short}`;
      tab.addEventListener("click", () => {
        selectedRouteStep = index;
        renderRouteWizard();
      });
      tabs.append(tab);
    });
    const frame = recordedFrames[selectedRouteStep];
    editor.replaceChildren();
    const title = document.createElement("div");
    title.className = "route-stage-copy";
    const strong = document.createElement("strong");
    strong.textContent = `${selectedRouteStep + 1}. ${frame.label}`;
    const note = document.createElement("small");
    note.textContent = `\u041F\u043E\u0441\u043B\u0435 \u0442\u043E\u0447\u043A\u0438: ${ACTION_LABELS[frame.action]} \xB7 ${framePoseText(frame.pose)}`;
    title.append(strong, note);
    const duration = document.createElement("input");
    duration.type = "number";
    duration.min = "100";
    duration.max = "30000";
    duration.step = "100";
    duration.value = String(frame.duration);
    duration.title = "\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u044D\u0442\u0430\u043F\u0430, \u043C\u0441";
    duration.addEventListener("change", () => {
      frame.duration = Math.max(100, Math.min(3e4, Math.round(Number(duration.value) || ROUTE_STEPS[selectedRouteStep].duration)));
      duration.value = String(frame.duration);
      saveRoute();
      renderRecordedFrames();
    });
    const show = document.createElement("button");
    show.type = "button";
    show.textContent = "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C";
    show.disabled = !frame.configured;
    show.addEventListener("click", () => {
      if (frame.pose) {
        writePose(frame.pose);
        setTrajectoryStage(Math.min(selectedRouteStep, 6), frame.label, "");
      }
    });
    const record = document.createElement("button");
    record.type = "button";
    record.className = "primary-small";
    record.textContent = "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u044D\u0442\u0430\u043F";
    record.addEventListener("click", () => {
      recordedFrames[selectedRouteStep] = normalizeRecordedFrame({ ...frame, pose: readPose(), configured: true }, selectedRouteStep);
      setRouteCalculated(document.querySelector("#trajectory-color").value, false);
      saveRoute();
      renderRouteWizard();
      renderRecordedFrames();
      setTrajectoryStage(Math.min(selectedRouteStep, 6), `${frame.label}: \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E`, "");
    });
    editor.append(title, duration, show, record);
  }
  function activateRouteColor(color) {
    if (trajectoryRunning) return;
    if (!joints || !toolVisual || !containerSystem) {
      recordedFrames = loadRoute(color);
      saveRecordedFrames();
      renderRecordedFrames();
      renderRouteWizard();
      return;
    }
    recordedFrames = routeIsCalculated(color) ? calculatedRoute(color) : loadRoute(color);
    if (routeIsCalculated(color)) saveRoute(color);
    saveRecordedFrames();
    renderRecordedFrames();
    renderRouteWizard();
  }
  function copyRouteJoints() {
    if (trajectoryRunning) return;
    const color = document.querySelector("#trajectory-color").value;
    const sourceColor = document.querySelector("#route-copy-source").value;
    if (color === sourceColor) return;
    const source = loadRoute(sourceColor);
    recordedFrames = recordedFrames.map((frame, index) => {
      const sourceFrame = source[index];
      if (index === ROUTE_STEPS.length - 1 || !sourceFrame?.configured || !sourceFrame.pose) return frame;
      const rail = frame.pose?.rail ?? 0;
      return normalizeRecordedFrame({ ...frame, pose: { ...sourceFrame.pose, rail }, configured: false }, index);
    });
    setRouteCalculated(color, false);
    saveRoute(color);
    renderRouteWizard();
    renderRecordedFrames();
    setTrajectoryStage(-1, "\u0423\u0433\u043B\u044B \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u044B; \u043F\u0440\u043E\u0432\u0435\u0440\u044C \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0440\u0435\u043B\u044C\u0441\u044B \u0432 \u043A\u0430\u0436\u0434\u043E\u0439 \u0442\u043E\u0447\u043A\u0435", "warning");
  }
  function recordCurrentFrame() {
    const label = document.querySelector("#keyframe-label").value;
    const duration = document.querySelector("#keyframe-duration").value;
    const action = document.querySelector("#keyframe-action").value;
    recordedFrames.push(normalizeRecordedFrame({ label, duration, action, pose: readPose() }, recordedFrames.length));
    setRouteCalculated(document.querySelector("#trajectory-color").value, false);
    document.querySelector("#keyframe-label").value = `\u041A\u0430\u0434\u0440 ${recordedFrames.length + 1}`;
    renderRecordedFrames();
    setTrajectoryStage(Math.min(recordedFrames.length - 1, 6), "\u041A\u0430\u0434\u0440 \u0437\u0430\u043F\u0438\u0441\u0430\u043D", "");
  }
  function performFrameAction(action, color) {
    if (action === "take-full") takeFullPayload(color);
    if (action === "place-full") placeFullPayload();
    if (action === "take-empty") takeEmptyPayload();
    if (action === "place-empty") placeEmptyPayload(color);
  }
  async function runRecordedTrajectory() {
    if (trajectoryRunning || !joints || !containerSystem) return;
    const color = document.querySelector("#trajectory-color").value;
    const preflight = containerSystem.getState();
    if (preflight.filledStacks[color].every(Boolean)) {
      setTrajectoryStage(-1, `\u0421\u0442\u043E\u043F\u043A\u0430 ${color} \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0430: \u043E\u0447\u0438\u0441\u0442\u0438 \u0435\u0451 \u043F\u0435\u0440\u0435\u0434 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u0446\u0438\u043A\u043B\u043E\u043C`, "warning");
      return;
    }
    if (!preflight.emptyStack.some(Boolean)) {
      setTrajectoryStage(-1, "\u0421\u0442\u043E\u043F\u043A\u0430 \u043F\u0443\u0441\u0442\u044B\u0445 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043E\u0432 \u043F\u0443\u0441\u0442\u0430: \u043F\u043E\u043F\u043E\u043B\u043D\u0438 \u0435\u0451 \u0438 \u0443\u043A\u0430\u0436\u0438 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E", "warning");
      syncEmptyStackUI();
      return;
    }
    if (routeIsCalculated(color)) {
      recordedFrames = calculatedRoute(color);
      saveRoute(color);
      renderRouteWizard();
      renderRecordedFrames();
    }
    if (!recordedFrames.length) {
      setTrajectoryStage(-1, "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0437\u0430\u043F\u0438\u0448\u0438 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u043A\u0430\u0434\u0440", "warning");
      return;
    }
    if (recordedFrames.some((frame) => !frame.configured || !frame.pose)) {
      setTrajectoryStage(-1, "\u0417\u0430\u043F\u0438\u0448\u0438 \u0432\u0441\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0442\u043E\u0447\u043A\u0438 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0430", "warning");
      return;
    }
    const geometryErrors = validateRouteGeometry(recordedFrames, color);
    if (geometryErrors.length) {
      setTrajectoryStage(-1, `\u041C\u0430\u0440\u0448\u0440\u0443\u0442 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u043E\u0439: ${geometryErrors[0]}`, "warning");
      document.querySelector("#collision-status").textContent = `\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0430: ${geometryErrors.join("; ")}`;
      document.querySelector("#collision-status").classList.add("collision-warning");
      return;
    }
    document.querySelector("#collision-status").textContent = "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0430 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u0430: \u043F\u0430\u0437\u044B, \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0432\u0438\u043B\u044B, \u0443\u0433\u043E\u043B 15\xB0 \u0438 \u043F\u043E\u043B\u043D\u044B\u0439 \u0432\u044B\u0445\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u044B";
    document.querySelector("#collision-status").classList.remove("collision-warning");
    const token = ++trajectoryToken;
    trajectoryRunning = true;
    trajectoryPaused = false;
    setManualLocked(true);
    document.querySelector("#trajectory-start").disabled = true;
    document.querySelector("#keyframe-play").disabled = true;
    document.querySelector("#trajectory-pause").disabled = false;
    try {
      for (let index = 0; index < recordedFrames.length; index += 1) {
        const frame = recordedFrames[index];
        setTrajectoryStage(Math.min(index, 6), frame.label);
        const completed = await tweenRouteFrame(index, frame.pose, frame.duration, activePayload ? 0.7 : 0, token);
        if (!completed) return;
        performFrameAction(frame.action, color);
        updateLoad(activePayload ? 0.7 : 0);
      }
      setTrajectoryStage(6, "\u0417\u0430\u043F\u0438\u0441\u044C \u043F\u0440\u043E\u0438\u0433\u0440\u0430\u043D\u0430", "");
    } catch (error) {
      console.error(error);
      setTrajectoryStage(-1, `\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430: ${error.message}`, "warning");
      cancelPayload();
    } finally {
      if (token === trajectoryToken) {
        trajectoryRunning = false;
        trajectoryPaused = false;
        setManualLocked(false);
        document.querySelector("#trajectory-start").disabled = false;
        document.querySelector("#keyframe-play").disabled = false;
        document.querySelector("#trajectory-pause").disabled = true;
        document.querySelector("#trajectory-pause").textContent = "\u041F\u0430\u0443\u0437\u0430";
        updateLoad(0);
      }
    }
  }
  var bindings = [
    ["#rail", "#rail-value", (v2) => `${v2} \u043C\u043C`],
    ["#joint-1", "#joint-1-value", String],
    ["#joint-10", "#joint-10-value", String],
    ["#joint-11", "#joint-11-value", String],
    ["#joint-16", "#joint-16-value", String]
  ];
  for (const [inputSelector, outputSelector, format] of bindings) {
    const input = document.querySelector(inputSelector);
    input.addEventListener("input", () => {
      document.querySelector(outputSelector).textContent = format(input.value);
      updatePose();
    });
  }
  document.querySelector("#home").addEventListener("click", () => {
    resetTrajectory();
  });
  document.querySelector("#trajectory-start").addEventListener("click", runRecordedTrajectory);
  document.querySelector("#trajectory-pause").addEventListener("click", () => {
    if (!trajectoryRunning) return;
    trajectoryPaused = !trajectoryPaused;
    document.querySelector("#trajectory-pause").textContent = trajectoryPaused ? "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C" : "\u041F\u0430\u0443\u0437\u0430";
    setTrajectoryStage(-1, trajectoryPaused ? "\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u043F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430" : "\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0435\u0442\u0441\u044F", trajectoryPaused ? "warning" : "running");
  });
  document.querySelector("#trajectory-reset").addEventListener("click", resetTrajectory);
  document.querySelector("#clear-filled-stack").addEventListener("click", () => {
    if (trajectoryRunning || !containerSystem) return;
    const color = document.querySelector("#trajectory-color").value;
    try {
      const result = containerSystem.clearFilledStack(color);
      if (routeIsCalculated(color)) recordedFrames = calculatedRoute(color);
      saveRoute(color);
      renderRouteWizard();
      renderRecordedFrames();
      setTrajectoryStage(-1, result.removed.length ? `\u0421\u0442\u043E\u043F\u043A\u0430 ${color} \u043E\u0447\u0438\u0449\u0435\u043D\u0430` : `\u0421\u0442\u043E\u043F\u043A\u0430 ${color} \u0443\u0436\u0435 \u043F\u0443\u0441\u0442\u0430`, "");
    } catch (error) {
      setTrajectoryStage(-1, error.message, "warning");
    }
  });
  document.querySelector("#trajectory-speed").addEventListener("input", (event) => {
    document.querySelector("#trajectory-speed-value").textContent = `${event.target.value}%`;
  });
  document.querySelector("#fork-offset").addEventListener("input", updateForkOffset);
  document.querySelector("#latex-assist").addEventListener("input", () => updateLoad());
  document.querySelector("#keyframe-record").addEventListener("click", recordCurrentFrame);
  document.querySelector("#keyframe-play").addEventListener("click", runRecordedTrajectory);
  document.querySelector("#keyframe-clear").addEventListener("click", () => {
    if (trajectoryRunning) return;
    recordedFrames = [];
    saveRecordedFrames();
    renderRecordedFrames();
    setTrajectoryStage(-1, "\u0417\u0430\u043F\u0438\u0441\u044C \u043E\u0447\u0438\u0449\u0435\u043D\u0430", "");
  });
  document.querySelector("#trajectory-json-apply").addEventListener("click", () => {
    if (trajectoryRunning) return;
    try {
      const parsed = JSON.parse(document.querySelector("#trajectory-json").value);
      if (!Array.isArray(parsed)) throw new Error("\u043E\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044F \u043C\u0430\u0441\u0441\u0438\u0432 \u043A\u0430\u0434\u0440\u043E\u0432");
      recordedFrames = parsed.map(normalizeRecordedFrame);
      setRouteCalculated(document.querySelector("#trajectory-color").value, false);
      renderRecordedFrames();
      setTrajectoryStage(-1, "JSON \u0442\u0440\u0430\u0435\u043A\u0442\u043E\u0440\u0438\u044F \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u0430", "");
    } catch (error) {
      setTrajectoryStage(-1, `JSON \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D: ${error.message}`, "warning");
    }
  });
  document.querySelector("#trajectory-color").addEventListener("change", (event) => {
    if (trajectoryRunning) return;
    activateRouteColor(event.target.value);
    if (!containerSystem) return;
    try {
      containerSystem.previewStationApples(event.target.value, 2);
    } catch (error) {
      setTrajectoryStage(-1, error.message, "warning");
    }
  });
  document.querySelector("#route-calculate").addEventListener("click", applyCalculatedRoute);
  document.querySelector("#route-copy-joints").addEventListener("click", copyRouteJoints);
  document.querySelector("#route-reset-color").addEventListener("click", () => {
    if (trajectoryRunning) return;
    const color = document.querySelector("#trajectory-color").value;
    recordedFrames = newRoute();
    setRouteCalculated(color, false);
    saveRoute(color);
    renderRouteWizard();
    renderRecordedFrames();
    setTrajectoryStage(-1, `\u041C\u0430\u0440\u0448\u0440\u0443\u0442 ${color} \u0441\u0431\u0440\u043E\u0448\u0435\u043D`, "");
  });
  document.querySelector("#empty-container-count").addEventListener("input", (event) => {
    const requested = Math.max(0, Math.min(EMPTY_STACK_CAPACITY, Math.round(Number(event.target.value) || 0)));
    event.target.value = String(requested);
    document.querySelector("#empty-container-count-value").textContent = String(requested);
  });
  document.querySelector("#deliver-empty-containers").addEventListener("click", () => {
    if (!containerSystem || trajectoryRunning) return;
    const requested = Math.max(0, Math.min(EMPTY_STACK_CAPACITY, Math.round(Number(document.querySelector("#empty-container-count").value) || 0)));
    try {
      containerSystem.configureEmptyStack(requested);
      syncEmptyStackUI();
      setTrajectoryStage(-1, requested ? `\u0414\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E \u043F\u0443\u0441\u0442\u044B\u0445 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043E\u0432: ${requested}` : "\u0421\u0442\u043E\u043F\u043A\u0430 \u043F\u0443\u0441\u0442\u044B\u0445 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043E\u0432 \u043F\u0443\u0441\u0442\u0430", requested ? "" : "warning");
    } catch (error) {
      setTrajectoryStage(-1, error.message, "warning");
      syncEmptyStackUI();
    }
  });
  document.querySelector("#trajectory-pause").disabled = true;
  loadRecordedFrames();
  activateRouteColor(document.querySelector("#trajectory-color").value);
  updateForkOffset();
  updateLoad(0);
  var views = {
    iso: [[1150, 1350, 1050], [300, 420, 260]],
    top: [[300, 420, 1800], [300, 420, 0]],
    side: [[300, -1300, 420], [300, 420, 260]],
    front: [[-1300, 420, 420], [300, 420, 260]]
  };
  function setView(name) {
    const [position, target] = views[name];
    camera.position.fromArray(position);
    controls.target.fromArray(target);
    controls.update();
    document.querySelectorAll("[data-view]").forEach((button) => button.classList.toggle("active", button.dataset.view === name));
  }
  document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
  setView("iso");
  var frames = 0;
  var lastFps = performance.now();
  function resize() {
    const width = canvas.clientWidth, height = canvas.clientHeight;
    if (canvas.width !== Math.round(width * renderer.getPixelRatio()) || canvas.height !== Math.round(height * renderer.getPixelRatio())) {
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
  }
  function animate(now) {
    resize();
    controls.update();
    renderer.render(scene, camera);
    frames++;
    if (now - lastFps > 1e3) {
      document.querySelector("#fps").textContent = `${Math.round(frames * 1e3 / (now - lastFps))} FPS`;
      frames = 0;
      lastFps = now;
    }
    requestAnimationFrame(animate);
  }
  buildScene().catch((error) => {
    console.error(error);
    document.querySelector("#status-text").textContent = `\u041E\u0448\u0438\u0431\u043A\u0430: ${error.message}`;
  });
  requestAnimationFrame(animate);
})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
