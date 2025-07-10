const langGT = document.documentElement.getAttribute("lang");

function getTranslations(language) {
  switch (language) {
    case "ar":
      return {
        selectYear: "\u0627\u062e\u062a\u0631 \u0627\u0644\u0633\u0646\u0629",
        minRead:
          "\u062f\u0642\u064a\u0642\u0629 \u0642\u0631\u0627\u0621\u0629",
        showing: "\u0639\u0631\u0636",
        results: "\u0646\u062a\u0627\u0626\u062c",
      };

    case "zh-CN":
      return {
        selectYear: "\u9009\u62e9\u5e74\u4efd",
        minRead: "\u5206\u949f\u9605\u8bfb",
        showing: "\u663e\u793a",
        results: "\u7ed3\u679c",
      };

    case "hr":
      return {
        selectYear: "Odaberite godinu",
        minRead: "min \u010ditanja",
        showing: "Prikazuje",
        results: "rezultata",
      };

    case "fr":
      return {
        selectYear: "S\u00e9lectionner l'ann\u00e9e",
        minRead: "min de lecture",
        showing: "Affichage",
        results: "r\u00e9sultats",
      };

    case "de":
      return {
        selectYear: "Jahr ausw\u00e4hlen",
        minRead: "min Lesezeit",
        showing: "Zeige",
        results: "Ergebnisse",
      };

    case "it":
      return {
        selectYear: "Seleziona anno",
        minRead: "min di lettura",
        showing: "Mostrando",
        results: "risultati",
      };

    case "en-GB":
    case "en-US":
    case "en":
    default:
      return {
        selectYear: "Select Year",
        minRead: "min read",
        showing: "Showing",
        results: "results",
      };
  }
}

const currentTranslations = getTranslations(langGT);
const selectYearText = currentTranslations.selectYear;
const minReadText = currentTranslations.minRead;
const showingText = currentTranslations.showing;
const resultsText = currentTranslations.results;

var xl = (e, t) => () => (
  t ||
    e(
      (t = {
        exports: {},
      }).exports,
      t,
    ),
  t.exports
);
var qg = xl((Ai, wl) => {
  /**
   * @vue/shared v3.5.14
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/
  /*! #__NO_SIDE_EFFECTS__ */
  function Li(e) {
    const t = Object.create(null);
    for (const s of e.split(",")) t[s] = 1;
    return (s) => s in t;
  }
  const le = {},
    Gt = [],
    ot = () => {},
    Tl = () => !1,
    fn = (e) =>
      e.charCodeAt(0) === 111 &&
      e.charCodeAt(1) === 110 &&
      (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    ki = (e) => e.startsWith("onUpdate:"),
    Se = Object.assign,
    Oi = (e, t) => {
      const s = e.indexOf(t);
      s > -1 && e.splice(s, 1);
    },
    El = Object.prototype.hasOwnProperty,
    ie = (e, t) => El.call(e, t),
    Y = Array.isArray,
    Ut = (e) => Ts(e) === "[object Map]",
    pn = (e) => Ts(e) === "[object Set]",
    rr = (e) => Ts(e) === "[object Date]",
    J = (e) => typeof e == "function",
    ve = (e) => typeof e == "string",
    Ke = (e) => typeof e == "symbol",
    ce = (e) => e !== null && typeof e == "object",
    vo = (e) => (ce(e) || J(e)) && J(e.then) && J(e.catch),
    yo = Object.prototype.toString,
    Ts = (e) => yo.call(e),
    Cl = (e) => Ts(e).slice(8, -1),
    us = (e) => Ts(e) === "[object Object]",
    Mi = (e) =>
      ve(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    ds = Li(
      ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
    ),
    hn = (e) => {
      const t = Object.create(null);
      return (s) => t[s] || (t[s] = e(s));
    },
    Pl = /-(\w)/g,
    Ge = hn((e) => e.replace(Pl, (t, s) => (s ? s.toUpperCase() : ""))),
    Al = /\B([A-Z])/g,
    Tt = hn((e) => e.replace(Al, "-$1").toLowerCase()),
    mn = hn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    Rn = hn((e) => (e ? `on${mn(e)}` : "")),
    Ot = (e, t) => !Object.is(e, t),
    Bs = (e, ...t) => {
      for (let s = 0; s < e.length; s++) e[s](...t);
    },
    bo = (e, t, s, n = !1) => {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: n,
        value: s,
      });
    },
    Us = (e) => {
      const t = parseFloat(e);
      return isNaN(t) ? e : t;
    },
    Ll = (e) => {
      const t = ve(e) ? Number(e) : NaN;
      return isNaN(t) ? e : t;
    };
  let or;
  const gn = () =>
    or ||
    (or =
      typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
          ? self
          : typeof window < "u"
            ? window
            : typeof global < "u"
              ? global
              : {});

  function Ii(e) {
    if (Y(e)) {
      const t = {};
      for (let s = 0; s < e.length; s++) {
        const n = e[s],
          i = ve(n) ? Il(n) : Ii(n);
        if (i) for (const r in i) t[r] = i[r];
      }
      return t;
    } else if (ve(e) || ce(e)) return e;
  }
  const kl = /;(?![^(]*\))/g,
    Ol = /:([^]+)/,
    Ml = /\/\*[^]*?\*\//g;

  function Il(e) {
    const t = {};
    return (
      e
        .replace(Ml, "")
        .split(kl)
        .forEach((s) => {
          if (s) {
            const n = s.split(Ol);
            n.length > 1 && (t[n[0].trim()] = n[1].trim());
          }
        }),
      t
    );
  }

  function me(e) {
    let t = "";
    if (ve(e)) t = e;
    else if (Y(e))
      for (let s = 0; s < e.length; s++) {
        const n = me(e[s]);
        n && (t += n + " ");
      }
    else if (ce(e)) for (const s in e) e[s] && (t += s + " ");
    return t.trim();
  }
  const Rl =
      "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    Nl = Li(Rl);

  function wo(e) {
    return !!e || e === "";
  }

  function Dl(e, t) {
    if (e.length !== t.length) return !1;
    let s = !0;
    for (let n = 0; s && n < e.length; n++) s = vn(e[n], t[n]);
    return s;
  }

  function vn(e, t) {
    if (e === t) return !0;
    let s = rr(e),
      n = rr(t);
    if (s || n) return s && n ? e.getTime() === t.getTime() : !1;
    if (((s = Ke(e)), (n = Ke(t)), s || n)) return e === t;
    if (((s = Y(e)), (n = Y(t)), s || n)) return s && n ? Dl(e, t) : !1;
    if (((s = ce(e)), (n = ce(t)), s || n)) {
      if (!s || !n) return !1;
      const i = Object.keys(e).length,
        r = Object.keys(t).length;
      if (i !== r) return !1;
      for (const o in e) {
        const a = e.hasOwnProperty(o),
          l = t.hasOwnProperty(o);
        if ((a && !l) || (!a && l) || !vn(e[o], t[o])) return !1;
      }
    }
    return String(e) === String(t);
  }

  function Bl(e, t) {
    return e.findIndex((s) => vn(s, t));
  }
  const So = (e) => !!(e && e.__v_isRef === !0),
    fe = (e) =>
      ve(e)
        ? e
        : e == null
          ? ""
          : Y(e) || (ce(e) && (e.toString === yo || !J(e.toString)))
            ? So(e)
              ? fe(e.value)
              : JSON.stringify(e, _o, 2)
            : String(e),
    _o = (e, t) =>
      So(t)
        ? _o(e, t.value)
        : Ut(t)
          ? {
              [`Map(${t.size})`]: [...t.entries()].reduce(
                (s, [n, i], r) => ((s[Nn(n, r) + " =>"] = i), s),
                {},
              ),
            }
          : pn(t)
            ? {
                [`Set(${t.size})`]: [...t.values()].map((s) => Nn(s)),
              }
            : Ke(t)
              ? Nn(t)
              : ce(t) && !Y(t) && !us(t)
                ? String(t)
                : t,
    Nn = (e, t = "") => {
      var s;
      return Ke(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e;
    };
  /**
   * @vue/reactivity v3.5.14
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/
  let Ne;
  class Fl {
    constructor(t = !1) {
      (this.detached = t),
        (this._active = !0),
        (this._on = 0),
        (this.effects = []),
        (this.cleanups = []),
        (this._isPaused = !1),
        (this.parent = Ne),
        !t &&
          Ne &&
          (this.index = (Ne.scopes || (Ne.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = !0;
        let t, s;
        if (this.scopes)
          for (t = 0, s = this.scopes.length; t < s; t++)
            this.scopes[t].pause();
        for (t = 0, s = this.effects.length; t < s; t++)
          this.effects[t].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = !1;
        let t, s;
        if (this.scopes)
          for (t = 0, s = this.scopes.length; t < s; t++)
            this.scopes[t].resume();
        for (t = 0, s = this.effects.length; t < s; t++)
          this.effects[t].resume();
      }
    }
    run(t) {
      if (this._active) {
        const s = Ne;
        try {
          return (Ne = this), t();
        } finally {
          Ne = s;
        }
      }
    }
    on() {
      ++this._on === 1 && ((this.prevScope = Ne), (Ne = this));
    }
    off() {
      this._on > 0 &&
        --this._on === 0 &&
        ((Ne = this.prevScope), (this.prevScope = void 0));
    }
    stop(t) {
      if (this._active) {
        this._active = !1;
        let s, n;
        for (s = 0, n = this.effects.length; s < n; s++) this.effects[s].stop();
        for (
          this.effects.length = 0, s = 0, n = this.cleanups.length;
          s < n;
          s++
        )
          this.cleanups[s]();
        if (((this.cleanups.length = 0), this.scopes)) {
          for (s = 0, n = this.scopes.length; s < n; s++)
            this.scopes[s].stop(!0);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !t) {
          const i = this.parent.scopes.pop();
          i &&
            i !== this &&
            ((this.parent.scopes[this.index] = i), (i.index = this.index));
        }
        this.parent = void 0;
      }
    }
  }

  function Vl() {
    return Ne;
  }
  let de;
  const Dn = new WeakSet();
  class xo {
    constructor(t) {
      (this.fn = t),
        (this.deps = void 0),
        (this.depsTail = void 0),
        (this.flags = 5),
        (this.next = void 0),
        (this.cleanup = void 0),
        (this.scheduler = void 0),
        Ne && Ne.active && Ne.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 &&
        ((this.flags &= -65),
        Dn.has(this) && (Dn.delete(this), this.trigger()));
    }
    notify() {
      (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Eo(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      (this.flags |= 2), ar(this), Co(this);
      const t = de,
        s = Ue;
      (de = this), (Ue = !0);
      try {
        return this.fn();
      } finally {
        Po(this), (de = t), (Ue = s), (this.flags &= -3);
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) Di(t);
        (this.deps = this.depsTail = void 0),
          ar(this),
          this.onStop && this.onStop(),
          (this.flags &= -2);
      }
    }
    trigger() {
      this.flags & 64
        ? Dn.add(this)
        : this.scheduler
          ? this.scheduler()
          : this.runIfDirty();
    }
    runIfDirty() {
      ri(this) && this.run();
    }
    get dirty() {
      return ri(this);
    }
  }
  let To = 0,
    fs,
    ps;

  function Eo(e, t = !1) {
    if (((e.flags |= 8), t)) {
      (e.next = ps), (ps = e);
      return;
    }
    (e.next = fs), (fs = e);
  }

  function Ri() {
    To++;
  }

  function Ni() {
    if (--To > 0) return;
    if (ps) {
      let t = ps;
      for (ps = void 0; t; ) {
        const s = t.next;
        (t.next = void 0), (t.flags &= -9), (t = s);
      }
    }
    let e;
    for (; fs; ) {
      let t = fs;
      for (fs = void 0; t; ) {
        const s = t.next;
        if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
          try {
            t.trigger();
          } catch (n) {
            e || (e = n);
          }
        t = s;
      }
    }
    if (e) throw e;
  }

  function Co(e) {
    for (let t = e.deps; t; t = t.nextDep)
      (t.version = -1),
        (t.prevActiveLink = t.dep.activeLink),
        (t.dep.activeLink = t);
  }

  function Po(e) {
    let t,
      s = e.depsTail,
      n = s;
    for (; n; ) {
      const i = n.prevDep;
      n.version === -1 ? (n === s && (s = i), Di(n), Hl(n)) : (t = n),
        (n.dep.activeLink = n.prevActiveLink),
        (n.prevActiveLink = void 0),
        (n = i);
    }
    (e.deps = t), (e.depsTail = s);
  }

  function ri(e) {
    for (let t = e.deps; t; t = t.nextDep)
      if (
        t.dep.version !== t.version ||
        (t.dep.computed && (Ao(t.dep.computed) || t.dep.version !== t.version))
      )
        return !0;
    return !!e._dirty;
  }

  function Ao(e) {
    if (
      (e.flags & 4 && !(e.flags & 16)) ||
      ((e.flags &= -17), e.globalVersion === gs) ||
      ((e.globalVersion = gs),
      !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !ri(e)))
    )
      return;
    e.flags |= 2;
    const t = e.dep,
      s = de,
      n = Ue;
    (de = e), (Ue = !0);
    try {
      Co(e);
      const i = e.fn(e._value);
      (t.version === 0 || Ot(i, e._value)) &&
        ((e.flags |= 128), (e._value = i), t.version++);
    } catch (i) {
      throw (t.version++, i);
    } finally {
      (de = s), (Ue = n), Po(e), (e.flags &= -3);
    }
  }

  function Di(e, t = !1) {
    const { dep: s, prevSub: n, nextSub: i } = e;
    if (
      (n && ((n.nextSub = i), (e.prevSub = void 0)),
      i && ((i.prevSub = n), (e.nextSub = void 0)),
      s.subs === e && ((s.subs = n), !n && s.computed))
    ) {
      s.computed.flags &= -5;
      for (let r = s.computed.deps; r; r = r.nextDep) Di(r, !0);
    }
    !t && !--s.sc && s.map && s.map.delete(s.key);
  }

  function Hl(e) {
    const { prevDep: t, nextDep: s } = e;
    t && ((t.nextDep = s), (e.prevDep = void 0)),
      s && ((s.prevDep = t), (e.nextDep = void 0));
  }
  let Ue = !0;
  const Lo = [];

  function gt() {
    Lo.push(Ue), (Ue = !1);
  }

  function vt() {
    const e = Lo.pop();
    Ue = e === void 0 ? !0 : e;
  }

  function ar(e) {
    const { cleanup: t } = e;
    if (((e.cleanup = void 0), t)) {
      const s = de;
      de = void 0;
      try {
        t();
      } finally {
        de = s;
      }
    }
  }
  let gs = 0;
  class $l {
    constructor(t, s) {
      (this.sub = t),
        (this.dep = s),
        (this.version = s.version),
        (this.nextDep =
          this.prevDep =
          this.nextSub =
          this.prevSub =
          this.prevActiveLink =
            void 0);
    }
  }
  class ko {
    constructor(t) {
      (this.computed = t),
        (this.version = 0),
        (this.activeLink = void 0),
        (this.subs = void 0),
        (this.map = void 0),
        (this.key = void 0),
        (this.sc = 0);
    }
    track(t) {
      if (!de || !Ue || de === this.computed) return;
      let s = this.activeLink;
      if (s === void 0 || s.sub !== de)
        (s = this.activeLink = new $l(de, this)),
          de.deps
            ? ((s.prevDep = de.depsTail),
              (de.depsTail.nextDep = s),
              (de.depsTail = s))
            : (de.deps = de.depsTail = s),
          Oo(s);
      else if (s.version === -1 && ((s.version = this.version), s.nextDep)) {
        const n = s.nextDep;
        (n.prevDep = s.prevDep),
          s.prevDep && (s.prevDep.nextDep = n),
          (s.prevDep = de.depsTail),
          (s.nextDep = void 0),
          (de.depsTail.nextDep = s),
          (de.depsTail = s),
          de.deps === s && (de.deps = n);
      }
      return s;
    }
    trigger(t) {
      this.version++, gs++, this.notify(t);
    }
    notify(t) {
      Ri();
      try {
        for (let s = this.subs; s; s = s.prevSub)
          s.sub.notify() && s.sub.dep.notify();
      } finally {
        Ni();
      }
    }
  }

  function Oo(e) {
    if ((e.dep.sc++, e.sub.flags & 4)) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let n = t.deps; n; n = n.nextDep) Oo(n);
      }
      const s = e.dep.subs;
      s !== e && ((e.prevSub = s), s && (s.nextSub = e)), (e.dep.subs = e);
    }
  }
  const oi = new WeakMap(),
    Mt = Symbol(""),
    ai = Symbol(""),
    vs = Symbol("");

  function Ee(e, t, s) {
    if (Ue && de) {
      let n = oi.get(e);
      n || oi.set(e, (n = new Map()));
      let i = n.get(s);
      i || (n.set(s, (i = new ko())), (i.map = n), (i.key = s)), i.track();
    }
  }

  function dt(e, t, s, n, i, r) {
    const o = oi.get(e);
    if (!o) {
      gs++;
      return;
    }
    const a = (l) => {
      l && l.trigger();
    };
    if ((Ri(), t === "clear")) o.forEach(a);
    else {
      const l = Y(e),
        c = l && Mi(s);
      if (l && s === "length") {
        const u = Number(n);
        o.forEach((d, p) => {
          (p === "length" || p === vs || (!Ke(p) && p >= u)) && a(d);
        });
      } else
        switch (
          ((s !== void 0 || o.has(void 0)) && a(o.get(s)), c && a(o.get(vs)), t)
        ) {
          case "add":
            l ? c && a(o.get("length")) : (a(o.get(Mt)), Ut(e) && a(o.get(ai)));
            break;
          case "delete":
            l || (a(o.get(Mt)), Ut(e) && a(o.get(ai)));
            break;
          case "set":
            Ut(e) && a(o.get(Mt));
            break;
        }
    }
    Ni();
  }

  function Ht(e) {
    const t = oe(e);
    return t === e ? t : (Ee(t, "iterate", vs), We(e) ? t : t.map(ke));
  }

  function yn(e) {
    return Ee((e = oe(e)), "iterate", vs), e;
  }
  const jl = {
    __proto__: null,
    [Symbol.iterator]() {
      return Bn(this, Symbol.iterator, ke);
    },
    concat(...e) {
      return Ht(this).concat(...e.map((t) => (Y(t) ? Ht(t) : t)));
    },
    entries() {
      return Bn(this, "entries", (e) => ((e[1] = ke(e[1])), e));
    },
    every(e, t) {
      return ct(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return ct(this, "filter", e, t, (s) => s.map(ke), arguments);
    },
    find(e, t) {
      return ct(this, "find", e, t, ke, arguments);
    },
    findIndex(e, t) {
      return ct(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return ct(this, "findLast", e, t, ke, arguments);
    },
    findLastIndex(e, t) {
      return ct(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return ct(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return Fn(this, "includes", e);
    },
    indexOf(...e) {
      return Fn(this, "indexOf", e);
    },
    join(e) {
      return Ht(this).join(e);
    },
    lastIndexOf(...e) {
      return Fn(this, "lastIndexOf", e);
    },
    map(e, t) {
      return ct(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return rs(this, "pop");
    },
    push(...e) {
      return rs(this, "push", e);
    },
    reduce(e, ...t) {
      return lr(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return lr(this, "reduceRight", e, t);
    },
    shift() {
      return rs(this, "shift");
    },
    some(e, t) {
      return ct(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return rs(this, "splice", e);
    },
    toReversed() {
      return Ht(this).toReversed();
    },
    toSorted(e) {
      return Ht(this).toSorted(e);
    },
    toSpliced(...e) {
      return Ht(this).toSpliced(...e);
    },
    unshift(...e) {
      return rs(this, "unshift", e);
    },
    values() {
      return Bn(this, "values", ke);
    },
  };

  function Bn(e, t, s) {
    const n = yn(e),
      i = n[t]();
    return (
      n !== e &&
        !We(e) &&
        ((i._next = i.next),
        (i.next = () => {
          const r = i._next();
          return r.value && (r.value = s(r.value)), r;
        })),
      i
    );
  }
  const zl = Array.prototype;

  function ct(e, t, s, n, i, r) {
    const o = yn(e),
      a = o !== e && !We(e),
      l = o[t];
    if (l !== zl[t]) {
      const d = l.apply(e, r);
      return a ? ke(d) : d;
    }
    let c = s;
    o !== e &&
      (a
        ? (c = function (d, p) {
            return s.call(this, ke(d), p, e);
          })
        : s.length > 2 &&
          (c = function (d, p) {
            return s.call(this, d, p, e);
          }));
    const u = l.call(o, c, n);
    return a && i ? i(u) : u;
  }

  function lr(e, t, s, n) {
    const i = yn(e);
    let r = s;
    return (
      i !== e &&
        (We(e)
          ? s.length > 3 &&
            (r = function (o, a, l) {
              return s.call(this, o, a, l, e);
            })
          : (r = function (o, a, l) {
              return s.call(this, o, ke(a), l, e);
            })),
      i[t](r, ...n)
    );
  }

  function Fn(e, t, s) {
    const n = oe(e);
    Ee(n, "iterate", vs);
    const i = n[t](...s);
    return (i === -1 || i === !1) && Hi(s[0])
      ? ((s[0] = oe(s[0])), n[t](...s))
      : i;
  }

  function rs(e, t, s = []) {
    gt(), Ri();
    const n = oe(e)[t].apply(e, s);
    return Ni(), vt(), n;
  }
  const ql = Li("__proto__,__v_isRef,__isVue"),
    Mo = new Set(
      Object.getOwnPropertyNames(Symbol)
        .filter((e) => e !== "arguments" && e !== "caller")
        .map((e) => Symbol[e])
        .filter(Ke),
    );

  function Gl(e) {
    Ke(e) || (e = String(e));
    const t = oe(this);
    return Ee(t, "has", e), t.hasOwnProperty(e);
  }
  class Io {
    constructor(t = !1, s = !1) {
      (this._isReadonly = t), (this._isShallow = s);
    }
    get(t, s, n) {
      if (s === "__v_skip") return t.__v_skip;
      const i = this._isReadonly,
        r = this._isShallow;
      if (s === "__v_isReactive") return !i;
      if (s === "__v_isReadonly") return i;
      if (s === "__v_isShallow") return r;
      if (s === "__v_raw")
        return n === (i ? (r ? tc : Bo) : r ? Do : No).get(t) ||
          Object.getPrototypeOf(t) === Object.getPrototypeOf(n)
          ? t
          : void 0;
      const o = Y(t);
      if (!i) {
        let l;
        if (o && (l = jl[s])) return l;
        if (s === "hasOwnProperty") return Gl;
      }
      const a = Reflect.get(t, s, Me(t) ? t : n);
      return (Ke(s) ? Mo.has(s) : ql(s)) || (i || Ee(t, "get", s), r)
        ? a
        : Me(a)
          ? o && Mi(s)
            ? a
            : a.value
          : ce(a)
            ? i
              ? Fo(a)
              : Fi(a)
            : a;
    }
  }
  class Ro extends Io {
    constructor(t = !1) {
      super(!1, t);
    }
    set(t, s, n, i) {
      let r = t[s];
      if (!this._isShallow) {
        const l = Rt(r);
        if (
          (!We(n) && !Rt(n) && ((r = oe(r)), (n = oe(n))),
          !Y(t) && Me(r) && !Me(n))
        )
          return l ? !1 : ((r.value = n), !0);
      }
      const o = Y(t) && Mi(s) ? Number(s) < t.length : ie(t, s),
        a = Reflect.set(t, s, n, Me(t) ? t : i);
      return (
        t === oe(i) &&
          (o ? Ot(n, r) && dt(t, "set", s, n) : dt(t, "add", s, n)),
        a
      );
    }
    deleteProperty(t, s) {
      const n = ie(t, s);
      t[s];
      const i = Reflect.deleteProperty(t, s);
      return i && n && dt(t, "delete", s, void 0), i;
    }
    has(t, s) {
      const n = Reflect.has(t, s);
      return (!Ke(s) || !Mo.has(s)) && Ee(t, "has", s), n;
    }
    ownKeys(t) {
      return Ee(t, "iterate", Y(t) ? "length" : Mt), Reflect.ownKeys(t);
    }
  }
  class Ul extends Io {
    constructor(t = !1) {
      super(!0, t);
    }
    set(t, s) {
      return !0;
    }
    deleteProperty(t, s) {
      return !0;
    }
  }
  const Wl = new Ro(),
    Kl = new Ul(),
    Yl = new Ro(!0),
    li = (e) => e,
    Os = (e) => Reflect.getPrototypeOf(e);

  function Xl(e, t, s) {
    return function (...n) {
      const i = this.__v_raw,
        r = oe(i),
        o = Ut(r),
        a = e === "entries" || (e === Symbol.iterator && o),
        l = e === "keys" && o,
        c = i[e](...n),
        u = s ? li : t ? Ws : ke;
      return (
        !t && Ee(r, "iterate", l ? ai : Mt),
        {
          next() {
            const { value: d, done: p } = c.next();
            return p
              ? {
                  value: d,
                  done: p,
                }
              : {
                  value: a ? [u(d[0]), u(d[1])] : u(d),
                  done: p,
                };
          },
          [Symbol.iterator]() {
            return this;
          },
        }
      );
    };
  }

  function Ms(e) {
    return function (...t) {
      return e === "delete" ? !1 : e === "clear" ? void 0 : this;
    };
  }

  function Jl(e, t) {
    const s = {
      get(i) {
        const r = this.__v_raw,
          o = oe(r),
          a = oe(i);
        e || (Ot(i, a) && Ee(o, "get", i), Ee(o, "get", a));
        const { has: l } = Os(o),
          c = t ? li : e ? Ws : ke;
        if (l.call(o, i)) return c(r.get(i));
        if (l.call(o, a)) return c(r.get(a));
        r !== o && r.get(i);
      },
      get size() {
        const i = this.__v_raw;
        return !e && Ee(oe(i), "iterate", Mt), Reflect.get(i, "size", i);
      },
      has(i) {
        const r = this.__v_raw,
          o = oe(r),
          a = oe(i);
        return (
          e || (Ot(i, a) && Ee(o, "has", i), Ee(o, "has", a)),
          i === a ? r.has(i) : r.has(i) || r.has(a)
        );
      },
      forEach(i, r) {
        const o = this,
          a = o.__v_raw,
          l = oe(a),
          c = t ? li : e ? Ws : ke;
        return (
          !e && Ee(l, "iterate", Mt),
          a.forEach((u, d) => i.call(r, c(u), c(d), o))
        );
      },
    };
    return (
      Se(
        s,
        e
          ? {
              add: Ms("add"),
              set: Ms("set"),
              delete: Ms("delete"),
              clear: Ms("clear"),
            }
          : {
              add(i) {
                !t && !We(i) && !Rt(i) && (i = oe(i));
                const r = oe(this);
                return (
                  Os(r).has.call(r, i) || (r.add(i), dt(r, "add", i, i)), this
                );
              },
              set(i, r) {
                !t && !We(r) && !Rt(r) && (r = oe(r));
                const o = oe(this),
                  { has: a, get: l } = Os(o);
                let c = a.call(o, i);
                c || ((i = oe(i)), (c = a.call(o, i)));
                const u = l.call(o, i);
                return (
                  o.set(i, r),
                  c ? Ot(r, u) && dt(o, "set", i, r) : dt(o, "add", i, r),
                  this
                );
              },
              delete(i) {
                const r = oe(this),
                  { has: o, get: a } = Os(r);
                let l = o.call(r, i);
                l || ((i = oe(i)), (l = o.call(r, i))), a && a.call(r, i);
                const c = r.delete(i);
                return l && dt(r, "delete", i, void 0), c;
              },
              clear() {
                const i = oe(this),
                  r = i.size !== 0,
                  o = i.clear();
                return r && dt(i, "clear", void 0, void 0), o;
              },
            },
      ),
      ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
        s[i] = Xl(i, e, t);
      }),
      s
    );
  }

  function Bi(e, t) {
    const s = Jl(e, t);
    return (n, i, r) =>
      i === "__v_isReactive"
        ? !e
        : i === "__v_isReadonly"
          ? e
          : i === "__v_raw"
            ? n
            : Reflect.get(ie(s, i) && i in n ? s : n, i, r);
  }
  const Ql = {
      get: Bi(!1, !1),
    },
    Zl = {
      get: Bi(!1, !0),
    },
    ec = {
      get: Bi(!0, !1),
    },
    No = new WeakMap(),
    Do = new WeakMap(),
    Bo = new WeakMap(),
    tc = new WeakMap();

  function sc(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }

  function nc(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : sc(Cl(e));
  }

  function Fi(e) {
    return Rt(e) ? e : Vi(e, !1, Wl, Ql, No);
  }

  function ic(e) {
    return Vi(e, !1, Yl, Zl, Do);
  }

  function Fo(e) {
    return Vi(e, !0, Kl, ec, Bo);
  }

  function Vi(e, t, s, n, i) {
    if (!ce(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
    const r = nc(e);
    if (r === 0) return e;
    const o = i.get(e);
    if (o) return o;
    const a = new Proxy(e, r === 2 ? n : s);
    return i.set(e, a), a;
  }

  function Wt(e) {
    return Rt(e) ? Wt(e.__v_raw) : !!(e && e.__v_isReactive);
  }

  function Rt(e) {
    return !!(e && e.__v_isReadonly);
  }

  function We(e) {
    return !!(e && e.__v_isShallow);
  }

  function Hi(e) {
    return e ? !!e.__v_raw : !1;
  }

  function oe(e) {
    const t = e && e.__v_raw;
    return t ? oe(t) : e;
  }

  function rc(e) {
    return (
      !ie(e, "__v_skip") && Object.isExtensible(e) && bo(e, "__v_skip", !0), e
    );
  }
  const ke = (e) => (ce(e) ? Fi(e) : e),
    Ws = (e) => (ce(e) ? Fo(e) : e);

  function Me(e) {
    return e ? e.__v_isRef === !0 : !1;
  }

  function oc(e) {
    return Me(e) ? e.value : e;
  }
  const ac = {
    get: (e, t, s) => (t === "__v_raw" ? e : oc(Reflect.get(e, t, s))),
    set: (e, t, s, n) => {
      const i = e[t];
      return Me(i) && !Me(s) ? ((i.value = s), !0) : Reflect.set(e, t, s, n);
    },
  };

  function Vo(e) {
    return Wt(e) ? e : new Proxy(e, ac);
  }
  class lc {
    constructor(t, s, n) {
      (this.fn = t),
        (this.setter = s),
        (this._value = void 0),
        (this.dep = new ko(this)),
        (this.__v_isRef = !0),
        (this.deps = void 0),
        (this.depsTail = void 0),
        (this.flags = 16),
        (this.globalVersion = gs - 1),
        (this.next = void 0),
        (this.effect = this),
        (this.__v_isReadonly = !s),
        (this.isSSR = n);
    }
    notify() {
      if (((this.flags |= 16), !(this.flags & 8) && de !== this))
        return Eo(this, !0), !0;
    }
    get value() {
      const t = this.dep.track();
      return Ao(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }

  function cc(e, t, s = !1) {
    let n, i;
    return J(e) ? (n = e) : ((n = e.get), (i = e.set)), new lc(n, i, s);
  }
  const Is = {},
    Ks = new WeakMap();
  let At;

  function uc(e, t = !1, s = At) {
    if (s) {
      let n = Ks.get(s);
      n || Ks.set(s, (n = [])), n.push(e);
    }
  }

  function dc(e, t, s = le) {
    const {
        immediate: n,
        deep: i,
        once: r,
        scheduler: o,
        augmentJob: a,
        call: l,
      } = s,
      c = (w) => (i ? w : We(w) || i === !1 || i === 0 ? ft(w, 1) : ft(w));
    let u,
      d,
      p,
      v,
      f = !1,
      b = !1;
    if (
      (Me(e)
        ? ((d = () => e.value), (f = We(e)))
        : Wt(e)
          ? ((d = () => c(e)), (f = !0))
          : Y(e)
            ? ((b = !0),
              (f = e.some((w) => Wt(w) || We(w))),
              (d = () =>
                e.map((w) => {
                  if (Me(w)) return w.value;
                  if (Wt(w)) return c(w);
                  if (J(w)) return l ? l(w, 2) : w();
                })))
            : J(e)
              ? t
                ? (d = l ? () => l(e, 2) : e)
                : (d = () => {
                    if (p) {
                      gt();
                      try {
                        p();
                      } finally {
                        vt();
                      }
                    }
                    const w = At;
                    At = u;
                    try {
                      return l ? l(e, 3, [v]) : e(v);
                    } finally {
                      At = w;
                    }
                  })
              : (d = ot),
      t && i)
    ) {
      const w = d,
        T = i === !0 ? 1 / 0 : i;
      d = () => ft(w(), T);
    }
    const _ = Vl(),
      S = () => {
        u.stop(), _ && _.active && Oi(_.effects, u);
      };
    if (r && t) {
      const w = t;
      t = (...T) => {
        w(...T), S();
      };
    }
    let h = b ? new Array(e.length).fill(Is) : Is;
    const g = (w) => {
      if (!(!(u.flags & 1) || (!u.dirty && !w)))
        if (t) {
          const T = u.run();
          if (i || f || (b ? T.some((B, $) => Ot(B, h[$])) : Ot(T, h))) {
            p && p();
            const B = At;
            At = u;
            try {
              const $ = [T, h === Is ? void 0 : b && h[0] === Is ? [] : h, v];
              l ? l(t, 3, $) : t(...$), (h = T);
            } finally {
              At = B;
            }
          }
        } else u.run();
    };
    return (
      a && a(g),
      (u = new xo(d)),
      (u.scheduler = o ? () => o(g, !1) : g),
      (v = (w) => uc(w, !1, u)),
      (p = u.onStop =
        () => {
          const w = Ks.get(u);
          if (w) {
            if (l) l(w, 4);
            else for (const T of w) T();
            Ks.delete(u);
          }
        }),
      t ? (n ? g(!0) : (h = u.run())) : o ? o(g.bind(null, !0), !0) : u.run(),
      (S.pause = u.pause.bind(u)),
      (S.resume = u.resume.bind(u)),
      (S.stop = S),
      S
    );
  }

  function ft(e, t = 1 / 0, s) {
    if (t <= 0 || !ce(e) || e.__v_skip || ((s = s || new Set()), s.has(e)))
      return e;
    if ((s.add(e), t--, Me(e))) ft(e.value, t, s);
    else if (Y(e)) for (let n = 0; n < e.length; n++) ft(e[n], t, s);
    else if (pn(e) || Ut(e))
      e.forEach((n) => {
        ft(n, t, s);
      });
    else if (us(e)) {
      for (const n in e) ft(e[n], t, s);
      for (const n of Object.getOwnPropertySymbols(e))
        Object.prototype.propertyIsEnumerable.call(e, n) && ft(e[n], t, s);
    }
    return e;
  }
  /**
   * @vue/runtime-core v3.5.14
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/
  function Es(e, t, s, n) {
    try {
      return n ? e(...n) : e();
    } catch (i) {
      bn(i, t, s);
    }
  }

  function Ye(e, t, s, n) {
    if (J(e)) {
      const i = Es(e, t, s, n);
      return (
        i &&
          vo(i) &&
          i.catch((r) => {
            bn(r, t, s);
          }),
        i
      );
    }
    if (Y(e)) {
      const i = [];
      for (let r = 0; r < e.length; r++) i.push(Ye(e[r], t, s, n));
      return i;
    }
  }

  function bn(e, t, s, n = !0) {
    const i = t ? t.vnode : null,
      { errorHandler: r, throwUnhandledErrorInProduction: o } =
        (t && t.appContext.config) || le;
    if (t) {
      let a = t.parent;
      const l = t.proxy,
        c = `https://vuejs.org/error-reference/#runtime-${s}`;
      for (; a; ) {
        const u = a.ec;
        if (u) {
          for (let d = 0; d < u.length; d++) if (u[d](e, l, c) === !1) return;
        }
        a = a.parent;
      }
      if (r) {
        gt(), Es(r, null, 10, [e, l, c]), vt();
        return;
      }
    }
    fc(e, s, i, n, o);
  }

  function fc(e, t, s, n = !0, i = !1) {
    if (i) throw e;
    console.error(e);
  }
  const Oe = [];
  let nt = -1;
  const Kt = [];
  let St = null,
    jt = 0;
  const Ho = Promise.resolve();
  let Ys = null;

  function Xs(e) {
    const t = Ys || Ho;
    return e ? t.then(this ? e.bind(this) : e) : t;
  }

  function pc(e) {
    let t = nt + 1,
      s = Oe.length;
    for (; t < s; ) {
      const n = (t + s) >>> 1,
        i = Oe[n],
        r = ys(i);
      r < e || (r === e && i.flags & 2) ? (t = n + 1) : (s = n);
    }
    return t;
  }

  function $i(e) {
    if (!(e.flags & 1)) {
      const t = ys(e),
        s = Oe[Oe.length - 1];
      !s || (!(e.flags & 2) && t >= ys(s))
        ? Oe.push(e)
        : Oe.splice(pc(t), 0, e),
        (e.flags |= 1),
        $o();
    }
  }

  function $o() {
    Ys || (Ys = Ho.then(zo));
  }

  function hc(e) {
    Y(e)
      ? Kt.push(...e)
      : St && e.id === -1
        ? St.splice(jt + 1, 0, e)
        : e.flags & 1 || (Kt.push(e), (e.flags |= 1)),
      $o();
  }

  function cr(e, t, s = nt + 1) {
    for (; s < Oe.length; s++) {
      const n = Oe[s];
      if (n && n.flags & 2) {
        if (e && n.id !== e.uid) continue;
        Oe.splice(s, 1),
          s--,
          n.flags & 4 && (n.flags &= -2),
          n(),
          n.flags & 4 || (n.flags &= -2);
      }
    }
  }

  function jo(e) {
    if (Kt.length) {
      const t = [...new Set(Kt)].sort((s, n) => ys(s) - ys(n));
      if (((Kt.length = 0), St)) {
        St.push(...t);
        return;
      }
      for (St = t, jt = 0; jt < St.length; jt++) {
        const s = St[jt];
        s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), (s.flags &= -2);
      }
      (St = null), (jt = 0);
    }
  }
  const ys = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);

  function zo(e) {
    try {
      for (nt = 0; nt < Oe.length; nt++) {
        const t = Oe[nt];
        t &&
          !(t.flags & 8) &&
          (t.flags & 4 && (t.flags &= -2),
          Es(t, t.i, t.i ? 15 : 14),
          t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; nt < Oe.length; nt++) {
        const t = Oe[nt];
        t && (t.flags &= -2);
      }
      (nt = -1),
        (Oe.length = 0),
        jo(),
        (Ys = null),
        (Oe.length || Kt.length) && zo();
    }
  }
  let we = null,
    qo = null;

  function Js(e) {
    const t = we;
    return (we = e), (qo = (e && e.type.__scopeId) || null), t;
  }

  function wn(e, t = we, s) {
    if (!t || e._n) return e;
    const n = (...i) => {
      n._d && br(-1);
      const r = Js(t);
      let o;
      try {
        o = e(...i);
      } finally {
        Js(r), n._d && br(1);
      }
      return o;
    };
    return (n._n = !0), (n._c = !0), (n._d = !0), n;
  }

  function Go(e, t) {
    if (we === null) return e;
    const s = Tn(we),
      n = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
      let [r, o, a, l = le] = t[i];
      r &&
        (J(r) &&
          (r = {
            mounted: r,
            updated: r,
          }),
        r.deep && ft(o),
        n.push({
          dir: r,
          instance: s,
          value: o,
          oldValue: void 0,
          arg: a,
          modifiers: l,
        }));
    }
    return e;
  }

  function Et(e, t, s, n) {
    const i = e.dirs,
      r = t && t.dirs;
    for (let o = 0; o < i.length; o++) {
      const a = i[o];
      r && (a.oldValue = r[o].value);
      let l = a.dir[n];
      l && (gt(), Ye(l, s, 8, [e.el, a, e, t]), vt());
    }
  }
  const mc = Symbol("_vte"),
    gc = (e) => e.__isTeleport,
    $t = Symbol("_leaveCb"),
    Rs = Symbol("_enterCb");

  function vc() {
    const e = {
      isMounted: !1,
      isLeaving: !1,
      isUnmounting: !1,
      leavingVNodes: new Map(),
    };
    return (
      Xo(() => {
        e.isMounted = !0;
      }),
      Qo(() => {
        e.isUnmounting = !0;
      }),
      e
    );
  }
  const qe = [Function, Array],
    yc = {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: qe,
      onEnter: qe,
      onAfterEnter: qe,
      onEnterCancelled: qe,
      onBeforeLeave: qe,
      onLeave: qe,
      onAfterLeave: qe,
      onLeaveCancelled: qe,
      onBeforeAppear: qe,
      onAppear: qe,
      onAfterAppear: qe,
      onAppearCancelled: qe,
    };

  function bc(e, t) {
    const { leavingVNodes: s } = e;
    let n = s.get(t.type);
    return n || ((n = Object.create(null)), s.set(t.type, n)), n;
  }

  function ci(e, t, s, n, i) {
    const {
        appear: r,
        mode: o,
        persisted: a = !1,
        onBeforeEnter: l,
        onEnter: c,
        onAfterEnter: u,
        onEnterCancelled: d,
        onBeforeLeave: p,
        onLeave: v,
        onAfterLeave: f,
        onLeaveCancelled: b,
        onBeforeAppear: _,
        onAppear: S,
        onAfterAppear: h,
        onAppearCancelled: g,
      } = t,
      w = String(e.key),
      T = bc(s, e),
      B = (I, C) => {
        I && Ye(I, n, 9, C);
      },
      $ = (I, C) => {
        const M = C[1];
        B(I, C),
          Y(I) ? I.every((P) => P.length <= 1) && M() : I.length <= 1 && M();
      },
      j = {
        mode: o,
        persisted: a,
        beforeEnter(I) {
          let C = l;
          if (!s.isMounted)
            if (r) C = _ || l;
            else return;
          I[$t] && I[$t](!0);
          const M = T[w];
          M && zt(e, M) && M.el[$t] && M.el[$t](), B(C, [I]);
        },
        enter(I) {
          let C = c,
            M = u,
            P = d;
          if (!s.isMounted)
            if (r) (C = S || c), (M = h || u), (P = g || d);
            else return;
          let z = !1;
          const Q = (I[Rs] = (te) => {
            z ||
              ((z = !0),
              te ? B(P, [I]) : B(M, [I]),
              j.delayedLeave && j.delayedLeave(),
              (I[Rs] = void 0));
          });
          C ? $(C, [I, Q]) : Q();
        },
        leave(I, C) {
          const M = String(e.key);
          if ((I[Rs] && I[Rs](!0), s.isUnmounting)) return C();
          B(p, [I]);
          let P = !1;
          const z = (I[$t] = (Q) => {
            P ||
              ((P = !0),
              C(),
              Q ? B(b, [I]) : B(f, [I]),
              (I[$t] = void 0),
              T[M] === e && delete T[M]);
          });
          (T[M] = e), v ? $(v, [I, z]) : z();
        },
        clone(I) {
          return ci(I, t, s, n);
        },
      };
    return j;
  }

  function bs(e, t) {
    e.shapeFlag & 6 && e.component
      ? ((e.transition = t), bs(e.component.subTree, t))
      : e.shapeFlag & 128
        ? ((e.ssContent.transition = t.clone(e.ssContent)),
          (e.ssFallback.transition = t.clone(e.ssFallback)))
        : (e.transition = t);
  }

  function Uo(e, t = !1, s) {
    let n = [],
      i = 0;
    for (let r = 0; r < e.length; r++) {
      let o = e[r];
      const a =
        s == null ? o.key : String(s) + String(o.key != null ? o.key : r);
      o.type === ge
        ? (o.patchFlag & 128 && i++, (n = n.concat(Uo(o.children, t, a))))
        : (t || o.type !== lt) &&
          n.push(
            a != null
              ? Dt(o, {
                  key: a,
                })
              : o,
          );
    }
    if (i > 1) for (let r = 0; r < n.length; r++) n[r].patchFlag = -2;
    return n;
  }

  function Wo(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
  }

  function Qs(e, t, s, n, i = !1) {
    if (Y(e)) {
      e.forEach((f, b) => Qs(f, t && (Y(t) ? t[b] : t), s, n, i));
      return;
    }
    if (Yt(n) && !i) {
      n.shapeFlag & 512 &&
        n.type.__asyncResolved &&
        n.component.subTree.component &&
        Qs(e, t, s, n.component.subTree);
      return;
    }
    const r = n.shapeFlag & 4 ? Tn(n.component) : n.el,
      o = i ? null : r,
      { i: a, r: l } = e,
      c = t && t.r,
      u = a.refs === le ? (a.refs = {}) : a.refs,
      d = a.setupState,
      p = oe(d),
      v = d === le ? () => !1 : (f) => ie(p, f);
    if (
      (c != null &&
        c !== l &&
        (ve(c)
          ? ((u[c] = null), v(c) && (d[c] = null))
          : Me(c) && (c.value = null)),
      J(l))
    )
      Es(l, a, 12, [o, u]);
    else {
      const f = ve(l),
        b = Me(l);
      if (f || b) {
        const _ = () => {
          if (e.f) {
            const S = f ? (v(l) ? d[l] : u[l]) : l.value;
            i
              ? Y(S) && Oi(S, r)
              : Y(S)
                ? S.includes(r) || S.push(r)
                : f
                  ? ((u[l] = [r]), v(l) && (d[l] = u[l]))
                  : ((l.value = [r]), e.k && (u[e.k] = l.value));
          } else
            f
              ? ((u[l] = o), v(l) && (d[l] = o))
              : b && ((l.value = o), e.k && (u[e.k] = o));
        };
        o ? ((_.id = -1), He(_, s)) : _();
      }
    }
  }
  gn().requestIdleCallback;
  gn().cancelIdleCallback;
  const Yt = (e) => !!e.type.__asyncLoader,
    Ko = (e) => e.type.__isKeepAlive;

  function wc(e, t) {
    Yo(e, "a", t);
  }

  function Sc(e, t) {
    Yo(e, "da", t);
  }

  function Yo(e, t, s = xe) {
    const n =
      e.__wdc ||
      (e.__wdc = () => {
        let i = s;
        for (; i; ) {
          if (i.isDeactivated) return;
          i = i.parent;
        }
        return e();
      });
    if ((Sn(t, n, s), s)) {
      let i = s.parent;
      for (; i && i.parent; )
        Ko(i.parent.vnode) && _c(n, t, s, i), (i = i.parent);
    }
  }

  function _c(e, t, s, n) {
    const i = Sn(t, e, n, !0);
    Zo(() => {
      Oi(n[t], i);
    }, s);
  }

  function Sn(e, t, s = xe, n = !1) {
    if (s) {
      const i = s[e] || (s[e] = []),
        r =
          t.__weh ||
          (t.__weh = (...o) => {
            gt();
            const a = Cs(s),
              l = Ye(t, s, e, o);
            return a(), vt(), l;
          });
      return n ? i.unshift(r) : i.push(r), r;
    }
  }
  const yt =
      (e) =>
      (t, s = xe) => {
        (!_s || e === "sp") && Sn(e, (...n) => t(...n), s);
      },
    xc = yt("bm"),
    Xo = yt("m"),
    Tc = yt("bu"),
    Jo = yt("u"),
    Qo = yt("bum"),
    Zo = yt("um"),
    Ec = yt("sp"),
    Cc = yt("rtg"),
    Pc = yt("rtc");

  function Ac(e, t = xe) {
    Sn("ec", e, t);
  }
  const ea = "components";

  function ta(e, t) {
    return na(ea, e, !0, t) || e;
  }
  const sa = Symbol.for("v-ndc");

  function Lc(e) {
    return ve(e) ? na(ea, e, !1) || e : e || sa;
  }

  function na(e, t, s = !0, n = !1) {
    const i = we || xe;
    if (i) {
      const r = i.type;
      {
        const a = yu(r, !1);
        if (a && (a === t || a === Ge(t) || a === mn(Ge(t)))) return r;
      }
      const o = ur(i[e] || r[e], t) || ur(i.appContext[e], t);
      return !o && n ? r : o;
    }
  }

  function ur(e, t) {
    return e && (e[t] || e[Ge(t)] || e[mn(Ge(t))]);
  }

  function mt(e, t, s, n) {
    let i;
    const r = s,
      o = Y(e);
    if (o || ve(e)) {
      const a = o && Wt(e);
      let l = !1,
        c = !1;
      a && ((l = !We(e)), (c = Rt(e)), (e = yn(e))), (i = new Array(e.length));
      for (let u = 0, d = e.length; u < d; u++)
        i[u] = t(l ? (c ? Ws(ke(e[u])) : ke(e[u])) : e[u], u, void 0, r);
    } else if (typeof e == "number") {
      i = new Array(e);
      for (let a = 0; a < e; a++) i[a] = t(a + 1, a, void 0, r);
    } else if (ce(e))
      if (e[Symbol.iterator]) i = Array.from(e, (a, l) => t(a, l, void 0, r));
      else {
        const a = Object.keys(e);
        i = new Array(a.length);
        for (let l = 0, c = a.length; l < c; l++) {
          const u = a[l];
          i[l] = t(e[u], u, l, r);
        }
      }
    else i = [];
    return i;
  }

  function kc(e, t, s = {}, n, i) {
    if (we.ce || (we.parent && Yt(we.parent) && we.parent.ce))
      return (s.name = t), q(), Nt(ge, null, [Te("slot", s, n && n())], 64);
    let r = e[t];
    r && r._c && (r._d = !1), q();
    const o = r && ia(r(s)),
      a = s.key || (o && o.key),
      l = Nt(
        ge,
        {
          key: (a && !Ke(a) ? a : `_${t}`) + (!o && n ? "_fb" : ""),
        },
        o || (n ? n() : []),
        o && e._ === 1 ? 64 : -2,
      );
    return (
      l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
      r && r._c && (r._d = !0),
      l
    );
  }

  function ia(e) {
    return e.some((t) =>
      Ss(t) ? !(t.type === lt || (t.type === ge && !ia(t.children))) : !0,
    )
      ? e
      : null;
  }
  const ui = (e) => (e ? (Ta(e) ? Tn(e) : ui(e.parent)) : null),
    hs = Se(Object.create(null), {
      $: (e) => e,
      $el: (e) => e.vnode.el,
      $data: (e) => e.data,
      $props: (e) => e.props,
      $attrs: (e) => e.attrs,
      $slots: (e) => e.slots,
      $refs: (e) => e.refs,
      $parent: (e) => ui(e.parent),
      $root: (e) => ui(e.root),
      $host: (e) => e.ce,
      $emit: (e) => e.emit,
      $options: (e) => oa(e),
      $forceUpdate: (e) =>
        e.f ||
        (e.f = () => {
          $i(e.update);
        }),
      $nextTick: (e) => e.n || (e.n = Xs.bind(e.proxy)),
      $watch: (e) => Qc.bind(e),
    }),
    Vn = (e, t) => e !== le && !e.__isScriptSetup && ie(e, t),
    Oc = {
      get({ _: e }, t) {
        if (t === "__v_skip") return !0;
        const {
          ctx: s,
          setupState: n,
          data: i,
          props: r,
          accessCache: o,
          type: a,
          appContext: l,
        } = e;
        let c;
        if (t[0] !== "$") {
          const v = o[t];
          if (v !== void 0)
            switch (v) {
              case 1:
                return n[t];
              case 2:
                return i[t];
              case 4:
                return s[t];
              case 3:
                return r[t];
            }
          else {
            if (Vn(n, t)) return (o[t] = 1), n[t];
            if (i !== le && ie(i, t)) return (o[t] = 2), i[t];
            if ((c = e.propsOptions[0]) && ie(c, t)) return (o[t] = 3), r[t];
            if (s !== le && ie(s, t)) return (o[t] = 4), s[t];
            di && (o[t] = 0);
          }
        }
        const u = hs[t];
        let d, p;
        if (u) return t === "$attrs" && Ee(e.attrs, "get", ""), u(e);
        if ((d = a.__cssModules) && (d = d[t])) return d;
        if (s !== le && ie(s, t)) return (o[t] = 4), s[t];
        if (((p = l.config.globalProperties), ie(p, t))) return p[t];
      },
      set({ _: e }, t, s) {
        const { data: n, setupState: i, ctx: r } = e;
        return Vn(i, t)
          ? ((i[t] = s), !0)
          : n !== le && ie(n, t)
            ? ((n[t] = s), !0)
            : ie(e.props, t) || (t[0] === "$" && t.slice(1) in e)
              ? !1
              : ((r[t] = s), !0);
      },
      has(
        {
          _: {
            data: e,
            setupState: t,
            accessCache: s,
            ctx: n,
            appContext: i,
            propsOptions: r,
          },
        },
        o,
      ) {
        let a;
        return (
          !!s[o] ||
          (e !== le && ie(e, o)) ||
          Vn(t, o) ||
          ((a = r[0]) && ie(a, o)) ||
          ie(n, o) ||
          ie(hs, o) ||
          ie(i.config.globalProperties, o)
        );
      },
      defineProperty(e, t, s) {
        return (
          s.get != null
            ? (e._.accessCache[t] = 0)
            : ie(s, "value") && this.set(e, t, s.value, null),
          Reflect.defineProperty(e, t, s)
        );
      },
    };

  function dr(e) {
    return Y(e) ? e.reduce((t, s) => ((t[s] = null), t), {}) : e;
  }
  let di = !0;

  function Mc(e) {
    const t = oa(e),
      s = e.proxy,
      n = e.ctx;
    (di = !1), t.beforeCreate && fr(t.beforeCreate, e, "bc");
    const {
      data: i,
      computed: r,
      methods: o,
      watch: a,
      provide: l,
      inject: c,
      created: u,
      beforeMount: d,
      mounted: p,
      beforeUpdate: v,
      updated: f,
      activated: b,
      deactivated: _,
      beforeDestroy: S,
      beforeUnmount: h,
      destroyed: g,
      unmounted: w,
      render: T,
      renderTracked: B,
      renderTriggered: $,
      errorCaptured: j,
      serverPrefetch: I,
      expose: C,
      inheritAttrs: M,
      components: P,
      directives: z,
      filters: Q,
    } = t;
    if ((c && Ic(c, n, null), o))
      for (const Z in o) {
        const H = o[Z];
        J(H) && (n[Z] = H.bind(s));
      }
    if (i) {
      const Z = i.call(s, s);
      ce(Z) && (e.data = Fi(Z));
    }
    if (((di = !0), r))
      for (const Z in r) {
        const H = r[Z],
          ae = J(H) ? H.bind(s, s) : J(H.get) ? H.get.bind(s, s) : ot,
          ye = !J(H) && J(H.set) ? H.set.bind(s) : ot,
          Pe = wu({
            get: ae,
            set: ye,
          });
        Object.defineProperty(n, Z, {
          enumerable: !0,
          configurable: !0,
          get: () => Pe.value,
          set: (Ae) => (Pe.value = Ae),
        });
      }
    if (a) for (const Z in a) ra(a[Z], n, s, Z);
    if (l) {
      const Z = J(l) ? l.call(s) : l;
      Reflect.ownKeys(Z).forEach((H) => {
        Vc(H, Z[H]);
      });
    }
    u && fr(u, e, "c");

    function G(Z, H) {
      Y(H) ? H.forEach((ae) => Z(ae.bind(s))) : H && Z(H.bind(s));
    }
    if (
      (G(xc, d),
      G(Xo, p),
      G(Tc, v),
      G(Jo, f),
      G(wc, b),
      G(Sc, _),
      G(Ac, j),
      G(Pc, B),
      G(Cc, $),
      G(Qo, h),
      G(Zo, w),
      G(Ec, I),
      Y(C))
    )
      if (C.length) {
        const Z = e.exposed || (e.exposed = {});
        C.forEach((H) => {
          Object.defineProperty(Z, H, {
            get: () => s[H],
            set: (ae) => (s[H] = ae),
          });
        });
      } else e.exposed || (e.exposed = {});
    T && e.render === ot && (e.render = T),
      M != null && (e.inheritAttrs = M),
      P && (e.components = P),
      z && (e.directives = z),
      I && Wo(e);
  }

  function Ic(e, t, s = ot) {
    Y(e) && (e = fi(e));
    for (const n in e) {
      const i = e[n];
      let r;
      ce(i)
        ? "default" in i
          ? (r = Fs(i.from || n, i.default, !0))
          : (r = Fs(i.from || n))
        : (r = Fs(i)),
        Me(r)
          ? Object.defineProperty(t, n, {
              enumerable: !0,
              configurable: !0,
              get: () => r.value,
              set: (o) => (r.value = o),
            })
          : (t[n] = r);
    }
  }

  function fr(e, t, s) {
    Ye(Y(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, s);
  }

  function ra(e, t, s, n) {
    let i = n.includes(".") ? ba(s, n) : () => s[n];
    if (ve(e)) {
      const r = t[e];
      J(r) && $n(i, r);
    } else if (J(e)) $n(i, e.bind(s));
    else if (ce(e))
      if (Y(e)) e.forEach((r) => ra(r, t, s, n));
      else {
        const r = J(e.handler) ? e.handler.bind(s) : t[e.handler];
        J(r) && $n(i, r, e);
      }
  }

  function oa(e) {
    const t = e.type,
      { mixins: s, extends: n } = t,
      {
        mixins: i,
        optionsCache: r,
        config: { optionMergeStrategies: o },
      } = e.appContext,
      a = r.get(t);
    let l;
    return (
      a
        ? (l = a)
        : !i.length && !s && !n
          ? (l = t)
          : ((l = {}),
            i.length && i.forEach((c) => Zs(l, c, o, !0)),
            Zs(l, t, o)),
      ce(t) && r.set(t, l),
      l
    );
  }

  function Zs(e, t, s, n = !1) {
    const { mixins: i, extends: r } = t;
    r && Zs(e, r, s, !0), i && i.forEach((o) => Zs(e, o, s, !0));
    for (const o in t)
      if (!(n && o === "expose")) {
        const a = Rc[o] || (s && s[o]);
        e[o] = a ? a(e[o], t[o]) : t[o];
      }
    return e;
  }
  const Rc = {
    data: pr,
    props: hr,
    emits: hr,
    methods: cs,
    computed: cs,
    beforeCreate: Le,
    created: Le,
    beforeMount: Le,
    mounted: Le,
    beforeUpdate: Le,
    updated: Le,
    beforeDestroy: Le,
    beforeUnmount: Le,
    destroyed: Le,
    unmounted: Le,
    activated: Le,
    deactivated: Le,
    errorCaptured: Le,
    serverPrefetch: Le,
    components: cs,
    directives: cs,
    watch: Dc,
    provide: pr,
    inject: Nc,
  };

  function pr(e, t) {
    return t
      ? e
        ? function () {
            return Se(
              J(e) ? e.call(this, this) : e,
              J(t) ? t.call(this, this) : t,
            );
          }
        : t
      : e;
  }

  function Nc(e, t) {
    return cs(fi(e), fi(t));
  }

  function fi(e) {
    if (Y(e)) {
      const t = {};
      for (let s = 0; s < e.length; s++) t[e[s]] = e[s];
      return t;
    }
    return e;
  }

  function Le(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
  }

  function cs(e, t) {
    return e ? Se(Object.create(null), e, t) : t;
  }

  function hr(e, t) {
    return e
      ? Y(e) && Y(t)
        ? [...new Set([...e, ...t])]
        : Se(Object.create(null), dr(e), dr(t ?? {}))
      : t;
  }

  function Dc(e, t) {
    if (!e) return t;
    if (!t) return e;
    const s = Se(Object.create(null), e);
    for (const n in t) s[n] = Le(e[n], t[n]);
    return s;
  }

  function aa() {
    return {
      app: null,
      config: {
        isNativeTag: Tl,
        performance: !1,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {},
      },
      mixins: [],
      components: {},
      directives: {},
      provides: Object.create(null),
      optionsCache: new WeakMap(),
      propsCache: new WeakMap(),
      emitsCache: new WeakMap(),
    };
  }
  let Bc = 0;

  function Fc(e, t) {
    return function (n, i = null) {
      J(n) || (n = Se({}, n)), i != null && !ce(i) && (i = null);
      const r = aa(),
        o = new WeakSet(),
        a = [];
      let l = !1;
      const c = (r.app = {
        _uid: Bc++,
        _component: n,
        _props: i,
        _container: null,
        _context: r,
        _instance: null,
        version: _u,
        get config() {
          return r.config;
        },
        set config(u) {},
        use(u, ...d) {
          return (
            o.has(u) ||
              (u && J(u.install)
                ? (o.add(u), u.install(c, ...d))
                : J(u) && (o.add(u), u(c, ...d))),
            c
          );
        },
        mixin(u) {
          return r.mixins.includes(u) || r.mixins.push(u), c;
        },
        component(u, d) {
          return d ? ((r.components[u] = d), c) : r.components[u];
        },
        directive(u, d) {
          return d ? ((r.directives[u] = d), c) : r.directives[u];
        },
        mount(u, d, p) {
          if (!l) {
            const v = c._ceVNode || Te(n, i);
            return (
              (v.appContext = r),
              p === !0 ? (p = "svg") : p === !1 && (p = void 0),
              e(v, u, p),
              (l = !0),
              (c._container = u),
              (u.__vue_app__ = c),
              Tn(v.component)
            );
          }
        },
        onUnmount(u) {
          a.push(u);
        },
        unmount() {
          l &&
            (Ye(a, c._instance, 16),
            e(null, c._container),
            delete c._container.__vue_app__);
        },
        provide(u, d) {
          return (r.provides[u] = d), c;
        },
        runWithContext(u) {
          const d = Xt;
          Xt = c;
          try {
            return u();
          } finally {
            Xt = d;
          }
        },
      });
      return c;
    };
  }
  let Xt = null;

  function Vc(e, t) {
    if (xe) {
      let s = xe.provides;
      const n = xe.parent && xe.parent.provides;
      n === s && (s = xe.provides = Object.create(n)), (s[e] = t);
    }
  }

  function Fs(e, t, s = !1) {
    const n = xe || we;
    if (n || Xt) {
      const i = Xt
        ? Xt._context.provides
        : n
          ? n.parent == null
            ? n.vnode.appContext && n.vnode.appContext.provides
            : n.parent.provides
          : void 0;
      if (i && e in i) return i[e];
      if (arguments.length > 1) return s && J(t) ? t.call(n && n.proxy) : t;
    }
  }
  const la = {},
    ca = () => Object.create(la),
    ua = (e) => Object.getPrototypeOf(e) === la;

  function Hc(e, t, s, n = !1) {
    const i = {},
      r = ca();
    (e.propsDefaults = Object.create(null)), da(e, t, i, r);
    for (const o in e.propsOptions[0]) o in i || (i[o] = void 0);
    s
      ? (e.props = n ? i : ic(i))
      : e.type.props
        ? (e.props = i)
        : (e.props = r),
      (e.attrs = r);
  }

  function $c(e, t, s, n) {
    const {
        props: i,
        attrs: r,
        vnode: { patchFlag: o },
      } = e,
      a = oe(i),
      [l] = e.propsOptions;
    let c = !1;
    if ((n || o > 0) && !(o & 16)) {
      if (o & 8) {
        const u = e.vnode.dynamicProps;
        for (let d = 0; d < u.length; d++) {
          let p = u[d];
          if (_n(e.emitsOptions, p)) continue;
          const v = t[p];
          if (l)
            if (ie(r, p)) v !== r[p] && ((r[p] = v), (c = !0));
            else {
              const f = Ge(p);
              i[f] = pi(l, a, f, v, e, !1);
            }
          else v !== r[p] && ((r[p] = v), (c = !0));
        }
      }
    } else {
      da(e, t, i, r) && (c = !0);
      let u;
      for (const d in a)
        (!t || (!ie(t, d) && ((u = Tt(d)) === d || !ie(t, u)))) &&
          (l
            ? s &&
              (s[d] !== void 0 || s[u] !== void 0) &&
              (i[d] = pi(l, a, d, void 0, e, !0))
            : delete i[d]);
      if (r !== a)
        for (const d in r) (!t || !ie(t, d)) && (delete r[d], (c = !0));
    }
    c && dt(e.attrs, "set", "");
  }

  function da(e, t, s, n) {
    const [i, r] = e.propsOptions;
    let o = !1,
      a;
    if (t)
      for (let l in t) {
        if (ds(l)) continue;
        const c = t[l];
        let u;
        i && ie(i, (u = Ge(l)))
          ? !r || !r.includes(u)
            ? (s[u] = c)
            : ((a || (a = {}))[u] = c)
          : _n(e.emitsOptions, l) ||
            ((!(l in n) || c !== n[l]) && ((n[l] = c), (o = !0)));
      }
    if (r) {
      const l = oe(s),
        c = a || le;
      for (let u = 0; u < r.length; u++) {
        const d = r[u];
        s[d] = pi(i, l, d, c[d], e, !ie(c, d));
      }
    }
    return o;
  }

  function pi(e, t, s, n, i, r) {
    const o = e[s];
    if (o != null) {
      const a = ie(o, "default");
      if (a && n === void 0) {
        const l = o.default;
        if (o.type !== Function && !o.skipFactory && J(l)) {
          const { propsDefaults: c } = i;
          if (s in c) n = c[s];
          else {
            const u = Cs(i);
            (n = c[s] = l.call(null, t)), u();
          }
        } else n = l;
        i.ce && i.ce._setProp(s, n);
      }
      o[0] &&
        (r && !a ? (n = !1) : o[1] && (n === "" || n === Tt(s)) && (n = !0));
    }
    return n;
  }
  const jc = new WeakMap();

  function fa(e, t, s = !1) {
    const n = s ? jc : t.propsCache,
      i = n.get(e);
    if (i) return i;
    const r = e.props,
      o = {},
      a = [];
    let l = !1;
    if (!J(e)) {
      const u = (d) => {
        l = !0;
        const [p, v] = fa(d, t, !0);
        Se(o, p), v && a.push(...v);
      };
      !s && t.mixins.length && t.mixins.forEach(u),
        e.extends && u(e.extends),
        e.mixins && e.mixins.forEach(u);
    }
    if (!r && !l) return ce(e) && n.set(e, Gt), Gt;
    if (Y(r))
      for (let u = 0; u < r.length; u++) {
        const d = Ge(r[u]);
        mr(d) && (o[d] = le);
      }
    else if (r)
      for (const u in r) {
        const d = Ge(u);
        if (mr(d)) {
          const p = r[u],
            v = (o[d] =
              Y(p) || J(p)
                ? {
                    type: p,
                  }
                : Se({}, p)),
            f = v.type;
          let b = !1,
            _ = !0;
          if (Y(f))
            for (let S = 0; S < f.length; ++S) {
              const h = f[S],
                g = J(h) && h.name;
              if (g === "Boolean") {
                b = !0;
                break;
              } else g === "String" && (_ = !1);
            }
          else b = J(f) && f.name === "Boolean";
          (v[0] = b), (v[1] = _), (b || ie(v, "default")) && a.push(d);
        }
      }
    const c = [o, a];
    return ce(e) && n.set(e, c), c;
  }

  function mr(e) {
    return e[0] !== "$" && !ds(e);
  }
  const ji = (e) => e[0] === "_" || e === "$stable",
    zi = (e) => (Y(e) ? e.map(it) : [it(e)]),
    zc = (e, t, s) => {
      if (t._n) return t;
      const n = wn((...i) => zi(t(...i)), s);
      return (n._c = !1), n;
    },
    pa = (e, t, s) => {
      const n = e._ctx;
      for (const i in e) {
        if (ji(i)) continue;
        const r = e[i];
        if (J(r)) t[i] = zc(i, r, n);
        else if (r != null) {
          const o = zi(r);
          t[i] = () => o;
        }
      }
    },
    ha = (e, t) => {
      const s = zi(t);
      e.slots.default = () => s;
    },
    ma = (e, t, s) => {
      for (const n in t) (s || !ji(n)) && (e[n] = t[n]);
    },
    qc = (e, t, s) => {
      const n = (e.slots = ca());
      if (e.vnode.shapeFlag & 32) {
        const i = t._;
        i ? (ma(n, t, s), s && bo(n, "_", i, !0)) : pa(t, n);
      } else t && ha(e, t);
    },
    Gc = (e, t, s) => {
      const { vnode: n, slots: i } = e;
      let r = !0,
        o = le;
      if (n.shapeFlag & 32) {
        const a = t._;
        a
          ? s && a === 1
            ? (r = !1)
            : ma(i, t, s)
          : ((r = !t.$stable), pa(t, i)),
          (o = t);
      } else
        t &&
          (ha(e, t),
          (o = {
            default: 1,
          }));
      if (r) for (const a in i) !ji(a) && o[a] == null && delete i[a];
    },
    He = ru;

  function Uc(e) {
    return Wc(e);
  }

  function Wc(e, t) {
    const s = gn();
    s.__VUE__ = !0;
    const {
        insert: n,
        remove: i,
        patchProp: r,
        createElement: o,
        createText: a,
        createComment: l,
        setText: c,
        setElementText: u,
        parentNode: d,
        nextSibling: p,
        setScopeId: v = ot,
        insertStaticContent: f,
      } = e,
      b = (
        m,
        y,
        E,
        k = null,
        A = null,
        L = null,
        F = void 0,
        D = null,
        N = !!y.dynamicChildren,
      ) => {
        if (m === y) return;
        m && !zt(m, y) && ((k = ks(m)), Ae(m, A, L, !0), (m = null)),
          y.patchFlag === -2 && ((N = !1), (y.dynamicChildren = null));
        const { type: O, ref: K, shapeFlag: V } = y;
        switch (O) {
          case xn:
            _(m, y, E, k);
            break;
          case lt:
            S(m, y, E, k);
            break;
          case jn:
            m == null && h(y, E, k, F);
            break;
          case ge:
            P(m, y, E, k, A, L, F, D, N);
            break;
          default:
            V & 1
              ? T(m, y, E, k, A, L, F, D, N)
              : V & 6
                ? z(m, y, E, k, A, L, F, D, N)
                : (V & 64 || V & 128) &&
                  O.process(m, y, E, k, A, L, F, D, N, ns);
        }
        K != null && A && Qs(K, m && m.ref, L, y || m, !y);
      },
      _ = (m, y, E, k) => {
        if (m == null) n((y.el = a(y.children)), E, k);
        else {
          const A = (y.el = m.el);
          y.children !== m.children && c(A, y.children);
        }
      },
      S = (m, y, E, k) => {
        m == null ? n((y.el = l(y.children || "")), E, k) : (y.el = m.el);
      },
      h = (m, y, E, k) => {
        [m.el, m.anchor] = f(m.children, y, E, k, m.el, m.anchor);
      },
      g = ({ el: m, anchor: y }, E, k) => {
        let A;
        for (; m && m !== y; ) (A = p(m)), n(m, E, k), (m = A);
        n(y, E, k);
      },
      w = ({ el: m, anchor: y }) => {
        let E;
        for (; m && m !== y; ) (E = p(m)), i(m), (m = E);
        i(y);
      },
      T = (m, y, E, k, A, L, F, D, N) => {
        y.type === "svg" ? (F = "svg") : y.type === "math" && (F = "mathml"),
          m == null ? B(y, E, k, A, L, F, D, N) : I(m, y, A, L, F, D, N);
      },
      B = (m, y, E, k, A, L, F, D) => {
        let N, O;
        const { props: K, shapeFlag: V, transition: W, dirs: X } = m;
        if (
          ((N = m.el = o(m.type, L, K && K.is, K)),
          V & 8
            ? u(N, m.children)
            : V & 16 && j(m.children, N, null, k, A, Hn(m, L), F, D),
          X && Et(m, null, k, "created"),
          $(N, m, m.scopeId, F, k),
          K)
        ) {
          for (const ue in K)
            ue !== "value" && !ds(ue) && r(N, ue, null, K[ue], L, k);
          "value" in K && r(N, "value", null, K.value, L),
            (O = K.onVnodeBeforeMount) && et(O, k, m);
        }
        X && Et(m, null, k, "beforeMount");
        const se = Kc(A, W);
        se && W.beforeEnter(N),
          n(N, y, E),
          ((O = K && K.onVnodeMounted) || se || X) &&
            He(() => {
              O && et(O, k, m),
                se && W.enter(N),
                X && Et(m, null, k, "mounted");
            }, A);
      },
      $ = (m, y, E, k, A) => {
        if ((E && v(m, E), k)) for (let L = 0; L < k.length; L++) v(m, k[L]);
        if (A) {
          let L = A.subTree;
          if (
            y === L ||
            (Sa(L.type) && (L.ssContent === y || L.ssFallback === y))
          ) {
            const F = A.vnode;
            $(m, F, F.scopeId, F.slotScopeIds, A.parent);
          }
        }
      },
      j = (m, y, E, k, A, L, F, D, N = 0) => {
        for (let O = N; O < m.length; O++) {
          const K = (m[O] = D ? _t(m[O]) : it(m[O]));
          b(null, K, y, E, k, A, L, F, D);
        }
      },
      I = (m, y, E, k, A, L, F) => {
        const D = (y.el = m.el);
        let { patchFlag: N, dynamicChildren: O, dirs: K } = y;
        N |= m.patchFlag & 16;
        const V = m.props || le,
          W = y.props || le;
        let X;
        if (
          (E && Ct(E, !1),
          (X = W.onVnodeBeforeUpdate) && et(X, E, y, m),
          K && Et(y, m, E, "beforeUpdate"),
          E && Ct(E, !0),
          ((V.innerHTML && W.innerHTML == null) ||
            (V.textContent && W.textContent == null)) &&
            u(D, ""),
          O
            ? C(m.dynamicChildren, O, D, E, k, Hn(y, A), L)
            : F || H(m, y, D, null, E, k, Hn(y, A), L, !1),
          N > 0)
        ) {
          if (N & 16) M(D, V, W, E, A);
          else if (
            (N & 2 && V.class !== W.class && r(D, "class", null, W.class, A),
            N & 4 && r(D, "style", V.style, W.style, A),
            N & 8)
          ) {
            const se = y.dynamicProps;
            for (let ue = 0; ue < se.length; ue++) {
              const re = se[ue],
                Fe = V[re],
                Re = W[re];
              (Re !== Fe || re === "value") && r(D, re, Fe, Re, A, E);
            }
          }
          N & 1 && m.children !== y.children && u(D, y.children);
        } else !F && O == null && M(D, V, W, E, A);
        ((X = W.onVnodeUpdated) || K) &&
          He(() => {
            X && et(X, E, y, m), K && Et(y, m, E, "updated");
          }, k);
      },
      C = (m, y, E, k, A, L, F) => {
        for (let D = 0; D < y.length; D++) {
          const N = m[D],
            O = y[D],
            K =
              N.el && (N.type === ge || !zt(N, O) || N.shapeFlag & 70)
                ? d(N.el)
                : E;
          b(N, O, K, null, k, A, L, F, !0);
        }
      },
      M = (m, y, E, k, A) => {
        if (y !== E) {
          if (y !== le)
            for (const L in y) !ds(L) && !(L in E) && r(m, L, y[L], null, A, k);
          for (const L in E) {
            if (ds(L)) continue;
            const F = E[L],
              D = y[L];
            F !== D && L !== "value" && r(m, L, D, F, A, k);
          }
          "value" in E && r(m, "value", y.value, E.value, A);
        }
      },
      P = (m, y, E, k, A, L, F, D, N) => {
        const O = (y.el = m ? m.el : a("")),
          K = (y.anchor = m ? m.anchor : a(""));
        let { patchFlag: V, dynamicChildren: W, slotScopeIds: X } = y;
        X && (D = D ? D.concat(X) : X),
          m == null
            ? (n(O, E, k), n(K, E, k), j(y.children || [], E, K, A, L, F, D, N))
            : V > 0 && V & 64 && W && m.dynamicChildren
              ? (C(m.dynamicChildren, W, E, A, L, F, D),
                (y.key != null || (A && y === A.subTree)) && ga(m, y, !0))
              : H(m, y, E, K, A, L, F, D, N);
      },
      z = (m, y, E, k, A, L, F, D, N) => {
        (y.slotScopeIds = D),
          m == null
            ? y.shapeFlag & 512
              ? A.ctx.activate(y, E, k, F, N)
              : Q(y, E, k, A, L, F, N)
            : te(m, y, N);
      },
      Q = (m, y, E, k, A, L, F) => {
        const D = (m.component = fu(m, k, A));
        if ((Ko(m) && (D.ctx.renderer = ns), hu(D, !1, F), D.asyncDep)) {
          if ((A && A.registerDep(D, G, F), !m.el)) {
            const N = (D.subTree = Te(lt));
            S(null, N, y, E);
          }
        } else G(D, m, y, E, A, L, F);
      },
      te = (m, y, E) => {
        const k = (y.component = m.component);
        if (nu(m, y, E))
          if (k.asyncDep && !k.asyncResolved) {
            Z(k, y, E);
            return;
          } else (k.next = y), k.update();
        else (y.el = m.el), (k.vnode = y);
      },
      G = (m, y, E, k, A, L, F) => {
        const D = () => {
          if (m.isMounted) {
            let { next: V, bu: W, u: X, parent: se, vnode: ue } = m;
            {
              const Qe = va(m);
              if (Qe) {
                V && ((V.el = ue.el), Z(m, V, F)),
                  Qe.asyncDep.then(() => {
                    m.isUnmounted || D();
                  });
                return;
              }
            }
            let re = V,
              Fe;
            Ct(m, !1),
              V ? ((V.el = ue.el), Z(m, V, F)) : (V = ue),
              W && Bs(W),
              (Fe = V.props && V.props.onVnodeBeforeUpdate) &&
                et(Fe, se, V, ue),
              Ct(m, !0);
            const Re = vr(m),
              Je = m.subTree;
            (m.subTree = Re),
              b(Je, Re, d(Je.el), ks(Je), m, A, L),
              (V.el = Re.el),
              re === null && iu(m, Re.el),
              X && He(X, A),
              (Fe = V.props && V.props.onVnodeUpdated) &&
                He(() => et(Fe, se, V, ue), A);
          } else {
            let V;
            const { el: W, props: X } = y,
              { bm: se, m: ue, parent: re, root: Fe, type: Re } = m,
              Je = Yt(y);
            Ct(m, !1),
              se && Bs(se),
              !Je && (V = X && X.onVnodeBeforeMount) && et(V, re, y),
              Ct(m, !0);
            {
              Fe.ce && Fe.ce._injectChildStyle(Re);
              const Qe = (m.subTree = vr(m));
              b(null, Qe, E, k, m, A, L), (y.el = Qe.el);
            }
            if ((ue && He(ue, A), !Je && (V = X && X.onVnodeMounted))) {
              const Qe = y;
              He(() => et(V, re, Qe), A);
            }
            (y.shapeFlag & 256 ||
              (re && Yt(re.vnode) && re.vnode.shapeFlag & 256)) &&
              m.a &&
              He(m.a, A),
              (m.isMounted = !0),
              (y = E = k = null);
          }
        };
        m.scope.on();
        const N = (m.effect = new xo(D));
        m.scope.off();
        const O = (m.update = N.run.bind(N)),
          K = (m.job = N.runIfDirty.bind(N));
        (K.i = m), (K.id = m.uid), (N.scheduler = () => $i(K)), Ct(m, !0), O();
      },
      Z = (m, y, E) => {
        y.component = m;
        const k = m.vnode.props;
        (m.vnode = y),
          (m.next = null),
          $c(m, y.props, k, E),
          Gc(m, y.children, E),
          gt(),
          cr(m),
          vt();
      },
      H = (m, y, E, k, A, L, F, D, N = !1) => {
        const O = m && m.children,
          K = m ? m.shapeFlag : 0,
          V = y.children,
          { patchFlag: W, shapeFlag: X } = y;
        if (W > 0) {
          if (W & 128) {
            ye(O, V, E, k, A, L, F, D, N);
            return;
          } else if (W & 256) {
            ae(O, V, E, k, A, L, F, D, N);
            return;
          }
        }
        X & 8
          ? (K & 16 && ss(O, A, L), V !== O && u(E, V))
          : K & 16
            ? X & 16
              ? ye(O, V, E, k, A, L, F, D, N)
              : ss(O, A, L, !0)
            : (K & 8 && u(E, ""), X & 16 && j(V, E, k, A, L, F, D, N));
      },
      ae = (m, y, E, k, A, L, F, D, N) => {
        (m = m || Gt), (y = y || Gt);
        const O = m.length,
          K = y.length,
          V = Math.min(O, K);
        let W;
        for (W = 0; W < V; W++) {
          const X = (y[W] = N ? _t(y[W]) : it(y[W]));
          b(m[W], X, E, null, A, L, F, D, N);
        }
        O > K ? ss(m, A, L, !0, !1, V) : j(y, E, k, A, L, F, D, N, V);
      },
      ye = (m, y, E, k, A, L, F, D, N) => {
        let O = 0;
        const K = y.length;
        let V = m.length - 1,
          W = K - 1;
        for (; O <= V && O <= W; ) {
          const X = m[O],
            se = (y[O] = N ? _t(y[O]) : it(y[O]));
          if (zt(X, se)) b(X, se, E, null, A, L, F, D, N);
          else break;
          O++;
        }
        for (; O <= V && O <= W; ) {
          const X = m[V],
            se = (y[W] = N ? _t(y[W]) : it(y[W]));
          if (zt(X, se)) b(X, se, E, null, A, L, F, D, N);
          else break;
          V--, W--;
        }
        if (O > V) {
          if (O <= W) {
            const X = W + 1,
              se = X < K ? y[X].el : k;
            for (; O <= W; )
              b(null, (y[O] = N ? _t(y[O]) : it(y[O])), E, se, A, L, F, D, N),
                O++;
          }
        } else if (O > W) for (; O <= V; ) Ae(m[O], A, L, !0), O++;
        else {
          const X = O,
            se = O,
            ue = new Map();
          for (O = se; O <= W; O++) {
            const Ve = (y[O] = N ? _t(y[O]) : it(y[O]));
            Ve.key != null && ue.set(Ve.key, O);
          }
          let re,
            Fe = 0;
          const Re = W - se + 1;
          let Je = !1,
            Qe = 0;
          const is = new Array(Re);
          for (O = 0; O < Re; O++) is[O] = 0;
          for (O = X; O <= V; O++) {
            const Ve = m[O];
            if (Fe >= Re) {
              Ae(Ve, A, L, !0);
              continue;
            }
            let Ze;
            if (Ve.key != null) Ze = ue.get(Ve.key);
            else
              for (re = se; re <= W; re++)
                if (is[re - se] === 0 && zt(Ve, y[re])) {
                  Ze = re;
                  break;
                }
            Ze === void 0
              ? Ae(Ve, A, L, !0)
              : ((is[Ze - se] = O + 1),
                Ze >= Qe ? (Qe = Ze) : (Je = !0),
                b(Ve, y[Ze], E, null, A, L, F, D, N),
                Fe++);
          }
          const nr = Je ? Yc(is) : Gt;
          for (re = nr.length - 1, O = Re - 1; O >= 0; O--) {
            const Ve = se + O,
              Ze = y[Ve],
              ir = Ve + 1 < K ? y[Ve + 1].el : k;
            is[O] === 0
              ? b(null, Ze, E, ir, A, L, F, D, N)
              : Je && (re < 0 || O !== nr[re] ? Pe(Ze, E, ir, 2) : re--);
          }
        }
      },
      Pe = (m, y, E, k, A = null) => {
        const { el: L, type: F, transition: D, children: N, shapeFlag: O } = m;
        if (O & 6) {
          Pe(m.component.subTree, y, E, k);
          return;
        }
        if (O & 128) {
          m.suspense.move(y, E, k);
          return;
        }
        if (O & 64) {
          F.move(m, y, E, ns);
          return;
        }
        if (F === ge) {
          n(L, y, E);
          for (let V = 0; V < N.length; V++) Pe(N[V], y, E, k);
          n(m.anchor, y, E);
          return;
        }
        if (F === jn) {
          g(m, y, E);
          return;
        }
        if (k !== 2 && O & 1 && D)
          if (k === 0) D.beforeEnter(L), n(L, y, E), He(() => D.enter(L), A);
          else {
            const { leave: V, delayLeave: W, afterLeave: X } = D,
              se = () => {
                m.ctx.isUnmounted ? i(L) : n(L, y, E);
              },
              ue = () => {
                V(L, () => {
                  se(), X && X();
                });
              };
            W ? W(L, se, ue) : ue();
          }
        else n(L, y, E);
      },
      Ae = (m, y, E, k = !1, A = !1) => {
        const {
          type: L,
          props: F,
          ref: D,
          children: N,
          dynamicChildren: O,
          shapeFlag: K,
          patchFlag: V,
          dirs: W,
          cacheIndex: X,
        } = m;
        if (
          (V === -2 && (A = !1),
          D != null && (gt(), Qs(D, null, E, m, !0), vt()),
          X != null && (y.renderCache[X] = void 0),
          K & 256)
        ) {
          y.ctx.deactivate(m);
          return;
        }
        const se = K & 1 && W,
          ue = !Yt(m);
        let re;
        if ((ue && (re = F && F.onVnodeBeforeUnmount) && et(re, y, m), K & 6))
          _l(m.component, E, k);
        else {
          if (K & 128) {
            m.suspense.unmount(E, k);
            return;
          }
          se && Et(m, null, y, "beforeUnmount"),
            K & 64
              ? m.type.remove(m, y, E, ns, k)
              : O && !O.hasOnce && (L !== ge || (V > 0 && V & 64))
                ? ss(O, y, E, !1, !0)
                : ((L === ge && V & 384) || (!A && K & 16)) && ss(N, y, E),
            k && tr(m);
        }
        ((ue && (re = F && F.onVnodeUnmounted)) || se) &&
          He(() => {
            re && et(re, y, m), se && Et(m, null, y, "unmounted");
          }, E);
      },
      tr = (m) => {
        const { type: y, el: E, anchor: k, transition: A } = m;
        if (y === ge) {
          Sl(E, k);
          return;
        }
        if (y === jn) {
          w(m);
          return;
        }
        const L = () => {
          i(E), A && !A.persisted && A.afterLeave && A.afterLeave();
        };
        if (m.shapeFlag & 1 && A && !A.persisted) {
          const { leave: F, delayLeave: D } = A,
            N = () => F(E, L);
          D ? D(m.el, L, N) : N();
        } else L();
      },
      Sl = (m, y) => {
        let E;
        for (; m !== y; ) (E = p(m)), i(m), (m = E);
        i(y);
      },
      _l = (m, y, E) => {
        const {
          bum: k,
          scope: A,
          job: L,
          subTree: F,
          um: D,
          m: N,
          a: O,
          parent: K,
          slots: { __: V },
        } = m;
        gr(N),
          gr(O),
          k && Bs(k),
          K &&
            Y(V) &&
            V.forEach((W) => {
              K.renderCache[W] = void 0;
            }),
          A.stop(),
          L && ((L.flags |= 8), Ae(F, m, y, E)),
          D && He(D, y),
          He(() => {
            m.isUnmounted = !0;
          }, y),
          y &&
            y.pendingBranch &&
            !y.isUnmounted &&
            m.asyncDep &&
            !m.asyncResolved &&
            m.suspenseId === y.pendingId &&
            (y.deps--, y.deps === 0 && y.resolve());
      },
      ss = (m, y, E, k = !1, A = !1, L = 0) => {
        for (let F = L; F < m.length; F++) Ae(m[F], y, E, k, A);
      },
      ks = (m) => {
        if (m.shapeFlag & 6) return ks(m.component.subTree);
        if (m.shapeFlag & 128) return m.suspense.next();
        const y = p(m.anchor || m.el),
          E = y && y[mc];
        return E ? p(E) : y;
      };
    let In = !1;
    const sr = (m, y, E) => {
        m == null
          ? y._vnode && Ae(y._vnode, null, null, !0)
          : b(y._vnode || null, m, y, null, null, null, E),
          (y._vnode = m),
          In || ((In = !0), cr(), jo(), (In = !1));
      },
      ns = {
        p: b,
        um: Ae,
        m: Pe,
        r: tr,
        mt: Q,
        mc: j,
        pc: H,
        pbc: C,
        n: ks,
        o: e,
      };
    return {
      render: sr,
      hydrate: void 0,
      createApp: Fc(sr),
    };
  }

  function Hn({ type: e, props: t }, s) {
    return (s === "svg" && e === "foreignObject") ||
      (s === "mathml" &&
        e === "annotation-xml" &&
        t &&
        t.encoding &&
        t.encoding.includes("html"))
      ? void 0
      : s;
  }

  function Ct({ effect: e, job: t }, s) {
    s ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
  }

  function Kc(e, t) {
    return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
  }

  function ga(e, t, s = !1) {
    const n = e.children,
      i = t.children;
    if (Y(n) && Y(i))
      for (let r = 0; r < n.length; r++) {
        const o = n[r];
        let a = i[r];
        a.shapeFlag & 1 &&
          !a.dynamicChildren &&
          ((a.patchFlag <= 0 || a.patchFlag === 32) &&
            ((a = i[r] = _t(i[r])), (a.el = o.el)),
          !s && a.patchFlag !== -2 && ga(o, a)),
          a.type === xn && (a.el = o.el),
          a.type === lt && !a.el && (a.el = o.el);
      }
  }

  function Yc(e) {
    const t = e.slice(),
      s = [0];
    let n, i, r, o, a;
    const l = e.length;
    for (n = 0; n < l; n++) {
      const c = e[n];
      if (c !== 0) {
        if (((i = s[s.length - 1]), e[i] < c)) {
          (t[n] = i), s.push(n);
          continue;
        }
        for (r = 0, o = s.length - 1; r < o; )
          (a = (r + o) >> 1), e[s[a]] < c ? (r = a + 1) : (o = a);
        c < e[s[r]] && (r > 0 && (t[n] = s[r - 1]), (s[r] = n));
      }
    }
    for (r = s.length, o = s[r - 1]; r-- > 0; ) (s[r] = o), (o = t[o]);
    return s;
  }

  function va(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : va(t);
  }

  function gr(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  const Xc = Symbol.for("v-scx"),
    Jc = () => Fs(Xc);

  function $n(e, t, s) {
    return ya(e, t, s);
  }

  function ya(e, t, s = le) {
    const { immediate: n, deep: i, flush: r, once: o } = s,
      a = Se({}, s),
      l = (t && n) || (!t && r !== "post");
    let c;
    if (_s) {
      if (r === "sync") {
        const v = Jc();
        c = v.__watcherHandles || (v.__watcherHandles = []);
      } else if (!l) {
        const v = () => {};
        return (v.stop = ot), (v.resume = ot), (v.pause = ot), v;
      }
    }
    const u = xe;
    a.call = (v, f, b) => Ye(v, u, f, b);
    let d = !1;
    r === "post"
      ? (a.scheduler = (v) => {
          He(v, u && u.suspense);
        })
      : r !== "sync" &&
        ((d = !0),
        (a.scheduler = (v, f) => {
          f ? v() : $i(v);
        })),
      (a.augmentJob = (v) => {
        t && (v.flags |= 4),
          d && ((v.flags |= 2), u && ((v.id = u.uid), (v.i = u)));
      });
    const p = dc(e, t, a);
    return _s && (c ? c.push(p) : l && p()), p;
  }

  function Qc(e, t, s) {
    const n = this.proxy,
      i = ve(e) ? (e.includes(".") ? ba(n, e) : () => n[e]) : e.bind(n, n);
    let r;
    J(t) ? (r = t) : ((r = t.handler), (s = t));
    const o = Cs(this),
      a = ya(i, r.bind(n), s);
    return o(), a;
  }

  function ba(e, t) {
    const s = t.split(".");
    return () => {
      let n = e;
      for (let i = 0; i < s.length && n; i++) n = n[s[i]];
      return n;
    };
  }
  const Zc = (e, t) =>
    t === "modelValue" || t === "model-value"
      ? e.modelModifiers
      : e[`${t}Modifiers`] || e[`${Ge(t)}Modifiers`] || e[`${Tt(t)}Modifiers`];

  function eu(e, t, ...s) {
    if (e.isUnmounted) return;
    const n = e.vnode.props || le;
    let i = s;
    const r = t.startsWith("update:"),
      o = r && Zc(n, t.slice(7));
    o &&
      (o.trim && (i = s.map((u) => (ve(u) ? u.trim() : u))),
      o.number && (i = s.map(Us)));
    let a,
      l = n[(a = Rn(t))] || n[(a = Rn(Ge(t)))];
    !l && r && (l = n[(a = Rn(Tt(t)))]), l && Ye(l, e, 6, i);
    const c = n[a + "Once"];
    if (c) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[a]) return;
      (e.emitted[a] = !0), Ye(c, e, 6, i);
    }
  }

  function wa(e, t, s = !1) {
    const n = t.emitsCache,
      i = n.get(e);
    if (i !== void 0) return i;
    const r = e.emits;
    let o = {},
      a = !1;
    if (!J(e)) {
      const l = (c) => {
        const u = wa(c, t, !0);
        u && ((a = !0), Se(o, u));
      };
      !s && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l);
    }
    return !r && !a
      ? (ce(e) && n.set(e, null), null)
      : (Y(r) ? r.forEach((l) => (o[l] = null)) : Se(o, r),
        ce(e) && n.set(e, o),
        o);
  }

  function _n(e, t) {
    return !e || !fn(t)
      ? !1
      : ((t = t.slice(2).replace(/Once$/, "")),
        ie(e, t[0].toLowerCase() + t.slice(1)) || ie(e, Tt(t)) || ie(e, t));
  }

  function vr(e) {
    const {
        type: t,
        vnode: s,
        proxy: n,
        withProxy: i,
        propsOptions: [r],
        slots: o,
        attrs: a,
        emit: l,
        render: c,
        renderCache: u,
        props: d,
        data: p,
        setupState: v,
        ctx: f,
        inheritAttrs: b,
      } = e,
      _ = Js(e);
    let S, h;
    try {
      if (s.shapeFlag & 4) {
        const w = i || n,
          T = w;
        (S = it(c.call(T, w, u, d, v, p, f))), (h = a);
      } else {
        const w = t;
        (S = it(
          w.length > 1
            ? w(d, {
                attrs: a,
                slots: o,
                emit: l,
              })
            : w(d, null),
        )),
          (h = t.props ? a : tu(a));
      }
    } catch (w) {
      (ms.length = 0), bn(w, e, 1), (S = Te(lt));
    }
    let g = S;
    if (h && b !== !1) {
      const w = Object.keys(h),
        { shapeFlag: T } = g;
      w.length &&
        T & 7 &&
        (r && w.some(ki) && (h = su(h, r)), (g = Dt(g, h, !1, !0)));
    }
    return (
      s.dirs &&
        ((g = Dt(g, null, !1, !0)),
        (g.dirs = g.dirs ? g.dirs.concat(s.dirs) : s.dirs)),
      s.transition && bs(g, s.transition),
      (S = g),
      Js(_),
      S
    );
  }
  const tu = (e) => {
      let t;
      for (const s in e)
        (s === "class" || s === "style" || fn(s)) &&
          ((t || (t = {}))[s] = e[s]);
      return t;
    },
    su = (e, t) => {
      const s = {};
      for (const n in e) (!ki(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
      return s;
    };

  function nu(e, t, s) {
    const { props: n, children: i, component: r } = e,
      { props: o, children: a, patchFlag: l } = t,
      c = r.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (s && l >= 0) {
      if (l & 1024) return !0;
      if (l & 16) return n ? yr(n, o, c) : !!o;
      if (l & 8) {
        const u = t.dynamicProps;
        for (let d = 0; d < u.length; d++) {
          const p = u[d];
          if (o[p] !== n[p] && !_n(c, p)) return !0;
        }
      }
    } else
      return (i || a) && (!a || !a.$stable)
        ? !0
        : n === o
          ? !1
          : n
            ? o
              ? yr(n, o, c)
              : !0
            : !!o;
    return !1;
  }

  function yr(e, t, s) {
    const n = Object.keys(t);
    if (n.length !== Object.keys(e).length) return !0;
    for (let i = 0; i < n.length; i++) {
      const r = n[i];
      if (t[r] !== e[r] && !_n(s, r)) return !0;
    }
    return !1;
  }

  function iu({ vnode: e, parent: t }, s) {
    for (; t; ) {
      const n = t.subTree;
      if (
        (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      )
        ((e = t.vnode).el = s), (t = t.parent);
      else break;
    }
  }
  const Sa = (e) => e.__isSuspense;

  function ru(e, t) {
    t && t.pendingBranch
      ? Y(e)
        ? t.effects.push(...e)
        : t.effects.push(e)
      : hc(e);
  }
  const ge = Symbol.for("v-fgt"),
    xn = Symbol.for("v-txt"),
    lt = Symbol.for("v-cmt"),
    jn = Symbol.for("v-stc"),
    ms = [];
  let je = null;

  function q(e = !1) {
    ms.push((je = e ? null : []));
  }

  function ou() {
    ms.pop(), (je = ms[ms.length - 1] || null);
  }
  let ws = 1;

  function br(e, t = !1) {
    (ws += e), e < 0 && je && t && (je.hasOnce = !0);
  }

  function _a(e) {
    return (
      (e.dynamicChildren = ws > 0 ? je || Gt : null),
      ou(),
      ws > 0 && je && je.push(e),
      e
    );
  }

  function U(e, t, s, n, i, r) {
    return _a(R(e, t, s, n, i, r, !0));
  }

  function Nt(e, t, s, n, i) {
    return _a(Te(e, t, s, n, i, !0));
  }

  function Ss(e) {
    return e ? e.__v_isVNode === !0 : !1;
  }

  function zt(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const xa = ({ key: e }) => e ?? null,
    Vs = ({ ref: e, ref_key: t, ref_for: s }) => (
      typeof e == "number" && (e = "" + e),
      e != null
        ? ve(e) || Me(e) || J(e)
          ? {
              i: we,
              r: e,
              k: t,
              f: !!s,
            }
          : e
        : null
    );

  function R(
    e,
    t = null,
    s = null,
    n = 0,
    i = null,
    r = e === ge ? 0 : 1,
    o = !1,
    a = !1,
  ) {
    const l = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e,
      props: t,
      key: t && xa(t),
      ref: t && Vs(t),
      scopeId: qo,
      slotScopeIds: null,
      children: s,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetStart: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: r,
      patchFlag: n,
      dynamicProps: i,
      dynamicChildren: null,
      appContext: null,
      ctx: we,
    };
    return (
      a
        ? (qi(l, s), r & 128 && e.normalize(l))
        : s && (l.shapeFlag |= ve(s) ? 8 : 16),
      ws > 0 &&
        !o &&
        je &&
        (l.patchFlag > 0 || r & 6) &&
        l.patchFlag !== 32 &&
        je.push(l),
      l
    );
  }
  const Te = au;

  function au(e, t = null, s = null, n = 0, i = null, r = !1) {
    if (((!e || e === sa) && (e = lt), Ss(e))) {
      const a = Dt(e, t, !0);
      return (
        s && qi(a, s),
        ws > 0 &&
          !r &&
          je &&
          (a.shapeFlag & 6 ? (je[je.indexOf(e)] = a) : je.push(a)),
        (a.patchFlag = -2),
        a
      );
    }
    if ((bu(e) && (e = e.__vccOpts), t)) {
      t = lu(t);
      let { class: a, style: l } = t;
      a && !ve(a) && (t.class = me(a)),
        ce(l) && (Hi(l) && !Y(l) && (l = Se({}, l)), (t.style = Ii(l)));
    }
    const o = ve(e) ? 1 : Sa(e) ? 128 : gc(e) ? 64 : ce(e) ? 4 : J(e) ? 2 : 0;
    return R(e, t, s, n, i, o, r, !0);
  }

  function lu(e) {
    return e ? (Hi(e) || ua(e) ? Se({}, e) : e) : null;
  }

  function Dt(e, t, s = !1, n = !1) {
    const { props: i, ref: r, patchFlag: o, children: a, transition: l } = e,
      c = t ? cu(i || {}, t) : i,
      u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: c,
        key: c && xa(c),
        ref:
          t && t.ref
            ? s && r
              ? Y(r)
                ? r.concat(Vs(t))
                : [r, Vs(t)]
              : Vs(t)
            : r,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: a,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== ge ? (o === -1 ? 16 : o | 16) : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: l,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Dt(e.ssContent),
        ssFallback: e.ssFallback && Dt(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce,
      };
    return l && n && bs(u, l.clone(u)), u;
  }

  function pt(e = " ", t = 0) {
    return Te(xn, null, e, t);
  }

  function ne(e = "", t = !1) {
    return t ? (q(), Nt(lt, null, e)) : Te(lt, null, e);
  }

  function it(e) {
    return e == null || typeof e == "boolean"
      ? Te(lt)
      : Y(e)
        ? Te(ge, null, e.slice())
        : Ss(e)
          ? _t(e)
          : Te(xn, null, String(e));
  }

  function _t(e) {
    return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Dt(e);
  }

  function qi(e, t) {
    let s = 0;
    const { shapeFlag: n } = e;
    if (t == null) t = null;
    else if (Y(t)) s = 16;
    else if (typeof t == "object")
      if (n & 65) {
        const i = t.default;
        i && (i._c && (i._d = !1), qi(e, i()), i._c && (i._d = !0));
        return;
      } else {
        s = 32;
        const i = t._;
        !i && !ua(t)
          ? (t._ctx = we)
          : i === 3 &&
            we &&
            (we.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
      }
    else
      J(t)
        ? ((t = {
            default: t,
            _ctx: we,
          }),
          (s = 32))
        : ((t = String(t)), n & 64 ? ((s = 16), (t = [pt(t)])) : (s = 8));
    (e.children = t), (e.shapeFlag |= s);
  }

  function cu(...e) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s];
      for (const i in n)
        if (i === "class")
          t.class !== n.class && (t.class = me([t.class, n.class]));
        else if (i === "style") t.style = Ii([t.style, n.style]);
        else if (fn(i)) {
          const r = t[i],
            o = n[i];
          o &&
            r !== o &&
            !(Y(r) && r.includes(o)) &&
            (t[i] = r ? [].concat(r, o) : o);
        } else i !== "" && (t[i] = n[i]);
    }
    return t;
  }

  function et(e, t, s, n = null) {
    Ye(e, t, 7, [s, n]);
  }
  const uu = aa();
  let du = 0;

  function fu(e, t, s) {
    const n = e.type,
      i = (t ? t.appContext : e.appContext) || uu,
      r = {
        uid: du++,
        vnode: e,
        type: n,
        parent: t,
        appContext: i,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new Fl(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(i.provides),
        ids: t ? t.ids : ["", 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: fa(n, i),
        emitsOptions: wa(n, i),
        emit: null,
        emitted: null,
        propsDefaults: le,
        inheritAttrs: n.inheritAttrs,
        ctx: le,
        data: le,
        props: le,
        attrs: le,
        slots: le,
        refs: le,
        setupState: le,
        setupContext: null,
        suspense: s,
        suspenseId: s ? s.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null,
      };
    return (
      (r.ctx = {
        _: r,
      }),
      (r.root = t ? t.root : r),
      (r.emit = eu.bind(null, r)),
      e.ce && e.ce(r),
      r
    );
  }
  let xe = null;
  const pu = () => xe || we;
  let en, hi;
  {
    const e = gn(),
      t = (s, n) => {
        let i;
        return (
          (i = e[s]) || (i = e[s] = []),
          i.push(n),
          (r) => {
            i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
          }
        );
      };
    (en = t("__VUE_INSTANCE_SETTERS__", (s) => (xe = s))),
      (hi = t("__VUE_SSR_SETTERS__", (s) => (_s = s)));
  }
  const Cs = (e) => {
      const t = xe;
      return (
        en(e),
        e.scope.on(),
        () => {
          e.scope.off(), en(t);
        }
      );
    },
    wr = () => {
      xe && xe.scope.off(), en(null);
    };

  function Ta(e) {
    return e.vnode.shapeFlag & 4;
  }
  let _s = !1;

  function hu(e, t = !1, s = !1) {
    t && hi(t);
    const { props: n, children: i } = e.vnode,
      r = Ta(e);
    Hc(e, n, r, t), qc(e, i, s || t);
    const o = r ? mu(e, t) : void 0;
    return t && hi(!1), o;
  }

  function mu(e, t) {
    const s = e.type;
    (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Oc));
    const { setup: n } = s;
    if (n) {
      gt();
      const i = (e.setupContext = n.length > 1 ? vu(e) : null),
        r = Cs(e),
        o = Es(n, e, 0, [e.props, i]),
        a = vo(o);
      if ((vt(), r(), (a || e.sp) && !Yt(e) && Wo(e), a)) {
        if ((o.then(wr, wr), t))
          return o
            .then((l) => {
              Sr(e, l);
            })
            .catch((l) => {
              bn(l, e, 0);
            });
        e.asyncDep = o;
      } else Sr(e, o);
    } else Ea(e);
  }

  function Sr(e, t, s) {
    J(t)
      ? e.type.__ssrInlineRender
        ? (e.ssrRender = t)
        : (e.render = t)
      : ce(t) && (e.setupState = Vo(t)),
      Ea(e);
  }

  function Ea(e, t, s) {
    const n = e.type;
    e.render || (e.render = n.render || ot);
    {
      const i = Cs(e);
      gt();
      try {
        Mc(e);
      } finally {
        vt(), i();
      }
    }
  }
  const gu = {
    get(e, t) {
      return Ee(e, "get", ""), e[t];
    },
  };

  function vu(e) {
    const t = (s) => {
      e.exposed = s || {};
    };
    return {
      attrs: new Proxy(e.attrs, gu),
      slots: e.slots,
      emit: e.emit,
      expose: t,
    };
  }

  function Tn(e) {
    return e.exposed
      ? e.exposeProxy ||
          (e.exposeProxy = new Proxy(Vo(rc(e.exposed)), {
            get(t, s) {
              if (s in t) return t[s];
              if (s in hs) return hs[s](e);
            },
            has(t, s) {
              return s in t || s in hs;
            },
          }))
      : e.proxy;
  }

  function yu(e, t = !0) {
    return J(e) ? e.displayName || e.name : e.name || (t && e.__name);
  }

  function bu(e) {
    return J(e) && "__vccOpts" in e;
  }
  const wu = (e, t) => cc(e, t, _s);

  function Su(e, t, s) {
    const n = arguments.length;
    return n === 2
      ? ce(t) && !Y(t)
        ? Ss(t)
          ? Te(e, null, [t])
          : Te(e, t)
        : Te(e, null, t)
      : (n > 3
          ? (s = Array.prototype.slice.call(arguments, 2))
          : n === 3 && Ss(s) && (s = [s]),
        Te(e, t, s));
  }
  const _u = "3.5.14";
  /**
   * @vue/runtime-dom v3.5.14
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/
  let mi;
  const _r = typeof window < "u" && window.trustedTypes;
  if (_r)
    try {
      mi = _r.createPolicy("vue", {
        createHTML: (e) => e,
      });
    } catch {}
  const Ca = mi ? (e) => mi.createHTML(e) : (e) => e,
    xu = "http://www.w3.org/2000/svg",
    Tu = "http://www.w3.org/1998/Math/MathML",
    ut = typeof document < "u" ? document : null,
    xr = ut && ut.createElement("template"),
    Eu = {
      insert: (e, t, s) => {
        t.insertBefore(e, s || null);
      },
      remove: (e) => {
        const t = e.parentNode;
        t && t.removeChild(e);
      },
      createElement: (e, t, s, n) => {
        const i =
          t === "svg"
            ? ut.createElementNS(xu, e)
            : t === "mathml"
              ? ut.createElementNS(Tu, e)
              : s
                ? ut.createElement(e, {
                    is: s,
                  })
                : ut.createElement(e);
        return (
          e === "select" &&
            n &&
            n.multiple != null &&
            i.setAttribute("multiple", n.multiple),
          i
        );
      },
      createText: (e) => ut.createTextNode(e),
      createComment: (e) => ut.createComment(e),
      setText: (e, t) => {
        e.nodeValue = t;
      },
      setElementText: (e, t) => {
        e.textContent = t;
      },
      parentNode: (e) => e.parentNode,
      nextSibling: (e) => e.nextSibling,
      querySelector: (e) => ut.querySelector(e),
      setScopeId(e, t) {
        e.setAttribute(t, "");
      },
      insertStaticContent(e, t, s, n, i, r) {
        const o = s ? s.previousSibling : t.lastChild;
        if (i && (i === r || i.nextSibling))
          for (
            ;
            t.insertBefore(i.cloneNode(!0), s),
              !(i === r || !(i = i.nextSibling));

          );
        else {
          xr.innerHTML = Ca(
            n === "svg"
              ? `<svg>${e}</svg>`
              : n === "mathml"
                ? `<math>${e}</math>`
                : e,
          );
          const a = xr.content;
          if (n === "svg" || n === "mathml") {
            const l = a.firstChild;
            for (; l.firstChild; ) a.appendChild(l.firstChild);
            a.removeChild(l);
          }
          t.insertBefore(a, s);
        }
        return [
          o ? o.nextSibling : t.firstChild,
          s ? s.previousSibling : t.lastChild,
        ];
      },
    },
    bt = "transition",
    os = "animation",
    Qt = Symbol("_vtc"),
    Pa = {
      name: String,
      type: String,
      css: {
        type: Boolean,
        default: !0,
      },
      duration: [String, Number, Object],
      enterFromClass: String,
      enterActiveClass: String,
      enterToClass: String,
      appearFromClass: String,
      appearActiveClass: String,
      appearToClass: String,
      leaveFromClass: String,
      leaveActiveClass: String,
      leaveToClass: String,
    },
    Cu = Se({}, yc, Pa),
    Pt = (e, t = []) => {
      Y(e) ? e.forEach((s) => s(...t)) : e && e(...t);
    },
    Tr = (e) => (e ? (Y(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);

  function Pu(e) {
    const t = {};
    for (const P in e) P in Pa || (t[P] = e[P]);
    if (e.css === !1) return t;
    const {
        name: s = "v",
        type: n,
        duration: i,
        enterFromClass: r = `${s}-enter-from`,
        enterActiveClass: o = `${s}-enter-active`,
        enterToClass: a = `${s}-enter-to`,
        appearFromClass: l = r,
        appearActiveClass: c = o,
        appearToClass: u = a,
        leaveFromClass: d = `${s}-leave-from`,
        leaveActiveClass: p = `${s}-leave-active`,
        leaveToClass: v = `${s}-leave-to`,
      } = e,
      f = Au(i),
      b = f && f[0],
      _ = f && f[1],
      {
        onBeforeEnter: S,
        onEnter: h,
        onEnterCancelled: g,
        onLeave: w,
        onLeaveCancelled: T,
        onBeforeAppear: B = S,
        onAppear: $ = h,
        onAppearCancelled: j = g,
      } = t,
      I = (P, z, Q, te) => {
        (P._enterCancelled = te), wt(P, z ? u : a), wt(P, z ? c : o), Q && Q();
      },
      C = (P, z) => {
        (P._isLeaving = !1), wt(P, d), wt(P, v), wt(P, p), z && z();
      },
      M = (P) => (z, Q) => {
        const te = P ? $ : h,
          G = () => I(z, P, Q);
        Pt(te, [z, G]),
          Er(() => {
            wt(z, P ? l : r), st(z, P ? u : a), Tr(te) || Cr(z, n, b, G);
          });
      };
    return Se(t, {
      onBeforeEnter(P) {
        Pt(S, [P]), st(P, r), st(P, o);
      },
      onBeforeAppear(P) {
        Pt(B, [P]), st(P, l), st(P, c);
      },
      onEnter: M(!1),
      onAppear: M(!0),
      onLeave(P, z) {
        P._isLeaving = !0;
        const Q = () => C(P, z);
        st(P, d),
          P._enterCancelled ? (st(P, p), gi()) : (gi(), st(P, p)),
          Er(() => {
            P._isLeaving && (wt(P, d), st(P, v), Tr(w) || Cr(P, n, _, Q));
          }),
          Pt(w, [P, Q]);
      },
      onEnterCancelled(P) {
        I(P, !1, void 0, !0), Pt(g, [P]);
      },
      onAppearCancelled(P) {
        I(P, !0, void 0, !0), Pt(j, [P]);
      },
      onLeaveCancelled(P) {
        C(P), Pt(T, [P]);
      },
    });
  }

  function Au(e) {
    if (e == null) return null;
    if (ce(e)) return [zn(e.enter), zn(e.leave)];
    {
      const t = zn(e);
      return [t, t];
    }
  }

  function zn(e) {
    return Ll(e);
  }

  function st(e, t) {
    t.split(/\s+/).forEach((s) => s && e.classList.add(s)),
      (e[Qt] || (e[Qt] = new Set())).add(t);
  }

  function wt(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
    const s = e[Qt];
    s && (s.delete(t), s.size || (e[Qt] = void 0));
  }

  function Er(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let Lu = 0;

  function Cr(e, t, s, n) {
    const i = (e._endId = ++Lu),
      r = () => {
        i === e._endId && n();
      };
    if (s != null) return setTimeout(r, s);
    const { type: o, timeout: a, propCount: l } = Aa(e, t);
    if (!o) return n();
    const c = o + "end";
    let u = 0;
    const d = () => {
        e.removeEventListener(c, p), r();
      },
      p = (v) => {
        v.target === e && ++u >= l && d();
      };
    setTimeout(() => {
      u < l && d();
    }, a + 1),
      e.addEventListener(c, p);
  }

  function Aa(e, t) {
    const s = window.getComputedStyle(e),
      n = (f) => (s[f] || "").split(", "),
      i = n(`${bt}Delay`),
      r = n(`${bt}Duration`),
      o = Pr(i, r),
      a = n(`${os}Delay`),
      l = n(`${os}Duration`),
      c = Pr(a, l);
    let u = null,
      d = 0,
      p = 0;
    t === bt
      ? o > 0 && ((u = bt), (d = o), (p = r.length))
      : t === os
        ? c > 0 && ((u = os), (d = c), (p = l.length))
        : ((d = Math.max(o, c)),
          (u = d > 0 ? (o > c ? bt : os) : null),
          (p = u ? (u === bt ? r.length : l.length) : 0));
    const v =
      u === bt && /\b(transform|all)(,|$)/.test(n(`${bt}Property`).toString());
    return {
      type: u,
      timeout: d,
      propCount: p,
      hasTransform: v,
    };
  }

  function Pr(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((s, n) => Ar(s) + Ar(e[n])));
  }

  function Ar(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }

  function gi() {
    return document.body.offsetHeight;
  }

  function ku(e, t, s) {
    const n = e[Qt];
    n && (t = (t ? [t, ...n] : [...n]).join(" ")),
      t == null
        ? e.removeAttribute("class")
        : s
          ? e.setAttribute("class", t)
          : (e.className = t);
  }
  const Lr = Symbol("_vod"),
    Ou = Symbol("_vsh"),
    Mu = Symbol(""),
    Iu = /(^|;)\s*display\s*:/;

  function Ru(e, t, s) {
    const n = e.style,
      i = ve(s);
    let r = !1;
    if (s && !i) {
      if (t)
        if (ve(t))
          for (const o of t.split(";")) {
            const a = o.slice(0, o.indexOf(":")).trim();
            s[a] == null && Hs(n, a, "");
          }
        else for (const o in t) s[o] == null && Hs(n, o, "");
      for (const o in s) o === "display" && (r = !0), Hs(n, o, s[o]);
    } else if (i) {
      if (t !== s) {
        const o = n[Mu];
        o && (s += ";" + o), (n.cssText = s), (r = Iu.test(s));
      }
    } else t && e.removeAttribute("style");
    Lr in e && ((e[Lr] = r ? n.display : ""), e[Ou] && (n.display = "none"));
  }
  const kr = /\s*!important$/;

  function Hs(e, t, s) {
    if (Y(s)) s.forEach((n) => Hs(e, t, n));
    else if ((s == null && (s = ""), t.startsWith("--"))) e.setProperty(t, s);
    else {
      const n = Nu(e, t);
      kr.test(s)
        ? e.setProperty(Tt(n), s.replace(kr, ""), "important")
        : (e[n] = s);
    }
  }
  const Or = ["Webkit", "Moz", "ms"],
    qn = {};

  function Nu(e, t) {
    const s = qn[t];
    if (s) return s;
    let n = Ge(t);
    if (n !== "filter" && n in e) return (qn[t] = n);
    n = mn(n);
    for (let i = 0; i < Or.length; i++) {
      const r = Or[i] + n;
      if (r in e) return (qn[t] = r);
    }
    return t;
  }
  const Mr = "http://www.w3.org/1999/xlink";

  function Ir(e, t, s, n, i, r = Nl(t)) {
    n && t.startsWith("xlink:")
      ? s == null
        ? e.removeAttributeNS(Mr, t.slice(6, t.length))
        : e.setAttributeNS(Mr, t, s)
      : s == null || (r && !wo(s))
        ? e.removeAttribute(t)
        : e.setAttribute(t, r ? "" : Ke(s) ? String(s) : s);
  }

  function Rr(e, t, s, n, i) {
    if (t === "innerHTML" || t === "textContent") {
      s != null && (e[t] = t === "innerHTML" ? Ca(s) : s);
      return;
    }
    const r = e.tagName;
    if (t === "value" && r !== "PROGRESS" && !r.includes("-")) {
      const a = r === "OPTION" ? e.getAttribute("value") || "" : e.value,
        l = s == null ? (e.type === "checkbox" ? "on" : "") : String(s);
      (a !== l || !("_value" in e)) && (e.value = l),
        s == null && e.removeAttribute(t),
        (e._value = s);
      return;
    }
    let o = !1;
    if (s === "" || s == null) {
      const a = typeof e[t];
      a === "boolean"
        ? (s = wo(s))
        : s == null && a === "string"
          ? ((s = ""), (o = !0))
          : a === "number" && ((s = 0), (o = !0));
    }
    try {
      e[t] = s;
    } catch {}
    o && e.removeAttribute(i || t);
  }

  function Lt(e, t, s, n) {
    e.addEventListener(t, s, n);
  }

  function Du(e, t, s, n) {
    e.removeEventListener(t, s, n);
  }
  const Nr = Symbol("_vei");

  function Bu(e, t, s, n, i = null) {
    const r = e[Nr] || (e[Nr] = {}),
      o = r[t];
    if (n && o) o.value = n;
    else {
      const [a, l] = Fu(t);
      if (n) {
        const c = (r[t] = $u(n, i));
        Lt(e, a, c, l);
      } else o && (Du(e, a, o, l), (r[t] = void 0));
    }
  }
  const Dr = /(?:Once|Passive|Capture)$/;

  function Fu(e) {
    let t;
    if (Dr.test(e)) {
      t = {};
      let n;
      for (; (n = e.match(Dr)); )
        (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
    }
    return [e[2] === ":" ? e.slice(3) : Tt(e.slice(2)), t];
  }
  let Gn = 0;
  const Vu = Promise.resolve(),
    Hu = () => Gn || (Vu.then(() => (Gn = 0)), (Gn = Date.now()));

  function $u(e, t) {
    const s = (n) => {
      if (!n._vts) n._vts = Date.now();
      else if (n._vts <= s.attached) return;
      Ye(ju(n, s.value), t, 5, [n]);
    };
    return (s.value = e), (s.attached = Hu()), s;
  }

  function ju(e, t) {
    if (Y(t)) {
      const s = e.stopImmediatePropagation;
      return (
        (e.stopImmediatePropagation = () => {
          s.call(e), (e._stopped = !0);
        }),
        t.map((n) => (i) => !i._stopped && n && n(i))
      );
    } else return t;
  }
  const Br = (e) =>
      e.charCodeAt(0) === 111 &&
      e.charCodeAt(1) === 110 &&
      e.charCodeAt(2) > 96 &&
      e.charCodeAt(2) < 123,
    zu = (e, t, s, n, i, r) => {
      const o = i === "svg";
      t === "class"
        ? ku(e, n, o)
        : t === "style"
          ? Ru(e, s, n)
          : fn(t)
            ? ki(t) || Bu(e, t, s, n, r)
            : (
                  t[0] === "."
                    ? ((t = t.slice(1)), !0)
                    : t[0] === "^"
                      ? ((t = t.slice(1)), !1)
                      : qu(e, t, n, o)
                )
              ? (Rr(e, t, n),
                !e.tagName.includes("-") &&
                  (t === "value" || t === "checked" || t === "selected") &&
                  Ir(e, t, n, o, r, t !== "value"))
              : e._isVueCE && (/[A-Z]/.test(t) || !ve(n))
                ? Rr(e, Ge(t), n, r, t)
                : (t === "true-value"
                    ? (e._trueValue = n)
                    : t === "false-value" && (e._falseValue = n),
                  Ir(e, t, n, o));
    };

  function qu(e, t, s, n) {
    if (n)
      return !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && Br(t) && J(s))
      );
    if (
      t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "autocorrect" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA")
    )
      return !1;
    if (t === "width" || t === "height") {
      const i = e.tagName;
      if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
        return !1;
    }
    return Br(t) && ve(s) ? !1 : t in e;
  }
  const La = new WeakMap(),
    ka = new WeakMap(),
    tn = Symbol("_moveCb"),
    Fr = Symbol("_enterCb"),
    Gu = (e) => (delete e.props.mode, e),
    Uu = Gu({
      name: "TransitionGroup",
      props: Se({}, Cu, {
        tag: String,
        moveClass: String,
      }),
      setup(e, { slots: t }) {
        const s = pu(),
          n = vc();
        let i, r;
        return (
          Jo(() => {
            if (!i.length) return;
            const o = e.moveClass || `${e.name || "v"}-move`;
            if (!Xu(i[0].el, s.vnode.el, o)) {
              i = [];
              return;
            }
            i.forEach(Wu), i.forEach(Ku);
            const a = i.filter(Yu);
            gi(),
              a.forEach((l) => {
                const c = l.el,
                  u = c.style;
                st(c, o),
                  (u.transform = u.webkitTransform = u.transitionDuration = "");
                const d = (c[tn] = (p) => {
                  (p && p.target !== c) ||
                    ((!p || /transform$/.test(p.propertyName)) &&
                      (c.removeEventListener("transitionend", d),
                      (c[tn] = null),
                      wt(c, o)));
                });
                c.addEventListener("transitionend", d);
              }),
              (i = []);
          }),
          () => {
            const o = oe(e),
              a = Pu(o);
            let l = o.tag || ge;
            if (((i = []), r))
              for (let c = 0; c < r.length; c++) {
                const u = r[c];
                u.el &&
                  u.el instanceof Element &&
                  (i.push(u),
                  bs(u, ci(u, a, n, s)),
                  La.set(u, u.el.getBoundingClientRect()));
              }
            r = t.default ? Uo(t.default()) : [];
            for (let c = 0; c < r.length; c++) {
              const u = r[c];
              u.key != null && bs(u, ci(u, a, n, s));
            }
            return Te(l, null, r);
          }
        );
      },
    }),
    Gi = Uu;

  function Wu(e) {
    const t = e.el;
    t[tn] && t[tn](), t[Fr] && t[Fr]();
  }

  function Ku(e) {
    ka.set(e, e.el.getBoundingClientRect());
  }

  function Yu(e) {
    const t = La.get(e),
      s = ka.get(e),
      n = t.left - s.left,
      i = t.top - s.top;
    if (n || i) {
      const r = e.el.style;
      return (
        (r.transform = r.webkitTransform = `translate(${n}px,${i}px)`),
        (r.transitionDuration = "0s"),
        e
      );
    }
  }

  function Xu(e, t, s) {
    const n = e.cloneNode(),
      i = e[Qt];
    i &&
      i.forEach((a) => {
        a.split(/\s+/).forEach((l) => l && n.classList.remove(l));
      }),
      s.split(/\s+/).forEach((a) => a && n.classList.add(a)),
      (n.style.display = "none");
    const r = t.nodeType === 1 ? t : t.parentNode;
    r.appendChild(n);
    const { hasTransform: o } = Aa(n);
    return r.removeChild(n), o;
  }
  const sn = (e) => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return Y(t) ? (s) => Bs(t, s) : t;
  };

  function Ju(e) {
    e.target.composing = !0;
  }

  function Vr(e) {
    const t = e.target;
    t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
  }
  const Jt = Symbol("_assign"),
    Qu = {
      created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
        e[Jt] = sn(i);
        const r = n || (i.props && i.props.type === "number");
        Lt(e, t ? "change" : "input", (o) => {
          if (o.target.composing) return;
          let a = e.value;
          s && (a = a.trim()), r && (a = Us(a)), e[Jt](a);
        }),
          s &&
            Lt(e, "change", () => {
              e.value = e.value.trim();
            }),
          t ||
            (Lt(e, "compositionstart", Ju),
            Lt(e, "compositionend", Vr),
            Lt(e, "change", Vr));
      },
      mounted(e, { value: t }) {
        e.value = t ?? "";
      },
      beforeUpdate(
        e,
        { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: r } },
        o,
      ) {
        if (((e[Jt] = sn(o)), e.composing)) return;
        const a =
            (r || e.type === "number") && !/^0\d/.test(e.value)
              ? Us(e.value)
              : e.value,
          l = t ?? "";
        a !== l &&
          ((document.activeElement === e &&
            e.type !== "range" &&
            ((n && t === s) || (i && e.value.trim() === l))) ||
            (e.value = l));
      },
    },
    Zu = {
      deep: !0,
      created(e, { value: t, modifiers: { number: s } }, n) {
        const i = pn(t);
        Lt(e, "change", () => {
          const r = Array.prototype.filter
            .call(e.options, (o) => o.selected)
            .map((o) => (s ? Us(nn(o)) : nn(o)));
          e[Jt](e.multiple ? (i ? new Set(r) : r) : r[0]),
            (e._assigning = !0),
            Xs(() => {
              e._assigning = !1;
            });
        }),
          (e[Jt] = sn(n));
      },
      mounted(e, { value: t }) {
        Hr(e, t);
      },
      beforeUpdate(e, t, s) {
        e[Jt] = sn(s);
      },
      updated(e, { value: t }) {
        e._assigning || Hr(e, t);
      },
    };

  function Hr(e, t) {
    const s = e.multiple,
      n = Y(t);
    if (!(s && !n && !pn(t))) {
      for (let i = 0, r = e.options.length; i < r; i++) {
        const o = e.options[i],
          a = nn(o);
        if (s)
          if (n) {
            const l = typeof a;
            l === "string" || l === "number"
              ? (o.selected = t.some((c) => String(c) === String(a)))
              : (o.selected = Bl(t, a) > -1);
          } else o.selected = t.has(a);
        else if (vn(nn(o), t)) {
          e.selectedIndex !== i && (e.selectedIndex = i);
          return;
        }
      }
      !s && e.selectedIndex !== -1 && (e.selectedIndex = -1);
    }
  }

  function nn(e) {
    return "_value" in e ? e._value : e.value;
  }
  const ed = {
      esc: "escape",
      space: " ",
      up: "arrow-up",
      left: "arrow-left",
      right: "arrow-right",
      down: "arrow-down",
      delete: "backspace",
    },
    ht = (e, t) => {
      const s = e._withKeys || (e._withKeys = {}),
        n = t.join(".");
      return (
        s[n] ||
        (s[n] = (i) => {
          if (!("key" in i)) return;
          const r = Tt(i.key);
          if (t.some((o) => o === r || ed[o] === r)) return e(i);
        })
      );
    },
    td = Se(
      {
        patchProp: zu,
      },
      Eu,
    );
  let $r;

  function sd() {
    return $r || ($r = Uc(td));
  }
  const nd = (...e) => {
    const t = sd().createApp(...e),
      { mount: s } = t;
    return (
      (t.mount = (n) => {
        const i = rd(n);
        if (!i) return;
        const r = t._component;
        !J(r) && !r.render && !r.template && (r.template = i.innerHTML),
          i.nodeType === 1 && (i.textContent = "");
        const o = s(i, !1, id(i));
        return (
          i instanceof Element &&
            (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")),
          o
        );
      }),
      t
    );
  };

  function id(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
      return "mathml";
  }

  function rd(e) {
    return ve(e) ? document.querySelector(e) : e;
  }

  function rn(e) {
    return (
      (rn =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                typeof Symbol == "function" &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      rn(e)
    );
  }

  function $s(e, t) {
    if (!e.vueAxiosInstalled) {
      var s = Oa(t) ? ld(t) : t;
      if (cd(s)) {
        var n = ud(e);
        if (n) {
          var i = n < 3 ? od : ad;
          Object.keys(s).forEach(function (r) {
            i(e, r, s[r]);
          }),
            (e.vueAxiosInstalled = !0);
        } else console.error("[vue-axios] unknown Vue version");
      } else
        console.error(
          "[vue-axios] configuration is invalid, expected options are either <axios_instance> or { <registration_key>: <axios_instance> }",
        );
    }
  }

  function od(e, t, s) {
    Object.defineProperty(e.prototype, t, {
      get: function () {
        return s;
      },
    }),
      (e[t] = s);
  }

  function ad(e, t, s) {
    (e.config.globalProperties[t] = s), (e[t] = s);
  }

  function Oa(e) {
    return e && typeof e.get == "function" && typeof e.post == "function";
  }

  function ld(e) {
    return {
      axios: e,
      $http: e,
    };
  }

  function cd(e) {
    return (
      rn(e) === "object" &&
      Object.keys(e).every(function (t) {
        return Oa(e[t]);
      })
    );
  }

  function ud(e) {
    return e && e.version && Number(e.version.split(".")[0]);
  }
  (typeof Ai > "u" ? "undefined" : rn(Ai)) == "object"
    ? (wl.exports = $s)
    : typeof define == "function" && define.amd
      ? define([], function () {
          return $s;
        })
      : window.Vue &&
        window.axios &&
        window.Vue.use &&
        Vue.use($s, window.axios);

  function Ma(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  const { toString: dd } = Object.prototype,
    { getPrototypeOf: Ui } = Object,
    { iterator: En, toStringTag: Ia } = Symbol,
    Cn = ((e) => (t) => {
      const s = dd.call(t);
      return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    Xe = (e) => ((e = e.toLowerCase()), (t) => Cn(t) === e),
    Pn = (e) => (t) => typeof t === e,
    { isArray: es } = Array,
    xs = Pn("undefined");

  function fd(e) {
    return (
      e !== null &&
      !xs(e) &&
      e.constructor !== null &&
      !xs(e.constructor) &&
      De(e.constructor.isBuffer) &&
      e.constructor.isBuffer(e)
    );
  }
  const Ra = Xe("ArrayBuffer");

  function pd(e) {
    let t;
    return (
      typeof ArrayBuffer < "u" && ArrayBuffer.isView
        ? (t = ArrayBuffer.isView(e))
        : (t = e && e.buffer && Ra(e.buffer)),
      t
    );
  }
  const hd = Pn("string"),
    De = Pn("function"),
    Na = Pn("number"),
    An = (e) => e !== null && typeof e == "object",
    md = (e) => e === !0 || e === !1,
    js = (e) => {
      if (Cn(e) !== "object") return !1;
      const t = Ui(e);
      return (
        (t === null ||
          t === Object.prototype ||
          Object.getPrototypeOf(t) === null) &&
        !(Ia in e) &&
        !(En in e)
      );
    },
    gd = Xe("Date"),
    vd = Xe("File"),
    yd = Xe("Blob"),
    bd = Xe("FileList"),
    wd = (e) => An(e) && De(e.pipe),
    Sd = (e) => {
      let t;
      return (
        e &&
        ((typeof FormData == "function" && e instanceof FormData) ||
          (De(e.append) &&
            ((t = Cn(e)) === "formdata" ||
              (t === "object" &&
                De(e.toString) &&
                e.toString() === "[object FormData]"))))
      );
    },
    _d = Xe("URLSearchParams"),
    [xd, Td, Ed, Cd] = ["ReadableStream", "Request", "Response", "Headers"].map(
      Xe,
    ),
    Pd = (e) =>
      e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

  function Ps(e, t, { allOwnKeys: s = !1 } = {}) {
    if (e === null || typeof e > "u") return;
    let n, i;
    if ((typeof e != "object" && (e = [e]), es(e)))
      for (n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
    else {
      const r = s ? Object.getOwnPropertyNames(e) : Object.keys(e),
        o = r.length;
      let a;
      for (n = 0; n < o; n++) (a = r[n]), t.call(null, e[a], a, e);
    }
  }

  function Da(e, t) {
    t = t.toLowerCase();
    const s = Object.keys(e);
    let n = s.length,
      i;
    for (; n-- > 0; ) if (((i = s[n]), t === i.toLowerCase())) return i;
    return null;
  }
  const kt =
      typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
          ? self
          : typeof window < "u"
            ? window
            : global,
    Ba = (e) => !xs(e) && e !== kt;

  function vi() {
    const { caseless: e } = (Ba(this) && this) || {},
      t = {},
      s = (n, i) => {
        const r = (e && Da(t, i)) || i;
        js(t[r]) && js(n)
          ? (t[r] = vi(t[r], n))
          : js(n)
            ? (t[r] = vi({}, n))
            : es(n)
              ? (t[r] = n.slice())
              : (t[r] = n);
      };
    for (let n = 0, i = arguments.length; n < i; n++)
      arguments[n] && Ps(arguments[n], s);
    return t;
  }
  const Ad = (e, t, s, { allOwnKeys: n } = {}) => (
      Ps(
        t,
        (i, r) => {
          s && De(i) ? (e[r] = Ma(i, s)) : (e[r] = i);
        },
        {
          allOwnKeys: n,
        },
      ),
      e
    ),
    Ld = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    kd = (e, t, s, n) => {
      (e.prototype = Object.create(t.prototype, n)),
        (e.prototype.constructor = e),
        Object.defineProperty(e, "super", {
          value: t.prototype,
        }),
        s && Object.assign(e.prototype, s);
    },
    Od = (e, t, s, n) => {
      let i, r, o;
      const a = {};
      if (((t = t || {}), e == null)) return t;
      do {
        for (i = Object.getOwnPropertyNames(e), r = i.length; r-- > 0; )
          (o = i[r]),
            (!n || n(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
        e = s !== !1 && Ui(e);
      } while (e && (!s || s(e, t)) && e !== Object.prototype);
      return t;
    },
    Md = (e, t, s) => {
      (e = String(e)),
        (s === void 0 || s > e.length) && (s = e.length),
        (s -= t.length);
      const n = e.indexOf(t, s);
      return n !== -1 && n === s;
    },
    Id = (e) => {
      if (!e) return null;
      if (es(e)) return e;
      let t = e.length;
      if (!Na(t)) return null;
      const s = new Array(t);
      for (; t-- > 0; ) s[t] = e[t];
      return s;
    },
    Rd = (
      (e) => (t) =>
        e && t instanceof e
    )(typeof Uint8Array < "u" && Ui(Uint8Array)),
    Nd = (e, t) => {
      const n = (e && e[En]).call(e);
      let i;
      for (; (i = n.next()) && !i.done; ) {
        const r = i.value;
        t.call(e, r[0], r[1]);
      }
    },
    Dd = (e, t) => {
      let s;
      const n = [];
      for (; (s = e.exec(t)) !== null; ) n.push(s);
      return n;
    },
    Bd = Xe("HTMLFormElement"),
    Fd = (e) =>
      e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (s, n, i) {
        return n.toUpperCase() + i;
      }),
    jr = (
      ({ hasOwnProperty: e }) =>
      (t, s) =>
        e.call(t, s)
    )(Object.prototype),
    Vd = Xe("RegExp"),
    Fa = (e, t) => {
      const s = Object.getOwnPropertyDescriptors(e),
        n = {};
      Ps(s, (i, r) => {
        let o;
        (o = t(i, r, e)) !== !1 && (n[r] = o || i);
      }),
        Object.defineProperties(e, n);
    },
    Hd = (e) => {
      Fa(e, (t, s) => {
        if (De(e) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
          return !1;
        const n = e[s];
        if (De(n)) {
          if (((t.enumerable = !1), "writable" in t)) {
            t.writable = !1;
            return;
          }
          t.set ||
            (t.set = () => {
              throw Error("Can not rewrite read-only method '" + s + "'");
            });
        }
      });
    },
    $d = (e, t) => {
      const s = {},
        n = (i) => {
          i.forEach((r) => {
            s[r] = !0;
          });
        };
      return es(e) ? n(e) : n(String(e).split(t)), s;
    },
    jd = () => {},
    zd = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);

  function qd(e) {
    return !!(e && De(e.append) && e[Ia] === "FormData" && e[En]);
  }
  const Gd = (e) => {
      const t = new Array(10),
        s = (n, i) => {
          if (An(n)) {
            if (t.indexOf(n) >= 0) return;
            if (!("toJSON" in n)) {
              t[i] = n;
              const r = es(n) ? [] : {};
              return (
                Ps(n, (o, a) => {
                  const l = s(o, i + 1);
                  !xs(l) && (r[a] = l);
                }),
                (t[i] = void 0),
                r
              );
            }
          }
          return n;
        };
      return s(e, 0);
    },
    Ud = Xe("AsyncFunction"),
    Wd = (e) => e && (An(e) || De(e)) && De(e.then) && De(e.catch),
    Va = ((e, t) =>
      e
        ? setImmediate
        : t
          ? ((s, n) => (
              kt.addEventListener(
                "message",
                ({ source: i, data: r }) => {
                  i === kt && r === s && n.length && n.shift()();
                },
                !1,
              ),
              (i) => {
                n.push(i), kt.postMessage(s, "*");
              }
            ))(`axios@${Math.random()}`, [])
          : (s) => setTimeout(s))(
      typeof setImmediate == "function",
      De(kt.postMessage),
    ),
    Kd =
      typeof queueMicrotask < "u"
        ? queueMicrotask.bind(kt)
        : (typeof process < "u" && process.nextTick) || Va,
    Yd = (e) => e != null && De(e[En]),
    x = {
      isArray: es,
      isArrayBuffer: Ra,
      isBuffer: fd,
      isFormData: Sd,
      isArrayBufferView: pd,
      isString: hd,
      isNumber: Na,
      isBoolean: md,
      isObject: An,
      isPlainObject: js,
      isReadableStream: xd,
      isRequest: Td,
      isResponse: Ed,
      isHeaders: Cd,
      isUndefined: xs,
      isDate: gd,
      isFile: vd,
      isBlob: yd,
      isRegExp: Vd,
      isFunction: De,
      isStream: wd,
      isURLSearchParams: _d,
      isTypedArray: Rd,
      isFileList: bd,
      forEach: Ps,
      merge: vi,
      extend: Ad,
      trim: Pd,
      stripBOM: Ld,
      inherits: kd,
      toFlatObject: Od,
      kindOf: Cn,
      kindOfTest: Xe,
      endsWith: Md,
      toArray: Id,
      forEachEntry: Nd,
      matchAll: Dd,
      isHTMLForm: Bd,
      hasOwnProperty: jr,
      hasOwnProp: jr,
      reduceDescriptors: Fa,
      freezeMethods: Hd,
      toObjectSet: $d,
      toCamelCase: Fd,
      noop: jd,
      toFiniteNumber: zd,
      findKey: Da,
      global: kt,
      isContextDefined: Ba,
      isSpecCompliantForm: qd,
      toJSONObject: Gd,
      isAsyncFn: Ud,
      isThenable: Wd,
      setImmediate: Va,
      asap: Kd,
      isIterable: Yd,
    };

  function ee(e, t, s, n, i) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      s && (this.config = s),
      n && (this.request = n),
      i && ((this.response = i), (this.status = i.status ? i.status : null));
  }
  x.inherits(ee, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: x.toJSONObject(this.config),
        code: this.code,
        status: this.status,
      };
    },
  });
  const Ha = ee.prototype,
    $a = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach((e) => {
    $a[e] = {
      value: e,
    };
  });
  Object.defineProperties(ee, $a);
  Object.defineProperty(Ha, "isAxiosError", {
    value: !0,
  });
  ee.from = (e, t, s, n, i, r) => {
    const o = Object.create(Ha);
    return (
      x.toFlatObject(
        e,
        o,
        function (l) {
          return l !== Error.prototype;
        },
        (a) => a !== "isAxiosError",
      ),
      ee.call(o, e.message, t, s, n, i),
      (o.cause = e),
      (o.name = e.name),
      r && Object.assign(o, r),
      o
    );
  };
  const Xd = null;

  function yi(e) {
    return x.isPlainObject(e) || x.isArray(e);
  }

  function ja(e) {
    return x.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }

  function zr(e, t, s) {
    return e
      ? e
          .concat(t)
          .map(function (i, r) {
            return (i = ja(i)), !s && r ? "[" + i + "]" : i;
          })
          .join(s ? "." : "")
      : t;
  }

  function Jd(e) {
    return x.isArray(e) && !e.some(yi);
  }
  const Qd = x.toFlatObject(x, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
  });

  function Ln(e, t, s) {
    if (!x.isObject(e)) throw new TypeError("target must be an object");
    (t = t || new FormData()),
      (s = x.toFlatObject(
        s,
        {
          metaTokens: !0,
          dots: !1,
          indexes: !1,
        },
        !1,
        function (b, _) {
          return !x.isUndefined(_[b]);
        },
      ));
    const n = s.metaTokens,
      i = s.visitor || u,
      r = s.dots,
      o = s.indexes,
      l = (s.Blob || (typeof Blob < "u" && Blob)) && x.isSpecCompliantForm(t);
    if (!x.isFunction(i)) throw new TypeError("visitor must be a function");

    function c(f) {
      if (f === null) return "";
      if (x.isDate(f)) return f.toISOString();
      if (!l && x.isBlob(f))
        throw new ee("Blob is not supported. Use a Buffer instead.");
      return x.isArrayBuffer(f) || x.isTypedArray(f)
        ? l && typeof Blob == "function"
          ? new Blob([f])
          : Buffer.from(f)
        : f;
    }

    function u(f, b, _) {
      let S = f;
      if (f && !_ && typeof f == "object") {
        if (x.endsWith(b, "{}"))
          (b = n ? b : b.slice(0, -2)), (f = JSON.stringify(f));
        else if (
          (x.isArray(f) && Jd(f)) ||
          ((x.isFileList(f) || x.endsWith(b, "[]")) && (S = x.toArray(f)))
        )
          return (
            (b = ja(b)),
            S.forEach(function (g, w) {
              !(x.isUndefined(g) || g === null) &&
                t.append(
                  o === !0 ? zr([b], w, r) : o === null ? b : b + "[]",
                  c(g),
                );
            }),
            !1
          );
      }
      return yi(f) ? !0 : (t.append(zr(_, b, r), c(f)), !1);
    }
    const d = [],
      p = Object.assign(Qd, {
        defaultVisitor: u,
        convertValue: c,
        isVisitable: yi,
      });

    function v(f, b) {
      if (!x.isUndefined(f)) {
        if (d.indexOf(f) !== -1)
          throw Error("Circular reference detected in " + b.join("."));
        d.push(f),
          x.forEach(f, function (S, h) {
            (!(x.isUndefined(S) || S === null) &&
              i.call(t, S, x.isString(h) ? h.trim() : h, b, p)) === !0 &&
              v(S, b ? b.concat(h) : [h]);
          }),
          d.pop();
      }
    }
    if (!x.isObject(e)) throw new TypeError("data must be an object");
    return v(e), t;
  }

  function qr(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
      return t[n];
    });
  }

  function Wi(e, t) {
    (this._pairs = []), e && Ln(e, this, t);
  }
  const za = Wi.prototype;
  za.append = function (t, s) {
    this._pairs.push([t, s]);
  };
  za.toString = function (t) {
    const s = t
      ? function (n) {
          return t.call(this, n, qr);
        }
      : qr;
    return this._pairs
      .map(function (i) {
        return s(i[0]) + "=" + s(i[1]);
      }, "")
      .join("&");
  };

  function Zd(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }

  function qa(e, t, s) {
    if (!t) return e;
    const n = (s && s.encode) || Zd;
    x.isFunction(s) &&
      (s = {
        serialize: s,
      });
    const i = s && s.serialize;
    let r;
    if (
      (i
        ? (r = i(t, s))
        : (r = x.isURLSearchParams(t)
            ? t.toString()
            : new Wi(t, s).toString(n)),
      r)
    ) {
      const o = e.indexOf("#");
      o !== -1 && (e = e.slice(0, o)),
        (e += (e.indexOf("?") === -1 ? "?" : "&") + r);
    }
    return e;
  }
  class Gr {
    constructor() {
      this.handlers = [];
    }
    use(t, s, n) {
      return (
        this.handlers.push({
          fulfilled: t,
          rejected: s,
          synchronous: n ? n.synchronous : !1,
          runWhen: n ? n.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(t) {
      this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
      this.handlers && (this.handlers = []);
    }
    forEach(t) {
      x.forEach(this.handlers, function (n) {
        n !== null && t(n);
      });
    }
  }
  const Ga = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    ef = typeof URLSearchParams < "u" ? URLSearchParams : Wi,
    tf = typeof FormData < "u" ? FormData : null,
    sf = typeof Blob < "u" ? Blob : null,
    nf = {
      isBrowser: !0,
      classes: {
        URLSearchParams: ef,
        FormData: tf,
        Blob: sf,
      },
      protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    Ki = typeof window < "u" && typeof document < "u",
    bi = (typeof navigator == "object" && navigator) || void 0,
    rf =
      Ki &&
      (!bi || ["ReactNative", "NativeScript", "NS"].indexOf(bi.product) < 0),
    of =
      typeof WorkerGlobalScope < "u" &&
      self instanceof WorkerGlobalScope &&
      typeof self.importScripts == "function",
    af = (Ki && window.location.href) || "http://localhost",
    lf = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          hasBrowserEnv: Ki,
          hasStandardBrowserEnv: rf,
          hasStandardBrowserWebWorkerEnv: of,
          navigator: bi,
          origin: af,
        },
        Symbol.toStringTag,
        {
          value: "Module",
        },
      ),
    ),
    Ce = {
      ...lf,
      ...nf,
    };

  function cf(e, t) {
    return Ln(
      e,
      new Ce.classes.URLSearchParams(),
      Object.assign(
        {
          visitor: function (s, n, i, r) {
            return Ce.isNode && x.isBuffer(s)
              ? (this.append(n, s.toString("base64")), !1)
              : r.defaultVisitor.apply(this, arguments);
          },
        },
        t,
      ),
    );
  }

  function uf(e) {
    return x
      .matchAll(/\w+|\[(\w*)]/g, e)
      .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
  }

  function df(e) {
    const t = {},
      s = Object.keys(e);
    let n;
    const i = s.length;
    let r;
    for (n = 0; n < i; n++) (r = s[n]), (t[r] = e[r]);
    return t;
  }

  function Ua(e) {
    function t(s, n, i, r) {
      let o = s[r++];
      if (o === "__proto__") return !0;
      const a = Number.isFinite(+o),
        l = r >= s.length;
      return (
        (o = !o && x.isArray(i) ? i.length : o),
        l
          ? (x.hasOwnProp(i, o) ? (i[o] = [i[o], n]) : (i[o] = n), !a)
          : ((!i[o] || !x.isObject(i[o])) && (i[o] = []),
            t(s, n, i[o], r) && x.isArray(i[o]) && (i[o] = df(i[o])),
            !a)
      );
    }
    if (x.isFormData(e) && x.isFunction(e.entries)) {
      const s = {};
      return (
        x.forEachEntry(e, (n, i) => {
          t(uf(n), i, s, 0);
        }),
        s
      );
    }
    return null;
  }

  function ff(e, t, s) {
    if (x.isString(e))
      try {
        return (t || JSON.parse)(e), x.trim(e);
      } catch (n) {
        if (n.name !== "SyntaxError") throw n;
      }
    return (s || JSON.stringify)(e);
  }
  const As = {
    transitional: Ga,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
      function (t, s) {
        const n = s.getContentType() || "",
          i = n.indexOf("application/json") > -1,
          r = x.isObject(t);
        if ((r && x.isHTMLForm(t) && (t = new FormData(t)), x.isFormData(t)))
          return i ? JSON.stringify(Ua(t)) : t;
        if (
          x.isArrayBuffer(t) ||
          x.isBuffer(t) ||
          x.isStream(t) ||
          x.isFile(t) ||
          x.isBlob(t) ||
          x.isReadableStream(t)
        )
          return t;
        if (x.isArrayBufferView(t)) return t.buffer;
        if (x.isURLSearchParams(t))
          return (
            s.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1,
            ),
            t.toString()
          );
        let a;
        if (r) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1)
            return cf(t, this.formSerializer).toString();
          if ((a = x.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
            const l = this.env && this.env.FormData;
            return Ln(
              a
                ? {
                    "files[]": t,
                  }
                : t,
              l && new l(),
              this.formSerializer,
            );
          }
        }
        return r || i ? (s.setContentType("application/json", !1), ff(t)) : t;
      },
    ],
    transformResponse: [
      function (t) {
        const s = this.transitional || As.transitional,
          n = s && s.forcedJSONParsing,
          i = this.responseType === "json";
        if (x.isResponse(t) || x.isReadableStream(t)) return t;
        if (t && x.isString(t) && ((n && !this.responseType) || i)) {
          const o = !(s && s.silentJSONParsing) && i;
          try {
            return JSON.parse(t);
          } catch (a) {
            if (o)
              throw a.name === "SyntaxError"
                ? ee.from(a, ee.ERR_BAD_RESPONSE, this, null, this.response)
                : a;
          }
        }
        return t;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: Ce.classes.FormData,
      Blob: Ce.classes.Blob,
    },
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0,
      },
    },
  };
  x.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    As.headers[e] = {};
  });
  const pf = x.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    hf = (e) => {
      const t = {};
      let s, n, i;
      return (
        e &&
          e
            .split(
              `
`,
            )
            .forEach(function (o) {
              (i = o.indexOf(":")),
                (s = o.substring(0, i).trim().toLowerCase()),
                (n = o.substring(i + 1).trim()),
                !(!s || (t[s] && pf[s])) &&
                  (s === "set-cookie"
                    ? t[s]
                      ? t[s].push(n)
                      : (t[s] = [n])
                    : (t[s] = t[s] ? t[s] + ", " + n : n));
            }),
        t
      );
    },
    Ur = Symbol("internals");

  function as(e) {
    return e && String(e).trim().toLowerCase();
  }

  function zs(e) {
    return e === !1 || e == null ? e : x.isArray(e) ? e.map(zs) : String(e);
  }

  function mf(e) {
    const t = Object.create(null),
      s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let n;
    for (; (n = s.exec(e)); ) t[n[1]] = n[2];
    return t;
  }
  const gf = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

  function Un(e, t, s, n, i) {
    if (x.isFunction(n)) return n.call(this, t, s);
    if ((i && (t = s), !!x.isString(t))) {
      if (x.isString(n)) return t.indexOf(n) !== -1;
      if (x.isRegExp(n)) return n.test(t);
    }
  }

  function vf(e) {
    return e
      .trim()
      .toLowerCase()
      .replace(/([a-z\d])(\w*)/g, (t, s, n) => s.toUpperCase() + n);
  }

  function yf(e, t) {
    const s = x.toCamelCase(" " + t);
    ["get", "set", "has"].forEach((n) => {
      Object.defineProperty(e, n + s, {
        value: function (i, r, o) {
          return this[n].call(this, t, i, r, o);
        },
        configurable: !0,
      });
    });
  }
  let Be = class {
    constructor(t) {
      t && this.set(t);
    }
    set(t, s, n) {
      const i = this;

      function r(a, l, c) {
        const u = as(l);
        if (!u) throw new Error("header name must be a non-empty string");
        const d = x.findKey(i, u);
        (!d || i[d] === void 0 || c === !0 || (c === void 0 && i[d] !== !1)) &&
          (i[d || l] = zs(a));
      }
      const o = (a, l) => x.forEach(a, (c, u) => r(c, u, l));
      if (x.isPlainObject(t) || t instanceof this.constructor) o(t, s);
      else if (x.isString(t) && (t = t.trim()) && !gf(t)) o(hf(t), s);
      else if (x.isObject(t) && x.isIterable(t)) {
        let a = {},
          l,
          c;
        for (const u of t) {
          if (!x.isArray(u))
            throw TypeError("Object iterator must return a key-value pair");
          a[(c = u[0])] = (l = a[c])
            ? x.isArray(l)
              ? [...l, u[1]]
              : [l, u[1]]
            : u[1];
        }
        o(a, s);
      } else t != null && r(s, t, n);
      return this;
    }
    get(t, s) {
      if (((t = as(t)), t)) {
        const n = x.findKey(this, t);
        if (n) {
          const i = this[n];
          if (!s) return i;
          if (s === !0) return mf(i);
          if (x.isFunction(s)) return s.call(this, i, n);
          if (x.isRegExp(s)) return s.exec(i);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(t, s) {
      if (((t = as(t)), t)) {
        const n = x.findKey(this, t);
        return !!(n && this[n] !== void 0 && (!s || Un(this, this[n], n, s)));
      }
      return !1;
    }
    delete(t, s) {
      const n = this;
      let i = !1;

      function r(o) {
        if (((o = as(o)), o)) {
          const a = x.findKey(n, o);
          a && (!s || Un(n, n[a], a, s)) && (delete n[a], (i = !0));
        }
      }
      return x.isArray(t) ? t.forEach(r) : r(t), i;
    }
    clear(t) {
      const s = Object.keys(this);
      let n = s.length,
        i = !1;
      for (; n--; ) {
        const r = s[n];
        (!t || Un(this, this[r], r, t, !0)) && (delete this[r], (i = !0));
      }
      return i;
    }
    normalize(t) {
      const s = this,
        n = {};
      return (
        x.forEach(this, (i, r) => {
          const o = x.findKey(n, r);
          if (o) {
            (s[o] = zs(i)), delete s[r];
            return;
          }
          const a = t ? vf(r) : String(r).trim();
          a !== r && delete s[r], (s[a] = zs(i)), (n[a] = !0);
        }),
        this
      );
    }
    concat(...t) {
      return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
      const s = Object.create(null);
      return (
        x.forEach(this, (n, i) => {
          n != null &&
            n !== !1 &&
            (s[i] = t && x.isArray(n) ? n.join(", ") : n);
        }),
        s
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([t, s]) => t + ": " + s).join(`
`);
    }
    getSetCookie() {
      return this.get("set-cookie") || [];
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(t) {
      return t instanceof this ? t : new this(t);
    }
    static concat(t, ...s) {
      const n = new this(t);
      return s.forEach((i) => n.set(i)), n;
    }
    static accessor(t) {
      const n = (this[Ur] = this[Ur] =
          {
            accessors: {},
          }).accessors,
        i = this.prototype;

      function r(o) {
        const a = as(o);
        n[a] || (yf(i, o), (n[a] = !0));
      }
      return x.isArray(t) ? t.forEach(r) : r(t), this;
    }
  };
  Be.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]);
  x.reduceDescriptors(Be.prototype, ({ value: e }, t) => {
    let s = t[0].toUpperCase() + t.slice(1);
    return {
      get: () => e,
      set(n) {
        this[s] = n;
      },
    };
  });
  x.freezeMethods(Be);

  function Wn(e, t) {
    const s = this || As,
      n = t || s,
      i = Be.from(n.headers);
    let r = n.data;
    return (
      x.forEach(e, function (a) {
        r = a.call(s, r, i.normalize(), t ? t.status : void 0);
      }),
      i.normalize(),
      r
    );
  }

  function Wa(e) {
    return !!(e && e.__CANCEL__);
  }

  function ts(e, t, s) {
    ee.call(this, e ?? "canceled", ee.ERR_CANCELED, t, s),
      (this.name = "CanceledError");
  }
  x.inherits(ts, ee, {
    __CANCEL__: !0,
  });

  function Ka(e, t, s) {
    const n = s.config.validateStatus;
    !s.status || !n || n(s.status)
      ? e(s)
      : t(
          new ee(
            "Request failed with status code " + s.status,
            [ee.ERR_BAD_REQUEST, ee.ERR_BAD_RESPONSE][
              Math.floor(s.status / 100) - 4
            ],
            s.config,
            s.request,
            s,
          ),
        );
  }

  function bf(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (t && t[1]) || "";
  }

  function wf(e, t) {
    e = e || 10;
    const s = new Array(e),
      n = new Array(e);
    let i = 0,
      r = 0,
      o;
    return (
      (t = t !== void 0 ? t : 1e3),
      function (l) {
        const c = Date.now(),
          u = n[r];
        o || (o = c), (s[i] = l), (n[i] = c);
        let d = r,
          p = 0;
        for (; d !== i; ) (p += s[d++]), (d = d % e);
        if (((i = (i + 1) % e), i === r && (r = (r + 1) % e), c - o < t))
          return;
        const v = u && c - u;
        return v ? Math.round((p * 1e3) / v) : void 0;
      }
    );
  }

  function Sf(e, t) {
    let s = 0,
      n = 1e3 / t,
      i,
      r;
    const o = (c, u = Date.now()) => {
      (s = u), (i = null), r && (clearTimeout(r), (r = null)), e.apply(null, c);
    };
    return [
      (...c) => {
        const u = Date.now(),
          d = u - s;
        d >= n
          ? o(c, u)
          : ((i = c),
            r ||
              (r = setTimeout(() => {
                (r = null), o(i);
              }, n - d)));
      },
      () => i && o(i),
    ];
  }
  const on = (e, t, s = 3) => {
      let n = 0;
      const i = wf(50, 250);
      return Sf((r) => {
        const o = r.loaded,
          a = r.lengthComputable ? r.total : void 0,
          l = o - n,
          c = i(l),
          u = o <= a;
        n = o;
        const d = {
          loaded: o,
          total: a,
          progress: a ? o / a : void 0,
          bytes: l,
          rate: c || void 0,
          estimated: c && a && u ? (a - o) / c : void 0,
          event: r,
          lengthComputable: a != null,
          [t ? "download" : "upload"]: !0,
        };
        e(d);
      }, s);
    },
    Wr = (e, t) => {
      const s = e != null;
      return [
        (n) =>
          t[0]({
            lengthComputable: s,
            total: e,
            loaded: n,
          }),
        t[1],
      ];
    },
    Kr =
      (e) =>
      (...t) =>
        x.asap(() => e(...t)),
    _f = Ce.hasStandardBrowserEnv
      ? ((e, t) => (s) => (
          (s = new URL(s, Ce.origin)),
          e.protocol === s.protocol &&
            e.host === s.host &&
            (t || e.port === s.port)
        ))(
          new URL(Ce.origin),
          Ce.navigator && /(msie|trident)/i.test(Ce.navigator.userAgent),
        )
      : () => !0,
    xf = Ce.hasStandardBrowserEnv
      ? {
          write(e, t, s, n, i, r) {
            const o = [e + "=" + encodeURIComponent(t)];
            x.isNumber(s) && o.push("expires=" + new Date(s).toGMTString()),
              x.isString(n) && o.push("path=" + n),
              x.isString(i) && o.push("domain=" + i),
              r === !0 && o.push("secure"),
              (document.cookie = o.join("; "));
          },
          read(e) {
            const t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove(e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write() {},
          read() {
            return null;
          },
          remove() {},
        };

  function Tf(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
  }

  function Ef(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
  }

  function Ya(e, t, s) {
    let n = !Tf(t);
    return e && (n || s == !1) ? Ef(e, t) : t;
  }
  const Yr = (e) =>
    e instanceof Be
      ? {
          ...e,
        }
      : e;

  function Bt(e, t) {
    t = t || {};
    const s = {};

    function n(c, u, d, p) {
      return x.isPlainObject(c) && x.isPlainObject(u)
        ? x.merge.call(
            {
              caseless: p,
            },
            c,
            u,
          )
        : x.isPlainObject(u)
          ? x.merge({}, u)
          : x.isArray(u)
            ? u.slice()
            : u;
    }

    function i(c, u, d, p) {
      if (x.isUndefined(u)) {
        if (!x.isUndefined(c)) return n(void 0, c, d, p);
      } else return n(c, u, d, p);
    }

    function r(c, u) {
      if (!x.isUndefined(u)) return n(void 0, u);
    }

    function o(c, u) {
      if (x.isUndefined(u)) {
        if (!x.isUndefined(c)) return n(void 0, c);
      } else return n(void 0, u);
    }

    function a(c, u, d) {
      if (d in t) return n(c, u);
      if (d in e) return n(void 0, c);
    }
    const l = {
      url: r,
      method: r,
      data: r,
      baseURL: o,
      transformRequest: o,
      transformResponse: o,
      paramsSerializer: o,
      timeout: o,
      timeoutMessage: o,
      withCredentials: o,
      withXSRFToken: o,
      adapter: o,
      responseType: o,
      xsrfCookieName: o,
      xsrfHeaderName: o,
      onUploadProgress: o,
      onDownloadProgress: o,
      decompress: o,
      maxContentLength: o,
      maxBodyLength: o,
      beforeRedirect: o,
      transport: o,
      httpAgent: o,
      httpsAgent: o,
      cancelToken: o,
      socketPath: o,
      responseEncoding: o,
      validateStatus: a,
      headers: (c, u, d) => i(Yr(c), Yr(u), d, !0),
    };
    return (
      x.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
        const d = l[u] || i,
          p = d(e[u], t[u], u);
        (x.isUndefined(p) && d !== a) || (s[u] = p);
      }),
      s
    );
  }
  const Xa = (e) => {
      const t = Bt({}, e);
      let {
        data: s,
        withXSRFToken: n,
        xsrfHeaderName: i,
        xsrfCookieName: r,
        headers: o,
        auth: a,
      } = t;
      (t.headers = o = Be.from(o)),
        (t.url = qa(
          Ya(t.baseURL, t.url, t.allowAbsoluteUrls),
          e.params,
          e.paramsSerializer,
        )),
        a &&
          o.set(
            "Authorization",
            "Basic " +
              btoa(
                (a.username || "") +
                  ":" +
                  (a.password ? unescape(encodeURIComponent(a.password)) : ""),
              ),
          );
      let l;
      if (x.isFormData(s)) {
        if (Ce.hasStandardBrowserEnv || Ce.hasStandardBrowserWebWorkerEnv)
          o.setContentType(void 0);
        else if ((l = o.getContentType()) !== !1) {
          const [c, ...u] = l
            ? l
                .split(";")
                .map((d) => d.trim())
                .filter(Boolean)
            : [];
          o.setContentType([c || "multipart/form-data", ...u].join("; "));
        }
      }
      if (
        Ce.hasStandardBrowserEnv &&
        (n && x.isFunction(n) && (n = n(t)), n || (n !== !1 && _f(t.url)))
      ) {
        const c = i && r && xf.read(r);
        c && o.set(i, c);
      }
      return t;
    },
    Cf = typeof XMLHttpRequest < "u",
    Pf =
      Cf &&
      function (e) {
        return new Promise(function (s, n) {
          const i = Xa(e);
          let r = i.data;
          const o = Be.from(i.headers).normalize();
          let {
              responseType: a,
              onUploadProgress: l,
              onDownloadProgress: c,
            } = i,
            u,
            d,
            p,
            v,
            f;

          function b() {
            v && v(),
              f && f(),
              i.cancelToken && i.cancelToken.unsubscribe(u),
              i.signal && i.signal.removeEventListener("abort", u);
          }
          let _ = new XMLHttpRequest();
          _.open(i.method.toUpperCase(), i.url, !0), (_.timeout = i.timeout);

          function S() {
            if (!_) return;
            const g = Be.from(
                "getAllResponseHeaders" in _ && _.getAllResponseHeaders(),
              ),
              T = {
                data:
                  !a || a === "text" || a === "json"
                    ? _.responseText
                    : _.response,
                status: _.status,
                statusText: _.statusText,
                headers: g,
                config: e,
                request: _,
              };
            Ka(
              function ($) {
                s($), b();
              },
              function ($) {
                n($), b();
              },
              T,
            ),
              (_ = null);
          }
          "onloadend" in _
            ? (_.onloadend = S)
            : (_.onreadystatechange = function () {
                !_ ||
                  _.readyState !== 4 ||
                  (_.status === 0 &&
                    !(_.responseURL && _.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(S);
              }),
            (_.onabort = function () {
              _ &&
                (n(new ee("Request aborted", ee.ECONNABORTED, e, _)),
                (_ = null));
            }),
            (_.onerror = function () {
              n(new ee("Network Error", ee.ERR_NETWORK, e, _)), (_ = null);
            }),
            (_.ontimeout = function () {
              let w = i.timeout
                ? "timeout of " + i.timeout + "ms exceeded"
                : "timeout exceeded";
              const T = i.transitional || Ga;
              i.timeoutErrorMessage && (w = i.timeoutErrorMessage),
                n(
                  new ee(
                    w,
                    T.clarifyTimeoutError ? ee.ETIMEDOUT : ee.ECONNABORTED,
                    e,
                    _,
                  ),
                ),
                (_ = null);
            }),
            r === void 0 && o.setContentType(null),
            "setRequestHeader" in _ &&
              x.forEach(o.toJSON(), function (w, T) {
                _.setRequestHeader(T, w);
              }),
            x.isUndefined(i.withCredentials) ||
              (_.withCredentials = !!i.withCredentials),
            a && a !== "json" && (_.responseType = i.responseType),
            c && (([p, f] = on(c, !0)), _.addEventListener("progress", p)),
            l &&
              _.upload &&
              (([d, v] = on(l)),
              _.upload.addEventListener("progress", d),
              _.upload.addEventListener("loadend", v)),
            (i.cancelToken || i.signal) &&
              ((u = (g) => {
                _ &&
                  (n(!g || g.type ? new ts(null, e, _) : g),
                  _.abort(),
                  (_ = null));
              }),
              i.cancelToken && i.cancelToken.subscribe(u),
              i.signal &&
                (i.signal.aborted
                  ? u()
                  : i.signal.addEventListener("abort", u)));
          const h = bf(i.url);
          if (h && Ce.protocols.indexOf(h) === -1) {
            n(new ee("Unsupported protocol " + h + ":", ee.ERR_BAD_REQUEST, e));
            return;
          }
          _.send(r || null);
        });
      },
    Af = (e, t) => {
      const { length: s } = (e = e ? e.filter(Boolean) : []);
      if (t || s) {
        let n = new AbortController(),
          i;
        const r = function (c) {
          if (!i) {
            (i = !0), a();
            const u = c instanceof Error ? c : this.reason;
            n.abort(
              u instanceof ee ? u : new ts(u instanceof Error ? u.message : u),
            );
          }
        };
        let o =
          t &&
          setTimeout(() => {
            (o = null), r(new ee(`timeout ${t} of ms exceeded`, ee.ETIMEDOUT));
          }, t);
        const a = () => {
          e &&
            (o && clearTimeout(o),
            (o = null),
            e.forEach((c) => {
              c.unsubscribe
                ? c.unsubscribe(r)
                : c.removeEventListener("abort", r);
            }),
            (e = null));
        };
        e.forEach((c) => c.addEventListener("abort", r));
        const { signal: l } = n;
        return (l.unsubscribe = () => x.asap(a)), l;
      }
    },
    Lf = function* (e, t) {
      let s = e.byteLength;
      if (s < t) {
        yield e;
        return;
      }
      let n = 0,
        i;
      for (; n < s; ) (i = n + t), yield e.slice(n, i), (n = i);
    },
    kf = async function* (e, t) {
      for await (const s of Of(e)) yield* Lf(s, t);
    },
    Of = async function* (e) {
      if (e[Symbol.asyncIterator]) {
        yield* e;
        return;
      }
      const t = e.getReader();
      try {
        for (;;) {
          const { done: s, value: n } = await t.read();
          if (s) break;
          yield n;
        }
      } finally {
        await t.cancel();
      }
    },
    Xr = (e, t, s, n) => {
      const i = kf(e, t);
      let r = 0,
        o,
        a = (l) => {
          o || ((o = !0), n && n(l));
        };
      return new ReadableStream(
        {
          async pull(l) {
            try {
              const { done: c, value: u } = await i.next();
              if (c) {
                a(), l.close();
                return;
              }
              let d = u.byteLength;
              if (s) {
                let p = (r += d);
                s(p);
              }
              l.enqueue(new Uint8Array(u));
            } catch (c) {
              throw (a(c), c);
            }
          },
          cancel(l) {
            return a(l), i.return();
          },
        },
        {
          highWaterMark: 2,
        },
      );
    },
    kn =
      typeof fetch == "function" &&
      typeof Request == "function" &&
      typeof Response == "function",
    Ja = kn && typeof ReadableStream == "function",
    Mf =
      kn &&
      (typeof TextEncoder == "function"
        ? (
            (e) => (t) =>
              e.encode(t)
          )(new TextEncoder())
        : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
    Qa = (e, ...t) => {
      try {
        return !!e(...t);
      } catch {
        return !1;
      }
    },
    If =
      Ja &&
      Qa(() => {
        let e = !1;
        const t = new Request(Ce.origin, {
          body: new ReadableStream(),
          method: "POST",
          get duplex() {
            return (e = !0), "half";
          },
        }).headers.has("Content-Type");
        return e && !t;
      }),
    Jr = 64 * 1024,
    wi = Ja && Qa(() => x.isReadableStream(new Response("").body)),
    an = {
      stream: wi && ((e) => e.body),
    };
  kn &&
    ((e) => {
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
        !an[t] &&
          (an[t] = x.isFunction(e[t])
            ? (s) => s[t]()
            : (s, n) => {
                throw new ee(
                  `Response type '${t}' is not supported`,
                  ee.ERR_NOT_SUPPORT,
                  n,
                );
              });
      });
    })(new Response());
  const Rf = async (e) => {
      if (e == null) return 0;
      if (x.isBlob(e)) return e.size;
      if (x.isSpecCompliantForm(e))
        return (
          await new Request(Ce.origin, {
            method: "POST",
            body: e,
          }).arrayBuffer()
        ).byteLength;
      if (x.isArrayBufferView(e) || x.isArrayBuffer(e)) return e.byteLength;
      if ((x.isURLSearchParams(e) && (e = e + ""), x.isString(e)))
        return (await Mf(e)).byteLength;
    },
    Nf = async (e, t) => {
      const s = x.toFiniteNumber(e.getContentLength());
      return s ?? Rf(t);
    },
    Df =
      kn &&
      (async (e) => {
        let {
          url: t,
          method: s,
          data: n,
          signal: i,
          cancelToken: r,
          timeout: o,
          onDownloadProgress: a,
          onUploadProgress: l,
          responseType: c,
          headers: u,
          withCredentials: d = "same-origin",
          fetchOptions: p,
        } = Xa(e);
        c = c ? (c + "").toLowerCase() : "text";
        let v = Af([i, r && r.toAbortSignal()], o),
          f;
        const b =
          v &&
          v.unsubscribe &&
          (() => {
            v.unsubscribe();
          });
        let _;
        try {
          if (
            l &&
            If &&
            s !== "get" &&
            s !== "head" &&
            (_ = await Nf(u, n)) !== 0
          ) {
            let T = new Request(t, {
                method: "POST",
                body: n,
                duplex: "half",
              }),
              B;
            if (
              (x.isFormData(n) &&
                (B = T.headers.get("content-type")) &&
                u.setContentType(B),
              T.body)
            ) {
              const [$, j] = Wr(_, on(Kr(l)));
              n = Xr(T.body, Jr, $, j);
            }
          }
          x.isString(d) || (d = d ? "include" : "omit");
          const S = "credentials" in Request.prototype;
          f = new Request(t, {
            ...p,
            signal: v,
            method: s.toUpperCase(),
            headers: u.normalize().toJSON(),
            body: n,
            duplex: "half",
            credentials: S ? d : void 0,
          });
          let h = await fetch(f);
          const g = wi && (c === "stream" || c === "response");
          if (wi && (a || (g && b))) {
            const T = {};
            ["status", "statusText", "headers"].forEach((I) => {
              T[I] = h[I];
            });
            const B = x.toFiniteNumber(h.headers.get("content-length")),
              [$, j] = (a && Wr(B, on(Kr(a), !0))) || [];
            h = new Response(
              Xr(h.body, Jr, $, () => {
                j && j(), b && b();
              }),
              T,
            );
          }
          c = c || "text";
          let w = await an[x.findKey(an, c) || "text"](h, e);
          return (
            !g && b && b(),
            await new Promise((T, B) => {
              Ka(T, B, {
                data: w,
                headers: Be.from(h.headers),
                status: h.status,
                statusText: h.statusText,
                config: e,
                request: f,
              });
            })
          );
        } catch (S) {
          throw (
            (b && b(),
            S && S.name === "TypeError" && /Load failed|fetch/i.test(S.message)
              ? Object.assign(new ee("Network Error", ee.ERR_NETWORK, e, f), {
                  cause: S.cause || S,
                })
              : ee.from(S, S && S.code, e, f))
          );
        }
      }),
    Si = {
      http: Xd,
      xhr: Pf,
      fetch: Df,
    };
  x.forEach(Si, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", {
          value: t,
        });
      } catch {}
      Object.defineProperty(e, "adapterName", {
        value: t,
      });
    }
  });
  const Qr = (e) => `- ${e}`,
    Bf = (e) => x.isFunction(e) || e === null || e === !1,
    Za = {
      getAdapter: (e) => {
        e = x.isArray(e) ? e : [e];
        const { length: t } = e;
        let s, n;
        const i = {};
        for (let r = 0; r < t; r++) {
          s = e[r];
          let o;
          if (
            ((n = s),
            !Bf(s) && ((n = Si[(o = String(s)).toLowerCase()]), n === void 0))
          )
            throw new ee(`Unknown adapter '${o}'`);
          if (n) break;
          i[o || "#" + r] = n;
        }
        if (!n) {
          const r = Object.entries(i).map(
            ([a, l]) =>
              `adapter ${a} ` +
              (l === !1
                ? "is not supported by the environment"
                : "is not available in the build"),
          );
          let o = t
            ? r.length > 1
              ? `since :
` +
                r.map(Qr).join(`
`)
              : " " + Qr(r[0])
            : "as no adapter specified";
          throw new ee(
            "There is no suitable adapter to dispatch the request " + o,
            "ERR_NOT_SUPPORT",
          );
        }
        return n;
      },
      adapters: Si,
    };

  function Kn(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new ts(null, e);
  }

  function Zr(e) {
    return (
      Kn(e),
      (e.headers = Be.from(e.headers)),
      (e.data = Wn.call(e, e.transformRequest)),
      ["post", "put", "patch"].indexOf(e.method) !== -1 &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1),
      Za.getAdapter(e.adapter || As.adapter)(e).then(
        function (n) {
          return (
            Kn(e),
            (n.data = Wn.call(e, e.transformResponse, n)),
            (n.headers = Be.from(n.headers)),
            n
          );
        },
        function (n) {
          return (
            Wa(n) ||
              (Kn(e),
              n &&
                n.response &&
                ((n.response.data = Wn.call(
                  e,
                  e.transformResponse,
                  n.response,
                )),
                (n.response.headers = Be.from(n.response.headers)))),
            Promise.reject(n)
          );
        },
      )
    );
  }
  const el = "1.9.0",
    On = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
      On[e] = function (n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    },
  );
  const eo = {};
  On.transitional = function (t, s, n) {
    function i(r, o) {
      return (
        "[Axios v" +
        el +
        "] Transitional option '" +
        r +
        "'" +
        o +
        (n ? ". " + n : "")
      );
    }
    return (r, o, a) => {
      if (t === !1)
        throw new ee(
          i(o, " has been removed" + (s ? " in " + s : "")),
          ee.ERR_DEPRECATED,
        );
      return (
        s &&
          !eo[o] &&
          ((eo[o] = !0),
          console.warn(
            i(
              o,
              " has been deprecated since v" +
                s +
                " and will be removed in the near future",
            ),
          )),
        t ? t(r, o, a) : !0
      );
    };
  };
  On.spelling = function (t) {
    return (s, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
  };

  function Ff(e, t, s) {
    if (typeof e != "object")
      throw new ee("options must be an object", ee.ERR_BAD_OPTION_VALUE);
    const n = Object.keys(e);
    let i = n.length;
    for (; i-- > 0; ) {
      const r = n[i],
        o = t[r];
      if (o) {
        const a = e[r],
          l = a === void 0 || o(a, r, e);
        if (l !== !0)
          throw new ee(
            "option " + r + " must be " + l,
            ee.ERR_BAD_OPTION_VALUE,
          );
        continue;
      }
      if (s !== !0) throw new ee("Unknown option " + r, ee.ERR_BAD_OPTION);
    }
  }
  const qs = {
      assertOptions: Ff,
      validators: On,
    },
    tt = qs.validators;
  let It = class {
    constructor(t) {
      (this.defaults = t || {}),
        (this.interceptors = {
          request: new Gr(),
          response: new Gr(),
        });
    }
    async request(t, s) {
      try {
        return await this._request(t, s);
      } catch (n) {
        if (n instanceof Error) {
          let i = {};
          Error.captureStackTrace
            ? Error.captureStackTrace(i)
            : (i = new Error());
          const r = i.stack ? i.stack.replace(/^.+\n/, "") : "";
          try {
            n.stack
              ? r &&
                !String(n.stack).endsWith(r.replace(/^.+\n.+\n/, "")) &&
                (n.stack +=
                  `
` + r)
              : (n.stack = r);
          } catch {}
        }
        throw n;
      }
    }
    _request(t, s) {
      typeof t == "string" ? ((s = s || {}), (s.url = t)) : (s = t || {}),
        (s = Bt(this.defaults, s));
      const { transitional: n, paramsSerializer: i, headers: r } = s;
      n !== void 0 &&
        qs.assertOptions(
          n,
          {
            silentJSONParsing: tt.transitional(tt.boolean),
            forcedJSONParsing: tt.transitional(tt.boolean),
            clarifyTimeoutError: tt.transitional(tt.boolean),
          },
          !1,
        ),
        i != null &&
          (x.isFunction(i)
            ? (s.paramsSerializer = {
                serialize: i,
              })
            : qs.assertOptions(
                i,
                {
                  encode: tt.function,
                  serialize: tt.function,
                },
                !0,
              )),
        s.allowAbsoluteUrls !== void 0 ||
          (this.defaults.allowAbsoluteUrls !== void 0
            ? (s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
            : (s.allowAbsoluteUrls = !0)),
        qs.assertOptions(
          s,
          {
            baseUrl: tt.spelling("baseURL"),
            withXsrfToken: tt.spelling("withXSRFToken"),
          },
          !0,
        ),
        (s.method = (s.method || this.defaults.method || "get").toLowerCase());
      let o = r && x.merge(r.common, r[s.method]);
      r &&
        x.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (f) => {
            delete r[f];
          },
        ),
        (s.headers = Be.concat(o, r));
      const a = [];
      let l = !0;
      this.interceptors.request.forEach(function (b) {
        (typeof b.runWhen == "function" && b.runWhen(s) === !1) ||
          ((l = l && b.synchronous), a.unshift(b.fulfilled, b.rejected));
      });
      const c = [];
      this.interceptors.response.forEach(function (b) {
        c.push(b.fulfilled, b.rejected);
      });
      let u,
        d = 0,
        p;
      if (!l) {
        const f = [Zr.bind(this), void 0];
        for (
          f.unshift.apply(f, a),
            f.push.apply(f, c),
            p = f.length,
            u = Promise.resolve(s);
          d < p;

        )
          u = u.then(f[d++], f[d++]);
        return u;
      }
      p = a.length;
      let v = s;
      for (d = 0; d < p; ) {
        const f = a[d++],
          b = a[d++];
        try {
          v = f(v);
        } catch (_) {
          b.call(this, _);
          break;
        }
      }
      try {
        u = Zr.call(this, v);
      } catch (f) {
        return Promise.reject(f);
      }
      for (d = 0, p = c.length; d < p; ) u = u.then(c[d++], c[d++]);
      return u;
    }
    getUri(t) {
      t = Bt(this.defaults, t);
      const s = Ya(t.baseURL, t.url, t.allowAbsoluteUrls);
      return qa(s, t.params, t.paramsSerializer);
    }
  };
  x.forEach(["delete", "get", "head", "options"], function (t) {
    It.prototype[t] = function (s, n) {
      return this.request(
        Bt(n || {}, {
          method: t,
          url: s,
          data: (n || {}).data,
        }),
      );
    };
  });
  x.forEach(["post", "put", "patch"], function (t) {
    function s(n) {
      return function (r, o, a) {
        return this.request(
          Bt(a || {}, {
            method: t,
            headers: n
              ? {
                  "Content-Type": "multipart/form-data",
                }
              : {},
            url: r,
            data: o,
          }),
        );
      };
    }
    (It.prototype[t] = s()), (It.prototype[t + "Form"] = s(!0));
  });
  let Vf = class tl {
    constructor(t) {
      if (typeof t != "function")
        throw new TypeError("executor must be a function.");
      let s;
      this.promise = new Promise(function (r) {
        s = r;
      });
      const n = this;
      this.promise.then((i) => {
        if (!n._listeners) return;
        let r = n._listeners.length;
        for (; r-- > 0; ) n._listeners[r](i);
        n._listeners = null;
      }),
        (this.promise.then = (i) => {
          let r;
          const o = new Promise((a) => {
            n.subscribe(a), (r = a);
          }).then(i);
          return (
            (o.cancel = function () {
              n.unsubscribe(r);
            }),
            o
          );
        }),
        t(function (r, o, a) {
          n.reason || ((n.reason = new ts(r, o, a)), s(n.reason));
        });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(t) {
      if (this.reason) {
        t(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
    }
    unsubscribe(t) {
      if (!this._listeners) return;
      const s = this._listeners.indexOf(t);
      s !== -1 && this._listeners.splice(s, 1);
    }
    toAbortSignal() {
      const t = new AbortController(),
        s = (n) => {
          t.abort(n);
        };
      return (
        this.subscribe(s),
        (t.signal.unsubscribe = () => this.unsubscribe(s)),
        t.signal
      );
    }
    static source() {
      let t;
      return {
        token: new tl(function (i) {
          t = i;
        }),
        cancel: t,
      };
    }
  };

  function Hf(e) {
    return function (s) {
      return e.apply(null, s);
    };
  }

  function $f(e) {
    return x.isObject(e) && e.isAxiosError === !0;
  }
  const _i = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(_i).forEach(([e, t]) => {
    _i[t] = e;
  });

  function sl(e) {
    const t = new It(e),
      s = Ma(It.prototype.request, t);
    return (
      x.extend(s, It.prototype, t, {
        allOwnKeys: !0,
      }),
      x.extend(s, t, null, {
        allOwnKeys: !0,
      }),
      (s.create = function (i) {
        return sl(Bt(e, i));
      }),
      s
    );
  }
  const he = sl(As);
  he.Axios = It;
  he.CanceledError = ts;
  he.CancelToken = Vf;
  he.isCancel = Wa;
  he.VERSION = el;
  he.toFormData = Ln;
  he.AxiosError = ee;
  he.Cancel = he.CanceledError;
  he.all = function (t) {
    return Promise.all(t);
  };
  he.spread = Hf;
  he.isAxiosError = $f;
  he.mergeConfig = Bt;
  he.AxiosHeaders = Be;
  he.formToJSON = (e) => Ua(x.isHTMLForm(e) ? new FormData(e) : e);
  he.getAdapter = Za.getAdapter;
  he.HttpStatusCode = _i;
  he.default = he;
  const {
      Axios: Yg,
      AxiosError: Xg,
      CanceledError: Jg,
      isCancel: Qg,
      CancelToken: Zg,
      VERSION: ev,
      all: tv,
      Cancel: sv,
      isAxiosError: nv,
      spread: iv,
      toFormData: rv,
      AxiosHeaders: ov,
      HttpStatusCode: av,
      formToJSON: lv,
      getAdapter: cv,
      mergeConfig: uv,
    } = he,
    Ls = (e, t) => {
      const s = e.__vccOpts || e;
      for (const [n, i] of t) s[n] = i;
      return s;
    },
    jf = {
      props: {
        value: {
          type: Number,
          default: 0,
        },
        pageCount: {
          type: Number,
          required: !0,
        },
        forcePage: {
          type: Number,
          default: void 0,
        },
        clickHandler: {
          type: Function,
          default: () => {},
        },
        pageRange: {
          type: Number,
          default: 3,
        },
        marginPages: {
          type: Number,
          default: 1,
        },
        prevText: {
          type: String,
          default: "Prev",
        },
        nextText: {
          type: String,
          default: "Next",
        },
        breakViewText: {
          type: String,
          default: "…",
        },
        containerClass: {
          type: String,
          default: "",
        },
        pageClass: {
          type: String,
          default: "",
        },
        pageLinkClass: {
          type: String,
          default: "",
        },
        prevClass: {
          type: String,
          default: "",
        },
        prevLinkClass: {
          type: String,
          default: "",
        },
        nextClass: {
          type: String,
          default: "",
        },
        nextLinkClass: {
          type: String,
          default: "",
        },
        breakViewClass: {
          type: String,
          default: "",
        },
        breakViewLinkClass: {
          type: String,
          default: "",
        },
        activeClass: {
          type: String,
          default: "active",
        },
        disabledClass: {
          type: String,
          default: "disabled",
        },
        firstLastButton: {
          type: Boolean,
          default: !1,
        },
        firstButtonText: {
          type: String,
          default: "First",
        },
        lastButtonText: {
          type: String,
          default: "Last",
        },
        hidePrevNext: {
          type: Boolean,
          default: !1,
        },
      },
      beforeUpdate() {
        this.forcePage !== void 0 &&
          this.forcePage !== this.selected &&
          (this.selected = this.forcePage);
      },
      computed: {
        selected: {
          get: function () {
            return this.innerValue;
          },
          set: function (e) {
            this.innerValue = e;
          },
        },
        pages: function () {
          let e = {};
          if (this.pageCount <= this.pageRange)
            for (let t = 0; t < this.pageCount; t++) {
              let s = {
                index: t,
                content: t + 1,
                selected: t === this.selected - 1,
              };
              e[t] = s;
            }
          else {
            const t = Math.floor(this.pageRange / 2);
            let s = (o) => {
                let a = {
                  index: o,
                  content: o + 1,
                  selected: o === this.selected - 1,
                };
                e[o] = a;
              },
              n = (o) => {
                let a = {
                  disabled: !0,
                  breakView: !0,
                };
                e[o] = a;
              };
            for (let o = 0; o < this.marginPages; o++) s(o);
            let i = 0;
            this.selected - t > 0 && (i = this.selected - 1 - t);
            let r = i + this.pageRange - 1;
            r >= this.pageCount &&
              ((r = this.pageCount - 1), (i = r - this.pageRange + 1));
            for (let o = i; o <= r && o <= this.pageCount - 1; o++) s(o);
            i > this.marginPages && n(i - 1),
              r + 1 < this.pageCount - this.marginPages && n(r + 1);
            for (
              let o = this.pageCount - 1;
              o >= this.pageCount - this.marginPages;
              o--
            )
              s(o);
          }
          return e;
        },
      },
      data() {
        return {
          innerValue: 1,
        };
      },
      methods: {
        handlePageSelected(e) {
          this.selected !== e &&
            ((this.innerValue = e),
            this.$emit("input", e),
            this.clickHandler(e));
        },
        prevPage() {
          this.selected <= 1 || this.handlePageSelected(this.selected - 1);
        },
        nextPage() {
          this.selected >= this.pageCount ||
            this.handlePageSelected(this.selected + 1);
        },
        firstPageSelected() {
          return this.selected === 1;
        },
        lastPageSelected() {
          return this.selected === this.pageCount || this.pageCount === 0;
        },
        selectFirstPage() {
          this.selected <= 1 || this.handlePageSelected(1);
        },
        selectLastPage() {
          this.selected >= this.pageCount ||
            this.handlePageSelected(this.pageCount);
        },
      },
    },
    zf = ["tabindex", "innerHTML"],
    qf = ["tabindex", "innerHTML"],
    Gf = ["onClick", "onKeyup"],
    Uf = ["tabindex", "innerHTML"],
    Wf = ["tabindex", "innerHTML"];

  function Kf(e, t, s, n, i, r) {
    return (
      q(),
      U(
        "ul",
        {
          class: me(s.containerClass),
        },
        [
          s.firstLastButton
            ? (q(),
              U(
                "li",
                {
                  key: 0,
                  class: me([
                    s.pageClass,
                    r.firstPageSelected() ? s.disabledClass : "",
                  ]),
                },
                [
                  R(
                    "a",
                    {
                      class: me(s.pageLinkClass),
                      onClick: t[0] || (t[0] = (o) => r.selectFirstPage()),
                      onKeyup:
                        t[1] ||
                        (t[1] = ht((o) => r.selectFirstPage(), ["enter"])),
                      tabindex: r.firstPageSelected() ? -1 : 0,
                      innerHTML: s.firstButtonText,
                    },
                    null,
                    42,
                    zf,
                  ),
                ],
                2,
              ))
            : ne("", !0),
          r.firstPageSelected() && s.hidePrevNext
            ? ne("", !0)
            : (q(),
              U(
                "li",
                {
                  key: 1,
                  class: me([
                    s.prevClass,
                    r.firstPageSelected() ? s.disabledClass : "",
                  ]),
                },
                [
                  R(
                    "a",
                    {
                      onClick: t[2] || (t[2] = (o) => r.prevPage()),
                      onKeyup:
                        t[3] || (t[3] = ht((o) => r.prevPage(), ["enter"])),
                      class: me(s.prevLinkClass),
                      tabindex: r.firstPageSelected() ? -1 : 0,
                      innerHTML: s.prevText,
                    },
                    null,
                    42,
                    qf,
                  ),
                ],
                2,
              )),
          (q(!0),
          U(
            ge,
            null,
            mt(
              r.pages,
              (o) => (
                q(),
                U(
                  "li",
                  {
                    key: o.id,
                    class: me([
                      s.pageClass,
                      o.selected ? s.activeClass : "",
                      o.disabled ? s.disabledClass : "",
                      o.breakView ? s.breakViewClass : "",
                    ]),
                  },
                  [
                    o.breakView
                      ? (q(),
                        U(
                          "a",
                          {
                            key: 0,
                            class: me([s.pageLinkClass, s.breakViewLinkClass]),
                            tabindex: "0",
                          },
                          [
                            kc(e.$slots, "breakViewContent", {}, () => [
                              pt(fe(s.breakViewText), 1),
                            ]),
                          ],
                          2,
                        ))
                      : o.disabled
                        ? (q(),
                          U(
                            "a",
                            {
                              key: 1,
                              class: me(s.pageLinkClass),
                              tabindex: "0",
                            },
                            fe(o.content),
                            3,
                          ))
                        : (q(),
                          U(
                            "a",
                            {
                              key: 2,
                              onClick: (a) => r.handlePageSelected(o.index + 1),
                              onKeyup: ht(
                                (a) => r.handlePageSelected(o.index + 1),
                                ["enter"],
                              ),
                              class: me(s.pageLinkClass),
                              tabindex: "0",
                            },
                            fe(o.content),
                            43,
                            Gf,
                          )),
                  ],
                  2,
                )
              ),
            ),
            128,
          )),
          r.lastPageSelected() && s.hidePrevNext
            ? ne("", !0)
            : (q(),
              U(
                "li",
                {
                  key: 2,
                  class: me([
                    s.nextClass,
                    r.lastPageSelected() ? s.disabledClass : "",
                  ]),
                },
                [
                  R(
                    "a",
                    {
                      onClick: t[4] || (t[4] = (o) => r.nextPage()),
                      onKeyup:
                        t[5] || (t[5] = ht((o) => r.nextPage(), ["enter"])),
                      class: me(s.nextLinkClass),
                      tabindex: r.lastPageSelected() ? -1 : 0,
                      innerHTML: s.nextText,
                    },
                    null,
                    42,
                    Uf,
                  ),
                ],
                2,
              )),
          s.firstLastButton
            ? (q(),
              U(
                "li",
                {
                  key: 3,
                  class: me([
                    s.pageClass,
                    r.lastPageSelected() ? s.disabledClass : "",
                  ]),
                },
                [
                  R(
                    "a",
                    {
                      onClick: t[6] || (t[6] = (o) => r.selectLastPage()),
                      onKeyup:
                        t[7] ||
                        (t[7] = ht((o) => r.selectLastPage(), ["enter"])),
                      class: me(s.pageLinkClass),
                      tabindex: r.lastPageSelected() ? -1 : 0,
                      innerHTML: s.lastButtonText,
                    },
                    null,
                    42,
                    Wf,
                  ),
                ],
                2,
              ))
            : ne("", !0),
        ],
        2,
      )
    );
  }
  const nl = Ls(jf, [["render", Kf]]),
    Yf = {
      props: {
        config: {
          type: Object,
          default() {
            return {};
          },
        },
      },
      components: {
        SearchPagination: nl,
      },
      data() {
        return {
          posts: [],
          categories: [],
          years: [],
          params: {
            page: 1,
            per_page: 12,
            orderby: "date",
            order: "desc",
          },
          keywords: "",
          selectedCategories: "0",
          selectedYear: "0",
          loading: !1,
          total: 0,
          totalPages: 0,
          staggerDelay: 50,
          paginationType: "loadMore",
          keywordSearch: !1,
        };
      },
      mounted() {
        this.config.paginationType &&
          (this.paginationType = this.config.paginationType),
          this.config.defaultCategoryID &&
            (this.isNumeric(this.config.defaultCategoryID) &&
              (this.selectedCategories = this.config.defaultCategoryID),
            this.selectedCategories !== 0
              ? (this.params.categories = this.selectedCategories)
              : delete this.params.categories,
            this.selectedYear !== 0
              ? (this.params.year = this.selectedYear)
              : delete this.params.year),
          this.getYears(),
          this.getCategories(),
          this.getPosts();
      },
      computed: {
        showMore() {
          return this.params.page < this.totalPages || this.loading;
        },
        showing() {
          return (
            "<span>" +
            ((this.params.page - 1) * this.params.per_page +
              1 +
              "</span> to <span>" +
              ((this.params.page - 1) * this.params.per_page +
                this.params.per_page) +
              "</span> of <span>" +
              this.total +
              "</span> results")
          );
        },
      },
      methods: {
        isNumeric: function (e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        },
        async getCategories() {
          (this.loading = !0),
            await this.axios
              .get("categories", {
                perPage: -1,
              })
              .then((e) => {
                this.categories = e.data;
              }),
            (this.loading = !1);
        },
        async getYears() {
          (this.loading = !0),
            await this.axios
              .get("news_years", {
                perPage: -1,
              })
              .then((e) => {
                this.years = e.data;
              }),
            (this.loading = !1);
        },
        async getPosts() {
          this.loading = !0;
          const e = {
            ...this.params,
          };
          console.log(e),
            await this.axios
              .get("posts", {
                params: e,
              })
              .then((t) => {
                const s = [];
                t.data.forEach((n) => {
                  s.push({
                    title: n.title.rendered,
                    excerpt: n.excerpt.rendered,
                    date: n.formatted_date,
                    customFields: n.custom_fields,
                  });
                }),
                  (this.posts = this.posts.concat(s)),
                  (this.total = parseInt(t.headers["x-wp-total"], 10)),
                  (this.totalPages = parseInt(
                    t.headers["x-wp-totalpages"],
                    10,
                  ));
              }),
            (this.loading = !1);
        },
        async getMorePosts() {
          (this.params.page += 1), (this.loading = !0);
          const e = {
            ...this.params,
          };
          await this.axios
            .get("posts", {
              params: e,
            })
            .then((t) => {
              const s = [];
              t.data.forEach((n) => {
                s.push({
                  link: n.link,
                  title: n.title.rendered,
                  excerpt: n.excerpt.rendered,
                  date: n.formatted_date,
                  customFields: n.custom_fields,
                });
              }),
                (this.posts = this.posts.concat(s));
            }),
            (this.loading = !1);
        },
        filterPostsbyYear() {
          (this.posts = []),
            (this.params.page = 1),
            this.selectedYear !== 0
              ? (this.params.year = this.selectedYear)
              : delete this.params.year,
            console.log(this.selectedYear),
            this.getPosts();
        },
        filterPosts(e = 0) {
          (this.posts = []),
            this.isNumeric(e) && (this.selectedCategories = e),
            this.selectedCategories !== 0
              ? (this.params.categories = this.selectedCategories)
              : delete this.params.categories,
            console.log(this.params),
            (this.params.page = 1),
            this.getPosts();
        },
        filterPaginationPosts() {
          (this.posts = []), this.getPosts();
        },
        beforeEnter(e) {
          e.style.opacity = 0;
        },
        onEnter(e) {
          const t = e.dataset.index * this.staggerDelay;
          setTimeout(() => {
            e.style.opacity = 1;
          }, t);
        },
        onLeave(e) {
          e.style.display = "none";
        },
        paginationCallback(e) {
          (this.params.page = e), this.filterPaginationPosts();
        },
      },
    },
    Xf = {
      class: "news-search",
    },
    Jf = {
      class: "posts-search__form",
    },
    Qf = {
      class: "filters-container",
    },
    Zf = {
      class: "filters-container__col1",
    },
    ep = {
      class: "filters",
    },
    tp = ["onClick", "innerHTML"],
    sp = {
      class: "filters-container__col2",
    },
    np = {
      class: "select-year-container",
    },
    ip = ["value"],
    rp = {
      key: 0,
      class: "posts-search__results-info",
    },
    op = {
      key: 1,
      class: "posts-search__results-info",
    },
    ap = {
      key: 0,
      class: "posts-search__no-results",
    },
    lp = {
      class: "news-item-container news-item-container--yellow",
    },
    cp = {
      class: "content-container",
    },
    up = {
      class: "data-container",
    },
    dp = {
      class: "data-container__col1",
    },
    fp = {
      class: "card-details",
    },
    pp = {
      class: "card-details",
    },
    hp = {
      class: "data-container__col2",
    },
    mp = {
      key: 0,
      class: "card-tag",
    },
    gp = ["href"],
    vp = {
      class: "card-title",
    },
    yp = {
      class: "image-container",
    },
    bp = ["src", "srcset", "alt"],
    wp = ["href"],
    Sp = ["href"],
    _p = {
      key: 1,
      class: "posts-search__loading-spinner",
    },
    xp = {
      key: 2,
      class: "pagination-wrapper",
    },
    Tp = {
      key: 3,
      class: "posts-search__load-more",
    };

  function Ep(e, t, s, n, i, r) {
    const o = ta("searchPagination");
    return (
      q(),
      U("div", Xf, [
        R("div", Jf, [
          t[11] ||
            (t[11] = R(
              "div",
              {
                class: "form",
              },
              null,
              -1,
            )),
          R("div", Qf, [
            R("div", Zf, [
              R("ul", ep, [
                R("li", null, [
                  R(
                    "div",
                    {
                      class: me([
                        "name",
                        this.selectedCategories == 0 ? "active" : "",
                      ]),
                      onClick: t[0] || (t[0] = (a) => r.filterPosts(0)),
                    },
                    " All ",
                    2,
                  ),
                ]),
                (q(!0),
                U(
                  ge,
                  null,
                  mt(
                    i.categories,
                    (a) => (
                      q(),
                      U(
                        "li",
                        {
                          key: a.id,
                        },
                        [
                          R(
                            "div",
                            {
                              class: me([
                                "name",
                                a.id == this.selectedCategories ? "active" : "",
                              ]),
                              onClick: (l) => r.filterPosts(a.id),
                              innerHTML: a.name,
                            },
                            null,
                            10,
                            tp,
                          ),
                        ],
                      )
                    ),
                  ),
                  128,
                )),
              ]),
            ]),
            R("div", sp, [
              R("div", np, [
                Go(
                  R(
                    "select",
                    {
                      "aria-label": selectYearText,
                      id: "year",
                      name: "year",
                      class: "filter-input",
                      onChange: t[1] || (t[1] = (a) => r.filterPostsbyYear()),
                      "onUpdate:modelValue":
                        t[2] || (t[2] = (a) => (this.selectedYear = a)),
                    },
                    [
                      t[5] ||
                        (t[5] = R(
                          "option",
                          {
                            value: "0",
                          },
                          selectYearText,
                          -1,
                        )),
                      (q(!0),
                      U(
                        ge,
                        null,
                        mt(
                          i.years,
                          (a) => (
                            q(),
                            U(
                              "option",
                              {
                                key: a,
                                value: a,
                              },
                              fe(a),
                              9,
                              ip,
                            )
                          ),
                        ),
                        128,
                      )),
                    ],
                    544,
                  ),
                  [[Zu, this.selectedYear]],
                ),
              ]),
            ]),
          ]),
          this.paginationType != "loadMore" && i.total != 0 && !i.loading
            ? (q(),
              U("div", rp, [
                t[6] || (t[6] = pt(showingText)),
                R(
                  "span",
                  null,
                  fe((this.params.page - 1) * this.params.per_page + 1) +
                    " - " +
                    fe(
                      (this.params.page - 1) * this.params.per_page +
                        this.params.per_page,
                    ),
                  1,
                ),
                t[7] || (t[7] = pt(" of ")),
                R("span", null, fe(this.total), 1),
                t[8] || (t[8] = pt(resultsText)),
              ]))
            : ne("", !0),
          this.paginationType == "loadMore" && i.total != 0 && !i.loading
            ? (q(),
              U("div", op, [
                t[9] || (t[9] = pt(showingText)),
                R("span", null, fe(this.total), 1),
                t[10] || (t[10] = pt(resultsText)),
              ]))
            : ne("", !0),
        ]),
        i.total == 0 && !i.loading
          ? (q(),
            U(
              "div",
              ap,
              " Sorry, there are no news that match the above criteria. ",
            ))
          : ne("", !0),
        Te(
          Gi,
          {
            name: "stagged-fade",
            tag: "div",
            class: "posts-search__results",
          },
          {
            default: wn(() => [
              (q(!0),
              U(
                ge,
                null,
                mt(
                  i.posts,
                  (a, l) => (
                    q(),
                    U(
                      "div",
                      {
                        key: l,
                        class: "posts-search__post",
                      },
                      [
                        R("div", lp, [
                          R("div", cp, [
                            R("div", up, [
                              R("div", dp, [
                                R(
                                  "p",
                                  fp,
                                  fe(a.customFields.formatted_date),
                                  1,
                                ),
                                R(
                                  "p",
                                  pp,
                                  fe(a.customFields.mins_read) + minReadText,
                                  1,
                                ),
                              ]),
                              R("div", hp, [
                                a.customFields.post_category
                                  ? (q(),
                                    U(
                                      "div",
                                      mp,
                                      fe(a.customFields.post_category),
                                      1,
                                    ))
                                  : ne("", !0),
                              ]),
                            ]),
                            R(
                              "a",
                              {
                                href: a.customFields.post_link,
                              },
                              [R("h3", vp, fe(a.title), 1)],
                              8,
                              gp,
                            ),
                          ]),
                          R("div", yp, [
                            a.customFields.featured_image_src
                              ? (q(),
                                U(
                                  "img",
                                  {
                                    key: 0,
                                    src: a.customFields.featured_image_src,
                                    srcset:
                                      a.customFields.featured_image_srcset,
                                    sizes: "(max-width: 480px) 100vw, 50vw",
                                    alt: a.customFields.featured_image_alt,
                                    loading: "lazy",
                                  },
                                  null,
                                  8,
                                  bp,
                                ))
                              : ne("", !0),
                            a.customFields.post_link_type == "internal"
                              ? (q(),
                                U(
                                  "a",
                                  {
                                    key: 1,
                                    class:
                                      "buttonV2 buttonV2--icon buttonV2--icon--small buttonV2--icon--small--arrow-right buttonV2--yellow-black-important",
                                    href: a.customFields.post_link,
                                  },
                                  "Read",
                                  8,
                                  wp,
                                ))
                              : ne("", !0),
                            a.customFields.post_link_type != "internal"
                              ? (q(),
                                U(
                                  "a",
                                  {
                                    key: 2,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    class:
                                      "buttonV2 buttonV2--icon buttonV2--icon--small buttonV2--icon--small--external-link buttonV2--yellow-black-important",
                                    href: a.customFields.post_link,
                                  },
                                  "Read",
                                  8,
                                  Sp,
                                ))
                              : ne("", !0),
                          ]),
                        ]),
                      ],
                    )
                  ),
                ),
                128,
              )),
            ]),
            _: 1,
          },
        ),
        i.loading ? (q(), U("div", _p)) : ne("", !0),
        this.paginationType != "loadMore"
          ? (q(),
            U("div", xp, [
              this.totalPages > 1
                ? (q(),
                  Nt(
                    o,
                    {
                      key: 0,
                      modelValue: i.params.page,
                      "onUpdate:modelValue":
                        t[3] || (t[3] = (a) => (i.params.page = a)),
                      "page-count": i.totalPages,
                      "page-range": 3,
                      "margin-pages": 2,
                      "click-handler": r.paginationCallback,
                      "prev-text": "",
                      "next-text": "",
                      "container-class": "pagination",
                      "page-class": "pagination__item",
                      "next-link-class": "pagination__next",
                      "prev-link-class": "pagination__prev",
                    },
                    null,
                    8,
                    ["modelValue", "page-count", "click-handler"],
                  ))
                : ne("", !0),
            ]))
          : ne("", !0),
        !i.loading && this.paginationType == "loadMore" && r.showMore
          ? (q(),
            U("div", Tp, [
              R(
                "div",
                {
                  onClick:
                    t[4] ||
                    (t[4] = (...a) => r.getMorePosts && r.getMorePosts(...a)),
                  class: "buttonV2 buttonV2--icon buttonV2--icon--plus",
                },
                " Load more ",
              ),
            ]))
          : ne("", !0),
      ])
    );
  }
  const Cp = Ls(Yf, [["render", Ep]]),
    Pp = {
      props: {
        config: {
          type: Object,
          default() {
            return {};
          },
        },
      },
      components: {
        SearchPagination: nl,
      },
      data() {
        return {
          posts: [],
          params: {
            page: 1,
            per_page: 12,
            orderby: "date",
            order: "desc",
          },
          keywords: "",
          categories: [],
          selectedCategories: "0",
          loading: !1,
          total: 0,
          totalPages: 0,
          staggerDelay: 50,
          paginationType: "loadMore",
          keywordSearch: !1,
        };
      },
      mounted() {
        this.config.paginationType &&
          (this.paginationType = this.config.paginationType),
          this.getCategories(),
          this.getPosts();
      },
      computed: {
        showMore() {
          return this.params.page < this.totalPages || this.loading;
        },
        showing() {
          return (
            "<span>" +
            ((this.params.page - 1) * this.params.per_page +
              1 +
              "</span> to <span>" +
              ((this.params.page - 1) * this.params.per_page +
                this.params.per_page) +
              "</span> of <span>" +
              this.total +
              "</span> " +
              resultsText)
          );
        },
      },
      methods: {
        isNumeric: function (e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        },
        async getCategories() {
          (this.loading = !0),
            await this.axios
              .get("event_categories", {
                perPage: -1,
              })
              .then((e) => {
                this.categories = e.data;
              }),
            (this.loading = !1);
        },
        async getPosts() {
          this.loading = !0;
          const e = {
            ...this.params,
          };
          await this.axios
            .get("past_events", {
              params: e,
            })
            .then((t) => {
              const s = [];
              t.data.forEach((n) => {
                n.title &&
                  (console.log(n.title),
                  s.push({
                    title: n.title,
                    item_date: n.item_date,
                    item_time: n.item_time,
                    location: n.location,
                    duration: n.duration,
                    external_url_link: n.external_url_link,
                    post_link: n.post_link,
                    event_category: n.category,
                  })),
                  n.statsTotal && (this.total = parseInt(n.statsTotal, 10)),
                  n.statsTotalPages &&
                    (this.totalPages = parseInt(n.statsTotalPages, 10));
              }),
                (this.posts = this.posts.concat(s)),
                console.log(this.total),
                console.log(this.totalPages);
            }),
            (this.loading = !1);
        },
        async getMorePosts() {
          (this.params.page += 1), (this.loading = !0);
          const e = {
            ...this.params,
          };
          await this.axios
            .get("past_events", {
              params: e,
            })
            .then((t) => {
              const s = [];
              t.data.forEach((n) => {
                n.title &&
                  (console.log(n.title),
                  s.push({
                    title: n.title,
                    item_date: n.item_date,
                    item_time: n.item_time,
                    location: n.location,
                    duration: n.duration,
                    external_url_link: n.external_url_link,
                    post_link: n.post_link,
                    event_category: n.category,
                  }));
              }),
                (this.posts = this.posts.concat(s));
            }),
            (this.loading = !1);
        },
        filterPosts(e = 0) {
          (this.posts = []),
            this.isNumeric(e) && (this.selectedCategories = e),
            this.selectedCategories !== 0
              ? (this.params.event_categories = this.selectedCategories)
              : delete this.params.event_categories,
            (this.params.page = 1),
            this.getPosts();
        },
        filterPaginationPosts() {
          (this.posts = []), this.getPosts();
        },
        beforeEnter(e) {
          e.style.opacity = 0;
        },
        onEnter(e) {
          const t = e.dataset.index * this.staggerDelay;
          setTimeout(() => {
            e.style.opacity = 1;
          }, t);
        },
        onLeave(e) {
          e.style.display = "none";
        },
        paginationCallback(e) {
          (this.params.page = e), this.filterPaginationPosts();
        },
      },
    },
    Ap = {
      class: "posts-search",
    },
    Lp = {
      class: "posts-search__form",
    },
    kp = {
      class: "filters-container",
    },
    Op = {
      class: "filters-container__col1",
    },
    Mp = {
      class: "filters",
    },
    Ip = ["onClick", "innerHTML"],
    Rp = {
      key: 0,
      class: "posts-search__no-results",
    },
    Np = {
      class: "events-lister-container__col1",
    },
    Dp = {
      key: 0,
      class: "card-tag",
    },
    Bp = {
      key: 1,
      class: "card-details",
    },
    Fp = {
      key: 2,
      class: "card-details",
    },
    Vp = {
      key: 3,
      class: "card-details",
    },
    Hp = {
      key: 4,
      class: "card-details",
    },
    $p = {
      class: "events-lister-container__col2",
    },
    jp = ["href", "target"],
    zp = ["innerHTML"],
    qp = {
      class: "events-lister-container__col3",
    },
    Gp = ["target", "href"],
    Up = {
      key: 1,
      class: "posts-search__loading-spinner",
    },
    Wp = {
      key: 2,
      class: "pagination-wrapper",
    },
    Kp = {
      key: 3,
      class: "posts-search__load-more",
    };

  function Yp(e, t, s, n, i, r) {
    const o = ta("searchPagination");
    return (
      q(),
      U("div", Ap, [
        R("div", Lp, [
          t[4] ||
            (t[4] = R(
              "div",
              {
                class: "form",
              },
              null,
              -1,
            )),
          R("div", kp, [
            R("div", Op, [
              R("ul", Mp, [
                R("li", null, [
                  R(
                    "div",
                    {
                      class: me([
                        "name",
                        this.selectedCategories == "0" ? "active" : "",
                      ]),
                      onClick: t[0] || (t[0] = (a) => r.filterPosts(0)),
                    },
                    " All ",
                    2,
                  ),
                ]),
                (q(!0),
                U(
                  ge,
                  null,
                  mt(
                    i.categories,
                    (a) => (
                      q(),
                      U(
                        "li",
                        {
                          key: a.id,
                        },
                        [
                          R(
                            "div",
                            {
                              class: me([
                                "name",
                                a.id == this.selectedCategories ? "active" : "",
                              ]),
                              onClick: (l) => r.filterPosts(a.id),
                              innerHTML: a.name,
                            },
                            null,
                            10,
                            Ip,
                          ),
                        ],
                      )
                    ),
                  ),
                  128,
                )),
              ]),
            ]),
            t[3] ||
              (t[3] = R(
                "div",
                {
                  class: "filters-container__col1",
                },
                null,
                -1,
              )),
          ]),
        ]),
        i.total == 0 && !i.loading
          ? (q(),
            U(
              "div",
              Rp,
              " There are no upcoming events. Check out our past events below. ",
            ))
          : ne("", !0),
        Te(
          Gi,
          {
            name: "stagged-fade",
            tag: "div",
            class: "posts-search__post-results",
          },
          {
            default: wn(() => [
              (q(!0),
              U(
                ge,
                null,
                mt(
                  i.posts,
                  (a, l) => (
                    q(),
                    U(
                      "div",
                      {
                        key: l,
                        class: "events-lister-container",
                      },
                      [
                        R("div", Np, [
                          a.event_category
                            ? (q(), U("div", Dp, fe(a.event_category), 1))
                            : ne("", !0),
                          a.item_date
                            ? (q(), U("p", Bp, fe(a.item_date), 1))
                            : ne("", !0),
                          a.duration
                            ? (q(), U("p", Fp, fe(a.duration), 1))
                            : ne("", !0),
                          a.location
                            ? (q(), U("p", Vp, fe(a.location), 1))
                            : ne("", !0),
                          a.item_time
                            ? (q(), U("p", Hp, fe(a.item_time), 1))
                            : ne("", !0),
                        ]),
                        R("div", $p, [
                          R(
                            "a",
                            {
                              href: a.post_link.post_link,
                              target: a.external_url_link ? "_blank" : "",
                            },
                            [
                              R(
                                "h2",
                                {
                                  class: "subheading",
                                  innerHTML: a.title,
                                },
                                null,
                                8,
                                zp,
                              ),
                            ],
                            8,
                            jp,
                          ),
                        ]),
                        R("div", qp, [
                          R(
                            "a",
                            {
                              target: a.external_url_link ? "_blank" : "",
                              class: me([
                                a.external_url_link
                                  ? "buttonV2--icon buttonV2--icon--small buttonV2--icon--small--external-link"
                                  : "buttonV2--icon buttonV2--icon--small buttonV2--icon--small--arrow-right",
                                "buttonV2",
                              ]),
                              href: a.post_link.post_link,
                            },
                            "View",
                            10,
                            Gp,
                          ),
                        ]),
                      ],
                    )
                  ),
                ),
                128,
              )),
            ]),
            _: 1,
          },
        ),
        i.loading ? (q(), U("div", Up)) : ne("", !0),
        this.paginationType != "loadMore"
          ? (q(),
            U("div", Wp, [
              this.totalPages > 1
                ? (q(),
                  Nt(
                    o,
                    {
                      key: 0,
                      modelValue: i.params.page,
                      "onUpdate:modelValue":
                        t[1] || (t[1] = (a) => (i.params.page = a)),
                      "page-count": i.totalPages,
                      "page-range": 3,
                      "margin-pages": 2,
                      "click-handler": r.paginationCallback,
                      "prev-text": "",
                      "next-text": "",
                      "container-class": "pagination",
                      "page-class": "pagination__item",
                      "next-link-class": "pagination__next",
                      "prev-link-class": "pagination__prev",
                    },
                    null,
                    8,
                    ["modelValue", "page-count", "click-handler"],
                  ))
                : ne("", !0),
            ]))
          : ne("", !0),
        !i.loading && this.paginationType == "loadMore" && r.showMore
          ? (q(),
            U("div", Kp, [
              R(
                "div",
                {
                  onClick:
                    t[2] ||
                    (t[2] = (...a) => r.getMorePosts && r.getMorePosts(...a)),
                  class: "buttonV2 buttonV2--icon buttonV2--icon--plus",
                },
                " Load more ",
              ),
            ]))
          : ne("", !0),
      ])
    );
  }
  const Xp = Ls(Pp, [["render", Yp]]),
    Jp = {
      props: {
        config: {
          type: Object,
          default() {
            return {};
          },
        },
      },
      components: {},
      data() {
        return {
          posts: [],
          params: {
            page: 1,
            per_page: 12,
            orderby: "title",
            order: "desc",
          },
          keywords: "",
          popularSearchTerms: [],
          quickLinks: [],
          latestArticle: [],
          loading: !1,
          total: 0,
          totalPages: 0,
          staggerDelay: 50,
          searchPerformed: !1,
        };
      },
      mounted() {
        this.getPopularSearchTerms(),
          this.getQuickLinks(),
          this.getLatestArticle();
      },
      computed: {},
      methods: {
        isNumeric: function (e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        },
        async getPopularSearchTerms() {
          (this.loading = !0),
            await this.axios
              .get("site_search_popular_search_terms", {
                perPage: -1,
              })
              .then((e) => {
                this.popularSearchTerms = e.data;
              }),
            (this.loading = !1);
        },
        async getQuickLinks() {
          (this.loading = !0),
            await this.axios
              .get("site_search_quick_links", {
                perPage: -1,
              })
              .then((e) => {
                this.quickLinks = e.data;
              }),
            (this.loading = !1);
        },
        async getLatestArticle() {
          (this.loading = !0),
            await this.axios
              .get("site_search_latest_article", {
                perPage: -1,
              })
              .then((e) => {
                this.latestArticle = e.data;
              }),
            (this.loading = !1);
        },
        async getPosts() {
          this.loading = !0;
          const e = {
            ...this.params,
          };
          await this.axios
            .get("site_search", {
              params: e,
            })
            .then((t) => {
              const s = [];
              (this.total = 0),
                (this.totalPages = 0),
                t.data.forEach((n) => {
                  n.title
                    ? s.push({
                        title: n.title,
                        post_type: n.post_type,
                        post_link: n.post_link,
                        category: n.category,
                      })
                    : (n.statsTotal &&
                        (this.total = parseInt(n.statsTotal, 10)),
                      n.statsTotalPages &&
                        (this.totalPages = parseInt(n.statsTotalPages, 10)));
                }),
                (this.posts = this.posts.concat(s));
            }),
            (this.loading = !1);
        },
        trackevent(e) {
          this.$gtag.event("search: " + e), console.log("search: " + e);
        },
        filterPosts() {
          (this.posts = []),
            (this.searchPerformed = !0),
            this.trackevent(this.params.search),
            (this.params.page = 1),
            this.getPosts();
        },
        filterPopularTerm(e) {
          (this.posts = []),
            (this.params.search = e),
            this.trackevent(this.params.search),
            (this.searchPerformed = !0),
            (this.params.page = 1),
            this.getPosts();
        },
        resetSearch() {
          (this.posts = []),
            (this.params.search = ""),
            (this.searchPerformed = !1),
            (this.params.page = 1);
        },
        beforeEnter(e) {
          (e.style.opacity = 0), console.log("enter");
        },
        onEnter(e) {
          const t = e.dataset.index * this.staggerDelay;
          setTimeout(() => {
            (e.style.opacity = 1), console.log("set");
          }, t);
        },
        onLeave(e) {
          (e.style.display = "none"), console.log("leave");
        },
      },
    },
    Qp = {
      class: "site-search-container",
    },
    Zp = {
      class: "site-search-container__form",
    },
    eh = {
      class: "search-bar-container",
    },
    th = {
      class: "search-bar-container__col1",
    },
    sh = {
      class: "search-bar-container__col2",
    },
    nh = {
      key: 0,
      class: "site-search-container__quick-links",
    },
    ih = {
      class: "links-container",
    },
    rh = {
      class: "links-container__col1",
    },
    oh = {
      class: "popular-searches",
    },
    ah = ["onClick", "innerHTML"],
    lh = {
      class: "article-container",
    },
    ch = {
      class: "data-container",
    },
    uh = {
      class: "data-container__col1",
    },
    dh = {
      class: "card-details",
    },
    fh = {
      class: "card-details",
    },
    ph = {
      class: "data-container__col2",
    },
    hh = {
      class: "card-tag",
    },
    mh = ["href", "target"],
    gh = {
      class: "title",
    },
    vh = {
      class: "links-container__col2",
    },
    yh = {
      class: "quick-links-container",
    },
    bh = ["href", "target"],
    wh = {
      class: "quick-link-container__col1",
    },
    Sh = {
      class: "quick-link-container__col2",
    },
    _h = {
      key: 1,
      class: "site-search-container__results-info",
    },
    xh = {
      key: 2,
      class: "site-search-container__no-results",
    },
    Th = ["target", "href"],
    Eh = {
      class: "content result-container",
    },
    Ch = {
      class: "result-container__col1",
    },
    Ph = {
      key: 0,
      class: "card-tag",
    },
    Ah = ["innerHTML"],
    Lh = {
      class: "result-container__col2",
    },
    kh = {
      key: 4,
      class: "site-search-container__loading-spinner",
    };

  function Oh(e, t, s, n, i, r) {
    return (
      q(),
      U("div", Qp, [
        R("div", Zp, [
          R("div", eh, [
            R("div", th, [
              t[8] ||
                (t[8] = R(
                  "div",
                  {
                    class: "search-mag",
                  },
                  null,
                  -1,
                )),
              Go(
                R(
                  "input",
                  {
                    class: "keywords",
                    type: "text",
                    placeholder: "Search pragmaticsemi.com",
                    "onUpdate:modelValue":
                      t[0] || (t[0] = (o) => (i.params.search = o)),
                    onKeyup:
                      t[1] ||
                      (t[1] = ht(
                        (...o) => r.filterPosts && r.filterPosts(...o),
                        ["enter"],
                      )),
                  },
                  null,
                  544,
                ),
                [[Qu, i.params.search]],
              ),
            ]),
            R("div", sh, [
              this.searchPerformed
                ? ne("", !0)
                : (q(),
                  U(
                    "button",
                    {
                      key: 0,
                      "aria-label": "Search",
                      class:
                        "buttonV2 buttonV2--tall buttonV2--yellow desktop-only",
                      onClick:
                        t[2] ||
                        (t[2] = (...o) => r.filterPosts && r.filterPosts(...o)),
                      onKeyup:
                        t[3] ||
                        (t[3] = ht(
                          (...o) => r.filterPosts && r.filterPosts(...o),
                          ["enter"],
                        )),
                    },
                    " Search ",
                    32,
                  )),
              this.searchPerformed
                ? ne("", !0)
                : (q(),
                  U(
                    "div",
                    {
                      key: 1,
                      "aria-label": "Search",
                      class:
                        "circle-buttonV2 circle-buttonV2--medium circle-buttonV2--medium--arrow-right circle-buttonV2--solid-yellow-solid-black circle-buttonV2--inline mobile-only",
                      onClick:
                        t[4] ||
                        (t[4] = (...o) => r.filterPosts && r.filterPosts(...o)),
                      onKeyup:
                        t[5] ||
                        (t[5] = ht(
                          (...o) => r.filterPosts && r.filterPosts(...o),
                          ["enter"],
                        )),
                    },
                    null,
                    32,
                  )),
              this.searchPerformed
                ? (q(),
                  U(
                    "a",
                    {
                      key: 2,
                      "aria-label": "Reset Search",
                      class: "search-reset",
                      onClick:
                        t[6] ||
                        (t[6] = (...o) => r.resetSearch && r.resetSearch(...o)),
                      onKeyup:
                        t[7] ||
                        (t[7] = ht(
                          (...o) => r.resetSearch && r.resetSearch(...o),
                          ["enter"],
                        )),
                    },
                    null,
                    32,
                  ))
                : ne("", !0),
            ]),
          ]),
        ]),
        !i.loading && !i.searchPerformed
          ? (q(),
            U("div", nh, [
              R("div", ih, [
                R("div", rh, [
                  t[9] ||
                    (t[9] = R(
                      "h2",
                      {
                        class: "label",
                      },
                      "Popular searches",
                      -1,
                    )),
                  R("ul", oh, [
                    (q(!0),
                    U(
                      ge,
                      null,
                      mt(
                        i.popularSearchTerms,
                        (o) => (
                          q(),
                          U(
                            "li",
                            {
                              key: o,
                            },
                            [
                              R(
                                "a",
                                {
                                  class: "name",
                                  onClick: (a) => r.filterPopularTerm(o),
                                  innerHTML: o,
                                },
                                null,
                                8,
                                ah,
                              ),
                            ],
                          )
                        ),
                      ),
                      128,
                    )),
                  ]),
                  t[10] ||
                    (t[10] = R(
                      "h2",
                      {
                        class: "label",
                      },
                      "The very latest",
                      -1,
                    )),
                  R("div", lh, [
                    R("div", ch, [
                      R("div", uh, [
                        R("p", dh, fe(this.latestArticle.formatted_date), 1),
                        R(
                          "p",
                          fh,
                          fe(this.latestArticle.mins_read) + minReadText,
                          1,
                        ),
                      ]),
                      R("div", ph, [
                        R("div", hh, fe(this.latestArticle.post_category), 1),
                      ]),
                    ]),
                    R(
                      "a",
                      {
                        href: i.latestArticle.post_link,
                        target:
                          i.latestArticle.post_link_type != "internal"
                            ? "_blank"
                            : "",
                        rel: "noopener noreferrer",
                      },
                      [R("p", gh, fe(this.latestArticle.post_title), 1)],
                      8,
                      mh,
                    ),
                  ]),
                ]),
                R("div", vh, [
                  t[11] ||
                    (t[11] = R(
                      "h2",
                      {
                        class: "label",
                      },
                      "Quick links",
                      -1,
                    )),
                  R("div", yh, [
                    (q(!0),
                    U(
                      ge,
                      null,
                      mt(
                        i.quickLinks,
                        (o) => (
                          q(),
                          U(
                            "a",
                            {
                              key: o,
                              class: "quick-link-container",
                              href: o.link,
                              target: o.external_link ? "_blank" : "",
                              rel: "noopener noreferrer",
                            },
                            [
                              R("div", wh, fe(o.button_text), 1),
                              R("div", Sh, [
                                R(
                                  "div",
                                  {
                                    class: me(
                                      o.external_link
                                        ? "circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--responsive--small circle-buttonV2--responsive--small--external-link"
                                        : "circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--responsive--small circle-buttonV2--responsive--small--arrow-right",
                                    ),
                                  },
                                  null,
                                  2,
                                ),
                              ]),
                            ],
                            8,
                            bh,
                          )
                        ),
                      ),
                      128,
                    )),
                  ]),
                ]),
              ]),
            ]))
          : ne("", !0),
        i.total != 0 && !i.loading && i.searchPerformed
          ? (q(),
            U("div", _h, [
              t[12] || (t[12] = pt(showingText)),
              R("span", null, fe(this.total), 1),
              t[13] || (t[13] = pt(" results ")),
            ]))
          : ne("", !0),
        i.total == 0 && !i.loading && i.searchPerformed
          ? (q(),
            U(
              "div",
              xh,
              " There are no results that match the criteria above. Please try another search. ",
            ))
          : ne("", !0),
        !i.loading && i.searchPerformed
          ? (q(),
            Nt(
              Gi,
              {
                key: 3,
                name: "stagged-fade",
                tag: "div",
                class: "site-search-container__results",
              },
              {
                default: wn(() => [
                  (q(!0),
                  U(
                    ge,
                    null,
                    mt(
                      i.posts,
                      (o, a) => (
                        q(),
                        U(
                          "a",
                          {
                            key: a,
                            target:
                              o.post_link.post_link_type != "internal"
                                ? "_blank"
                                : "",
                            rel: "noopener noreferrer",
                            href: o.post_link.post_link,
                          },
                          [
                            R("div", Eh, [
                              R("div", Ch, [
                                o.category != ""
                                  ? (q(), U("div", Ph, fe(o.category), 1))
                                  : ne("", !0),
                                R(
                                  "h2",
                                  {
                                    innerHTML: o.title,
                                  },
                                  null,
                                  8,
                                  Ah,
                                ),
                              ]),
                              R("div", Lh, [
                                R(
                                  "div",
                                  {
                                    class: me(
                                      o.post_link.post_link_type != "internal"
                                        ? "circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--responsive--small circle-buttonV2--responsive--small--external-link"
                                        : "circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--responsive--small circle-buttonV2--responsive--small--arrow-right",
                                    ),
                                  },
                                  null,
                                  2,
                                ),
                              ]),
                            ]),
                          ],
                          8,
                          Th,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
                _: 1,
              },
            ))
          : ne("", !0),
        i.loading ? (q(), U("div", kh)) : ne("", !0),
      ])
    );
  }
  const Mh = Ls(Jp, [["render", Oh]]),
    Ih = {
      name: "App",
      components: {
        NewsSearch: Cp,
        EventsSearch: Xp,
        SitesSearch: Mh,
      },
      props: {
        component: {
          type: String,
          default: "",
        },
        config: {
          type: Object,
          default() {
            return {};
          },
        },
      },
    },
    Rh = {
      class: "app",
    };

  function Nh(e, t, s, n, i, r) {
    return (
      q(),
      U("div", Rh, [
        (q(),
        Nt(
          Lc(s.component),
          {
            config: s.config,
          },
          null,
          8,
          ["config"],
        )),
      ])
    );
  }
  const Dh = Ls(Ih, [["render", Nh]]);

  function xi(e, t, s) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = s),
      e
    );
  }

  function to(e, t) {
    var s = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        s.push.apply(s, n);
    }
    return s;
  }

  function Ti(e) {
    for (var t = 1; t < arguments.length; t++) {
      var s = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? to(Object(s), !0).forEach(function (n) {
            xi(e, n, s[n]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
          : to(Object(s)).forEach(function (n) {
              Object.defineProperty(
                e,
                n,
                Object.getOwnPropertyDescriptor(s, n),
              );
            });
    }
    return e;
  }
  var Bh = function (t) {
      var s =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return new Promise(function (n, i) {
        if (!(typeof document > "u")) {
          var r = document.head || document.getElementsByTagName("head")[0],
            o = document.createElement("script");
          if (
            ((o.async = !0),
            (o.src = t),
            (o.defer = s.defer),
            s.preconnectOrigin)
          ) {
            var a = document.createElement("link");
            (a.href = s.preconnectOrigin),
              (a.rel = "preconnect"),
              r.appendChild(a);
          }
          r.appendChild(o), (o.onload = n), (o.onerror = i);
        }
      });
    },
    Fh = function e(t) {
      for (
        var s = arguments.length, n = new Array(s > 1 ? s - 1 : 0), i = 1;
        i < s;
        i++
      )
        n[i - 1] = arguments[i];
      if (!n.length) return t;
      var r = n.shift();
      if (!(!us(t) || !us(r))) {
        for (var o in r)
          us(r[o])
            ? (t[o] || Object.assign(t, xi({}, o, {})), e(t[o], r[o]))
            : Object.assign(t, xi({}, o, r[o]));
        return e.apply(void 0, [t].concat(n));
      }
    },
    Mn = function () {
      return !(typeof window > "u" || typeof document > "u");
    },
    so = function (t) {},
    Vh = function () {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return (
        so(
          'Missing "appName" property inside the plugin options.',
          t.app_name == null,
        ),
        so('Missing "name" property in the route.', t.screen_name == null),
        t
      );
    };

  function Hh() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "",
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "",
      s = e.split("/"),
      n = t.split("/");
    return (
      s[0] === "" && t[t.length - 1] === "/" && s.shift(),
      n.join("/") + s.join("/")
    );
  }
  var $h = function () {
      return {
        bootstrap: !0,
        onReady: null,
        onError: null,
        onBeforeTrack: null,
        onAfterTrack: null,
        pageTrackerTemplate: null,
        customResourceURL: "https://www.googletagmanager.com/gtag/js",
        customPreconnectOrigin: "https://www.googletagmanager.com",
        deferScriptLoad: !1,
        pageTrackerExcludedRoutes: [],
        pageTrackerEnabled: !0,
        enabled: !0,
        disableScriptLoad: !1,
        pageTrackerScreenviewEnabled: !1,
        appName: null,
        pageTrackerUseFullPath: !1,
        pageTrackerPrependBase: !0,
        pageTrackerSkipSamePath: !0,
        globalDataLayerName: "dataLayer",
        globalObjectName: "gtag",
        defaultGroupName: "default",
        includes: null,
        config: {
          id: null,
          params: {
            send_page_view: !1,
          },
        },
      };
    },
    il = {},
    jh = function () {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        s = $h();
      il = Fh(s, t);
    },
    ze = function () {
      return il;
    },
    Ft = function () {
      var e,
        t = ze(),
        s = t.globalObjectName;
      !Mn() || typeof window[s] > "u" || (e = window)[s].apply(e, arguments);
    },
    Yi = function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      var n = ze(),
        i = n.config,
        r = n.includes;
      Ft.apply(void 0, ["config", i.id].concat(t)),
        Array.isArray(r) &&
          r.forEach(function (o) {
            Ft.apply(void 0, ["config", o.id].concat(t));
          });
    },
    no = function (t, s) {
      Mn() && (window["ga-disable-".concat(t)] = s);
    },
    rl = function () {
      var e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
        t = ze(),
        s = t.config,
        n = t.includes;
      no(s.id, e),
        Array.isArray(n) &&
          n.forEach(function (i) {
            return no(i.id, e);
          });
    },
    ol = function () {
      rl(!0);
    },
    zh = function () {
      rl(!1);
    },
    al,
    qh = function (t) {
      al = t;
    },
    Xi = function () {
      return al;
    },
    Vt = function (e) {
      var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        s = ze(),
        n = s.includes,
        i = s.defaultGroupName;
      t.send_to == null &&
        Array.isArray(n) &&
        n.length &&
        (t.send_to = n
          .map(function (r) {
            return r.id;
          })
          .concat(i)),
        Ft("event", e, t);
    },
    ll = function (e) {
      if (Mn()) {
        var t;
        if (typeof e == "string")
          t = {
            page_path: e,
          };
        else if (e.path || e.fullPath) {
          var s = ze(),
            n = s.pageTrackerUseFullPath,
            i = s.pageTrackerPrependBase,
            r = Xi(),
            o = r && r.options.base,
            a = n ? e.fullPath : e.path;
          t = Ti(
            Ti(
              {},
              e.name && {
                page_title: e.name,
              },
            ),
            {},
            {
              page_path: i ? Hh(a, o) : a,
            },
          );
        } else t = e;
        t.page_location == null && (t.page_location = window.location.href),
          t.send_page_view == null && (t.send_page_view = !0),
          Vt("page_view", t);
      }
    },
    cl = function (e) {
      var t = ze(),
        s = t.appName;
      if (e) {
        var n;
        typeof e == "string"
          ? (n = {
              screen_name: e,
            })
          : (n = e),
          (n.app_name = n.app_name || s),
          Vt("screen_view", n);
      }
    },
    Gh = function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      Vt.apply(void 0, ["exception"].concat(t));
    },
    Uh = function (e) {
      Yi("linker", e);
    },
    Wh = function (e) {
      Vt("timing_complete", e);
    },
    Kh = function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      Ft.apply(void 0, ["set"].concat(t));
    },
    Yh = function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      Vt.apply(void 0, ["refund"].concat(t));
    },
    Xh = function (e) {
      Vt("purchase", e);
    },
    Jh = function (e) {
      Yi({
        custom_map: e,
      });
    },
    Qh = Object.freeze({
      __proto__: null,
      query: Ft,
      config: Yi,
      optOut: ol,
      optIn: zh,
      pageview: ll,
      screenview: cl,
      exception: Gh,
      linker: Uh,
      time: Wh,
      set: Kh,
      refund: Yh,
      purchase: Xh,
      customMap: Jh,
      event: Vt,
    }),
    Zh = function (t) {
      t.config.globalProperties.$gtag = Qh;
    },
    em = function () {
      if (Mn()) {
        var e = ze(),
          t = e.enabled,
          s = e.globalObjectName,
          n = e.globalDataLayerName;
        return (
          window[s] == null &&
            ((window[n] = window[n] || []),
            (window[s] = function () {
              window[n].push(arguments);
            })),
          window[s]("js", new Date()),
          t || ol(),
          window[s]
        );
      }
    },
    io = function (t) {
      return Ti(
        {
          send_page_view: !1,
        },
        t,
      );
    },
    ul = function () {
      var e = ze(),
        t = e.config,
        s = e.includes;
      Ft("config", t.id, io(t.params)),
        Array.isArray(s) &&
          s.forEach(function (n) {
            Ft("config", n.id, io(n.params));
          });
    },
    ro = function () {
      var e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        s = ze(),
        n = s.appName,
        i = s.pageTrackerTemplate,
        r = s.pageTrackerScreenviewEnabled,
        o = s.pageTrackerSkipSamePath;
      if (!(o && e.path === t.path)) {
        var a = e;
        if (
          (J(i)
            ? (a = i(e, t))
            : r &&
              (a = Vh({
                app_name: n,
                screen_name: e.name,
              })),
          r)
        ) {
          cl(a);
          return;
        }
        ll(a);
      }
    },
    oo = function (t) {
      var s = ze(),
        n = s.pageTrackerExcludedRoutes;
      return n.includes(t.path) || n.includes(t.name);
    },
    tm = function () {
      var e = ze(),
        t = e.onBeforeTrack,
        s = e.onAfterTrack,
        n = Xi();
      n.isReady().then(function () {
        Xs().then(function () {
          var i = n.currentRoute;
          ul(), !oo(i.value) && ro(i.value);
        }),
          n.afterEach(function (i, r) {
            Xs().then(function () {
              oo(i) || (J(t) && t(i, r), ro(i, r), J(s) && s(i, r));
            });
          });
      });
    },
    sm = function () {
      var e = ze(),
        t = e.onReady,
        s = e.onError,
        n = e.globalObjectName,
        i = e.globalDataLayerName,
        r = e.config,
        o = e.customResourceURL,
        a = e.customPreconnectOrigin,
        l = e.deferScriptLoad,
        c = e.pageTrackerEnabled,
        u = e.disableScriptLoad,
        d = !!(c && Xi());
      if ((em(), d ? tm() : ul(), !u))
        return Bh("".concat(o, "?id=").concat(r.id, "&l=").concat(i), {
          preconnectOrigin: a,
          defer: l,
        })
          .then(function () {
            t && t(window[n]);
          })
          .catch(function (p) {
            return s && s(p), p;
          });
    },
    nm = function (t) {
      var s =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = arguments.length > 2 ? arguments[2] : void 0;
      Zh(t), jh(s), qh(n), ze().bootstrap && sm();
    };

  function im() {
    document.querySelectorAll("#vue-app").forEach((t) => {
      if (t !== null) {
        (he.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"),
          (he.defaults.baseURL = "/fr/wp-json/wp/v2/");
        let s = document.getElementsByTagName("html")[0].getAttribute("lang");
        he.defaults.baseURL =
          s === "en-GB" ? "/wp-json/wp/v2/" : `/${s}/wp-json/wp/v2/`;
        const n = {};
        t.attributes["data-app"] &&
          ((n.component = t.attributes["data-app"].value),
          t.attributes["data-config"] &&
            (n.config = JSON.parse(t.attributes["data-config"].value))),
          nd({
            render: () =>
              Su(Dh, {
                ...n,
              }),
          })
            .use($s, he)
            .use(nm, {
              config: {
                id: "G-S3TQG9PTFV",
              },
            })
            .mount(t);
      }
    });
  }

  function ao(e) {
    const t = e,
      s = t.scrollHeight,
      n = t.style.transition;
    (t.style.transition = ""),
      requestAnimationFrame(() => {
        (t.style.height = `${s}px`),
          (t.style.transition = n),
          requestAnimationFrame(() => {
            t.style.removeProperty("height");
          });
      }),
      t.setAttribute("data-collapsed", "true");
  }

  function rm(e) {
    const t = e;
    t.style.display = "block";
    const s = t.scrollHeight;
    (t.style.height = `${s}px`),
      t.addEventListener("transitionend", function n() {
        (t.style.display = "block"),
          t.removeEventListener("transitionend", n),
          (t.style.height = "auto");
      }),
      t.setAttribute("data-collapsed", "false");
  }

  function om(e) {
    const t = e.currentTarget;
    window.innerWidth > 1240 ||
      (t.parentNode.classList.contains("menu-item-has-children--open")
        ? t.hasAttribute("href") === !1 &&
          (ao(t.nextElementSibling),
          t.parentNode.classList.remove("menu-item-has-children--open"))
        : (e.preventDefault(),
          document
            .getElementById("main-menu")
            .querySelectorAll(".menu-item-has-children--open")
            .forEach((s) => {
              ao(s.querySelector(".sub-menu")),
                s.classList.remove("menu-item-has-children--open");
            }),
          rm(t.nextElementSibling),
          t.parentNode.classList.add("menu-item-has-children--open")));
  }

  function am() {
    const e = document.getElementById("page-header"),
      t = document.getElementById("mobile-menu-toggle"),
      s = document.getElementById("main-menu");

    function n() {
      document.documentElement.scrollTop > 40
        ? (e.classList.add("page-header--scrolled"),
          e.classList.remove("page-header--unscrolled"))
        : e.classList.contains("page-header--scrolled") &&
          (e.classList.remove("page-header--scrolled"),
          e.classList.add("page-header--unscrolled"));
    }
    n(),
      document.addEventListener("scroll", () => {
        n();
      }),
      t.addEventListener("click", (i) => {
        i.preventDefault(),
          t.classList.toggle("mobile-menu-toggle--open"),
          s.classList.toggle("main-menu--open"),
          e.classList.toggle("page-header--open"),
          document.body.classList.toggle("fixed");
      }),
      s.querySelectorAll(".menu-item-has-children > a").forEach((i) => {
        i.addEventListener("click", om);
      });
  }

  function lm() {
    var e = document.getElementById("hero-desktop-video"),
      t = document.getElementById("hero-mobile-video");
    if (e && t) {
      window.innerWidth > 540 &&
        (e.setAttribute("autoplay", ""),
        e.removeAttribute("preload"),
        e.play()),
        window.innerWidth < 540 &&
          (t.setAttribute("autoplay", ""),
          t.removeAttribute("preload"),
          t.play());
      var s;
      window.addEventListener("resize", function () {
        clearTimeout(s), (s = setTimeout(n, 500));
      });
    }

    function n() {
      var i = document.getElementById("hero-desktop-video"),
        r = document.getElementById("hero-mobile-video");
      window.innerWidth > 540 && (i.play(), r.pause()),
        window.innerWidth < 540 && (i.pause(), r.play());
    }
  }

  function lo(e) {
    return (
      e !== null &&
      typeof e == "object" &&
      "constructor" in e &&
      e.constructor === Object
    );
  }

  function Ji(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = {});
    const s = ["__proto__", "constructor", "prototype"];
    Object.keys(t)
      .filter((n) => s.indexOf(n) < 0)
      .forEach((n) => {
        typeof e[n] > "u"
          ? (e[n] = t[n])
          : lo(t[n]) &&
            lo(e[n]) &&
            Object.keys(t[n]).length > 0 &&
            Ji(e[n], t[n]);
      });
  }
  const dl = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
      blur() {},
      nodeName: "",
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {},
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName() {
          return [];
        },
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };

  function at() {
    const e = typeof document < "u" ? document : {};
    return Ji(e, dl), e;
  }
  const cm = {
    document: dl,
    navigator: {
      userAgent: "",
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: {
      replaceState() {},
      pushState() {},
      go() {},
      back() {},
    },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        },
      };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
      return {};
    },
    requestAnimationFrame(e) {
      return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame(e) {
      typeof setTimeout > "u" || clearTimeout(e);
    },
  };

  function Ie() {
    const e = typeof window < "u" ? window : {};
    return Ji(e, cm), e;
  }

  function um(e) {
    return (
      e === void 0 && (e = ""),
      e
        .trim()
        .split(" ")
        .filter((t) => !!t.trim())
    );
  }

  function dm(e) {
    const t = e;
    Object.keys(t).forEach((s) => {
      try {
        t[s] = null;
      } catch {}
      try {
        delete t[s];
      } catch {}
    });
  }

  function Ei(e, t) {
    return t === void 0 && (t = 0), setTimeout(e, t);
  }

  function ln() {
    return Date.now();
  }

  function fm(e) {
    const t = Ie();
    let s;
    return (
      t.getComputedStyle && (s = t.getComputedStyle(e, null)),
      !s && e.currentStyle && (s = e.currentStyle),
      s || (s = e.style),
      s
    );
  }

  function pm(e, t) {
    t === void 0 && (t = "x");
    const s = Ie();
    let n, i, r;
    const o = fm(e);
    return (
      s.WebKitCSSMatrix
        ? ((i = o.transform || o.webkitTransform),
          i.split(",").length > 6 &&
            (i = i
              .split(", ")
              .map((a) => a.replace(",", "."))
              .join(", ")),
          (r = new s.WebKitCSSMatrix(i === "none" ? "" : i)))
        : ((r =
            o.MozTransform ||
            o.OTransform ||
            o.MsTransform ||
            o.msTransform ||
            o.transform ||
            o
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (n = r.toString().split(","))),
      t === "x" &&
        (s.WebKitCSSMatrix
          ? (i = r.m41)
          : n.length === 16
            ? (i = parseFloat(n[12]))
            : (i = parseFloat(n[4]))),
      t === "y" &&
        (s.WebKitCSSMatrix
          ? (i = r.m42)
          : n.length === 16
            ? (i = parseFloat(n[13]))
            : (i = parseFloat(n[5]))),
      i || 0
    );
  }

  function Ns(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      e.constructor &&
      Object.prototype.toString.call(e).slice(8, -1) === "Object"
    );
  }

  function hm(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
      ? e instanceof HTMLElement
      : e && (e.nodeType === 1 || e.nodeType === 11);
  }

  function $e() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let s = 1; s < arguments.length; s += 1) {
      const n = s < 0 || arguments.length <= s ? void 0 : arguments[s];
      if (n != null && !hm(n)) {
        const i = Object.keys(Object(n)).filter((r) => t.indexOf(r) < 0);
        for (let r = 0, o = i.length; r < o; r += 1) {
          const a = i[r],
            l = Object.getOwnPropertyDescriptor(n, a);
          l !== void 0 &&
            l.enumerable &&
            (Ns(e[a]) && Ns(n[a])
              ? n[a].__swiper__
                ? (e[a] = n[a])
                : $e(e[a], n[a])
              : !Ns(e[a]) && Ns(n[a])
                ? ((e[a] = {}),
                  n[a].__swiper__ ? (e[a] = n[a]) : $e(e[a], n[a]))
                : (e[a] = n[a]));
        }
      }
    }
    return e;
  }

  function Ds(e, t, s) {
    e.style.setProperty(t, s);
  }

  function fl(e) {
    let { swiper: t, targetPosition: s, side: n } = e;
    const i = Ie(),
      r = -t.translate;
    let o = null,
      a;
    const l = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      i.cancelAnimationFrame(t.cssModeFrameID);
    const c = s > r ? "next" : "prev",
      u = (p, v) => (c === "next" && p >= v) || (c === "prev" && p <= v),
      d = () => {
        (a = new Date().getTime()), o === null && (o = a);
        const p = Math.max(Math.min((a - o) / l, 1), 0),
          v = 0.5 - Math.cos(p * Math.PI) / 2;
        let f = r + v * (s - r);
        if (
          (u(f, s) && (f = s),
          t.wrapperEl.scrollTo({
            [n]: f,
          }),
          u(f, s))
        ) {
          (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({
                  [n]: f,
                });
            }),
            i.cancelAnimationFrame(t.cssModeFrameID);
          return;
        }
        t.cssModeFrameID = i.requestAnimationFrame(d);
      };
    d();
  }

  function rt(e, t) {
    t === void 0 && (t = "");
    const s = Ie(),
      n = [...e.children];
    return (
      s.HTMLSlotElement &&
        e instanceof HTMLSlotElement &&
        n.push(...e.assignedElements()),
      t ? n.filter((i) => i.matches(t)) : n
    );
  }

  function mm(e, t) {
    const s = [t];
    for (; s.length > 0; ) {
      const n = s.shift();
      if (e === n) return !0;
      s.push(
        ...n.children,
        ...(n.shadowRoot ? n.shadowRoot.children : []),
        ...(n.assignedElements ? n.assignedElements() : []),
      );
    }
  }

  function gm(e, t) {
    const s = Ie();
    let n = t.contains(e);
    return (
      !n &&
        s.HTMLSlotElement &&
        t instanceof HTMLSlotElement &&
        ((n = [...t.assignedElements()].includes(e)), n || (n = mm(e, t))),
      n
    );
  }

  function cn(e) {
    try {
      console.warn(e);
      return;
    } catch {}
  }

  function un(e, t) {
    t === void 0 && (t = []);
    const s = document.createElement(e);
    return s.classList.add(...(Array.isArray(t) ? t : um(t))), s;
  }

  function vm(e, t) {
    const s = [];
    for (; e.previousElementSibling; ) {
      const n = e.previousElementSibling;
      t ? n.matches(t) && s.push(n) : s.push(n), (e = n);
    }
    return s;
  }

  function ym(e, t) {
    const s = [];
    for (; e.nextElementSibling; ) {
      const n = e.nextElementSibling;
      t ? n.matches(t) && s.push(n) : s.push(n), (e = n);
    }
    return s;
  }

  function xt(e, t) {
    return Ie().getComputedStyle(e, null).getPropertyValue(t);
  }

  function dn(e) {
    let t = e,
      s;
    if (t) {
      for (s = 0; (t = t.previousSibling) !== null; )
        t.nodeType === 1 && (s += 1);
      return s;
    }
  }

  function pl(e, t) {
    const s = [];
    let n = e.parentElement;
    for (; n; )
      t ? n.matches(t) && s.push(n) : s.push(n), (n = n.parentElement);
    return s;
  }

  function Ci(e, t, s) {
    const n = Ie();
    return (
      e[t === "width" ? "offsetWidth" : "offsetHeight"] +
      parseFloat(
        n
          .getComputedStyle(e, null)
          .getPropertyValue(t === "width" ? "margin-right" : "margin-top"),
      ) +
      parseFloat(
        n
          .getComputedStyle(e, null)
          .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom"),
      )
    );
  }

  function be(e) {
    return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
  }
  let Yn;

  function bm() {
    const e = Ie(),
      t = at();
    return {
      smoothScroll:
        t.documentElement &&
        t.documentElement.style &&
        "scrollBehavior" in t.documentElement.style,
      touch: !!(
        "ontouchstart" in e ||
        (e.DocumentTouch && t instanceof e.DocumentTouch)
      ),
    };
  }

  function hl() {
    return Yn || (Yn = bm()), Yn;
  }
  let Xn;

  function wm(e) {
    let { userAgent: t } = e === void 0 ? {} : e;
    const s = hl(),
      n = Ie(),
      i = n.navigator.platform,
      r = t || n.navigator.userAgent,
      o = {
        ios: !1,
        android: !1,
      },
      a = n.screen.width,
      l = n.screen.height,
      c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let u = r.match(/(iPad).*OS\s([\d_]+)/);
    const d = r.match(/(iPod)(.*OS\s([\d_]+))?/),
      p = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      v = i === "Win32";
    let f = i === "MacIntel";
    const b = [
      "1024x1366",
      "1366x1024",
      "834x1194",
      "1194x834",
      "834x1112",
      "1112x834",
      "768x1024",
      "1024x768",
      "820x1180",
      "1180x820",
      "810x1080",
      "1080x810",
    ];
    return (
      !u &&
        f &&
        s.touch &&
        b.indexOf(`${a}x${l}`) >= 0 &&
        ((u = r.match(/(Version)\/([\d.]+)/)),
        u || (u = [0, 1, "13_0_0"]),
        (f = !1)),
      c && !v && ((o.os = "android"), (o.android = !0)),
      (u || p || d) && ((o.os = "ios"), (o.ios = !0)),
      o
    );
  }

  function ml(e) {
    return e === void 0 && (e = {}), Xn || (Xn = wm(e)), Xn;
  }
  let Jn;

  function Sm() {
    const e = Ie(),
      t = ml();
    let s = !1;

    function n() {
      const a = e.navigator.userAgent.toLowerCase();
      return (
        a.indexOf("safari") >= 0 &&
        a.indexOf("chrome") < 0 &&
        a.indexOf("android") < 0
      );
    }
    if (n()) {
      const a = String(e.navigator.userAgent);
      if (a.includes("Version/")) {
        const [l, c] = a
          .split("Version/")[1]
          .split(" ")[0]
          .split(".")
          .map((u) => Number(u));
        s = l < 16 || (l === 16 && c < 2);
      }
    }
    const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        e.navigator.userAgent,
      ),
      r = n(),
      o = r || (i && t.ios);
    return {
      isSafari: s || r,
      needPerspectiveFix: s,
      need3dFix: o,
      isWebView: i,
    };
  }

  function gl() {
    return Jn || (Jn = Sm()), Jn;
  }

  function _m(e) {
    let { swiper: t, on: s, emit: n } = e;
    const i = Ie();
    let r = null,
      o = null;
    const a = () => {
        !t || t.destroyed || !t.initialized || (n("beforeResize"), n("resize"));
      },
      l = () => {
        !t ||
          t.destroyed ||
          !t.initialized ||
          ((r = new ResizeObserver((d) => {
            o = i.requestAnimationFrame(() => {
              const { width: p, height: v } = t;
              let f = p,
                b = v;
              d.forEach((_) => {
                let { contentBoxSize: S, contentRect: h, target: g } = _;
                (g && g !== t.el) ||
                  ((f = h ? h.width : (S[0] || S).inlineSize),
                  (b = h ? h.height : (S[0] || S).blockSize));
              }),
                (f !== p || b !== v) && a();
            });
          })),
          r.observe(t.el));
      },
      c = () => {
        o && i.cancelAnimationFrame(o),
          r && r.unobserve && t.el && (r.unobserve(t.el), (r = null));
      },
      u = () => {
        !t || t.destroyed || !t.initialized || n("orientationchange");
      };
    s("init", () => {
      if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
        l();
        return;
      }
      i.addEventListener("resize", a),
        i.addEventListener("orientationchange", u);
    }),
      s("destroy", () => {
        c(),
          i.removeEventListener("resize", a),
          i.removeEventListener("orientationchange", u);
      });
  }

  function xm(e) {
    let { swiper: t, extendParams: s, on: n, emit: i } = e;
    const r = [],
      o = Ie(),
      a = function (u, d) {
        d === void 0 && (d = {});
        const p = o.MutationObserver || o.WebkitMutationObserver,
          v = new p((f) => {
            if (t.__preventObserver__) return;
            if (f.length === 1) {
              i("observerUpdate", f[0]);
              return;
            }
            const b = function () {
              i("observerUpdate", f[0]);
            };
            o.requestAnimationFrame
              ? o.requestAnimationFrame(b)
              : o.setTimeout(b, 0);
          });
        v.observe(u, {
          attributes: typeof d.attributes > "u" ? !0 : d.attributes,
          childList:
            t.isElement || (typeof d.childList > "u" ? !0 : d).childList,
          characterData: typeof d.characterData > "u" ? !0 : d.characterData,
        }),
          r.push(v);
      },
      l = () => {
        if (t.params.observer) {
          if (t.params.observeParents) {
            const u = pl(t.hostEl);
            for (let d = 0; d < u.length; d += 1) a(u[d]);
          }
          a(t.hostEl, {
            childList: t.params.observeSlideChildren,
          }),
            a(t.wrapperEl, {
              attributes: !1,
            });
        }
      },
      c = () => {
        r.forEach((u) => {
          u.disconnect();
        }),
          r.splice(0, r.length);
      };
    s({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1,
    }),
      n("init", l),
      n("destroy", c);
  }
  var Tm = {
    on(e, t, s) {
      const n = this;
      if (!n.eventsListeners || n.destroyed || typeof t != "function") return n;
      const i = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((r) => {
          n.eventsListeners[r] || (n.eventsListeners[r] = []),
            n.eventsListeners[r][i](t);
        }),
        n
      );
    },
    once(e, t, s) {
      const n = this;
      if (!n.eventsListeners || n.destroyed || typeof t != "function") return n;

      function i() {
        n.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
        for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
          o[a] = arguments[a];
        t.apply(n, o);
      }
      return (i.__emitterProxy = t), n.on(e, i, s);
    },
    onAny(e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
      const n = t ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[n](e), s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return (
        !s.eventsListeners ||
          s.destroyed ||
          !s.eventsListeners ||
          e.split(" ").forEach((n) => {
            typeof t > "u"
              ? (s.eventsListeners[n] = [])
              : s.eventsListeners[n] &&
                s.eventsListeners[n].forEach((i, r) => {
                  (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                    s.eventsListeners[n].splice(r, 1);
                });
          }),
        s
      );
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
      let t, s, n;
      for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
        r[o] = arguments[o];
      return (
        typeof r[0] == "string" || Array.isArray(r[0])
          ? ((t = r[0]), (s = r.slice(1, r.length)), (n = e))
          : ((t = r[0].events), (s = r[0].data), (n = r[0].context || e)),
        s.unshift(n),
        (Array.isArray(t) ? t : t.split(" ")).forEach((l) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((c) => {
              c.apply(n, [l, ...s]);
            }),
            e.eventsListeners &&
              e.eventsListeners[l] &&
              e.eventsListeners[l].forEach((c) => {
                c.apply(n, s);
              });
        }),
        e
      );
    },
  };

  function Em() {
    const e = this;
    let t, s;
    const n = e.el;
    typeof e.params.width < "u" && e.params.width !== null
      ? (t = e.params.width)
      : (t = n.clientWidth),
      typeof e.params.height < "u" && e.params.height !== null
        ? (s = e.params.height)
        : (s = n.clientHeight),
      !((t === 0 && e.isHorizontal()) || (s === 0 && e.isVertical())) &&
        ((t =
          t -
          parseInt(xt(n, "padding-left") || 0, 10) -
          parseInt(xt(n, "padding-right") || 0, 10)),
        (s =
          s -
          parseInt(xt(n, "padding-top") || 0, 10) -
          parseInt(xt(n, "padding-bottom") || 0, 10)),
        Number.isNaN(t) && (t = 0),
        Number.isNaN(s) && (s = 0),
        Object.assign(e, {
          width: t,
          height: s,
          size: e.isHorizontal() ? t : s,
        }));
  }

  function Cm() {
    const e = this;

    function t(C, M) {
      return parseFloat(C.getPropertyValue(e.getDirectionLabel(M)) || 0);
    }
    const s = e.params,
      { wrapperEl: n, slidesEl: i, size: r, rtlTranslate: o, wrongRTL: a } = e,
      l = e.virtual && s.virtual.enabled,
      c = l ? e.virtual.slides.length : e.slides.length,
      u = rt(i, `.${e.params.slideClass}, swiper-slide`),
      d = l ? e.virtual.slides.length : u.length;
    let p = [];
    const v = [],
      f = [];
    let b = s.slidesOffsetBefore;
    typeof b == "function" && (b = s.slidesOffsetBefore.call(e));
    let _ = s.slidesOffsetAfter;
    typeof _ == "function" && (_ = s.slidesOffsetAfter.call(e));
    const S = e.snapGrid.length,
      h = e.slidesGrid.length;
    let g = s.spaceBetween,
      w = -b,
      T = 0,
      B = 0;
    if (typeof r > "u") return;
    typeof g == "string" && g.indexOf("%") >= 0
      ? (g = (parseFloat(g.replace("%", "")) / 100) * r)
      : typeof g == "string" && (g = parseFloat(g)),
      (e.virtualSize = -g),
      u.forEach((C) => {
        o ? (C.style.marginLeft = "") : (C.style.marginRight = ""),
          (C.style.marginBottom = ""),
          (C.style.marginTop = "");
      }),
      s.centeredSlides &&
        s.cssMode &&
        (Ds(n, "--swiper-centered-offset-before", ""),
        Ds(n, "--swiper-centered-offset-after", ""));
    const $ = s.grid && s.grid.rows > 1 && e.grid;
    $ ? e.grid.initSlides(u) : e.grid && e.grid.unsetSlides();
    let j;
    const I =
      s.slidesPerView === "auto" &&
      s.breakpoints &&
      Object.keys(s.breakpoints).filter(
        (C) => typeof s.breakpoints[C].slidesPerView < "u",
      ).length > 0;
    for (let C = 0; C < d; C += 1) {
      j = 0;
      let M;
      if (
        (u[C] && (M = u[C]),
        $ && e.grid.updateSlide(C, M, u),
        !(u[C] && xt(M, "display") === "none"))
      ) {
        if (s.slidesPerView === "auto") {
          I && (u[C].style[e.getDirectionLabel("width")] = "");
          const P = getComputedStyle(M),
            z = M.style.transform,
            Q = M.style.webkitTransform;
          if (
            (z && (M.style.transform = "none"),
            Q && (M.style.webkitTransform = "none"),
            s.roundLengths)
          )
            j = e.isHorizontal() ? Ci(M, "width") : Ci(M, "height");
          else {
            const te = t(P, "width"),
              G = t(P, "padding-left"),
              Z = t(P, "padding-right"),
              H = t(P, "margin-left"),
              ae = t(P, "margin-right"),
              ye = P.getPropertyValue("box-sizing");
            if (ye && ye === "border-box") j = te + H + ae;
            else {
              const { clientWidth: Pe, offsetWidth: Ae } = M;
              j = te + G + Z + H + ae + (Ae - Pe);
            }
          }
          z && (M.style.transform = z),
            Q && (M.style.webkitTransform = Q),
            s.roundLengths && (j = Math.floor(j));
        } else
          (j = (r - (s.slidesPerView - 1) * g) / s.slidesPerView),
            s.roundLengths && (j = Math.floor(j)),
            u[C] && (u[C].style[e.getDirectionLabel("width")] = `${j}px`);
        u[C] && (u[C].swiperSlideSize = j),
          f.push(j),
          s.centeredSlides
            ? ((w = w + j / 2 + T / 2 + g),
              T === 0 && C !== 0 && (w = w - r / 2 - g),
              C === 0 && (w = w - r / 2 - g),
              Math.abs(w) < 1 / 1e3 && (w = 0),
              s.roundLengths && (w = Math.floor(w)),
              B % s.slidesPerGroup === 0 && p.push(w),
              v.push(w))
            : (s.roundLengths && (w = Math.floor(w)),
              (B - Math.min(e.params.slidesPerGroupSkip, B)) %
                e.params.slidesPerGroup ===
                0 && p.push(w),
              v.push(w),
              (w = w + j + g)),
          (e.virtualSize += j + g),
          (T = j),
          (B += 1);
      }
    }
    if (
      ((e.virtualSize = Math.max(e.virtualSize, r) + _),
      o &&
        a &&
        (s.effect === "slide" || s.effect === "coverflow") &&
        (n.style.width = `${e.virtualSize + g}px`),
      s.setWrapperSize &&
        (n.style[e.getDirectionLabel("width")] = `${e.virtualSize + g}px`),
      $ && e.grid.updateWrapperSize(j, p),
      !s.centeredSlides)
    ) {
      const C = [];
      for (let M = 0; M < p.length; M += 1) {
        let P = p[M];
        s.roundLengths && (P = Math.floor(P)),
          p[M] <= e.virtualSize - r && C.push(P);
      }
      (p = C),
        Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
          p.push(e.virtualSize - r);
    }
    if (l && s.loop) {
      const C = f[0] + g;
      if (s.slidesPerGroup > 1) {
        const M = Math.ceil(
            (e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup,
          ),
          P = C * s.slidesPerGroup;
        for (let z = 0; z < M; z += 1) p.push(p[p.length - 1] + P);
      }
      for (
        let M = 0;
        M < e.virtual.slidesBefore + e.virtual.slidesAfter;
        M += 1
      )
        s.slidesPerGroup === 1 && p.push(p[p.length - 1] + C),
          v.push(v[v.length - 1] + C),
          (e.virtualSize += C);
    }
    if ((p.length === 0 && (p = [0]), g !== 0)) {
      const C =
        e.isHorizontal() && o
          ? "marginLeft"
          : e.getDirectionLabel("marginRight");
      u.filter((M, P) =>
        !s.cssMode || s.loop ? !0 : P !== u.length - 1,
      ).forEach((M) => {
        M.style[C] = `${g}px`;
      });
    }
    if (s.centeredSlides && s.centeredSlidesBounds) {
      let C = 0;
      f.forEach((P) => {
        C += P + (g || 0);
      }),
        (C -= g);
      const M = C > r ? C - r : 0;
      p = p.map((P) => (P <= 0 ? -b : P > M ? M + _ : P));
    }
    if (s.centerInsufficientSlides) {
      let C = 0;
      f.forEach((P) => {
        C += P + (g || 0);
      }),
        (C -= g);
      const M = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
      if (C + M < r) {
        const P = (r - C - M) / 2;
        p.forEach((z, Q) => {
          p[Q] = z - P;
        }),
          v.forEach((z, Q) => {
            v[Q] = z + P;
          });
      }
    }
    if (
      (Object.assign(e, {
        slides: u,
        snapGrid: p,
        slidesGrid: v,
        slidesSizesGrid: f,
      }),
      s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
    ) {
      Ds(n, "--swiper-centered-offset-before", `${-p[0]}px`),
        Ds(
          n,
          "--swiper-centered-offset-after",
          `${e.size / 2 - f[f.length - 1] / 2}px`,
        );
      const C = -e.snapGrid[0],
        M = -e.slidesGrid[0];
      (e.snapGrid = e.snapGrid.map((P) => P + C)),
        (e.slidesGrid = e.slidesGrid.map((P) => P + M));
    }
    if (
      (d !== c && e.emit("slidesLengthChange"),
      p.length !== S &&
        (e.params.watchOverflow && e.checkOverflow(),
        e.emit("snapGridLengthChange")),
      v.length !== h && e.emit("slidesGridLengthChange"),
      s.watchSlidesProgress && e.updateSlidesOffset(),
      e.emit("slidesUpdated"),
      !l && !s.cssMode && (s.effect === "slide" || s.effect === "fade"))
    ) {
      const C = `${s.containerModifierClass}backface-hidden`,
        M = e.el.classList.contains(C);
      d <= s.maxBackfaceHiddenSlides
        ? M || e.el.classList.add(C)
        : M && e.el.classList.remove(C);
    }
  }

  function Pm(e) {
    const t = this,
      s = [],
      n = t.virtual && t.params.virtual.enabled;
    let i = 0,
      r;
    typeof e == "number"
      ? t.setTransition(e)
      : e === !0 && t.setTransition(t.params.speed);
    const o = (a) => (n ? t.slides[t.getSlideIndexByData(a)] : t.slides[a]);
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
      if (t.params.centeredSlides)
        (t.visibleSlides || []).forEach((a) => {
          s.push(a);
        });
      else
        for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
          const a = t.activeIndex + r;
          if (a > t.slides.length && !n) break;
          s.push(o(a));
        }
    else s.push(o(t.activeIndex));
    for (r = 0; r < s.length; r += 1)
      if (typeof s[r] < "u") {
        const a = s[r].offsetHeight;
        i = a > i ? a : i;
      }
    (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
  }

  function Am() {
    const e = this,
      t = e.slides,
      s = e.isElement
        ? e.isHorizontal()
          ? e.wrapperEl.offsetLeft
          : e.wrapperEl.offsetTop
        : 0;
    for (let n = 0; n < t.length; n += 1)
      t[n].swiperSlideOffset =
        (e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop) -
        s -
        e.cssOverflowAdjustment();
  }
  const co = (e, t, s) => {
    t && !e.classList.contains(s)
      ? e.classList.add(s)
      : !t && e.classList.contains(s) && e.classList.remove(s);
  };

  function Lm(e) {
    e === void 0 && (e = (this && this.translate) || 0);
    const t = this,
      s = t.params,
      { slides: n, rtlTranslate: i, snapGrid: r } = t;
    if (n.length === 0) return;
    typeof n[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let o = -e;
    i && (o = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
    let a = s.spaceBetween;
    typeof a == "string" && a.indexOf("%") >= 0
      ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size)
      : typeof a == "string" && (a = parseFloat(a));
    for (let l = 0; l < n.length; l += 1) {
      const c = n[l];
      let u = c.swiperSlideOffset;
      s.cssMode && s.centeredSlides && (u -= n[0].swiperSlideOffset);
      const d =
          (o + (s.centeredSlides ? t.minTranslate() : 0) - u) /
          (c.swiperSlideSize + a),
        p =
          (o - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - u) /
          (c.swiperSlideSize + a),
        v = -(o - u),
        f = v + t.slidesSizesGrid[l],
        b = v >= 0 && v <= t.size - t.slidesSizesGrid[l],
        _ =
          (v >= 0 && v < t.size - 1) ||
          (f > 1 && f <= t.size) ||
          (v <= 0 && f >= t.size);
      _ && (t.visibleSlides.push(c), t.visibleSlidesIndexes.push(l)),
        co(c, _, s.slideVisibleClass),
        co(c, b, s.slideFullyVisibleClass),
        (c.progress = i ? -d : d),
        (c.originalProgress = i ? -p : p);
    }
  }

  function km(e) {
    const t = this;
    if (typeof e > "u") {
      const u = t.rtlTranslate ? -1 : 1;
      e = (t && t.translate && t.translate * u) || 0;
    }
    const s = t.params,
      n = t.maxTranslate() - t.minTranslate();
    let { progress: i, isBeginning: r, isEnd: o, progressLoop: a } = t;
    const l = r,
      c = o;
    if (n === 0) (i = 0), (r = !0), (o = !0);
    else {
      i = (e - t.minTranslate()) / n;
      const u = Math.abs(e - t.minTranslate()) < 1,
        d = Math.abs(e - t.maxTranslate()) < 1;
      (r = u || i <= 0), (o = d || i >= 1), u && (i = 0), d && (i = 1);
    }
    if (s.loop) {
      const u = t.getSlideIndexByData(0),
        d = t.getSlideIndexByData(t.slides.length - 1),
        p = t.slidesGrid[u],
        v = t.slidesGrid[d],
        f = t.slidesGrid[t.slidesGrid.length - 1],
        b = Math.abs(e);
      b >= p ? (a = (b - p) / f) : (a = (b + f - v) / f), a > 1 && (a -= 1);
    }
    Object.assign(t, {
      progress: i,
      progressLoop: a,
      isBeginning: r,
      isEnd: o,
    }),
      (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
        t.updateSlidesProgress(e),
      r && !l && t.emit("reachBeginning toEdge"),
      o && !c && t.emit("reachEnd toEdge"),
      ((l && !r) || (c && !o)) && t.emit("fromEdge"),
      t.emit("progress", i);
  }
  const Qn = (e, t, s) => {
    t && !e.classList.contains(s)
      ? e.classList.add(s)
      : !t && e.classList.contains(s) && e.classList.remove(s);
  };

  function Om() {
    const e = this,
      { slides: t, params: s, slidesEl: n, activeIndex: i } = e,
      r = e.virtual && s.virtual.enabled,
      o = e.grid && s.grid && s.grid.rows > 1,
      a = (d) => rt(n, `.${s.slideClass}${d}, swiper-slide${d}`)[0];
    let l, c, u;
    if (r)
      if (s.loop) {
        let d = i - e.virtual.slidesBefore;
        d < 0 && (d = e.virtual.slides.length + d),
          d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
          (l = a(`[data-swiper-slide-index="${d}"]`));
      } else l = a(`[data-swiper-slide-index="${i}"]`);
    else
      o
        ? ((l = t.find((d) => d.column === i)),
          (u = t.find((d) => d.column === i + 1)),
          (c = t.find((d) => d.column === i - 1)))
        : (l = t[i]);
    l &&
      (o ||
        ((u = ym(l, `.${s.slideClass}, swiper-slide`)[0]),
        s.loop && !u && (u = t[0]),
        (c = vm(l, `.${s.slideClass}, swiper-slide`)[0]),
        s.loop && !c === 0 && (c = t[t.length - 1]))),
      t.forEach((d) => {
        Qn(d, d === l, s.slideActiveClass),
          Qn(d, d === u, s.slideNextClass),
          Qn(d, d === c, s.slidePrevClass);
      }),
      e.emitSlidesClasses();
  }
  const Gs = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const s = () =>
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
        n = t.closest(s());
      if (n) {
        let i = n.querySelector(`.${e.params.lazyPreloaderClass}`);
        !i &&
          e.isElement &&
          (n.shadowRoot
            ? (i = n.shadowRoot.querySelector(
                `.${e.params.lazyPreloaderClass}`,
              ))
            : requestAnimationFrame(() => {
                n.shadowRoot &&
                  ((i = n.shadowRoot.querySelector(
                    `.${e.params.lazyPreloaderClass}`,
                  )),
                  i && i.remove());
              })),
          i && i.remove();
      }
    },
    Zn = (e, t) => {
      if (!e.slides[t]) return;
      const s = e.slides[t].querySelector('[loading="lazy"]');
      s && s.removeAttribute("loading");
    },
    Pi = (e) => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const s = e.slides.length;
      if (!s || !t || t < 0) return;
      t = Math.min(t, s);
      const n =
          e.params.slidesPerView === "auto"
            ? e.slidesPerViewDynamic()
            : Math.ceil(e.params.slidesPerView),
        i = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        const o = i,
          a = [o - t];
        a.push(
          ...Array.from({
            length: t,
          }).map((l, c) => o + n + c),
        ),
          e.slides.forEach((l, c) => {
            a.includes(l.column) && Zn(e, c);
          });
        return;
      }
      const r = i + n - 1;
      if (e.params.rewind || e.params.loop)
        for (let o = i - t; o <= r + t; o += 1) {
          const a = ((o % s) + s) % s;
          (a < i || a > r) && Zn(e, a);
        }
      else
        for (let o = Math.max(i - t, 0); o <= Math.min(r + t, s - 1); o += 1)
          o !== i && (o > r || o < i) && Zn(e, o);
    };

  function Mm(e) {
    const { slidesGrid: t, params: s } = e,
      n = e.rtlTranslate ? e.translate : -e.translate;
    let i;
    for (let r = 0; r < t.length; r += 1)
      typeof t[r + 1] < "u"
        ? n >= t[r] && n < t[r + 1] - (t[r + 1] - t[r]) / 2
          ? (i = r)
          : n >= t[r] && n < t[r + 1] && (i = r + 1)
        : n >= t[r] && (i = r);
    return s.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
  }

  function Im(e) {
    const t = this,
      s = t.rtlTranslate ? t.translate : -t.translate,
      {
        snapGrid: n,
        params: i,
        activeIndex: r,
        realIndex: o,
        snapIndex: a,
      } = t;
    let l = e,
      c;
    const u = (v) => {
      let f = v - t.virtual.slidesBefore;
      return (
        f < 0 && (f = t.virtual.slides.length + f),
        f >= t.virtual.slides.length && (f -= t.virtual.slides.length),
        f
      );
    };
    if ((typeof l > "u" && (l = Mm(t)), n.indexOf(s) >= 0)) c = n.indexOf(s);
    else {
      const v = Math.min(i.slidesPerGroupSkip, l);
      c = v + Math.floor((l - v) / i.slidesPerGroup);
    }
    if ((c >= n.length && (c = n.length - 1), l === r && !t.params.loop)) {
      c !== a && ((t.snapIndex = c), t.emit("snapIndexChange"));
      return;
    }
    if (l === r && t.params.loop && t.virtual && t.params.virtual.enabled) {
      t.realIndex = u(l);
      return;
    }
    const d = t.grid && i.grid && i.grid.rows > 1;
    let p;
    if (t.virtual && i.virtual.enabled && i.loop) p = u(l);
    else if (d) {
      const v = t.slides.find((b) => b.column === l);
      let f = parseInt(v.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(f) && (f = Math.max(t.slides.indexOf(v), 0)),
        (p = Math.floor(f / i.grid.rows));
    } else if (t.slides[l]) {
      const v = t.slides[l].getAttribute("data-swiper-slide-index");
      v ? (p = parseInt(v, 10)) : (p = l);
    } else p = l;
    Object.assign(t, {
      previousSnapIndex: a,
      snapIndex: c,
      previousRealIndex: o,
      realIndex: p,
      previousIndex: r,
      activeIndex: l,
    }),
      t.initialized && Pi(t),
      t.emit("activeIndexChange"),
      t.emit("snapIndexChange"),
      (t.initialized || t.params.runCallbacksOnInit) &&
        (o !== p && t.emit("realIndexChange"), t.emit("slideChange"));
  }

  function Rm(e, t) {
    const s = this,
      n = s.params;
    let i = e.closest(`.${n.slideClass}, swiper-slide`);
    !i &&
      s.isElement &&
      t &&
      t.length > 1 &&
      t.includes(e) &&
      [...t.slice(t.indexOf(e) + 1, t.length)].forEach((a) => {
        !i &&
          a.matches &&
          a.matches(`.${n.slideClass}, swiper-slide`) &&
          (i = a);
      });
    let r = !1,
      o;
    if (i) {
      for (let a = 0; a < s.slides.length; a += 1)
        if (s.slides[a] === i) {
          (r = !0), (o = a);
          break;
        }
    }
    if (i && r)
      (s.clickedSlide = i),
        s.virtual && s.params.virtual.enabled
          ? (s.clickedIndex = parseInt(
              i.getAttribute("data-swiper-slide-index"),
              10,
            ))
          : (s.clickedIndex = o);
    else {
      (s.clickedSlide = void 0), (s.clickedIndex = void 0);
      return;
    }
    n.slideToClickedSlide &&
      s.clickedIndex !== void 0 &&
      s.clickedIndex !== s.activeIndex &&
      s.slideToClickedSlide();
  }
  var Nm = {
    updateSize: Em,
    updateSlides: Cm,
    updateAutoHeight: Pm,
    updateSlidesOffset: Am,
    updateSlidesProgress: Lm,
    updateProgress: km,
    updateSlidesClasses: Om,
    updateActiveIndex: Im,
    updateClickedSlide: Rm,
  };

  function Dm(e) {
    e === void 0 && (e = this.isHorizontal() ? "x" : "y");
    const t = this,
      { params: s, rtlTranslate: n, translate: i, wrapperEl: r } = t;
    if (s.virtualTranslate) return n ? -i : i;
    if (s.cssMode) return i;
    let o = pm(r, e);
    return (o += t.cssOverflowAdjustment()), n && (o = -o), o || 0;
  }

  function Bm(e, t) {
    const s = this,
      { rtlTranslate: n, params: i, wrapperEl: r, progress: o } = s;
    let a = 0,
      l = 0;
    const c = 0;
    s.isHorizontal() ? (a = n ? -e : e) : (l = e),
      i.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))),
      (s.previousTranslate = s.translate),
      (s.translate = s.isHorizontal() ? a : l),
      i.cssMode
        ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
            ? -a
            : -l)
        : i.virtualTranslate ||
          (s.isHorizontal()
            ? (a -= s.cssOverflowAdjustment())
            : (l -= s.cssOverflowAdjustment()),
          (r.style.transform = `translate3d(${a}px, ${l}px, ${c}px)`));
    let u;
    const d = s.maxTranslate() - s.minTranslate();
    d === 0 ? (u = 0) : (u = (e - s.minTranslate()) / d),
      u !== o && s.updateProgress(e),
      s.emit("setTranslate", s.translate, t);
  }

  function Fm() {
    return -this.snapGrid[0];
  }

  function Vm() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }

  function Hm(e, t, s, n, i) {
    e === void 0 && (e = 0),
      t === void 0 && (t = this.params.speed),
      s === void 0 && (s = !0),
      n === void 0 && (n = !0);
    const r = this,
      { params: o, wrapperEl: a } = r;
    if (r.animating && o.preventInteractionOnTransition) return !1;
    const l = r.minTranslate(),
      c = r.maxTranslate();
    let u;
    if (
      (n && e > l ? (u = l) : n && e < c ? (u = c) : (u = e),
      r.updateProgress(u),
      o.cssMode)
    ) {
      const d = r.isHorizontal();
      if (t === 0) a[d ? "scrollLeft" : "scrollTop"] = -u;
      else {
        if (!r.support.smoothScroll)
          return (
            fl({
              swiper: r,
              targetPosition: -u,
              side: d ? "left" : "top",
            }),
            !0
          );
        a.scrollTo({
          [d ? "left" : "top"]: -u,
          behavior: "smooth",
        });
      }
      return !0;
    }
    return (
      t === 0
        ? (r.setTransition(0),
          r.setTranslate(u),
          s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd")))
        : (r.setTransition(t),
          r.setTranslate(u),
          s &&
            (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")),
          r.animating ||
            ((r.animating = !0),
            r.onTranslateToWrapperTransitionEnd ||
              (r.onTranslateToWrapperTransitionEnd = function (p) {
                !r ||
                  r.destroyed ||
                  (p.target === this &&
                    (r.wrapperEl.removeEventListener(
                      "transitionend",
                      r.onTranslateToWrapperTransitionEnd,
                    ),
                    (r.onTranslateToWrapperTransitionEnd = null),
                    delete r.onTranslateToWrapperTransitionEnd,
                    (r.animating = !1),
                    s && r.emit("transitionEnd")));
              }),
            r.wrapperEl.addEventListener(
              "transitionend",
              r.onTranslateToWrapperTransitionEnd,
            ))),
      !0
    );
  }
  var $m = {
    getTranslate: Dm,
    setTranslate: Bm,
    minTranslate: Fm,
    maxTranslate: Vm,
    translateTo: Hm,
  };

  function jm(e, t) {
    const s = this;
    s.params.cssMode ||
      ((s.wrapperEl.style.transitionDuration = `${e}ms`),
      (s.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
      s.emit("setTransition", e, t);
  }

  function vl(e) {
    let { swiper: t, runCallbacks: s, direction: n, step: i } = e;
    const { activeIndex: r, previousIndex: o } = t;
    let a = n;
    if (
      (a || (r > o ? (a = "next") : r < o ? (a = "prev") : (a = "reset")),
      t.emit(`transition${i}`),
      s && r !== o)
    ) {
      if (a === "reset") {
        t.emit(`slideResetTransition${i}`);
        return;
      }
      t.emit(`slideChangeTransition${i}`),
        a === "next"
          ? t.emit(`slideNextTransition${i}`)
          : t.emit(`slidePrevTransition${i}`);
    }
  }

  function zm(e, t) {
    e === void 0 && (e = !0);
    const s = this,
      { params: n } = s;
    n.cssMode ||
      (n.autoHeight && s.updateAutoHeight(),
      vl({
        swiper: s,
        runCallbacks: e,
        direction: t,
        step: "Start",
      }));
  }

  function qm(e, t) {
    e === void 0 && (e = !0);
    const s = this,
      { params: n } = s;
    (s.animating = !1),
      !n.cssMode &&
        (s.setTransition(0),
        vl({
          swiper: s,
          runCallbacks: e,
          direction: t,
          step: "End",
        }));
  }
  var Gm = {
    setTransition: jm,
    transitionStart: zm,
    transitionEnd: qm,
  };

  function Um(e, t, s, n, i) {
    e === void 0 && (e = 0),
      s === void 0 && (s = !0),
      typeof e == "string" && (e = parseInt(e, 10));
    const r = this;
    let o = e;
    o < 0 && (o = 0);
    const {
      params: a,
      snapGrid: l,
      slidesGrid: c,
      previousIndex: u,
      activeIndex: d,
      rtlTranslate: p,
      wrapperEl: v,
      enabled: f,
    } = r;
    if (
      (!f && !n && !i) ||
      r.destroyed ||
      (r.animating && a.preventInteractionOnTransition)
    )
      return !1;
    typeof t > "u" && (t = r.params.speed);
    const b = Math.min(r.params.slidesPerGroupSkip, o);
    let _ = b + Math.floor((o - b) / r.params.slidesPerGroup);
    _ >= l.length && (_ = l.length - 1);
    const S = -l[_];
    if (a.normalizeSlideIndex)
      for (let $ = 0; $ < c.length; $ += 1) {
        const j = -Math.floor(S * 100),
          I = Math.floor(c[$] * 100),
          C = Math.floor(c[$ + 1] * 100);
        typeof c[$ + 1] < "u"
          ? j >= I && j < C - (C - I) / 2
            ? (o = $)
            : j >= I && j < C && (o = $ + 1)
          : j >= I && (o = $);
      }
    if (
      r.initialized &&
      o !== d &&
      ((!r.allowSlideNext &&
        (p
          ? S > r.translate && S > r.minTranslate()
          : S < r.translate && S < r.minTranslate())) ||
        (!r.allowSlidePrev &&
          S > r.translate &&
          S > r.maxTranslate() &&
          (d || 0) !== o))
    )
      return !1;
    o !== (u || 0) && s && r.emit("beforeSlideChangeStart"),
      r.updateProgress(S);
    let h;
    o > d ? (h = "next") : o < d ? (h = "prev") : (h = "reset");
    const g = r.virtual && r.params.virtual.enabled;
    if (!(g && i) && ((p && -S === r.translate) || (!p && S === r.translate)))
      return (
        r.updateActiveIndex(o),
        a.autoHeight && r.updateAutoHeight(),
        r.updateSlidesClasses(),
        a.effect !== "slide" && r.setTranslate(S),
        h !== "reset" && (r.transitionStart(s, h), r.transitionEnd(s, h)),
        !1
      );
    if (a.cssMode) {
      const $ = r.isHorizontal(),
        j = p ? S : -S;
      if (t === 0)
        g &&
          ((r.wrapperEl.style.scrollSnapType = "none"),
          (r._immediateVirtual = !0)),
          g && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
            ? ((r._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                v[$ ? "scrollLeft" : "scrollTop"] = j;
              }))
            : (v[$ ? "scrollLeft" : "scrollTop"] = j),
          g &&
            requestAnimationFrame(() => {
              (r.wrapperEl.style.scrollSnapType = ""),
                (r._immediateVirtual = !1);
            });
      else {
        if (!r.support.smoothScroll)
          return (
            fl({
              swiper: r,
              targetPosition: j,
              side: $ ? "left" : "top",
            }),
            !0
          );
        v.scrollTo({
          [$ ? "left" : "top"]: j,
          behavior: "smooth",
        });
      }
      return !0;
    }
    const B = gl().isSafari;
    return (
      g && !i && B && r.isElement && r.virtual.update(!1, !1, o),
      r.setTransition(t),
      r.setTranslate(S),
      r.updateActiveIndex(o),
      r.updateSlidesClasses(),
      r.emit("beforeTransitionStart", t, n),
      r.transitionStart(s, h),
      t === 0
        ? r.transitionEnd(s, h)
        : r.animating ||
          ((r.animating = !0),
          r.onSlideToWrapperTransitionEnd ||
            (r.onSlideToWrapperTransitionEnd = function (j) {
              !r ||
                r.destroyed ||
                (j.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd,
                  ),
                  (r.onSlideToWrapperTransitionEnd = null),
                  delete r.onSlideToWrapperTransitionEnd,
                  r.transitionEnd(s, h)));
            }),
          r.wrapperEl.addEventListener(
            "transitionend",
            r.onSlideToWrapperTransitionEnd,
          )),
      !0
    );
  }

  function Wm(e, t, s, n) {
    e === void 0 && (e = 0),
      s === void 0 && (s = !0),
      typeof e == "string" && (e = parseInt(e, 10));
    const i = this;
    if (i.destroyed) return;
    typeof t > "u" && (t = i.params.speed);
    const r = i.grid && i.params.grid && i.params.grid.rows > 1;
    let o = e;
    if (i.params.loop)
      if (i.virtual && i.params.virtual.enabled) o = o + i.virtual.slidesBefore;
      else {
        let a;
        if (r) {
          const p = o * i.params.grid.rows;
          a = i.slides.find(
            (v) => v.getAttribute("data-swiper-slide-index") * 1 === p,
          ).column;
        } else a = i.getSlideIndexByData(o);
        const l = r
            ? Math.ceil(i.slides.length / i.params.grid.rows)
            : i.slides.length,
          { centeredSlides: c } = i.params;
        let u = i.params.slidesPerView;
        u === "auto"
          ? (u = i.slidesPerViewDynamic())
          : ((u = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
            c && u % 2 === 0 && (u = u + 1));
        let d = l - a < u;
        if (
          (c && (d = d || a < Math.ceil(u / 2)),
          n && c && i.params.slidesPerView !== "auto" && !r && (d = !1),
          d)
        ) {
          const p = c
            ? a < i.activeIndex
              ? "prev"
              : "next"
            : a - i.activeIndex - 1 < i.params.slidesPerView
              ? "next"
              : "prev";
          i.loopFix({
            direction: p,
            slideTo: !0,
            activeSlideIndex: p === "next" ? a + 1 : a - l + 1,
            slideRealIndex: p === "next" ? i.realIndex : void 0,
          });
        }
        if (r) {
          const p = o * i.params.grid.rows;
          o = i.slides.find(
            (v) => v.getAttribute("data-swiper-slide-index") * 1 === p,
          ).column;
        } else o = i.getSlideIndexByData(o);
      }
    return (
      requestAnimationFrame(() => {
        i.slideTo(o, t, s, n);
      }),
      i
    );
  }

  function Km(e, t, s) {
    t === void 0 && (t = !0);
    const n = this,
      { enabled: i, params: r, animating: o } = n;
    if (!i || n.destroyed) return n;
    typeof e > "u" && (e = n.params.speed);
    let a = r.slidesPerGroup;
    r.slidesPerView === "auto" &&
      r.slidesPerGroup === 1 &&
      r.slidesPerGroupAuto &&
      (a = Math.max(n.slidesPerViewDynamic("current", !0), 1));
    const l = n.activeIndex < r.slidesPerGroupSkip ? 1 : a,
      c = n.virtual && r.virtual.enabled;
    if (r.loop) {
      if (o && !c && r.loopPreventsSliding) return !1;
      if (
        (n.loopFix({
          direction: "next",
        }),
        (n._clientLeft = n.wrapperEl.clientLeft),
        n.activeIndex === n.slides.length - 1 && r.cssMode)
      )
        return (
          requestAnimationFrame(() => {
            n.slideTo(n.activeIndex + l, e, t, s);
          }),
          !0
        );
    }
    return r.rewind && n.isEnd
      ? n.slideTo(0, e, t, s)
      : n.slideTo(n.activeIndex + l, e, t, s);
  }

  function Ym(e, t, s) {
    t === void 0 && (t = !0);
    const n = this,
      {
        params: i,
        snapGrid: r,
        slidesGrid: o,
        rtlTranslate: a,
        enabled: l,
        animating: c,
      } = n;
    if (!l || n.destroyed) return n;
    typeof e > "u" && (e = n.params.speed);
    const u = n.virtual && i.virtual.enabled;
    if (i.loop) {
      if (c && !u && i.loopPreventsSliding) return !1;
      n.loopFix({
        direction: "prev",
      }),
        (n._clientLeft = n.wrapperEl.clientLeft);
    }
    const d = a ? n.translate : -n.translate;

    function p(h) {
      return h < 0 ? -Math.floor(Math.abs(h)) : Math.floor(h);
    }
    const v = p(d),
      f = r.map((h) => p(h)),
      b = i.freeMode && i.freeMode.enabled;
    let _ = r[f.indexOf(v) - 1];
    if (typeof _ > "u" && (i.cssMode || b)) {
      let h;
      r.forEach((g, w) => {
        v >= g && (h = w);
      }),
        typeof h < "u" && (_ = b ? r[h] : r[h > 0 ? h - 1 : h]);
    }
    let S = 0;
    if (
      (typeof _ < "u" &&
        ((S = o.indexOf(_)),
        S < 0 && (S = n.activeIndex - 1),
        i.slidesPerView === "auto" &&
          i.slidesPerGroup === 1 &&
          i.slidesPerGroupAuto &&
          ((S = S - n.slidesPerViewDynamic("previous", !0) + 1),
          (S = Math.max(S, 0)))),
      i.rewind && n.isBeginning)
    ) {
      const h =
        n.params.virtual && n.params.virtual.enabled && n.virtual
          ? n.virtual.slides.length - 1
          : n.slides.length - 1;
      return n.slideTo(h, e, t, s);
    } else if (i.loop && n.activeIndex === 0 && i.cssMode)
      return (
        requestAnimationFrame(() => {
          n.slideTo(S, e, t, s);
        }),
        !0
      );
    return n.slideTo(S, e, t, s);
  }

  function Xm(e, t, s) {
    t === void 0 && (t = !0);
    const n = this;
    if (!n.destroyed)
      return (
        typeof e > "u" && (e = n.params.speed),
        n.slideTo(n.activeIndex, e, t, s)
      );
  }

  function Jm(e, t, s, n) {
    t === void 0 && (t = !0), n === void 0 && (n = 0.5);
    const i = this;
    if (i.destroyed) return;
    typeof e > "u" && (e = i.params.speed);
    let r = i.activeIndex;
    const o = Math.min(i.params.slidesPerGroupSkip, r),
      a = o + Math.floor((r - o) / i.params.slidesPerGroup),
      l = i.rtlTranslate ? i.translate : -i.translate;
    if (l >= i.snapGrid[a]) {
      const c = i.snapGrid[a],
        u = i.snapGrid[a + 1];
      l - c > (u - c) * n && (r += i.params.slidesPerGroup);
    } else {
      const c = i.snapGrid[a - 1],
        u = i.snapGrid[a];
      l - c <= (u - c) * n && (r -= i.params.slidesPerGroup);
    }
    return (
      (r = Math.max(r, 0)),
      (r = Math.min(r, i.slidesGrid.length - 1)),
      i.slideTo(r, e, t, s)
    );
  }

  function Qm() {
    const e = this;
    if (e.destroyed) return;
    const { params: t, slidesEl: s } = e,
      n =
        t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let i = e.clickedIndex,
      r;
    const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
    if (t.loop) {
      if (e.animating) return;
      (r = parseInt(
        e.clickedSlide.getAttribute("data-swiper-slide-index"),
        10,
      )),
        t.centeredSlides
          ? i < e.loopedSlides - n / 2 ||
            i > e.slides.length - e.loopedSlides + n / 2
            ? (e.loopFix(),
              (i = e.getSlideIndex(
                rt(s, `${o}[data-swiper-slide-index="${r}"]`)[0],
              )),
              Ei(() => {
                e.slideTo(i);
              }))
            : e.slideTo(i)
          : i > e.slides.length - n
            ? (e.loopFix(),
              (i = e.getSlideIndex(
                rt(s, `${o}[data-swiper-slide-index="${r}"]`)[0],
              )),
              Ei(() => {
                e.slideTo(i);
              }))
            : e.slideTo(i);
    } else e.slideTo(i);
  }
  var Zm = {
    slideTo: Um,
    slideToLoop: Wm,
    slideNext: Km,
    slidePrev: Ym,
    slideReset: Xm,
    slideToClosest: Jm,
    slideToClickedSlide: Qm,
  };

  function eg(e, t) {
    const s = this,
      { params: n, slidesEl: i } = s;
    if (!n.loop || (s.virtual && s.params.virtual.enabled)) return;
    const r = () => {
        rt(i, `.${n.slideClass}, swiper-slide`).forEach((p, v) => {
          p.setAttribute("data-swiper-slide-index", v);
        });
      },
      o = s.grid && n.grid && n.grid.rows > 1,
      a = n.slidesPerGroup * (o ? n.grid.rows : 1),
      l = s.slides.length % a !== 0,
      c = o && s.slides.length % n.grid.rows !== 0,
      u = (d) => {
        for (let p = 0; p < d; p += 1) {
          const v = s.isElement
            ? un("swiper-slide", [n.slideBlankClass])
            : un("div", [n.slideClass, n.slideBlankClass]);
          s.slidesEl.append(v);
        }
      };
    if (l) {
      if (n.loopAddBlankSlides) {
        const d = a - (s.slides.length % a);
        u(d), s.recalcSlides(), s.updateSlides();
      } else
        cn(
          "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
        );
      r();
    } else if (c) {
      if (n.loopAddBlankSlides) {
        const d = n.grid.rows - (s.slides.length % n.grid.rows);
        u(d), s.recalcSlides(), s.updateSlides();
      } else
        cn(
          "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
        );
      r();
    } else r();
    s.loopFix({
      slideRealIndex: e,
      direction: n.centeredSlides ? void 0 : "next",
      initial: t,
    });
  }

  function tg(e) {
    let {
      slideRealIndex: t,
      slideTo: s = !0,
      direction: n,
      setTranslate: i,
      activeSlideIndex: r,
      initial: o,
      byController: a,
      byMousewheel: l,
    } = e === void 0 ? {} : e;
    const c = this;
    if (!c.params.loop) return;
    c.emit("beforeLoopFix");
    const {
        slides: u,
        allowSlidePrev: d,
        allowSlideNext: p,
        slidesEl: v,
        params: f,
      } = c,
      { centeredSlides: b, initialSlide: _ } = f;
    if (
      ((c.allowSlidePrev = !0),
      (c.allowSlideNext = !0),
      c.virtual && f.virtual.enabled)
    ) {
      s &&
        (!f.centeredSlides && c.snapIndex === 0
          ? c.slideTo(c.virtual.slides.length, 0, !1, !0)
          : f.centeredSlides && c.snapIndex < f.slidesPerView
            ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0)
            : c.snapIndex === c.snapGrid.length - 1 &&
              c.slideTo(c.virtual.slidesBefore, 0, !1, !0)),
        (c.allowSlidePrev = d),
        (c.allowSlideNext = p),
        c.emit("loopFix");
      return;
    }
    let S = f.slidesPerView;
    S === "auto"
      ? (S = c.slidesPerViewDynamic())
      : ((S = Math.ceil(parseFloat(f.slidesPerView, 10))),
        b && S % 2 === 0 && (S = S + 1));
    const h = f.slidesPerGroupAuto ? S : f.slidesPerGroup;
    let g = h;
    g % h !== 0 && (g += h - (g % h)),
      (g += f.loopAdditionalSlides),
      (c.loopedSlides = g);
    const w = c.grid && f.grid && f.grid.rows > 1;
    u.length < S + g || (c.params.effect === "cards" && u.length < S + g * 2)
      ? cn(
          "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
        )
      : w &&
        f.grid.fill === "row" &&
        cn(
          "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
        );
    const T = [],
      B = [],
      $ = w ? Math.ceil(u.length / f.grid.rows) : u.length,
      j = o && $ - _ < S && !b;
    let I = j ? _ : c.activeIndex;
    typeof r > "u"
      ? (r = c.getSlideIndex(
          u.find((G) => G.classList.contains(f.slideActiveClass)),
        ))
      : (I = r);
    const C = n === "next" || !n,
      M = n === "prev" || !n;
    let P = 0,
      z = 0;
    const te = (w ? u[r].column : r) + (b && typeof i > "u" ? -S / 2 + 0.5 : 0);
    if (te < g) {
      P = Math.max(g - te, h);
      for (let G = 0; G < g - te; G += 1) {
        const Z = G - Math.floor(G / $) * $;
        if (w) {
          const H = $ - Z - 1;
          for (let ae = u.length - 1; ae >= 0; ae -= 1)
            u[ae].column === H && T.push(ae);
        } else T.push($ - Z - 1);
      }
    } else if (te + S > $ - g) {
      (z = Math.max(te - ($ - g * 2), h)),
        j && (z = Math.max(z, S - $ + _ + 1));
      for (let G = 0; G < z; G += 1) {
        const Z = G - Math.floor(G / $) * $;
        w
          ? u.forEach((H, ae) => {
              H.column === Z && B.push(ae);
            })
          : B.push(Z);
      }
    }
    if (
      ((c.__preventObserver__ = !0),
      requestAnimationFrame(() => {
        c.__preventObserver__ = !1;
      }),
      c.params.effect === "cards" &&
        u.length < S + g * 2 &&
        (B.includes(r) && B.splice(B.indexOf(r), 1),
        T.includes(r) && T.splice(T.indexOf(r), 1)),
      M &&
        T.forEach((G) => {
          (u[G].swiperLoopMoveDOM = !0),
            v.prepend(u[G]),
            (u[G].swiperLoopMoveDOM = !1);
        }),
      C &&
        B.forEach((G) => {
          (u[G].swiperLoopMoveDOM = !0),
            v.append(u[G]),
            (u[G].swiperLoopMoveDOM = !1);
        }),
      c.recalcSlides(),
      f.slidesPerView === "auto"
        ? c.updateSlides()
        : w &&
          ((T.length > 0 && M) || (B.length > 0 && C)) &&
          c.slides.forEach((G, Z) => {
            c.grid.updateSlide(Z, G, c.slides);
          }),
      f.watchSlidesProgress && c.updateSlidesOffset(),
      s)
    ) {
      if (T.length > 0 && M) {
        if (typeof t > "u") {
          const G = c.slidesGrid[I],
            H = c.slidesGrid[I + P] - G;
          l
            ? c.setTranslate(c.translate - H)
            : (c.slideTo(I + Math.ceil(P), 0, !1, !0),
              i &&
                ((c.touchEventsData.startTranslate =
                  c.touchEventsData.startTranslate - H),
                (c.touchEventsData.currentTranslate =
                  c.touchEventsData.currentTranslate - H)));
        } else if (i) {
          const G = w ? T.length / f.grid.rows : T.length;
          c.slideTo(c.activeIndex + G, 0, !1, !0),
            (c.touchEventsData.currentTranslate = c.translate);
        }
      } else if (B.length > 0 && C)
        if (typeof t > "u") {
          const G = c.slidesGrid[I],
            H = c.slidesGrid[I - z] - G;
          l
            ? c.setTranslate(c.translate - H)
            : (c.slideTo(I - z, 0, !1, !0),
              i &&
                ((c.touchEventsData.startTranslate =
                  c.touchEventsData.startTranslate - H),
                (c.touchEventsData.currentTranslate =
                  c.touchEventsData.currentTranslate - H)));
        } else {
          const G = w ? B.length / f.grid.rows : B.length;
          c.slideTo(c.activeIndex - G, 0, !1, !0);
        }
    }
    if (
      ((c.allowSlidePrev = d),
      (c.allowSlideNext = p),
      c.controller && c.controller.control && !a)
    ) {
      const G = {
        slideRealIndex: t,
        direction: n,
        setTranslate: i,
        activeSlideIndex: r,
        byController: !0,
      };
      Array.isArray(c.controller.control)
        ? c.controller.control.forEach((Z) => {
            !Z.destroyed &&
              Z.params.loop &&
              Z.loopFix({
                ...G,
                slideTo: Z.params.slidesPerView === f.slidesPerView ? s : !1,
              });
          })
        : c.controller.control instanceof c.constructor &&
          c.controller.control.params.loop &&
          c.controller.control.loopFix({
            ...G,
            slideTo:
              c.controller.control.params.slidesPerView === f.slidesPerView
                ? s
                : !1,
          });
    }
    c.emit("loopFix");
  }

  function sg() {
    const e = this,
      { params: t, slidesEl: s } = e;
    if (!t.loop || !s || (e.virtual && e.params.virtual.enabled)) return;
    e.recalcSlides();
    const n = [];
    e.slides.forEach((i) => {
      const r =
        typeof i.swiperSlideIndex > "u"
          ? i.getAttribute("data-swiper-slide-index") * 1
          : i.swiperSlideIndex;
      n[r] = i;
    }),
      e.slides.forEach((i) => {
        i.removeAttribute("data-swiper-slide-index");
      }),
      n.forEach((i) => {
        s.append(i);
      }),
      e.recalcSlides(),
      e.slideTo(e.realIndex, 0);
  }
  var ng = {
    loopCreate: eg,
    loopFix: tg,
    loopDestroy: sg,
  };

  function ig(e) {
    const t = this;
    if (
      !t.params.simulateTouch ||
      (t.params.watchOverflow && t.isLocked) ||
      t.params.cssMode
    )
      return;
    const s = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = !0),
      (s.style.cursor = "move"),
      (s.style.cursor = e ? "grabbing" : "grab"),
      t.isElement &&
        requestAnimationFrame(() => {
          t.__preventObserver__ = !1;
        });
  }

  function rg() {
    const e = this;
    (e.params.watchOverflow && e.isLocked) ||
      e.params.cssMode ||
      (e.isElement && (e.__preventObserver__ = !0),
      (e[
        e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
      ].style.cursor = ""),
      e.isElement &&
        requestAnimationFrame(() => {
          e.__preventObserver__ = !1;
        }));
  }
  var og = {
    setGrabCursor: ig,
    unsetGrabCursor: rg,
  };

  function ag(e, t) {
    t === void 0 && (t = this);

    function s(n) {
      if (!n || n === at() || n === Ie()) return null;
      n.assignedSlot && (n = n.assignedSlot);
      const i = n.closest(e);
      return !i && !n.getRootNode ? null : i || s(n.getRootNode().host);
    }
    return s(t);
  }

  function uo(e, t, s) {
    const n = Ie(),
      { params: i } = e,
      r = i.edgeSwipeDetection,
      o = i.edgeSwipeThreshold;
    return r && (s <= o || s >= n.innerWidth - o)
      ? r === "prevent"
        ? (t.preventDefault(), !0)
        : !1
      : !0;
  }

  function lg(e) {
    const t = this,
      s = at();
    let n = e;
    n.originalEvent && (n = n.originalEvent);
    const i = t.touchEventsData;
    if (n.type === "pointerdown") {
      if (i.pointerId !== null && i.pointerId !== n.pointerId) return;
      i.pointerId = n.pointerId;
    } else
      n.type === "touchstart" &&
        n.targetTouches.length === 1 &&
        (i.touchId = n.targetTouches[0].identifier);
    if (n.type === "touchstart") {
      uo(t, n, n.targetTouches[0].pageX);
      return;
    }
    const { params: r, touches: o, enabled: a } = t;
    if (
      !a ||
      (!r.simulateTouch && n.pointerType === "mouse") ||
      (t.animating && r.preventInteractionOnTransition)
    )
      return;
    !t.animating && r.cssMode && r.loop && t.loopFix();
    let l = n.target;
    if (
      (r.touchEventsTarget === "wrapper" && !gm(l, t.wrapperEl)) ||
      ("which" in n && n.which === 3) ||
      ("button" in n && n.button > 0) ||
      (i.isTouched && i.isMoved)
    )
      return;
    const c = !!r.noSwipingClass && r.noSwipingClass !== "",
      u = n.composedPath ? n.composedPath() : n.path;
    c && n.target && n.target.shadowRoot && u && (l = u[0]);
    const d = r.noSwipingSelector
        ? r.noSwipingSelector
        : `.${r.noSwipingClass}`,
      p = !!(n.target && n.target.shadowRoot);
    if (r.noSwiping && (p ? ag(d, l) : l.closest(d))) {
      t.allowClick = !0;
      return;
    }
    if (r.swipeHandler && !l.closest(r.swipeHandler)) return;
    (o.currentX = n.pageX), (o.currentY = n.pageY);
    const v = o.currentX,
      f = o.currentY;
    if (!uo(t, n, v)) return;
    Object.assign(i, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (o.startX = v),
      (o.startY = f),
      (i.touchStartTime = ln()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      r.threshold > 0 && (i.allowThresholdMove = !1);
    let b = !0;
    l.matches(i.focusableElements) &&
      ((b = !1), l.nodeName === "SELECT" && (i.isTouched = !1)),
      s.activeElement &&
        s.activeElement.matches(i.focusableElements) &&
        s.activeElement !== l &&
        (n.pointerType === "mouse" ||
          (n.pointerType !== "mouse" && !l.matches(i.focusableElements))) &&
        s.activeElement.blur();
    const _ = b && t.allowTouchMove && r.touchStartPreventDefault;
    (r.touchStartForcePreventDefault || _) &&
      !l.isContentEditable &&
      n.preventDefault(),
      r.freeMode &&
        r.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !r.cssMode &&
        t.freeMode.onTouchStart(),
      t.emit("touchStart", n);
  }

  function cg(e) {
    const t = at(),
      s = this,
      n = s.touchEventsData,
      { params: i, touches: r, rtlTranslate: o, enabled: a } = s;
    if (!a || (!i.simulateTouch && e.pointerType === "mouse")) return;
    let l = e;
    if (
      (l.originalEvent && (l = l.originalEvent),
      l.type === "pointermove" &&
        (n.touchId !== null || l.pointerId !== n.pointerId))
    )
      return;
    let c;
    if (l.type === "touchmove") {
      if (
        ((c = [...l.changedTouches].find((T) => T.identifier === n.touchId)),
        !c || c.identifier !== n.touchId)
      )
        return;
    } else c = l;
    if (!n.isTouched) {
      n.startMoving && n.isScrolling && s.emit("touchMoveOpposite", l);
      return;
    }
    const u = c.pageX,
      d = c.pageY;
    if (l.preventedByNestedSwiper) {
      (r.startX = u), (r.startY = d);
      return;
    }
    if (!s.allowTouchMove) {
      l.target.matches(n.focusableElements) || (s.allowClick = !1),
        n.isTouched &&
          (Object.assign(r, {
            startX: u,
            startY: d,
            currentX: u,
            currentY: d,
          }),
          (n.touchStartTime = ln()));
      return;
    }
    if (i.touchReleaseOnEdges && !i.loop)
      if (s.isVertical()) {
        if (
          (d < r.startY && s.translate <= s.maxTranslate()) ||
          (d > r.startY && s.translate >= s.minTranslate())
        ) {
          (n.isTouched = !1), (n.isMoved = !1);
          return;
        }
      } else {
        if (
          o &&
          ((u > r.startX && -s.translate <= s.maxTranslate()) ||
            (u < r.startX && -s.translate >= s.minTranslate()))
        )
          return;
        if (
          !o &&
          ((u < r.startX && s.translate <= s.maxTranslate()) ||
            (u > r.startX && s.translate >= s.minTranslate()))
        )
          return;
      }
    if (
      (t.activeElement &&
        t.activeElement.matches(n.focusableElements) &&
        t.activeElement !== l.target &&
        l.pointerType !== "mouse" &&
        t.activeElement.blur(),
      t.activeElement &&
        l.target === t.activeElement &&
        l.target.matches(n.focusableElements))
    ) {
      (n.isMoved = !0), (s.allowClick = !1);
      return;
    }
    n.allowTouchCallbacks && s.emit("touchMove", l),
      (r.previousX = r.currentX),
      (r.previousY = r.currentY),
      (r.currentX = u),
      (r.currentY = d);
    const p = r.currentX - r.startX,
      v = r.currentY - r.startY;
    if (s.params.threshold && Math.sqrt(p ** 2 + v ** 2) < s.params.threshold)
      return;
    if (typeof n.isScrolling > "u") {
      let T;
      (s.isHorizontal() && r.currentY === r.startY) ||
      (s.isVertical() && r.currentX === r.startX)
        ? (n.isScrolling = !1)
        : p * p + v * v >= 25 &&
          ((T = (Math.atan2(Math.abs(v), Math.abs(p)) * 180) / Math.PI),
          (n.isScrolling = s.isHorizontal()
            ? T > i.touchAngle
            : 90 - T > i.touchAngle));
    }
    if (
      (n.isScrolling && s.emit("touchMoveOpposite", l),
      typeof n.startMoving > "u" &&
        (r.currentX !== r.startX || r.currentY !== r.startY) &&
        (n.startMoving = !0),
      n.isScrolling ||
        (l.type === "touchmove" && n.preventTouchMoveFromPointerMove))
    ) {
      n.isTouched = !1;
      return;
    }
    if (!n.startMoving) return;
    (s.allowClick = !1),
      !i.cssMode && l.cancelable && l.preventDefault(),
      i.touchMoveStopPropagation && !i.nested && l.stopPropagation();
    let f = s.isHorizontal() ? p : v,
      b = s.isHorizontal()
        ? r.currentX - r.previousX
        : r.currentY - r.previousY;
    i.oneWayMovement &&
      ((f = Math.abs(f) * (o ? 1 : -1)), (b = Math.abs(b) * (o ? 1 : -1))),
      (r.diff = f),
      (f *= i.touchRatio),
      o && ((f = -f), (b = -b));
    const _ = s.touchesDirection;
    (s.swipeDirection = f > 0 ? "prev" : "next"),
      (s.touchesDirection = b > 0 ? "prev" : "next");
    const S = s.params.loop && !i.cssMode,
      h =
        (s.touchesDirection === "next" && s.allowSlideNext) ||
        (s.touchesDirection === "prev" && s.allowSlidePrev);
    if (!n.isMoved) {
      if (
        (S &&
          h &&
          s.loopFix({
            direction: s.swipeDirection,
          }),
        (n.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating)
      ) {
        const T = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: {
            bySwiperTouchMove: !0,
          },
        });
        s.wrapperEl.dispatchEvent(T);
      }
      (n.allowMomentumBounce = !1),
        i.grabCursor &&
          (s.allowSlideNext === !0 || s.allowSlidePrev === !0) &&
          s.setGrabCursor(!0),
        s.emit("sliderFirstMove", l);
    }
    if (
      (new Date().getTime(),
      i._loopSwapReset !== !1 &&
        n.isMoved &&
        n.allowThresholdMove &&
        _ !== s.touchesDirection &&
        S &&
        h &&
        Math.abs(f) >= 1)
    ) {
      Object.assign(r, {
        startX: u,
        startY: d,
        currentX: u,
        currentY: d,
        startTranslate: n.currentTranslate,
      }),
        (n.loopSwapReset = !0),
        (n.startTranslate = n.currentTranslate);
      return;
    }
    s.emit("sliderMove", l),
      (n.isMoved = !0),
      (n.currentTranslate = f + n.startTranslate);
    let g = !0,
      w = i.resistanceRatio;
    if (
      (i.touchReleaseOnEdges && (w = 0),
      f > 0
        ? (S &&
            h &&
            n.allowThresholdMove &&
            n.currentTranslate >
              (i.centeredSlides
                ? s.minTranslate() -
                  s.slidesSizesGrid[s.activeIndex + 1] -
                  (i.slidesPerView !== "auto" &&
                  s.slides.length - i.slidesPerView >= 2
                    ? s.slidesSizesGrid[s.activeIndex + 1] +
                      s.params.spaceBetween
                    : 0) -
                  s.params.spaceBetween
                : s.minTranslate()) &&
            s.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          n.currentTranslate > s.minTranslate() &&
            ((g = !1),
            i.resistance &&
              (n.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + n.startTranslate + f) ** w)))
        : f < 0 &&
          (S &&
            h &&
            n.allowThresholdMove &&
            n.currentTranslate <
              (i.centeredSlides
                ? s.maxTranslate() +
                  s.slidesSizesGrid[s.slidesSizesGrid.length - 1] +
                  s.params.spaceBetween +
                  (i.slidesPerView !== "auto" &&
                  s.slides.length - i.slidesPerView >= 2
                    ? s.slidesSizesGrid[s.slidesSizesGrid.length - 1] +
                      s.params.spaceBetween
                    : 0)
                : s.maxTranslate()) &&
            s.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                s.slides.length -
                (i.slidesPerView === "auto"
                  ? s.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(i.slidesPerView, 10))),
            }),
          n.currentTranslate < s.maxTranslate() &&
            ((g = !1),
            i.resistance &&
              (n.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - n.startTranslate - f) ** w))),
      g && (l.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        s.swipeDirection === "next" &&
        n.currentTranslate < n.startTranslate &&
        (n.currentTranslate = n.startTranslate),
      !s.allowSlidePrev &&
        s.swipeDirection === "prev" &&
        n.currentTranslate > n.startTranslate &&
        (n.currentTranslate = n.startTranslate),
      !s.allowSlidePrev &&
        !s.allowSlideNext &&
        (n.currentTranslate = n.startTranslate),
      i.threshold > 0)
    )
      if (Math.abs(f) > i.threshold || n.allowThresholdMove) {
        if (!n.allowThresholdMove) {
          (n.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (n.currentTranslate = n.startTranslate),
            (r.diff = s.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY);
          return;
        }
      } else {
        n.currentTranslate = n.startTranslate;
        return;
      }
    !i.followFinger ||
      i.cssMode ||
      (((i.freeMode && i.freeMode.enabled && s.freeMode) ||
        i.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      i.freeMode &&
        i.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(n.currentTranslate),
      s.setTranslate(n.currentTranslate));
  }

  function ug(e) {
    const t = this,
      s = t.touchEventsData;
    let n = e;
    n.originalEvent && (n = n.originalEvent);
    let i;
    if (n.type === "touchend" || n.type === "touchcancel") {
      if (
        ((i = [...n.changedTouches].find((T) => T.identifier === s.touchId)),
        !i || i.identifier !== s.touchId)
      )
        return;
    } else {
      if (s.touchId !== null || n.pointerId !== s.pointerId) return;
      i = n;
    }
    if (
      ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
        n.type,
      ) &&
      !(
        ["pointercancel", "contextmenu"].includes(n.type) &&
        (t.browser.isSafari || t.browser.isWebView)
      )
    )
      return;
    (s.pointerId = null), (s.touchId = null);
    const {
      params: o,
      touches: a,
      rtlTranslate: l,
      slidesGrid: c,
      enabled: u,
    } = t;
    if (!u || (!o.simulateTouch && n.pointerType === "mouse")) return;
    if (
      (s.allowTouchCallbacks && t.emit("touchEnd", n),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    ) {
      s.isMoved && o.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        (s.startMoving = !1);
      return;
    }
    o.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
      t.setGrabCursor(!1);
    const d = ln(),
      p = d - s.touchStartTime;
    if (t.allowClick) {
      const T = n.path || (n.composedPath && n.composedPath());
      t.updateClickedSlide((T && T[0]) || n.target, T),
        t.emit("tap click", n),
        p < 300 &&
          d - s.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", n);
    }
    if (
      ((s.lastClickTime = ln()),
      Ei(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        (a.diff === 0 && !s.loopSwapReset) ||
        (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
    ) {
      (s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1);
      return;
    }
    (s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1);
    let v;
    if (
      (o.followFinger
        ? (v = l ? t.translate : -t.translate)
        : (v = -s.currentTranslate),
      o.cssMode)
    )
      return;
    if (o.freeMode && o.freeMode.enabled) {
      t.freeMode.onTouchEnd({
        currentPos: v,
      });
      return;
    }
    const f = v >= -t.maxTranslate() && !t.params.loop;
    let b = 0,
      _ = t.slidesSizesGrid[0];
    for (
      let T = 0;
      T < c.length;
      T += T < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
    ) {
      const B = T < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
      typeof c[T + B] < "u"
        ? (f || (v >= c[T] && v < c[T + B])) && ((b = T), (_ = c[T + B] - c[T]))
        : (f || v >= c[T]) &&
          ((b = T), (_ = c[c.length - 1] - c[c.length - 2]));
    }
    let S = null,
      h = null;
    o.rewind &&
      (t.isBeginning
        ? (h =
            o.virtual && o.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (S = 0));
    const g = (v - c[b]) / _,
      w = b < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (p > o.longSwipesMs) {
      if (!o.longSwipes) {
        t.slideTo(t.activeIndex);
        return;
      }
      t.swipeDirection === "next" &&
        (g >= o.longSwipesRatio
          ? t.slideTo(o.rewind && t.isEnd ? S : b + w)
          : t.slideTo(b)),
        t.swipeDirection === "prev" &&
          (g > 1 - o.longSwipesRatio
            ? t.slideTo(b + w)
            : h !== null && g < 0 && Math.abs(g) > o.longSwipesRatio
              ? t.slideTo(h)
              : t.slideTo(b));
    } else {
      if (!o.shortSwipes) {
        t.slideTo(t.activeIndex);
        return;
      }
      t.navigation &&
      (n.target === t.navigation.nextEl || n.target === t.navigation.prevEl)
        ? n.target === t.navigation.nextEl
          ? t.slideTo(b + w)
          : t.slideTo(b)
        : (t.swipeDirection === "next" && t.slideTo(S !== null ? S : b + w),
          t.swipeDirection === "prev" && t.slideTo(h !== null ? h : b));
    }
  }

  function fo() {
    const e = this,
      { params: t, el: s } = e;
    if (s && s.offsetWidth === 0) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: n, allowSlidePrev: i, snapGrid: r } = e,
      o = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses();
    const a = o && t.loop;
    (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
    e.isEnd &&
    !e.isBeginning &&
    !e.params.centeredSlides &&
    !a
      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
      : e.params.loop && !o
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        (clearTimeout(e.autoplay.resizeTimeout),
        (e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.resume();
        }, 500))),
      (e.allowSlidePrev = i),
      (e.allowSlideNext = n),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }

  function dg(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }

  function fg() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: n } = e;
    if (!n) return;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      e.translate === 0 && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    let i;
    const r = e.maxTranslate() - e.minTranslate();
    r === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / r),
      i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }

  function pg(e) {
    const t = this;
    Gs(t, e.target),
      !(
        t.params.cssMode ||
        (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
      ) && t.update();
  }

  function hg() {
    const e = this;
    e.documentTouchHandlerProceeded ||
      ((e.documentTouchHandlerProceeded = !0),
      e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
  }
  const yl = (e, t) => {
    const s = at(),
      { params: n, el: i, wrapperEl: r, device: o } = e,
      a = !!n.nested,
      l = t === "on" ? "addEventListener" : "removeEventListener",
      c = t;
    !i ||
      typeof i == "string" ||
      (s[l]("touchstart", e.onDocumentTouchStart, {
        passive: !1,
        capture: a,
      }),
      i[l]("touchstart", e.onTouchStart, {
        passive: !1,
      }),
      i[l]("pointerdown", e.onTouchStart, {
        passive: !1,
      }),
      s[l]("touchmove", e.onTouchMove, {
        passive: !1,
        capture: a,
      }),
      s[l]("pointermove", e.onTouchMove, {
        passive: !1,
        capture: a,
      }),
      s[l]("touchend", e.onTouchEnd, {
        passive: !0,
      }),
      s[l]("pointerup", e.onTouchEnd, {
        passive: !0,
      }),
      s[l]("pointercancel", e.onTouchEnd, {
        passive: !0,
      }),
      s[l]("touchcancel", e.onTouchEnd, {
        passive: !0,
      }),
      s[l]("pointerout", e.onTouchEnd, {
        passive: !0,
      }),
      s[l]("pointerleave", e.onTouchEnd, {
        passive: !0,
      }),
      s[l]("contextmenu", e.onTouchEnd, {
        passive: !0,
      }),
      (n.preventClicks || n.preventClicksPropagation) &&
        i[l]("click", e.onClick, !0),
      n.cssMode && r[l]("scroll", e.onScroll),
      n.updateOnWindowResize
        ? e[c](
            o.ios || o.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            fo,
            !0,
          )
        : e[c]("observerUpdate", fo, !0),
      i[l]("load", e.onLoad, {
        capture: !0,
      }));
  };

  function mg() {
    const e = this,
      { params: t } = e;
    (e.onTouchStart = lg.bind(e)),
      (e.onTouchMove = cg.bind(e)),
      (e.onTouchEnd = ug.bind(e)),
      (e.onDocumentTouchStart = hg.bind(e)),
      t.cssMode && (e.onScroll = fg.bind(e)),
      (e.onClick = dg.bind(e)),
      (e.onLoad = pg.bind(e)),
      yl(e, "on");
  }

  function gg() {
    yl(this, "off");
  }
  var vg = {
    attachEvents: mg,
    detachEvents: gg,
  };
  const po = (e, t) => e.grid && t.grid && t.grid.rows > 1;

  function yg() {
    const e = this,
      { realIndex: t, initialized: s, params: n, el: i } = e,
      r = n.breakpoints;
    if (!r || (r && Object.keys(r).length === 0)) return;
    const o = at(),
      a =
        n.breakpointsBase === "window" || !n.breakpointsBase
          ? n.breakpointsBase
          : "container",
      l =
        ["window", "container"].includes(n.breakpointsBase) ||
        !n.breakpointsBase
          ? e.el
          : o.querySelector(n.breakpointsBase),
      c = e.getBreakpoint(r, a, l);
    if (!c || e.currentBreakpoint === c) return;
    const d = (c in r ? r[c] : void 0) || e.originalParams,
      p = po(e, n),
      v = po(e, d),
      f = e.params.grabCursor,
      b = d.grabCursor,
      _ = n.enabled;
    p && !v
      ? (i.classList.remove(
          `${n.containerModifierClass}grid`,
          `${n.containerModifierClass}grid-column`,
        ),
        e.emitContainerClasses())
      : !p &&
        v &&
        (i.classList.add(`${n.containerModifierClass}grid`),
        ((d.grid.fill && d.grid.fill === "column") ||
          (!d.grid.fill && n.grid.fill === "column")) &&
          i.classList.add(`${n.containerModifierClass}grid-column`),
        e.emitContainerClasses()),
      f && !b ? e.unsetGrabCursor() : !f && b && e.setGrabCursor(),
      ["navigation", "pagination", "scrollbar"].forEach((B) => {
        if (typeof d[B] > "u") return;
        const $ = n[B] && n[B].enabled,
          j = d[B] && d[B].enabled;
        $ && !j && e[B].disable(), !$ && j && e[B].enable();
      });
    const S = d.direction && d.direction !== n.direction,
      h = n.loop && (d.slidesPerView !== n.slidesPerView || S),
      g = n.loop;
    S && s && e.changeDirection(), $e(e.params, d);
    const w = e.params.enabled,
      T = e.params.loop;
    Object.assign(e, {
      allowTouchMove: e.params.allowTouchMove,
      allowSlideNext: e.params.allowSlideNext,
      allowSlidePrev: e.params.allowSlidePrev,
    }),
      _ && !w ? e.disable() : !_ && w && e.enable(),
      (e.currentBreakpoint = c),
      e.emit("_beforeBreakpoint", d),
      s &&
        (h
          ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
          : !g && T
            ? (e.loopCreate(t), e.updateSlides())
            : g && !T && e.loopDestroy()),
      e.emit("breakpoint", d);
  }

  function bg(e, t, s) {
    if ((t === void 0 && (t = "window"), !e || (t === "container" && !s)))
      return;
    let n = !1;
    const i = Ie(),
      r = t === "window" ? i.innerHeight : s.clientHeight,
      o = Object.keys(e).map((a) => {
        if (typeof a == "string" && a.indexOf("@") === 0) {
          const l = parseFloat(a.substr(1));
          return {
            value: r * l,
            point: a,
          };
        }
        return {
          value: a,
          point: a,
        };
      });
    o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
    for (let a = 0; a < o.length; a += 1) {
      const { point: l, value: c } = o[a];
      t === "window"
        ? i.matchMedia(`(min-width: ${c}px)`).matches && (n = l)
        : c <= s.clientWidth && (n = l);
    }
    return n || "max";
  }
  var wg = {
    setBreakpoint: yg,
    getBreakpoint: bg,
  };

  function Sg(e, t) {
    const s = [];
    return (
      e.forEach((n) => {
        typeof n == "object"
          ? Object.keys(n).forEach((i) => {
              n[i] && s.push(t + i);
            })
          : typeof n == "string" && s.push(t + n);
      }),
      s
    );
  }

  function _g() {
    const e = this,
      { classNames: t, params: s, rtl: n, el: i, device: r } = e,
      o = Sg(
        [
          "initialized",
          s.direction,
          {
            "free-mode": e.params.freeMode && s.freeMode.enabled,
          },
          {
            autoheight: s.autoHeight,
          },
          {
            rtl: n,
          },
          {
            grid: s.grid && s.grid.rows > 1,
          },
          {
            "grid-column":
              s.grid && s.grid.rows > 1 && s.grid.fill === "column",
          },
          {
            android: r.android,
          },
          {
            ios: r.ios,
          },
          {
            "css-mode": s.cssMode,
          },
          {
            centered: s.cssMode && s.centeredSlides,
          },
          {
            "watch-progress": s.watchSlidesProgress,
          },
        ],
        s.containerModifierClass,
      );
    t.push(...o), i.classList.add(...t), e.emitContainerClasses();
  }

  function xg() {
    const e = this,
      { el: t, classNames: s } = e;
    !t ||
      typeof t == "string" ||
      (t.classList.remove(...s), e.emitContainerClasses());
  }
  var Tg = {
    addClasses: _g,
    removeClasses: xg,
  };

  function Eg() {
    const e = this,
      { isLocked: t, params: s } = e,
      { slidesOffsetBefore: n } = s;
    if (n) {
      const i = e.slides.length - 1,
        r = e.slidesGrid[i] + e.slidesSizesGrid[i] + n * 2;
      e.isLocked = e.size > r;
    } else e.isLocked = e.snapGrid.length === 1;
    s.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
      s.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
      t && t !== e.isLocked && (e.isEnd = !1),
      t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
  }
  var Cg = {
      checkOverflow: Eg,
    },
    ho = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      swiperElementNodeName: "SWIPER-CONTAINER",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      eventsPrefix: "swiper",
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopAddBlankSlides: !0,
      loopAdditionalSlides: 0,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-blank",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideFullyVisibleClass: "swiper-slide-fully-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };

  function Pg(e, t) {
    return function (n) {
      n === void 0 && (n = {});
      const i = Object.keys(n)[0],
        r = n[i];
      if (typeof r != "object" || r === null) {
        $e(t, n);
        return;
      }
      if (
        (e[i] === !0 &&
          (e[i] = {
            enabled: !0,
          }),
        i === "navigation" &&
          e[i] &&
          e[i].enabled &&
          !e[i].prevEl &&
          !e[i].nextEl &&
          (e[i].auto = !0),
        ["pagination", "scrollbar"].indexOf(i) >= 0 &&
          e[i] &&
          e[i].enabled &&
          !e[i].el &&
          (e[i].auto = !0),
        !(i in e && "enabled" in r))
      ) {
        $e(t, n);
        return;
      }
      typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
        e[i] ||
          (e[i] = {
            enabled: !1,
          }),
        $e(t, n);
    };
  }
  const ei = {
      eventsEmitter: Tm,
      update: Nm,
      translate: $m,
      transition: Gm,
      slide: Zm,
      loop: ng,
      grabCursor: og,
      events: vg,
      breakpoints: wg,
      checkOverflow: Cg,
      classes: Tg,
    },
    ti = {};
  class _e {
    constructor() {
      let t, s;
      for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
        i[r] = arguments[r];
      i.length === 1 &&
      i[0].constructor &&
      Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
        ? (s = i[0])
        : ([t, s] = i),
        s || (s = {}),
        (s = $e({}, s)),
        t && !s.el && (s.el = t);
      const o = at();
      if (
        s.el &&
        typeof s.el == "string" &&
        o.querySelectorAll(s.el).length > 1
      ) {
        const u = [];
        return (
          o.querySelectorAll(s.el).forEach((d) => {
            const p = $e({}, s, {
              el: d,
            });
            u.push(new _e(p));
          }),
          u
        );
      }
      const a = this;
      (a.__swiper__ = !0),
        (a.support = hl()),
        (a.device = ml({
          userAgent: s.userAgent,
        })),
        (a.browser = gl()),
        (a.eventsListeners = {}),
        (a.eventsAnyListeners = []),
        (a.modules = [...a.__modules__]),
        s.modules && Array.isArray(s.modules) && a.modules.push(...s.modules);
      const l = {};
      a.modules.forEach((u) => {
        u({
          params: s,
          swiper: a,
          extendParams: Pg(s, l),
          on: a.on.bind(a),
          once: a.once.bind(a),
          off: a.off.bind(a),
          emit: a.emit.bind(a),
        });
      });
      const c = $e({}, ho, l);
      return (
        (a.params = $e({}, c, ti, s)),
        (a.originalParams = $e({}, a.params)),
        (a.passedParams = $e({}, s)),
        a.params &&
          a.params.on &&
          Object.keys(a.params.on).forEach((u) => {
            a.on(u, a.params.on[u]);
          }),
        a.params && a.params.onAny && a.onAny(a.params.onAny),
        Object.assign(a, {
          enabled: a.params.enabled,
          el: t,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal() {
            return a.params.direction === "horizontal";
          },
          isVertical() {
            return a.params.direction === "vertical";
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: a.params.allowSlideNext,
          allowSlidePrev: a.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: a.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            pointerId: null,
            touchId: null,
          },
          allowClick: !0,
          allowTouchMove: a.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0,
          },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        a.emit("_swiper"),
        a.params.init && a.init(),
        a
      );
    }
    getDirectionLabel(t) {
      return this.isHorizontal()
        ? t
        : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[t];
    }
    getSlideIndex(t) {
      const { slidesEl: s, params: n } = this,
        i = rt(s, `.${n.slideClass}, swiper-slide`),
        r = dn(i[0]);
      return dn(t) - r;
    }
    getSlideIndexByData(t) {
      return this.getSlideIndex(
        this.slides.find(
          (s) => s.getAttribute("data-swiper-slide-index") * 1 === t,
        ),
      );
    }
    recalcSlides() {
      const t = this,
        { slidesEl: s, params: n } = t;
      t.slides = rt(s, `.${n.slideClass}, swiper-slide`);
    }
    enable() {
      const t = this;
      t.enabled ||
        ((t.enabled = !0),
        t.params.grabCursor && t.setGrabCursor(),
        t.emit("enable"));
    }
    disable() {
      const t = this;
      t.enabled &&
        ((t.enabled = !1),
        t.params.grabCursor && t.unsetGrabCursor(),
        t.emit("disable"));
    }
    setProgress(t, s) {
      const n = this;
      t = Math.min(Math.max(t, 0), 1);
      const i = n.minTranslate(),
        o = (n.maxTranslate() - i) * t + i;
      n.translateTo(o, typeof s > "u" ? 0 : s),
        n.updateActiveIndex(),
        n.updateSlidesClasses();
    }
    emitContainerClasses() {
      const t = this;
      if (!t.params._emitClasses || !t.el) return;
      const s = t.el.className
        .split(" ")
        .filter(
          (n) =>
            n.indexOf("swiper") === 0 ||
            n.indexOf(t.params.containerModifierClass) === 0,
        );
      t.emit("_containerClasses", s.join(" "));
    }
    getSlideClasses(t) {
      const s = this;
      return s.destroyed
        ? ""
        : t.className
            .split(" ")
            .filter(
              (n) =>
                n.indexOf("swiper-slide") === 0 ||
                n.indexOf(s.params.slideClass) === 0,
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const t = this;
      if (!t.params._emitClasses || !t.el) return;
      const s = [];
      t.slides.forEach((n) => {
        const i = t.getSlideClasses(n);
        s.push({
          slideEl: n,
          classNames: i,
        }),
          t.emit("_slideClass", n, i);
      }),
        t.emit("_slideClasses", s);
    }
    slidesPerViewDynamic(t, s) {
      t === void 0 && (t = "current"), s === void 0 && (s = !1);
      const n = this,
        {
          params: i,
          slides: r,
          slidesGrid: o,
          slidesSizesGrid: a,
          size: l,
          activeIndex: c,
        } = n;
      let u = 1;
      if (typeof i.slidesPerView == "number") return i.slidesPerView;
      if (i.centeredSlides) {
        let d = r[c] ? Math.ceil(r[c].swiperSlideSize) : 0,
          p;
        for (let v = c + 1; v < r.length; v += 1)
          r[v] &&
            !p &&
            ((d += Math.ceil(r[v].swiperSlideSize)),
            (u += 1),
            d > l && (p = !0));
        for (let v = c - 1; v >= 0; v -= 1)
          r[v] &&
            !p &&
            ((d += r[v].swiperSlideSize), (u += 1), d > l && (p = !0));
      } else if (t === "current")
        for (let d = c + 1; d < r.length; d += 1)
          (s ? o[d] + a[d] - o[c] < l : o[d] - o[c] < l) && (u += 1);
      else for (let d = c - 1; d >= 0; d -= 1) o[c] - o[d] < l && (u += 1);
      return u;
    }
    update() {
      const t = this;
      if (!t || t.destroyed) return;
      const { snapGrid: s, params: n } = t;
      n.breakpoints && t.setBreakpoint(),
        [...t.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
          o.complete && Gs(t, o);
        }),
        t.updateSize(),
        t.updateSlides(),
        t.updateProgress(),
        t.updateSlidesClasses();

      function i() {
        const o = t.rtlTranslate ? t.translate * -1 : t.translate,
          a = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
        t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
      }
      let r;
      if (n.freeMode && n.freeMode.enabled && !n.cssMode)
        i(), n.autoHeight && t.updateAutoHeight();
      else {
        if (
          (n.slidesPerView === "auto" || n.slidesPerView > 1) &&
          t.isEnd &&
          !n.centeredSlides
        ) {
          const o =
            t.virtual && n.virtual.enabled ? t.virtual.slides : t.slides;
          r = t.slideTo(o.length - 1, 0, !1, !0);
        } else r = t.slideTo(t.activeIndex, 0, !1, !0);
        r || i();
      }
      n.watchOverflow && s !== t.snapGrid && t.checkOverflow(),
        t.emit("update");
    }
    changeDirection(t, s) {
      s === void 0 && (s = !0);
      const n = this,
        i = n.params.direction;
      return (
        t || (t = i === "horizontal" ? "vertical" : "horizontal"),
        t === i ||
          (t !== "horizontal" && t !== "vertical") ||
          (n.el.classList.remove(`${n.params.containerModifierClass}${i}`),
          n.el.classList.add(`${n.params.containerModifierClass}${t}`),
          n.emitContainerClasses(),
          (n.params.direction = t),
          n.slides.forEach((r) => {
            t === "vertical" ? (r.style.width = "") : (r.style.height = "");
          }),
          n.emit("changeDirection"),
          s && n.update()),
        n
      );
    }
    changeLanguageDirection(t) {
      const s = this;
      (s.rtl && t === "rtl") ||
        (!s.rtl && t === "ltr") ||
        ((s.rtl = t === "rtl"),
        (s.rtlTranslate = s.params.direction === "horizontal" && s.rtl),
        s.rtl
          ? (s.el.classList.add(`${s.params.containerModifierClass}rtl`),
            (s.el.dir = "rtl"))
          : (s.el.classList.remove(`${s.params.containerModifierClass}rtl`),
            (s.el.dir = "ltr")),
        s.update());
    }
    mount(t) {
      const s = this;
      if (s.mounted) return !0;
      let n = t || s.params.el;
      if ((typeof n == "string" && (n = document.querySelector(n)), !n))
        return !1;
      (n.swiper = s),
        n.parentNode &&
          n.parentNode.host &&
          n.parentNode.host.nodeName ===
            s.params.swiperElementNodeName.toUpperCase() &&
          (s.isElement = !0);
      const i = () =>
        `.${(s.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let o =
        n && n.shadowRoot && n.shadowRoot.querySelector
          ? n.shadowRoot.querySelector(i())
          : rt(n, i())[0];
      return (
        !o &&
          s.params.createElements &&
          ((o = un("div", s.params.wrapperClass)),
          n.append(o),
          rt(n, `.${s.params.slideClass}`).forEach((a) => {
            o.append(a);
          })),
        Object.assign(s, {
          el: n,
          wrapperEl: o,
          slidesEl:
            s.isElement && !n.parentNode.host.slideSlots
              ? n.parentNode.host
              : o,
          hostEl: s.isElement ? n.parentNode.host : n,
          mounted: !0,
          rtl: n.dir.toLowerCase() === "rtl" || xt(n, "direction") === "rtl",
          rtlTranslate:
            s.params.direction === "horizontal" &&
            (n.dir.toLowerCase() === "rtl" || xt(n, "direction") === "rtl"),
          wrongRTL: xt(o, "display") === "-webkit-box",
        }),
        !0
      );
    }
    init(t) {
      const s = this;
      if (s.initialized || s.mount(t) === !1) return s;
      s.emit("beforeInit"),
        s.params.breakpoints && s.setBreakpoint(),
        s.addClasses(),
        s.updateSize(),
        s.updateSlides(),
        s.params.watchOverflow && s.checkOverflow(),
        s.params.grabCursor && s.enabled && s.setGrabCursor(),
        s.params.loop && s.virtual && s.params.virtual.enabled
          ? s.slideTo(
              s.params.initialSlide + s.virtual.slidesBefore,
              0,
              s.params.runCallbacksOnInit,
              !1,
              !0,
            )
          : s.slideTo(
              s.params.initialSlide,
              0,
              s.params.runCallbacksOnInit,
              !1,
              !0,
            ),
        s.params.loop && s.loopCreate(void 0, !0),
        s.attachEvents();
      const i = [...s.el.querySelectorAll('[loading="lazy"]')];
      return (
        s.isElement && i.push(...s.hostEl.querySelectorAll('[loading="lazy"]')),
        i.forEach((r) => {
          r.complete
            ? Gs(s, r)
            : r.addEventListener("load", (o) => {
                Gs(s, o.target);
              });
        }),
        Pi(s),
        (s.initialized = !0),
        Pi(s),
        s.emit("init"),
        s.emit("afterInit"),
        s
      );
    }
    destroy(t, s) {
      t === void 0 && (t = !0), s === void 0 && (s = !0);
      const n = this,
        { params: i, el: r, wrapperEl: o, slides: a } = n;
      return (
        typeof n.params > "u" ||
          n.destroyed ||
          (n.emit("beforeDestroy"),
          (n.initialized = !1),
          n.detachEvents(),
          i.loop && n.loopDestroy(),
          s &&
            (n.removeClasses(),
            r && typeof r != "string" && r.removeAttribute("style"),
            o && o.removeAttribute("style"),
            a &&
              a.length &&
              a.forEach((l) => {
                l.classList.remove(
                  i.slideVisibleClass,
                  i.slideFullyVisibleClass,
                  i.slideActiveClass,
                  i.slideNextClass,
                  i.slidePrevClass,
                ),
                  l.removeAttribute("style"),
                  l.removeAttribute("data-swiper-slide-index");
              })),
          n.emit("destroy"),
          Object.keys(n.eventsListeners).forEach((l) => {
            n.off(l);
          }),
          t !== !1 &&
            (n.el && typeof n.el != "string" && (n.el.swiper = null), dm(n)),
          (n.destroyed = !0)),
        null
      );
    }
    static extendDefaults(t) {
      $e(ti, t);
    }
    static get extendedDefaults() {
      return ti;
    }
    static get defaults() {
      return ho;
    }
    static installModule(t) {
      _e.prototype.__modules__ || (_e.prototype.__modules__ = []);
      const s = _e.prototype.__modules__;
      typeof t == "function" && s.indexOf(t) < 0 && s.push(t);
    }
    static use(t) {
      return Array.isArray(t)
        ? (t.forEach((s) => _e.installModule(s)), _e)
        : (_e.installModule(t), _e);
    }
  }
  Object.keys(ei).forEach((e) => {
    Object.keys(ei[e]).forEach((t) => {
      _e.prototype[t] = ei[e][t];
    });
  });
  _e.use([_m, xm]);

  function bl(e, t, s, n) {
    return (
      e.params.createElements &&
        Object.keys(n).forEach((i) => {
          if (!s[i] && s.auto === !0) {
            let r = rt(e.el, `.${n[i]}`)[0];
            r || ((r = un("div", n[i])), (r.className = n[i]), e.el.append(r)),
              (s[i] = r),
              (t[i] = r);
          }
        }),
      s
    );
  }

  function si(e) {
    let { swiper: t, extendParams: s, on: n, emit: i } = e;
    s({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled",
      },
    }),
      (t.navigation = {
        nextEl: null,
        prevEl: null,
      });

    function r(f) {
      let b;
      return f &&
        typeof f == "string" &&
        t.isElement &&
        ((b = t.el.querySelector(f) || t.hostEl.querySelector(f)), b)
        ? b
        : (f &&
            (typeof f == "string" && (b = [...document.querySelectorAll(f)]),
            t.params.uniqueNavElements &&
            typeof f == "string" &&
            b &&
            b.length > 1 &&
            t.el.querySelectorAll(f).length === 1
              ? (b = t.el.querySelector(f))
              : b && b.length === 1 && (b = b[0])),
          f && !b ? f : b);
    }

    function o(f, b) {
      const _ = t.params.navigation;
      (f = be(f)),
        f.forEach((S) => {
          S &&
            (S.classList[b ? "add" : "remove"](..._.disabledClass.split(" ")),
            S.tagName === "BUTTON" && (S.disabled = b),
            t.params.watchOverflow &&
              t.enabled &&
              S.classList[t.isLocked ? "add" : "remove"](_.lockClass));
        });
    }

    function a() {
      const { nextEl: f, prevEl: b } = t.navigation;
      if (t.params.loop) {
        o(b, !1), o(f, !1);
        return;
      }
      o(b, t.isBeginning && !t.params.rewind),
        o(f, t.isEnd && !t.params.rewind);
    }

    function l(f) {
      f.preventDefault(),
        !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
          (t.slidePrev(), i("navigationPrev"));
    }

    function c(f) {
      f.preventDefault(),
        !(t.isEnd && !t.params.loop && !t.params.rewind) &&
          (t.slideNext(), i("navigationNext"));
    }

    function u() {
      const f = t.params.navigation;
      if (
        ((t.params.navigation = bl(
          t,
          t.originalParams.navigation,
          t.params.navigation,
          {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev",
          },
        )),
        !(f.nextEl || f.prevEl))
      )
        return;
      let b = r(f.nextEl),
        _ = r(f.prevEl);
      Object.assign(t.navigation, {
        nextEl: b,
        prevEl: _,
      }),
        (b = be(b)),
        (_ = be(_));
      const S = (h, g) => {
        h && h.addEventListener("click", g === "next" ? c : l),
          !t.enabled && h && h.classList.add(...f.lockClass.split(" "));
      };
      b.forEach((h) => S(h, "next")), _.forEach((h) => S(h, "prev"));
    }

    function d() {
      let { nextEl: f, prevEl: b } = t.navigation;
      (f = be(f)), (b = be(b));
      const _ = (S, h) => {
        S.removeEventListener("click", h === "next" ? c : l),
          S.classList.remove(...t.params.navigation.disabledClass.split(" "));
      };
      f.forEach((S) => _(S, "next")), b.forEach((S) => _(S, "prev"));
    }
    n("init", () => {
      t.params.navigation.enabled === !1 ? v() : (u(), a());
    }),
      n("toEdge fromEdge lock unlock", () => {
        a();
      }),
      n("destroy", () => {
        d();
      }),
      n("enable disable", () => {
        let { nextEl: f, prevEl: b } = t.navigation;
        if (((f = be(f)), (b = be(b)), t.enabled)) {
          a();
          return;
        }
        [...f, ...b]
          .filter((_) => !!_)
          .forEach((_) => _.classList.add(t.params.navigation.lockClass));
      }),
      n("click", (f, b) => {
        let { nextEl: _, prevEl: S } = t.navigation;
        (_ = be(_)), (S = be(S));
        const h = b.target;
        let g = S.includes(h) || _.includes(h);
        if (t.isElement && !g) {
          const w = b.path || (b.composedPath && b.composedPath());
          w && (g = w.find((T) => _.includes(T) || S.includes(T)));
        }
        if (t.params.navigation.hideOnClick && !g) {
          if (
            t.pagination &&
            t.params.pagination &&
            t.params.pagination.clickable &&
            (t.pagination.el === h || t.pagination.el.contains(h))
          )
            return;
          let w;
          _.length
            ? (w = _[0].classList.contains(t.params.navigation.hiddenClass))
            : S.length &&
              (w = S[0].classList.contains(t.params.navigation.hiddenClass)),
            i(w === !0 ? "navigationShow" : "navigationHide"),
            [..._, ...S]
              .filter((T) => !!T)
              .forEach((T) =>
                T.classList.toggle(t.params.navigation.hiddenClass),
              );
        }
      });
    const p = () => {
        t.el.classList.remove(
          ...t.params.navigation.navigationDisabledClass.split(" "),
        ),
          u(),
          a();
      },
      v = () => {
        t.el.classList.add(
          ...t.params.navigation.navigationDisabledClass.split(" "),
        ),
          d();
      };
    Object.assign(t.navigation, {
      enable: p,
      disable: v,
      update: a,
      init: u,
      destroy: d,
    });
  }

  function ls(e) {
    return (
      e === void 0 && (e = ""),
      `.${e
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }

  function ni(e) {
    let { swiper: t, extendParams: s, on: n, emit: i } = e;
    const r = "swiper-pagination";
    s({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (h) => h,
        formatFractionTotal: (h) => h,
        bulletClass: `${r}-bullet`,
        bulletActiveClass: `${r}-bullet-active`,
        modifierClass: `${r}-`,
        currentClass: `${r}-current`,
        totalClass: `${r}-total`,
        hiddenClass: `${r}-hidden`,
        progressbarFillClass: `${r}-progressbar-fill`,
        progressbarOppositeClass: `${r}-progressbar-opposite`,
        clickableClass: `${r}-clickable`,
        lockClass: `${r}-lock`,
        horizontalClass: `${r}-horizontal`,
        verticalClass: `${r}-vertical`,
        paginationDisabledClass: `${r}-disabled`,
      },
    }),
      (t.pagination = {
        el: null,
        bullets: [],
      });
    let o,
      a = 0;

    function l() {
      return (
        !t.params.pagination.el ||
        !t.pagination.el ||
        (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
      );
    }

    function c(h, g) {
      const { bulletActiveClass: w } = t.params.pagination;
      h &&
        ((h = h[`${g === "prev" ? "previous" : "next"}ElementSibling`]),
        h &&
          (h.classList.add(`${w}-${g}`),
          (h = h[`${g === "prev" ? "previous" : "next"}ElementSibling`]),
          h && h.classList.add(`${w}-${g}-${g}`)));
    }

    function u(h, g, w) {
      if (((h = h % w), (g = g % w), g === h + 1)) return "next";
      if (g === h - 1) return "previous";
    }

    function d(h) {
      const g = h.target.closest(ls(t.params.pagination.bulletClass));
      if (!g) return;
      h.preventDefault();
      const w = dn(g) * t.params.slidesPerGroup;
      if (t.params.loop) {
        if (t.realIndex === w) return;
        const T = u(t.realIndex, w, t.slides.length);
        T === "next"
          ? t.slideNext()
          : T === "previous"
            ? t.slidePrev()
            : t.slideToLoop(w);
      } else t.slideTo(w);
    }

    function p() {
      const h = t.rtl,
        g = t.params.pagination;
      if (l()) return;
      let w = t.pagination.el;
      w = be(w);
      let T, B;
      const $ =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length,
        j = t.params.loop
          ? Math.ceil($ / t.params.slidesPerGroup)
          : t.snapGrid.length;
      if (
        (t.params.loop
          ? ((B = t.previousRealIndex || 0),
            (T =
              t.params.slidesPerGroup > 1
                ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                : t.realIndex))
          : typeof t.snapIndex < "u"
            ? ((T = t.snapIndex), (B = t.previousSnapIndex))
            : ((B = t.previousIndex || 0), (T = t.activeIndex || 0)),
        g.type === "bullets" &&
          t.pagination.bullets &&
          t.pagination.bullets.length > 0)
      ) {
        const I = t.pagination.bullets;
        let C, M, P;
        if (
          (g.dynamicBullets &&
            ((o = Ci(I[0], t.isHorizontal() ? "width" : "height")),
            w.forEach((z) => {
              z.style[t.isHorizontal() ? "width" : "height"] =
                `${o * (g.dynamicMainBullets + 4)}px`;
            }),
            g.dynamicMainBullets > 1 &&
              B !== void 0 &&
              ((a += T - (B || 0)),
              a > g.dynamicMainBullets - 1
                ? (a = g.dynamicMainBullets - 1)
                : a < 0 && (a = 0)),
            (C = Math.max(T - a, 0)),
            (M = C + (Math.min(I.length, g.dynamicMainBullets) - 1)),
            (P = (M + C) / 2)),
          I.forEach((z) => {
            const Q = [
              ...[
                "",
                "-next",
                "-next-next",
                "-prev",
                "-prev-prev",
                "-main",
              ].map((te) => `${g.bulletActiveClass}${te}`),
            ]
              .map((te) =>
                typeof te == "string" && te.includes(" ") ? te.split(" ") : te,
              )
              .flat();
            z.classList.remove(...Q);
          }),
          w.length > 1)
        )
          I.forEach((z) => {
            const Q = dn(z);
            Q === T
              ? z.classList.add(...g.bulletActiveClass.split(" "))
              : t.isElement && z.setAttribute("part", "bullet"),
              g.dynamicBullets &&
                (Q >= C &&
                  Q <= M &&
                  z.classList.add(...`${g.bulletActiveClass}-main`.split(" ")),
                Q === C && c(z, "prev"),
                Q === M && c(z, "next"));
          });
        else {
          const z = I[T];
          if (
            (z && z.classList.add(...g.bulletActiveClass.split(" ")),
            t.isElement &&
              I.forEach((Q, te) => {
                Q.setAttribute("part", te === T ? "bullet-active" : "bullet");
              }),
            g.dynamicBullets)
          ) {
            const Q = I[C],
              te = I[M];
            for (let G = C; G <= M; G += 1)
              I[G] &&
                I[G].classList.add(...`${g.bulletActiveClass}-main`.split(" "));
            c(Q, "prev"), c(te, "next");
          }
        }
        if (g.dynamicBullets) {
          const z = Math.min(I.length, g.dynamicMainBullets + 4),
            Q = (o * z - o) / 2 - P * o,
            te = h ? "right" : "left";
          I.forEach((G) => {
            G.style[t.isHorizontal() ? te : "top"] = `${Q}px`;
          });
        }
      }
      w.forEach((I, C) => {
        if (
          (g.type === "fraction" &&
            (I.querySelectorAll(ls(g.currentClass)).forEach((M) => {
              M.textContent = g.formatFractionCurrent(T + 1);
            }),
            I.querySelectorAll(ls(g.totalClass)).forEach((M) => {
              M.textContent = g.formatFractionTotal(j);
            })),
          g.type === "progressbar")
        ) {
          let M;
          g.progressbarOpposite
            ? (M = t.isHorizontal() ? "vertical" : "horizontal")
            : (M = t.isHorizontal() ? "horizontal" : "vertical");
          const P = (T + 1) / j;
          let z = 1,
            Q = 1;
          M === "horizontal" ? (z = P) : (Q = P),
            I.querySelectorAll(ls(g.progressbarFillClass)).forEach((te) => {
              (te.style.transform = `translate3d(0,0,0) scaleX(${z}) scaleY(${Q})`),
                (te.style.transitionDuration = `${t.params.speed}ms`);
            });
        }
        g.type === "custom" && g.renderCustom
          ? ((I.innerHTML = g.renderCustom(t, T + 1, j)),
            C === 0 && i("paginationRender", I))
          : (C === 0 && i("paginationRender", I), i("paginationUpdate", I)),
          t.params.watchOverflow &&
            t.enabled &&
            I.classList[t.isLocked ? "add" : "remove"](g.lockClass);
      });
    }

    function v() {
      const h = t.params.pagination;
      if (l()) return;
      const g =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.grid && t.params.grid.rows > 1
            ? t.slides.length / Math.ceil(t.params.grid.rows)
            : t.slides.length;
      let w = t.pagination.el;
      w = be(w);
      let T = "";
      if (h.type === "bullets") {
        let B = t.params.loop
          ? Math.ceil(g / t.params.slidesPerGroup)
          : t.snapGrid.length;
        t.params.freeMode && t.params.freeMode.enabled && B > g && (B = g);
        for (let $ = 0; $ < B; $ += 1)
          h.renderBullet
            ? (T += h.renderBullet.call(t, $, h.bulletClass))
            : (T += `<${h.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${h.bulletClass}"></${h.bulletElement}>`);
      }
      h.type === "fraction" &&
        (h.renderFraction
          ? (T = h.renderFraction.call(t, h.currentClass, h.totalClass))
          : (T = `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`)),
        h.type === "progressbar" &&
          (h.renderProgressbar
            ? (T = h.renderProgressbar.call(t, h.progressbarFillClass))
            : (T = `<span class="${h.progressbarFillClass}"></span>`)),
        (t.pagination.bullets = []),
        w.forEach((B) => {
          h.type !== "custom" && (B.innerHTML = T || ""),
            h.type === "bullets" &&
              t.pagination.bullets.push(
                ...B.querySelectorAll(ls(h.bulletClass)),
              );
        }),
        h.type !== "custom" && i("paginationRender", w[0]);
    }

    function f() {
      t.params.pagination = bl(
        t,
        t.originalParams.pagination,
        t.params.pagination,
        {
          el: "swiper-pagination",
        },
      );
      const h = t.params.pagination;
      if (!h.el) return;
      let g;
      typeof h.el == "string" && t.isElement && (g = t.el.querySelector(h.el)),
        !g &&
          typeof h.el == "string" &&
          (g = [...document.querySelectorAll(h.el)]),
        g || (g = h.el),
        !(!g || g.length === 0) &&
          (t.params.uniqueNavElements &&
            typeof h.el == "string" &&
            Array.isArray(g) &&
            g.length > 1 &&
            ((g = [...t.el.querySelectorAll(h.el)]),
            g.length > 1 && (g = g.find((w) => pl(w, ".swiper")[0] === t.el))),
          Array.isArray(g) && g.length === 1 && (g = g[0]),
          Object.assign(t.pagination, {
            el: g,
          }),
          (g = be(g)),
          g.forEach((w) => {
            h.type === "bullets" &&
              h.clickable &&
              w.classList.add(...(h.clickableClass || "").split(" ")),
              w.classList.add(h.modifierClass + h.type),
              w.classList.add(
                t.isHorizontal() ? h.horizontalClass : h.verticalClass,
              ),
              h.type === "bullets" &&
                h.dynamicBullets &&
                (w.classList.add(`${h.modifierClass}${h.type}-dynamic`),
                (a = 0),
                h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)),
              h.type === "progressbar" &&
                h.progressbarOpposite &&
                w.classList.add(h.progressbarOppositeClass),
              h.clickable && w.addEventListener("click", d),
              t.enabled || w.classList.add(h.lockClass);
          }));
    }

    function b() {
      const h = t.params.pagination;
      if (l()) return;
      let g = t.pagination.el;
      g &&
        ((g = be(g)),
        g.forEach((w) => {
          w.classList.remove(h.hiddenClass),
            w.classList.remove(h.modifierClass + h.type),
            w.classList.remove(
              t.isHorizontal() ? h.horizontalClass : h.verticalClass,
            ),
            h.clickable &&
              (w.classList.remove(...(h.clickableClass || "").split(" ")),
              w.removeEventListener("click", d));
        })),
        t.pagination.bullets &&
          t.pagination.bullets.forEach((w) =>
            w.classList.remove(...h.bulletActiveClass.split(" ")),
          );
    }
    n("changeDirection", () => {
      if (!t.pagination || !t.pagination.el) return;
      const h = t.params.pagination;
      let { el: g } = t.pagination;
      (g = be(g)),
        g.forEach((w) => {
          w.classList.remove(h.horizontalClass, h.verticalClass),
            w.classList.add(
              t.isHorizontal() ? h.horizontalClass : h.verticalClass,
            );
        });
    }),
      n("init", () => {
        t.params.pagination.enabled === !1 ? S() : (f(), v(), p());
      }),
      n("activeIndexChange", () => {
        typeof t.snapIndex > "u" && p();
      }),
      n("snapIndexChange", () => {
        p();
      }),
      n("snapGridLengthChange", () => {
        v(), p();
      }),
      n("destroy", () => {
        b();
      }),
      n("enable disable", () => {
        let { el: h } = t.pagination;
        h &&
          ((h = be(h)),
          h.forEach((g) =>
            g.classList[t.enabled ? "remove" : "add"](
              t.params.pagination.lockClass,
            ),
          ));
      }),
      n("lock unlock", () => {
        p();
      }),
      n("click", (h, g) => {
        const w = g.target,
          T = be(t.pagination.el);
        if (
          t.params.pagination.el &&
          t.params.pagination.hideOnClick &&
          T &&
          T.length > 0 &&
          !w.classList.contains(t.params.pagination.bulletClass)
        ) {
          if (
            t.navigation &&
            ((t.navigation.nextEl && w === t.navigation.nextEl) ||
              (t.navigation.prevEl && w === t.navigation.prevEl))
          )
            return;
          const B = T[0].classList.contains(t.params.pagination.hiddenClass);
          i(B === !0 ? "paginationShow" : "paginationHide"),
            T.forEach(($) =>
              $.classList.toggle(t.params.pagination.hiddenClass),
            );
        }
      });
    const _ = () => {
        t.el.classList.remove(t.params.pagination.paginationDisabledClass);
        let { el: h } = t.pagination;
        h &&
          ((h = be(h)),
          h.forEach((g) =>
            g.classList.remove(t.params.pagination.paginationDisabledClass),
          )),
          f(),
          v(),
          p();
      },
      S = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let { el: h } = t.pagination;
        h &&
          ((h = be(h)),
          h.forEach((g) =>
            g.classList.add(t.params.pagination.paginationDisabledClass),
          )),
          b();
      };
    Object.assign(t.pagination, {
      enable: _,
      disable: S,
      render: v,
      update: p,
      init: f,
      destroy: b,
    });
  }

  function ii(e) {
    let { swiper: t, extendParams: s, on: n, emit: i, params: r } = e;
    (t.autoplay = {
      running: !1,
      paused: !1,
      timeLeft: 0,
    }),
      s({
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !1,
          stopOnLastSlide: !1,
          reverseDirection: !1,
          pauseOnMouseEnter: !1,
        },
      });
    let o,
      a,
      l = r && r.autoplay ? r.autoplay.delay : 3e3,
      c = r && r.autoplay ? r.autoplay.delay : 3e3,
      u,
      d = new Date().getTime(),
      p,
      v,
      f,
      b,
      _,
      S,
      h;

    function g(H) {
      !t ||
        t.destroyed ||
        !t.wrapperEl ||
        (H.target === t.wrapperEl &&
          (t.wrapperEl.removeEventListener("transitionend", g),
          !(h || (H.detail && H.detail.bySwiperTouchMove)) && C()));
    }
    const w = () => {
        if (t.destroyed || !t.autoplay.running) return;
        t.autoplay.paused ? (p = !0) : p && ((c = u), (p = !1));
        const H = t.autoplay.paused ? u : d + c - new Date().getTime();
        (t.autoplay.timeLeft = H),
          i("autoplayTimeLeft", H, H / l),
          (a = requestAnimationFrame(() => {
            w();
          }));
      },
      T = () => {
        let H;
        return (
          t.virtual && t.params.virtual.enabled
            ? (H = t.slides.find((ye) =>
                ye.classList.contains("swiper-slide-active"),
              ))
            : (H = t.slides[t.activeIndex]),
          H ? parseInt(H.getAttribute("data-swiper-autoplay"), 10) : void 0
        );
      },
      B = (H) => {
        if (t.destroyed || !t.autoplay.running) return;
        cancelAnimationFrame(a), w();
        let ae = typeof H > "u" ? t.params.autoplay.delay : H;
        (l = t.params.autoplay.delay), (c = t.params.autoplay.delay);
        const ye = T();
        !Number.isNaN(ye) &&
          ye > 0 &&
          typeof H > "u" &&
          ((ae = ye), (l = ye), (c = ye)),
          (u = ae);
        const Pe = t.params.speed,
          Ae = () => {
            !t ||
              t.destroyed ||
              (t.params.autoplay.reverseDirection
                ? !t.isBeginning || t.params.loop || t.params.rewind
                  ? (t.slidePrev(Pe, !0, !0), i("autoplay"))
                  : t.params.autoplay.stopOnLastSlide ||
                    (t.slideTo(t.slides.length - 1, Pe, !0, !0), i("autoplay"))
                : !t.isEnd || t.params.loop || t.params.rewind
                  ? (t.slideNext(Pe, !0, !0), i("autoplay"))
                  : t.params.autoplay.stopOnLastSlide ||
                    (t.slideTo(0, Pe, !0, !0), i("autoplay")),
              t.params.cssMode &&
                ((d = new Date().getTime()),
                requestAnimationFrame(() => {
                  B();
                })));
          };
        return (
          ae > 0
            ? (clearTimeout(o),
              (o = setTimeout(() => {
                Ae();
              }, ae)))
            : requestAnimationFrame(() => {
                Ae();
              }),
          ae
        );
      },
      $ = () => {
        (d = new Date().getTime()),
          (t.autoplay.running = !0),
          B(),
          i("autoplayStart");
      },
      j = () => {
        (t.autoplay.running = !1),
          clearTimeout(o),
          cancelAnimationFrame(a),
          i("autoplayStop");
      },
      I = (H, ae) => {
        if (t.destroyed || !t.autoplay.running) return;
        clearTimeout(o), H || (S = !0);
        const ye = () => {
          i("autoplayPause"),
            t.params.autoplay.waitForTransition
              ? t.wrapperEl.addEventListener("transitionend", g)
              : C();
        };
        if (((t.autoplay.paused = !0), ae)) {
          _ && (u = t.params.autoplay.delay), (_ = !1), ye();
          return;
        }
        (u = (u || t.params.autoplay.delay) - (new Date().getTime() - d)),
          !(t.isEnd && u < 0 && !t.params.loop) && (u < 0 && (u = 0), ye());
      },
      C = () => {
        (t.isEnd && u < 0 && !t.params.loop) ||
          t.destroyed ||
          !t.autoplay.running ||
          ((d = new Date().getTime()),
          S ? ((S = !1), B(u)) : B(),
          (t.autoplay.paused = !1),
          i("autoplayResume"));
      },
      M = () => {
        if (t.destroyed || !t.autoplay.running) return;
        const H = at();
        H.visibilityState === "hidden" && ((S = !0), I(!0)),
          H.visibilityState === "visible" && C();
      },
      P = (H) => {
        H.pointerType === "mouse" &&
          ((S = !0), (h = !0), !(t.animating || t.autoplay.paused) && I(!0));
      },
      z = (H) => {
        H.pointerType === "mouse" && ((h = !1), t.autoplay.paused && C());
      },
      Q = () => {
        t.params.autoplay.pauseOnMouseEnter &&
          (t.el.addEventListener("pointerenter", P),
          t.el.addEventListener("pointerleave", z));
      },
      te = () => {
        t.el &&
          typeof t.el != "string" &&
          (t.el.removeEventListener("pointerenter", P),
          t.el.removeEventListener("pointerleave", z));
      },
      G = () => {
        at().addEventListener("visibilitychange", M);
      },
      Z = () => {
        at().removeEventListener("visibilitychange", M);
      };
    n("init", () => {
      t.params.autoplay.enabled && (Q(), G(), $());
    }),
      n("destroy", () => {
        te(), Z(), t.autoplay.running && j();
      }),
      n("_freeModeStaticRelease", () => {
        (f || S) && C();
      }),
      n("_freeModeNoMomentumRelease", () => {
        t.params.autoplay.disableOnInteraction ? j() : I(!0, !0);
      }),
      n("beforeTransitionStart", (H, ae, ye) => {
        t.destroyed ||
          !t.autoplay.running ||
          (ye || !t.params.autoplay.disableOnInteraction ? I(!0, !0) : j());
      }),
      n("sliderFirstMove", () => {
        if (!(t.destroyed || !t.autoplay.running)) {
          if (t.params.autoplay.disableOnInteraction) {
            j();
            return;
          }
          (v = !0),
            (f = !1),
            (S = !1),
            (b = setTimeout(() => {
              (S = !0), (f = !0), I(!0);
            }, 200));
        }
      }),
      n("touchEnd", () => {
        if (!(t.destroyed || !t.autoplay.running || !v)) {
          if (
            (clearTimeout(b),
            clearTimeout(o),
            t.params.autoplay.disableOnInteraction)
          ) {
            (f = !1), (v = !1);
            return;
          }
          f && t.params.cssMode && C(), (f = !1), (v = !1);
        }
      }),
      n("slideChange", () => {
        t.destroyed || !t.autoplay.running || (_ = !0);
      }),
      Object.assign(t.autoplay, {
        start: $,
        stop: j,
        pause: I,
        resume: C,
      });
  }

  function Ag() {
    new _e(".news-promo-slider__slides-wrapper", {
      modules: [si, ni],
      slidesPerView: 1.2,
      spaceBetween: 16,
      loop: !0,
      breakpoints: {
        560: {
          slidesPerView: 2.2,
          spaceBetween: 16,
        },
        800: {
          slidesPerView: "auto",
          spaceBetween: 16,
        },
      },
      wrapperClass: "news-promo-slider__slides",
      slideClass: "news-promo-slider__slide",
      navigation: {
        nextEl: ".news-promo-slider__controls__button--next",
        prevEl: ".news-promo-slider__controls__button--prev",
      },
    }),
      new _e(".quotes-slider__slides-wrapper", {
        modules: [si, ni, ii],
        slidesPerView: 1,
        spaceBetween: 200,
        loop: !0,
        wrapperClass: "quotes-slider__slides",
        slideClass: "quotes-slider__slide",
        autoplay: {
          delay: 3500,
          disableOnInteraction: !1,
        },
        navigation: {
          nextEl: ".quotes-slider__controls__button--next",
          prevEl: ".quotes-slider__controls__button--prev",
        },
      }),
      new _e(".use-case-slider__slides-wrapper", {
        modules: [si, ni],
        slidesPerView: 1,
        spaceBetween: 16,
        loop: !0,
        breakpoints: {
          0: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          320: {
            slidesPerView: 1.2,
            spaceBetween: 40,
          },
          600: {
            slidesPerView: 2.5,
            spaceBetween: 80,
          },
          950: {
            slidesPerView: 2.5,
            spaceBetween: 80,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 80,
          },
        },
        wrapperClass: "use-case-slider__slides",
        slideClass: "use-case-slider__slide",
        navigation: {
          nextEl: ".use-case-slider__controls__button--next",
          prevEl: ".use-case-slider__controls__button--prev",
        },
      }),
      new _e(".image-slider__slides-wrapper", {
        modules: [ii],
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: 0,
        loop: !0,
        wrapperClass: "image-slider__slides",
        slideClass: "image-slider__slide",
        autoplay: {
          delay: 2500,
          disableOnInteraction: !1,
        },
      }),
      new _e(".internal-hero-slider__slides-wrapper", {
        modules: [ii],
        slidesPerView: 1,
        spaceBetween: 200,
        centeredSlides: 0,
        loop: !0,
        wrapperClass: "internal-hero-slider__slides",
        slideClass: "internal-hero-slider__slide",
        speed: 1e3,
        autoplay: {
          delay: 2500,
          disableOnInteraction: !1,
        },
      }),
      new _e(".mobile-image__slides-wrapper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: !0,
        wrapperClass: "mobile-image__slides",
        slideClass: "mobile-image__slide",
      });
  }

  function Lg() {
    const e = document.querySelectorAll(".animate"),
      t = (o, a = 1) =>
        o.getBoundingClientRect().top <=
        (window.innerHeight || document.documentElement.clientHeight) / a,
      s = (o) =>
        o.getBoundingClientRect().top >
        (window.innerHeight || document.documentElement.clientHeight),
      n = (o) => {
        o.classList.add("scrolled");
      },
      i = (o) => {
        o.classList.remove("scrolled");
      },
      r = () => {
        e.forEach((o) => {
          t(o, 1) ? n(o) : s(o) && i(o);
        });
      };
    r(),
      window.addEventListener("scroll", () => {
        r();
      });
  }

  function kg() {
    const e = document.querySelectorAll("span.stat-number"),
      t = (r, o = 1) =>
        r.getBoundingClientRect().top <=
        (window.innerHeight || document.documentElement.clientHeight) / o,
      s = (r) => {
        if (r.classList.contains("started")) return;
        r.classList.add("started");
        const o = parseInt(r.getAttribute("data-value"), 10);
        let a = 0,
          l = Math.max(1, Math.ceil(o / 100)),
          u = Math.max(10, 1500 / (o / l));
        const d = () => {
          (a += l),
            a >= o
              ? (a = o)
              : (a > o - o / 3 && (u = u * 1.09), setTimeout(d, u)),
            (r.innerText = n(a));
        };
        setTimeout(d, u);
      },
      n = (r) => r.toLocaleString(),
      i = () => {
        e.forEach((r) => {
          !r.classList.contains("started") && t(r, 1.05) && s(r);
        });
      };
    window.addEventListener("scroll", i), i();
  }

  function Og() {
    const e = document.querySelector(".page-header");
    document.querySelectorAll(".menu-item-has-children").forEach((i) => {
      const r = i.querySelector(".sub-menu"),
        o = i.querySelector("a");
      if (!r || !o) return;
      o.setAttribute("aria-haspopup", "true"),
        o.setAttribute("aria-expanded", "false"),
        r.setAttribute("aria-hidden", "true"),
        (r.style.display = "none"),
        i.addEventListener("mouseenter", () => {
          window.innerWidth < 1240 || a();
        }),
        i.addEventListener("mouseleave", () => {
          l();
        }),
        o.addEventListener("keydown", (c) => {
          (c.key === "Enter" || c.key === " ") &&
            (c.preventDefault(),
            o.getAttribute("aria-expanded") === "true" ? l() : a());
        }),
        r.addEventListener("focusout", (c) => {
          !r.contains(c.relatedTarget) && c.relatedTarget !== o && l();
        });

      function a() {
        (r.style.display = "block"),
          o.setAttribute("aria-expanded", "true"),
          r.setAttribute("aria-hidden", "false");
        const c = r.offsetHeight,
          u = 48;
        (e.style.height = `${u + c}px`),
          e.classList.add("expanded"),
          e.classList.remove("collapsed");
      }

      function l() {
        window.innerWidth < 1240 ||
          ((r.style.display = "none"),
          o.setAttribute("aria-expanded", "false"),
          r.setAttribute("aria-hidden", "true"),
          e.classList.add("collapsed"),
          e.classList.remove("expanded"));
      }
    });
    var s;
    window.addEventListener("resize", function () {
      clearTimeout(s), (s = setTimeout(n, 500));
    });

    function n() {}
  }
  const Mg = {
    classCookieAccept: "cookie-accept",
    classPrefacePanel: "cookie-accept__preface",
    classManagePanel: "cookie-accept__manage",
    classAcceptAllCookiesButton: "cookie-accept__accept-cookies-button",
    classRejectAllCookiesButton: "cookie-accept__reject-cookies-button",
    classManageCookiesButton: "cookie-accept__manage-button",
    classSaveCookieSelectionButton: "cookie-accept__confirm-selection-button",
    inputNameAnalytics: "cookie-accept-enable-analytics",
    inputNameMarketing: "cookie-accept-enable-marketing",
    cookies: {
      analytics: {
        name: "analyticsConsent",
        expiryDays: 365,
        domain: "",
        path: "/",
      },
      marketing: {
        name: "marketingConsent",
        expiryDays: 365,
        domain: "",
        path: "/",
      },
    },
    showCookieAccept() {
      const [e] = document.getElementsByClassName(this.classCookieAccept);
      console.log(e), e.open || e.showModal();
    },
    hideCookieAccept() {
      const [e] = document.getElementsByClassName(this.classCookieAccept);
      e.open && e.close();
    },
    showPreface() {
      const [e] = document.getElementsByClassName(this.classPrefacePanel);
      e.classList.add(`${this.classPrefacePanel}--show`);
    },
    hidePreface() {
      const [e] = document.getElementsByClassName(this.classPrefacePanel);
      e.classList.remove(`${this.classPrefacePanel}--show`);
    },
    showManage() {
      const [e] = document.getElementsByClassName(this.classManagePanel);
      e.classList.add(`${this.classManagePanel}--show`);
    },
    hideManage() {
      const [e] = document.getElementsByClassName(this.classManagePanel);
      e.classList.add(`${this.classManagePanel}--show`);
    },
  };
  let pe = {};
  window.dataLayer = window.dataLayer || [];

  function Qi() {
    dataLayer.push(arguments);
  }

  function Ig() {
    Qi("consent", "default", {
      ad_user_data: "denied",
      ad_personalization: "denied",
      ad_storage: "denied",
      analytics_storage: "denied",
      functionality_storage: "denied",
      personalization_storage: "denied",
      security_storage: "denied",
    });
  }

  function Zi() {
    Qi("consent", "update", {
      analytics_storage: "granted",
    });
  }

  function er() {
    Qi("consent", "update", {
      ad_user_data: "granted",
      ad_personalization: "granted",
      ad_storage: "granted",
    });
  }

  function mo(e) {
    const s = `; ${document.cookie}`.split(`; ${e}=`);
    return s.length != 2 ? void 0 : s.pop().split(";").shift();
  }

  function qt({ name: e, expiryDays: t, domain: s, path: n }, i) {
    const r = [`${e}=${i}`, `path=${n || "/"}`];
    if (t !== 0) {
      var o = new Date();
      o.setDate(o.getDate() + (t || 365)), (o = o.toUTCString());
    } else o = 0;
    r.push(`expires=${o}`),
      s && r.push(`domain=${s}`),
      (document.cookie = r.join(";"));
  }

  function Zt(e) {
    const t = document.querySelectorAll(
      `script[type="text/plain"][cookie-accept=${e}]`,
    );
    for (let s = 0; s < t.length; s++) {
      const n = t[s],
        i = n.getAttribute("src"),
        r = document.createElement("script");
      r.setAttribute("type", "text/javascript"),
        i !== null && i !== ""
          ? (r.setAttribute("src", i),
            n.parentNode.insertBefore(r, n.nextSibling))
          : ((r.innerHTML = n.innerHTML),
            t[s].parentNode.insertBefore(r, t[s].nextSibling)),
        n.parentNode.removeChild(n);
    }
  }

  function Rg() {
    for (const e in pe.cookies) qt(pe.cookies[e], "true");
    Zi(), er(), Zt("analytics"), Zt("marketing");
  }

  function Ng() {
    for (const e in pe.cookies) qt(pe.cookies[e], "false");
  }

  function Dg() {
    const e = document.querySelector(`[name=${pe.inputNameAnalytics}]`),
      t = document.querySelector(`[name=${pe.inputNameMarketing}]`);
    console.log(e),
      console.log(t),
      e !== void 0 && e.checked === !0
        ? (qt(pe.cookies.analytics, "true"), Zi(), Zt("analytics"))
        : qt(pe.cookies.analytics, "false"),
      t !== void 0 && t.checked === !0
        ? (qt(pe.cookies.marketing, "true"), er(), Zt("marketing"))
        : qt(pe.cookies.marketing, "false");
  }

  function Bg() {
    const e = document.getElementsByClassName(pe.classAcceptAllCookiesButton),
      t = document.getElementsByClassName(pe.classRejectAllCookiesButton),
      s = document.getElementsByClassName(pe.classManageCookiesButton),
      n = document.getElementsByClassName(pe.classSaveCookieSelectionButton);
    for (const i of e)
      i.addEventListener("click", (r) => {
        r.preventDefault(), Rg(), pe.hideCookieAccept();
      });
    for (const i of t)
      i.addEventListener("click", (r) => {
        r.preventDefault(), Ng(), pe.hideCookieAccept();
      });
    for (const i of s)
      i.addEventListener("click", (r) => {
        r.preventDefault(), pe.hidePreface(), pe.showManage();
      });
    for (const i of n)
      i.addEventListener("click", (r) => {
        r.preventDefault(), Dg(), pe.hideCookieAccept();
      });
  }

  function Fg(e) {
    (pe = {
      ...Mg,
      ...e,
    }),
      Ig();
    const [t] = document.getElementsByClassName(pe.classCookieAccept);
    if (t === void 0) {
      console.error("Cookie accept element not found!");
      return;
    }
    const s = mo(pe.cookies.analytics.name),
      n = mo(pe.cookies.marketing.name);
    s === void 0 && n === void 0
      ? (Bg(), pe.showCookieAccept(), pe.showPreface())
      : (s === "true" && (Zi(), Zt("analytics")),
        n === "true" && (er(), Zt("marketing")));
  }

  function Vg() {
    const e = document.querySelectorAll(".accordion-image__item"),
      t = document.getElementById("accordion-image__image"),
      s = (i) => {
        i &&
          t.src !== i &&
          ((t.style.transition = "opacity .7s linear"),
          (t.style.opacity = ".1"),
          (t.src = i),
          (t.style.opacity = "1"));
      },
      n = (i) => {
        e.forEach((a) => {
          a.classList.remove("active");
        }),
          i.classList.add("active");
        const r = i.querySelector(".accordion-image__content");
        r.style.maxHeight = r.scrollHeight + "px";
        const o = i.getAttribute("data-image");
        s(o);
      };
    e.length > 0 && n(e[0]),
      e.forEach((i) => {
        const r = i.querySelector(".button-container");
        r &&
          r.addEventListener("mouseover", () => {
            i.classList.contains("active") || n(i);
          });
      });
  }
  class go {
    constructor(t) {
      (this.el = t),
        (this.summary = t.querySelector("summary")),
        (this.content = t.querySelector(".content")),
        (this.animation = null),
        (this.isClosing = !1),
        (this.isExpanding = !1),
        this.summary.addEventListener("click", (s) => this.onClick(s));
    }
    onClick(t) {
      t.preventDefault(),
        (this.el.style.overflow = "hidden"),
        this.isClosing || !this.el.open
          ? this.open()
          : (this.isExpanding || this.el.open) && this.shrink();
    }
    shrink() {
      (this.isClosing = !0), this.el.classList.add("closing-faq");
      const t = `${this.el.offsetHeight}px`,
        s = `${this.summary.offsetHeight + 20}px`;
      this.animation && this.animation.cancel(),
        (this.animation = this.el.animate(
          {
            height: [t, s],
          },
          {
            duration: 600,
            easing: "ease-in",
          },
        )),
        this.content.animate(
          [
            {
              transform: "translateY(0px)",
            },
            {
              transform: "translateY(-10px)",
            },
          ],
          {
            duration: 600,
            easing: "ease-in",
            iterations: 1,
          },
        ),
        (this.animation.onfinish = () => this.onAnimationFinish(!1)),
        (this.animation.oncancel = () => (this.isClosing = !1));
    }
    open() {
      (this.el.style.height = `${this.el.offsetHeight}px`),
        (this.el.open = !0),
        window.requestAnimationFrame(() => this.expand());
    }
    expand() {
      this.isExpanding = !0;
      const t = `${this.el.offsetHeight}px`,
        s = `${this.summary.offsetHeight + this.content.offsetHeight}px`;
      this.animation && this.animation.cancel(),
        (this.animation = this.el.animate(
          {
            height: [t, s],
          },
          {
            duration: 600,
            easing: "ease-in",
          },
        )),
        this.content.animate(
          [
            {
              transform: "translateY(-10px)",
            },
            {
              transform: "translateY(0px)",
            },
          ],
          {
            duration: 600,
            easing: "ease-in",
            iterations: 1,
          },
        ),
        (this.animation.onfinish = () => this.onAnimationFinish(!0)),
        (this.animation.oncancel = () => (this.isExpanding = !1));
    }
    onAnimationFinish(t) {
      this.el.classList.remove("closing-faq"),
        (this.el.open = t),
        (this.animation = null),
        (this.isClosing = !1),
        (this.isExpanding = !1),
        (this.el.style.height = this.el.style.overflow = "");
    }
  }

  function Hg() {
    document.querySelectorAll(".accordion details").forEach((e) => {
      new go(e);
    }),
      document.querySelectorAll(".accordion-steps details").forEach((e) => {
        new go(e);
      });
  }

  function $g() {
    document.querySelectorAll(".request-button").forEach((s) => {
      s.addEventListener("click", function (n) {
        n.preventDefault();
        let i = this.getAttribute("data-form");
        document.getElementById(i).style.display = "flex";
      });
    }),
      document.querySelectorAll(".close-button").forEach((s) => {
        s.addEventListener("click", function (n) {
          n.preventDefault(),
            (this.closest(".modal__overlay").style.display = "none");
        });
      });
    let e = document.querySelector("#search-button"),
      t = document.querySelector("#search-close-button");
    e &&
      e.addEventListener("click", function (s) {
        s.preventDefault(),
          document.body.classList.toggle("fixed"),
          document
            .getElementById("search-modal__overlay")
            .classList.toggle("open");
      }),
      t &&
        t.addEventListener("click", function (s) {
          s.preventDefault(),
            document.body.classList.toggle("fixed"),
            document
              .getElementById("search-modal__overlay")
              .classList.toggle("open");
        });
  }

  function jg() {
    const e = document.querySelectorAll(".parallax");
    e &&
      e.forEach((s) => {
        window.addEventListener("scroll", function () {
          let n = s.parentNode.offsetTop - window.scrollY - 400;
          s.style.backgroundPositionY = n * 0.1 + "px";
          let i = s.nextSibling;
          s.nextSibling.classList.contains("image-mobile") &&
            (i = i.nextSibling),
            (i.style.top = n * 0.12 + "px");
        });
      });
    const t = document.querySelectorAll(".parallax-div");
    t &&
      t.forEach((s) => {
        window.addEventListener("scroll", function () {
          let n = window.pageYOffset;
          getComputedStyle(s).position == "static"
            ? (s.style.marginTop = (n - 0.03) * 0.03 + "px")
            : (s.style.top = (n - 0.03) * 0.03 + "px");
        });
      });
  }

  function zg(e) {
    document.readyState !== "loading"
      ? e()
      : document.addEventListener("DOMContentLoaded", e);
  }
  zg(() => {
    im(), am(), lm(), Ag(), Fg(), Lg(), kg(), Og(), Vg(), Hg(), $g(), jg();

    function e() {
      var n = document.documentElement,
        i = document.body,
        r = "scrollTop",
        o = "scrollHeight",
        a = 0;
      return (
        window.innerWidth > 1550 ? (a = n[o] - 2100) : (a = n[o] - 1600),
        (n[r] || i[r]) / ((a || i[o]) - n.clientHeight)
      );
    }
    let t = document.getElementById("donut-segment");
    if (
      (t &&
        window.addEventListener("scroll", () => {
          let n = e(),
            i = n * 100,
            r = 100 - n * 100,
            o = i + " " + r;
          t.setAttribute("stroke-dasharray", o);
        }),
      document.querySelectorAll(".menu-image-container"))
    ) {
      if (window.innerWidth < 1150) return;
      document.querySelectorAll(".option-container").forEach((i) => {
        i.addEventListener("mouseover", (r) => {
          const o = document.querySelectorAll(".menu-image");
          let a = r.target.getAttribute("data-id"),
            l = document.getElementById("image-" + a);
          l.classList.contains("show") ||
            (o.forEach((c) => {
              c.classList.add("hide"),
                c.classList.remove("show"),
                c.classList.remove("move");
            }),
            l.classList.remove("hide"),
            l.classList.add("show"),
            setTimeout(function () {
              l.classList.add("move");
            }, 50));
        });
      });
    }
  });
});
export default qg();
//# sourceMappingURL=index-DccJlUYi.js.map
