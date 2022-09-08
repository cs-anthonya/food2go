"use strict";(self.webpackChunkfood2go=self.webpackChunkfood2go||[]).push([[480],{7853:(R,y,s)=>{s.d(y,{V:()=>_});var M=s(5e3);let _=(()=>{class f{}return f.\u0275fac=function(m){return new(m||f)},f.\u0275mod=M.oAB({type:f}),f.\u0275inj=M.cJS({}),f})()},3170:(R,y,s)=>{var M;s.d(y,{Yd:()=>S});var _=s(5e3),f=s(508),e=s(5439);const m=e||M||(M=s.t(e,2)),w=new _.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function(){return{useUtc:!1}}});function g(c,u){const a=Array(c);for(let r=0;r<c;r++)a[r]=u(r);return a}let O=(()=>{class c extends f._A{constructor(a,r){super(),this._options=r,this.setLocale(a||m.locale())}setLocale(a){super.setLocale(a);let r=m.localeData(a);this._localeData={firstDayOfWeek:r.firstDayOfWeek(),longMonths:r.months(),shortMonths:r.monthsShort(),dates:g(31,v=>this.createDate(2017,0,v+1).format("D")),longDaysOfWeek:r.weekdays(),shortDaysOfWeek:r.weekdaysShort(),narrowDaysOfWeek:r.weekdaysMin()}}getYear(a){return this.clone(a).year()}getMonth(a){return this.clone(a).month()}getDate(a){return this.clone(a).date()}getDayOfWeek(a){return this.clone(a).day()}getMonthNames(a){return"long"==a?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(a){return"long"==a?this._localeData.longDaysOfWeek:"short"==a?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(a){return this.clone(a).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(a){return this.clone(a).daysInMonth()}clone(a){return a.clone().locale(this.locale)}createDate(a,r,v){const b=this._createMoment({year:a,month:r,date:v}).locale(this.locale);return b.isValid(),b}today(){return this._createMoment().locale(this.locale)}parse(a,r){return a&&"string"==typeof a?this._createMoment(a,r,this.locale):a?this._createMoment(a).locale(this.locale):null}format(a,r){return a=this.clone(a),this.isValid(a),a.format(r)}addCalendarYears(a,r){return this.clone(a).add({years:r})}addCalendarMonths(a,r){return this.clone(a).add({months:r})}addCalendarDays(a,r){return this.clone(a).add({days:r})}toIso8601(a){return this.clone(a).format()}deserialize(a){let r;if(a instanceof Date)r=this._createMoment(a).locale(this.locale);else if(this.isDateInstance(a))return this.clone(a);if("string"==typeof a){if(!a)return null;r=this._createMoment(a,m.ISO_8601).locale(this.locale)}return r&&this.isValid(r)?this._createMoment(r).locale(this.locale):super.deserialize(a)}isDateInstance(a){return m.isMoment(a)}isValid(a){return this.clone(a).isValid()}invalid(){return m.invalid()}_createMoment(a,r,v){const{strict:b,useUtc:p}=this._options||{};return p?m.utc(a,r,v,b):m(a,r,v,b)}}return c.\u0275fac=function(a){return new(a||c)(_.LFG(f.Ad,8),_.LFG(w,8))},c.\u0275prov=_.Yz7({token:c,factory:c.\u0275fac}),c})();const A={parse:{dateInput:"l"},display:{dateInput:"l",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}};let D=(()=>{class c{}return c.\u0275fac=function(a){return new(a||c)},c.\u0275mod=_.oAB({type:c}),c.\u0275inj=_.cJS({providers:[{provide:f._A,useClass:O,deps:[f.Ad,w]}]}),c})(),S=(()=>{class c{}return c.\u0275fac=function(a){return new(a||c)},c.\u0275mod=_.oAB({type:c}),c.\u0275inj=_.cJS({providers:[{provide:f.sG,useValue:A}],imports:[[D]]}),c})()},2638:(R,y,s)=>{s.d(y,{jA:()=>W,kh:()=>L,LW:()=>k,SJ:()=>Q});var M=s(925),_=s(5303),f=s(9808),e=s(5e3),m=s(508),w=s(3191),x=s(1159),g=s(7579),O=s(4968),A=s(6451),D=s(9300),S=s(4004),c=s(9718),u=s(2722),a=s(1884),r=s(5698),v=s(8675),b=s(8372),p=s(1777),j=s(6360),T=s(5664),U=s(226);const P=["*"];function z(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"div",2),e.NdJ("click",function(){return e.CHM(t),e.oxw()._onBackdropClicked()}),e.qZA()}if(2&i){const t=e.oxw();e.ekj("mat-drawer-shown",t._isShowingBackdrop())}}function V(i,d){1&i&&(e.TgZ(0,"mat-drawer-content"),e.Hsn(1,2),e.qZA())}const K=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],N=["mat-drawer","mat-drawer-content","*"],G={transformDrawer:(0,p.X$)("transform",[(0,p.SB)("open, open-instant",(0,p.oB)({transform:"none",visibility:"visible"})),(0,p.SB)("void",(0,p.oB)({"box-shadow":"none",visibility:"hidden"})),(0,p.eR)("void => open-instant",(0,p.jt)("0ms")),(0,p.eR)("void <=> open, open-instant => void",(0,p.jt)("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))])},H=new e.OlP("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:function(){return!1}}),F=new e.OlP("MAT_DRAWER_CONTAINER");let k=(()=>{class i extends _.PQ{constructor(t,n,o,h,C){super(o,h,C),this._changeDetectorRef=t,this._container=n}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.sBO),e.Y36((0,e.Gpc)(()=>L)),e.Y36(e.SBq),e.Y36(_.mF),e.Y36(e.R0b))},i.\u0275cmp=e.Xpm({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:4,hostBindings:function(t,n){2&t&&e.Udp("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px")},features:[e.qOj],ngContentSelectors:P,decls:1,vars:0,template:function(t,n){1&t&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),i})(),W=(()=>{class i{constructor(t,n,o,h,C,B,I,$){this._elementRef=t,this._focusTrapFactory=n,this._focusMonitor=o,this._platform=h,this._ngZone=C,this._interactivityChecker=B,this._doc=I,this._container=$,this._elementFocusedBeforeDrawerWasOpened=null,this._enableAnimations=!1,this._position="start",this._mode="over",this._disableClose=!1,this._opened=!1,this._animationStarted=new g.x,this._animationEnd=new g.x,this._animationState="void",this.openedChange=new e.vpe(!0),this._openedStream=this.openedChange.pipe((0,D.h)(l=>l),(0,S.U)(()=>{})),this.openedStart=this._animationStarted.pipe((0,D.h)(l=>l.fromState!==l.toState&&0===l.toState.indexOf("open")),(0,c.h)(void 0)),this._closedStream=this.openedChange.pipe((0,D.h)(l=>!l),(0,S.U)(()=>{})),this.closedStart=this._animationStarted.pipe((0,D.h)(l=>l.fromState!==l.toState&&"void"===l.toState),(0,c.h)(void 0)),this._destroyed=new g.x,this.onPositionChanged=new e.vpe,this._modeChanged=new g.x,this.openedChange.subscribe(l=>{l?(this._doc&&(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement),this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._ngZone.runOutsideAngular(()=>{(0,O.R)(this._elementRef.nativeElement,"keydown").pipe((0,D.h)(l=>l.keyCode===x.hY&&!this.disableClose&&!(0,x.Vb)(l)),(0,u.R)(this._destroyed)).subscribe(l=>this._ngZone.run(()=>{this.close(),l.stopPropagation(),l.preventDefault()}))}),this._animationEnd.pipe((0,a.x)((l,E)=>l.fromState===E.fromState&&l.toState===E.toState)).subscribe(l=>{const{fromState:E,toState:Y}=l;(0===Y.indexOf("open")&&"void"===E||"void"===Y&&0===E.indexOf("open"))&&this.openedChange.emit(this._opened)})}get position(){return this._position}set position(t){(t="end"===t?"end":"start")!=this._position&&(this._position=t,this.onPositionChanged.emit())}get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=(0,w.Ig)(t)}get autoFocus(){const t=this._autoFocus;return null==t?"side"===this.mode?"dialog":"first-tabbable":t}set autoFocus(t){("true"===t||"false"===t||null==t)&&(t=(0,w.Ig)(t)),this._autoFocus=t}get opened(){return this._opened}set opened(t){this.toggle((0,w.Ig)(t))}_forceFocus(t,n){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{t.addEventListener("blur",()=>t.removeAttribute("tabindex")),t.addEventListener("mousedown",()=>t.removeAttribute("tabindex"))})),t.focus(n)}_focusByCssSelector(t,n){let o=this._elementRef.nativeElement.querySelector(t);o&&this._forceFocus(o,n)}_takeFocus(){if(!this._focusTrap)return;const t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(n=>{!n&&"function"==typeof this._elementRef.nativeElement.focus&&t.focus()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus)}}_restoreFocus(t){"dialog"!==this.autoFocus&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){var t;const n=null===(t=this._doc)||void 0===t?void 0:t.activeElement;return!!n&&this._elementRef.nativeElement.contains(n)}ngAfterContentInit(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState()}ngAfterContentChecked(){this._platform.isBrowser&&(this._enableAnimations=!0)}ngOnDestroy(){this._focusTrap&&this._focusTrap.destroy(),this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,n){t&&n&&(this._openedVia=n);const o=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),o}_setOpen(t,n,o){return this._opened=t,t?this._animationState=this._enableAnimations?"open":"open-instant":(this._animationState="void",n&&this._restoreFocus(o)),this._updateFocusTrapState(),new Promise(h=>{this.openedChange.pipe((0,r.q)(1)).subscribe(C=>h(C?"open":"close"))})}_getWidth(){return this._elementRef.nativeElement&&this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&"side"!==this.mode)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(T.qV),e.Y36(T.tE),e.Y36(M.t4),e.Y36(e.R0b),e.Y36(T.ic),e.Y36(f.K0,8),e.Y36(F,8))},i.\u0275cmp=e.Xpm({type:i,selectors:[["mat-drawer"]],hostAttrs:["tabIndex","-1",1,"mat-drawer"],hostVars:12,hostBindings:function(t,n){1&t&&e.WFA("@transform.start",function(h){return n._animationStarted.next(h)})("@transform.done",function(h){return n._animationEnd.next(h)}),2&t&&(e.uIk("align",null),e.d8E("@transform",n._animationState),e.ekj("mat-drawer-end","end"===n.position)("mat-drawer-over","over"===n.mode)("mat-drawer-push","push"===n.mode)("mat-drawer-side","side"===n.mode)("mat-drawer-opened",n.opened))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:P,decls:2,vars:0,consts:[["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){1&t&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA())},directives:[_.PQ],encapsulation:2,data:{animation:[G.transformDrawer]},changeDetection:0}),i})(),L=(()=>{class i{constructor(t,n,o,h,C,B=!1,I){this._dir=t,this._element=n,this._ngZone=o,this._changeDetectorRef=h,this._animationMode=I,this._drawers=new e.n_E,this.backdropClick=new e.vpe,this._destroyed=new g.x,this._doCheckSubject=new g.x,this._contentMargins={left:null,right:null},this._contentMarginChanges=new g.x,t&&t.change.pipe((0,u.R)(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),C.change().pipe((0,u.R)(this._destroyed)).subscribe(()=>this.updateContentMargins()),this._autosize=B}get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=(0,w.Ig)(t)}get hasBackdrop(){return null==this._backdropOverride?!this._start||"side"!==this._start.mode||!this._end||"side"!==this._end.mode:this._backdropOverride}set hasBackdrop(t){this._backdropOverride=null==t?null:(0,w.Ig)(t)}get scrollable(){return this._userContent||this._content}ngAfterContentInit(){this._allDrawers.changes.pipe((0,v.O)(this._allDrawers),(0,u.R)(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(n=>!n._container||n._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe((0,v.O)(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe((0,b.b)(10),(0,u.R)(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,n=0;if(this._left&&this._left.opened)if("side"==this._left.mode)t+=this._left._getWidth();else if("push"==this._left.mode){const o=this._left._getWidth();t+=o,n-=o}if(this._right&&this._right.opened)if("side"==this._right.mode)n+=this._right._getWidth();else if("push"==this._right.mode){const o=this._right._getWidth();n+=o,t-=o}t=t||null,n=n||null,(t!==this._contentMargins.left||n!==this._contentMargins.right)&&(this._contentMargins={left:t,right:n},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe((0,D.h)(n=>n.fromState!==n.toState),(0,u.R)(this._drawers.changes)).subscribe(n=>{"open-instant"!==n.toState&&"NoopAnimations"!==this._animationMode&&this._element.nativeElement.classList.add("mat-drawer-transition"),this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),"side"!==t.mode&&t.openedChange.pipe((0,u.R)(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){!t||t.onPositionChanged.pipe((0,u.R)(this._drawers.changes)).subscribe(()=>{this._ngZone.onMicrotaskEmpty.pipe((0,r.q)(1)).subscribe(()=>{this._validateDrawers()})})}_watchDrawerMode(t){t&&t._modeChanged.pipe((0,u.R)((0,A.T)(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){const n=this._element.nativeElement.classList,o="mat-drawer-container-has-open";t?n.add(o):n.remove(o)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{"end"==t.position?this._end=t:this._start=t}),this._right=this._left=null,this._dir&&"rtl"===this._dir.value?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&"over"!=this._start.mode||this._isDrawerOpen(this._end)&&"over"!=this._end.mode}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._canHaveBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._canHaveBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._canHaveBackdrop(this._end)}_canHaveBackdrop(t){return"side"!==t.mode||!!this._backdropOverride}_isDrawerOpen(t){return null!=t&&t.opened}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(U.Is,8),e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(_.rL),e.Y36(H),e.Y36(j.Qb,8))},i.\u0275cmp=e.Xpm({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,o){if(1&t&&(e.Suo(o,k,5),e.Suo(o,W,5)),2&t){let h;e.iGM(h=e.CRH())&&(n._content=h.first),e.iGM(h=e.CRH())&&(n._allDrawers=h)}},viewQuery:function(t,n){if(1&t&&e.Gf(k,5),2&t){let o;e.iGM(o=e.CRH())&&(n._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){2&t&&e.ekj("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[e._Bn([{provide:F,useExisting:i}])],ngContentSelectors:N,decls:4,vars:2,consts:[["class","mat-drawer-backdrop",3,"mat-drawer-shown","click",4,"ngIf"],[4,"ngIf"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){1&t&&(e.F$t(K),e.YNc(0,z,1,2,"div",0),e.Hsn(1),e.Hsn(2,1),e.YNc(3,V,2,0,"mat-drawer-content",1)),2&t&&(e.Q6J("ngIf",n.hasBackdrop),e.xp6(3),e.Q6J("ngIf",!n._content))},directives:[f.O5,k],styles:[".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}\n"],encapsulation:2,changeDetection:0}),i})(),Q=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[f.ez,m.BQ,M.ud,_.ZD],_.ZD,m.BQ]}),i})()}}]);