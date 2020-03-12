(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{BuFo:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var o=a("wHSu"),n=function(){function e(e){this.router=e,this.faProjectDiagram=o.q,this.faUsers=o.s,this.faEdit=o.g,this.faShoppingCart=o.r,this.faDollarSign=o.f,this.faChartLine=o.c,this.faBook=o.a,this.faCalendar=o.b,this.faFileInvoice=o.k,this.faWarehouse=o.u,this.faHome=o.o,this.sideBarStatus=!1,this.sideMenuStatus=!1,this.sideMenuPin=!1,this.toAdmin=!1,this.toAdminManager=!1,this.toAdminManagerUser=!1,this.dashboardNavBarActive=!1,this.projectsNavBarActive=!1,this.salesNavBarActive=!1,this.editorialNavBarActive=!1,this.usersNavBarActive=!1,this.documentNavBarActive=!1,this.calendarNavBarActive=!1,this.invoiceNavBarActive=!1,this.inventoryNavBarActive=!1,this.ImprintLoader=!1,this.inventoryDropdownActive=!1,this.dashboardDropdownActive=!1}return e.prototype.ngOnInit=function(){var e=this;this.loggedUserName=window.localStorage.getItem("loggedUserName"),"isAdmin"===window.localStorage.getItem("permissionStatus")?(this.toAdmin=!0,this.toAdminManagerUser=!0,this.toAdminManager=!0):"isManager"===window.localStorage.getItem("permissionStatus")?(this.toAdminManager=!0,this.toAdminManagerUser=!0):"isUser"===window.localStorage.getItem("permissionStatus")&&(this.toAdminManagerUser=!0),this.checkScreenWidth(),this.myInterval=setInterval(function(){e.CheckActiveNavBar()},700)},e.prototype.onActivate=function(e){this.childComponent=e},e.prototype.checkScreenWidth=function(){this.innerWidth=window.innerWidth,this.innerWidth<=576&&(this.sideMenuStatus=!1)},e.prototype.CheckActiveNavBar=function(){this.dashboardNavBarActive=!1,this.projectsNavBarActive=!1,this.salesNavBarActive=!1,this.editorialNavBarActive=!1,this.usersNavBarActive=!1,this.documentNavBarActive=!1,this.calendarNavBarActive=!1,this.invoiceNavBarActive=!1,this.inventoryNavBarActive=!1,"dashboard"===window.localStorage.getItem("ActiveNav")&&(this.dashboardNavBarActive=!0,this.sideMenuStatus=!1),"projects"===window.localStorage.getItem("ActiveNav")&&(this.projectsNavBarActive=!0,this.sideMenuStatus=!0,this.sideMenuPin=!0),"sales"===window.localStorage.getItem("ActiveNav")&&(this.salesNavBarActive=!0,this.sideMenuStatus=!0,this.sideMenuPin=!0),"editorial"===window.localStorage.getItem("ActiveNav")&&(this.editorialNavBarActive=!0,this.sideMenuStatus=!0,this.sideMenuPin=!0),"users"===window.localStorage.getItem("ActiveNav")&&(this.usersNavBarActive=!0,this.sideMenuStatus=!0,this.sideMenuPin=!0),"document"===window.localStorage.getItem("ActiveNav")&&(this.documentNavBarActive=!0,this.sideMenuStatus=!0,this.sideMenuPin=!0),"ngcalender"===window.localStorage.getItem("ActiveNav")&&(this.calendarNavBarActive=!0,this.sideMenuStatus=!0,this.sideMenuPin=!0),"invoice"===window.localStorage.getItem("ActiveNav")&&(this.invoiceNavBarActive=!0,this.sideMenuStatus=!0,this.sideMenuPin=!0),"inventory"===window.localStorage.getItem("ActiveNav")&&(this.inventoryNavBarActive=!0,this.sideMenuStatus=!0,this.sideMenuPin=!0)},e.prototype.toggleSideBar=function(){this.sideBarStatus=!this.sideBarStatus,this.inventoryDropdownActive=!1,this.dashboardDropdownActive=!1},e.prototype.toggleSideMenu=function(){this.sideMenuStatus=!this.sideMenuStatus},e.prototype.openSideMenu=function(){this.sideMenuStatus=!0},e.prototype.navToMainDashboard=function(){this.router.navigate(["/home/dashboard"]),this.sideBarStatus=!1},e.prototype.navToSalesDashboard=function(){this.router.navigate(["/home/dashboard/sales_dashboard"]),this.sideBarStatus=!1},e.prototype.navToProjectDashboard=function(){this.router.navigate(["/home/dashboard/projects_dashboard"]),this.sideBarStatus=!1},e.prototype.navToSales=function(){this.router.navigate(["/home/sales"]),this.sideBarStatus=!1},e.prototype.navToProjects=function(){this.router.navigate(["/home/projects"]),this.sideBarStatus=!1},e.prototype.navToEditorial=function(){this.router.navigate(["/home/editorial"]),this.sideBarStatus=!1},e.prototype.navToInventoryProduct=function(){this.router.navigate(["/home/inventory"]),this.sideBarStatus=!1},e.prototype.navToInventoryStock=function(){this.router.navigate(["/home/inventory/inventory_stock"]),this.sideBarStatus=!1},e.prototype.navToInventoryTax=function(){this.router.navigate(["/home/inventory/inventory_tax_rate"]),this.sideBarStatus=!1},e.prototype.navToDocument=function(){this.router.navigate(["/home/document"]),this.sideBarStatus=!1},e.prototype.navToInvoice=function(){this.router.navigate(["/home/invoice"]),this.sideBarStatus=!1},e.prototype.navToCalendar=function(){this.router.navigate(["/home/ngCalendar"]),this.sideBarStatus=!1},e.prototype.navToUsers=function(){this.router.navigate(["/users"])},e.prototype.loadStart=function(){this.ImprintLoader=!0},e.prototype.loadStop=function(){this.ImprintLoader=!1},e.prototype.logout=function(){window.localStorage.removeItem("loggedUserToken"),window.localStorage.removeItem("loggedUserName"),window.localStorage.removeItem("permissionStatus"),window.localStorage.removeItem("loggedUserID"),this.router.navigate(["/login"])},e.prototype.toggleInventoryDropdown=function(){this.sideBarStatus=!0,this.inventoryDropdownActive=!this.inventoryDropdownActive},e.prototype.toggleDashboardDropdown=function(){this.sideBarStatus=!0,this.dashboardDropdownActive=!this.dashboardDropdownActive},e.prototype.ngOnDestroy=function(){clearInterval(this.myInterval)},e}()},Gi3i:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var o=a("mrSG"),n=a("FFOo"),i=a("T1DM");function r(e,t){return void 0===t&&(t=i.a),function(a){return a.lift(new d(e,t))}}var d=function(){function e(e,t){this.dueTime=e,this.scheduler=t}return e.prototype.call=function(e,t){return t.subscribe(new s(e,this.dueTime,this.scheduler))},e}(),s=function(e){function t(t,a,o){var n=e.call(this,t)||this;return n.dueTime=a,n.scheduler=o,n.debouncedSubscription=null,n.lastValue=null,n.hasValue=!1,n}return o.__extends(t,e),t.prototype._next=function(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(c,this.dueTime,this))},t.prototype._complete=function(){this.debouncedNext(),this.destination.complete()},t.prototype.debouncedNext=function(){if(this.clearDebounce(),this.hasValue){var e=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}},t.prototype.clearDebounce=function(){var e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)},t}(n.a);function c(e){e.debouncedNext()}},Jc0W:function(e,t,a){},Lg2B:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var o=[{name:"lightsalmon",code:"#FFA07A"},{name:"salmon",code:"#FA8072"},{name:"darksalmon",code:"#E9967A"},{name:"dightcoral",code:"#F08080"},{name:"indianred",code:"#CD5C5C"},{name:"crimson",code:"#DC143C"},{name:"firebrick",code:"#B22222"},{name:"red",code:"#FF0000"},{name:"darkred",code:"#8B0000"},{name:"coral",code:"#FF7F50"},{name:"tomato",code:"#FF6347"},{name:"orangered",code:"#FF4500"},{name:"gold",code:"#FFD700"},{name:"orange",code:"#FFA500"},{name:"darkorange",code:"#FF8C00"},{name:"lightyellow",code:"#ffffe0"},{name:"lemonchiffon",code:"#fffacd"},{name:"lightgoldenrodyellow",code:"#fafad2"},{name:"papayawhip",code:"#ffefd5"},{name:"moccasin",code:"#ffe4b5"},{name:"peachpuff",code:"#ffdab9"},{name:"palegoldenrod",code:"#eee8aa"},{name:"khaki",code:"#f0e68c"},{name:"darkkhaki",code:"#bdb76b"},{name:"yellow",code:"#ffff00"},{name:"lawngreen",code:"#7CFC00"},{name:"chartreuse",code:"#7FFF00"},{name:"limegreen",code:"#32CD32"},{name:"lime",code:"#00FF00"},{name:"forestgreen",code:"#228B22"},{name:"green",code:"#008000"},{name:"darkgreen",code:"#006400"},{name:"greenyellow",code:"#ADFF2F"},{name:"yellowgreen",code:"#9ACD32"},{name:"springgreen",code:"#00FF7F"},{name:"mediumspringgreen",code:"#00FA9A"},{name:"lightgreen",code:"#90EE90"},{name:"palegreen",code:"#98FB98"},{name:"darkseagreen",code:"#8FBC8F"},{name:"mediumseagreen",code:"#3CB371"},{name:"seagreen",code:"#2E8B57"},{name:"olive",code:"#808000"},{name:"darkolivegreen",code:"#556B2F"},{name:"olivedrab",code:"#6B8E23"},{name:"lightcyan",code:"#E0FFFF"},{name:"cyan",code:"#00FFFF"},{name:"aqua",code:"#00FFFF"},{name:"aquamarine",code:"#7FFFD4"},{name:"mediumaquamarine",code:"#66CDAA"},{name:"paleturquoise",code:"#AFEEEE"},{name:"turquoise",code:"\t#40E0D0"},{name:"mediumturquoise",code:"#48D1CC"},{name:"darkturquoise",code:"#00CED1"},{name:"lightseagreen",code:"\t#20B2AA"},{name:"cadetblue",code:"#5F9EA0"},{name:"darkcyan",code:"#008B8B"},{name:"teal",code:"#008080"},{name:"powderblue",code:"#B0E0E6"},{name:"lightblue",code:"#ADD8E6"},{name:"lightskyblue",code:"#87CEFA"},{name:"skyblue",code:"#87CEEB"},{name:"deepskyblue",code:"#00BFFF"},{name:"lightsteelblue",code:"#B0C4DE"},{name:"dodgerblue",code:"#1E90FF"},{name:"cornflowerblue",code:"#6495ED"},{name:"steelblue",code:"#4682B4"},{name:"royalblue",code:"#4169E1"},{name:"blue",code:"#0000FF"},{name:"mediumblue",code:"#0000CD"},{name:"darkblue",code:"#00008B"},{name:"navy",code:"#000080"},{name:"midnightblue",code:"#191970"},{name:"mediumslateblue",code:"#7B68EE"},{name:"slateblue",code:"#6A5ACD"},{name:"darkslateblue",code:"#483D8B"},{name:"lavender",code:"#E6E6FA"},{name:"thistle",code:"#D8BFD8"},{name:"plum",code:"#DDA0DD"},{name:"violet",code:"#EE82EE"},{name:"orchid",code:"#DA70D6"},{name:"fuchsia",code:"#FF00FF"},{name:"magenta",code:"#FF00FF"},{name:"mediumorchid",code:"#BA55D3"},{name:"mediumpurple",code:"#9370DB"},{name:"blueviolet",code:"#8A2BE2"},{name:"darkviolet",code:"#9400D3"},{name:"darkorchid",code:"#9932CC"},{name:"darkmagenta",code:"#8B008B"},{name:"purple",code:"#800080"},{name:"indigo",code:"#4B0082"},{name:"pink",code:"#FFC0CB"},{name:"lightpink",code:"#FFB6C1"},{name:"hotpink",code:"#FF69B4"},{name:"deeppink",code:"#FF1493"},{name:"palevioletred",code:"#DB7093"},{name:"mediumvioletred",code:"#C71585"},{name:"white",code:"#FFFFFF"},{name:"snow",code:"#FFFAFA"},{name:"honeydew",code:"#F0FFF0"},{name:"mintcream",code:"#F5FFFA"},{name:"azure",code:"#F0FFFF"},{name:"aliceblue",code:"#F0F8FF"},{name:"ghostwhite",code:"#F8F8FF"},{name:"whitesmoke",code:"#F5F5F5"},{name:"seashell",code:"#FFF5EE"},{name:"beige",code:"#F5F5DC"},{name:"oldlace",code:"#FDF5E6"},{name:"floralwhite",code:"#FFFAF0"},{name:"ivory",code:"#FFFFF0"},{name:"antiquewhite",code:"#FAEBD7"},{name:"linen",code:"#FAF0E6"},{name:"lavenderblush",code:"#FFF0F5"},{name:"mistyrose",code:"#FFE4E1"},{name:"gainsboro",code:"#DCDCDC"},{name:"lightgray",code:"#D3D3D3"},{name:"silver",code:"#C0C0C0"},{name:"darkgray",code:"#A9A9A9"},{name:"gray",code:"#808080"},{name:"dimgray",code:"#696969"},{name:"lightslategray",code:"#778899"},{name:"slategray",code:"#708090"},{name:"darkslategray",code:"#2F4F4F"},{name:"black",code:"#000000"},{name:"cornsilk",code:"#FFF8DC"},{name:"blanchedalmond",code:"#FFEBCD"},{name:"bisque",code:"#FFE4C4"},{name:"navajowhite",code:"#FFDEAD"},{name:"wheat",code:"#F5DEB3"},{name:"burlywood",code:"#DEB887"},{name:"tan",code:"#D2B48C"},{name:"rosybrown",code:"#BC8F8F"},{name:"sandybrown",code:"#F4A460"},{name:"goldenrod",code:"#DAA520"},{name:"peru",code:"#CD853F"},{name:"chocolate",code:"#D2691E"},{name:"saddlebrown",code:"#8B4513"},{name:"sienna",code:"#A0522D"},{name:"brown",code:"#A52A2A"},{name:"maroon",code:"#800000"}]}}]);