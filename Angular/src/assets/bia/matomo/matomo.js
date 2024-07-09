/*!!
 * Matomo - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link https://piwik.org
 * @source https://github.com/matomo-org/matomo/blob/master/js/piwik.js
 * @license https://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
if (typeof _paq !== 'object') {
  _paq = [];
}
if (typeof window.Matomo !== 'object') {
  window.Matomo = window.Piwik = (function () {
    var q,
      b = {},
      y = {},
      G = document,
      g = navigator,
      X = screen,
      S = window,
      h =
        S.performance ||
        S.mozPerformance ||
        S.msPerformance ||
        S.webkitPerformance,
      s = S.encodeURIComponent,
      R = S.decodeURIComponent,
      k = unescape,
      I = [],
      E,
      t,
      ah = [],
      x = 0,
      ab = 0,
      T = 0,
      l = false;
    function o(ao) {
      try {
        return R(ao);
      } catch (ap) {
        return unescape(ao);
      }
    }
    function J(ap) {
      var ao = typeof ap;
      return ao !== 'undefined';
    }
    function A(ao) {
      return typeof ao === 'function';
    }
    function V(ao) {
      return typeof ao === 'object';
    }
    function w(ao) {
      return typeof ao === 'string' || ao instanceof String;
    }
    function ag(ao) {
      return typeof ao === 'number' || ao instanceof Number;
    }
    function Y(ao) {
      return J(ao) && (ag(ao) || (w(ao) && ao.length));
    }
    function B(ap) {
      if (!ap) {
        return true;
      }
      var ao;
      var aq = true;
      for (ao in ap) {
        if (Object.prototype.hasOwnProperty.call(ap, ao)) {
          aq = false;
        }
      }
      return aq;
    }
    function ak(ao) {
      var ap = typeof console;
      if (ap !== 'undefined' && console && console.error) {
        console.error(ao);
      }
    }
    function af() {
      var au, at, aw, ap, ao;
      for (au = 0; au < arguments.length; au += 1) {
        ao = null;
        if (arguments[au] && arguments[au].slice) {
          ao = arguments[au].slice();
        }
        ap = arguments[au];
        aw = ap.shift();
        var av, aq;
        var ar = w(aw) && aw.indexOf('::') > 0;
        if (ar) {
          av = aw.split('::');
          aq = av[0];
          aw = av[1];
          if ('object' === typeof t[aq] && 'function' === typeof t[aq][aw]) {
            t[aq][aw].apply(t[aq], ap);
          } else {
            if (ao) {
              ah.push(ao);
            }
          }
        } else {
          for (at = 0; at < I.length; at++) {
            if (w(aw)) {
              aq = I[at];
              var ax = aw.indexOf('.') > 0;
              if (ax) {
                av = aw.split('.');
                if (aq && 'object' === typeof aq[av[0]]) {
                  aq = aq[av[0]];
                  aw = av[1];
                } else {
                  if (ao) {
                    ah.push(ao);
                    break;
                  }
                }
              }
              if (aq[aw]) {
                aq[aw].apply(aq, ap);
              } else {
                var ay =
                  "The method '" +
                  aw +
                  '\' was not found in "_paq" variable.  Please have a look at the Matomo tracker documentation: https://developer.matomo.org/api-reference/tracking-javascript';
                ak(ay);
                if (!ax) {
                  throw new TypeError(ay);
                }
              }
              if (aw === 'addTracker') {
                break;
              }
              if (aw === 'setTrackerUrl' || aw === 'setSiteId') {
                break;
              }
            } else {
              aw.apply(I[at], ap);
            }
          }
        }
      }
    }
    function an(ar, aq, ap, ao) {
      if (ar.addEventListener) {
        ar.addEventListener(aq, ap, ao);
        return true;
      }
      if (ar.attachEvent) {
        return ar.attachEvent('on' + aq, ap);
      }
      ar['on' + aq] = ap;
    }
    function m(ao) {
      if (G.readyState === 'complete') {
        ao();
      } else {
        if (S.addEventListener) {
          S.addEventListener('load', ao, false);
        } else {
          if (S.attachEvent) {
            S.attachEvent('onload', ao);
          }
        }
      }
    }
    function p(ar) {
      var ao = false;
      if (G.attachEvent) {
        ao = G.readyState === 'complete';
      } else {
        ao = G.readyState !== 'loading';
      }
      if (ao) {
        ar();
        return;
      }
      var aq;
      if (G.addEventListener) {
        an(G, 'DOMContentLoaded', function ap() {
          G.removeEventListener('DOMContentLoaded', ap, false);
          if (!ao) {
            ao = true;
            ar();
          }
        });
      } else {
        if (G.attachEvent) {
          G.attachEvent('onreadystatechange', function ap() {
            if (G.readyState === 'complete') {
              G.detachEvent('onreadystatechange', ap);
              if (!ao) {
                ao = true;
                ar();
              }
            }
          });
          if (G.documentElement.doScroll && S === S.top) {
            (function ap() {
              if (!ao) {
                try {
                  G.documentElement.doScroll('left');
                } catch (at) {
                  setTimeout(ap, 0);
                  return;
                }
                ao = true;
                ar();
              }
            })();
          }
        }
      }
      an(
        S,
        'load',
        function () {
          if (!ao) {
            ao = true;
            ar();
          }
        },
        false
      );
    }
    function ac(ap, av, aw) {
      if (!ap) {
        return '';
      }
      var ao = '',
        ar,
        aq,
        at,
        au;
      for (ar in b) {
        if (Object.prototype.hasOwnProperty.call(b, ar)) {
          au = b[ar] && 'function' === typeof b[ar][ap];
          if (au) {
            aq = b[ar][ap];
            at = aq(av || {}, aw);
            if (at) {
              ao += at;
            }
          }
        }
      }
      return ao;
    }
    function ai() {
      var ao;
      l = true;
      ac('unload');
      ao = new Date();
      var ap = ao.getTimeAlias();
      if (q - ap > 3000) {
        q = ap + 3000;
      }
      if (q) {
        do {
          ao = new Date();
        } while (ao.getTimeAlias() < q);
      }
    }
    function n(aq, ap) {
      var ao = G.createElement('script');
      ao.type = 'text/javascript';
      ao.src = aq;
      if (ao.readyState) {
        ao.onreadystatechange = function () {
          var ar = this.readyState;
          if (ar === 'loaded' || ar === 'complete') {
            ao.onreadystatechange = null;
            ap();
          }
        };
      } else {
        ao.onload = ap;
      }
      G.getElementsByTagName('head')[0].appendChild(ao);
    }
    function K() {
      var ao = '';
      try {
        ao = S.top.document.referrer;
      } catch (aq) {
        if (S.parent) {
          try {
            ao = S.parent.document.referrer;
          } catch (ap) {
            ao = '';
          }
        }
      }
      if (ao === '') {
        ao = G.referrer;
      }
      return ao;
    }
    function r(ao) {
      var aq = new RegExp('^([a-z]+):'),
        ap = aq.exec(ao);
      return ap ? ap[1] : null;
    }
    function d(ao) {
      var aq = new RegExp('^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)'),
        ap = aq.exec(ao);
      return ap ? ap[1] : ao;
    }
    function aj(ap, ao) {
      ap = String(ap);
      return ap.lastIndexOf(ao, 0) === 0;
    }
    function Q(ap, ao) {
      ap = String(ap);
      return ap.indexOf(ao, ap.length - ao.length) !== -1;
    }
    function z(ap, ao) {
      ap = String(ap);
      return ap.indexOf(ao) !== -1;
    }
    function f(ap, ao) {
      ap = String(ap);
      return ap.substr(0, ap.length - ao);
    }
    function F(ar, aq, au) {
      ar = String(ar);
      if (!au) {
        au = '';
      }
      var ao = ar.indexOf('#');
      var av = ar.length;
      if (ao === -1) {
        ao = av;
      }
      var at = ar.substr(0, ao);
      var ap = ar.substr(ao, av - ao);
      if (at.indexOf('?') === -1) {
        at += '?';
      } else {
        if (!Q(at, '?')) {
          at += '&';
        }
      }
      return at + s(aq) + '=' + s(au) + ap;
    }
    function j(ap, aq) {
      ap = String(ap);
      if (
        ap.indexOf('?' + aq + '=') === -1 &&
        ap.indexOf('&' + aq + '=') === -1
      ) {
        return ap;
      }
      var ar = ap.indexOf('?');
      if (ar === -1) {
        return ap;
      }
      var ao = ap.substr(ar + 1);
      var aw = ap.substr(0, ar);
      if (ao) {
        var ax = '';
        var az = ao.indexOf('#');
        if (az !== -1) {
          ax = ao.substr(az + 1);
          ao = ao.substr(0, az);
        }
        var at;
        var av = ao.split('&');
        var au = av.length - 1;
        for (au; au >= 0; au--) {
          at = av[au].split('=')[0];
          if (at === aq) {
            av.splice(au, 1);
          }
        }
        var ay = av.join('&');
        if (ay) {
          aw = aw + '?' + ay;
        }
        if (ax) {
          aw += '#' + ax;
        }
      }
      return aw;
    }
    function e(aq, ap) {
      var ao = '[\\?&#]' + ap + '=([^&#]*)';
      var at = new RegExp(ao);
      var ar = at.exec(aq);
      return ar ? o(ar[1]) : '';
    }
    function a(ao) {
      if (ao && String(ao) === ao) {
        return ao.replace(/^\s+|\s+$/g, '');
      }
      return ao;
    }
    function D(ao) {
      return unescape(s(ao));
    }
    function am(aE) {
      var aq = function (aK, aJ) {
          return (aK << aJ) | (aK >>> (32 - aJ));
        },
        aF = function (aM) {
          var aK = '',
            aL,
            aJ;
          for (aL = 7; aL >= 0; aL--) {
            aJ = (aM >>> (aL * 4)) & 15;
            aK += aJ.toString(16);
          }
          return aK;
        },
        au,
        aH,
        aG,
        ap = [],
        ay = 1732584193,
        aw = 4023233417,
        av = 2562383102,
        at = 271733878,
        ar = 3285377520,
        aD,
        aC,
        aB,
        aA,
        az,
        aI,
        ao,
        ax = [];
      aE = D(aE);
      ao = aE.length;
      for (aH = 0; aH < ao - 3; aH += 4) {
        aG =
          (aE.charCodeAt(aH) << 24) |
          (aE.charCodeAt(aH + 1) << 16) |
          (aE.charCodeAt(aH + 2) << 8) |
          aE.charCodeAt(aH + 3);
        ax.push(aG);
      }
      switch (ao & 3) {
        case 0:
          aH = 2147483648;
          break;
        case 1:
          aH = (aE.charCodeAt(ao - 1) << 24) | 8388608;
          break;
        case 2:
          aH =
            (aE.charCodeAt(ao - 2) << 24) |
            (aE.charCodeAt(ao - 1) << 16) |
            32768;
          break;
        case 3:
          aH =
            (aE.charCodeAt(ao - 3) << 24) |
            (aE.charCodeAt(ao - 2) << 16) |
            (aE.charCodeAt(ao - 1) << 8) |
            128;
          break;
      }
      ax.push(aH);
      while ((ax.length & 15) !== 14) {
        ax.push(0);
      }
      ax.push(ao >>> 29);
      ax.push((ao << 3) & 4294967295);
      for (au = 0; au < ax.length; au += 16) {
        for (aH = 0; aH < 16; aH++) {
          ap[aH] = ax[au + aH];
        }
        for (aH = 16; aH <= 79; aH++) {
          ap[aH] = aq(ap[aH - 3] ^ ap[aH - 8] ^ ap[aH - 14] ^ ap[aH - 16], 1);
        }
        aD = ay;
        aC = aw;
        aB = av;
        aA = at;
        az = ar;
        for (aH = 0; aH <= 19; aH++) {
          aI =
            (aq(aD, 5) + ((aC & aB) | (~aC & aA)) + az + ap[aH] + 1518500249) &
            4294967295;
          az = aA;
          aA = aB;
          aB = aq(aC, 30);
          aC = aD;
          aD = aI;
        }
        for (aH = 20; aH <= 39; aH++) {
          aI =
            (aq(aD, 5) + (aC ^ aB ^ aA) + az + ap[aH] + 1859775393) &
            4294967295;
          az = aA;
          aA = aB;
          aB = aq(aC, 30);
          aC = aD;
          aD = aI;
        }
        for (aH = 40; aH <= 59; aH++) {
          aI =
            (aq(aD, 5) +
              ((aC & aB) | (aC & aA) | (aB & aA)) +
              az +
              ap[aH] +
              2400959708) &
            4294967295;
          az = aA;
          aA = aB;
          aB = aq(aC, 30);
          aC = aD;
          aD = aI;
        }
        for (aH = 60; aH <= 79; aH++) {
          aI =
            (aq(aD, 5) + (aC ^ aB ^ aA) + az + ap[aH] + 3395469782) &
            4294967295;
          az = aA;
          aA = aB;
          aB = aq(aC, 30);
          aC = aD;
          aD = aI;
        }
        ay = (ay + aD) & 4294967295;
        aw = (aw + aC) & 4294967295;
        av = (av + aB) & 4294967295;
        at = (at + aA) & 4294967295;
        ar = (ar + az) & 4294967295;
      }
      aI = aF(ay) + aF(aw) + aF(av) + aF(at) + aF(ar);
      return aI.toLowerCase();
    }
    function aa(aq, ao, ap) {
      if (!aq) {
        aq = '';
      }
      if (!ao) {
        ao = '';
      }
      if (aq === 'translate.googleusercontent.com') {
        if (ap === '') {
          ap = ao;
        }
        ao = e(ao, 'u');
        aq = d(ao);
      } else {
        if (
          aq === 'cc.bingj.com' ||
          aq === 'webcache.googleusercontent.com' ||
          aq.slice(0, 5) === '74.6.'
        ) {
          ao = G.links[0].href;
          aq = d(ao);
        }
      }
      return [aq, ao, ap];
    }
    function L(ap) {
      var ao = ap.length;
      if (ap.charAt(--ao) === '.') {
        ap = ap.slice(0, ao);
      }
      if (ap.slice(0, 2) === '*.') {
        ap = ap.slice(1);
      }
      if (ap.indexOf('/') !== -1) {
        ap = ap.substr(0, ap.indexOf('/'));
      }
      return ap;
    }
    function al(ap) {
      ap = ap && ap.text ? ap.text : ap;
      if (!w(ap)) {
        var ao = G.getElementsByTagName('title');
        if (ao && J(ao[0])) {
          ap = ao[0].text;
        }
      }
      return ap;
    }
    function O(ao) {
      if (!ao) {
        return [];
      }
      if (!J(ao.children) && J(ao.childNodes)) {
        return ao.children;
      }
      if (J(ao.children)) {
        return ao.children;
      }
      return [];
    }
    function U(ap, ao) {
      if (!ap || !ao) {
        return false;
      }
      if (ap.contains) {
        return ap.contains(ao);
      }
      if (ap === ao) {
        return true;
      }
      if (ap.compareDocumentPosition) {
        return !!(ap.compareDocumentPosition(ao) & 16);
      }
      return false;
    }
    function M(aq, ar) {
      if (aq && aq.indexOf) {
        return aq.indexOf(ar);
      }
      if (!J(aq) || aq === null) {
        return -1;
      }
      if (!aq.length) {
        return -1;
      }
      var ao = aq.length;
      if (ao === 0) {
        return -1;
      }
      var ap = 0;
      while (ap < ao) {
        if (aq[ap] === ar) {
          return ap;
        }
        ap++;
      }
      return -1;
    }
    function i(aq) {
      if (!aq) {
        return false;
      }
      function ao(at, au) {
        if (S.getComputedStyle) {
          return G.defaultView.getComputedStyle(at, null)[au];
        }
        if (at.currentStyle) {
          return at.currentStyle[au];
        }
      }
      function ar(at) {
        at = at.parentNode;
        while (at) {
          if (at === G) {
            return true;
          }
          at = at.parentNode;
        }
        return false;
      }
      function ap(av, aB, at, ay, aw, az, ax) {
        var au = av.parentNode,
          aA = 1;
        if (!ar(av)) {
          return false;
        }
        if (9 === au.nodeType) {
          return true;
        }
        if (
          '0' === ao(av, 'opacity') ||
          'none' === ao(av, 'display') ||
          'hidden' === ao(av, 'visibility')
        ) {
          return false;
        }
        if (!J(aB) || !J(at) || !J(ay) || !J(aw) || !J(az) || !J(ax)) {
          aB = av.offsetTop;
          aw = av.offsetLeft;
          ay = aB + av.offsetHeight;
          at = aw + av.offsetWidth;
          az = av.offsetWidth;
          ax = av.offsetHeight;
        }
        if (
          aq === av &&
          (0 === ax || 0 === az) &&
          'hidden' === ao(av, 'overflow')
        ) {
          return false;
        }
        if (au) {
          if (
            'hidden' === ao(au, 'overflow') ||
            'scroll' === ao(au, 'overflow')
          ) {
            if (
              aw + aA > au.offsetWidth + au.scrollLeft ||
              aw + az - aA < au.scrollLeft ||
              aB + aA > au.offsetHeight + au.scrollTop ||
              aB + ax - aA < au.scrollTop
            ) {
              return false;
            }
          }
          if (av.offsetParent === au) {
            aw += au.offsetLeft;
            aB += au.offsetTop;
          }
          return ap(au, aB, at, ay, aw, az, ax);
        }
        return true;
      }
      return ap(aq);
    }
    var ae = {
      htmlCollectionToArray: function (aq) {
        var ao = [],
          ap;
        if (!aq || !aq.length) {
          return ao;
        }
        for (ap = 0; ap < aq.length; ap++) {
          ao.push(aq[ap]);
        }
        return ao;
      },
      find: function (ao) {
        if (!document.querySelectorAll || !ao) {
          return [];
        }
        var ap = document.querySelectorAll(ao);
        return this.htmlCollectionToArray(ap);
      },
      findMultiple: function (aq) {
        if (!aq || !aq.length) {
          return [];
        }
        var ap, ar;
        var ao = [];
        for (ap = 0; ap < aq.length; ap++) {
          ar = this.find(aq[ap]);
          ao = ao.concat(ar);
        }
        ao = this.makeNodesUnique(ao);
        return ao;
      },
      findNodesByTagName: function (ap, ao) {
        if (!ap || !ao || !ap.getElementsByTagName) {
          return [];
        }
        var aq = ap.getElementsByTagName(ao);
        return this.htmlCollectionToArray(aq);
      },
      makeNodesUnique: function (ao) {
        var au = [].concat(ao);
        ao.sort(function (aw, av) {
          if (aw === av) {
            return 0;
          }
          var ay = M(au, aw);
          var ax = M(au, av);
          if (ay === ax) {
            return 0;
          }
          return ay > ax ? -1 : 1;
        });
        if (ao.length <= 1) {
          return ao;
        }
        var ap = 0;
        var ar = 0;
        var at = [];
        var aq;
        aq = ao[ap++];
        while (aq) {
          if (aq === ao[ap]) {
            ar = at.push(ap);
          }
          aq = ao[ap++] || null;
        }
        while (ar--) {
          ao.splice(at[ar], 1);
        }
        return ao;
      },
      getAttributeValueFromNode: function (at, aq) {
        if (!this.hasNodeAttribute(at, aq)) {
          return;
        }
        if (at && at.getAttribute) {
          return at.getAttribute(aq);
        }
        if (!at || !at.attributes) {
          return;
        }
        var ar = typeof at.attributes[aq];
        if ('undefined' === ar) {
          return;
        }
        if (at.attributes[aq].value) {
          return at.attributes[aq].value;
        }
        if (at.attributes[aq].nodeValue) {
          return at.attributes[aq].nodeValue;
        }
        var ap;
        var ao = at.attributes;
        if (!ao) {
          return;
        }
        for (ap = 0; ap < ao.length; ap++) {
          if (ao[ap].nodeName === aq) {
            return ao[ap].nodeValue;
          }
        }
        return null;
      },
      hasNodeAttributeWithValue: function (ap, ao) {
        var aq = this.getAttributeValueFromNode(ap, ao);
        return !!aq;
      },
      hasNodeAttribute: function (aq, ao) {
        if (aq && aq.hasAttribute) {
          return aq.hasAttribute(ao);
        }
        if (aq && aq.attributes) {
          var ap = typeof aq.attributes[ao];
          return 'undefined' !== ap;
        }
        return false;
      },
      hasNodeCssClass: function (aq, ao) {
        if (aq && ao && aq.className) {
          var ap =
            typeof aq.className === 'string' ? aq.className.split(' ') : [];
          if (-1 !== M(ap, ao)) {
            return true;
          }
        }
        return false;
      },
      findNodesHavingAttribute: function (at, aq, ao) {
        if (!ao) {
          ao = [];
        }
        if (!at || !aq) {
          return ao;
        }
        var ar = O(at);
        if (!ar || !ar.length) {
          return ao;
        }
        var ap, au;
        for (ap = 0; ap < ar.length; ap++) {
          au = ar[ap];
          if (this.hasNodeAttribute(au, aq)) {
            ao.push(au);
          }
          ao = this.findNodesHavingAttribute(au, aq, ao);
        }
        return ao;
      },
      findFirstNodeHavingAttribute: function (aq, ap) {
        if (!aq || !ap) {
          return;
        }
        if (this.hasNodeAttribute(aq, ap)) {
          return aq;
        }
        var ao = this.findNodesHavingAttribute(aq, ap);
        if (ao && ao.length) {
          return ao[0];
        }
      },
      findFirstNodeHavingAttributeWithValue: function (ar, aq) {
        if (!ar || !aq) {
          return;
        }
        if (this.hasNodeAttributeWithValue(ar, aq)) {
          return ar;
        }
        var ao = this.findNodesHavingAttribute(ar, aq);
        if (!ao || !ao.length) {
          return;
        }
        var ap;
        for (ap = 0; ap < ao.length; ap++) {
          if (this.getAttributeValueFromNode(ao[ap], aq)) {
            return ao[ap];
          }
        }
      },
      findNodesHavingCssClass: function (at, ar, ao) {
        if (!ao) {
          ao = [];
        }
        if (!at || !ar) {
          return ao;
        }
        if (at.getElementsByClassName) {
          var au = at.getElementsByClassName(ar);
          return this.htmlCollectionToArray(au);
        }
        var aq = O(at);
        if (!aq || !aq.length) {
          return [];
        }
        var ap, av;
        for (ap = 0; ap < aq.length; ap++) {
          av = aq[ap];
          if (this.hasNodeCssClass(av, ar)) {
            ao.push(av);
          }
          ao = this.findNodesHavingCssClass(av, ar, ao);
        }
        return ao;
      },
      findFirstNodeHavingClass: function (aq, ap) {
        if (!aq || !ap) {
          return;
        }
        if (this.hasNodeCssClass(aq, ap)) {
          return aq;
        }
        var ao = this.findNodesHavingCssClass(aq, ap);
        if (ao && ao.length) {
          return ao[0];
        }
      },
      isLinkElement: function (ap) {
        if (!ap) {
          return false;
        }
        var ao = String(ap.nodeName).toLowerCase();
        var ar = ['a', 'area'];
        var aq = M(ar, ao);
        return aq !== -1;
      },
      setAnyAttribute: function (ap, ao, aq) {
        if (!ap || !ao) {
          return;
        }
        if (ap.setAttribute) {
          ap.setAttribute(ao, aq);
        } else {
          ap[ao] = aq;
        }
      },
    };
    var v = {
      CONTENT_ATTR: 'data-track-content',
      CONTENT_CLASS: 'matomoTrackContent',
      LEGACY_CONTENT_CLASS: 'piwikTrackContent',
      CONTENT_NAME_ATTR: 'data-content-name',
      CONTENT_PIECE_ATTR: 'data-content-piece',
      CONTENT_PIECE_CLASS: 'matomoContentPiece',
      LEGACY_CONTENT_PIECE_CLASS: 'piwikContentPiece',
      CONTENT_TARGET_ATTR: 'data-content-target',
      CONTENT_TARGET_CLASS: 'matomoContentTarget',
      LEGACY_CONTENT_TARGET_CLASS: 'piwikContentTarget',
      CONTENT_IGNOREINTERACTION_ATTR: 'data-content-ignoreinteraction',
      CONTENT_IGNOREINTERACTION_CLASS: 'matomoContentIgnoreInteraction',
      LEGACY_CONTENT_IGNOREINTERACTION_CLASS: 'piwikContentIgnoreInteraction',
      location: undefined,
      findContentNodes: function () {
        var ap = '.' + this.CONTENT_CLASS;
        var aq = '.' + this.LEGACY_CONTENT_CLASS;
        var ao = '[' + this.CONTENT_ATTR + ']';
        var ar = ae.findMultiple([ap, aq, ao]);
        return ar;
      },
      findContentNodesWithinNode: function (ar) {
        if (!ar) {
          return [];
        }
        var ap = ae.findNodesHavingCssClass(ar, this.CONTENT_CLASS);
        ap = ae.findNodesHavingCssClass(ar, this.LEGACY_CONTENT_CLASS, ap);
        var ao = ae.findNodesHavingAttribute(ar, this.CONTENT_ATTR);
        if (ao && ao.length) {
          var aq;
          for (aq = 0; aq < ao.length; aq++) {
            ap.push(ao[aq]);
          }
        }
        if (ae.hasNodeAttribute(ar, this.CONTENT_ATTR)) {
          ap.push(ar);
        } else {
          if (ae.hasNodeCssClass(ar, this.CONTENT_CLASS)) {
            ap.push(ar);
          } else {
            if (ae.hasNodeCssClass(ar, this.LEGACY_CONTENT_CLASS)) {
              ap.push(ar);
            }
          }
        }
        ap = ae.makeNodesUnique(ap);
        return ap;
      },
      findParentContentNode: function (ap) {
        if (!ap) {
          return;
        }
        var aq = ap;
        var ao = 0;
        while (aq && aq !== G && aq.parentNode) {
          if (ae.hasNodeAttribute(aq, this.CONTENT_ATTR)) {
            return aq;
          }
          if (ae.hasNodeCssClass(aq, this.CONTENT_CLASS)) {
            return aq;
          }
          if (ae.hasNodeCssClass(aq, this.LEGACY_CONTENT_CLASS)) {
            return aq;
          }
          aq = aq.parentNode;
          if (ao > 1000) {
            break;
          }
          ao++;
        }
      },
      findPieceNode: function (ap) {
        var ao;
        ao = ae.findFirstNodeHavingAttribute(ap, this.CONTENT_PIECE_ATTR);
        if (!ao) {
          ao = ae.findFirstNodeHavingClass(ap, this.CONTENT_PIECE_CLASS);
        }
        if (!ao) {
          ao = ae.findFirstNodeHavingClass(ap, this.LEGACY_CONTENT_PIECE_CLASS);
        }
        if (ao) {
          return ao;
        }
        return ap;
      },
      findTargetNodeNoDefault: function (ao) {
        if (!ao) {
          return;
        }
        var ap = ae.findFirstNodeHavingAttributeWithValue(
          ao,
          this.CONTENT_TARGET_ATTR
        );
        if (ap) {
          return ap;
        }
        ap = ae.findFirstNodeHavingAttribute(ao, this.CONTENT_TARGET_ATTR);
        if (ap) {
          return ap;
        }
        ap = ae.findFirstNodeHavingClass(ao, this.CONTENT_TARGET_CLASS);
        if (ap) {
          return ap;
        }
        ap = ae.findFirstNodeHavingClass(ao, this.LEGACY_CONTENT_TARGET_CLASS);
        if (ap) {
          return ap;
        }
      },
      findTargetNode: function (ao) {
        var ap = this.findTargetNodeNoDefault(ao);
        if (ap) {
          return ap;
        }
        return ao;
      },
      findContentName: function (ap) {
        if (!ap) {
          return;
        }
        var at = ae.findFirstNodeHavingAttributeWithValue(
          ap,
          this.CONTENT_NAME_ATTR
        );
        if (at) {
          return ae.getAttributeValueFromNode(at, this.CONTENT_NAME_ATTR);
        }
        var ao = this.findContentPiece(ap);
        if (ao) {
          return this.removeDomainIfIsInLink(ao);
        }
        if (ae.hasNodeAttributeWithValue(ap, 'title')) {
          return ae.getAttributeValueFromNode(ap, 'title');
        }
        var aq = this.findPieceNode(ap);
        if (ae.hasNodeAttributeWithValue(aq, 'title')) {
          return ae.getAttributeValueFromNode(aq, 'title');
        }
        var ar = this.findTargetNode(ap);
        if (ae.hasNodeAttributeWithValue(ar, 'title')) {
          return ae.getAttributeValueFromNode(ar, 'title');
        }
      },
      findContentPiece: function (ap) {
        if (!ap) {
          return;
        }
        var ar = ae.findFirstNodeHavingAttributeWithValue(
          ap,
          this.CONTENT_PIECE_ATTR
        );
        if (ar) {
          return ae.getAttributeValueFromNode(ar, this.CONTENT_PIECE_ATTR);
        }
        var ao = this.findPieceNode(ap);
        var aq = this.findMediaUrlInNode(ao);
        if (aq) {
          return this.toAbsoluteUrl(aq);
        }
      },
      findContentTarget: function (aq) {
        if (!aq) {
          return;
        }
        var ar = this.findTargetNode(aq);
        if (ae.hasNodeAttributeWithValue(ar, this.CONTENT_TARGET_ATTR)) {
          return ae.getAttributeValueFromNode(ar, this.CONTENT_TARGET_ATTR);
        }
        var ap;
        if (ae.hasNodeAttributeWithValue(ar, 'href')) {
          ap = ae.getAttributeValueFromNode(ar, 'href');
          return this.toAbsoluteUrl(ap);
        }
        var ao = this.findPieceNode(aq);
        if (ae.hasNodeAttributeWithValue(ao, 'href')) {
          ap = ae.getAttributeValueFromNode(ao, 'href');
          return this.toAbsoluteUrl(ap);
        }
      },
      isSameDomain: function (ao) {
        if (!ao || !ao.indexOf) {
          return false;
        }
        if (0 === ao.indexOf(this.getLocation().origin)) {
          return true;
        }
        var ap = ao.indexOf(this.getLocation().host);
        if (8 >= ap && 0 <= ap) {
          return true;
        }
        return false;
      },
      removeDomainIfIsInLink: function (aq) {
        var ap = '^https?://[^/]+';
        var ao = '^.*//[^/]+';
        if (
          aq &&
          aq.search &&
          -1 !== aq.search(new RegExp(ap)) &&
          this.isSameDomain(aq)
        ) {
          aq = aq.replace(new RegExp(ao), '');
          if (!aq) {
            aq = '/';
          }
        }
        return aq;
      },
      findMediaUrlInNode: function (at) {
        if (!at) {
          return;
        }
        var aq = ['img', 'embed', 'video', 'audio'];
        var ao = at.nodeName.toLowerCase();
        if (
          -1 !== M(aq, ao) &&
          ae.findFirstNodeHavingAttributeWithValue(at, 'src')
        ) {
          var ar = ae.findFirstNodeHavingAttributeWithValue(at, 'src');
          return ae.getAttributeValueFromNode(ar, 'src');
        }
        if (ao === 'object' && ae.hasNodeAttributeWithValue(at, 'data')) {
          return ae.getAttributeValueFromNode(at, 'data');
        }
        if (ao === 'object') {
          var au = ae.findNodesByTagName(at, 'param');
          if (au && au.length) {
            var ap;
            for (ap = 0; ap < au.length; ap++) {
              if (
                'movie' === ae.getAttributeValueFromNode(au[ap], 'name') &&
                ae.hasNodeAttributeWithValue(au[ap], 'value')
              ) {
                return ae.getAttributeValueFromNode(au[ap], 'value');
              }
            }
          }
          var av = ae.findNodesByTagName(at, 'embed');
          if (av && av.length) {
            return this.findMediaUrlInNode(av[0]);
          }
        }
      },
      trim: function (ao) {
        return a(ao);
      },
      isOrWasNodeInViewport: function (au) {
        if (!au || !au.getBoundingClientRect || au.nodeType !== 1) {
          return true;
        }
        var at = au.getBoundingClientRect();
        var ar = G.documentElement || {};
        var aq = at.top < 0;
        if (aq && au.offsetTop) {
          aq = au.offsetTop + at.height > 0;
        }
        var ap = ar.clientWidth;
        if (S.innerWidth && ap > S.innerWidth) {
          ap = S.innerWidth;
        }
        var ao = ar.clientHeight;
        if (S.innerHeight && ao > S.innerHeight) {
          ao = S.innerHeight;
        }
        return (
          (at.bottom > 0 || aq) &&
          at.right > 0 &&
          at.left < ap &&
          (at.top < ao || aq)
        );
      },
      isNodeVisible: function (ap) {
        var ao = i(ap);
        var aq = this.isOrWasNodeInViewport(ap);
        return ao && aq;
      },
      buildInteractionRequestParams: function (ao, ap, aq, ar) {
        var at = '';
        if (ao) {
          at += 'c_i=' + s(ao);
        }
        if (ap) {
          if (at) {
            at += '&';
          }
          at += 'c_n=' + s(ap);
        }
        if (aq) {
          if (at) {
            at += '&';
          }
          at += 'c_p=' + s(aq);
        }
        if (ar) {
          if (at) {
            at += '&';
          }
          at += 'c_t=' + s(ar);
        }
        if (at) {
          at += '&ca=1';
        }
        return at;
      },
      buildImpressionRequestParams: function (ao, ap, aq) {
        var ar = 'c_n=' + s(ao) + '&c_p=' + s(ap);
        if (aq) {
          ar += '&c_t=' + s(aq);
        }
        if (ar) {
          ar += '&ca=1';
        }
        return ar;
      },
      buildContentBlock: function (aq) {
        if (!aq) {
          return;
        }
        var ao = this.findContentName(aq);
        var ap = this.findContentPiece(aq);
        var ar = this.findContentTarget(aq);
        ao = this.trim(ao);
        ap = this.trim(ap);
        ar = this.trim(ar);
        return {
          name: ao || 'Unknown',
          piece: ap || 'Unknown',
          target: ar || '',
        };
      },
      collectContent: function (ar) {
        if (!ar || !ar.length) {
          return [];
        }
        var aq = [];
        var ao, ap;
        for (ao = 0; ao < ar.length; ao++) {
          ap = this.buildContentBlock(ar[ao]);
          if (J(ap)) {
            aq.push(ap);
          }
        }
        return aq;
      },
      setLocation: function (ao) {
        this.location = ao;
      },
      getLocation: function () {
        var ao = this.location || S.location;
        if (!ao.origin) {
          ao.origin =
            ao.protocol + '//' + ao.hostname + (ao.port ? ':' + ao.port : '');
        }
        return ao;
      },
      toAbsoluteUrl: function (ap) {
        if ((!ap || String(ap) !== ap) && ap !== '') {
          return ap;
        }
        if ('' === ap) {
          return this.getLocation().href;
        }
        if (ap.search(/^\/\//) !== -1) {
          return this.getLocation().protocol + ap;
        }
        if (ap.search(/:\/\//) !== -1) {
          return ap;
        }
        if (0 === ap.indexOf('#')) {
          return this.getLocation().origin + this.getLocation().pathname + ap;
        }
        if (0 === ap.indexOf('?')) {
          return this.getLocation().origin + this.getLocation().pathname + ap;
        }
        if (0 === ap.search('^[a-zA-Z]{2,11}:')) {
          return ap;
        }
        if (ap.search(/^\//) !== -1) {
          return this.getLocation().origin + ap;
        }
        var ao = '(.*/)';
        var aq =
          this.getLocation().origin +
          this.getLocation().pathname.match(new RegExp(ao))[0];
        return aq + ap;
      },
      isUrlToCurrentDomain: function (ap) {
        var aq = this.toAbsoluteUrl(ap);
        if (!aq) {
          return false;
        }
        var ao = this.getLocation().origin;
        if (ao === aq) {
          return true;
        }
        if (0 === String(aq).indexOf(ao)) {
          if (':' === String(aq).substr(ao.length, 1)) {
            return false;
          }
          return true;
        }
        return false;
      },
      setHrefAttribute: function (ap, ao) {
        if (!ap || !ao) {
          return;
        }
        ae.setAnyAttribute(ap, 'href', ao);
      },
      shouldIgnoreInteraction: function (ao) {
        if (ae.hasNodeAttribute(ao, this.CONTENT_IGNOREINTERACTION_ATTR)) {
          return true;
        }
        if (ae.hasNodeCssClass(ao, this.CONTENT_IGNOREINTERACTION_CLASS)) {
          return true;
        }
        if (
          ae.hasNodeCssClass(ao, this.LEGACY_CONTENT_IGNOREINTERACTION_CLASS)
        ) {
          return true;
        }
        return false;
      },
    };
    function W(ap, at) {
      if (at) {
        return at;
      }
      ap = v.toAbsoluteUrl(ap);
      if (z(ap, '?')) {
        var ar = ap.indexOf('?');
        ap = ap.slice(0, ar);
      }
      if (Q(ap, 'matomo.php')) {
        ap = f(ap, 'matomo.php'.length);
      } else {
        if (Q(ap, 'piwik.php')) {
          ap = f(ap, 'piwik.php'.length);
        } else {
          if (Q(ap, '.php')) {
            var ao = ap.lastIndexOf('/');
            var aq = 1;
            ap = ap.slice(0, ao + aq);
          }
        }
      }
      if (Q(ap, '/js/')) {
        ap = f(ap, 'js/'.length);
      }
      return ap;
    }
    function N(av) {
      var ax = 'Matomo_Overlay';
      var ap = new RegExp(
        'index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=.*)?$'
      );
      var aq = ap.exec(G.referrer);
      if (aq) {
        var at = aq[1];
        if (at !== String(av)) {
          return false;
        }
        var au = aq[2],
          ao = aq[3],
          ar = aq[4];
        if (!ar) {
          ar = '';
        } else {
          if (ar.indexOf('&segment=') === 0) {
            ar = ar.substr('&segment='.length);
          }
        }
        S.name = ax + '###' + au + '###' + ao + '###' + ar;
      }
      var aw = S.name.split('###');
      return aw.length === 4 && aw[0] === ax;
    }
    function Z(ap, av, aq) {
      var au = S.name.split('###'),
        at = au[1],
        ao = au[2],
        ar = au[3],
        aw = W(ap, av);
      n(aw + 'plugins/Overlay/client/client.js?v=1', function () {
        Matomo_Overlay_Client.initialize(aw, aq, at, ao, ar);
      });
    }
    function u() {
      var aq;
      try {
        aq = S.frameElement;
      } catch (ap) {
        return true;
      }
      if (J(aq)) {
        return aq && String(aq.nodeName).toLowerCase() === 'iframe'
          ? true
          : false;
      }
      try {
        return S.self !== S.top;
      } catch (ao) {
        return true;
      }
    }
    function P(ce, ca) {
      var bK = this,
        be = 'mtm_consent',
        cD = 'mtm_cookie_consent',
        cM = 'mtm_consent_removed',
        b5 = aa(G.domain, S.location.href, K()),
        cU = L(b5[0]),
        bO = o(b5[1]),
        bp = o(b5[2]),
        cS = false,
        ci = 'GET',
        c9 = ci,
        aI = 'application/x-www-form-urlencoded; charset=UTF-8',
        cw = aI,
        aE = ce || '',
        bJ = '',
        cZ = '',
        b7 = ca || '',
        bA = '',
        bP = '',
        a5,
        bk = '',
        c6 = [
          '7z',
          'aac',
          'apk',
          'arc',
          'arj',
          'asf',
          'asx',
          'avi',
          'azw3',
          'bin',
          'csv',
          'deb',
          'dmg',
          'doc',
          'docx',
          'epub',
          'exe',
          'flv',
          'gif',
          'gz',
          'gzip',
          'hqx',
          'ibooks',
          'jar',
          'jpg',
          'jpeg',
          'js',
          'mobi',
          'mp2',
          'mp3',
          'mp4',
          'mpg',
          'mpeg',
          'mov',
          'movie',
          'msi',
          'msp',
          'odb',
          'odf',
          'odg',
          'ods',
          'odt',
          'ogg',
          'ogv',
          'pdf',
          'phps',
          'png',
          'ppt',
          'pptx',
          'qt',
          'qtm',
          'ra',
          'ram',
          'rar',
          'rpm',
          'rtf',
          'sea',
          'sit',
          'tar',
          'tbz',
          'tbz2',
          'bz',
          'bz2',
          'tgz',
          'torrent',
          'txt',
          'wav',
          'wma',
          'wmv',
          'wpd',
          'xls',
          'xlsx',
          'xml',
          'z',
          'zip',
        ],
        ay = [cU],
        bB = [],
        bM = [],
        a9 = [],
        bL = 500,
        cW = true,
        cJ,
        a6,
        bS,
        bQ,
        ao,
        cp = [
          'pk_campaign',
          'mtm_campaign',
          'piwik_campaign',
          'matomo_campaign',
          'utm_campaign',
          'utm_source',
          'utm_medium',
        ],
        bI = ['pk_kwd', 'mtm_kwd', 'piwik_kwd', 'matomo_kwd', 'utm_term'],
        bl = '_pk_',
        av = 'pk_vid',
        a0 = 180,
        cX,
        br,
        bT = false,
        aJ = 'Lax',
        bn = false,
        cQ,
        bf,
        bx,
        cK = 33955200000,
        cn = 1800000,
        c5 = 15768000000,
        a3 = true,
        bG = false,
        bi = false,
        bR = false,
        aR = false,
        cc,
        bX = {},
        cm = {},
        bo = {},
        bv = 200,
        cs = {},
        c0 = {},
        c7 = {},
        cb = [],
        cf = false,
        cB = false,
        ap = false,
        c8 = false,
        cN = false,
        aO = false,
        bd = u(),
        cx = null,
        cY = null,
        aS,
        bC,
        b8 = am,
        bq,
        aM,
        cq = 0,
        bw = ['id', 'ses', 'cvar', 'ref'],
        cA = false,
        bD = null,
        cL = [],
        ax = T++,
        aw = false;
      try {
        bk = G.title;
      } catch (cy) {
        bk = '';
      }
      function dd(dq, dn, dm, dp, dl, dk, dj) {
        if (bn && dq !== cM) {
          return;
        }
        var di;
        if (dm) {
          di = new Date();
          di.setTime(di.getTime() + dm);
        }
        if (!dj) {
          dj = 'Lax';
        }
        G.cookie =
          dq +
          '=' +
          s(dn) +
          (dm ? ';expires=' + di.toGMTString() : '') +
          ';path=' +
          (dp || '/') +
          (dl ? ';domain=' + dl : '') +
          (dk ? ';secure' : '') +
          ';SameSite=' +
          dj;
      }
      function aD(dk) {
        if (bn) {
          return 0;
        }
        var di = new RegExp('(^|;)[ ]*' + dk + '=([^;]*)'),
          dj = di.exec(G.cookie);
        return dj ? R(dj[2]) : 0;
      }
      bD = !aD(cM);
      function b3(di) {
        var dj;
        di = j(di, av);
        if (bQ) {
          dj = new RegExp('#.*');
          return di.replace(dj, '');
        }
        return di;
      }
      function bW(dk, di) {
        var dl = r(di),
          dj;
        if (dl) {
          return di;
        }
        if (di.slice(0, 1) === '/') {
          return r(dk) + '://' + d(dk) + di;
        }
        dk = b3(dk);
        dj = dk.indexOf('?');
        if (dj >= 0) {
          dk = dk.slice(0, dj);
        }
        dj = dk.lastIndexOf('/');
        if (dj !== dk.length - 1) {
          dk = dk.slice(0, dj + 1);
        }
        return dk + di;
      }
      function cH(dk, di) {
        var dj;
        dk = String(dk).toLowerCase();
        di = String(di).toLowerCase();
        if (dk === di) {
          return true;
        }
        if (di.slice(0, 1) === '.') {
          if (dk === di.slice(1)) {
            return true;
          }
          dj = dk.length - di.length;
          if (dj > 0 && dk.slice(dj) === di) {
            return true;
          }
        }
        return false;
      }
      function cl(di) {
        var dj = document.createElement('a');
        if (di.indexOf('//') !== 0 && di.indexOf('http') !== 0) {
          if (di.indexOf('*') === 0) {
            di = di.substr(1);
          }
          if (di.indexOf('.') === 0) {
            di = di.substr(1);
          }
          di = 'http://' + di;
        }
        dj.href = v.toAbsoluteUrl(di);
        if (dj.pathname) {
          return dj.pathname;
        }
        return '';
      }
      function a4(dj, di) {
        if (!aj(di, '/')) {
          di = '/' + di;
        }
        if (!aj(dj, '/')) {
          dj = '/' + dj;
        }
        var dk = di === '/' || di === '/*';
        if (dk) {
          return true;
        }
        if (dj === di) {
          return true;
        }
        di = String(di).toLowerCase();
        dj = String(dj).toLowerCase();
        if (Q(di, '*')) {
          di = di.slice(0, -1);
          dk = !di || di === '/';
          if (dk) {
            return true;
          }
          if (dj === di) {
            return true;
          }
          return dj.indexOf(di) === 0;
        }
        if (!Q(dj, '/')) {
          dj += '/';
        }
        if (!Q(di, '/')) {
          di += '/';
        }
        return dj.indexOf(di) === 0;
      }
      function ar(dm, dp) {
        var dj, di, dk, dl, dn;
        for (dj = 0; dj < ay.length; dj++) {
          dl = L(ay[dj]);
          dn = cl(ay[dj]);
          if (cH(dm, dl) && a4(dp, dn)) {
            return true;
          }
        }
        return false;
      }
      function aW(dl) {
        var dj, di, dk;
        for (dj = 0; dj < ay.length; dj++) {
          di = L(ay[dj].toLowerCase());
          if (dl === di) {
            return true;
          }
          if (di.slice(0, 1) === '.') {
            if (dl === di.slice(1)) {
              return true;
            }
            dk = dl.length - di.length;
            if (dk > 0 && dl.slice(dk) === di) {
              return true;
            }
          }
        }
        return false;
      }
      function co(di, dk) {
        di = di.replace('send_image=0', 'send_image=1');
        var dj = new Image(1, 1);
        dj.onload = function () {
          E = 0;
          if (typeof dk === 'function') {
            dk({ request: di, trackerUrl: aE, success: true });
          }
        };
        dj.onerror = function () {
          if (typeof dk === 'function') {
            dk({ request: di, trackerUrl: aE, success: false });
          }
        };
        dj.src = aE + (aE.indexOf('?') < 0 ? '?' : '&') + di;
      }
      function cE(di) {
        if (c9 === 'POST') {
          return true;
        }
        return di && (di.length > 2000 || di.indexOf('{"requests"') === 0);
      }
      function aL() {
        return (
          'object' === typeof g &&
          'function' === typeof g.sendBeacon &&
          'function' === typeof Blob
        );
      }
      function a7(dm, dq, dp) {
        var dk = aL();
        if (!dk) {
          return false;
        }
        var dl = { type: 'application/x-www-form-urlencoded; charset=UTF-8' };
        var dr = false;
        var dj = aE;
        try {
          var di = new Blob([dm], dl);
          if (dp && !cE(dm)) {
            di = new Blob([], dl);
            dj = dj + (dj.indexOf('?') < 0 ? '?' : '&') + dm;
          }
          dr = g.sendBeacon(dj, di);
        } catch (dn) {
          return false;
        }
        if (dr && typeof dq === 'function') {
          dq({
            request: dm,
            trackerUrl: aE,
            success: true,
            isSendBeacon: true,
          });
        }
        return dr;
      }
      function c4(dj, dk, di) {
        if (!J(di) || null === di) {
          di = true;
        }
        if (l && a7(dj, dk, di)) {
          return;
        }
        setTimeout(function () {
          if (l && a7(dj, dk, di)) {
            return;
          }
          var dn;
          try {
            var dm = S.XMLHttpRequest
              ? new S.XMLHttpRequest()
              : S.ActiveXObject
                ? new ActiveXObject('Microsoft.XMLHTTP')
                : null;
            dm.open('POST', aE, true);
            dm.onreadystatechange = function () {
              if (
                this.readyState === 4 &&
                !(this.status >= 200 && this.status < 300)
              ) {
                var dp = l && a7(dj, dk, di);
                if (!dp && di) {
                  co(dj, dk);
                } else {
                  if (typeof dk === 'function') {
                    dk({
                      request: dj,
                      trackerUrl: aE,
                      success: false,
                      xhr: this,
                    });
                  }
                }
              } else {
                if (this.readyState === 4 && typeof dk === 'function') {
                  dk({ request: dj, trackerUrl: aE, success: true, xhr: this });
                }
              }
            };
            dm.setRequestHeader('Content-Type', cw);
            dm.withCredentials = true;
            dm.send(dj);
          } catch (dl) {
            dn = l && a7(dj, dk, di);
            if (!dn && di) {
              co(dj, dk);
            } else {
              if (typeof dk === 'function') {
                dk({ request: dj, trackerUrl: aE, success: false });
              }
            }
          }
        }, 50);
      }
      function cg(dj) {
        var di = new Date();
        var dk = di.getTime() + dj;
        if (!q || dk > q) {
          q = dk;
        }
      }
      function bb() {
        bd = true;
        cx = new Date().getTime();
      }
      function dc() {
        var di = new Date().getTime();
        return !cx || di - cx > a6;
      }
      function az() {
        if (dc()) {
          bS();
        }
      }
      function df() {
        if (aO || !a6) {
          return;
        }
        aO = true;
        an(S, 'focus', bb);
        an(S, 'blur', az);
        ab++;
        t.addPlugin('HeartBeat' + ab, {
          unload: function () {
            if (aO && dc()) {
              bS();
            }
          },
        });
      }
      function cC(dm) {
        var dj = new Date();
        var di = dj.getTime();
        cY = di;
        if (cB && di < cB) {
          var dk = cB - di;
          setTimeout(dm, dk);
          cg(dk + 50);
          cB += 50;
          return;
        }
        if (cB === false) {
          var dl = 800;
          cB = di + dl;
        }
        dm();
      }
      function aP() {
        if (aD(cM)) {
          bD = false;
        } else {
          if (aD(be)) {
            bD = true;
          }
        }
      }
      function bH(dj, di, dk) {
        aP();
        if (!bD) {
          cL.push(dj);
          return;
        }
        aw = true;
        if (!cQ && dj) {
          if (cA && bD) {
            dj += '&consent=1';
          }
          cC(function () {
            if (cW && a7(dj, dk, true)) {
              cg(100);
              return;
            }
            if (cE(dj)) {
              c4(dj, dk);
            } else {
              co(dj, dk);
            }
            cg(di);
          });
        }
        if (!aO) {
          df();
        }
      }
      function ck(di) {
        if (cQ) {
          return false;
        }
        return di && di.length;
      }
      function c3(di, dm) {
        if (!dm || dm >= di.length) {
          return [di];
        }
        var dj = 0;
        var dk = di.length;
        var dl = [];
        for (dj; dj < dk; dj += dm) {
          dl.push(di.slice(dj, dj + dm));
        }
        return dl;
      }
      function de(dj, di) {
        if (!ck(dj)) {
          return;
        }
        if (!bD) {
          cL.push(dj);
          return;
        }
        aw = true;
        cC(function () {
          var dm = c3(dj, 50);
          var dk = 0,
            dl;
          for (dk; dk < dm.length; dk++) {
            dl = '{"requests":["?' + dm[dk].join('","?') + '"]}';
            if (cW && a7(dl, null, false)) {
              cg(100);
            } else {
              c4(dl, null, false);
            }
          }
          cg(di);
        });
      }
      function aU(di) {
        return bl + di + '.' + b7 + '.' + bq;
      }
      function bZ(dk, dj, di) {
        dd(dk, '', -86400, dj, di);
      }
      function b6() {
        if (bn) {
          return '0';
        }
        if (!J(S.showModalDialog) && J(g.cookieEnabled)) {
          return g.cookieEnabled ? '1' : '0';
        }
        var di = bl + 'testcookie';
        dd(di, '1', undefined, br, cX, bT, aJ);
        var dj = aD(di) === '1' ? '1' : '0';
        bZ(di);
        return dj;
      }
      function bj() {
        bq = b8((cX || cU) + (br || '/')).slice(0, 4);
      }
      function cI() {
        if (J(c7.res)) {
          return c7;
        }
        var dj,
          dl,
          dm = {
            pdf: 'application/pdf',
            qt: 'video/quicktime',
            realp: 'audio/x-pn-realaudio-plugin',
            wma: 'application/x-mplayer2',
            fla: 'application/x-shockwave-flash',
            java: 'application/x-java-vm',
            ag: 'application/x-silverlight',
          };
        if (!new RegExp('MSIE').test(g.userAgent)) {
          if (g.mimeTypes && g.mimeTypes.length) {
            for (dj in dm) {
              if (Object.prototype.hasOwnProperty.call(dm, dj)) {
                dl = g.mimeTypes[dm[dj]];
                c7[dj] = dl && dl.enabledPlugin ? '1' : '0';
              }
            }
          }
          if (
            !new RegExp('Edge[ /](\\d+[\\.\\d]+)').test(g.userAgent) &&
            typeof navigator.javaEnabled !== 'unknown' &&
            J(g.javaEnabled) &&
            g.javaEnabled()
          ) {
            c7.java = '1';
          }
          if (!J(S.showModalDialog) && J(g.cookieEnabled)) {
            c7.cookie = g.cookieEnabled ? '1' : '0';
          } else {
            c7.cookie = b6();
          }
        }
        var dk = parseInt(X.width, 10);
        var di = parseInt(X.height, 10);
        c7.res = parseInt(dk, 10) + 'x' + parseInt(di, 10);
        return c7;
      }
      function bY() {
        var dj = aU('cvar'),
          di = aD(dj);
        if (di && di.length) {
          di = S.JSON.parse(di);
          if (V(di)) {
            return di;
          }
        }
        return {};
      }
      function cF() {
        if (aR === false) {
          aR = bY();
        }
      }
      function cR() {
        var di = cI();
        return b8(
          (g.userAgent || '') +
            (g.platform || '') +
            S.JSON.stringify(di) +
            new Date().getTime() +
            Math.random()
        ).slice(0, 16);
      }
      function aB() {
        var di = cI();
        return b8(
          (g.userAgent || '') + (g.platform || '') + S.JSON.stringify(di)
        ).slice(0, 6);
      }
      function bg() {
        return Math.floor(new Date().getTime() / 1000);
      }
      function aK() {
        var dj = bg();
        var dk = aB();
        var di = String(dj) + dk;
        return di;
      }
      function c2(dk) {
        dk = String(dk);
        var dn = aB();
        var dl = dn.length;
        var dm = dk.substr(-1 * dl, dl);
        var dj = parseInt(dk.substr(0, dk.length - dl), 10);
        if (dj && dm && dm === dn) {
          var di = bg();
          if (a0 <= 0) {
            return true;
          }
          if (di >= dj && di <= dj + a0) {
            return true;
          }
        }
        return false;
      }
      function dg(di) {
        if (!cN) {
          return '';
        }
        var dm = e(di, av);
        if (!dm) {
          return '';
        }
        dm = String(dm);
        var dk = new RegExp('^[a-zA-Z0-9]+$');
        if (dm.length === 32 && dk.test(dm)) {
          var dj = dm.substr(16, 32);
          if (c2(dj)) {
            var dl = dm.substr(0, 16);
            return dl;
          }
        }
        return '';
      }
      function cO() {
        if (!bP) {
          bP = dg(bO);
        }
        var dk = new Date(),
          di = Math.round(dk.getTime() / 1000),
          dj = aU('id'),
          dn = aD(dj),
          dm,
          dl;
        if (dn) {
          dm = dn.split('.');
          dm.unshift('0');
          if (bP.length) {
            dm[1] = bP;
          }
          return dm;
        }
        if (bP.length) {
          dl = bP;
        } else {
          if ('0' === b6()) {
            dl = '';
          } else {
            dl = cR();
          }
        }
        dm = ['1', dl, di];
        return dm;
      }
      function aZ() {
        var dl = cO(),
          dj = dl[0],
          dk = dl[1],
          di = dl[2];
        return { newVisitor: dj, uuid: dk, createTs: di };
      }
      function aH() {
        var dl = new Date(),
          dj = dl.getTime(),
          dm = aZ().createTs;
        var di = parseInt(dm, 10);
        var dk = di * 1000 + cK - dj;
        return dk;
      }
      function aN(di) {
        if (!b7) {
          return;
        }
        var dk = new Date(),
          dj = Math.round(dk.getTime() / 1000);
        if (!J(di)) {
          di = aZ();
        }
        var dl = di.uuid + '.' + di.createTs + '.';
        dd(aU('id'), dl, aH(), br, cX, bT, aJ);
      }
      function bN() {
        var di = aD(aU('ref'));
        if (di.length) {
          try {
            di = S.JSON.parse(di);
            if (V(di)) {
              return di;
            }
          } catch (dj) {}
        }
        return ['', '', 0, ''];
      }
      function by(dj) {
        var di = 'testvalue';
        dd('test', di, 10000, null, dj, bT, aJ);
        if (aD('test') === di) {
          bZ('test', null, dj);
          return true;
        }
        return false;
      }
      function aF() {
        var dj = bn;
        bn = false;
        var di, dk;
        for (di = 0; di < bw.length; di++) {
          dk = aU(bw[di]);
          if (dk !== cM && dk !== be && 0 !== aD(dk)) {
            bZ(dk, br, cX);
          }
        }
        bn = dj;
      }
      function b4(di) {
        b7 = di;
      }
      function dh(dm) {
        if (!dm || !V(dm)) {
          return;
        }
        var dl = [];
        var dk;
        for (dk in dm) {
          if (Object.prototype.hasOwnProperty.call(dm, dk)) {
            dl.push(dk);
          }
        }
        var dn = {};
        dl.sort();
        var di = dl.length;
        var dj;
        for (dj = 0; dj < di; dj++) {
          dn[dl[dj]] = dm[dl[dj]];
        }
        return dn;
      }
      function cd() {
        dd(aU('ses'), '1', cn, br, cX, bT, aJ);
      }
      function bh() {
        var dl = '';
        var dj =
          'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var dk = dj.length;
        var di;
        for (di = 0; di < 6; di++) {
          dl += dj.charAt(Math.floor(Math.random() * dk));
        }
        return dl;
      }
      function aA(dj) {
        var di = '';
        if (h && h.timing && h && h.timing.connectEnd && h.timing.fetchStart) {
          if (h.timing.connectEnd < h.timing.fetchStart) {
            return;
          }
          di += '&pf_net=' + (h.timing.connectEnd - h.timing.fetchStart);
        }
        if (
          h &&
          h.timing &&
          h &&
          h.timing.responseStart &&
          h.timing.requestStart
        ) {
          if (h.timing.responseStart < h.timing.requestStart) {
            return;
          }
          di += '&pf_srv=' + (h.timing.responseStart - h.timing.requestStart);
        }
        if (
          h &&
          h.timing &&
          h &&
          h.timing.responseStart &&
          h.timing.responseEnd
        ) {
          if (h.timing.responseEnd < h.timing.responseStart) {
            return;
          }
          di += '&pf_tfr=' + (h.timing.responseEnd - h.timing.responseStart);
        }
        if (
          h &&
          h.timing &&
          h &&
          h.timing.domInteractive &&
          h.timing.domLoading
        ) {
          if (h.timing.domInteractive < h.timing.domLoading) {
            return;
          }
          di += '&pf_dm1=' + (h.timing.domInteractive - h.timing.domLoading);
        }
        if (
          h &&
          h.timing &&
          h &&
          h.timing.domComplete &&
          h.timing.domInteractive
        ) {
          if (h.timing.domComplete < h.timing.domInteractive) {
            return;
          }
          di += '&pf_dm2=' + (h.timing.domComplete - h.timing.domInteractive);
        }
        if (
          h &&
          h.timing &&
          h &&
          h.timing.loadEventEnd &&
          h.timing.loadEventStart
        ) {
          if (h.timing.loadEventEnd < h.timing.loadEventStart) {
            return;
          }
          di += '&pf_onl=' + (h.timing.loadEventEnd - h.timing.loadEventStart);
        }
        return dj + di;
      }
      function cr(dk, dF, dG) {
        var dE,
          dj = new Date(),
          ds = Math.round(dj.getTime() / 1000),
          dp,
          dC,
          dl = 1024,
          dL,
          dt,
          dB = aR,
          dm = aU('ses'),
          dz = aU('ref'),
          dw = aU('cvar'),
          dx = aD(dm),
          dD = bN(),
          dH = a5 || bO,
          dq,
          di;
        if (bn) {
          aF();
        }
        if (cQ) {
          return '';
        }
        var dy = aZ();
        var dv = G.characterSet || G.charset;
        if (!dv || dv.toLowerCase() === 'utf-8') {
          dv = null;
        }
        dq = dD[0];
        di = dD[1];
        dp = dD[2];
        dC = dD[3];
        if (!dx) {
          if (!bx || !dq.length) {
            for (dE in cp) {
              if (Object.prototype.hasOwnProperty.call(cp, dE)) {
                dq = e(dH, cp[dE]);
                if (dq.length) {
                  break;
                }
              }
            }
            for (dE in bI) {
              if (Object.prototype.hasOwnProperty.call(bI, dE)) {
                di = e(dH, bI[dE]);
                if (di.length) {
                  break;
                }
              }
            }
          }
          dL = d(bp);
          dt = dC.length ? d(dC) : '';
          if (dL.length && !aW(dL) && (!bx || !dt.length || aW(dt))) {
            dC = bp;
          }
          if (dC.length || dq.length) {
            dp = ds;
            dD = [dq, di, dp, b3(dC.slice(0, dl))];
            dd(dz, S.JSON.stringify(dD), c5, br, cX, bT, aJ);
          }
        }
        dk +=
          '&idsite=' +
          b7 +
          '&rec=1&r=' +
          String(Math.random()).slice(2, 8) +
          '&h=' +
          dj.getHours() +
          '&m=' +
          dj.getMinutes() +
          '&s=' +
          dj.getSeconds() +
          '&url=' +
          s(b3(dH)) +
          (bp.length ? '&urlref=' + s(b3(bp)) : '') +
          (bA && bA.length ? '&uid=' + s(bA) : '') +
          '&_id=' +
          dy.uuid +
          '&_idn=' +
          dy.newVisitor +
          (dq.length ? '&_rcn=' + s(dq) : '') +
          (di.length ? '&_rck=' + s(di) : '') +
          '&_refts=' +
          dp +
          (String(dC).length ? '&_ref=' + s(b3(dC.slice(0, dl))) : '') +
          (dv ? '&cs=' + s(dv) : '') +
          '&send_image=0';
        var dK = cI();
        for (dE in dK) {
          if (Object.prototype.hasOwnProperty.call(dK, dE)) {
            dk += '&' + dE + '=' + dK[dE];
          }
        }
        var dJ = [];
        if (dF) {
          for (dE in dF) {
            if (
              Object.prototype.hasOwnProperty.call(dF, dE) &&
              /^dimension\d+$/.test(dE)
            ) {
              var dn = dE.replace('dimension', '');
              dJ.push(parseInt(dn, 10));
              dJ.push(String(dn));
              dk += '&' + dE + '=' + s(dF[dE]);
              delete dF[dE];
            }
          }
        }
        if (dF && B(dF)) {
          dF = null;
        }
        for (dE in cs) {
          if (Object.prototype.hasOwnProperty.call(cs, dE)) {
            dk += '&' + dE + '=' + s(cs[dE]);
          }
        }
        for (dE in bo) {
          if (Object.prototype.hasOwnProperty.call(bo, dE)) {
            var du = -1 === M(dJ, dE);
            if (du) {
              dk += '&dimension' + dE + '=' + s(bo[dE]);
            }
          }
        }
        if (dF) {
          dk += '&data=' + s(S.JSON.stringify(dF));
        } else {
          if (ao) {
            dk += '&data=' + s(S.JSON.stringify(ao));
          }
        }
        function dr(dM, dN) {
          var dO = S.JSON.stringify(dM);
          if (dO.length > 2) {
            return '&' + dN + '=' + s(dO);
          }
          return '';
        }
        var dI = dh(bX);
        var dA = dh(cm);
        dk += dr(dI, 'cvar');
        dk += dr(dA, 'e_cvar');
        if (aR) {
          dk += dr(aR, '_cvar');
          for (dE in dB) {
            if (Object.prototype.hasOwnProperty.call(dB, dE)) {
              if (aR[dE][0] === '' || aR[dE][1] === '') {
                delete aR[dE];
              }
            }
          }
          if (bR) {
            dd(dw, S.JSON.stringify(aR), cn, br, cX, bT, aJ);
          }
        }
        if (a3 && bG && !bi) {
          dk = aA(dk);
          bi = true;
        }
        if (aM) {
          dk += '&pv_id=' + aM;
        }
        aN(dy);
        cd();
        dk += ac(dG, { tracker: bK, request: dk });
        if (cZ.length) {
          dk += '&' + cZ;
        }
        if (A(cc)) {
          dk = cc(dk);
        }
        return dk;
      }
      bS = function a8() {
        var di = new Date();
        di = di.getTime();
        if (!cY) {
          return false;
        }
        if (cY + a6 <= di) {
          bK.ping();
          return true;
        }
        return false;
      };
      function bs(dl, dk, dq, dm, di, dt) {
        var dp = 'idgoal=0',
          dj = new Date(),
          dr = [],
          ds,
          dn = String(dl).length;
        if (dn) {
          dp += '&ec_id=' + s(dl);
        }
        dp += '&revenue=' + dk;
        if (String(dq).length) {
          dp += '&ec_st=' + dq;
        }
        if (String(dm).length) {
          dp += '&ec_tx=' + dm;
        }
        if (String(di).length) {
          dp += '&ec_sh=' + di;
        }
        if (String(dt).length) {
          dp += '&ec_dt=' + dt;
        }
        if (c0) {
          for (ds in c0) {
            if (Object.prototype.hasOwnProperty.call(c0, ds)) {
              if (!J(c0[ds][1])) {
                c0[ds][1] = '';
              }
              if (!J(c0[ds][2])) {
                c0[ds][2] = '';
              }
              if (!J(c0[ds][3]) || String(c0[ds][3]).length === 0) {
                c0[ds][3] = 0;
              }
              if (!J(c0[ds][4]) || String(c0[ds][4]).length === 0) {
                c0[ds][4] = 1;
              }
              dr.push(c0[ds]);
            }
          }
          dp += '&ec_items=' + s(S.JSON.stringify(dr));
        }
        dp = cr(dp, ao, 'ecommerce');
        bH(dp, bL);
        if (dn) {
          c0 = {};
        }
      }
      function b0(di, dm, dl, dk, dj, dn) {
        if (String(di).length && J(dm)) {
          bs(di, dm, dl, dk, dj, dn);
        }
      }
      function bu(di) {
        if (J(di)) {
          bs('', di, '', '', '', '');
        }
      }
      function b1(dj, dl, dk) {
        aM = bh();
        var di = cr('action_name=' + s(al(dj || bk)), dl, 'log');
        if (!bi) {
          di = aA(di);
        }
        bH(di, bL, dk);
      }
      function a1(dk, dj) {
        var dl,
          di = '(^| )(piwik[_-]' + dj + '|matomo[_-]' + dj;
        if (dk) {
          for (dl = 0; dl < dk.length; dl++) {
            di += '|' + dk[dl];
          }
        }
        di += ')( |$)';
        return new RegExp(di);
      }
      function aV(di) {
        return aE && di && 0 === String(di).indexOf(aE);
      }
      function cu(dm, di, dn, dj) {
        if (aV(di)) {
          return 0;
        }
        var dl = a1(bM, 'download'),
          dk = a1(a9, 'link'),
          dp = new RegExp('\\.(' + c6.join('|') + ')([?&#]|$)', 'i');
        if (dk.test(dm)) {
          return 'link';
        }
        if (dj || dl.test(dm) || dp.test(di)) {
          return 'download';
        }
        if (dn) {
          return 0;
        }
        return 'link';
      }
      function au(dj) {
        var di;
        di = dj.parentNode;
        while (di !== null && J(di)) {
          if (ae.isLinkElement(dj)) {
            break;
          }
          dj = di;
          di = dj.parentNode;
        }
        return dj;
      }
      function db(dn) {
        dn = au(dn);
        if (!ae.hasNodeAttribute(dn, 'href')) {
          return;
        }
        if (!J(dn.href)) {
          return;
        }
        var dm = ae.getAttributeValueFromNode(dn, 'href');
        var dj = dn.pathname || cl(dn.href);
        var dp = dn.hostname || d(dn.href);
        var dq = dp.toLowerCase();
        var dk = dn.href.replace(dp, dq);
        var dl = new RegExp(
          '^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):',
          'i'
        );
        if (!dl.test(dk)) {
          var di = cu(
            dn.className,
            dk,
            ar(dq, dj),
            ae.hasNodeAttribute(dn, 'download')
          );
          if (di) {
            return { type: di, href: dk };
          }
        }
      }
      function aQ(di, dj, dk, dl) {
        var dm = v.buildInteractionRequestParams(di, dj, dk, dl);
        if (!dm) {
          return;
        }
        return cr(dm, null, 'contentInteraction');
      }
      function bc(di, dj) {
        if (!di || !dj) {
          return false;
        }
        var dk = v.findTargetNode(di);
        if (v.shouldIgnoreInteraction(dk)) {
          return false;
        }
        dk = v.findTargetNodeNoDefault(di);
        if (dk && !U(dk, dj)) {
          return false;
        }
        return true;
      }
      function ct(dk, dj, dm) {
        if (!dk) {
          return;
        }
        var di = v.findParentContentNode(dk);
        if (!di) {
          return;
        }
        if (!bc(di, dk)) {
          return;
        }
        var dl = v.buildContentBlock(di);
        if (!dl) {
          return;
        }
        if (!dl.target && dm) {
          dl.target = dm;
        }
        return v.buildInteractionRequestParams(
          dj,
          dl.name,
          dl.piece,
          dl.target
        );
      }
      function aX(dj) {
        if (!cb || !cb.length) {
          return false;
        }
        var di, dk;
        for (di = 0; di < cb.length; di++) {
          dk = cb[di];
          if (
            dk &&
            dk.name === dj.name &&
            dk.piece === dj.piece &&
            dk.target === dj.target
          ) {
            return true;
          }
        }
        return false;
      }
      function aY(di) {
        return function (dm) {
          if (!di) {
            return;
          }
          var dk = v.findParentContentNode(di);
          var dj;
          if (dm) {
            dj = dm.target || dm.srcElement;
          }
          if (!dj) {
            dj = di;
          }
          if (!bc(dk, dj)) {
            return;
          }
          if (!dk) {
            return false;
          }
          var dn = v.findTargetNode(dk);
          if (!dn || v.shouldIgnoreInteraction(dn)) {
            return false;
          }
          var dl = db(dn);
          if (c8 && dl && dl.type) {
            return dl.type;
          }
          return bK.trackContentInteractionNode(dj, 'click');
        };
      }
      function b2(dk) {
        if (!dk || !dk.length) {
          return;
        }
        var di, dj;
        for (di = 0; di < dk.length; di++) {
          dj = v.findTargetNode(dk[di]);
          if (dj && !dj.contentInteractionTrackingSetupDone) {
            dj.contentInteractionTrackingSetupDone = true;
            an(dj, 'click', aY(dj));
          }
        }
      }
      function bz(dk, dl) {
        if (!dk || !dk.length) {
          return [];
        }
        var di, dj;
        for (di = 0; di < dk.length; di++) {
          if (aX(dk[di])) {
            dk.splice(di, 1);
            di--;
          } else {
            cb.push(dk[di]);
          }
        }
        if (!dk || !dk.length) {
          return [];
        }
        b2(dl);
        var dm = [];
        for (di = 0; di < dk.length; di++) {
          dj = cr(
            v.buildImpressionRequestParams(
              dk[di].name,
              dk[di].piece,
              dk[di].target
            ),
            undefined,
            'contentImpressions'
          );
          if (dj) {
            dm.push(dj);
          }
        }
        return dm;
      }
      function cz(dj) {
        var di = v.collectContent(dj);
        return bz(di, dj);
      }
      function ba(dj) {
        if (!dj || !dj.length) {
          return [];
        }
        var di;
        for (di = 0; di < dj.length; di++) {
          if (!v.isNodeVisible(dj[di])) {
            dj.splice(di, 1);
            di--;
          }
        }
        if (!dj || !dj.length) {
          return [];
        }
        return cz(dj);
      }
      function aG(dk, di, dj) {
        var dl = v.buildImpressionRequestParams(dk, di, dj);
        return cr(dl, null, 'contentImpression');
      }
      function da(dl, dj) {
        if (!dl) {
          return;
        }
        var di = v.findParentContentNode(dl);
        var dk = v.buildContentBlock(di);
        if (!dk) {
          return;
        }
        if (!dj) {
          dj = 'Unknown';
        }
        return aQ(dj, dk.name, dk.piece, dk.target);
      }
      function cP(dj, dl, di, dk) {
        return (
          'e_c=' +
          s(dj) +
          '&e_a=' +
          s(dl) +
          (J(di) ? '&e_n=' + s(di) : '') +
          (J(dk) ? '&e_v=' + s(dk) : '') +
          '&ca=1'
        );
      }
      function at(dk, dm, di, dl, dp, dn) {
        if (!Y(dk) || !Y(dm)) {
          ak(
            'Error while logging event: Parameters `category` and `action` must not be empty or filled with whitespaces'
          );
          return false;
        }
        var dj = cr(cP(dk, dm, di, dl), dp, 'event');
        bH(dj, bL, dn);
      }
      function b9(di, dl, dj, dm) {
        var dk = cr(
          'search=' +
            s(di) +
            (dl ? '&search_cat=' + s(dl) : '') +
            (J(dj) ? '&search_count=' + dj : ''),
          dm,
          'sitesearch'
        );
        bH(dk, bL);
      }
      function cT(di, dm, dl, dk) {
        var dj = cr('idgoal=' + di + (dm ? '&revenue=' + dm : ''), dl, 'goal');
        bH(dj, bL, dk);
      }
      function c1(dl, di, dq, dp, dk) {
        var dn = di + '=' + s(b3(dl));
        var dj = ct(dk, 'click', dl);
        if (dj) {
          dn += '&' + dj;
        }
        var dm = cr(dn, dq, 'link');
        bH(dm, bL, dp);
      }
      function bV(dj, di) {
        if (dj !== '') {
          return dj + di.charAt(0).toUpperCase() + di.slice(1);
        }
        return di;
      }
      function ch(dn) {
        var dm,
          di,
          dl = ['', 'webkit', 'ms', 'moz'],
          dk;
        if (!bf) {
          for (di = 0; di < dl.length; di++) {
            dk = dl[di];
            if (Object.prototype.hasOwnProperty.call(G, bV(dk, 'hidden'))) {
              if (G[bV(dk, 'visibilityState')] === 'prerender') {
                dm = true;
              }
              break;
            }
          }
        }
        if (dm) {
          an(G, dk + 'visibilitychange', function dj() {
            G.removeEventListener(dk + 'visibilitychange', dj, false);
            dn();
          });
          return;
        }
        dn();
      }
      function bt() {
        var dj = bK.getVisitorId();
        var di = aK();
        return dj + di;
      }
      function cj(di) {
        if (!di) {
          return;
        }
        if (!ae.hasNodeAttribute(di, 'href')) {
          return;
        }
        var dj = ae.getAttributeValueFromNode(di, 'href');
        if (!dj || aV(dj)) {
          return;
        }
        if (!bK.getVisitorId()) {
          return;
        }
        dj = j(dj, av);
        var dk = bt();
        dj = F(dj, av, dk);
        ae.setAnyAttribute(di, 'href', dj);
      }
      function bm(dl) {
        var dm = ae.getAttributeValueFromNode(dl, 'href');
        if (!dm) {
          return false;
        }
        dm = String(dm);
        var dj =
          dm.indexOf('//') === 0 ||
          dm.indexOf('http://') === 0 ||
          dm.indexOf('https://') === 0;
        if (!dj) {
          return false;
        }
        var di = dl.pathname || cl(dl.href);
        var dk = (dl.hostname || d(dl.href)).toLowerCase();
        if (ar(dk, di)) {
          if (!cH(cU, L(dk))) {
            return true;
          }
          return false;
        }
        return false;
      }
      function cG(di) {
        var dj = db(di);
        if (dj && dj.type) {
          dj.href = o(dj.href);
          c1(dj.href, dj.type, undefined, null, di);
          return;
        }
        if (cN) {
          di = au(di);
          if (bm(di)) {
            cj(di);
          }
        }
      }
      function cv() {
        return G.all && !G.addEventListener;
      }
      function cV(di) {
        var dk = di.which;
        var dj = typeof di.button;
        if (!dk && dj !== 'undefined') {
          if (cv()) {
            if (di.button & 1) {
              dk = 1;
            } else {
              if (di.button & 2) {
                dk = 3;
              } else {
                if (di.button & 4) {
                  dk = 2;
                }
              }
            }
          } else {
            if (di.button === 0 || di.button === '0') {
              dk = 1;
            } else {
              if (di.button & 1) {
                dk = 2;
              } else {
                if (di.button & 2) {
                  dk = 3;
                }
              }
            }
          }
        }
        return dk;
      }
      function bU(di) {
        switch (cV(di)) {
          case 1:
            return 'left';
          case 2:
            return 'middle';
          case 3:
            return 'right';
        }
      }
      function a2(di) {
        return di.target || di.srcElement;
      }
      function aC(di) {
        return function (dl) {
          dl = dl || S.event;
          var dk = bU(dl);
          var dm = a2(dl);
          if (dl.type === 'click') {
            var dj = false;
            if (di && dk === 'middle') {
              dj = true;
            }
            if (dm && !dj) {
              cG(dm);
            }
          } else {
            if (dl.type === 'mousedown') {
              if (dk === 'middle' && dm) {
                aS = dk;
                bC = dm;
              } else {
                aS = bC = null;
              }
            } else {
              if (dl.type === 'mouseup') {
                if (dk === aS && dm === bC) {
                  cG(dm);
                }
                aS = bC = null;
              } else {
                if (dl.type === 'contextmenu') {
                  cG(dm);
                }
              }
            }
          }
        };
      }
      function aq(dk, dj) {
        var di = typeof dj;
        if (di === 'undefined') {
          dj = true;
        }
        an(dk, 'click', aC(dj), false);
        if (dj) {
          an(dk, 'mouseup', aC(dj), false);
          an(dk, 'mousedown', aC(dj), false);
          an(dk, 'contextmenu', aC(dj), false);
        }
      }
      function bF(dk, dm) {
        ap = true;
        var dl,
          dj = a1(bB, 'ignore'),
          dn = G.links,
          di = null,
          dp = null;
        if (dn) {
          for (dl = 0; dl < dn.length; dl++) {
            di = dn[dl];
            if (!dj.test(di.className)) {
              dp = typeof di.matomoTrackers;
              if ('undefined' === dp) {
                di.matomoTrackers = [];
              }
              if (-1 === M(di.matomoTrackers, dm)) {
                di.matomoTrackers.push(dm);
                aq(di, dk);
              }
            }
          }
        }
      }
      function aT(dj, dm, dn) {
        if (cf) {
          return true;
        }
        cf = true;
        var dp = false;
        var dl, dk;
        function di() {
          dp = true;
        }
        m(function () {
          function dq(ds) {
            setTimeout(function () {
              if (!cf) {
                return;
              }
              dp = false;
              dn.trackVisibleContentImpressions();
              dq(ds);
            }, ds);
          }
          function dr(ds) {
            setTimeout(function () {
              if (!cf) {
                return;
              }
              if (dp) {
                dp = false;
                dn.trackVisibleContentImpressions();
              }
              dr(ds);
            }, ds);
          }
          if (dj) {
            dl = ['scroll', 'resize'];
            for (dk = 0; dk < dl.length; dk++) {
              if (G.addEventListener) {
                G.addEventListener(dl[dk], di, false);
              } else {
                S.attachEvent('on' + dl[dk], di);
              }
            }
            dr(100);
          }
          if (dm && dm > 0) {
            dm = parseInt(dm, 10);
            dq(dm);
          }
        });
      }
      var bE = {
        enabled: true,
        requests: [],
        timeout: null,
        interval: 2500,
        sendRequests: function () {
          var di = this.requests;
          this.requests = [];
          if (di.length === 1) {
            bH(di[0], bL);
          } else {
            de(di, bL);
          }
        },
        canQueue: function () {
          return !l && this.enabled;
        },
        pushMultiple: function (dj) {
          if (!this.canQueue()) {
            de(dj, bL);
            return;
          }
          var di;
          for (di = 0; di < dj.length; di++) {
            this.push(dj[di]);
          }
        },
        push: function (di) {
          if (!di) {
            return;
          }
          if (!this.canQueue()) {
            bH(di, bL);
            return;
          }
          bE.requests.push(di);
          if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
          }
          this.timeout = setTimeout(function () {
            bE.timeout = null;
            bE.sendRequests();
          }, bE.interval);
          var dj = 'RequestQueue' + ax;
          if (!Object.prototype.hasOwnProperty.call(b, dj)) {
            b[dj] = {
              unload: function () {
                if (bE.timeout) {
                  clearTimeout(bE.timeout);
                }
                bE.sendRequests();
              },
            };
          }
        },
      };
      bj();
      aN();
      this.hasConsent = function () {
        return bD;
      };
      this.getVisitorId = function () {
        return aZ().uuid;
      };
      this.getVisitorInfo = function () {
        return cO();
      };
      this.getAttributionInfo = function () {
        return bN();
      };
      this.getAttributionCampaignName = function () {
        return bN()[0];
      };
      this.getAttributionCampaignKeyword = function () {
        return bN()[1];
      };
      this.getAttributionReferrerTimestamp = function () {
        return bN()[2];
      };
      this.getAttributionReferrerUrl = function () {
        return bN()[3];
      };
      this.setTrackerUrl = function (di) {
        aE = di;
      };
      this.getTrackerUrl = function () {
        return aE;
      };
      this.getMatomoUrl = function () {
        return W(this.getTrackerUrl(), bJ);
      };
      this.getPiwikUrl = function () {
        return this.getMatomoUrl();
      };
      this.addTracker = function (dk, dj) {
        if (!J(dk) || null === dk) {
          dk = this.getTrackerUrl();
        }
        var di = new P(dk, dj);
        I.push(di);
        t.trigger('TrackerAdded', [this]);
        return di;
      };
      this.getSiteId = function () {
        return b7;
      };
      this.setSiteId = function (di) {
        b4(di);
      };
      this.resetUserId = function () {
        bA = '';
      };
      this.setUserId = function (di) {
        if (Y(di)) {
          bA = di;
        }
      };
      this.setVisitorId = function (dj) {
        var di = /[0-9A-Fa-f]{16}/g;
        if (w(dj) && di.test(dj)) {
          bP = dj;
        } else {
          ak('Invalid visitorId set' + dj);
        }
      };
      this.getUserId = function () {
        return bA;
      };
      this.setCustomData = function (di, dj) {
        if (V(di)) {
          ao = di;
        } else {
          if (!ao) {
            ao = {};
          }
          ao[di] = dj;
        }
      };
      this.getCustomData = function () {
        return ao;
      };
      this.setCustomRequestProcessing = function (di) {
        cc = di;
      };
      this.appendToTrackingUrl = function (di) {
        cZ = di;
      };
      this.getRequest = function (di) {
        return cr(di);
      };
      this.addPlugin = function (di, dj) {
        b[di] = dj;
      };
      this.setCustomDimension = function (di, dj) {
        di = parseInt(di, 10);
        if (di > 0) {
          if (!J(dj)) {
            dj = '';
          }
          if (!w(dj)) {
            dj = String(dj);
          }
          bo[di] = dj;
        }
      };
      this.getCustomDimension = function (di) {
        di = parseInt(di, 10);
        if (di > 0 && Object.prototype.hasOwnProperty.call(bo, di)) {
          return bo[di];
        }
      };
      this.deleteCustomDimension = function (di) {
        di = parseInt(di, 10);
        if (di > 0) {
          delete bo[di];
        }
      };
      this.setCustomVariable = function (dj, di, dm, dk) {
        var dl;
        if (!J(dk)) {
          dk = 'visit';
        }
        if (!J(di)) {
          return;
        }
        if (!J(dm)) {
          dm = '';
        }
        if (dj > 0) {
          di = !w(di) ? String(di) : di;
          dm = !w(dm) ? String(dm) : dm;
          dl = [di.slice(0, bv), dm.slice(0, bv)];
          if (dk === 'visit' || dk === 2) {
            cF();
            aR[dj] = dl;
          } else {
            if (dk === 'page' || dk === 3) {
              bX[dj] = dl;
            } else {
              if (dk === 'event') {
                cm[dj] = dl;
              }
            }
          }
        }
      };
      this.getCustomVariable = function (dj, dk) {
        var di;
        if (!J(dk)) {
          dk = 'visit';
        }
        if (dk === 'page' || dk === 3) {
          di = bX[dj];
        } else {
          if (dk === 'event') {
            di = cm[dj];
          } else {
            if (dk === 'visit' || dk === 2) {
              cF();
              di = aR[dj];
            }
          }
        }
        if (!J(di) || (di && di[0] === '')) {
          return false;
        }
        return di;
      };
      this.deleteCustomVariable = function (di, dj) {
        if (this.getCustomVariable(di, dj)) {
          this.setCustomVariable(di, '', '', dj);
        }
      };
      this.deleteCustomVariables = function (di) {
        if (di === 'page' || di === 3) {
          bX = {};
        } else {
          if (di === 'event') {
            cm = {};
          } else {
            if (di === 'visit' || di === 2) {
              aR = {};
            }
          }
        }
      };
      this.storeCustomVariablesInCookie = function () {
        bR = true;
      };
      this.setLinkTrackingTimer = function (di) {
        bL = di;
      };
      this.getLinkTrackingTimer = function () {
        return bL;
      };
      this.setDownloadExtensions = function (di) {
        if (w(di)) {
          di = di.split('|');
        }
        c6 = di;
      };
      this.addDownloadExtensions = function (dj) {
        var di;
        if (w(dj)) {
          dj = dj.split('|');
        }
        for (di = 0; di < dj.length; di++) {
          c6.push(dj[di]);
        }
      };
      this.removeDownloadExtensions = function (dk) {
        var dj,
          di = [];
        if (w(dk)) {
          dk = dk.split('|');
        }
        for (dj = 0; dj < c6.length; dj++) {
          if (M(dk, c6[dj]) === -1) {
            di.push(c6[dj]);
          }
        }
        c6 = di;
      };
      this.setDomains = function (di) {
        ay = w(di) ? [di] : di;
        var dm = false,
          dk = 0,
          dj;
        for (dk; dk < ay.length; dk++) {
          dj = String(ay[dk]);
          if (cH(cU, L(dj))) {
            dm = true;
            break;
          }
          var dl = cl(dj);
          if (dl && dl !== '/' && dl !== '/*') {
            dm = true;
            break;
          }
        }
        if (!dm) {
          ay.push(cU);
        }
      };
      this.enableCrossDomainLinking = function () {
        cN = true;
      };
      this.disableCrossDomainLinking = function () {
        cN = false;
      };
      this.isCrossDomainLinkingEnabled = function () {
        return cN;
      };
      this.setCrossDomainLinkingTimeout = function (di) {
        a0 = di;
      };
      this.getCrossDomainLinkingUrlParameter = function () {
        return s(av) + '=' + s(bt());
      };
      this.setIgnoreClasses = function (di) {
        bB = w(di) ? [di] : di;
      };
      this.setRequestMethod = function (di) {
        if (di) {
          c9 = String(di).toUpperCase();
        } else {
          c9 = ci;
        }
        if (c9 === 'GET') {
          this.disableAlwaysUseSendBeacon();
        }
      };
      this.setRequestContentType = function (di) {
        cw = di || aI;
      };
      this.setGenerationTimeMs = function (di) {
        ak(
          'setGenerationTimeMs is no longer supported since Matomo 4. The call will be ignored. There is currently no replacement yet.'
        );
      };
      this.setReferrerUrl = function (di) {
        bp = di;
      };
      this.setCustomUrl = function (di) {
        a5 = bW(bO, di);
      };
      this.getCurrentUrl = function () {
        return a5 || bO;
      };
      this.setDocumentTitle = function (di) {
        bk = di;
      };
      this.setAPIUrl = function (di) {
        bJ = di;
      };
      this.setDownloadClasses = function (di) {
        bM = w(di) ? [di] : di;
      };
      this.setLinkClasses = function (di) {
        a9 = w(di) ? [di] : di;
      };
      this.setCampaignNameKey = function (di) {
        cp = w(di) ? [di] : di;
      };
      this.setCampaignKeywordKey = function (di) {
        bI = w(di) ? [di] : di;
      };
      this.discardHashTag = function (di) {
        bQ = di;
      };
      this.setCookieNamePrefix = function (di) {
        bl = di;
        if (aR) {
          aR = bY();
        }
      };
      this.setCookieDomain = function (di) {
        var dj = L(di);
        if (by(dj)) {
          cX = dj;
          bj();
        }
      };
      this.getCookieDomain = function () {
        return cX;
      };
      this.hasCookies = function () {
        return '1' === b6();
      };
      this.setSessionCookie = function (dk, dj, di) {
        if (!dk) {
          throw new Error('Missing cookie name');
        }
        if (!J(di)) {
          di = cn;
        }
        bw.push(dk);
        dd(aU(dk), dj, di, br, cX, bT, aJ);
      };
      this.getCookie = function (dj) {
        var di = aD(aU(dj));
        if (di === 0) {
          return null;
        }
        return di;
      };
      this.setCookiePath = function (di) {
        br = di;
        bj();
      };
      this.getCookiePath = function (di) {
        return br;
      };
      this.setVisitorCookieTimeout = function (di) {
        cK = di * 1000;
      };
      this.setSessionCookieTimeout = function (di) {
        cn = di * 1000;
      };
      this.getSessionCookieTimeout = function () {
        return cn;
      };
      this.setReferralCookieTimeout = function (di) {
        c5 = di * 1000;
      };
      this.setConversionAttributionFirstReferrer = function (di) {
        bx = di;
      };
      this.setSecureCookie = function (di) {
        if (di && location.protocol !== 'https:') {
          ak('Error in setSecureCookie: You cannot use `Secure` on http.');
          return;
        }
        bT = di;
      };
      this.setCookieSameSite = function (di) {
        di = String(di);
        di = di.charAt(0).toUpperCase() + di.toLowerCase().slice(1);
        if (di !== 'None' && di !== 'Lax' && di !== 'Strict') {
          ak(
            'Ignored value for sameSite. Please use either Lax, None, or Strict.'
          );
          return;
        }
        if (di === 'None') {
          if (location.protocol === 'https:') {
            this.setSecureCookie(true);
          } else {
            ak(
              'sameSite=None cannot be used on http, reverted to sameSite=Lax.'
            );
            di = 'Lax';
          }
        }
        aJ = di;
      };
      this.disableCookies = function () {
        bn = true;
        if (b7) {
          aF();
        }
      };
      this.areCookiesEnabled = function () {
        return !bn;
      };
      this.setCookieConsentGiven = function () {
        if (bn && !cQ) {
          bn = false;
          if (b7 && aw) {
            aN();
            var di = cr('ping=1', null, 'ping');
            bH(di, bL);
          }
        }
      };
      this.requireCookieConsent = function () {
        if (this.getRememberedCookieConsent()) {
          return false;
        }
        this.disableCookies();
        return true;
      };
      this.getRememberedCookieConsent = function () {
        return aD(cD);
      };
      this.forgetCookieConsentGiven = function () {
        bZ(cD, br, cX);
        this.disableCookies();
      };
      this.rememberCookieConsentGiven = function (dj) {
        if (dj) {
          dj = dj * 60 * 60 * 1000;
        } else {
          dj = 30 * 365 * 24 * 60 * 60 * 1000;
        }
        this.setCookieConsentGiven();
        var di = new Date().getTime();
        dd(cD, di, dj, br, cX, bT, aJ);
      };
      this.deleteCookies = function () {
        aF();
      };
      this.setDoNotTrack = function (dj) {
        var di = g.doNotTrack || g.msDoNotTrack;
        cQ = dj && (di === 'yes' || di === '1');
        if (cQ) {
          this.disableCookies();
        }
      };
      this.alwaysUseSendBeacon = function () {
        cW = true;
      };
      this.disableAlwaysUseSendBeacon = function () {
        cW = false;
      };
      this.addListener = function (dj, di) {
        aq(dj, di);
      };
      this.enableLinkTracking = function (dj) {
        c8 = true;
        var di = this;
        ch(function () {
          p(function () {
            bF(dj, di);
          });
          m(function () {
            bF(dj, di);
          });
        });
      };
      this.enableJSErrorTracking = function () {
        if (cS) {
          return;
        }
        cS = true;
        var di = S.onerror;
        S.onerror = function (dn, dl, dk, dm, dj) {
          ch(function () {
            var dp = 'JavaScript Errors';
            var dq = dl + ':' + dk;
            if (dm) {
              dq += ':' + dm;
            }
            at(dp, dq, dn);
          });
          if (di) {
            return di(dn, dl, dk, dm, dj);
          }
          return false;
        };
      };
      this.disablePerformanceTracking = function () {
        a3 = false;
      };
      this.enableHeartBeatTimer = function (di) {
        di = Math.max(di || 15, 5);
        a6 = di * 1000;
        if (cY !== null) {
          df();
        }
      };
      this.disableHeartBeatTimer = function () {
        if (a6 || aO) {
          if (S.removeEventListener) {
            S.removeEventListener('focus', bb);
            S.removeEventListener('blur', az);
          } else {
            if (S.detachEvent) {
              S.detachEvent('onfocus', bb);
              S.detachEvent('onblur', az);
            }
          }
        }
        a6 = null;
        aO = false;
      };
      this.killFrame = function () {
        if (S.location !== S.top.location) {
          S.top.location = S.location;
        }
      };
      this.redirectFile = function (di) {
        if (S.location.protocol === 'file:') {
          S.location = di;
        }
      };
      this.setCountPreRendered = function (di) {
        bf = di;
      };
      this.trackGoal = function (di, dl, dk, dj) {
        ch(function () {
          cT(di, dl, dk, dj);
        });
      };
      this.trackLink = function (dj, di, dl, dk) {
        ch(function () {
          c1(dj, di, dl, dk);
        });
      };
      this.getNumTrackedPageViews = function () {
        return cq;
      };
      this.trackPageView = function (di, dk, dj) {
        cb = [];
        cL = [];
        if (N(b7)) {
          ch(function () {
            Z(aE, bJ, b7);
          });
        } else {
          ch(function () {
            cq++;
            b1(di, dk, dj);
          });
        }
      };
      this.trackAllContentImpressions = function () {
        if (N(b7)) {
          return;
        }
        ch(function () {
          p(function () {
            var di = v.findContentNodes();
            var dj = cz(di);
            bE.pushMultiple(dj);
          });
        });
      };
      this.trackVisibleContentImpressions = function (di, dj) {
        if (N(b7)) {
          return;
        }
        if (!J(di)) {
          di = true;
        }
        if (!J(dj)) {
          dj = 750;
        }
        aT(di, dj, this);
        ch(function () {
          m(function () {
            var dk = v.findContentNodes();
            var dl = ba(dk);
            bE.pushMultiple(dl);
          });
        });
      };
      this.trackContentImpression = function (dk, di, dj) {
        if (N(b7)) {
          return;
        }
        dk = a(dk);
        di = a(di);
        dj = a(dj);
        if (!dk) {
          return;
        }
        di = di || 'Unknown';
        ch(function () {
          var dl = aG(dk, di, dj);
          bE.push(dl);
        });
      };
      this.trackContentImpressionsWithinNode = function (di) {
        if (N(b7) || !di) {
          return;
        }
        ch(function () {
          if (cf) {
            m(function () {
              var dj = v.findContentNodesWithinNode(di);
              var dk = ba(dj);
              bE.pushMultiple(dk);
            });
          } else {
            p(function () {
              var dj = v.findContentNodesWithinNode(di);
              var dk = cz(dj);
              bE.pushMultiple(dk);
            });
          }
        });
      };
      this.trackContentInteraction = function (dk, dl, di, dj) {
        if (N(b7)) {
          return;
        }
        dk = a(dk);
        dl = a(dl);
        di = a(di);
        dj = a(dj);
        if (!dk || !dl) {
          return;
        }
        di = di || 'Unknown';
        ch(function () {
          var dm = aQ(dk, dl, di, dj);
          if (dm) {
            bE.push(dm);
          }
        });
      };
      this.trackContentInteractionNode = function (dk, dj) {
        if (N(b7) || !dk) {
          return;
        }
        var di = null;
        ch(function () {
          di = da(dk, dj);
          if (di) {
            bE.push(di);
          }
        });
        return di;
      };
      this.logAllContentBlocksOnPage = function () {
        var dk = v.findContentNodes();
        var di = v.collectContent(dk);
        var dj = typeof console;
        if (dj !== 'undefined' && console && console.log) {
          console.log(di);
        }
      };
      this.trackEvent = function (dj, dl, di, dk, dn, dm) {
        ch(function () {
          at(dj, dl, di, dk, dn, dm);
        });
      };
      this.trackSiteSearch = function (di, dk, dj, dl) {
        cb = [];
        ch(function () {
          b9(di, dk, dj, dl);
        });
      };
      this.setEcommerceView = function (dm, di, dk, dj) {
        cs = {};
        if (Y(dk)) {
          dk = String(dk);
        }
        if (!J(dk) || dk === null || dk === false || !dk.length) {
          dk = '';
        } else {
          if (dk instanceof Array) {
            dk = S.JSON.stringify(dk);
          }
        }
        var dl = '_pkc';
        cs[dl] = dk;
        if (J(dj) && dj !== null && dj !== false && String(dj).length) {
          dl = '_pkp';
          cs[dl] = dj;
        }
        if (!Y(dm) && !Y(di)) {
          return;
        }
        if (Y(dm)) {
          dl = '_pks';
          cs[dl] = dm;
        }
        if (!Y(di)) {
          di = '';
        }
        dl = '_pkn';
        cs[dl] = di;
      };
      this.getEcommerceItems = function () {
        return JSON.parse(JSON.stringify(c0));
      };
      this.addEcommerceItem = function (dm, di, dk, dj, dl) {
        if (Y(dm)) {
          c0[dm] = [String(dm), di, dk, dj, dl];
        }
      };
      this.removeEcommerceItem = function (di) {
        if (Y(di)) {
          di = String(di);
          delete c0[di];
        }
      };
      this.clearEcommerceCart = function () {
        c0 = {};
      };
      this.trackEcommerceOrder = function (di, dm, dl, dk, dj, dn) {
        b0(di, dm, dl, dk, dj, dn);
      };
      this.trackEcommerceCartUpdate = function (di) {
        bu(di);
      };
      this.trackRequest = function (dj, dl, dk, di) {
        ch(function () {
          var dm = cr(dj, dl, di);
          bH(dm, bL, dk);
        });
      };
      this.ping = function () {
        this.trackRequest('ping=1', null, null, 'ping');
      };
      this.disableQueueRequest = function () {
        bE.enabled = false;
      };
      this.setRequestQueueInterval = function (di) {
        if (di < 1000) {
          throw new Error('Request queue interval needs to be at least 1000ms');
        }
        bE.interval = di;
      };
      this.queueRequest = function (di) {
        ch(function () {
          var dj = cr(di);
          bE.push(dj);
        });
      };
      this.isConsentRequired = function () {
        return cA;
      };
      this.getRememberedConsent = function () {
        var di = aD(be);
        if (aD(cM)) {
          if (di) {
            bZ(be, br, cX);
          }
          return null;
        }
        if (!di || di === 0) {
          return null;
        }
        return di;
      };
      this.hasRememberedConsent = function () {
        return !!this.getRememberedConsent();
      };
      this.requireConsent = function () {
        cA = true;
        bD = this.hasRememberedConsent();
        if (!bD) {
          bn = true;
        }
        x++;
        b['CoreConsent' + x] = {
          unload: function () {
            if (!bD) {
              aF();
            }
          },
        };
      };
      this.setConsentGiven = function (dj) {
        bD = true;
        bZ(cM, br, cX);
        var dk, di;
        for (dk = 0; dk < cL.length; dk++) {
          di = typeof cL[dk];
          if (di === 'string') {
            bH(cL[dk], bL);
          } else {
            if (di === 'object') {
              de(cL[dk], bL);
            }
          }
        }
        cL = [];
        if (!J(dj) || dj) {
          this.setCookieConsentGiven();
        }
      };
      this.rememberConsentGiven = function (dk) {
        if (dk) {
          dk = dk * 60 * 60 * 1000;
        } else {
          dk = 30 * 365 * 24 * 60 * 60 * 1000;
        }
        var di = true;
        this.setConsentGiven(di);
        var dj = new Date().getTime();
        dd(be, dj, dk, br, cX, bT, aJ);
      };
      this.forgetConsentGiven = function () {
        var di = 30 * 365 * 24 * 60 * 60 * 1000;
        bZ(be, br, cX);
        dd(cM, new Date().getTime(), di, br, cX, bT, aJ);
        this.forgetCookieConsentGiven();
        this.requireConsent();
      };
      this.isUserOptedOut = function () {
        return !bD;
      };
      this.optUserOut = this.forgetConsentGiven;
      this.forgetUserOptOut = function () {
        this.setConsentGiven(false);
      };
      m(function () {
        setTimeout(function () {
          bG = true;
        }, 0);
      });
      t.trigger('TrackerSetup', [this]);
    }
    function H() {
      return { push: af };
    }
    function c(au, at) {
      var av = {};
      var aq, ar;
      for (aq = 0; aq < at.length; aq++) {
        var ao = at[aq];
        av[ao] = 1;
        for (ar = 0; ar < au.length; ar++) {
          if (au[ar] && au[ar][0]) {
            var ap = au[ar][0];
            if (ao === ap) {
              af(au[ar]);
              delete au[ar];
              if (av[ap] > 1 && ap !== 'addTracker') {
                ak(
                  'The method ' +
                    ap +
                    ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Matomo trackers documentation: https://developer.matomo.org/guides/tracking-javascript-guide#multiple-piwik-trackers'
                );
              }
              av[ap]++;
            }
          }
        }
      }
      return au;
    }
    var C = [
      'addTracker',
      'forgetCookieConsentGiven',
      'requireCookieConsent',
      'disableCookies',
      'setTrackerUrl',
      'setAPIUrl',
      'enableCrossDomainLinking',
      'setCrossDomainLinkingTimeout',
      'setSessionCookieTimeout',
      'setVisitorCookieTimeout',
      'setCookieNamePrefix',
      'setCookieSameSite',
      'setSecureCookie',
      'setCookiePath',
      'setCookieDomain',
      'setDomains',
      'setUserId',
      'setVisitorId',
      'setSiteId',
      'alwaysUseSendBeacon',
      'enableLinkTracking',
      'setCookieConsentGiven',
      'requireConsent',
      'setConsentGiven',
      'disablePerformanceTracking',
    ];
    function ad(aq, ap) {
      var ao = new P(aq, ap);
      I.push(ao);
      _paq = c(_paq, C);
      for (E = 0; E < _paq.length; E++) {
        if (_paq[E]) {
          af(_paq[E]);
        }
      }
      _paq = new H();
      t.trigger('TrackerAdded', [ao]);
      return ao;
    }
    an(S, 'beforeunload', ai, false);
    an(
      S,
      'online',
      function () {
        if (J(g.serviceWorker) && J(g.serviceWorker.ready)) {
          g.serviceWorker.ready.then(function (ao) {
            return ao.sync.register('matomoSync');
          });
        }
      },
      false
    );
    an(
      S,
      'message',
      function (au) {
        if (!au || !au.origin) {
          return;
        }
        var aw, ar, ap;
        var ax = d(au.origin);
        var at = t.getAsyncTrackers();
        for (ar = 0; ar < at.length; ar++) {
          ap = d(at[ar].getMatomoUrl());
          if (ap === ax) {
            aw = at[ar];
            break;
          }
        }
        if (!aw) {
          return;
        }
        var aq = null;
        try {
          aq = JSON.parse(au.data);
        } catch (av) {
          return;
        }
        if (!aq) {
          return;
        }
        function ao(aA) {
          var aC = G.getElementsByTagName('iframe');
          for (ar = 0; ar < aC.length; ar++) {
            var aB = aC[ar];
            var ay = d(aB.src);
            if (
              aB.contentWindow &&
              J(aB.contentWindow.postMessage) &&
              ay === ax
            ) {
              var az = JSON.stringify(aA);
              aB.contentWindow.postMessage(az, '*');
            }
          }
        }
        if (J(aq.maq_initial_value)) {
          ao({
            maq_opted_in: aq.maq_initial_value && aw.hasConsent(),
            maq_url: aw.getMatomoUrl(),
            maq_optout_by_default: aw.isConsentRequired(),
          });
        } else {
          if (J(aq.maq_opted_in)) {
            at = t.getAsyncTrackers();
            for (ar = 0; ar < at.length; ar++) {
              aw = at[ar];
              if (aq.maq_opted_in) {
                aw.rememberConsentGiven();
              } else {
                aw.forgetConsentGiven();
              }
            }
            ao({
              maq_confirm_opted_in: aw.hasConsent(),
              maq_url: aw.getMatomoUrl(),
              maq_optout_by_default: aw.isConsentRequired(),
            });
          }
        }
      },
      false
    );
    Date.prototype.getTimeAlias = Date.prototype.getTime;
    t = {
      initialized: false,
      JSON: S.JSON,
      DOM: {
        addEventListener: function (ar, aq, ap, ao) {
          var at = typeof ao;
          if (at === 'undefined') {
            ao = false;
          }
          an(ar, aq, ap, ao);
        },
        onLoad: m,
        onReady: p,
        isNodeVisible: i,
        isOrWasNodeVisible: v.isNodeVisible,
      },
      on: function (ap, ao) {
        if (!y[ap]) {
          y[ap] = [];
        }
        y[ap].push(ao);
      },
      off: function (aq, ap) {
        if (!y[aq]) {
          return;
        }
        var ao = 0;
        for (ao; ao < y[aq].length; ao++) {
          if (y[aq][ao] === ap) {
            y[aq].splice(ao, 1);
          }
        }
      },
      trigger: function (aq, ar, ap) {
        if (!y[aq]) {
          return;
        }
        var ao = 0;
        for (ao; ao < y[aq].length; ao++) {
          y[aq][ao].apply(ap || S, ar);
        }
      },
      addPlugin: function (ao, ap) {
        b[ao] = ap;
      },
      getTracker: function (ap, ao) {
        if (!J(ao)) {
          ao = this.getAsyncTracker().getSiteId();
        }
        if (!J(ap)) {
          ap = this.getAsyncTracker().getTrackerUrl();
        }
        return new P(ap, ao);
      },
      getAsyncTrackers: function () {
        return I;
      },
      addTracker: function (aq, ap) {
        var ao;
        if (!I.length) {
          ao = ad(aq, ap);
        } else {
          ao = I[0].addTracker(aq, ap);
        }
        return ao;
      },
      getAsyncTracker: function (at, ar) {
        var aq;
        if (I && I.length && I[0]) {
          aq = I[0];
        } else {
          return ad(at, ar);
        }
        if (!ar && !at) {
          return aq;
        }
        if ((!J(ar) || null === ar) && aq) {
          ar = aq.getSiteId();
        }
        if ((!J(at) || null === at) && aq) {
          at = aq.getTrackerUrl();
        }
        var ap,
          ao = 0;
        for (ao; ao < I.length; ao++) {
          ap = I[ao];
          if (
            ap &&
            String(ap.getSiteId()) === String(ar) &&
            ap.getTrackerUrl() === at
          ) {
            return ap;
          }
        }
      },
      retryMissedPluginCalls: function () {
        var ap = ah;
        ah = [];
        var ao = 0;
        for (ao; ao < ap.length; ao++) {
          af(ap[ao]);
        }
      },
    };
    if (typeof define === 'function' && define.amd) {
      define('piwik', [], function () {
        return t;
      });
      define('matomo', [], function () {
        return t;
      });
    }
    return t;
  })();
}
/*!!! pluginTrackerHook */
(function () {
  function b() {
    if ('object' !== typeof _paq) {
      return false;
    }
    var c = typeof _paq.length;
    if ('undefined' === c) {
      return false;
    }
    return !!_paq.length;
  }
  if (
    window &&
    'object' === typeof window.matomoPluginAsyncInit &&
    window.matomoPluginAsyncInit.length
  ) {
    var a = 0;
    for (a; a < window.matomoPluginAsyncInit.length; a++) {
      if (typeof window.matomoPluginAsyncInit[a] === 'function') {
        window.matomoPluginAsyncInit[a]();
      }
    }
  }
  if (window && window.piwikAsyncInit) {
    window.piwikAsyncInit();
  }
  if (window && window.matomoAsyncInit) {
    window.matomoAsyncInit();
  }
  if (!window.Matomo.getAsyncTrackers().length) {
    if (b()) {
      window.Matomo.addTracker();
    } else {
      _paq = {
        push: function (c) {
          var d = typeof console;
          if (d !== 'undefined' && console && console.error) {
            console.error(
              '_paq.push() was used but Matomo tracker was not initialized before the matomo.js file was loaded. Make sure to configure the tracker via _paq.push before loading matomo.js. Alternatively, you can create a tracker via Matomo.addTracker() manually and then use _paq.push but it may not fully work as tracker methods may not be executed in the correct order.',
              c
            );
          }
        },
      };
    }
  }
  window.Matomo.trigger('MatomoInitialized', []);
  window.Matomo.initialized = true;
})();
(function () {
  var a = typeof window.AnalyticsTracker;
  if (a === 'undefined') {
    window.AnalyticsTracker = window.Matomo;
  }
})();
if (typeof window.piwik_log !== 'function') {
  window.piwik_log = function (c, e, g, f) {
    function b(h) {
      try {
        if (window['piwik_' + h]) {
          return window['piwik_' + h];
        }
      } catch (i) {}
      return;
    }
    var d,
      a = window.Matomo.getTracker(g, e);
    a.setDocumentTitle(c);
    a.setCustomData(f);
    d = b('tracker_pause');
    if (d) {
      a.setLinkTrackingTimer(d);
    }
    d = b('download_extensions');
    if (d) {
      a.setDownloadExtensions(d);
    }
    d = b('hosts_alias');
    if (d) {
      a.setDomains(d);
    }
    d = b('ignore_classes');
    if (d) {
      a.setIgnoreClasses(d);
    }
    a.trackPageView();
    if (b('install_tracker')) {
      piwik_track = function (i, j, k, h) {
        a.setSiteId(j);
        a.setTrackerUrl(k);
        a.trackLink(i, h);
      };
      a.enableLinkTracking();
    }
  };
}
/*!! @license-end */
