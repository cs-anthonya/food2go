"use strict";(self.webpackChunkfood2go=self.webpackChunkfood2go||[]).push([[208],{4208:(yt,f,o)=>{o.r(f),o.d(f,{WeeklyPaymentsModule:()=>ft});var C=o(3170),y=o(7423),P=o(7446),u=o(508),c=o(6856),_=o(4834),i=o(7322),h=o(5245),g=o(8833),D=o(2181),Z=o(5899),b=o(9814),T=o(4107),w=o(2638),l=o(4999),M=o(7238),W=o(4521),Y=o(7853),N=o(4466),x=o(5439),v=o.n(x),U=o(922),Q=o(7579),J=o(2722),t=o(5e3),S=o(1135),q=o(8505),k=o(2340),I=o(520);let A=(()=>{class e{constructor(n){this._httpClient=n,this._data=new S.X(null)}get data$(){return this._data.asObservable()}set data$(n){this._data.next(n)}getData(n){return this._httpClient.post(k.N.API_ENDPOINT+"v1/weeklypayment",n).pipe((0,q.b)(s=>{this._data.next(s.result)}))}fetch(n){return this._httpClient.post(k.N.API_ENDPOINT+"v1/weeklypayment",n)}setData(n){this._data.next(n)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(I.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=o(9808),p=o(3075);function F(e,a){1&e&&(t.TgZ(0,"div",43),t._UZ(1,"mat-progress-bar",44),t.qZA()),2&e&&(t.xp6(1),t.Q6J("mode","indeterminate"))}function B(e,a){1&e&&(t.TgZ(0,"th",45),t._uU(1," Reference ID "),t.qZA())}function L(e,a){if(1&e&&(t.TgZ(0,"td",46),t.TgZ(1,"span",47),t._uU(2),t.qZA(),t.qZA()),2&e){const n=a.$implicit;t.xp6(2),t.hij(" ",n.id," ")}}function R(e,a){1&e&&(t.TgZ(0,"th",45),t._uU(1," Date "),t.qZA())}function K(e,a){if(1&e&&(t.TgZ(0,"td",46),t.TgZ(1,"span",48),t._uU(2),t.ALo(3,"date"),t.ALo(4,"date"),t.qZA(),t.qZA()),2&e){const n=a.$implicit;t.xp6(2),t.AsE(" ",t.xi3(3,2,n.date_from,"MMM dd, y")," to ",t.xi3(4,5,n.date_to,"MMM dd, y")," ")}}function O(e,a){1&e&&(t.TgZ(0,"th",45),t._uU(1," Name "),t.qZA())}function $(e,a){if(1&e&&(t.TgZ(0,"td",46),t.TgZ(1,"span",48),t._uU(2),t.qZA(),t.qZA()),2&e){const n=a.$implicit;t.xp6(2),t.hij(" ",n.merchant_name," ")}}function j(e,a){1&e&&(t.TgZ(0,"th",45),t._uU(1," Amount "),t.qZA())}function H(e,a){if(1&e&&(t.TgZ(0,"td",46),t.TgZ(1,"span",49),t._uU(2),t.ALo(3,"currency"),t.qZA(),t.qZA()),2&e){const n=a.$implicit;t.xp6(2),t.hij(" ",t.xi3(3,1,n.amount,"PHP")," ")}}function E(e,a){1&e&&(t.TgZ(0,"th",45),t._uU(1," Status "),t.qZA())}const z=function(e,a,n){return{"bg-red-200 text-red-800 dark:bg-red-600 dark:text-red-50":e,"bg-blue-200 text-blue-800 dark:bg-blue-600 dark:text-blue-50":a,"bg-green-200 text-green-800 dark:bg-green-600 dark:text-green-50":n}};function V(e,a){if(1&e&&(t.TgZ(0,"td",46),t.TgZ(1,"span",50),t.TgZ(2,"span",51),t._uU(3),t.qZA(),t.qZA(),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Q6J("ngClass",t.kEZ(2,z,"pending"===n.status,"settled"===n.status,"completed"===n.status)),t.xp6(2),t.Oqu(n.status)}}function G(e,a){1&e&&(t.TgZ(0,"th",45),t._uU(1," Proof "),t.qZA())}function X(e,a){if(1&e&&(t.TgZ(0,"span",51),t.TgZ(1,"a",54),t._uU(2,"View"),t.qZA(),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.s9C("href",n.proof_url,t.LSH)}}function tt(e,a){1&e&&(t.TgZ(0,"span",51),t._uU(1,"Not Available"),t.qZA())}function et(e,a){if(1&e&&(t.TgZ(0,"td",46),t.TgZ(1,"span",52),t.YNc(2,X,3,1,"span",53),t.YNc(3,tt,2,0,"span",53),t.qZA(),t.qZA()),2&e){const n=a.$implicit;t.xp6(2),t.Q6J("ngIf",n.proof_url),t.xp6(1),t.Q6J("ngIf",!n.proof_url)}}function nt(e,a){1&e&&(t.TgZ(0,"th",45),t._uU(1," Action "),t.qZA())}function at(e,a){1&e&&(t.TgZ(0,"span",51),t._uU(1,"Verify"),t.qZA())}function ot(e,a){if(1&e&&(t.TgZ(0,"td",46),t.TgZ(1,"span",52),t.YNc(2,at,2,0,"span",53),t.qZA(),t.qZA()),2&e){const n=a.$implicit;t.xp6(2),t.Q6J("ngIf","settled"==n.status)}}function st(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"button",57),t.NdJ("click",function(){return t.CHM(n),t.oxw(2).seeMore()}),t._uU(1,"Show More"),t.qZA()}}function lt(e,a){if(1&e&&(t.TgZ(0,"td",55),t.YNc(1,st,2,0,"button",56),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.seemore)}}function rt(e,a){1&e&&t._UZ(0,"tr",58)}function mt(e,a){1&e&&t._UZ(0,"tr",59)}function it(e,a){1&e&&t._UZ(0,"tr",60)}const ct=function(){return["recentOrdersTableFooter"]},pt=[{path:"",component:(()=>{class e{constructor(n,s){this._weeklyPaymentService=n,this.changeDetectorRefs=s,this.weeklyPaymentsDataSource=new l.by,this.weeklyPaymentsTableColumns=["referenceId","date","name","amount","status","proof","action"],this._unsubscribeAll=new Q.x,this.dateFrom=null,this.dateTo=null,this.start=0,this.length=10,this.total=0,this.seemore=!0,this.currentDateFrom=null,this.currentDateTo=null,this.currentStatus="all",this.status="all",this.searchKeyword="",this.currentSearchKeyword="",this.isLoading=!1}ngOnInit(){this._weeklyPaymentService.data$.pipe((0,J.R)(this._unsubscribeAll)).subscribe(n=>{this.data=n.data,this.weeklyPaymentsDataSource.data=null==n?void 0:n.data,this.total=null==n?void 0:n.total,this.seemore=!((null==n?void 0:n.data.length)>=this.total),0==this.total&&(this.length=0)})}search(){const n=v()(this.dateFrom).format("yyyy-MM-DD"),s=v()(this.dateTo).format("yyyy-MM-DD");this.currentDateFrom=n,this.currentDateTo=s,this.currentStatus=this.status,this.currentSearchKeyword=this.searchKeyword,this.data=this._weeklyPaymentService.getData({start:0,length:10,merchant_id:-1,date_from:n,date_to:s,status:this.status,search:this.searchKeyword}).subscribe()}seeMore(){const n=this.currentDateFrom,s=this.currentDateTo,r=this.status,m=this.currentSearchKeyword;this.length+=10,this.data=this._weeklyPaymentService.getData({start:0,length:this.length,merchant_id:-1,date_from:n,date_to:s,status:r,search:m}).subscribe()}searchKeywordInput(){this.data=this._weeklyPaymentService.getData({start:0,length:this.length,merchant_id:-1,date_from:this.currentDateFrom,date_to:this.currentDateTo,status:this.status,search:this.searchKeyword}).subscribe()}trackByFn(n,s){return s.id||n}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(A),t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["weekly-payments"]],decls:75,vars:25,consts:[[1,"sm:absolute","sm:inset-0","flex","flex-col","flex-auto","min-w-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","py-8","px-6","md:px-8","border-b"],["class","absolute inset-x-0 bottom-0",4,"ngIf"],[1,"text-4xl","font-extrabold","tracking-tight"],[1,"flex","shrink-0","items-center","mt-6","sm:mt-0","sm:ml-4"],[1,"fuse-mat-dense","fuse-mat-no-subscript","fuse-mat-rounded","min-w-36"],[3,"value","ngModel","ngModelChange"],[3,"value"],[1,"fuse-mat-dense","ml-2","fuse-mat-no-subscript","fuse-mat-rounded","min-w-52"],["matInput","","placeholder","Date From",3,"matDatepicker","ngModel","ngModelChange"],["matSuffix","",3,"for"],["picker",""],[1,"fuse-mat-dense","fuse-mat-no-subscript","ml-2","fuse-mat-rounded","min-w-52"],["matInput","","placeholder","Date To",3,"matDatepicker","ngModel","ngModelChange"],["picker2",""],["mat-flat-button","",1,"ml-4",3,"color","click"],[1,"ml-2","mr-1"],["mat-flat-button","",1,"ml-4",3,"color"],[1,"fuse-mat-dense","fuse-mat-no-subscript","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"ngModel","autocomplete","placeholder","ngModelChange","keyup.enter"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","sm:mb-18","overflow-hidden","sm:overflow-y-auto"],[1,"xl:col-span-2","flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"p-6"],[1,"mr-4","text-lg","font-medium","tracking-tight","leading-6","truncate"],[1,"overflow-x-auto","mx-6"],["mat-table","","matSort","",1,"w-full","bg-transparent",3,"dataSource","trackBy"],["recentTransactionsTable",""],["matColumnDef","referenceId"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","date"],["matColumnDef","name"],["matColumnDef","amount"],["matColumnDef","status"],["matColumnDef","proof"],["matColumnDef","action"],["matColumnDef","recentOrdersTableFooter"],["class","py-6 px-0 border-0","mat-footer-cell","","colspan","6",4,"matFooterCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["class","order-row h-16","mat-row","",4,"matRowDef","matRowDefColumns"],["class","h-16 border-0","mat-footer-row","",4,"matFooterRowDef"],[1,"absolute","inset-x-0","bottom-0"],[3,"mode"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"pr-6","font-medium","text-sm","text-secondary","whitespace-nowrap"],[1,"pr-6","whitespace-nowrap"],[1,"pr-6","font-medium","whitespace-nowrap"],[1,"inline-flex","items-center","font-bold","text-xs","px-2.5","py-0.5","rounded-full","tracking-wide","uppercase",3,"ngClass"],[1,"leading-relaxed","whitespace-nowrap"],[1,"inline-flex","items-center","font-bold","text-xs","px-2.5","py-0.5","rounded-full","tracking-wide","uppercase"],["class","leading-relaxed whitespace-nowrap",4,"ngIf"],["target","_blank",3,"href"],["mat-footer-cell","","colspan","6",1,"py-6","px-0","border-0"],["mat-stroked-button","",3,"click",4,"ngIf"],["mat-stroked-button","",3,"click"],["mat-header-row",""],["mat-row","",1,"order-row","h-16"],["mat-footer-row","",1,"h-16","border-0"]],template:function(n,s){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,F,2,1,"div",2),t.TgZ(3,"div",3),t._uU(4,"Weekly Payments"),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"mat-form-field",5),t.TgZ(7,"mat-select",6),t.NdJ("ngModelChange",function(m){return s.status=m}),t.TgZ(8,"mat-option",7),t._uU(9,"All"),t.qZA(),t.TgZ(10,"mat-option",7),t._uU(11,"Pending"),t.qZA(),t.TgZ(12,"mat-option",7),t._uU(13,"Settled"),t.qZA(),t.TgZ(14,"mat-option",7),t._uU(15,"Completed"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"mat-form-field",8),t.TgZ(17,"input",9),t.NdJ("ngModelChange",function(m){return s.dateFrom=m}),t.qZA(),t.TgZ(18,"mat-hint"),t._uU(19,"MM/DD/YYYY"),t.qZA(),t._UZ(20,"mat-datepicker-toggle",10),t._UZ(21,"mat-datepicker",null,11),t.qZA(),t.TgZ(23,"mat-form-field",12),t.TgZ(24,"input",13),t.NdJ("ngModelChange",function(m){return s.dateTo=m}),t.qZA(),t.TgZ(25,"mat-hint"),t._uU(26,"MM/DD/YYYY"),t.qZA(),t._UZ(27,"mat-datepicker-toggle",10),t._UZ(28,"mat-datepicker",null,14),t.qZA(),t.TgZ(30,"button",15),t.NdJ("click",function(){return s.search()}),t.TgZ(31,"span",16),t._uU(32,"Search"),t.qZA(),t.qZA(),t.TgZ(33,"button",17),t.TgZ(34,"span",16),t._uU(35,"Send Weekly Payment"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(36,"div",4),t.TgZ(37,"mat-form-field",18),t._UZ(38,"mat-icon",19),t.TgZ(39,"input",20),t.NdJ("ngModelChange",function(m){return s.searchKeyword=m})("keyup.enter",function(){return s.searchKeywordInput()}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(40,"div",21),t.TgZ(41,"div",22),t.TgZ(42,"div",23),t.TgZ(43,"div",24),t.TgZ(44,"div",25),t._uU(45,"Recent Weekly Payment"),t.qZA(),t.qZA(),t.TgZ(46,"div",26),t.TgZ(47,"table",27,28),t.ynx(49,29),t.YNc(50,B,2,0,"th",30),t.YNc(51,L,3,1,"td",31),t.BQk(),t.ynx(52,32),t.YNc(53,R,2,0,"th",30),t.YNc(54,K,5,8,"td",31),t.BQk(),t.ynx(55,33),t.YNc(56,O,2,0,"th",30),t.YNc(57,$,3,1,"td",31),t.BQk(),t.ynx(58,34),t.YNc(59,j,2,0,"th",30),t.YNc(60,H,4,4,"td",31),t.BQk(),t.ynx(61,35),t.YNc(62,E,2,0,"th",30),t.YNc(63,V,4,6,"td",31),t.BQk(),t.ynx(64,36),t.YNc(65,G,2,0,"th",30),t.YNc(66,et,4,2,"td",31),t.BQk(),t.ynx(67,37),t.YNc(68,nt,2,0,"th",30),t.YNc(69,ot,3,1,"td",31),t.BQk(),t.ynx(70,38),t.YNc(71,lt,2,1,"td",39),t.BQk(),t.YNc(72,rt,1,0,"tr",40),t.YNc(73,mt,1,0,"tr",41),t.YNc(74,it,1,0,"tr",42),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const r=t.MAs(22),m=t.MAs(29);t.xp6(2),t.Q6J("ngIf",s.isLoading),t.xp6(5),t.Q6J("value","all")("ngModel",s.status),t.xp6(1),t.Q6J("value","all"),t.xp6(2),t.Q6J("value","pending"),t.xp6(2),t.Q6J("value","settled"),t.xp6(2),t.Q6J("value","completed"),t.xp6(3),t.Q6J("matDatepicker",r)("ngModel",s.dateFrom),t.xp6(3),t.Q6J("for",r),t.xp6(4),t.Q6J("matDatepicker",m)("ngModel",s.dateTo),t.xp6(3),t.Q6J("for",m),t.xp6(3),t.Q6J("color","primary"),t.xp6(3),t.Q6J("color","accent"),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:search"),t.xp6(1),t.Q6J("ngModel",s.searchKeyword)("autocomplete","off")("placeholder","Search"),t.xp6(8),t.Q6J("dataSource",s.weeklyPaymentsDataSource)("trackBy",s.trackByFn),t.xp6(25),t.Q6J("matHeaderRowDef",s.weeklyPaymentsTableColumns),t.xp6(1),t.Q6J("matRowDefColumns",s.weeklyPaymentsTableColumns),t.xp6(1),t.Q6J("matFooterRowDef",t.DdM(24,ct))}},directives:[d.O5,i.KE,T.gD,p.JJ,p.On,u.ey,g.Nt,c.hl,p.Fj,i.bx,c.nW,i.R9,c.Mq,y.lW,h.Hw,i.qo,l.BZ,l.w1,l.fO,l.Dz,l.mD,l.as,l.nj,l.Ke,Z.pW,l.ge,l.ev,d.mk,l.yh,l.XQ,l.Gk,l.Q2],pipes:[d.uU,d.H9],encapsulation:2}),e})(),data:{roles:["admin"]},canActivate:[U.Q],resolve:{data:(()=>{class e{constructor(n){this._weeklypaymentservice=n}resolve(n,s){return this._weeklypaymentservice.getData({length:10,start:0,merchant_id:-1,status:"all",date_from:null,date_to:null,search:""})}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(A))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}];let ft=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[{provide:u.sG,useValue:{parse:{dateInput:x.ISO_8601},display:{dateInput:"LL",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}}}],imports:[[W.Bz.forChild(pt),y.ot,P.p9,c.FA,_.t,i.lN,h.Ps,g.c,D.Tx,C.Yd,Z.Cv,b.Fk,u.si,T.LD,w.SJ,l.p0,M.AV,Y.V,N.m]]}),e})()}}]);