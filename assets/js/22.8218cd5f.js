(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{195:function(t,e,r){"use strict";r.r(e);var l=r(0),o=Object(l.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("There is something wrong with the 'UserDefinedAttributes' of the text table when save as .odt.\nI write a script of Python to show the bug. Follow by step:")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("p",[r("a",{attrs:{href:"http://7xjcd4.com1.z0.glb.clouddn.com/TableCellProperty.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("click here to down load the script of Python"),r("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(4),t._v(" "),r("p",[t._v("voido of steps:")]),t._v(" "),t._m(5),t._v(" "),r("p",[r("a",{attrs:{href:"http://7xjcd4.com1.z0.glb.clouddn.com/lo_bug_cell_attr.mp4",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://7xjcd4.com1.z0.glb.clouddn.com/lo_bug_cell_attr.mp4"),r("OutboundLink")],1)]),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("functions:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),r("p",[t._v('aqcoder committed a patch related to this issue.\nIt has been pushed to "master":')]),t._v(" "),r("p",[r("a",{attrs:{href:"http://cgit.freedesktop.org/libreoffice/core/commit/?id=d3e57ccf2e56a75bd4f004de53793f1742e34bc4",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://cgit.freedesktop.org/libreoffice/core/commit/?id=d3e57ccf2e56a75bd4f004de53793f1742e34bc4"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("tdf#96412 Fix export text table cell UserDefinedAttributes to xml.")]),t._v(" "),r("p",[t._v("It will be available in 5.2.0.")]),t._v(" "),r("p",[t._v("more visit:\n"),r("a",{attrs:{href:"https://gerrit.libreoffice.org/#/c/20765/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gerrit.libreoffice.org/#/c/20765/"),r("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"bug-of-libreoffice-writer-userdefinedattributes-of-table-cell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bug-of-libreoffice-writer-userdefinedattributes-of-table-cell","aria-hidden":"true"}},[this._v("#")]),this._v(" #Bug of LibreOffice Writer -- UserDefinedAttributes of Table Cell")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",[r("li",[t._v("Put the Python script to {LOROOT}/share/Scripts/python/pythonSamples/TableCellProperty.py")]),t._v(" "),r("li",[t._v("Open an empty doc on writer.")]),t._v(" "),r("li",[t._v("Insert table with have 6 cloums.")]),t._v(" "),r("li",[t._v("Tools->Macros->OrgnizeMacros->Pythons...")]),t._v(" "),r("li",[t._v("Select LibreOfficeDev Macros, on the pop dialog.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("  |-pythonSamples\n    |-TableCellProperty\n      |-SetPropertyPython\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"6"}},[e("li",[this._v("Then GetPropertyPython (for show the atrributes)")]),this._v(" "),e("li",[this._v("Save file. (There is something wring here ?)")]),this._v(" "),e("li",[this._v("Open the file.")]),this._v(" "),e("li",[this._v("GetPropertyPython again, the attribute of the cell('D1', 'E1') changed.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://7xjcd4.com1.z0.glb.clouddn.com/cell_attrs_1.png",alt:"cell_attrs_1"}}),this._v(" "),e("img",{attrs:{src:"http://7xjcd4.com1.z0.glb.clouddn.com/cell_attrs_2.png",alt:"cell_attrs_2"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("video",{attrs:{src:"http://7xjcd4.com1.z0.glb.clouddn.com/lo_bug_cell_attr.mp4",controls:"controls",width:"80%"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"about-tablecellproperty-py"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#about-tablecellproperty-py","aria-hidden":"true"}},[this._v("#")]),this._v(" About TableCellProperty.py")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("p",[this._v("SetPropertyPython: set the cell of A1,B1,C1 property value 'v1'")])]),this._v(" "),e("li",[e("p",[this._v("GetPropertyPython: get the cell UserDefinedAttributes attribte and set the string of the cell with the value.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"resolved"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resolved","aria-hidden":"true"}},[this._v("#")]),this._v(" Resolved")])}],!1,null,null,null);e.default=o.exports}}]);