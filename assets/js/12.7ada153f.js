(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{188:function(n,t,s){"use strict";s.r(t);var e=s(0),a=Object(e.a)({},(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"content"},[n._m(0),n._v(" "),n._m(1),n._v(" "),n._m(2),n._v(" "),n._m(3),n._m(4),s("TagLinks")],1)}),[function(){var n=this.$createElement,t=this._self._c||n;return t("h1",{attrs:{id:"terraform-cidrsubnet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#terraform-cidrsubnet"}},[this._v("#")]),this._v(" Terraform "),t("code",[this._v("cidrsubnet")])])},function(){var n=this.$createElement,t=this._self._c||n;return t("p",[this._v("Terraform 에 "),t("code",[this._v("cidrsubnet")]),this._v(" 이라는 함수가 있는데, 설명을 읽어도 이해가 안되서,\n삽질을 좀 하며 이해한 내용을 정리합니다.")])},function(){var n=this.$createElement,t=this._self._c||n;return t("p",[this._v("더불어 "),t("code",[this._v("ipcalc")]),this._v(" 라는 완소 유틸리티도 사용해보세요.")])},function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('cidrsubnet("10.0.0.0/20", <newbit>, <newnum>)\n')])])])},function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('10.0.0.0/20 = \n\n❯ ipcalc 10.0.0.0/20\nAddress:   10.0.0.0             00001010.00000000.0000 0000.00000000\nNetmask:   255.255.240.0 = 20   11111111.11111111.1111 0000.00000000\nWildcard:  0.0.15.255           00000000.00000000.0000 1111.11111111\n=>\nNetwork:   10.0.0.0/20          00001010.00000000.0000 0000.00000000\nHostMin:   10.0.0.1             00001010.00000000.0000 0000.00000001\nHostMax:   10.0.15.254          00001010.00000000.0000 1111.11111110\nBroadcast: 10.0.15.255          00001010.00000000.0000 1111.11111111\nHosts/Net: 4094                  Class A, Private Internet\n\n이걸 2^<newbit> 만큼 쪼갠 후, 그 중 <newnum> 번 째 블럭을 가르키는 cidrblock 표현식을 리턴\n\nex:\n\ncidrsubnet("10.0.0.0/20", 2, 1)\n\n-> 10.0.0.0/20 을 2^2 = 4 개로 쪼갬. \n\n10.0.0.0/22\n\n❯ ipcalc 10.0.0.0/22\nAddress:   10.0.0.0             00001010.00000000.000000 00.00000000\nNetmask:   255.255.252.0 = 22   11111111.11111111.111111 00.00000000\nWildcard:  0.0.3.255            00000000.00000000.000000 11.11111111\n=>\nNetwork:   10.0.0.0/22          00001010.00000000.000000 00.00000000\nHostMin:   10.0.0.1             00001010.00000000.000000 00.00000001\nHostMax:   10.0.3.254           00001010.00000000.000000 11.11111110\nBroadcast: 10.0.3.255           00001010.00000000.000000 11.11111111\nHosts/Net: 1022                  Class A, Private Internet\n\n10.0.4.0/22\n\n❯ ipcalc 10.0.4.0/22\nAddress:   10.0.4.0             00001010.00000000.000001 00.00000000\nNetmask:   255.255.252.0 = 22   11111111.11111111.111111 00.00000000\nWildcard:  0.0.3.255            00000000.00000000.000000 11.11111111\n=>\nNetwork:   10.0.4.0/22          00001010.00000000.000001 00.00000000\nHostMin:   10.0.4.1             00001010.00000000.000001 00.00000001\nHostMax:   10.0.7.254           00001010.00000000.000001 11.11111110\nBroadcast: 10.0.7.255           00001010.00000000.000001 11.11111111\nHosts/Net: 1022                  Class A, Private Internet\n\n10.0.8.0/22\n\n❯ ipcalc 10.0.8.0/22\nAddress:   10.0.8.0             00001010.00000000.000010 00.00000000\nNetmask:   255.255.252.0 = 22   11111111.11111111.111111 00.00000000\nWildcard:  0.0.3.255            00000000.00000000.000000 11.11111111\n=>\nNetwork:   10.0.8.0/22          00001010.00000000.000010 00.00000000\nHostMin:   10.0.8.1             00001010.00000000.000010 00.00000001\nHostMax:   10.0.11.254          00001010.00000000.000010 11.11111110\nBroadcast: 10.0.11.255          00001010.00000000.000010 11.11111111\nHosts/Net: 1022                  Class A, Private Internet\n\n10.0.12.0/22\n\n❯ ipcalc 10.0.12.0/22\nAddress:   10.0.12.0            00001010.00000000.000011 00.00000000\nNetmask:   255.255.252.0 = 22   11111111.11111111.111111 00.00000000\nWildcard:  0.0.3.255            00000000.00000000.000000 11.11111111\n=>\nNetwork:   10.0.12.0/22         00001010.00000000.000011 00.00000000\nHostMin:   10.0.12.1            00001010.00000000.000011 00.00000001\nHostMax:   10.0.15.254          00001010.00000000.000011 11.11111110\nBroadcast: 10.0.15.255          00001010.00000000.000011 11.11111111\nHosts/Net: 1022                  Class A, Private Internet\n\n이렇게 4개로 쪼개짐.\n\n--------\n\n그 중 첫번째 블럭인 10.0.0.0/22 가 리턴됨.\n\n')])])])}],!1,null,null,null);t.default=a.exports}}]);