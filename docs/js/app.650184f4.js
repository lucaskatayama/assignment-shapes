(function(t) {
  function e(e) {
    for (
      var n, o, r = e[0], l = e[1], c = e[2], p = 0, h = [];
      p < r.length;
      p++
    )
      (o = r[p]), s[o] && h.push(s[o][0]), (s[o] = 0);
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (t[n] = l[n]);
    u && u(e);
    while (h.length) h.shift()();
    return i.push.apply(i, c || []), a();
  }
  function a() {
    for (var t, e = 0; e < i.length; e++) {
      for (var a = i[e], n = !0, r = 1; r < a.length; r++) {
        var l = a[r];
        0 !== s[l] && (n = !1);
      }
      n && (i.splice(e--, 1), (t = o((o.s = a[0]))));
    }
    return t;
  }
  var n = {},
    s = { app: 0 },
    i = [];
  function o(e) {
    if (n[e]) return n[e].exports;
    var a = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
  }
  (o.m = t),
    (o.c = n),
    (o.d = function(t, e, a) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (o.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function(t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (o.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          o.d(
            a,
            n,
            function(e) {
              return t[e];
            }.bind(null, n)
          );
      return a;
    }),
    (o.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = "");
  var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = r.push.bind(r);
  (r.push = e), (r = r.slice());
  for (var c = 0; c < r.length; c++) e(r[c]);
  var u = l;
  i.push([0, "chunk-vendors"]), a();
})({
  0: function(t, e, a) {
    t.exports = a("56d7");
  },
  "0c20": function(t, e, a) {
    t.exports = a.p + "img/calc_areaabcd.52518f3c.png";
  },
  1238: function(t, e, a) {
    "use strict";
    var n = a("4dd2"),
      s = a.n(n);
    s.a;
  },
  "1d54": function(t, e, a) {
    "use strict";
    var n = a("b4c0"),
      s = a.n(n);
    s.a;
  },
  2851: function(t, e, a) {
    t.exports = a.p + "img/calc_radius.4f14500a.png";
  },
  3412: function(t, e, a) {
    "use strict";
    var n = a("8e04"),
      s = a.n(n);
    s.a;
  },
  "3ec8": function(t, e, a) {},
  "4dd2": function(t, e, a) {},
  "56d7": function(t, e, a) {
    "use strict";
    a.r(e);
    a("cadf"), a("551c"), a("097d");
    var n = a("a026"),
      s = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", [
          a(
            "nav",
            {
              staticClass:
                "navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-2 shadow"
            },
            [
              a(
                "router-link",
                {
                  staticClass: "navbar-brand col-sm-2 col-md-1 mr-0",
                  attrs: { to: "/" }
                },
                [a("logo"), t._v(" Shapes\n    ")],
                1
              ),
              a(
                "ul",
                { staticClass: "navbar-nav mr-auto flex-row" },
                [
                  a(
                    "router-link",
                    {
                      staticClass: "nav-item mr-4",
                      attrs: { tag: "li", to: "/canvas" }
                    },
                    [a("a", { staticClass: "nav-link" }, [t._v("Canvas")])]
                  ),
                  a(
                    "router-link",
                    {
                      staticClass: "nav-item mr-4",
                      attrs: { tag: "li", to: "/about" }
                    },
                    [a("a", { staticClass: "nav-link" }, [t._v("About")])]
                  )
                ],
                1
              )
            ],
            1
          ),
          a(
            "div",
            { staticClass: "container-fluid p-t-2" },
            [a("router-view")],
            1
          )
        ]);
      },
      i = [],
      o = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("svg", { staticClass: "logo" }, [
          a("polygon", {
            attrs: { points: "0,0 30,0 30,30 0,30", fill: "#42b983" }
          })
        ]);
      },
      r = [],
      l = a("2877"),
      c = {},
      u = Object(l["a"])(c, o, r, !1, null, null, null);
    u.options.__file = "Logo.vue";
    var p = u.exports,
      h = { components: { Logo: p } },
      v = h,
      m = (a("5c0b"), Object(l["a"])(v, s, i, !1, null, null, null));
    m.options.__file = "App.vue";
    var f = m.exports,
      d = a("8c4f"),
      g = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { staticClass: "row" }, [
          a(
            "nav",
            { staticClass: "col-md-3 d-none d-md-block bg-light sidebar px-4" },
            [
              a(
                "div",
                {
                  staticClass:
                    "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
                },
                [
                  a("h1", { staticClass: "h2" }, [t._v("Info")]),
                  a("div", { staticClass: "btn-toolbar mb-2 mb-md-0" }, [
                    a(
                      "button",
                      {
                        staticClass: "btn btn-info",
                        on: {
                          click: function(e) {
                            t.reset();
                          }
                        }
                      },
                      [t._v("Reset")]
                    )
                  ])
                ]
              ),
              a("div", [
                a("h3", [t._v("Parallelogram")]),
                null === t.parallelogram
                  ? a("p", [t._v("\n        No paralellogram\n      ")])
                  : a(
                      "ul",
                      [
                        t.points.length > 0
                          ? a("li", [
                              t._v("Points\n          "),
                              a(
                                "ul",
                                [
                                  t._l(t.points, function(e, n) {
                                    return a("li", { key: n }, [
                                      t._v(
                                        "(" + t._s(e.x) + ", " + t._s(e.y) + ")"
                                      )
                                    ]);
                                  }),
                                  t.parallelogram
                                    ? a("li", [
                                        t._v(
                                          "(" +
                                            t._s(t.pointD.x) +
                                            ", " +
                                            t._s(t.pointD.y) +
                                            ")"
                                        )
                                      ])
                                    : t._e()
                                ],
                                2
                              )
                            ])
                          : t._e(),
                        t.parallelogram
                          ? [
                              a("li", [
                                t._v(
                                  "Center of Mass: (" +
                                    t._s(t.centerOfMass.x) +
                                    ", " +
                                    t._s(t.centerOfMass.y) +
                                    ")"
                                )
                              ]),
                              a("li", [
                                t._v(
                                  "Area: " +
                                    t._s(t.parallelogram.getArea()) +
                                    " px"
                                ),
                                a("sup", [t._v("2")])
                              ])
                            ]
                          : t._e()
                      ],
                      2
                    ),
                a("h3", [t._v("Circle")]),
                null === t.circle
                  ? a("p", [t._v("\n        No circle\n      ")])
                  : a("ul", [
                      a("li", [
                        t._v(
                          "Center of Mass: (" +
                            t._s(t.circle.center.x) +
                            ", " +
                            t._s(t.circle.center.x) +
                            ")"
                        )
                      ]),
                      a("li", [
                        t._v("Area: " + t._s(t.circle.area) + " px"),
                        a("sup", [t._v("2")])
                      ]),
                      a("li", [
                        t._v("Radius: " + t._s(t.circle.getRadius()) + " px")
                      ])
                    ])
              ])
            ]
          ),
          a(
            "main",
            {
              staticClass: "col-md-9 ml-sm-auto col-lg-9 px-4",
              attrs: { role: "main" }
            },
            [
              t._m(0),
              a("div", { staticClass: "home" }, [
                a(
                  "svg",
                  { ref: "canvas", staticClass: "canvas" },
                  [
                    3 === t.points.length
                      ? a("parallelogram-shape", {
                          attrs: { parallelogram: t.parallelogram }
                        })
                      : t._e(),
                    3 === t.points.length
                      ? a("circle-shape", {
                          attrs: {
                            center: t.circle.center,
                            radius: t.circle.getRadius(),
                            color: "#FFD438"
                          }
                        })
                      : t._e(),
                    a("point-shape", {
                      attrs: { point: t.mouse, color: "#FF0000" }
                    }),
                    t._l(t.points, function(t, e) {
                      return a("point-shape", {
                        key: e,
                        attrs: { draggable: "", point: t, color: "#FF0000" }
                      });
                    })
                  ],
                  2
                )
              ])
            ]
          )
        ]);
      },
      _ = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              staticClass:
                "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
            },
            [
              a("h1", { staticClass: "h2" }, [t._v("Canvas")]),
              a("div", { staticClass: "btn-toolbar mb-2 mb-md-0" }, [
                a("div", { staticClass: "btn-group mr-2" })
              ])
            ]
          );
        }
      ],
      b = (a("7514"),
      function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "g",
          [
            a("position-label", { attrs: { position: t.parallelogram.CM } }),
            a("polygon", {
              attrs: { points: t.polygonPoints, fill: "none", stroke: "blue" }
            })
          ],
          1
        );
      }),
      y = [],
      x = {
        name: "Parallelogram",
        components: {},
        props: { parallelogram: Object },
        computed: {
          polygonPoints: function() {
            return this.parallelogram.points
              .map(function(t) {
                return "".concat(t.x, ",").concat(t.y);
              })
              .join(" ");
          }
        }
      },
      C = x,
      w = Object(l["a"])(C, b, y, !1, null, "4e907d42", null);
    w.options.__file = "ParallelogramShape.vue";
    var k = w.exports,
      j = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("g", [
          a("circle", {
            attrs: {
              cx: t.center.x,
              cy: t.center.y,
              r: t.radius,
              fill: "none",
              stroke: t.color
            }
          })
        ]);
      },
      A = [],
      P = (a("c5f6"),
      {
        name: "CircleShape",
        props: { center: Object, radius: Number, color: String }
      }),
      O = P,
      S = Object(l["a"])(O, j, A, !1, null, null, null);
    S.options.__file = "CircleShape.vue";
    var M = S.exports,
      B = a("d225"),
      E = a("b0b4");
    function D(t, e) {
      return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
    }
    function $(t, e) {
      return { x: e.x - t.x, y: e.y - t.y };
    }
    var L = { distance: D, delta: $ },
      T = (function() {
        function t(e, a, n) {
          Object(B["a"])(this, t),
            (this.pointA = e),
            (this.pointB = a),
            (this.pointC = n);
        }
        return (
          Object(E["a"])(t, [
            {
              key: "getArea",
              value: function() {
                return Math.abs(
                  this.pointA.x * this.pointB.y +
                    this.pointA.y * this.pointC.x +
                    this.pointB.x * this.pointC.y -
                    this.pointC.x * this.pointB.y -
                    this.pointC.y * this.pointA.x -
                    this.pointB.x * this.pointA.y
                );
              }
            },
            {
              key: "getPointD",
              value: function() {
                var t = L.delta(this.pointB, this.pointA),
                  e = L.delta(this.pointB, this.pointC);
                return {
                  x: this.pointB.x + t.x + e.x,
                  y: this.pointB.y + t.y + e.y
                };
              }
            },
            {
              key: "getCenterOfMass",
              value: function() {
                var t = L.delta(this.pointB, this.pointA),
                  e = L.delta(this.pointB, this.pointC);
                return {
                  x: this.pointB.x + (t.x + e.x) / 2,
                  y: this.pointB.y + (t.y + e.y) / 2
                };
              }
            },
            {
              key: "points",
              get: function() {
                return [
                  this.pointA,
                  this.pointB,
                  this.pointC,
                  this.getPointD()
                ];
              }
            }
          ]),
          t
        );
      })(),
      R = T,
      F = (function() {
        function t(e, a) {
          Object(B["a"])(this, t), (this.center = e), (this.area = a);
        }
        return (
          Object(E["a"])(t, [
            {
              key: "setCenter",
              value: function(t) {
                (this.center.x = t.x), (this.center.y = t.y);
              }
            },
            {
              key: "setArea",
              value: function(t) {
                this.area = t;
              }
            },
            {
              key: "getRadius",
              value: function() {
                return Math.sqrt(this.area / Math.PI);
              }
            }
          ]),
          t
        );
      })(),
      I = F,
      J = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "g",
          [
            a("circle", {
              class: { draggable: t.draggable },
              attrs: {
                cx: t.point.x,
                cy: t.point.y,
                r: t.radius,
                stroke: t.color,
                fill: "transparent"
              }
            }),
            a("position-label", { attrs: { position: t.point } })
          ],
          1
        );
      },
      V = [],
      G = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("g", [
          a(
            "text",
            {
              attrs: {
                x: t.position.x + t.translate.x,
                y: t.position.y + t.translate.y,
                fill: "black"
              }
            },
            [
              t._v(
                "\n    (" +
                  t._s(t.position.x) +
                  ", " +
                  t._s(t.position.y) +
                  ")\n  "
              )
            ]
          )
        ]);
      },
      N = [],
      q = {
        name: "PositionLabel",
        props: {
          position: Object,
          translate: {
            type: Object,
            default: function() {
              return { x: 10, y: -10 };
            }
          }
        }
      },
      H = q,
      Y = Object(l["a"])(H, G, N, !1, null, null, null);
    Y.options.__file = "PositionLabel.vue";
    var z = Y.exports,
      K = {
        name: "Point",
        components: { PositionLabel: z },
        props: {
          draggable: { type: Boolean, default: !1 },
          color: String,
          point: Object,
          radius: { type: String, default: "5.5px" }
        }
      },
      W = K,
      X = (a("8a5e"), Object(l["a"])(W, J, V, !1, null, "f9b5390e", null));
    X.options.__file = "PointShape.vue";
    var Q = X.exports,
      U = {
        name: "Canvas",
        components: { ParallelogramShape: k, CircleShape: M, PointShape: Q },
        data: function() {
          return {
            mouse: { x: 0, y: 0 },
            points: [],
            parallelogram: null,
            circle: null,
            selectedPoint: null
          };
        },
        computed: {
          pointD: function() {
            return this.parallelogram.getPointD();
          },
          centerOfMass: function() {
            return this.parallelogram.getCenterOfMass();
          },
          area: function() {
            return this.parallelogram.getArea();
          }
        },
        methods: {
          getMousePos: function(t, e) {
            var a = t.getBoundingClientRect();
            return { x: e.clientX - a.left, y: e.clientY - a.top };
          },
          reset: function() {
            (this.points = []),
              (this.parallelogram = null),
              (this.circle = null);
          },
          updateShapes: function() {
            this.circle.setCenter(this.centerOfMass),
              this.circle.setArea(this.area);
          },
          createShapes: function() {
            (this.parallelogram = new R(
              this.points[0],
              this.points[1],
              this.points[2]
            )),
              (this.circle = new I(this.centerOfMass, this.area));
          },
          addParallelogramPoint: function(t) {
            this.points.length < 3 && this.points.push(t),
              3 === this.points.length && this.createShapes();
          },
          click: function(t) {
            var e = this.getMousePos(this.canvas, t),
              a = this.points.find(function(t) {
                return L.distance(t, e) <= 5.5;
              });
            a || this.addParallelogramPoint(e);
          },
          startDrag: function(t) {
            var e = this.getMousePos(this.canvas, t),
              a = this.points.find(function(t) {
                return L.distance(t, e) <= 5.5;
              });
            a &&
              ((this.selectedPoint = a),
              this.canvas.addEventListener("mousemove", this.drag, !1));
          },
          drag: function(t) {
            if (this.selectedPoint) {
              var e = this.getMousePos(this.canvas, t);
              (this.selectedPoint.x = e.x),
                (this.selectedPoint.y = e.y),
                this.updateShapes();
            }
          },
          endDrag: function() {
            this.selectedPoint &&
              ((this.selectedPoint.x = this.mouse.x),
              (this.selectedPoint.y = this.mouse.y),
              (this.selectedPoint = null),
              this.canvas.removeEventListener("mousemove", this.drag, !1));
          },
          mouseMove: function(t) {
            this.mouse = this.getMousePos(this.canvas, t);
          }
        },
        mounted: function() {
          (this.canvas = this.$refs.canvas),
            this.canvas.addEventListener("mousemove", this.mouseMove, !1),
            this.canvas.addEventListener("click", this.click, !1),
            this.canvas.addEventListener("mousedown", this.startDrag, !1),
            this.canvas.addEventListener("mouseup", this.endDrag, !1);
        },
        unmounted: function() {
          this.canvas.removeEventListener("mousemove", this.mouseMove),
            this.canvas.removeEventListener("click", this.click),
            this.canvas.removeEventListener("mousedown", this.startDrag),
            this.canvas.removeEventListener("mouseup", this.endDrag);
        }
      },
      Z = U,
      tt = (a("1d54"), Object(l["a"])(Z, g, _, !1, null, "76919e0c", null));
    tt.options.__file = "Canvas.vue";
    var et = tt.exports,
      at = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { staticClass: "row" }, [
          a(
            "nav",
            { staticClass: "col-md-3 d-none d-md-block bg-light sidebar px-4" },
            [
              t._m(0),
              a("div", { staticClass: "sidebar-sticky" }, [
                a(
                  "ul",
                  { staticClass: "nav flex-column" },
                  [
                    a(
                      "router-link",
                      {
                        staticClass: "nav-item",
                        attrs: { tag: "li", to: "/about/app" }
                      },
                      [
                        a("a", { staticClass: "nav-link" }, [
                          t._v("Application")
                        ])
                      ]
                    ),
                    a(
                      "router-link",
                      {
                        staticClass: "nav-item",
                        attrs: { tag: "li", to: "/about/math" }
                      },
                      [a("a", { staticClass: "nav-link" }, [t._v("Geometry")])]
                    ),
                    a(
                      "router-link",
                      {
                        staticClass: "nav-item",
                        attrs: { tag: "li", to: "/about/tech" }
                      },
                      [
                        a("a", { staticClass: "nav-link active" }, [
                          t._v("Technologies")
                        ])
                      ]
                    ),
                    a(
                      "router-link",
                      {
                        staticClass: "nav-item",
                        attrs: { tag: "li", to: "/about/author" }
                      },
                      [
                        a("a", { staticClass: "nav-link active" }, [
                          t._v("Author")
                        ])
                      ]
                    )
                  ],
                  1
                )
              ])
            ]
          ),
          a(
            "main",
            {
              staticClass: "col-md-9 ml-sm-auto col-lg-9 px-4",
              attrs: { role: "main" }
            },
            [a("router-view")],
            1
          )
        ]);
      },
      nt = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              staticClass:
                "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
            },
            [a("h1", { staticClass: "h2" }, [t._v("About")])]
          );
        }
      ],
      st = (a("f582"), {}),
      it = Object(l["a"])(st, at, nt, !1, null, "f7a681e8", null);
    it.options.__file = "About.vue";
    var ot = it.exports,
      rt = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      lt = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", [
            a(
              "div",
              {
                staticClass:
                  "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
              },
              [a("h1", { staticClass: "h2" }, [t._v("Application")])]
            ),
            a("div", { staticClass: "content" }, [
              a("section", [
                a("h2", { attrs: { id: "goal" } }, [t._v("Goal")]),
                a("p", [
                  t._v(
                    "The goal of this application is to interact with the user and draws some geometrical shapes:"
                  )
                ]),
                a("ul", [
                  a("li", [
                    t._v(
                      "a blue parallelogram, having three of its corners in the points selected by the user."
                    )
                  ]),
                  a("li", [
                    t._v(
                      "a yellow circle, with the same area and centre of mass as the parallelogram."
                    )
                  ])
                ])
              ]),
              a("section", [
                a("h2", { attrs: { id: "calculations" } }, [
                  t._v("How to use")
                ]),
                a("p", [
                  t._v(
                    "Access the [Canvas] using the navigation bar on the top left"
                  )
                ]),
                a("p", [
                  t._v(
                    "Them click 3 times on the canvas located on the main section, on the right side."
                  )
                ]),
                a("p", [
                  t._v(
                    "After the 3rd point, you will see all the information about the shape on the left side."
                  )
                ]),
                a("p", [
                  t._v(
                    "If you want to move one of the 3 points, just move the cursor on top of one point, and drag it to the new position."
                  )
                ]),
                a("p", [t._v("All the information should be updated.")]),
                a("p", [
                  t._v(
                    " To reset the canvas, click on the button [Reset], located on the right side."
                  )
                ])
              ]),
              a("section", [
                a("h2", [t._v("How the information was calculated?")]),
                a("p", [
                  t._v(
                    "You can find out how I calculated all the information, by access the [Geometry] section on the right side."
                  )
                ])
              ]),
              a("section", [
                a("h2", [t._v("Source code")]),
                a("p", [
                  t._v(
                    "\n          All the source code can be cloned on the github repository:\n          "
                  ),
                  a(
                    "a",
                    {
                      attrs: {
                        target: "_blank",
                        href:
                          "https://github.com/lucaskatayama/assignment-shapes"
                      }
                    },
                    [
                      t._v(
                        " https://github.com/lucaskatayama/assignment-shapes"
                      )
                    ]
                  )
                ]),
                a("p", [
                  t._v(
                    "\n          An online version can be found here:\n          "
                  ),
                  a(
                    "a",
                    {
                      attrs: {
                        target: "_blank",
                        href:
                          "http://github.lucaskatayama.com/assignment-shapes/"
                      }
                    },
                    [
                      t._v(
                        "\n          http://github.lucaskatayama.com/assignment-shapes/\n          "
                      )
                    ]
                  )
                ])
              ])
            ])
          ]);
        }
      ],
      ct = (a("eee6"), {}),
      ut = Object(l["a"])(ct, rt, lt, !1, null, "1db1ed0b", null);
    ut.options.__file = "Application.vue";
    var pt = ut.exports,
      ht = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      vt = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", [
            a(
              "div",
              {
                staticClass:
                  "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
              },
              [a("h1", { staticClass: "h2" }, [t._v("Technologies")])]
            ),
            a("div", [
              a("h2", [t._v("Tech Information")]),
              a("p", [
                t._v(
                  "\n        The application view and navigation was built with VueJS and others support libraries like:\n        "
                ),
                a("ul", [
                  a("li", [t._v("Vue Router")]),
                  a("li", [t._v("Webpack")]),
                  a("li", [t._v("SCSS")]),
                  a("li", [t._v("BabelJS")])
                ])
              ]),
              a("p", [
                t._v(
                  "\n        Boostrap was used as a CSS component library.\n      "
                )
              ]),
              a("p", [
                t._v(
                  "\n        The calculators was built with VanillaJS and tested using Mocha and Chai.\n      "
                )
              ]),
              a("h2", [t._v("Source Code")]),
              a("p", [
                t._v("\n        Source code can be found here: "),
                a("a", { attrs: { href: "http://" } })
              ]),
              a("h2", [t._v("References")]),
              a("ul", [
                a("li", [
                  a(
                    "a",
                    { attrs: { target: "_blank", href: "https://vuejs.org" } },
                    [t._v("VueJS")]
                  )
                ]),
                a("li", [
                  a(
                    "a",
                    {
                      attrs: {
                        target: "_blank",
                        href: "https://router.vuejs.org/"
                      }
                    },
                    [t._v("Vue Router")]
                  )
                ]),
                a("li", [
                  a(
                    "a",
                    {
                      attrs: {
                        target: "_blank",
                        href: "https://cli.vuejs.org/"
                      }
                    },
                    [t._v("Vue CLI")]
                  )
                ]),
                a("li", [
                  a(
                    "a",
                    {
                      attrs: {
                        target: "_blank",
                        href: "https://sass-lang.com/"
                      }
                    },
                    [t._v("SCSS")]
                  )
                ]),
                a("li", [
                  a(
                    "a",
                    {
                      attrs: { target: "_blank", href: "https://babeljs.io/" }
                    },
                    [t._v("BabelJS")]
                  )
                ]),
                a("li", [
                  a(
                    "a",
                    {
                      attrs: {
                        target: "_blank",
                        href: "https://getbootstrap.com/"
                      }
                    },
                    [t._v("Bootstrap")]
                  )
                ]),
                a("li", [
                  a(
                    "a",
                    {
                      attrs: { target: "_blank", href: "https://mochajs.org/" }
                    },
                    [t._v("Mocha")]
                  )
                ]),
                a("li", [
                  a(
                    "a",
                    {
                      attrs: {
                        target: "_blank",
                        href: "https://www.chaijs.com/"
                      }
                    },
                    [t._v("Chai")]
                  )
                ])
              ])
            ])
          ]);
        }
      ],
      mt = (a("a8dc"), {}),
      ft = Object(l["a"])(mt, ht, vt, !1, null, "30c6e9cb", null);
    ft.options.__file = "Technologies.vue";
    var dt = ft.exports,
      gt = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      _t = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", [
            a(
              "div",
              {
                staticClass:
                  "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
              },
              [a("h1", { staticClass: "h2" }, [t._v("Author")])]
            ),
            a("p", [
              t._v(
                "My name is Lucas Katayama and I am Brazilian Software Developer, with 6 years of experience building web and mobile applications, willing to move abroad to improve my skills in development."
              )
            ]),
            a("p", [
              t._v("\n    Follow me:\n    "),
              a("ul", [
                a("li", [
                  a(
                    "a",
                    {
                      attrs: {
                        href: "https://www.linkedin.com/in/lucaskatayama",
                        target: "_blank"
                      }
                    },
                    [t._v("https://www.linkedin.com/in/lucaskatayama")]
                  )
                ]),
                a("li", [
                  a(
                    "a",
                    {
                      attrs: {
                        href: "https://github.com/lucaskatayama",
                        target: "_blank"
                      }
                    },
                    [t._v("https://github.com/lucaskatayama")]
                  )
                ]),
                a("li", [
                  a(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://stackoverflow.com/users/1181036/lucas-katayama",
                        target: "_blank"
                      }
                    },
                    [
                      t._v(
                        "https://stackoverflow.com/users/1181036/lucas-katayama"
                      )
                    ]
                  )
                ])
              ])
            ])
          ]);
        }
      ],
      bt = (a("3412"), {}),
      yt = Object(l["a"])(bt, gt, _t, !1, null, "15c237d4", null);
    yt.options.__file = "Author.vue";
    var xt = yt.exports,
      Ct = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      wt = [
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", [
            n(
              "div",
              {
                staticClass:
                  "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
              },
              [n("h1", { staticClass: "h2" }, [t._v("Geometry")])]
            ),
            n("div", { staticClass: "content" }, [
              n("h2", { attrs: { id: "calculations" } }, [
                t._v("Calculations")
              ]),
              n("h3", { attrs: { id: "parallelogram" } }, [
                t._v("Parallelogram")
              ]),
              n("h4", { attrs: { id: "4th-point-point-d-" } }, [
                t._v("4th point (point D)")
              ]),
              n("p", [
                t._v(
                  "The 4th was calculated by decomposing the edges BA and BC and them sum them to reach point D, like in the image below:"
                )
              ]),
              n("p", [
                n("img", {
                  staticClass: "graph",
                  attrs: { alt: "Calculation point D", src: a("df54") }
                })
              ]),
              n("h4", { attrs: { id: "area-of-a-parallelogram" } }, [
                t._v("Area of a Parallelogram")
              ]),
              n("p", [
                t._v(
                  "A parallelogram is made of 2 triangles with same area. One of them is determined by the 3 points A, B, C given by the user."
                )
              ]),
              n("p", [
                t._v(
                  "To calculate the area of a triangle ABC, we can use the determinant of a matrix:"
                )
              ]),
              n("p", [
                n("img", {
                  staticClass: "math",
                  attrs: { alt: "Area triangle ABC", src: a("c97a") }
                })
              ]),
              n("p", [
                t._v("Or 2 times the triangle area is the parallelogram area:")
              ]),
              n("p", [
                n("img", {
                  staticClass: "math",
                  attrs: { alt: "Area ABCD", src: a("0c20") }
                })
              ]),
              n("p", [
                n("img", {
                  staticClass: "math",
                  attrs: { alt: "Area ABCD", src: a("7899") }
                })
              ]),
              n("h4", { attrs: { id: "center-of-mass" } }, [
                t._v("Center of Mass")
              ]),
              n("p", [
                t._v(
                  "The center of mass is calculated by summing to the point B, half of distance of the edge components BA and BC:"
                )
              ]),
              n("p", [
                n("img", {
                  staticClass: "graph",
                  attrs: { alt: "Calculation Center of Mass", src: a("d414") }
                })
              ]),
              n("h3", { attrs: { id: "circle" } }, [t._v("Circle")]),
              n("h4", { attrs: { id: "center" } }, [t._v("Center")]),
              n("p", [
                t._v(
                  "Center of the circle is the same as the center of mass of the parallelogram."
                )
              ]),
              n("h4", { attrs: { id: "radius" } }, [t._v("Radius")]),
              n("p", [t._v("The radius could be found using its area:")]),
              n("p", [
                n("img", {
                  staticClass: "math",
                  attrs: { alt: "Calculation radius", src: a("2851") }
                })
              ])
            ])
          ]);
        }
      ],
      kt = (a("1238"), {}),
      jt = Object(l["a"])(kt, Ct, wt, !1, null, "5bcd68ff", null);
    jt.options.__file = "Geometry.vue";
    var At = jt.exports;
    n["a"].use(d["a"]);
    var Pt = new d["a"]({
      linkActiveClass: "active",
      routes: [
        { path: "/canvas", name: "canvas", component: et },
        {
          path: "/about",
          name: "about",
          component: ot,
          children: [
            { path: "", redirect: { name: "about/app" } },
            { path: "app", name: "about/app", component: pt },
            { path: "tech", name: "about/tech", component: dt },
            { path: "math", name: "about/geometry", component: At },
            { path: "author", name: "about/author", component: xt },
            { path: "*", redirect: { name: "about/app" } }
          ]
        },
        { path: "*", redirect: { name: "canvas" } }
      ]
    });
    (n["a"].config.productionTip = !1),
      new n["a"]({
        router: Pt,
        render: function(t) {
          return t(f);
        }
      }).$mount("#app");
  },
  "5c0b": function(t, e, a) {
    "use strict";
    var n = a("5e27"),
      s = a.n(n);
    s.a;
  },
  "5e27": function(t, e, a) {},
  7899: function(t, e, a) {
    t.exports = a.p + "img/calc_areaabcd1.9dc4cfac.png";
  },
  8300: function(t, e, a) {},
  "8a5e": function(t, e, a) {
    "use strict";
    var n = a("e7f2"),
      s = a.n(n);
    s.a;
  },
  "8e04": function(t, e, a) {},
  "95f4": function(t, e, a) {},
  a8dc: function(t, e, a) {
    "use strict";
    var n = a("8300"),
      s = a.n(n);
    s.a;
  },
  b4c0: function(t, e, a) {},
  c97a: function(t, e, a) {
    t.exports = a.p + "img/calc_areaabc.b0e46b26.png";
  },
  d414: function(t, e, a) {
    t.exports = a.p + "img/calc_centermass.8c935615.png";
  },
  df54: function(t, e, a) {
    t.exports = a.p + "img/calc_pointD.ba5db319.png";
  },
  e7f2: function(t, e, a) {},
  eee6: function(t, e, a) {
    "use strict";
    var n = a("95f4"),
      s = a.n(n);
    s.a;
  },
  f582: function(t, e, a) {
    "use strict";
    var n = a("3ec8"),
      s = a.n(n);
    s.a;
  }
});
//# sourceMappingURL=app.650184f4.js.map
