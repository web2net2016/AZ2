!function (e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function (C, e) { "use strict"; var t = [], E = C.document, r = Object.getPrototypeOf, s = t.slice, g = t.concat, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), y = {}, m = function (e) { return "function" == typeof e && "number" != typeof e.nodeType }, x = function (e) { return null != e && e === e.window }, c = { type: !0, src: !0, nonce: !0, noModule: !0 }; function b(e, t, n) { var r, i, o = (n = n || E).createElement("script"); if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i); n.head.appendChild(o).parentNode.removeChild(o) } function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e } var f = "3.4.1", k = function (e, t) { return new k.fn.init(e, t) }, p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; function d(e) { var t = !!e && "length" in e && e.length, n = w(e); return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e) } k.fn = k.prototype = { jquery: f, constructor: k, length: 0, toArray: function () { return s.call(this) }, get: function (e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function (e) { var t = k.merge(this.constructor(), e); return t.prevObject = this, t }, each: function (e) { return k.each(this, e) }, map: function (n) { return this.pushStack(k.map(this, function (e, t) { return n.call(e, t, e) })) }, slice: function () { return this.pushStack(s.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (e) { var t = this.length, n = +e + (e < 0 ? t : 0); return this.pushStack(0 <= n && n < t ? [this[n]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: u, sort: t.sort, splice: t.splice }, k.extend = k.fn.extend = function () { var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r)); return a }, k.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) { throw new Error(e) }, noop: function () { }, isPlainObject: function (e) { var t, n; return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l) }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, globalEval: function (e, t) { b(e, { nonce: t && t.nonce }) }, each: function (e, t) { var n, r = 0; if (d(e)) { for (n = e.length; r < n; r++)if (!1 === t.call(e[r], r, e[r])) break } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break; return e }, trim: function (e) { return null == e ? "" : (e + "").replace(p, "") }, makeArray: function (e, t) { var n = t || []; return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n }, inArray: function (e, t, n) { return null == t ? -1 : i.call(t, e, n) }, merge: function (e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++)e[i++] = t[r]; return e.length = i, e }, grep: function (e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)!t(e[i], i) !== a && r.push(e[i]); return r }, map: function (e, t, n) { var r, i, o = 0, a = []; if (d(e)) for (r = e.length; o < r; o++)null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i); return g.apply([], a) }, guid: 1, support: y }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) { n["[object " + t + "]"] = t.toLowerCase() }); var h = function (n) { var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date, m = n.document, S = 0, r = 0, p = ue(), x = ue(), N = ue(), A = ue(), D = function (e, t) { return e === t && (l = !0), 0 }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function (e, t) { for (var n = 0, r = e.length; n < r; n++)if (e[n] === t) return n; return -1 }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", F = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp($), V = new RegExp("^" + I + "$"), G = { ID: new RegExp("^#(" + I + ")"), CLASS: new RegExp("^\\.(" + I + ")"), TAG: new RegExp("^(" + I + "|[*])"), ATTR: new RegExp("^" + W), PSEUDO: new RegExp("^" + $), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ne = function (e, t, n) { var r = "0x" + t - 65536; return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e }, oe = function () { T() }, ae = be(function (e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" }); try { H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType } catch (e) { H = { apply: t.length ? function (e, t) { L.apply(e, O.call(t)) } : function (e, t) { var n = e.length, r = 0; while (e[n++] = t[r++]); e.length = n - 1 } } } function se(t, e, n, r) { var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9; if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n; if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) { if (11 !== p && (u = Z.exec(t))) if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n } else { if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n } if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) { if (c = t, f = e, 1 === p && U.test(t)) { (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k), o = (l = h(t)).length; while (o--) l[o] = "#" + s + " " + xe(l[o]); c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e } try { return H.apply(n, f.querySelectorAll(c)), n } catch (e) { A(t, !0) } finally { s === k && e.removeAttribute("id") } } } return g(t.replace(B, "$1"), e, n, r) } function ue() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } } function le(e) { return e[k] = !0, e } function ce(e) { var t = C.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } } function fe(e, t) { var n = e.split("|"), r = n.length; while (r--) b.attrHandle[n[r]] = t } function pe(e, t) { var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (r) return r; if (n) while (n = n.nextSibling) if (n === t) return -1; return e ? 1 : -1 } function de(t) { return function (e) { return "input" === e.nodeName.toLowerCase() && e.type === t } } function he(n) { return function (e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } } function ge(t) { return function (e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } } function ve(a) { return le(function (o) { return o = +o, le(function (e, t) { var n, r = a([], e.length, o), i = r.length; while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n])) }) }) } function ye(e) { return e && "undefined" != typeof e.getElementsByTagName && e } for (e in d = se.support = {}, i = se.isXML = function (e) { var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement; return !Y.test(t || n && n.nodeName || "HTML") }, T = se.setDocument = function (e) { var t, n, r = e ? e.ownerDocument || e : m; return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function (e) { return e.className = "i", !e.getAttribute("className") }), d.getElementsByTagName = ce(function (e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) { return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length }), d.getById ? (b.filter.ID = function (e) { var t = e.replace(te, ne); return function (e) { return e.getAttribute("id") === t } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function (e) { var n = e.replace(te, ne); return function (e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && E) { var n, r, i, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o]; i = t.getElementsByName(e), r = 0; while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), b.find.TAG = d.getElementsByTagName ? function (e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, b.find.CLASS = d.getElementsByClassName && function (e, t) { if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) { a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]") }), ce(function (e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = C.createElement("input"); t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:") })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) { d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $) }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function (e, t) { if (t) while (t = t.parentNode) if (t === e) return !0; return !1 }, D = t ? function (e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1) } : function (e, t) { if (e === t) return l = !0, 0; var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t]; if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0; if (i === o) return pe(e, t); n = e; while (n = n.parentNode) a.unshift(n); n = t; while (n = n.parentNode) s.unshift(n); while (a[r] === s[r]) r++; return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0 }), C }, se.matches = function (e, t) { return se(e, null, null, t) }, se.matchesSelector = function (e, t) { if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try { var n = c.call(e, t); if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { A(t, !0) } return 0 < se(t, C, null, [e]).length }, se.contains = function (e, t) { return (e.ownerDocument || e) !== C && T(e), y(e, t) }, se.attr = function (e, t) { (e.ownerDocument || e) !== C && T(e); var n = b.attrHandle[t.toLowerCase()], r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0; return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }, se.escape = function (e) { return (e + "").replace(re, ie) }, se.error = function (e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function (e) { var t, n = [], r = 0, i = 0; if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) } return u = null, e }, o = se.getText = function (e) { var t, n = "", r = 0, i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling)n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else while (t = e[r++]) n += o(t); return n }, (b = se.selectors = { cacheLength: 50, createPseudo: le, match: G, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function (e) { var t, n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function (e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function () { return !0 } : function (e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function (e) { var t = p[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function (e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function (n, r, i) { return function (e) { var t = se.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } }, CHILD: function (h, e, t, g, v) { var y = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e; return 1 === g && 0 === v ? function (e) { return !!e.parentNode } : function (e, t, n) { var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1; if (c) { if (y) { while (l) { a = e; while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1; u = l = "only" === h && !u && "nextSibling" } return !0 } if (u = [m ? c.firstChild : c.lastChild], m && p) { d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s]; while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) { i[h] = [S, s, d]; break } } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break; return (d -= v) === g || d % g == 0 && 0 <= d / g } } }, PSEUDO: function (e, o) { var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e); return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) { var n, r = a(e, o), i = r.length; while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]) }) : function (e) { return a(e, 0, t) }) : a } }, pseudos: { not: le(function (e) { var r = [], i = [], s = f(e.replace(B, "$1")); return s[k] ? le(function (e, t, n, r) { var i, o = s(e, null, r, []), a = e.length; while (a--) (i = o[a]) && (e[a] = !(t[a] = i)) }) : function (e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() } }), has: le(function (t) { return function (e) { return 0 < se(t, e).length } }), contains: le(function (t) { return t = t.replace(te, ne), function (e) { return -1 < (e.textContent || o(e)).indexOf(t) } }), lang: le(function (n) { return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) { var t; do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } }), target: function (e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id }, root: function (e) { return e === a }, focus: function (e) { return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: ge(!1), disabled: ge(!0), checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6) return !1; return !0 }, parent: function (e) { return !b.pseudos.empty(e) }, header: function (e) { return J.test(e.nodeName) }, input: function (e) { return Q.test(e.nodeName) }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: ve(function () { return [0] }), last: ve(function (e, t) { return [t - 1] }), eq: ve(function (e, t, n) { return [n < 0 ? n + t : n] }), even: ve(function (e, t) { for (var n = 0; n < t; n += 2)e.push(n); return e }), odd: ve(function (e, t) { for (var n = 1; n < t; n += 2)e.push(n); return e }), lt: ve(function (e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;)e.push(r); return e }), gt: ve(function (e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r); return e }) } }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = de(e); for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e); function me() { } function xe(e) { for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value; return r } function be(s, e, t) { var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++; return e.first ? function (e, t, n) { while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n); return !1 } : function (e, t, n) { var r, i, o, a = [S, p]; if (n) { while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0 } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e; else { if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2]; if ((i[c] = a)[2] = s(e, t, n)) return !0 } return !1 } } function we(i) { return 1 < i.length ? function (e, t, n) { var r = i.length; while (r--) if (!i[r](e, t, n)) return !1; return !0 } : i[0] } function Te(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a } function Ce(d, h, g, v, y, e) { return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function (e, t, n, r) { var i, o, a, s = [], u = [], l = t.length, c = e || function (e, t, n) { for (var r = 0, i = t.length; r < i; r++)se(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f; if (g && g(f, p, n, r), v) { i = Te(p, u), v(i, [], n, r), o = i.length; while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a)) } if (e) { if (y || d) { if (y) { i = [], o = p.length; while (o--) (a = p[o]) && i.push(f[o] = a); y(null, p = [], i, r) } o = p.length; while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a)) } } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p) }) } function Ee(e) { for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) { return e === i }, a, !0), l = be(function (e) { return -1 < P(i, e) }, a, !0), c = [function (e, t, n) { var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)if (t = b.relative[e[s].type]) c = [be(we(c), t)]; else { if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) { for (n = ++s; n < r; n++)if (b.relative[e[n].type]) break; return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e)) } c.push(t) } return we(c) } return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) { var n, r, i, o, a, s, u, l = x[e + " "]; if (l) return t ? 0 : l.slice(0); a = e, s = [], u = b.preFilter; while (a) { for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(B, " ") }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? se.error(e) : x(e, s).slice(0) }, f = se.compile = function (e, t) { var n, v, y, m, x, r, i = [], o = [], a = N[e + " "]; if (!a) { t || (t = h(e)), n = t.length; while (n--) (a = Ee(t[n]))[k] ? i.push(a) : o.push(a); (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) { var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = S += null == p ? 1 : Math.random() || .1, g = d.length; for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) { if (x && o) { a = 0, t || o.ownerDocument === C || (T(o), n = !E); while (s = v[a++]) if (s(o, t || C, n)) { r.push(o); break } i && (S = h) } m && ((o = !s && o) && u-- , e && c.push(o)) } if (u += l, m && l !== u) { a = 0; while (s = y[a++]) s(c, f, t, n); if (e) { if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r)); f = Te(f) } H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r) } return i && (S = h, w = p), c }, m ? le(r) : r))).selector = e } return a }, g = se.select = function (e, t, n, r) { var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e); if (n = n || [], 1 === c.length) { if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) { if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n; l && (t = t.parentNode), e = e.slice(o.shift().value.length) } i = G.needsContext.test(e) ? 0 : o.length; while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n; break } } } return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) { return 1 & e.compareDocumentPosition(C.createElement("fieldset")) }), ce(function (e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function (e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), d.attributes && ce(function (e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function (e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function (e) { return null == e.getAttribute("disabled") }) || fe(R, function (e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se }(C); k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape; var T = function (e, t, n) { var r = [], i = void 0 !== n; while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) { if (i && k(e).is(n)) break; r.push(e) } return r }, S = function (e, t) { for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e); return n }, N = k.expr.match.needsContext; function A(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() } var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; function j(e, n, r) { return m(n) ? k.grep(e, function (e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? k.grep(e, function (e) { return e === n !== r }) : "string" != typeof n ? k.grep(e, function (e) { return -1 < i.call(n, e) !== r }) : k.filter(n, e, r) } k.filter = function (e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) { return 1 === e.nodeType })) }, k.fn.extend({ find: function (e) { var t, n, r = this.length, i = this; if ("string" != typeof e) return this.pushStack(k(e).filter(function () { for (t = 0; t < r; t++)if (k.contains(i[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < r; t++)k.find(e, i[t], n); return 1 < r ? k.uniqueSort(n) : n }, filter: function (e) { return this.pushStack(j(this, e || [], !1)) }, not: function (e) { return this.pushStack(j(this, e || [], !0)) }, is: function (e) { return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length } }); var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (k.fn.init = function (e, t, n) { var r, i; if (!e) return this; if (n = n || q, "string" == typeof e) { if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (r[1]) { if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]); return this } return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this) }).prototype = k.fn, q = k(E); var H = /^(?:parents|prev(?:Until|All))/, O = { children: !0, contents: !0, next: !0, prev: !0 }; function P(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e } k.fn.extend({ has: function (e) { var t = k(e, this), n = t.length; return this.filter(function () { for (var e = 0; e < n; e++)if (k.contains(this, t[e])) return !0 }) }, closest: function (e, t) { var n, r = 0, i = this.length, o = [], a = "string" != typeof e && k(e); if (!N.test(e)) for (; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) { o.push(n); break } return this.pushStack(1 < o.length ? k.uniqueSort(o) : o) }, index: function (e) { return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t)))) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), k.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return T(e, "parentNode") }, parentsUntil: function (e, t, n) { return T(e, "parentNode", n) }, next: function (e) { return P(e, "nextSibling") }, prev: function (e) { return P(e, "previousSibling") }, nextAll: function (e) { return T(e, "nextSibling") }, prevAll: function (e) { return T(e, "previousSibling") }, nextUntil: function (e, t, n) { return T(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return T(e, "previousSibling", n) }, siblings: function (e) { return S((e.parentNode || {}).firstChild, e) }, children: function (e) { return S(e.firstChild) }, contents: function (e) { return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes)) } }, function (r, i) { k.fn[r] = function (e, t) { var n = k.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n) } }); var R = /[^\x20\t\r\n\f]+/g; function M(e) { return e } function I(e) { throw e } function W(e, t, n, r) { var i; try { e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } } k.Callbacks = function (r) { var e, n; r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function (e, t) { n[t] = !0 }), n) : k.extend({}, r); var i, t, o, a, s = [], u = [], l = -1, c = function () { for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) } r.memory || (t = !1), i = !1, a && (s = t ? [] : "") }, f = { add: function () { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { k.each(e, function (e, t) { m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function () { return k.each(arguments, function (e, t) { var n; while (-1 < (n = k.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function (e) { return e ? -1 < k.inArray(e, s) : 0 < s.length }, empty: function () { return s && (s = []), this }, disable: function () { return a = u = [], s = t = "", this }, disabled: function () { return !s }, lock: function () { return a = u = [], t || i || (s = t = ""), this }, locked: function () { return !!a }, fireWith: function (e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function () { return f.fireWith(this, arguments), this }, fired: function () { return !!o } }; return f }, k.extend({ Deferred: function (e) { var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]], i = "pending", a = { state: function () { return i }, always: function () { return s.done(arguments).fail(arguments), this }, "catch": function (e) { return a.then(null, e) }, pipe: function () { var i = arguments; return k.Deferred(function (r) { k.each(o, function (e, t) { var n = m(i[t[4]]) && i[t[4]]; s[t[1]](function () { var e = n && n.apply(this, arguments); e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments) }) }), i = null }).promise() }, then: function (t, n, r) { var u = 0; function l(i, o, a, s) { return function () { var n = this, r = arguments, e = function () { var e, t; if (!(i < u)) { if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution"); t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++ , t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r)) } }, t = s ? e : function () { try { e() } catch (e) { k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r)) } }; i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t)) } } return k.Deferred(function (e) { o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I)) }).promise() }, promise: function (e) { return null != e ? k.extend(e, a) : a } }, s = {}; return k.each(o, function (e, t) { var n = t[2], r = t[5]; a[t[1]] = n.add, r && n.add(function () { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith }), a.promise(s), e && e.call(s, s), s }, when: function (e) { var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = k.Deferred(), a = function (t) { return function (e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } }; if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then(); while (t--) W(i[t], a(t), o.reject); return o.promise() } }); var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; k.Deferred.exceptionHook = function (e, t) { C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, k.readyException = function (e) { C.setTimeout(function () { throw e }) }; var F = k.Deferred(); function B() { E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready() } k.fn.ready = function (e) { return F.then(e)["catch"](function (e) { k.readyException(e) }), this }, k.extend({ isReady: !1, readyWait: 1, ready: function (e) { (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k]) } }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B)); var _ = function (e, t, n, r, i, o, a) { var s = 0, u = e.length, l = null == n; if ("object" === w(n)) for (s in i = !0, n) _(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) { return l.call(k(e), n) })), t)) for (; s < u; s++)t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o }, z = /^-ms-/, U = /-([a-z])/g; function X(e, t) { return t.toUpperCase() } function V(e) { return e.replace(z, "ms-").replace(U, X) } var G = function (e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType }; function Y() { this.expando = k.expando + Y.uid++ } Y.uid = 1, Y.prototype = { cache: function (e) { var t = e[this.expando]; return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function (e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[V(t)] = n; else for (r in t) i[V(r)] = t[r]; return i }, get: function (e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)] }, access: function (e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function (e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length; while (n--) delete r[t[n]] } (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function (e) { var t = e[this.expando]; return void 0 !== t && !k.isEmptyObject(t) } }; var Q = new Y, J = new Y, K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z = /[A-Z]/g; function ee(e, t, n) { var r, i; if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) { try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i) } catch (e) { } J.set(e, t, n) } else n = void 0; return n } k.extend({ hasData: function (e) { return J.hasData(e) || Q.hasData(e) }, data: function (e, t, n) { return J.access(e, t, n) }, removeData: function (e, t) { J.remove(e, t) }, _data: function (e, t, n) { return Q.access(e, t, n) }, _removeData: function (e, t) { Q.remove(e, t) } }), k.fn.extend({ data: function (n, e) { var t, r, i, o = this[0], a = o && o.attributes; if (void 0 === n) { if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) { t = a.length; while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r])); Q.set(o, "hasDataAttrs", !0) } return i } return "object" == typeof n ? this.each(function () { J.set(this, n) }) : _(this, function (e) { var t; if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0; this.each(function () { J.set(this, n, e) }) }, null, e, 1 < arguments.length, null, !0) }, removeData: function (e) { return this.each(function () { J.remove(this, e) }) } }), k.extend({ queue: function (e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || [] }, dequeue: function (e, t) { t = t || "fx"; var n = k.queue(e, t), r = n.length, i = n.shift(), o = k._queueHooks(e, t); "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () { k.dequeue(e, t) }, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return Q.get(e, n) || Q.access(e, n, { empty: k.Callbacks("once memory").add(function () { Q.remove(e, [t + "queue", n]) }) }) } }), k.fn.extend({ queue: function (t, n) { var e = 2; return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () { var e = k.queue(this, t, n); k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t) }) }, dequeue: function (e) { return this.each(function () { k.dequeue(this, e) }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, t) { var n, r = 1, i = k.Deferred(), o = this, a = this.length, s = function () { --r || i.resolveWith(o, [o]) }; "string" != typeof e && (t = e, e = void 0), e = e || "fx"; while (a--) (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++ , n.empty.add(s)); return s(), i.promise(t) } }); var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"), re = ["Top", "Right", "Bottom", "Left"], ie = E.documentElement, oe = function (e) { return k.contains(e.ownerDocument, e) }, ae = { composed: !0 }; ie.getRootNode && (oe = function (e) { return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument }); var se = function (e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display") }, ue = function (e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; for (o in i = n.apply(e, r || []), t) e.style[o] = a[o]; return i }; function le(e, t, n, r) { var i, o, a = 20, s = r ? function () { return r.cur() } : function () { return k.css(e, t, "") }, u = s(), l = n && n[3] || (k.cssNumber[t] ? "" : "px"), c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t)); if (c && c[3] !== l) { u /= 2, l = l || c[3], c = +u || 1; while (a--) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o; c *= 2, k.style(e, t, c + l), n = n || [] } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i } var ce = {}; function fe(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n))); for (c = 0; c < f; c++)null != l[c] && (e[c].style.display = l[c]); return e } k.fn.extend({ show: function () { return fe(this, !0) }, hide: function () { return fe(this) }, toggle: function (e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () { se(this) ? k(this).show() : k(this).hide() }) } }); var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i, ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; function ve(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n } function ye(e, t) { for (var n = 0, r = e.length; n < r; n++)Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval")) } ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td; var me, xe, be = /<|&#?\w+;/; function we(e, t, n, r, i) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)if ((o = e[d]) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o); else if (be.test(o)) { a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0]; while (c--) a = a.lastChild; k.merge(p, a.childNodes), (a = f.firstChild).textContent = "" } else p.push(t.createTextNode(o)); f.textContent = "", d = 0; while (o = p[d++]) if (r && -1 < k.inArray(o, r)) i && i.push(o); else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) } return f } me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue; var Te = /^key/, Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ee = /^([^.]*)(?:\.(.+)|)/; function ke() { return !0 } function Se() { return !1 } function Ne(e, t) { return e === function () { try { return E.activeElement } catch (e) { } }() == ("focus" === t) } function Ae(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se; else if (!i) return e; return 1 === o && (a = i, (i = function (e) { return k().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = k.guid++)), e.each(function () { k.event.add(this, t, i, r, n) }) } function De(e, i, o) { o ? (Q.set(e, i, !1), k.event.add(e, i, { namespace: !1, handler: function (e) { var t, n, r = Q.get(this, i); if (1 & e.isTrigger && this[i]) { if (r.length) (k.event.special[i] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value } else r.length && (Q.set(this, i, { value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation()) } })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke) } k.event = { global: {}, add: function (t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t); if (v) { n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (e) { return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(R) || [""]).length; while (l--) d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && k.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0) } }, remove: function (e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e); if (v && (u = v.events)) { l = (t = (t || "").match(R) || [""]).length; while (l--) if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) { f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount-- , f.remove && f.remove.call(e, c)); a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d]) } else for (d in u) k.event.remove(e, d + t[l], n, r, !0); k.isEmptyObject(u) && Q.remove(e, "handle events") } }, dispatch: function (e) { var t, n, r, i, o, a, s = k.event.fix(e), u = new Array(arguments.length), l = (Q.get(this, "events") || {})[s.type] || [], c = k.event.special[s.type] || {}; for (u[0] = s, t = 1; t < arguments.length; t++)u[t] = arguments[t]; if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) { a = k.event.handlers.call(this, s, l), t = 0; while ((i = a[t++]) && !s.isPropagationStopped()) { s.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, s), s.result } }, handlers: function (e, t) { var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target; if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < u; n++)void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r); o.length && s.push({ elem: l, handlers: o }) } return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function (t, e) { Object.defineProperty(k.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function () { if (this.originalEvent) return e(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[t] }, set: function (e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) }, fix: function (e) { return e[k.expando] ? e : new k.Event(e) }, special: { load: { noBubble: !0 }, click: { setup: function (e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1 }, trigger: function (e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0 }, _default: function (e) { var t = e.target; return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a") } }, beforeunload: { postDispatch: function (e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, k.removeEvent = function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, k.Event = function (e, t) { if (!(this instanceof k.Event)) return new k.Event(e, t); e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0 }, k.Event.prototype = { constructor: k.Event, isDefaultPrevented: Se, isPropagationStopped: Se, isImmediatePropagationStopped: Se, isSimulated: !1, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function () { var e = this.originalEvent; this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, k.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (e) { var t = e.button; return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, k.event.addProp), k.each({ focus: "focusin", blur: "focusout" }, function (e, t) { k.event.special[e] = { setup: function () { return De(this, e, Ne), !1 }, trigger: function () { return De(this, e), !0 }, delegateType: t } }), k.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) { k.event.special[e] = { delegateType: i, bindType: i, handle: function (e) { var t, n = e.relatedTarget, r = e.handleObj; return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t } } }), k.fn.extend({ on: function (e, t, n, r) { return Ae(this, e, t, n, r) }, one: function (e, t, n, r) { return Ae(this, e, t, n, r, 1) }, off: function (e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () { k.event.remove(this, e, n, t) }) } }); var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, qe = /<script|<style|<link/i, Le = /checked\s*(?:[^=]|=\s*.checked.)/i, He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; function Oe(e, t) { return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e } function Pe(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e } function Re(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e } function Me(e, t) { var n, r, i, o, a, s, u, l; if (1 === t.nodeType) { if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) for (n = 0, r = l[i].length; n < r; n++)k.event.add(t, i, l[i][n]); J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u)) } } function Ie(n, r, i, o) { r = g.apply([], r); var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d); if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function (e) { var t = n.eq(e); h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o) }); if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) { for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++)u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c); if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++)u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }) : b(u.textContent.replace(He, ""), u, l)) } return n } function We(e, t, n) { for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r)); return e } k.extend({ htmlPrefilter: function (e) { return e.replace(je, "<$1></$2>") }, clone: function (e, t, n) { var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = oe(e); if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue); if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)Me(o[r], a[r]); else Me(e, c); return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c }, cleanData: function (e) { for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)if (G(n)) { if (t = n[Q.expando]) { if (t.events) for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle); n[Q.expando] = void 0 } n[J.expando] && (n[J.expando] = void 0) } } }), k.fn.extend({ detach: function (e) { return We(this, e, !0) }, remove: function (e) { return We(this, e) }, text: function (e) { return _(this, function (e) { return void 0 === e ? k.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function () { return Ie(this, arguments, function (e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e) }) }, prepend: function () { return Ie(this, arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = Oe(this, e); t.insertBefore(e, t.firstChild) } }) }, before: function () { return Ie(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return Ie(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function () { for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = ""); return this }, clone: function (e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function () { return k.clone(this, e, t) }) }, html: function (e) { return _(this, function (e) { var t = this[0] || {}, n = 0, r = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) { e = k.htmlPrefilter(e); try { for (; n < r; n++)1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e); t = 0 } catch (e) { } } t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function () { var n = []; return Ie(this, arguments, function (e) { var t = this.parentNode; k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this)) }, n) } }), k.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) { k.fn[e] = function (e) { for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get()); return this.pushStack(n) } }); var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"), Fe = function (e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = C), t.getComputedStyle(e) }, Be = new RegExp(re.join("|"), "i"); function _e(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a } function ze(e, t) { return { get: function () { if (!e()) return (this.get = t).apply(this, arguments); delete this.get } } } !function () { function e() { if (u) { s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u); var e = C.getComputedStyle(u); n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null } } function t(e) { return Math.round(parseFloat(e)) } var n, r, i, o, a, s = E.createElement("div"), u = E.createElement("div"); u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, { boxSizingReliable: function () { return e(), r }, pixelBoxStyles: function () { return e(), o }, pixelPosition: function () { return e(), n }, reliableMarginLeft: function () { return e(), a }, scrollboxSize: function () { return e(), i } })) }(); var Ue = ["Webkit", "Moz", "ms"], Xe = E.createElement("div").style, Ve = {}; function Ge(e) { var t = k.cssProps[e] || Ve[e]; return t || (e in Xe ? e : Ve[e] = function (e) { var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; while (n--) if ((e = Ue[n] + t) in Xe) return e }(e) || e) } var Ye = /^(none|table(?!-c[ea]).+)/, Qe = /^--/, Je = { position: "absolute", visibility: "hidden", display: "block" }, Ke = { letterSpacing: "0", fontWeight: "400" }; function Ze(e, t, n) { var r = ne.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t } function et(e, t, n, r, i, o) { var a = "width" === t ? 1 : 0, s = 0, u = 0; if (n === (r ? "border" : "content")) return 0; for (; a < 4; a += 2)"margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i)); return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u } function tt(e, t, n) { var r = Fe(e), i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r), o = i, a = _e(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1); if ($e.test(a)) { if (!n) return a; a = "auto" } return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px" } function nt(e, t, n, r, i) { return new nt.prototype.init(e, t, n, r, i) } k.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = _e(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function (e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = V(t), u = Qe.test(t), l = e.style; if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]; "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)) } }, css: function (e, t, n, r) { var i, o, a, s = V(t); return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i } }), k.each(["height", "width"], function (e, u) { k.cssHooks[u] = { get: function (e, t, n) { if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function () { return tt(e, u, n) }) }, set: function (e, t, n) { var r, i = Fe(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i), s = n ? et(e, u, n, a, i) : 0; return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s) } } }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) { if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, { marginLeft: 0 }, function () { return e.getBoundingClientRect().left })) + "px" }), k.each({ margin: "", padding: "", border: "Width" }, function (i, o) { k.cssHooks[i + o] = { expand: function (e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)n[i + re[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (k.cssHooks[i + o].set = Ze) }), k.fn.extend({ css: function (e, t) { return _(this, function (e, t, n) { var r, i, o = {}, a = 0; if (Array.isArray(t)) { for (r = Fe(e), i = t.length; a < i; a++)o[t[a]] = k.css(e, t[a], !1, r); return o } return void 0 !== n ? k.style(e, t, n) : k.css(e, t) }, e, t, 1 < arguments.length) } }), ((k.Tween = nt).prototype = { constructor: nt, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px") }, cur: function () { var e = nt.propHooks[this.prop]; return e && e.get ? e.get(this) : nt.propHooks._default.get(this) }, run: function (e) { var t, n = nt.propHooks[this.prop]; return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this } }).init.prototype = nt.prototype, (nt.propHooks = { _default: { get: function (e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function (e) { k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = nt.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, k.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, k.fx = nt.prototype.init, k.fx.step = {}; var rt, it, ot, at, st = /^(?:toggle|show|hide)$/, ut = /queueHooks$/; function lt() { it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick()) } function ct() { return C.setTimeout(function () { rt = void 0 }), rt = Date.now() } function ft(e, t) { var n, r = 0, i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t)i["margin" + (n = re[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i } function pt(e, t, n) { for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)if (r = i[o].call(n, t, e)) return r } function dt(o, e, t) { var n, a, r = 0, i = dt.prefilters.length, s = k.Deferred().always(function () { delete u.elem }), u = function () { if (a) return !1; for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) }, l = s.promise({ elem: o, props: k.extend({}, e), opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, t), originalProperties: e, originalOptions: t, startTime: rt || ct(), duration: t.duration, tweens: [], createTween: function (e, t) { var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n }, stop: function (e) { var t = 0, n = e ? l.tweens.length : 0; if (a) return this; for (a = !0; t < n; t++)l.tweens[t].run(1); return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this } }), c = l.props; for (!function (e, t) { var n, r, i, o, a; for (n in e) if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i }(c, l.opts.specialEasing); r < i; r++)if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n; return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l } k.Animation = k.extend(dt, { tweeners: { "*": [function (e, t) { var n = this.createTween(e, t); return le(n.elem, e, ne.exec(t), n), n }] }, tweener: function (e, t) { m(e) ? (t = e, e = ["*"]) : e = e.match(R); for (var n, r = 0, i = e.length; r < i; r++)n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t) }, prefilters: [function (e, t, n) { var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && se(e), v = Q.get(e, "fxshow"); for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () { a.unqueued || s() }), a.unqueued++ , p.always(function () { p.always(function () { a.unqueued-- , k.queue(e, "fx").length || a.empty.fire() }) })), t) if (i = t[r], st.test(i)) { if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) { if ("show" !== i || !v || void 0 === v[r]) continue; g = !0 } d[r] = v && v[r] || k.style(e, r) } if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && fe([e], !0), p.done(function () { for (r in g || fe([e]), Q.remove(e, "fxshow"), d) k.style(e, r, d[r]) })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0)) }], prefilter: function (e, t) { t ? dt.prefilters.unshift(e) : dt.prefilters.push(e) } }), k.speed = function (e, t, n) { var r = e && "object" == typeof e ? k.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t }; return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () { m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue) }, r }, k.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(se).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (t, e, n, r) { var i = k.isEmptyObject(t), o = k.speed(e, n, r), a = function () { var e = dt(this, k.extend({}, t), o); (i || Q.get(this, "finish")) && e.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function (i, e, o) { var a = function (e) { var t = e.stop; delete e.stop, t(o) }; return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () { var e = !0, t = null != i && i + "queueHooks", n = k.timers, r = Q.get(this); if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]); for (t = n.length; t--;)n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1)); !e && o || k.dequeue(this, i) }) }, finish: function (a) { return !1 !== a && (a = a || "fx"), this.each(function () { var e, t = Q.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = k.timers, o = n ? n.length : 0; for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;)i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1)); for (e = 0; e < o; e++)n[e] && n[e].finish && n[e].finish.call(this); delete t.finish }) } }), k.each(["toggle", "show", "hide"], function (e, r) { var i = k.fn[r]; k.fn[r] = function (e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n) } }), k.each({ slideDown: ft("show"), slideUp: ft("hide"), slideToggle: ft("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, r) { k.fn[e] = function (e, t, n) { return this.animate(r, e, t, n) } }), k.timers = [], k.fx.tick = function () { var e, t = 0, n = k.timers; for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1); n.length || k.fx.stop(), rt = void 0 }, k.fx.timer = function (e) { k.timers.push(e), k.fx.start() }, k.fx.interval = 13, k.fx.start = function () { it || (it = !0, lt()) }, k.fx.stop = function () { it = null }, k.fx.speeds = { slow: 600, fast: 200, _default: 400 }, k.fn.delay = function (r, e) { return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) { var n = C.setTimeout(e, r); t.stop = function () { C.clearTimeout(n) } }) }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value; var ht, gt = k.expr.attrHandle; k.fn.extend({ attr: function (e, t) { return _(this, k.attr, e, t, 1 < arguments.length) }, removeAttr: function (e) { return this.each(function () { k.removeAttr(this, e) }) } }), k.extend({ attr: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r) }, attrHooks: { type: { set: function (e, t) { if (!y.radioValue && "radio" === t && A(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function (e, t) { var n, r = 0, i = t && t.match(R); if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n) } }), ht = { set: function (e, t, n) { return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n } }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) { var a = gt[t] || k.find.attr; gt[t] = function (e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r } }); var vt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i; function mt(e) { return (e.match(R) || []).join(" ") } function xt(e) { return e.getAttribute && e.getAttribute("class") || "" } function bt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [] } k.fn.extend({ prop: function (e, t) { return _(this, k.prop, e, t, 1 < arguments.length) }, removeProp: function (e) { return this.each(function () { delete this[k.propFix[e] || e] }) } }), k.extend({ prop: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function (e) { var t = k.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (k.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function (e) { var t = e.parentNode; t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { k.propFix[this.toLowerCase()] = this }), k.fn.extend({ addClass: function (t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function (e) { k(this).addClass(t.call(this, e, xt(this))) }); if ((e = bt(t)).length) while (n = this[u++]) if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") { a = 0; while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " "); i !== (s = mt(r)) && n.setAttribute("class", s) } return this }, removeClass: function (t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function (e) { k(this).removeClass(t.call(this, e, xt(this))) }); if (!arguments.length) return this.attr("class", ""); if ((e = bt(t)).length) while (n = this[u++]) if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") { a = 0; while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " "); i !== (s = mt(r)) && n.setAttribute("class", s) } return this }, toggleClass: function (i, t) { var o = typeof i, a = "string" === o || Array.isArray(i); return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) { k(this).toggleClass(i.call(this, e, xt(this), t), t) }) : this.each(function () { var e, t, n, r; if (a) { t = 0, n = k(this), r = bt(i); while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e) } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || "")) }) }, hasClass: function (e) { var t, n, r = 0; t = " " + e + " "; while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0; return !1 } }); var wt = /\r/g; k.fn.extend({ val: function (n) { var r, e, i, t = this[0]; return arguments.length ? (i = m(n), this.each(function (e) { var t; 1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) { return null == e ? "" : e + "" })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t)) })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0 } }), k.extend({ valHooks: { option: { get: function (e) { var t = k.find.attr(e, "value"); return null != t ? t : mt(k.text(e)) } }, select: { get: function (e) { var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length; for (r = o < 0 ? u : a ? o : 0; r < u; r++)if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) { if (t = k(n).val(), a) return t; s.push(t) } return s }, set: function (e, t) { var n, r, i = e.options, o = k.makeArray(t), a = i.length; while (a--) ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), k.each(["radio", "checkbox"], function () { k.valHooks[this] = { set: function (e, t) { if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t) } }, y.checkOn || (k.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in C; var Tt = /^(?:focusinfocus|focusoutblur)$/, Ct = function (e) { e.stopPropagation() }; k.extend(k.event, { trigger: function (e, t, n, r) { var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : []; if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) { if (!r && !c.noBubble && !x(n)) { for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)p.push(o), a = o; a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C) } i = 0; while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault()); return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result } }, simulate: function (e, t, n) { var r = k.extend(new k.Event, n, { type: e, isSimulated: !0 }); k.event.trigger(r, null, t) } }), k.fn.extend({ trigger: function (e, t) { return this.each(function () { k.event.trigger(e, t, this) }) }, triggerHandler: function (e, t) { var n = this[0]; if (n) return k.event.trigger(e, t, n, !0) } }), y.focusin || k.each({ focus: "focusin", blur: "focusout" }, function (n, r) { var i = function (e) { k.event.simulate(r, e.target, k.event.fix(e)) }; k.event.special[r] = { setup: function () { var e = this.ownerDocument || this, t = Q.access(e, r); t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1) }, teardown: function () { var e = this.ownerDocument || this, t = Q.access(e, r) - 1; t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r)) } } }); var Et = C.location, kt = Date.now(), St = /\?/; k.parseXML = function (e) { var t; if (!e || "string" != typeof e) return null; try { t = (new C.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t }; var Nt = /\[\]$/, At = /\r?\n/g, Dt = /^(?:submit|button|image|reset|file)$/i, jt = /^(?:input|select|textarea|keygen)/i; function qt(n, e, r, i) { var t; if (Array.isArray(e)) k.each(e, function (e, t) { r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) }); else if (r || "object" !== w(e)) i(n, e); else for (t in e) qt(n + "[" + t + "]", e[t], r, i) } k.param = function (e, t) { var n, r = [], i = function (e, t) { var n = m(t) ? t() : t; r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (null == e) return ""; if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () { i(this.name, this.value) }); else for (n in e) qt(n, e[n], t, i); return r.join("&") }, k.fn.extend({ serialize: function () { return k.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = k.prop(this, "elements"); return e ? k.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e)) }).map(function (e, t) { var n = k(this).val(); return null == n ? null : Array.isArray(n) ? k.map(n, function (e) { return { name: t.name, value: e.replace(At, "\r\n") } }) : { name: t.name, value: n.replace(At, "\r\n") } }).get() } }); var Lt = /%20/g, Ht = /#.*$/, Ot = /([?&])_=[^&]*/, Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Rt = /^(?:GET|HEAD)$/, Mt = /^\/\//, It = {}, Wt = {}, $t = "*/".concat("*"), Ft = E.createElement("a"); function Bt(o) { return function (e, t) { "string" != typeof e && (t = e, e = "*"); var n, r = 0, i = e.toLowerCase().match(R) || []; if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t) } } function _t(t, i, o, a) { var s = {}, u = t === Wt; function l(e) { var r; return s[e] = !0, k.each(t[e] || [], function (e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r } return l(i.dataTypes[0]) || !s["*"] && l("*") } function zt(e, t) { var n, r, i = k.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && k.extend(!0, e, r), e } Ft.href = Et.href, k.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Et.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e) }, ajaxPrefilter: Bt(It), ajaxTransport: Bt(Wt), ajax: function (e, t) { "object" == typeof e && (t = e, e = void 0), t = t || {}; var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event, x = k.Deferred(), b = k.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = { readyState: 0, getResponseHeader: function (e) { var t; if (h) { if (!n) { n = {}; while (t = Pt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) } t = n[e.toLowerCase() + " "] } return null == t ? null : t.join(", ") }, getAllResponseHeaders: function () { return h ? p : null }, setRequestHeader: function (e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this }, overrideMimeType: function (e) { return null == h && (v.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]]; return this }, abort: function (e) { var t = e || u; return c && c.abort(t), l(0, t), this } }; if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) { r = E.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } } if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T; for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]); if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort(); if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) { if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T; v.async && 0 < v.timeout && (d = C.setTimeout(function () { T.abort("timeout") }, v.timeout)); try { h = !1, c.send(a, l) } catch (e) { if (h) throw e; l(-1, e) } } else l(-1, "No Transport"); function l(e, t, n, r) { var i, o, a, s, u, l = t; h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) { var r, i, o, a, s = e.contents, u = e.dataTypes; while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r) for (i in s) if (s[i] && s[i].test(r)) { u.unshift(i); break } if (u[0] in n) o = u[0]; else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break } a || (a = i) } o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] }(v, T, n)), s = function (e, t, n, r) { var i, o, a, s, u, l = {}, c = e.dataTypes.slice(); if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a]; o = c.shift(); while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) { !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break } if (!0 !== a) if (a && e["throws"]) t = a(t); else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop"))) } return T }, getJSON: function (e, t, n) { return k.get(e, t, n, "json") }, getScript: function (e, t) { return k.get(e, void 0, t, "script") } }), k.each(["get", "post"], function (e, i) { k[i] = function (e, t, n, r) { return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({ url: e, type: i, dataType: r, data: t, success: n }, k.isPlainObject(e) && e)) } }), k._evalUrl = function (e, t) { return k.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function () { } }, dataFilter: function (e) { k.globalEval(e, t) } }) }, k.fn.extend({ wrapAll: function (e) { var t; return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function (n) { return m(n) ? this.each(function (e) { k(this).wrapInner(n.call(this, e)) }) : this.each(function () { var e = k(this), t = e.contents(); t.length ? t.wrapAll(n) : e.append(n) }) }, wrap: function (t) { var n = m(t); return this.each(function (e) { k(this).wrapAll(n ? t.call(this, e) : t) }) }, unwrap: function (e) { return this.parent(e).not("body").each(function () { k(this).replaceWith(this.childNodes) }), this } }), k.expr.pseudos.hidden = function (e) { return !k.expr.pseudos.visible(e) }, k.expr.pseudos.visible = function (e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, k.ajaxSettings.xhr = function () { try { return new C.XMLHttpRequest } catch (e) { } }; var Ut = { 0: 200, 1223: 204 }, Xt = k.ajaxSettings.xhr(); y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function (i) { var o, a; if (y.cors || Xt && !i.crossDomain) return { send: function (e, t) { var n, r = i.xhr(); if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n]; for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]); o = function (e) { return function () { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () { 4 === r.readyState && C.setTimeout(function () { o && a() }) }, o = o("abort"); try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e } }, abort: function () { o && o() } } }), k.ajaxPrefilter(function (e) { e.crossDomain && (e.contents.script = !1) }), k.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) { return k.globalEval(e), e } } }), k.ajaxPrefilter("script", function (e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), k.ajaxTransport("script", function (n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function (e, t) { r = k("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function (e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), E.head.appendChild(r[0]) }, abort: function () { i && i() } } }); var Vt, Gt = [], Yt = /(=)\?(?=&|$)|\?\?/; k.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = Gt.pop() || k.expando + "_" + kt++; return this[e] = !0, e } }), k.ajaxPrefilter("json jsonp", function (e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () { return o || k.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = C[r], C[r] = function () { o = arguments }, n.always(function () { void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0 }), "script" }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function (e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes))); var r, i, o }, k.fn.load = function (e, t, n) { var r, i, o, a = this, s = e.indexOf(" "); return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && k.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) { o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e) }).always(n && function (e, t) { a.each(function () { n.apply(this, o || [e.responseText, t, e]) }) }), this }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { k.fn[t] = function (e) { return this.on(t, e) } }), k.expr.pseudos.animated = function (t) { return k.grep(k.timers, function (e) { return t === e.elem }).length }, k.offset = { setOffset: function (e, t, n) { var r, i, o, a, s, u, l = k.css(e, "position"), c = k(e), f = {}; "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f) } }, k.fn.extend({ offset: function (t) { if (arguments.length) return void 0 === t ? this : this.each(function (e) { k.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function () { if (this[0]) { var e, t, n, r = this[0], i = { top: 0, left: 0 }; if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect(); else { t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) e = e.parentNode; e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0)) } return { top: t.top - i.top - k.css(r, "marginTop", !0), left: t.left - i.left - k.css(r, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var e = this.offsetParent; while (e && "static" === k.css(e, "position")) e = e.offsetParent; return e || ie }) } }), k.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) { var o = "pageYOffset" === i; k.fn[t] = function (e) { return _(this, function (e, t, n) { var r; if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t]; r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n }, t, e, arguments.length) } }), k.each(["top", "left"], function (e, n) { k.cssHooks[n] = ze(y.pixelPosition, function (e, t) { if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t }) }), k.each({ Height: "height", Width: "width" }, function (a, s) { k.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) { k.fn[o] = function (e, t) { var n = arguments.length && (r || "boolean" != typeof e), i = r || (!0 === e || !0 === t ? "margin" : "border"); return _(this, function (e, t, n) { var r; return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i) }, s, n ? e : void 0, n) } }) }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) { k.fn[n] = function (e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }), k.fn.extend({ hover: function (e, t) { return this.mouseenter(e).mouseleave(t || e) } }), k.fn.extend({ bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), k.proxy = function (e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || k.guid++ , i }, k.holdReady = function (e) { e ? k.readyWait++ : k.ready(!0) }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function (e) { var t = k.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, "function" == typeof define && define.amd && define("jquery", [], function () { return k }); var Qt = C.jQuery, Jt = C.$; return k.noConflict = function (e) { return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k }, e || (C.jQuery = C.$ = k), k });
!function (t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery) }(function (t)
{
    var e = -1, o = -1, n = function (t) { return parseFloat(t) || 0 }, a = function (e) { var o = 1, a = t(e), i = null, r = []; return a.each(function () { var e = t(this), a = e.offset().top - n(e.css("margin-top")), s = r.length > 0 ? r[r.length - 1] : null; null === s ? r.push(e) : Math.floor(Math.abs(i - a)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), i = a }), r }, i = function (e)
    {
        var o = {
            byRow: !0, property: "height", target: null, remove: !1
        }; return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
    }, r = t.fn.matchHeight = function (e) { var o = i(e); if (o.remove) { var n = this; return this.css(o.property, ""), t.each(r._groups, function (t, e) { e.elements = e.elements.not(n) }), this } return this.length <= 1 && !o.target ? this : (r._groups.push({ elements: this, options: o }), r._apply(this, o), this) }; r.version = "0.7.2", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null,
        r._afterUpdate = null, r._rows = a, r._parse = n, r._parseOptions = i, r._apply = function (e, o)
        {
            var s = i(o), h = t(e), l = [h], c = t(window).scrollTop(), p = t("html").outerHeight(!0), u = h.parents().filter(":hidden"); return u.each(function () { var e = t(this); e.data("style-cache", e.attr("style")) }), u.css("display", "block"), s.byRow && !s.target && (h.each(function ()
            {
                var e = t(this), o = e.css("display"); "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
                    display: o, "padding-top": "0",
                    "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0", "border-top-width": "0", "border-bottom-width": "0", height: "100px", overflow: "hidden"
                })
            }), l = a(h), h.each(function () { var e = t(this); e.attr("style", e.data("style-cache") || "") })), t.each(l, function (e, o)
            {
                var a = t(o), i = 0; if (s.target) i = s.target.outerHeight(!1); else
                {
                    if (s.byRow && a.length <= 1) return void a.css(s.property, ""); a.each(function ()
                    {
                        var e = t(this), o = e.attr("style"), n = e.css("display"); "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block"); var a = {
                            display: n
                        }; a[s.property] = "", e.css(a), e.outerHeight(!1) > i && (i = e.outerHeight(!1)), o ? e.attr("style", o) : e.css("display", "")
                    })
                } a.each(function () { var e = t(this), o = 0; s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += n(e.css("border-top-width")) + n(e.css("border-bottom-width")), o += n(e.css("padding-top")) + n(e.css("padding-bottom"))), e.css(s.property, i - o + "px")) })
            }), u.each(function () { var e = t(this); e.attr("style", e.data("style-cache") || null) }), r._maintainScroll && t(window).scrollTop(c / p * t("html").outerHeight(!0)),
                this
        }, r._applyDataApi = function () { var e = {}; t("[data-match-height], [data-mh]").each(function () { var o = t(this), n = o.attr("data-mh") || o.attr("data-match-height"); n in e ? e[n] = e[n].add(o) : e[n] = o }), t.each(e, function () { this.matchHeight(!0) }) }; var s = function (e) { r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () { r._apply(this.elements, this.options) }), r._afterUpdate && r._afterUpdate(e, r._groups) }; r._update = function (n, a)
        {
            if (a && "resize" === a.type)
            {
                var i = t(window).width(); if (i === e) return; e = i;
            } n ? o === -1 && (o = setTimeout(function () { s(a), o = -1 }, r._throttle)) : s(a)
        }, t(r._applyDataApi); var h = t.fn.on ? "on" : "bind"; t(window)[h]("load", function (t) { r._update(!1, t) }), t(window)[h]("resize orientationchange", function (t) { r._update(!0, t) })
});
!function (e, a) { "object" == typeof exports && "undefined" != typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : e.moment = a() }(this, function () { "use strict"; var e, n; function l() { return e.apply(null, arguments) } function _(e) { return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e) } function i(e) { return null != e && "[object Object]" === Object.prototype.toString.call(e) } function o(e) { return void 0 === e } function m(e) { return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e) } function u(e) { return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e) } function M(e, a) { var t, s = []; for (t = 0; t < e.length; ++t)s.push(a(e[t], t)); return s } function h(e, a) { return Object.prototype.hasOwnProperty.call(e, a) } function L(e, a) { for (var t in a) h(a, t) && (e[t] = a[t]); return h(a, "toString") && (e.toString = a.toString), h(a, "valueOf") && (e.valueOf = a.valueOf), e } function c(e, a, t, s) { return Sa(e, a, t, s, !0).utc() } function Y(e) { return null == e._pf && (e._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), e._pf } function y(e) { if (null == e._isValid) { var a = Y(e), t = n.call(a.parsedDateParts, function (e) { return null != e }), s = !isNaN(e._d.getTime()) && a.overflow < 0 && !a.empty && !a.invalidMonth && !a.invalidWeekday && !a.weekdayMismatch && !a.nullInput && !a.invalidFormat && !a.userInvalidated && (!a.meridiem || a.meridiem && t); if (e._strict && (s = s && 0 === a.charsLeftOver && 0 === a.unusedTokens.length && void 0 === a.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return s; e._isValid = s } return e._isValid } function f(e) { var a = c(NaN); return null != e ? L(Y(a), e) : Y(a).userInvalidated = !0, a } n = Array.prototype.some ? Array.prototype.some : function (e) { for (var a = Object(this), t = a.length >>> 0, s = 0; s < t; s++)if (s in a && e.call(this, a[s], s, a)) return !0; return !1 }; var d = l.momentProperties = []; function k(e, a) { var t, s, n; if (o(a._isAMomentObject) || (e._isAMomentObject = a._isAMomentObject), o(a._i) || (e._i = a._i), o(a._f) || (e._f = a._f), o(a._l) || (e._l = a._l), o(a._strict) || (e._strict = a._strict), o(a._tzm) || (e._tzm = a._tzm), o(a._isUTC) || (e._isUTC = a._isUTC), o(a._offset) || (e._offset = a._offset), o(a._pf) || (e._pf = Y(a)), o(a._locale) || (e._locale = a._locale), 0 < d.length) for (t = 0; t < d.length; t++)o(n = a[s = d[t]]) || (e[s] = n); return e } var a = !1; function p(e) { k(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === a && (a = !0, l.updateOffset(this), a = !1) } function D(e) { return e instanceof p || null != e && null != e._isAMomentObject } function T(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e) } function g(e) { var a = +e, t = 0; return 0 !== a && isFinite(a) && (t = T(a)), t } function r(e, a, t) { var s, n = Math.min(e.length, a.length), d = Math.abs(e.length - a.length), r = 0; for (s = 0; s < n; s++)(t && e[s] !== a[s] || !t && g(e[s]) !== g(a[s])) && r++; return r + d } function w(e) { !1 === l.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e) } function t(n, d) { var r = !0; return L(function () { if (null != l.deprecationHandler && l.deprecationHandler(null, n), r) { for (var e, a = [], t = 0; t < arguments.length; t++) { if (e = "", "object" == typeof arguments[t]) { for (var s in e += "\n[" + t + "] ", arguments[0]) e += s + ": " + arguments[0][s] + ", "; e = e.slice(0, -2) } else e = arguments[t]; a.push(e) } w(n + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + (new Error).stack), r = !1 } return d.apply(this, arguments) }, d) } var s, v = {}; function S(e, a) { null != l.deprecationHandler && l.deprecationHandler(e, a), v[e] || (w(a), v[e] = !0) } function H(e) { return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e) } function b(e, a) { var t, s = L({}, e); for (t in a) h(a, t) && (i(e[t]) && i(a[t]) ? (s[t] = {}, L(s[t], e[t]), L(s[t], a[t])) : null != a[t] ? s[t] = a[t] : delete s[t]); for (t in e) h(e, t) && !h(a, t) && i(e[t]) && (s[t] = L({}, s[t])); return s } function j(e) { null != e && this.set(e) } l.suppressDeprecationWarnings = !1, l.deprecationHandler = null, s = Object.keys ? Object.keys : function (e) { var a, t = []; for (a in e) h(e, a) && t.push(a); return t }; var x = {}; function O(e, a) { var t = e.toLowerCase(); x[t] = x[t + "s"] = x[a] = e } function P(e) { return "string" == typeof e ? x[e] || x[e.toLowerCase()] : void 0 } function W(e) { var a, t, s = {}; for (t in e) h(e, t) && (a = P(t)) && (s[a] = e[t]); return s } var A = {}; function E(e, a) { A[e] = a } function F(e, a, t) { var s = "" + Math.abs(e), n = a - s.length; return (0 <= e ? t ? "+" : "" : "-") + Math.pow(10, Math.max(0, n)).toString().substr(1) + s } var z = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, J = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, N = {}, R = {}; function C(e, a, t, s) { var n = s; "string" == typeof s && (n = function () { return this[s]() }), e && (R[e] = n), a && (R[a[0]] = function () { return F(n.apply(this, arguments), a[1], a[2]) }), t && (R[t] = function () { return this.localeData().ordinal(n.apply(this, arguments), e) }) } function I(e, a) { return e.isValid() ? (a = U(a, e.localeData()), N[a] = N[a] || function (s) { var e, n, a, d = s.match(z); for (e = 0, n = d.length; e < n; e++)R[d[e]] ? d[e] = R[d[e]] : d[e] = (a = d[e]).match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, ""); return function (e) { var a, t = ""; for (a = 0; a < n; a++)t += H(d[a]) ? d[a].call(e, s) : d[a]; return t } }(a), N[a](e)) : e.localeData().invalidDate() } function U(e, a) { var t = 5; function s(e) { return a.longDateFormat(e) || e } for (J.lastIndex = 0; 0 <= t && J.test(e);)e = e.replace(J, s), J.lastIndex = 0, t -= 1; return e } var G = /\d/, V = /\d\d/, K = /\d{3}/, Z = /\d{4}/, $ = /[+-]?\d{6}/, B = /\d\d?/, q = /\d\d\d\d?/, Q = /\d\d\d\d\d\d?/, X = /\d{1,3}/, ee = /\d{1,4}/, ae = /[+-]?\d{1,6}/, te = /\d+/, se = /[+-]?\d+/, ne = /Z|[+-]\d\d:?\d\d/gi, de = /Z|[+-]\d\d(?::?\d\d)?/gi, re = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, _e = {}; function ie(e, t, s) { _e[e] = H(t) ? t : function (e, a) { return e && s ? s : t } } function oe(e, a) { return h(_e, e) ? _e[e](a._strict, a._locale) : new RegExp(me(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, a, t, s, n) { return a || t || s || n }))) } function me(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") } var ue = {}; function le(e, t) { var a, s = t; for ("string" == typeof e && (e = [e]), m(t) && (s = function (e, a) { a[t] = g(e) }), a = 0; a < e.length; a++)ue[e[a]] = s } function Me(e, n) { le(e, function (e, a, t, s) { t._w = t._w || {}, n(e, t._w, t, s) }) } var he = 0, Le = 1, ce = 2, Ye = 3, ye = 4, fe = 5, ke = 6, pe = 7, De = 8; function Te(e) { return ge(e) ? 366 : 365 } function ge(e) { return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 } C("Y", 0, 0, function () { var e = this.year(); return e <= 9999 ? "" + e : "+" + e }), C(0, ["YY", 2], 0, function () { return this.year() % 100 }), C(0, ["YYYY", 4], 0, "year"), C(0, ["YYYYY", 5], 0, "year"), C(0, ["YYYYYY", 6, !0], 0, "year"), O("year", "y"), E("year", 1), ie("Y", se), ie("YY", B, V), ie("YYYY", ee, Z), ie("YYYYY", ae, $), ie("YYYYYY", ae, $), le(["YYYYY", "YYYYYY"], he), le("YYYY", function (e, a) { a[he] = 2 === e.length ? l.parseTwoDigitYear(e) : g(e) }), le("YY", function (e, a) { a[he] = l.parseTwoDigitYear(e) }), le("Y", function (e, a) { a[he] = parseInt(e, 10) }), l.parseTwoDigitYear = function (e) { return g(e) + (68 < g(e) ? 1900 : 2e3) }; var we, ve = Se("FullYear", !0); function Se(a, t) { return function (e) { return null != e ? (be(this, a, e), l.updateOffset(this, t), this) : He(this, a) } } function He(e, a) { return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + a]() : NaN } function be(e, a, t) { e.isValid() && !isNaN(t) && ("FullYear" === a && ge(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + a](t, e.month(), je(t, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + a](t)) } function je(e, a) { if (isNaN(e) || isNaN(a)) return NaN; var t, s = (a % (t = 12) + t) % t; return e += (a - s) / 12, 1 === s ? ge(e) ? 29 : 28 : 31 - s % 7 % 2 } we = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) { var a; for (a = 0; a < this.length; ++a)if (this[a] === e) return a; return -1 }, C("M", ["MM", 2], "Mo", function () { return this.month() + 1 }), C("MMM", 0, 0, function (e) { return this.localeData().monthsShort(this, e) }), C("MMMM", 0, 0, function (e) { return this.localeData().months(this, e) }), O("month", "M"), E("month", 8), ie("M", B), ie("MM", B, V), ie("MMM", function (e, a) { return a.monthsShortRegex(e) }), ie("MMMM", function (e, a) { return a.monthsRegex(e) }), le(["M", "MM"], function (e, a) { a[Le] = g(e) - 1 }), le(["MMM", "MMMM"], function (e, a, t, s) { var n = t._locale.monthsParse(e, s, t._strict); null != n ? a[Le] = n : Y(t).invalidMonth = e }); var xe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Oe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"); var Pe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"); function We(e, a) { var t; if (!e.isValid()) return e; if ("string" == typeof a) if (/^\d+$/.test(a)) a = g(a); else if (!m(a = e.localeData().monthsParse(a))) return e; return t = Math.min(e.date(), je(e.year(), a)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](a, t), e } function Ae(e) { return null != e ? (We(this, e), l.updateOffset(this, !0), this) : He(this, "Month") } var Ee = re; var Fe = re; function ze() { function e(e, a) { return a.length - e.length } var a, t, s = [], n = [], d = []; for (a = 0; a < 12; a++)t = c([2e3, a]), s.push(this.monthsShort(t, "")), n.push(this.months(t, "")), d.push(this.months(t, "")), d.push(this.monthsShort(t, "")); for (s.sort(e), n.sort(e), d.sort(e), a = 0; a < 12; a++)s[a] = me(s[a]), n[a] = me(n[a]); for (a = 0; a < 24; a++)d[a] = me(d[a]); this._monthsRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i") } function Je(e) { var a; if (e < 100 && 0 <= e) { var t = Array.prototype.slice.call(arguments); t[0] = e + 400, a = new Date(Date.UTC.apply(null, t)), isFinite(a.getUTCFullYear()) && a.setUTCFullYear(e) } else a = new Date(Date.UTC.apply(null, arguments)); return a } function Ne(e, a, t) { var s = 7 + a - t; return -((7 + Je(e, 0, s).getUTCDay() - a) % 7) + s - 1 } function Re(e, a, t, s, n) { var d, r, _ = 1 + 7 * (a - 1) + (7 + t - s) % 7 + Ne(e, s, n); return r = _ <= 0 ? Te(d = e - 1) + _ : _ > Te(e) ? (d = e + 1, _ - Te(e)) : (d = e, _), { year: d, dayOfYear: r } } function Ce(e, a, t) { var s, n, d = Ne(e.year(), a, t), r = Math.floor((e.dayOfYear() - d - 1) / 7) + 1; return r < 1 ? s = r + Ie(n = e.year() - 1, a, t) : r > Ie(e.year(), a, t) ? (s = r - Ie(e.year(), a, t), n = e.year() + 1) : (n = e.year(), s = r), { week: s, year: n } } function Ie(e, a, t) { var s = Ne(e, a, t), n = Ne(e + 1, a, t); return (Te(e) - s + n) / 7 } C("w", ["ww", 2], "wo", "week"), C("W", ["WW", 2], "Wo", "isoWeek"), O("week", "w"), O("isoWeek", "W"), E("week", 5), E("isoWeek", 5), ie("w", B), ie("ww", B, V), ie("W", B), ie("WW", B, V), Me(["w", "ww", "W", "WW"], function (e, a, t, s) { a[s.substr(0, 1)] = g(e) }); function Ue(e, a) { return e.slice(a, 7).concat(e.slice(0, a)) } C("d", 0, "do", "day"), C("dd", 0, 0, function (e) { return this.localeData().weekdaysMin(this, e) }), C("ddd", 0, 0, function (e) { return this.localeData().weekdaysShort(this, e) }), C("dddd", 0, 0, function (e) { return this.localeData().weekdays(this, e) }), C("e", 0, 0, "weekday"), C("E", 0, 0, "isoWeekday"), O("day", "d"), O("weekday", "e"), O("isoWeekday", "E"), E("day", 11), E("weekday", 11), E("isoWeekday", 11), ie("d", B), ie("e", B), ie("E", B), ie("dd", function (e, a) { return a.weekdaysMinRegex(e) }), ie("ddd", function (e, a) { return a.weekdaysShortRegex(e) }), ie("dddd", function (e, a) { return a.weekdaysRegex(e) }), Me(["dd", "ddd", "dddd"], function (e, a, t, s) { var n = t._locale.weekdaysParse(e, s, t._strict); null != n ? a.d = n : Y(t).invalidWeekday = e }), Me(["d", "e", "E"], function (e, a, t, s) { a[s] = g(e) }); var Ge = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"); var Ve = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"); var Ke = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"); var Ze = re; var $e = re; var Be = re; function qe() { function e(e, a) { return a.length - e.length } var a, t, s, n, d, r = [], _ = [], i = [], o = []; for (a = 0; a < 7; a++)t = c([2e3, 1]).day(a), s = this.weekdaysMin(t, ""), n = this.weekdaysShort(t, ""), d = this.weekdays(t, ""), r.push(s), _.push(n), i.push(d), o.push(s), o.push(n), o.push(d); for (r.sort(e), _.sort(e), i.sort(e), o.sort(e), a = 0; a < 7; a++)_[a] = me(_[a]), i[a] = me(i[a]), o[a] = me(o[a]); this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + _.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i") } function Qe() { return this.hours() % 12 || 12 } function Xe(e, a) { C(e, 0, 0, function () { return this.localeData().meridiem(this.hours(), this.minutes(), a) }) } function ea(e, a) { return a._meridiemParse } C("H", ["HH", 2], 0, "hour"), C("h", ["hh", 2], 0, Qe), C("k", ["kk", 2], 0, function () { return this.hours() || 24 }), C("hmm", 0, 0, function () { return "" + Qe.apply(this) + F(this.minutes(), 2) }), C("hmmss", 0, 0, function () { return "" + Qe.apply(this) + F(this.minutes(), 2) + F(this.seconds(), 2) }), C("Hmm", 0, 0, function () { return "" + this.hours() + F(this.minutes(), 2) }), C("Hmmss", 0, 0, function () { return "" + this.hours() + F(this.minutes(), 2) + F(this.seconds(), 2) }), Xe("a", !0), Xe("A", !1), O("hour", "h"), E("hour", 13), ie("a", ea), ie("A", ea), ie("H", B), ie("h", B), ie("k", B), ie("HH", B, V), ie("hh", B, V), ie("kk", B, V), ie("hmm", q), ie("hmmss", Q), ie("Hmm", q), ie("Hmmss", Q), le(["H", "HH"], Ye), le(["k", "kk"], function (e, a, t) { var s = g(e); a[Ye] = 24 === s ? 0 : s }), le(["a", "A"], function (e, a, t) { t._isPm = t._locale.isPM(e), t._meridiem = e }), le(["h", "hh"], function (e, a, t) { a[Ye] = g(e), Y(t).bigHour = !0 }), le("hmm", function (e, a, t) { var s = e.length - 2; a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s)), Y(t).bigHour = !0 }), le("hmmss", function (e, a, t) { var s = e.length - 4, n = e.length - 2; a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s, 2)), a[fe] = g(e.substr(n)), Y(t).bigHour = !0 }), le("Hmm", function (e, a, t) { var s = e.length - 2; a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s)) }), le("Hmmss", function (e, a, t) { var s = e.length - 4, n = e.length - 2; a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s, 2)), a[fe] = g(e.substr(n)) }); var aa, ta = Se("Hours", !0), sa = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Oe, monthsShort: Pe, week: { dow: 0, doy: 6 }, weekdays: Ge, weekdaysMin: Ke, weekdaysShort: Ve, meridiemParse: /[ap]\.?m?\.?/i }, na = {}, da = {}; function ra(e) { return e ? e.toLowerCase().replace("_", "-") : e } function _a(e) { var a = null; if (!na[e] && "undefined" != typeof module && module && module.exports) try { a = aa._abbr, require("./locale/" + e), ia(a) } catch (e) { } return na[e] } function ia(e, a) { var t; return e && ((t = o(a) ? ma(e) : oa(e, a)) ? aa = t : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), aa._abbr } function oa(e, a) { if (null === a) return delete na[e], null; var t, s = sa; if (a.abbr = e, null != na[e]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), s = na[e]._config; else if (null != a.parentLocale) if (null != na[a.parentLocale]) s = na[a.parentLocale]._config; else { if (null == (t = _a(a.parentLocale))) return da[a.parentLocale] || (da[a.parentLocale] = []), da[a.parentLocale].push({ name: e, config: a }), null; s = t._config } return na[e] = new j(b(s, a)), da[e] && da[e].forEach(function (e) { oa(e.name, e.config) }), ia(e), na[e] } function ma(e) { var a; if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return aa; if (!_(e)) { if (a = _a(e)) return a; e = [e] } return function (e) { for (var a, t, s, n, d = 0; d < e.length;) { for (a = (n = ra(e[d]).split("-")).length, t = (t = ra(e[d + 1])) ? t.split("-") : null; 0 < a;) { if (s = _a(n.slice(0, a).join("-"))) return s; if (t && t.length >= a && r(n, t, !0) >= a - 1) break; a-- } d++ } return aa }(e) } function ua(e) { var a, t = e._a; return t && -2 === Y(e).overflow && (a = t[Le] < 0 || 11 < t[Le] ? Le : t[ce] < 1 || t[ce] > je(t[he], t[Le]) ? ce : t[Ye] < 0 || 24 < t[Ye] || 24 === t[Ye] && (0 !== t[ye] || 0 !== t[fe] || 0 !== t[ke]) ? Ye : t[ye] < 0 || 59 < t[ye] ? ye : t[fe] < 0 || 59 < t[fe] ? fe : t[ke] < 0 || 999 < t[ke] ? ke : -1, Y(e)._overflowDayOfYear && (a < he || ce < a) && (a = ce), Y(e)._overflowWeeks && -1 === a && (a = pe), Y(e)._overflowWeekday && -1 === a && (a = De), Y(e).overflow = a), e } function la(e, a, t) { return null != e ? e : null != a ? a : t } function Ma(e) { var a, t, s, n, d, r = []; if (!e._d) { var _, i; for (_ = e, i = new Date(l.now()), s = _._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()], e._w && null == e._a[ce] && null == e._a[Le] && function (e) { var a, t, s, n, d, r, _, i; if (null != (a = e._w).GG || null != a.W || null != a.E) d = 1, r = 4, t = la(a.GG, e._a[he], Ce(Ha(), 1, 4).year), s = la(a.W, 1), ((n = la(a.E, 1)) < 1 || 7 < n) && (i = !0); else { d = e._locale._week.dow, r = e._locale._week.doy; var o = Ce(Ha(), d, r); t = la(a.gg, e._a[he], o.year), s = la(a.w, o.week), null != a.d ? ((n = a.d) < 0 || 6 < n) && (i = !0) : null != a.e ? (n = a.e + d, (a.e < 0 || 6 < a.e) && (i = !0)) : n = d } s < 1 || s > Ie(t, d, r) ? Y(e)._overflowWeeks = !0 : null != i ? Y(e)._overflowWeekday = !0 : (_ = Re(t, s, n, d, r), e._a[he] = _.year, e._dayOfYear = _.dayOfYear) }(e), null != e._dayOfYear && (d = la(e._a[he], s[he]), (e._dayOfYear > Te(d) || 0 === e._dayOfYear) && (Y(e)._overflowDayOfYear = !0), t = Je(d, 0, e._dayOfYear), e._a[Le] = t.getUTCMonth(), e._a[ce] = t.getUTCDate()), a = 0; a < 3 && null == e._a[a]; ++a)e._a[a] = r[a] = s[a]; for (; a < 7; a++)e._a[a] = r[a] = null == e._a[a] ? 2 === a ? 1 : 0 : e._a[a]; 24 === e._a[Ye] && 0 === e._a[ye] && 0 === e._a[fe] && 0 === e._a[ke] && (e._nextDay = !0, e._a[Ye] = 0), e._d = (e._useUTC ? Je : function (e, a, t, s, n, d, r) { var _; return e < 100 && 0 <= e ? (_ = new Date(e + 400, a, t, s, n, d, r), isFinite(_.getFullYear()) && _.setFullYear(e)) : _ = new Date(e, a, t, s, n, d, r), _ }).apply(null, r), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ye] = 24), e._w && void 0 !== e._w.d && e._w.d !== n && (Y(e).weekdayMismatch = !0) } } var ha = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, La = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ca = /Z|[+-]\d\d(?::?\d\d)?/, Ya = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], ya = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], fa = /^\/?Date\((\-?\d+)/i; function ka(e) { var a, t, s, n, d, r, _ = e._i, i = ha.exec(_) || La.exec(_); if (i) { for (Y(e).iso = !0, a = 0, t = Ya.length; a < t; a++)if (Ya[a][1].exec(i[1])) { n = Ya[a][0], s = !1 !== Ya[a][2]; break } if (null == n) return void (e._isValid = !1); if (i[3]) { for (a = 0, t = ya.length; a < t; a++)if (ya[a][1].exec(i[3])) { d = (i[2] || " ") + ya[a][0]; break } if (null == d) return void (e._isValid = !1) } if (!s && null != d) return void (e._isValid = !1); if (i[4]) { if (!ca.exec(i[4])) return void (e._isValid = !1); r = "Z" } e._f = n + (d || "") + (r || ""), wa(e) } else e._isValid = !1 } var pa = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/; function Da(e, a, t, s, n, d) { var r = [function (e) { var a = parseInt(e, 10); { if (a <= 49) return 2e3 + a; if (a <= 999) return 1900 + a } return a }(e), Pe.indexOf(a), parseInt(t, 10), parseInt(s, 10), parseInt(n, 10)]; return d && r.push(parseInt(d, 10)), r } var Ta = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 }; function ga(e) { var a, t, s, n = pa.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")); if (n) { var d = Da(n[4], n[3], n[2], n[5], n[6], n[7]); if (a = n[1], t = d, s = e, a && Ve.indexOf(a) !== new Date(t[0], t[1], t[2]).getDay() && (Y(s).weekdayMismatch = !0, !(s._isValid = !1))) return; e._a = d, e._tzm = function (e, a, t) { if (e) return Ta[e]; if (a) return 0; var s = parseInt(t, 10), n = s % 100; return (s - n) / 100 * 60 + n }(n[8], n[9], n[10]), e._d = Je.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), Y(e).rfc2822 = !0 } else e._isValid = !1 } function wa(e) { if (e._f !== l.ISO_8601) if (e._f !== l.RFC_2822) { e._a = [], Y(e).empty = !0; var a, t, s, n, d, r, _, i, o = "" + e._i, m = o.length, u = 0; for (s = U(e._f, e._locale).match(z) || [], a = 0; a < s.length; a++)n = s[a], (t = (o.match(oe(n, e)) || [])[0]) && (0 < (d = o.substr(0, o.indexOf(t))).length && Y(e).unusedInput.push(d), o = o.slice(o.indexOf(t) + t.length), u += t.length), R[n] ? (t ? Y(e).empty = !1 : Y(e).unusedTokens.push(n), r = n, i = e, null != (_ = t) && h(ue, r) && ue[r](_, i._a, i, r)) : e._strict && !t && Y(e).unusedTokens.push(n); Y(e).charsLeftOver = m - u, 0 < o.length && Y(e).unusedInput.push(o), e._a[Ye] <= 12 && !0 === Y(e).bigHour && 0 < e._a[Ye] && (Y(e).bigHour = void 0), Y(e).parsedDateParts = e._a.slice(0), Y(e).meridiem = e._meridiem, e._a[Ye] = function (e, a, t) { var s; if (null == t) return a; return null != e.meridiemHour ? e.meridiemHour(a, t) : (null != e.isPM && ((s = e.isPM(t)) && a < 12 && (a += 12), s || 12 !== a || (a = 0)), a) }(e._locale, e._a[Ye], e._meridiem), Ma(e), ua(e) } else ga(e); else ka(e) } function va(e) { var a, t, s, n, d = e._i, r = e._f; return e._locale = e._locale || ma(e._l), null === d || void 0 === r && "" === d ? f({ nullInput: !0 }) : ("string" == typeof d && (e._i = d = e._locale.preparse(d)), D(d) ? new p(ua(d)) : (u(d) ? e._d = d : _(r) ? function (e) { var a, t, s, n, d; if (0 === e._f.length) return Y(e).invalidFormat = !0, e._d = new Date(NaN); for (n = 0; n < e._f.length; n++)d = 0, a = k({}, e), null != e._useUTC && (a._useUTC = e._useUTC), a._f = e._f[n], wa(a), y(a) && (d += Y(a).charsLeftOver, d += 10 * Y(a).unusedTokens.length, Y(a).score = d, (null == s || d < s) && (s = d, t = a)); L(e, t || a) }(e) : r ? wa(e) : o(t = (a = e)._i) ? a._d = new Date(l.now()) : u(t) ? a._d = new Date(t.valueOf()) : "string" == typeof t ? (s = a, null === (n = fa.exec(s._i)) ? (ka(s), !1 === s._isValid && (delete s._isValid, ga(s), !1 === s._isValid && (delete s._isValid, l.createFromInputFallback(s)))) : s._d = new Date(+n[1])) : _(t) ? (a._a = M(t.slice(0), function (e) { return parseInt(e, 10) }), Ma(a)) : i(t) ? function (e) { if (!e._d) { var a = W(e._i); e._a = M([a.year, a.month, a.day || a.date, a.hour, a.minute, a.second, a.millisecond], function (e) { return e && parseInt(e, 10) }), Ma(e) } }(a) : m(t) ? a._d = new Date(t) : l.createFromInputFallback(a), y(e) || (e._d = null), e)) } function Sa(e, a, t, s, n) { var d, r = {}; return !0 !== t && !1 !== t || (s = t, t = void 0), (i(e) && function (e) { if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length; var a; for (a in e) if (e.hasOwnProperty(a)) return !1; return !0 }(e) || _(e) && 0 === e.length) && (e = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = n, r._l = t, r._i = e, r._f = a, r._strict = s, (d = new p(ua(va(r))))._nextDay && (d.add(1, "d"), d._nextDay = void 0), d } function Ha(e, a, t, s) { return Sa(e, a, t, s, !1) } l.createFromInputFallback = t("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) { e._d = new Date(e._i + (e._useUTC ? " UTC" : "")) }), l.ISO_8601 = function () { }, l.RFC_2822 = function () { }; var ba = t("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () { var e = Ha.apply(null, arguments); return this.isValid() && e.isValid() ? e < this ? this : e : f() }), ja = t("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () { var e = Ha.apply(null, arguments); return this.isValid() && e.isValid() ? this < e ? this : e : f() }); function xa(e, a) { var t, s; if (1 === a.length && _(a[0]) && (a = a[0]), !a.length) return Ha(); for (t = a[0], s = 1; s < a.length; ++s)a[s].isValid() && !a[s][e](t) || (t = a[s]); return t } var Oa = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"]; function Pa(e) { var a = W(e), t = a.year || 0, s = a.quarter || 0, n = a.month || 0, d = a.week || a.isoWeek || 0, r = a.day || 0, _ = a.hour || 0, i = a.minute || 0, o = a.second || 0, m = a.millisecond || 0; this._isValid = function (e) { for (var a in e) if (-1 === we.call(Oa, a) || null != e[a] && isNaN(e[a])) return !1; for (var t = !1, s = 0; s < Oa.length; ++s)if (e[Oa[s]]) { if (t) return !1; parseFloat(e[Oa[s]]) !== g(e[Oa[s]]) && (t = !0) } return !0 }(a), this._milliseconds = +m + 1e3 * o + 6e4 * i + 1e3 * _ * 60 * 60, this._days = +r + 7 * d, this._months = +n + 3 * s + 12 * t, this._data = {}, this._locale = ma(), this._bubble() } function Wa(e) { return e instanceof Pa } function Aa(e) { return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e) } function Ea(e, t) { C(e, 0, 0, function () { var e = this.utcOffset(), a = "+"; return e < 0 && (e = -e, a = "-"), a + F(~~(e / 60), 2) + t + F(~~e % 60, 2) }) } Ea("Z", ":"), Ea("ZZ", ""), ie("Z", de), ie("ZZ", de), le(["Z", "ZZ"], function (e, a, t) { t._useUTC = !0, t._tzm = za(de, e) }); var Fa = /([\+\-]|\d\d)/gi; function za(e, a) { var t = (a || "").match(e); if (null === t) return null; var s = ((t[t.length - 1] || []) + "").match(Fa) || ["-", 0, 0], n = 60 * s[1] + g(s[2]); return 0 === n ? 0 : "+" === s[0] ? n : -n } function Ja(e, a) { var t, s; return a._isUTC ? (t = a.clone(), s = (D(e) || u(e) ? e.valueOf() : Ha(e).valueOf()) - t.valueOf(), t._d.setTime(t._d.valueOf() + s), l.updateOffset(t, !1), t) : Ha(e).local() } function Na(e) { return 15 * -Math.round(e._d.getTimezoneOffset() / 15) } function Ra() { return !!this.isValid() && (this._isUTC && 0 === this._offset) } l.updateOffset = function () { }; var Ca = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, Ia = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/; function Ua(e, a) { var t, s, n, d = e, r = null; return Wa(e) ? d = { ms: e._milliseconds, d: e._days, M: e._months } : m(e) ? (d = {}, a ? d[a] = e : d.milliseconds = e) : (r = Ca.exec(e)) ? (t = "-" === r[1] ? -1 : 1, d = { y: 0, d: g(r[ce]) * t, h: g(r[Ye]) * t, m: g(r[ye]) * t, s: g(r[fe]) * t, ms: g(Aa(1e3 * r[ke])) * t }) : (r = Ia.exec(e)) ? (t = "-" === r[1] ? -1 : 1, d = { y: Ga(r[2], t), M: Ga(r[3], t), w: Ga(r[4], t), d: Ga(r[5], t), h: Ga(r[6], t), m: Ga(r[7], t), s: Ga(r[8], t) }) : null == d ? d = {} : "object" == typeof d && ("from" in d || "to" in d) && (n = function (e, a) { var t; if (!e.isValid() || !a.isValid()) return { milliseconds: 0, months: 0 }; a = Ja(a, e), e.isBefore(a) ? t = Va(e, a) : ((t = Va(a, e)).milliseconds = -t.milliseconds, t.months = -t.months); return t }(Ha(d.from), Ha(d.to)), (d = {}).ms = n.milliseconds, d.M = n.months), s = new Pa(d), Wa(e) && h(e, "_locale") && (s._locale = e._locale), s } function Ga(e, a) { var t = e && parseFloat(e.replace(",", ".")); return (isNaN(t) ? 0 : t) * a } function Va(e, a) { var t = {}; return t.months = a.month() - e.month() + 12 * (a.year() - e.year()), e.clone().add(t.months, "M").isAfter(a) && --t.months, t.milliseconds = +a - +e.clone().add(t.months, "M"), t } function Ka(s, n) { return function (e, a) { var t; return null === a || isNaN(+a) || (S(n, "moment()." + n + "(period, number) is deprecated. Please use moment()." + n + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), t = e, e = a, a = t), Za(this, Ua(e = "string" == typeof e ? +e : e, a), s), this } } function Za(e, a, t, s) { var n = a._milliseconds, d = Aa(a._days), r = Aa(a._months); e.isValid() && (s = null == s || s, r && We(e, He(e, "Month") + r * t), d && be(e, "Date", He(e, "Date") + d * t), n && e._d.setTime(e._d.valueOf() + n * t), s && l.updateOffset(e, d || r)) } Ua.fn = Pa.prototype, Ua.invalid = function () { return Ua(NaN) }; var $a = Ka(1, "add"), Ba = Ka(-1, "subtract"); function qa(e, a) { var t = 12 * (a.year() - e.year()) + (a.month() - e.month()), s = e.clone().add(t, "months"); return -(t + (a - s < 0 ? (a - s) / (s - e.clone().add(t - 1, "months")) : (a - s) / (e.clone().add(t + 1, "months") - s))) || 0 } function Qa(e) { var a; return void 0 === e ? this._locale._abbr : (null != (a = ma(e)) && (this._locale = a), this) } l.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", l.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]"; var Xa = t("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) { return void 0 === e ? this.localeData() : this.locale(e) }); function et() { return this._locale } var at = 126227808e5; function tt(e, a) { return (e % a + a) % a } function st(e, a, t) { return e < 100 && 0 <= e ? new Date(e + 400, a, t) - at : new Date(e, a, t).valueOf() } function nt(e, a, t) { return e < 100 && 0 <= e ? Date.UTC(e + 400, a, t) - at : Date.UTC(e, a, t) } function dt(e, a) { C(0, [e, e.length], 0, a) } function rt(e, a, t, s, n) { var d; return null == e ? Ce(this, s, n).year : ((d = Ie(e, s, n)) < a && (a = d), function (e, a, t, s, n) { var d = Re(e, a, t, s, n), r = Je(d.year, 0, d.dayOfYear); return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this }.call(this, e, a, t, s, n)) } C(0, ["gg", 2], 0, function () { return this.weekYear() % 100 }), C(0, ["GG", 2], 0, function () { return this.isoWeekYear() % 100 }), dt("gggg", "weekYear"), dt("ggggg", "weekYear"), dt("GGGG", "isoWeekYear"), dt("GGGGG", "isoWeekYear"), O("weekYear", "gg"), O("isoWeekYear", "GG"), E("weekYear", 1), E("isoWeekYear", 1), ie("G", se), ie("g", se), ie("GG", B, V), ie("gg", B, V), ie("GGGG", ee, Z), ie("gggg", ee, Z), ie("GGGGG", ae, $), ie("ggggg", ae, $), Me(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, a, t, s) { a[s.substr(0, 2)] = g(e) }), Me(["gg", "GG"], function (e, a, t, s) { a[s] = l.parseTwoDigitYear(e) }), C("Q", 0, "Qo", "quarter"), O("quarter", "Q"), E("quarter", 7), ie("Q", G), le("Q", function (e, a) { a[Le] = 3 * (g(e) - 1) }), C("D", ["DD", 2], "Do", "date"), O("date", "D"), E("date", 9), ie("D", B), ie("DD", B, V), ie("Do", function (e, a) { return e ? a._dayOfMonthOrdinalParse || a._ordinalParse : a._dayOfMonthOrdinalParseLenient }), le(["D", "DD"], ce), le("Do", function (e, a) { a[ce] = g(e.match(B)[0]) }); var _t = Se("Date", !0); C("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), O("dayOfYear", "DDD"), E("dayOfYear", 4), ie("DDD", X), ie("DDDD", K), le(["DDD", "DDDD"], function (e, a, t) { t._dayOfYear = g(e) }), C("m", ["mm", 2], 0, "minute"), O("minute", "m"), E("minute", 14), ie("m", B), ie("mm", B, V), le(["m", "mm"], ye); var it = Se("Minutes", !1); C("s", ["ss", 2], 0, "second"), O("second", "s"), E("second", 15), ie("s", B), ie("ss", B, V), le(["s", "ss"], fe); var ot, mt = Se("Seconds", !1); for (C("S", 0, 0, function () { return ~~(this.millisecond() / 100) }), C(0, ["SS", 2], 0, function () { return ~~(this.millisecond() / 10) }), C(0, ["SSS", 3], 0, "millisecond"), C(0, ["SSSS", 4], 0, function () { return 10 * this.millisecond() }), C(0, ["SSSSS", 5], 0, function () { return 100 * this.millisecond() }), C(0, ["SSSSSS", 6], 0, function () { return 1e3 * this.millisecond() }), C(0, ["SSSSSSS", 7], 0, function () { return 1e4 * this.millisecond() }), C(0, ["SSSSSSSS", 8], 0, function () { return 1e5 * this.millisecond() }), C(0, ["SSSSSSSSS", 9], 0, function () { return 1e6 * this.millisecond() }), O("millisecond", "ms"), E("millisecond", 16), ie("S", X, G), ie("SS", X, V), ie("SSS", X, K), ot = "SSSS"; ot.length <= 9; ot += "S")ie(ot, te); function ut(e, a) { a[ke] = g(1e3 * ("0." + e)) } for (ot = "S"; ot.length <= 9; ot += "S")le(ot, ut); var lt = Se("Milliseconds", !1); C("z", 0, 0, "zoneAbbr"), C("zz", 0, 0, "zoneName"); var Mt = p.prototype; function ht(e) { return e } Mt.add = $a, Mt.calendar = function (e, a) { var t = e || Ha(), s = Ja(t, this).startOf("day"), n = l.calendarFormat(this, s) || "sameElse", d = a && (H(a[n]) ? a[n].call(this, t) : a[n]); return this.format(d || this.localeData().calendar(n, this, Ha(t))) }, Mt.clone = function () { return new p(this) }, Mt.diff = function (e, a, t) { var s, n, d; if (!this.isValid()) return NaN; if (!(s = Ja(e, this)).isValid()) return NaN; switch (n = 6e4 * (s.utcOffset() - this.utcOffset()), a = P(a)) { case "year": d = qa(this, s) / 12; break; case "month": d = qa(this, s); break; case "quarter": d = qa(this, s) / 3; break; case "second": d = (this - s) / 1e3; break; case "minute": d = (this - s) / 6e4; break; case "hour": d = (this - s) / 36e5; break; case "day": d = (this - s - n) / 864e5; break; case "week": d = (this - s - n) / 6048e5; break; default: d = this - s }return t ? d : T(d) }, Mt.endOf = function (e) { var a; if (void 0 === (e = P(e)) || "millisecond" === e || !this.isValid()) return this; var t = this._isUTC ? nt : st; switch (e) { case "year": a = t(this.year() + 1, 0, 1) - 1; break; case "quarter": a = t(this.year(), this.month() - this.month() % 3 + 3, 1) - 1; break; case "month": a = t(this.year(), this.month() + 1, 1) - 1; break; case "week": a = t(this.year(), this.month(), this.date() - this.weekday() + 7) - 1; break; case "isoWeek": a = t(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1; break; case "day": case "date": a = t(this.year(), this.month(), this.date() + 1) - 1; break; case "hour": a = this._d.valueOf(), a += 36e5 - tt(a + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1; break; case "minute": a = this._d.valueOf(), a += 6e4 - tt(a, 6e4) - 1; break; case "second": a = this._d.valueOf(), a += 1e3 - tt(a, 1e3) - 1; break }return this._d.setTime(a), l.updateOffset(this, !0), this }, Mt.format = function (e) { e || (e = this.isUtc() ? l.defaultFormatUtc : l.defaultFormat); var a = I(this, e); return this.localeData().postformat(a) }, Mt.from = function (e, a) { return this.isValid() && (D(e) && e.isValid() || Ha(e).isValid()) ? Ua({ to: this, from: e }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate() }, Mt.fromNow = function (e) { return this.from(Ha(), e) }, Mt.to = function (e, a) { return this.isValid() && (D(e) && e.isValid() || Ha(e).isValid()) ? Ua({ from: this, to: e }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate() }, Mt.toNow = function (e) { return this.to(Ha(), e) }, Mt.get = function (e) { return H(this[e = P(e)]) ? this[e]() : this }, Mt.invalidAt = function () { return Y(this).overflow }, Mt.isAfter = function (e, a) { var t = D(e) ? e : Ha(e); return !(!this.isValid() || !t.isValid()) && ("millisecond" === (a = P(a) || "millisecond") ? this.valueOf() > t.valueOf() : t.valueOf() < this.clone().startOf(a).valueOf()) }, Mt.isBefore = function (e, a) { var t = D(e) ? e : Ha(e); return !(!this.isValid() || !t.isValid()) && ("millisecond" === (a = P(a) || "millisecond") ? this.valueOf() < t.valueOf() : this.clone().endOf(a).valueOf() < t.valueOf()) }, Mt.isBetween = function (e, a, t, s) { var n = D(e) ? e : Ha(e), d = D(a) ? a : Ha(a); return !!(this.isValid() && n.isValid() && d.isValid()) && ("(" === (s = s || "()")[0] ? this.isAfter(n, t) : !this.isBefore(n, t)) && (")" === s[1] ? this.isBefore(d, t) : !this.isAfter(d, t)) }, Mt.isSame = function (e, a) { var t, s = D(e) ? e : Ha(e); return !(!this.isValid() || !s.isValid()) && ("millisecond" === (a = P(a) || "millisecond") ? this.valueOf() === s.valueOf() : (t = s.valueOf(), this.clone().startOf(a).valueOf() <= t && t <= this.clone().endOf(a).valueOf())) }, Mt.isSameOrAfter = function (e, a) { return this.isSame(e, a) || this.isAfter(e, a) }, Mt.isSameOrBefore = function (e, a) { return this.isSame(e, a) || this.isBefore(e, a) }, Mt.isValid = function () { return y(this) }, Mt.lang = Xa, Mt.locale = Qa, Mt.localeData = et, Mt.max = ja, Mt.min = ba, Mt.parsingFlags = function () { return L({}, Y(this)) }, Mt.set = function (e, a) { if ("object" == typeof e) for (var t = function (e) { var a = []; for (var t in e) a.push({ unit: t, priority: A[t] }); return a.sort(function (e, a) { return e.priority - a.priority }), a }(e = W(e)), s = 0; s < t.length; s++)this[t[s].unit](e[t[s].unit]); else if (H(this[e = P(e)])) return this[e](a); return this }, Mt.startOf = function (e) { var a; if (void 0 === (e = P(e)) || "millisecond" === e || !this.isValid()) return this; var t = this._isUTC ? nt : st; switch (e) { case "year": a = t(this.year(), 0, 1); break; case "quarter": a = t(this.year(), this.month() - this.month() % 3, 1); break; case "month": a = t(this.year(), this.month(), 1); break; case "week": a = t(this.year(), this.month(), this.date() - this.weekday()); break; case "isoWeek": a = t(this.year(), this.month(), this.date() - (this.isoWeekday() - 1)); break; case "day": case "date": a = t(this.year(), this.month(), this.date()); break; case "hour": a = this._d.valueOf(), a -= tt(a + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5); break; case "minute": a = this._d.valueOf(), a -= tt(a, 6e4); break; case "second": a = this._d.valueOf(), a -= tt(a, 1e3); break }return this._d.setTime(a), l.updateOffset(this, !0), this }, Mt.subtract = Ba, Mt.toArray = function () { var e = this; return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()] }, Mt.toObject = function () { var e = this; return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() } }, Mt.toDate = function () { return new Date(this.valueOf()) }, Mt.toISOString = function (e) { if (!this.isValid()) return null; var a = !0 !== e, t = a ? this.clone().utc() : this; return t.year() < 0 || 9999 < t.year() ? I(t, a ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : H(Date.prototype.toISOString) ? a ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", I(t, "Z")) : I(t, a ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ") }, Mt.inspect = function () { if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)"; var e = "moment", a = ""; this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", a = "Z"); var t = "[" + e + '("]', s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", n = a + '[")]'; return this.format(t + s + "-MM-DD[T]HH:mm:ss.SSS" + n) }, Mt.toJSON = function () { return this.isValid() ? this.toISOString() : null }, Mt.toString = function () { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, Mt.unix = function () { return Math.floor(this.valueOf() / 1e3) }, Mt.valueOf = function () { return this._d.valueOf() - 6e4 * (this._offset || 0) }, Mt.creationData = function () { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }, Mt.year = ve, Mt.isLeapYear = function () { return ge(this.year()) }, Mt.weekYear = function (e) { return rt.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }, Mt.isoWeekYear = function (e) { return rt.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4) }, Mt.quarter = Mt.quarters = function (e) { return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3) }, Mt.month = Ae, Mt.daysInMonth = function () { return je(this.year(), this.month()) }, Mt.week = Mt.weeks = function (e) { var a = this.localeData().week(this); return null == e ? a : this.add(7 * (e - a), "d") }, Mt.isoWeek = Mt.isoWeeks = function (e) { var a = Ce(this, 1, 4).week; return null == e ? a : this.add(7 * (e - a), "d") }, Mt.weeksInYear = function () { var e = this.localeData()._week; return Ie(this.year(), e.dow, e.doy) }, Mt.isoWeeksInYear = function () { return Ie(this.year(), 1, 4) }, Mt.date = _t, Mt.day = Mt.days = function (e) { if (!this.isValid()) return null != e ? this : NaN; var a, t, s = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != e ? (a = e, t = this.localeData(), e = "string" != typeof a ? a : isNaN(a) ? "number" == typeof (a = t.weekdaysParse(a)) ? a : null : parseInt(a, 10), this.add(e - s, "d")) : s }, Mt.weekday = function (e) { if (!this.isValid()) return null != e ? this : NaN; var a = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == e ? a : this.add(e - a, "d") }, Mt.isoWeekday = function (e) { if (!this.isValid()) return null != e ? this : NaN; if (null == e) return this.day() || 7; var a, t, s = (a = e, t = this.localeData(), "string" == typeof a ? t.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a); return this.day(this.day() % 7 ? s : s - 7) }, Mt.dayOfYear = function (e) { var a = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == e ? a : this.add(e - a, "d") }, Mt.hour = Mt.hours = ta, Mt.minute = Mt.minutes = it, Mt.second = Mt.seconds = mt, Mt.millisecond = Mt.milliseconds = lt, Mt.utcOffset = function (e, a, t) { var s, n = this._offset || 0; if (!this.isValid()) return null != e ? this : NaN; if (null == e) return this._isUTC ? n : Na(this); if ("string" == typeof e) { if (null === (e = za(de, e))) return this } else Math.abs(e) < 16 && !t && (e *= 60); return !this._isUTC && a && (s = Na(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), n !== e && (!a || this._changeInProgress ? Za(this, Ua(e - n, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, l.updateOffset(this, !0), this._changeInProgress = null)), this }, Mt.utc = function (e) { return this.utcOffset(0, e) }, Mt.local = function (e) { return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Na(this), "m")), this }, Mt.parseZone = function () { if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) { var e = za(ne, this._i); null != e ? this.utcOffset(e) : this.utcOffset(0, !0) } return this }, Mt.hasAlignedHourOffset = function (e) { return !!this.isValid() && (e = e ? Ha(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0) }, Mt.isDST = function () { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, Mt.isLocal = function () { return !!this.isValid() && !this._isUTC }, Mt.isUtcOffset = function () { return !!this.isValid() && this._isUTC }, Mt.isUtc = Ra, Mt.isUTC = Ra, Mt.zoneAbbr = function () { return this._isUTC ? "UTC" : "" }, Mt.zoneName = function () { return this._isUTC ? "Coordinated Universal Time" : "" }, Mt.dates = t("dates accessor is deprecated. Use date instead.", _t), Mt.months = t("months accessor is deprecated. Use month instead", Ae), Mt.years = t("years accessor is deprecated. Use year instead", ve), Mt.zone = t("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, a) { return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, a), this) : -this.utcOffset() }), Mt.isDSTShifted = t("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () { if (!o(this._isDSTShifted)) return this._isDSTShifted; var e = {}; if (k(e, this), (e = va(e))._a) { var a = e._isUTC ? c(e._a) : Ha(e._a); this._isDSTShifted = this.isValid() && 0 < r(e._a, a.toArray()) } else this._isDSTShifted = !1; return this._isDSTShifted }); var Lt = j.prototype; function ct(e, a, t, s) { var n = ma(), d = c().set(s, a); return n[t](d, e) } function Yt(e, a, t) { if (m(e) && (a = e, e = void 0), e = e || "", null != a) return ct(e, a, t, "month"); var s, n = []; for (s = 0; s < 12; s++)n[s] = ct(e, s, t, "month"); return n } function yt(e, a, t, s) { a = ("boolean" == typeof e ? m(a) && (t = a, a = void 0) : (a = e, e = !1, m(t = a) && (t = a, a = void 0)), a || ""); var n, d = ma(), r = e ? d._week.dow : 0; if (null != t) return ct(a, (t + r) % 7, s, "day"); var _ = []; for (n = 0; n < 7; n++)_[n] = ct(a, (n + r) % 7, s, "day"); return _ } Lt.calendar = function (e, a, t) { var s = this._calendar[e] || this._calendar.sameElse; return H(s) ? s.call(a, t) : s }, Lt.longDateFormat = function (e) { var a = this._longDateFormat[e], t = this._longDateFormat[e.toUpperCase()]; return a || !t ? a : (this._longDateFormat[e] = t.replace(/MMMM|MM|DD|dddd/g, function (e) { return e.slice(1) }), this._longDateFormat[e]) }, Lt.invalidDate = function () { return this._invalidDate }, Lt.ordinal = function (e) { return this._ordinal.replace("%d", e) }, Lt.preparse = ht, Lt.postformat = ht, Lt.relativeTime = function (e, a, t, s) { var n = this._relativeTime[t]; return H(n) ? n(e, a, t, s) : n.replace(/%d/i, e) }, Lt.pastFuture = function (e, a) { var t = this._relativeTime[0 < e ? "future" : "past"]; return H(t) ? t(a) : t.replace(/%s/i, a) }, Lt.set = function (e) { var a, t; for (t in e) H(a = e[t]) ? this[t] = a : this["_" + t] = a; this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source) }, Lt.months = function (e, a) { return e ? _(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || xe).test(a) ? "format" : "standalone"][e.month()] : _(this._months) ? this._months : this._months.standalone }, Lt.monthsShort = function (e, a) { return e ? _(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[xe.test(a) ? "format" : "standalone"][e.month()] : _(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }, Lt.monthsParse = function (e, a, t) { var s, n, d; if (this._monthsParseExact) return function (e, a, t) { var s, n, d, r = e.toLocaleLowerCase(); if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s)d = c([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(d, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(d, "").toLocaleLowerCase(); return t ? "MMM" === a ? -1 !== (n = we.call(this._shortMonthsParse, r)) ? n : null : -1 !== (n = we.call(this._longMonthsParse, r)) ? n : null : "MMM" === a ? -1 !== (n = we.call(this._shortMonthsParse, r)) ? n : -1 !== (n = we.call(this._longMonthsParse, r)) ? n : null : -1 !== (n = we.call(this._longMonthsParse, r)) ? n : -1 !== (n = we.call(this._shortMonthsParse, r)) ? n : null }.call(this, e, a, t); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) { if (n = c([2e3, s]), t && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(n, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(n, "").replace(".", "") + "$", "i")), t || this._monthsParse[s] || (d = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[s] = new RegExp(d.replace(".", ""), "i")), t && "MMMM" === a && this._longMonthsParse[s].test(e)) return s; if (t && "MMM" === a && this._shortMonthsParse[s].test(e)) return s; if (!t && this._monthsParse[s].test(e)) return s } }, Lt.monthsRegex = function (e) { return this._monthsParseExact ? (h(this, "_monthsRegex") || ze.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (h(this, "_monthsRegex") || (this._monthsRegex = Fe), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex) }, Lt.monthsShortRegex = function (e) { return this._monthsParseExact ? (h(this, "_monthsRegex") || ze.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (h(this, "_monthsShortRegex") || (this._monthsShortRegex = Ee), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex) }, Lt.week = function (e) { return Ce(e, this._week.dow, this._week.doy).week }, Lt.firstDayOfYear = function () { return this._week.doy }, Lt.firstDayOfWeek = function () { return this._week.dow }, Lt.weekdays = function (e, a) { var t = _(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(a) ? "format" : "standalone"]; return !0 === e ? Ue(t, this._week.dow) : e ? t[e.day()] : t }, Lt.weekdaysMin = function (e) { return !0 === e ? Ue(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin }, Lt.weekdaysShort = function (e) { return !0 === e ? Ue(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort }, Lt.weekdaysParse = function (e, a, t) { var s, n, d; if (this._weekdaysParseExact) return function (e, a, t) { var s, n, d, r = e.toLocaleLowerCase(); if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s)d = c([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(d, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(d, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(d, "").toLocaleLowerCase(); return t ? "dddd" === a ? -1 !== (n = we.call(this._weekdaysParse, r)) ? n : null : "ddd" === a ? -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : null : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : null : "dddd" === a ? -1 !== (n = we.call(this._weekdaysParse, r)) ? n : -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : null : "ddd" === a ? -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : -1 !== (n = we.call(this._weekdaysParse, r)) ? n : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : null : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : -1 !== (n = we.call(this._weekdaysParse, r)) ? n : -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : null }.call(this, e, a, t); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) { if (n = c([2e3, 1]).day(s), t && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(n, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(n, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(n, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[s] || (d = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[s] = new RegExp(d.replace(".", ""), "i")), t && "dddd" === a && this._fullWeekdaysParse[s].test(e)) return s; if (t && "ddd" === a && this._shortWeekdaysParse[s].test(e)) return s; if (t && "dd" === a && this._minWeekdaysParse[s].test(e)) return s; if (!t && this._weekdaysParse[s].test(e)) return s } }, Lt.weekdaysRegex = function (e) { return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || qe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (h(this, "_weekdaysRegex") || (this._weekdaysRegex = Ze), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex) }, Lt.weekdaysShortRegex = function (e) { return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || qe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (h(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = $e), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }, Lt.weekdaysMinRegex = function (e) { return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || qe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Be), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }, Lt.isPM = function (e) { return "p" === (e + "").toLowerCase().charAt(0) }, Lt.meridiem = function (e, a, t) { return 11 < e ? t ? "pm" : "PM" : t ? "am" : "AM" }, ia("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (e) { var a = e % 10; return e + (1 === g(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th") } }), l.lang = t("moment.lang is deprecated. Use moment.locale instead.", ia), l.langData = t("moment.langData is deprecated. Use moment.localeData instead.", ma); var ft = Math.abs; function kt(e, a, t, s) { var n = Ua(a, t); return e._milliseconds += s * n._milliseconds, e._days += s * n._days, e._months += s * n._months, e._bubble() } function pt(e) { return e < 0 ? Math.floor(e) : Math.ceil(e) } function Dt(e) { return 4800 * e / 146097 } function Tt(e) { return 146097 * e / 4800 } function gt(e) { return function () { return this.as(e) } } var wt = gt("ms"), vt = gt("s"), St = gt("m"), Ht = gt("h"), bt = gt("d"), jt = gt("w"), xt = gt("M"), Ot = gt("Q"), Pt = gt("y"); function Wt(e) { return function () { return this.isValid() ? this._data[e] : NaN } } var At = Wt("milliseconds"), Et = Wt("seconds"), Ft = Wt("minutes"), zt = Wt("hours"), Jt = Wt("days"), Nt = Wt("months"), Rt = Wt("years"); var Ct = Math.round, It = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 }; var Ut = Math.abs; function Gt(e) { return (0 < e) - (e < 0) || +e } function Vt() { if (!this.isValid()) return this.localeData().invalidDate(); var e, a, t = Ut(this._milliseconds) / 1e3, s = Ut(this._days), n = Ut(this._months); a = T((e = T(t / 60)) / 60), t %= 60, e %= 60; var d = T(n / 12), r = n %= 12, _ = s, i = a, o = e, m = t ? t.toFixed(3).replace(/\.?0+$/, "") : "", u = this.asSeconds(); if (!u) return "P0D"; var l = u < 0 ? "-" : "", M = Gt(this._months) !== Gt(u) ? "-" : "", h = Gt(this._days) !== Gt(u) ? "-" : "", L = Gt(this._milliseconds) !== Gt(u) ? "-" : ""; return l + "P" + (d ? M + d + "Y" : "") + (r ? M + r + "M" : "") + (_ ? h + _ + "D" : "") + (i || o || m ? "T" : "") + (i ? L + i + "H" : "") + (o ? L + o + "M" : "") + (m ? L + m + "S" : "") } var Kt = Pa.prototype; Kt.isValid = function () { return this._isValid }, Kt.abs = function () { var e = this._data; return this._milliseconds = ft(this._milliseconds), this._days = ft(this._days), this._months = ft(this._months), e.milliseconds = ft(e.milliseconds), e.seconds = ft(e.seconds), e.minutes = ft(e.minutes), e.hours = ft(e.hours), e.months = ft(e.months), e.years = ft(e.years), this }, Kt.add = function (e, a) { return kt(this, e, a, 1) }, Kt.subtract = function (e, a) { return kt(this, e, a, -1) }, Kt.as = function (e) { if (!this.isValid()) return NaN; var a, t, s = this._milliseconds; if ("month" === (e = P(e)) || "quarter" === e || "year" === e) switch (a = this._days + s / 864e5, t = this._months + Dt(a), e) { case "month": return t; case "quarter": return t / 3; case "year": return t / 12 } else switch (a = this._days + Math.round(Tt(this._months)), e) { case "week": return a / 7 + s / 6048e5; case "day": return a + s / 864e5; case "hour": return 24 * a + s / 36e5; case "minute": return 1440 * a + s / 6e4; case "second": return 86400 * a + s / 1e3; case "millisecond": return Math.floor(864e5 * a) + s; default: throw new Error("Unknown unit " + e) } }, Kt.asMilliseconds = wt, Kt.asSeconds = vt, Kt.asMinutes = St, Kt.asHours = Ht, Kt.asDays = bt, Kt.asWeeks = jt, Kt.asMonths = xt, Kt.asQuarters = Ot, Kt.asYears = Pt, Kt.valueOf = function () { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * g(this._months / 12) : NaN }, Kt._bubble = function () { var e, a, t, s, n, d = this._milliseconds, r = this._days, _ = this._months, i = this._data; return 0 <= d && 0 <= r && 0 <= _ || d <= 0 && r <= 0 && _ <= 0 || (d += 864e5 * pt(Tt(_) + r), _ = r = 0), i.milliseconds = d % 1e3, e = T(d / 1e3), i.seconds = e % 60, a = T(e / 60), i.minutes = a % 60, t = T(a / 60), i.hours = t % 24, _ += n = T(Dt(r += T(t / 24))), r -= pt(Tt(n)), s = T(_ / 12), _ %= 12, i.days = r, i.months = _, i.years = s, this }, Kt.clone = function () { return Ua(this) }, Kt.get = function (e) { return e = P(e), this.isValid() ? this[e + "s"]() : NaN }, Kt.milliseconds = At, Kt.seconds = Et, Kt.minutes = Ft, Kt.hours = zt, Kt.days = Jt, Kt.weeks = function () { return T(this.days() / 7) }, Kt.months = Nt, Kt.years = Rt, Kt.humanize = function (e) { if (!this.isValid()) return this.localeData().invalidDate(); var a, t, s, n, d, r, _, i, o, m, u, l = this.localeData(), M = (t = !e, s = l, n = Ua(a = this).abs(), d = Ct(n.as("s")), r = Ct(n.as("m")), _ = Ct(n.as("h")), i = Ct(n.as("d")), o = Ct(n.as("M")), m = Ct(n.as("y")), (u = d <= It.ss && ["s", d] || d < It.s && ["ss", d] || r <= 1 && ["m"] || r < It.m && ["mm", r] || _ <= 1 && ["h"] || _ < It.h && ["hh", _] || i <= 1 && ["d"] || i < It.d && ["dd", i] || o <= 1 && ["M"] || o < It.M && ["MM", o] || m <= 1 && ["y"] || ["yy", m])[2] = t, u[3] = 0 < +a, u[4] = s, function (e, a, t, s, n) { return n.relativeTime(a || 1, !!t, e, s) }.apply(null, u)); return e && (M = l.pastFuture(+this, M)), l.postformat(M) }, Kt.toISOString = Vt, Kt.toString = Vt, Kt.toJSON = Vt, Kt.locale = Qa, Kt.localeData = et, Kt.toIsoString = t("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Vt), Kt.lang = Xa, C("X", 0, 0, "unix"), C("x", 0, 0, "valueOf"), ie("x", se), ie("X", /[+-]?\d+(\.\d{1,3})?/), le("X", function (e, a, t) { t._d = new Date(1e3 * parseFloat(e, 10)) }), le("x", function (e, a, t) { t._d = new Date(g(e)) }), l.version = "2.24.0", e = Ha, l.fn = Mt, l.min = function () { return xa("isBefore", [].slice.call(arguments, 0)) }, l.max = function () { return xa("isAfter", [].slice.call(arguments, 0)) }, l.now = function () { return Date.now ? Date.now() : +new Date }, l.utc = c, l.unix = function (e) { return Ha(1e3 * e) }, l.months = function (e, a) { return Yt(e, a, "months") }, l.isDate = u, l.locale = ia, l.invalid = f, l.duration = Ua, l.isMoment = D, l.weekdays = function (e, a, t) { return yt(e, a, t, "weekdays") }, l.parseZone = function () { return Ha.apply(null, arguments).parseZone() }, l.localeData = ma, l.isDuration = Wa, l.monthsShort = function (e, a) { return Yt(e, a, "monthsShort") }, l.weekdaysMin = function (e, a, t) { return yt(e, a, t, "weekdaysMin") }, l.defineLocale = oa, l.updateLocale = function (e, a) { if (null != a) { var t, s, n = sa; null != (s = _a(e)) && (n = s._config), (t = new j(a = b(n, a))).parentLocale = na[e], na[e] = t, ia(e) } else null != na[e] && (null != na[e].parentLocale ? na[e] = na[e].parentLocale : null != na[e] && delete na[e]); return na[e] }, l.locales = function () { return s(na) }, l.weekdaysShort = function (e, a, t) { return yt(e, a, t, "weekdaysShort") }, l.normalizeUnits = P, l.relativeTimeRounding = function (e) { return void 0 === e ? Ct : "function" == typeof e && (Ct = e, !0) }, l.relativeTimeThreshold = function (e, a) { return void 0 !== It[e] && (void 0 === a ? It[e] : (It[e] = a, "s" === e && (It.ss = a - 1), !0)) }, l.calendarFormat = function (e, a) { var t = e.diff(a, "days", !0); return t < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse" }, l.prototype = Mt, l.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" }, l.defineLocale("af", { months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), meridiemParse: /vm|nm/i, isPM: function (e) { return /^nm$/i.test(e) }, meridiem: function (e, a, t) { return e < 12 ? t ? "vm" : "VM" : t ? "nm" : "NM" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Vandag om] LT", nextDay: "[M\xf4re om] LT", nextWeek: "dddd [om] LT", lastDay: "[Gister om] LT", lastWeek: "[Laas] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", ss: "%d sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function (e) { return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de") }, week: { dow: 1, doy: 4 } }), l.defineLocale("ar-dz", { months: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), monthsShort: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0627\u062d\u062f_\u0627\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u0623\u062d_\u0625\u062b_\u062b\u0644\u0627_\u0623\u0631_\u062e\u0645_\u062c\u0645_\u0633\u0628".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064a %s", past: "\u0645\u0646\u0630 %s", s: "\u062b\u0648\u0627\u0646", ss: "%d \u062b\u0627\u0646\u064a\u0629", m: "\u062f\u0642\u064a\u0642\u0629", mm: "%d \u062f\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062a", d: "\u064a\u0648\u0645", dd: "%d \u0623\u064a\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062a" }, week: { dow: 0, doy: 4 } }), l.defineLocale("ar-kw", { months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"), monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064a %s", past: "\u0645\u0646\u0630 %s", s: "\u062b\u0648\u0627\u0646", ss: "%d \u062b\u0627\u0646\u064a\u0629", m: "\u062f\u0642\u064a\u0642\u0629", mm: "%d \u062f\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062a", d: "\u064a\u0648\u0645", dd: "%d \u0623\u064a\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062a" }, week: { dow: 0, doy: 12 } }); var Zt = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0" }, $t = function (e) { return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5 }, Bt = { s: ["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629", "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062b\u0627\u0646\u064a\u062a\u0627\u0646", "\u062b\u0627\u0646\u064a\u062a\u064a\u0646"], "%d \u062b\u0648\u0627\u0646", "%d \u062b\u0627\u0646\u064a\u0629", "%d \u062b\u0627\u0646\u064a\u0629"], m: ["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629", "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062f\u0642\u064a\u0642\u062a\u0627\u0646", "\u062f\u0642\u064a\u0642\u062a\u064a\u0646"], "%d \u062f\u0642\u0627\u0626\u0642", "%d \u062f\u0642\u064a\u0642\u0629", "%d \u062f\u0642\u064a\u0642\u0629"], h: ["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u0633\u0627\u0639\u062a\u0627\u0646", "\u0633\u0627\u0639\u062a\u064a\u0646"], "%d \u0633\u0627\u0639\u0627\u062a", "%d \u0633\u0627\u0639\u0629", "%d \u0633\u0627\u0639\u0629"], d: ["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645", "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f", ["\u064a\u0648\u0645\u0627\u0646", "\u064a\u0648\u0645\u064a\u0646"], "%d \u0623\u064a\u0627\u0645", "%d \u064a\u0648\u0645\u064b\u0627", "%d \u064a\u0648\u0645"], M: ["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631", "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f", ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064a\u0646"], "%d \u0623\u0634\u0647\u0631", "%d \u0634\u0647\u0631\u0627", "%d \u0634\u0647\u0631"], y: ["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645", "\u0639\u0627\u0645 \u0648\u0627\u062d\u062f", ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064a\u0646"], "%d \u0623\u0639\u0648\u0627\u0645", "%d \u0639\u0627\u0645\u064b\u0627", "%d \u0639\u0627\u0645"] }, qt = function (r) { return function (e, a, t, s) { var n = $t(e), d = Bt[r][$t(e)]; return 2 === n && (d = d[a ? 0 : 1]), d.replace(/%d/i, e) } }, Qt = ["\u064a\u0646\u0627\u064a\u0631", "\u0641\u0628\u0631\u0627\u064a\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064a\u0644", "\u0645\u0627\u064a\u0648", "\u064a\u0648\u0646\u064a\u0648", "\u064a\u0648\u0644\u064a\u0648", "\u0623\u063a\u0633\u0637\u0633", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"]; l.defineLocale("ar-ly", { months: Qt, monthsShort: Qt, weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/\u200fM/\u200fYYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0635|\u0645/, isPM: function (e) { return "\u0645" === e }, meridiem: function (e, a, t) { return e < 12 ? "\u0635" : "\u0645" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0628\u0639\u062f %s", past: "\u0645\u0646\u0630 %s", s: qt("s"), ss: qt("s"), m: qt("m"), mm: qt("m"), h: qt("h"), hh: qt("h"), d: qt("d"), dd: qt("d"), M: qt("M"), MM: qt("M"), y: qt("y"), yy: qt("y") }, preparse: function (e) { return e.replace(/\u060c/g, ",") }, postformat: function (e) { return e.replace(/\d/g, function (e) { return Zt[e] }).replace(/,/g, "\u060c") }, week: { dow: 6, doy: 12 } }), l.defineLocale("ar-ma", { months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"), monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064a %s", past: "\u0645\u0646\u0630 %s", s: "\u062b\u0648\u0627\u0646", ss: "%d \u062b\u0627\u0646\u064a\u0629", m: "\u062f\u0642\u064a\u0642\u0629", mm: "%d \u062f\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062a", d: "\u064a\u0648\u0645", dd: "%d \u0623\u064a\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062a" }, week: { dow: 6, doy: 12 } }); var Xt = { 1: "\u0661", 2: "\u0662", 3: "\u0663", 4: "\u0664", 5: "\u0665", 6: "\u0666", 7: "\u0667", 8: "\u0668", 9: "\u0669", 0: "\u0660" }, es = { "\u0661": "1", "\u0662": "2", "\u0663": "3", "\u0664": "4", "\u0665": "5", "\u0666": "6", "\u0667": "7", "\u0668": "8", "\u0669": "9", "\u0660": "0" }; l.defineLocale("ar-sa", { months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0635|\u0645/, isPM: function (e) { return "\u0645" === e }, meridiem: function (e, a, t) { return e < 12 ? "\u0635" : "\u0645" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064a %s", past: "\u0645\u0646\u0630 %s", s: "\u062b\u0648\u0627\u0646", ss: "%d \u062b\u0627\u0646\u064a\u0629", m: "\u062f\u0642\u064a\u0642\u0629", mm: "%d \u062f\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062a", d: "\u064a\u0648\u0645", dd: "%d \u0623\u064a\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062a" }, preparse: function (e) { return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function (e) { return es[e] }).replace(/\u060c/g, ",") }, postformat: function (e) { return e.replace(/\d/g, function (e) { return Xt[e] }).replace(/,/g, "\u060c") }, week: { dow: 0, doy: 6 } }), l.defineLocale("ar-tn", { months: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), monthsShort: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064a %s", past: "\u0645\u0646\u0630 %s", s: "\u062b\u0648\u0627\u0646", ss: "%d \u062b\u0627\u0646\u064a\u0629", m: "\u062f\u0642\u064a\u0642\u0629", mm: "%d \u062f\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062a", d: "\u064a\u0648\u0645", dd: "%d \u0623\u064a\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062a" }, week: { dow: 1, doy: 4 } }); var as = { 1: "\u0661", 2: "\u0662", 3: "\u0663", 4: "\u0664", 5: "\u0665", 6: "\u0666", 7: "\u0667", 8: "\u0668", 9: "\u0669", 0: "\u0660" }, ts = { "\u0661": "1", "\u0662": "2", "\u0663": "3", "\u0664": "4", "\u0665": "5", "\u0666": "6", "\u0667": "7", "\u0668": "8", "\u0669": "9", "\u0660": "0" }, ss = function (e) { return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5 }, ns = { s: ["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629", "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062b\u0627\u0646\u064a\u062a\u0627\u0646", "\u062b\u0627\u0646\u064a\u062a\u064a\u0646"], "%d \u062b\u0648\u0627\u0646", "%d \u062b\u0627\u0646\u064a\u0629", "%d \u062b\u0627\u0646\u064a\u0629"], m: ["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629", "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062f\u0642\u064a\u0642\u062a\u0627\u0646", "\u062f\u0642\u064a\u0642\u062a\u064a\u0646"], "%d \u062f\u0642\u0627\u0626\u0642", "%d \u062f\u0642\u064a\u0642\u0629", "%d \u062f\u0642\u064a\u0642\u0629"], h: ["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u0633\u0627\u0639\u062a\u0627\u0646", "\u0633\u0627\u0639\u062a\u064a\u0646"], "%d \u0633\u0627\u0639\u0627\u062a", "%d \u0633\u0627\u0639\u0629", "%d \u0633\u0627\u0639\u0629"], d: ["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645", "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f", ["\u064a\u0648\u0645\u0627\u0646", "\u064a\u0648\u0645\u064a\u0646"], "%d \u0623\u064a\u0627\u0645", "%d \u064a\u0648\u0645\u064b\u0627", "%d \u064a\u0648\u0645"], M: ["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631", "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f", ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064a\u0646"], "%d \u0623\u0634\u0647\u0631", "%d \u0634\u0647\u0631\u0627", "%d \u0634\u0647\u0631"], y: ["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645", "\u0639\u0627\u0645 \u0648\u0627\u062d\u062f", ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064a\u0646"], "%d \u0623\u0639\u0648\u0627\u0645", "%d \u0639\u0627\u0645\u064b\u0627", "%d \u0639\u0627\u0645"] }, ds = function (r) { return function (e, a, t, s) { var n = ss(e), d = ns[r][ss(e)]; return 2 === n && (d = d[a ? 0 : 1]), d.replace(/%d/i, e) } }, rs = ["\u064a\u0646\u0627\u064a\u0631", "\u0641\u0628\u0631\u0627\u064a\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064a\u0644", "\u0645\u0627\u064a\u0648", "\u064a\u0648\u0646\u064a\u0648", "\u064a\u0648\u0644\u064a\u0648", "\u0623\u063a\u0633\u0637\u0633", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"]; l.defineLocale("ar", { months: rs, monthsShort: rs, weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/\u200fM/\u200fYYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0635|\u0645/, isPM: function (e) { return "\u0645" === e }, meridiem: function (e, a, t) { return e < 12 ? "\u0635" : "\u0645" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0628\u0639\u062f %s", past: "\u0645\u0646\u0630 %s", s: ds("s"), ss: ds("s"), m: ds("m"), mm: ds("m"), h: ds("h"), hh: ds("h"), d: ds("d"), dd: ds("d"), M: ds("M"), MM: ds("M"), y: ds("y"), yy: ds("y") }, preparse: function (e) { return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function (e) { return ts[e] }).replace(/\u060c/g, ",") }, postformat: function (e) { return e.replace(/\d/g, function (e) { return as[e] }).replace(/,/g, "\u060c") }, week: { dow: 6, doy: 12 } }); var _s = { 1: "-inci", 5: "-inci", 8: "-inci", 70: "-inci", 80: "-inci", 2: "-nci", 7: "-nci", 20: "-nci", 50: "-nci", 3: "-\xfcnc\xfc", 4: "-\xfcnc\xfc", 100: "-\xfcnc\xfc", 6: "-nc\u0131", 9: "-uncu", 10: "-uncu", 30: "-uncu", 60: "-\u0131nc\u0131", 90: "-\u0131nc\u0131" }; function is(e, a, t) { var s, n; return "m" === t ? a ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430" : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443" : "h" === t ? a ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443" : e + " " + (s = +e, n = { ss: a ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434", mm: a ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d" : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d", hh: a ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d", dd: "\u0434\u0437\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u0437\u0451\u043d", MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u044b_\u043c\u0435\u0441\u044f\u0446\u0430\u045e", yy: "\u0433\u043e\u0434_\u0433\u0430\u0434\u044b_\u0433\u0430\u0434\u043e\u045e" }[t].split("_"), s % 10 == 1 && s % 100 != 11 ? n[0] : 2 <= s % 10 && s % 10 <= 4 && (s % 100 < 10 || 20 <= s % 100) ? n[1] : n[2]) } l.defineLocale("az", { months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekdays: "Bazar_Bazar ert\u0259si_\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131_\xc7\u0259r\u015f\u0259nb\u0259_C\xfcm\u0259 ax\u015fam\u0131_C\xfcm\u0259_\u015e\u0259nb\u0259".split("_"), weekdaysShort: "Baz_BzE_\xc7Ax_\xc7\u0259r_CAx_C\xfcm_\u015e\u0259n".split("_"), weekdaysMin: "Bz_BE_\xc7A_\xc7\u0259_CA_C\xfc_\u015e\u0259".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bug\xfcn saat] LT", nextDay: "[sabah saat] LT", nextWeek: "[g\u0259l\u0259n h\u0259ft\u0259] dddd [saat] LT", lastDay: "[d\xfcn\u0259n] LT", lastWeek: "[ke\xe7\u0259n h\u0259ft\u0259] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s \u0259vv\u0259l", s: "birne\xe7\u0259 saniy\u0259", ss: "%d saniy\u0259", m: "bir d\u0259qiq\u0259", mm: "%d d\u0259qiq\u0259", h: "bir saat", hh: "%d saat", d: "bir g\xfcn", dd: "%d g\xfcn", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, meridiemParse: /gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/, isPM: function (e) { return /^(g\xfcnd\xfcz|ax\u015fam)$/.test(e) }, meridiem: function (e, a, t) { return e < 4 ? "gec\u0259" : e < 12 ? "s\u0259h\u0259r" : e < 17 ? "g\xfcnd\xfcz" : "ax\u015fam" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/, ordinal: function (e) { if (0 === e) return e + "-\u0131nc\u0131"; var a = e % 10; return e + (_s[a] || _s[e % 100 - a] || _s[100 <= e ? 100 : null]) }, week: { dow: 1, doy: 7 } }), l.defineLocale("be", { months: { format: "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f_\u043b\u044e\u0442\u0430\u0433\u0430_\u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430_\u0442\u0440\u0430\u045e\u043d\u044f_\u0447\u044d\u0440\u0432\u0435\u043d\u044f_\u043b\u0456\u043f\u0435\u043d\u044f_\u0436\u043d\u0456\u045e\u043d\u044f_\u0432\u0435\u0440\u0430\u0441\u043d\u044f_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430_\u0441\u043d\u0435\u0436\u043d\u044f".split("_"), standalone: "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c_\u043b\u044e\u0442\u044b_\u0441\u0430\u043a\u0430\u0432\u0456\u043a_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u044d\u0440\u0432\u0435\u043d\u044c_\u043b\u0456\u043f\u0435\u043d\u044c_\u0436\u043d\u0456\u0432\u0435\u043d\u044c_\u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434_\u0441\u043d\u0435\u0436\u0430\u043d\u044c".split("_") }, monthsShort: "\u0441\u0442\u0443\u0434_\u043b\u044e\u0442_\u0441\u0430\u043a_\u043a\u0440\u0430\u0441_\u0442\u0440\u0430\u0432_\u0447\u044d\u0440\u0432_\u043b\u0456\u043f_\u0436\u043d\u0456\u0432_\u0432\u0435\u0440_\u043a\u0430\u0441\u0442_\u043b\u0456\u0441\u0442_\u0441\u043d\u0435\u0436".split("_"), weekdays: { format: "\u043d\u044f\u0434\u0437\u0435\u043b\u044e_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0443_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0443_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"), standalone: "\u043d\u044f\u0434\u0437\u0435\u043b\u044f_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0430_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0430_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"), isFormat: /\[ ?[\u0423\u0443\u045e] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/ }, weekdaysShort: "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"), weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0433.", LLL: "D MMMM YYYY \u0433., HH:mm", LLLL: "dddd, D MMMM YYYY \u0433., HH:mm" }, calendar: { sameDay: "[\u0421\u0451\u043d\u043d\u044f \u045e] LT", nextDay: "[\u0417\u0430\u045e\u0442\u0440\u0430 \u045e] LT", lastDay: "[\u0423\u0447\u043e\u0440\u0430 \u045e] LT", nextWeek: function () { return "[\u0423] dddd [\u045e] LT" }, lastWeek: function () { switch (this.day()) { case 0: case 3: case 5: case 6: return "[\u0423 \u043c\u0456\u043d\u0443\u043b\u0443\u044e] dddd [\u045e] LT"; case 1: case 2: case 4: return "[\u0423 \u043c\u0456\u043d\u0443\u043b\u044b] dddd [\u045e] LT" } }, sameElse: "L" }, relativeTime: { future: "\u043f\u0440\u0430\u0437 %s", past: "%s \u0442\u0430\u043c\u0443", s: "\u043d\u0435\u043a\u0430\u043b\u044c\u043a\u0456 \u0441\u0435\u043a\u0443\u043d\u0434", m: is, mm: is, h: is, hh: is, d: "\u0434\u0437\u0435\u043d\u044c", dd: is, M: "\u043c\u0435\u0441\u044f\u0446", MM: is, y: "\u0433\u043e\u0434", yy: is }, meridiemParse: /\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/, isPM: function (e) { return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(e) }, meridiem: function (e, a, t) { return e < 4 ? "\u043d\u043e\u0447\u044b" : e < 12 ? "\u0440\u0430\u043d\u0456\u0446\u044b" : e < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u0430\u0440\u0430" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0456|\u044b|\u0433\u0430)/, ordinal: function (e, a) { switch (a) { case "M": case "d": case "DDD": case "w": case "W": return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-\u044b" : e + "-\u0456"; case "D": return e + "-\u0433\u0430"; default: return e } }, week: { dow: 1, doy: 7 } }), l.defineLocale("bg", { months: "\u044f\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"), monthsShort: "\u044f\u043d\u0440_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"), weekdays: "\u043d\u0435\u0434\u0435\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u044f\u0434\u0430_\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a_\u043f\u0435\u0442\u044a\u043a_\u0441\u044a\u0431\u043e\u0442\u0430".split("_"), weekdaysShort: "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u044f_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u044a\u0431".split("_"), weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[\u0414\u043d\u0435\u0441 \u0432] LT", nextDay: "[\u0423\u0442\u0440\u0435 \u0432] LT", nextWeek: "dddd [\u0432] LT", lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT", lastWeek: function () { switch (this.day()) { case 0: case 3: case 6: return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0430\u0442\u0430] dddd [\u0432] LT"; case 1: case 2: case 4: case 5: return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0438\u044f] dddd [\u0432] LT" } }, sameElse: "L" }, relativeTime: { future: "\u0441\u043b\u0435\u0434 %s", past: "\u043f\u0440\u0435\u0434\u0438 %s", s: "\u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438", ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438", m: "\u043c\u0438\u043d\u0443\u0442\u0430", mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438", h: "\u0447\u0430\u0441", hh: "%d \u0447\u0430\u0441\u0430", d: "\u0434\u0435\u043d", dd: "%d \u0434\u043d\u0438", M: "\u043c\u0435\u0441\u0435\u0446", MM: "%d \u043c\u0435\u0441\u0435\u0446\u0430", y: "\u0433\u043e\u0434\u0438\u043d\u0430", yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/, ordinal: function (e) { var a = e % 10, t = e % 100; return 0 === e ? e + "-\u0435\u0432" : 0 === t ? e + "-\u0435\u043d" : 10 < t && t < 20 ? e + "-\u0442\u0438" : 1 === a ? e + "-\u0432\u0438" : 2 === a ? e + "-\u0440\u0438" : 7 === a || 8 === a ? e + "-\u043c\u0438" : e + "-\u0442\u0438" }, week: { dow: 1, doy: 7 } }), l.defineLocale("bm", { months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_M\u025bkalo_Zuw\u025bnkalo_Zuluyekalo_Utikalo_S\u025btanburukalo_\u0254kut\u0254burukalo_Nowanburukalo_Desanburukalo".split("_"), monthsShort: "Zan_Few_Mar_Awi_M\u025b_Zuw_Zul_Uti_S\u025bt_\u0254ku_Now_Des".split("_"), weekdays: "Kari_Nt\u025bn\u025bn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"), weekdaysShort: "Kar_Nt\u025b_Tar_Ara_Ala_Jum_Sib".split("_"), weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "MMMM [tile] D [san] YYYY", LLL: "MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm", LLLL: "dddd MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm" }, calendar: { sameDay: "[Bi l\u025br\u025b] LT", nextDay: "[Sini l\u025br\u025b] LT", nextWeek: "dddd [don l\u025br\u025b] LT", lastDay: "[Kunu l\u025br\u025b] LT", lastWeek: "dddd [t\u025bm\u025bnen l\u025br\u025b] LT", sameElse: "L" }, relativeTime: { future: "%s k\u0254n\u0254", past: "a b\u025b %s b\u0254", s: "sanga dama dama", ss: "sekondi %d", m: "miniti kelen", mm: "miniti %d", h: "l\u025br\u025b kelen", hh: "l\u025br\u025b %d", d: "tile kelen", dd: "tile %d", M: "kalo kelen", MM: "kalo %d", y: "san kelen", yy: "san %d" }, week: { dow: 1, doy: 4 } }); var os = { 1: "\u09e7", 2: "\u09e8", 3: "\u09e9", 4: "\u09ea", 5: "\u09eb", 6: "\u09ec", 7: "\u09ed", 8: "\u09ee", 9: "\u09ef", 0: "\u09e6" }, ms = { "\u09e7": "1", "\u09e8": "2", "\u09e9": "3", "\u09ea": "4", "\u09eb": "5", "\u09ec": "6", "\u09ed": "7", "\u09ee": "8", "\u09ef": "9", "\u09e6": "0" }; l.defineLocale("bn", { months: "\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09c0_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0_\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0_\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0_\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split("_"), monthsShort: "\u099c\u09be\u09a8\u09c1_\u09ab\u09c7\u09ac_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2_\u0986\u0997_\u09b8\u09c7\u09aa\u09cd\u099f_\u0985\u0995\u09cd\u099f\u09cb_\u09a8\u09ad\u09c7_\u09a1\u09bf\u09b8\u09c7".split("_"), weekdays: "\u09b0\u09ac\u09bf\u09ac\u09be\u09b0_\u09b8\u09cb\u09ae\u09ac\u09be\u09b0_\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0_\u09ac\u09c1\u09a7\u09ac\u09be\u09b0_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0_\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0_\u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split("_"), weekdaysShort: "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"), weekdaysMin: "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u0983_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"), longDateFormat: { LT: "A h:mm \u09b8\u09ae\u09df", LTS: "A h:mm:ss \u09b8\u09ae\u09df", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u09b8\u09ae\u09df", LLLL: "dddd, D MMMM YYYY, A h:mm \u09b8\u09ae\u09df" }, calendar: { sameDay: "[\u0986\u099c] LT", nextDay: "[\u0986\u0997\u09be\u09ae\u09c0\u0995\u09be\u09b2] LT", nextWeek: "dddd, LT", lastDay: "[\u0997\u09a4\u0995\u09be\u09b2] LT", lastWeek: "[\u0997\u09a4] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u09aa\u09b0\u09c7", past: "%s \u0986\u0997\u09c7", s: "\u0995\u09df\u09c7\u0995 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1", ss: "%d \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1", m: "\u098f\u0995 \u09ae\u09bf\u09a8\u09bf\u099f", mm: "%d \u09ae\u09bf\u09a8\u09bf\u099f", h: "\u098f\u0995 \u0998\u09a8\u09cd\u099f\u09be", hh: "%d \u0998\u09a8\u09cd\u099f\u09be", d: "\u098f\u0995 \u09a6\u09bf\u09a8", dd: "%d \u09a6\u09bf\u09a8", M: "\u098f\u0995 \u09ae\u09be\u09b8", MM: "%d \u09ae\u09be\u09b8", y: "\u098f\u0995 \u09ac\u099b\u09b0", yy: "%d \u09ac\u099b\u09b0" }, preparse: function (e) { return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g, function (e) { return ms[e] }) }, postformat: function (e) { return e.replace(/\d/g, function (e) { return os[e] }) }, meridiemParse: /\u09b0\u09be\u09a4|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b0\u09be\u09a4/, meridiemHour: function (e, a) { return 12 === e && (e = 0), "\u09b0\u09be\u09a4" === a && 4 <= e || "\u09a6\u09c1\u09aa\u09c1\u09b0" === a && e < 5 || "\u09ac\u09bf\u0995\u09be\u09b2" === a ? e + 12 : e }, meridiem: function (e, a, t) { return e < 4 ? "\u09b0\u09be\u09a4" : e < 10 ? "\u09b8\u0995\u09be\u09b2" : e < 17 ? "\u09a6\u09c1\u09aa\u09c1\u09b0" : e < 20 ? "\u09ac\u09bf\u0995\u09be\u09b2" : "\u09b0\u09be\u09a4" }, week: { dow: 0, doy: 6 } }); var us = { 1: "\u0f21", 2: "\u0f22", 3: "\u0f23", 4: "\u0f24", 5: "\u0f25", 6: "\u0f26", 7: "\u0f27", 8: "\u0f28", 9: "\u0f29", 0: "\u0f20" }, ls = { "\u0f21": "1", "\u0f22": "2", "\u0f23": "3", "\u0f24": "4", "\u0f25": "5", "\u0f26": "6", "\u0f27": "7", "\u0f28": "8", "\u0f29": "9", "\u0f20": "0" }; function Ms(e, a, t) { var s, n, d; return e + " " + (s = { mm: "munutenn", MM: "miz", dd: "devezh" }[t], 2 !== e ? s : void 0 !== (d = { m: "v", b: "v", d: "z" })[(n = s).charAt(0)] ? d[n.charAt(0)] + n.substring(1) : n) } function hs(e, a, t) { var s = e + " "; switch (t) { case "ss": return s += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi"; case "m": return a ? "jedna minuta" : "jedne minute"; case "mm": return s += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta"; case "h": return a ? "jedan sat" : "jednog sata"; case "hh": return s += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati"; case "dd": return s += 1 === e ? "dan" : "dana"; case "MM": return s += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci"; case "yy": return s += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina" } } l.defineLocale("bo", { months: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"), monthsShort: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"), weekdays: "\u0f42\u0f5f\u0f60\u0f0b\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f42\u0f5f\u0f60\u0f0b\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"), weekdaysShort: "\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"), weekdaysMin: "\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[\u0f51\u0f72\u0f0b\u0f62\u0f72\u0f44] LT", nextDay: "[\u0f66\u0f44\u0f0b\u0f49\u0f72\u0f53] LT", nextWeek: "[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f62\u0f97\u0f7a\u0f66\u0f0b\u0f58], LT", lastDay: "[\u0f41\u0f0b\u0f66\u0f44] LT", lastWeek: "[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f58\u0f50\u0f60\u0f0b\u0f58] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0f63\u0f0b", past: "%s \u0f66\u0f94\u0f53\u0f0b\u0f63", s: "\u0f63\u0f58\u0f0b\u0f66\u0f44", ss: "%d \u0f66\u0f90\u0f62\u0f0b\u0f46\u0f0d", m: "\u0f66\u0f90\u0f62\u0f0b\u0f58\u0f0b\u0f42\u0f45\u0f72\u0f42", mm: "%d \u0f66\u0f90\u0f62\u0f0b\u0f58", h: "\u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51\u0f0b\u0f42\u0f45\u0f72\u0f42", hh: "%d \u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51", d: "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f45\u0f72\u0f42", dd: "%d \u0f49\u0f72\u0f53\u0f0b", M: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f45\u0f72\u0f42", MM: "%d \u0f5f\u0fb3\u0f0b\u0f56", y: "\u0f63\u0f7c\u0f0b\u0f42\u0f45\u0f72\u0f42", yy: "%d \u0f63\u0f7c" }, preparse: function (e) { return e.replace(/[\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f20]/g, function (e) { return ls[e] }) }, postformat: function (e) { return e.replace(/\d/g, function (e) { return us[e] }) }, meridiemParse: /\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/, meridiemHour: function (e, a) { return 12 === e && (e = 0), "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" === a && 4 <= e || "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44" === a && e < 5 || "\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42" === a ? e + 12 : e }, meridiem: function (e, a, t) { return e < 4 ? "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" : e < 10 ? "\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66" : e < 17 ? "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44" : e < 20 ? "\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42" : "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" }, week: { dow: 0, doy: 6 } }), l.defineLocale("br", { months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"), monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"), weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"), weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"), weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY h[e]mm A", LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A" }, calendar: { sameDay: "[Hiziv da] LT", nextDay: "[Warc'hoazh da] LT", nextWeek: "dddd [da] LT", lastDay: "[Dec'h da] LT", lastWeek: "dddd [paset da] LT", sameElse: "L" }, relativeTime: { future: "a-benn %s", past: "%s 'zo", s: "un nebeud segondenno\xf9", ss: "%d eilenn", m: "ur vunutenn", mm: Ms, h: "un eur", hh: "%d eur", d: "un devezh", dd: Ms, M: "ur miz", MM: Ms, y: "ur bloaz", yy: function (e) { switch (function e(a) { return 9 < a ? e(a % 10) : a }(e)) { case 1: case 3: case 4: case 5: case 9: return e + " bloaz"; default: return e + " vloaz" } } }, dayOfMonthOrdinalParse: /\d{1,2}(a\xf1|vet)/, ordinal: function (e) { return e + (1 === e ? "a\xf1" : "vet") }, week: { dow: 1, doy: 4 } }), l.defineLocale("bs", { months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () { switch (this.day()) { case 0: return "[u] [nedjelju] [u] LT"; case 3: return "[u] [srijedu] [u] LT"; case 6: return "[u] [subotu] [u] LT"; case 1: case 2: case 4: case 5: return "[u] dddd [u] LT" } }, lastDay: "[ju\u010der u] LT", lastWeek: function () { switch (this.day()) { case 0: case 3: return "[pro\u0161lu] dddd [u] LT"; case 6: return "[pro\u0161le] [subote] [u] LT"; case 1: case 2: case 4: case 5: return "[pro\u0161li] dddd [u] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", ss: hs, m: hs, mm: hs, h: hs, hh: hs, d: "dan", dd: hs, M: "mjesec", MM: hs, y: "godinu", yy: hs }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }), l.defineLocale("ca", { months: { standalone: "gener_febrer_mar\xe7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"), format: "de gener_de febrer_de mar\xe7_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"), isFormat: /D[oD]?(\s)+MMMM/ }, monthsShort: "gen._febr._mar\xe7_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"), monthsParseExact: !0, weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"), weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"), weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", ll: "D MMM YYYY", LLL: "D MMMM [de] YYYY [a les] H:mm", lll: "D MMM YYYY, H:mm", LLLL: "dddd D MMMM [de] YYYY [a les] H:mm", llll: "ddd D MMM YYYY, H:mm" }, calendar: { sameDay: function () { return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextDay: function () { return "[dem\xe0 a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextWeek: function () { return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastDay: function () { return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastWeek: function () { return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, sameElse: "L" }, relativeTime: { future: "d'aqu\xed %s", past: "fa %s", s: "uns segons", ss: "%d segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|\xe8|a)/, ordinal: function (e, a) { var t = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "\xe8"; return "w" !== a && "W" !== a || (t = "a"), e + t }, week: { dow: 1, doy: 4 } }); var Ls = "leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split("_"), cs = "led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split("_"), Ys = [/^led/i, /^\xfano/i, /^b\u0159e/i, /^dub/i, /^kv\u011b/i, /^(\u010dvn|\u010derven$|\u010dervna)/i, /^(\u010dvc|\u010dervenec|\u010dervence)/i, /^srp/i, /^z\xe1\u0159/i, /^\u0159\xedj/i, /^lis/i, /^pro/i], ys = /^(leden|\xfanor|b\u0159ezen|duben|kv\u011bten|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|z\xe1\u0159\xed|\u0159\xedjen|listopad|prosinec|led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i; function fs(e) { return 1 < e && e < 5 && 1 != ~~(e / 10) } function ks(e, a, t, s) { var n = e + " "; switch (t) { case "s": return a || s ? "p\xe1r sekund" : "p\xe1r sekundami"; case "ss": return a || s ? n + (fs(e) ? "sekundy" : "sekund") : n + "sekundami"; break; case "m": return a ? "minuta" : s ? "minutu" : "minutou"; case "mm": return a || s ? n + (fs(e) ? "minuty" : "minut") : n + "minutami"; break; case "h": return a ? "hodina" : s ? "hodinu" : "hodinou"; case "hh": return a || s ? n + (fs(e) ? "hodiny" : "hodin") : n + "hodinami"; break; case "d": return a || s ? "den" : "dnem"; case "dd": return a || s ? n + (fs(e) ? "dny" : "dn\xed") : n + "dny"; break; case "M": return a || s ? "m\u011bs\xedc" : "m\u011bs\xedcem"; case "MM": return a || s ? n + (fs(e) ? "m\u011bs\xedce" : "m\u011bs\xedc\u016f") : n + "m\u011bs\xedci"; break; case "y": return a || s ? "rok" : "rokem"; case "yy": return a || s ? n + (fs(e) ? "roky" : "let") : n + "lety"; break } } function ps(e, a, t, s) { var n = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return a ? n[t][0] : n[t][1] } function Ds(e, a, t, s) { var n = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return a ? n[t][0] : n[t][1] } function Ts(e, a, t, s) { var n = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return a ? n[t][0] : n[t][1] } l.defineLocale("cs", { months: Ls, monthsShort: cs, monthsRegex: ys, monthsShortRegex: ys, monthsStrictRegex: /^(leden|ledna|\xfanora|\xfanor|b\u0159ezen|b\u0159ezna|duben|dubna|kv\u011bten|kv\u011btna|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|srpna|z\xe1\u0159\xed|\u0159\xedjen|\u0159\xedjna|listopadu|listopad|prosinec|prosince)/i, monthsShortStrictRegex: /^(led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i, monthsParse: Ys, longMonthsParse: Ys, shortMonthsParse: Ys, weekdays: "ned\u011ble_pond\u011bl\xed_\xfater\xfd_st\u0159eda_\u010dtvrtek_p\xe1tek_sobota".split("_"), weekdaysShort: "ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"), weekdaysMin: "ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, calendar: { sameDay: "[dnes v] LT", nextDay: "[z\xedtra v] LT", nextWeek: function () { switch (this.day()) { case 0: return "[v ned\u011bli v] LT"; case 1: case 2: return "[v] dddd [v] LT"; case 3: return "[ve st\u0159edu v] LT"; case 4: return "[ve \u010dtvrtek v] LT"; case 5: return "[v p\xe1tek v] LT"; case 6: return "[v sobotu v] LT" } }, lastDay: "[v\u010dera v] LT", lastWeek: function () { switch (this.day()) { case 0: return "[minulou ned\u011bli v] LT"; case 1: case 2: return "[minul\xe9] dddd [v] LT"; case 3: return "[minulou st\u0159edu v] LT"; case 4: case 5: return "[minul\xfd] dddd [v] LT"; case 6: return "[minulou sobotu v] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "p\u0159ed %s", s: ks, ss: ks, m: ks, mm: ks, h: ks, hh: ks, d: ks, dd: ks, M: ks, MM: ks, y: ks, yy: ks }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("cv", { months: "\u043a\u04d1\u0440\u043b\u0430\u0447_\u043d\u0430\u0440\u04d1\u0441_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440\u0442\u043c\u0435_\u0443\u0442\u04d1_\u04ab\u0443\u0440\u043b\u0430_\u0430\u0432\u04d1\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448\u0442\u0430\u0432".split("_"), monthsShort: "\u043a\u04d1\u0440_\u043d\u0430\u0440_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440_\u0443\u0442\u04d1_\u04ab\u0443\u0440_\u0430\u0432\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448".split("_"), weekdays: "\u0432\u044b\u0440\u0441\u0430\u0440\u043d\u0438\u043a\u0443\u043d_\u0442\u0443\u043d\u0442\u0438\u043a\u0443\u043d_\u044b\u0442\u043b\u0430\u0440\u0438\u043a\u0443\u043d_\u044e\u043d\u043a\u0443\u043d_\u043a\u04d7\u04ab\u043d\u0435\u0440\u043d\u0438\u043a\u0443\u043d_\u044d\u0440\u043d\u0435\u043a\u0443\u043d_\u0448\u04d1\u043c\u0430\u0442\u043a\u0443\u043d".split("_"), weekdaysShort: "\u0432\u044b\u0440_\u0442\u0443\u043d_\u044b\u0442\u043b_\u044e\u043d_\u043a\u04d7\u04ab_\u044d\u0440\u043d_\u0448\u04d1\u043c".split("_"), weekdaysMin: "\u0432\u0440_\u0442\u043d_\u044b\u0442_\u044e\u043d_\u043a\u04ab_\u044d\u0440_\u0448\u043c".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7]", LLL: "YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm", LLLL: "dddd, YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm" }, calendar: { sameDay: "[\u041f\u0430\u044f\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", nextDay: "[\u042b\u0440\u0430\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", lastDay: "[\u04d6\u043d\u0435\u0440] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", nextWeek: "[\u04aa\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", lastWeek: "[\u0418\u0440\u0442\u043d\u04d7] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", sameElse: "L" }, relativeTime: { future: function (e) { return e + (/\u0441\u0435\u0445\u0435\u0442$/i.exec(e) ? "\u0440\u0435\u043d" : /\u04ab\u0443\u043b$/i.exec(e) ? "\u0442\u0430\u043d" : "\u0440\u0430\u043d") }, past: "%s \u043a\u0430\u044f\u043b\u043b\u0430", s: "\u043f\u04d7\u0440-\u0438\u043a \u04ab\u0435\u043a\u043a\u0443\u043d\u0442", ss: "%d \u04ab\u0435\u043a\u043a\u0443\u043d\u0442", m: "\u043f\u04d7\u0440 \u043c\u0438\u043d\u0443\u0442", mm: "%d \u043c\u0438\u043d\u0443\u0442", h: "\u043f\u04d7\u0440 \u0441\u0435\u0445\u0435\u0442", hh: "%d \u0441\u0435\u0445\u0435\u0442", d: "\u043f\u04d7\u0440 \u043a\u0443\u043d", dd: "%d \u043a\u0443\u043d", M: "\u043f\u04d7\u0440 \u0443\u0439\u04d1\u0445", MM: "%d \u0443\u0439\u04d1\u0445", y: "\u043f\u04d7\u0440 \u04ab\u0443\u043b", yy: "%d \u04ab\u0443\u043b" }, dayOfMonthOrdinalParse: /\d{1,2}-\u043c\u04d7\u0448/, ordinal: "%d-\u043c\u04d7\u0448", week: { dow: 1, doy: 7 } }), l.defineLocale("cy", { months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Heddiw am] LT", nextDay: "[Yfory am] LT", nextWeek: "dddd [am] LT", lastDay: "[Ddoe am] LT", lastWeek: "dddd [diwethaf am] LT", sameElse: "L" }, relativeTime: { future: "mewn %s", past: "%s yn \xf4l", s: "ychydig eiliadau", ss: "%d eiliad", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" }, dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/, ordinal: function (e) { var a = ""; return 20 < e ? a = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : 0 < e && (a = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + a }, week: { dow: 1, doy: 4 } }), l.defineLocale("da", { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"), weekdaysShort: "s\xf8n_man_tir_ons_tor_fre_l\xf8r".split("_"), weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "p\xe5 dddd [kl.] LT", lastDay: "[i g\xe5r kl.] LT", lastWeek: "[i] dddd[s kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "f\xe5 sekunder", ss: "%d sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en m\xe5ned", MM: "%d m\xe5neder", y: "et \xe5r", yy: "%d \xe5r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("de-at", { months: "J\xe4nner_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "J\xe4n._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: ps, mm: "%d Minuten", h: ps, hh: "%d Stunden", d: ps, dd: ps, M: ps, MM: ps, y: ps, yy: ps }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("de-ch", { months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: Ds, mm: "%d Minuten", h: Ds, hh: "%d Stunden", d: Ds, dd: Ds, M: Ds, MM: Ds, y: Ds, yy: Ds }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("de", { months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: Ts, mm: "%d Minuten", h: Ts, hh: "%d Stunden", d: Ts, dd: Ts, M: Ts, MM: Ts, y: Ts, yy: Ts }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }); var gs = ["\u0796\u07ac\u0782\u07aa\u0787\u07a6\u0783\u07a9", "\u078a\u07ac\u0784\u07b0\u0783\u07aa\u0787\u07a6\u0783\u07a9", "\u0789\u07a7\u0783\u07a8\u0797\u07aa", "\u0787\u07ad\u0795\u07b0\u0783\u07a9\u078d\u07aa", "\u0789\u07ad", "\u0796\u07ab\u0782\u07b0", "\u0796\u07aa\u078d\u07a6\u0787\u07a8", "\u0787\u07af\u078e\u07a6\u0790\u07b0\u0793\u07aa", "\u0790\u07ac\u0795\u07b0\u0793\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa", "\u0787\u07ae\u0786\u07b0\u0793\u07af\u0784\u07a6\u0783\u07aa", "\u0782\u07ae\u0788\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa", "\u0791\u07a8\u0790\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa"], ws = ["\u0787\u07a7\u078b\u07a8\u0787\u07b0\u078c\u07a6", "\u0780\u07af\u0789\u07a6", "\u0787\u07a6\u0782\u07b0\u078e\u07a7\u0783\u07a6", "\u0784\u07aa\u078b\u07a6", "\u0784\u07aa\u0783\u07a7\u0790\u07b0\u078a\u07a6\u078c\u07a8", "\u0780\u07aa\u0786\u07aa\u0783\u07aa", "\u0780\u07ae\u0782\u07a8\u0780\u07a8\u0783\u07aa"]; l.defineLocale("dv", { months: gs, monthsShort: gs, weekdays: ws, weekdaysShort: ws, weekdaysMin: "\u0787\u07a7\u078b\u07a8_\u0780\u07af\u0789\u07a6_\u0787\u07a6\u0782\u07b0_\u0784\u07aa\u078b\u07a6_\u0784\u07aa\u0783\u07a7_\u0780\u07aa\u0786\u07aa_\u0780\u07ae\u0782\u07a8".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/M/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0789\u0786|\u0789\u078a/, isPM: function (e) { return "\u0789\u078a" === e }, meridiem: function (e, a, t) { return e < 12 ? "\u0789\u0786" : "\u0789\u078a" }, calendar: { sameDay: "[\u0789\u07a8\u0787\u07a6\u078b\u07aa] LT", nextDay: "[\u0789\u07a7\u078b\u07a6\u0789\u07a7] LT", nextWeek: "dddd LT", lastDay: "[\u0787\u07a8\u0787\u07b0\u0794\u07ac] LT", lastWeek: "[\u078a\u07a7\u0787\u07a8\u078c\u07aa\u0788\u07a8] dddd LT", sameElse: "L" }, relativeTime: { future: "\u078c\u07ac\u0783\u07ad\u078e\u07a6\u0787\u07a8 %s", past: "\u0786\u07aa\u0783\u07a8\u0782\u07b0 %s", s: "\u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa\u0786\u07ae\u0785\u07ac\u0787\u07b0", ss: "d% \u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa", m: "\u0789\u07a8\u0782\u07a8\u0793\u07ac\u0787\u07b0", mm: "\u0789\u07a8\u0782\u07a8\u0793\u07aa %d", h: "\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07ac\u0787\u07b0", hh: "\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07aa %d", d: "\u078b\u07aa\u0788\u07a6\u0780\u07ac\u0787\u07b0", dd: "\u078b\u07aa\u0788\u07a6\u0790\u07b0 %d", M: "\u0789\u07a6\u0780\u07ac\u0787\u07b0", MM: "\u0789\u07a6\u0790\u07b0 %d", y: "\u0787\u07a6\u0780\u07a6\u0783\u07ac\u0787\u07b0", yy: "\u0787\u07a6\u0780\u07a6\u0783\u07aa %d" }, preparse: function (e) { return e.replace(/\u060c/g, ",") }, postformat: function (e) { return e.replace(/,/g, "\u060c") }, week: { dow: 7, doy: 12 } }), l.defineLocale("el", { monthsNominativeEl: "\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2_\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2_\u039c\u03ac\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2_\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2_\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2_\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2".split("_"), monthsGenitiveEl: "\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5_\u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5_\u039c\u03b1\u0390\u03bf\u03c5_\u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5_\u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5_\u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5_\u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5_\u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5".split("_"), months: function (e, a) { return e ? "string" == typeof a && /D/.test(a.substring(0, a.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl }, monthsShort: "\u0399\u03b1\u03bd_\u03a6\u03b5\u03b2_\u039c\u03b1\u03c1_\u0391\u03c0\u03c1_\u039c\u03b1\u03ca_\u0399\u03bf\u03c5\u03bd_\u0399\u03bf\u03c5\u03bb_\u0391\u03c5\u03b3_\u03a3\u03b5\u03c0_\u039f\u03ba\u03c4_\u039d\u03bf\u03b5_\u0394\u03b5\u03ba".split("_"), weekdays: "\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae_\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1_\u03a4\u03c1\u03af\u03c4\u03b7_\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7_\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7_\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae_\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split("_"), weekdaysShort: "\u039a\u03c5\u03c1_\u0394\u03b5\u03c5_\u03a4\u03c1\u03b9_\u03a4\u03b5\u03c4_\u03a0\u03b5\u03bc_\u03a0\u03b1\u03c1_\u03a3\u03b1\u03b2".split("_"), weekdaysMin: "\u039a\u03c5_\u0394\u03b5_\u03a4\u03c1_\u03a4\u03b5_\u03a0\u03b5_\u03a0\u03b1_\u03a3\u03b1".split("_"), meridiem: function (e, a, t) { return 11 < e ? t ? "\u03bc\u03bc" : "\u039c\u039c" : t ? "\u03c0\u03bc" : "\u03a0\u039c" }, isPM: function (e) { return "\u03bc" === (e + "").toLowerCase()[0] }, meridiemParse: /[\u03a0\u039c]\.?\u039c?\.?/i, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendarEl: { sameDay: "[\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1 {}] LT", nextDay: "[\u0391\u03cd\u03c1\u03b9\u03bf {}] LT", nextWeek: "dddd [{}] LT", lastDay: "[\u03a7\u03b8\u03b5\u03c2 {}] LT", lastWeek: function () { switch (this.day()) { case 6: return "[\u03c4\u03bf \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf] dddd [{}] LT"; default: return "[\u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7] dddd [{}] LT" } }, sameElse: "L" }, calendar: function (e, a) { var t = this._calendarEl[e], s = a && a.hours(); return H(t) && (t = t.apply(a)), t.replace("{}", s % 12 == 1 ? "\u03c3\u03c4\u03b7" : "\u03c3\u03c4\u03b9\u03c2") }, relativeTime: { future: "\u03c3\u03b5 %s", past: "%s \u03c0\u03c1\u03b9\u03bd", s: "\u03bb\u03af\u03b3\u03b1 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1", ss: "%d \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1", m: "\u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc", mm: "%d \u03bb\u03b5\u03c0\u03c4\u03ac", h: "\u03bc\u03af\u03b1 \u03ce\u03c1\u03b1", hh: "%d \u03ce\u03c1\u03b5\u03c2", d: "\u03bc\u03af\u03b1 \u03bc\u03ad\u03c1\u03b1", dd: "%d \u03bc\u03ad\u03c1\u03b5\u03c2", M: "\u03ad\u03bd\u03b1\u03c2 \u03bc\u03ae\u03bd\u03b1\u03c2", MM: "%d \u03bc\u03ae\u03bd\u03b5\u03c2", y: "\u03ad\u03bd\u03b1\u03c2 \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2", yy: "%d \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1" }, dayOfMonthOrdinalParse: /\d{1,2}\u03b7/, ordinal: "%d\u03b7", week: { dow: 1, doy: 4 } }), l.defineLocale("en-SG", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function (e) { var a = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th") }, week: { dow: 1, doy: 4 } }), l.defineLocale("en-au", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function (e) { var a = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th") }, week: { dow: 1, doy: 4 } }), l.defineLocale("en-ca", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "YYYY-MM-DD", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function (e) { var a = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th") } }), l.defineLocale("en-gb", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function (e) { var a = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th") }, week: { dow: 1, doy: 4 } }), l.defineLocale("en-ie", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function (e) { var a = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th") }, week: { dow: 1, doy: 4 } }), l.defineLocale("en-il", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function (e) { var a = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th") } }), l.defineLocale("en-nz", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function (e) { var a = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th") }, week: { dow: 1, doy: 4 } }), l.defineLocale("eo", { months: "januaro_februaro_marto_aprilo_majo_junio_julio_a\u016dgusto_septembro_oktobro_novembro_decembro".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_a\u016dg_sep_okt_nov_dec".split("_"), weekdays: "diman\u0109o_lundo_mardo_merkredo_\u0135a\u016ddo_vendredo_sabato".split("_"), weekdaysShort: "dim_lun_mard_merk_\u0135a\u016d_ven_sab".split("_"), weekdaysMin: "di_lu_ma_me_\u0135a_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-a de] MMMM, YYYY", LLL: "D[-a de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm" }, meridiemParse: /[ap]\.t\.m/i, isPM: function (e) { return "p" === e.charAt(0).toLowerCase() }, meridiem: function (e, a, t) { return 11 < e ? t ? "p.t.m." : "P.T.M." : t ? "a.t.m." : "A.T.M." }, calendar: { sameDay: "[Hodia\u016d je] LT", nextDay: "[Morga\u016d je] LT", nextWeek: "dddd [je] LT", lastDay: "[Hiera\u016d je] LT", lastWeek: "[pasinta] dddd [je] LT", sameElse: "L" }, relativeTime: { future: "post %s", past: "anta\u016d %s", s: "sekundoj", ss: "%d sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" }, dayOfMonthOrdinalParse: /\d{1,2}a/, ordinal: "%da", week: { dow: 1, doy: 7 } }); var vs = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), Ss = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), Hs = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i], bs = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i; l.defineLocale("es-do", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function (e, a) { return e ? /-MMM-/.test(a) ? Ss[e.month()] : vs[e.month()] : vs }, monthsRegex: bs, monthsShortRegex: bs, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: Hs, longMonthsParse: Hs, shortMonthsParse: Hs, weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"), weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, calendar: { sameDay: function () { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function () { return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function () { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function () { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function () { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un d\xeda", dd: "%d d\xedas", M: "un mes", MM: "%d meses", y: "un a\xf1o", yy: "%d a\xf1os" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }); var js = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), xs = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), Os = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i], Ps = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i; l.defineLocale("es-us", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function (e, a) { return e ? /-MMM-/.test(a) ? xs[e.month()] : js[e.month()] : js }, monthsRegex: Ps, monthsShortRegex: Ps, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: Os, longMonthsParse: Os, shortMonthsParse: Os, weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"), weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, calendar: { sameDay: function () { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function () { return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function () { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function () { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function () { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un d\xeda", dd: "%d d\xedas", M: "un mes", MM: "%d meses", y: "un a\xf1o", yy: "%d a\xf1os" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 0, doy: 6 } }); var Ws = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), As = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), Es = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i], Fs = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i; function zs(e, a, t, s) { var n = { s: ["m\xf5ne sekundi", "m\xf5ni sekund", "paar sekundit"], ss: [e + "sekundi", e + "sekundit"], m: ["\xfche minuti", "\xfcks minut"], mm: [e + " minuti", e + " minutit"], h: ["\xfche tunni", "tund aega", "\xfcks tund"], hh: [e + " tunni", e + " tundi"], d: ["\xfche p\xe4eva", "\xfcks p\xe4ev"], M: ["kuu aja", "kuu aega", "\xfcks kuu"], MM: [e + " kuu", e + " kuud"], y: ["\xfche aasta", "aasta", "\xfcks aasta"], yy: [e + " aasta", e + " aastat"] }; return a ? n[t][2] ? n[t][2] : n[t][1] : s ? n[t][0] : n[t][1] } l.defineLocale("es", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function (e, a) { return e ? /-MMM-/.test(a) ? As[e.month()] : Ws[e.month()] : Ws }, monthsRegex: Fs, monthsShortRegex: Fs, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: Es, longMonthsParse: Es, shortMonthsParse: Es, weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"), weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function () { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function () { return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function () { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function () { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function () { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un d\xeda", dd: "%d d\xedas", M: "un mes", MM: "%d meses", y: "un a\xf1o", yy: "%d a\xf1os" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }), l.defineLocale("et", { months: "jaanuar_veebruar_m\xe4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_m\xe4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), weekdays: "p\xfchap\xe4ev_esmasp\xe4ev_teisip\xe4ev_kolmap\xe4ev_neljap\xe4ev_reede_laup\xe4ev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[T\xe4na,] LT", nextDay: "[Homme,] LT", nextWeek: "[J\xe4rgmine] dddd LT", lastDay: "[Eile,] LT", lastWeek: "[Eelmine] dddd LT", sameElse: "L" }, relativeTime: { future: "%s p\xe4rast", past: "%s tagasi", s: zs, ss: zs, m: zs, mm: zs, h: zs, hh: zs, d: zs, dd: "%d p\xe4eva", M: zs, MM: zs, y: zs, yy: zs }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("eu", { months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), monthsParseExact: !0, weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, calendar: { sameDay: "[gaur] LT[etan]", nextDay: "[bihar] LT[etan]", nextWeek: "dddd LT[etan]", lastDay: "[atzo] LT[etan]", lastWeek: "[aurreko] dddd LT[etan]", sameElse: "L" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", ss: "%d segundo", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }); var Js = { 1: "\u06f1", 2: "\u06f2", 3: "\u06f3", 4: "\u06f4", 5: "\u06f5", 6: "\u06f6", 7: "\u06f7", 8: "\u06f8", 9: "\u06f9", 0: "\u06f0" }, Ns = { "\u06f1": "1", "\u06f2": "2", "\u06f3": "3", "\u06f4": "4", "\u06f5": "5", "\u06f6": "6", "\u06f7": "7", "\u06f8": "8", "\u06f9": "9", "\u06f0": "0" }; l.defineLocale("fa", { months: "\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"), monthsShort: "\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"), weekdays: "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"), weekdaysShort: "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"), weekdaysMin: "\u06cc_\u062f_\u0633_\u0686_\u067e_\u062c_\u0634".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631|\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/, isPM: function (e) { return /\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/.test(e) }, meridiem: function (e, a, t) { return e < 12 ? "\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631" : "\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631" }, calendar: { sameDay: "[\u0627\u0645\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT", nextDay: "[\u0641\u0631\u062f\u0627 \u0633\u0627\u0639\u062a] LT", nextWeek: "dddd [\u0633\u0627\u0639\u062a] LT", lastDay: "[\u062f\u06cc\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT", lastWeek: "dddd [\u067e\u06cc\u0634] [\u0633\u0627\u0639\u062a] LT", sameElse: "L" }, relativeTime: { future: "\u062f\u0631 %s", past: "%s \u067e\u06cc\u0634", s: "\u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647", ss: "\u062b\u0627\u0646\u06cc\u0647 d%", m: "\u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647", mm: "%d \u062f\u0642\u06cc\u0642\u0647", h: "\u06cc\u06a9 \u0633\u0627\u0639\u062a", hh: "%d \u0633\u0627\u0639\u062a", d: "\u06cc\u06a9 \u0631\u0648\u0632", dd: "%d \u0631\u0648\u0632", M: "\u06cc\u06a9 \u0645\u0627\u0647", MM: "%d \u0645\u0627\u0647", y: "\u06cc\u06a9 \u0633\u0627\u0644", yy: "%d \u0633\u0627\u0644" }, preparse: function (e) { return e.replace(/[\u06f0-\u06f9]/g, function (e) { return Ns[e] }).replace(/\u060c/g, ",") }, postformat: function (e) { return e.replace(/\d/g, function (e) { return Js[e] }).replace(/,/g, "\u060c") }, dayOfMonthOrdinalParse: /\d{1,2}\u0645/, ordinal: "%d\u0645", week: { dow: 6, doy: 12 } }); var Rs = "nolla yksi kaksi kolme nelj\xe4 viisi kuusi seitsem\xe4n kahdeksan yhdeks\xe4n".split(" "), Cs = ["nolla", "yhden", "kahden", "kolmen", "nelj\xe4n", "viiden", "kuuden", Rs[7], Rs[8], Rs[9]]; function Is(e, a, t, s) { var n, d, r = ""; switch (t) { case "s": return s ? "muutaman sekunnin" : "muutama sekunti"; case "ss": return s ? "sekunnin" : "sekuntia"; case "m": return s ? "minuutin" : "minuutti"; case "mm": r = s ? "minuutin" : "minuuttia"; break; case "h": return s ? "tunnin" : "tunti"; case "hh": r = s ? "tunnin" : "tuntia"; break; case "d": return s ? "p\xe4iv\xe4n" : "p\xe4iv\xe4"; case "dd": r = s ? "p\xe4iv\xe4n" : "p\xe4iv\xe4\xe4"; break; case "M": return s ? "kuukauden" : "kuukausi"; case "MM": r = s ? "kuukauden" : "kuukautta"; break; case "y": return s ? "vuoden" : "vuosi"; case "yy": r = s ? "vuoden" : "vuotta"; break }return d = s, r = ((n = e) < 10 ? d ? Cs[n] : Rs[n] : n) + " " + r } l.defineLocale("fi", { months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "Do MMMM[ta] YYYY", LLL: "Do MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "Do MMM YYYY", lll: "Do MMM YYYY, [klo] HH.mm", llll: "ddd, Do MMM YYYY, [klo] HH.mm" }, calendar: { sameDay: "[t\xe4n\xe4\xe4n] [klo] LT", nextDay: "[huomenna] [klo] LT", nextWeek: "dddd [klo] LT", lastDay: "[eilen] [klo] LT", lastWeek: "[viime] dddd[na] [klo] LT", sameElse: "L" }, relativeTime: { future: "%s p\xe4\xe4st\xe4", past: "%s sitten", s: Is, ss: Is, m: Is, mm: Is, h: Is, hh: Is, d: Is, dd: Is, M: Is, MM: Is, y: Is, yy: Is }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("fo", { months: "januar_februar_mars_apr\xedl_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sunnudagur_m\xe1nadagur_t\xfdsdagur_mikudagur_h\xf3sdagur_fr\xedggjadagur_leygardagur".split("_"), weekdaysShort: "sun_m\xe1n_t\xfds_mik_h\xf3s_fr\xed_ley".split("_"), weekdaysMin: "su_m\xe1_t\xfd_mi_h\xf3_fr_le".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, calendar: { sameDay: "[\xcd dag kl.] LT", nextDay: "[\xcd morgin kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[\xcd gj\xe1r kl.] LT", lastWeek: "[s\xed\xf0stu] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "um %s", past: "%s s\xed\xf0ani", s: "f\xe1 sekund", ss: "%d sekundir", m: "ein minuttur", mm: "%d minuttir", h: "ein t\xedmi", hh: "%d t\xedmar", d: "ein dagur", dd: "%d dagar", M: "ein m\xe1na\xf0ur", MM: "%d m\xe1na\xf0ir", y: "eitt \xe1r", yy: "%d \xe1r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("fr-ca", { months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"), monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd\u2019hui \xe0] LT", nextDay: "[Demain \xe0] LT", nextWeek: "dddd [\xe0] LT", lastDay: "[Hier \xe0] LT", lastWeek: "dddd [dernier \xe0] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|e)/, ordinal: function (e, a) { switch (a) { default: case "M": case "Q": case "D": case "DDD": case "d": return e + (1 === e ? "er" : "e"); case "w": case "W": return e + (1 === e ? "re" : "e") } } }), l.defineLocale("fr-ch", { months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"), monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd\u2019hui \xe0] LT", nextDay: "[Demain \xe0] LT", nextWeek: "dddd [\xe0] LT", lastDay: "[Hier \xe0] LT", lastWeek: "dddd [dernier \xe0] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|e)/, ordinal: function (e, a) { switch (a) { default: case "M": case "Q": case "D": case "DDD": case "d": return e + (1 === e ? "er" : "e"); case "w": case "W": return e + (1 === e ? "re" : "e") } }, week: { dow: 1, doy: 4 } }), l.defineLocale("fr", { months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"), monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd\u2019hui \xe0] LT", nextDay: "[Demain \xe0] LT", nextWeek: "dddd [\xe0] LT", lastDay: "[Hier \xe0] LT", lastWeek: "dddd [dernier \xe0] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|)/, ordinal: function (e, a) { switch (a) { case "D": return e + (1 === e ? "er" : ""); default: case "M": case "Q": case "DDD": case "d": return e + (1 === e ? "er" : "e"); case "w": case "W": return e + (1 === e ? "re" : "e") } }, week: { dow: 1, doy: 4 } }); var Us = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"), Gs = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"); l.defineLocale("fy", { months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: function (e, a) { return e ? /-MMM-/.test(a) ? Gs[e.month()] : Us[e.month()] : Us }, monthsParseExact: !0, weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[hjoed om] LT", nextDay: "[moarn om] LT", nextWeek: "dddd [om] LT", lastDay: "[juster om] LT", lastWeek: "[\xf4fr\xfbne] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", ss: "%d sekonden", m: "ien min\xfat", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function (e) { return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de") }, week: { dow: 1, doy: 4 } }); l.defineLocale("ga", { months: ["Ean\xe1ir", "Feabhra", "M\xe1rta", "Aibre\xe1n", "Bealtaine", "M\xe9itheamh", "I\xfail", "L\xfanasa", "Me\xe1n F\xf3mhair", "Deaireadh F\xf3mhair", "Samhain", "Nollaig"], monthsShort: ["Ean\xe1", "Feab", "M\xe1rt", "Aibr", "Beal", "M\xe9it", "I\xfail", "L\xfana", "Me\xe1n", "Deai", "Samh", "Noll"], monthsParseExact: !0, weekdays: ["D\xe9 Domhnaigh", "D\xe9 Luain", "D\xe9 M\xe1irt", "D\xe9 C\xe9adaoin", "D\xe9ardaoin", "D\xe9 hAoine", "D\xe9 Satharn"], weekdaysShort: ["Dom", "Lua", "M\xe1i", "C\xe9a", "D\xe9a", "hAo", "Sat"], weekdaysMin: ["Do", "Lu", "M\xe1", "Ce", "D\xe9", "hA", "Sa"], longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Inniu ag] LT", nextDay: "[Am\xe1rach ag] LT", nextWeek: "dddd [ag] LT", lastDay: "[Inn\xe9 aig] LT", lastWeek: "dddd [seo caite] [ag] LT", sameElse: "L" }, relativeTime: { future: "i %s", past: "%s \xf3 shin", s: "c\xfapla soicind", ss: "%d soicind", m: "n\xf3im\xe9ad", mm: "%d n\xf3im\xe9ad", h: "uair an chloig", hh: "%d uair an chloig", d: "l\xe1", dd: "%d l\xe1", M: "m\xed", MM: "%d m\xed", y: "bliain", yy: "%d bliain" }, dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/, ordinal: function (e) { return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh") }, week: { dow: 1, doy: 4 } }); function Vs(e, a, t, s) { var n = { s: ["thodde secondanim", "thodde second"], ss: [e + " secondanim", e + " second"], m: ["eka mintan", "ek minute"], mm: [e + " mintanim", e + " mintam"], h: ["eka voran", "ek vor"], hh: [e + " voranim", e + " voram"], d: ["eka disan", "ek dis"], dd: [e + " disanim", e + " dis"], M: ["eka mhoinean", "ek mhoino"], MM: [e + " mhoineanim", e + " mhoine"], y: ["eka vorsan", "ek voros"], yy: [e + " vorsanim", e + " vorsam"] }; return a ? n[t][0] : n[t][1] } l.defineLocale("gd", { months: ["Am Faoilleach", "An Gearran", "Am M\xe0rt", "An Giblean", "An C\xe8itean", "An t-\xd2gmhios", "An t-Iuchar", "An L\xf9nastal", "An t-Sultain", "An D\xe0mhair", "An t-Samhain", "An D\xf9bhlachd"], monthsShort: ["Faoi", "Gear", "M\xe0rt", "Gibl", "C\xe8it", "\xd2gmh", "Iuch", "L\xf9n", "Sult", "D\xe0mh", "Samh", "D\xf9bh"], monthsParseExact: !0, weekdays: ["Did\xf2mhnaich", "Diluain", "Dim\xe0irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"], weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"], weekdaysMin: ["D\xf2", "Lu", "M\xe0", "Ci", "Ar", "Ha", "Sa"], longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[An-diugh aig] LT", nextDay: "[A-m\xe0ireach aig] LT", nextWeek: "dddd [aig] LT", lastDay: "[An-d\xe8 aig] LT", lastWeek: "dddd [seo chaidh] [aig] LT", sameElse: "L" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", ss: "%d diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "m\xecos", MM: "%d m\xecosan", y: "bliadhna", yy: "%d bliadhna" }, dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/, ordinal: function (e) { return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh") }, week: { dow: 1, doy: 4 } }), l.defineLocale("gl", { months: "xaneiro_febreiro_marzo_abril_maio_xu\xf1o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"), monthsShort: "xan._feb._mar._abr._mai._xu\xf1._xul._ago._set._out._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "domingo_luns_martes_m\xe9rcores_xoves_venres_s\xe1bado".split("_"), weekdaysShort: "dom._lun._mar._m\xe9r._xov._ven._s\xe1b.".split("_"), weekdaysMin: "do_lu_ma_m\xe9_xo_ve_s\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function () { return "[hoxe " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT" }, nextDay: function () { return "[ma\xf1\xe1 " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT" }, nextWeek: function () { return "dddd [" + (1 !== this.hours() ? "\xe1s" : "a") + "] LT" }, lastDay: function () { return "[onte " + (1 !== this.hours() ? "\xe1" : "a") + "] LT" }, lastWeek: function () { return "[o] dddd [pasado " + (1 !== this.hours() ? "\xe1s" : "a") + "] LT" }, sameElse: "L" }, relativeTime: { future: function (e) { return 0 === e.indexOf("un") ? "n" + e : "en " + e }, past: "hai %s", s: "uns segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un d\xeda", dd: "%d d\xedas", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }), l.defineLocale("gom-latn", { months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"), monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"), weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"), weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "A h:mm [vazta]", LTS: "A h:mm:ss [vazta]", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY A h:mm [vazta]", LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]", llll: "ddd, D MMM YYYY, A h:mm [vazta]" }, calendar: { sameDay: "[Aiz] LT", nextDay: "[Faleam] LT", nextWeek: "[Ieta to] dddd[,] LT", lastDay: "[Kal] LT", lastWeek: "[Fatlo] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%s", past: "%s adim", s: Vs, ss: Vs, m: Vs, mm: Vs, h: Vs, hh: Vs, d: Vs, dd: Vs, M: Vs, MM: Vs, y: Vs, yy: Vs }, dayOfMonthOrdinalParse: /\d{1,2}(er)/, ordinal: function (e, a) { switch (a) { case "D": return e + "er"; default: case "M": case "Q": case "DDD": case "d": case "w": case "W": return e } }, week: { dow: 1, doy: 4 }, meridiemParse: /rati|sokalli|donparam|sanje/, meridiemHour: function (e, a) { return 12 === e && (e = 0), "rati" === a ? e < 4 ? e : e + 12 : "sokalli" === a ? e : "donparam" === a ? 12 < e ? e : e + 12 : "sanje" === a ? e + 12 : void 0 }, meridiem: function (e, a, t) { return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati" } }); var Ks = { 1: "\u0ae7", 2: "\u0ae8", 3: "\u0ae9", 4: "\u0aea", 5: "\u0aeb", 6: "\u0aec", 7: "\u0aed", 8: "\u0aee", 9: "\u0aef", 0: "\u0ae6" }, Zs = { "\u0ae7": "1", "\u0ae8": "2", "\u0ae9": "3", "\u0aea": "4", "\u0aeb": "5", "\u0aec": "6", "\u0aed": "7", "\u0aee": "8", "\u0aef": "9", "\u0ae6": "0" }; l.defineLocale("gu", { months: "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0_\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0_\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2_\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe\u0a88_\u0a91\u0a97\u0ab8\u0acd\u0a9f_\u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0a91\u0a95\u0acd\u0a9f\u0acd\u0aac\u0ab0_\u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0".split("_"), monthsShort: "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1._\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1._\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf._\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe._\u0a91\u0a97._\u0ab8\u0aaa\u0acd\u0a9f\u0ac7._\u0a91\u0a95\u0acd\u0a9f\u0acd._\u0aa8\u0ab5\u0ac7._\u0aa1\u0abf\u0ab8\u0ac7.".split("_"), monthsParseExact: !0, weekdays: "\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0_\u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0_\u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0_\u0aac\u0ac1\u0aa7\u0acd\u0ab5\u0abe\u0ab0_\u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0_\u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0_\u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0".split("_"), weekdaysShort: "\u0ab0\u0ab5\u0abf_\u0ab8\u0acb\u0aae_\u0aae\u0a82\u0a97\u0ab3_\u0aac\u0ac1\u0aa7\u0acd_\u0a97\u0ac1\u0ab0\u0ac1_\u0ab6\u0ac1\u0a95\u0acd\u0ab0_\u0ab6\u0aa8\u0abf".split("_"), weekdaysMin: "\u0ab0_\u0ab8\u0acb_\u0aae\u0a82_\u0aac\u0ac1_\u0a97\u0ac1_\u0ab6\u0ac1_\u0ab6".split("_"), longDateFormat: { LT: "A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7", LTS: "A h:mm:ss \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7", LLLL: "dddd, D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7" }, calendar: { sameDay: "[\u0a86\u0a9c] LT", nextDay: "[\u0a95\u0abe\u0ab2\u0ac7] LT", nextWeek: "dddd, LT", lastDay: "[\u0a97\u0a87\u0a95\u0abe\u0ab2\u0ac7] LT", lastWeek: "[\u0aaa\u0abe\u0a9b\u0ab2\u0abe] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0aae\u0abe", past: "%s \u0aaa\u0ac7\u0ab9\u0ab2\u0abe", s: "\u0a85\u0aae\u0ac1\u0a95 \u0aaa\u0ab3\u0acb", ss: "%d \u0ab8\u0ac7\u0a95\u0a82\u0aa1", m: "\u0a8f\u0a95 \u0aae\u0abf\u0aa8\u0abf\u0a9f", mm: "%d \u0aae\u0abf\u0aa8\u0abf\u0a9f", h: "\u0a8f\u0a95 \u0a95\u0ab2\u0abe\u0a95", hh: "%d \u0a95\u0ab2\u0abe\u0a95", d: "\u0a8f\u0a95 \u0aa6\u0abf\u0ab5\u0ab8", dd: "%d \u0aa6\u0abf\u0ab5\u0ab8", M: "\u0a8f\u0a95 \u0aae\u0ab9\u0abf\u0aa8\u0acb", MM: "%d \u0aae\u0ab9\u0abf\u0aa8\u0acb", y: "\u0a8f\u0a95 \u0ab5\u0ab0\u0acd\u0ab7", yy: "%d \u0ab5\u0ab0\u0acd\u0ab7" }, preparse: function (e) { return e.replace(/[\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6]/g, function (e) { return Zs[e] }) }, postformat: function (e) { return e.replace(/\d/g, function (e) { return Ks[e] }) }, meridiemParse: /\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/, meridiemHour: function (e, a) { return 12 === e && (e = 0), "\u0ab0\u0abe\u0aa4" === a ? e < 4 ? e : e + 12 : "\u0ab8\u0ab5\u0abe\u0ab0" === a ? e : "\u0aac\u0aaa\u0acb\u0ab0" === a ? 10 <= e ? e : e + 12 : "\u0ab8\u0abe\u0a82\u0a9c" === a ? e + 12 : void 0 }, meridiem: function (e, a, t) { return e < 4 ? "\u0ab0\u0abe\u0aa4" : e < 10 ? "\u0ab8\u0ab5\u0abe\u0ab0" : e < 17 ? "\u0aac\u0aaa\u0acb\u0ab0" : e < 20 ? "\u0ab8\u0abe\u0a82\u0a9c" : "\u0ab0\u0abe\u0aa4" }, week: { dow: 0, doy: 6 } }), l.defineLocale("he", { months: "\u05d9\u05e0\u05d5\u05d0\u05e8_\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05d9\u05dc_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8_\u05e1\u05e4\u05d8\u05de\u05d1\u05e8_\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8_\u05e0\u05d5\u05d1\u05de\u05d1\u05e8_\u05d3\u05e6\u05de\u05d1\u05e8".split("_"), monthsShort: "\u05d9\u05e0\u05d5\u05f3_\u05e4\u05d1\u05e8\u05f3_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05f3_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05f3_\u05e1\u05e4\u05d8\u05f3_\u05d0\u05d5\u05e7\u05f3_\u05e0\u05d5\u05d1\u05f3_\u05d3\u05e6\u05de\u05f3".split("_"), weekdays: "\u05e8\u05d0\u05e9\u05d5\u05df_\u05e9\u05e0\u05d9_\u05e9\u05dc\u05d9\u05e9\u05d9_\u05e8\u05d1\u05d9\u05e2\u05d9_\u05d7\u05de\u05d9\u05e9\u05d9_\u05e9\u05d9\u05e9\u05d9_\u05e9\u05d1\u05ea".split("_"), weekdaysShort: "\u05d0\u05f3_\u05d1\u05f3_\u05d2\u05f3_\u05d3\u05f3_\u05d4\u05f3_\u05d5\u05f3_\u05e9\u05f3".split("_"), weekdaysMin: "\u05d0_\u05d1_\u05d2_\u05d3_\u05d4_\u05d5_\u05e9".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [\u05d1]MMMM YYYY", LLL: "D [\u05d1]MMMM YYYY HH:mm", LLLL: "dddd, D [\u05d1]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[\u05d4\u05d9\u05d5\u05dd \u05d1\u05be]LT", nextDay: "[\u05de\u05d7\u05e8 \u05d1\u05be]LT", nextWeek: "dddd [\u05d1\u05e9\u05e2\u05d4] LT", lastDay: "[\u05d0\u05ea\u05de\u05d5\u05dc \u05d1\u05be]LT", lastWeek: "[\u05d1\u05d9\u05d5\u05dd] dddd [\u05d4\u05d0\u05d7\u05e8\u05d5\u05df \u05d1\u05e9\u05e2\u05d4] LT", sameElse: "L" }, relativeTime: { future: "\u05d1\u05e2\u05d5\u05d3 %s", past: "\u05dc\u05e4\u05e0\u05d9 %s", s: "\u05de\u05e1\u05e4\u05e8 \u05e9\u05e0\u05d9\u05d5\u05ea", ss: "%d \u05e9\u05e0\u05d9\u05d5\u05ea", m: "\u05d3\u05e7\u05d4", mm: "%d \u05d3\u05e7\u05d5\u05ea", h: "\u05e9\u05e2\u05d4", hh: function (e) { return 2 === e ? "\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd" : e + " \u05e9\u05e2\u05d5\u05ea" }, d: "\u05d9\u05d5\u05dd", dd: function (e) { return 2 === e ? "\u05d9\u05d5\u05de\u05d9\u05d9\u05dd" : e + " \u05d9\u05de\u05d9\u05dd" }, M: "\u05d7\u05d5\u05d3\u05e9", MM: function (e) { return 2 === e ? "\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd" : e + " \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd" }, y: "\u05e9\u05e0\u05d4", yy: function (e) { return 2 === e ? "\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd" : e % 10 == 0 && 10 !== e ? e + " \u05e9\u05e0\u05d4" : e + " \u05e9\u05e0\u05d9\u05dd" } }, meridiemParse: /\u05d0\u05d7\u05d4"\u05e6|\u05dc\u05e4\u05e0\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8|\u05d1\u05d1\u05d5\u05e7\u05e8|\u05d1\u05e2\u05e8\u05d1/i, isPM: function (e) { return /^(\u05d0\u05d7\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05e2\u05e8\u05d1)$/.test(e) }, meridiem: function (e, a, t) { return e < 5 ? "\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8" : e < 10 ? "\u05d1\u05d1\u05d5\u05e7\u05e8" : e < 12 ? t ? '\u05dc\u05e4\u05e0\u05d4"\u05e6' : "\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd" : e < 18 ? t ? '\u05d0\u05d7\u05d4"\u05e6' : "\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd" : "\u05d1\u05e2\u05e8\u05d1" } }); var $s = { 1: "\u0967", 2: "\u0968", 3: "\u0969", 4: "\u096a", 5: "\u096b", 6: "\u096c", 7: "\u096d", 8: "\u096e", 9: "\u096f", 0: "\u0966" }, Bs = { "\u0967": "1", "\u0968": "2", "\u0969": "3", "\u096a": "4", "\u096b": "5", "\u096c": "6", "\u096d": "7", "\u096e": "8", "\u096f": "9", "\u0966": "0" }; function qs(e, a, t) { var s = e + " "; switch (t) { case "ss": return s += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi"; case "m": return a ? "jedna minuta" : "jedne minute"; case "mm": return s += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta"; case "h": return a ? "jedan sat" : "jednog sata"; case "hh": return s += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati"; case "dd": return s += 1 === e ? "dan" : "dana"; case "MM": return s += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci"; case "yy": return s += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina" } } l.defineLocale("hi", { months: "\u091c\u0928\u0935\u0930\u0940_\u092b\u093c\u0930\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948\u0932_\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0938\u094d\u0924_\u0938\u093f\u0924\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u0942\u092c\u0930_\u0928\u0935\u092e\u094d\u092c\u0930_\u0926\u093f\u0938\u092e\u094d\u092c\u0930".split("_"), monthsShort: "\u091c\u0928._\u092b\u093c\u0930._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948._\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932._\u0905\u0917._\u0938\u093f\u0924._\u0905\u0915\u094d\u091f\u0942._\u0928\u0935._\u0926\u093f\u0938.".split("_"), monthsParseExact: !0, weekdays: "\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0932\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"), weekdaysShort: "\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0932_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"), weekdaysMin: "\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"), longDateFormat: { LT: "A h:mm \u092c\u091c\u0947", LTS: "A h:mm:ss \u092c\u091c\u0947", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u092c\u091c\u0947", LLLL: "dddd, D MMMM YYYY, A h:mm \u092c\u091c\u0947" }, calendar: { sameDay: "[\u0906\u091c] LT", nextDay: "[\u0915\u0932] LT", nextWeek: "dddd, LT", lastDay: "[\u0915\u0932] LT", lastWeek: "[\u092a\u093f\u091b\u0932\u0947] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u092e\u0947\u0902", past: "%s \u092a\u0939\u0932\u0947", s: "\u0915\u0941\u091b \u0939\u0940 \u0915\u094d\u0937\u0923", ss: "%d \u0938\u0947\u0915\u0902\u0921", m: "\u090f\u0915 \u092e\u093f\u0928\u091f", mm: "%d \u092e\u093f\u0928\u091f", h: "\u090f\u0915 \u0918\u0902\u091f\u093e", hh: "%d \u0918\u0902\u091f\u0947", d: "\u090f\u0915 \u0926\u093f\u0928", dd: "%d \u0926\u093f\u0928", M: "\u090f\u0915 \u092e\u0939\u0940\u0928\u0947", MM: "%d \u092e\u0939\u0940\u0928\u0947", y: "\u090f\u0915 \u0935\u0930\u094d\u0937", yy: "%d \u0935\u0930\u094d\u0937" }, preparse: function (e) { return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function (e) { return Bs[e] }) }, postformat: function (e) { return e.replace(/\d/g, function (e) { return $s[e] }) }, meridiemParse: /\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/, meridiemHour: function (e, a) { return 12 === e && (e = 0), "\u0930\u093e\u0924" === a ? e < 4 ? e : e + 12 : "\u0938\u0941\u092c\u0939" === a ? e : "\u0926\u094b\u092a\u0939\u0930" === a ? 10 <= e ? e : e + 12 : "\u0936\u093e\u092e" === a ? e + 12 : void 0 }, meridiem: function (e, a, t) { return e < 4 ? "\u0930\u093e\u0924" : e < 10 ? "\u0938\u0941\u092c\u0939" : e < 17 ? "\u0926\u094b\u092a\u0939\u0930" : e < 20 ? "\u0936\u093e\u092e" : "\u0930\u093e\u0924" }, week: { dow: 0, doy: 6 } }), l.defineLocale("hr", { months: { format: "sije\u010dnja_velja\u010de_o\u017eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), standalone: "sije\u010danj_velja\u010da_o\u017eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_") }, monthsShort: "sij._velj._o\u017eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () { switch (this.day()) { case 0: return "[u] [nedjelju] [u] LT"; case 3: return "[u] [srijedu] [u] LT"; case 6: return "[u] [subotu] [u] LT"; case 1: case 2: case 4: case 5: return "[u] dddd [u] LT" } }, lastDay: "[ju\u010der u] LT", lastWeek: function () { switch (this.day()) { case 0: case 3: return "[pro\u0161lu] dddd [u] LT"; case 6: return "[pro\u0161le] [subote] [u] LT"; case 1: case 2: case 4: case 5: return "[pro\u0161li] dddd [u] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", ss: qs, m: qs, mm: qs, h: qs, hh: qs, d: "dan", dd: qs, M: "mjesec", MM: qs, y: "godinu", yy: qs }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }); var Qs = "vas\xe1rnap h\xe9tf\u0151n kedden szerd\xe1n cs\xfct\xf6rt\xf6k\xf6n p\xe9nteken szombaton".split(" "); function Xs(e, a, t, s) { var n = e; switch (t) { case "s": return s || a ? "n\xe9h\xe1ny m\xe1sodperc" : "n\xe9h\xe1ny m\xe1sodperce"; case "ss": return n + (s || a) ? " m\xe1sodperc" : " m\xe1sodperce"; case "m": return "egy" + (s || a ? " perc" : " perce"); case "mm": return n + (s || a ? " perc" : " perce"); case "h": return "egy" + (s || a ? " \xf3ra" : " \xf3r\xe1ja"); case "hh": return n + (s || a ? " \xf3ra" : " \xf3r\xe1ja"); case "d": return "egy" + (s || a ? " nap" : " napja"); case "dd": return n + (s || a ? " nap" : " napja"); case "M": return "egy" + (s || a ? " h\xf3nap" : " h\xf3napja"); case "MM": return n + (s || a ? " h\xf3nap" : " h\xf3napja"); case "y": return "egy" + (s || a ? " \xe9v" : " \xe9ve"); case "yy": return n + (s || a ? " \xe9v" : " \xe9ve") }return "" } function en(e) { return (e ? "" : "[m\xfalt] ") + "[" + Qs[this.day()] + "] LT[-kor]" } function an(e) { return e % 100 == 11 || e % 10 != 1 } function tn(e, a, t, s) { var n = e + " "; switch (t) { case "s": return a || s ? "nokkrar sek\xfandur" : "nokkrum sek\xfandum"; case "ss": return an(e) ? n + (a || s ? "sek\xfandur" : "sek\xfandum") : n + "sek\xfanda"; case "m": return a ? "m\xedn\xfata" : "m\xedn\xfatu"; case "mm": return an(e) ? n + (a || s ? "m\xedn\xfatur" : "m\xedn\xfatum") : a ? n + "m\xedn\xfata" : n + "m\xedn\xfatu"; case "hh": return an(e) ? n + (a || s ? "klukkustundir" : "klukkustundum") : n + "klukkustund"; case "d": return a ? "dagur" : s ? "dag" : "degi"; case "dd": return an(e) ? a ? n + "dagar" : n + (s ? "daga" : "d\xf6gum") : a ? n + "dagur" : n + (s ? "dag" : "degi"); case "M": return a ? "m\xe1nu\xf0ur" : s ? "m\xe1nu\xf0" : "m\xe1nu\xf0i"; case "MM": return an(e) ? a ? n + "m\xe1nu\xf0ir" : n + (s ? "m\xe1nu\xf0i" : "m\xe1nu\xf0um") : a ? n + "m\xe1nu\xf0ur" : n + (s ? "m\xe1nu\xf0" : "m\xe1nu\xf0i"); case "y": return a || s ? "\xe1r" : "\xe1ri"; case "yy": return an(e) ? n + (a || s ? "\xe1r" : "\xe1rum") : n + (a || s ? "\xe1r" : "\xe1ri") } } l.defineLocale("hu", { months: "janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split("_"), monthsShort: "jan_feb_m\xe1rc_\xe1pr_m\xe1j_j\xfan_j\xfal_aug_szept_okt_nov_dec".split("_"), weekdays: "vas\xe1rnap_h\xe9tf\u0151_kedd_szerda_cs\xfct\xf6rt\xf6k_p\xe9ntek_szombat".split("_"), weekdaysShort: "vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" }, meridiemParse: /de|du/i, isPM: function (e) { return "u" === e.charAt(1).toLowerCase() }, meridiem: function (e, a, t) { return e < 12 ? !0 === t ? "de" : "DE" : !0 === t ? "du" : "DU" }, calendar: { sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function () { return en.call(this, !0) }, lastDay: "[tegnap] LT[-kor]", lastWeek: function () { return en.call(this, !1) }, sameElse: "L" }, relativeTime: { future: "%s m\xfalva", past: "%s", s: Xs, ss: Xs, m: Xs, mm: Xs, h: Xs, hh: Xs, d: Xs, dd: Xs, M: Xs, MM: Xs, y: Xs, yy: Xs }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("hy-am", { months: { format: "\u0570\u0578\u0582\u0576\u057e\u0561\u0580\u056b_\u0583\u0565\u057f\u0580\u057e\u0561\u0580\u056b_\u0574\u0561\u0580\u057f\u056b_\u0561\u057a\u0580\u056b\u056c\u056b_\u0574\u0561\u0575\u056b\u057d\u056b_\u0570\u0578\u0582\u0576\u056b\u057d\u056b_\u0570\u0578\u0582\u056c\u056b\u057d\u056b_\u0585\u0563\u0578\u057d\u057f\u0578\u057d\u056b_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056b_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b".split("_"), standalone: "\u0570\u0578\u0582\u0576\u057e\u0561\u0580_\u0583\u0565\u057f\u0580\u057e\u0561\u0580_\u0574\u0561\u0580\u057f_\u0561\u057a\u0580\u056b\u056c_\u0574\u0561\u0575\u056b\u057d_\u0570\u0578\u0582\u0576\u056b\u057d_\u0570\u0578\u0582\u056c\u056b\u057d_\u0585\u0563\u0578\u057d\u057f\u0578\u057d_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580".split("_") }, monthsShort: "\u0570\u0576\u057e_\u0583\u057f\u0580_\u0574\u0580\u057f_\u0561\u057a\u0580_\u0574\u0575\u057d_\u0570\u0576\u057d_\u0570\u056c\u057d_\u0585\u0563\u057d_\u057d\u057a\u057f_\u0570\u056f\u057f_\u0576\u0574\u0562_\u0564\u056f\u057f".split("_"), weekdays: "\u056f\u056b\u0580\u0561\u056f\u056b_\u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b_\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b_\u0578\u0582\u0580\u0562\u0561\u0569_\u0577\u0561\u0562\u0561\u0569".split("_"), weekdaysShort: "\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"), weekdaysMin: "\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0569.", LLL: "D MMMM YYYY \u0569., HH:mm", LLLL: "dddd, D MMMM YYYY \u0569., HH:mm" }, calendar: { sameDay: "[\u0561\u0575\u057d\u0585\u0580] LT", nextDay: "[\u057e\u0561\u0572\u0568] LT", lastDay: "[\u0565\u0580\u0565\u056f] LT", nextWeek: function () { return "dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT" }, lastWeek: function () { return "[\u0561\u0576\u0581\u0561\u056e] dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT" }, sameElse: "L" }, relativeTime: { future: "%s \u0570\u0565\u057f\u0578", past: "%s \u0561\u057c\u0561\u057b", s: "\u0574\u056b \u0584\u0561\u0576\u056b \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576", ss: "%d \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576", m: "\u0580\u0578\u057a\u0565", mm: "%d \u0580\u0578\u057a\u0565", h: "\u056a\u0561\u0574", hh: "%d \u056a\u0561\u0574", d: "\u0585\u0580", dd: "%d \u0585\u0580", M: "\u0561\u0574\u056b\u057d", MM: "%d \u0561\u0574\u056b\u057d", y: "\u057f\u0561\u0580\u056b", yy: "%d \u057f\u0561\u0580\u056b" }, meridiemParse: /\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/, isPM: function (e) { return /^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(e) }, meridiem: function (e) { return e < 4 ? "\u0563\u056b\u0577\u0565\u0580\u057e\u0561" : e < 12 ? "\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561" : e < 17 ? "\u0581\u0565\u0580\u0565\u056f\u057e\u0561" : "\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576" }, dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/, ordinal: function (e, a) { switch (a) { case "DDD": case "w": case "W": case "DDDo": return 1 === e ? e + "-\u056b\u0576" : e + "-\u0580\u0564"; default: return e } }, week: { dow: 1, doy: 7 } }), l.defineLocale("id", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"), weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|siang|sore|malam/, meridiemHour: function (e, a) { return 12 === e && (e = 0), "pagi" === a ? e : "siang" === a ? 11 <= e ? e : e + 12 : "sore" === a || "malam" === a ? e + 12 : void 0 }, meridiem: function (e, a, t) { return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Besok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kemarin pukul] LT", lastWeek: "dddd [lalu pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", ss: "%d detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }), l.defineLocale("is", { months: "jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember".split("_"), monthsShort: "jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des".split("_"), weekdays: "sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur".split("_"), weekdaysShort: "sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau".split("_"), weekdaysMin: "Su_M\xe1_\xder_Mi_Fi_F\xf6_La".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd, D. MMMM YYYY [kl.] H:mm" }, calendar: { sameDay: "[\xed dag kl.] LT", nextDay: "[\xe1 morgun kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[\xed g\xe6r kl.] LT", lastWeek: "[s\xed\xf0asta] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "eftir %s", past: "fyrir %s s\xed\xf0an", s: tn, ss: tn, m: tn, mm: tn, h: "klukkustund", hh: tn, d: tn, dd: tn, M: tn, MM: tn, y: tn, yy: tn }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("it-ch", { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Oggi alle] LT", nextDay: "[Domani alle] LT", nextWeek: "dddd [alle] LT", lastDay: "[Ieri alle] LT", lastWeek: function () { switch (this.day()) { case 0: return "[la scorsa] dddd [alle] LT"; default: return "[lo scorso] dddd [alle] LT" } }, sameElse: "L" }, relativeTime: { future: function (e) { return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e }, past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }), l.defineLocale("it", { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Oggi alle] LT", nextDay: "[Domani alle] LT", nextWeek: "dddd [alle] LT", lastDay: "[Ieri alle] LT", lastWeek: function () { switch (this.day()) { case 0: return "[la scorsa] dddd [alle] LT"; default: return "[lo scorso] dddd [alle] LT" } }, sameElse: "L" }, relativeTime: { future: function (e) { return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e }, past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }), l.defineLocale("ja", { months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), weekdays: "\u65e5\u66dc\u65e5_\u6708\u66dc\u65e5_\u706b\u66dc\u65e5_\u6c34\u66dc\u65e5_\u6728\u66dc\u65e5_\u91d1\u66dc\u65e5_\u571f\u66dc\u65e5".split("_"), weekdaysShort: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"), weekdaysMin: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5e74M\u6708D\u65e5", LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm", LLLL: "YYYY\u5e74M\u6708D\u65e5 dddd HH:mm", l: "YYYY/MM/DD", ll: "YYYY\u5e74M\u6708D\u65e5", lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm", llll: "YYYY\u5e74M\u6708D\u65e5(ddd) HH:mm" }, meridiemParse: /\u5348\u524d|\u5348\u5f8c/i, isPM: function (e) { return "\u5348\u5f8c" === e }, meridiem: function (e, a, t) { return e < 12 ? "\u5348\u524d" : "\u5348\u5f8c" }, calendar: { sameDay: "[\u4eca\u65e5] LT", nextDay: "[\u660e\u65e5] LT", nextWeek: function (e) { return e.week() < this.week() ? "[\u6765\u9031]dddd LT" : "dddd LT" }, lastDay: "[\u6628\u65e5] LT", lastWeek: function (e) { return this.week() < e.week() ? "[\u5148\u9031]dddd LT" : "dddd LT" }, sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}\u65e5/, ordinal: function (e, a) { switch (a) { case "d": case "D": case "DDD": return e + "\u65e5"; default: return e } }, relativeTime: { future: "%s\u5f8c", past: "%s\u524d", s: "\u6570\u79d2", ss: "%d\u79d2", m: "1\u5206", mm: "%d\u5206", h: "1\u6642\u9593", hh: "%d\u6642\u9593", d: "1\u65e5", dd: "%d\u65e5", M: "1\u30f6\u6708", MM: "%d\u30f6\u6708", y: "1\u5e74", yy: "%d\u5e74" } }), l.defineLocale("jv", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /enjing|siyang|sonten|ndalu/, meridiemHour: function (e, a) { return 12 === e && (e = 0), "enjing" === a ? e : "siyang" === a ? 11 <= e ? e : e + 12 : "sonten" === a || "ndalu" === a ? e + 12 : void 0 }, meridiem: function (e, a, t) { return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu" }, calendar: { sameDay: "[Dinten puniko pukul] LT", nextDay: "[Mbenjang pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kala wingi pukul] LT", lastWeek: "dddd [kepengker pukul] LT", sameElse: "L" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", ss: "%d detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" }, week: { dow: 1, doy: 7 } }), l.defineLocale("ka", { months: { standalone: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8_\u10db\u10d0\u10e0\u10e2\u10d8_\u10d0\u10de\u10e0\u10d8\u10da\u10d8_\u10db\u10d0\u10d8\u10e1\u10d8_\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8_\u10d8\u10d5\u10da\u10d8\u10e1\u10d8_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8".split("_"), format: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10e1_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10e1_\u10db\u10d0\u10e0\u10e2\u10e1_\u10d0\u10de\u10e0\u10d8\u10da\u10d8\u10e1_\u10db\u10d0\u10d8\u10e1\u10e1_\u10d8\u10d5\u10dc\u10d8\u10e1\u10e1_\u10d8\u10d5\u10da\u10d8\u10e1\u10e1_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10e1_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10e1_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10e1".split("_") }, monthsShort: "\u10d8\u10d0\u10dc_\u10d7\u10d4\u10d1_\u10db\u10d0\u10e0_\u10d0\u10de\u10e0_\u10db\u10d0\u10d8_\u10d8\u10d5\u10dc_\u10d8\u10d5\u10da_\u10d0\u10d2\u10d5_\u10e1\u10d4\u10e5_\u10dd\u10e5\u10e2_\u10dc\u10dd\u10d4_\u10d3\u10d4\u10d9".split("_"), weekdays: { standalone: "\u10d9\u10d5\u10d8\u10e0\u10d0_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8_\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8".split("_"), format: "\u10d9\u10d5\u10d8\u10e0\u10d0\u10e1_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10e1_\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1".split("_"), isFormat: /(\u10ec\u10d8\u10dc\u10d0|\u10e8\u10d4\u10db\u10d3\u10d4\u10d2)/ }, weekdaysShort: "\u10d9\u10d5\u10d8_\u10dd\u10e0\u10e8_\u10e1\u10d0\u10db_\u10dd\u10d7\u10ee_\u10ee\u10e3\u10d7_\u10de\u10d0\u10e0_\u10e8\u10d0\u10d1".split("_"), weekdaysMin: "\u10d9\u10d5_\u10dd\u10e0_\u10e1\u10d0_\u10dd\u10d7_\u10ee\u10e3_\u10de\u10d0_\u10e8\u10d0".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[\u10d3\u10e6\u10d4\u10e1] LT[-\u10d6\u10d4]", nextDay: "[\u10ee\u10d5\u10d0\u10da] LT[-\u10d6\u10d4]", lastDay: "[\u10d2\u10e3\u10e8\u10d8\u10dc] LT[-\u10d6\u10d4]", nextWeek: "[\u10e8\u10d4\u10db\u10d3\u10d4\u10d2] dddd LT[-\u10d6\u10d4]", lastWeek: "[\u10ec\u10d8\u10dc\u10d0] dddd LT-\u10d6\u10d4", sameElse: "L" }, relativeTime: { future: function (e) { return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10ec\u10d4\u10da\u10d8)/.test(e) ? e.replace(/\u10d8$/, "\u10e8\u10d8") : e + "\u10e8\u10d8" }, past: function (e) { return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10d3\u10e6\u10d4|\u10d7\u10d5\u10d4)/.test(e) ? e.replace(/(\u10d8|\u10d4)$/, "\u10d8\u10e1 \u10ec\u10d8\u10dc") : /\u10ec\u10d4\u10da\u10d8/.test(e) ? e.replace(/\u10ec\u10d4\u10da\u10d8$/, "\u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc") : void 0 }, s: "\u10e0\u10d0\u10db\u10d3\u10d4\u10dc\u10d8\u10db\u10d4 \u10ec\u10d0\u10db\u10d8", ss: "%d \u10ec\u10d0\u10db\u10d8", m: "\u10ec\u10e3\u10d7\u10d8", mm: "%d \u10ec\u10e3\u10d7\u10d8", h: "\u10e1\u10d0\u10d0\u10d7\u10d8", hh: "%d \u10e1\u10d0\u10d0\u10d7\u10d8", d: "\u10d3\u10e6\u10d4", dd: "%d \u10d3\u10e6\u10d4", M: "\u10d7\u10d5\u10d4", MM: "%d \u10d7\u10d5\u10d4", y: "\u10ec\u10d4\u10da\u10d8", yy: "%d \u10ec\u10d4\u10da\u10d8" }, dayOfMonthOrdinalParse: /0|1-\u10da\u10d8|\u10db\u10d4-\d{1,2}|\d{1,2}-\u10d4/, ordinal: function (e) { return 0 === e ? e : 1 === e ? e + "-\u10da\u10d8" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "\u10db\u10d4-" + e : e + "-\u10d4" }, week: { dow: 1, doy: 7 } }); var sn = { 0: "-\u0448\u0456", 1: "-\u0448\u0456", 2: "-\u0448\u0456", 3: "-\u0448\u0456", 4: "-\u0448\u0456", 5: "-\u0448\u0456", 6: "-\u0448\u044b", 7: "-\u0448\u0456", 8: "-\u0448\u0456", 9: "-\u0448\u044b", 10: "-\u0448\u044b", 20: "-\u0448\u044b", 30: "-\u0448\u044b", 40: "-\u0448\u044b", 50: "-\u0448\u0456", 60: "-\u0448\u044b", 70: "-\u0448\u0456", 80: "-\u0448\u0456", 90: "-\u0448\u044b", 100: "-\u0448\u0456" }; l.defineLocale("kk", { months: "\u049b\u0430\u04a3\u0442\u0430\u0440_\u0430\u049b\u043f\u0430\u043d_\u043d\u0430\u0443\u0440\u044b\u0437_\u0441\u04d9\u0443\u0456\u0440_\u043c\u0430\u043c\u044b\u0440_\u043c\u0430\u0443\u0441\u044b\u043c_\u0448\u0456\u043b\u0434\u0435_\u0442\u0430\u043c\u044b\u0437_\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a_\u049b\u0430\u0437\u0430\u043d_\u049b\u0430\u0440\u0430\u0448\u0430_\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d".split("_"), monthsShort: "\u049b\u0430\u04a3_\u0430\u049b\u043f_\u043d\u0430\u0443_\u0441\u04d9\u0443_\u043c\u0430\u043c_\u043c\u0430\u0443_\u0448\u0456\u043b_\u0442\u0430\u043c_\u049b\u044b\u0440_\u049b\u0430\u0437_\u049b\u0430\u0440_\u0436\u0435\u043b".split("_"), weekdays: "\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456_\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456_\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0436\u04b1\u043c\u0430_\u0441\u0435\u043d\u0431\u0456".split("_"), weekdaysShort: "\u0436\u0435\u043a_\u0434\u04af\u0439_\u0441\u0435\u0439_\u0441\u04d9\u0440_\u0431\u0435\u0439_\u0436\u04b1\u043c_\u0441\u0435\u043d".split("_"), weekdaysMin: "\u0436\u043a_\u0434\u0439_\u0441\u0439_\u0441\u0440_\u0431\u0439_\u0436\u043c_\u0441\u043d".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0411\u04af\u0433\u0456\u043d \u0441\u0430\u0493\u0430\u0442] LT", nextDay: "[\u0415\u0440\u0442\u0435\u04a3 \u0441\u0430\u0493\u0430\u0442] LT", nextWeek: "dddd [\u0441\u0430\u0493\u0430\u0442] LT", lastDay: "[\u041a\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442] LT", lastWeek: "[\u04e8\u0442\u043a\u0435\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u04a3] dddd [\u0441\u0430\u0493\u0430\u0442] LT", sameElse: "L" }, relativeTime: { future: "%s \u0456\u0448\u0456\u043d\u0434\u0435", past: "%s \u0431\u04b1\u0440\u044b\u043d", s: "\u0431\u0456\u0440\u043d\u0435\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434", ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434", m: "\u0431\u0456\u0440 \u043c\u0438\u043d\u0443\u0442", mm: "%d \u043c\u0438\u043d\u0443\u0442", h: "\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442", hh: "%d \u0441\u0430\u0493\u0430\u0442", d: "\u0431\u0456\u0440 \u043a\u04af\u043d", dd: "%d \u043a\u04af\u043d", M: "\u0431\u0456\u0440 \u0430\u0439", MM: "%d \u0430\u0439", y: "\u0431\u0456\u0440 \u0436\u044b\u043b", yy: "%d \u0436\u044b\u043b" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0448\u0456|\u0448\u044b)/, ordinal: function (e) { return e + (sn[e] || sn[e % 10] || sn[100 <= e ? 100 : null]) }, week: { dow: 1, doy: 7 } }); var nn = { 1: "\u17e1", 2: "\u17e2", 3: "\u17e3", 4: "\u17e4", 5: "\u17e5", 6: "\u17e6", 7: "\u17e7", 8: "\u17e8", 9: "\u17e9", 0: "\u17e0" }, dn = { "\u17e1": "1", "\u17e2": "2", "\u17e3": "3", "\u17e4": "4", "\u17e5": "5", "\u17e6": "6", "\u17e7": "7", "\u17e8": "8", "\u17e9": "9", "\u17e0": "0" }; l.defineLocale("km", { months: "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"), monthsShort: "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"), weekdays: "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd".split("_"), weekdaysShort: "\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"), weekdaysMin: "\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785/, isPM: function (e) { return "\u179b\u17d2\u1784\u17b6\u1785" === e }, meridiem: function (e, a, t) { return e < 12 ? "\u1796\u17d2\u179a\u17b9\u1780" : "\u179b\u17d2\u1784\u17b6\u1785" }, calendar: { sameDay: "[\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7 \u1798\u17c9\u17c4\u1784] LT", nextDay: "[\u179f\u17d2\u17a2\u17c2\u1780 \u1798\u17c9\u17c4\u1784] LT", nextWeek: "dddd [\u1798\u17c9\u17c4\u1784] LT", lastDay: "[\u1798\u17d2\u179f\u17b7\u179b\u1798\u17b7\u1789 \u1798\u17c9\u17c4\u1784] LT", lastWeek: "dddd [\u179f\u1794\u17d2\u178f\u17b6\u17a0\u17cd\u1798\u17bb\u1793] [\u1798\u17c9\u17c4\u1784] LT", sameElse: "L" }, relativeTime: { future: "%s\u1791\u17c0\u178f", past: "%s\u1798\u17bb\u1793", s: "\u1794\u17c9\u17bb\u1793\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1793\u17b6\u1791\u17b8", ss: "%d \u179c\u17b7\u1793\u17b6\u1791\u17b8", m: "\u1798\u17bd\u1799\u1793\u17b6\u1791\u17b8", mm: "%d \u1793\u17b6\u1791\u17b8", h: "\u1798\u17bd\u1799\u1798\u17c9\u17c4\u1784", hh: "%d \u1798\u17c9\u17c4\u1784", d: "\u1798\u17bd\u1799\u1790\u17d2\u1784\u17c3", dd: "%d \u1790\u17d2\u1784\u17c3", M: "\u1798\u17bd\u1799\u1781\u17c2", MM: "%d \u1781\u17c2", y: "\u1798\u17bd\u1799\u1786\u17d2\u1793\u17b6\u17c6", yy: "%d \u1786\u17d2\u1793\u17b6\u17c6" }, dayOfMonthOrdinalParse: /\u1791\u17b8\d{1,2}/, ordinal: "\u1791\u17b8%d", preparse: function (e) { return e.replace(/[\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u17e0]/g, function (e) { return dn[e] }) }, postformat: function (e) { return e.replace(/\d/g, function (e) { return nn[e] }) }, week: { dow: 1, doy: 4 } }); var rn = { 1: "\u0ce7", 2: "\u0ce8", 3: "\u0ce9", 4: "\u0cea", 5: "\u0ceb", 6: "\u0cec", 7: "\u0ced", 8: "\u0cee", 9: "\u0cef", 0: "\u0ce6" }, _n = { "\u0ce7": "1", "\u0ce8": "2", "\u0ce9": "3", "\u0cea": "4", "\u0ceb": "5", "\u0cec": "6", "\u0ced": "7", "\u0cee": "8", "\u0cef": "9", "\u0ce6": "0" }; l.defineLocale("kn", { months: "\u0c9c\u0ca8\u0cb5\u0cb0\u0cbf_\u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cbf_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5\u0cac\u0cb0\u0ccd_\u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd".split("_"), monthsShort: "\u0c9c\u0ca8_\u0cab\u0cc6\u0cac\u0ccd\u0cb0_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5_\u0ca8\u0cb5\u0cc6\u0c82_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82".split("_"), monthsParseExact: !0, weekdays: "\u0cad\u0cbe\u0ca8\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae\u0cb5\u0cbe\u0cb0_\u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0_\u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0_\u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0_\u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0".split("_"), weekdaysShort: "\u0cad\u0cbe\u0ca8\u0cc1_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae_\u0cae\u0c82\u0c97\u0cb3_\u0cac\u0cc1\u0ca7_\u0c97\u0cc1\u0cb0\u0cc1_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0_\u0cb6\u0ca8\u0cbf".split("_"), weekdaysMin: "\u0cad\u0cbe_\u0cb8\u0cc6\u0cc2\u0cd5_\u0cae\u0c82_\u0cac\u0cc1_\u0c97\u0cc1_\u0cb6\u0cc1_\u0cb6".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[\u0c87\u0c82\u0ca6\u0cc1] LT", nextDay: "[\u0ca8\u0cbe\u0cb3\u0cc6] LT", nextWeek: "dddd, LT", lastDay: "[\u0ca8\u0cbf\u0ca8\u0ccd\u0ca8\u0cc6] LT", lastWeek: "[\u0c95\u0cc6\u0cc2\u0ca8\u0cc6\u0caf] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0ca8\u0c82\u0ca4\u0cb0", past: "%s \u0cb9\u0cbf\u0c82\u0ca6\u0cc6", s: "\u0c95\u0cc6\u0cb2\u0cb5\u0cc1 \u0c95\u0ccd\u0cb7\u0ca3\u0c97\u0cb3\u0cc1", ss: "%d \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0cc1\u0c97\u0cb3\u0cc1", m: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7", mm: "%d \u0ca8\u0cbf\u0cae\u0cbf\u0cb7", h: "\u0c92\u0c82\u0ca6\u0cc1 \u0c97\u0c82\u0c9f\u0cc6", hh: "%d \u0c97\u0c82\u0c9f\u0cc6", d: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca6\u0cbf\u0ca8", dd: "%d \u0ca6\u0cbf\u0ca8", M: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1", MM: "%d \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1", y: "\u0c92\u0c82\u0ca6\u0cc1 \u0cb5\u0cb0\u0ccd\u0cb7", yy: "%d \u0cb5\u0cb0\u0ccd\u0cb7" }, preparse: function (e) { return e.replace(/[\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6]/g, function (e) { return _n[e] }) }, postformat: function (e) { return e.replace(/\d/g, function (e) { return rn[e] }) }, meridiemParse: /\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/, meridiemHour: function (e, a) { return 12 === e && (e = 0), "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" === a ? e < 4 ? e : e + 12 : "\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6" === a ? e : "\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8" === a ? 10 <= e ? e : e + 12 : "\u0cb8\u0c82\u0c9c\u0cc6" === a ? e + 12 : void 0 }, meridiem: function (e, a, t) { return e < 4 ? "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" : e < 10 ? "\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6" : e < 17 ? "\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8" : e < 20 ? "\u0cb8\u0c82\u0c9c\u0cc6" : "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" }, dayOfMonthOrdinalParse: /\d{1,2}(\u0ca8\u0cc6\u0cd5)/, ordinal: function (e) { return e + "\u0ca8\u0cc6\u0cd5" }, week: { dow: 0, doy: 6 } }), l.defineLocale("ko", { months: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"), monthsShort: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"), weekdays: "\uc77c\uc694\uc77c_\uc6d4\uc694\uc77c_\ud654\uc694\uc77c_\uc218\uc694\uc77c_\ubaa9\uc694\uc77c_\uae08\uc694\uc77c_\ud1a0\uc694\uc77c".split("_"), weekdaysShort: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"), weekdaysMin: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY\ub144 MMMM D\uc77c", LLL: "YYYY\ub144 MMMM D\uc77c A h:mm", LLLL: "YYYY\ub144 MMMM D\uc77c dddd A h:mm", l: "YYYY.MM.DD.", ll: "YYYY\ub144 MMMM D\uc77c", lll: "YYYY\ub144 MMMM D\uc77c A h:mm", llll: "YYYY\ub144 MMMM D\uc77c dddd A h:mm" }, calendar: { sameDay: "\uc624\ub298 LT", nextDay: "\ub0b4\uc77c LT", nextWeek: "dddd LT", lastDay: "\uc5b4\uc81c LT", lastWeek: "\uc9c0\ub09c\uc8fc dddd LT", sameElse: "L" }, relativeTime: { future: "%s \ud6c4", past: "%s \uc804", s: "\uba87 \ucd08", ss: "%d\ucd08", m: "1\ubd84", mm: "%d\ubd84", h: "\ud55c \uc2dc\uac04", hh: "%d\uc2dc\uac04", d: "\ud558\ub8e8", dd: "%d\uc77c", M: "\ud55c \ub2ec", MM: "%d\ub2ec", y: "\uc77c \ub144", yy: "%d\ub144" }, dayOfMonthOrdinalParse: /\d{1,2}(\uc77c|\uc6d4|\uc8fc)/, ordinal: function (e, a) { switch (a) { case "d": case "D": case "DDD": return e + "\uc77c"; case "M": return e + "\uc6d4"; case "w": case "W": return e + "\uc8fc"; default: return e } }, meridiemParse: /\uc624\uc804|\uc624\ud6c4/, isPM: function (e) { return "\uc624\ud6c4" === e }, meridiem: function (e, a, t) { return e < 12 ? "\uc624\uc804" : "\uc624\ud6c4" } }); var on = { 1: "\u0661", 2: "\u0662", 3: "\u0663", 4: "\u0664", 5: "\u0665", 6: "\u0666", 7: "\u0667", 8: "\u0668", 9: "\u0669", 0: "\u0660" }, mn = { "\u0661": "1", "\u0662": "2", "\u0663": "3", "\u0664": "4", "\u0665": "5", "\u0666": "6", "\u0667": "7", "\u0668": "8", "\u0669": "9", "\u0660": "0" }, un = ["\u06a9\u0627\u0646\u0648\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645", "\u0634\u0648\u0628\u0627\u062a", "\u0626\u0627\u0632\u0627\u0631", "\u0646\u06cc\u0633\u0627\u0646", "\u0626\u0627\u06cc\u0627\u0631", "\u062d\u0648\u0632\u06d5\u06cc\u0631\u0627\u0646", "\u062a\u06d5\u0645\u0645\u0648\u0632", "\u0626\u0627\u0628", "\u0626\u06d5\u06cc\u0644\u0648\u0648\u0644", "\u062a\u0634\u0631\u06cc\u0646\u06cc \u06cc\u06d5\u0643\u06d5\u0645", "\u062a\u0634\u0631\u06cc\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645", "\u0643\u0627\u0646\u0648\u0646\u06cc \u06cc\u06d5\u06a9\u06d5\u0645"]; l.defineLocale("ku", { months: un, monthsShort: un, weekdays: "\u06cc\u0647\u200c\u0643\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u062f\u0648\u0648\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0633\u06ce\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0686\u0648\u0627\u0631\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u067e\u06ce\u0646\u062c\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0647\u0647\u200c\u06cc\u0646\u06cc_\u0634\u0647\u200c\u0645\u0645\u0647\u200c".split("_"), weekdaysShort: "\u06cc\u0647\u200c\u0643\u0634\u0647\u200c\u0645_\u062f\u0648\u0648\u0634\u0647\u200c\u0645_\u0633\u06ce\u0634\u0647\u200c\u0645_\u0686\u0648\u0627\u0631\u0634\u0647\u200c\u0645_\u067e\u06ce\u0646\u062c\u0634\u0647\u200c\u0645_\u0647\u0647\u200c\u06cc\u0646\u06cc_\u0634\u0647\u200c\u0645\u0645\u0647\u200c".split("_"), weekdaysMin: "\u06cc_\u062f_\u0633_\u0686_\u067e_\u0647_\u0634".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c|\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc/, isPM: function (e) { return /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c/.test(e) }, meridiem: function (e, a, t) { return e < 12 ? "\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc" : "\u0626\u06ce\u0648\u0627\u0631\u0647\u200c" }, calendar: { sameDay: "[\u0626\u0647\u200c\u0645\u0631\u06c6 \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT", nextDay: "[\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT", nextWeek: "dddd [\u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT", lastDay: "[\u062f\u0648\u06ce\u0646\u06ce \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT", lastWeek: "dddd [\u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT", sameElse: "L" }, relativeTime: { future: "\u0644\u0647\u200c %s", past: "%s", s: "\u0686\u0647\u200c\u0646\u062f \u0686\u0631\u0643\u0647\u200c\u06cc\u0647\u200c\u0643", ss: "\u0686\u0631\u0643\u0647\u200c %d", m: "\u06cc\u0647\u200c\u0643 \u062e\u0648\u0644\u0647\u200c\u0643", mm: "%d \u062e\u0648\u0644\u0647\u200c\u0643", h: "\u06cc\u0647\u200c\u0643 \u0643\u0627\u062a\u0698\u0645\u06ce\u0631", hh: "%d \u0643\u0627\u062a\u0698\u0645\u06ce\u0631", d: "\u06cc\u0647\u200c\u0643 \u0695\u06c6\u0698", dd: "%d \u0695\u06c6\u0698", M: "\u06cc\u0647\u200c\u0643 \u0645\u0627\u0646\u06af", MM: "%d \u0645\u0627\u0646\u06af", y: "\u06cc\u0647\u200c\u0643 \u0633\u0627\u06b5", yy: "%d \u0633\u0627\u06b5" }, preparse: function (e) { return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function (e) { return mn[e] }).replace(/\u060c/g, ",") }, postformat: function (e) { return e.replace(/\d/g, function (e) { return on[e] }).replace(/,/g, "\u060c") }, week: { dow: 6, doy: 12 } }); var ln = { 0: "-\u0447\u04af", 1: "-\u0447\u0438", 2: "-\u0447\u0438", 3: "-\u0447\u04af", 4: "-\u0447\u04af", 5: "-\u0447\u0438", 6: "-\u0447\u044b", 7: "-\u0447\u0438", 8: "-\u0447\u0438", 9: "-\u0447\u0443", 10: "-\u0447\u0443", 20: "-\u0447\u044b", 30: "-\u0447\u0443", 40: "-\u0447\u044b", 50: "-\u0447\u04af", 60: "-\u0447\u044b", 70: "-\u0447\u0438", 80: "-\u0447\u0438", 90: "-\u0447\u0443", 100: "-\u0447\u04af" }; function Mn(e, a, t, s) { var n = { m: ["eng Minutt", "enger Minutt"], h: ["eng Stonn", "enger Stonn"], d: ["een Dag", "engem Dag"], M: ["ee Mount", "engem Mount"], y: ["ee Joer", "engem Joer"] }; return a ? n[t][0] : n[t][1] } function hn(e) { if (e = parseInt(e, 10), isNaN(e)) return !1; if (e < 0) return !0; if (e < 10) return 4 <= e && e <= 7; if (e < 100) { var a = e % 10; return hn(0 === a ? e / 10 : a) } if (e < 1e4) { for (; 10 <= e;)e /= 10; return hn(e) } return hn(e /= 1e3) } l.defineLocale("ky", { months: "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_"), monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"), weekdays: "\u0416\u0435\u043a\u0448\u0435\u043c\u0431\u0438_\u0414\u04af\u0439\u0448\u04e9\u043c\u0431\u04af_\u0428\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0428\u0430\u0440\u0448\u0435\u043c\u0431\u0438_\u0411\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0416\u0443\u043c\u0430_\u0418\u0448\u0435\u043c\u0431\u0438".split("_"), weekdaysShort: "\u0416\u0435\u043a_\u0414\u04af\u0439_\u0428\u0435\u0439_\u0428\u0430\u0440_\u0411\u0435\u0439_\u0416\u0443\u043c_\u0418\u0448\u0435".split("_"), weekdaysMin: "\u0416\u043a_\u0414\u0439_\u0428\u0439_\u0428\u0440_\u0411\u0439_\u0416\u043c_\u0418\u0448".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0411\u04af\u0433\u04af\u043d \u0441\u0430\u0430\u0442] LT", nextDay: "[\u042d\u0440\u0442\u0435\u04a3 \u0441\u0430\u0430\u0442] LT", nextWeek: "dddd [\u0441\u0430\u0430\u0442] LT", lastDay: "[\u041a\u0435\u0447\u044d\u044d \u0441\u0430\u0430\u0442] LT", lastWeek: "[\u04e8\u0442\u043a\u04e9\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u043d] dddd [\u043a\u04af\u043d\u04af] [\u0441\u0430\u0430\u0442] LT", sameElse: "L" }, relativeTime: { future: "%s \u0438\u0447\u0438\u043d\u0434\u0435", past: "%s \u043c\u0443\u0440\u0443\u043d", s: "\u0431\u0438\u0440\u043d\u0435\u0447\u0435 \u0441\u0435\u043a\u0443\u043d\u0434", ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434", m: "\u0431\u0438\u0440 \u043c\u04af\u043d\u04e9\u0442", mm: "%d \u043c\u04af\u043d\u04e9\u0442", h: "\u0431\u0438\u0440 \u0441\u0430\u0430\u0442", hh: "%d \u0441\u0430\u0430\u0442", d: "\u0431\u0438\u0440 \u043a\u04af\u043d", dd: "%d \u043a\u04af\u043d", M: "\u0431\u0438\u0440 \u0430\u0439", MM: "%d \u0430\u0439", y: "\u0431\u0438\u0440 \u0436\u044b\u043b", yy: "%d \u0436\u044b\u043b" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0447\u0438|\u0447\u044b|\u0447\u04af|\u0447\u0443)/, ordinal: function (e) { return e + (ln[e] || ln[e % 10] || ln[100 <= e ? 100 : null]) }, week: { dow: 1, doy: 7 } }), l.defineLocale("lb", { months: "Januar_Februar_M\xe4erz_Abr\xebll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonndeg_M\xe9indeg_D\xebnschdeg_M\xebttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), weekdaysShort: "So._M\xe9._D\xeb._M\xeb._Do._Fr._Sa.".split("_"), weekdaysMin: "So_M\xe9_D\xeb_M\xeb_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" }, calendar: { sameDay: "[Haut um] LT", sameElse: "L", nextDay: "[Muer um] LT", nextWeek: "dddd [um] LT", lastDay: "[G\xebschter um] LT", lastWeek: function () { switch (this.day()) { case 2: case 4: return "[Leschten] dddd [um] LT"; default: return "[Leschte] dddd [um] LT" } } }, relativeTime: { future: function (e) { return hn(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e }, past: function (e) { return hn(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e }, s: "e puer Sekonnen", ss: "%d Sekonnen", m: Mn, mm: "%d Minutten", h: Mn, hh: "%d Stonnen", d: Mn, dd: "%d Deeg", M: Mn, MM: "%d M\xe9int", y: Mn, yy: "%d Joer" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("lo", { months: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"), monthsShort: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"), weekdays: "\u0ead\u0eb2\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"), weekdaysShort: "\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"), weekdaysMin: "\u0e97_\u0e88_\u0ead\u0e84_\u0e9e_\u0e9e\u0eab_\u0eaa\u0e81_\u0eaa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "\u0ea7\u0eb1\u0e99dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2|\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87/, isPM: function (e) { return "\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87" === e }, meridiem: function (e, a, t) { return e < 12 ? "\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2" : "\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87" }, calendar: { sameDay: "[\u0ea1\u0eb7\u0ec9\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT", nextDay: "[\u0ea1\u0eb7\u0ec9\u0ead\u0eb7\u0ec8\u0e99\u0ec0\u0ea7\u0ea5\u0eb2] LT", nextWeek: "[\u0ea7\u0eb1\u0e99]dddd[\u0edc\u0ec9\u0eb2\u0ec0\u0ea7\u0ea5\u0eb2] LT", lastDay: "[\u0ea1\u0eb7\u0ec9\u0ea7\u0eb2\u0e99\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT", lastWeek: "[\u0ea7\u0eb1\u0e99]dddd[\u0ec1\u0ea5\u0ec9\u0ea7\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT", sameElse: "L" }, relativeTime: { future: "\u0ead\u0eb5\u0e81 %s", past: "%s\u0e9c\u0ec8\u0eb2\u0e99\u0ea1\u0eb2", s: "\u0e9a\u0ecd\u0ec8\u0ec0\u0e97\u0ebb\u0ec8\u0eb2\u0ec3\u0e94\u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5", ss: "%d \u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5", m: "1 \u0e99\u0eb2\u0e97\u0eb5", mm: "%d \u0e99\u0eb2\u0e97\u0eb5", h: "1 \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87", hh: "%d \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87", d: "1 \u0ea1\u0eb7\u0ec9", dd: "%d \u0ea1\u0eb7\u0ec9", M: "1 \u0ec0\u0e94\u0eb7\u0ead\u0e99", MM: "%d \u0ec0\u0e94\u0eb7\u0ead\u0e99", y: "1 \u0e9b\u0eb5", yy: "%d \u0e9b\u0eb5" }, dayOfMonthOrdinalParse: /(\u0e97\u0eb5\u0ec8)\d{1,2}/, ordinal: function (e) { return "\u0e97\u0eb5\u0ec8" + e } }); var Ln = { ss: "sekund\u0117_sekund\u017ei\u0173_sekundes", m: "minut\u0117_minut\u0117s_minut\u0119", mm: "minut\u0117s_minu\u010di\u0173_minutes", h: "valanda_valandos_valand\u0105", hh: "valandos_valand\u0173_valandas", d: "diena_dienos_dien\u0105", dd: "dienos_dien\u0173_dienas", M: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012f", MM: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius", y: "metai_met\u0173_metus", yy: "metai_met\u0173_metus" }; function cn(e, a, t, s) { return a ? yn(t)[0] : s ? yn(t)[1] : yn(t)[2] } function Yn(e) { return e % 10 == 0 || 10 < e && e < 20 } function yn(e) { return Ln[e].split("_") } function fn(e, a, t, s) { var n = e + " "; return 1 === e ? n + cn(0, a, t[0], s) : a ? n + (Yn(e) ? yn(t)[1] : yn(t)[0]) : s ? n + yn(t)[1] : n + (Yn(e) ? yn(t)[1] : yn(t)[2]) } l.defineLocale("lt", { months: { format: "sausio_vasario_kovo_baland\u017eio_gegu\u017e\u0117s_bir\u017eelio_liepos_rugpj\u016b\u010dio_rugs\u0117jo_spalio_lapkri\u010dio_gruod\u017eio".split("_"), standalone: "sausis_vasaris_kovas_balandis_gegu\u017e\u0117_bir\u017eelis_liepa_rugpj\u016btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ }, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), weekdays: { format: "sekmadien\u012f_pirmadien\u012f_antradien\u012f_tre\u010diadien\u012f_ketvirtadien\u012f_penktadien\u012f_\u0161e\u0161tadien\u012f".split("_"), standalone: "sekmadienis_pirmadienis_antradienis_tre\u010diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"), isFormat: /dddd HH:mm/ }, weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_"), weekdaysMin: "S_P_A_T_K_Pn_\u0160".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, calendar: { sameDay: "[\u0160iandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[Pra\u0117jus\u012f] dddd LT", sameElse: "L" }, relativeTime: { future: "po %s", past: "prie\u0161 %s", s: function (e, a, t, s) { return a ? "kelios sekund\u0117s" : s ? "keli\u0173 sekund\u017ei\u0173" : "kelias sekundes" }, ss: fn, m: cn, mm: fn, h: cn, hh: fn, d: cn, dd: fn, M: cn, MM: fn, y: cn, yy: fn }, dayOfMonthOrdinalParse: /\d{1,2}-oji/, ordinal: function (e) { return e + "-oji" }, week: { dow: 1, doy: 4 } }); var kn = { ss: "sekundes_sekund\u0113m_sekunde_sekundes".split("_"), m: "min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"), mm: "min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"), h: "stundas_stund\u0101m_stunda_stundas".split("_"), hh: "stundas_stund\u0101m_stunda_stundas".split("_"), d: "dienas_dien\u0101m_diena_dienas".split("_"), dd: "dienas_dien\u0101m_diena_dienas".split("_"), M: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"), MM: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"), y: "gada_gadiem_gads_gadi".split("_"), yy: "gada_gadiem_gads_gadi".split("_") }; function pn(e, a, t) { return t ? a % 10 == 1 && a % 100 != 11 ? e[2] : e[3] : a % 10 == 1 && a % 100 != 11 ? e[0] : e[1] } function Dn(e, a, t) { return e + " " + pn(kn[t], e, a) } function Tn(e, a, t) { return pn(kn[t], e, a) } l.defineLocale("lv", { months: "janv\u0101ris_febru\u0101ris_marts_apr\u012blis_maijs_j\u016bnijs_j\u016blijs_augusts_septembris_oktobris_novembris_decembris".split("_"), monthsShort: "jan_feb_mar_apr_mai_j\u016bn_j\u016bl_aug_sep_okt_nov_dec".split("_"), weekdays: "sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"), weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, calendar: { sameDay: "[\u0160odien pulksten] LT", nextDay: "[R\u012bt pulksten] LT", nextWeek: "dddd [pulksten] LT", lastDay: "[Vakar pulksten] LT", lastWeek: "[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT", sameElse: "L" }, relativeTime: { future: "p\u0113c %s", past: "pirms %s", s: function (e, a) { return a ? "da\u017eas sekundes" : "da\u017e\u0101m sekund\u0113m" }, ss: Dn, m: Tn, mm: Dn, h: Tn, hh: Dn, d: Tn, dd: Dn, M: Tn, MM: Dn, y: Tn, yy: Dn }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }); var gn = { words: { ss: ["sekund", "sekunda", "sekundi"], m: ["jedan minut", "jednog minuta"], mm: ["minut", "minuta", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mjesec", "mjeseca", "mjeseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function (e, a) { return 1 === e ? a[0] : 2 <= e && e <= 4 ? a[1] : a[2] }, translate: function (e, a, t) { var s = gn.words[t]; return 1 === t.length ? a ? s[0] : s[1] : e + " " + gn.correctGrammaticalCase(e, s) } }; function wn(e, a, t, s) { switch (t) { case "s": return a ? "\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434" : "\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d"; case "ss": return e + (a ? " \u0441\u0435\u043a\u0443\u043d\u0434" : " \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d"); case "m": case "mm": return e + (a ? " \u043c\u0438\u043d\u0443\u0442" : " \u043c\u0438\u043d\u0443\u0442\u044b\u043d"); case "h": case "hh": return e + (a ? " \u0446\u0430\u0433" : " \u0446\u0430\u0433\u0438\u0439\u043d"); case "d": case "dd": return e + (a ? " \u04e9\u0434\u04e9\u0440" : " \u04e9\u0434\u0440\u0438\u0439\u043d"); case "M": case "MM": return e + (a ? " \u0441\u0430\u0440" : " \u0441\u0430\u0440\u044b\u043d"); case "y": case "yy": return e + (a ? " \u0436\u0438\u043b" : " \u0436\u0438\u043b\u0438\u0439\u043d"); default: return e } } l.defineLocale("me", { months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sjutra u] LT", nextWeek: function () { switch (this.day()) { case 0: return "[u] [nedjelju] [u] LT"; case 3: return "[u] [srijedu] [u] LT"; case 6: return "[u] [subotu] [u] LT"; case 1: case 2: case 4: case 5: return "[u] dddd [u] LT" } }, lastDay: "[ju\u010de u] LT", lastWeek: function () { return ["[pro\u0161le] [nedjelje] [u] LT", "[pro\u0161log] [ponedjeljka] [u] LT", "[pro\u0161log] [utorka] [u] LT", "[pro\u0161le] [srijede] [u] LT", "[pro\u0161log] [\u010detvrtka] [u] LT", "[pro\u0161log] [petka] [u] LT", "[pro\u0161le] [subote] [u] LT"][this.day()] }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "nekoliko sekundi", ss: gn.translate, m: gn.translate, mm: gn.translate, h: gn.translate, hh: gn.translate, d: "dan", dd: gn.translate, M: "mjesec", MM: gn.translate, y: "godinu", yy: gn.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }), l.defineLocale("mi", { months: "Kohi-t\u0101te_Hui-tanguru_Pout\u016b-te-rangi_Paenga-wh\u0101wh\u0101_Haratua_Pipiri_H\u014dngoingoi_Here-turi-k\u014dk\u0101_Mahuru_Whiringa-\u0101-nuku_Whiringa-\u0101-rangi_Hakihea".split("_"), monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_H\u014dngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"), monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i, weekdays: "R\u0101tapu_Mane_T\u016brei_Wenerei_T\u0101ite_Paraire_H\u0101tarei".split("_"), weekdaysShort: "Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"), weekdaysMin: "Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm" }, calendar: { sameDay: "[i teie mahana, i] LT", nextDay: "[apopo i] LT", nextWeek: "dddd [i] LT", lastDay: "[inanahi i] LT", lastWeek: "dddd [whakamutunga i] LT", sameElse: "L" }, relativeTime: { future: "i roto i %s", past: "%s i mua", s: "te h\u0113kona ruarua", ss: "%d h\u0113kona", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }), l.defineLocale("mk", { months: "\u0458\u0430\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d\u0438_\u0458\u0443\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"), monthsShort: "\u0458\u0430\u043d_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"), weekdays: "\u043d\u0435\u0434\u0435\u043b\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a_\u043f\u0435\u0442\u043e\u043a_\u0441\u0430\u0431\u043e\u0442\u0430".split("_"), weekdaysShort: "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u0435_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u0430\u0431".split("_"), weekdaysMin: "\u043de_\u043fo_\u0432\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441a".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[\u0414\u0435\u043d\u0435\u0441 \u0432\u043e] LT", nextDay: "[\u0423\u0442\u0440\u0435 \u0432\u043e] LT", nextWeek: "[\u0412\u043e] dddd [\u0432\u043e] LT", lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432\u043e] LT", lastWeek: function () { switch (this.day()) { case 0: case 3: case 6: return "[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0430\u0442\u0430] dddd [\u0432\u043e] LT"; case 1: case 2: case 4: case 5: return "[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0438\u043e\u0442] dddd [\u0432\u043e] LT" } }, sameElse: "L" }, relativeTime: { future: "\u043f\u043e\u0441\u043b\u0435 %s", past: "\u043f\u0440\u0435\u0434 %s", s: "\u043d\u0435\u043a\u043e\u043b\u043a\u0443 \u0441\u0435\u043a\u0443\u043d\u0434\u0438", ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438", m: "\u043c\u0438\u043d\u0443\u0442\u0430", mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438", h: "\u0447\u0430\u0441", hh: "%d \u0447\u0430\u0441\u0430", d: "\u0434\u0435\u043d", dd: "%d \u0434\u0435\u043d\u0430", M: "\u043c\u0435\u0441\u0435\u0446", MM: "%d \u043c\u0435\u0441\u0435\u0446\u0438", y: "\u0433\u043e\u0434\u0438\u043d\u0430", yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/, ordinal: function (e) { var a = e % 10, t = e % 100; return 0 === e ? e + "-\u0435\u0432" : 0 === t ? e + "-\u0435\u043d" : 10 < t && t < 20 ? e + "-\u0442\u0438" : 1 === a ? e + "-\u0432\u0438" : 2 === a ? e + "-\u0440\u0438" : 7 === a || 8 === a ? e + "-\u043c\u0438" : e + "-\u0442\u0438" }, week: { dow: 1, doy: 7 } }), l.defineLocale("ml", { months: "\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f_\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f_\u0d2e\u0d3e\u0d7c\u0d1a\u0d4d\u0d1a\u0d4d_\u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d7d_\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48_\u0d13\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d_\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d7c_\u0d12\u0d15\u0d4d\u0d1f\u0d4b\u0d2c\u0d7c_\u0d28\u0d35\u0d02\u0d2c\u0d7c_\u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d7c".split("_"), monthsShort: "\u0d1c\u0d28\u0d41._\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41._\u0d2e\u0d3e\u0d7c._\u0d0f\u0d2a\u0d4d\u0d30\u0d3f._\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48._\u0d13\u0d17._\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31._\u0d12\u0d15\u0d4d\u0d1f\u0d4b._\u0d28\u0d35\u0d02._\u0d21\u0d3f\u0d38\u0d02.".split("_"), monthsParseExact: !0, weekdays: "\u0d1e\u0d3e\u0d2f\u0d31\u0d3e\u0d34\u0d4d\u0d1a_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d3e\u0d34\u0d4d\u0d1a_\u0d1a\u0d4a\u0d35\u0d4d\u0d35\u0d3e\u0d34\u0d4d\u0d1a_\u0d2c\u0d41\u0d27\u0d28\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a_\u0d36\u0d28\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a".split("_"), weekdaysShort: "\u0d1e\u0d3e\u0d2f\u0d7c_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d7e_\u0d1a\u0d4a\u0d35\u0d4d\u0d35_\u0d2c\u0d41\u0d27\u0d7b_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d02_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f_\u0d36\u0d28\u0d3f".split("_"), weekdaysMin: "\u0d1e\u0d3e_\u0d24\u0d3f_\u0d1a\u0d4a_\u0d2c\u0d41_\u0d35\u0d4d\u0d2f\u0d3e_\u0d35\u0d46_\u0d36".split("_"), longDateFormat: { LT: "A h:mm -\u0d28\u0d41", LTS: "A h:mm:ss -\u0d28\u0d41", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm -\u0d28\u0d41", LLLL: "dddd, D MMMM YYYY, A h:mm -\u0d28\u0d41" }, calendar: { sameDay: "[\u0d07\u0d28\u0d4d\u0d28\u0d4d] LT", nextDay: "[\u0d28\u0d3e\u0d33\u0d46] LT", nextWeek: "dddd, LT", lastDay: "[\u0d07\u0d28\u0d4d\u0d28\u0d32\u0d46] LT", lastWeek: "[\u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d", past: "%s \u0d2e\u0d41\u0d7b\u0d2a\u0d4d", s: "\u0d05\u0d7d\u0d2a \u0d28\u0d3f\u0d2e\u0d3f\u0d37\u0d19\u0d4d\u0d19\u0d7e", ss: "%d \u0d38\u0d46\u0d15\u0d4d\u0d15\u0d7b\u0d21\u0d4d", m: "\u0d12\u0d30\u0d41 \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d", mm: "%d \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d", h: "\u0d12\u0d30\u0d41 \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c", hh: "%d \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c", d: "\u0d12\u0d30\u0d41 \u0d26\u0d3f\u0d35\u0d38\u0d02", dd: "%d \u0d26\u0d3f\u0d35\u0d38\u0d02", M: "\u0d12\u0d30\u0d41 \u0d2e\u0d3e\u0d38\u0d02", MM: "%d \u0d2e\u0d3e\u0d38\u0d02", y: "\u0d12\u0d30\u0d41 \u0d35\u0d7c\u0d37\u0d02", yy: "%d \u0d35\u0d7c\u0d37\u0d02" }, meridiemParse: /\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f|\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46|\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d|\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02|\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f/i, meridiemHour: function (e, a) { return 12 === e && (e = 0), "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" === a && 4 <= e || "\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d" === a || "\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02" === a ? e + 12 : e }, meridiem: function (e, a, t) { return e < 4 ? "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" : e < 12 ? "\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46" : e < 17 ? "\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d" : e < 20 ? "\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02" : "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" } }), l.defineLocale("mn", { months: "\u041d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0425\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u04e9\u0440\u04e9\u0432\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0417\u0443\u0440\u0433\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u043e\u043b\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u041d\u0430\u0439\u043c\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0415\u0441\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u043d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u0445\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440".split("_"), monthsShort: "1 \u0441\u0430\u0440_2 \u0441\u0430\u0440_3 \u0441\u0430\u0440_4 \u0441\u0430\u0440_5 \u0441\u0430\u0440_6 \u0441\u0430\u0440_7 \u0441\u0430\u0440_8 \u0441\u0430\u0440_9 \u0441\u0430\u0440_10 \u0441\u0430\u0440_11 \u0441\u0430\u0440_12 \u0441\u0430\u0440".split("_"), monthsParseExact: !0, weekdays: "\u041d\u044f\u043c_\u0414\u0430\u0432\u0430\u0430_\u041c\u044f\u0433\u043c\u0430\u0440_\u041b\u0445\u0430\u0433\u0432\u0430_\u041f\u04af\u0440\u044d\u0432_\u0411\u0430\u0430\u0441\u0430\u043d_\u0411\u044f\u043c\u0431\u0430".split("_"), weekdaysShort: "\u041d\u044f\u043c_\u0414\u0430\u0432_\u041c\u044f\u0433_\u041b\u0445\u0430_\u041f\u04af\u0440_\u0411\u0430\u0430_\u0411\u044f\u043c".split("_"), weekdaysMin: "\u041d\u044f_\u0414\u0430_\u041c\u044f_\u041b\u0445_\u041f\u04af_\u0411\u0430_\u0411\u044f".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY \u043e\u043d\u044b MMMM\u044b\u043d D", LLL: "YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm", LLLL: "dddd, YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm" }, meridiemParse: /\u04ae\u04e8|\u04ae\u0425/i, isPM: function (e) { return "\u04ae\u0425" === e }, meridiem: function (e, a, t) { return e < 12 ? "\u04ae\u04e8" : "\u04ae\u0425" }, calendar: { sameDay: "[\u04e8\u043d\u04e9\u04e9\u0434\u04e9\u0440] LT", nextDay: "[\u041c\u0430\u0440\u0433\u0430\u0430\u0448] LT", nextWeek: "[\u0418\u0440\u044d\u0445] dddd LT", lastDay: "[\u04e8\u0447\u0438\u0433\u0434\u04e9\u0440] LT", lastWeek: "[\u04e8\u043d\u0433\u04e9\u0440\u0441\u04e9\u043d] dddd LT", sameElse: "L" }, relativeTime: { future: "%s \u0434\u0430\u0440\u0430\u0430", past: "%s \u04e9\u043c\u043d\u04e9", s: wn, ss: wn, m: wn, mm: wn, h: wn, hh: wn, d: wn, dd: wn, M: wn, MM: wn, y: wn, yy: wn }, dayOfMonthOrdinalParse: /\d{1,2} \u04e9\u0434\u04e9\u0440/, ordinal: function (e, a) { switch (a) { case "d": case "D": case "DDD": return e + " \u04e9\u0434\u04e9\u0440"; default: return e } } }); var vn = { 1: "\u0967", 2: "\u0968", 3: "\u0969", 4: "\u096a", 5: "\u096b", 6: "\u096c", 7: "\u096d", 8: "\u096e", 9: "\u096f", 0: "\u0966" }, Sn = { "\u0967": "1", "\u0968": "2", "\u0969": "3", "\u096a": "4", "\u096b": "5", "\u096c": "6", "\u096d": "7", "\u096e": "8", "\u096f": "9", "\u0966": "0" }; function Hn(e, a, t, s) { var n = ""; if (a) switch (t) { case "s": n = "\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926"; break; case "ss": n = "%d \u0938\u0947\u0915\u0902\u0926"; break; case "m": n = "\u090f\u0915 \u092e\u093f\u0928\u093f\u091f"; break; case "mm": n = "%d \u092e\u093f\u0928\u093f\u091f\u0947"; break; case "h": n = "\u090f\u0915 \u0924\u093e\u0938"; break; case "hh": n = "%d \u0924\u093e\u0938"; break; case "d": n = "\u090f\u0915 \u0926\u093f\u0935\u0938"; break; case "dd": n = "%d \u0926\u093f\u0935\u0938"; break; case "M": n = "\u090f\u0915 \u092e\u0939\u093f\u0928\u093e"; break; case "MM": n = "%d \u092e\u0939\u093f\u0928\u0947"; break; case "y": n = "\u090f\u0915 \u0935\u0930\u094d\u0937"; break; case "yy": n = "%d \u0935\u0930\u094d\u0937\u0947"; break } else switch (t) { case "s": n = "\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926\u093e\u0902"; break; case "ss": n = "%d \u0938\u0947\u0915\u0902\u0926\u093e\u0902"; break; case "m": n = "\u090f\u0915\u093e \u092e\u093f\u0928\u093f\u091f\u093e"; break; case "mm": n = "%d \u092e\u093f\u0928\u093f\u091f\u093e\u0902"; break; case "h": n = "\u090f\u0915\u093e \u0924\u093e\u0938\u093e"; break; case "hh": n = "%d \u0924\u093e\u0938\u093e\u0902"; break; case "d": n = "\u090f\u0915\u093e \u0926\u093f\u0935\u0938\u093e"; break; case "dd": n = "%d \u0926\u093f\u0935\u0938\u093e\u0902"; break; case "M": n = "\u090f\u0915\u093e \u092e\u0939\u093f\u0928\u094d\u092f\u093e"; break; case "MM": n = "%d \u092e\u0939\u093f\u0928\u094d\u092f\u093e\u0902"; break; case "y": n = "\u090f\u0915\u093e \u0935\u0930\u094d\u0937\u093e"; break; case "yy": n = "%d \u0935\u0930\u094d\u0937\u093e\u0902"; break }return n.replace(/%d/i, e) } l.defineLocale("mr", { months: "\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u090f\u092a\u094d\u0930\u093f\u0932_\u092e\u0947_\u091c\u0942\u0928_\u091c\u0941\u0932\u0948_\u0911\u0917\u0938\u094d\u091f_\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930_\u0911\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930_\u0921\u093f\u0938\u0947\u0902\u092c\u0930".split("_"), monthsShort: "\u091c\u093e\u0928\u0947._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a._\u090f\u092a\u094d\u0930\u093f._\u092e\u0947._\u091c\u0942\u0928._\u091c\u0941\u0932\u0948._\u0911\u0917._\u0938\u092a\u094d\u091f\u0947\u0902._\u0911\u0915\u094d\u091f\u094b._\u0928\u094b\u0935\u094d\u0939\u0947\u0902._\u0921\u093f\u0938\u0947\u0902.".split("_"), monthsParseExact: !0, weekdays: "\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0933\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"), weekdaysShort: "\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0933_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"), weekdaysMin: "\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"), longDateFormat: { LT: "A h:mm \u0935\u093e\u091c\u0924\u093e", LTS: "A h:mm:ss \u0935\u093e\u091c\u0924\u093e", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e", LLLL: "dddd, D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e" }, calendar: { sameDay: "[\u0906\u091c] LT", nextDay: "[\u0909\u0926\u094d\u092f\u093e] LT", nextWeek: "dddd, LT", lastDay: "[\u0915\u093e\u0932] LT", lastWeek: "[\u092e\u093e\u0917\u0940\u0932] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s\u092e\u0927\u094d\u092f\u0947", past: "%s\u092a\u0942\u0930\u094d\u0935\u0940", s: Hn, ss: Hn, m: Hn, mm: Hn, h: Hn, hh: Hn, d: Hn, dd: Hn, M: Hn, MM: Hn, y: Hn, yy: Hn }, preparse: function (e) { return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function (e) { return Sn[e] }) }, postformat: function (e) { return e.replace(/\d/g, function (e) { return vn[e] }) }, meridiemParse: /\u0930\u093e\u0924\u094d\u0930\u0940|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940/, meridiemHour: function (e, a) { return 12 === e && (e = 0), "\u0930\u093e\u0924\u094d\u0930\u0940" === a ? e < 4 ? e : e + 12 : "\u0938\u0915\u093e\u0933\u0940" === a ? e : "\u0926\u0941\u092a\u093e\u0930\u0940" === a ? 10 <= e ? e : e + 12 : "\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940" === a ? e + 12 : void 0 }, meridiem: function (e, a, t) { return e < 4 ? "\u0930\u093e\u0924\u094d\u0930\u0940" : e < 10 ? "\u0938\u0915\u093e\u0933\u0940" : e < 17 ? "\u0926\u0941\u092a\u093e\u0930\u0940" : e < 20 ? "\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940" : "\u0930\u093e\u0924\u094d\u0930\u0940" }, week: { dow: 0, doy: 6 } }), l.defineLocale("ms-my", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function (e, a) { return 12 === e && (e = 0), "pagi" === a ? e : "tengahari" === a ? 11 <= e ? e : e + 12 : "petang" === a || "malam" === a ? e + 12 : void 0 }, meridiem: function (e, a, t) { return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", ss: "%d saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }), l.defineLocale("ms", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function (e, a) { return 12 === e && (e = 0), "pagi" === a ? e : "tengahari" === a ? 11 <= e ? e : e + 12 : "petang" === a || "malam" === a ? e + 12 : void 0 }, meridiem: function (e, a, t) { return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", ss: "%d saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }), l.defineLocale("mt", { months: "Jannar_Frar_Marzu_April_Mejju_\u0120unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Di\u010bembru".split("_"), monthsShort: "Jan_Fra_Mar_Apr_Mej_\u0120un_Lul_Aww_Set_Ott_Nov_Di\u010b".split("_"), weekdays: "Il-\u0126add_It-Tnejn_It-Tlieta_L-Erbg\u0127a_Il-\u0126amis_Il-\u0120img\u0127a_Is-Sibt".split("_"), weekdaysShort: "\u0126ad_Tne_Tli_Erb_\u0126am_\u0120im_Sib".split("_"), weekdaysMin: "\u0126a_Tn_Tl_Er_\u0126a_\u0120i_Si".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Illum fil-]LT", nextDay: "[G\u0127ada fil-]LT", nextWeek: "dddd [fil-]LT", lastDay: "[Il-biera\u0127 fil-]LT", lastWeek: "dddd [li g\u0127adda] [fil-]LT", sameElse: "L" }, relativeTime: { future: "f\u2019 %s", past: "%s ilu", s: "ftit sekondi", ss: "%d sekondi", m: "minuta", mm: "%d minuti", h: "sieg\u0127a", hh: "%d sieg\u0127at", d: "\u0121urnata", dd: "%d \u0121ranet", M: "xahar", MM: "%d xhur", y: "sena", yy: "%d sni" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }); var bn = { 1: "\u1041", 2: "\u1042", 3: "\u1043", 4: "\u1044", 5: "\u1045", 6: "\u1046", 7: "\u1047", 8: "\u1048", 9: "\u1049", 0: "\u1040" }, jn = { "\u1041": "1", "\u1042": "2", "\u1043": "3", "\u1044": "4", "\u1045": "5", "\u1046": "6", "\u1047": "7", "\u1048": "8", "\u1049": "9", "\u1040": "0" }; l.defineLocale("my", { months: "\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e_\u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e_\u1019\u1010\u103a_\u1027\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u1007\u1030\u101c\u102d\u102f\u1004\u103a_\u101e\u103c\u1002\u102f\u1010\u103a_\u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c_\u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c_\u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c_\u1012\u102e\u1007\u1004\u103a\u1018\u102c".split("_"), monthsShort: "\u1007\u1014\u103a_\u1016\u1031_\u1019\u1010\u103a_\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u101c\u102d\u102f\u1004\u103a_\u101e\u103c_\u1005\u1000\u103a_\u1021\u1031\u102c\u1000\u103a_\u1014\u102d\u102f_\u1012\u102e".split("_"), weekdays: "\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031_\u1010\u1014\u1004\u103a\u1039\u101c\u102c_\u1021\u1004\u103a\u1039\u1002\u102b_\u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038_\u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038_\u101e\u1031\u102c\u1000\u103c\u102c_\u1005\u1014\u1031".split("_"), weekdaysShort: "\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"), weekdaysMin: "\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u101a\u1014\u1031.] LT [\u1019\u103e\u102c]", nextDay: "[\u1019\u1014\u1000\u103a\u1016\u103c\u1014\u103a] LT [\u1019\u103e\u102c]", nextWeek: "dddd LT [\u1019\u103e\u102c]", lastDay: "[\u1019\u1014\u1031.\u1000] LT [\u1019\u103e\u102c]", lastWeek: "[\u1015\u103c\u102e\u1038\u1001\u1032\u1037\u101e\u1031\u102c] dddd LT [\u1019\u103e\u102c]", sameElse: "L" }, relativeTime: { future: "\u101c\u102c\u1019\u100a\u103a\u1037 %s \u1019\u103e\u102c", past: "\u101c\u103d\u1014\u103a\u1001\u1032\u1037\u101e\u1031\u102c %s \u1000", s: "\u1005\u1000\u1039\u1000\u1014\u103a.\u1021\u1014\u100a\u103a\u1038\u1004\u101a\u103a", ss: "%d \u1005\u1000\u1039\u1000\u1014\u1037\u103a", m: "\u1010\u1005\u103a\u1019\u102d\u1014\u1005\u103a", mm: "%d \u1019\u102d\u1014\u1005\u103a", h: "\u1010\u1005\u103a\u1014\u102c\u101b\u102e", hh: "%d \u1014\u102c\u101b\u102e", d: "\u1010\u1005\u103a\u101b\u1000\u103a", dd: "%d \u101b\u1000\u103a", M: "\u1010\u1005\u103a\u101c", MM: "%d \u101c", y: "\u1010\u1005\u103a\u1014\u103e\u1005\u103a", yy: "%d \u1014\u103e\u1005\u103a" }, preparse: function (e) { return e.replace(/[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g, function (e) { return jn[e] }) }, postformat: function (e) { return e.replace(/\d/g, function (e) { return bn[e] }) }, week: { dow: 1, doy: 4 } }), l.defineLocale("nb", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), monthsParseExact: !0, weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"), weekdaysShort: "s\xf8._ma._ti._on._to._fr._l\xf8.".split("_"), weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i g\xe5r kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", ss: "%d sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en m\xe5ned", MM: "%d m\xe5neder", y: "ett \xe5r", yy: "%d \xe5r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }); var xn = { 1: "\u0967", 2: "\u0968", 3: "\u0969", 4: "\u096a", 5: "\u096b", 6: "\u096c", 7: "\u096d", 8: "\u096e", 9: "\u096f", 0: "\u0966" }, On = { "\u0967": "1", "\u0968": "2", "\u0969": "3", "\u096a": "4", "\u096b": "5", "\u096c": "6", "\u096d": "7", "\u096e": "8", "\u096f": "9", "\u0966": "0" }; l.defineLocale("ne", { months: "\u091c\u0928\u0935\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f\u0932_\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0937\u094d\u091f_\u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930_\u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split("_"), monthsShort: "\u091c\u0928._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f._\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908._\u0905\u0917._\u0938\u0947\u092a\u094d\u091f._\u0905\u0915\u094d\u091f\u094b._\u0928\u094b\u092d\u0947._\u0921\u093f\u0938\u0947.".split("_"), monthsParseExact: !0, weekdays: "\u0906\u0907\u0924\u092c\u093e\u0930_\u0938\u094b\u092e\u092c\u093e\u0930_\u092e\u0919\u094d\u0917\u0932\u092c\u093e\u0930_\u092c\u0941\u0927\u092c\u093e\u0930_\u092c\u093f\u0939\u093f\u092c\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u092c\u093e\u0930_\u0936\u0928\u093f\u092c\u093e\u0930".split("_"), weekdaysShort: "\u0906\u0907\u0924._\u0938\u094b\u092e._\u092e\u0919\u094d\u0917\u0932._\u092c\u0941\u0927._\u092c\u093f\u0939\u093f._\u0936\u0941\u0915\u094d\u0930._\u0936\u0928\u093f.".split("_"), weekdaysMin: "\u0906._\u0938\u094b._\u092e\u0902._\u092c\u0941._\u092c\u093f._\u0936\u0941._\u0936.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "A\u0915\u094b h:mm \u092c\u091c\u0947", LTS: "A\u0915\u094b h:mm:ss \u092c\u091c\u0947", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947", LLLL: "dddd, D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947" }, preparse: function (e) { return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function (e) { return On[e] }) }, postformat: function (e) { return e.replace(/\d/g, function (e) { return xn[e] }) }, meridiemParse: /\u0930\u093e\u0924\u093f|\u092c\u093f\u0939\u093e\u0928|\u0926\u093f\u0909\u0901\u0938\u094b|\u0938\u093e\u0901\u091d/, meridiemHour: function (e, a) { return 12 === e && (e = 0), "\u0930\u093e\u0924\u093f" === a ? e < 4 ? e : e + 12 : "\u092c\u093f\u0939\u093e\u0928" === a ? e : "\u0926\u093f\u0909\u0901\u0938\u094b" === a ? 10 <= e ? e : e + 12 : "\u0938\u093e\u0901\u091d" === a ? e + 12 : void 0 }, meridiem: function (e, a, t) { return e < 3 ? "\u0930\u093e\u0924\u093f" : e < 12 ? "\u092c\u093f\u0939\u093e\u0928" : e < 16 ? "\u0926\u093f\u0909\u0901\u0938\u094b" : e < 20 ? "\u0938\u093e\u0901\u091d" : "\u0930\u093e\u0924\u093f" }, calendar: { sameDay: "[\u0906\u091c] LT", nextDay: "[\u092d\u094b\u0932\u093f] LT", nextWeek: "[\u0906\u0909\u0901\u0926\u094b] dddd[,] LT", lastDay: "[\u0939\u093f\u091c\u094b] LT", lastWeek: "[\u0917\u090f\u0915\u094b] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%s\u092e\u093e", past: "%s \u0905\u0917\u093e\u0921\u093f", s: "\u0915\u0947\u0939\u0940 \u0915\u094d\u0937\u0923", ss: "%d \u0938\u0947\u0915\u0947\u0923\u094d\u0921", m: "\u090f\u0915 \u092e\u093f\u0928\u0947\u091f", mm: "%d \u092e\u093f\u0928\u0947\u091f", h: "\u090f\u0915 \u0918\u0923\u094d\u091f\u093e", hh: "%d \u0918\u0923\u094d\u091f\u093e", d: "\u090f\u0915 \u0926\u093f\u0928", dd: "%d \u0926\u093f\u0928", M: "\u090f\u0915 \u092e\u0939\u093f\u0928\u093e", MM: "%d \u092e\u0939\u093f\u0928\u093e", y: "\u090f\u0915 \u092c\u0930\u094d\u0937", yy: "%d \u092c\u0930\u094d\u0937" }, week: { dow: 0, doy: 6 } }); var Pn = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), Wn = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), An = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i], En = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i; l.defineLocale("nl-be", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function (e, a) { return e ? /-MMM-/.test(a) ? Wn[e.month()] : Pn[e.month()] : Pn }, monthsRegex: En, monthsShortRegex: En, monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: An, longMonthsParse: An, shortMonthsParse: An, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", ss: "%d seconden", m: "\xe9\xe9n minuut", mm: "%d minuten", h: "\xe9\xe9n uur", hh: "%d uur", d: "\xe9\xe9n dag", dd: "%d dagen", M: "\xe9\xe9n maand", MM: "%d maanden", y: "\xe9\xe9n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function (e) { return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de") }, week: { dow: 1, doy: 4 } }); var Fn = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), zn = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), Jn = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i], Nn = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i; l.defineLocale("nl", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function (e, a) { return e ? /-MMM-/.test(a) ? zn[e.month()] : Fn[e.month()] : Fn }, monthsRegex: Nn, monthsShortRegex: Nn, monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: Jn, longMonthsParse: Jn, shortMonthsParse: Jn, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", ss: "%d seconden", m: "\xe9\xe9n minuut", mm: "%d minuten", h: "\xe9\xe9n uur", hh: "%d uur", d: "\xe9\xe9n dag", dd: "%d dagen", M: "\xe9\xe9n maand", MM: "%d maanden", y: "\xe9\xe9n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function (e) { return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de") }, week: { dow: 1, doy: 4 } }), l.defineLocale("nn", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sundag_m\xe5ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_m\xe5n_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_m\xe5_ty_on_to_fr_l\xf8".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[I dag klokka] LT", nextDay: "[I morgon klokka] LT", nextWeek: "dddd [klokka] LT", lastDay: "[I g\xe5r klokka] LT", lastWeek: "[F\xf8reg\xe5ande] dddd [klokka] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s sidan", s: "nokre sekund", ss: "%d sekund", m: "eit minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein m\xe5nad", MM: "%d m\xe5nader", y: "eit \xe5r", yy: "%d \xe5r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }); var Rn = { 1: "\u0a67", 2: "\u0a68", 3: "\u0a69", 4: "\u0a6a", 5: "\u0a6b", 6: "\u0a6c", 7: "\u0a6d", 8: "\u0a6e", 9: "\u0a6f", 0: "\u0a66" }, Cn = { "\u0a67": "1", "\u0a68": "2", "\u0a69": "3", "\u0a6a": "4", "\u0a6b": "5", "\u0a6c": "6", "\u0a6d": "7", "\u0a6e": "8", "\u0a6f": "9", "\u0a66": "0" }; l.defineLocale("pa-in", { months: "\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"), monthsShort: "\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"), weekdays: "\u0a10\u0a24\u0a35\u0a3e\u0a30_\u0a38\u0a4b\u0a2e\u0a35\u0a3e\u0a30_\u0a2e\u0a70\u0a17\u0a32\u0a35\u0a3e\u0a30_\u0a2c\u0a41\u0a27\u0a35\u0a3e\u0a30_\u0a35\u0a40\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a28\u0a40\u0a1a\u0a30\u0a35\u0a3e\u0a30".split("_"), weekdaysShort: "\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"), weekdaysMin: "\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"), longDateFormat: { LT: "A h:mm \u0a35\u0a1c\u0a47", LTS: "A h:mm:ss \u0a35\u0a1c\u0a47", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47", LLLL: "dddd, D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47" }, calendar: { sameDay: "[\u0a05\u0a1c] LT", nextDay: "[\u0a15\u0a32] LT", nextWeek: "[\u0a05\u0a17\u0a32\u0a3e] dddd, LT", lastDay: "[\u0a15\u0a32] LT", lastWeek: "[\u0a2a\u0a3f\u0a1b\u0a32\u0a47] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0a35\u0a3f\u0a71\u0a1a", past: "%s \u0a2a\u0a3f\u0a1b\u0a32\u0a47", s: "\u0a15\u0a41\u0a1d \u0a38\u0a15\u0a3f\u0a70\u0a1f", ss: "%d \u0a38\u0a15\u0a3f\u0a70\u0a1f", m: "\u0a07\u0a15 \u0a2e\u0a3f\u0a70\u0a1f", mm: "%d \u0a2e\u0a3f\u0a70\u0a1f", h: "\u0a07\u0a71\u0a15 \u0a18\u0a70\u0a1f\u0a3e", hh: "%d \u0a18\u0a70\u0a1f\u0a47", d: "\u0a07\u0a71\u0a15 \u0a26\u0a3f\u0a28", dd: "%d \u0a26\u0a3f\u0a28", M: "\u0a07\u0a71\u0a15 \u0a2e\u0a39\u0a40\u0a28\u0a3e", MM: "%d \u0a2e\u0a39\u0a40\u0a28\u0a47", y: "\u0a07\u0a71\u0a15 \u0a38\u0a3e\u0a32", yy: "%d \u0a38\u0a3e\u0a32" }, preparse: function (e) { return e.replace(/[\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a66]/g, function (e) { return Cn[e] }) }, postformat: function (e) { return e.replace(/\d/g, function (e) { return Rn[e] }) }, meridiemParse: /\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/, meridiemHour: function (e, a) { return 12 === e && (e = 0), "\u0a30\u0a3e\u0a24" === a ? e < 4 ? e : e + 12 : "\u0a38\u0a35\u0a47\u0a30" === a ? e : "\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30" === a ? 10 <= e ? e : e + 12 : "\u0a38\u0a3c\u0a3e\u0a2e" === a ? e + 12 : void 0 }, meridiem: function (e, a, t) { return e < 4 ? "\u0a30\u0a3e\u0a24" : e < 10 ? "\u0a38\u0a35\u0a47\u0a30" : e < 17 ? "\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30" : e < 20 ? "\u0a38\u0a3c\u0a3e\u0a2e" : "\u0a30\u0a3e\u0a24" }, week: { dow: 0, doy: 6 } }); var In = "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017adziernik_listopad_grudzie\u0144".split("_"), Un = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015bnia_pa\u017adziernika_listopada_grudnia".split("_"); function Gn(e) { return e % 10 < 5 && 1 < e % 10 && ~~(e / 10) % 10 != 1 } function Vn(e, a, t) { var s = e + " "; switch (t) { case "ss": return s + (Gn(e) ? "sekundy" : "sekund"); case "m": return a ? "minuta" : "minut\u0119"; case "mm": return s + (Gn(e) ? "minuty" : "minut"); case "h": return a ? "godzina" : "godzin\u0119"; case "hh": return s + (Gn(e) ? "godziny" : "godzin"); case "MM": return s + (Gn(e) ? "miesi\u0105ce" : "miesi\u0119cy"); case "yy": return s + (Gn(e) ? "lata" : "lat") } } function Kn(e, a, t) { var s = " "; return (20 <= e % 100 || 100 <= e && e % 100 == 0) && (s = " de "), e + s + { ss: "secunde", mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani" }[t] } function Zn(e, a, t) { var s, n; return "m" === t ? a ? "\u043c\u0438\u043d\u0443\u0442\u0430" : "\u043c\u0438\u043d\u0443\u0442\u0443" : e + " " + (s = +e, n = { ss: a ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434", mm: a ? "\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442" : "\u043c\u0438\u043d\u0443\u0442\u0443_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442", hh: "\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432", dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439", MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432", yy: "\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442" }[t].split("_"), s % 10 == 1 && s % 100 != 11 ? n[0] : 2 <= s % 10 && s % 10 <= 4 && (s % 100 < 10 || 20 <= s % 100) ? n[1] : n[2]) } l.defineLocale("pl", { months: function (e, a) { return e ? "" === a ? "(" + Un[e.month()] + "|" + In[e.month()] + ")" : /D MMMM/.test(a) ? Un[e.month()] : In[e.month()] : In }, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017a_lis_gru".split("_"), weekdays: "niedziela_poniedzia\u0142ek_wtorek_\u015broda_czwartek_pi\u0105tek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_\u015br_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_\u015ar_Cz_Pt_So".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Dzi\u015b o] LT", nextDay: "[Jutro o] LT", nextWeek: function () { switch (this.day()) { case 0: return "[W niedziel\u0119 o] LT"; case 2: return "[We wtorek o] LT"; case 3: return "[W \u015brod\u0119 o] LT"; case 6: return "[W sobot\u0119 o] LT"; default: return "[W] dddd [o] LT" } }, lastDay: "[Wczoraj o] LT", lastWeek: function () { switch (this.day()) { case 0: return "[W zesz\u0142\u0105 niedziel\u0119 o] LT"; case 3: return "[W zesz\u0142\u0105 \u015brod\u0119 o] LT"; case 6: return "[W zesz\u0142\u0105 sobot\u0119 o] LT"; default: return "[W zesz\u0142y] dddd [o] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", ss: Vn, m: Vn, mm: Vn, h: Vn, hh: Vn, d: "1 dzie\u0144", dd: "%d dni", M: "miesi\u0105c", MM: Vn, y: "rok", yy: Vn }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("pt-br", { months: "Janeiro_Fevereiro_Mar\xe7o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"), weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [\xe0s] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm" }, calendar: { sameDay: "[Hoje \xe0s] LT", nextDay: "[Amanh\xe3 \xe0s] LT", nextWeek: "dddd [\xe0s] LT", lastDay: "[Ontem \xe0s] LT", lastWeek: function () { return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "h\xe1 %s", s: "poucos segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um m\xeas", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba" }), l.defineLocale("pt", { months: "Janeiro_Fevereiro_Mar\xe7o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"), weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm" }, calendar: { sameDay: "[Hoje \xe0s] LT", nextDay: "[Amanh\xe3 \xe0s] LT", nextWeek: "dddd [\xe0s] LT", lastDay: "[Ontem \xe0s] LT", lastWeek: function () { return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "h\xe1 %s", s: "segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um m\xeas", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }), l.defineLocale("ro", { months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"), monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "duminic\u0103_luni_mar\u021bi_miercuri_joi_vineri_s\xe2mb\u0103t\u0103".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\xe2m".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\xe2".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[azi la] LT", nextDay: "[m\xe2ine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L" }, relativeTime: { future: "peste %s", past: "%s \xeen urm\u0103", s: "c\xe2teva secunde", ss: Kn, m: "un minut", mm: Kn, h: "o or\u0103", hh: Kn, d: "o zi", dd: Kn, M: "o lun\u0103", MM: Kn, y: "un an", yy: Kn }, week: { dow: 1, doy: 7 } }); var $n = [/^\u044f\u043d\u0432/i, /^\u0444\u0435\u0432/i, /^\u043c\u0430\u0440/i, /^\u0430\u043f\u0440/i, /^\u043c\u0430[\u0439\u044f]/i, /^\u0438\u044e\u043d/i, /^\u0438\u044e\u043b/i, /^\u0430\u0432\u0433/i, /^\u0441\u0435\u043d/i, /^\u043e\u043a\u0442/i, /^\u043d\u043e\u044f/i, /^\u0434\u0435\u043a/i]; l.defineLocale("ru", { months: { format: "\u044f\u043d\u0432\u0430\u0440\u044f_\u0444\u0435\u0432\u0440\u0430\u043b\u044f_\u043c\u0430\u0440\u0442\u0430_\u0430\u043f\u0440\u0435\u043b\u044f_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f_\u043e\u043a\u0442\u044f\u0431\u0440\u044f_\u043d\u043e\u044f\u0431\u0440\u044f_\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split("_"), standalone: "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_") }, monthsShort: { format: "\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_"), standalone: "\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440\u0442_\u0430\u043f\u0440._\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_") }, weekdays: { standalone: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split("_"), format: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043e\u0442\u0443".split("_"), isFormat: /\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e|\u044d\u0442\u0443)? ?\] ?dddd/ }, weekdaysShort: "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"), weekdaysMin: "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"), monthsParse: $n, longMonthsParse: $n, shortMonthsParse: $n, monthsRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i, monthsShortRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i, monthsStrictRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044f\u044c]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044f\u044c]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044f\u044c]|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044f\u044c]|\u0438\u044e\u043b[\u044f\u044c]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043d\u043e\u044f\u0431\u0440[\u044f\u044c]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044f\u044c])/i, monthsShortStrictRegex: /^(\u044f\u043d\u0432\.|\u0444\u0435\u0432\u0440?\.|\u043c\u0430\u0440[\u0442.]|\u0430\u043f\u0440\.|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044c\u044f.]|\u0438\u044e\u043b[\u044c\u044f.]|\u0430\u0432\u0433\.|\u0441\u0435\u043d\u0442?\.|\u043e\u043a\u0442\.|\u043d\u043e\u044f\u0431?\.|\u0434\u0435\u043a\.)/i, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0433.", LLL: "D MMMM YYYY \u0433., H:mm", LLLL: "dddd, D MMMM YYYY \u0433., H:mm" }, calendar: { sameDay: "[\u0421\u0435\u0433\u043e\u0434\u043d\u044f, \u0432] LT", nextDay: "[\u0417\u0430\u0432\u0442\u0440\u0430, \u0432] LT", lastDay: "[\u0412\u0447\u0435\u0440\u0430, \u0432] LT", nextWeek: function (e) { if (e.week() === this.week()) return 2 === this.day() ? "[\u0412\u043e] dddd, [\u0432] LT" : "[\u0412] dddd, [\u0432] LT"; switch (this.day()) { case 0: return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435] dddd, [\u0432] LT"; case 1: case 2: case 4: return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439] dddd, [\u0432] LT"; case 3: case 5: case 6: return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e] dddd, [\u0432] LT" } }, lastWeek: function (e) { if (e.week() === this.week()) return 2 === this.day() ? "[\u0412\u043e] dddd, [\u0432] LT" : "[\u0412] dddd, [\u0432] LT"; switch (this.day()) { case 0: return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u0435] dddd, [\u0432] LT"; case 1: case 2: case 4: return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u044b\u0439] dddd, [\u0432] LT"; case 3: case 5: case 6: return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u0443\u044e] dddd, [\u0432] LT" } }, sameElse: "L" }, relativeTime: { future: "\u0447\u0435\u0440\u0435\u0437 %s", past: "%s \u043d\u0430\u0437\u0430\u0434", s: "\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434", ss: Zn, m: Zn, mm: Zn, h: "\u0447\u0430\u0441", hh: Zn, d: "\u0434\u0435\u043d\u044c", dd: Zn, M: "\u043c\u0435\u0441\u044f\u0446", MM: Zn, y: "\u0433\u043e\u0434", yy: Zn }, meridiemParse: /\u043d\u043e\u0447\u0438|\u0443\u0442\u0440\u0430|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430/i, isPM: function (e) { return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430)$/.test(e) }, meridiem: function (e, a, t) { return e < 4 ? "\u043d\u043e\u0447\u0438" : e < 12 ? "\u0443\u0442\u0440\u0430" : e < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u0435\u0440\u0430" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e|\u044f)/, ordinal: function (e, a) { switch (a) { case "M": case "d": case "DDD": return e + "-\u0439"; case "D": return e + "-\u0433\u043e"; case "w": case "W": return e + "-\u044f"; default: return e } }, week: { dow: 1, doy: 4 } }); var Bn = ["\u062c\u0646\u0648\u0631\u064a", "\u0641\u064a\u0628\u0631\u0648\u0631\u064a", "\u0645\u0627\u0631\u0686", "\u0627\u067e\u0631\u064a\u0644", "\u0645\u0626\u064a", "\u062c\u0648\u0646", "\u062c\u0648\u0644\u0627\u0621\u0650", "\u0622\u06af\u0633\u067d", "\u0633\u064a\u067e\u067d\u0645\u0628\u0631", "\u0622\u06aa\u067d\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u068a\u0633\u0645\u0628\u0631"], qn = ["\u0622\u0686\u0631", "\u0633\u0648\u0645\u0631", "\u0627\u06b1\u0627\u0631\u0648", "\u0627\u0631\u0628\u0639", "\u062e\u0645\u064a\u0633", "\u062c\u0645\u0639", "\u0687\u0646\u0687\u0631"]; l.defineLocale("sd", { months: Bn, monthsShort: Bn, weekdays: qn, weekdaysShort: qn, weekdaysMin: qn, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd\u060c D MMMM YYYY HH:mm" }, meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/, isPM: function (e) { return "\u0634\u0627\u0645" === e }, meridiem: function (e, a, t) { return e < 12 ? "\u0635\u0628\u062d" : "\u0634\u0627\u0645" }, calendar: { sameDay: "[\u0627\u0684] LT", nextDay: "[\u0633\u0680\u0627\u06bb\u064a] LT", nextWeek: "dddd [\u0627\u06b3\u064a\u0646 \u0647\u0641\u062a\u064a \u062a\u064a] LT", lastDay: "[\u06aa\u0627\u0644\u0647\u0647] LT", lastWeek: "[\u06af\u0632\u0631\u064a\u0644 \u0647\u0641\u062a\u064a] dddd [\u062a\u064a] LT", sameElse: "L" }, relativeTime: { future: "%s \u067e\u0648\u0621", past: "%s \u0627\u06b3", s: "\u0686\u0646\u062f \u0633\u064a\u06aa\u0646\u068a", ss: "%d \u0633\u064a\u06aa\u0646\u068a", m: "\u0647\u06aa \u0645\u0646\u067d", mm: "%d \u0645\u0646\u067d", h: "\u0647\u06aa \u06aa\u0644\u0627\u06aa", hh: "%d \u06aa\u0644\u0627\u06aa", d: "\u0647\u06aa \u068f\u064a\u0646\u0647\u0646", dd: "%d \u068f\u064a\u0646\u0647\u0646", M: "\u0647\u06aa \u0645\u0647\u064a\u0646\u0648", MM: "%d \u0645\u0647\u064a\u0646\u0627", y: "\u0647\u06aa \u0633\u0627\u0644", yy: "%d \u0633\u0627\u0644" }, preparse: function (e) { return e.replace(/\u060c/g, ",") }, postformat: function (e) { return e.replace(/,/g, "\u060c") }, week: { dow: 1, doy: 4 } }), l.defineLocale("se", { months: "o\u0111\u0111ajagem\xe1nnu_guovvam\xe1nnu_njuk\u010dam\xe1nnu_cuo\u014bom\xe1nnu_miessem\xe1nnu_geassem\xe1nnu_suoidnem\xe1nnu_borgem\xe1nnu_\u010dak\u010dam\xe1nnu_golggotm\xe1nnu_sk\xe1bmam\xe1nnu_juovlam\xe1nnu".split("_"), monthsShort: "o\u0111\u0111j_guov_njuk_cuo_mies_geas_suoi_borg_\u010dak\u010d_golg_sk\xe1b_juov".split("_"), weekdays: "sotnabeaivi_vuoss\xe1rga_ma\u014b\u014beb\xe1rga_gaskavahkku_duorastat_bearjadat_l\xe1vvardat".split("_"), weekdaysShort: "sotn_vuos_ma\u014b_gask_duor_bear_l\xe1v".split("_"), weekdaysMin: "s_v_m_g_d_b_L".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm" }, calendar: { sameDay: "[otne ti] LT", nextDay: "[ihttin ti] LT", nextWeek: "dddd [ti] LT", lastDay: "[ikte ti] LT", lastWeek: "[ovddit] dddd [ti] LT", sameElse: "L" }, relativeTime: { future: "%s gea\u017ees", past: "ma\u014bit %s", s: "moadde sekunddat", ss: "%d sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta m\xe1nnu", MM: "%d m\xe1nut", y: "okta jahki", yy: "%d jagit" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("si", { months: "\u0da2\u0db1\u0dc0\u0dcf\u0dbb\u0dd2_\u0db4\u0dd9\u0db6\u0dbb\u0dc0\u0dcf\u0dbb\u0dd2_\u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4_\u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd\u0dc3\u0dca\u0dad\u0dd4_\u0dc3\u0dd0\u0db4\u0dca\u0dad\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0d94\u0d9a\u0dca\u0dad\u0ddd\u0db6\u0dbb\u0dca_\u0db1\u0ddc\u0dc0\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0daf\u0dd9\u0dc3\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca".split("_"), monthsShort: "\u0da2\u0db1_\u0db4\u0dd9\u0db6_\u0db8\u0dcf\u0dbb\u0dca_\u0d85\u0db4\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd_\u0dc3\u0dd0\u0db4\u0dca_\u0d94\u0d9a\u0dca_\u0db1\u0ddc\u0dc0\u0dd0_\u0daf\u0dd9\u0dc3\u0dd0".split("_"), weekdays: "\u0d89\u0dbb\u0dd2\u0daf\u0dcf_\u0dc3\u0db3\u0dd4\u0daf\u0dcf_\u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf_\u0db6\u0daf\u0dcf\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf_\u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf_\u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf".split("_"), weekdaysShort: "\u0d89\u0dbb\u0dd2_\u0dc3\u0db3\u0dd4_\u0d85\u0d9f_\u0db6\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4_\u0dc3\u0dd2\u0d9a\u0dd4_\u0dc3\u0dd9\u0db1".split("_"), weekdaysMin: "\u0d89_\u0dc3_\u0d85_\u0db6_\u0db6\u0dca\u200d\u0dbb_\u0dc3\u0dd2_\u0dc3\u0dd9".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [\u0dc0\u0dd0\u0db1\u0dd2] dddd, a h:mm:ss" }, calendar: { sameDay: "[\u0d85\u0daf] LT[\u0da7]", nextDay: "[\u0dc4\u0dd9\u0da7] LT[\u0da7]", nextWeek: "dddd LT[\u0da7]", lastDay: "[\u0d8a\u0dba\u0dda] LT[\u0da7]", lastWeek: "[\u0db4\u0dc3\u0dd4\u0d9c\u0dd2\u0dba] dddd LT[\u0da7]", sameElse: "L" }, relativeTime: { future: "%s\u0d9a\u0dd2\u0db1\u0dca", past: "%s\u0d9a\u0da7 \u0db4\u0dd9\u0dbb", s: "\u0dad\u0dad\u0dca\u0db4\u0dbb \u0d9a\u0dd2\u0dc4\u0dd2\u0db4\u0dba", ss: "\u0dad\u0dad\u0dca\u0db4\u0dbb %d", m: "\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4\u0dc0", mm: "\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4 %d", h: "\u0db4\u0dd0\u0dba", hh: "\u0db4\u0dd0\u0dba %d", d: "\u0daf\u0dd2\u0db1\u0dba", dd: "\u0daf\u0dd2\u0db1 %d", M: "\u0db8\u0dcf\u0dc3\u0dba", MM: "\u0db8\u0dcf\u0dc3 %d", y: "\u0dc0\u0dc3\u0dbb", yy: "\u0dc0\u0dc3\u0dbb %d" }, dayOfMonthOrdinalParse: /\d{1,2} \u0dc0\u0dd0\u0db1\u0dd2/, ordinal: function (e) { return e + " \u0dc0\u0dd0\u0db1\u0dd2" }, meridiemParse: /\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4|\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4|\u0db4\u0dd9.\u0dc0|\u0db4.\u0dc0./, isPM: function (e) { return "\u0db4.\u0dc0." === e || "\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4" === e }, meridiem: function (e, a, t) { return 11 < e ? t ? "\u0db4.\u0dc0." : "\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4" : t ? "\u0db4\u0dd9.\u0dc0." : "\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4" } }); var Qn = "janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"), Xn = "jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_"); function ed(e) { return 1 < e && e < 5 } function ad(e, a, t, s) { var n = e + " "; switch (t) { case "s": return a || s ? "p\xe1r sek\xfand" : "p\xe1r sekundami"; case "ss": return a || s ? n + (ed(e) ? "sekundy" : "sek\xfand") : n + "sekundami"; break; case "m": return a ? "min\xfata" : s ? "min\xfatu" : "min\xfatou"; case "mm": return a || s ? n + (ed(e) ? "min\xfaty" : "min\xfat") : n + "min\xfatami"; break; case "h": return a ? "hodina" : s ? "hodinu" : "hodinou"; case "hh": return a || s ? n + (ed(e) ? "hodiny" : "hod\xedn") : n + "hodinami"; break; case "d": return a || s ? "de\u0148" : "d\u0148om"; case "dd": return a || s ? n + (ed(e) ? "dni" : "dn\xed") : n + "d\u0148ami"; break; case "M": return a || s ? "mesiac" : "mesiacom"; case "MM": return a || s ? n + (ed(e) ? "mesiace" : "mesiacov") : n + "mesiacmi"; break; case "y": return a || s ? "rok" : "rokom"; case "yy": return a || s ? n + (ed(e) ? "roky" : "rokov") : n + "rokmi"; break } } function td(e, a, t, s) { var n = e + " "; switch (t) { case "s": return a || s ? "nekaj sekund" : "nekaj sekundami"; case "ss": return n += 1 === e ? a ? "sekundo" : "sekundi" : 2 === e ? a || s ? "sekundi" : "sekundah" : e < 5 ? a || s ? "sekunde" : "sekundah" : "sekund"; case "m": return a ? "ena minuta" : "eno minuto"; case "mm": return n += 1 === e ? a ? "minuta" : "minuto" : 2 === e ? a || s ? "minuti" : "minutama" : e < 5 ? a || s ? "minute" : "minutami" : a || s ? "minut" : "minutami"; case "h": return a ? "ena ura" : "eno uro"; case "hh": return n += 1 === e ? a ? "ura" : "uro" : 2 === e ? a || s ? "uri" : "urama" : e < 5 ? a || s ? "ure" : "urami" : a || s ? "ur" : "urami"; case "d": return a || s ? "en dan" : "enim dnem"; case "dd": return n += 1 === e ? a || s ? "dan" : "dnem" : 2 === e ? a || s ? "dni" : "dnevoma" : a || s ? "dni" : "dnevi"; case "M": return a || s ? "en mesec" : "enim mesecem"; case "MM": return n += 1 === e ? a || s ? "mesec" : "mesecem" : 2 === e ? a || s ? "meseca" : "mesecema" : e < 5 ? a || s ? "mesece" : "meseci" : a || s ? "mesecev" : "meseci"; case "y": return a || s ? "eno leto" : "enim letom"; case "yy": return n += 1 === e ? a || s ? "leto" : "letom" : 2 === e ? a || s ? "leti" : "letoma" : e < 5 ? a || s ? "leta" : "leti" : a || s ? "let" : "leti" } } l.defineLocale("sk", { months: Qn, monthsShort: Xn, weekdays: "nede\u013ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_\u0161t_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_\u0161t_pi_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm" }, calendar: { sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function () { switch (this.day()) { case 0: return "[v nede\u013eu o] LT"; case 1: case 2: return "[v] dddd [o] LT"; case 3: return "[v stredu o] LT"; case 4: return "[vo \u0161tvrtok o] LT"; case 5: return "[v piatok o] LT"; case 6: return "[v sobotu o] LT" } }, lastDay: "[v\u010dera o] LT", lastWeek: function () { switch (this.day()) { case 0: return "[minul\xfa nede\u013eu o] LT"; case 1: case 2: return "[minul\xfd] dddd [o] LT"; case 3: return "[minul\xfa stredu o] LT"; case 4: case 5: return "[minul\xfd] dddd [o] LT"; case 6: return "[minul\xfa sobotu o] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pred %s", s: ad, ss: ad, m: ad, mm: ad, h: ad, hh: ad, d: ad, dd: ad, M: ad, MM: ad, y: ad, yy: ad }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("sl", { months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedelja_ponedeljek_torek_sreda_\u010detrtek_petek_sobota".split("_"), weekdaysShort: "ned._pon._tor._sre._\u010det._pet._sob.".split("_"), weekdaysMin: "ne_po_to_sr_\u010de_pe_so".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function () { switch (this.day()) { case 0: return "[v] [nedeljo] [ob] LT"; case 3: return "[v] [sredo] [ob] LT"; case 6: return "[v] [soboto] [ob] LT"; case 1: case 2: case 4: case 5: return "[v] dddd [ob] LT" } }, lastDay: "[v\u010deraj ob] LT", lastWeek: function () { switch (this.day()) { case 0: return "[prej\u0161njo] [nedeljo] [ob] LT"; case 3: return "[prej\u0161njo] [sredo] [ob] LT"; case 6: return "[prej\u0161njo] [soboto] [ob] LT"; case 1: case 2: case 4: case 5: return "[prej\u0161nji] dddd [ob] LT" } }, sameElse: "L" }, relativeTime: { future: "\u010dez %s", past: "pred %s", s: td, ss: td, m: td, mm: td, h: td, hh: td, d: td, dd: td, M: td, MM: td, y: td, yy: td }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }), l.defineLocale("sq", { months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N\xebntor_Dhjetor".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N\xebn_Dhj".split("_"), weekdays: "E Diel_E H\xebn\xeb_E Mart\xeb_E M\xebrkur\xeb_E Enjte_E Premte_E Shtun\xeb".split("_"), weekdaysShort: "Die_H\xebn_Mar_M\xebr_Enj_Pre_Sht".split("_"), weekdaysMin: "D_H_Ma_M\xeb_E_P_Sh".split("_"), weekdaysParseExact: !0, meridiemParse: /PD|MD/, isPM: function (e) { return "M" === e.charAt(0) }, meridiem: function (e, a, t) { return e < 12 ? "PD" : "MD" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Sot n\xeb] LT", nextDay: "[Nes\xebr n\xeb] LT", nextWeek: "dddd [n\xeb] LT", lastDay: "[Dje n\xeb] LT", lastWeek: "dddd [e kaluar n\xeb] LT", sameElse: "L" }, relativeTime: { future: "n\xeb %s", past: "%s m\xeb par\xeb", s: "disa sekonda", ss: "%d sekonda", m: "nj\xeb minut\xeb", mm: "%d minuta", h: "nj\xeb or\xeb", hh: "%d or\xeb", d: "nj\xeb dit\xeb", dd: "%d dit\xeb", M: "nj\xeb muaj", MM: "%d muaj", y: "nj\xeb vit", yy: "%d vite" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }); var sd = { words: { ss: ["\u0441\u0435\u043a\u0443\u043d\u0434\u0430", "\u0441\u0435\u043a\u0443\u043d\u0434\u0435", "\u0441\u0435\u043a\u0443\u043d\u0434\u0438"], m: ["\u0458\u0435\u0434\u0430\u043d \u043c\u0438\u043d\u0443\u0442", "\u0458\u0435\u0434\u043d\u0435 \u043c\u0438\u043d\u0443\u0442\u0435"], mm: ["\u043c\u0438\u043d\u0443\u0442", "\u043c\u0438\u043d\u0443\u0442\u0435", "\u043c\u0438\u043d\u0443\u0442\u0430"], h: ["\u0458\u0435\u0434\u0430\u043d \u0441\u0430\u0442", "\u0458\u0435\u0434\u043d\u043e\u0433 \u0441\u0430\u0442\u0430"], hh: ["\u0441\u0430\u0442", "\u0441\u0430\u0442\u0430", "\u0441\u0430\u0442\u0438"], dd: ["\u0434\u0430\u043d", "\u0434\u0430\u043d\u0430", "\u0434\u0430\u043d\u0430"], MM: ["\u043c\u0435\u0441\u0435\u0446", "\u043c\u0435\u0441\u0435\u0446\u0430", "\u043c\u0435\u0441\u0435\u0446\u0438"], yy: ["\u0433\u043e\u0434\u0438\u043d\u0430", "\u0433\u043e\u0434\u0438\u043d\u0435", "\u0433\u043e\u0434\u0438\u043d\u0430"] }, correctGrammaticalCase: function (e, a) { return 1 === e ? a[0] : 2 <= e && e <= 4 ? a[1] : a[2] }, translate: function (e, a, t) { var s = sd.words[t]; return 1 === t.length ? a ? s[0] : s[1] : e + " " + sd.correctGrammaticalCase(e, s) } }; l.defineLocale("sr-cyrl", { months: "\u0458\u0430\u043d\u0443\u0430\u0440_\u0444\u0435\u0431\u0440\u0443\u0430\u0440_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440_\u043e\u043a\u0442\u043e\u0431\u0430\u0440_\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440_\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440".split("_"), monthsShort: "\u0458\u0430\u043d._\u0444\u0435\u0431._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433._\u0441\u0435\u043f._\u043e\u043a\u0442._\u043d\u043e\u0432._\u0434\u0435\u0446.".split("_"), monthsParseExact: !0, weekdays: "\u043d\u0435\u0434\u0435\u0459\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a_\u0443\u0442\u043e\u0440\u0430\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a_\u043f\u0435\u0442\u0430\u043a_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"), weekdaysShort: "\u043d\u0435\u0434._\u043f\u043e\u043d._\u0443\u0442\u043e._\u0441\u0440\u0435._\u0447\u0435\u0442._\u043f\u0435\u0442._\u0441\u0443\u0431.".split("_"), weekdaysMin: "\u043d\u0435_\u043f\u043e_\u0443\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441\u0443".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[\u0434\u0430\u043d\u0430\u0441 \u0443] LT", nextDay: "[\u0441\u0443\u0442\u0440\u0430 \u0443] LT", nextWeek: function () { switch (this.day()) { case 0: return "[\u0443] [\u043d\u0435\u0434\u0435\u0459\u0443] [\u0443] LT"; case 3: return "[\u0443] [\u0441\u0440\u0435\u0434\u0443] [\u0443] LT"; case 6: return "[\u0443] [\u0441\u0443\u0431\u043e\u0442\u0443] [\u0443] LT"; case 1: case 2: case 4: case 5: return "[\u0443] dddd [\u0443] LT" } }, lastDay: "[\u0458\u0443\u0447\u0435 \u0443] LT", lastWeek: function () { return ["[\u043f\u0440\u043e\u0448\u043b\u0435] [\u043d\u0435\u0434\u0435\u0459\u0435] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0443\u0442\u043e\u0440\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0440\u0435\u0434\u0435] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0447\u0435\u0442\u0432\u0440\u0442\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u0435\u0442\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0443\u0431\u043e\u0442\u0435] [\u0443] LT"][this.day()] }, sameElse: "L" }, relativeTime: { future: "\u0437\u0430 %s", past: "\u043f\u0440\u0435 %s", s: "\u043d\u0435\u043a\u043e\u043b\u0438\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438", ss: sd.translate, m: sd.translate, mm: sd.translate, h: sd.translate, hh: sd.translate, d: "\u0434\u0430\u043d", dd: sd.translate, M: "\u043c\u0435\u0441\u0435\u0446", MM: sd.translate, y: "\u0433\u043e\u0434\u0438\u043d\u0443", yy: sd.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }); var nd = { words: { ss: ["sekunda", "sekunde", "sekundi"], m: ["jedan minut", "jedne minute"], mm: ["minut", "minute", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mesec", "meseca", "meseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function (e, a) { return 1 === e ? a[0] : 2 <= e && e <= 4 ? a[1] : a[2] }, translate: function (e, a, t) { var s = nd.words[t]; return 1 === t.length ? a ? s[0] : s[1] : e + " " + nd.correctGrammaticalCase(e, s) } }; l.defineLocale("sr", { months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedelja_ponedeljak_utorak_sreda_\u010detvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sre._\u010det._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () { switch (this.day()) { case 0: return "[u] [nedelju] [u] LT"; case 3: return "[u] [sredu] [u] LT"; case 6: return "[u] [subotu] [u] LT"; case 1: case 2: case 4: case 5: return "[u] dddd [u] LT" } }, lastDay: "[ju\u010de u] LT", lastWeek: function () { return ["[pro\u0161le] [nedelje] [u] LT", "[pro\u0161log] [ponedeljka] [u] LT", "[pro\u0161log] [utorka] [u] LT", "[pro\u0161le] [srede] [u] LT", "[pro\u0161log] [\u010detvrtka] [u] LT", "[pro\u0161log] [petka] [u] LT", "[pro\u0161le] [subote] [u] LT"][this.day()] }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", ss: nd.translate, m: nd.translate, mm: nd.translate, h: nd.translate, hh: nd.translate, d: "dan", dd: nd.translate, M: "mesec", MM: nd.translate, y: "godinu", yy: nd.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }), l.defineLocale("ss", { months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Namuhla nga] LT", nextDay: "[Kusasa nga] LT", nextWeek: "dddd [nga] LT", lastDay: "[Itolo nga] LT", lastWeek: "dddd [leliphelile] [nga] LT", sameElse: "L" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", ss: "%d mzuzwana", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" }, meridiemParse: /ekuseni|emini|entsambama|ebusuku/, meridiem: function (e, a, t) { return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku" }, meridiemHour: function (e, a) { return 12 === e && (e = 0), "ekuseni" === a ? e : "emini" === a ? 11 <= e ? e : e + 12 : "entsambama" === a || "ebusuku" === a ? 0 === e ? 0 : e + 12 : void 0 }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: "%d", week: { dow: 1, doy: 4 } }), l.defineLocale("sv", { months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "s\xf6ndag_m\xe5ndag_tisdag_onsdag_torsdag_fredag_l\xf6rdag".split("_"), weekdaysShort: "s\xf6n_m\xe5n_tis_ons_tor_fre_l\xf6r".split("_"), weekdaysMin: "s\xf6_m\xe5_ti_on_to_fr_l\xf6".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Ig\xe5r] LT", nextWeek: "[P\xe5] dddd LT", lastWeek: "[I] dddd[s] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "f\xf6r %s sedan", s: "n\xe5gra sekunder", ss: "%d sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en m\xe5nad", MM: "%d m\xe5nader", y: "ett \xe5r", yy: "%d \xe5r" }, dayOfMonthOrdinalParse: /\d{1,2}(e|a)/, ordinal: function (e) { var a = e % 10; return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === a ? "a" : 2 === a ? "a" : "e") }, week: { dow: 1, doy: 4 } }), l.defineLocale("sw", { months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[leo saa] LT", nextDay: "[kesho saa] LT", nextWeek: "[wiki ijayo] dddd [saat] LT", lastDay: "[jana] LT", lastWeek: "[wiki iliyopita] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", ss: "sekunde %d", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, week: { dow: 1, doy: 7 } }); var dd = { 1: "\u0be7", 2: "\u0be8", 3: "\u0be9", 4: "\u0bea", 5: "\u0beb", 6: "\u0bec", 7: "\u0bed", 8: "\u0bee", 9: "\u0bef", 0: "\u0be6" }, rd = { "\u0be7": "1", "\u0be8": "2", "\u0be9": "3", "\u0bea": "4", "\u0beb": "5", "\u0bec": "6", "\u0bed": "7", "\u0bee": "8", "\u0bef": "9", "\u0be6": "0" }; l.defineLocale("ta", { months: "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"), monthsShort: "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"), weekdays: "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0b9f\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0ba9\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8".split("_"), weekdaysShort: "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf_\u0b9a\u0ba9\u0bbf".split("_"), weekdaysMin: "\u0b9e\u0bbe_\u0ba4\u0bbf_\u0b9a\u0bc6_\u0baa\u0bc1_\u0bb5\u0bbf_\u0bb5\u0bc6_\u0b9a".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, calendar: { sameDay: "[\u0b87\u0ba9\u0bcd\u0bb1\u0bc1] LT", nextDay: "[\u0ba8\u0bbe\u0bb3\u0bc8] LT", nextWeek: "dddd, LT", lastDay: "[\u0ba8\u0bc7\u0bb1\u0bcd\u0bb1\u0bc1] LT", lastWeek: "[\u0b95\u0b9f\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0b87\u0bb2\u0bcd", past: "%s \u0bae\u0bc1\u0ba9\u0bcd", s: "\u0b92\u0bb0\u0bc1 \u0b9a\u0bbf\u0bb2 \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd", ss: "%d \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd", m: "\u0b92\u0bb0\u0bc1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd", mm: "%d \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd", h: "\u0b92\u0bb0\u0bc1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd", hh: "%d \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd", d: "\u0b92\u0bb0\u0bc1 \u0ba8\u0bbe\u0bb3\u0bcd", dd: "%d \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bcd", M: "\u0b92\u0bb0\u0bc1 \u0bae\u0bbe\u0ba4\u0bae\u0bcd", MM: "%d \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd", y: "\u0b92\u0bb0\u0bc1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd", yy: "%d \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd" }, dayOfMonthOrdinalParse: /\d{1,2}\u0bb5\u0ba4\u0bc1/, ordinal: function (e) { return e + "\u0bb5\u0ba4\u0bc1" }, preparse: function (e) { return e.replace(/[\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0be6]/g, function (e) { return rd[e] }) }, postformat: function (e) { return e.replace(/\d/g, function (e) { return dd[e] }) }, meridiemParse: /\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/, meridiem: function (e, a, t) { return e < 2 ? " \u0baf\u0bbe\u0bae\u0bae\u0bcd" : e < 6 ? " \u0bb5\u0bc8\u0b95\u0bb1\u0bc8" : e < 10 ? " \u0b95\u0bbe\u0bb2\u0bc8" : e < 14 ? " \u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd" : e < 18 ? " \u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1" : e < 22 ? " \u0bae\u0bbe\u0bb2\u0bc8" : " \u0baf\u0bbe\u0bae\u0bae\u0bcd" }, meridiemHour: function (e, a) { return 12 === e && (e = 0), "\u0baf\u0bbe\u0bae\u0bae\u0bcd" === a ? e < 2 ? e : e + 12 : "\u0bb5\u0bc8\u0b95\u0bb1\u0bc8" === a || "\u0b95\u0bbe\u0bb2\u0bc8" === a ? e : "\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd" === a && 10 <= e ? e : e + 12 }, week: { dow: 0, doy: 6 } }), l.defineLocale("te", { months: "\u0c1c\u0c28\u0c35\u0c30\u0c3f_\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f_\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d_\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c41\u0c32\u0c48_\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41_\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d_\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d_\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d_\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d".split("_"), monthsShort: "\u0c1c\u0c28._\u0c2b\u0c3f\u0c2c\u0c4d\u0c30._\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f._\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c41\u0c32\u0c48_\u0c06\u0c17._\u0c38\u0c46\u0c2a\u0c4d._\u0c05\u0c15\u0c4d\u0c1f\u0c4b._\u0c28\u0c35._\u0c21\u0c3f\u0c38\u0c46.".split("_"), monthsParseExact: !0, weekdays: "\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02_\u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02_\u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02_\u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02_\u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02".split("_"), weekdaysShort: "\u0c06\u0c26\u0c3f_\u0c38\u0c4b\u0c2e_\u0c2e\u0c02\u0c17\u0c33_\u0c2c\u0c41\u0c27_\u0c17\u0c41\u0c30\u0c41_\u0c36\u0c41\u0c15\u0c4d\u0c30_\u0c36\u0c28\u0c3f".split("_"), weekdaysMin: "\u0c06_\u0c38\u0c4b_\u0c2e\u0c02_\u0c2c\u0c41_\u0c17\u0c41_\u0c36\u0c41_\u0c36".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[\u0c28\u0c47\u0c21\u0c41] LT", nextDay: "[\u0c30\u0c47\u0c2a\u0c41] LT", nextWeek: "dddd, LT", lastDay: "[\u0c28\u0c3f\u0c28\u0c4d\u0c28] LT", lastWeek: "[\u0c17\u0c24] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0c32\u0c4b", past: "%s \u0c15\u0c4d\u0c30\u0c3f\u0c24\u0c02", s: "\u0c15\u0c4a\u0c28\u0c4d\u0c28\u0c3f \u0c15\u0c4d\u0c37\u0c23\u0c3e\u0c32\u0c41", ss: "%d \u0c38\u0c46\u0c15\u0c28\u0c4d\u0c32\u0c41", m: "\u0c12\u0c15 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02", mm: "%d \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32\u0c41", h: "\u0c12\u0c15 \u0c17\u0c02\u0c1f", hh: "%d \u0c17\u0c02\u0c1f\u0c32\u0c41", d: "\u0c12\u0c15 \u0c30\u0c4b\u0c1c\u0c41", dd: "%d \u0c30\u0c4b\u0c1c\u0c41\u0c32\u0c41", M: "\u0c12\u0c15 \u0c28\u0c46\u0c32", MM: "%d \u0c28\u0c46\u0c32\u0c32\u0c41", y: "\u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02", yy: "%d \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32\u0c41" }, dayOfMonthOrdinalParse: /\d{1,2}\u0c35/, ordinal: "%d\u0c35", meridiemParse: /\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/, meridiemHour: function (e, a) { return 12 === e && (e = 0), "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" === a ? e < 4 ? e : e + 12 : "\u0c09\u0c26\u0c2f\u0c02" === a ? e : "\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02" === a ? 10 <= e ? e : e + 12 : "\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02" === a ? e + 12 : void 0 }, meridiem: function (e, a, t) { return e < 4 ? "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" : e < 10 ? "\u0c09\u0c26\u0c2f\u0c02" : e < 17 ? "\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02" : e < 20 ? "\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02" : "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" }, week: { dow: 0, doy: 6 } }), l.defineLocale("tet", { months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Ju\xf1u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"), weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"), weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Ohin iha] LT", nextDay: "[Aban iha] LT", nextWeek: "dddd [iha] LT", lastDay: "[Horiseik iha] LT", lastWeek: "dddd [semana kotuk] [iha] LT", sameElse: "L" }, relativeTime: { future: "iha %s", past: "%s liuba", s: "minutu balun", ss: "minutu %d", m: "minutu ida", mm: "minutu %d", h: "oras ida", hh: "oras %d", d: "loron ida", dd: "loron %d", M: "fulan ida", MM: "fulan %d", y: "tinan ida", yy: "tinan %d" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function (e) { var a = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th") }, week: { dow: 1, doy: 4 } }); var _d = { 0: "-\u0443\u043c", 1: "-\u0443\u043c", 2: "-\u044e\u043c", 3: "-\u044e\u043c", 4: "-\u0443\u043c", 5: "-\u0443\u043c", 6: "-\u0443\u043c", 7: "-\u0443\u043c", 8: "-\u0443\u043c", 9: "-\u0443\u043c", 10: "-\u0443\u043c", 12: "-\u0443\u043c", 13: "-\u0443\u043c", 20: "-\u0443\u043c", 30: "-\u044e\u043c", 40: "-\u0443\u043c", 50: "-\u0443\u043c", 60: "-\u0443\u043c", 70: "-\u0443\u043c", 80: "-\u0443\u043c", 90: "-\u0443\u043c", 100: "-\u0443\u043c" }; l.defineLocale("tg", { months: "\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split("_"), monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"), weekdays: "\u044f\u043a\u0448\u0430\u043d\u0431\u0435_\u0434\u0443\u0448\u0430\u043d\u0431\u0435_\u0441\u0435\u0448\u0430\u043d\u0431\u0435_\u0447\u043e\u0440\u0448\u0430\u043d\u0431\u0435_\u043f\u0430\u043d\u04b7\u0448\u0430\u043d\u0431\u0435_\u04b7\u0443\u043c\u044a\u0430_\u0448\u0430\u043d\u0431\u0435".split("_"), weekdaysShort: "\u044f\u0448\u0431_\u0434\u0448\u0431_\u0441\u0448\u0431_\u0447\u0448\u0431_\u043f\u0448\u0431_\u04b7\u0443\u043c_\u0448\u043d\u0431".split("_"), weekdaysMin: "\u044f\u0448_\u0434\u0448_\u0441\u0448_\u0447\u0448_\u043f\u0448_\u04b7\u043c_\u0448\u0431".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0418\u043c\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT", nextDay: "[\u041f\u0430\u0433\u043e\u04b3 \u0441\u043e\u0430\u0442\u0438] LT", lastDay: "[\u0414\u0438\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT", nextWeek: "dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u043e\u044f\u043d\u0434\u0430 \u0441\u043e\u0430\u0442\u0438] LT", lastWeek: "dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u0433\u0443\u0437\u0430\u0448\u0442\u0430 \u0441\u043e\u0430\u0442\u0438] LT", sameElse: "L" }, relativeTime: { future: "\u0431\u0430\u044a\u0434\u0438 %s", past: "%s \u043f\u0435\u0448", s: "\u044f\u043a\u0447\u0430\u043d\u0434 \u0441\u043e\u043d\u0438\u044f", m: "\u044f\u043a \u0434\u0430\u049b\u0438\u049b\u0430", mm: "%d \u0434\u0430\u049b\u0438\u049b\u0430", h: "\u044f\u043a \u0441\u043e\u0430\u0442", hh: "%d \u0441\u043e\u0430\u0442", d: "\u044f\u043a \u0440\u04ef\u0437", dd: "%d \u0440\u04ef\u0437", M: "\u044f\u043a \u043c\u043e\u04b3", MM: "%d \u043c\u043e\u04b3", y: "\u044f\u043a \u0441\u043e\u043b", yy: "%d \u0441\u043e\u043b" }, meridiemParse: /\u0448\u0430\u0431|\u0441\u0443\u0431\u04b3|\u0440\u04ef\u0437|\u0431\u0435\u0433\u043e\u04b3/, meridiemHour: function (e, a) { return 12 === e && (e = 0), "\u0448\u0430\u0431" === a ? e < 4 ? e : e + 12 : "\u0441\u0443\u0431\u04b3" === a ? e : "\u0440\u04ef\u0437" === a ? 11 <= e ? e : e + 12 : "\u0431\u0435\u0433\u043e\u04b3" === a ? e + 12 : void 0 }, meridiem: function (e, a, t) { return e < 4 ? "\u0448\u0430\u0431" : e < 11 ? "\u0441\u0443\u0431\u04b3" : e < 16 ? "\u0440\u04ef\u0437" : e < 19 ? "\u0431\u0435\u0433\u043e\u04b3" : "\u0448\u0430\u0431" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0443\u043c|\u044e\u043c)/, ordinal: function (e) { return e + (_d[e] || _d[e % 10] || _d[100 <= e ? 100 : null]) }, week: { dow: 1, doy: 7 } }), l.defineLocale("th", { months: "\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21_\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c_\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21_\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19_\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21_\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19_\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21_\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21_\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19_\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21_\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19_\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split("_"), monthsShort: "\u0e21.\u0e04._\u0e01.\u0e1e._\u0e21\u0e35.\u0e04._\u0e40\u0e21.\u0e22._\u0e1e.\u0e04._\u0e21\u0e34.\u0e22._\u0e01.\u0e04._\u0e2a.\u0e04._\u0e01.\u0e22._\u0e15.\u0e04._\u0e1e.\u0e22._\u0e18.\u0e04.".split("_"), monthsParseExact: !0, weekdays: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"), weekdaysShort: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"), weekdaysMin: "\u0e2d\u0e32._\u0e08._\u0e2d._\u0e1e._\u0e1e\u0e24._\u0e28._\u0e2a.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm", LLLL: "\u0e27\u0e31\u0e19dddd\u0e17\u0e35\u0e48 D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm" }, meridiemParse: /\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/, isPM: function (e) { return "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" === e }, meridiem: function (e, a, t) { return e < 12 ? "\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" : "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" }, calendar: { sameDay: "[\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT", nextDay: "[\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT", nextWeek: "dddd[\u0e2b\u0e19\u0e49\u0e32 \u0e40\u0e27\u0e25\u0e32] LT", lastDay: "[\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT", lastWeek: "[\u0e27\u0e31\u0e19]dddd[\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e27\u0e25\u0e32] LT", sameElse: "L" }, relativeTime: { future: "\u0e2d\u0e35\u0e01 %s", past: "%s\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27", s: "\u0e44\u0e21\u0e48\u0e01\u0e35\u0e48\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35", ss: "%d \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35", m: "1 \u0e19\u0e32\u0e17\u0e35", mm: "%d \u0e19\u0e32\u0e17\u0e35", h: "1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07", hh: "%d \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07", d: "1 \u0e27\u0e31\u0e19", dd: "%d \u0e27\u0e31\u0e19", M: "1 \u0e40\u0e14\u0e37\u0e2d\u0e19", MM: "%d \u0e40\u0e14\u0e37\u0e2d\u0e19", y: "1 \u0e1b\u0e35", yy: "%d \u0e1b\u0e35" } }), l.defineLocale("tl-ph", { months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm" }, calendar: { sameDay: "LT [ngayong araw]", nextDay: "[Bukas ng] LT", nextWeek: "LT [sa susunod na] dddd", lastDay: "LT [kahapon]", lastWeek: "LT [noong nakaraang] dddd", sameElse: "L" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", ss: "%d segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function (e) { return e }, week: { dow: 1, doy: 4 } }); var id = "pagh_wa\u2019_cha\u2019_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_"); function od(e, a, t, s) { var n = function (e) { var a = Math.floor(e % 1e3 / 100), t = Math.floor(e % 100 / 10), s = e % 10, n = ""; 0 < a && (n += id[a] + "vatlh"); 0 < t && (n += ("" !== n ? " " : "") + id[t] + "maH"); 0 < s && (n += ("" !== n ? " " : "") + id[s]); return "" === n ? "pagh" : n }(e); switch (t) { case "ss": return n + " lup"; case "mm": return n + " tup"; case "hh": return n + " rep"; case "dd": return n + " jaj"; case "MM": return n + " jar"; case "yy": return n + " DIS" } } l.defineLocale("tlh", { months: "tera\u2019 jar wa\u2019_tera\u2019 jar cha\u2019_tera\u2019 jar wej_tera\u2019 jar loS_tera\u2019 jar vagh_tera\u2019 jar jav_tera\u2019 jar Soch_tera\u2019 jar chorgh_tera\u2019 jar Hut_tera\u2019 jar wa\u2019maH_tera\u2019 jar wa\u2019maH wa\u2019_tera\u2019 jar wa\u2019maH cha\u2019".split("_"), monthsShort: "jar wa\u2019_jar cha\u2019_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa\u2019maH_jar wa\u2019maH wa\u2019_jar wa\u2019maH cha\u2019".split("_"), monthsParseExact: !0, weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[DaHjaj] LT", nextDay: "[wa\u2019leS] LT", nextWeek: "LLL", lastDay: "[wa\u2019Hu\u2019] LT", lastWeek: "LLL", sameElse: "L" }, relativeTime: { future: function (e) { var a = e; return a = -1 !== e.indexOf("jaj") ? a.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? a.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? a.slice(0, -3) + "nem" : a + " pIq" }, past: function (e) { var a = e; return a = -1 !== e.indexOf("jaj") ? a.slice(0, -3) + "Hu\u2019" : -1 !== e.indexOf("jar") ? a.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? a.slice(0, -3) + "ben" : a + " ret" }, s: "puS lup", ss: od, m: "wa\u2019 tup", mm: od, h: "wa\u2019 rep", hh: od, d: "wa\u2019 jaj", dd: od, M: "wa\u2019 jar", MM: od, y: "wa\u2019 DIS", yy: od }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }); var md = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'\xfcnc\xfc", 4: "'\xfcnc\xfc", 100: "'\xfcnc\xfc", 6: "'nc\u0131", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'\u0131nc\u0131", 90: "'\u0131nc\u0131" }; function ud(e, a, t, s) { var n = { s: ["viensas secunds", "'iensas secunds"], ss: [e + " secunds", e + " secunds"], m: ["'n m\xedut", "'iens m\xedut"], mm: [e + " m\xeduts", e + " m\xeduts"], h: ["'n \xfeora", "'iensa \xfeora"], hh: [e + " \xfeoras", e + " \xfeoras"], d: ["'n ziua", "'iensa ziua"], dd: [e + " ziuas", e + " ziuas"], M: ["'n mes", "'iens mes"], MM: [e + " mesen", e + " mesen"], y: ["'n ar", "'iens ar"], yy: [e + " ars", e + " ars"] }; return s ? n[t][0] : a ? n[t][0] : n[t][1] } function ld(e, a, t) { var s, n; return "m" === t ? a ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430" : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443" : "h" === t ? a ? "\u0433\u043e\u0434\u0438\u043d\u0430" : "\u0433\u043e\u0434\u0438\u043d\u0443" : e + " " + (s = +e, n = { ss: a ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434", mm: a ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d" : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d", hh: a ? "\u0433\u043e\u0434\u0438\u043d\u0430_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d" : "\u0433\u043e\u0434\u0438\u043d\u0443_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d", dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u043d\u0456\u0432", MM: "\u043c\u0456\u0441\u044f\u0446\u044c_\u043c\u0456\u0441\u044f\u0446\u0456_\u043c\u0456\u0441\u044f\u0446\u0456\u0432", yy: "\u0440\u0456\u043a_\u0440\u043e\u043a\u0438_\u0440\u043e\u043a\u0456\u0432" }[t].split("_"), s % 10 == 1 && s % 100 != 11 ? n[0] : 2 <= s % 10 && s % 10 <= 4 && (s % 100 < 10 || 20 <= s % 100) ? n[1] : n[2]) } function Md(e) { return function () { return e + "\u043e" + (11 === this.hours() ? "\u0431" : "") + "] LT" } } l.defineLocale("tr", { months: "Ocak_\u015eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011fustos_Eyl\xfcl_Ekim_Kas\u0131m_Aral\u0131k".split("_"), monthsShort: "Oca_\u015eub_Mar_Nis_May_Haz_Tem_A\u011fu_Eyl_Eki_Kas_Ara".split("_"), weekdays: "Pazar_Pazartesi_Sal\u0131_\xc7ar\u015famba_Per\u015fembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_\xc7ar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_\xc7a_Pe_Cu_Ct".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bug\xfcn saat] LT", nextDay: "[yar\u0131n saat] LT", nextWeek: "[gelecek] dddd [saat] LT", lastDay: "[d\xfcn] LT", lastWeek: "[ge\xe7en] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s \xf6nce", s: "birka\xe7 saniye", ss: "%d saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir g\xfcn", dd: "%d g\xfcn", M: "bir ay", MM: "%d ay", y: "bir y\u0131l", yy: "%d y\u0131l" }, ordinal: function (e, a) { switch (a) { case "d": case "D": case "Do": case "DD": return e; default: if (0 === e) return e + "'\u0131nc\u0131"; var t = e % 10; return e + (md[t] || md[e % 100 - t] || md[100 <= e ? 100 : null]) } }, week: { dow: 1, doy: 7 } }), l.defineLocale("tzl", { months: "Januar_Fevraglh_Mar\xe7_Avr\xefu_Mai_G\xfcn_Julia_Guscht_Setemvar_Listop\xe4ts_Noemvar_Zecemvar".split("_"), monthsShort: "Jan_Fev_Mar_Avr_Mai_G\xfcn_Jul_Gus_Set_Lis_Noe_Zec".split("_"), weekdays: "S\xfaladi_L\xfane\xe7i_Maitzi_M\xe1rcuri_Xh\xfaadi_Vi\xe9ner\xe7i_S\xe1turi".split("_"), weekdaysShort: "S\xfal_L\xfan_Mai_M\xe1r_Xh\xfa_Vi\xe9_S\xe1t".split("_"), weekdaysMin: "S\xfa_L\xfa_Ma_M\xe1_Xh_Vi_S\xe1".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM [dallas] YYYY", LLL: "D. MMMM [dallas] YYYY HH.mm", LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm" }, meridiemParse: /d\'o|d\'a/i, isPM: function (e) { return "d'o" === e.toLowerCase() }, meridiem: function (e, a, t) { return 11 < e ? t ? "d'o" : "D'O" : t ? "d'a" : "D'A" }, calendar: { sameDay: "[oxhi \xe0] LT", nextDay: "[dem\xe0 \xe0] LT", nextWeek: "dddd [\xe0] LT", lastDay: "[ieiri \xe0] LT", lastWeek: "[s\xfcr el] dddd [lasteu \xe0] LT", sameElse: "L" }, relativeTime: { future: "osprei %s", past: "ja%s", s: ud, ss: ud, m: ud, mm: ud, h: ud, hh: ud, d: ud, dd: ud, M: ud, MM: ud, y: ud, yy: ud }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("tzm-latn", { months: "innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"), monthsShort: "innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"), weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"), weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[asdkh g] LT", nextDay: "[aska g] LT", nextWeek: "dddd [g] LT", lastDay: "[assant g] LT", lastWeek: "dddd [g] LT", sameElse: "L" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", ss: "%d imik", m: "minu\u1e0d", mm: "%d minu\u1e0d", h: "sa\u025ba", hh: "%d tassa\u025bin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" }, week: { dow: 6, doy: 12 } }), l.defineLocale("tzm", { months: "\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"), monthsShort: "\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"), weekdays: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"), weekdaysShort: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"), weekdaysMin: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u2d30\u2d59\u2d37\u2d45 \u2d34] LT", nextDay: "[\u2d30\u2d59\u2d3d\u2d30 \u2d34] LT", nextWeek: "dddd [\u2d34] LT", lastDay: "[\u2d30\u2d5a\u2d30\u2d4f\u2d5c \u2d34] LT", lastWeek: "dddd [\u2d34] LT", sameElse: "L" }, relativeTime: { future: "\u2d37\u2d30\u2d37\u2d45 \u2d59 \u2d62\u2d30\u2d4f %s", past: "\u2d62\u2d30\u2d4f %s", s: "\u2d49\u2d4e\u2d49\u2d3d", ss: "%d \u2d49\u2d4e\u2d49\u2d3d", m: "\u2d4e\u2d49\u2d4f\u2d53\u2d3a", mm: "%d \u2d4e\u2d49\u2d4f\u2d53\u2d3a", h: "\u2d59\u2d30\u2d44\u2d30", hh: "%d \u2d5c\u2d30\u2d59\u2d59\u2d30\u2d44\u2d49\u2d4f", d: "\u2d30\u2d59\u2d59", dd: "%d o\u2d59\u2d59\u2d30\u2d4f", M: "\u2d30\u2d62o\u2d53\u2d54", MM: "%d \u2d49\u2d62\u2d62\u2d49\u2d54\u2d4f", y: "\u2d30\u2d59\u2d33\u2d30\u2d59", yy: "%d \u2d49\u2d59\u2d33\u2d30\u2d59\u2d4f" }, week: { dow: 6, doy: 12 } }), l.defineLocale("ug-cn", { months: "\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split("_"), monthsShort: "\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split("_"), weekdays: "\u064a\u06d5\u0643\u0634\u06d5\u0646\u0628\u06d5_\u062f\u06c8\u0634\u06d5\u0646\u0628\u06d5_\u0633\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u0686\u0627\u0631\u0634\u06d5\u0646\u0628\u06d5_\u067e\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u062c\u06c8\u0645\u06d5_\u0634\u06d5\u0646\u0628\u06d5".split("_"), weekdaysShort: "\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split("_"), weekdaysMin: "\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649", LLL: "YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm", LLLL: "dddd\u060c YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm" }, meridiemParse: /\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5|\u0633\u06d5\u06be\u06d5\u0631|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646|\u0686\u06c8\u0634|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646|\u0643\u06d5\u0686/, meridiemHour: function (e, a) { return 12 === e && (e = 0), "\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5" === a || "\u0633\u06d5\u06be\u06d5\u0631" === a || "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646" === a ? e : "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646" === a || "\u0643\u06d5\u0686" === a ? e + 12 : 11 <= e ? e : e + 12 }, meridiem: function (e, a, t) { var s = 100 * e + a; return s < 600 ? "\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5" : s < 900 ? "\u0633\u06d5\u06be\u06d5\u0631" : s < 1130 ? "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646" : s < 1230 ? "\u0686\u06c8\u0634" : s < 1800 ? "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646" : "\u0643\u06d5\u0686" }, calendar: { sameDay: "[\u0628\u06c8\u06af\u06c8\u0646 \u0633\u0627\u0626\u06d5\u062a] LT", nextDay: "[\u0626\u06d5\u062a\u06d5 \u0633\u0627\u0626\u06d5\u062a] LT", nextWeek: "[\u0643\u06d0\u0644\u06d5\u0631\u0643\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT", lastDay: "[\u062a\u06c6\u0646\u06c8\u06af\u06c8\u0646] LT", lastWeek: "[\u0626\u0627\u0644\u062f\u0649\u0646\u0642\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT", sameElse: "L" }, relativeTime: { future: "%s \u0643\u06d0\u064a\u0649\u0646", past: "%s \u0628\u06c7\u0631\u06c7\u0646", s: "\u0646\u06d5\u0686\u0686\u06d5 \u0633\u06d0\u0643\u0648\u0646\u062a", ss: "%d \u0633\u06d0\u0643\u0648\u0646\u062a", m: "\u0628\u0649\u0631 \u0645\u0649\u0646\u06c7\u062a", mm: "%d \u0645\u0649\u0646\u06c7\u062a", h: "\u0628\u0649\u0631 \u0633\u0627\u0626\u06d5\u062a", hh: "%d \u0633\u0627\u0626\u06d5\u062a", d: "\u0628\u0649\u0631 \u0643\u06c8\u0646", dd: "%d \u0643\u06c8\u0646", M: "\u0628\u0649\u0631 \u0626\u0627\u064a", MM: "%d \u0626\u0627\u064a", y: "\u0628\u0649\u0631 \u064a\u0649\u0644", yy: "%d \u064a\u0649\u0644" }, dayOfMonthOrdinalParse: /\d{1,2}(-\u0643\u06c8\u0646\u0649|-\u0626\u0627\u064a|-\u06be\u06d5\u067e\u062a\u06d5)/, ordinal: function (e, a) { switch (a) { case "d": case "D": case "DDD": return e + "-\u0643\u06c8\u0646\u0649"; case "w": case "W": return e + "-\u06be\u06d5\u067e\u062a\u06d5"; default: return e } }, preparse: function (e) { return e.replace(/\u060c/g, ",") }, postformat: function (e) { return e.replace(/,/g, "\u060c") }, week: { dow: 1, doy: 7 } }), l.defineLocale("uk", { months: { format: "\u0441\u0456\u0447\u043d\u044f_\u043b\u044e\u0442\u043e\u0433\u043e_\u0431\u0435\u0440\u0435\u0437\u043d\u044f_\u043a\u0432\u0456\u0442\u043d\u044f_\u0442\u0440\u0430\u0432\u043d\u044f_\u0447\u0435\u0440\u0432\u043d\u044f_\u043b\u0438\u043f\u043d\u044f_\u0441\u0435\u0440\u043f\u043d\u044f_\u0432\u0435\u0440\u0435\u0441\u043d\u044f_\u0436\u043e\u0432\u0442\u043d\u044f_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043d\u044f".split("_"), standalone: "\u0441\u0456\u0447\u0435\u043d\u044c_\u043b\u044e\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c_\u043a\u0432\u0456\u0442\u0435\u043d\u044c_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u0435\u0440\u0432\u0435\u043d\u044c_\u043b\u0438\u043f\u0435\u043d\u044c_\u0441\u0435\u0440\u043f\u0435\u043d\u044c_\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c_\u0436\u043e\u0432\u0442\u0435\u043d\u044c_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043d\u044c".split("_") }, monthsShort: "\u0441\u0456\u0447_\u043b\u044e\u0442_\u0431\u0435\u0440_\u043a\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043b\u0438\u043f_\u0441\u0435\u0440\u043f_\u0432\u0435\u0440_\u0436\u043e\u0432\u0442_\u043b\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split("_"), weekdays: function (e, a) { var t = { nominative: "\u043d\u0435\u0434\u0456\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"), accusative: "\u043d\u0435\u0434\u0456\u043b\u044e_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044e_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"), genitive: "\u043d\u0435\u0434\u0456\u043b\u0456_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043a\u0430_\u0432\u0456\u0432\u0442\u043e\u0440\u043a\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u0456_\u0441\u0443\u0431\u043e\u0442\u0438".split("_") }; return !0 === e ? t.nominative.slice(1, 7).concat(t.nominative.slice(0, 1)) : e ? t[/(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(a) ? "accusative" : /\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(a) ? "genitive" : "nominative"][e.day()] : t.nominative }, weekdaysShort: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"), weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0440.", LLL: "D MMMM YYYY \u0440., HH:mm", LLLL: "dddd, D MMMM YYYY \u0440., HH:mm" }, calendar: { sameDay: Md("[\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 "), nextDay: Md("[\u0417\u0430\u0432\u0442\u0440\u0430 "), lastDay: Md("[\u0412\u0447\u043e\u0440\u0430 "), nextWeek: Md("[\u0423] dddd ["), lastWeek: function () { switch (this.day()) { case 0: case 3: case 5: case 6: return Md("[\u041c\u0438\u043d\u0443\u043b\u043e\u0457] dddd [").call(this); case 1: case 2: case 4: return Md("[\u041c\u0438\u043d\u0443\u043b\u043e\u0433\u043e] dddd [").call(this) } }, sameElse: "L" }, relativeTime: { future: "\u0437\u0430 %s", past: "%s \u0442\u043e\u043c\u0443", s: "\u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0441\u0435\u043a\u0443\u043d\u0434", ss: ld, m: ld, mm: ld, h: "\u0433\u043e\u0434\u0438\u043d\u0443", hh: ld, d: "\u0434\u0435\u043d\u044c", dd: ld, M: "\u043c\u0456\u0441\u044f\u0446\u044c", MM: ld, y: "\u0440\u0456\u043a", yy: ld }, meridiemParse: /\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/, isPM: function (e) { return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(e) }, meridiem: function (e, a, t) { return e < 4 ? "\u043d\u043e\u0447\u0456" : e < 12 ? "\u0440\u0430\u043d\u043a\u0443" : e < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u043e\u0440\u0430" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e)/, ordinal: function (e, a) { switch (a) { case "M": case "d": case "DDD": case "w": case "W": return e + "-\u0439"; case "D": return e + "-\u0433\u043e"; default: return e } }, week: { dow: 1, doy: 7 } }); var hd = ["\u062c\u0646\u0648\u0631\u06cc", "\u0641\u0631\u0648\u0631\u06cc", "\u0645\u0627\u0631\u0686", "\u0627\u067e\u0631\u06cc\u0644", "\u0645\u0626\u06cc", "\u062c\u0648\u0646", "\u062c\u0648\u0644\u0627\u0626\u06cc", "\u0627\u06af\u0633\u062a", "\u0633\u062a\u0645\u0628\u0631", "\u0627\u06a9\u062a\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062f\u0633\u0645\u0628\u0631"], Ld = ["\u0627\u062a\u0648\u0627\u0631", "\u067e\u06cc\u0631", "\u0645\u0646\u06af\u0644", "\u0628\u062f\u06be", "\u062c\u0645\u0639\u0631\u0627\u062a", "\u062c\u0645\u0639\u06c1", "\u06c1\u0641\u062a\u06c1"]; return l.defineLocale("ur", { months: hd, monthsShort: hd, weekdays: Ld, weekdaysShort: Ld, weekdaysMin: Ld, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd\u060c D MMMM YYYY HH:mm" }, meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/, isPM: function (e) { return "\u0634\u0627\u0645" === e }, meridiem: function (e, a, t) { return e < 12 ? "\u0635\u0628\u062d" : "\u0634\u0627\u0645" }, calendar: { sameDay: "[\u0622\u062c \u0628\u0648\u0642\u062a] LT", nextDay: "[\u06a9\u0644 \u0628\u0648\u0642\u062a] LT", nextWeek: "dddd [\u0628\u0648\u0642\u062a] LT", lastDay: "[\u06af\u0630\u0634\u062a\u06c1 \u0631\u0648\u0632 \u0628\u0648\u0642\u062a] LT", lastWeek: "[\u06af\u0630\u0634\u062a\u06c1] dddd [\u0628\u0648\u0642\u062a] LT", sameElse: "L" }, relativeTime: { future: "%s \u0628\u0639\u062f", past: "%s \u0642\u0628\u0644", s: "\u0686\u0646\u062f \u0633\u06cc\u06a9\u0646\u0688", ss: "%d \u0633\u06cc\u06a9\u0646\u0688", m: "\u0627\u06cc\u06a9 \u0645\u0646\u0679", mm: "%d \u0645\u0646\u0679", h: "\u0627\u06cc\u06a9 \u06af\u06be\u0646\u0679\u06c1", hh: "%d \u06af\u06be\u0646\u0679\u06d2", d: "\u0627\u06cc\u06a9 \u062f\u0646", dd: "%d \u062f\u0646", M: "\u0627\u06cc\u06a9 \u0645\u0627\u06c1", MM: "%d \u0645\u0627\u06c1", y: "\u0627\u06cc\u06a9 \u0633\u0627\u0644", yy: "%d \u0633\u0627\u0644" }, preparse: function (e) { return e.replace(/\u060c/g, ",") }, postformat: function (e) { return e.replace(/,/g, "\u060c") }, week: { dow: 1, doy: 4 } }), l.defineLocale("uz-latn", { months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"), monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"), weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"), weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"), weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Bugun soat] LT [da]", nextDay: "[Ertaga] LT [da]", nextWeek: "dddd [kuni soat] LT [da]", lastDay: "[Kecha soat] LT [da]", lastWeek: "[O'tgan] dddd [kuni soat] LT [da]", sameElse: "L" }, relativeTime: { future: "Yaqin %s ichida", past: "Bir necha %s oldin", s: "soniya", ss: "%d soniya", m: "bir daqiqa", mm: "%d daqiqa", h: "bir soat", hh: "%d soat", d: "bir kun", dd: "%d kun", M: "bir oy", MM: "%d oy", y: "bir yil", yy: "%d yil" }, week: { dow: 1, doy: 7 } }), l.defineLocale("uz", { months: "\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split("_"), monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"), weekdays: "\u042f\u043a\u0448\u0430\u043d\u0431\u0430_\u0414\u0443\u0448\u0430\u043d\u0431\u0430_\u0421\u0435\u0448\u0430\u043d\u0431\u0430_\u0427\u043e\u0440\u0448\u0430\u043d\u0431\u0430_\u041f\u0430\u0439\u0448\u0430\u043d\u0431\u0430_\u0416\u0443\u043c\u0430_\u0428\u0430\u043d\u0431\u0430".split("_"), weekdaysShort: "\u042f\u043a\u0448_\u0414\u0443\u0448_\u0421\u0435\u0448_\u0427\u043e\u0440_\u041f\u0430\u0439_\u0416\u0443\u043c_\u0428\u0430\u043d".split("_"), weekdaysMin: "\u042f\u043a_\u0414\u0443_\u0421\u0435_\u0427\u043e_\u041f\u0430_\u0416\u0443_\u0428\u0430".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[\u0411\u0443\u0433\u0443\u043d \u0441\u043e\u0430\u0442] LT [\u0434\u0430]", nextDay: "[\u042d\u0440\u0442\u0430\u0433\u0430] LT [\u0434\u0430]", nextWeek: "dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]", lastDay: "[\u041a\u0435\u0447\u0430 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]", lastWeek: "[\u0423\u0442\u0433\u0430\u043d] dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]", sameElse: "L" }, relativeTime: { future: "\u042f\u043a\u0438\u043d %s \u0438\u0447\u0438\u0434\u0430", past: "\u0411\u0438\u0440 \u043d\u0435\u0447\u0430 %s \u043e\u043b\u0434\u0438\u043d", s: "\u0444\u0443\u0440\u0441\u0430\u0442", ss: "%d \u0444\u0443\u0440\u0441\u0430\u0442", m: "\u0431\u0438\u0440 \u0434\u0430\u043a\u0438\u043a\u0430", mm: "%d \u0434\u0430\u043a\u0438\u043a\u0430", h: "\u0431\u0438\u0440 \u0441\u043e\u0430\u0442", hh: "%d \u0441\u043e\u0430\u0442", d: "\u0431\u0438\u0440 \u043a\u0443\u043d", dd: "%d \u043a\u0443\u043d", M: "\u0431\u0438\u0440 \u043e\u0439", MM: "%d \u043e\u0439", y: "\u0431\u0438\u0440 \u0439\u0438\u043b", yy: "%d \u0439\u0438\u043b" }, week: { dow: 1, doy: 7 } }), l.defineLocale("vi", { months: "th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), monthsParseExact: !0, weekdays: "ch\u1ee7 nh\u1eadt_th\u1ee9 hai_th\u1ee9 ba_th\u1ee9 t\u01b0_th\u1ee9 n\u0103m_th\u1ee9 s\xe1u_th\u1ee9 b\u1ea3y".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysParseExact: !0, meridiemParse: /sa|ch/i, isPM: function (e) { return /^ch$/i.test(e) }, meridiem: function (e, a, t) { return e < 12 ? t ? "sa" : "SA" : t ? "ch" : "CH" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [n\u0103m] YYYY", LLL: "D MMMM [n\u0103m] YYYY HH:mm", LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[H\xf4m nay l\xfac] LT", nextDay: "[Ng\xe0y mai l\xfac] LT", nextWeek: "dddd [tu\u1ea7n t\u1edbi l\xfac] LT", lastDay: "[H\xf4m qua l\xfac] LT", lastWeek: "dddd [tu\u1ea7n r\u1ed3i l\xfac] LT", sameElse: "L" }, relativeTime: { future: "%s t\u1edbi", past: "%s tr\u01b0\u1edbc", s: "v\xe0i gi\xe2y", ss: "%d gi\xe2y", m: "m\u1ed9t ph\xfat", mm: "%d ph\xfat", h: "m\u1ed9t gi\u1edd", hh: "%d gi\u1edd", d: "m\u1ed9t ng\xe0y", dd: "%d ng\xe0y", M: "m\u1ed9t th\xe1ng", MM: "%d th\xe1ng", y: "m\u1ed9t n\u0103m", yy: "%d n\u0103m" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function (e) { return e }, week: { dow: 1, doy: 4 } }), l.defineLocale("x-pseudo", { months: "J~\xe1\xf1\xfa\xe1~r\xfd_F~\xe9br\xfa~\xe1r\xfd_~M\xe1rc~h_\xc1p~r\xedl_~M\xe1\xfd_~J\xfa\xf1\xe9~_J\xfal~\xfd_\xc1\xfa~g\xfast~_S\xe9p~t\xe9mb~\xe9r_\xd3~ct\xf3b~\xe9r_\xd1~\xf3v\xe9m~b\xe9r_~D\xe9c\xe9~mb\xe9r".split("_"), monthsShort: "J~\xe1\xf1_~F\xe9b_~M\xe1r_~\xc1pr_~M\xe1\xfd_~J\xfa\xf1_~J\xfal_~\xc1\xfag_~S\xe9p_~\xd3ct_~\xd1\xf3v_~D\xe9c".split("_"), monthsParseExact: !0, weekdays: "S~\xfa\xf1d\xe1~\xfd_M\xf3~\xf1d\xe1\xfd~_T\xfa\xe9~sd\xe1\xfd~_W\xe9d~\xf1\xe9sd~\xe1\xfd_T~h\xfars~d\xe1\xfd_~Fr\xedd~\xe1\xfd_S~\xe1t\xfar~d\xe1\xfd".split("_"), weekdaysShort: "S~\xfa\xf1_~M\xf3\xf1_~T\xfa\xe9_~W\xe9d_~Th\xfa_~Fr\xed_~S\xe1t".split("_"), weekdaysMin: "S~\xfa_M\xf3~_T\xfa_~W\xe9_T~h_Fr~_S\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[T~\xf3d\xe1~\xfd \xe1t] LT", nextDay: "[T~\xf3m\xf3~rr\xf3~w \xe1t] LT", nextWeek: "dddd [\xe1t] LT", lastDay: "[\xdd~\xe9st~\xe9rd\xe1~\xfd \xe1t] LT", lastWeek: "[L~\xe1st] dddd [\xe1t] LT", sameElse: "L" }, relativeTime: { future: "\xed~\xf1 %s", past: "%s \xe1~g\xf3", s: "\xe1 ~f\xe9w ~s\xe9c\xf3~\xf1ds", ss: "%d s~\xe9c\xf3\xf1~ds", m: "\xe1 ~m\xed\xf1~\xfat\xe9", mm: "%d m~\xed\xf1\xfa~t\xe9s", h: "\xe1~\xf1 h\xf3~\xfar", hh: "%d h~\xf3\xfars", d: "\xe1 ~d\xe1\xfd", dd: "%d d~\xe1\xfds", M: "\xe1 ~m\xf3\xf1~th", MM: "%d m~\xf3\xf1t~hs", y: "\xe1 ~\xfd\xe9\xe1r", yy: "%d \xfd~\xe9\xe1rs" }, dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (e) { var a = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th") }, week: { dow: 1, doy: 4 } }), l.defineLocale("yo", { months: "S\u1eb9\u0301r\u1eb9\u0301_E\u0300re\u0300le\u0300_\u1eb8r\u1eb9\u0300na\u0300_I\u0300gbe\u0301_E\u0300bibi_O\u0300ku\u0300du_Ag\u1eb9mo_O\u0300gu\u0301n_Owewe_\u1ecc\u0300wa\u0300ra\u0300_Be\u0301lu\u0301_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"), monthsShort: "S\u1eb9\u0301r_E\u0300rl_\u1eb8rn_I\u0300gb_E\u0300bi_O\u0300ku\u0300_Ag\u1eb9_O\u0300gu\u0301_Owe_\u1ecc\u0300wa\u0300_Be\u0301l_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"), weekdays: "A\u0300i\u0300ku\u0301_Aje\u0301_I\u0300s\u1eb9\u0301gun_\u1eccj\u1ecd\u0301ru\u0301_\u1eccj\u1ecd\u0301b\u1ecd_\u1eb8ti\u0300_A\u0300ba\u0301m\u1eb9\u0301ta".split("_"), weekdaysShort: "A\u0300i\u0300k_Aje\u0301_I\u0300s\u1eb9\u0301_\u1eccjr_\u1eccjb_\u1eb8ti\u0300_A\u0300ba\u0301".split("_"), weekdaysMin: "A\u0300i\u0300_Aj_I\u0300s_\u1eccr_\u1eccb_\u1eb8t_A\u0300b".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[O\u0300ni\u0300 ni] LT", nextDay: "[\u1ecc\u0300la ni] LT", nextWeek: "dddd [\u1eccs\u1eb9\u0300 to\u0301n'b\u1ecd] [ni] LT", lastDay: "[A\u0300na ni] LT", lastWeek: "dddd [\u1eccs\u1eb9\u0300 to\u0301l\u1ecd\u0301] [ni] LT", sameElse: "L" }, relativeTime: { future: "ni\u0301 %s", past: "%s k\u1ecdja\u0301", s: "i\u0300s\u1eb9ju\u0301 aaya\u0301 die", ss: "aaya\u0301 %d", m: "i\u0300s\u1eb9ju\u0301 kan", mm: "i\u0300s\u1eb9ju\u0301 %d", h: "wa\u0301kati kan", hh: "wa\u0301kati %d", d: "\u1ecdj\u1ecd\u0301 kan", dd: "\u1ecdj\u1ecd\u0301 %d", M: "osu\u0300 kan", MM: "osu\u0300 %d", y: "\u1ecddu\u0301n kan", yy: "\u1ecddu\u0301n %d" }, dayOfMonthOrdinalParse: /\u1ecdj\u1ecd\u0301\s\d{1,2}/, ordinal: "\u1ecdj\u1ecd\u0301 %d", week: { dow: 1, doy: 4 } }), l.defineLocale("zh-cn", { months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"), weekdaysShort: "\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"), weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5e74M\u6708D\u65e5", LLL: "YYYY\u5e74M\u6708D\u65e5Ah\u70b9mm\u5206", LLLL: "YYYY\u5e74M\u6708D\u65e5ddddAh\u70b9mm\u5206", l: "YYYY/M/D", ll: "YYYY\u5e74M\u6708D\u65e5", lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm", llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm" }, meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/, meridiemHour: function (e, a) { return 12 === e && (e = 0), "\u51cc\u6668" === a || "\u65e9\u4e0a" === a || "\u4e0a\u5348" === a ? e : "\u4e0b\u5348" === a || "\u665a\u4e0a" === a ? e + 12 : 11 <= e ? e : e + 12 }, meridiem: function (e, a, t) { var s = 100 * e + a; return s < 600 ? "\u51cc\u6668" : s < 900 ? "\u65e9\u4e0a" : s < 1130 ? "\u4e0a\u5348" : s < 1230 ? "\u4e2d\u5348" : s < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a" }, calendar: { sameDay: "[\u4eca\u5929]LT", nextDay: "[\u660e\u5929]LT", nextWeek: "[\u4e0b]ddddLT", lastDay: "[\u6628\u5929]LT", lastWeek: "[\u4e0a]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u5468)/, ordinal: function (e, a) { switch (a) { case "d": case "D": case "DDD": return e + "\u65e5"; case "M": return e + "\u6708"; case "w": case "W": return e + "\u5468"; default: return e } }, relativeTime: { future: "%s\u5185", past: "%s\u524d", s: "\u51e0\u79d2", ss: "%d \u79d2", m: "1 \u5206\u949f", mm: "%d \u5206\u949f", h: "1 \u5c0f\u65f6", hh: "%d \u5c0f\u65f6", d: "1 \u5929", dd: "%d \u5929", M: "1 \u4e2a\u6708", MM: "%d \u4e2a\u6708", y: "1 \u5e74", yy: "%d \u5e74" }, week: { dow: 1, doy: 4 } }), l.defineLocale("zh-hk", { months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"), weekdaysShort: "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"), weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5e74M\u6708D\u65e5", LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm", LLLL: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm", l: "YYYY/M/D", ll: "YYYY\u5e74M\u6708D\u65e5", lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm", llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm" }, meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/, meridiemHour: function (e, a) { return 12 === e && (e = 0), "\u51cc\u6668" === a || "\u65e9\u4e0a" === a || "\u4e0a\u5348" === a ? e : "\u4e2d\u5348" === a ? 11 <= e ? e : e + 12 : "\u4e0b\u5348" === a || "\u665a\u4e0a" === a ? e + 12 : void 0 }, meridiem: function (e, a, t) { var s = 100 * e + a; return s < 600 ? "\u51cc\u6668" : s < 900 ? "\u65e9\u4e0a" : s < 1130 ? "\u4e0a\u5348" : s < 1230 ? "\u4e2d\u5348" : s < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a" }, calendar: { sameDay: "[\u4eca\u5929]LT", nextDay: "[\u660e\u5929]LT", nextWeek: "[\u4e0b]ddddLT", lastDay: "[\u6628\u5929]LT", lastWeek: "[\u4e0a]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/, ordinal: function (e, a) { switch (a) { case "d": case "D": case "DDD": return e + "\u65e5"; case "M": return e + "\u6708"; case "w": case "W": return e + "\u9031"; default: return e } }, relativeTime: { future: "%s\u5167", past: "%s\u524d", s: "\u5e7e\u79d2", ss: "%d \u79d2", m: "1 \u5206\u9418", mm: "%d \u5206\u9418", h: "1 \u5c0f\u6642", hh: "%d \u5c0f\u6642", d: "1 \u5929", dd: "%d \u5929", M: "1 \u500b\u6708", MM: "%d \u500b\u6708", y: "1 \u5e74", yy: "%d \u5e74" } }), l.defineLocale("zh-tw", { months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"), weekdaysShort: "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"), weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5e74M\u6708D\u65e5", LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm", LLLL: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm", l: "YYYY/M/D", ll: "YYYY\u5e74M\u6708D\u65e5", lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm", llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm" }, meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/, meridiemHour: function (e, a) { return 12 === e && (e = 0), "\u51cc\u6668" === a || "\u65e9\u4e0a" === a || "\u4e0a\u5348" === a ? e : "\u4e2d\u5348" === a ? 11 <= e ? e : e + 12 : "\u4e0b\u5348" === a || "\u665a\u4e0a" === a ? e + 12 : void 0 }, meridiem: function (e, a, t) { var s = 100 * e + a; return s < 600 ? "\u51cc\u6668" : s < 900 ? "\u65e9\u4e0a" : s < 1130 ? "\u4e0a\u5348" : s < 1230 ? "\u4e2d\u5348" : s < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a" }, calendar: { sameDay: "[\u4eca\u5929] LT", nextDay: "[\u660e\u5929] LT", nextWeek: "[\u4e0b]dddd LT", lastDay: "[\u6628\u5929] LT", lastWeek: "[\u4e0a]dddd LT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/, ordinal: function (e, a) { switch (a) { case "d": case "D": case "DDD": return e + "\u65e5"; case "M": return e + "\u6708"; case "w": case "W": return e + "\u9031"; default: return e } }, relativeTime: { future: "%s\u5167", past: "%s\u524d", s: "\u5e7e\u79d2", ss: "%d \u79d2", m: "1 \u5206\u9418", mm: "%d \u5206\u9418", h: "1 \u5c0f\u6642", hh: "%d \u5c0f\u6642", d: "1 \u5929", dd: "%d \u5929", M: "1 \u500b\u6708", MM: "%d \u500b\u6708", y: "1 \u5e74", yy: "%d \u5e74" } }), l.locale("en"), l });
(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}function i(t){for(var e,i;t.length&&t[0]!==document;){if(e=t.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}function s(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=n(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function n(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",i,o)}function o(){t.datepicker._isDisabledDatepicker(p.inline?p.dpDiv.parent()[0]:p.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function a(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}function r(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.ui=t.ui||{},t.ui.version="1.12.1";var h=0,l=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},h=e.split(".")[0];e=e.split(".")[1];var l=h+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][l.toLowerCase()]=function(e){return!!t.data(e,l)},t[h]=t[h]||{},n=t[h][e],o=t[h][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:h,widgetName:e,widgetFullName:l}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,s,n=l.call(arguments,1),o=0,a=n.length;a>o;o++)for(i in n[o])s=n[o][i],n[o].hasOwnProperty(i)&&void 0!==s&&(e[i]=t.isPlainObject(s)?t.isPlainObject(e[i])?t.widget.extend({},e[i],s):t.widget.extend({},s):s);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(n){var o="string"==typeof n,a=l.call(arguments,1),r=this;return o?this.length||"instance"!==n?this.each(function(){var i,o=t.data(this,s);return"instance"===n?(r=o,!1):o?t.isFunction(o[n])&&"_"!==n.charAt(0)?(i=o[n].apply(o,a),i!==o&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+n+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+n+"'")}):r=void 0:(a.length&&(n=t.widget.extend.apply(null,[n].concat(a))),this.each(function(){var e=t.data(this,s);e?(e.option(n||{}),e._init&&e._init()):t.data(this,s,new i(n,this))})),r}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=h++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+o.eventNamespace,u=h[2];u?n.on(l,u,r):i.on(l,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(c.test(t[0])?e/100:1),parseFloat(t[1])*(c.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,o=Math.max,a=Math.abs,r=/left|center|right/,h=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,u=/^\w+/,c=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,o=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return d.apply(this,arguments);n=t.extend({},n);var c,p,f,g,m,_,v=t(n.of),b=t.position.getWithinInfo(n.within),y=t.position.getScrollInfo(b),w=(n.collision||"flip").split(" "),k={};return _=s(v),v[0].preventDefault&&(n.at="left top"),p=_.width,f=_.height,g=_.offset,m=t.extend({},g),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):h.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=h.test(i[1])?i[1]:"center",t=l.exec(i[0]),e=l.exec(i[1]),k[this]=[t?t[0]:0,e?e[0]:0],n[this]=[u.exec(i[0])[0],u.exec(i[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===n.at[0]?m.left+=p:"center"===n.at[0]&&(m.left+=p/2),"bottom"===n.at[1]?m.top+=f:"center"===n.at[1]&&(m.top+=f/2),c=e(k.at,p,f),m.left+=c[0],m.top+=c[1],this.each(function(){var s,r,h=t(this),l=h.outerWidth(),u=h.outerHeight(),d=i(this,"marginLeft"),_=i(this,"marginTop"),x=l+d+i(this,"marginRight")+y.width,C=u+_+i(this,"marginBottom")+y.height,D=t.extend({},m),I=e(k.my,h.outerWidth(),h.outerHeight());"right"===n.my[0]?D.left-=l:"center"===n.my[0]&&(D.left-=l/2),"bottom"===n.my[1]?D.top-=u:"center"===n.my[1]&&(D.top-=u/2),D.left+=I[0],D.top+=I[1],s={marginLeft:d,marginTop:_},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](D,{targetWidth:p,targetHeight:f,elemWidth:l,elemHeight:u,collisionPosition:s,collisionWidth:x,collisionHeight:C,offset:[c[0]+I[0],c[1]+I[1]],my:n.my,at:n.at,within:b,elem:h})}),n.using&&(r=function(t){var e=g.left-D.left,i=e+p-l,s=g.top-D.top,r=s+f-u,c={target:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:h,left:D.left,top:D.top,width:l,height:u},horizontal:0>i?"left":e>0?"right":"center",vertical:0>r?"top":s>0?"bottom":"middle"};l>p&&p>a(e+i)&&(c.horizontal="center"),u>f&&f>a(s+r)&&(c.vertical="middle"),c.important=o(a(e),a(i))>o(a(s),a(r))?"horizontal":"vertical",n.using.call(this,t,c)}),h.offset(t.extend(D,{using:r}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,r=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,u=l-h,c=l+e.collisionWidth-r-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>u?(i=t.left+d+p+f+e.collisionWidth-r-o,(0>i||a(u)>i)&&(t.left+=d+p+f)):c>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||c>a(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,r=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,u=l-h,c=l+e.collisionHeight-r-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>u?(s=t.top+p+f+g+e.collisionHeight-r-o,(0>s||a(u)>s)&&(t.top+=p+f+g)):c>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-h,(i>0||c>a(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])}}),t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}}),t.ui.focusable=function(i,s){var n,o,a,r,h,l=i.nodeName.toLowerCase();return"area"===l?(n=i.parentNode,o=n.name,i.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap='#"+o+"']"),a.length>0&&a.is(":visible")):!1):(/^(input|select|textarea|button|object)$/.test(l)?(r=!i.disabled,r&&(h=t(i).closest("fieldset")[0],h&&(r=!h.disabled))):r="a"===l?i.href||s:s,r&&t(i).is(":visible")&&e(t(i)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout(function(){var i=e.data("ui-form-reset-instances");t.each(i,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],function(e,i){function s(e,i,s,o){return t.each(n,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?a["inner"+i].call(this):this.each(function(){t(this).css(o,s(this,e)+"px")})},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?a["outer"+i].call(this,e):this.each(function(){t(this).css(o,s(this,e,!0,n)+"px")})}}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=function(){var t=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;return function(e){return e.replace(t,"\\$1")}}(),t.fn.labels=function(){var e,i,s,n,o;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),s=this.attr("id"),s&&(e=this.eq(0).parents().last(),o=e.add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(s)+"']",n=n.add(o.find(i).addBack(i))),this.pushStack(n))},t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),s=null!=i;return(!s||i>=0)&&t.ui.focusable(e,s)}}),t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var u=!1;t(document).on("mouseup",function(){u=!1}),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!u){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,n="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),u=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,u=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;o.length>n;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}},t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(this._blurActiveElement(e),this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]),s=t(e.target);s.closest(i).length||t.ui.safeBlur(i)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper),n=s?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options,o=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)
},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,n,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),h=t.pageX,l=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,h=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(h=this.originalPageX),"x"===a.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,s){var n=t.extend({},i,{item:s.element});s.sortables=[],t(s.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,n))})},stop:function(e,i,s){var n=t.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,t.each(s.sortables,function(){var t=this;t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,n))})},drag:function(e,i,s){t.each(s.sortables,function(){var n=!1,o=this;o.positionAbs=s.positionAbs,o.helperProportions=s.helperProportions,o.offset.click=s.offset.click,o._intersectsWith(o.containerCache)&&(n=!0,t.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==o&&this._intersectsWith(this.containerCache)&&t.contains(o.element[0],this.element[0])&&(n=!1),n})),n?(o.isOver||(o.isOver=1,s._parent=i.helper.parent(),o.currentItem=i.helper.appendTo(o.element).data("ui-sortable-item",!0),o.options._helper=o.options.helper,o.options.helper=function(){return i.helper[0]},e.target=o.currentItem[0],o._mouseCapture(e,!0),o._mouseStart(e,!0,!0),o.offset.click.top=s.offset.click.top,o.offset.click.left=s.offset.click.left,o.offset.parent.left-=s.offset.parent.left-o.offset.parent.left,o.offset.parent.top-=s.offset.parent.top-o.offset.parent.top,s._trigger("toSortable",e),s.dropped=o.element,t.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,o.fromOutside=s),o.currentItem&&(o._mouseDrag(e),i.position=o.position)):o.isOver&&(o.isOver=0,o.cancelHelperRemoval=!0,o.options._revert=o.options.revert,o.options.revert=!1,o._trigger("out",e,o._uiHash(o)),o._mouseStop(e,!0),o.options.revert=o.options._revert,o.options.helper=o.options._helper,o.placeholder&&o.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(e),i.position=s._generatePosition(e,!0),s._trigger("fromSortable",e),s.dropped=!1,t.each(s.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,s){var n=t("body"),o=s.options;n.css("cursor")&&(o._cursor=n.css("cursor")),n.css("cursor",o.cursor)},stop:function(e,i,s){var n=s.options;n._cursor&&t("body").css("cursor",n._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("opacity")&&(o._opacity=n.css("opacity")),n.css("opacity",o.opacity)},stop:function(e,i,s){var n=s.options;n._opacity&&t(i.helper).css("opacity",n._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,s){var n=s.options,o=!1,a=s.scrollParentNotHidden[0],r=s.document[0];a!==r&&"HTML"!==a.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+a.offsetHeight-e.pageY<n.scrollSensitivity?a.scrollTop=o=a.scrollTop+n.scrollSpeed:e.pageY-s.overflowOffset.top<n.scrollSensitivity&&(a.scrollTop=o=a.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+a.offsetWidth-e.pageX<n.scrollSensitivity?a.scrollLeft=o=a.scrollLeft+n.scrollSpeed:e.pageX-s.overflowOffset.left<n.scrollSensitivity&&(a.scrollLeft=o=a.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(e.pageY-t(r).scrollTop()<n.scrollSensitivity?o=t(r).scrollTop(t(r).scrollTop()-n.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<n.scrollSensitivity&&(o=t(r).scrollTop(t(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(e.pageX-t(r).scrollLeft()<n.scrollSensitivity?o=t(r).scrollLeft(t(r).scrollLeft()-n.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<n.scrollSensitivity&&(o=t(r).scrollLeft(t(r).scrollLeft()+n.scrollSpeed)))),o!==!1&&t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(s,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,s){var n=s.options;s.snapElements=[],t(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var e=t(this),i=e.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,s){var n,o,a,r,h,l,u,c,d,p,f=s.options,g=f.snapTolerance,m=i.offset.left,_=m+s.helperProportions.width,v=i.offset.top,b=v+s.helperProportions.height;for(d=s.snapElements.length-1;d>=0;d--)h=s.snapElements[d].left-s.margins.left,l=h+s.snapElements[d].width,u=s.snapElements[d].top-s.margins.top,c=u+s.snapElements[d].height,h-g>_||m>l+g||u-g>b||v>c+g||!t.contains(s.snapElements[d].item.ownerDocument,s.snapElements[d].item)?(s.snapElements[d].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(n=g>=Math.abs(u-b),o=g>=Math.abs(c-v),a=g>=Math.abs(h-_),r=g>=Math.abs(l-m),n&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:c,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||o||a||r,"outer"!==f.snapMode&&(n=g>=Math.abs(u-v),o=g>=Math.abs(c-b),a=g>=Math.abs(h-m),r=g>=Math.abs(l-_),n&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:c-s.helperProportions.height,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[d].snapping&&(n||o||a||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=n||o||a||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,s){var n,o=s.options,a=t.makeArray(t(o.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});a.length&&(n=parseInt(t(a[0]).css("zIndex"),10)||0,t(a).each(function(e){t(this).css("zIndex",n+e)}),this.css("zIndex",n+a.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("zIndex")&&(o._zIndex=n.css("zIndex")),n.css("zIndex",o.zIndex)},stop:function(e,i,s){var n=s.options;n._zIndex&&t(i.helper).css("zIndex",n._zIndex)}}),t.ui.draggable,t.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s)},this.proportions=function(){return arguments.length?(e=arguments[0],void 0):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this._addClass("ui-droppable")},_addToManager:function(e){t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this)},_splice:function(t){for(var e=0;t.length>e;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope];this._splice(e)},_setOption:function(e,i){if("accept"===e)this.accept=t.isFunction(i)?i:function(t){return t.is(i)};else if("scope"===e){var s=t.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(e,i)},_activate:function(e){var i=t.ui.ddmanager.current;this._addActiveClass(),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this._removeActiveClass(),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._addHoverClass(),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeHoverClass(),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=t(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&c(s,t.extend(i,{offset:i.element.offset()}),i.options.tolerance,e)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});var c=t.ui.intersect=function(){function t(t,e,i){return t>=e&&e+i>t}return function(e,i,s,n){if(!i.offset)return!1;var o=(e.positionAbs||e.position.absolute).left+e.margins.left,a=(e.positionAbs||e.position.absolute).top+e.margins.top,r=o+e.helperProportions.width,h=a+e.helperProportions.height,l=i.offset.left,u=i.offset.top,c=l+i.proportions().width,d=u+i.proportions().height;switch(s){case"fit":return o>=l&&c>=r&&a>=u&&d>=h;case"intersect":return o+e.helperProportions.width/2>l&&c>r-e.helperProportions.width/2&&a+e.helperProportions.height/2>u&&d>h-e.helperProportions.height/2;case"pointer":return t(n.pageY,u,i.proportions().height)&&t(n.pageX,l,i.proportions().width);case"touch":return(a>=u&&d>=a||h>=u&&d>=h||u>a&&h>d)&&(o>=l&&c>=o||r>=l&&c>=r||l>o&&r>c);default:return!1}}}();t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;o.length>s;s++)if(!(o[s].options.disabled||e&&!o[s].accept.call(o[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===o[s].element[0]){o[s].proportions().height=0;continue t}o[s].visible="none"!==o[s].element.css("display"),o[s].visible&&("mousedown"===a&&o[s]._activate.call(o[s],i),o[s].offset=o[s].element.offset(),o[s].proportions({width:o[s].element[0].offsetWidth,height:o[s].element[0].offsetHeight}))}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&c(e,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").on("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,o,a=c(e,this,this.options.tolerance,i),r=!a&&this.isover?"isout":a&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,o=this.element.parents(":data(ui-droppable)").filter(function(){return t(this).droppable("instance").options.scope===n}),o.length&&(s=t(o[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").off("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}},t.uiBackCompat!==!1&&t.widget("ui.droppable",t.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}}),t.ui.droppable,t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n)},_create:function(){var e,i=this.options,s=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",function(){i.disabled||(s._removeClass("ui-resizable-autohide"),s._handles.show())}).on("mouseleave",function(){i.disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles();break;default:}},_setupHandles:function(){var e,i,s,n,o,a=this.options,r=this;if(this.handles=a.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),s=this.handles.split(","),this.handles={},i=0;s.length>i;i++)e=t.trim(s[i]),n="ui-resizable-"+e,o=t("<div>"),this._addClass(o,"ui-resizable-handle "+n),o.css({zIndex:a.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.append(o);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:r._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){r.resizing||(this.className&&(o=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),r.axis=o&&o[1]?o[1]:"se")}),a.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(e){var i,s,n,o=this.options,a=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),o.containment&&(i+=t(o.containment).scrollLeft()||0,s+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===n?this.axis+"-resize":n),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,s,n=this.originalMousePosition,o=this.axis,a=e.pageX-n.left||0,r=e.pageY-n.top||0,h=this._change[o];return this._updatePrevProperties(),h?(i=h.apply(this,[e,a,r]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:u.sizeDiff.height,o=s?0:u.sizeDiff.width,a={width:u.helper.width()-o,height:u.helper.height()-n},r=parseFloat(u.element.css("left"))+(u.position.left-u.originalPosition.left)||null,h=parseFloat(u.element.css("top"))+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(t.extend(a,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,n,o,a=this.options;o={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,s=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,n=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),s>o.minHeight&&(o.minHeight=s),o.maxWidth>i&&(o.maxWidth=i),o.maxHeight>n&&(o.maxHeight=n)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,h=this.originalPosition.top+this.originalSize.height,l=/sw|nw|w/.test(i),u=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&l&&(t.left=r-e.minWidth),s&&l&&(t.left=r-e.maxWidth),a&&u&&(t.top=h-e.minHeight),n&&u&&(t.top=h-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],n=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];4>e;e++)i[e]=parseFloat(s[e])||0,i[e]+=parseFloat(n[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;this._proportionallyResizeElements.length>e;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-a},l=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,u=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,s,n,o,a,r,h=t(this).resizable("instance"),l=h.options,u=h.element,c=l.containment,d=c instanceof t?c.get(0):/parent/.test(c)?u.parent().get(0):c;d&&(h.containerElement=t(d),/document/.test(c)||c===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,s){i[t]=h._num(e.css("padding"+s))}),h.containerOffset=e.offset(),h.containerPosition=e.position(),h.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,o=h.containerSize.width,a=h._hasScroll(d,"left")?d.scrollWidth:o,r=h._hasScroll(d)?d.scrollHeight:n,h.parentData={element:d,left:s.left,top:s.top,width:a,height:r}))},resize:function(e){var i,s,n,o,a=t(this).resizable("instance"),r=a.options,h=a.containerOffset,l=a.position,u=a._aspectRatio||e.shiftKey,c={top:0,left:0},d=a.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(c=h),l.left<(a._helper?h.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-h.left:a.position.left-c.left),u&&(a.size.height=a.size.width/a.aspectRatio,p=!1),a.position.left=r.helper?h.left:0),l.top<(a._helper?h.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-h.top:a.position.top),u&&(a.size.width=a.size.height*a.aspectRatio,p=!1),a.position.top=a._helper?h.top:0),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),n&&o?(a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top):(a.offset.left=a.element.offset().left,a.offset.top=a.element.offset().top),i=Math.abs(a.sizeDiff.width+(a._helper?a.offset.left-c.left:a.offset.left-h.left)),s=Math.abs(a.sizeDiff.height+(a._helper?a.offset.top-c.top:a.offset.top-h.top)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,u&&(a.size.height=a.size.width/a.aspectRatio,p=!1)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,u&&(a.size.width=a.size.height*a.aspectRatio,p=!1)),p||(a.position.left=a.prevPosition.left,a.position.top=a.prevPosition.top,a.size.width=a.prevSize.width,a.size.height=a.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),h=a.outerWidth()-e.sizeDiff.width,l=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options;t(i.alsoResize).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:parseFloat(e.css("left")),top:parseFloat(e.css("top"))})})},resize:function(e,i){var s=t(this).resizable("instance"),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0};
t(n.alsoResize).each(function(){var e=t(this),s=t(this).data("ui-resizable-alsoresize"),n={},o=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(o,function(t,e){var i=(s[e]||0)+(r[e]||0);i&&i>=0&&(n[e]=i||null)}),e.css(n)})},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),t.uiBackCompat!==!1&&"string"==typeof e.options.ghost&&e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),s=i.options,n=i.size,o=i.originalSize,a=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,u=h[1]||1,c=Math.round((n.width-o.width)/l)*l,d=Math.round((n.height-o.height)/u)*u,p=o.width+c,f=o.height+d,g=s.maxWidth&&p>s.maxWidth,m=s.maxHeight&&f>s.maxHeight,_=s.minWidth&&s.minWidth>p,v=s.minHeight&&s.minHeight>f;s.grid=h,_&&(p+=l),v&&(f+=u),g&&(p-=l),m&&(f-=u),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=a.top-d):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=a.left-c):((0>=f-u||0>=p-l)&&(e=i._getPaddingPlusBorderDimensions(this)),f-u>0?(i.size.height=f,i.position.top=a.top-d):(f=u-e.height,i.size.height=f,i.position.top=a.top+o.height-f),p-l>0?(i.size.width=p,i.position.left=a.left-c):(p=l-e.width,i.size.width=p,i.position.left=a.left+o.width-p))}}),t.ui.resizable,t.widget("ui.selectable",t.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e=this;this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e.elementPos=t(e.element[0]).offset(),e.selectees=t(e.options.filter,e.element[0]),e._addClass(e.selectees,"ui-selectee"),e.selectees.each(function(){var i=t(this),s=i.offset(),n={left:s.left-e.elementPos.left,top:s.top-e.elementPos.top};t.data(this,"selectable-item",{element:this,$element:i,left:n.left,top:n.top,right:n.left+i.outerWidth(),bottom:n.top+i.outerHeight(),startselected:!1,selected:i.hasClass("ui-selected"),selecting:i.hasClass("ui-selecting"),unselecting:i.hasClass("ui-unselecting")})})},this.refresh(),this._mouseInit(),this.helper=t("<div>"),this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()},_mouseStart:function(e){var i=this,s=this.options;this.opos=[e.pageX,e.pageY],this.elementPos=t(this.element[0]).offset(),this.options.disabled||(this.selectees=t(s.filter,this.element[0]),this._trigger("start",e),t(s.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=t.data(this,"selectable-item");s.startselected=!0,e.metaKey||e.ctrlKey||(i._removeClass(s.$element,"ui-selected"),s.selected=!1,i._addClass(s.$element,"ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",e,{unselecting:s.element}))}),t(e.target).parents().addBack().each(function(){var s,n=t.data(this,"selectable-item");return n?(s=!e.metaKey&&!e.ctrlKey||!n.$element.hasClass("ui-selected"),i._removeClass(n.$element,s?"ui-unselecting":"ui-selected")._addClass(n.$element,s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",e,{selecting:n.element}):i._trigger("unselecting",e,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,o=this.opos[0],a=this.opos[1],r=e.pageX,h=e.pageY;return o>r&&(i=r,r=o,o=i),a>h&&(i=h,h=a,a=i),this.helper.css({left:o,top:a,width:r-o,height:h-a}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),l=!1,u={};i&&i.element!==s.element[0]&&(u.left=i.left+s.elementPos.left,u.right=i.right+s.elementPos.left,u.top=i.top+s.elementPos.top,u.bottom=i.bottom+s.elementPos.top,"touch"===n.tolerance?l=!(u.left>r||o>u.right||u.top>h||a>u.bottom):"fit"===n.tolerance&&(l=u.left>o&&r>u.right&&u.top>a&&h>u.bottom),l?(i.selected&&(s._removeClass(i.$element,"ui-selected"),i.selected=!1),i.unselecting&&(s._removeClass(i.$element,"ui-unselecting"),i.unselecting=!1),i.selecting||(s._addClass(i.$element,"ui-selecting"),i.selecting=!0,s._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,s._addClass(i.$element,"ui-selected"),i.selected=!0):(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,i.startselected&&(s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(s._removeClass(i.$element,"ui-selected"),i.selected=!1,s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",e,{unselected:s.element})}),t(".ui-selecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-selecting")._addClass(s.$element,"ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",e,{selected:s.element})}),this._trigger("stop",e),this.helper.remove(),!1}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&e+i>t},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){var e=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),t.each(this.items,function(){e._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):void 0}),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-this.document.scrollTop()<a.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-a.scrollSpeed):this.window.height()-(e.pageY-this.document.scrollTop())<a.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+a.scrollSpeed)),e.pageX-this.document.scrollLeft()<a.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-a.scrollSpeed):this.window.width()-(e.pageX-this.document.scrollLeft())<a.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp(new t.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,u=this.offset.click.left,c="x"===this.options.axis||s+l>r&&h>s+l,d="y"===this.options.axis||e+u>o&&a>e+u,p=c&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var e,i,s="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),n="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),o=s&&n;return o?(e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection(),this.floating?"right"===i||"down"===e?2:1:e&&("down"===e?2:1)):!1},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&e||"up"===s&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var s,n,o,a,r=[],h=[],l=this._connectWith();if(l&&e)for(s=l.length-1;s>=0;s--)for(o=t(l[s],this.document[0]),n=o.length-1;n>=0;n--)a=t.data(o[n],this.widgetFullName),a&&a!==this&&!a.options.disabled&&h.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(h.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,h,l,u=this.items,c=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i],this.document[0]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(c.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=c.length-1;i>=0;i--)for(a=c[i][1],r=c[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",a),u.push({item:h,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,o;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]);return e._addClass(n,"ui-sortable-placeholder",i||e.currentItem[0].className)._removeClass(n,"ui-sortable-helper"),"tbody"===s?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("<tr>",e.document[0]).appendTo(n)):"tr"===s?e._createTrPlaceholder(e.currentItem,n):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_createTrPlaceholder:function(e,i){var s=this;e.children().each(function(){t("<td>&#160;</td>",s.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(e){var i,s,n,o,a,r,h,l,u,c,d=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,o=null,u=d.floating||this._isFloating(this.currentItem),a=u?"left":"top",r=u?"width":"height",c=u?"pageX":"pageY",s=this.items.length-1;s>=0;s--)t.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[a],l=!1,e[c]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(e[c]-h)&&(n=Math.abs(e[c]-h),o=this.items[s],this.direction=l?"up":"down"));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;o?this._rearrange(e,o,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}}),t.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e,i,s=this.options.icons;s&&(e=t("<span>"),this._addClass(e,"ui-accordion-header-icon","ui-icon "+s.header),e.prependTo(this.headers),i=this.active.children(".ui-accordion-header-icon"),this._removeClass(i,s.header)._addClass(i,null,s.activeHeader)._addClass(this.headers,"ui-accordion-icons"))
},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),void 0)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!t)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:o=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[s-1]}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),t(o).trigger("focus"),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().trigger("focus")},refresh:function(){var e=this.options;this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var e=t(this),i=e.uniqueId().attr("id"),s=e.next(),n=s.uniqueId().attr("id");e.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(e=n.height(),this.element.siblings(":visible").each(function(){var i=t(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(e-=i.outerHeight(!0))}),this.headers.each(function(){e-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===s&&(e=0,this.headers.next().each(function(){var i=t(this).is(":visible");i||t(this).show(),e=Math.max(e,t(this).css("height","").height()),i||t(this).hide()}).height(e))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i,s,n=this.options,o=this.active,a=t(e.currentTarget),r=a[0]===o[0],h=r&&n.collapsible,l=h?t():a.next(),u=o.next(),c={oldHeader:o,oldPanel:u,newHeader:h?t():a,newPanel:l};e.preventDefault(),r&&!n.collapsible||this._trigger("beforeActivate",e,c)===!1||(n.active=h?!1:this.headers.index(a),this.active=r?t():a,this._toggle(c),this._removeClass(o,"ui-accordion-header-active","ui-state-active"),n.icons&&(i=o.children(".ui-accordion-header-icon"),this._removeClass(i,null,n.icons.activeHeader)._addClass(i,null,n.icons.header)),r||(this._removeClass(a,"ui-accordion-header-collapsed")._addClass(a,"ui-accordion-header-active","ui-state-active"),n.icons&&(s=a.children(".ui-accordion-header-icon"),this._removeClass(s,null,n.icons.header)._addClass(s,null,n.icons.activeHeader)),this._addClass(a.next(),"ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(t(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,e,i){var s,n,o,a=this,r=0,h=t.css("box-sizing"),l=t.length&&(!e.length||t.index()<e.index()),u=this.options.animate||{},c=l&&u.down||u,d=function(){a._toggleComplete(i)};return"number"==typeof c&&(o=c),"string"==typeof c&&(n=c),n=n||c.easing||u.easing,o=o||c.duration||u.duration,e.length?t.length?(s=t.show().outerHeight(),e.animate(this.hideProps,{duration:o,easing:n,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(this.showProps,{duration:o,easing:n,complete:d,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?"content-box"===h&&(r+=i.now):"content"!==a.options.heightStyle&&(i.now=Math.round(s-e.outerHeight()-r),r=0)}}),void 0):e.animate(this.hideProps,o,n,d):t.animate(this.showProps,o,n,d)},_toggleComplete:function(t){var e=t.oldPanel,i=e.prev();this._removeClass(e,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),t.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),s=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),s=t(e.currentTarget);i[0]===s[0]&&(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,s))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){var i=!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&&this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var i,s,n,o,a=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:a=!1,s=this.previousFilter||"",o=!1,n=e.keyCode>=96&&105>=e.keyCode?""+(e.keyCode-96):String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),n===s?o=!0:n=s+n,i=this._filterMenuItems(n),i=o&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(e.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(e,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}a&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,s,n,o,a=this,r=this.options.icons.submenu,h=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),s=h.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),s=t("<span>").data("ui-menu-submenu-caret",!0);a._addClass(s,"ui-menu-icon","ui-icon "+r),i.attr("aria-haspopup","true").prepend(s),e.attr("aria-labelledby",i.attr("id"))}),this._addClass(s,"ui-menu","ui-widget ui-widget-content ui-front"),e=h.add(this.element),i=e.find(this.options.items),i.not(".ui-menu-item").each(function(){var e=t(this);a._isDivider(e)&&a._addClass(e,"ui-menu-divider","ui-widget-content")}),n=i.not(".ui-menu-item, .ui-menu-divider"),o=n.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(n,"ui-menu-item")._addClass(o,"ui-menu-item-wrapper"),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,s,n;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(e),void 0)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first())),void 0):(this.next(e),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))})}}),t.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;this.isMultiLine=o||!a&&this._isContentEditable(this.element),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,void 0;e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),void 0):(this._searchTimeout(t),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(t),this._change(t),void 0)}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(e,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:n})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&t.trim(s).length&&(this.liveRegion.children().hide(),t("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay(function(){this.previous=n,this.selectedItem=s})),!1!==this._trigger("select",e,{item:s})&&this._value(s.value),this.term=this._value(),this.close(e),this.selectedItem=s}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),s=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!s)&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[t](e),void 0):(this.search(null,e),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete;var d=/ui-corner-([a-z]){2,6}/g;t.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[];t.each(this.options.items,function(s,n){var o,a={};return n?"controlgroupLabel"===s?(o=e.element.find(n),o.each(function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),e._addClass(o,null,"ui-widget ui-widget-content ui-state-default"),i=i.concat(o.get()),void 0):(t.fn[s]&&(a=e["_"+s+"Options"]?e["_"+s+"Options"]("middle"):{classes:{}},e.element.find(n).each(function(){var n=t(this),o=n[s]("instance"),r=t.widget.extend({},a);if("button"!==s||!n.parent(".ui-spinner").length){o||(o=n[s]()[s]("instance")),o&&(r.classes=e._resolveClassesValues(r.classes,o)),n[s](r);var h=n[s]("widget");t.data(h[0],"ui-controlgroup-data",o?o:n[s]("instance")),i.push(h[0])}})),void 0):void 0}),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each(function(){var i=t(this),s=i.data("ui-controlgroup-data");s&&s[e]&&s[e]()})},_updateCornerClass:function(t,e){var i="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",s=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,i),this._addClass(t,null,s)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,s={classes:{}};return s.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],s},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:e?"auto":!1,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(e,i){var s={};return t.each(e,function(n){var o=i.options.classes[n]||"";o=t.trim(o.replace(d,"")),s[n]=(o+" "+e[n]).replace(/\s+/g," ")}),s},_setOption:function(t,e){return"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"===t?(this._callChildMethod(e?"disable":"enable"),void 0):(this.refresh(),void 0)},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],function(t,s){var n=e[s]().data("ui-controlgroup-data");if(n&&i["_"+n.widgetName+"Options"]){var o=i["_"+n.widgetName+"Options"](1===e.length?"only":s);o.classes=i._resolveClassesValues(o.classes,n),n.element[n.widgetName](o)}else i._updateCornerClass(e[s](),s)}),this._callChildMethod("refresh"))}}),t.widget("ui.checkboxradio",[t.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var e,i,s=this,n=this._super()||{};return this._readType(),i=this.element.labels(),this.label=t(i[i.length-1]),this.label.length||t.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){s.originalLabel+=3===this.nodeType?t(this).text():this.outerHTML}),this.originalLabel&&(n.label=this.originalLabel),e=this.element[0].disabled,null!=e&&(n.disabled=e),n},_create:function(){var t=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),t&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var e=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===e&&/radio|checkbox/.test(this.type)||t.error("Can't create checkboxradio on element.nodeName="+e+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var e,i=this.element[0].name,s="input[name='"+t.ui.escapeSelector(i)+"']";return i?(e=this.form.length?t(this.form[0].elements).filter(s):t(s).filter(function(){return 0===t(this).form().length}),e.not(this.element)):t([])},_toggleClasses:function(){var e=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",e)._toggleClass(this.icon,null,"ui-icon-blank",!e),"radio"===this.type&&this._getRadioGroup().each(function(){var e=t(this).checkboxradio("instance");e&&e._removeClass(e.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(t,e){return"label"!==t||e?(this._super(t,e),"disabled"===t?(this._toggleClass(this.label,null,"ui-state-disabled",e),this.element[0].disabled=e,void 0):(this.refresh(),void 0)):void 0},_updateIcon:function(e){var i="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=t("<span>"),this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(i+=e?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,e?"ui-icon-blank":"ui-icon-check")):i+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",i),e||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)
},_updateLabel:function(){var t=this.label.contents().not(this.element[0]);this.icon&&(t=t.not(this.icon[0])),this.iconSpace&&(t=t.not(this.iconSpace[0])),t.remove(),this.label.append(this.options.label)},refresh:function(){var t=this.element[0].checked,e=this.element[0].disabled;this._updateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),null!==this.options.label&&this._updateLabel(),e!==this.options.disabled&&this._setOptions({disabled:e})}}]),t.ui.checkboxradio,t.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,e=this._super()||{};return this.isInput=this.element.is("input"),t=this.element[0].disabled,null!=t&&(e.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(e.label=this.originalLabel),e},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(e){e.keyCode===t.ui.keyCode.SPACE&&(e.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(e,i){var s="iconPosition"!==e,n=s?this.options.iconPosition:i,o="top"===n||"bottom"===n;this.icon?s&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),s&&this._addClass(this.icon,null,i),this._attachIcon(n),o?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(n))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var e=void 0===t.showLabel?this.options.showLabel:t.showLabel,i=void 0===t.icon?this.options.icon:t.icon;e||i||(t.showLabel=!0),this._super(t)},_setOption:function(t,e){"icon"===t&&(e?this._updateIcon(t,e):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,e),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!e),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(e):(this.element.html(e),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,e),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",e),this.element[0].disabled=e,e&&this.element.blur())},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),t.uiBackCompat!==!1&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,e){return"text"===t?(this._super("showLabel",e),void 0):("showLabel"===t&&(this.options.text=e),"icon"===t&&(this.options.icons.primary=e),"icons"===t&&(e.primary?(this._super("icon",e.primary),this._super("iconPosition","beginning")):e.secondary&&(this._super("icon",e.secondary),this._super("iconPosition","end"))),this._superApply(arguments),void 0)}}),t.fn.button=function(e){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?e.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(t.fn.button),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),t.ui.button,t.extend(t.ui,{datepicker:{version:"1.12.1"}});var p;t.extend(s.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return a(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,o;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),n),o.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o)},_newInst:function(e,i){var s=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?n(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.on("focus",this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,n,o){var r,h,l,u,c,d=this._dialogInst;return d||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),a(d.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,c=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+u,l/2-150+c]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),p===n&&(p=null))},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,i,s){var n,o,r,h,l=this._getInst(e);return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):l?"all"===i?t.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),o=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),a(l.settings,n),null!==r&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,r)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),l),this._autoSize(l),this._setDate(l,o),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),n[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),i=t.datepicker._get(o,"onSelect"),i?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,s,n=t.datepicker._getInst(e.target);return t.datepicker._get(n,"constrainInput")?(i=t.datepicker._possibleChars(t.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var s,n,o,r,h,l,u;s=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==s&&(t.datepicker._curInst.dpDiv.stop(!0,!0),s&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),n=t.datepicker._get(s,"beforeShow"),o=n?n.apply(e,[e,s]):{},o!==!1&&(a(s.settings,o),s.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(s),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),h={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,s.dpDiv.empty(),s.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(s),h=t.datepicker._checkOffset(s,h,r),s.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),s.inline||(l=t.datepicker._get(s,"showAnim"),u=t.datepicker._get(s,"duration"),s.dpDiv.css("z-index",i(t(e))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[l]?s.dpDiv.show(l,t.datepicker._get(s,"showOptions"),u):s.dpDiv[l||"show"](l?u:null),t.datepicker._shouldFocusInput(s)&&s.input.trigger("focus"),t.datepicker._curInst=s))}},_updateDatepicker:function(e){this.maxRows=4,p=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,s=this._getNumberOfMonths(e),n=s[1],a=17,r=e.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+o>l&&l>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,o,a=this._curInst;!a||e&&a!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(a,"showAnim"),s=this._get(a,"duration"),n=function(){t.datepicker._tidyDialog(a)},t.effects&&(t.effects.effect[i]||t.effects[i])?a.dpDiv.hide(i,t.datepicker._get(a,"showOptions"),s,n):a.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,o=this._get(a,"onClose"),o&&o.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+("M"===s?this._get(o,"showCurrentAtPos"):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o["selected"+("M"===s?"Month":"Year")]=o["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),s=this._get(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).val(n))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,s){if(null==e||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,o,a,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),c=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,d=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,g=-1,m=-1,_=-1,v=-1,b=!1,y=function(t){var i=e.length>n+1&&e.charAt(n+1)===t;return i&&n++,i},w=function(t){var e=y(t),s="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n="y"===t?s:1,o=RegExp("^\\d{"+n+","+s+"}"),a=i.substring(h).match(o);if(!a)throw"Missing number at position "+h;return h+=a[0].length,parseInt(a[0],10)},k=function(e,s,n){var o=-1,a=t.map(y(e)?n:s,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(a,function(t,e){var s=e[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(o=e[0],h+=s.length,!1):void 0}),-1!==o)return o+1;throw"Unknown name at position "+h},x=function(){if(i.charAt(h)!==e.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;e.length>n;n++)if(b)"'"!==e.charAt(n)||y("'")?x():b=!1;else switch(e.charAt(n)){case"d":_=w("d");break;case"D":k("D",c,d);break;case"o":v=w("o");break;case"m":m=w("m");break;case"M":m=k("M",p,f);break;case"y":g=w("y");break;case"@":r=new Date(w("@")),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"!":r=new Date((w("!")-this._ticksTo1970)/1e4),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"'":y("'")?x():b=!0;break;default:x()}if(i.length>h&&(a=i.substr(h),!/^\s+/.test(a)))throw"Extra/unparsed characters found in date: "+a;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=g?0:-100)),v>-1)for(m=1,_=v;;){if(o=this._getDaysInMonth(g,m-1),o>=_)break;m++,_-=o}if(r=this._daylightSavingAdjust(new Date(g,m-1,_)),r.getFullYear()!==g||r.getMonth()+1!==m||r.getDate()!==_)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s},u=function(t,e,i,s){return h(t)?s[e]:i[e]},c="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?c+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":c+=l("d",e.getDate(),2);break;case"D":c+=u("D",e.getDay(),n,o);break;case"o":c+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":c+=l("m",e.getMonth()+1,2);break;case"M":c+=u("M",e.getMonth(),a,r);break;case"y":c+=h("y")?e.getFullYear():(10>e.getFullYear()%100?"0":"")+e.getFullYear()%100;break;case"@":c+=e.getTime();break;case"!":c+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?c+="'":d=!0;break;default:c+=t.charAt(s)}return c},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(r){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=n.getFullYear(),a=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":a+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a))}l=h.exec(i)}return new Date(o,a,r)},a=null==i||""===i?s:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return a=a&&"Invalid Date"==""+a?s:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,o,a,r,h,l,u,c,d,p,f,g,m,_,v,b,y,w,k,x,C,D,I,T,P,M,S,H,O,z,A,N,E,W,F,L,R=new Date,B=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),Y=this._get(t,"isRTL"),j=this._get(t,"showButtonPanel"),q=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),V=this._getNumberOfMonths(t),U=this._get(t,"showCurrentAtPos"),X=this._get(t,"stepMonths"),$=1!==V[0]||1!==V[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(t,"min"),J=this._getMinMaxDate(t,"max"),Z=t.drawMonth-U,te=t.drawYear;if(0>Z&&(Z+=12,te--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-V[0]*V[1]+1,J.getDate())),e=Q&&Q>e?Q:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-X,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":q?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+X,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":q?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:B,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=j?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(Y?"":h)+"</div>":"",u=parseInt(this._get(t,"firstDay"),10),u=isNaN(u)?0:u,c=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),_=this._get(t,"showOtherMonths"),v=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;V[0]>k;k++){for(x="",this.maxRows=4,C=0;V[1]>C;C++){if(D=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),I=" ui-corner-all",T="",$){if(T+="<div class='ui-datepicker-group",V[1]>1)switch(C){case 0:T+=" ui-datepicker-group-first",I=" ui-corner-"+(Y?"right":"left");
break;case V[1]-1:T+=" ui-datepicker-group-last",I=" ui-corner-"+(Y?"left":"right");break;default:T+=" ui-datepicker-group-middle",I=""}T+="'>"}for(T+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+I+"'>"+(/all|left/.test(I)&&0===k?Y?o:s:"")+(/all|right/.test(I)&&0===k?Y?s:o:"")+this._generateMonthYearHeader(t,Z,te,Q,J,k>0||C>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",P=c?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)M=(w+u)%7,P+="<th scope='col'"+((w+u+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[M]+"'>"+p[M]+"</span></th>";for(T+=P+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),H=(this._getFirstDayOfMonth(te,Z)-u+7)%7,O=Math.ceil((H+S)/7),z=$?this.maxRows>O?this.maxRows:O:O,this.maxRows=z,A=this._daylightSavingAdjust(new Date(te,Z,1-H)),N=0;z>N;N++){for(T+="<tr>",E=c?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(A)+"</td>":"",w=0;7>w;w++)W=m?m.apply(t.input?t.input[0]:null,[A]):[!0,""],F=A.getMonth()!==Z,L=F&&!v||!W[0]||Q&&Q>A||J&&A>J,E+="<td class='"+((w+u+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(A.getTime()===D.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===A.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!_?"":" "+W[1]+(A.getTime()===G.getTime()?" "+this._currentClass:"")+(A.getTime()===B.getTime()?" ui-datepicker-today":""))+"'"+(F&&!_||!W[2]?"":" title='"+W[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+A.getMonth()+"' data-year='"+A.getFullYear()+"'")+">"+(F&&!_?"&#xa0;":L?"<span class='ui-state-default'>"+A.getDate()+"</span>":"<a class='ui-state-default"+(A.getTime()===B.getTime()?" ui-state-highlight":"")+(A.getTime()===G.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+A.getDate()+"</a>")+"</td>",A.setDate(A.getDate()+1),A=this._daylightSavingAdjust(A);T+=E+"</tr>"}Z++,Z>11&&(Z=0,te++),T+="</tbody></table>"+($?"</div>"+(V[0]>0&&C===V[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=T}y+=x}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var h,l,u,c,d,p,f,g,m=this._get(t,"changeMonth"),_=this._get(t,"changeYear"),v=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",u=0;12>u;u++)(!h||u>=s.getMonth())&&(!l||n.getMonth()>=u)&&(y+="<option value='"+u+"'"+(u===e?" selected='selected'":"")+">"+r[u]+"</option>");y+="</select>"}if(v||(b+=y+(!o&&m&&_?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!_)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(c=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(c[0]),g=Math.max(f,p(c[1]||"")),f=s?Math.max(f,s.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),v&&(b+=(!o&&m&&_?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.selectedYear+("Y"===i?e:0),n=t.selectedMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new s,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.12.1",t.datepicker,t.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+t(this).css("z-index")}).get(),o=Math.max.apply(null,n);return o>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",o+1),s=!0),s&&!i&&this._trigger("focus",e),s},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=t(t.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var t=this._focusedElement;t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).trigger("focus")},_keepFocus:function(e){function i(){var e=t.ui.safeActiveElement(this.document[0]),i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),void 0;if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay(function(){n.trigger("focus")}),e.preventDefault()):(this._delay(function(){s.trigger("focus")}),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:t("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(e,"ui-dialog-title"),this._title(e),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title?t.text(this.options.title):t.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this._removeClass(this.uiDialog,"ui-dialog-buttons"),void 0):(t.each(i,function(i,s){var n,o;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,o={icon:s.icon,iconPosition:s.iconPosition,showLabel:s.showLabel,icons:s.icons,text:s.text},delete s.click,delete s.icon,delete s.iconPosition,delete s.showLabel,delete s.icons,"boolean"==typeof s.text&&delete s.text,t("<button></button>",s).button(o).appendTo(e.uiButtonSet).on("click",function(){n.apply(e.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){i._addClass(t(this),"ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,o){var a=o.offset.left-i.document.scrollLeft(),r=o.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" "+"top"+(r>=0?"+":"")+r,of:i.window},i._removeClass(t(this),"ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(o))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,o=this.uiDialog.css("position"),a="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:a,start:function(s,n){i._addClass(t(this),"ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,o){var a=i.uiDialog.offset(),r=a.left-i.document.scrollLeft(),h=a.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(h>=0?"+":"")+h,of:i.window},i._removeClass(t(this),"ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(o))}}).css("position",o)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e);-1!==i&&e.splice(i,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var i=this,s=!1,n={};t.each(e,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(s=!0),t in i.resizableRelatedOptions&&(n[t]=e)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,i){var s,n,o=this.uiDialog;"disabled"!==e&&(this._super(e,i),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:t("<a>").text(""+this.options.closeText).html()}),"draggable"===e&&(s=o.is(":data(ui-draggable)"),s&&!i&&o.draggable("destroy"),!s&&i&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(n=o.is(":data(ui-resizable)"),n&&!i&&o.resizable("destroy"),n&&"string"==typeof i&&o.resizable("option","handles",i),n||i===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay(function(){e=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(t,e){"dialogClass"===t&&this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this._superApply(arguments)}}),t.ui.dialog,t.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=t("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()},value:function(t){return void 0===t?this.options.value:(this.options.value=this._constrainedValue(t),this._refreshValue(),void 0)},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).width(i.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,e===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}}),t.widget("ui.selectmenu",[t.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=t()},_drawButton:function(){var e,i=this,s=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=t("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),e=t("<span>").appendTo(this.button),this._addClass(e,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(s).appendTo(this.button),this.options.width!==!1&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){i._rendered||i._refreshMenu()})},_drawMenu:function(){var e=this;this.menu=t("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=t("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(t,i){t.preventDefault(),e._setSelection(),e._select(i.item.data("ui-selectmenu-item"),t)},focus:function(t,i){var s=i.item.data("ui-selectmenu-item");null!=e.focusIndex&&s.index!==e.focusIndex&&(e._trigger("focus",t,{item:s}),e.isOpen||e._select(s,t)),e.focusIndex=s.index,e.button.attr("aria-activedescendant",e.menuItems.eq(s.index).attr("id"))}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()},_refreshMenu:function(){var t,e=this.element.find("option");this.menu.empty(),this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,e.length&&(t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t)))},_position:function(){this.menuWrap.position(t.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(e){var i=t("<span>");return this._setText(i,e.label),this._addClass(i,"ui-selectmenu-text"),i},_renderMenu:function(e,i){var s=this,n="";t.each(i,function(i,o){var a;o.optgroup!==n&&(a=t("<li>",{text:o.optgroup}),s._addClass(a,"ui-selectmenu-optgroup","ui-menu-divider"+(o.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),a.appendTo(e),n=o.optgroup),s._renderItemData(e,o)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(e,i){var s=t("<li>"),n=t("<div>",{title:i.element.attr("title")});return i.disabled&&this._addClass(s,null,"ui-state-disabled"),this._setText(n,i.label),s.append(n).appendTo(e)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex).parent("li"):(i=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),n+=":not(.ui-state-disabled)"),s="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](n).eq(-1):i[t+"All"](n).eq(0),s.length&&this.menuInstance.focus(e,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t;this.range&&(window.getSelection?(t=window.getSelection(),t.removeAllRanges(),t.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(e){this.isOpen&&(t(e.target).closest(".ui-selectmenu-menu, #"+t.ui.escapeSelector(this.ids.button)).length||this.close(e))}},_buttonEvents:{mousedown:function(){var t;window.getSelection?(t=window.getSelection(),t.rangeCount&&(this.range=t.getRangeAt(0))):this.range=document.selection.createRange()},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(e){var i=!0;switch(e.keyCode){case t.ui.keyCode.TAB:case t.ui.keyCode.ESCAPE:this.close(e),i=!1;break;case t.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(e);break;case t.ui.keyCode.UP:e.altKey?this._toggle(e):this._move("prev",e);break;case t.ui.keyCode.DOWN:e.altKey?this._toggle(e):this._move("next",e);break;case t.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(e):this._toggle(e);break;case t.ui.keyCode.LEFT:this._move("prev",e);break;case t.ui.keyCode.RIGHT:this._move("next",e);break;case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:this._move("first",e);break;case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:this._move("last",e);break;default:this.menu.trigger(e),i=!1}i&&e.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex).parent("li");e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(t)),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){if("icons"===t){var i=this.button.find("span.ui-icon");this._removeClass(i,null,this.options.icons.button)._addClass(i,null,e.button)}this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"width"===t&&this._resizeButton()},_setOptionDisabled:function(t){this._super(t),this.menuInstance.option("disabled",t),this.button.attr("aria-disabled",t),this._toggleClass(this.button,null,"ui-state-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;return t===!1?(this.button.css("width",""),void 0):(null===t&&(t=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(t),void 0)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){var t=this._super();return t.disabled=this.element.prop("disabled"),t},_parseOptions:function(e){var i=this,s=[];e.each(function(e,n){s.push(i._parseOption(t(n),e))}),this.items=s},_parseOption:function(t,e){var i=t.parent("optgroup");return{element:t,index:e,value:t.val(),label:t.text(),optgroup:i.attr("label")||"",disabled:i.prop("disabled")||t.prop("disabled")}},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)}}]),t.widget("ui.slider",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle"),o="<span tabindex='0'></span>",a=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)a.push(o);this.handles=n.add(t(a.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e).attr("tabIndex",0)})},_createRange:function(){var e=this.options;e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=t("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===e.range||"max"===e.range)&&this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)
},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,o,a,r,h,l,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,o=t(this),a=e)}),r=this._start(e,a),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=a,this._addClass(o,null,"ui-state-active"),o.trigger("focus"),h=o.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-o.width()/2,top:e.pageY-h.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o)},_uiHash:function(t,e,i){var s={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(s.value=void 0!==e?e:this.values(t),s.values=i||this.values()),s},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var s,n,o=this.value(),a=this.values();this._hasMultipleValues()&&(n=this.values(e?0:1),o=this.values(e),2===this.options.values.length&&this.options.range===!0&&(i=0===e?Math.min(n,i):Math.max(n,i)),a[e]=i),i!==o&&(s=this._trigger("slide",t,this._uiHash(e,i,a)),s!==!1&&(this._hasMultipleValues()?this.values(e,i):this.value(i)))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(e,i){var s,n,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),void 0;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this._hasMultipleValues()?this._values(e):this.value();for(s=this.options.values,n=arguments[0],o=0;s.length>o;o+=1)s[o]=this._trimAlignValue(n[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),this._super(e,i),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(i),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=n-1;s>=0;s--)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step,s=Math.round((t-e)/i)*i;t=s+e,t>this.options.max&&(t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,s,n,o,a=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this._hasMultipleValues()?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),o=this._valueMax(),i=o!==n?100*((s-n)/(o-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:100-i+"%"},r.animate),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:100-i+"%"},r.animate))},_handleEvents:{keydown:function(e){var i,s,n,o,a=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(t(e.target),null,"ui-state-active"),i=this._start(e,a),i===!1))return}switch(o=this.options.step,s=n=this._hasMultipleValues()?this.values(a):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-o)}this._slide(e,a,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),this._removeClass(t(e.target),null,"ui-state-active"))}}}),t.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e=this._super(),i=this.element;return t.each(["min","max","step"],function(t,s){var n=i.attr(s);null!=n&&n.length&&(e[s]=n)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t),void 0)},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){var e=this.element[0]===t.ui.safeActiveElement(this.document[0]);e||(this.element.trigger("focus"),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===t.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:(this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height())},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return e=null!==s.min?s.min:0,i=t-e,i=Math.round(i/s.step)*s.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&s.min>t?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){var i,s,n;return"culture"===t||"numberFormat"===t?(i=this._parse(this.element.val()),this.options[t]=e,this.element.val(this._format(i)),void 0):(("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(s=this.buttons.first().find(".ui-icon"),this._removeClass(s,null,this.options.icons.up),this._addClass(s,null,e.up),n=this.buttons.last().find(".ui-icon"),this._removeClass(n,null,this.options.icons.down),this._addClass(n,null,e.down)),this._super(t,e),void 0)},_setOptionDisabled:function(t){this._super(t),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable")},_setOptions:r(function(t){this._super(t)}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value();return null===t?!1:t===this._adjustValue(t)},_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:r(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:r(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:r(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:r(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?(r(this._value).call(this,t),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),t.uiBackCompat!==!1&&t.widget("ui.spinner",t.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:function(){return"<span>"},_buttonHtml:function(){return"<a></a><a></a>"}}),t.ui.spinner,t.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var t=/#.*$/;return function(e){var i,s;i=e.href.replace(t,""),s=location.href.replace(t,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return e.hash.length>1&&i===s}}(),_create:function(){var e=this,i=this.options;this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,i.collapsible),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var e=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===e&&(s&&this.tabs.each(function(i,n){return t(n).attr("aria-controls")===s?(e=i,!1):void 0}),null===e&&(e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===e||-1===e)&&(e=this.tabs.length?0:!1)),e!==!1&&(e=this.tabs.index(this.tabs.eq(e)),-1===e&&(e=i?!1:0)),!i&&e===!1&&this.anchors.length&&(e=0),e},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(e){var i=t(t.ui.safeActiveElement(this.document[0])).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:s++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:n=!1,s--;break;case t.ui.keyCode.END:s=this.anchors.length-1;break;case t.ui.keyCode.HOME:s=0;break;case t.ui.keyCode.SPACE:return e.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case t.ui.keyCode.ENTER:return e.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return}e.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),e.ctrlKey||e.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.trigger("focus"))},_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).trigger("focus"),t},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):(this._super(t,e),"collapsible"===t&&(this._toggleClass("ui-tabs-collapsible",null,e),e||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(e),"heightStyle"===t&&this._setupHeightStyle(e),void 0)},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this,i=this.tabs,s=this.anchors,n=this.panels;this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=t(),this.anchors.each(function(i,s){var n,o,a,r=t(s).uniqueId().attr("id"),h=t(s).closest("li"),l=h.attr("aria-controls");e._isLocal(s)?(n=s.hash,a=n.substring(1),o=e.element.find(e._sanitizeSelector(n))):(a=h.attr("aria-controls")||t({}).uniqueId()[0].id,n="#"+a,o=e.element.find(n),o.length||(o=e._createPanel(a),o.insertAfter(e.panels[i-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),l&&h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":a,"aria-labelledby":r}),o.attr("aria-labelledby",r)}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(e){var i,s,n;for(t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1),n=0;s=this.tabs[n];n++)i=t(s),e===!0||-1!==t.inArray(n,e)?(i.attr("aria-disabled","true"),this._addClass(i,null,"ui-state-disabled")):(i.removeAttr("aria-disabled"),this._removeClass(i,null,"ui-state-disabled"));this.options.disabled=e,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,e===!0)},_setupEvents:function(e){var i={};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n.closest("li"),a=o[0]===s[0],r=a&&i.collapsible,h=r?t():this._getPanelForTab(o),l=s.length?this._getPanelForTab(s):t(),u={oldTab:s,oldPanel:l,newTab:r?t():o,newPanel:h};e.preventDefault(),o.hasClass("ui-state-disabled")||o.hasClass("ui-tabs-loading")||this.running||a&&!i.collapsible||this._trigger("beforeActivate",e,u)===!1||(i.active=r?!1:this.tabs.index(o),this.active=a?t():o,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(o),e),this._toggle(e,u))},_toggle:function(e,i){function s(){o.running=!1,o._trigger("activate",e,i)}function n(){o._addClass(i.newTab.closest("li"),"ui-tabs-active","ui-state-active"),a.length&&o.options.show?o._show(a,o.options.show,s):(a.show(),s())}var o=this,a=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){o._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),n()}):(this._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),a.length&&r.length?i.oldTab.attr("tabIndex",-1):a.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),a.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+t.ui.escapeSelector(e)+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(e){var i=this.options.disabled;i!==!1&&(void 0===e?i=!1:(e=this._getIndex(e),i=t.isArray(i)?t.map(i,function(t){return t!==e?t:null}):t.map(this.tabs,function(t,i){return i!==e?i:null})),this._setOptionDisabled(i))},disable:function(e){var i=this.options.disabled;if(i!==!0){if(void 0===e)i=!0;else{if(e=this._getIndex(e),-1!==t.inArray(e,i))return;i=t.isArray(i)?t.merge([e],i).sort():[e]}this._setOptionDisabled(i)}},load:function(e,i){e=this._getIndex(e);var s=this,n=this.tabs.eq(e),o=n.find(".ui-tabs-anchor"),a=this._getPanelForTab(n),r={tab:n,panel:a},h=function(t,e){"abort"===e&&s.panels.stop(!1,!0),s._removeClass(n,"ui-tabs-loading"),a.removeAttr("aria-busy"),t===s.xhr&&delete s.xhr};this._isLocal(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(n,"ui-tabs-loading"),a.attr("aria-busy","true"),this.xhr.done(function(t,e,n){setTimeout(function(){a.html(t),s._trigger("load",i,r),h(n,e)},1)}).fail(function(t,e){setTimeout(function(){h(t,e)},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href").replace(/#.*$/,""),beforeSend:function(e,o){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:o},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),t.uiBackCompat!==!1&&t.widget("ui.tabs",t.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")}}),t.ui.tabs,t.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=t([])},_setOption:function(e,i){var s=this;this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e.element)})},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s.element[0],e.close(n,!0)}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var e=t(this);return e.is("[title]")?e.data("ui-tooltip-title",e.attr("title")).removeAttr("title"):void 0}))},_enable:function(){this.disabledTitles.each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))}),this.disabledTitles=t([])},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._registerCloseHandlers(e,s),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,o=e?e.type:null;return"string"==typeof s||s.nodeType||s.jquery?this._open(e,t,s):(i=s.call(t[0],function(i){n._delay(function(){t.data("ui-tooltip-open")&&(e&&(e.type=o),this._open(e,t,i))})}),i&&this._open(e,t,i),void 0)},_open:function(e,i,s){function n(t){l.of=t,a.is(":hidden")||a.position(l)}var o,a,r,h,l=t.extend({},this.options.position);if(s){if(o=this._find(i))return o.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),o=this._tooltip(i),a=o.tooltip,this._addDescribedBy(i,a.attr("id")),a.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),h=t("<div>").html(a.find(".ui-tooltip-content").html()),h.removeAttr("name").find("[name]").removeAttr("name"),h.removeAttr("id").find("[id]").removeAttr("id"),h.appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:n}),n(e)):a.position(t.extend({of:i},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){a.is(":visible")&&(n(l.of),clearInterval(r))},t.fx.interval)),this._trigger("open",e,{tooltip:a})}},_registerCloseHandlers:function(e,i){var s={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var s=t.Event(e);s.currentTarget=i[0],this.close(s,!0)}}};i[0]!==this.element[0]&&(s.remove=function(){this._removeTooltip(this._find(i).tooltip)}),e&&"mouseover"!==e.type||(s.mouseleave="close"),e&&"focusin"!==e.type||(s.focusout="close"),this._on(!0,i,s)},close:function(e){var i,s=this,n=t(e?e.currentTarget:this.element),o=this._find(n);return o?(i=o.tooltip,o.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),o.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]
}),o.closing=!0,this._trigger("close",e,{tooltip:i}),o.hiding||(o.closing=!1)),void 0):(n.removeData("ui-tooltip-open"),void 0)},_tooltip:function(e){var i=t("<div>").attr("role","tooltip"),s=t("<div>").appendTo(i),n=i.uniqueId().attr("id");return this._addClass(s,"ui-tooltip-content"),this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(this._appendTo(e)),this.tooltips[n]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){var e=t.closest(".ui-front, dialog");return e.length||(e=this.document[0].body),e},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur"),o=s.element;n.target=n.currentTarget=o[0],e.close(n,!0),t("#"+i).remove(),o.data("ui-tooltip-title")&&(o.attr("title")||o.attr("title",o.data("ui-tooltip-title")),o.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),t.uiBackCompat!==!1&&t.widget("ui.tooltip",t.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}}),t.ui.tooltip;var f="ui-effects-",g="ui-effects-style",m="ui-effects-animated",_=t;t.effects={effect:{}},function(t,e){function i(t,e,i){var s=c[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,o){var a,r=o.re.exec(i),h=r&&o.parse(r),l=o.space||"rgba";return h?(a=s[l](h),s[u[l].cache]=a[u[l].cache],n=s._rgba=a._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,o.transparent),s):o[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var o,a="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},c={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(u,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,a,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(a),a=e);var c=this,d=t.type(n),p=this._rgba=[];return a!==e&&(n=[n,a,r,h],d="array"),"string"===d?this.parse(s(n)||o._default):"array"===d?(f(u.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(u,function(t,e){n[e.cache]&&(c[e.cache]=n[e.cache].slice())}):f(u,function(e,s){var o=s.cache;f(s.props,function(t,e){if(!c[o]&&s.to){if("alpha"===t||null==n[t])return;c[o]=s.to(c._rgba)}c[o][e.idx]=i(n[t],e,!0)}),c[o]&&0>t.inArray(null,c[o].slice(0,3))&&(c[o][3]=1,s.from&&(c._rgba=s.from(c[o])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(u,function(t,o){var a,r=i[o.cache];return r&&(a=n[o.cache]||o.to&&o.to(n._rgba)||[],f(o.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===a[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(u,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),o=u[n],a=0===this.alpha()?l("transparent"):this,r=a[o.cache]||o.to(a._rgba),h=r.slice();return s=s[o.cache],f(o.props,function(t,n){var o=n.idx,a=r[o],l=s[o],u=c[n.type]||{};null!==l&&(null===a?h[o]=l:(u.mod&&(l-a>u.mod/2?a+=u.mod:a-l>u.mod/2&&(a-=u.mod)),h[o]=i((l-a)*e+a,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(s,n,o),h=Math.min(s,n,o),l=r-h,u=r+h,c=.5*u;return e=h===r?0:s===r?60*(n-o)/l+360:n===r?60*(o-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=c?l/u:l/(2-u),[Math.round(e)%360,i,c,null==a?1:a]},u.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],o=t[3],a=.5>=s?s*(1+i):s+i-s*i,r=2*s-a;return[Math.round(255*n(r,a,e+1/3)),Math.round(255*n(r,a,e)),Math.round(255*n(r,a,e-1/3)),o]},f(u,function(s,n){var o=n.props,a=n.cache,h=n.to,u=n.from;l.fn[s]=function(s){if(h&&!this[a]&&(this[a]=h(this._rgba)),s===e)return this[a].slice();var n,r=t.type(s),c="array"===r||"object"===r?s:arguments,d=this[a].slice();return f(o,function(t,e){var s=c["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),u?(n=l(u(d)),n[a]=d,n):l(d)},f(o,function(e,i){l.fn[e]||(l.fn[e]=function(n){var o,a=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),u=l[i.idx];return"undefined"===a?u:("function"===a&&(n=n.call(this,u),a=t.type(n)),null==n&&i.empty?this:("string"===a&&(o=r.exec(n),o&&(n=u+parseFloat(o[2])*("+"===o[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var o,a,r="";if("transparent"!==n&&("string"!==t.type(n)||(o=s(n)))){if(n=l(o||n),!d.rgba&&1!==n._rgba[3]){for(a="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&a&&a.style;)try{r=t.css(a,"backgroundColor"),a=a.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(a),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},o=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(_),function(){function e(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(o[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(o[i]=n[i]);return o}function i(e,i){var s,o,a={};for(s in i)o=i[s],e[s]!==o&&(n[s]||(t.fx.step[s]||!isNaN(parseFloat(o)))&&(a[s]=o));return a}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(_.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(n,o,a,r){var h=t.speed(o,a,r);return this.queue(function(){var o,a=t(this),r=a.attr("class")||"",l=h.children?a.find("*").addBack():a;l=l.map(function(){var i=t(this);return{el:i,start:e(this)}}),o=function(){t.each(s,function(t,e){n[e]&&a[e+"Class"](n[e])})},o(),l=l.map(function(){return this.end=e(this.el[0]),this.diff=i(this.start,this.end),this}),a.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){o(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(a[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,o){return s?t.effects.animateClass.call(this,{add:i},s,n,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,s,n,o,a){return"boolean"==typeof s||void 0===s?n?t.effects.animateClass.call(this,s?{add:i}:{remove:i},n,o,a):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},s,n,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,o){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,o)}})}(),function(){function e(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function i(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}function s(t,e){var i=e.outerWidth(),s=e.outerHeight(),n=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,o=n.exec(t)||["",0,i,s,0];return{top:parseFloat(o[1])||0,right:"auto"===o[2]?i:parseFloat(o[2]),bottom:"auto"===o[3]?s:parseFloat(o[3]),left:parseFloat(o[4])||0}}t.expr&&t.expr.filters&&t.expr.filters.animated&&(t.expr.filters.animated=function(e){return function(i){return!!t(i).data(m)||e(i)}}(t.expr.filters.animated)),t.uiBackCompat!==!1&&t.extend(t.effects,{save:function(t,e){for(var i=0,s=e.length;s>i;i++)null!==e[i]&&t.data(f+e[i],t[0].style[e[i]])},restore:function(t,e){for(var i,s=0,n=e.length;n>s;s++)null!==e[s]&&(i=t.data(f+e[s]),t.css(e[s],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(a){o=document.body}return e.wrap(s),(e[0]===o||t.contains(e[0],o))&&t(o).trigger("focus"),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).trigger("focus")),e}}),t.extend(t.effects,{version:"1.12.1",define:function(e,i,s){return s||(s=i,i="effect"),t.effects.effect[e]=s,t.effects.effect[e].mode=i,s},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var s="horizontal"!==i?(e||100)/100:1,n="vertical"!==i?(e||100)/100:1;return{height:t.height()*n,width:t.width()*s,outerHeight:t.outerHeight()*n,outerWidth:t.outerWidth()*s}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var s=t.queue();e>1&&s.splice.apply(s,[1,0].concat(s.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(g,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(g)||"",t.removeData(g)},mode:function(t,e){var i=t.is(":hidden");return"toggle"===e&&(e=i?"show":"hide"),(i?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createPlaceholder:function(e){var i,s=e.css("position"),n=e.position();return e.css({marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),/^(static|relative)/.test(s)&&(s="absolute",i=t("<"+e[0].nodeName+">").insertAfter(e).css({display:/^(inline|ruby)/.test(e.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight"),"float":e.css("float")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),e.data(f+"placeholder",i)),e.css({position:s,left:n.left,top:n.top}),i},removePlaceholder:function(t){var e=f+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e)},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]>0&&(n[i]=o[0]*s+o[1])}),n}}),t.fn.extend({effect:function(){function i(e){function i(){r.removeData(m),t.effects.cleanUp(r),"hide"===s.mode&&r.hide(),a()}function a(){t.isFunction(h)&&h.call(r[0]),t.isFunction(e)&&e()}var r=t(this);s.mode=u.shift(),t.uiBackCompat===!1||o?"none"===s.mode?(r[l](),a()):n.call(r[0],s,i):(r.is(":hidden")?"hide"===l:"show"===l)?(r[l](),a()):n.call(r[0],s,a)}var s=e.apply(this,arguments),n=t.effects.effect[s.effect],o=n.mode,a=s.queue,r=a||"fx",h=s.complete,l=s.mode,u=[],c=function(e){var i=t(this),s=t.effects.mode(i,l)||o;i.data(m,!0),u.push(s),o&&("show"===s||s===o&&"hide"===s)&&i.show(),o&&"none"===s||t.effects.saveStyle(i),t.isFunction(e)&&e()};return t.fx.off||!n?l?this[l](s.duration,h):this.each(function(){h&&h.call(this)}):a===!1?this.each(c).each(i):this.queue(r,c).queue(r,i)},show:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(t.fn.show),hide:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(t.fn.hide),toggle:function(t){return function(s){if(i(s)||"boolean"==typeof s)return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):s(this.css("clip"),this)},transfer:function(e,i){var s=t(this),n=t(e.to),o="fixed"===n.css("position"),a=t("body"),r=o?a.scrollTop():0,h=o?a.scrollLeft():0,l=n.offset(),u={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},c=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({top:c.top-r,left:c.left-h,height:s.innerHeight(),width:s.innerWidth(),position:o?"fixed":"absolute"}).animate(u,e.duration,e.easing,function(){d.remove(),t.isFunction(i)&&i()})}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),"string"==typeof e.end&&(e.end=s(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})}}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}();var v=t.effects;t.effects.define("blind","hide",function(e,i){var s={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},n=t(this),o=e.direction||"up",a=n.cssClip(),r={clip:t.extend({},a)},h=t.effects.createPlaceholder(n);r.clip[s[o][0]]=r.clip[s[o][1]],"show"===e.mode&&(n.cssClip(r.clip),h&&h.css(t.effects.clipToBox(r)),r.clip=a),h&&h.animate(t.effects.clipToBox(r),e.duration,e.easing),n.animate(r,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("bounce",function(e,i){var s,n,o,a=t(this),r=e.mode,h="hide"===r,l="show"===r,u=e.direction||"up",c=e.distance,d=e.times||5,p=2*d+(l||h?1:0),f=e.duration/p,g=e.easing,m="up"===u||"down"===u?"top":"left",_="up"===u||"left"===u,v=0,b=a.queue().length;for(t.effects.createPlaceholder(a),o=a.css(m),c||(c=a["top"===m?"outerHeight":"outerWidth"]()/3),l&&(n={opacity:1},n[m]=o,a.css("opacity",0).css(m,_?2*-c:2*c).animate(n,f,g)),h&&(c/=Math.pow(2,d-1)),n={},n[m]=o;d>v;v++)s={},s[m]=(_?"-=":"+=")+c,a.animate(s,f,g).animate(n,f,g),c=h?2*c:c/2;h&&(s={opacity:0},s[m]=(_?"-=":"+=")+c,a.animate(s,f,g)),a.queue(i),t.effects.unshift(a,b,p+1)}),t.effects.define("clip","hide",function(e,i){var s,n={},o=t(this),a=e.direction||"vertical",r="both"===a,h=r||"horizontal"===a,l=r||"vertical"===a;s=o.cssClip(),n.clip={top:l?(s.bottom-s.top)/2:s.top,right:h?(s.right-s.left)/2:s.right,bottom:l?(s.bottom-s.top)/2:s.bottom,left:h?(s.right-s.left)/2:s.left},t.effects.createPlaceholder(o),"show"===e.mode&&(o.cssClip(n.clip),n.clip=s),o.animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("drop","hide",function(e,i){var s,n=t(this),o=e.mode,a="show"===o,r=e.direction||"left",h="up"===r||"down"===r?"top":"left",l="up"===r||"left"===r?"-=":"+=",u="+="===l?"-=":"+=",c={opacity:0};t.effects.createPlaceholder(n),s=e.distance||n["top"===h?"outerHeight":"outerWidth"](!0)/2,c[h]=l+s,a&&(n.css(c),c[h]=u+s,c.opacity=1),n.animate(c,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("explode","hide",function(e,i){function s(){b.push(this),b.length===c*d&&n()}function n(){p.css({visibility:"visible"}),t(b).remove(),i()}var o,a,r,h,l,u,c=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=c,p=t(this),f=e.mode,g="show"===f,m=p.show().css("visibility","hidden").offset(),_=Math.ceil(p.outerWidth()/d),v=Math.ceil(p.outerHeight()/c),b=[];for(o=0;c>o;o++)for(h=m.top+o*v,u=o-(c-1)/2,a=0;d>a;a++)r=m.left+a*_,l=a-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-a*_,top:-o*v}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:_,height:v,left:r+(g?l*_:0),top:h+(g?u*v:0),opacity:g?0:1}).animate({left:r+(g?0:l*_),top:h+(g?0:u*v),opacity:g?1:0},e.duration||500,e.easing,s)}),t.effects.define("fade","toggle",function(e,i){var s="show"===e.mode;t(this).css("opacity",s?0:1).animate({opacity:s?1:0},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("fold","hide",function(e,i){var s=t(this),n=e.mode,o="show"===n,a="hide"===n,r=e.size||15,h=/([0-9]+)%/.exec(r),l=!!e.horizFirst,u=l?["right","bottom"]:["bottom","right"],c=e.duration/2,d=t.effects.createPlaceholder(s),p=s.cssClip(),f={clip:t.extend({},p)},g={clip:t.extend({},p)},m=[p[u[0]],p[u[1]]],_=s.queue().length;h&&(r=parseInt(h[1],10)/100*m[a?0:1]),f.clip[u[0]]=r,g.clip[u[0]]=r,g.clip[u[1]]=0,o&&(s.cssClip(g.clip),d&&d.css(t.effects.clipToBox(g)),g.clip=p),s.queue(function(i){d&&d.animate(t.effects.clipToBox(f),c,e.easing).animate(t.effects.clipToBox(g),c,e.easing),i()}).animate(f,c,e.easing).animate(g,c,e.easing).queue(i),t.effects.unshift(s,_,4)}),t.effects.define("highlight","show",function(e,i){var s=t(this),n={backgroundColor:s.css("backgroundColor")};"hide"===e.mode&&(n.opacity=0),t.effects.saveStyle(s),s.css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("size",function(e,i){var s,n,o,a=t(this),r=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],l=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],u=e.mode,c="effect"!==u,d=e.scale||"both",p=e.origin||["middle","center"],f=a.css("position"),g=a.position(),m=t.effects.scaledDimensions(a),_=e.from||m,v=e.to||t.effects.scaledDimensions(a,0);t.effects.createPlaceholder(a),"show"===u&&(o=_,_=v,v=o),n={from:{y:_.height/m.height,x:_.width/m.width},to:{y:v.height/m.height,x:v.width/m.width}},("box"===d||"both"===d)&&(n.from.y!==n.to.y&&(_=t.effects.setTransition(a,h,n.from.y,_),v=t.effects.setTransition(a,h,n.to.y,v)),n.from.x!==n.to.x&&(_=t.effects.setTransition(a,l,n.from.x,_),v=t.effects.setTransition(a,l,n.to.x,v))),("content"===d||"both"===d)&&n.from.y!==n.to.y&&(_=t.effects.setTransition(a,r,n.from.y,_),v=t.effects.setTransition(a,r,n.to.y,v)),p&&(s=t.effects.getBaseline(p,m),_.top=(m.outerHeight-_.outerHeight)*s.y+g.top,_.left=(m.outerWidth-_.outerWidth)*s.x+g.left,v.top=(m.outerHeight-v.outerHeight)*s.y+g.top,v.left=(m.outerWidth-v.outerWidth)*s.x+g.left),a.css(_),("content"===d||"both"===d)&&(h=h.concat(["marginTop","marginBottom"]).concat(r),l=l.concat(["marginLeft","marginRight"]),a.find("*[width]").each(function(){var i=t(this),s=t.effects.scaledDimensions(i),o={height:s.height*n.from.y,width:s.width*n.from.x,outerHeight:s.outerHeight*n.from.y,outerWidth:s.outerWidth*n.from.x},a={height:s.height*n.to.y,width:s.width*n.to.x,outerHeight:s.height*n.to.y,outerWidth:s.width*n.to.x};n.from.y!==n.to.y&&(o=t.effects.setTransition(i,h,n.from.y,o),a=t.effects.setTransition(i,h,n.to.y,a)),n.from.x!==n.to.x&&(o=t.effects.setTransition(i,l,n.from.x,o),a=t.effects.setTransition(i,l,n.to.x,a)),c&&t.effects.saveStyle(i),i.css(o),i.animate(a,e.duration,e.easing,function(){c&&t.effects.restoreStyle(i)})})),a.animate(v,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){var e=a.offset();0===v.opacity&&a.css("opacity",_.opacity),c||(a.css("position","static"===f?"relative":f).offset(e),t.effects.saveStyle(a)),i()}})}),t.effects.define("scale",function(e,i){var s=t(this),n=e.mode,o=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"effect"!==n?0:100),a=t.extend(!0,{from:t.effects.scaledDimensions(s),to:t.effects.scaledDimensions(s,o,e.direction||"both"),origin:e.origin||["middle","center"]},e);e.fade&&(a.from.opacity=1,a.to.opacity=0),t.effects.effect.size.call(this,a,i)}),t.effects.define("puff","hide",function(e,i){var s=t.extend(!0,{},e,{fade:!0,percent:parseInt(e.percent,10)||150});t.effects.effect.scale.call(this,s,i)}),t.effects.define("pulsate","show",function(e,i){var s=t(this),n=e.mode,o="show"===n,a="hide"===n,r=o||a,h=2*(e.times||5)+(r?1:0),l=e.duration/h,u=0,c=1,d=s.queue().length;for((o||!s.is(":visible"))&&(s.css("opacity",0).show(),u=1);h>c;c++)s.animate({opacity:u},l,e.easing),u=1-u;s.animate({opacity:u},l,e.easing),s.queue(i),t.effects.unshift(s,d,h+1)}),t.effects.define("shake",function(e,i){var s=1,n=t(this),o=e.direction||"left",a=e.distance||20,r=e.times||3,h=2*r+1,l=Math.round(e.duration/h),u="up"===o||"down"===o?"top":"left",c="up"===o||"left"===o,d={},p={},f={},g=n.queue().length;for(t.effects.createPlaceholder(n),d[u]=(c?"-=":"+=")+a,p[u]=(c?"+=":"-=")+2*a,f[u]=(c?"-=":"+=")+2*a,n.animate(d,l,e.easing);r>s;s++)n.animate(p,l,e.easing).animate(f,l,e.easing);n.animate(p,l,e.easing).animate(d,l/2,e.easing).queue(i),t.effects.unshift(n,g,h+1)}),t.effects.define("slide","show",function(e,i){var s,n,o=t(this),a={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},r=e.mode,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h,c=e.distance||o["top"===l?"outerHeight":"outerWidth"](!0),d={};t.effects.createPlaceholder(o),s=o.cssClip(),n=o.position()[l],d[l]=(u?-1:1)*c+n,d.clip=o.cssClip(),d.clip[a[h][1]]=d.clip[a[h][0]],"show"===r&&(o.cssClip(d.clip),o.css(l,d[l]),d.clip=s,d[l]=n),o.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:i})});var v;t.uiBackCompat!==!1&&(v=t.effects.define("transfer",function(e,i){t(this).transfer(e,i)}))});
jQuery(function (e) { e.datepicker.regional["en-US"] = { showWeek: !0, showOtherMonths: !0, selectOtherMonths: !0, changeMonth: !0, changeYear: !0, showButtonPanel: !1, closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, e.datepicker.regional["nb-NO"] = { showWeek: !0, showOtherMonths: !0, selectOtherMonths: !0, changeMonth: !0, changeYear: !0, showButtonPanel: !1, closeText: "Lukk", prevText: "&#xAB;Forrige", nextText: "Neste&#xBB;", currentText: "I dag", monthNames: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"], dayNamesShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"], dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], dayNamesMin: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"], weekHeader: "Uke", dateFormat: "dd.mm.yy", firstDay: 1, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" } });
!function (a) { function f(a, b) { if (!(a.originalEvent.touches.length > 1)) { a.preventDefault(); var c = a.originalEvent.changedTouches[0], d = document.createEvent("MouseEvents"); d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d) } } if (a.support.touch = "ontouchend" in document, a.support.touch) { var e, b = a.ui.mouse.prototype, c = b._mouseInit, d = b._mouseDestroy; b._touchStart = function (a) { var b = this; !e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown")) }, b._touchMove = function (a) { e && (this._touchMoved = !0, f(a, "mousemove")) }, b._touchEnd = function (a) { e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1) }, b._mouseInit = function () { var b = this; b.element.bind({ touchstart: a.proxy(b, "_touchStart"), touchmove: a.proxy(b, "_touchMove"), touchend: a.proxy(b, "_touchEnd") }), c.call(b) }, b._mouseDestroy = function () { var b = this; b.element.unbind({ touchstart: a.proxy(b, "_touchStart"), touchmove: a.proxy(b, "_touchMove"), touchend: a.proxy(b, "_touchEnd") }), d.call(b) } } }(jQuery);
!function (a, b) { "function" == typeof define && define.amd ? define(b) : "object" == typeof module && module.exports ? module.exports = b() : a.numeral = b() }(this, function () { function a(a, b) { this._input = a, this._value = b } var b, c, d = "2.0.6", e = {}, f = {}, g = { currentLocale: "en", zeroFormat: null, nullFormat: null, defaultFormat: "0,0", scalePercentBy100: !0 }, h = { currentLocale: g.currentLocale, zeroFormat: g.zeroFormat, nullFormat: g.nullFormat, defaultFormat: g.defaultFormat, scalePercentBy100: g.scalePercentBy100 }; return b = function (d) { var f, g, i, j; if (b.isNumeral(d)) f = d.value(); else if (0 === d || "undefined" == typeof d) f = 0; else if (null === d || c.isNaN(d)) f = null; else if ("string" == typeof d) if (h.zeroFormat && d === h.zeroFormat) f = 0; else if (h.nullFormat && d === h.nullFormat || !d.replace(/[^0-9]+/g, "").length) f = null; else { for (g in e) if (j = "function" == typeof e[g].regexps.unformat ? e[g].regexps.unformat() : e[g].regexps.unformat, j && d.match(j)) { i = e[g].unformat; break } i = i || b._.stringToNumber, f = i(d) } else f = Number(d) || null; return new a(d, f) }, b.version = d, b.isNumeral = function (b) { return b instanceof a }, b._ = c = { numberToFormat: function (a, c, d) { var e, g, h, i, j, k, l, m = f[b.options.currentLocale], n = !1, o = !1, p = 0, q = "", r = 1e12, s = 1e9, t = 1e6, u = 1e3, v = "", w = !1; if (a = a || 0, g = Math.abs(a), b._.includes(c, "(") ? (n = !0, c = c.replace(/[\(|\)]/g, "")) : (b._.includes(c, "+") || b._.includes(c, "-")) && (j = b._.includes(c, "+") ? c.indexOf("+") : 0 > a ? c.indexOf("-") : -1, c = c.replace(/[\+|\-]/g, "")), b._.includes(c, "a") && (e = c.match(/a(k|m|b|t)?/), e = e ? e[1] : !1, b._.includes(c, " a") && (q = " "), c = c.replace(new RegExp(q + "a[kmbt]?"), ""), g >= r && !e || "t" === e ? (q += m.abbreviations.trillion, a /= r) : r > g && g >= s && !e || "b" === e ? (q += m.abbreviations.billion, a /= s) : s > g && g >= t && !e || "m" === e ? (q += m.abbreviations.million, a /= t) : (t > g && g >= u && !e || "k" === e) && (q += m.abbreviations.thousand, a /= u)), b._.includes(c, "[.]") && (o = !0, c = c.replace("[.]", ".")), h = a.toString().split(".")[0], i = c.split(".")[1], k = c.indexOf(","), p = (c.split(".")[0].split(",")[0].match(/0/g) || []).length, i ? (b._.includes(i, "[") ? (i = i.replace("]", ""), i = i.split("["), v = b._.toFixed(a, i[0].length + i[1].length, d, i[1].length)) : v = b._.toFixed(a, i.length, d), h = v.split(".")[0], v = b._.includes(v, ".") ? m.delimiters.decimal + v.split(".")[1] : "", o && 0 === Number(v.slice(1)) && (v = "")) : h = b._.toFixed(a, 0, d), q && !e && Number(h) >= 1e3 && q !== m.abbreviations.trillion) switch (h = String(Number(h) / 1e3), q) { case m.abbreviations.thousand: q = m.abbreviations.million; break; case m.abbreviations.million: q = m.abbreviations.billion; break; case m.abbreviations.billion: q = m.abbreviations.trillion }if (b._.includes(h, "-") && (h = h.slice(1), w = !0), h.length < p) for (var x = p - h.length; x > 0; x--)h = "0" + h; return k > -1 && (h = h.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + m.delimiters.thousands)), 0 === c.indexOf(".") && (h = ""), l = h + v + (q ? q : ""), n ? l = (n && w ? "(" : "") + l + (n && w ? ")" : "") : j >= 0 ? l = 0 === j ? (w ? "-" : "+") + l : l + (w ? "-" : "+") : w && (l = "-" + l), l }, stringToNumber: function (a) { var b, c, d, e = f[h.currentLocale], g = a, i = { thousand: 3, million: 6, billion: 9, trillion: 12 }; if (h.zeroFormat && a === h.zeroFormat) c = 0; else if (h.nullFormat && a === h.nullFormat || !a.replace(/[^0-9]+/g, "").length) c = null; else { c = 1, "." !== e.delimiters.decimal && (a = a.replace(/\./g, "").replace(e.delimiters.decimal, ".")); for (b in i) if (d = new RegExp("[^a-zA-Z]" + e.abbreviations[b] + "(?:\\)|(\\" + e.currency.symbol + ")?(?:\\))?)?$"), g.match(d)) { c *= Math.pow(10, i[b]); break } c *= (a.split("-").length + Math.min(a.split("(").length - 1, a.split(")").length - 1)) % 2 ? 1 : -1, a = a.replace(/[^0-9\.]+/g, ""), c *= Number(a) } return c }, isNaN: function (a) { return "number" == typeof a && isNaN(a) }, includes: function (a, b) { return -1 !== a.indexOf(b) }, insert: function (a, b, c) { return a.slice(0, c) + b + a.slice(c) }, reduce: function (a, b) { if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined"); if ("function" != typeof b) throw new TypeError(b + " is not a function"); var c, d = Object(a), e = d.length >>> 0, f = 0; if (3 === arguments.length) c = arguments[2]; else { for (; e > f && !(f in d);)f++; if (f >= e) throw new TypeError("Reduce of empty array with no initial value"); c = d[f++] } for (; e > f; f++)f in d && (c = b(c, d[f], f, d)); return c }, multiplier: function (a) { var b = a.toString().split("."); return b.length < 2 ? 1 : Math.pow(10, b[1].length) }, correctionFactor: function () { var a = Array.prototype.slice.call(arguments); return a.reduce(function (a, b) { var d = c.multiplier(b); return a > d ? a : d }, 1) }, toFixed: function (a, b, c, d) { var e, f, g, h, i = a.toString().split("."), j = b - (d || 0); return e = 2 === i.length ? Math.min(Math.max(i[1].length, j), b) : j, g = Math.pow(10, e), h = (c(a + "e+" + e) / g).toFixed(e), d > b - e && (f = new RegExp("\\.?0{1," + (d - (b - e)) + "}$"), h = h.replace(f, "")), h } }, b.options = h, b.formats = e, b.locales = f, b.locale = function (a) { return a && (h.currentLocale = a.toLowerCase()), h.currentLocale }, b.localeData = function (a) { if (!a) return f[h.currentLocale]; if (a = a.toLowerCase(), !f[a]) throw new Error("Unknown locale : " + a); return f[a] }, b.reset = function () { for (var a in g) h[a] = g[a] }, b.zeroFormat = function (a) { h.zeroFormat = "string" == typeof a ? a : null }, b.nullFormat = function (a) { h.nullFormat = "string" == typeof a ? a : null }, b.defaultFormat = function (a) { h.defaultFormat = "string" == typeof a ? a : "0.0" }, b.register = function (a, b, c) { if (b = b.toLowerCase(), this[a + "s"][b]) throw new TypeError(b + " " + a + " already registered."); return this[a + "s"][b] = c, c }, b.validate = function (a, c) { var d, e, f, g, h, i, j, k; if ("string" != typeof a && (a += "", console.warn && console.warn("Numeral.js: Value is not string. It has been co-erced to: ", a)), a = a.trim(), a.match(/^\d+$/)) return !0; if ("" === a) return !1; try { j = b.localeData(c) } catch (l) { j = b.localeData(b.locale()) } return f = j.currency.symbol, h = j.abbreviations, d = j.delimiters.decimal, e = "." === j.delimiters.thousands ? "\\." : j.delimiters.thousands, k = a.match(/^[^\d]+/), null !== k && (a = a.substr(1), k[0] !== f) ? !1 : (k = a.match(/[^\d]+$/), null !== k && (a = a.slice(0, -1), k[0] !== h.thousand && k[0] !== h.million && k[0] !== h.billion && k[0] !== h.trillion) ? !1 : (i = new RegExp(e + "{2}"), a.match(/[^\d.,]/g) ? !1 : (g = a.split(d), g.length > 2 ? !1 : g.length < 2 ? !!g[0].match(/^\d+.*\d$/) && !g[0].match(i) : 1 === g[0].length ? !!g[0].match(/^\d+$/) && !g[0].match(i) && !!g[1].match(/^\d+$/) : !!g[0].match(/^\d+.*\d$/) && !g[0].match(i) && !!g[1].match(/^\d+$/)))) }, b.fn = a.prototype = { clone: function () { return b(this) }, format: function (a, c) { var d, f, g, i = this._value, j = a || h.defaultFormat; if (c = c || Math.round, 0 === i && null !== h.zeroFormat) f = h.zeroFormat; else if (null === i && null !== h.nullFormat) f = h.nullFormat; else { for (d in e) if (j.match(e[d].regexps.format)) { g = e[d].format; break } g = g || b._.numberToFormat, f = g(i, j, c) } return f }, value: function () { return this._value }, input: function () { return this._input }, set: function (a) { return this._value = Number(a), this }, add: function (a) { function b(a, b, c, e) { return a + Math.round(d * b) } var d = c.correctionFactor.call(null, this._value, a); return this._value = c.reduce([this._value, a], b, 0) / d, this }, subtract: function (a) { function b(a, b, c, e) { return a - Math.round(d * b) } var d = c.correctionFactor.call(null, this._value, a); return this._value = c.reduce([a], b, Math.round(this._value * d)) / d, this }, multiply: function (a) { function b(a, b, d, e) { var f = c.correctionFactor(a, b); return Math.round(a * f) * Math.round(b * f) / Math.round(f * f) } return this._value = c.reduce([this._value, a], b, 1), this }, divide: function (a) { function b(a, b, d, e) { var f = c.correctionFactor(a, b); return Math.round(a * f) / Math.round(b * f) } return this._value = c.reduce([this._value, a], b), this }, difference: function (a) { return Math.abs(b(this._value).subtract(a).value()) } }, b.register("locale", "en", { delimiters: { thousands: ",", decimal: "." }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function (a) { var b = a % 10; return 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th" }, currency: { symbol: "$" } }), function () { b.register("format", "bps", { regexps: { format: /(BPS)/, unformat: /(BPS)/ }, format: function (a, c, d) { var e, f = b._.includes(c, " BPS") ? " " : ""; return a = 1e4 * a, c = c.replace(/\s?BPS/, ""), e = b._.numberToFormat(a, c, d), b._.includes(e, ")") ? (e = e.split(""), e.splice(-1, 0, f + "BPS"), e = e.join("")) : e = e + f + "BPS", e }, unformat: function (a) { return +(1e-4 * b._.stringToNumber(a)).toFixed(15) } }) }(), function () { var a = { base: 1e3, suffixes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] }, c = { base: 1024, suffixes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"] }, d = a.suffixes.concat(c.suffixes.filter(function (b) { return a.suffixes.indexOf(b) < 0 })), e = d.join("|"); e = "(" + e.replace("B", "B(?!PS)") + ")", b.register("format", "bytes", { regexps: { format: /([0\s]i?b)/, unformat: new RegExp(e) }, format: function (d, e, f) { var g, h, i, j, k = b._.includes(e, "ib") ? c : a, l = b._.includes(e, " b") || b._.includes(e, " ib") ? " " : ""; for (e = e.replace(/\s?i?b/, ""), h = 0; h <= k.suffixes.length; h++)if (i = Math.pow(k.base, h), j = Math.pow(k.base, h + 1), null === d || 0 === d || d >= i && j > d) { l += k.suffixes[h], i > 0 && (d /= i); break } return g = b._.numberToFormat(d, e, f), g + l }, unformat: function (d) { var e, f, g = b._.stringToNumber(d); if (g) { for (e = a.suffixes.length - 1; e >= 0; e--) { if (b._.includes(d, a.suffixes[e])) { f = Math.pow(a.base, e); break } if (b._.includes(d, c.suffixes[e])) { f = Math.pow(c.base, e); break } } g *= f || 1 } return g } }) }(), function () { b.register("format", "currency", { regexps: { format: /(\$)/ }, format: function (a, c, d) { var e, f, g, h = b.locales[b.options.currentLocale], i = { before: c.match(/^([\+|\-|\(|\s|\$]*)/)[0], after: c.match(/([\+|\-|\)|\s|\$]*)$/)[0] }; for (c = c.replace(/\s?\$\s?/, ""), e = b._.numberToFormat(a, c, d), a >= 0 ? (i.before = i.before.replace(/[\-\(]/, ""), i.after = i.after.replace(/[\-\)]/, "")) : 0 > a && !b._.includes(i.before, "-") && !b._.includes(i.before, "(") && (i.before = "-" + i.before), g = 0; g < i.before.length; g++)switch (f = i.before[g]) { case "$": e = b._.insert(e, h.currency.symbol, g); break; case " ": e = b._.insert(e, " ", g + h.currency.symbol.length - 1) }for (g = i.after.length - 1; g >= 0; g--)switch (f = i.after[g]) { case "$": e = g === i.after.length - 1 ? e + h.currency.symbol : b._.insert(e, h.currency.symbol, -(i.after.length - (1 + g))); break; case " ": e = g === i.after.length - 1 ? e + " " : b._.insert(e, " ", -(i.after.length - (1 + g) + h.currency.symbol.length - 1)) }return e } }) }(), function () { b.register("format", "exponential", { regexps: { format: /(e\+|e-)/, unformat: /(e\+|e-)/ }, format: function (a, c, d) { var e, f = "number" != typeof a || b._.isNaN(a) ? "0e+0" : a.toExponential(), g = f.split("e"); return c = c.replace(/e[\+|\-]{1}0/, ""), e = b._.numberToFormat(Number(g[0]), c, d), e + "e" + g[1] }, unformat: function (a) { function c(a, c, d, e) { var f = b._.correctionFactor(a, c), g = a * f * (c * f) / (f * f); return g } var d = b._.includes(a, "e+") ? a.split("e+") : a.split("e-"), e = Number(d[0]), f = Number(d[1]); return f = b._.includes(a, "e-") ? f *= -1 : f, b._.reduce([e, Math.pow(10, f)], c, 1) } }) }(), function () { b.register("format", "ordinal", { regexps: { format: /(o)/ }, format: function (a, c, d) { var e, f = b.locales[b.options.currentLocale], g = b._.includes(c, " o") ? " " : ""; return c = c.replace(/\s?o/, ""), g += f.ordinal(a), e = b._.numberToFormat(a, c, d), e + g } }) }(), function () { b.register("format", "percentage", { regexps: { format: /(%)/, unformat: /(%)/ }, format: function (a, c, d) { var e, f = b._.includes(c, " %") ? " " : ""; return b.options.scalePercentBy100 && (a = 100 * a), c = c.replace(/\s?\%/, ""), e = b._.numberToFormat(a, c, d), b._.includes(e, ")") ? (e = e.split(""), e.splice(-1, 0, f + "%"), e = e.join("")) : e = e + f + "%", e }, unformat: function (a) { var c = b._.stringToNumber(a); return b.options.scalePercentBy100 ? .01 * c : c } }) }(), function () { b.register("format", "time", { regexps: { format: /(:)/, unformat: /(:)/ }, format: function (a, b, c) { var d = Math.floor(a / 60 / 60), e = Math.floor((a - 60 * d * 60) / 60), f = Math.round(a - 60 * d * 60 - 60 * e); return d + ":" + (10 > e ? "0" + e : e) + ":" + (10 > f ? "0" + f : f) }, unformat: function (a) { var b = a.split(":"), c = 0; return 3 === b.length ? (c += 60 * Number(b[0]) * 60, c += 60 * Number(b[1]), c += Number(b[2])) : 2 === b.length && (c += 60 * Number(b[0]), c += Number(b[1])), Number(c) } }) }(), b });
!function (a, b) { "function" == typeof define && define.amd ? define(["numeral"], b) : b("object" == typeof module && module.exports ? require("./numeral") : a.numeral) }(this, function (a) { !function () { a.register("locale", "bg", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "хил", million: "млн", billion: "млрд", trillion: "трлн" }, ordinal: function (a) { return "" }, currency: { symbol: "лв" } }) }(), function () { a.register("locale", "chs", { delimiters: { thousands: ",", decimal: "." }, abbreviations: { thousand: "千", million: "百万", billion: "十亿", trillion: "兆" }, ordinal: function (a) { return "." }, currency: { symbol: "¥" } }) }(), function () { a.register("locale", "cs", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "tis.", million: "mil.", billion: "b", trillion: "t" }, ordinal: function () { return "." }, currency: { symbol: "Kč" } }) }(), function () { a.register("locale", "da-dk", { delimiters: { thousands: ".", decimal: "," }, abbreviations: { thousand: "k", million: "mio", billion: "mia", trillion: "b" }, ordinal: function (a) { return "." }, currency: { symbol: "DKK" } }) }(), function () { a.register("locale", "de-ch", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function (a) { return "." }, currency: { symbol: "CHF" } }) }(), function () { a.register("locale", "de", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function (a) { return "." }, currency: { symbol: "€" } }) }(), function () { a.register("locale", "en-au", { delimiters: { thousands: ",", decimal: "." }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function (a) { var b = a % 10; return 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th" }, currency: { symbol: "$" } }) }(), function () { a.register("locale", "en-gb", { delimiters: { thousands: ",", decimal: "." }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function (a) { var b = a % 10; return 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th" }, currency: { symbol: "£" } }) }(), function () { a.register("locale", "en-za", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function (a) { var b = a % 10; return 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th" }, currency: { symbol: "R" } }) }(), function () { a.register("locale", "es-es", { delimiters: { thousands: ".", decimal: "," }, abbreviations: { thousand: "k", million: "mm", billion: "b", trillion: "t" }, ordinal: function (a) { var b = a % 10; return 1 === b || 3 === b ? "er" : 2 === b ? "do" : 7 === b || 0 === b ? "mo" : 8 === b ? "vo" : 9 === b ? "no" : "to" }, currency: { symbol: "€" } }) }(), function () { a.register("locale", "es", { delimiters: { thousands: ".", decimal: "," }, abbreviations: { thousand: "k", million: "mm", billion: "b", trillion: "t" }, ordinal: function (a) { var b = a % 10; return 1 === b || 3 === b ? "er" : 2 === b ? "do" : 7 === b || 0 === b ? "mo" : 8 === b ? "vo" : 9 === b ? "no" : "to" }, currency: { symbol: "$" } }) }(), function () { a.register("locale", "et", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: " tuh", million: " mln", billion: " mld", trillion: " trl" }, ordinal: function (a) { return "." }, currency: { symbol: "€" } }) }(), function () { a.register("locale", "fi", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "k", million: "M", billion: "G", trillion: "T" }, ordinal: function (a) { return "." }, currency: { symbol: "€" } }) }(), function () { a.register("locale", "fr-ca", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "k", million: "M", billion: "G", trillion: "T" }, ordinal: function (a) { return 1 === a ? "er" : "e" }, currency: { symbol: "$" } }) }(), function () { a.register("locale", "fr-ch", { delimiters: { thousands: "'", decimal: "." }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function (a) { return 1 === a ? "er" : "e" }, currency: { symbol: "CHF" } }) }(), function () { a.register("locale", "fr", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function (a) { return 1 === a ? "er" : "e" }, currency: { symbol: "€" } }) }(), function () { a.register("locale", "hu", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "E", million: "M", billion: "Mrd", trillion: "T" }, ordinal: function (a) { return "." }, currency: { symbol: " Ft" } }) }(), function () { a.register("locale", "it", { delimiters: { thousands: ".", decimal: "," }, abbreviations: { thousand: "mila", million: "mil", billion: "b", trillion: "t" }, ordinal: function (a) { return "º" }, currency: { symbol: "€" } }) }(), function () { a.register("locale", "ja", { delimiters: { thousands: ",", decimal: "." }, abbreviations: { thousand: "千", million: "百万", billion: "十億", trillion: "兆" }, ordinal: function (a) { return "." }, currency: { symbol: "¥" } }) }(), function () { a.register("locale", "lv", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: " tūkst.", million: " milj.", billion: " mljrd.", trillion: " trilj." }, ordinal: function (a) { return "." }, currency: { symbol: "€" } }) }(), function () { a.register("locale", "nl-be", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "k", million: " mln", billion: " mld", trillion: " bln" }, ordinal: function (a) { var b = a % 100; return 0 !== a && 1 >= b || 8 === b || b >= 20 ? "ste" : "de" }, currency: { symbol: "€ " } }) }(), function () { a.register("locale", "nl-nl", { delimiters: { thousands: ".", decimal: "," }, abbreviations: { thousand: "k", million: "mln", billion: "mrd", trillion: "bln" }, ordinal: function (a) { var b = a % 100; return 0 !== a && 1 >= b || 8 === b || b >= 20 ? "ste" : "de" }, currency: { symbol: "€ " } }) }(), function () { a.register("locale", "nb", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function (a) { return "." }, currency: { symbol: "kr" } }) }(), function () { a.register("locale", "pl", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "tys.", million: "mln", billion: "mld", trillion: "bln" }, ordinal: function (a) { return "." }, currency: { symbol: "PLN" } }) }(), function () { a.register("locale", "pt-br", { delimiters: { thousands: ".", decimal: "," }, abbreviations: { thousand: "mil", million: "milhões", billion: "b", trillion: "t" }, ordinal: function (a) { return "º" }, currency: { symbol: "R$" } }) }(), function () { a.register("locale", "pt-pt", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function (a) { return "º" }, currency: { symbol: "€" } }) }(), function () { a.register("locale", "ru-ua", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "тыс.", million: "млн", billion: "b", trillion: "t" }, ordinal: function () { return "." }, currency: { symbol: "₴" } }) }(), function () { a.register("locale", "ru", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "тыс.", million: "млн.", billion: "млрд.", trillion: "трлн." }, ordinal: function () { return "." }, currency: { symbol: "руб." } }) }(), function () { a.register("locale", "sk", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "tis.", million: "mil.", billion: "b", trillion: "t" }, ordinal: function () { return "." }, currency: { symbol: "€" } }) }(), function () { a.register("locale", "sl", { delimiters: { thousands: ".", decimal: "," }, abbreviations: { thousand: "k", million: "mio", billion: "mrd", trillion: "trilijon" }, ordinal: function () { return "." }, currency: { symbol: "€" } }) }(), function () { a.register("locale", "th", { delimiters: { thousands: ",", decimal: "." }, abbreviations: { thousand: "พัน", million: "ล้าน", billion: "พันล้าน", trillion: "ล้านล้าน" }, ordinal: function (a) { return "." }, currency: { symbol: "฿" } }) }(), function () { var b = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'üncü", 4: "'üncü", 100: "'üncü", 6: "'ncı", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'ıncı", 90: "'ıncı" }; a.register("locale", "tr", { delimiters: { thousands: ".", decimal: "," }, abbreviations: { thousand: "bin", million: "milyon", billion: "milyar", trillion: "trilyon" }, ordinal: function (a) { if (0 === a) return "'ıncı"; var c = a % 10, d = a % 100 - c, e = a >= 100 ? 100 : null; return b[c] || b[d] || b[e] }, currency: { symbol: "₺" } }) }(), function () { a.register("locale", "uk-ua", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "тис.", million: "млн", billion: "млрд", trillion: "блн" }, ordinal: function () { return "" }, currency: { symbol: "₴" } }) }(), function () { a.register("locale", "vi", { delimiters: { thousands: ".", decimal: "," }, abbreviations: { thousand: " nghìn", million: " triệu", billion: " tỷ", trillion: " nghìn tỷ" }, ordinal: function () { return "." }, currency: { symbol: "₫" } }) }() });
"use strict";
(function (factory)
{
    if (typeof exports === 'object')
    {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd)
    {
        // AMD. Register as an anonymous module.
        define(factory);
    } else
    {
        // Browser globals
        window.WatchJS = factory();
        window.watch = window.WatchJS.watch;
        window.unwatch = window.WatchJS.unwatch;
        window.callWatchers = window.WatchJS.callWatchers;
    }
}(function ()
{

    var WatchJS = {
        noMore: false,        // use WatchJS.suspend(obj) instead
        useDirtyCheck: false, // use only dirty checking to track changes.
        preserveExistingSetters: false
    },
        lengthsubjects = [];

    var dirtyChecklist = [];
    var pendingChanges = []; // used coalesce changes from defineProperty and __defineSetter__

    var supportDefineProperty = false;
    try
    {
        supportDefineProperty = Object.defineProperty && Object.defineProperty({}, 'x', {});
    } catch (ex) {  /* not supported */ }

    var isFunction = function (functionToCheck)
    {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
    };

    var isInt = function (x)
    {
        return x % 1 === 0;
    };

    var isArray = function (obj)
    {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };

    var isObject = function (obj)
    {
        return {}.toString.apply(obj) === '[object Object]';
    };

    var getObjDiff = function (a, b)
    {
        var aplus = [],
            bplus = [];

        if (!(typeof a == "string") && !(typeof b == "string"))
        {

            if (isArray(a) && b)
            {
                for (var i = 0; i < a.length; i++)
                {
                    if (b[i] === undefined) aplus.push(i);
                }
            } else
            {
                for (var i in a)
                {
                    if (a.hasOwnProperty(i))
                    {
                        if (b && !b.hasOwnProperty(i))
                        {
                            aplus.push(i);
                        }
                    }
                }
            }

            if (isArray(b) && a)
            {
                for (var j = 0; j < b.length; j++)
                {
                    if (a[j] === undefined) bplus.push(j);
                }
            } else
            {
                for (var j in b)
                {
                    if (b.hasOwnProperty(j))
                    {
                        if (a && !a.hasOwnProperty(j))
                        {
                            bplus.push(j);
                        }
                    }
                }
            }
        }

        return {
            added: aplus,
            removed: bplus
        }
    };

    var clone = function (obj)
    {

        if (null == obj || "object" != typeof obj)
        {
            return obj;
        }

        var copy = obj.constructor();

        for (var attr in obj)
        {
            copy[attr] = obj[attr];
        }

        return copy;

    }

    var getExistingSetter = function (obj, propName)
    {
        if (WatchJS.preserveExistingSetters)
        {
            var existing = Object.getOwnPropertyDescriptor(obj, propName);
            return existing.set;
        }

        return undefined;
    }

    var defineGetAndSet = function (obj, propName, getter, setter)
    {
        try
        {
            var existingSetter = getExistingSetter(obj, propName);
            Object.defineProperty(obj, propName, {
                get: getter,
                set: function (value)
                {
                    setter.call(this, value, true); // coalesce changes
                    if (existingSetter)
                    {
                        existingSetter(value);
                    }
                },
                enumerable: true,
                configurable: true
            });
        }
        catch (e1)
        {
            try
            {
                Object.prototype.__defineGetter__.call(obj, propName, getter);
                Object.prototype.__defineSetter__.call(obj, propName, function (value)
                {
                    setter.call(this, value, true); // coalesce changes
                });
            }
            catch (e2)
            {
                observeDirtyChanges(obj, propName, setter);
                //throw new Error("watchJS error: browser not supported :/")
            }
        }

    };

    var defineProp = function (obj, propName, value)
    {
        try
        {
            Object.defineProperty(obj, propName, {
                enumerable: false,
                configurable: true,
                writable: false,
                value: value
            });
        } catch (error)
        {
            obj[propName] = value;
        }
    };

    var observeDirtyChanges = function (obj, propName, setter)
    {
        dirtyChecklist[dirtyChecklist.length] = {
            prop: propName,
            object: obj,
            orig: clone(obj[propName]),
            callback: setter
        }
    }

    var watch = function ()
    {

        if (isFunction(arguments[1]))
        {
            watchAll.apply(this, arguments);
        } else if (isArray(arguments[1]))
        {
            watchMany.apply(this, arguments);
        } else
        {
            watchOne.apply(this, arguments);
        }

    };


    var watchAll = function (obj, watcher, level, addNRemove)
    {

        if ((typeof obj == "string") || (!(obj instanceof Object) && !isArray(obj)))
        { //accepts only objects and array (not string)
            return;
        }

        if (isArray(obj))
        {
            defineWatcher(obj, "__watchall__", watcher, level); // watch all changes on the array
            if (level === undefined || level > 0)
            {
                for (var prop = 0; prop < obj.length; prop++)
                { // watch objects in array
                    watchAll(obj[prop], watcher, level, addNRemove);
                }
            }
        }
        else
        {
            var prop, props = [];
            for (prop in obj)
            { //for each attribute if obj is an object
                if (prop == "$val" || (!supportDefineProperty && prop === 'watchers'))
                {
                    continue;
                }

                if (Object.prototype.hasOwnProperty.call(obj, prop))
                {
                    props.push(prop); //put in the props
                }
            }
            watchMany(obj, props, watcher, level, addNRemove); //watch all items of the props
        }


        if (addNRemove)
        {
            pushToLengthSubjects(obj, "$$watchlengthsubjectroot", watcher, level);
        }
    };


    var watchMany = function (obj, props, watcher, level, addNRemove)
    {

        if ((typeof obj == "string") || (!(obj instanceof Object) && !isArray(obj)))
        { //accepts only objects and array (not string)
            return;
        }

        for (var i = 0; i < props.length; i++)
        { //watch each property
            var prop = props[i];
            watchOne(obj, prop, watcher, level, addNRemove);
        }

    };

    var watchOne = function (obj, prop, watcher, level, addNRemove)
    {
        if ((typeof obj == "string") || (!(obj instanceof Object) && !isArray(obj)))
        { //accepts only objects and array (not string)
            return;
        }

        if (isFunction(obj[prop]))
        { //dont watch if it is a function
            return;
        }
        if (obj[prop] != null && (level === undefined || level > 0))
        {
            watchAll(obj[prop], watcher, level !== undefined ? level - 1 : level); //recursively watch all attributes of this
        }

        defineWatcher(obj, prop, watcher, level);

        if (addNRemove && (level === undefined || level > 0))
        {
            pushToLengthSubjects(obj, prop, watcher, level);
        }

    };

    var unwatch = function ()
    {

        if (isFunction(arguments[1]))
        {
            unwatchAll.apply(this, arguments);
        } else if (isArray(arguments[1]))
        {
            unwatchMany.apply(this, arguments);
        } else
        {
            unwatchOne.apply(this, arguments);
        }

    };

    var unwatchAll = function (obj, watcher)
    {

        if (obj instanceof String || (!(obj instanceof Object) && !isArray(obj)))
        { //accepts only objects and array (not string)
            return;
        }

        if (isArray(obj))
        {
            var props = ['__watchall__'];
            for (var prop = 0; prop < obj.length; prop++)
            { //for each item if obj is an array
                props.push(prop); //put in the props
            }
            unwatchMany(obj, props, watcher); //watch all itens of the props
        } else
        {
            var unwatchPropsInObject = function (obj2)
            {
                var props = [];
                for (var prop2 in obj2)
                { //for each attribute if obj is an object
                    if (obj2.hasOwnProperty(prop2))
                    {
                        if (obj2[prop2] instanceof Object)
                        {
                            unwatchPropsInObject(obj2[prop2]); //recurs into object props
                        } else
                        {
                            props.push(prop2); //put in the props
                        }
                    }
                }
                unwatchMany(obj2, props, watcher); //unwatch all of the props
            };
            unwatchPropsInObject(obj);
        }
    };


    var unwatchMany = function (obj, props, watcher)
    {

        for (var prop2 in props)
        { //watch each attribute of "props" if is an object
            if (props.hasOwnProperty(prop2))
            {
                unwatchOne(obj, props[prop2], watcher);
            }
        }
    };

    var timeouts = [],
        timerID = null;
    function clearTimerID()
    {
        timerID = null;
        for (var i = 0; i < timeouts.length; i++)
        {
            timeouts[i]();
        }
        timeouts.length = 0;
    }
    var getTimerID = function ()
    {
        if (!timerID)
        {
            timerID = setTimeout(clearTimerID);
        }
        return timerID;
    }
    var registerTimeout = function (fn)
    { // register function to be called on timeout
        if (timerID == null) getTimerID();
        timeouts[timeouts.length] = fn;
    }

    // Track changes made to an array, object or an object's property 
    // and invoke callback with a single change object containing type, value, oldvalue and array splices
    // Syntax: 
    //      trackChange(obj, callback, recursive, addNRemove)
    //      trackChange(obj, prop, callback, recursive, addNRemove)
    var trackChange = function ()
    {
        var fn = (isFunction(arguments[2])) ? trackProperty : trackObject;
        fn.apply(this, arguments);
    }

    // track changes made to an object and invoke callback with a single change object containing type, value and array splices
    var trackObject = function (obj, callback, recursive, addNRemove)
    {
        var change = null, lastTimerID = -1;
        var isArr = isArray(obj);
        var level, fn = function (prop, action, newValue, oldValue)
        {
            var timerID = getTimerID();
            if (lastTimerID !== timerID)
            { // check if timer has changed since last update
                lastTimerID = timerID;
                change = {
                    type: 'update'
                }
                change['value'] = obj;
                change['splices'] = null;
                registerTimeout(function ()
                {
                    callback.call(this, change);
                    change = null;
                });
            }
            // create splices for array changes
            if (isArr && obj === this && change !== null)
            {
                if (action === 'pop' || action === 'shift')
                {
                    newValue = [];
                    oldValue = [oldValue];
                }
                else if (action === 'push' || action === 'unshift')
                {
                    newValue = [newValue];
                    oldValue = [];
                }
                else if (action !== 'splice')
                {
                    return; // return here - for reverse and sort operations we don't need to return splices. a simple update will do
                }
                if (!change.splices) change.splices = [];
                change.splices[change.splices.length] = {
                    index: prop,
                    deleteCount: oldValue ? oldValue.length : 0,
                    addedCount: newValue ? newValue.length : 0,
                    added: newValue,
                    deleted: oldValue
                };
            }

        }
        level = (recursive == true) ? undefined : 0;
        watchAll(obj, fn, level, addNRemove);
    }

    // track changes made to the property of an object and invoke callback with a single change object containing type, value, oldvalue and splices
    var trackProperty = function (obj, prop, callback, recursive, addNRemove)
    {
        if (obj && prop)
        {
            watchOne(obj, prop, function (prop, action, newvalue, oldvalue)
            {
                var change = {
                    type: 'update'
                }
                change['value'] = newvalue;
                change['oldvalue'] = oldvalue;
                if (recursive && isObject(newvalue) || isArray(newvalue))
                {
                    trackObject(newvalue, callback, recursive, addNRemove);
                }
                callback.call(this, change);
            }, 0)

            if (recursive && isObject(obj[prop]) || isArray(obj[prop]))
            {
                trackObject(obj[prop], callback, recursive, addNRemove);
            }
        }
    }


    var defineWatcher = function (obj, prop, watcher, level)
    {
        var newWatcher = false;
        var isArr = isArray(obj);

        if (!obj.watchers)
        {
            defineProp(obj, "watchers", {});
            if (isArr)
            {
                // watch array functions
                watchFunctions(obj, function (index, action, newValue, oldValue)
                {
                    addPendingChange(obj, index, action, newValue, oldValue);
                    if (level !== 0 && newValue && (isObject(newValue) || isArray(newValue)))
                    {
                        var i, n, ln, wAll, watchList = obj.watchers[prop];
                        if ((wAll = obj.watchers['__watchall__']))
                        {
                            watchList = watchList ? watchList.concat(wAll) : wAll;
                        }
                        ln = watchList ? watchList.length : 0;
                        for (i = 0; i < ln; i++)
                        {
                            if (action !== 'splice')
                            {
                                watchAll(newValue, watchList[i], (level === undefined) ? level : level - 1);
                            }
                            else
                            {
                                // watch spliced values
                                for (n = 0; n < newValue.length; n++)
                                {
                                    watchAll(newValue[n], watchList[i], (level === undefined) ? level : level - 1);
                                }
                            }
                        }
                    }
                });
            }
        }

        if (!obj.watchers[prop])
        {
            obj.watchers[prop] = [];
            if (!isArr) newWatcher = true;
        }

        for (var i = 0; i < obj.watchers[prop].length; i++)
        {
            if (obj.watchers[prop][i] === watcher)
            {
                return;
            }
        }

        obj.watchers[prop].push(watcher); //add the new watcher to the watchers array

        if (newWatcher)
        {
            var val = obj[prop];
            var getter = function ()
            {
                return val;
            };

            var setter = function (newval, delayWatcher)
            {
                var oldval = val;
                val = newval;
                if (level !== 0
                    && obj[prop] && (isObject(obj[prop]) || isArray(obj[prop]))
                    && !obj[prop].watchers)
                {
                    // watch sub properties
                    var i, ln = obj.watchers[prop].length;
                    for (i = 0; i < ln; i++)
                    {
                        watchAll(obj[prop], obj.watchers[prop][i], (level === undefined) ? level : level - 1);
                    }
                }

                //watchFunctions(obj, prop);

                if (isSuspended(obj, prop))
                {
                    resume(obj, prop);
                    return;
                }

                if (!WatchJS.noMore)
                { // this does not work with Object.observe
                    //if (JSON.stringify(oldval) !== JSON.stringify(newval)) {
                    if (oldval !== newval)
                    {
                        if (!delayWatcher)
                        {
                            callWatchers(obj, prop, "set", newval, oldval);
                        }
                        else
                        {
                            addPendingChange(obj, prop, "set", newval, oldval);
                        }
                        WatchJS.noMore = false;
                    }
                }
            };

            if (WatchJS.useDirtyCheck)
            {
                observeDirtyChanges(obj, prop, setter);
            }
            else
            {
                defineGetAndSet(obj, prop, getter, setter);
            }
        }

    };

    var callWatchers = function (obj, prop, action, newval, oldval)
    {
        if (prop !== undefined)
        {
            var ln, wl, watchList = obj.watchers[prop];
            if ((wl = obj.watchers['__watchall__']))
            {
                watchList = watchList ? watchList.concat(wl) : wl;
            }
            ln = watchList ? watchList.length : 0;
            for (var wr = 0; wr < ln; wr++)
            {
                watchList[wr].call(obj, prop, action, newval, oldval);
            }
        } else
        {
            for (var prop in obj)
            {//call all
                if (obj.hasOwnProperty(prop))
                {
                    callWatchers(obj, prop, action, newval, oldval);
                }
            }
        }
    };

    var methodNames = ['pop', 'push', 'reverse', 'shift', 'sort', 'slice', 'unshift', 'splice'];
    var defineArrayMethodWatcher = function (obj, original, methodName, callback)
    {
        defineProp(obj, methodName, function ()
        {
            var index = 0;
            var i, newValue, oldValue, response;
            // get values before splicing array 
            if (methodName === 'splice')
            {
                var start = arguments[0];
                var end = start + arguments[1];
                oldValue = obj.slice(start, end);
                newValue = [];
                for (i = 2; i < arguments.length; i++)
                {
                    newValue[i - 2] = arguments[i];
                }
                index = start;
            }
            else
            {
                newValue = arguments.length > 0 ? arguments[0] : undefined;
            }

            response = original.apply(obj, arguments);
            if (methodName !== 'slice')
            {
                if (methodName === 'pop')
                {
                    oldValue = response;
                    index = obj.length;
                }
                else if (methodName === 'push')
                {
                    index = obj.length - 1;
                }
                else if (methodName === 'shift')
                {
                    oldValue = response;
                }
                else if (methodName !== 'unshift' && newValue === undefined)
                {
                    newValue = response;
                }
                callback.call(obj, index, methodName, newValue, oldValue)
            }
            return response;
        });
    };

    var watchFunctions = function (obj, callback)
    {

        if (!isFunction(callback) || !obj || (obj instanceof String) || (!isArray(obj)))
        {
            return;
        }

        for (var i = methodNames.length, methodName; i--;)
        {
            methodName = methodNames[i];
            defineArrayMethodWatcher(obj, obj[methodName], methodName, callback);
        }

    };

    var unwatchOne = function (obj, prop, watcher)
    {
        if (prop)
        {
            if (obj.watchers && obj.watchers[prop])
            {
                if (watcher === undefined)
                {
                    delete obj.watchers[prop]; // remove all property watchers
                }
                else
                {
                    for (var i = 0; i < obj.watchers[prop].length; i++)
                    {
                        var w = obj.watchers[prop][i];
                        if (w == watcher)
                        {
                            obj.watchers[prop].splice(i, 1);
                        }
                    }
                }
            }
        } else
        {
            delete obj.watchers;
        }

        removeFromLengthSubjects(obj, prop, watcher);
        removeFromDirtyChecklist(obj, prop);
    };

    // suspend watchers until next update cycle
    var suspend = function (obj, prop)
    {
        if (obj.watchers)
        {
            var name = '__wjs_suspend__' + (prop !== undefined ? prop : '');
            obj.watchers[name] = true;
        }
    }

    var isSuspended = function (obj, prop)
    {
        return obj.watchers
            && (obj.watchers['__wjs_suspend__'] ||
                obj.watchers['__wjs_suspend__' + prop]);
    }

    // resumes preivously suspended watchers
    var resume = function (obj, prop)
    {
        registerTimeout(function ()
        {
            delete obj.watchers['__wjs_suspend__'];
            delete obj.watchers['__wjs_suspend__' + prop];
        })
    }

    var pendingTimerID = null;
    var addPendingChange = function (obj, prop, mode, newval, oldval)
    {
        pendingChanges[pendingChanges.length] = {
            obj: obj,
            prop: prop,
            mode: mode,
            newval: newval,
            oldval: oldval
        };
        if (pendingTimerID === null)
        {
            pendingTimerID = setTimeout(applyPendingChanges);
        }
    };


    var applyPendingChanges = function ()
    {
        // apply pending changes
        var change = null;
        pendingTimerID = null;
        for (var i = 0; i < pendingChanges.length; i++)
        {
            change = pendingChanges[i];
            callWatchers(change.obj, change.prop, change.mode, change.newval, change.oldval);
        }
        if (change)
        {
            pendingChanges = [];
            change = null;
        }
    }

    var loop = function ()
    {

        // check for new or deleted props
        for (var i = 0; i < lengthsubjects.length; i++)
        {

            var subj = lengthsubjects[i];

            if (subj.prop === "$$watchlengthsubjectroot")
            {

                var difference = getObjDiff(subj.obj, subj.actual);

                if (difference.added.length || difference.removed.length)
                {
                    if (difference.added.length)
                    {
                        watchMany(subj.obj, difference.added, subj.watcher, subj.level - 1, true);
                    }

                    subj.watcher.call(subj.obj, "root", "differentattr", difference, subj.actual);
                }
                subj.actual = clone(subj.obj);


            } else
            {

                var difference = getObjDiff(subj.obj[subj.prop], subj.actual);

                if (difference.added.length || difference.removed.length)
                {
                    if (difference.added.length)
                    {
                        for (var j = 0; j < subj.obj.watchers[subj.prop].length; j++)
                        {
                            watchMany(subj.obj[subj.prop], difference.added, subj.obj.watchers[subj.prop][j], subj.level - 1, true);
                        }
                    }

                    callWatchers(subj.obj, subj.prop, "differentattr", difference, subj.actual);
                }

                subj.actual = clone(subj.obj[subj.prop]);

            }

        }

        // start dirty check
        var n, value;
        if (dirtyChecklist.length > 0)
        {
            for (var i = 0; i < dirtyChecklist.length; i++)
            {
                n = dirtyChecklist[i];
                value = n.object[n.prop];
                if (!compareValues(n.orig, value))
                {
                    n.orig = clone(value);
                    n.callback(value);
                }
            }
        }

    };

    var compareValues = function (a, b)
    {
        var i, state = true;
        if (a !== b)
        {
            if (isObject(a))
            {
                for (i in a)
                {
                    if (!supportDefineProperty && i === 'watchers') continue;
                    if (a[i] !== b[i])
                    {
                        state = false;
                        break;
                    };
                }
            }
            else
            {
                state = false;
            }
        }
        return state;
    }

    var pushToLengthSubjects = function (obj, prop, watcher, level)
    {

        var actual;

        if (prop === "$$watchlengthsubjectroot")
        {
            actual = clone(obj);
        } else
        {
            actual = clone(obj[prop]);
        }

        lengthsubjects.push({
            obj: obj,
            prop: prop,
            actual: actual,
            watcher: watcher,
            level: level
        });
    };

    var removeFromLengthSubjects = function (obj, prop, watcher)
    {
        for (var i = 0; i < lengthsubjects.length; i++)
        {
            var subj = lengthsubjects[i];

            if (subj.obj == obj)
            {
                if (!prop || subj.prop == prop)
                {
                    if (!watcher || subj.watcher == watcher)
                    {
                        // if we splice off one item at position i
                        // we need to decrement i as the array is one item shorter
                        // so when we increment i in the loop statement we
                        // will land at the correct index.
                        // if it's not decremented, you won't delete all length subjects
                        lengthsubjects.splice(i--, 1);
                    }
                }
            }
        }

    };

    var removeFromDirtyChecklist = function (obj, prop)
    {
        var notInUse;
        for (var i = 0; i < dirtyChecklist.length; i++)
        {
            var n = dirtyChecklist[i];
            var watchers = n.object.watchers;
            notInUse = (
                n.object == obj
                && (!prop || n.prop == prop)
                && watchers
                && (!prop || !watchers[prop] || watchers[prop].length == 0)
            );
            if (notInUse)
            {
                // we use the same syntax as in removeFromLengthSubjects
                dirtyChecklist.splice(i--, 1);
            }
        }

    };

    setInterval(loop, 50);

    WatchJS.watch = watch;
    WatchJS.unwatch = unwatch;
    WatchJS.callWatchers = callWatchers;
    WatchJS.suspend = suspend; // suspend watchers    
    WatchJS.onChange = trackChange;  // track changes made to object or  it's property and return a single change object

    return WatchJS;

}));
function clientStorage(ActionType, Name, Value)
{
    AZClientStorage(ActionType, Name, Value);
}

function AZClientStorage(ActionType, Name, Value)
{
    var _ThisLocation = window.document.location.hostname;
    var _LocalStorageEnabled = checkLocalStorage();
    if (typeof Value === "object")
    {
        Value = JSON.stringify(Value);
    }
    if (_LocalStorageEnabled == true)
    {
        if (ActionType == "set")
        {
            setLocalStorage(_ThisLocation + "-" + Name, Value);
        }
        else if (ActionType == "get")
        {
            return getLocalStorage(_ThisLocation + "-" + Name);
        }
        else if (ActionType == "remove")
        {
            removeLocalStorage(_ThisLocation + "-" + Name);
        }
        else if (ActionType == "delete")
        {
            removeLocalStorage(_ThisLocation + "-" + Name);
        }
        else
        {
            clientStorageError("Local Storage: Wrong action type.");
        }
    }
    else
    {
        var _CookieEnabled = checkCookie();
        if (_CookieEnabled == true)
        {
            if (ActionType == "set")
            {
                setCookie(_ThisLocation + "-" + Name, Value);
            }
            else if (ActionType == "get")
            {
                return getCookie(_ThisLocation + "-" + Name);
            }
            else if (ActionType == "remove")
            {
                removeCookie(_ThisLocation + "-" + Name);
            }
            else if (ActionType == "delete")
            {
                removeCookie(_ThisLocation + "-" + Name);
            }
            else
            {
                clientStorageError("Cookies: Wrong action type.");
            }
        }
        else
        {
            clientStorageError("Local Storage / Cookies not supported.");
        }
    }
}

function checkLocalStorage()
{
    try
    {
        var _SupportsLocalStorage = !!window.localStorage && typeof localStorage.getItem === 'function' && typeof localStorage.setItem === 'function' && typeof localStorage.removeItem === 'function';
        if (_SupportsLocalStorage)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    catch (e)
    {
        return false;
    }
}

function setLocalStorage(LSName, LSValue)
{
    localStorage.setItem(LSName, LSValue);
}

function getLocalStorage(LSName)
{
    return localStorage.getItem(LSName);
}

function removeLocalStorage(LSName)
{
    localStorage.removeItem(LSName);
}

function checkCookie()
{
    try
    {
        if (navigator.cookieEnabled)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    catch (e)
    {
        return false;
    }
}

function setCookie(CName, CValue)
{
    var _Date = new Date();
    _Date.setTime(_Date.getTime() + (365 * 24 * 60 * 60 * 1000));
    var _Expires = "expires=" + _Date.toUTCString();
    document.cookie = CName + "=" + CValue + "; " + _Expires;
}

function getCookie(CName)
{
    var _Name = CName + "=";
    var _DecodedCookie = decodeURIComponent(document.cookie);
    var _CA = _DecodedCookie.split(';');
    for (var i = 0; i < _CA.length; i++)
    {
        var _C = _CA[i];
        while (_C.charAt(0) == ' ')
        {
            _C = _C.substring(1);
        }
        if (_C.indexOf(_Name) == 0)
        {
            return _C.substring(_Name.length, _C.length);
        }
    }
    return "";
}

function removeCookie(CName)
{
    document.cookie = CName + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function clientStorageError(consoleText)
{
    console.error("Client Storage Error\n" + consoleText);
}
// AZ-Functionlib v2.0.0 | (c) web2net AS

var ModalDialogScrollTop = 0;

$(document).ready(function ()
{
    (function ($)
    {
        var _$Obj = $({});
        $.each(
            {
                trigger: "publish",
                on: "subscribe",
                one: "subscribeonce",
                off: "unsubscribe"
            },
            function (key, val)
            {
                jQuery[val] = function ()
                {
                    _$Obj[key].apply(_$Obj, arguments);
                };
            });

        var _azLastScrollTop = 0;
        $(window).scroll(function ()
        {
            $.publish("functionlib/azWindowScroll",
                {
                    azWindowScrollTop: parseInt($(window).scrollTop()),
                    azWindowScrollDir: ($(window).scrollTop() > _azLastScrollTop) ? "down" : "up"
                });
            _azLastScrollTop = $(this).scrollTop();
        });

        window.setTimeout(function ()
        {
            $.publish("functionlib/azWindowResize",
                {
                    azWindowWidth: parseInt(window.innerWidth),
                    azWindowHeight: parseInt(window.innerHeight),
                    azWindowScrollTop: parseInt($(window).scrollTop()),
                    azWindowScrollLeft: parseInt($(window).scrollLeft()),
                    azWindowOrientation: (window.innerHeight > window.innerWidth) ? "portrait" : "landscape"
                });
        }, 100);
        $(window).resize(function ()
        {
            $.publish("functionlib/azWindowResize",
                {
                    azWindowWidth: parseInt(window.innerWidth),
                    azWindowHeight: parseInt(window.innerHeight),
                    azWindowScrollTop: parseInt($(window).scrollTop()),
                    azWindowScrollLeft: parseInt($(window).scrollLeft()),
                    azWindowOrientation: (window.innerHeight > window.innerWidth) ? "portrait" : "landscape"
                });
        });

        var _DefaultLanguage = AZClientStorage("get", "language", "");
        if (_DefaultLanguage === null || _DefaultLanguage === undefined)
        {
            _DefaultLanguage = "nb-NO";
        }
        var _DatePicker = false;
        $(":input").each(function ()
        {
            if ($(this).is("[type='text'], [type='password'], [type='datetime'], [type='datetime-local'], [type='date'], [type='month'], [type='time'], [type='week'], [type='number'], [type='email'], [type='url'], [type='search'], [type='tel'], [type='color']"))
            {
                _DatePicker = false;
                $(this).attr("autocomplete", "off");
                if ($(this).hasClass("az-input-animated"))
                {
                    $(this).off("focusout", AZInputAnimatedFocusout).on("focusout", AZInputAnimatedFocusout);
                }
                if ($(this).hasClass("forceuppercase"))
                {
                    $(this).off("keypress focusout", AZForceUppercaseKeypressFocusout).on("keypress focusout", AZForceUppercaseKeypressFocusout);
                }
                if ($(this).hasClass("forcelowercase"))
                {
                    $(this).off("keypress focusout", AZForceLowercaseKeypressFocusout).on("keypress focusout", AZForceLowercaseKeypressFocusout);
                }
                if ($(this).hasClass("donotpaste"))
                {
                    $(this).off("keydown", AZDoNotPaste).on("keydown", AZDoNotPaste);
                }
                if ($(this).hasClass("notenter"))
                {
                    $(this).off("keydown", AZNotEnter).on("keydown", AZNotEnter);
                }
                if ($(this).hasClass("readonly"))
                {
                    $(this).attr("readOnly", true);
                }
                if ($(this).hasClass("disabled"))
                {
                    $(this).attr("disabled", true);
                }
                if ($(this).hasClass("selecttext"))
                {
                    $(this).click(function (e)
                    {
                        $(this).select();
                    });
                }
                if ($(this).hasClass("date"))
                {
                    _DatePicker = true;
                    $(this).datepicker
                        ({
                            beforeShow: function ()
                            {
                                if ($(this).hasClass("xs") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.85em" })
                                }
                                else if ($(this).hasClass("sm") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.10em" })
                                }
                                else if ($(this).hasClass("md") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.20em" })
                                }
                                else
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.95em" })
                                }
                            },
                            onSelect: function (curDate, instance)
                            {
                                $.publish("functionlib/azSetDate",
                                    {
                                        azDateId: $(this).attr("id") === undefined ? "" : $(this).attr("id"),
                                        azDateLocalDate: curDate,
                                        azDateENUSDate: moment($(this).datepicker("getDate")).format('YYYY-MM-DD'),
                                        azDateJQElement: $(this)
                                    });
                            }
                        });
                }
                if ($(this).hasClass("pastdate"))
                {
                    _DatePicker = true;
                    $(this).datepicker(
                        {
                            beforeShow: function ()
                            {
                                if ($(this).hasClass("xs") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.85em" })
                                }
                                else if ($(this).hasClass("sm") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.10em" })
                                }
                                else if ($(this).hasClass("md") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.20em" })
                                }
                                else
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.95em" })
                                }
                            },
                            maxDate: 0,
                            yearRange: "-60:+0",
                            onSelect: function (curDate, instance)
                            {
                                $.publish("functionlib/azSetDate",
                                    {
                                        azDateId: $(this).attr("id") === undefined ? "" : $(this).attr("id"),
                                        azDateLocalDate: curDate,
                                        azDateENUSDate: moment($(this).datepicker("getDate")).format('YYYY-MM-DD'),
                                        azDateJQElement: $(this)
                                    });
                            }
                        });
                }
                if ($(this).hasClass("nopastdate"))
                {
                    _DatePicker = true;
                    $(this).datepicker(
                        {
                            beforeShow: function ()
                            {
                                if ($(this).hasClass("xs") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.85em" })
                                }
                                else if ($(this).hasClass("sm") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.10em" })
                                }
                                else if ($(this).hasClass("md") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.20em" })
                                }
                                else
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.95em" })
                                }
                            },
                            minDate: 0,
                            onSelect: function (curDate, instance)
                            {
                                $.publish("functionlib/azSetDate",
                                    {
                                        azDateId: $(this).attr("id") === undefined ? "" : $(this).attr("id"),
                                        azDateLocalDate: curDate,
                                        azDateENUSDate: moment($(this).datepicker("getDate")).format('YYYY-MM-DD'),
                                        azDateJQElement: $(this)
                                    });
                            }
                        });
                }
                if ($(this).hasClass("fromdate"))
                {
                    _DatePicker = true;
                    $(this).datepicker(
                        {
                            beforeShow: function ()
                            {
                                if ($(this).hasClass("xs") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.85em" })
                                }
                                else if ($(this).hasClass("sm") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.10em" })
                                }
                                else if ($(this).hasClass("md") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.20em" })
                                }
                                else
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.95em" })
                                }
                            },
                            numberOfMonths: 2,
                            onSelect: function (curDate, instance)
                            {
                                $(".todate").datepicker("option", "minDate", curDate);
                                $.publish("functionlib/azSetDate",
                                    {
                                        azDateId: $(this).attr("id") === undefined ? "" : $(this).attr("id"),
                                        azDateLocalDate: curDate,
                                        azDateENUSDate: moment($(this).datepicker("getDate")).format('YYYY-MM-DD'),
                                        azDateJQElement: $(this)
                                    });
                            }
                        });
                }
                if ($(this).hasClass("todate"))
                {
                    _DatePicker = true;
                    $(this).datepicker(
                        {
                            beforeShow: function ()
                            {
                                if ($(this).hasClass("xs") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.85em" })
                                }
                                else if ($(this).hasClass("sm") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.10em" })
                                }
                                else if ($(this).hasClass("md") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.20em" })
                                }
                                else
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.95em" })
                                }
                            },
                            numberOfMonths: 2,
                            onSelect: function (curDate, instance)
                            {
                                $(".fromdate").datepicker("option", "maxDate", curDate);
                                $.publish("functionlib/azSetDate",
                                    {
                                        azDateId: $(this).attr("id") === undefined ? "" : $(this).attr("id"),
                                        azDateLocalDate: curDate,
                                        azDateENUSDate: moment($(this).datepicker("getDate")).format('YYYY-MM-DD'),
                                        azDateJQElement: $(this)
                                    });
                            }
                        });
                }
                if ($(this).hasClass("frompastdate"))
                {
                    _DatePicker = true;
                    $(this).datepicker(
                        {
                            beforeShow: function ()
                            {
                                if ($(this).hasClass("xs") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.85em" })
                                }
                                else if ($(this).hasClass("sm") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.10em" })
                                }
                                else if ($(this).hasClass("md") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.20em" })
                                }
                                else
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.95em" })
                                }
                            },
                            maxDate: 0,
                            numberOfMonths: 2,
                            onSelect: function (curDate, instance)
                            {
                                $(".topastdate").datepicker("option", "minDate", curDate);
                                $.publish("functionlib/azSetDate",
                                    {
                                        azDateId: $(this).attr("id") === undefined ? "" : $(this).attr("id"),
                                        azDateLocalDate: curDate,
                                        azDateENUSDate: moment($(this).datepicker("getDate")).format('YYYY-MM-DD'),
                                        azDateJQElement: $(this)
                                    });
                            }
                        });
                }
                if ($(this).hasClass("topastdate"))
                {
                    _DatePicker = true;
                    $(this).datepicker(
                        {
                            beforeShow: function ()
                            {
                                if ($(this).hasClass("xs") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.85em" })
                                }
                                else if ($(this).hasClass("sm") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.10em" })
                                }
                                else if ($(this).hasClass("md") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.20em" })
                                }
                                else
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.95em" })
                                }
                            },
                            maxDate: 0,
                            numberOfMonths: 2,
                            onSelect: function (curDate, instance)
                            {
                                $(".frompastdate").datepicker("option", "maxDate", curDate);
                                $.publish("functionlib/azSetDate",
                                    {
                                        azDateId: $(this).attr("id") === undefined ? "" : $(this).attr("id"),
                                        azDateLocalDate: curDate,
                                        azDateENUSDate: moment($(this).datepicker("getDate")).format('YYYY-MM-DD'),
                                        azDateJQElement: $(this)
                                    });
                            }
                        });
                }
                if ($(this).hasClass("fromnopastdate"))
                {
                    _DatePicker = true;
                    $(this).datepicker(
                        {
                            beforeShow: function ()
                            {
                                if ($(this).hasClass("xs") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.85em" })
                                }
                                else if ($(this).hasClass("sm") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.10em" })
                                }
                                else if ($(this).hasClass("md") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.20em" })
                                }
                                else
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.95em" })
                                }
                            },
                            minDate: 0,
                            numberOfMonths: 2,
                            onSelect: function (curDate, instance)
                            {
                                $(".tonopastdate").datepicker("option", "minDate", curDate);
                                $.publish("functionlib/azSetDate",
                                    {
                                        azDateId: $(this).attr("id") === undefined ? "" : $(this).attr("id"),
                                        azDateLocalDate: curDate,
                                        azDateENUSDate: moment($(this).datepicker("getDate")).format('YYYY-MM-DD'),
                                        azDateJQElement: $(this)
                                    });
                            }
                        });
                }
                if ($(this).hasClass("tonopastdate"))
                {
                    _DatePicker = true;
                    $(this).datepicker(
                        {
                            beforeShow: function ()
                            {
                                if ($(this).hasClass("xs") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.85em" })
                                }
                                else if ($(this).hasClass("sm") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.10em" })
                                }
                                else if ($(this).hasClass("md") == true)
                                {
                                    $(".ui-datepicker").css({ "font-size": "1.20em" })
                                }
                                else
                                {
                                    $(".ui-datepicker").css({ "font-size": "0.95em" })
                                }
                            },
                            minDate: 0,
                            numberOfMonths: 2,
                            onSelect: function (curDate, instance)
                            {
                                $(".fromnopastdate").datepicker("option", "maxDate", curDate);
                                $.publish("functionlib/azSetDate",
                                    {
                                        azDateId: $(this).attr("id") === undefined ? "" : $(this).attr("id"),
                                        azDateLocalDate: curDate,
                                        azDateENUSDate: moment($(this).datepicker("getDate")).format('YYYY-MM-DD'),
                                        azDateJQElement: $(this)
                                    });
                            }
                        });
                }
                if (_DatePicker == true)
                {
                    $.datepicker.setDefaults($.datepicker.regional[_DefaultLanguage]);
                }
            }
            if ($(this).is("[type='range']") && $(this).hasClass("az-range"))
            {
                $(this).off("input change", AZRange).on("input change", AZRange);
            }
            if ($(this).is("textarea"))
            {
                $(this).attr("autocomplete", "false");
                if ($(this).hasClass("forceuppercase"))
                {
                    $(this).off("keypress focusout", AZForceUppercaseKeypressFocusout).on("keypress focusout", AZForceUppercaseKeypressFocusout);
                }
                if ($(this).hasClass("forcelowercase"))
                {
                    $(this).off("keypress focusout", AZForceLowercaseKeypressFocusout).on("keypress focusout", AZForceLowercaseKeypressFocusout);
                }
                if ($(this).hasClass("donotpaste"))
                {
                    $(this).off("keydown", AZDoNotPaste).on("keydown", AZDoNotPaste);
                }
                if ($(this).hasClass("notenter"))
                {
                    $(this).off("keydown", AZNotEnter).on("keydown", AZNotEnter);
                }
                if ($(this).hasClass("readonly"))
                {
                    $(this).attr("readOnly", true);
                }
                if ($(this).hasClass("disabled"))
                {
                    $(this).attr("disabled", true);
                }
                if ($(this).hasClass("selecttext"))
                {
                    $(this).click(function (e)
                    {
                        $(this).select();
                    });
                }
            }
            if ($(this).is("[type='checkbox']"))
            {
                if ($(this).hasClass("disabled"))
                {
                    $(this).attr("disabled", true);
                }
                if ($(this).hasClass("az-checkbox"))
                {
                    $(this).off("click", AZCheckboxClick).on("click", AZCheckboxClick);
                }
                if ($(this).parent("label").hasClass("az-switch"))
                {
                    $(this).off("click", AZSwitchClick).on("click", AZSwitchClick);
                }
            }
            if ($(this).is("[type='radio']"))
            {
                if ($(this).hasClass("disabled"))
                {
                    $(this).attr("disabled", true);
                }
                if ($(this).hasClass("az-radio"))
                {
                    $(this).off("click", AZRadioClick).on("click", AZRadioClick);
                }
            }
            if ($(this).is("select"))
            {
                if ($(this).hasClass("readonly"))
                {
                    $(this).attr("readOnly", true);
                }
                if ($(this).hasClass("disabled"))
                {
                    $(this).attr("disabled", true);
                }
            }
            if ($(this).is("button"))
            {
                if ($(this).hasClass("cancel"))
                {
                    if (typeof AZCancel == "function")
                    {
                        $(this).off("click", AZCancel).on("click", AZCancel);
                    }
                }
                if ($(this).hasClass("submit"))
                {
                    if (typeof AZSubmit == "function")
                    {
                        $(this).off("click", AZSubmit).on("click", AZSubmit);
                    }
                }
                if ($(this).hasClass("delete"))
                {
                    if (typeof AZDelete == "function")
                    {
                        $(this).off("click", AZDelete).on("click", AZDelete);
                    }
                }
                if ($(this).hasClass("az-navbar-button"))
                {
                    $(this).off("click", AZToggleNavbarMobile).on("click", AZToggleNavbarMobile);
                }
                if ($(this).hasClass("disabled"))
                {
                    AZDisableButton(this);
                }
            }
        });

        // Password Eye
        $(".passwordeye").off("click", AZHideShowPassword).on("click", AZHideShowPassword);

        // Animated Label
        $(".az-label-animated").off("click", AZLabelAnimatedClick).on("click", AZLabelAnimatedClick);

        // Adjust Cards Height
        $('.az-accordion-card.adjust, .az-card.adjust, .az-list-card.adjust, .az-timeline-card.adjust').matchHeight();

        // Navbar Top Menu
        var _$NavbarTopMenu = $(".az-navbar-top-content").find(".az-navbar-menu");
        var _NavbarTopHeight = _$NavbarTopMenu.parents(".az-navbar-top").height();
        _$NavbarTopMenu.off().on("click", "li > a", function (e)
        {
            var _Anchor = $(this).attr('href');
            if (_Anchor.indexOf("#") === 0)
            {
                e.preventDefault();
                if (_$NavbarTopMenu.parents(".az-navbar-top").hasClass("az-navbar-sticky") === false)
                {
                    _NavbarTopHeight = 0;
                }
                if (_$NavbarTopMenu.hasClass("az-animated") === true)
                {
                    $('html, body').stop().animate(
                        {
                            scrollTop: $(_Anchor).offset().top - _NavbarTopHeight
                        },
                        {
                            easing: 'easeInOutExpo',
                            duration: 1500
                        });
                }
                else
                {
                    $('html, body').stop().animate(
                        {
                            scrollTop: $(_Anchor).offset().top - _NavbarTopHeight
                        },
                        {
                            duration: 0
                        });
                }
                $(".az-navbar-top-content").removeClass("mobile");
            }
        });

        // Dropdown Menu
        if ($(".az-dropdown-button").is(":button"))
        {
            $(".az-dropdown-button").off("click", AZDropdown).on("click", AZDropdown);
        }
        $(".az-dropdown-button[href]").off("click", AZDropdown).on("click", AZDropdown);

        // Input Spinner
        var _ObjAttributes = {};
        var _$CurrentSpinner = null;
        var _$ParentElement = null;
        $(".az-input-spinner").each(function ()
        {
            _$CurrentSpinner = $(this).attr("disabled", true);
            _$ParentElement = $(this).parent(".az-input-group");
            _ObjAttributes = AZCheckSpinnerAttributes(this);

            if (IsEmpty(_ObjAttributes) === false)
            {
                if ((_ObjAttributes.Value < _ObjAttributes.Min) || (_ObjAttributes.Value > _ObjAttributes.Max))
                {
                    _$CurrentSpinner.remove();
                    _$ParentElement.html('<div>#Error</div>');
                }
                else
                {
                    if (_ObjAttributes.hasOwnProperty("Decimals"))
                    {
                        _$CurrentSpinner.val(numeral(_ObjAttributes.Value).format('0.00'));
                    }
                    _$ParentElement.append('<span class="az-input-group-addon az-spinner-decrement"><i class="fas fa-minus"></i></span>').append(_$CurrentSpinner).append('<span class="az-input-group-addon az-spinner-increment"><i class="fas fa-plus"></i></span>');
                    AZSetSpinnerEvents(_$ParentElement, _ObjAttributes);
                }
            }
            else
            {
                _$CurrentSpinner.remove();
                _$ParentElement.html('<div>#Error</div>');
            }
        });
    })(jQuery);
});

function AZInputAnimatedFocusout(e)
{
    var _Element = e.target || e.srcElement;
    if ($(_Element).val() != "")
    {
        $('label[for="' + _Element.id + '"]').css({ "top": "-15px" });
    }
    else
    {
        $('label[for="' + _Element.id + '"]').removeAttr('style');
    }
}

function AZForceUppercaseKeypressFocusout(e)
{
    var _Element = e.target || e.srcElement;
    $(_Element).val($(_Element).val().toUpperCase());
}

function AZForceLowercaseKeypressFocusout(e)
{
    var _Element = e.target || e.srcElement;
    $(_Element).val($(_Element).val().toLowerCase());
}

function AZDoNotPaste(e)
{
    if (e.ctrlKey == true && (e.which == 118 || e.which == 86))
    {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }
}

function AZNotEnter(e)
{
    if ((e.keyCode || e.which) == 13)
    {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }
}

function AZCheckboxClick(e)
{
    var _Element = e.target || e.srcElement;
    var _$SelectedCheckbox = $(this);
    $.publish("functionlib/azCheckboxClick",
        {
            azCheckboxId: _$SelectedCheckbox.attr("id") === undefined ? "" : _$SelectedCheckbox.attr("id"),
            azCheckboxValue: _$SelectedCheckbox.attr("value") === undefined ? "" : _$SelectedCheckbox.attr("value"),
            azCheckboxChecked: _$SelectedCheckbox.is(":checked"),
            azCheckboxJQElement: $(_Element)
        });
}

function AZRadioClick(e)
{
    var _Element = e.target || e.srcElement;
    var _$SelectedRadio = $(this);
    $.publish("functionlib/azRadioClick",
        {
            azRadioId: _$SelectedRadio.attr("id") === undefined ? "" : _$SelectedRadio.attr("id"),
            azRadioName: _$SelectedRadio.attr("name") === undefined ? "" : _$SelectedRadio.attr("name"),
            azRadioValue: _$SelectedRadio.attr("value") === undefined ? "" : _$SelectedRadio.attr("value"),
            azRadioChecked: _$SelectedRadio.is(":checked"),
            azRadioJQElement: $(_Element)
        });
}

function AZSwitchClick(e)
{
    var _Element = e.target || e.srcElement;
    var _$SelectedSwitch = $(this);
    $.publish("functionlib/azSwitchClick",
        {
            azSwitchId: _$SelectedSwitch.attr("id") === undefined ? "" : _$SelectedSwitch.attr("id"),
            azSwitchValue: _$SelectedSwitch.attr("value") === undefined ? "" : _$SelectedSwitch.attr("value"),
            azSwitchChecked: _$SelectedSwitch.is(":checked"),
            azSwitchJQElement: $(_Element)
        });
}

function AZRange(e)
{
    var _Element = e.target || e.srcElement;
    var _$SelectedRange = $(this);
    if (e.type === "input")
    {
        $.publish("functionlib/azRangeSlide",
            {
                azRangeId: _$SelectedRange.attr("id") === undefined ? "" : _$SelectedRange.attr("id"),
                azRangeValue: _$SelectedRange.val(),
                azRangeJQElement: $(_Element)
            });
    }
    else if (e.type === "change")
    {
        $.publish("functionlib/azRangeStop",
            {
                azRangeId: _$SelectedRange.attr("id") === undefined ? "" : _$SelectedRange.attr("id"),
                azRangeValue: _$SelectedRange.val(),
                azRangeJQElement: $(_Element)
            });
    }
}

function AZDisableButton(Element)
{
    var _$SelectedButton = $(Element);
    if (!_$SelectedButton.hasClass("az-button-disabled"))
    {
        _$SelectedButton.addClass("az-button-disabled");
        _$SelectedButton.attr("disabled", true);
    }
}

function AZEnableButton(Element)
{
    var _$SelectedButton = $(Element);
    if (_$SelectedButton.hasClass("az-button-disabled"))
    {
        _$SelectedButton.removeClass("az-button-disabled");
        _$SelectedButton.attr("disabled", false);
    }
}

function AZShowCoverSpin(CoverSpinText)
{
    var _CoverSpinText = CoverSpinText === undefined ? "" : CoverSpinText;
    var _$CoverSpin = $("#az-cover-spin");
    if (_$CoverSpin.length == 0)
    {
        $("body").append('<div id="az-cover-spin"><div>' + _CoverSpinText + '</div></div>');
    }
}

function AZHideCoverSpin()
{
    var _$CoverSpin = $("#az-cover-spin");
    if (_$CoverSpin.length > 0)
    {
        _$CoverSpin.remove();
    }
}

function AZToggleNavbarMobile(e)
{
    var _$NavbarTopContent = $(".az-navbar-top-content");
    if (_$NavbarTopContent.hasClass("mobile"))
    {
        _$NavbarTopContent.removeClass("mobile");
    }
    else
    {
        _$NavbarTopContent.addClass("mobile");
    }
}

function AZCloseNavbarMobile()
{
    var _$NavbarTopContent = $(".az-navbar-top-content");
    if (_$NavbarTopContent.hasClass("mobile"))
    {
        _$NavbarTopContent.removeClass("mobile");
    }
}

function AZDropdown(e)
{
    var _Element = e.target || e.srcElement;
    var _$ULDropdown = $(_Element).closest(".az-dropdown-click").find("ul.az-dropdown-content");
    $(".az-dropdown-display").not(_$ULDropdown).each(function ()
    {
        $(this).removeClass("az-dropdown-display");
    });
    if (_$ULDropdown.hasClass("az-dropdown-display"))
    {
        _$ULDropdown.removeClass("az-dropdown-display");
    }
    else
    {
        _$ULDropdown.addClass("az-dropdown-display");
        window.setTimeout(function ()
        {
            $(document).one("click", { ULDropdown: _$ULDropdown }, AZRemoveDropdown);
        }, 100);
    }
}

function AZRemoveDropdown(e)
{
    var _Element = e.target || e.srcElement;
    var _$ULDropdown = e.data.ULDropdown;
    if ($(_Element) != _$ULDropdown)
    {
        if (_$ULDropdown.hasClass("az-dropdown-display"))
        {
            _$ULDropdown.removeClass("az-dropdown-display");
        }
    }
}

function AZHideShowPassword(e)
{
    var _Element = e.target || e.srcElement;
    var _SelectedElementId = "";
    if ($(_Element).hasClass("passwordeye"))
    {
        _SelectedElementId = $(_Element).attr("data-connectedid");
    }
    else
    {
        if ($(_Element).parent().hasClass("passwordeye"))
        {
            _SelectedElementId = $(_Element).parent().attr("data-connectedid");
        }
    }
    if (_SelectedElementId != "")
    {
        var _$PasswordField = $("#" + _SelectedElementId)[0];
        if (_$PasswordField.type == "password")
        {
            if (_$PasswordField.value != "")
            {
                _$PasswordField.type = "text";
            }
        }
        else
        {
            _$PasswordField.type = "password";
        }
    }
}

function AZLabelAnimatedClick(e)
{
    var _Element = e.target || e.srcElement;
    $(_Element).siblings(":input").focus();
}

function AZSetSpinnerEvents(Element, ObjAttributes)
{
    var _SpinnerTimeOut;
    Element.children().eq(0).off("mousedown touchstart mouseup mouseleave touchend").on("mousedown touchstart", function (e)
    {
        _SpinnerTimeOut = setInterval(function ()
        {
            var _CurrentSpinnerValue = (parseFloat(Element.children().eq(1).val()) - ObjAttributes.Step);
            if (_CurrentSpinnerValue >= ObjAttributes.Min)
            {
                if (ObjAttributes.hasOwnProperty("Decimals"))
                {
                    _CurrentSpinnerValue = numeral(_CurrentSpinnerValue).format('0.00');
                }
                Element.children().eq(1).val(_CurrentSpinnerValue);
                $.publish("functionlib/azInputSpinner",
                    {
                        azInputSpinnerId: Element.attr("id") === undefined ? "" : Element.attr("id"),
                        azInputSpinnerValue: _CurrentSpinnerValue,
                        azInputSpinnerJQElement: Element
                    });
            }
        }, 100);
    }).on("mouseup mouseleave touchend", function ()
    {
        clearInterval(_SpinnerTimeOut);
    });
    Element.children().eq(2).off("mousedown touchstart mouseup mouseleave touchend").on("mousedown touchstart", function (e)
    {
        _SpinnerTimeOut = setInterval(function ()
        {
            var _CurrentSpinnerValue = (parseFloat(Element.children().eq(1).val()) + ObjAttributes.Step);
            if (_CurrentSpinnerValue <= ObjAttributes.Max)
            {
                if (ObjAttributes.hasOwnProperty("Decimals"))
                {
                    _CurrentSpinnerValue = numeral(_CurrentSpinnerValue).format('0.00');
                }
                Element.children().eq(1).val(_CurrentSpinnerValue);
                $.publish("functionlib/azInputSpinner",
                    {
                        azInputSpinnerId: Element.attr("id") === undefined ? "" : Element.attr("id"),
                        azInputSpinnerValue: _CurrentSpinnerValue,
                        azInputSpinnerJQElement: Element
                    });
            }
        }, 100);
    }).on("mouseup mouseleave touchend", function ()
    {
        clearInterval(_SpinnerTimeOut);
    });
    Element.children().eq(0).off("click").on("click", function (e)
    {
        var _CurrentSpinnerValue = (parseFloat(Element.children().eq(1).val()) - ObjAttributes.Step);
        if (_CurrentSpinnerValue >= ObjAttributes.Min)
        {
            if (ObjAttributes.hasOwnProperty("Decimals"))
            {
                _CurrentSpinnerValue = numeral(_CurrentSpinnerValue).format('0.00');
            }
            Element.children().eq(1).val(_CurrentSpinnerValue);
            $.publish("functionlib/azInputSpinner",
                {
                    azInputSpinnerId: Element.attr("id") === undefined ? "" : Element.attr("id"),
                    azInputSpinnerValue: _CurrentSpinnerValue,
                    azInputSpinnerJQElement: Element
                });
        }
    });
    Element.children().eq(2).off("click").on("click", function (e)
    {
        var _CurrentSpinnerValue = (parseFloat(Element.children().eq(1).val()) + ObjAttributes.Step);
        if (_CurrentSpinnerValue <= ObjAttributes.Max)
        {
            if (ObjAttributes.hasOwnProperty("Decimals"))
            {
                _CurrentSpinnerValue = numeral(_CurrentSpinnerValue).format('0.00');
            }
            Element.children().eq(1).val(_CurrentSpinnerValue);
            $.publish("functionlib/azInputSpinner",
                {
                    azInputSpinnerId: Element.attr("id") === undefined ? "" : Element.attr("id"),
                    azInputSpinnerValue: _CurrentSpinnerValue,
                    azInputSpinnerJQElement: Element
                });
        }
    });
}

function AZCheckSpinnerAttributes(Element)
{
    var _Attributes = 0;
    var _ObjAttributes = {};
    $.each(Element.attributes, function ()
    {
        if (this.name == "min" && this.value != "")
        {
            _ObjAttributes.Min = parseFloat(this.value);
            _Attributes += 1;
        }
        if (this.name == "max" && this.value != "")
        {
            _ObjAttributes.Max = parseFloat(this.value);
            _Attributes += 1;
        }
        if (this.name == "step" && this.value != "")
        {
            _ObjAttributes.Step = parseFloat(this.value);
            _Attributes += 1;
        }
        if (this.name == "value" && this.value != "")
        {
            _ObjAttributes.Value = parseFloat(this.value);
            _Attributes += 1;
        }
        if (this.name == "data-decimals" && this.value != "")
        {
            _ObjAttributes.Decimals = parseFloat(this.value);
        }
    });
    if (_Attributes !== 4)
    {
        _ObjAttributes = {};
    }
    return _ObjAttributes;
}

// AZ Accordion
function AZAccordion(Options)
{
    if (this instanceof AZAccordion === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azAccordionId: "",
            azAccordionHeightStyle: "content",
            azAccordionCollapsible: true,
            azAccordionOpenEvent: "click",
            azAccordionHeaderBackgroundColor: "#0078D7",
            azAccordionHeaderColor: "#FFFFFF",
            azAccordionHeaderHoverBackgroundColor: "#0bb2d4",
            azAccordionHeaderHoverColor: "#FFFFFF",
            azAccordionArticleBackgroundColor: "#FFFFFF",
            azAccordionArticleColor: "#000000",
            azAccordionIconClosed: "fas fa-plus",
            azAccordionIconOpen: "fas fa-minus",
            azAccordionSlideDown: 100,
            azAccordionSlideUp: 100
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azAccordionId != "")
        {
            _Main.$Accordion = $("#" + _Main.Options.azAccordionId);
            _Main.$AccordionCard = _Main.$Accordion.children(".az-accordion-card");
            _Main.$Header = _Main.$AccordionCard.children("header").append('<i class="' + _Main.Options.azAccordionIconClosed + '"></i>').css({ "background-color": _Main.Options.azAccordionHeaderBackgroundColor, "color": _Main.Options.azAccordionHeaderColor });
            _Main.$Article = _Main.$AccordionCard.children("article").css({ "background-color": _Main.Options.azAccordionArticleBackgroundColor, "color": _Main.Options.azAccordionArticleColor });

            _Main.$Header.off().on("mouseenter", function ()
            {
                $(this).css({ "background-color": _Main.Options.azAccordionHeaderHoverBackgroundColor, "color": _Main.Options.azAccordionHeaderHoverColor });
            }).on("mouseleave", function ()
            {
                $(this).css({ "background-color": _Main.Options.azAccordionHeaderBackgroundColor, "color": _Main.Options.azAccordionHeaderColor });
            })

            _Main.MaxArticleHeight = 0;
            _Main.azArticleHeight = function ()
            {
                _Main.MaxArticleHeight = 0;
                _Main.$Article.css({ height: "inherit" });
                _Main.$Article.each(function ()
                {
                    _Main.MaxArticleHeight = Math.max(_Main.MaxArticleHeight, $(this).height());
                });
                if (_Main.MaxArticleHeight > 0)
                {
                    _Main.$Article.height(_Main.MaxArticleHeight);
                }
            }

            _Main.azSelectAccordion = function (SelectedIndex)
            {
                azExecAccordion(_Main.$AccordionCard.eq(SelectedIndex).children("header"));
            }

            _Main.azChangeText = function (SelectedIndex, SelectedText)
            {
                _Main.azSelectAccordion(SelectedIndex);
                window.setTimeout(function ()
                {
                    _Main.$AccordionCard.eq(SelectedIndex).children("article").fadeOut(function ()
                    {
                        _Main.$AccordionCard.eq(SelectedIndex).children("article").html(SelectedText);
                    }).fadeIn();
                }, 500);
            }

            _Main.$Accordion.off().on(_Main.Options.azAccordionOpenEvent, ".az-accordion-card > header", function (e)
            {
                azExecAccordion($(this));
            });

            _Main.AccordionActivated = "";
            _Main.AccordionDeactivated = "";
            function azExecAccordion($SelectedAccordionHeader)
            {
                if ($SelectedAccordionHeader.hasClass("az-accordion-header-active") === true)
                {
                    if (_Main.Options.azAccordionCollapsible === true)
                    {
                        $SelectedAccordionHeader.removeClass("az-accordion-header-active");
                        $SelectedAccordionHeader.siblings("article").slideUp(_Main.Options.azAccordionSlideUp).removeClass("az-accordion-article-active");
                        $("i", $SelectedAccordionHeader).removeClass(_Main.Options.azAccordionIconOpen).addClass(_Main.Options.azAccordionIconClosed);

                        if (_Main.AccordionActivated == $SelectedAccordionHeader.parent().index())
                        {
                            _Main.AccordionActivated = "";
                        }
                        $.publish("functionlib/azAccordionHeader",
                            {
                                azAccordionId: _Main.Options.azAccordionId,
                                azAccordionStatus: "closed",
                                azAccordionActivated: _Main.AccordionActivated,
                                azAccordionDeactivated: _Main.AccordionDeactivated,
                                azAccordionHeaderJQElement: $($SelectedAccordionHeader)
                            });
                        _Main.AccordionDeactivated = $SelectedAccordionHeader.parent().index();
                    }
                    else
                    {
                        if (_Main.AccordionDeactivated == $SelectedAccordionHeader.parent().index())
                        {
                            _Main.AccordionDeactivated = "";
                        }
                        $.publish("functionlib/azAccordionHeader",
                            {
                                azAccordionId: _Main.Options.azAccordionId,
                                azAccordionStatus: "open",
                                azAccordionActivated: $SelectedAccordionHeader.parent().index(),
                                azAccordionDeactivated: _Main.AccordionDeactivated,
                                azAccordionHeaderJQElement: $($SelectedAccordionHeader)
                            });
                        _Main.AccordionDeactivated = $SelectedAccordionHeader.parent().index();
                    }
                }
                else
                {
                    _Main.$Header.removeClass("az-accordion-header-active");
                    _Main.$Article.slideUp(_Main.Options.azAccordionSlideUp).removeClass("az-accordion-article-active");
                    $("i", _Main.$Header).removeClass(_Main.Options.azAccordionIconOpen).addClass(_Main.Options.azAccordionIconClosed);

                    $SelectedAccordionHeader.addClass("az-accordion-header-active");
                    $SelectedAccordionHeader.siblings("article").slideDown(_Main.Options.azAccordionSlideDown).addClass("az-accordion-article-active");
                    $("i", $SelectedAccordionHeader).removeClass(_Main.Options.azAccordionIconClosed).addClass(_Main.Options.azAccordionIconOpen);

                    if (_Main.AccordionDeactivated == $SelectedAccordionHeader.parent().index())
                    {
                        _Main.AccordionDeactivated = "";
                    }
                    $.publish("functionlib/azAccordionHeader",
                        {
                            azAccordionId: _Main.Options.azAccordionId,
                            azAccordionStatus: "open",
                            azAccordionActivated: $SelectedAccordionHeader.parent().index(),
                            azAccordionDeactivated: _Main.AccordionDeactivated,
                            azAccordionHeaderJQElement: $($SelectedAccordionHeader)
                        });
                    _Main.AccordionDeactivated = $SelectedAccordionHeader.parent().index();
                }
            }

            if (_Main.Options.azAccordionHeightStyle == "auto")
            {
                _Main.azArticleHeight();
                $(window).resize(function ()
                {
                    _Main.azArticleHeight();
                });
            }
            if (_Main.Options.azAccordionCollapsible == false)
            {
                _Main.azSelectAccordion(0);
            }
            $.publish("functionlib/azAccordionReady", _Main);
        }
    }
    else
    {
        return new AZAccordion(Options);
    }
}

// AZ Ajax
function AZAjax(Options)
{
    if (this instanceof AZAjax === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azAjaxUrl: "",
            azAjaxDataType: "json",
            azAjaxType: "POST",
            azAjaxContentType: "application/json; charset=utf-8",
            azAjaxObjHeaders: {},
            azAjaxTimeout: 15000,
            azAjaxObjToSend: {}
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azAjaxUrl != "")
        {
            _Main.AjaxOptions =
            {
                url: _Main.Options.azAjaxUrl,
                dataType: _Main.Options.azAjaxDataType,
                type: _Main.Options.azAjaxType,
                contentType: _Main.Options.azAjaxContentType,
                headers: _Main.Options.azAjaxObjHeaders,
                timeout: _Main.Options.azAjaxTimeout
            };
            if (IsEmpty(_Main.Options.azAjaxObjToSend) === false)
            {
                _Main.AjaxOptions.data = JSON.stringify(_Main.Options.azAjaxObjToSend);
            }
            $.ajaxSetup({ cache: false });
            return $.ajax(_Main.AjaxOptions).promise();
        }
        else
        {
            return $.Deferred().resolve("");
        }
    }
    else
    {
        return new AZAjax(Options);
    }
}

// AZ Background Slider
function AZBackgroundSlider(Options)
{
    if (this instanceof AZBackgroundSlider === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azBackgroundSliderId: "",
            azBackgroundSliderDir: "horizontal",
            azBackgroundSliderWidth: 500,
            azBackgroundSliderHeight: 300
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azBackgroundSliderId != "")
        {
            _Main.$BackgroundSlider = $("#" + _Main.Options.azBackgroundSliderId);
            _Main.$BackgroundSliderWrapper = _Main.$BackgroundSlider.children(".az-background-slider-wrapper");
            _Main.$BackgroundSliderContent = _Main.$BackgroundSliderWrapper.children(".az-background-slider-content");

            if (_Main.$BackgroundSliderContent.length > 0)
            {
                _Main.SliderWidth = _Main.Options.azBackgroundSliderWidth;
                _Main.SliderHeight = _Main.Options.azBackgroundSliderHeight;
                _Main.ContentWidth = _Main.Options.azBackgroundSliderWidth;
                _Main.ContentHeight = _Main.Options.azBackgroundSliderHeight;
                _Main.ContentMaxWidth = 0;
                _Main.ContentMaxHeight = 0;
                _Main.LeftRightMargin = 0;
                _Main.TopBottomMargin = 0;

                if (_Main.Options.azBackgroundSliderWidth > window.innerWidth)
                {
                    _Main.ContentWidth = (window.innerWidth - 24);
                }

                _Main.$BackgroundSliderContent.css({ "width": _Main.ContentWidth, "height": _Main.ContentHeight });
                _Main.$BackgroundSliderContent.each(function (Index, Content)
                {
                    if ($(Content).outerWidth(true) > _Main.ContentMaxWidth)
                    {
                        _Main.ContentMaxWidth = $(Content).outerWidth(true);
                    }
                    if ($(Content).outerHeight(true) > _Main.ContentMaxHeight)
                    {
                        _Main.ContentMaxHeight = $(Content).outerHeight(true);
                    }
                });
                if (_Main.ContentMaxWidth > _Main.$BackgroundSliderContent.innerWidth())
                {
                    _Main.LeftRightMargin = ((_Main.ContentMaxWidth - _Main.$BackgroundSliderContent.innerWidth()) / 2)
                }
                if (_Main.ContentMaxHeight > _Main.$BackgroundSliderContent.innerHeight())
                {
                    _Main.TopBottomMargin = ((_Main.ContentMaxHeight - _Main.$BackgroundSliderContent.innerHeight()) / 2)
                }

                _Main.$BackgroundSliderContent.find("img").css({ "width": _Main.ContentWidth, "height": _Main.ContentHeight });

                if (_Main.Options.azBackgroundSliderDir === "horizontal")
                {
                    _Main.$BackgroundSliderWrapper.css({ "width": (_Main.$BackgroundSliderContent.length * _Main.ContentMaxWidth) });
                    _Main.$BackgroundSlider.css({ "overflow-x": "scroll", "width": "100%", "height": (_Main.ContentMaxHeight + 12) });
                    _Main.$BackgroundSliderContent.css({ "float": "left", "margin-left": _Main.LeftRightMargin, "margin-right": _Main.LeftRightMargin, "margin-top": 0, "margin-bottom": 0 });
                }
                else
                {
                    _Main.$BackgroundSlider.css({ "overflow-y": "scroll", "width": "100%", "height": _Main.SliderHeight });
                    if (_Main.Options.azBackgroundSliderWidth < window.innerWidth)
                    {
                        _Main.$BackgroundSlider.css({ "width": (_Main.ContentMaxWidth + 12) });
                    }
                    _Main.$BackgroundSliderContent.css({ "margin-left": 0, "margin-right": 0, "margin-top": _Main.TopBottomMargin, "margin-bottom": _Main.TopBottomMargin });
                }

                $.publish("functionlib/azBackgroundSliderReady", _Main);
            }
        }
    }
    else
    {
        return new AZBackgroundSlider(Options);
    }
}

// AZ Circular Bar
function AZCircularBar(Options)
{
    if (this instanceof AZCircularBar === true)
    {
        var _Defaults =
        {
            azCircularBarId: "",
            azCircularBarSize: 120,
            azCircularBarColor: "#BBBBBB",
            azCircularBarValue: 0,
            azCircularBarValueColor: "#0078D7",
            azCircularBarLabel: "",
            azCircularBarCaption: "",
            azCircularBarCaptionColor: ""
        };

        var _Main;
        if (Options && Options.length > 0)
        {
            $.each(Options, function (Index, ObjCurrentOption)
            {
                _Main = new AktivateAZCircularBar(ObjCurrentOption);
                $.publish("functionlib/azCircularBarReady", _Main)
            });
        }
        else if (IsEmpty(Options) === false)
        {
            _Main = new AktivateAZCircularBar(Options);
            $.publish("functionlib/azCircularBarReady", _Main)
        }

        function AktivateAZCircularBar(ObjCurrentOption)
        {
            this.Options = $.extend({}, _Defaults, ObjCurrentOption || {});
            if (this.Options.azCircularBarId != "")
            {
                this.$CircularBar = $("#" + this.Options.azCircularBarId);
                this.$CircularBar.$Slice = $('<div></div>').addClass("slice");
                this.$CircularBar.$Bar = $('<div></div>').addClass("bar").css({ "border-color": this.Options.azCircularBarValueColor });
                this.$CircularBar.$Fill = $('<div></div>').addClass("fill").css({ "border-color": this.Options.azCircularBarValueColor });
                this.$CircularBar.$Label = $('<span></span>').addClass("label").html(this.Options.azCircularBarLabel);
                if (this.Options.azCircularBarCaption != "")
                {
                    this.$CircularBar.$Caption = $('<span></span>').addClass("caption").css({ "top": this.Options.azCircularBarSize, "color": this.Options.azCircularBarCaptionColor }).html(this.Options.azCircularBarCaption);
                }
                this.$CircularBar.$Slice.append(this.$CircularBar.$Bar).append(this.$CircularBar.$Fill);
                this.$CircularBar.append(this.$CircularBar.$Label).append(this.$CircularBar.$Slice).append(this.$CircularBar.$Caption).addClass("c100 p" + this.Options.azCircularBarValue).css({ "background-color": this.Options.azCircularBarColor, "font-size": this.Options.azCircularBarSize });

                this.ChangeCircularBar = function (Options)
                {
                    this.$CircularBar.$Bar.css({ "border-color": Options.azCircularBarValueColor });
                    this.$CircularBar.$Fill.css({ "border-color": Options.azCircularBarValueColor });
                    this.$CircularBar.$Label.html(Options.azCircularBarLabel);
                    this.$CircularBar.$Caption.css({ "top": Options.azCircularBarSize, "color": Options.azCircularBarCaptionColor }).html(Options.azCircularBarCaption);
                    this.$CircularBar.removeClass().addClass("c100 p" + Options.azCircularBarValue).css({ "background-color": Options.azCircularBarColor, "font-size": Options.azCircularBarSize });
                }
                return this;
            }
        }
    }
    else
    {
        return new AZCircularBar(Options);
    }
}

// AZ Grid
function AZGrid(Options)
{
    if (this instanceof AZGrid === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azGridId: "",
            azGridData: {},
            azGridSetting: [],
            azGridLanguage: {},
            azGridFooter: true,
            azGridTableHeaderColor: "",
            azGridTableHeaderBackgroundColor: "",
            azGridTableDataColor: "",
            azGridTableDataOddBackgroundColor: "",
            azGridTableDataEvenBackgroundColor: "",
            azGridTableDataMouseoverColor: "",
            azGridTableDataOddMouseoverBackgroundColor: "",
            azGridTableDataEvenMouseoverBackgroundColor: "",
            azGridFooterColor: "",
            azGridFooterBackgroundColor: ""
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azGridId !== "" && _Main.Options.azGridData.hasOwnProperty("Data") && _Main.Options.azGridData.Data.length > 0 && _Main.Options.azGridSetting.length > 0)
        {
            _Main.GridMeta = {};
            _Main.$GridMainTableHeaderRow = "";
            _Main.$GridMainTableDataRow = "";
            _Main.$GridMainTableFooterRow = "";

            // Main
            _Main.$GridMainTable = $('<table></table>').addClass("az-grid-table");

            // Header
            _Main.$GridMainTableHeaderRow = $("<tr></tr>");
            _Main.$GridTableHeader = $('<table></table>').addClass("az-grid-table az-grid-table-header");
            _Main.$GridTableHeaderRow = $("<tr></tr>");
            if (_Main.Options.azGridTableHeaderBackgroundColor !== "")
            {
                _Main.$GridTableHeader.css({ "background-color": _Main.Options.azGridTableHeaderBackgroundColor })
            }
            if (_Main.Options.azGridTableHeaderColor !== "")
            {
                _Main.$GridTableHeader.css({ "color": _Main.Options.azGridTableHeaderColor })
            }

            // Data
            _Main.$GridMainTableDataRow = $("<tr></tr>");
            _Main.$GridTableData = $('<table></table>').addClass("az-grid-table az-grid-table-data");
            if (_Main.Options.azGridTableDataColor !== "")
            {
                _Main.$GridTableData.css({ "color": _Main.Options.azGridTableDataColor })
            }
            var _NumberOfProperties = 0;
            for (var _NumberOf in _Main.Options.azGridData.Data[0])
            {
                _NumberOfProperties += 1;
            }
            _Main.GridDataLength = _NumberOfProperties;

            // Meta
            _Main.Options.azGridData.Meta.IsValid = true;
            if (IsEmpty(_Main.Options.azGridData.Meta) === false)
            {
                var _MetaPropertiesList = ["PageCurrent", "PageSize", "RecordCount"];
                $.each(_MetaPropertiesList, function (Index, Value)
                {
                    if (_Main.Options.azGridData.Meta.hasOwnProperty(Value) === false || _Main.Options.azGridData.Meta[Value] === undefined || _Main.Options.azGridData.Meta[Value] == 0 || _Main.Options.azGridData.Meta[Value] == "")
                    {
                        _Main.Options.azGridData.Meta.IsValid = false;
                        return false;
                    }
                });
                if (_Main.Options.azGridData.Meta.IsValid === true)
                {
                    _Main.Options.azGridData.Meta.PageCount = parseInt(Math.ceil(parseFloat(_Main.Options.azGridData.Meta.RecordCount) / parseFloat(_Main.Options.azGridData.Meta.PageSize)));
                }
            }

            // Language
            _Main.Options.azGridLanguage.IsValid = false;
            if (IsEmpty(_Main.Options.azGridLanguage) === false && _Main.Options.azGridLanguage.hasOwnProperty("SingleElements") === true)
            {
                _Main.Options.azGridLanguage.IsValid = true;
            }

            // Settings
            _Main.Options.azGridSetting.IsValid = false;
            if (_Main.Options.azGridSetting.length === _Main.GridDataLength)
            {
                _Main.Options.azGridSetting.IsValid = true;
                $.each(_Main.Options.azGridSetting, function (Index, GridSettingObj)
                {
                    _Main.$GridTableHeaderCell = $("<td></td>").html(SetHeaderValue(GridSettingObj.name));
                    _Main.$GridTableHeaderRow.append(SetTableCellSize("Header", GridSettingObj, _Main.$GridTableHeaderCell, GridSettingObj.name));
                });
            }

            _Main.azSetGridData = function ()
            {
                $("tr", _Main.$GridTableData).remove();
                $.each(_Main.Options.azGridData.Data, function (Index, GridDataObj)
                {
                    _Main.$GridTableDataRow = $("<tr></tr>");
                    $.each(GridDataObj, function (Key, Value)
                    {
                        var _GridSettingObj = getSelectedObj(_Main.Options.azGridSetting, "name", Key);
                        if (IsEmpty(_GridSettingObj) === false)
                        {
                            _Main.$GridTableDataCell = $("<td></td>").html(SetDataValue(_GridSettingObj, Value));
                            _Main.$GridTableDataRow.append(SetTableCellSize("Data", _GridSettingObj, _Main.$GridTableDataCell, ""));
                        }
                    });
                    _Main.$GridTableData.append(_Main.$GridTableDataRow);
                });
            }
            _Main.azSetGridData();

            // Header
            _Main.$GridTableHeader.append(_Main.$GridTableHeaderRow);
            _Main.$GridMainTableHeaderRow.append(_Main.$GridTableHeader);
            _Main.$GridTableHeaderRow.off().on("click", "td", function (e)
            {
                var _HeaderCellObj = e.target || e.srcElement;
                if ($(_HeaderCellObj).hasClass("icon"))
                {
                    SetHeaderSort(_HeaderCellObj, _Main.$GridTableHeaderRow);
                }
            });

            // Data
            _Main.$GridMainTableHeaderRow.append(_Main.$GridTableHeader);
            _Main.$GridMainTableDataRow.append(_Main.$GridTableData);

            // Footer
            _Main.$GridMainTableFooterRow = $("<tr></tr>");
            if (_Main.Options.azGridFooter === true)
            {
                _Main.$GridTableFooter = $('<table></table>').addClass("az-grid-table az-grid-table-footer");
                if (_Main.Options.azGridFooterBackgroundColor !== "")
                {
                    _Main.$GridTableFooter.css({ "background-color": _Main.Options.azGridFooterBackgroundColor });
                }
                if (_Main.Options.azGridFooterColor !== "")
                {
                    _Main.$GridTableFooter.css({ "color": _Main.Options.azGridFooterColor });
                }
            }
            if (_Main.Options.azGridFooter === true)
            {
                _Main.$GridTableFooter.append($(GetFooterHTML()));
                _Main.$GridMainTableFooterRow.append(_Main.$GridTableFooter);
                _Main.$GridTableFooter.off("click").on("click", ".az-form-group", function (e)
                {
                    var _Element = e.target || e.srcElement;
                    var _Self = this;

                    if ($(_Element).hasClass("az-button") || $(_Element).hasClass("fas"))
                    {
                        //console.log(_Main.Options.azGridData.Meta.OrderByClause)
                        //_Main.Options.azGridData.Meta.PageCount = ;
                        //$(_Self).find("button").data("id")
                    }
                });
                _Main.$GridTableFooter.off("change").on("change", ".SizeGridPage", function (e)
                {
                    // TODO


                    _Main.GridMeta.PageCurrent = 1;
                    _Main.GridMeta.PageSize = Number($(this).val());
                    if (_Main.GridMeta.OrderByClause === undefined || _Main.GridMeta.OrderByClause === "")
                    {
                        _Main.GridMeta.OrderByClause = "";
                    }
                    if (_Main.GridMeta.SearchClause === undefined || _Main.GridMeta.SearchClause == "")
                    {
                        _Main.GridMeta.SearchClause = "";
                    }
                    $.publish("functionlib/azGridMeta", _Main.GridMeta);
                });
            }

            function changeGridPage(SelectedPage)
            {
                if (SelectedPage == "cmdFirstGridPage")
                {
                    if (PageCurrent == 1)
                    {
                        return false;
                    }
                    ObjPageData.PageCurrent = 1;
                }
                else if (SelectedPage == "cmdPreviousGridPage")
                {
                    if (PageCurrent == 1)
                    {
                        return false;
                    }
                    ObjPageData.PageCurrent = (parseInt(PageCurrent) - 1);
                }
                else if (SelectedPage == "cmdNextGridPage")
                {
                    if (PageCurrent == PageCount)
                    {
                        return false;
                    }
                    ObjPageData.PageCurrent = (parseInt(PageCurrent) + 1);
                }
                else if (SelectedPage == "cmdLastGridPage")
                {
                    if (PageCurrent == PageCount)
                    {
                        return false;
                    }
                    ObjPageData.PageCurrent = PageCount;
                }
 
            }

            // Main
            _Main.$GridMainTable.append(_Main.$GridMainTableHeaderRow).append(_Main.$GridMainTableDataRow).append(_Main.$GridMainTableFooterRow);
            SetDataColorAndHover();
            $("#" + _Main.Options.azGridId).html(_Main.$GridMainTable);

            function SetHeaderValue(Value)
            {
                var _ValueReturn = "";
                if (_Main.Options.azGridLanguage.IsValid === true && Value != "")
                {
                    _ValueReturn = _Main.Options.azGridLanguage.SingleElements["GridHeader" + Value];
                }
                else
                {
                    _ValueReturn = Value;
                }
                return _ValueReturn;
            }

            function SetDataValue(GridSettingObj, Value)
            {
                if (GridSettingObj.hasOwnProperty("datatype") && Value != "")
                {
                    if (GridSettingObj.datatype.toLowerCase() == "date")
                    {
                        return AZSetDateFormat(Value).LocalDate;
                    }
                    else if (GridSettingObj.datatype.toLowerCase() == "datetime")
                    {
                        return AZSetDateTimeFormat(Value).LocalDateTime;
                    }
                    else if (GridSettingObj.datatype.toLowerCase() == "time")
                    {
                        return AZSetTimeFormat(moment('0001-01-01 ' + Value)).LocalTime;
                    }
                    else if (GridSettingObj.datatype.toLowerCase() == "decimal")
                    {
                        return numeral(Value).format('0.00');
                    }
                    else if (GridSettingObj.datatype.toLowerCase() == "bytes")
                    {
                        return AZBytesConverter(Value);
                    }
                    else if (GridSettingObj.datatype.toLowerCase() == "email")
                    {
                        return '<a href="mailto:' + Value + '">' + Value + '</a>';
                    }
                    else if (GridSettingObj.datatype.toLowerCase() == "web")
                    {
                        return '<a href="' + Value + '" target="_blank">' + Value + '</a>';
                    }
                    else
                    {
                        return Value;
                    }
                }
                else
                {
                    return Value;
                }
            }

            function SetTableCellSize(Type, GridSettingObj, $GridTableCell, Value)
            {
                var _$GridTableCellReturn = {};
                if (_Main.Options.azGridSetting.IsValid === true)
                {
                    if (GridSettingObj.hasOwnProperty("width") === true)
                    {
                        _$GridTableCellReturn = $GridTableCell.css({ "width": GridSettingObj.width });
                    }
                    else
                    {
                        _$GridTableCellReturn = $GridTableCell;
                    }
                }
                else
                {
                    _$GridTableCellReturn = $GridTableCell.css({ "width": (100 / _Main.GridDataLength) + "%" });
                }
                if (Type.toLowerCase() === "header" && GridSettingObj.hasOwnProperty("sort") === true && GridSettingObj.sort === true)
                {
                    _$GridTableCellReturn = _$GridTableCellReturn.data("orderby", Value).addClass("icon sort");
                }
                return _$GridTableCellReturn;
            }

            function SetDataColorAndHover()
            {
                if (_Main.Options.azGridTableDataOddBackgroundColor !== "")
                {
                    $("tr:odd", _Main.$GridTableData).css({ "background-color": _Main.Options.azGridTableDataOddBackgroundColor });
                }
                if (_Main.Options.azGridTableDataEvenBackgroundColor !== "")
                {
                    $("tr:even", _Main.$GridTableData).css({ "background-color": _Main.Options.azGridTableDataEvenBackgroundColor });
                }
                if (_Main.Options.azGridTableDataOddMouseoverBackgroundColor !== "" && _Main.Options.azGridTableDataMouseoverColor !== "")
                {
                    $("tr:odd", _Main.$GridTableData).mouseover(function ()
                    {
                        $(this).css({ "background-color": _Main.Options.azGridTableDataOddMouseoverBackgroundColor, "color": _Main.Options.azGridTableDataMouseoverColor });
                    }).mouseout(function ()
                    {
                        $(this).css({ "background-color": _Main.Options.azGridTableDataOddBackgroundColor, "color": _Main.Options.azGridTableDataColor });
                    });
                }
                if (_Main.Options.azGridTableDataEvenMouseoverBackgroundColor !== "" && _Main.Options.azGridTableDataMouseoverColor !== "")
                {
                    $("tr:even", _Main.$GridTableData).mouseover(function ()
                    {
                        $(this).css({ "background-color": _Main.Options.azGridTableDataEvenMouseoverBackgroundColor, "color": _Main.Options.azGridTableDataMouseoverColor });
                    }).mouseout(function ()
                    {
                        $(this).css({ "background-color": _Main.Options.azGridTableDataEvenBackgroundColor, "color": _Main.Options.azGridTableDataColor });
                    });
                }
            }

            function SetHeaderSort(HeaderCellObj, $GridTableHeaderRow)
            {
                $("td.icon", $GridTableHeaderRow).not(HeaderCellObj).each(function ()
                {
                    $(this).removeClass("sort sort-up sort-down sort-asc sort-desc").addClass("sort");
                });

                var _Order = "";
                var _OrderByClause = "";
                var _OrderBy = $(HeaderCellObj).data("orderby");
                if ($(HeaderCellObj).hasClass("sort-asc"))
                {
                    $(HeaderCellObj).removeClass("sort sort-up sort-down sort-asc").addClass("sort-down sort-desc");
                    _Order = "DESC";
                    _OrderByClause = _OrderBy + " " + _Order
                }
                else if ($(HeaderCellObj).hasClass("sort-desc"))
                {
                    $(HeaderCellObj).removeClass("sort sort-up sort-down sort-desc").addClass("sort-up sort-asc");
                    _Order = "ASC";
                    _OrderByClause = _OrderBy + " " + _Order
                }
                else
                {
                    $(HeaderCellObj).removeClass("sort sort-up sort-down sort-desc").addClass("sort-up sort-asc");
                    _Order = "ASC";
                    _OrderByClause = _OrderBy + " " + _Order
                }

                console.log(_OrderByClause)

                if (_Main.Options.azGridData.Meta.PageCount === _Main.Options.azGridData.Meta.PageCurrent)
                {
                    _Main.Options.azGridData.Data = AZSortJSONArray(_Main.Options.azGridData.Data, _OrderBy, _Order)
                    _Main.azSetGridData();
                }
                else
                {
                    _Main.GridMeta.PageCurrent = 1;
                    _Main.GridMeta.PageSize = Number($(".SizeGridPage", _Main.$GridTableFooter).val());
                    _Main.GridMeta.OrderByClause = _OrderByClause;
                    _Main.GridMeta.SearchClause = "";
                    $.publish("functionlib/azGridMeta", _Main.GridMeta);
                }
            }

            function GetFooterHTML()
            {
                var _HTML = "";
                _HTML = '<tr height="32px">';
                _HTML += '<td align="center">';
                if (_Main.Options.azGridData.Meta.IsValid === true)
                {
                    _HTML += '<table>';
                    _HTML += '<tr>';
                    _HTML += '<td class="az-form-group"><button type="button" data-id="cmdFirstGridPage" class="az-button az-button-block default az-shadow-1 az-shadow-hover-2"><i class="fas fa-angle-double-left"></i></button></td>';
                    _HTML += '<td class="az-form-group"><button type="button" class="az-button az-button-block default az-shadow-1 az-shadow-hover-2 cmdPreviousGridPage"><i class="fas fa-angle-left"></i></button></td>';
                    _HTML += '<td class="az-form-group"><button type="button" class="az-button az-button-block default az-shadow-1 az-shadow-hover-2 cmdNextGridPage"><i class="fas fa-angle-right"></i></button></td>';
                    _HTML += '<td class="az-form-group"><button type="button" class="az-button az-button-block default az-shadow-1 az-shadow-hover-2 cmdLastGridPage"><i class="fas fa-angle-double-right"></i></button></td>';
                    _HTML += '<td class="InfoGridPage">Page 1 of 1</td>';
                    _HTML += '<td class="az-form-group">';
                    _HTML += '<select class="az-select SizeGridPage">';
                    _HTML += '<option value="10">10</option>';
                    _HTML += '<option value="20">20</option>';
                    _HTML += '<option value="30">30</option>';
                    _HTML += '<option value="40">40</option>';
                    _HTML += '<option value="50">50</option>';
                    _HTML += '</select>';
                    _HTML += '</td>';
                    _HTML += '</tr>';
                    _HTML += '</table>';
                }
                else
                {
                    _HTML += '&nbsp;';
                }
                _HTML += '</td>';
                _HTML += '</tr>';
                return _HTML;
            }
        }
    }
    else
    {
        return new AZGrid(Options);
    }
}



//var _ReturnObj = {};
//var _ObjSpanCheckBox = {};
//var _ObjCheckBox = {};
//$("tr > td", _Main.$GridTableData).each(function ()
//{
//    if ($(this).children().is("span") == true)
//    {
//        _ObjSpanCheckBox = $(this).children();
//        _ObjCheckBox = _ObjSpanCheckBox.find(":input");
//        if (_ObjCheckBox.is(":input") == true)
//        {
//            _ObjCheckBox.attr("id", _ObjSpanCheckBox.attr("data-id"));
//            _ObjCheckBox.addClass("az-checkbox");
//        }
//    }
//});

//function setGridFunctions(SelectedArea)
//{
//    if (SelectedArea != "" && SelectedArea != undefined && SelectedArea != null)
//    {
//        SelectedArea = $(SelectedArea);
//    }
//    else
//    {
//        SelectedArea = "";
//    }
//    $(":input", SelectedArea).each(function ()
//    {
//        if ($(this).is("button"))
//        {
//            if ($(this).hasClass("firstgridpage") || $(this).hasClass("previousgridpage") || $(this).hasClass("nextgridpage") || $(this).hasClass("lastgridpage"))
//            {
//                $(this).off('click').on('click', function ()
//                {
//                    changeGridPage(this.id, SelectedArea);
//                });
//            }
//        }
//    });
//    var thisElementClass;
//    $(".header", SelectedArea).each(function ()
//    {
//        $(this).off('click').on('click', function ()
//        {
//            if ($(this).hasClass("headerSortAsc"))
//            {
//                thisElementClass = "headerSortDesc";
//                ObjPageData.OrderByClause = $(this).attr("data-attr") + " DESC"
//            }
//            else if ($(this).hasClass("headerSortDesc"))
//            {
//                thisElementClass = "headerSortAsc";
//                ObjPageData.OrderByClause = $(this).attr("data-attr") + " ASC"
//            }
//            else
//            {
//                thisElementClass = "headerSortAsc";
//                ObjPageData.OrderByClause = $(this).attr("data-attr") + " ASC"
//            }
//            $(".header").each(function ()
//            {
//                $(this).removeClass("headerSortAsc");
//                $(this).removeClass("headerSortDesc");
//            });
//            showBackground();
//            $(this).addClass(thisElementClass);
//            ObjPageData.PageCurrent = 1;
//            ObjPageData.PageSize = $("#GridPageSize").val();
//            getContentData();
//        });
//    });
//    $("#GridPageSize", SelectedArea).off('change').on('change', function ()
//    {
//        showBackground();
//        ObjPageData.PageCurrent = 1;
//        ObjPageData.PageSize = this.value;
//        getContentData();
//    });
//    $("#SearchText", SelectedArea).off('keyup').on('keyup', function ()
//    {
//        searchGridContent(this.value);
//    });
//}

//PageCurrent = 1
//PageSize = PageSize;
//PageCount = Convert.ToInt32(Math.Ceiling((Convert.ToDouble(_RecordCount) / Convert.ToDouble(_ObjAdminUserGridSettings.PageSize))));
//RecordCount = RecordCount;

//OrderBy(_ObjAdminUserGridSettings.OrderByClause).Skip((PageCurrent - 1) * PageSize).Take(PageSize).ToList();

//function changeGridPage(SelectedPage, SelectedArea)
//{
//    if (SelectedPage == "cmdFirstGridPage")
//    {
//        if (PageCurrent == 1)
//        {
//            return false;
//        }
//        ObjPageData.PageCurrent = 1;
//    }
//    else if (SelectedPage == "cmdPreviousGridPage")
//    {
//        if (PageCurrent == 1)
//        {
//            return false;
//        }
//        ObjPageData.PageCurrent = (parseInt(PageCurrent) - 1);
//    }
//    else if (SelectedPage == "cmdNextGridPage")
//    {
//        if (PageCurrent == PageCount)
//        {
//            return false;
//        }
//        ObjPageData.PageCurrent = (parseInt(PageCurrent) + 1);
//    }
//    else if (SelectedPage == "cmdLastGridPage")
//    {
//        if (PageCurrent == PageCount)
//        {
//            return false;
//        }
//        ObjPageData.PageCurrent = PageCount;
//    }
//    showBackground();
//    ObjPageData.PageSize = $("#GridPageSize", SelectedArea).val();
//    getContentData();
//}

//var SearchGridContentTimer = 0;
//function searchGridContent(SearchText)
//{
//    if (SearchText.length > 1)
//    {
//        clearTimeout(SearchGridContentTimer);
//        SearchGridContentTimer = window.setTimeout(function ()
//        {
//            ObjPageData.PageCurrent = 1;
//            ObjPageData.PageSize = 10;
//            ObjPageData.SearchClause = SearchText;
//            getContentData();
//        }, 200);
//    }
//    else if (SearchText.length == 0)
//    {
//        ObjPageData.PageCurrent = 1;
//        ObjPageData.PageSize = 10;
//        ObjPageData.SearchClause = "";
//        getContentData();
//    }
//    if (typeof setSearchGrid == 'function')
//    {
//        setSearchGrid();
//    }
//}

// AZ Modal Dialog
function AZModalDialog(Options)
{
    if (this instanceof AZModalDialog === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azModalDialogId: "",
            azModalDialogTitle: "",
            azModalDialogText: "",
            azModalDialogiFrameURL: "",
            azModalDialogWidth: 450,
            azModalDialogHeight: 300,
            azModalDialogNoParentScroll: false,
            azModalDialogBackground: true,
            azModalDialogModal: true,
            azModalDialogTitlebar: true,
            azModalDialogTitlebarClose: true,
            azModalDialogResizable: false,
            azModalDialogDraggable: true,
            azModalDialogCloseOnEscape: true,
            azModalDialogPosition: false,
            azModalDialogPositionOf: {},
            azModalDialogPositionMy: "left bottom-30",
            azModalDialogPositionAt: "left top",
            azModalDialogBackgroundColor: "#FFFFFF",
            azModalDialogColor: "#000000",
            azModalDialogTitlebarBackgroundColor: "#0078D7",
            azModalDialogTitlebarColor: "#FFFFFF",
            azModalDialogBeforeOpen: function () { },
            azModalDialogAfterOpen: function () { },
            azModalDialogAfterClose: function () { },
            azModalDialogAfterCloseReload: false
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azModalDialogId !== "" && $("#" + _Main.Options.azModalDialogId).length === 0)
        {
            $.subscribeonce("functionlib/azModalDialogBeforeOpen", function ()
            {
                ModalDialogScrollTop = 0;
                _Main.$Body = $("body");
                _Main.$Background = {};
                _Main.$Iframe;

                _Main.$Dialog = $("<div></div>").attr("id", _Main.Options.azModalDialogId).addClass("az-modal-dialog").css({ "background-color": _Main.Options.azModalDialogBackgroundColor + " !important", "color": _Main.Options.azModalDialogColor + " !important" });
                _Main.$Card = $("<div></div>").addClass("az-modal-card");
                _Main.$Article = $("<article></article>").html(_Main.Options.azModalDialogText);
                _Main.$Card.append(_Main.$Article);

                // AZ Size
                if (_Main.Options.azModalDialogWidth > (window.innerWidth - 20))
                {
                    _Main.Options.azModalDialogWidth = (window.innerWidth - 20);
                }
                if (_Main.Options.azModalDialogHeight > (window.innerHeight - 20))
                {
                    _Main.Options.azModalDialogHeight = (window.innerHeight - 20);
                }

                // AZ iFrame
                if (_Main.Options.azModalDialogiFrameURL != "")
                {
                    _Main.$Iframe = $("<iframe></iframe>").attr("id", "az-iframe-" + _Main.Options.azModalDialogId);
                    _Main.$Iframe.attr("src", _Main.Options.azModalDialogiFrameURL).css({ "width": "100%", "height": (_Main.Options.azModalDialogHeight - 80) });
                    _Main.$Card.append(_Main.$Iframe);
                }

                // UI Dialog
                _Main.$Dialog.append(_Main.$Card);
                _Main.$CurrentDialog = _Main.$Dialog.dialog(
                    {
                        autoOpen: false,
                        modal: false,
                        width: (_Main.Options.azModalDialogWidth - 16),
                        height: _Main.Options.azModalDialogHeight,
                        resizable: _Main.Options.azModalDialogResizable,
                        draggable: _Main.Options.azModalDialogDraggable,
                        closeOnEscape: _Main.Options.azModalDialogCloseOnEscape
                    });
                if (_Main.Options.azModalDialogPosition && IsEmpty(_Main.Options.azModalDialogPositionOf) === false && window.innerWidth > 576)
                {
                    _Main.$CurrentDialog.dialog(
                        {
                            position:
                            {
                                my: _Main.Options.azModalDialogPositionMy,
                                at: _Main.Options.azModalDialogPositionAt,
                                of: _Main.Options.azModalDialogPositionOf
                            }
                        });
                }
                _Main.$UIDialog = _Main.$Dialog.parent(".ui-dialog");
                _Main.$UIDialogTitlebar = _Main.$UIDialog.children(".ui-dialog-titlebar").css({ "background-color": _Main.Options.azModalDialogTitlebarBackgroundColor + " !important", "color": _Main.Options.azModalDialogTitlebarColor + " !important" });
                _Main.$UIDialogTitlebar.children(".ui-dialog-title").html(_Main.Options.azModalDialogTitle);
                _Main.$UIDialogTitlebar.children(".ui-dialog-titlebar-close").removeAttr("title");
                if (_Main.Options.azModalDialogTitlebar === false)
                {
                    _Main.$UIDialogTitlebar.hide();
                }
                if (_Main.Options.azModalDialogTitlebarClose === false)
                {
                    _Main.$UIDialogTitlebar.children(".ui-dialog-titlebar-close").hide();
                }
                _Main.$CurrentDialog.dialog("open");
                _Main.$CurrentDialog.dialog(
                    {
                        focus: function (e, ui)
                        {
                            var _Element = e.target || e.srcElement;
                            $(".ui-dialog").not($(_Element).parent(".ui-dialog")).css({ "z-index": "5000" });
                            $(_Element).parent(".ui-dialog").css({ "z-index": "5001" });
                        },
                        close: function (e, ui)
                        {
                            if (e.originalEvent)
                            {
                                _Main.azModalDialogClose(e);
                            }
                        }
                    });

                var _$ListUIDialog = $(".ui-dialog").not(_Main.$UIDialog);
                if (_$ListUIDialog.length === 0)
                {
                    // AZ No Parent Scroll
                    if (_Main.$Body.hasClass("az-no-parent-scroll") === false)
                    {
                        if (_Main.Options.azModalDialogNoParentScroll === true)
                        {
                            ModalDialogScrollTop = $(window).scrollTop();
                            _Main.$Body.addClass("az-no-parent-scroll");
                        }
                    }

                    // AZ Background
                    _Main.$Background = $("<div></div>").attr("id", "az-background");
                    if (_Main.Options.azModalDialogBackground === true)
                    {
                        _Main.$Body.append(_Main.$Background);
                    }

                    // AZ Modal
                    if (_Main.Options.azModalDialogModal === false)
                    {
                        _Main.$Background.off("click").on("click", function (e)
                        {
                            var _Element = e.target || e.srcElement;
                            if ($(_Element).attr("id") == "az-background")
                            {
                                _Main.azModalDialogClose(e);
                            }
                        });
                    }
                }
                AZCheckAsyncAndPublish(_Main.Options.azModalDialogAfterOpen, "functionlib/azModalDialogAfterOpen", _Main);

                // AZ Modal Dialog Close 
                _Main.azModalDialogClose = function (Options)
                {
                    var _Defaults =
                    {
                        azModalDialogAfterClose: function () { },
                        azModalDialogAfterCloseReload: false
                    };
                    if (Options === undefined || !Options.type)
                    {
                        _Main.Options = $.extend({}, _Defaults, Options || {});
                    }

                    $.subscribeonce("functionlib/azModalDialogAfterClose", function ()
                    {
                        if (_Main.Options.azModalDialogAfterCloseReload === true)
                        {
                            location.reload();
                        }
                        else
                        {
                            // AZ iFrame
                            if (_Main.Options.azModalDialogiFrameURL !== "" && _Main.$Iframe !== undefined)
                            {
                                _Main.$Iframe.attr("src", "");
                            }

                            // UI Dialog
                            _Main.$Dialog.dialog("close");
                            if (_Main.$Dialog.length > 0)
                            {
                                _Main.$Dialog.remove();
                            }

                            var _$ListUIDialog = $(".ui-dialog");
                            if (_$ListUIDialog.length === 0)
                            {
                                $("#az-background").remove();
                                if (ModalDialogScrollTop > 0)
                                {
                                    $(window).scrollTop(ModalDialogScrollTop);
                                }

                                $("body").removeClass("az-no-parent-scroll");
                                if ($("body").hasClass("") === true)
                                {
                                    $("body").removeAttr("class");
                                }
                            }
                        }
                    });
                    AZCheckAsyncAndPublish(_Main.Options.azModalDialogAfterClose, "functionlib/azModalDialogAfterClose", _Main);
                }

                // AZ Change Modal Dialog Titlebar
                _Main.azChangeModalTitlebar = function (Options)
                {
                    var _Defaults =
                    {
                        azModalDialogTitle: "",
                        azModalDialogTitlebarBackgroundColor: "#0078D7",
                        azModalDialogTitlebarColor: "#FFFFFF",
                        azModalDialogAlertTimeout: 3000
                    };
                    _Main.Options = $.extend({}, _Defaults, Options || {});

                    if ($(".az-dialog-titlebar").length === 0)
                    {
                        _Main.$NewUIDialogTitlebar = $('<div></div>').addClass("ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix ui-draggable-handle").css({ "background-color": _Main.Options.azModalDialogTitlebarBackgroundColor + " !important", "color": _Main.Options.azModalDialogTitlebarColor + " !important" });
                        _Main.$NewUIDialogTitlebar.append('<span class="ui-dialog-title">' + _Main.Options.azModalDialogTitle + '</span>');
                        _Main.$UIDialogTitlebar.hide();
                        _Main.$UIDialog.prepend(_Main.$NewUIDialogTitlebar);
                        _Main.$Body.addClass("az-dialog-titlebar");
                        window.setTimeout(function ()
                        {
                            _Main.$NewUIDialogTitlebar.remove();
                            _Main.$UIDialogTitlebar.show();
                            _Main.$Body.removeClass("az-dialog-titlebar");
                            if (_Main.$Body.hasClass("") === true)
                            {
                                _Main.$Body.removeAttr("class");
                            }
                        }, _Main.Options.azModalDialogAlertTimeout);
                    }
                }
            });
            AZCheckAsyncAndPublish(_Main.Options.azModalDialogBeforeOpen, "functionlib/azModalDialogBeforeOpen", _Main);
        }
    }
    else
    {
        return new AZModalDialog(Options);
    }
}

function AZCheckAsyncAndPublish(FunctionToRun, Publish, ObjData)
{
    if (FunctionToRun)
    {
        var _Obj = FunctionToRun();
        if (!IsEmpty(_Obj) && _Obj.hasOwnProperty("promise"))
        {
            _Obj.always(function ()
            {
                $.publish(Publish, ObjData);
            });
        }
        else
        {
            $.publish(Publish, ObjData);
        }
    }
    else
    {
        $.publish(Publish, ObjData);
    }
}

// AZ Snackbar
window.ListSnackbar = [];
function AZSnackbar(Options)
{
    if (this instanceof AZSnackbar === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azSnackbarId: Guid(),
            azSnackbarText: "",
            azSnackbarPosition: "left-top",
            azSnackbarTopMargin: 20,
            azSnackbarBottomMargin: 20,
            azSnackbarMobileMinHeight: 0,
            azSnackbarClose: false,
            azSnackbarTimeout: 3000,
            azSnackbarBackgroundColor: "#0078D7",
            azSnackbarColor: "#FFFFFF",
            azSnackbarCloseColor: "#FFFFFF",
            azSnackbarAfterOpen: function () { }
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        _Main.$Snackbar = $('<div></div>').attr({ "id": _Main.Options.azSnackbarId }).addClass("az-snackbar").css({ "background-color": _Main.Options.azSnackbarBackgroundColor });
        _Main.$Table = $('<table></table>').addClass("az-snackbar-table");
        _Main.SnackbarTimer;

        _Main.AnimateOpenOptions = {};
        _Main.AnimateCloseOptions = {};
        if (_Main.Options.azSnackbarPosition == "left-top")
        {
            _Main.AnimateOpenOptions = { "top": _Main.Options.azSnackbarTopMargin, "opacity": 1 };
            _Main.AnimateCloseOptions = { "top": -20, "opacity": 0 };
        }
        else if (_Main.Options.azSnackbarPosition == "left-bottom")
        {
            _Main.AnimateOpenOptions = { "bottom": _Main.Options.azSnackbarBottomMargin, "opacity": 1 };
            _Main.AnimateCloseOptions = { "bottom": -20, "opacity": 0 };
        }
        else if (_Main.Options.azSnackbarPosition == "center-top")
        {
            _Main.AnimateOpenOptions = { "top": _Main.Options.azSnackbarTopMargin, "opacity": 1 };
            _Main.AnimateCloseOptions = { "top": -20, "opacity": 0 };
        }
        else if (_Main.Options.azSnackbarPosition == "center-bottom")
        {
            _Main.AnimateOpenOptions = { "bottom": _Main.Options.azSnackbarBottomMargin, "opacity": 1 };
            _Main.AnimateCloseOptions = { "bottom": -20, "opacity": 0 };
        }
        else if (_Main.Options.azSnackbarPosition == "right-top")
        {
            _Main.AnimateOpenOptions = { "top": _Main.Options.azSnackbarTopMargin, "opacity": 1 };
            _Main.AnimateCloseOptions = { "top": -20, "opacity": 0 };
        }
        else if (_Main.Options.azSnackbarPosition == "right-bottom")
        {
            _Main.AnimateOpenOptions = { "bottom": _Main.Options.azSnackbarBottomMargin, "opacity": 1 };
            _Main.AnimateCloseOptions = { "bottom": -20, "opacity": 0 };
        }
        else if (_Main.Options.azSnackbarPosition == "full-width-top")
        {
            _Main.AnimateOpenOptions = { "top": _Main.Options.azSnackbarTopMargin, "opacity": 1 };
            _Main.AnimateCloseOptions = { "top": -20, "opacity": 0 };
        }
        else if (_Main.Options.azSnackbarPosition == "full-width-bottom")
        {
            _Main.AnimateOpenOptions = { "bottom": _Main.Options.azSnackbarBottomMargin, "opacity": 1 };
            _Main.AnimateCloseOptions = { "bottom": -20, "opacity": 0 };
        }
        _Main.$Snackbar.addClass("az-snackbar-" + _Main.Options.azSnackbarPosition);

        if (window.innerWidth < 576)
        {
            if (_Main.AnimateOpenOptions.hasOwnProperty("top") === true)
            {
                _Main.AnimateOpenOptions.top = 20;
            }
            if (_Main.AnimateOpenOptions.hasOwnProperty("bottom") === true)
            {
                _Main.AnimateOpenOptions.bottom = 20;
            }
            if (_Main.Options.azSnackbarMobileMinHeight > 0)
            {
                if (_Main.Options.azSnackbarMobileMinHeight > (window.innerHeight - 70))
                {
                    _Main.Options.azSnackbarMobileMinHeight = (window.innerHeight - 70);
                }
                _Main.$Snackbar.css({ "min-height": _Main.Options.azSnackbarMobileMinHeight })
            }
        }

        _Main.azCloseSnackbar = function ()
        {
            _Main.$Snackbar.animate(_Main.AnimateCloseOptions, 500, function ()
            {
                window.clearTimeout(_Main.SnackbarTimer);
                $("#" + _Main.Options.azSnackbarId).remove();
                if ($(".az-snackbar.az-snackbar-" + _Main.Options.azSnackbarPosition).length === 0)
                {
                    for (var i = 0; i < window.ListSnackbar.length; i++)
                    {
                        if (window.ListSnackbar[i].attr("class").toString() == "az-snackbar-container az-snackbar-" + _Main.Options.azSnackbarPosition)
                        {
                            $(".az-snackbar-container.az-snackbar-" + _Main.Options.azSnackbarPosition).remove();
                            window.ListSnackbar.splice(i, 1);
                            break;
                        }
                    }
                }
            });
        }

        _Main.azChangeSnackbarText = function (SnackbarText)
        {
            _Main.$TextCell.html(SnackbarText)
        }

        if (_Main.Options.azSnackbarClose === true)
        {
            _Main.$Close = $('<td></td>').html("X").addClass("az-snackbar-close").css({ "color": _Main.Options.azSnackbarCloseColor });
            _Main.$Close.off("click").on("click", function ()
            {
                _Main.azCloseSnackbar();
            });
        }

        _Main.$TextCell = $('<td></td>').html(_Main.Options.azSnackbarText).addClass("az-snackbar-text").css({ "color": _Main.Options.azSnackbarColor });
        _Main.$TableRow = $('<tr></tr>').append(_Main.$TextCell).append(_Main.$Close);
        _Main.$Table.append(_Main.$TableRow);
        _Main.$Snackbar.append(_Main.$Table);

        if ($(".az-snackbar-container.az-snackbar-" + _Main.Options.azSnackbarPosition).length === 0)
        {
            $Container = $('<div></div>').addClass("az-snackbar-container").addClass("az-snackbar-" + _Main.Options.azSnackbarPosition);
            window.ListSnackbar.push($Container);
            $Container.append(_Main.$Snackbar);
            $("body").append($Container);
        }
        else
        {
            $(".az-snackbar-container.az-snackbar-" + _Main.Options.azSnackbarPosition).append(_Main.$Snackbar);
        }

        if (_Main.Options.azSnackbarClose === false)
        {
            _Main.SnackbarTimer = window.setTimeout(_Main.azCloseSnackbar, _Main.Options.azSnackbarTimeout);
        }

        _Main.$Snackbar.animate(_Main.AnimateOpenOptions, 500, function ()
        {
            AZCheckAsyncAndPublish(_Main.Options.azSnackbarAfterOpen, "functionlib/azSnackbarAfterOpen", _Main);
        });
    }
    else
    {
        return new AZSnackbar(Options);
    }
}

// AZ Tabs
function AZTabs(Options)
{
    if (this instanceof AZTabs === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azTabsId: "",
            azTabsHeightStyle: "content",
            azTabsOpenEvent: "click",
            azTabsIndex: 0
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azTabsId != "")
        {
            _Main.$Tabs = $("#" + _Main.Options.azTabsId);
            _Main.$TabsCard = _Main.$Tabs.children(".az-tabs-card");
            _Main.$Article = _Main.$TabsCard.children("article");

            _Main.MaxArticleHeight = 0;
            _Main.azArticleHeight = function ()
            {
                _Main.MaxArticleHeight = 0;
                _Main.$Article.css({ height: "inherit" });
                _Main.$Article.each(function ()
                {
                    _Main.MaxArticleHeight = Math.max(_Main.MaxArticleHeight, $(this).height());
                });
                if (_Main.MaxArticleHeight > 0)
                {
                    _Main.$Article.height(_Main.MaxArticleHeight);
                }
            }

            _Main.azSelectTabs = function (SelectedIndex)
            {
                azExecTabs(_Main.$Tabs.children("ul").children("li").eq(SelectedIndex));
            }

            _Main.azChangeText = function (SelectedIndex, SelectedText)
            {
                _Main.$TabsCard.children("article").eq(SelectedIndex).html(SelectedText);
            }

            _Main.azToggleVertical = function ()
            {
                _Main.$Tabs.toggleClass("az-tabs-vertical");
            }

            _Main.$Tabs.off().on(_Main.Options.azTabsOpenEvent, " > ul > li", function (e)
            {
                azExecTabs($(this));
                var _Element = e.target || e.srcElement;
                $.publish("functionlib/azTabs",
                    {
                        azTabsId: _Main.Options.azTabsId,
                        azTabsJQElement: $(_Element)
                    });
            });

            if (window.innerWidth < 576)
            {
                _Main.$Tabs.removeClass("az-tabs-vertical");
            }

            _Main.azTabsDeactivated = "";
            function azExecTabs($SelectedTab)
            {
                var _MenuIndex = $($SelectedTab).index();
                _Main.$Tabs.children("ul").children("li").removeAttr("class");
                _Main.$Tabs.children("ul").children("li").eq(_MenuIndex).addClass("az-tabs-tab-active");
                _Main.$TabsCard.removeClass("az-tabs-card-active");
                _Main.$TabsCard.eq(_MenuIndex).addClass("az-tabs-card-active");
                _Main.$Article.removeAttr("class");
                _Main.$TabsCard.eq(_MenuIndex).children("article").addClass("az-tabs-article-active");
                $.publish("functionlib/azTabsActivate",
                    {
                        azTabsId: _Main.Options.azTabsId,
                        azTabsActivated: _MenuIndex,
                        azTabsDeactivated: _Main.azTabsDeactivated
                    });
                _Main.azTabsDeactivated = _MenuIndex;
            }

            if (_Main.Options.azTabsHeightStyle == "auto")
            {
                _Main.azArticleHeight();
                $(window).resize(function ()
                {
                    _Main.azArticleHeight();
                });
            }
            _Main.azSelectTabs(_Main.Options.azTabsIndex);
        }
        $.publish("functionlib/azTabsReady", _Main);
    }
    else
    {
        return new AZTabs(Options);
    }
}

function AZWindow(Options)
{
    if (this instanceof AZWindow === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azWindowTitle: "",
            azWindowText: "",
            azWindowWidth: 450,
            azWindowHeight: 150,
            azWindowPositionTop: 0,
            azWindowModal: false,
            azWindowTitlebar: true,
            azWindowTitlebarClose: true,
            azWindowAnimation: true,
            azWindowNoParentScroll: false,
            azWindowBackground: true,
            azWindowBorderColor: "#FFFFFF",
            azWindowTitlebarBackgroundColor: "#0078D7",
            azWindowTitlebarColor: "#FFFFFF",
            azWindowBackgroundColor: "#FFFFFF",
            azWindowColor: "#000000",
            azWindowButton: {},
            azWindowBeforeOpen: function () { },
            azWindowAfterOpen: function () { },
            azWindowAfterClose: function () { },
            azWindowAfterCloseReload: false
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if ($('#az-window').length === 0)
        {
            $.subscribeonce("functionlib/azWindowBeforeOpen", function ()
            {
                ModalDialogScrollTop = 0;
                _Main.$Body = $("body");
                _Main.$Background = {};

                _Main.$Window = $("<div></div>").attr("id", "az-window").css({ "background-color": _Main.Options.azWindowBorderColor + " !important" });
                _Main.$Titlebar = $("<div></div>").addClass("az-window-titlebar").html("<h1>" + _Main.Options.azWindowTitle + "</h1><span>X</span>").css({ "background-color": _Main.Options.azWindowTitlebarBackgroundColor + " !important", "color": _Main.Options.azWindowTitlebarColor + " !important" });
                _Main.$Dialog = $("<div></div>").addClass("az-window-dialog").css({ "background-color": _Main.Options.azWindowBackgroundColor + " !important", "color": _Main.Options.azWindowColor + " !important" });
                _Main.$Article = $("<article></article>").html(_Main.Options.azWindowText).append(AZWindowButton(_Main.Options.azWindowButton));
                _Main.$Dialog.append(_Main.$Article);
                _Main.$Window.append(_Main.$Titlebar).append(_Main.$Dialog);

                // AZ Size
                _Main.Options.azWindowWidth = (_Main.Options.azWindowWidth - 14);
                if (_Main.Options.azWindowWidth > (window.innerWidth - 40))
                {
                    _Main.Options.azWindowWidth = (window.innerWidth - 40);
                }
                if (_Main.Options.azWindowHeight > 150)
                {
                    if (_Main.Options.azWindowHeight > (window.innerHeight - 40))
                    {
                        _Main.Options.azWindowHeight = (window.innerHeight - 40);
                    }
                }

                // AZ No Parent Scroll
                if (_Main.Options.azWindowNoParentScroll === true)
                {
                    ModalDialogScrollTop = $(window).scrollTop();
                    _Main.$Body.addClass("az-no-parent-scroll");
                }

                // AZ Background
                _Main.$Background = $("<div></div>").attr("id", "az-background");
                if (_Main.Options.azWindowBackground === true)
                {
                    _Main.$Body.append(_Main.$Background);
                }

                // AZ Modal
                if (_Main.Options.azWindowModal === false)
                {
                    _Main.$Background.off().on("click", function (e)
                    {
                        var _Element = e.target || e.srcElement;
                        if ($(_Element).attr("id") == "az-background")
                        {
                            _Main.azWindowClose(e);
                        }
                    });
                }
                if (_Main.Options.azWindowTitlebar === false)
                {
                    _Main.$Titlebar.hide();
                    _Main.$Dialog.height(_Main.Options.azWindowHeight - 28);
                }
                else
                {
                    _Main.$Dialog.height(_Main.Options.azWindowHeight - 69);
                }
                if (_Main.Options.azWindowTitlebarClose === false)
                {
                    _Main.$Titlebar.children("span").hide();
                }
                else
                {
                    _Main.$Titlebar.children("span").off().on("click", function (e)
                    {
                        _Main.azWindowClose(e);
                    });
                }

                _Main.$Window.width(_Main.Options.azWindowWidth);
                _Main.$Window.height(_Main.Options.azWindowHeight - 14);
                if (_Main.Options.azWindowPositionTop === 0 || ((_Main.Options.azWindowPositionTop + _Main.$Window.height()) > ($(window).scrollTop() + $(window).height())))
                {
                    _Main.$Window.css({ "top": ($(window).scrollTop() + $(window).height() / 2) - (_Main.$Window.height() / 2) });
                }
                else
                {
                    _Main.$Window.css({ "top": _Main.Options.azWindowPositionTop });
                }
                _Main.$Body.append(_Main.$Window);
                _Main.$Window.hide();
                if (_Main.Options.azWindowAnimation === true)
                {
                    _Main.$Window.fadeIn();
                }
                else
                {
                    _Main.$Window.show();
                }
                AZCheckAsyncAndPublish(_Main.Options.azWindowAfterOpen, "functionlib/azWindowAfterOpen", _Main);

                // AZ Window Close 
                _Main.azWindowClose = function (Options)
                {
                    var _Defaults =
                    {
                        azWindowAfterClose: function () { },
                        azWindowAfterCloseReload: false
                    };
                    if (Options === undefined || !Options.type)
                    {
                        _Main.Options = $.extend({}, _Defaults, Options || {});
                    }

                    $.subscribeonce("functionlib/azWindowAfterClose", function ()
                    {
                        if (_Main.Options.azWindowAfterCloseReload === true)
                        {
                            location.reload();
                        }
                        else
                        {
                            _Main.$Background.remove();
                            if (ModalDialogScrollTop > 0)
                            {
                                $(window).scrollTop(ModalDialogScrollTop);
                            }

                            _Main.$Body.removeClass("az-no-parent-scroll");
                            if (_Main.$Body.hasClass("") === true)
                            {
                                _Main.$Body.removeAttr("class");
                            }

                            if (_Main.Options.azWindowAnimation === true)
                            {
                                _Main.$Window.fadeOut(function ()
                                {
                                    _Main.$Window.remove();
                                    $.publish("functionlib/azWindowRemoved");
                                });
                            }
                            else
                            {
                                _Main.$Window.remove();
                                $.publish("functionlib/azWindowRemoved");
                            }
                        }
                    });
                    AZCheckAsyncAndPublish(_Main.Options.azWindowAfterClose, "functionlib/azWindowAfterClose", _Main);
                }

                // AZ Change Window Titlebar
                _Main.azChangeWindowTitlebar = function (Options)
                {
                    var _Defaults =
                    {
                        azWindowTitle: "",
                        azWindowTitlebarBackgroundColor: "#0078D7",
                        azWindowTitlebarColor: "#FFFFFF",
                        azWindowAlertTimeout: 3000
                    };
                    _Main.Options = $.extend({}, _Defaults, Options || {});

                    if ($(".az-window-titlebar-active").length === 0)
                    {
                        _Main.$NewTitlebar = $("<div></div>").addClass("az-window-titlebar").html("<h1>" + _Main.Options.azWindowTitle + "</h1>").css({ "background-color": _Main.Options.azWindowTitlebarBackgroundColor + " !important", "color": _Main.Options.azWindowTitlebarColor + " !important" });
                        _Main.$Titlebar.hide();
                        _Main.$Window.prepend(_Main.$NewTitlebar);
                        _Main.$Body.addClass("az-window-titlebar-active");
                        window.setTimeout(function ()
                        {
                            _Main.$NewTitlebar.remove();
                            _Main.$Titlebar.show();
                            _Main.$Body.removeClass("az-window-titlebar-active");
                            if (_Main.$Body.hasClass("") === true)
                            {
                                _Main.$Body.removeAttr("class");
                            }
                        }, _Main.Options.azWindowAlertTimeout);
                    }
                }
            });
            AZCheckAsyncAndPublish(_Main.Options.azWindowBeforeOpen, "functionlib/azWindowBeforeOpen", _Main);
        }
    }
    else
    {
        return new AZWindow(Options);
    }
}

function AZWindowButton(Options)
{
    if (IsEmpty(Options) === false)
    {
        var _Defaults =
        {
            Button1: false,
            TypeButton1: "primary",
            SizeButton1: "",
            TextButton1: "",
            Button2: false,
            TypeButton2: "info",
            SizeButton2: "",
            TextButton2: ""
        };
        var Option = $.extend({}, _Defaults, Options || {});

        var _HTML = "";
        if (Option.Button1 === true && Option.Button2 === true)
        {
            _HTML = '<div class="az-row az-margin-t-28 az-margin-b-14">';
            _HTML += '<div class="az-col xs-6 az-text-right">';
            _HTML += '<div class="az-form-group ' + Option.SizeButton2 + '">';
            _HTML += '<button type="button" class="az-button ' + Option.TypeButton2 + ' ' + Option.SizeButton2 + ' az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton2" style="width: 60%; margin-right: 4px;">' + Option.TextButton2 + '</button>';
            _HTML += '</div>';
            _HTML += '</div>';
            _HTML += '<div class="az-col xs-6 az-text-left">';
            _HTML += '<div class="az-form-group ' + Option.SizeButton1 + '">';
            _HTML += '<button type="button" class="az-button ' + Option.TypeButton1 + ' ' + Option.SizeButton1 + ' az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton1" style="width: 60%; margin-left: 4px;">' + Option.TextButton1 + '</button>';
            _HTML += '</div>';
            _HTML += '</div>';
            _HTML += '</div>';
        }
        else if (Option.Button1 === true && Option.Button2 === false)
        {
            _HTML = '<div class="az-row az-margin-t-28 az-margin-b-14">';
            _HTML += '<div class="az-col xs-12 az-text-center">';
            _HTML += '<div class="az-form-group ' + Option.SizeButton1 + '">';
            _HTML += '<button type="button" class="az-button ' + Option.TypeButton1 + ' ' + Option.SizeButton1 + ' az-shadow-1 az-shadow-hover-2" id="cmdAZWindowButton1" style="width: 60%; margin-left: 4px;">' + Option.TextButton1 + '</button>';
            _HTML += '</div>';
            _HTML += '</div>';
            _HTML += '</div>';
        }
        return _HTML;
    }
}

function AZFullWindow(Options)
{
    if (this instanceof AZFullWindow === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azFullWindowText: "",
            azFullWindowPosition: "bottom",
            azFullWindowFadeIn: 400,
            azFullWindowFadeOut: 400,
            azFullWindowBackgroundColor: "#FFFFFF",
            azFullWindowColor: "#000000",
            azFullWindowBeforeOpen: function () { },
            azFullWindowAfterOpen: function () { },
            azFullWindowAfterClose: function () { }
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if ($("#az-full-window").length === 0)
        {
            $.subscribeonce("functionlib/azFullWindowBeforeOpen", function ()
            {
                ModalDialogScrollTop = 0;
                _Main.$Body = $("body");
                _Main.$Window = $("<div></div>").attr("id", "az-full-window").css({ "background-color": _Main.Options.azFullWindowBackgroundColor + " !important", "color": _Main.Options.azFullWindowColor + " !important" });
                _Main.$Close = $("<div>&times;</div>").attr("id", "az-full-window-close");

                _Main.AnimateOpenOptions = {};
                _Main.AnimateCloseOptions = {};
                if (_Main.Options.azFullWindowPosition == "top")
                {
                    _Main.AnimateOpenOptions = { "height": "100%", "opacity": 1 };
                    _Main.AnimateCloseOptions = { "height": 0, "opacity": 0 };
                    _Main.$Window.css({ "top": 0 });
                }
                else if (_Main.Options.azFullWindowPosition == "bottom")
                {
                    _Main.AnimateOpenOptions = { "height": "100%", "opacity": 1 };
                    _Main.AnimateCloseOptions = { "height": 0, "opacity": 0 };
                    _Main.$Window.css({ "bottom": 0 });
                }

                _Main.$Window.html(_Main.Options.azFullWindowText);
                _Main.$Window.append(_Main.$Close);
                _Main.$Body.append(_Main.$Window);

                _Main.$Window.animate(_Main.AnimateOpenOptions, _Main.Options.azFullWindowFadeIn, function ()
                {
                    ModalDialogScrollTop = $(window).scrollTop();
                    _Main.$Body.addClass("az-no-parent-scroll");
                });
                AZCheckAsyncAndPublish(_Main.Options.azFullWindowAfterOpen, "functionlib/azFullWindowAfterOpen", _Main);
            });
            AZCheckAsyncAndPublish(_Main.Options.azFullWindowBeforeOpen, "functionlib/azFullWindowBeforeOpen", _Main);

            _Main.$Close.on('click', function ()
            {
                $.subscribeonce("functionlib/azFullWindowAfterClose", function ()
                {
                    _Main.$Body.removeClass("az-no-parent-scroll");
                    if (_Main.$Body.hasClass("") === true)
                    {
                        _Main.$Body.removeAttr("class");
                    }
                    if (ModalDialogScrollTop > 0)
                    {
                        $(window).scrollTop(ModalDialogScrollTop);
                    }
                    _Main.$Window.animate(_Main.AnimateCloseOptions, _Main.Options.azFullWindowFadeOut, function ()
                    {
                        $(this).remove();
                        $.publish("functionlib/azFullWindowClosed");
                    });
                });
                AZCheckAsyncAndPublish(_Main.Options.azFullWindowAfterClose, "functionlib/azFullWindowAfterClose", _Main);
            });
        }
    }
    else
    {
        return new AZFullWindow(Options);
    }
}

// AZ SlideIn
function AZSlideIn(Options)
{
    if (this instanceof AZSlideIn === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azSlideInId: "",
            azSlideInText: "",
            azSlideInTop: 30,
            azSlideInWidth: 300,
            azSlideInHeight: 0,
            azSlideInPosition: "right",
            azSlideInTabText: "",
            azSlideInTabIcon: "fas fa-bars",
            azSlideInTabBackgroundColor: "#0078D7",
            azSlideInTabColor: "#FFFFFF",
            azSlideInArticleBackgroundColor: "#FFFFFF",
            azSlideInArticleColor: "#000000"
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azSlideInId != "" && $("#" + _Main.Options.azSlideInId).length == 0)
        {
            _Main.$Body = $("body");
            _Main.$SlideIn = $("<div></div>").attr("id", _Main.Options.azSlideInId).addClass("az-slidein");
            _Main.$SlideInTab = $("<div><div></div></div>").addClass("az-slidein-tab").css({ "background-color": _Main.Options.azSlideInTabBackgroundColor, "color": _Main.Options.azSlideInTabColor });
            _Main.$SlideInCard = $("<div></div>").addClass("az-slidein-card");
            _Main.$Article = $("<article></article>").html(_Main.Options.azSlideInText).css({ "background-color": _Main.Options.azSlideInArticleBackgroundColor, "color": _Main.Options.azSlideInArticleColor });
            _Main.TextLength = _Main.Options.azSlideInTabText.length;

            _Main.SlideInArticleOptions = {};
            _Main.SlideInOptions = {};
            _Main.SlideInTabOptions = {};
            if (_Main.TextLength > 0)
            {
                _Main.TextLength = (_Main.TextLength * 8);
                _Main.SlideInTabOptions = { "height": _Main.TextLength };
                _Main.$SlideInTab.children("div").text(_Main.Options.azSlideInTabText)
                if (_Main.Options.azSlideInPosition == "right")
                {
                    _Main.$SlideInTab.children("div").css({ "width": _Main.TextLength, "height": _Main.TextLength, "right": - 11 });
                }
                else if (_Main.Options.azSlideInPosition == "left")
                {
                    _Main.$SlideInTab.children("div").css({ "width": _Main.TextLength, "height": _Main.TextLength, "left": - (_Main.TextLength - 30) });
                }
            }
            else
            {
                _Main.TextLength = 0;
                _Main.SlideInTabOptions = { "height": 100 };
                if (_Main.Options.azSlideInPosition == "right")
                {
                    _Main.$SlideInTab.children("div").css({ "width": 100, "height": 100, "right": - 11 }).append('<i class="' + _Main.Options.azSlideInTabIcon + ' fa-rotate-90"></i>');
                }
                else if (_Main.Options.azSlideInPosition == "left")
                {
                    _Main.$SlideInTab.children("div").css({ "width": 100, "height": 100, "left": - 70 }).append('<i class="' + _Main.Options.azSlideInTabIcon + ' fa-rotate-90"></i>');
                }
            }
            if (_Main.Options.azSlideInWidth > (window.innerWidth - 60))
            {
                _Main.Options.azSlideInWidth = (window.innerWidth - 60);
            }
            if (_Main.Options.azSlideInPosition == "right")
            {
                _Main.SlideInTabOptions = $.extend(_Main.SlideInTabOptions, { "top": 0, "left": - 40, "border-top-left-radius": 15, "border-bottom-left-radius": 15 });
                _Main.SlideInOptions = { "top": _Main.Options.azSlideInTop, "width": _Main.Options.azSlideInWidth, "right": - _Main.Options.azSlideInWidth };
            }
            else if (_Main.Options.azSlideInPosition == "left")
            {
                _Main.SlideInTabOptions = $.extend(_Main.SlideInTabOptions, { "top": 0, "left": _Main.Options.azSlideInWidth, "border-top-right-radius": 15, "border-bottom-right-radius": 15 });
                _Main.SlideInOptions = { "top": _Main.Options.azSlideInTop, "width": _Main.Options.azSlideInWidth, "left": - _Main.Options.azSlideInWidth };
            }
            if (_Main.Options.azSlideInHeight > _Main.TextLength)
            {
                _Main.SlideInArticleOptions = { "height": (_Main.Options.azSlideInHeight - 14) };
            }
            else
            {
                _Main.SlideInArticleOptions = { "min-height": _Main.TextLength };
            }

            _Main.azChangeText = function (SelectedText)
            {
                _Main.$Article.html(SelectedText);
            }

            _Main.$SlideInTab.css(_Main.SlideInTabOptions);
            _Main.$Article.css(_Main.SlideInArticleOptions);
            _Main.$SlideInCard.append(_Main.$Article);
            _Main.$SlideIn.append(_Main.$SlideInTab).append(_Main.$SlideInCard);
            _Main.$Body.append(_Main.$SlideIn);
            $.publish("functionlib/azSlideInAfterInit", _Main);

            window.setTimeout(function ()
            {
                _Main.$SlideIn.css(_Main.SlideInOptions).addClass("transition-" + _Main.Options.azSlideInPosition).show();
            }, 100);

            _Main.$SlideInTab.on('click', function ()
            {
                if (_Main.Options.azSlideInPosition == "right")
                {
                    _Main.$SlideIn.toggleClass('az-slidein-active display-right');
                }
                else if (_Main.Options.azSlideInPosition == "left")
                {
                    _Main.$SlideIn.toggleClass('az-slidein-active display-left');
                }
            });
            $.publish("functionlib/azSlideInReady", _Main)
        }
    }
    else
    {
        return new AZSlideIn(Options);
    }
}

// AZ Slideshow
function AZSlideshow(Options)
{
    if (this instanceof AZSlideshow === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azSlideshowId: "",
            azSlideshowArrows: false,
            azSlideshowTimer: 3000,
            azSlideshowFadeIn: 1000,
            azSlideshowFadeOut: 1000
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azSlideshowId != "")
        {
            _Main.$Slideshow = $("#" + _Main.Options.azSlideshowId);
            _Main.$Slides = $(".az-slides", _Main.$Slideshow);
            _Main.SlideShow;
            _Main.SlideIndex = 0;

            if (_Main.Options.azSlideshowArrows)
            {
                _Main.$Slideshow.append('<div class="az-arrows az-arrow-left az-display-left" onclick="plusDivs(-1)">&#10094;</div><div class="az-arrows az-arrow-right az-display-right" onclick="plusDivs(1)">&#10095;</div>');
                _Main.$Slideshow.off().on("mouseenter", "slide, .az-arrows", function ()
                {
                    $.unsubscribe("runSlides");
                    window.clearTimeout(_Main.SlideShow);

                }).on("mouseleave", function ()
                {
                    $.subscribe("runSlides", function (e, data)
                    {
                        _Main.SlideShow = window.setTimeout(runSlides, _Main.Options.azSlideshowTimer);
                    });
                    _Main.SlideShow = window.setTimeout(runSlides, _Main.Options.azSlideshowTimer);
                })
            }

            $.subscribe("functionlib/azWindowResize", function (e, data)
            {
                _Main.$Slideshow.height($("slide:first", _Main.$Slides).height());
            });

            $.subscribe("runSlides", function (e, data)
            {
                _Main.SlideShow = window.setTimeout(runSlides, _Main.Options.azSlideshowTimer);
            });

            _Main.$Slideshow.height($("slide:first", _Main.$Slides).height());
            $("slide:gt(0)", _Main.$Slides).hide();
            _Main.SlideShow = window.setTimeout(runSlides, _Main.Options.azSlideshowTimer);

            function runSlides()
            {
                $("slide", _Main.$Slides).eq(_Main.SlideIndex).fadeOut(_Main.Options.azSlideshowFadeOut);
                _Main.SlideIndex = (_Main.SlideIndex != $("slide", _Main.$Slides).length - 1) ? _Main.SlideIndex + 1 : 0;
                $("slide", _Main.$Slides).eq(_Main.SlideIndex).fadeIn(_Main.Options.azSlideshowFadeIn, function ()
                {
                    $.publish("runSlides");
                });
            }

            plusDivs = function (n)
            {
                $.unsubscribe("runSlides");
                window.clearTimeout(_Main.SlideShow);
                _Main.SlideIndex += n;
                showDivs();
            }

            showDivs = function ()
            {
                if (_Main.SlideIndex > $("slide", _Main.$Slides).length - 1)
                {
                    _Main.SlideIndex = 0;
                }
                if (_Main.SlideIndex < 0)
                {
                    _Main.SlideIndex = $("slide", _Main.$Slides).length - 1;
                };
                $("slide", _Main.$Slides).fadeOut(100);
                $("slide", _Main.$Slides).eq(_Main.SlideIndex).fadeIn(100);
            }
        }
    }
    else
    {
        return new AZSlideshow(Options);
    }
}

// AZ Range Multi
function AZRangeMulti(Options)
{
    if (this instanceof AZRangeMulti === true)
    {
        var _Main = this;
        var _Defaults =
        {
            azRangeMultiId: "",
            azRangeMultiBackgroundColor: "#CCCCCC",
            azRangeMultiHandlerLeftBackgroundColor: "#0078D7",
            azRangeMultiHandlerRightBackgroundColor: "#259EFF",
            azRangeMultiMin: 0,
            azRangeMultiMax: 100,
            azRangeMultiStep: 1,
            azRangeMultiValues: [0, 50]
        };
        _Main.Options = $.extend({}, _Defaults, Options || {});

        if (_Main.Options.azRangeMultiId != "")
        {
            _Main.$MultiRange = $("#" + _Main.Options.azRangeMultiId);
            _Main.$MultiRange.slider(
                {
                    range: true,
                    min: _Main.Options.azRangeMultiMin,
                    max: _Main.Options.azRangeMultiMax,
                    step: _Main.Options.azRangeMultiStep,
                    values: _Main.Options.azRangeMultiValues,
                    create: function (event, ui)
                    {
                        $.publish("functionlib/azRangeMultiCreate",
                            {
                                azRangeMultiId: _Main.Options.azRangeMultiId,
                                azRangeMultiValueLeft: _Main.Options.azRangeMultiValues[0],
                                azRangeMultiValueRight: _Main.Options.azRangeMultiValues[1],
                                azRangeMultiJQElement: _Main.$MultiRange
                            });
                    },
                    slide: function (event, ui)
                    {
                        $.publish("functionlib/azRangeMultiSlide",
                            {
                                azRangeMultiId: _Main.Options.azRangeMultiId,
                                azRangeMultiValueLeft: ui.values[0],
                                azRangeMultiValueRight: ui.values[1],
                                azRangeMultiJQElement: _Main.$MultiRange
                            });
                    },
                    stop: function (event, ui)
                    {
                        $.publish("functionlib/azRangeMultiStop",
                            {
                                azRangeMultiId: _Main.Options.azRangeMultiId,
                                azRangeMultiValueLeft: ui.values[0],
                                azRangeMultiValueRight: ui.values[1],
                                azRangeMultiJQElement: _Main.$MultiRange
                            });
                    }
                });
            _Main.$MultiRange.children(".ui-slider-handle:nth-child(2)").css({ "background-color": _Main.Options.azRangeMultiHandlerLeftBackgroundColor + " !important" });
            _Main.$MultiRange.children(".ui-slider-handle:nth-child(3)").css({ "background-color": _Main.Options.azRangeMultiHandlerRightBackgroundColor + " !important" });
            _Main.$MultiRange.css({ "background-color": _Main.Options.azRangeMultiBackgroundColor + " !important" });
            _Main.$MultiRange.children(".ui-widget-header").css({ "background-color": _Main.Options.azRangeMultiBackgroundColor + " !important" });
        }
    }
    else
    {
        return new AZRangeMulti(Options);
    }
}

// AZ Sort JSON
function AZSortJSONArray(Arr, Prop, Order)
{
    if (Arr == null || Array.isArray(Arr) === false || Prop == null || Prop == "")
    {
        return [];
    }
    else
    {
        _Order = "asc";
        if (Order != null && Order != "" && Order.length > 2)
        {
            _Order = Order.toLowerCase();
        }

        if (_Order === "asc")
        {
            return Arr.sort(Compare(Prop, 1));
        }
        else if (_Order == "desc")
        {
            return Arr.sort(Compare(Prop, 0));
        }

        function Compare(Attr, Value)
        {
            if (Value === 1)
            {
                return function (a, b)
                {
                    var x = (a[Attr] === null) ? "" : "" + a[Attr],
                        y = (b[Attr] === null) ? "" : "" + b[Attr];
                    return x < y ? -1 : (x > y ? 1 : 0)
                }
            }
            else
            {
                return function (a, b)
                {
                    var x = (a[Attr] === null) ? "" : "" + a[Attr],
                        y = (b[Attr] === null) ? "" : "" + b[Attr];
                    return x < y ? 1 : (x > y ? -1 : 0)
                }
            }
        }
    }
}

function IsEmpty(SelectedObj)
{
    if (SelectedObj instanceof Object)
    {
        if (SelectedObj == null)
        {
            return true;
        }
        for (var key in SelectedObj)
        {
            if (SelectedObj.hasOwnProperty(key))
            {
                return false;
            }
        }
        return true;
    }
    else
    {
        return true;
    }
}

function AZGetURLParameters(SelectedURL)
{
    var _ParameterReturn = {};
    if (SelectedURL === undefined || SelectedURL === "")
    {
        window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value)
        {
            _ParameterReturn[key.toLowerCase()] = value;
        });
    }
    else
    {
        SelectedURL.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value)
        {
            _ParameterReturn[key.toLowerCase()] = value;
        });
    }
    return _ParameterReturn;
}

function AZBytesConverter(Bytes, Decimal)
{
    if (Bytes == 0)
    {
        return '0 Bytes';
    }
    else
    {
        var _Kilo = 1000;
        var _Decimal = Decimal === 0 ? 0 : Decimal || 2;
        var _Sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var _Index = Math.floor(Math.log(Bytes) / Math.log(_Kilo));
        return parseFloat((Bytes / Math.pow(_Kilo, _Index)).toFixed(_Decimal)) + ' ' + _Sizes[_Index];
    }
}

function AZGetObject(Arr, Key, Val)
{
    var _ObjReturn = {};
    return SearchArray(Arr, Key, Val);

    function SearchArray(Arr, Key, Val)
    {
        for (var Obj in Arr)
        {
            if (Array.isArray(Arr[Obj]) || typeof Arr[Obj] === 'object')
            {
                SearchArray(Arr[Obj], Key, Val);
            }
            else
            {
                if (Obj == Key && Arr[Obj] == Val)
                {
                    _ObjReturn = Arr;
                    return false;
                }
            }
        }
        return _ObjReturn;
    }
}

////////////////////////////////////////////////////////////

function bytesToSize(bytes, decimalPoint)
{
    if (bytes == 0) return '0 Bytes';
    var k = 1000;
    var dm = decimalPoint || 2;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function getURLParameters(PageURL)
{
    var vars = {};
    var parts = PageURL.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value)
    {
        vars[key.toLowerCase()] = value;
    });
    return vars;
}

$.urlParam = function (name)
{
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null)
    {
        return null;
    }
    else
    {
        return results[1] || 0;
    }
}

function navigateTo(SelectedPage, SelectedTarget)
{
    SelectedTarget = SelectedTarget === true ? true : false;
    if (SelectedTarget == 0)
    {
        window.location.href = SelectedPage;
    }
    else
    {
        window.open(SelectedPage, SelectedTarget);
    }
}

function getSelectedObj(SelectedList1, SelectedKey1, SelectedVal1, SelectedList2, SelectedKey2, SelectedVal2)
{
    var _ObjReturn = {};
    if (SelectedList1 !== undefined && SelectedList1 !== null)
    {
        $.each(SelectedList1, function (index1, Selected1Content)
        {
            if (SelectedList2 !== undefined && SelectedList2 !== "")
            {
                if (Selected1Content.hasOwnProperty(SelectedKey1) && Selected1Content[SelectedKey1] !== null && SelectedVal1 !== undefined && SelectedVal1 !== null)
                {
                    if (Selected1Content[SelectedKey1].toString().toLowerCase() == SelectedVal1.toString().toLowerCase())
                    {
                        if (Selected1Content.hasOwnProperty(SelectedList2) && Selected1Content[SelectedList2] !== null)
                        {
                            $.each(Selected1Content[SelectedList2], function (index2, Selected2Content)
                            {
                                if (Selected2Content !== undefined && Selected2Content !== null)
                                {
                                    $.each(Selected2Content, function (Key, Value)
                                    {
                                        if (SelectedKey2 !== undefined && SelectedKey2 !== null && Key !== undefined && Key !== null && SelectedVal2 !== undefined && SelectedVal2 !== null && Value !== undefined && Value !== null)
                                        {
                                            if (SelectedKey2.toString().toLowerCase() == Key.toString().toLowerCase() && SelectedVal2.toString().toLowerCase() == Value.toString().toLowerCase())
                                            {
                                                _ObjReturn = Selected2Content;
                                                return false;
                                            }
                                        }
                                    });
                                }
                            });
                        }
                    }
                }
            }
            else
            {
                $.each(Selected1Content, function (Key, Value)
                {
                    if (SelectedKey1 !== undefined && SelectedKey1 !== null && Key !== undefined && Key !== null && SelectedVal1 !== undefined && SelectedVal1 !== null && Value !== undefined && Value !== null)
                    {
                        if (SelectedKey1.toString().toLowerCase() == Key.toString().toLowerCase() && SelectedVal1.toString().toLowerCase() == Value.toString().toLowerCase())
                        {
                            _ObjReturn = Selected1Content;
                            return false;
                        }
                    }
                });
            }
        });
    }
    return _ObjReturn;
}

function removeSelectedObj(SelectedList1, SelectedKey1, SelectedVal1, SelectedList2, SelectedKey2, SelectedVal2)
{
    if (SelectedList1 !== undefined && SelectedList1 !== null)
    {
        $.each(SelectedList1, function (index1, Selected1Content)
        {
            if (SelectedList2 !== undefined && SelectedList2 !== null)
            {
                if (Selected1Content.hasOwnProperty(SelectedKey1) && Selected1Content[SelectedKey1] !== null && SelectedVal1 !== undefined && SelectedVal1 !== null)
                {
                    if (Selected1Content[SelectedKey1].toString().toLowerCase() == SelectedVal1.toString().toLowerCase())
                    {
                        if (Selected1Content.hasOwnProperty(SelectedList2) && Selected1Content[SelectedList2] !== null)
                        {
                            $.each(Selected1Content[SelectedList2], function (index2, Selected2Content)
                            {
                                if (Selected2Content.hasOwnProperty(SelectedKey2) && Selected2Content[SelectedKey2] !== null && SelectedVal2 !== undefined && SelectedVal2 !== null)
                                {
                                    if (Selected2Content[SelectedKey2].toString().toLowerCase() == SelectedVal2.toString().toLowerCase())
                                    {
                                        Selected1Content[SelectedList2].splice(index2, 1);
                                        return false;
                                    }
                                }
                            });
                        }
                    }
                }
            }
            else
            {
                if (Selected1Content.hasOwnProperty(SelectedKey1) && Selected1Content[SelectedKey1] !== null && SelectedVal1 !== undefined && SelectedVal1 !== null)
                {
                    if (Selected1Content[SelectedKey1].toString().toLowerCase() == SelectedVal1.toString().toLowerCase())
                    {
                        SelectedList1.splice(index1, 1);
                        return false;
                    }
                }
            }
        });
    }
}

function existsSelectedObj(SelectedList, SelectedKey, SelectedVal)
{
    var _Found = false;
    for (var i = 0; i < SelectedList.length; i++)
    {
        if (SelectedList[i].hasOwnProperty(SelectedKey) && SelectedList[i][SelectedKey] !== null && SelectedVal !== undefined && SelectedVal !== null)
        {
            if (SelectedList[i][SelectedKey].toString().toLowerCase() == SelectedVal.toString().toLowerCase())
            {
                _Found = true;
                break;
            }
        }
    }
    return _Found;
}

function changeInOut(_ElementIn, _ElementOut)
{
    if ($("#" + _ElementIn + "").is(":hidden"))
    {
        $("#" + _ElementIn + "").slideDown("slow");
        $("#" + _ElementOut + "").slideUp("slow");
    }
    else
    {
        $("#" + _ElementIn + "").slideUp("slow");
        $("#" + _ElementOut + "").slideDown("slow");
    }
}

function formatDateTime(SelectedDateTime, FormatType)
{
    if (moment(SelectedDateTime).isValid() == true)
    {
        return moment(SelectedDateTime).format(FormatType);
    }
    else
    {
        return "";
    }
}

function formatTime(SelectedTime)
{
    if (SelectedTime != "" && SelectedTime != null && SelectedTime != undefined)
    {
        return SelectedTime;
    }
    else
    {
        return "";
    }
}

function CalcChildrenHeight($Element)
{
    var topOffset = 0;
    var bottomOffset = 0;
    var outer = true;
    $Element.children().each(function (i, e)
    {
        var $e = $(e);
        var eTopOffset = $e.offset().top;
        var eBottomOffset = eTopOffset + (outer ? $e.outerHeight() : $e.height());

        if (eTopOffset < topOffset)
        {
            topOffset = eTopOffset;
        }
        if (eBottomOffset > bottomOffset)
        {
            bottomOffset = eBottomOffset;
        }
    });
    return (bottomOffset - topOffset - $Element.offset().top);
}

// AZ Portfolio
var _$PortfolioMenu = {};
var _$PortfolioContent = {};
function setPortfolio()
{
    _$PortfolioMenu = $(".az-portfolio-menu");
    _$PortfolioContent = $(".az-portfolio-content");
    _$PortfolioMenu.off().on("click", "li", function (e)
    {
        var _$MenuFilter = $(this).attr('data-filter');
        if (_$MenuFilter == "*")
        {
            _$PortfolioContent.children("li").removeClass("az-portfolio-content-hidden");
        }
        else
        {
            _$PortfolioContent.children("li").not(_$MenuFilter).addClass("az-portfolio-content-hidden");
            _$PortfolioContent.children(_$MenuFilter).removeClass("az-portfolio-content-hidden");
        }
    });
    if ($(".az-portfolio-content-hidden", _$PortfolioContent).length == 0)
    {
        _$PortfolioContent.height(0);
        _$PortfolioContent.height(_$PortfolioContent.parent().height() + 28);
    }
}

function setParallaxImages(ParallaxImages)
{
    $.each(ParallaxImages, function (i, ImagesContent)
    {
        var _CurrentImage = $('#img' + (i + 1));
        _CurrentImage.css({ 'background-image': 'url(' + ImagesContent.url + ')', 'height': ImagesContent.height, 'opacity': ImagesContent.opacity });
    });
}

function AZGuid()
{
    Guid();
}

function Guid()
{
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c)
    {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}