"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (C, e) {
  "use strict";

  var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat ? function (e) {
    return t.flat.call(e);
  } : function (e) {
    return t.concat.apply([], e);
  },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
      E = C.document,
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }

  var f = "3.5.1",
      S = function S(e, t) {
    return new S.fn.init(e, t);
  };

  function p(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return S.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (p(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }

      return r;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (p(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g(a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var d = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        S = "sizzle" + 1 * new Date(),
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        D = function D(e, t) {
      return e === t && (l = !0), 0;
    },
        j = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + F),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function ne(e, t) {
      var n = "0x" + e.slice(1) - 65536;
      return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;

            while (o--) {
              l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            }

            c = l.join(",");
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace($, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[S] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : p;
      return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        N(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [k, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace($, "$1"));
          return s[S] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [k, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            se(e, t[r], n);
          }

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }

          c.push(t);
        }
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = A[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
        }

        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = k += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);

                  break;
                }
              }

              i && (k = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) {
              s(c, f, t, n);
            }

            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }

            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }

          return i && (k = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;

  var h = function h(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && S(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      T = function T(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      k = S.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function D(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : S.filter(n, e, r);
  }

  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, S.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (S.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        S.find(e, i[t], n);
      }

      return 1 < r ? S.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(D(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(D(this, e || [], !0));
    },
    is: function is(e) {
      return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
    }
  });
  var j,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || j, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
  }).prototype = S.fn, j = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
      H = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  S.fn.extend({
    has: function has(e) {
      var t = S(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (S.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
      if (!k.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), S.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return h(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return h(e, "parentNode", n);
    },
    next: function next(e) {
      return O(e, "nextSibling");
    },
    prev: function prev(e) {
      return O(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return h(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return h(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return h(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return h(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return T((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return T(e.firstChild);
    },
    contents: function contents(e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e;
  }

  function M(e) {
    throw e;
  }

  function I(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : S.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function c() {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) {
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function add() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          S.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return S.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = S.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < S.inArray(e, s) : 0 < s.length;
      },
      empty: function empty() {
        return s && (s = []), this;
      },
      disable: function disable() {
        return a = u = [], s = t = "", this;
      },
      disabled: function disabled() {
        return !s;
      },
      lock: function lock() {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function locked() {
        return !!a;
      },
      fireWith: function fireWith(e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function fire() {
        return f.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return f;
  }, S.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function state() {
          return i;
        },
        always: function always() {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return a.then(null, e);
        },
        pipe: function pipe() {
          var i = arguments;
          return S.Deferred(function (r) {
            S.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function then(t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function e() {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return S.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? S.extend(e, a) : a;
        }
      },
          s = {};
      return S.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        I(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = S.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }

  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e);
    }), this;
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]);
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var $ = function $(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      $(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(S(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      _ = /^-ms-/,
      z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase();
  }

  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }

  var V = function V(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function G() {
    this.expando = S.expando + G.uid++;
  }

  G.uid = 1, G.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;else for (r in t) {
        i[X(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t);
    }
  };
  var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;

  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      Q.set(e, t, n);
    } else n = void 0;
    return n;
  }

  S.extend({
    hasData: function hasData(e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function data(e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      Q.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Y.remove(e, t);
    }
  }), S.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
          }

          Y.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        Q.set(this, n);
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  }), S.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  }), S.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        S.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function ie(e) {
    return S.contains(e.ownerDocument, e);
  },
      oe = {
    composed: !0
  };

  re.getRootNode && (ie = function ie(e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });

  var ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
  };

  function se(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return S.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, S.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ue = {};

  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  S.fn.extend({
    show: function show() {
      return le(this, !0);
    },
    hide: function hide() {
      return le(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide();
      });
    }
  });
  var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
  }

  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < S.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  var be = /^key/,
      we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Te = /^([^.]*)(?:\.(.+)|)/;

  function Ce() {
    return !0;
  }

  function Ee() {
    return !1;
  }

  function Se(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function ke(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        ke(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return S().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n);
    });
  }

  function Ae(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Y.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }

  S.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.get(t);

      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(P) || [""]).length;

        while (l--) {
          d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && S.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.hasData(e) && Y.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;

        while (l--) {
          if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            S.event.remove(e, d + t[l], n, r, !0);
          }
        }

        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};

      for (s[0] = u, t = 1; t < arguments.length; t++) {
        s[t] = arguments[t];
      }

      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;

        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) {
            u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Ee,
    isPropagationStopped: Ee,
    isImmediatePropagationStopped: Ee,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    S.event.special[e] = {
      setup: function setup() {
        return Ae(this, e, Se), !1;
      },
      trigger: function trigger() {
        return Ae(this, e), !0;
      },
      delegateType: t
    };
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), S.fn.extend({
    on: function on(e, t, n, r) {
      return ke(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return ke(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
        S.event.remove(this, e, n, t);
      });
    }
  });
  var Ne = /<script|<style|<link/i,
      De = /checked\s*(?:[^=]|=\s*.checked.)/i,
      je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function qe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
  }

  function Le(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function He(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Oe(e, t) {
    var n, r, i, o, a, s;

    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) {
        for (n = 0, r = s[i].length; n < r; n++) {
          S.event.add(t, i, s[i][n]);
        }
      }
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
    }
  }

  function Pe(n, r, i, o) {
    r = g(r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
    });

    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) {
        u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }, l) : b(u.textContent.replace(je, ""), u, l));
      }
    }

    return n;
  }

  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  S.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e;
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Oe(o[r], a[r]);
      } else Oe(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (V(n)) {
          if (t = n[Y.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            }
            n[Y.expando] = void 0;
          }

          n[Q.expando] && (n[Q.expando] = void 0);
        }
      }
    }
  }), S.fn.extend({
    detach: function detach(e) {
      return Re(this, e, !0);
    },
    remove: function remove(e) {
      return Re(this, e);
    },
    text: function text(e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Pe(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Pe(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = qe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t);
      });
    },
    html: function html(e) {
      return $(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return Pe(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Ie = function Ie(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      We = function We(e, t, n) {
    var r,
        i,
        o = {};

    for (i in t) {
      o[i] = e.style[i], e.style[i] = t[i];
    }

    for (i in r = n.call(e), t) {
      e.style[i] = o[i];
    }

    return r;
  },
      Fe = new RegExp(ne.join("|"), "i");

  function Be(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function $e(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s,
        u = E.createElement("div"),
        l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), s;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      },
      reliableTrDimensions: function reliableTrDimensions() {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a;
      }
    }));
  }();
  var _e = ["Webkit", "Moz", "ms"],
      ze = E.createElement("div").style,
      Ue = {};

  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return t || (e in ze ? e : Ue[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = _e.length;

      while (n--) {
        if ((e = _e[n] + t) in ze) return e;
      }
    }(e) || e);
  }

  var Ve = /^(none|table(?!-c[ea]).+)/,
      Ge = /^--/,
      Ye = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Qe = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function Ze(e, t, n) {
    var r = Ie(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = Be(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }

  S.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = X(t),
            u = Ge.test(t),
            l = e.style;
        if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = X(t);
      return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function () {
          return Ze(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s);
      }
    };
  }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Je);
  }), S.fn.extend({
    css: function css(e, t) {
      return $(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Ie(e), i = t.length; a < i; a++) {
            o[t[a]] = S.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((S.Tween = et).prototype = {
    constructor: et,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = et.propHooks[this.prop];
      return e && e.get ? e.get(this) : et.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = et.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this;
    }
  }).init.prototype = et.prototype, (et.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = et.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, S.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, S.fx = et.prototype.init, S.fx.step = {};
  var tt,
      nt,
      rt,
      it,
      ot = /^(?:toggle|show|hide)$/,
      at = /queueHooks$/;

  function st() {
    nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick());
  }

  function ut() {
    return C.setTimeout(function () {
      tt = void 0;
    }), tt = Date.now();
  }

  function lt(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function ct(e, t, n) {
    for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function ft(o, e, t) {
    var n,
        a,
        r = 0,
        i = ft.prefilters.length,
        s = S.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: S.extend({}, e),
      opts: S.extend(!0, {
        specialEasing: {},
        easing: S.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: tt || ut(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          l.tweens[t].run(1);
        }

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) {
        if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  S.Animation = S.extend(ft, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");

      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], ot.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || S.style(e, r);
        }
      }

      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
          for (r in g || le([e]), Y.remove(e, "fxshow"), d) {
            S.style(e, r, d[r]);
          }
        })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
    }, r;
  }, S.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function a() {
        var e = ft(this, S.extend({}, t), o);
        (i || Y.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = S.timers,
            r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && at.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || S.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Y.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = S.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];

    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n);
    };
  }), S.each({
    slideDown: lt("show"),
    slideUp: lt("hide"),
    slideToggle: lt("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), S.timers = [], S.fx.tick = function () {
    var e,
        t = 0,
        n = S.timers;

    for (tt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || S.fx.stop(), tt = void 0;
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function () {
    nt || (nt = !0, st());
  }, S.fx.stop = function () {
    nt = null;
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
  var pt,
      dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function attr(e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    }
  }), S.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(P);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), pt = {
    set: function set(e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = dt[t] || S.find.attr;

    dt[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r;
    };
  });
  var ht = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;

  function vt(e) {
    return (e.match(P) || []).join(" ");
  }

  function yt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function mt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }

  S.fn.extend({
    prop: function prop(e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    }
  }), S.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, yt(this)));
      });
      if ((e = mt(t)).length) while (n = this[u++]) {
        if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, yt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = mt(t)).length) while (n = this[u++]) {
        if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, yt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = S(this), r = mt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var xt = /\r/g;
  S.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0;
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : vt(S.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = S(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var bt = /^(?:focusinfocus|focusoutblur)$/,
      wt = function wt(e) {
    e.stopPropagation();
  };

  S.extend(S.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = S.extend(new S.Event(), n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t);
    }
  }), S.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0);
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      S.event.simulate(r, e.target, S.event.fix(e));
    };

    S.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      }
    };
  });
  var Tt = C.location,
      Ct = {
    guid: Date.now()
  },
      Et = /\?/;

  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t;
  };

  var St = /\[\]$/,
      kt = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      Nt = /^(?:input|select|textarea|keygen)/i;

  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      Dt(n + "[" + t + "]", e[t], r, i);
    }
  }

  S.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      Dt(n, e[n], t, i);
    }
    return r.join("&");
  }, S.fn.extend({
    serialize: function serialize() {
      return S.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(kt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(kt, "\r\n")
        };
      }).get();
    }
  });
  var jt = /%20/g,
      qt = /#.*$/,
      Lt = /([?&])_=[^&]*/,
      Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ot = /^(?:GET|HEAD)$/,
      Pt = /^\/\//,
      Rt = {},
      Mt = {},
      It = "*/".concat("*"),
      Wt = E.createElement("a");

  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function Bt(t, i, o, a) {
    var s = {},
        u = t === Mt;

    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function $t(e, t) {
    var n,
        r,
        i = S.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && S.extend(!0, e, r), e;
  }

  Wt.href = Tt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Tt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": It,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(Rt),
    ajaxTransport: Ft(Mt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = Ht.exec(p)) {
                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return h ? p : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;

      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();

          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return S.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return S.get(e, void 0, t, "script");
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e));
    };
  }), S.ajaxPrefilter(function (e) {
    var t;

    for (t in e.headers) {
      "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
    }
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        S.globalEval(e, t, n);
      }
    });
  }, S.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = S(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes);
      }), this;
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e);
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var _t = {
    0: 200,
    1223: 204
  },
      zt = S.ajaxSettings.xhr();
  y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || zt && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }

        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return S.globalEval(e), e;
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), S.ajaxTransport("script", function (n) {
    var r, _i;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });
  var Ut,
      Xt = [],
      Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return this[e] = !0, e;
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o;
  }, S.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem;
    }).length;
  }, S.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f));
    }
  }, S.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === S.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || re;
      });
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
      if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t;
    });
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), S.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || S.guid++, i;
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Gt, "");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return S;
  });
  var Yt = C.jQuery,
      Qt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = {}, t.jQuery);
}(void 0, function (t, e) {
  "use strict";

  function n(t) {
    return t && "object" == _typeof(t) && "default" in t ? t : {
      "default": t
    };
  }

  var i = n(e);

  function o(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function r(t, e, n) {
    return e && o(t.prototype, e), n && o(t, n), t;
  }

  function a() {
    return (a = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var i in n) {
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
      }

      return t;
    }).apply(this, arguments);
  }

  function s(t) {
    var e = this,
        n = !1;
    return i["default"](this).one(l.TRANSITION_END, function () {
      n = !0;
    }), setTimeout(function () {
      n || l.triggerTransitionEnd(e);
    }, t), this;
  }

  var l = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function getUID(t) {
      do {
        t += ~~(1e6 * Math.random());
      } while (document.getElementById(t));

      return t;
    },
    getSelectorFromElement: function getSelectorFromElement(t) {
      var e = t.getAttribute("data-target");

      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }

      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
      if (!t) return 0;
      var e = i["default"](t).css("transition-duration"),
          n = i["default"](t).css("transition-delay"),
          o = parseFloat(e),
          r = parseFloat(n);
      return o || r ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0;
    },
    reflow: function reflow(t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(t) {
      i["default"](t).trigger("transitionend");
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean("transitionend");
    },
    isElement: function isElement(t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(t, e, n) {
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
              r = e[i],
              a = r && l.isElement(r) ? "element" : null === (s = r) || "undefined" == typeof s ? "" + s : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
          if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".');
        }
      }

      var s;
    },
    findShadowRoot: function findShadowRoot(t) {
      if (!document.documentElement.attachShadow) return null;

      if ("function" == typeof t.getRootNode) {
        var e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }

      return t instanceof ShadowRoot ? t : t.parentNode ? l.findShadowRoot(t.parentNode) : null;
    },
    jQueryDetection: function jQueryDetection() {
      if ("undefined" == typeof i["default"]) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
      var t = i["default"].fn.jquery.split(" ")[0].split(".");
      if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }
  };
  l.jQueryDetection(), i["default"].fn.emulateTransitionEnd = s, i["default"].event.special[l.TRANSITION_END] = {
    bindType: "transitionend",
    delegateType: "transitionend",
    handle: function handle(t) {
      if (i["default"](t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
    }
  };

  var u = "alert",
      f = i["default"].fn[u],
      d = function () {
    function t(t) {
      this._element = t;
    }

    var e = t.prototype;
    return e.close = function (t) {
      var e = this._element;
      t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, e.dispose = function () {
      i["default"].removeData(this._element, "bs.alert"), this._element = null;
    }, e._getRootElement = function (t) {
      var e = l.getSelectorFromElement(t),
          n = !1;
      return e && (n = document.querySelector(e)), n || (n = i["default"](t).closest(".alert")[0]), n;
    }, e._triggerCloseEvent = function (t) {
      var e = i["default"].Event("close.bs.alert");
      return i["default"](t).trigger(e), e;
    }, e._removeElement = function (t) {
      var e = this;

      if (i["default"](t).removeClass("show"), i["default"](t).hasClass("fade")) {
        var n = l.getTransitionDurationFromElement(t);
        i["default"](t).one(l.TRANSITION_END, function (n) {
          return e._destroyElement(t, n);
        }).emulateTransitionEnd(n);
      } else this._destroyElement(t);
    }, e._destroyElement = function (t) {
      i["default"](t).detach().trigger("closed.bs.alert").remove();
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = i["default"](this),
            o = n.data("bs.alert");
        o || (o = new t(this), n.data("bs.alert", o)), "close" === e && o[e](this);
      });
    }, t._handleDismiss = function (t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }, r(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.5.3";
      }
    }]), t;
  }();

  i["default"](document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', d._handleDismiss(new d())), i["default"].fn[u] = d._jQueryInterface, i["default"].fn[u].Constructor = d, i["default"].fn[u].noConflict = function () {
    return i["default"].fn[u] = f, d._jQueryInterface;
  };

  var c = i["default"].fn.button,
      h = function () {
    function t(t) {
      this._element = t, this.shouldAvoidTriggerChange = !1;
    }

    var e = t.prototype;
    return e.toggle = function () {
      var t = !0,
          e = !0,
          n = i["default"](this._element).closest('[data-toggle="buttons"]')[0];

      if (n) {
        var o = this._element.querySelector('input:not([type="hidden"])');

        if (o) {
          if ("radio" === o.type) if (o.checked && this._element.classList.contains("active")) t = !1;else {
            var r = n.querySelector(".active");
            r && i["default"](r).removeClass("active");
          }
          t && ("checkbox" !== o.type && "radio" !== o.type || (o.checked = !this._element.classList.contains("active")), this.shouldAvoidTriggerChange || i["default"](o).trigger("change")), o.focus(), e = !1;
        }
      }

      this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), t && i["default"](this._element).toggleClass("active"));
    }, e.dispose = function () {
      i["default"].removeData(this._element, "bs.button"), this._element = null;
    }, t._jQueryInterface = function (e, n) {
      return this.each(function () {
        var o = i["default"](this),
            r = o.data("bs.button");
        r || (r = new t(this), o.data("bs.button", r)), r.shouldAvoidTriggerChange = n, "toggle" === e && r[e]();
      });
    }, r(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.5.3";
      }
    }]), t;
  }();

  i["default"](document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
    var e = t.target,
        n = e;
    if (i["default"](e).hasClass("btn") || (e = i["default"](e).closest(".btn")[0]), !e || e.hasAttribute("disabled") || e.classList.contains("disabled")) t.preventDefault();else {
      var o = e.querySelector('input:not([type="hidden"])');
      if (o && (o.hasAttribute("disabled") || o.classList.contains("disabled"))) return void t.preventDefault();
      "INPUT" !== n.tagName && "LABEL" === e.tagName || h._jQueryInterface.call(i["default"](e), "toggle", "INPUT" === n.tagName);
    }
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
    var e = i["default"](t.target).closest(".btn")[0];
    i["default"](e).toggleClass("focus", /^focus(in)?$/.test(t.type));
  }), i["default"](window).on("load.bs.button.data-api", function () {
    for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
      var i = t[e],
          o = i.querySelector('input:not([type="hidden"])');
      o.checked || o.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active");
    }

    for (var r = 0, a = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < a; r++) {
      var s = t[r];
      "true" === s.getAttribute("aria-pressed") ? s.classList.add("active") : s.classList.remove("active");
    }
  }), i["default"].fn.button = h._jQueryInterface, i["default"].fn.button.Constructor = h, i["default"].fn.button.noConflict = function () {
    return i["default"].fn.button = c, h._jQueryInterface;
  };

  var p = "carousel",
      m = ".bs.carousel",
      g = i["default"].fn[p],
      v = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      _ = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      b = {
    TOUCH: "touch",
    PEN: "pen"
  },
      y = function () {
    function t(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }

    var e = t.prototype;
    return e.next = function () {
      this._isSliding || this._slide("next");
    }, e.nextWhenVisible = function () {
      var t = i["default"](this._element);
      !document.hidden && t.is(":visible") && "hidden" !== t.css("visibility") && this.next();
    }, e.prev = function () {
      this._isSliding || this._slide("prev");
    }, e.pause = function (t) {
      t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (l.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, e.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, e.to = function (t) {
      var e = this;
      this._activeElement = this._element.querySelector(".active.carousel-item");

      var n = this._getItemIndex(this._activeElement);

      if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) i["default"](this._element).one("slid.bs.carousel", function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();
        var o = t > n ? "next" : "prev";

        this._slide(o, this._items[t]);
      }
    }, e.dispose = function () {
      i["default"](this._element).off(m), i["default"].removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, e._getConfig = function (t) {
      return t = a({}, v, t), l.typeCheckConfig(p, t, _), t;
    }, e._handleSwipe = function () {
      var t = Math.abs(this.touchDeltaX);

      if (!(t <= 40)) {
        var e = t / this.touchDeltaX;
        this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next();
      }
    }, e._addEventListeners = function () {
      var t = this;
      this._config.keyboard && i["default"](this._element).on("keydown.bs.carousel", function (e) {
        return t._keydown(e);
      }), "hover" === this._config.pause && i["default"](this._element).on("mouseenter.bs.carousel", function (e) {
        return t.pause(e);
      }).on("mouseleave.bs.carousel", function (e) {
        return t.cycle(e);
      }), this._config.touch && this._addTouchEventListeners();
    }, e._addTouchEventListeners = function () {
      var t = this;

      if (this._touchSupported) {
        var e = function e(_e2) {
          t._pointerEvent && b[_e2.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = _e2.originalEvent.clientX : t._pointerEvent || (t.touchStartX = _e2.originalEvent.touches[0].clientX);
        },
            n = function n(e) {
          t._pointerEvent && b[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
            return t.cycle(e);
          }, 500 + t._config.interval));
        };

        i["default"](this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (t) {
          return t.preventDefault();
        }), this._pointerEvent ? (i["default"](this._element).on("pointerdown.bs.carousel", function (t) {
          return e(t);
        }), i["default"](this._element).on("pointerup.bs.carousel", function (t) {
          return n(t);
        }), this._element.classList.add("pointer-event")) : (i["default"](this._element).on("touchstart.bs.carousel", function (t) {
          return e(t);
        }), i["default"](this._element).on("touchmove.bs.carousel", function (e) {
          return function (e) {
            e.originalEvent.touches && e.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX;
          }(e);
        }), i["default"](this._element).on("touchend.bs.carousel", function (t) {
          return n(t);
        }));
      }
    }, e._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
        case 37:
          t.preventDefault(), this.prev();
          break;

        case 39:
          t.preventDefault(), this.next();
      }
    }, e._getItemIndex = function (t) {
      return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t);
    }, e._getItemByDirection = function (t, e) {
      var n = "next" === t,
          i = "prev" === t,
          o = this._getItemIndex(e),
          r = this._items.length - 1;

      if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
      var a = (o + ("prev" === t ? -1 : 1)) % this._items.length;
      return -1 === a ? this._items[this._items.length - 1] : this._items[a];
    }, e._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          o = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
          r = i["default"].Event("slide.bs.carousel", {
        relatedTarget: t,
        direction: e,
        from: o,
        to: n
      });

      return i["default"](this._element).trigger(r), r;
    }, e._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        var e = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
        i["default"](e).removeClass("active");

        var n = this._indicatorsElement.children[this._getItemIndex(t)];

        n && i["default"](n).addClass("active");
      }
    }, e._slide = function (t, e) {
      var n,
          o,
          r,
          a = this,
          s = this._element.querySelector(".active.carousel-item"),
          u = this._getItemIndex(s),
          f = e || s && this._getItemByDirection(t, s),
          d = this._getItemIndex(f),
          c = Boolean(this._interval);

      if ("next" === t ? (n = "carousel-item-left", o = "carousel-item-next", r = "left") : (n = "carousel-item-right", o = "carousel-item-prev", r = "right"), f && i["default"](f).hasClass("active")) this._isSliding = !1;else if (!this._triggerSlideEvent(f, r).isDefaultPrevented() && s && f) {
        this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(f);
        var h = i["default"].Event("slid.bs.carousel", {
          relatedTarget: f,
          direction: r,
          from: u,
          to: d
        });

        if (i["default"](this._element).hasClass("slide")) {
          i["default"](f).addClass(o), l.reflow(f), i["default"](s).addClass(n), i["default"](f).addClass(n);
          var p = parseInt(f.getAttribute("data-interval"), 10);
          p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
          var m = l.getTransitionDurationFromElement(s);
          i["default"](s).one(l.TRANSITION_END, function () {
            i["default"](f).removeClass(n + " " + o).addClass("active"), i["default"](s).removeClass("active " + o + " " + n), a._isSliding = !1, setTimeout(function () {
              return i["default"](a._element).trigger(h);
            }, 0);
          }).emulateTransitionEnd(m);
        } else i["default"](s).removeClass("active"), i["default"](f).addClass("active"), this._isSliding = !1, i["default"](this._element).trigger(h);

        c && this.cycle();
      }
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = i["default"](this).data("bs.carousel"),
            o = a({}, v, i["default"](this).data());
        "object" == _typeof(e) && (o = a({}, o, e));
        var r = "string" == typeof e ? e : o.slide;
        if (n || (n = new t(this, o), i["default"](this).data("bs.carousel", n)), "number" == typeof e) n.to(e);else if ("string" == typeof r) {
          if ("undefined" == typeof n[r]) throw new TypeError('No method named "' + r + '"');
          n[r]();
        } else o.interval && o.ride && (n.pause(), n.cycle());
      });
    }, t._dataApiClickHandler = function (e) {
      var n = l.getSelectorFromElement(this);

      if (n) {
        var o = i["default"](n)[0];

        if (o && i["default"](o).hasClass("carousel")) {
          var r = a({}, i["default"](o).data(), i["default"](this).data()),
              s = this.getAttribute("data-slide-to");
          s && (r.interval = !1), t._jQueryInterface.call(i["default"](o), r), s && i["default"](o).data("bs.carousel").to(s), e.preventDefault();
        }
      }
    }, r(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.5.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return v;
      }
    }]), t;
  }();

  i["default"](document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", y._dataApiClickHandler), i["default"](window).on("load.bs.carousel.data-api", function () {
    for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, n = t.length; e < n; e++) {
      var o = i["default"](t[e]);

      y._jQueryInterface.call(o, o.data());
    }
  }), i["default"].fn[p] = y._jQueryInterface, i["default"].fn[p].Constructor = y, i["default"].fn[p].noConflict = function () {
    return i["default"].fn[p] = g, y._jQueryInterface;
  };

  var w = "collapse",
      E = i["default"].fn[w],
      T = {
    toggle: !0,
    parent: ""
  },
      C = {
    toggle: "boolean",
    parent: "(string|element)"
  },
      S = function () {
    function t(t, e) {
      this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));

      for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, o = n.length; i < o; i++) {
        var r = n[i],
            a = l.getSelectorFromElement(r),
            s = [].slice.call(document.querySelectorAll(a)).filter(function (e) {
          return e === t;
        });
        null !== a && s.length > 0 && (this._selector = a, this._triggerArray.push(r));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var e = t.prototype;
    return e.toggle = function () {
      i["default"](this._element).hasClass("show") ? this.hide() : this.show();
    }, e.show = function () {
      var e,
          n,
          o = this;

      if (!this._isTransitioning && !i["default"](this._element).hasClass("show") && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (t) {
        return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains("collapse");
      })).length && (e = null), !(e && (n = i["default"](e).not(this._selector).data("bs.collapse")) && n._isTransitioning))) {
        var r = i["default"].Event("show.bs.collapse");

        if (i["default"](this._element).trigger(r), !r.isDefaultPrevented()) {
          e && (t._jQueryInterface.call(i["default"](e).not(this._selector), "hide"), n || i["default"](e).data("bs.collapse", null));

          var a = this._getDimension();

          i["default"](this._element).removeClass("collapse").addClass("collapsing"), this._element.style[a] = 0, this._triggerArray.length && i["default"](this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
          var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
              u = l.getTransitionDurationFromElement(this._element);
          i["default"](this._element).one(l.TRANSITION_END, function () {
            i["default"](o._element).removeClass("collapsing").addClass("collapse show"), o._element.style[a] = "", o.setTransitioning(!1), i["default"](o._element).trigger("shown.bs.collapse");
          }).emulateTransitionEnd(u), this._element.style[a] = this._element[s] + "px";
        }
      }
    }, e.hide = function () {
      var t = this;

      if (!this._isTransitioning && i["default"](this._element).hasClass("show")) {
        var e = i["default"].Event("hide.bs.collapse");

        if (i["default"](this._element).trigger(e), !e.isDefaultPrevented()) {
          var n = this._getDimension();

          this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", l.reflow(this._element), i["default"](this._element).addClass("collapsing").removeClass("collapse show");
          var o = this._triggerArray.length;
          if (o > 0) for (var r = 0; r < o; r++) {
            var a = this._triggerArray[r],
                s = l.getSelectorFromElement(a);
            if (null !== s) i["default"]([].slice.call(document.querySelectorAll(s))).hasClass("show") || i["default"](a).addClass("collapsed").attr("aria-expanded", !1);
          }
          this.setTransitioning(!0);
          this._element.style[n] = "";
          var u = l.getTransitionDurationFromElement(this._element);
          i["default"](this._element).one(l.TRANSITION_END, function () {
            t.setTransitioning(!1), i["default"](t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
          }).emulateTransitionEnd(u);
        }
      }
    }, e.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, e.dispose = function () {
      i["default"].removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, e._getConfig = function (t) {
      return (t = a({}, T, t)).toggle = Boolean(t.toggle), l.typeCheckConfig(w, t, C), t;
    }, e._getDimension = function () {
      return i["default"](this._element).hasClass("width") ? "width" : "height";
    }, e._getParent = function () {
      var e,
          n = this;
      l.isElement(this._config.parent) ? (e = this._config.parent, "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
      var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          r = [].slice.call(e.querySelectorAll(o));
      return i["default"](r).each(function (e, i) {
        n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]);
      }), e;
    }, e._addAriaAndCollapsedClass = function (t, e) {
      var n = i["default"](t).hasClass("show");
      e.length && i["default"](e).toggleClass("collapsed", !n).attr("aria-expanded", n);
    }, t._getTargetFromElement = function (t) {
      var e = l.getSelectorFromElement(t);
      return e ? document.querySelector(e) : null;
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = i["default"](this),
            o = n.data("bs.collapse"),
            r = a({}, T, n.data(), "object" == _typeof(e) && e ? e : {});

        if (!o && r.toggle && "string" == typeof e && /show|hide/.test(e) && (r.toggle = !1), o || (o = new t(this, r), n.data("bs.collapse", o)), "string" == typeof e) {
          if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
          o[e]();
        }
      });
    }, r(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.5.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return T;
      }
    }]), t;
  }();

  i["default"](document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();
    var e = i["default"](this),
        n = l.getSelectorFromElement(this),
        o = [].slice.call(document.querySelectorAll(n));
    i["default"](o).each(function () {
      var t = i["default"](this),
          n = t.data("bs.collapse") ? "toggle" : e.data();

      S._jQueryInterface.call(t, n);
    });
  }), i["default"].fn[w] = S._jQueryInterface, i["default"].fn[w].Constructor = S, i["default"].fn[w].noConflict = function () {
    return i["default"].fn[w] = E, S._jQueryInterface;
  };

  var D = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
      N = function () {
    for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1) {
      if (D && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
    }

    return 0;
  }();

  var k = D && window.Promise ? function (t) {
    var e = !1;
    return function () {
      e || (e = !0, window.Promise.resolve().then(function () {
        e = !1, t();
      }));
    };
  } : function (t) {
    var e = !1;
    return function () {
      e || (e = !0, setTimeout(function () {
        e = !1, t();
      }, N));
    };
  };

  function A(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }

  function I(t, e) {
    if (1 !== t.nodeType) return [];
    var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
    return e ? n[e] : n;
  }

  function O(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }

  function x(t) {
    if (!t) return document.body;

    switch (t.nodeName) {
      case "HTML":
      case "BODY":
        return t.ownerDocument.body;

      case "#document":
        return t.body;
    }

    var e = I(t),
        n = e.overflow,
        i = e.overflowX,
        o = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? t : x(O(t));
  }

  function j(t) {
    return t && t.referenceNode ? t.referenceNode : t;
  }

  var L = D && !(!window.MSInputMethodContext || !document.documentMode),
      P = D && /MSIE 10/.test(navigator.userAgent);

  function F(t) {
    return 11 === t ? L : 10 === t ? P : L || P;
  }

  function R(t) {
    if (!t) return document.documentElement;

    for (var e = F(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) {
      n = (t = t.nextElementSibling).offsetParent;
    }

    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === I(n, "position") ? R(n) : n : t ? t.ownerDocument.documentElement : document.documentElement;
  }

  function H(t) {
    return null !== t.parentNode ? H(t.parentNode) : t;
  }

  function M(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? t : e,
        o = n ? e : t,
        r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var a,
        s,
        l = r.commonAncestorContainer;
    if (t !== l && e !== l || i.contains(o)) return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && R(a.firstElementChild) !== a ? R(l) : l;
    var u = H(t);
    return u.host ? M(u.host, e) : M(t, H(e).host);
  }

  function B(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
        n = "top" === e ? "scrollTop" : "scrollLeft",
        i = t.nodeName;

    if ("BODY" === i || "HTML" === i) {
      var o = t.ownerDocument.documentElement,
          r = t.ownerDocument.scrollingElement || o;
      return r[n];
    }

    return t[n];
  }

  function q(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = B(e, "top"),
        o = B(e, "left"),
        r = n ? -1 : 1;
    return t.top += i * r, t.bottom += i * r, t.left += o * r, t.right += o * r, t;
  }

  function Q(t, e) {
    var n = "x" === e ? "Left" : "Top",
        i = "Left" === n ? "Right" : "Bottom";
    return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + i + "Width"]);
  }

  function W(t, e, n, i) {
    return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], F(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0);
  }

  function U(t) {
    var e = t.body,
        n = t.documentElement,
        i = F(10) && getComputedStyle(n);
    return {
      height: W("Height", e, n, i),
      width: W("Width", e, n, i)
    };
  }

  var V = function V(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  },
      Y = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    return function (e, n, i) {
      return n && t(e.prototype, n), i && t(e, i), e;
    };
  }(),
      z = function z(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  },
      X = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var i in n) {
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
    }

    return t;
  };

  function K(t) {
    return X({}, t, {
      right: t.left + t.width,
      bottom: t.top + t.height
    });
  }

  function G(t) {
    var e = {};

    try {
      if (F(10)) {
        e = t.getBoundingClientRect();
        var n = B(t, "top"),
            i = B(t, "left");
        e.top += n, e.left += i, e.bottom += n, e.right += i;
      } else e = t.getBoundingClientRect();
    } catch (t) {}

    var o = {
      left: e.left,
      top: e.top,
      width: e.right - e.left,
      height: e.bottom - e.top
    },
        r = "HTML" === t.nodeName ? U(t.ownerDocument) : {},
        a = r.width || t.clientWidth || o.width,
        s = r.height || t.clientHeight || o.height,
        l = t.offsetWidth - a,
        u = t.offsetHeight - s;

    if (l || u) {
      var f = I(t);
      l -= Q(f, "x"), u -= Q(f, "y"), o.width -= l, o.height -= u;
    }

    return K(o);
  }

  function $(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = F(10),
        o = "HTML" === e.nodeName,
        r = G(t),
        a = G(e),
        s = x(t),
        l = I(e),
        u = parseFloat(l.borderTopWidth),
        f = parseFloat(l.borderLeftWidth);
    n && o && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
    var d = K({
      top: r.top - a.top - u,
      left: r.left - a.left - f,
      width: r.width,
      height: r.height
    });

    if (d.marginTop = 0, d.marginLeft = 0, !i && o) {
      var c = parseFloat(l.marginTop),
          h = parseFloat(l.marginLeft);
      d.top -= u - c, d.bottom -= u - c, d.left -= f - h, d.right -= f - h, d.marginTop = c, d.marginLeft = h;
    }

    return (i && !n ? e.contains(s) : e === s && "BODY" !== s.nodeName) && (d = q(d, e)), d;
  }

  function J(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = t.ownerDocument.documentElement,
        i = $(t, n),
        o = Math.max(n.clientWidth, window.innerWidth || 0),
        r = Math.max(n.clientHeight, window.innerHeight || 0),
        a = e ? 0 : B(n),
        s = e ? 0 : B(n, "left"),
        l = {
      top: a - i.top + i.marginTop,
      left: s - i.left + i.marginLeft,
      width: o,
      height: r
    };
    return K(l);
  }

  function Z(t) {
    var e = t.nodeName;
    if ("BODY" === e || "HTML" === e) return !1;
    if ("fixed" === I(t, "position")) return !0;
    var n = O(t);
    return !!n && Z(n);
  }

  function tt(t) {
    if (!t || !t.parentElement || F()) return document.documentElement;

    for (var e = t.parentElement; e && "none" === I(e, "transform");) {
      e = e.parentElement;
    }

    return e || document.documentElement;
  }

  function et(t, e, n, i) {
    var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        r = {
      top: 0,
      left: 0
    },
        a = o ? tt(t) : M(t, j(e));
    if ("viewport" === i) r = J(a, o);else {
      var s = void 0;
      "scrollParent" === i ? "BODY" === (s = x(O(e))).nodeName && (s = t.ownerDocument.documentElement) : s = "window" === i ? t.ownerDocument.documentElement : i;
      var l = $(s, a, o);
      if ("HTML" !== s.nodeName || Z(a)) r = l;else {
        var u = U(t.ownerDocument),
            f = u.height,
            d = u.width;
        r.top += l.top - l.marginTop, r.bottom = f + l.top, r.left += l.left - l.marginLeft, r.right = d + l.left;
      }
    }
    var c = "number" == typeof (n = n || 0);
    return r.left += c ? n : n.left || 0, r.top += c ? n : n.top || 0, r.right -= c ? n : n.right || 0, r.bottom -= c ? n : n.bottom || 0, r;
  }

  function nt(t) {
    return t.width * t.height;
  }

  function it(t, e, n, i, o) {
    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf("auto")) return t;
    var a = et(n, i, r, o),
        s = {
      top: {
        width: a.width,
        height: e.top - a.top
      },
      right: {
        width: a.right - e.right,
        height: a.height
      },
      bottom: {
        width: a.width,
        height: a.bottom - e.bottom
      },
      left: {
        width: e.left - a.left,
        height: a.height
      }
    },
        l = Object.keys(s).map(function (t) {
      return X({
        key: t
      }, s[t], {
        area: nt(s[t])
      });
    }).sort(function (t, e) {
      return e.area - t.area;
    }),
        u = l.filter(function (t) {
      var e = t.width,
          i = t.height;
      return e >= n.clientWidth && i >= n.clientHeight;
    }),
        f = u.length > 0 ? u[0].key : l[0].key,
        d = t.split("-")[1];
    return f + (d ? "-" + d : "");
  }

  function ot(t, e, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        o = i ? tt(e) : M(e, j(n));
    return $(n, o, i);
  }

  function rt(t) {
    var e = t.ownerDocument.defaultView.getComputedStyle(t),
        n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
        i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
    return {
      width: t.offsetWidth + i,
      height: t.offsetHeight + n
    };
  }

  function at(t) {
    var e = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }

  function st(t, e, n) {
    n = n.split("-")[0];
    var i = rt(t),
        o = {
      width: i.width,
      height: i.height
    },
        r = -1 !== ["right", "left"].indexOf(n),
        a = r ? "top" : "left",
        s = r ? "left" : "top",
        l = r ? "height" : "width",
        u = r ? "width" : "height";
    return o[a] = e[a] + e[l] / 2 - i[l] / 2, o[s] = n === s ? e[s] - i[u] : e[at(s)], o;
  }

  function lt(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }

  function ut(t, e, n) {
    return (void 0 === n ? t : t.slice(0, function (t, e, n) {
      if (Array.prototype.findIndex) return t.findIndex(function (t) {
        return t[e] === n;
      });
      var i = lt(t, function (t) {
        return t[e] === n;
      });
      return t.indexOf(i);
    }(t, "name", n))).forEach(function (t) {
      t["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      var n = t["function"] || t.fn;
      t.enabled && A(n) && (e.offsets.popper = K(e.offsets.popper), e.offsets.reference = K(e.offsets.reference), e = n(e, t));
    }), e;
  }

  function ft() {
    if (!this.state.isDestroyed) {
      var t = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {}
      };
      t.offsets.reference = ot(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = it(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = st(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = ut(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t));
    }
  }

  function dt(t, e) {
    return t.some(function (t) {
      var n = t.name;
      return t.enabled && n === e;
    });
  }

  function ct(t) {
    for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
      var o = e[i],
          r = o ? "" + o + n : t;
      if ("undefined" != typeof document.body.style[r]) return r;
    }

    return null;
  }

  function ht() {
    return this.state.isDestroyed = !0, dt(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[ct("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
  }

  function pt(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }

  function mt(t, e, n, i) {
    n.updateBound = i, pt(t).addEventListener("resize", n.updateBound, {
      passive: !0
    });
    var o = x(t);
    return function t(e, n, i, o) {
      var r = "BODY" === e.nodeName,
          a = r ? e.ownerDocument.defaultView : e;
      a.addEventListener(n, i, {
        passive: !0
      }), r || t(x(a.parentNode), n, i, o), o.push(a);
    }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n;
  }

  function gt() {
    this.state.eventsEnabled || (this.state = mt(this.reference, this.options, this.state, this.scheduleUpdate));
  }

  function vt() {
    var t, e;
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, pt(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
      t.removeEventListener("scroll", e.updateBound);
    }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e));
  }

  function _t(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }

  function bt(t, e) {
    Object.keys(e).forEach(function (n) {
      var i = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && _t(e[n]) && (i = "px"), t.style[n] = e[n] + i;
    });
  }

  var yt = D && /Firefox/i.test(navigator.userAgent);

  function wt(t, e, n) {
    var i = lt(t, function (t) {
      return t.name === e;
    }),
        o = !!i && t.some(function (t) {
      return t.name === n && t.enabled && t.order < i.order;
    });

    if (!o) {
      var r = "`" + e + "`",
          a = "`" + n + "`";
      console.warn(a + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
    }

    return o;
  }

  var Et = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      Tt = Et.slice(3);

  function Ct(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = Tt.indexOf(t),
        i = Tt.slice(n + 1).concat(Tt.slice(0, n));
    return e ? i.reverse() : i;
  }

  var St = "flip",
      Dt = "clockwise",
      Nt = "counterclockwise";

  function kt(t, e, n, i) {
    var o = [0, 0],
        r = -1 !== ["right", "left"].indexOf(i),
        a = t.split(/(\+|\-)/).map(function (t) {
      return t.trim();
    }),
        s = a.indexOf(lt(a, function (t) {
      return -1 !== t.search(/,|\s/);
    }));
    a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var l = /\s*,\s*|\s+/,
        u = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
    return (u = u.map(function (t, i) {
      var o = (1 === i ? !r : r) ? "height" : "width",
          a = !1;
      return t.reduce(function (t, e) {
        return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, a = !0, t) : a ? (t[t.length - 1] += e, a = !1, t) : t.concat(e);
      }, []).map(function (t) {
        return function (t, e, n, i) {
          var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
              r = +o[1],
              a = o[2];
          if (!r) return t;

          if (0 === a.indexOf("%")) {
            var s = void 0;

            switch (a) {
              case "%p":
                s = n;
                break;

              case "%":
              case "%r":
              default:
                s = i;
            }

            return K(s)[e] / 100 * r;
          }

          if ("vh" === a || "vw" === a) {
            return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;
          }

          return r;
        }(t, o, e, n);
      });
    })).forEach(function (t, e) {
      t.forEach(function (n, i) {
        _t(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
      });
    }), o;
  }

  var At = {
    placement: "bottom",
    positionFixed: !1,
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function onCreate() {},
    onUpdate: function onUpdate() {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function fn(t) {
          var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];

          if (i) {
            var o = t.offsets,
                r = o.reference,
                a = o.popper,
                s = -1 !== ["bottom", "top"].indexOf(n),
                l = s ? "left" : "top",
                u = s ? "width" : "height",
                f = {
              start: z({}, l, r[l]),
              end: z({}, l, r[l] + r[u] - a[u])
            };
            t.offsets.popper = X({}, a, f[i]);
          }

          return t;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: function fn(t, e) {
          var n = e.offset,
              i = t.placement,
              o = t.offsets,
              r = o.popper,
              a = o.reference,
              s = i.split("-")[0],
              l = void 0;
          return l = _t(+n) ? [+n, 0] : kt(n, r, a, s), "left" === s ? (r.top += l[0], r.left -= l[1]) : "right" === s ? (r.top += l[0], r.left += l[1]) : "top" === s ? (r.left += l[0], r.top -= l[1]) : "bottom" === s && (r.left += l[0], r.top += l[1]), t.popper = r, t;
        },
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function fn(t, e) {
          var n = e.boundariesElement || R(t.instance.popper);
          t.instance.reference === n && (n = R(n));
          var i = ct("transform"),
              o = t.instance.popper.style,
              r = o.top,
              a = o.left,
              s = o[i];
          o.top = "", o.left = "", o[i] = "";
          var l = et(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
          o.top = r, o.left = a, o[i] = s, e.boundaries = l;
          var u = e.priority,
              f = t.offsets.popper,
              d = {
            primary: function primary(t) {
              var n = f[t];
              return f[t] < l[t] && !e.escapeWithReference && (n = Math.max(f[t], l[t])), z({}, t, n);
            },
            secondary: function secondary(t) {
              var n = "right" === t ? "left" : "top",
                  i = f[n];
              return f[t] > l[t] && !e.escapeWithReference && (i = Math.min(f[n], l[t] - ("right" === t ? f.width : f.height))), z({}, n, i);
            }
          };
          return u.forEach(function (t) {
            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
            f = X({}, f, d[e](t));
          }), t.offsets.popper = f, t;
        },
        priority: ["left", "right", "top", "bottom"],
        padding: 5,
        boundariesElement: "scrollParent"
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function fn(t) {
          var e = t.offsets,
              n = e.popper,
              i = e.reference,
              o = t.placement.split("-")[0],
              r = Math.floor,
              a = -1 !== ["top", "bottom"].indexOf(o),
              s = a ? "right" : "bottom",
              l = a ? "left" : "top",
              u = a ? "width" : "height";
          return n[s] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[u]), n[l] > r(i[s]) && (t.offsets.popper[l] = r(i[s])), t;
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function fn(t, e) {
          var n;
          if (!wt(t.instance.modifiers, "arrow", "keepTogether")) return t;
          var i = e.element;

          if ("string" == typeof i) {
            if (!(i = t.instance.popper.querySelector(i))) return t;
          } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;

          var o = t.placement.split("-")[0],
              r = t.offsets,
              a = r.popper,
              s = r.reference,
              l = -1 !== ["left", "right"].indexOf(o),
              u = l ? "height" : "width",
              f = l ? "Top" : "Left",
              d = f.toLowerCase(),
              c = l ? "left" : "top",
              h = l ? "bottom" : "right",
              p = rt(i)[u];
          s[h] - p < a[d] && (t.offsets.popper[d] -= a[d] - (s[h] - p)), s[d] + p > a[h] && (t.offsets.popper[d] += s[d] + p - a[h]), t.offsets.popper = K(t.offsets.popper);

          var m = s[d] + s[u] / 2 - p / 2,
              g = I(t.instance.popper),
              v = parseFloat(g["margin" + f]),
              _ = parseFloat(g["border" + f + "Width"]),
              b = m - t.offsets.popper[d] - v - _;

          return b = Math.max(Math.min(a[u] - p, b), 0), t.arrowElement = i, t.offsets.arrow = (z(n = {}, d, Math.round(b)), z(n, c, ""), n), t;
        },
        element: "[x-arrow]"
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function fn(t, e) {
          if (dt(t.instance.modifiers, "inner")) return t;
          if (t.flipped && t.placement === t.originalPlacement) return t;
          var n = et(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
              i = t.placement.split("-")[0],
              o = at(i),
              r = t.placement.split("-")[1] || "",
              a = [];

          switch (e.behavior) {
            case St:
              a = [i, o];
              break;

            case Dt:
              a = Ct(i);
              break;

            case Nt:
              a = Ct(i, !0);
              break;

            default:
              a = e.behavior;
          }

          return a.forEach(function (s, l) {
            if (i !== s || a.length === l + 1) return t;
            i = t.placement.split("-")[0], o = at(i);

            var u = t.offsets.popper,
                f = t.offsets.reference,
                d = Math.floor,
                c = "left" === i && d(u.right) > d(f.left) || "right" === i && d(u.left) < d(f.right) || "top" === i && d(u.bottom) > d(f.top) || "bottom" === i && d(u.top) < d(f.bottom),
                h = d(u.left) < d(n.left),
                p = d(u.right) > d(n.right),
                m = d(u.top) < d(n.top),
                g = d(u.bottom) > d(n.bottom),
                v = "left" === i && h || "right" === i && p || "top" === i && m || "bottom" === i && g,
                _ = -1 !== ["top", "bottom"].indexOf(i),
                b = !!e.flipVariations && (_ && "start" === r && h || _ && "end" === r && p || !_ && "start" === r && m || !_ && "end" === r && g),
                y = !!e.flipVariationsByContent && (_ && "start" === r && p || _ && "end" === r && h || !_ && "start" === r && g || !_ && "end" === r && m),
                w = b || y;

            (c || v || w) && (t.flipped = !0, (c || v) && (i = a[l + 1]), w && (r = function (t) {
              return "end" === t ? "start" : "start" === t ? "end" : t;
            }(r)), t.placement = i + (r ? "-" + r : ""), t.offsets.popper = X({}, t.offsets.popper, st(t.instance.popper, t.offsets.reference, t.placement)), t = ut(t.instance.modifiers, t, "flip"));
          }), t;
        },
        behavior: "flip",
        padding: 5,
        boundariesElement: "viewport",
        flipVariations: !1,
        flipVariationsByContent: !1
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function fn(t) {
          var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              o = i.popper,
              r = i.reference,
              a = -1 !== ["left", "right"].indexOf(n),
              s = -1 === ["top", "left"].indexOf(n);
          return o[a ? "left" : "top"] = r[n] - (s ? o[a ? "width" : "height"] : 0), t.placement = at(e), t.offsets.popper = K(o), t;
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function fn(t) {
          if (!wt(t.instance.modifiers, "hide", "preventOverflow")) return t;
          var e = t.offsets.reference,
              n = lt(t.instance.modifiers, function (t) {
            return "preventOverflow" === t.name;
          }).boundaries;

          if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
            if (!0 === t.hide) return t;
            t.hide = !0, t.attributes["x-out-of-boundaries"] = "";
          } else {
            if (!1 === t.hide) return t;
            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1;
          }

          return t;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function fn(t, e) {
          var n = e.x,
              i = e.y,
              o = t.offsets.popper,
              r = lt(t.instance.modifiers, function (t) {
            return "applyStyle" === t.name;
          }).gpuAcceleration;
          void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");

          var a = void 0 !== r ? r : e.gpuAcceleration,
              s = R(t.instance.popper),
              l = G(s),
              u = {
            position: o.position
          },
              f = function (t, e) {
            var n = t.offsets,
                i = n.popper,
                o = n.reference,
                r = Math.round,
                a = Math.floor,
                s = function s(t) {
              return t;
            },
                l = r(o.width),
                u = r(i.width),
                f = -1 !== ["left", "right"].indexOf(t.placement),
                d = -1 !== t.placement.indexOf("-"),
                c = e ? f || d || l % 2 == u % 2 ? r : a : s,
                h = e ? r : s;

            return {
              left: c(l % 2 == 1 && u % 2 == 1 && !d && e ? i.left - 1 : i.left),
              top: h(i.top),
              bottom: h(i.bottom),
              right: c(i.right)
            };
          }(t, window.devicePixelRatio < 2 || !yt),
              d = "bottom" === n ? "top" : "bottom",
              c = "right" === i ? "left" : "right",
              h = ct("transform"),
              p = void 0,
              m = void 0;

          if (m = "bottom" === d ? "HTML" === s.nodeName ? -s.clientHeight + f.bottom : -l.height + f.bottom : f.top, p = "right" === c ? "HTML" === s.nodeName ? -s.clientWidth + f.right : -l.width + f.right : f.left, a && h) u[h] = "translate3d(" + p + "px, " + m + "px, 0)", u[d] = 0, u[c] = 0, u.willChange = "transform";else {
            var g = "bottom" === d ? -1 : 1,
                v = "right" === c ? -1 : 1;
            u[d] = m * g, u[c] = p * v, u.willChange = d + ", " + c;
          }
          var _ = {
            "x-placement": t.placement
          };
          return t.attributes = X({}, _, t.attributes), t.styles = X({}, u, t.styles), t.arrowStyles = X({}, t.offsets.arrow, t.arrowStyles), t;
        },
        gpuAcceleration: !0,
        x: "bottom",
        y: "right"
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function fn(t) {
          var e, n;
          return bt(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function (t) {
            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
          }), t.arrowElement && Object.keys(t.arrowStyles).length && bt(t.arrowElement, t.arrowStyles), t;
        },
        onLoad: function onLoad(t, e, n, i, o) {
          var r = ot(o, e, t, n.positionFixed),
              a = it(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
          return e.setAttribute("x-placement", a), bt(e, {
            position: n.positionFixed ? "fixed" : "absolute"
          }), n;
        },
        gpuAcceleration: void 0
      }
    }
  },
      It = function () {
    function t(e, n) {
      var i = this,
          o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      V(this, t), this.scheduleUpdate = function () {
        return requestAnimationFrame(i.update);
      }, this.update = k(this.update.bind(this)), this.options = X({}, t.Defaults, o), this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: []
      }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(X({}, t.Defaults.modifiers, o.modifiers)).forEach(function (e) {
        i.options.modifiers[e] = X({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
        return X({
          name: t
        }, i.options.modifiers[t]);
      }).sort(function (t, e) {
        return t.order - e.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && A(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
      }), this.update();
      var r = this.options.eventsEnabled;
      r && this.enableEventListeners(), this.state.eventsEnabled = r;
    }

    return Y(t, [{
      key: "update",
      value: function value() {
        return ft.call(this);
      }
    }, {
      key: "destroy",
      value: function value() {
        return ht.call(this);
      }
    }, {
      key: "enableEventListeners",
      value: function value() {
        return gt.call(this);
      }
    }, {
      key: "disableEventListeners",
      value: function value() {
        return vt.call(this);
      }
    }]), t;
  }();

  It.Utils = ("undefined" != typeof window ? window : global).PopperUtils, It.placements = Et, It.Defaults = At;

  var Ot = "dropdown",
      xt = i["default"].fn[Ot],
      jt = new RegExp("38|40|27"),
      Lt = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null
  },
      Pt = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string",
    popperConfig: "(null|object)"
  },
      Ft = function () {
    function t(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var e = t.prototype;
    return e.toggle = function () {
      if (!this._element.disabled && !i["default"](this._element).hasClass("disabled")) {
        var e = i["default"](this._menu).hasClass("show");
        t._clearMenus(), e || this.show(!0);
      }
    }, e.show = function (e) {
      if (void 0 === e && (e = !1), !(this._element.disabled || i["default"](this._element).hasClass("disabled") || i["default"](this._menu).hasClass("show"))) {
        var n = {
          relatedTarget: this._element
        },
            o = i["default"].Event("show.bs.dropdown", n),
            r = t._getParentFromElement(this._element);

        if (i["default"](r).trigger(o), !o.isDefaultPrevented()) {
          if (!this._inNavbar && e) {
            if ("undefined" == typeof It) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
            var a = this._element;
            "parent" === this._config.reference ? a = r : l.isElement(this._config.reference) && (a = this._config.reference, "undefined" != typeof this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && i["default"](r).addClass("position-static"), this._popper = new It(a, this._menu, this._getPopperConfig());
          }

          "ontouchstart" in document.documentElement && 0 === i["default"](r).closest(".navbar-nav").length && i["default"](document.body).children().on("mouseover", null, i["default"].noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), i["default"](this._menu).toggleClass("show"), i["default"](r).toggleClass("show").trigger(i["default"].Event("shown.bs.dropdown", n));
        }
      }
    }, e.hide = function () {
      if (!this._element.disabled && !i["default"](this._element).hasClass("disabled") && i["default"](this._menu).hasClass("show")) {
        var e = {
          relatedTarget: this._element
        },
            n = i["default"].Event("hide.bs.dropdown", e),
            o = t._getParentFromElement(this._element);

        i["default"](o).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), i["default"](this._menu).toggleClass("show"), i["default"](o).toggleClass("show").trigger(i["default"].Event("hidden.bs.dropdown", e)));
      }
    }, e.dispose = function () {
      i["default"].removeData(this._element, "bs.dropdown"), i["default"](this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
    }, e.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, e._addEventListeners = function () {
      var t = this;
      i["default"](this._element).on("click.bs.dropdown", function (e) {
        e.preventDefault(), e.stopPropagation(), t.toggle();
      });
    }, e._getConfig = function (t) {
      return t = a({}, this.constructor.Default, i["default"](this._element).data(), t), l.typeCheckConfig(Ot, t, this.constructor.DefaultType), t;
    }, e._getMenuElement = function () {
      if (!this._menu) {
        var e = t._getParentFromElement(this._element);

        e && (this._menu = e.querySelector(".dropdown-menu"));
      }

      return this._menu;
    }, e._getPlacement = function () {
      var t = i["default"](this._element.parentNode),
          e = "bottom-start";
      return t.hasClass("dropup") ? e = i["default"](this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : i["default"](this._menu).hasClass("dropdown-menu-right") && (e = "bottom-end"), e;
    }, e._detectNavbar = function () {
      return i["default"](this._element).closest(".navbar").length > 0;
    }, e._getOffset = function () {
      var t = this,
          e = {};
      return "function" == typeof this._config.offset ? e.fn = function (e) {
        return e.offsets = a({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e;
      } : e.offset = this._config.offset, e;
    }, e._getPopperConfig = function () {
      var t = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (t.modifiers.applyStyle = {
        enabled: !1
      }), a({}, t, this._config.popperConfig);
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = i["default"](this).data("bs.dropdown");

        if (n || (n = new t(this, "object" == _typeof(e) ? e : null), i["default"](this).data("bs.dropdown", n)), "string" == typeof e) {
          if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
          n[e]();
        }
      });
    }, t._clearMenus = function (e) {
      if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var n = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), o = 0, r = n.length; o < r; o++) {
        var a = t._getParentFromElement(n[o]),
            s = i["default"](n[o]).data("bs.dropdown"),
            l = {
          relatedTarget: n[o]
        };

        if (e && "click" === e.type && (l.clickEvent = e), s) {
          var u = s._menu;

          if (i["default"](a).hasClass("show") && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && i["default"].contains(a, e.target))) {
            var f = i["default"].Event("hide.bs.dropdown", l);
            i["default"](a).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && i["default"](document.body).children().off("mouseover", null, i["default"].noop), n[o].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), i["default"](u).removeClass("show"), i["default"](a).removeClass("show").trigger(i["default"].Event("hidden.bs.dropdown", l)));
          }
        }
      }
    }, t._getParentFromElement = function (t) {
      var e,
          n = l.getSelectorFromElement(t);
      return n && (e = document.querySelector(n)), e || t.parentNode;
    }, t._dataApiKeydownHandler = function (e) {
      if (!(/input|textarea/i.test(e.target.tagName) ? 32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || i["default"](e.target).closest(".dropdown-menu").length) : !jt.test(e.which)) && !this.disabled && !i["default"](this).hasClass("disabled")) {
        var n = t._getParentFromElement(this),
            o = i["default"](n).hasClass("show");

        if (o || 27 !== e.which) {
          if (e.preventDefault(), e.stopPropagation(), !o || 27 === e.which || 32 === e.which) return 27 === e.which && i["default"](n.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void i["default"](this).trigger("click");
          var r = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (t) {
            return i["default"](t).is(":visible");
          });

          if (0 !== r.length) {
            var a = r.indexOf(e.target);
            38 === e.which && a > 0 && a--, 40 === e.which && a < r.length - 1 && a++, a < 0 && (a = 0), r[a].focus();
          }
        }
      }
    }, r(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.5.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return Lt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Pt;
      }
    }]), t;
  }();

  i["default"](document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', Ft._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", Ft._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", Ft._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
    t.preventDefault(), t.stopPropagation(), Ft._jQueryInterface.call(i["default"](this), "toggle");
  }).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
    t.stopPropagation();
  }), i["default"].fn[Ot] = Ft._jQueryInterface, i["default"].fn[Ot].Constructor = Ft, i["default"].fn[Ot].noConflict = function () {
    return i["default"].fn[Ot] = xt, Ft._jQueryInterface;
  };

  var Rt = i["default"].fn.modal,
      Ht = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  },
      Mt = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  },
      Bt = function () {
    function t(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
    }

    var e = t.prototype;
    return e.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, e.show = function (t) {
      var e = this;

      if (!this._isShown && !this._isTransitioning) {
        i["default"](this._element).hasClass("fade") && (this._isTransitioning = !0);
        var n = i["default"].Event("show.bs.modal", {
          relatedTarget: t
        });
        i["default"](this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), i["default"](this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function (t) {
          return e.hide(t);
        }), i["default"](this._dialog).on("mousedown.dismiss.bs.modal", function () {
          i["default"](e._element).one("mouseup.dismiss.bs.modal", function (t) {
            i["default"](t.target).is(e._element) && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, e.hide = function (t) {
      var e = this;

      if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
        var n = i["default"].Event("hide.bs.modal");

        if (i["default"](this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;
          var o = i["default"](this._element).hasClass("fade");

          if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), i["default"](document).off("focusin.bs.modal"), i["default"](this._element).removeClass("show"), i["default"](this._element).off("click.dismiss.bs.modal"), i["default"](this._dialog).off("mousedown.dismiss.bs.modal"), o) {
            var r = l.getTransitionDurationFromElement(this._element);
            i["default"](this._element).one(l.TRANSITION_END, function (t) {
              return e._hideModal(t);
            }).emulateTransitionEnd(r);
          } else this._hideModal();
        }
      }
    }, e.dispose = function () {
      [window, this._element, this._dialog].forEach(function (t) {
        return i["default"](t).off(".bs.modal");
      }), i["default"](document).off("focusin.bs.modal"), i["default"].removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, e.handleUpdate = function () {
      this._adjustDialog();
    }, e._getConfig = function (t) {
      return t = a({}, Ht, t), l.typeCheckConfig("modal", t, Mt), t;
    }, e._triggerBackdropTransition = function () {
      var t = this;

      if ("static" === this._config.backdrop) {
        var e = i["default"].Event("hidePrevented.bs.modal");
        if (i["default"](this._element).trigger(e), e.isDefaultPrevented()) return;
        var n = this._element.scrollHeight > document.documentElement.clientHeight;
        n || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
        var o = l.getTransitionDurationFromElement(this._dialog);
        i["default"](this._element).off(l.TRANSITION_END), i["default"](this._element).one(l.TRANSITION_END, function () {
          t._element.classList.remove("modal-static"), n || i["default"](t._element).one(l.TRANSITION_END, function () {
            t._element.style.overflowY = "";
          }).emulateTransitionEnd(t._element, o);
        }).emulateTransitionEnd(o), this._element.focus();
      } else this.hide();
    }, e._showElement = function (t) {
      var e = this,
          n = i["default"](this._element).hasClass("fade"),
          o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), i["default"](this._dialog).hasClass("modal-dialog-scrollable") && o ? o.scrollTop = 0 : this._element.scrollTop = 0, n && l.reflow(this._element), i["default"](this._element).addClass("show"), this._config.focus && this._enforceFocus();

      var r = i["default"].Event("shown.bs.modal", {
        relatedTarget: t
      }),
          a = function a() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, i["default"](e._element).trigger(r);
      };

      if (n) {
        var s = l.getTransitionDurationFromElement(this._dialog);
        i["default"](this._dialog).one(l.TRANSITION_END, a).emulateTransitionEnd(s);
      } else a();
    }, e._enforceFocus = function () {
      var t = this;
      i["default"](document).off("focusin.bs.modal").on("focusin.bs.modal", function (e) {
        document !== e.target && t._element !== e.target && 0 === i["default"](t._element).has(e.target).length && t._element.focus();
      });
    }, e._setEscapeEvent = function () {
      var t = this;
      this._isShown ? i["default"](this._element).on("keydown.dismiss.bs.modal", function (e) {
        t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition();
      }) : this._isShown || i["default"](this._element).off("keydown.dismiss.bs.modal");
    }, e._setResizeEvent = function () {
      var t = this;
      this._isShown ? i["default"](window).on("resize.bs.modal", function (e) {
        return t.handleUpdate(e);
      }) : i["default"](window).off("resize.bs.modal");
    }, e._hideModal = function () {
      var t = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () {
        i["default"](document.body).removeClass("modal-open"), t._resetAdjustments(), t._resetScrollbar(), i["default"](t._element).trigger("hidden.bs.modal");
      });
    }, e._removeBackdrop = function () {
      this._backdrop && (i["default"](this._backdrop).remove(), this._backdrop = null);
    }, e._showBackdrop = function (t) {
      var e = this,
          n = i["default"](this._element).hasClass("fade") ? "fade" : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), i["default"](this._backdrop).appendTo(document.body), i["default"](this._element).on("click.dismiss.bs.modal", function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && e._triggerBackdropTransition();
        }), n && l.reflow(this._backdrop), i["default"](this._backdrop).addClass("show"), !t) return;
        if (!n) return void t();
        var o = l.getTransitionDurationFromElement(this._backdrop);
        i["default"](this._backdrop).one(l.TRANSITION_END, t).emulateTransitionEnd(o);
      } else if (!this._isShown && this._backdrop) {
        i["default"](this._backdrop).removeClass("show");

        var r = function r() {
          e._removeBackdrop(), t && t();
        };

        if (i["default"](this._element).hasClass("fade")) {
          var a = l.getTransitionDurationFromElement(this._backdrop);
          i["default"](this._backdrop).one(l.TRANSITION_END, r).emulateTransitionEnd(a);
        } else r();
      } else t && t();
    }, e._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, e._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, e._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, e._setScrollbar = function () {
      var t = this;

      if (this._isBodyOverflowing) {
        var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
            n = [].slice.call(document.querySelectorAll(".sticky-top"));
        i["default"](e).each(function (e, n) {
          var o = n.style.paddingRight,
              r = i["default"](n).css("padding-right");
          i["default"](n).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
        }), i["default"](n).each(function (e, n) {
          var o = n.style.marginRight,
              r = i["default"](n).css("margin-right");
          i["default"](n).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px");
        });
        var o = document.body.style.paddingRight,
            r = i["default"](document.body).css("padding-right");
        i["default"](document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px");
      }

      i["default"](document.body).addClass("modal-open");
    }, e._resetScrollbar = function () {
      var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
      i["default"](t).each(function (t, e) {
        var n = i["default"](e).data("padding-right");
        i["default"](e).removeData("padding-right"), e.style.paddingRight = n || "";
      });
      var e = [].slice.call(document.querySelectorAll(".sticky-top"));
      i["default"](e).each(function (t, e) {
        var n = i["default"](e).data("margin-right");
        "undefined" != typeof n && i["default"](e).css("margin-right", n).removeData("margin-right");
      });
      var n = i["default"](document.body).data("padding-right");
      i["default"](document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
    }, e._getScrollbarWidth = function () {
      var t = document.createElement("div");
      t.className = "modal-scrollbar-measure", document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }, t._jQueryInterface = function (e, n) {
      return this.each(function () {
        var o = i["default"](this).data("bs.modal"),
            r = a({}, Ht, i["default"](this).data(), "object" == _typeof(e) && e ? e : {});

        if (o || (o = new t(this, r), i["default"](this).data("bs.modal", o)), "string" == typeof e) {
          if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
          o[e](n);
        } else r.show && o.show(n);
      });
    }, r(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.5.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return Ht;
      }
    }]), t;
  }();

  i["default"](document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
    var e,
        n = this,
        o = l.getSelectorFromElement(this);
    o && (e = document.querySelector(o));
    var r = i["default"](e).data("bs.modal") ? "toggle" : a({}, i["default"](e).data(), i["default"](this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
    var s = i["default"](e).one("show.bs.modal", function (t) {
      t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
        i["default"](n).is(":visible") && n.focus();
      });
    });

    Bt._jQueryInterface.call(i["default"](e), r, this);
  }), i["default"].fn.modal = Bt._jQueryInterface, i["default"].fn.modal.Constructor = Bt, i["default"].fn.modal.noConflict = function () {
    return i["default"].fn.modal = Rt, Bt._jQueryInterface;
  };
  var qt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      Qt = {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  },
      Wt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      Ut = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function Vt(t, e, n) {
    if (0 === t.length) return t;
    if (n && "function" == typeof n) return n(t);

    for (var i = new window.DOMParser().parseFromString(t, "text/html"), o = Object.keys(e), r = [].slice.call(i.body.querySelectorAll("*")), a = function a(t, n) {
      var i = r[t],
          a = i.nodeName.toLowerCase();
      if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
      var s = [].slice.call(i.attributes),
          l = [].concat(e["*"] || [], e[a] || []);
      s.forEach(function (t) {
        (function (t, e) {
          var n = t.nodeName.toLowerCase();
          if (-1 !== e.indexOf(n)) return -1 === qt.indexOf(n) || Boolean(t.nodeValue.match(Wt) || t.nodeValue.match(Ut));

          for (var i = e.filter(function (t) {
            return t instanceof RegExp;
          }), o = 0, r = i.length; o < r; o++) {
            if (n.match(i[o])) return !0;
          }

          return !1;
        })(t, l) || i.removeAttribute(t.nodeName);
      });
    }, s = 0, l = r.length; s < l; s++) {
      a(s);
    }

    return i.body.innerHTML;
  }

  var Yt = "tooltip",
      zt = i["default"].fn[Yt],
      Xt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      Kt = ["sanitize", "whiteList", "sanitizeFn"],
      Gt = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(number|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacement: "(string|array)",
    boundary: "(string|element)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    whiteList: "object",
    popperConfig: "(null|object)"
  },
      $t = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left"
  },
      Jt = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: 0,
    container: !1,
    fallbackPlacement: "flip",
    boundary: "scrollParent",
    sanitize: !0,
    sanitizeFn: null,
    whiteList: Qt,
    popperConfig: null
  },
      Zt = {
    HIDE: "hide.bs.tooltip",
    HIDDEN: "hidden.bs.tooltip",
    SHOW: "show.bs.tooltip",
    SHOWN: "shown.bs.tooltip",
    INSERTED: "inserted.bs.tooltip",
    CLICK: "click.bs.tooltip",
    FOCUSIN: "focusin.bs.tooltip",
    FOCUSOUT: "focusout.bs.tooltip",
    MOUSEENTER: "mouseenter.bs.tooltip",
    MOUSELEAVE: "mouseleave.bs.tooltip"
  },
      te = function () {
    function t(t, e) {
      if ("undefined" == typeof It) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }

    var e = t.prototype;
    return e.enable = function () {
      this._isEnabled = !0;
    }, e.disable = function () {
      this._isEnabled = !1;
    }, e.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, e.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = i["default"](t.currentTarget).data(e);
        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), i["default"](t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (i["default"](this.getTipElement()).hasClass("show")) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, e.dispose = function () {
      clearTimeout(this._timeout), i["default"].removeData(this.element, this.constructor.DATA_KEY), i["default"](this.element).off(this.constructor.EVENT_KEY), i["default"](this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && i["default"](this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, e.show = function () {
      var t = this;
      if ("none" === i["default"](this.element).css("display")) throw new Error("Please use show on visible elements");
      var e = i["default"].Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        i["default"](this.element).trigger(e);
        var n = l.findShadowRoot(this.element),
            o = i["default"].contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
        if (e.isDefaultPrevented() || !o) return;
        var r = this.getTipElement(),
            a = l.getUID(this.constructor.NAME);
        r.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && i["default"](r).addClass("fade");

        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
            u = this._getAttachment(s);

        this.addAttachmentClass(u);

        var f = this._getContainer();

        i["default"](r).data(this.constructor.DATA_KEY, this), i["default"].contains(this.element.ownerDocument.documentElement, this.tip) || i["default"](r).appendTo(f), i["default"](this.element).trigger(this.constructor.Event.INSERTED), this._popper = new It(this.element, r, this._getPopperConfig(u)), i["default"](r).addClass("show"), "ontouchstart" in document.documentElement && i["default"](document.body).children().on("mouseover", null, i["default"].noop);

        var d = function d() {
          t.config.animation && t._fixTransition();
          var e = t._hoverState;
          t._hoverState = null, i["default"](t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t);
        };

        if (i["default"](this.tip).hasClass("fade")) {
          var c = l.getTransitionDurationFromElement(this.tip);
          i["default"](this.tip).one(l.TRANSITION_END, d).emulateTransitionEnd(c);
        } else d();
      }
    }, e.hide = function (t) {
      var e = this,
          n = this.getTipElement(),
          o = i["default"].Event(this.constructor.Event.HIDE),
          r = function r() {
        "show" !== e._hoverState && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), i["default"](e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
      };

      if (i["default"](this.element).trigger(o), !o.isDefaultPrevented()) {
        if (i["default"](n).removeClass("show"), "ontouchstart" in document.documentElement && i["default"](document.body).children().off("mouseover", null, i["default"].noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, i["default"](this.tip).hasClass("fade")) {
          var a = l.getTransitionDurationFromElement(n);
          i["default"](n).one(l.TRANSITION_END, r).emulateTransitionEnd(a);
        } else r();

        this._hoverState = "";
      }
    }, e.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, e.isWithContent = function () {
      return Boolean(this.getTitle());
    }, e.addAttachmentClass = function (t) {
      i["default"](this.getTipElement()).addClass("bs-tooltip-" + t);
    }, e.getTipElement = function () {
      return this.tip = this.tip || i["default"](this.config.template)[0], this.tip;
    }, e.setContent = function () {
      var t = this.getTipElement();
      this.setElementContent(i["default"](t.querySelectorAll(".tooltip-inner")), this.getTitle()), i["default"](t).removeClass("fade show");
    }, e.setElementContent = function (t, e) {
      "object" != _typeof(e) || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Vt(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? i["default"](e).parent().is(t) || t.empty().append(e) : t.text(i["default"](e).text());
    }, e.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");
      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, e._getPopperConfig = function (t) {
      var e = this;
      return a({}, {
        placement: t,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: ".arrow"
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(t) {
          t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
        },
        onUpdate: function onUpdate(t) {
          return e._handlePopperPlacementChange(t);
        }
      }, this.config.popperConfig);
    }, e._getOffset = function () {
      var t = this,
          e = {};
      return "function" == typeof this.config.offset ? e.fn = function (e) {
        return e.offsets = a({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e;
      } : e.offset = this.config.offset, e;
    }, e._getContainer = function () {
      return !1 === this.config.container ? document.body : l.isElement(this.config.container) ? i["default"](this.config.container) : i["default"](document).find(this.config.container);
    }, e._getAttachment = function (t) {
      return $t[t.toUpperCase()];
    }, e._setListeners = function () {
      var t = this;
      this.config.trigger.split(" ").forEach(function (e) {
        if ("click" === e) i["default"](t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
          return t.toggle(e);
        });else if ("manual" !== e) {
          var n = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
              o = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
          i["default"](t.element).on(n, t.config.selector, function (e) {
            return t._enter(e);
          }).on(o, t.config.selector, function (e) {
            return t._leave(e);
          });
        }
      }), this._hideModalHandler = function () {
        t.element && t.hide();
      }, i["default"](this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = a({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, e._fixTitle = function () {
      var t = _typeof(this.element.getAttribute("data-original-title"));

      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, e._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || i["default"](t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), i["default"](t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), i["default"](e.getTipElement()).hasClass("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        "show" === e._hoverState && e.show();
      }, e.config.delay.show) : e.show());
    }, e._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || i["default"](t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), i["default"](t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        "out" === e._hoverState && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, e._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }

      return !1;
    }, e._getConfig = function (t) {
      var e = i["default"](this.element).data();
      return Object.keys(e).forEach(function (t) {
        -1 !== Kt.indexOf(t) && delete e[t];
      }), "number" == typeof (t = a({}, this.constructor.Default, e, "object" == _typeof(t) && t ? t : {})).delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), l.typeCheckConfig(Yt, t, this.constructor.DefaultType), t.sanitize && (t.template = Vt(t.template, t.whiteList, t.sanitizeFn)), t;
    }, e._getDelegateConfig = function () {
      var t = {};
      if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }
      return t;
    }, e._cleanTipClass = function () {
      var t = i["default"](this.getTipElement()),
          e = t.attr("class").match(Xt);
      null !== e && e.length && t.removeClass(e.join(""));
    }, e._handlePopperPlacementChange = function (t) {
      this.tip = t.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, e._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;
      null === t.getAttribute("x-placement") && (i["default"](t).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = i["default"](this),
            o = n.data("bs.tooltip"),
            r = "object" == _typeof(e) && e;

        if ((o || !/dispose|hide/.test(e)) && (o || (o = new t(this, r), n.data("bs.tooltip", o)), "string" == typeof e)) {
          if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
          o[e]();
        }
      });
    }, r(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.5.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return Jt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Yt;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.tooltip";
      }
    }, {
      key: "Event",
      get: function get() {
        return Zt;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".bs.tooltip";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Gt;
      }
    }]), t;
  }();

  i["default"].fn[Yt] = te._jQueryInterface, i["default"].fn[Yt].Constructor = te, i["default"].fn[Yt].noConflict = function () {
    return i["default"].fn[Yt] = zt, te._jQueryInterface;
  };

  var ee = "popover",
      ne = i["default"].fn[ee],
      ie = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      oe = a({}, te.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      re = a({}, te.DefaultType, {
    content: "(string|element|function)"
  }),
      ae = {
    HIDE: "hide.bs.popover",
    HIDDEN: "hidden.bs.popover",
    SHOW: "show.bs.popover",
    SHOWN: "shown.bs.popover",
    INSERTED: "inserted.bs.popover",
    CLICK: "click.bs.popover",
    FOCUSIN: "focusin.bs.popover",
    FOCUSOUT: "focusout.bs.popover",
    MOUSEENTER: "mouseenter.bs.popover",
    MOUSELEAVE: "mouseleave.bs.popover"
  },
      se = function (t) {
    var e, n;

    function o() {
      return t.apply(this, arguments) || this;
    }

    n = t, (e = o).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n;
    var a = o.prototype;
    return a.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, a.addAttachmentClass = function (t) {
      i["default"](this.getTipElement()).addClass("bs-popover-" + t);
    }, a.getTipElement = function () {
      return this.tip = this.tip || i["default"](this.config.template)[0], this.tip;
    }, a.setContent = function () {
      var t = i["default"](this.getTipElement());
      this.setElementContent(t.find(".popover-header"), this.getTitle());

      var e = this._getContent();

      "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show");
    }, a._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, a._cleanTipClass = function () {
      var t = i["default"](this.getTipElement()),
          e = t.attr("class").match(ie);
      null !== e && e.length > 0 && t.removeClass(e.join(""));
    }, o._jQueryInterface = function (t) {
      return this.each(function () {
        var e = i["default"](this).data("bs.popover"),
            n = "object" == _typeof(t) ? t : null;

        if ((e || !/dispose|hide/.test(t)) && (e || (e = new o(this, n), i["default"](this).data("bs.popover", e)), "string" == typeof t)) {
          if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
          e[t]();
        }
      });
    }, r(o, null, [{
      key: "VERSION",
      get: function get() {
        return "4.5.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return oe;
      }
    }, {
      key: "NAME",
      get: function get() {
        return ee;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.popover";
      }
    }, {
      key: "Event",
      get: function get() {
        return ae;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".bs.popover";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return re;
      }
    }]), o;
  }(te);

  i["default"].fn[ee] = se._jQueryInterface, i["default"].fn[ee].Constructor = se, i["default"].fn[ee].noConflict = function () {
    return i["default"].fn[ee] = ne, se._jQueryInterface;
  };

  var le = "scrollspy",
      ue = i["default"].fn[le],
      fe = {
    offset: 10,
    method: "auto",
    target: ""
  },
      de = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      ce = function () {
    function t(t, e) {
      var n = this;
      this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, i["default"](this._scrollElement).on("scroll.bs.scrollspy", function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }

    var e = t.prototype;
    return e.refresh = function () {
      var t = this,
          e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
          n = "auto" === this._config.method ? e : this._config.method,
          o = "position" === n ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
        var e,
            r = l.getSelectorFromElement(t);

        if (r && (e = document.querySelector(r)), e) {
          var a = e.getBoundingClientRect();
          if (a.width || a.height) return [i["default"](e)[n]().top + o, r];
        }

        return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (e) {
        t._offsets.push(e[0]), t._targets.push(e[1]);
      });
    }, e.dispose = function () {
      i["default"].removeData(this._element, "bs.scrollspy"), i["default"](this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, e._getConfig = function (t) {
      if ("string" != typeof (t = a({}, fe, "object" == _typeof(t) && t ? t : {})).target && l.isElement(t.target)) {
        var e = i["default"](t.target).attr("id");
        e || (e = l.getUID(le), i["default"](t.target).attr("id", e)), t.target = "#" + e;
      }

      return l.typeCheckConfig(le, t, de), t;
    }, e._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, e._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, e._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, e._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), t >= n) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

        for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, e._activate = function (t) {
      this._activeTarget = t, this._clear();

      var e = this._selector.split(",").map(function (e) {
        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
      }),
          n = i["default"]([].slice.call(document.querySelectorAll(e.join(","))));

      n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass("active"), n.addClass("active")) : (n.addClass("active"), n.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), n.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), i["default"](this._scrollElement).trigger("activate.bs.scrollspy", {
        relatedTarget: t
      });
    }, e._clear = function () {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
        return t.classList.contains("active");
      }).forEach(function (t) {
        return t.classList.remove("active");
      });
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = i["default"](this).data("bs.scrollspy");

        if (n || (n = new t(this, "object" == _typeof(e) && e), i["default"](this).data("bs.scrollspy", n)), "string" == typeof e) {
          if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
          n[e]();
        }
      });
    }, r(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.5.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return fe;
      }
    }]), t;
  }();

  i["default"](window).on("load.bs.scrollspy.data-api", function () {
    for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--;) {
      var n = i["default"](t[e]);

      ce._jQueryInterface.call(n, n.data());
    }
  }), i["default"].fn[le] = ce._jQueryInterface, i["default"].fn[le].Constructor = ce, i["default"].fn[le].noConflict = function () {
    return i["default"].fn[le] = ue, ce._jQueryInterface;
  };

  var he = i["default"].fn.tab,
      pe = function () {
    function t(t) {
      this._element = t;
    }

    var e = t.prototype;
    return e.show = function () {
      var t = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && i["default"](this._element).hasClass("active") || i["default"](this._element).hasClass("disabled"))) {
        var e,
            n,
            o = i["default"](this._element).closest(".nav, .list-group")[0],
            r = l.getSelectorFromElement(this._element);

        if (o) {
          var a = "UL" === o.nodeName || "OL" === o.nodeName ? "> li > .active" : ".active";
          n = (n = i["default"].makeArray(i["default"](o).find(a)))[n.length - 1];
        }

        var s = i["default"].Event("hide.bs.tab", {
          relatedTarget: this._element
        }),
            u = i["default"].Event("show.bs.tab", {
          relatedTarget: n
        });

        if (n && i["default"](n).trigger(s), i["default"](this._element).trigger(u), !u.isDefaultPrevented() && !s.isDefaultPrevented()) {
          r && (e = document.querySelector(r)), this._activate(this._element, o);

          var f = function f() {
            var e = i["default"].Event("hidden.bs.tab", {
              relatedTarget: t._element
            }),
                o = i["default"].Event("shown.bs.tab", {
              relatedTarget: n
            });
            i["default"](n).trigger(e), i["default"](t._element).trigger(o);
          };

          e ? this._activate(e, e.parentNode, f) : f();
        }
      }
    }, e.dispose = function () {
      i["default"].removeData(this._element, "bs.tab"), this._element = null;
    }, e._activate = function (t, e, n) {
      var o = this,
          r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? i["default"](e).children(".active") : i["default"](e).find("> li > .active"))[0],
          a = n && r && i["default"](r).hasClass("fade"),
          s = function s() {
        return o._transitionComplete(t, r, n);
      };

      if (r && a) {
        var u = l.getTransitionDurationFromElement(r);
        i["default"](r).removeClass("show").one(l.TRANSITION_END, s).emulateTransitionEnd(u);
      } else s();
    }, e._transitionComplete = function (t, e, n) {
      if (e) {
        i["default"](e).removeClass("active");
        var o = i["default"](e.parentNode).find("> .dropdown-menu .active")[0];
        o && i["default"](o).removeClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }

      if (i["default"](t).addClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), l.reflow(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && i["default"](t.parentNode).hasClass("dropdown-menu")) {
        var r = i["default"](t).closest(".dropdown")[0];

        if (r) {
          var a = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
          i["default"](a).addClass("active");
        }

        t.setAttribute("aria-expanded", !0);
      }

      n && n();
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = i["default"](this),
            o = n.data("bs.tab");

        if (o || (o = new t(this), n.data("bs.tab", o)), "string" == typeof e) {
          if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
          o[e]();
        }
      });
    }, r(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.5.3";
      }
    }]), t;
  }();

  i["default"](document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
    t.preventDefault(), pe._jQueryInterface.call(i["default"](this), "show");
  }), i["default"].fn.tab = pe._jQueryInterface, i["default"].fn.tab.Constructor = pe, i["default"].fn.tab.noConflict = function () {
    return i["default"].fn.tab = he, pe._jQueryInterface;
  };

  var me = i["default"].fn.toast,
      ge = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      ve = {
    animation: !0,
    autohide: !0,
    delay: 500
  },
      _e = function () {
    function t(t, e) {
      this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
    }

    var e = t.prototype;
    return e.show = function () {
      var t = this,
          e = i["default"].Event("show.bs.toast");

      if (i["default"](this._element).trigger(e), !e.isDefaultPrevented()) {
        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");

        var n = function n() {
          t._element.classList.remove("showing"), t._element.classList.add("show"), i["default"](t._element).trigger("shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout(function () {
            t.hide();
          }, t._config.delay));
        };

        if (this._element.classList.remove("hide"), l.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
          var o = l.getTransitionDurationFromElement(this._element);
          i["default"](this._element).one(l.TRANSITION_END, n).emulateTransitionEnd(o);
        } else n();
      }
    }, e.hide = function () {
      if (this._element.classList.contains("show")) {
        var t = i["default"].Event("hide.bs.toast");
        i["default"](this._element).trigger(t), t.isDefaultPrevented() || this._close();
      }
    }, e.dispose = function () {
      this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), i["default"](this._element).off("click.dismiss.bs.toast"), i["default"].removeData(this._element, "bs.toast"), this._element = null, this._config = null;
    }, e._getConfig = function (t) {
      return t = a({}, ve, i["default"](this._element).data(), "object" == _typeof(t) && t ? t : {}), l.typeCheckConfig("toast", t, this.constructor.DefaultType), t;
    }, e._setListeners = function () {
      var t = this;
      i["default"](this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function () {
        return t.hide();
      });
    }, e._close = function () {
      var t = this,
          e = function e() {
        t._element.classList.add("hide"), i["default"](t._element).trigger("hidden.bs.toast");
      };

      if (this._element.classList.remove("show"), this._config.animation) {
        var n = l.getTransitionDurationFromElement(this._element);
        i["default"](this._element).one(l.TRANSITION_END, e).emulateTransitionEnd(n);
      } else e();
    }, e._clearTimeout = function () {
      clearTimeout(this._timeout), this._timeout = null;
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = i["default"](this),
            o = n.data("bs.toast");

        if (o || (o = new t(this, "object" == _typeof(e) && e), n.data("bs.toast", o)), "string" == typeof e) {
          if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
          o[e](this);
        }
      });
    }, r(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.5.3";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ge;
      }
    }, {
      key: "Default",
      get: function get() {
        return ve;
      }
    }]), t;
  }();

  i["default"].fn.toast = _e._jQueryInterface, i["default"].fn.toast.Constructor = _e, i["default"].fn.toast.noConflict = function () {
    return i["default"].fn.toast = me, _e._jQueryInterface;
  }, t.Alert = d, t.Button = h, t.Carousel = y, t.Collapse = S, t.Dropdown = Ft, t.Modal = Bt, t.Popover = se, t.Scrollspy = ce, t.Tab = pe, t.Toast = _e, t.Tooltip = te, t.Util = l, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Bootstrap-select v1.13.14 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2020 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */
!function (e, t) {
  void 0 === e && void 0 !== window && (e = window), "function" == typeof define && define.amd ? define(["jquery"], function (e) {
    return t(e);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery);
}(void 0, function (e) {
  !function (z) {
    "use strict";

    var d = ["sanitize", "whiteList", "sanitizeFn"],
        r = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        e = {
      "*": ["class", "dir", "id", "lang", "role", "tabindex", "style", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
        l = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        a = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function v(e, t) {
      var i = e.nodeName.toLowerCase();
      if (-1 !== z.inArray(i, t)) return -1 === z.inArray(i, r) || Boolean(e.nodeValue.match(l) || e.nodeValue.match(a));

      for (var s = z(t).filter(function (e, t) {
        return t instanceof RegExp;
      }), n = 0, o = s.length; n < o; n++) {
        if (i.match(s[n])) return !0;
      }

      return !1;
    }

    function P(e, t, i) {
      if (i && "function" == typeof i) return i(e);

      for (var s = Object.keys(t), n = 0, o = e.length; n < o; n++) {
        for (var r = e[n].querySelectorAll("*"), l = 0, a = r.length; l < a; l++) {
          var c = r[l],
              d = c.nodeName.toLowerCase();
          if (-1 !== s.indexOf(d)) for (var h = [].slice.call(c.attributes), p = [].concat(t["*"] || [], t[d] || []), u = 0, f = h.length; u < f; u++) {
            var m = h[u];
            v(m, p) || c.removeAttribute(m.nodeName);
          } else c.parentNode.removeChild(c);
        }
      }
    }

    "classList" in document.createElement("_") || function (e) {
      if ("Element" in e) {
        var t = "classList",
            i = "prototype",
            s = e.Element[i],
            n = Object,
            o = function o() {
          var i = z(this);
          return {
            add: function add(e) {
              return e = Array.prototype.slice.call(arguments).join(" "), i.addClass(e);
            },
            remove: function remove(e) {
              return e = Array.prototype.slice.call(arguments).join(" "), i.removeClass(e);
            },
            toggle: function toggle(e, t) {
              return i.toggleClass(e, t);
            },
            contains: function contains(e) {
              return i.hasClass(e);
            }
          };
        };

        if (n.defineProperty) {
          var r = {
            get: o,
            enumerable: !0,
            configurable: !0
          };

          try {
            n.defineProperty(s, t, r);
          } catch (e) {
            void 0 !== e.number && -2146823252 !== e.number || (r.enumerable = !1, n.defineProperty(s, t, r));
          }
        } else n[i].__defineGetter__ && s.__defineGetter__(t, o);
      }
    }(window);
    var t,
        c,
        i = document.createElement("_");

    if (i.classList.add("c1", "c2"), !i.classList.contains("c2")) {
      var s = DOMTokenList.prototype.add,
          n = DOMTokenList.prototype.remove;
      DOMTokenList.prototype.add = function () {
        Array.prototype.forEach.call(arguments, s.bind(this));
      }, DOMTokenList.prototype.remove = function () {
        Array.prototype.forEach.call(arguments, n.bind(this));
      };
    }

    if (i.classList.toggle("c3", !1), i.classList.contains("c3")) {
      var o = DOMTokenList.prototype.toggle;

      DOMTokenList.prototype.toggle = function (e, t) {
        return 1 in arguments && !this.contains(e) == !t ? t : o.call(this, e);
      };
    }

    function h(e) {
      if (null == this) throw new TypeError();
      var t = String(this);
      if (e && "[object RegExp]" == c.call(e)) throw new TypeError();
      var i = t.length,
          s = String(e),
          n = s.length,
          o = 1 < arguments.length ? arguments[1] : void 0,
          r = o ? Number(o) : 0;
      r != r && (r = 0);
      var l = Math.min(Math.max(r, 0), i);
      if (i < n + l) return !1;

      for (var a = -1; ++a < n;) {
        if (t.charCodeAt(l + a) != s.charCodeAt(a)) return !1;
      }

      return !0;
    }

    function O(e, t) {
      var i,
          s = e.selectedOptions,
          n = [];

      if (t) {
        for (var o = 0, r = s.length; o < r; o++) {
          (i = s[o]).disabled || "OPTGROUP" === i.parentNode.tagName && i.parentNode.disabled || n.push(i);
        }

        return n;
      }

      return s;
    }

    function T(e, t) {
      for (var i, s = [], n = t || e.selectedOptions, o = 0, r = n.length; o < r; o++) {
        (i = n[o]).disabled || "OPTGROUP" === i.parentNode.tagName && i.parentNode.disabled || s.push(i.value);
      }

      return e.multiple ? s : s.length ? s[0] : null;
    }

    i = null, String.prototype.startsWith || (t = function () {
      try {
        var e = {},
            t = Object.defineProperty,
            i = t(e, e, e) && t;
      } catch (e) {}

      return i;
    }(), c = {}.toString, t ? t(String.prototype, "startsWith", {
      value: h,
      configurable: !0,
      writable: !0
    }) : String.prototype.startsWith = h), Object.keys || (Object.keys = function (e, t, i) {
      for (t in i = [], e) {
        i.hasOwnProperty.call(e, t) && i.push(t);
      }

      return i;
    }), HTMLSelectElement && !HTMLSelectElement.prototype.hasOwnProperty("selectedOptions") && Object.defineProperty(HTMLSelectElement.prototype, "selectedOptions", {
      get: function get() {
        return this.querySelectorAll(":checked");
      }
    });
    var p = {
      useDefault: !1,
      _set: z.valHooks.select.set
    };

    z.valHooks.select.set = function (e, t) {
      return t && !p.useDefault && z(e).data("selected", !0), p._set.apply(this, arguments);
    };

    var A = null,
        u = function () {
      try {
        return new Event("change"), !0;
      } catch (e) {
        return !1;
      }
    }();

    function k(e, t, i, s) {
      for (var n = ["display", "subtext", "tokens"], o = !1, r = 0; r < n.length; r++) {
        var l = n[r],
            a = e[l];
        if (a && (a = a.toString(), "display" === l && (a = a.replace(/<[^>]+>/g, "")), s && (a = w(a)), a = a.toUpperCase(), o = "contains" === i ? 0 <= a.indexOf(t) : a.startsWith(t))) break;
      }

      return o;
    }

    function L(e) {
      return parseInt(e, 10) || 0;
    }

    z.fn.triggerNative = function (e) {
      var t,
          i = this[0];
      i.dispatchEvent ? (u ? t = new Event(e, {
        bubbles: !0
      }) : (t = document.createEvent("Event")).initEvent(e, !0, !1), i.dispatchEvent(t)) : i.fireEvent ? ((t = document.createEventObject()).eventType = e, i.fireEvent("on" + e, t)) : this.trigger(e);
    };

    var f = {
      "\xc0": "A",
      "\xc1": "A",
      "\xc2": "A",
      "\xc3": "A",
      "\xc4": "A",
      "\xc5": "A",
      "\xe0": "a",
      "\xe1": "a",
      "\xe2": "a",
      "\xe3": "a",
      "\xe4": "a",
      "\xe5": "a",
      "\xc7": "C",
      "\xe7": "c",
      "\xd0": "D",
      "\xf0": "d",
      "\xc8": "E",
      "\xc9": "E",
      "\xca": "E",
      "\xcb": "E",
      "\xe8": "e",
      "\xe9": "e",
      "\xea": "e",
      "\xeb": "e",
      "\xcc": "I",
      "\xcd": "I",
      "\xce": "I",
      "\xcf": "I",
      "\xec": "i",
      "\xed": "i",
      "\xee": "i",
      "\xef": "i",
      "\xd1": "N",
      "\xf1": "n",
      "\xd2": "O",
      "\xd3": "O",
      "\xd4": "O",
      "\xd5": "O",
      "\xd6": "O",
      "\xd8": "O",
      "\xf2": "o",
      "\xf3": "o",
      "\xf4": "o",
      "\xf5": "o",
      "\xf6": "o",
      "\xf8": "o",
      "\xd9": "U",
      "\xda": "U",
      "\xdb": "U",
      "\xdc": "U",
      "\xf9": "u",
      "\xfa": "u",
      "\xfb": "u",
      "\xfc": "u",
      "\xdd": "Y",
      "\xfd": "y",
      "\xff": "y",
      "\xc6": "Ae",
      "\xe6": "ae",
      "\xde": "Th",
      "\xfe": "th",
      "\xdf": "ss",
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "s"
    },
        m = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        g = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]", "g");

    function b(e) {
      return f[e];
    }

    function w(e) {
      return (e = e.toString()) && e.replace(m, b).replace(g, "");
    }

    var I,
        x,
        y,
        $,
        S = (I = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;"
    }, x = "(?:" + Object.keys(I).join("|") + ")", y = RegExp(x), $ = RegExp(x, "g"), function (e) {
      return e = null == e ? "" : "" + e, y.test(e) ? e.replace($, E) : e;
    });

    function E(e) {
      return I[e];
    }

    var C = {
      32: " ",
      48: "0",
      49: "1",
      50: "2",
      51: "3",
      52: "4",
      53: "5",
      54: "6",
      55: "7",
      56: "8",
      57: "9",
      59: ";",
      65: "A",
      66: "B",
      67: "C",
      68: "D",
      69: "E",
      70: "F",
      71: "G",
      72: "H",
      73: "I",
      74: "J",
      75: "K",
      76: "L",
      77: "M",
      78: "N",
      79: "O",
      80: "P",
      81: "Q",
      82: "R",
      83: "S",
      84: "T",
      85: "U",
      86: "V",
      87: "W",
      88: "X",
      89: "Y",
      90: "Z",
      96: "0",
      97: "1",
      98: "2",
      99: "3",
      100: "4",
      101: "5",
      102: "6",
      103: "7",
      104: "8",
      105: "9"
    },
        N = 27,
        D = 13,
        H = 32,
        W = 9,
        B = 38,
        M = 40,
        R = {
      success: !1,
      major: "3"
    };

    try {
      R.full = (z.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split("."), R.major = R.full[0], R.success = !0;
    } catch (e) {}

    var U = 0,
        j = ".bs.select",
        V = {
      DISABLED: "disabled",
      DIVIDER: "divider",
      SHOW: "open",
      DROPUP: "dropup",
      MENU: "dropdown-menu",
      MENURIGHT: "dropdown-menu-right",
      MENULEFT: "dropdown-menu-left",
      BUTTONCLASS: "btn-default",
      POPOVERHEADER: "popover-title",
      ICONBASE: "glyphicon",
      TICKICON: "glyphicon-ok"
    },
        F = {
      MENU: "." + V.MENU
    },
        _ = {
      span: document.createElement("span"),
      i: document.createElement("i"),
      subtext: document.createElement("small"),
      a: document.createElement("a"),
      li: document.createElement("li"),
      whitespace: document.createTextNode("\xa0"),
      fragment: document.createDocumentFragment()
    };
    _.a.setAttribute("role", "option"), "4" === R.major && (_.a.className = "dropdown-item"), _.subtext.className = "text-muted", _.text = _.span.cloneNode(!1), _.text.className = "text", _.checkMark = _.span.cloneNode(!1);

    var G = new RegExp(B + "|" + M),
        q = new RegExp("^" + W + "$|" + N),
        K = {
      li: function li(e, t, i) {
        var s = _.li.cloneNode(!1);

        return e && (1 === e.nodeType || 11 === e.nodeType ? s.appendChild(e) : s.innerHTML = e), void 0 !== t && "" !== t && (s.className = t), null != i && s.classList.add("optgroup-" + i), s;
      },
      a: function a(e, t, i) {
        var s = _.a.cloneNode(!0);

        return e && (11 === e.nodeType ? s.appendChild(e) : s.insertAdjacentHTML("beforeend", e)), void 0 !== t && "" !== t && s.classList.add.apply(s.classList, t.split(" ")), i && s.setAttribute("style", i), s;
      },
      text: function text(e, t) {
        var i,
            s,
            n = _.text.cloneNode(!1);

        if (e.content) n.innerHTML = e.content;else {
          if (n.textContent = e.text, e.icon) {
            var o = _.whitespace.cloneNode(!1);

            (s = (!0 === t ? _.i : _.span).cloneNode(!1)).className = this.options.iconBase + " " + e.icon, _.fragment.appendChild(s), _.fragment.appendChild(o);
          }

          e.subtext && ((i = _.subtext.cloneNode(!1)).textContent = e.subtext, n.appendChild(i));
        }
        if (!0 === t) for (; 0 < n.childNodes.length;) {
          _.fragment.appendChild(n.childNodes[0]);
        } else _.fragment.appendChild(n);
        return _.fragment;
      },
      label: function label(e) {
        var t,
            i,
            s = _.text.cloneNode(!1);

        if (s.innerHTML = e.display, e.icon) {
          var n = _.whitespace.cloneNode(!1);

          (i = _.span.cloneNode(!1)).className = this.options.iconBase + " " + e.icon, _.fragment.appendChild(i), _.fragment.appendChild(n);
        }

        return e.subtext && ((t = _.subtext.cloneNode(!1)).textContent = e.subtext, s.appendChild(t)), _.fragment.appendChild(s), _.fragment;
      }
    },
        Y = function Y(e, t) {
      var i = this;
      p.useDefault || (z.valHooks.select.set = p._set, p.useDefault = !0), this.$element = z(e), this.$newElement = null, this.$button = null, this.$menu = null, this.options = t, this.selectpicker = {
        main: {},
        search: {},
        current: {},
        view: {},
        isSearching: !1,
        keydown: {
          keyHistory: "",
          resetKeyHistory: {
            start: function start() {
              return setTimeout(function () {
                i.selectpicker.keydown.keyHistory = "";
              }, 800);
            }
          }
        }
      }, this.sizeInfo = {}, null === this.options.title && (this.options.title = this.$element.attr("title"));
      var s = this.options.windowPadding;
      "number" == typeof s && (this.options.windowPadding = [s, s, s, s]), this.val = Y.prototype.val, this.render = Y.prototype.render, this.refresh = Y.prototype.refresh, this.setStyle = Y.prototype.setStyle, this.selectAll = Y.prototype.selectAll, this.deselectAll = Y.prototype.deselectAll, this.destroy = Y.prototype.destroy, this.remove = Y.prototype.remove, this.show = Y.prototype.show, this.hide = Y.prototype.hide, this.init();
    };

    function Z(e) {
      var l,
          a = arguments,
          c = e;

      if ([].shift.apply(a), !R.success) {
        try {
          R.full = (z.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split(".");
        } catch (e) {
          Y.BootstrapVersion ? R.full = Y.BootstrapVersion.split(" ")[0].split(".") : (R.full = [R.major, "0", "0"], console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.", e));
        }

        R.major = R.full[0], R.success = !0;
      }

      if ("4" === R.major) {
        var t = [];
        Y.DEFAULTS.style === V.BUTTONCLASS && t.push({
          name: "style",
          className: "BUTTONCLASS"
        }), Y.DEFAULTS.iconBase === V.ICONBASE && t.push({
          name: "iconBase",
          className: "ICONBASE"
        }), Y.DEFAULTS.tickIcon === V.TICKICON && t.push({
          name: "tickIcon",
          className: "TICKICON"
        }), V.DIVIDER = "dropdown-divider", V.SHOW = "show", V.BUTTONCLASS = "btn-light", V.POPOVERHEADER = "popover-header", V.ICONBASE = "", V.TICKICON = "bs-ok-default";

        for (var i = 0; i < t.length; i++) {
          e = t[i];
          Y.DEFAULTS[e.name] = V[e.className];
        }
      }

      var s = this.each(function () {
        var e = z(this);

        if (e.is("select")) {
          var t = e.data("selectpicker"),
              i = "object" == _typeof(c) && c;

          if (t) {
            if (i) for (var s in i) {
              i.hasOwnProperty(s) && (t.options[s] = i[s]);
            }
          } else {
            var n = e.data();

            for (var o in n) {
              n.hasOwnProperty(o) && -1 !== z.inArray(o, d) && delete n[o];
            }

            var r = z.extend({}, Y.DEFAULTS, z.fn.selectpicker.defaults || {}, n, i);
            r.template = z.extend({}, Y.DEFAULTS.template, z.fn.selectpicker.defaults ? z.fn.selectpicker.defaults.template : {}, n.template, i.template), e.data("selectpicker", t = new Y(this, r));
          }

          "string" == typeof c && (l = t[c] instanceof Function ? t[c].apply(t, a) : t.options[c]);
        }
      });
      return void 0 !== l ? l : s;
    }

    Y.VERSION = "1.13.14", Y.DEFAULTS = {
      noneSelectedText: "Nothing selected",
      noneResultsText: "No results matched {0}",
      countSelectedText: function countSelectedText(e, t) {
        return 1 == e ? "{0} item selected" : "{0} items selected";
      },
      maxOptionsText: function maxOptionsText(e, t) {
        return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"];
      },
      selectAllText: "Select All",
      deselectAllText: "Deselect All",
      doneButton: !1,
      doneButtonText: "Close",
      multipleSeparator: ", ",
      styleBase: "btn",
      style: V.BUTTONCLASS,
      size: "auto",
      title: null,
      selectedTextFormat: "values",
      width: !1,
      container: !1,
      hideDisabled: !1,
      showSubtext: !1,
      showIcon: !0,
      showContent: !0,
      dropupAuto: !0,
      header: !1,
      liveSearch: !1,
      liveSearchPlaceholder: null,
      liveSearchNormalize: !1,
      liveSearchStyle: "contains",
      actionsBox: !1,
      iconBase: V.ICONBASE,
      tickIcon: V.TICKICON,
      showTick: !1,
      template: {
        caret: '<span class="caret"></span>'
      },
      maxOptions: !1,
      mobile: !1,
      selectOnTab: !1,
      dropdownAlignRight: !1,
      windowPadding: 0,
      virtualScroll: 600,
      display: !1,
      sanitize: !0,
      sanitizeFn: null,
      whiteList: e
    }, Y.prototype = {
      constructor: Y,
      init: function init() {
        var i = this,
            e = this.$element.attr("id");
        U++, this.selectId = "bs-select-" + U, this.$element[0].classList.add("bs-select-hidden"), this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$element[0].classList.contains("show-tick") && (this.options.showTick = !0), this.$newElement = this.createDropdown(), this.buildData(), this.$element.after(this.$newElement).prependTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(F.MENU), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element[0].classList.remove("bs-select-hidden"), !0 === this.options.dropdownAlignRight && this.$menu[0].classList.add(V.MENURIGHT), void 0 !== e && this.$button.attr("data-id", e), this.checkDisabled(), this.clickListener(), this.options.liveSearch ? (this.liveSearchListener(), this.focusedParent = this.$searchbox[0]) : this.focusedParent = this.$menuInner[0], this.setStyle(), this.render(), this.setWidth(), this.options.container ? this.selectPosition() : this.$element.on("hide" + j, function () {
          if (i.isVirtual()) {
            var e = i.$menuInner[0],
                t = e.firstChild.cloneNode(!1);
            e.replaceChild(t, e.firstChild), e.scrollTop = 0;
          }
        }), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
          "hide.bs.dropdown": function hideBsDropdown(e) {
            i.$element.trigger("hide" + j, e);
          },
          "hidden.bs.dropdown": function hiddenBsDropdown(e) {
            i.$element.trigger("hidden" + j, e);
          },
          "show.bs.dropdown": function showBsDropdown(e) {
            i.$element.trigger("show" + j, e);
          },
          "shown.bs.dropdown": function shownBsDropdown(e) {
            i.$element.trigger("shown" + j, e);
          }
        }), i.$element[0].hasAttribute("required") && this.$element.on("invalid" + j, function () {
          i.$button[0].classList.add("bs-invalid"), i.$element.on("shown" + j + ".invalid", function () {
            i.$element.val(i.$element.val()).off("shown" + j + ".invalid");
          }).on("rendered" + j, function () {
            this.validity.valid && i.$button[0].classList.remove("bs-invalid"), i.$element.off("rendered" + j);
          }), i.$button.on("blur" + j, function () {
            i.$element.trigger("focus").trigger("blur"), i.$button.off("blur" + j);
          });
        }), setTimeout(function () {
          i.buildList(), i.$element.trigger("loaded" + j);
        });
      },
      createDropdown: function createDropdown() {
        var e = this.multiple || this.options.showTick ? " show-tick" : "",
            t = this.multiple ? ' aria-multiselectable="true"' : "",
            i = "",
            s = this.autofocus ? " autofocus" : "";
        R.major < 4 && this.$element.parent().hasClass("input-group") && (i = " input-group-btn");
        var n,
            o = "",
            r = "",
            l = "",
            a = "";
        return this.options.header && (o = '<div class="' + V.POPOVERHEADER + '"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>"), this.options.liveSearch && (r = '<div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + S(this.options.liveSearchPlaceholder) + '"') + ' role="combobox" aria-label="Search" aria-controls="' + this.selectId + '" aria-autocomplete="list"></div>'), this.multiple && this.options.actionsBox && (l = '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn ' + V.BUTTONCLASS + '">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn ' + V.BUTTONCLASS + '">' + this.options.deselectAllText + "</button></div></div>"), this.multiple && this.options.doneButton && (a = '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm ' + V.BUTTONCLASS + '">' + this.options.doneButtonText + "</button></div></div>"), n = '<div class="dropdown bootstrap-select' + e + i + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" ' + ("static" === this.options.display ? 'data-display="static"' : "") + 'data-toggle="dropdown"' + s + ' role="combobox" aria-owns="' + this.selectId + '" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>' + ("4" === R.major ? "" : '<span class="bs-caret">' + this.options.template.caret + "</span>") + '</button><div class="' + V.MENU + " " + ("4" === R.major ? "" : V.SHOW) + '">' + o + r + l + '<div class="inner ' + V.SHOW + '" role="listbox" id="' + this.selectId + '" tabindex="-1" ' + t + '><ul class="' + V.MENU + " inner " + ("4" === R.major ? V.SHOW : "") + '" role="presentation"></ul></div>' + a + "</div></div>", z(n);
      },
      setPositionData: function setPositionData() {
        this.selectpicker.view.canHighlight = [];

        for (var e = this.selectpicker.view.size = 0; e < this.selectpicker.current.data.length; e++) {
          var t = this.selectpicker.current.data[e],
              i = !0;
          "divider" === t.type ? (i = !1, t.height = this.sizeInfo.dividerHeight) : "optgroup-label" === t.type ? (i = !1, t.height = this.sizeInfo.dropdownHeaderHeight) : t.height = this.sizeInfo.liHeight, t.disabled && (i = !1), this.selectpicker.view.canHighlight.push(i), i && (this.selectpicker.view.size++, t.posinset = this.selectpicker.view.size), t.position = (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) + t.height;
        }
      },
      isVirtual: function isVirtual() {
        return !1 !== this.options.virtualScroll && this.selectpicker.main.elements.length >= this.options.virtualScroll || !0 === this.options.virtualScroll;
      },
      createView: function createView(A, e, t) {
        var L,
            N,
            D = this,
            i = 0,
            H = [];
        if (this.selectpicker.isSearching = A, this.selectpicker.current = A ? this.selectpicker.search : this.selectpicker.main, this.setPositionData(), e) if (t) i = this.$menuInner[0].scrollTop;else if (!D.multiple) {
          var s = D.$element[0],
              n = (s.options[s.selectedIndex] || {}).liIndex;

          if ("number" == typeof n && !1 !== D.options.size) {
            var o = D.selectpicker.main.data[n],
                r = o && o.position;
            r && (i = r - (D.sizeInfo.menuInnerHeight + D.sizeInfo.liHeight) / 2);
          }
        }

        function l(e, t) {
          var i,
              s,
              n,
              o,
              r,
              l,
              a,
              c,
              d = D.selectpicker.current.elements.length,
              h = [],
              p = !0,
              u = D.isVirtual();
          D.selectpicker.view.scrollTop = e, i = Math.ceil(D.sizeInfo.menuInnerHeight / D.sizeInfo.liHeight * 1.5), s = Math.round(d / i) || 1;

          for (var f = 0; f < s; f++) {
            var m = (f + 1) * i;
            if (f === s - 1 && (m = d), h[f] = [f * i + (f ? 1 : 0), m], !d) break;
            void 0 === r && e - 1 <= D.selectpicker.current.data[m - 1].position - D.sizeInfo.menuInnerHeight && (r = f);
          }

          if (void 0 === r && (r = 0), l = [D.selectpicker.view.position0, D.selectpicker.view.position1], n = Math.max(0, r - 1), o = Math.min(s - 1, r + 1), D.selectpicker.view.position0 = !1 === u ? 0 : Math.max(0, h[n][0]) || 0, D.selectpicker.view.position1 = !1 === u ? d : Math.min(d, h[o][1]) || 0, a = l[0] !== D.selectpicker.view.position0 || l[1] !== D.selectpicker.view.position1, void 0 !== D.activeIndex && (N = D.selectpicker.main.elements[D.prevActiveIndex], H = D.selectpicker.main.elements[D.activeIndex], L = D.selectpicker.main.elements[D.selectedIndex], t && (D.activeIndex !== D.selectedIndex && D.defocusItem(H), D.activeIndex = void 0), D.activeIndex && D.activeIndex !== D.selectedIndex && D.defocusItem(L)), void 0 !== D.prevActiveIndex && D.prevActiveIndex !== D.activeIndex && D.prevActiveIndex !== D.selectedIndex && D.defocusItem(N), (t || a) && (c = D.selectpicker.view.visibleElements ? D.selectpicker.view.visibleElements.slice() : [], D.selectpicker.view.visibleElements = !1 === u ? D.selectpicker.current.elements : D.selectpicker.current.elements.slice(D.selectpicker.view.position0, D.selectpicker.view.position1), D.setOptionStatus(), (A || !1 === u && t) && (p = !function (e, i) {
            return e.length === i.length && e.every(function (e, t) {
              return e === i[t];
            });
          }(c, D.selectpicker.view.visibleElements)), (t || !0 === u) && p)) {
            var v,
                g,
                b = D.$menuInner[0],
                w = document.createDocumentFragment(),
                I = b.firstChild.cloneNode(!1),
                x = D.selectpicker.view.visibleElements,
                k = [];
            b.replaceChild(I, b.firstChild);
            f = 0;

            for (var y = x.length; f < y; f++) {
              var $,
                  S,
                  E = x[f];
              D.options.sanitize && ($ = E.lastChild) && (S = D.selectpicker.current.data[f + D.selectpicker.view.position0]) && S.content && !S.sanitized && (k.push($), S.sanitized = !0), w.appendChild(E);
            }

            if (D.options.sanitize && k.length && P(k, D.options.whiteList, D.options.sanitizeFn), !0 === u ? (v = 0 === D.selectpicker.view.position0 ? 0 : D.selectpicker.current.data[D.selectpicker.view.position0 - 1].position, g = D.selectpicker.view.position1 > d - 1 ? 0 : D.selectpicker.current.data[d - 1].position - D.selectpicker.current.data[D.selectpicker.view.position1 - 1].position, b.firstChild.style.marginTop = v + "px", b.firstChild.style.marginBottom = g + "px") : (b.firstChild.style.marginTop = 0, b.firstChild.style.marginBottom = 0), b.firstChild.appendChild(w), !0 === u && D.sizeInfo.hasScrollBar) {
              var C = b.firstChild.offsetWidth;
              if (t && C < D.sizeInfo.menuInnerInnerWidth && D.sizeInfo.totalMenuWidth > D.sizeInfo.selectWidth) b.firstChild.style.minWidth = D.sizeInfo.menuInnerInnerWidth + "px";else if (C > D.sizeInfo.menuInnerInnerWidth) {
                D.$menu[0].style.minWidth = 0;
                var O = b.firstChild.offsetWidth;
                O > D.sizeInfo.menuInnerInnerWidth && (D.sizeInfo.menuInnerInnerWidth = O, b.firstChild.style.minWidth = D.sizeInfo.menuInnerInnerWidth + "px"), D.$menu[0].style.minWidth = "";
              }
            }
          }

          if (D.prevActiveIndex = D.activeIndex, D.options.liveSearch) {
            if (A && t) {
              var z,
                  T = 0;
              D.selectpicker.view.canHighlight[T] || (T = 1 + D.selectpicker.view.canHighlight.slice(1).indexOf(!0)), z = D.selectpicker.view.visibleElements[T], D.defocusItem(D.selectpicker.view.currentActive), D.activeIndex = (D.selectpicker.current.data[T] || {}).index, D.focusItem(z);
            }
          } else D.$menuInner.trigger("focus");
        }

        l(i, !0), this.$menuInner.off("scroll.createView").on("scroll.createView", function (e, t) {
          D.noScroll || l(this.scrollTop, t), D.noScroll = !1;
        }), z(window).off("resize" + j + "." + this.selectId + ".createView").on("resize" + j + "." + this.selectId + ".createView", function () {
          D.$newElement.hasClass(V.SHOW) && l(D.$menuInner[0].scrollTop);
        });
      },
      focusItem: function focusItem(e, t, i) {
        if (e) {
          t = t || this.selectpicker.main.data[this.activeIndex];
          var s = e.firstChild;
          s && (s.setAttribute("aria-setsize", this.selectpicker.view.size), s.setAttribute("aria-posinset", t.posinset), !0 !== i && (this.focusedParent.setAttribute("aria-activedescendant", s.id), e.classList.add("active"), s.classList.add("active")));
        }
      },
      defocusItem: function defocusItem(e) {
        e && (e.classList.remove("active"), e.firstChild && e.firstChild.classList.remove("active"));
      },
      setPlaceholder: function setPlaceholder() {
        var e = !1;

        if (this.options.title && !this.multiple) {
          this.selectpicker.view.titleOption || (this.selectpicker.view.titleOption = document.createElement("option")), e = !0;
          var t = this.$element[0],
              i = !1,
              s = !this.selectpicker.view.titleOption.parentNode;
          if (s) this.selectpicker.view.titleOption.className = "bs-title-option", this.selectpicker.view.titleOption.value = "", i = void 0 === z(t.options[t.selectedIndex]).attr("selected") && void 0 === this.$element.data("selected");
          !s && 0 === this.selectpicker.view.titleOption.index || t.insertBefore(this.selectpicker.view.titleOption, t.firstChild), i && (t.selectedIndex = 0);
        }

        return e;
      },
      buildData: function buildData() {
        var p = ':not([hidden]):not([data-hidden="true"])',
            u = [],
            f = 0,
            e = this.setPlaceholder() ? 1 : 0;
        this.options.hideDisabled && (p += ":not(:disabled)");
        var t = this.$element[0].querySelectorAll("select > *" + p);

        function m(e) {
          var t = u[u.length - 1];
          t && "divider" === t.type && (t.optID || e.optID) || ((e = e || {}).type = "divider", u.push(e));
        }

        function v(e, t) {
          if ((t = t || {}).divider = "true" === e.getAttribute("data-divider"), t.divider) m({
            optID: t.optID
          });else {
            var i = u.length,
                s = e.style.cssText,
                n = s ? S(s) : "",
                o = (e.className || "") + (t.optgroupClass || "");
            t.optID && (o = "opt " + o), t.optionClass = o.trim(), t.inlineStyle = n, t.text = e.textContent, t.content = e.getAttribute("data-content"), t.tokens = e.getAttribute("data-tokens"), t.subtext = e.getAttribute("data-subtext"), t.icon = e.getAttribute("data-icon"), e.liIndex = i, t.display = t.content || t.text, t.type = "option", t.index = i, t.option = e, t.selected = !!e.selected, t.disabled = t.disabled || !!e.disabled, u.push(t);
          }
        }

        function i(e, t) {
          var i = t[e],
              s = t[e - 1],
              n = t[e + 1],
              o = i.querySelectorAll("option" + p);

          if (o.length) {
            var r,
                l,
                a = {
              display: S(i.label),
              subtext: i.getAttribute("data-subtext"),
              icon: i.getAttribute("data-icon"),
              type: "optgroup-label",
              optgroupClass: " " + (i.className || "")
            };
            f++, s && m({
              optID: f
            }), a.optID = f, u.push(a);

            for (var c = 0, d = o.length; c < d; c++) {
              var h = o[c];
              0 === c && (l = (r = u.length - 1) + d), v(h, {
                headerIndex: r,
                lastIndex: l,
                optID: a.optID,
                optgroupClass: a.optgroupClass,
                disabled: i.disabled
              });
            }

            n && m({
              optID: f
            });
          }
        }

        for (var s = t.length; e < s; e++) {
          var n = t[e];
          "OPTGROUP" !== n.tagName ? v(n, {}) : i(e, t);
        }

        this.selectpicker.main.data = this.selectpicker.current.data = u;
      },
      buildList: function buildList() {
        var s = this,
            e = this.selectpicker.main.data,
            n = [],
            o = 0;

        function t(e) {
          var t,
              i = 0;

          switch (e.type) {
            case "divider":
              t = K.li(!1, V.DIVIDER, e.optID ? e.optID + "div" : void 0);
              break;

            case "option":
              (t = K.li(K.a(K.text.call(s, e), e.optionClass, e.inlineStyle), "", e.optID)).firstChild && (t.firstChild.id = s.selectId + "-" + e.index);
              break;

            case "optgroup-label":
              t = K.li(K.label.call(s, e), "dropdown-header" + e.optgroupClass, e.optID);
          }

          n.push(t), e.display && (i += e.display.length), e.subtext && (i += e.subtext.length), e.icon && (i += 1), o < i && (o = i, s.selectpicker.view.widestOption = n[n.length - 1]);
        }

        !s.options.showTick && !s.multiple || _.checkMark.parentNode || (_.checkMark.className = this.options.iconBase + " " + s.options.tickIcon + " check-mark", _.a.appendChild(_.checkMark));

        for (var i = e.length, r = 0; r < i; r++) {
          t(e[r]);
        }

        this.selectpicker.main.elements = this.selectpicker.current.elements = n;
      },
      findLis: function findLis() {
        return this.$menuInner.find(".inner > li");
      },
      render: function render() {
        var e,
            t = this,
            i = this.$element[0],
            s = this.setPlaceholder() && 0 === i.selectedIndex,
            n = O(i, this.options.hideDisabled),
            o = n.length,
            r = this.$button[0],
            l = r.querySelector(".filter-option-inner-inner"),
            a = document.createTextNode(this.options.multipleSeparator),
            c = _.fragment.cloneNode(!1),
            d = !1;

        if (r.classList.toggle("bs-placeholder", t.multiple ? !o : !T(i, n)), this.tabIndex(), "static" === this.options.selectedTextFormat) c = K.text.call(this, {
          text: this.options.title
        }, !0);else if (!1 === (this.multiple && -1 !== this.options.selectedTextFormat.indexOf("count") && 1 < o && (1 < (e = this.options.selectedTextFormat.split(">")).length && o > e[1] || 1 === e.length && 2 <= o))) {
          if (!s) {
            for (var h = 0; h < o && h < 50; h++) {
              var p = n[h],
                  u = this.selectpicker.main.data[p.liIndex],
                  f = {};
              this.multiple && 0 < h && c.appendChild(a.cloneNode(!1)), p.title ? f.text = p.title : u && (u.content && t.options.showContent ? (f.content = u.content.toString(), d = !0) : (t.options.showIcon && (f.icon = u.icon), t.options.showSubtext && !t.multiple && u.subtext && (f.subtext = " " + u.subtext), f.text = p.textContent.trim())), c.appendChild(K.text.call(this, f, !0));
            }

            49 < o && c.appendChild(document.createTextNode("..."));
          }
        } else {
          var m = ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';
          this.options.hideDisabled && (m += ":not(:disabled)");
          var v = this.$element[0].querySelectorAll("select > option" + m + ", optgroup" + m + " option" + m).length,
              g = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(o, v) : this.options.countSelectedText;
          c = K.text.call(this, {
            text: g.replace("{0}", o.toString()).replace("{1}", v.toString())
          }, !0);
        }

        if (null == this.options.title && (this.options.title = this.$element.attr("title")), c.childNodes.length || (c = K.text.call(this, {
          text: void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText
        }, !0)), r.title = c.textContent.replace(/<[^>]*>?/g, "").trim(), this.options.sanitize && d && P([c], t.options.whiteList, t.options.sanitizeFn), l.innerHTML = "", l.appendChild(c), R.major < 4 && this.$newElement[0].classList.contains("bs3-has-addon")) {
          var b = r.querySelector(".filter-expand"),
              w = l.cloneNode(!0);
          w.className = "filter-expand", b ? r.replaceChild(w, b) : r.appendChild(w);
        }

        this.$element.trigger("rendered" + j);
      },
      setStyle: function setStyle(e, t) {
        var i,
            s = this.$button[0],
            n = this.$newElement[0],
            o = this.options.style.trim();
        this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, "")), R.major < 4 && (n.classList.add("bs3"), n.parentNode.classList.contains("input-group") && (n.previousElementSibling || n.nextElementSibling) && (n.previousElementSibling || n.nextElementSibling).classList.contains("input-group-addon") && n.classList.add("bs3-has-addon")), i = e ? e.trim() : o, "add" == t ? i && s.classList.add.apply(s.classList, i.split(" ")) : "remove" == t ? i && s.classList.remove.apply(s.classList, i.split(" ")) : (o && s.classList.remove.apply(s.classList, o.split(" ")), i && s.classList.add.apply(s.classList, i.split(" ")));
      },
      liHeight: function liHeight(e) {
        if (e || !1 !== this.options.size && !Object.keys(this.sizeInfo).length) {
          var t = document.createElement("div"),
              i = document.createElement("div"),
              s = document.createElement("div"),
              n = document.createElement("ul"),
              o = document.createElement("li"),
              r = document.createElement("li"),
              l = document.createElement("li"),
              a = document.createElement("a"),
              c = document.createElement("span"),
              d = this.options.header && 0 < this.$menu.find("." + V.POPOVERHEADER).length ? this.$menu.find("." + V.POPOVERHEADER)[0].cloneNode(!0) : null,
              h = this.options.liveSearch ? document.createElement("div") : null,
              p = this.options.actionsBox && this.multiple && 0 < this.$menu.find(".bs-actionsbox").length ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
              u = this.options.doneButton && this.multiple && 0 < this.$menu.find(".bs-donebutton").length ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null,
              f = this.$element.find("option")[0];

          if (this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth, c.className = "text", a.className = "dropdown-item " + (f ? f.className : ""), t.className = this.$menu[0].parentNode.className + " " + V.SHOW, t.style.width = 0, "auto" === this.options.width && (i.style.minWidth = 0), i.className = V.MENU + " " + V.SHOW, s.className = "inner " + V.SHOW, n.className = V.MENU + " inner " + ("4" === R.major ? V.SHOW : ""), o.className = V.DIVIDER, r.className = "dropdown-header", c.appendChild(document.createTextNode("\u200B")), a.appendChild(c), l.appendChild(a), r.appendChild(c.cloneNode(!0)), this.selectpicker.view.widestOption && n.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)), n.appendChild(l), n.appendChild(o), n.appendChild(r), d && i.appendChild(d), h) {
            var m = document.createElement("input");
            h.className = "bs-searchbox", m.className = "form-control", h.appendChild(m), i.appendChild(h);
          }

          p && i.appendChild(p), s.appendChild(n), i.appendChild(s), u && i.appendChild(u), t.appendChild(i), document.body.appendChild(t);
          var v,
              g = l.offsetHeight,
              b = r ? r.offsetHeight : 0,
              w = d ? d.offsetHeight : 0,
              I = h ? h.offsetHeight : 0,
              x = p ? p.offsetHeight : 0,
              k = u ? u.offsetHeight : 0,
              y = z(o).outerHeight(!0),
              $ = !!window.getComputedStyle && window.getComputedStyle(i),
              S = i.offsetWidth,
              E = $ ? null : z(i),
              C = {
            vert: L($ ? $.paddingTop : E.css("paddingTop")) + L($ ? $.paddingBottom : E.css("paddingBottom")) + L($ ? $.borderTopWidth : E.css("borderTopWidth")) + L($ ? $.borderBottomWidth : E.css("borderBottomWidth")),
            horiz: L($ ? $.paddingLeft : E.css("paddingLeft")) + L($ ? $.paddingRight : E.css("paddingRight")) + L($ ? $.borderLeftWidth : E.css("borderLeftWidth")) + L($ ? $.borderRightWidth : E.css("borderRightWidth"))
          },
              O = {
            vert: C.vert + L($ ? $.marginTop : E.css("marginTop")) + L($ ? $.marginBottom : E.css("marginBottom")) + 2,
            horiz: C.horiz + L($ ? $.marginLeft : E.css("marginLeft")) + L($ ? $.marginRight : E.css("marginRight")) + 2
          };
          s.style.overflowY = "scroll", v = i.offsetWidth - S, document.body.removeChild(t), this.sizeInfo.liHeight = g, this.sizeInfo.dropdownHeaderHeight = b, this.sizeInfo.headerHeight = w, this.sizeInfo.searchHeight = I, this.sizeInfo.actionsHeight = x, this.sizeInfo.doneButtonHeight = k, this.sizeInfo.dividerHeight = y, this.sizeInfo.menuPadding = C, this.sizeInfo.menuExtras = O, this.sizeInfo.menuWidth = S, this.sizeInfo.menuInnerInnerWidth = S - C.horiz, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth, this.sizeInfo.scrollBarWidth = v, this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight, this.setPositionData();
        }
      },
      getSelectPosition: function getSelectPosition() {
        var e,
            t = z(window),
            i = this.$newElement.offset(),
            s = z(this.options.container);
        this.options.container && s.length && !s.is("body") ? ((e = s.offset()).top += parseInt(s.css("borderTopWidth")), e.left += parseInt(s.css("borderLeftWidth"))) : e = {
          top: 0,
          left: 0
        };
        var n = this.options.windowPadding;
        this.sizeInfo.selectOffsetTop = i.top - e.top - t.scrollTop(), this.sizeInfo.selectOffsetBot = t.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo.selectHeight - e.top - n[2], this.sizeInfo.selectOffsetLeft = i.left - e.left - t.scrollLeft(), this.sizeInfo.selectOffsetRight = t.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo.selectWidth - e.left - n[1], this.sizeInfo.selectOffsetTop -= n[0], this.sizeInfo.selectOffsetLeft -= n[3];
      },
      setMenuSize: function setMenuSize(e) {
        this.getSelectPosition();
        var t,
            i,
            s,
            n,
            o,
            r,
            l,
            a,
            c = this.sizeInfo.selectWidth,
            d = this.sizeInfo.liHeight,
            h = this.sizeInfo.headerHeight,
            p = this.sizeInfo.searchHeight,
            u = this.sizeInfo.actionsHeight,
            f = this.sizeInfo.doneButtonHeight,
            m = this.sizeInfo.dividerHeight,
            v = this.sizeInfo.menuPadding,
            g = 0;
        if (this.options.dropupAuto && (l = d * this.selectpicker.current.elements.length + v.vert, a = this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && l + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot, !0 === this.selectpicker.isSearching && (a = this.selectpicker.dropup), this.$newElement.toggleClass(V.DROPUP, a), this.selectpicker.dropup = a), "auto" === this.options.size) n = 3 < this.selectpicker.current.elements.length ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2 : 0, i = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert, s = n + h + p + u + f, r = Math.max(n - v.vert, 0), this.$newElement.hasClass(V.DROPUP) && (i = this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert), t = (o = i) - h - p - u - f - v.vert;else if (this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size) {
          for (var b = 0; b < this.options.size; b++) {
            "divider" === this.selectpicker.current.data[b].type && g++;
          }

          t = (i = d * this.options.size + g * m + v.vert) - v.vert, o = i + h + p + u + f, s = r = "";
        }
        this.$menu.css({
          "max-height": o + "px",
          overflow: "hidden",
          "min-height": s + "px"
        }), this.$menuInner.css({
          "max-height": t + "px",
          "overflow-y": "auto",
          "min-height": r + "px"
        }), this.sizeInfo.menuInnerHeight = Math.max(t, 1), this.selectpicker.current.data.length && this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight && (this.sizeInfo.hasScrollBar = !0, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth), "auto" === this.options.dropdownAlignRight && this.$menu.toggleClass(V.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < this.sizeInfo.totalMenuWidth - c), this.dropdown && this.dropdown._popper && this.dropdown._popper.update();
      },
      setSize: function setSize(e) {
        if (this.liHeight(e), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size) {
          var t = this,
              i = z(window);
          this.setMenuSize(), this.options.liveSearch && this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize", function () {
            return t.setMenuSize();
          }), "auto" === this.options.size ? i.off("resize" + j + "." + this.selectId + ".setMenuSize scroll" + j + "." + this.selectId + ".setMenuSize").on("resize" + j + "." + this.selectId + ".setMenuSize scroll" + j + "." + this.selectId + ".setMenuSize", function () {
            return t.setMenuSize();
          }) : this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size && i.off("resize" + j + "." + this.selectId + ".setMenuSize scroll" + j + "." + this.selectId + ".setMenuSize");
        }

        this.createView(!1, !0, e);
      },
      setWidth: function setWidth() {
        var i = this;
        "auto" === this.options.width ? requestAnimationFrame(function () {
          i.$menu.css("min-width", "0"), i.$element.on("loaded" + j, function () {
            i.liHeight(), i.setMenuSize();
            var e = i.$newElement.clone().appendTo("body"),
                t = e.css("width", "auto").children("button").outerWidth();
            e.remove(), i.sizeInfo.selectWidth = Math.max(i.sizeInfo.totalMenuWidth, t), i.$newElement.css("width", i.sizeInfo.selectWidth + "px");
          });
        }) : "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", "")), this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement[0].classList.remove("fit-width");
      },
      selectPosition: function selectPosition() {
        this.$bsContainer = z('<div class="bs-container" />');

        function e(e) {
          var t = {},
              i = r.options.display || !!z.fn.dropdown.Constructor.Default && z.fn.dropdown.Constructor.Default.display;
          r.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass(V.DROPUP, e.hasClass(V.DROPUP)), s = e.offset(), l.is("body") ? n = {
            top: 0,
            left: 0
          } : ((n = l.offset()).top += parseInt(l.css("borderTopWidth")) - l.scrollTop(), n.left += parseInt(l.css("borderLeftWidth")) - l.scrollLeft()), o = e.hasClass(V.DROPUP) ? 0 : e[0].offsetHeight, (R.major < 4 || "static" === i) && (t.top = s.top - n.top + o, t.left = s.left - n.left), t.width = e[0].offsetWidth, r.$bsContainer.css(t);
        }

        var s,
            n,
            o,
            r = this,
            l = z(this.options.container);
        this.$button.on("click.bs.dropdown.data-api", function () {
          r.isDisabled() || (e(r.$newElement), r.$bsContainer.appendTo(r.options.container).toggleClass(V.SHOW, !r.$button.hasClass(V.SHOW)).append(r.$menu));
        }), z(window).off("resize" + j + "." + this.selectId + " scroll" + j + "." + this.selectId).on("resize" + j + "." + this.selectId + " scroll" + j + "." + this.selectId, function () {
          r.$newElement.hasClass(V.SHOW) && e(r.$newElement);
        }), this.$element.on("hide" + j, function () {
          r.$menu.data("height", r.$menu.height()), r.$bsContainer.detach();
        });
      },
      setOptionStatus: function setOptionStatus(e) {
        var t = this;
        if (t.noScroll = !1, t.selectpicker.view.visibleElements && t.selectpicker.view.visibleElements.length) for (var i = 0; i < t.selectpicker.view.visibleElements.length; i++) {
          var s = t.selectpicker.current.data[i + t.selectpicker.view.position0],
              n = s.option;
          n && (!0 !== e && t.setDisabled(s.index, s.disabled), t.setSelected(s.index, n.selected));
        }
      },
      setSelected: function setSelected(e, t) {
        var i,
            s,
            n = this.selectpicker.main.elements[e],
            o = this.selectpicker.main.data[e],
            r = void 0 !== this.activeIndex,
            l = this.activeIndex === e || t && !this.multiple && !r;
        o.selected = t, s = n.firstChild, t && (this.selectedIndex = e), n.classList.toggle("selected", t), l ? (this.focusItem(n, o), this.selectpicker.view.currentActive = n, this.activeIndex = e) : this.defocusItem(n), s && (s.classList.toggle("selected", t), t ? s.setAttribute("aria-selected", !0) : this.multiple ? s.setAttribute("aria-selected", !1) : s.removeAttribute("aria-selected")), l || r || !t || void 0 === this.prevActiveIndex || (i = this.selectpicker.main.elements[this.prevActiveIndex], this.defocusItem(i));
      },
      setDisabled: function setDisabled(e, t) {
        var i,
            s = this.selectpicker.main.elements[e];
        this.selectpicker.main.data[e].disabled = t, i = s.firstChild, s.classList.toggle(V.DISABLED, t), i && ("4" === R.major && i.classList.toggle(V.DISABLED, t), t ? (i.setAttribute("aria-disabled", t), i.setAttribute("tabindex", -1)) : (i.removeAttribute("aria-disabled"), i.setAttribute("tabindex", 0)));
      },
      isDisabled: function isDisabled() {
        return this.$element[0].disabled;
      },
      checkDisabled: function checkDisabled() {
        this.isDisabled() ? (this.$newElement[0].classList.add(V.DISABLED), this.$button.addClass(V.DISABLED).attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button[0].classList.contains(V.DISABLED) && (this.$newElement[0].classList.remove(V.DISABLED), this.$button.removeClass(V.DISABLED).attr("aria-disabled", !1)), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex"));
      },
      tabIndex: function tabIndex() {
        this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98);
      },
      clickListener: function clickListener() {
        var C = this,
            t = z(document);

        function e() {
          C.options.liveSearch ? C.$searchbox.trigger("focus") : C.$menuInner.trigger("focus");
        }

        function i() {
          C.dropdown && C.dropdown._popper && C.dropdown._popper.state.isCreated ? e() : requestAnimationFrame(i);
        }

        t.data("spaceSelect", !1), this.$button.on("keyup", function (e) {
          /(32)/.test(e.keyCode.toString(10)) && t.data("spaceSelect") && (e.preventDefault(), t.data("spaceSelect", !1));
        }), this.$newElement.on("show.bs.dropdown", function () {
          3 < R.major && !C.dropdown && (C.dropdown = C.$button.data("bs.dropdown"), C.dropdown._menu = C.$menu[0]);
        }), this.$button.on("click.bs.dropdown.data-api", function () {
          C.$newElement.hasClass(V.SHOW) || C.setSize();
        }), this.$element.on("shown" + j, function () {
          C.$menuInner[0].scrollTop !== C.selectpicker.view.scrollTop && (C.$menuInner[0].scrollTop = C.selectpicker.view.scrollTop), 3 < R.major ? requestAnimationFrame(i) : e();
        }), this.$menuInner.on("mouseenter", "li a", function (e) {
          var t = this.parentElement,
              i = C.isVirtual() ? C.selectpicker.view.position0 : 0,
              s = Array.prototype.indexOf.call(t.parentElement.children, t),
              n = C.selectpicker.current.data[s + i];
          C.focusItem(t, n, !0);
        }), this.$menuInner.on("click", "li a", function (e, t) {
          var i = z(this),
              s = C.$element[0],
              n = C.isVirtual() ? C.selectpicker.view.position0 : 0,
              o = C.selectpicker.current.data[i.parent().index() + n],
              r = o.index,
              l = T(s),
              a = s.selectedIndex,
              c = s.options[a],
              d = !0;

          if (C.multiple && 1 !== C.options.maxOptions && e.stopPropagation(), e.preventDefault(), !C.isDisabled() && !i.parent().hasClass(V.DISABLED)) {
            var h = o.option,
                p = z(h),
                u = h.selected,
                f = p.parent("optgroup"),
                m = f.find("option"),
                v = C.options.maxOptions,
                g = f.data("maxOptions") || !1;

            if (r === C.activeIndex && (t = !0), t || (C.prevActiveIndex = C.activeIndex, C.activeIndex = void 0), C.multiple) {
              if (h.selected = !u, C.setSelected(r, !u), i.trigger("blur"), !1 !== v || !1 !== g) {
                var b = v < O(s).length,
                    w = g < f.find("option:selected").length;
                if (v && b || g && w) if (v && 1 == v) s.selectedIndex = -1, h.selected = !0, C.setOptionStatus(!0);else if (g && 1 == g) {
                  for (var I = 0; I < m.length; I++) {
                    var x = m[I];
                    x.selected = !1, C.setSelected(x.liIndex, !1);
                  }

                  h.selected = !0, C.setSelected(r, !0);
                } else {
                  var k = "string" == typeof C.options.maxOptionsText ? [C.options.maxOptionsText, C.options.maxOptionsText] : C.options.maxOptionsText,
                      y = "function" == typeof k ? k(v, g) : k,
                      $ = y[0].replace("{n}", v),
                      S = y[1].replace("{n}", g),
                      E = z('<div class="notify"></div>');
                  y[2] && ($ = $.replace("{var}", y[2][1 < v ? 0 : 1]), S = S.replace("{var}", y[2][1 < g ? 0 : 1])), h.selected = !1, C.$menu.append(E), v && b && (E.append(z("<div>" + $ + "</div>")), d = !1, C.$element.trigger("maxReached" + j)), g && w && (E.append(z("<div>" + S + "</div>")), d = !1, C.$element.trigger("maxReachedGrp" + j)), setTimeout(function () {
                    C.setSelected(r, !1);
                  }, 10), E[0].classList.add("fadeOut"), setTimeout(function () {
                    E.remove();
                  }, 1050);
                }
              }
            } else c && (c.selected = !1), h.selected = !0, C.setSelected(r, !0);

            !C.multiple || C.multiple && 1 === C.options.maxOptions ? C.$button.trigger("focus") : C.options.liveSearch && C.$searchbox.trigger("focus"), d && (!C.multiple && a === s.selectedIndex || (A = [h.index, p.prop("selected"), l], C.$element.triggerNative("change")));
          }
        }), this.$menu.on("click", "li." + V.DISABLED + " a, ." + V.POPOVERHEADER + ", ." + V.POPOVERHEADER + " :not(.close)", function (e) {
          e.currentTarget == this && (e.preventDefault(), e.stopPropagation(), C.options.liveSearch && !z(e.target).hasClass("close") ? C.$searchbox.trigger("focus") : C.$button.trigger("focus"));
        }), this.$menuInner.on("click", ".divider, .dropdown-header", function (e) {
          e.preventDefault(), e.stopPropagation(), C.options.liveSearch ? C.$searchbox.trigger("focus") : C.$button.trigger("focus");
        }), this.$menu.on("click", "." + V.POPOVERHEADER + " .close", function () {
          C.$button.trigger("click");
        }), this.$searchbox.on("click", function (e) {
          e.stopPropagation();
        }), this.$menu.on("click", ".actions-btn", function (e) {
          C.options.liveSearch ? C.$searchbox.trigger("focus") : C.$button.trigger("focus"), e.preventDefault(), e.stopPropagation(), z(this).hasClass("bs-select-all") ? C.selectAll() : C.deselectAll();
        }), this.$element.on("change" + j, function () {
          C.render(), C.$element.trigger("changed" + j, A), A = null;
        }).on("focus" + j, function () {
          C.options.mobile || C.$button.trigger("focus");
        });
      },
      liveSearchListener: function liveSearchListener() {
        var u = this,
            f = document.createElement("li");
        this.$button.on("click.bs.dropdown.data-api", function () {
          u.$searchbox.val() && u.$searchbox.val("");
        }), this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api", function (e) {
          e.stopPropagation();
        }), this.$searchbox.on("input propertychange", function () {
          var e = u.$searchbox.val();

          if (u.selectpicker.search.elements = [], u.selectpicker.search.data = [], e) {
            var t = [],
                i = e.toUpperCase(),
                s = {},
                n = [],
                o = u._searchStyle(),
                r = u.options.liveSearchNormalize;

            r && (i = w(i));

            for (var l = 0; l < u.selectpicker.main.data.length; l++) {
              var a = u.selectpicker.main.data[l];
              s[l] || (s[l] = k(a, i, o, r)), s[l] && void 0 !== a.headerIndex && -1 === n.indexOf(a.headerIndex) && (0 < a.headerIndex && (s[a.headerIndex - 1] = !0, n.push(a.headerIndex - 1)), s[a.headerIndex] = !0, n.push(a.headerIndex), s[a.lastIndex + 1] = !0), s[l] && "optgroup-label" !== a.type && n.push(l);
            }

            l = 0;

            for (var c = n.length; l < c; l++) {
              var d = n[l],
                  h = n[l - 1],
                  p = (a = u.selectpicker.main.data[d], u.selectpicker.main.data[h]);
              ("divider" !== a.type || "divider" === a.type && p && "divider" !== p.type && c - 1 !== l) && (u.selectpicker.search.data.push(a), t.push(u.selectpicker.main.elements[d]));
            }

            u.activeIndex = void 0, u.noScroll = !0, u.$menuInner.scrollTop(0), u.selectpicker.search.elements = t, u.createView(!0), t.length || (f.className = "no-results", f.innerHTML = u.options.noneResultsText.replace("{0}", '"' + S(e) + '"'), u.$menuInner[0].firstChild.appendChild(f));
          } else u.$menuInner.scrollTop(0), u.createView(!1);
        });
      },
      _searchStyle: function _searchStyle() {
        return this.options.liveSearchStyle || "contains";
      },
      val: function val(e) {
        var t = this.$element[0];
        if (void 0 === e) return this.$element.val();
        var i = T(t);
        if (A = [null, null, i], this.$element.val(e).trigger("changed" + j, A), this.$newElement.hasClass(V.SHOW)) if (this.multiple) this.setOptionStatus(!0);else {
          var s = (t.options[t.selectedIndex] || {}).liIndex;
          "number" == typeof s && (this.setSelected(this.selectedIndex, !1), this.setSelected(s, !0));
        }
        return this.render(), A = null, this.$element;
      },
      changeAll: function changeAll(e) {
        if (this.multiple) {
          void 0 === e && (e = !0);
          var t = this.$element[0],
              i = 0,
              s = 0,
              n = T(t);
          t.classList.add("bs-select-hidden");

          for (var o = 0, r = this.selectpicker.current.data, l = r.length; o < l; o++) {
            var a = r[o],
                c = a.option;
            c && !a.disabled && "divider" !== a.type && (a.selected && i++, !0 === (c.selected = e) && s++);
          }

          t.classList.remove("bs-select-hidden"), i !== s && (this.setOptionStatus(), A = [null, null, n], this.$element.triggerNative("change"));
        }
      },
      selectAll: function selectAll() {
        return this.changeAll(!0);
      },
      deselectAll: function deselectAll() {
        return this.changeAll(!1);
      },
      toggle: function toggle(e) {
        (e = e || window.event) && e.stopPropagation(), this.$button.trigger("click.bs.dropdown.data-api");
      },
      keydown: function keydown(e) {
        var t,
            i,
            s,
            n,
            o,
            r = z(this),
            l = r.hasClass("dropdown-toggle"),
            a = (l ? r.closest(".dropdown") : r.closest(F.MENU)).data("this"),
            c = a.findLis(),
            d = !1,
            h = e.which === W && !l && !a.options.selectOnTab,
            p = G.test(e.which) || h,
            u = a.$menuInner[0].scrollTop,
            f = !0 === a.isVirtual() ? a.selectpicker.view.position0 : 0;
        if (!(112 <= e.which && e.which <= 123)) if (!(i = a.$newElement.hasClass(V.SHOW)) && (p || 48 <= e.which && e.which <= 57 || 96 <= e.which && e.which <= 105 || 65 <= e.which && e.which <= 90) && (a.$button.trigger("click.bs.dropdown.data-api"), a.options.liveSearch)) a.$searchbox.trigger("focus");else {
          if (e.which === N && i && (e.preventDefault(), a.$button.trigger("click.bs.dropdown.data-api").trigger("focus")), p) {
            if (!c.length) return;
            -1 !== (t = (s = a.selectpicker.main.elements[a.activeIndex]) ? Array.prototype.indexOf.call(s.parentElement.children, s) : -1) && a.defocusItem(s), e.which === B ? (-1 !== t && t--, t + f < 0 && (t += c.length), a.selectpicker.view.canHighlight[t + f] || -1 === (t = a.selectpicker.view.canHighlight.slice(0, t + f).lastIndexOf(!0) - f) && (t = c.length - 1)) : e.which !== M && !h || (++t + f >= a.selectpicker.view.canHighlight.length && (t = 0), a.selectpicker.view.canHighlight[t + f] || (t = t + 1 + a.selectpicker.view.canHighlight.slice(t + f + 1).indexOf(!0))), e.preventDefault();
            var m = f + t;
            e.which === B ? 0 === f && t === c.length - 1 ? (a.$menuInner[0].scrollTop = a.$menuInner[0].scrollHeight, m = a.selectpicker.current.elements.length - 1) : d = (o = (n = a.selectpicker.current.data[m]).position - n.height) < u : e.which !== M && !h || (0 === t ? m = a.$menuInner[0].scrollTop = 0 : d = u < (o = (n = a.selectpicker.current.data[m]).position - a.sizeInfo.menuInnerHeight)), s = a.selectpicker.current.elements[m], a.activeIndex = a.selectpicker.current.data[m].index, a.focusItem(s), a.selectpicker.view.currentActive = s, d && (a.$menuInner[0].scrollTop = o), a.options.liveSearch ? a.$searchbox.trigger("focus") : r.trigger("focus");
          } else if (!r.is("input") && !q.test(e.which) || e.which === H && a.selectpicker.keydown.keyHistory) {
            var v,
                g,
                b = [];
            e.preventDefault(), a.selectpicker.keydown.keyHistory += C[e.which], a.selectpicker.keydown.resetKeyHistory.cancel && clearTimeout(a.selectpicker.keydown.resetKeyHistory.cancel), a.selectpicker.keydown.resetKeyHistory.cancel = a.selectpicker.keydown.resetKeyHistory.start(), g = a.selectpicker.keydown.keyHistory, /^(.)\1+$/.test(g) && (g = g.charAt(0));

            for (var w = 0; w < a.selectpicker.current.data.length; w++) {
              var I = a.selectpicker.current.data[w];
              k(I, g, "startsWith", !0) && a.selectpicker.view.canHighlight[w] && b.push(I.index);
            }

            if (b.length) {
              var x = 0;
              c.removeClass("active").find("a").removeClass("active"), 1 === g.length && (-1 === (x = b.indexOf(a.activeIndex)) || x === b.length - 1 ? x = 0 : x++), v = b[x], d = 0 < u - (n = a.selectpicker.main.data[v]).position ? (o = n.position - n.height, !0) : (o = n.position - a.sizeInfo.menuInnerHeight, n.position > u + a.sizeInfo.menuInnerHeight), s = a.selectpicker.main.elements[v], a.activeIndex = b[x], a.focusItem(s), s && s.firstChild.focus(), d && (a.$menuInner[0].scrollTop = o), r.trigger("focus");
            }
          }

          i && (e.which === H && !a.selectpicker.keydown.keyHistory || e.which === D || e.which === W && a.options.selectOnTab) && (e.which !== H && e.preventDefault(), a.options.liveSearch && e.which === H || (a.$menuInner.find(".active a").trigger("click", !0), r.trigger("focus"), a.options.liveSearch || (e.preventDefault(), z(document).data("spaceSelect", !0))));
        }
      },
      mobile: function mobile() {
        this.$element[0].classList.add("mobile-device");
      },
      refresh: function refresh() {
        var e = z.extend({}, this.options, this.$element.data());
        this.options = e, this.checkDisabled(), this.setStyle(), this.render(), this.buildData(), this.buildList(), this.setWidth(), this.setSize(!0), this.$element.trigger("refreshed" + j);
      },
      hide: function hide() {
        this.$newElement.hide();
      },
      show: function show() {
        this.$newElement.show();
      },
      remove: function remove() {
        this.$newElement.remove(), this.$element.remove();
      },
      destroy: function destroy() {
        this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(j).removeData("selectpicker").removeClass("bs-select-hidden selectpicker"), z(window).off(j + "." + this.selectId);
      }
    };
    var J = z.fn.selectpicker;
    z.fn.selectpicker = Z, z.fn.selectpicker.Constructor = Y, z.fn.selectpicker.noConflict = function () {
      return z.fn.selectpicker = J, this;
    };
    var Q = z.fn.dropdown.Constructor._dataApiKeydownHandler || z.fn.dropdown.Constructor.prototype.keydown;
    z(document).off("keydown.bs.dropdown.data-api").on("keydown.bs.dropdown.data-api", ':not(.bootstrap-select) > [data-toggle="dropdown"]', Q).on("keydown.bs.dropdown.data-api", ":not(.bootstrap-select) > .dropdown-menu", Q).on("keydown" + j, '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', Y.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', function (e) {
      e.stopPropagation();
    }), z(window).on("load" + j + ".data-api", function () {
      z(".selectpicker").each(function () {
        var e = z(this);
        Z.call(e, e.data());
      });
    });
  }(e);
});
"use strict";
//# sourceMappingURL=all.js.map
