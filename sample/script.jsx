(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [617],
  {
    6010: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 2734));
    },
    2734: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var r,
        s,
        a = n(8038),
        i = n(719),
        o = n(1954);
      let l = [
        "#ECA843",
        "#EEA05D",
        "#EA723D",
        "#EAA35F",
        "#E98158",
        "#E97F58",
        "#E76D53",
        "#E66D5F",
        "#E56B79",
        "#E16490",
        "#E481AE",
        "#E68199",
        "#DC5E9A",
        "#E16CB5",
        "#D25FAC",
        "#D263AE",
        "#D66CB4",
        "#D071B6",
        "#BA82BE",
        "#AF71B5",
        "#A96BB2",
        "#905FAA",
        "#B38BC2",
        "#9D78B8",
        "#8D7AB8",
        "#7F68AE",
        "#9F99C8",
        "#717DC6",
        "#5E7DCC",
        "#5A90C0",
        "#628DCC",
        "#7994D0",
        "#81A1CA",
        "#ADD2DE",
        "#80BDD3",
        "#83C5D6",
        "#8BC8CB",
        "#91CBC6",
        "#83C3BB",
        "#7DBFB2",
        "#AAD6C2",
        "#84C194",
        "#B3DBB4",
        "#92C896",
        "#94C994",
        "#9FCE8E",
        "#A6D293",
        "#ABD373",
        "#BFDE73",
        "#CCE57D",
      ];
      ((r = s || (s = {}))[(r.PING = 0)] = "PING"),
        (r[(r.PONG = 1e4)] = "PONG"),
        (r[(r.CONNECT = 100)] = "CONNECT"),
        (r[(r.CONNECTED = 10100)] = "CONNECTED"),
        (r[(r.REQUEST_RECENT_CHAT = 5101)] = "REQUEST_RECENT_CHAT"),
        (r[(r.RECENT_CHAT = 15101)] = "RECENT_CHAT"),
        (r[(r.CHAT = 93101)] = "CHAT");
      let c = /{:([a-zA-Z0-9_]+):}/g;
      var u = (0, i.memo)(function (e) {
        let { nickname: t, badges: n, color: r, emojis: s, message: o } = e,
          u = o.match(c);
        return (0, a.jsxs)("div", {
          "data-from": t,
          children: [
            (0, a.jsxs)("span", {
              className: "meta",
              style: {
                color: "number" == typeof r ? l[r] : r,
              },
              children: [
                n.map((e, t) =>
                  (0, a.jsx)(
                    "img",
                    {
                      className: "badge",
                      alt: "",
                      src: e,
                    },
                    t
                  )
                ),
                (0, a.jsx)("span", {
                  className: "name",
                  children: t,
                }),
                (0, a.jsx)("span", {
                  className: "colon",
                  children: ":",
                }),
              ],
            }),
            (0, a.jsx)("span", {
              className: "message",
              children: u
                ? o.split(c).map((e, t) =>
                    (0, a.jsx)(
                      i.Fragment,
                      {
                        children:
                          t % 2 == 0
                            ? e
                            : (0, a.jsx)("span", {
                                className: "emote_wrap",
                                children: (0, a.jsx)("img", {
                                  className: "emoticon",
                                  alt: "{:".concat(e, ":}"),
                                  src: s[e],
                                }),
                              }),
                      },
                      t
                    )
                  )
                : o,
            }),
          ],
        });
      });
      function d(e) {
        let { chatChannelId: t, accessToken: n } = e,
          r = (0, o.useSearchParams)().has("small"),
          c = (function (e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 50,
              r = (0, i.useRef)(!1),
              a = (0, i.useRef)(0),
              o = (0, i.useRef)([]),
              [c, u] = (0, i.useState)([]),
              [d, m] = (0, i.useState)(0),
              E = (0, i.useCallback)((e) => {
                var t, n, r, s, a, i, o, c, u;
                let d = JSON.parse(e.profile),
                  m = JSON.parse(e.extras),
                  E = d.nickname,
                  f = [
                    null === (t = d.badge) || void 0 === t
                      ? void 0
                      : t.imageUrl,
                    null === (s = d.streamingProperty) || void 0 === s
                      ? void 0
                      : null === (r = s.realTimeDonationRanking) || void 0 === r
                      ? void 0
                      : null === (n = r.badge) || void 0 === n
                      ? void 0
                      : n.imageUrl,
                  ]
                    .concat(
                      null !==
                        (c =
                          null === (i = d.activityBadges) || void 0 === i
                            ? void 0
                            : null === (a = i.filter((e) => e.activated)) ||
                              void 0 === a
                            ? void 0
                            : a.map((e) => e.imageUrl)) && void 0 !== c
                        ? c
                        : []
                    )
                    .filter((e) => null != e),
                  C = e.cid || e.channelId,
                  g =
                    null !==
                      (u =
                        null === (o = d.title) || void 0 === o
                          ? void 0
                          : o.color) && void 0 !== u
                      ? u
                      : (d.userIdHash + C)
                          .split("")
                          .map((e) => e.charCodeAt(0))
                          .reduce((e, t) => e + t, 0) % l.length,
                  p = (null == m ? void 0 : m.emojis) || {},
                  v = e.msg || e.content || "";
                return {
                  uid: Math.random().toString(36).substring(2, 12),
                  time: e.msgTime || e.messageTime,
                  nickname: E,
                  badges: f,
                  color: g,
                  emojis: p,
                  message: v,
                };
              }, []),
              f = (0, i.useCallback)(() => {
                let a = new WebSocket("wss://kr-ss1.chat.naver.com/chat"),
                  i = new Worker(
                    URL.createObjectURL(
                      new Blob(
                        [
                          '\n                let timeout = null\n\n                onmessage = (e) => {\n                    if (e.data === "startPingTimer") {\n                        if (timeout != null) {\n                            clearTimeout(timeout)\n                        }\n                        timeout = setTimeout(function reservePing() {\n                            postMessage("ping")\n                            timeout = setTimeout(reservePing, 20000)\n                        }, 20000)\n                    }\n                    if (e.data === "stop") {\n                        if (timeout != null) {\n                            clearTimeout(timeout)\n                        }\n                    }\n                }\n            ',
                        ],
                        {
                          type: "application/javascript",
                        }
                      )
                    )
                  );
                i.onmessage = (e) => {
                  "ping" === e.data &&
                    a.send(
                      JSON.stringify({
                        ver: "2",
                        cmd: s.PING,
                      })
                    );
                };
                let l = {
                  cid: e,
                  svcid: "game",
                  ver: "2",
                };
                return (
                  (a.onopen = () => {
                    a.send(
                      JSON.stringify({
                        bdy: {
                          accTkn: t,
                          auth: "READ",
                          devType: 2001,
                          uid: null,
                        },
                        cmd: s.CONNECT,
                        tid: 1,
                        ...l,
                      })
                    );
                  }),
                  (a.onclose = () => {
                    r.current || setTimeout(() => m(new Date().getTime()), 1e3);
                  }),
                  (a.onmessage = (e) => {
                    let t = JSON.parse(e.data);
                    switch (t.cmd) {
                      case s.PING:
                        a.send(
                          JSON.stringify({
                            ver: "2",
                            cmd: s.PONG,
                          })
                        );
                        break;
                      case s.CONNECTED:
                        let r = t.bdy.sid;
                        a.send(
                          JSON.stringify({
                            bdy: {
                              recentMessageCount: n,
                            },
                            cmd: s.REQUEST_RECENT_CHAT,
                            sid: r,
                            tid: 2,
                            ...l,
                          })
                        );
                        break;
                      case s.RECENT_CHAT:
                      case s.CHAT:
                        let c = t.cmd == s.RECENT_CHAT,
                          d = (c ? t.bdy.messageList : t.bdy)
                            .filter(
                              (e) => 1 == (e.msgTypeCode || e.messageTypeCode)
                            )
                            .filter(
                              (e) =>
                                "HIDDEN" !=
                                (e.msgStatusType || e.messageStatusType)
                            )
                            .map(E);
                        c
                          ? ((o.current = []), u(d))
                          : (o.current = [...o.current, ...d].slice(-1 * n));
                    }
                    t.cmd !== s.PONG && i.postMessage("startPingTimer");
                  }),
                  i.postMessage("startPingTimer"),
                  () => {
                    i.postMessage("stop"), i.terminate(), a.close();
                  }
                );
              }, [t, e, E, n]);
            return (
              (0, i.useEffect)(() => f(), [f, d]),
              (0, i.useEffect)(() => {
                window.addEventListener("beforeunload", () => (r.current = !0));
              }, []),
              (0, i.useEffect)(() => {
                let e = setInterval(() => {
                  document.hidden ||
                    (o.current.length > 0 &&
                      (new Date().getTime() - a.current > 1e3
                        ? u((e) => {
                            let t = [...e, ...o.current].slice(-1 * n);
                            return (o.current = []), t;
                          })
                        : u((e) => {
                            let t = [...e, o.current.shift()];
                            return t.length > n && t.shift(), t;
                          })),
                    (a.current = new Date().getTime()));
                }, 75);
                return () => {
                  clearInterval(e), (a.current = 0);
                };
              }, [n]),
              c
            );
          })(t, n),
          d = (0, i.useCallback)(() => {
            window.location.reload();
          }, []);
        return (
          (0, i.useEffect)(
            () => (
              window.addEventListener("obsStreamingStarted", d),
              () => {
                window.removeEventListener("obsStreamingStarted", d);
              }
            ),
            [d]
          ),
          (0, i.useEffect)(() => {
            window.obsstudio &&
              !localStorage.getItem("notice-dismissed") &&
              (alert(
                "\n                    "
                  .concat(
                    "=".repeat(50),
                    "\n\n                    안녕하세요, 스트리머님!\n                    제가 제작한 치지직 채팅창을 사용해 주셔서 감사합니다.\n\n                    이제 웹사이트에서 커스터마이징이 가능한\n                    새로운 채팅창을 사용하실 수 있습니다!\n\n                    - 치지직 / 트위치 통합 채팅\n                    - CSS, 폰트 설정\n                    - 배지, 플랫폼 표시 등\n\n                    아래 링크를 주소창에 복붙해서 접속해 주세요.\n\n                    https://overlayz.kr\n\n                    "
                  )
                  .concat(
                    "=".repeat(50),
                    "\n\n                    (기존 오버레이는 동일하게 사용하실 수 있으며, 이 알림은 최초 1회만 표시됩니다)\n                "
                  )
              ),
              localStorage.setItem("notice-dismissed", "true"));
          }, []),
          (0, a.jsx)("div", {
            id: "log",
            className: (function () {
              for (var e, t, n = 0, r = ""; n < arguments.length; )
                (e = arguments[n++]) &&
                  (t = (function e(t) {
                    var n,
                      r,
                      s = "";
                    if ("string" == typeof t || "number" == typeof t) s += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (n = 0; n < t.length; n++)
                          t[n] && (r = e(t[n])) && (s && (s += " "), (s += r));
                      else for (n in t) t[n] && (s && (s += " "), (s += n));
                    }
                    return s;
                  })(e)) &&
                  (r && (r += " "), (r += t));
              return r;
            })(r && "small"),
            children: c.map((e) =>
              (0, a.jsx)(
                u,
                {
                  ...e,
                },
                e.uid
              )
            ),
          })
        );
      }
    },
    3952: function (e, t, n) {
      "use strict";
      var r = n(719),
        s = Symbol.for("react.element"),
        a = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        i =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        o = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0,
        };
      function l(e, t, n) {
        var r,
          l = {},
          c = null,
          u = null;
        for (r in (void 0 !== n && (c = "" + n),
        void 0 !== t.key && (c = "" + t.key),
        void 0 !== t.ref && (u = t.ref),
        t))
          a.call(t, r) && !o.hasOwnProperty(r) && (l[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: u,
          props: l,
          _owner: i.current,
        };
      }
      (t.jsx = l), (t.jsxs = l);
    },
    8038: function (e, t, n) {
      "use strict";
      e.exports = n(3952);
    },
    1954: function (e, t, n) {
      e.exports = n(1906);
    },
  },
  function (e) {
    e.O(0, [120, 543, 744], function () {
      return e((e.s = 6010));
    }),
      (_N_E = e.O());
  },
]);
