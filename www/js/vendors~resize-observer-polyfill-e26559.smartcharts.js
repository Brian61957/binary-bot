(window.webpackJsonpsmartcharts = window.webpackJsonpsmartcharts || []).push([
    [14],
    {
        344(t, e, n) {
            n.r(e),
            (function(t) {
                let n = (function() {
                        if (typeof Map !== 'undefined') return Map;
                        function t(t, e) {
                            let n = -1;
                            return t.some((t, r) => t[0] === e && ((n = r), !0)), n;
                        }
                        return (function() {
                            function e() {
                                this.__entries__ = [];
                            }
                            return (
                                Object.defineProperty(e.prototype, 'size', {
                                    get() {
                                        return this.__entries__.length;
                                    },
                                    enumerable  : !0,
                                    configurable: !0,
                                }),
                                (e.prototype.get = function(e) {
                                    let n = t(this.__entries__, e),
                                        r = this.__entries__[n];
                                    return r && r[1];
                                }),
                                (e.prototype.set = function(e, n) {
                                    const r = t(this.__entries__, e);
                                    ~r ? (this.__entries__[r][1] = n) : this.__entries__.push([e, n]);
                                }),
                                (e.prototype.delete = function(e) {
                                    let n = this.__entries__,
                                        r = t(n, e);
                                    ~r && n.splice(r, 1);
                                }),
                                (e.prototype.has = function(e) {
                                    return !!~t(this.__entries__, e);
                                }),
                                (e.prototype.clear = function() {
                                    this.__entries__.splice(0);
                                }),
                                (e.prototype.forEach = function(t, e) {
                                    void 0 === e && (e = null);
                                    for (let n = 0, r = this.__entries__; n < r.length; n++) {
                                        const i = r[n];
                                        t.call(e, i[1], i[0]);
                                    }
                                }),
                                e
                            );
                        })();
                    })(),
                    r =
                            typeof window !== 'undefined' &&
                            typeof document !== 'undefined' &&
                            window.document === document,
                    i =
                            void 0 !== t && t.Math === Math
                                ? t
                                : typeof self !== 'undefined' && self.Math === Math
                                    ? self
                                    : typeof window !== 'undefined' && window.Math === Math
                                        ? window
                                        : Function('return this')(),
                    o =
                            typeof requestAnimationFrame === 'function'
                                ? requestAnimationFrame.bind(i)
                                : function(t) {
                                    return setTimeout(() => t(Date.now()), 1e3 / 60);
                                };
                let s = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
                    c = typeof MutationObserver !== 'undefined',
                    a = (function() {
                        function t() {
                            (this.connected_ = !1),
                            (this.mutationEventsAdded_ = !1),
                            (this.mutationsObserver_ = null),
                            (this.observers_ = []),
                            (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                            (this.refresh = (function(t, e) {
                                let n = !1,
                                    r = !1,
                                    i = 0;
                                function s() {
                                    n && ((n = !1), t()), r && a();
                                }
                                function c() {
                                    o(s);
                                }
                                function a() {
                                    const t = Date.now();
                                    if (n) {
                                        if (t - i < 2) return;
                                        r = !0;
                                    } else (n = !0), (r = !1), setTimeout(c, e);
                                    i = t;
                                }
                                return a;
                            })(this.refresh.bind(this), 20));
                        }
                        return (
                            (t.prototype.addObserver = function(t) {
                                ~this.observers_.indexOf(t) || this.observers_.push(t),
                                this.connected_ || this.connect_();
                            }),
                            (t.prototype.removeObserver = function(t) {
                                let e = this.observers_,
                                    n = e.indexOf(t);
                                ~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_();
                            }),
                            (t.prototype.refresh = function() {
                                this.updateObservers_() && this.refresh();
                            }),
                            (t.prototype.updateObservers_ = function() {
                                const t = this.observers_.filter(t => t.gatherActive(), t.hasActive());
                                return t.forEach(t => t.broadcastActive()), t.length > 0;
                            }),
                            (t.prototype.connect_ = function() {
                                r &&
                                        !this.connected_ &&
                                        (document.addEventListener('transitionend', this.onTransitionEnd_),
                                        window.addEventListener('resize', this.refresh),
                                        c
                                            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
                                            this.mutationsObserver_.observe(document, {
                                                attributes   : !0,
                                                childList    : !0,
                                                characterData: !0,
                                                subtree      : !0,
                                            }))
                                            : (document.addEventListener('DOMSubtreeModified', this.refresh),
                                            (this.mutationEventsAdded_ = !0)),
                                        (this.connected_ = !0));
                            }),
                            (t.prototype.disconnect_ = function() {
                                r &&
                                        this.connected_ &&
                                        (document.removeEventListener('transitionend', this.onTransitionEnd_),
                                        window.removeEventListener('resize', this.refresh),
                                        this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                                        this.mutationEventsAdded_ &&
                                            document.removeEventListener('DOMSubtreeModified', this.refresh),
                                        (this.mutationsObserver_ = null),
                                        (this.mutationEventsAdded_ = !1),
                                        (this.connected_ = !1));
                            }),
                            (t.prototype.onTransitionEnd_ = function(t) {
                                let e = t.propertyName,
                                    n = void 0 === e ? '' : e;
                                s.some(t => !!~n.indexOf(t)) && this.refresh();
                            }),
                            (t.getInstance = function() {
                                return this.instance_ || (this.instance_ = new t()), this.instance_;
                            }),
                            (t.instance_ = null),
                            t
                        );
                    })(),
                    h = function(t, e) {
                        for (let n = 0, r = Object.keys(e); n < r.length; n++) {
                            const i = r[n];
                            Object.defineProperty(t, i, {
                                value       : e[i],
                                enumerable  : !1,
                                writable    : !1,
                                configurable: !0,
                            });
                        }
                        return t;
                    },
                    u = function(t) {
                        return (t && t.ownerDocument && t.ownerDocument.defaultView) || i;
                    },
                    f = b(0, 0, 0, 0);
                function d(t) {
                    return parseFloat(t) || 0;
                }
                function p(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    return e.reduce((e, n) => e + d(t[`border-${n}-width`]), 0);
                }
                function v(t) {
                    let e = t.clientWidth,
                        n = t.clientHeight;
                    if (!e && !n) return f;
                    let r = u(t).getComputedStyle(t),
                        i = (function(t) {
                            for (var e = {}, n = 0, r = ['top', 'right', 'bottom', 'left']; n < r.length; n++) {
                                let i = r[n],
                                    o = t[`padding-${i}`];
                                e[i] = d(o);
                            }
                            return e;
                        })(r),
                        o = i.left + i.right,
                        s = i.top + i.bottom,
                        c = d(r.width),
                        a = d(r.height);
                    if (
                        (r.boxSizing === 'border-box' &&
                                (Math.round(c + o) !== e && (c -= p(r, 'left', 'right') + o),
                                Math.round(a + s) !== n && (a -= p(r, 'top', 'bottom') + s)),
                        !(function(t) {
                            return t === u(t).document.documentElement;
                        })(t))
                    ) {
                        let h = Math.round(c + o) - e,
                            v = Math.round(a + s) - n;
                        Math.abs(h) !== 1 && (c -= h), Math.abs(v) !== 1 && (a -= v);
                    }
                    return b(i.left, i.top, c, a);
                }
                const _ =
                        typeof SVGGraphicsElement !== 'undefined'
                            ? function(t) {
                                return t instanceof u(t).SVGGraphicsElement;
                            }
                            : function(t) {
                                return t instanceof u(t).SVGElement && typeof t.getBBox === 'function';
                            };
                function l(t) {
                    return r
                        ? _(t)
                            ? (function(t) {
                                const e = t.getBBox();
                                return b(0, 0, e.width, e.height);
                            })(t)
                            : v(t)
                        : f;
                }
                function b(t, e, n, r) {
                    return { x: t, y: e, width: n, height: r };
                }
                let m = (function() {
                        function t(t) {
                            (this.broadcastWidth = 0),
                            (this.broadcastHeight = 0),
                            (this.contentRect_ = b(0, 0, 0, 0)),
                            (this.target = t);
                        }
                        return (
                            (t.prototype.isActive = function() {
                                const t = l(this.target);
                                return (
                                    (this.contentRect_ = t),
                                    t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
                                );
                            }),
                            (t.prototype.broadcastRect = function() {
                                const t = this.contentRect_;
                                return (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t;
                            }),
                            t
                        );
                    })(),
                    y = function(t, e) {
                        let n,
                            r,
                            i,
                            o,
                            s,
                            c,
                            a,
                            u =
                                    ((r = (n = e).x),
                                    (i = n.y),
                                    (o = n.width),
                                    (s = n.height),
                                    (c = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object),
                                    (a = Object.create(c.prototype)),
                                    h(a, {
                                        x     : r,
                                        y     : i,
                                        width : o,
                                        height: s,
                                        top   : i,
                                        right : r + o,
                                        bottom: s + i,
                                        left  : r,
                                    }),
                                    a);
                        h(this, { target: t, contentRect: u });
                    },
                    w = (function() {
                        function t(t, e, r) {
                            if (
                                ((this.activeObservations_ = []),
                                (this.observations_ = new n()),
                                typeof t !== 'function')
                            ) {
                                throw new TypeError('The callback provided as parameter 1 is not a function.');
                            }
                            (this.callback_ = t), (this.controller_ = e), (this.callbackCtx_ = r);
                        }
                        return (
                            (t.prototype.observe = function(t) {
                                if (!arguments.length) {
                                    throw new TypeError('1 argument required, but only 0 present.');
                                }
                                if (typeof Element !== 'undefined' && Element instanceof Object) {
                                    if (!(t instanceof u(t).Element)) {
                                        throw new TypeError('parameter 1 is not of type "Element".');
                                    }
                                    const e = this.observations_;
                                    e.has(t) ||
                                            (e.set(t, new m(t)),
                                            this.controller_.addObserver(this),
                                            this.controller_.refresh());
                                }
                            }),
                            (t.prototype.unobserve = function(t) {
                                if (!arguments.length) {
                                    throw new TypeError('1 argument required, but only 0 present.');
                                }
                                if (typeof Element !== 'undefined' && Element instanceof Object) {
                                    if (!(t instanceof u(t).Element)) {
                                        throw new TypeError('parameter 1 is not of type "Element".');
                                    }
                                    const e = this.observations_;
                                    e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this));
                                }
                            }),
                            (t.prototype.disconnect = function() {
                                this.clearActive(),
                                this.observations_.clear(),
                                this.controller_.removeObserver(this);
                            }),
                            (t.prototype.gatherActive = function() {
                                const t = this;
                                this.clearActive(),
                                this.observations_.forEach(e => {
                                    e.isActive() && t.activeObservations_.push(e);
                                });
                            }),
                            (t.prototype.broadcastActive = function() {
                                if (this.hasActive()) {
                                    let t = this.callbackCtx_,
                                        e = this.activeObservations_.map(t => new y(t.target, t.broadcastRect()));
                                    this.callback_.call(t, e, t), this.clearActive();
                                }
                            }),
                            (t.prototype.clearActive = function() {
                                this.activeObservations_.splice(0);
                            }),
                            (t.prototype.hasActive = function() {
                                return this.activeObservations_.length > 0;
                            }),
                            t
                        );
                    })(),
                    g = typeof WeakMap !== 'undefined' ? new WeakMap() : new n(),
                    E = function t(e) {
                        if (!(this instanceof t)) throw new TypeError('Cannot call a class as a function.');
                        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                        let n = a.getInstance(),
                            r = new w(e, n, this);
                        g.set(this, r);
                    };
                ['observe', 'unobserve', 'disconnect'].forEach(t => {
                    E.prototype[t] = function() {
                        let e;
                        return (e = g.get(this))[t].apply(e, arguments);
                    };
                });
                const O = void 0 !== i.ResizeObserver ? i.ResizeObserver : E;
                e.default = O;
            }).call(this, n(65));
        },
    },
]);
// # sourceMappingURL=vendors~resize-observer-polyfill-e26559.smartcharts.js.map
