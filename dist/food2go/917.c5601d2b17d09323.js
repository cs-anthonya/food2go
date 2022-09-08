"use strict";(self.webpackChunkfood2go=self.webpackChunkfood2go||[]).push([[917],{2917:(A,d,n)=>{n.r(d),n.d(d,{AuthSignInModule:()=>D});var i=n(4521),h=n(7423),p=n(7446),g=n(7322),f=n(5245),u=n(8833),I=n(773),o=n(6236),Z=n(7775),x=n(4466),m=n(3075),T=n(8288),t=n(5e3),y=n(3604),N=n(8613),_=n(9808),w=n(2494);const U=["signInNgForm"];function C(e,a){if(1&e&&(t.TgZ(0,"fuse-alert",31),t._uU(1),t.qZA()),2&e){const r=t.oxw();t.Q6J("appearance","outline")("showIcon",!1)("type",r.alert.type)("@shake","error"===r.alert.type),t.xp6(1),t.hij(" ",r.alert.message," ")}}function S(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Email address is required "),t.qZA())}function P(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid email address "),t.qZA())}function E(e,a){1&e&&t._UZ(0,"mat-icon",32),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function J(e,a){1&e&&t._UZ(0,"mat-icon",32),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function O(e,a){1&e&&(t.TgZ(0,"span"),t._uU(1," Sign in "),t.qZA())}function F(e,a){1&e&&t._UZ(0,"mat-progress-spinner",33),2&e&&t.Q6J("diameter",24)("mode","indeterminate")}const b=function(){return["/sign-up"]},M=[{path:"",component:(()=>{class e{constructor(r,s,l,v,c){this._activatedRoute=r,this._formBuilder=s,this._router=l,this._auth=v,this._user=c,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signInForm=this._formBuilder.group({email:["buyer@email.com",[m.kI.required,m.kI.email]],password:["@Unknown0322",m.kI.required],rememberMe:[""]})}signIn(){this.signInForm.invalid||(this.signInForm.disable(),this.showAlert=!1,this._auth.login(this.signInForm.value).subscribe(r=>{if("success"==r.status){let s=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||null;this._auth.setToken(r.data.token),this._auth.setUser(JSON.stringify(r.data.profile)),this._user.getRole().subscribe(l=>{this._user.role=l.result.role,s||(s="buyer"==this._user.role?"/stores":"admin"==this._user.role?"/dashboard/analytics":"/stores"),this._router.navigateByUrl(s)})}},r=>{this.signInForm.enable(),this.alert={type:"error",message:"Wrong email or password"},this.showAlert=!0}))}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(i.gz),t.Y36(m.qu),t.Y36(i.F0),t.Y36(y.e),t.Y36(N.K))},e.\u0275cmp=t.Xpm({type:e,selectors:[["auth-sign-in"]],viewQuery:function(r,s){if(1&r&&t.Gf(U,5),2&r){let l;t.iGM(l=t.CRH())&&(s.signInNgForm=l.first)}},decls:46,vars:14,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/img/gallery/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signInNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["mat-flat-button","","type","button",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-yellow-500","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-yellow-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-yellow-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-9xl","font-extrabold","tracking-tight","leading-tight","text-gray-100"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(r,s){if(1&r){const l=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"Sign in"),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"div"),t._uU(9,"Don't have an account?"),t.qZA(),t.TgZ(10,"a",7),t._uU(11,"Sign up "),t.qZA(),t.qZA(),t.YNc(12,C,2,5,"fuse-alert",8),t.TgZ(13,"form",9,10),t.TgZ(15,"mat-form-field",11),t.TgZ(16,"mat-label"),t._uU(17,"Email address"),t.qZA(),t._UZ(18,"input",12),t.YNc(19,S,2,0,"mat-error",13),t.YNc(20,P,2,0,"mat-error",13),t.qZA(),t.TgZ(21,"mat-form-field",11),t.TgZ(22,"mat-label"),t._uU(23,"Password"),t.qZA(),t._UZ(24,"input",14,15),t.TgZ(26,"button",16),t.NdJ("click",function(){t.CHM(l);const c=t.MAs(25);return c.type="password"===c.type?"text":"password"}),t.YNc(27,E,1,1,"mat-icon",17),t.YNc(28,J,1,1,"mat-icon",17),t.qZA(),t.TgZ(29,"mat-error"),t._uU(30," Password is required "),t.qZA(),t.qZA(),t.TgZ(31,"button",18),t.NdJ("click",function(){return s.signIn()}),t.YNc(32,O,2,0,"span",13),t.YNc(33,F,1,2,"mat-progress-spinner",19),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"div",20),t.O4$(),t.TgZ(35,"svg",21),t.TgZ(36,"g",22),t._UZ(37,"circle",23),t._UZ(38,"circle",24),t.qZA(),t.qZA(),t.TgZ(39,"svg",25),t.TgZ(40,"defs"),t.TgZ(41,"pattern",26),t._UZ(42,"rect",27),t.qZA(),t.qZA(),t._UZ(43,"rect",28),t.qZA(),t.kcU(),t.TgZ(44,"div",29),t._UZ(45,"div",30),t.qZA(),t.qZA(),t.qZA()}if(2&r){const l=t.MAs(25);t.xp6(10),t.Q6J("routerLink",t.DdM(13,b)),t.xp6(2),t.Q6J("ngIf",s.showAlert),t.xp6(1),t.Q6J("formGroup",s.signInForm),t.xp6(5),t.Q6J("formControlName","email"),t.xp6(1),t.Q6J("ngIf",s.signInForm.get("email").hasError("required")),t.xp6(1),t.Q6J("ngIf",s.signInForm.get("email").hasError("email")),t.xp6(4),t.Q6J("formControlName","password"),t.xp6(3),t.Q6J("ngIf","password"===l.type),t.xp6(1),t.Q6J("ngIf","text"===l.type),t.xp6(3),t.Q6J("color","accent")("disabled",s.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",!s.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",s.signInForm.disabled)}},directives:[i.yS,_.O5,m._Y,m.JL,m.sg,g.KE,g.hX,u.Nt,m.Fj,m.JJ,m.u,h.lW,g.R9,g.TO,w.W,f.Hw,I.Ou],encapsulation:2,data:{animation:T.L}}),e})()}];let D=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[i.Bz.forChild(M),h.ot,p.p9,g.lN,f.Ps,u.c,I.Cq,o.J,Z.fC,x.m]]}),e})()},8613:(A,d,n)=>{n.d(d,{K:()=>f});var i=n(2340),h=n(1135),p=n(5e3),g=n(520);let f=(()=>{class u{constructor(o){this._http=o,this.r=new h.X("")}get role(){return this.r.value}set role(o){this.r.next(o)}getRole(){return this._http.get(i.N.API_ENDPOINT+"/v1/user/getRole")}get(o){return this._http.get(i.N.API_ENDPOINT+"/v1/user/"+o)}create(o){return this._http.post(i.N.API_ENDPOINT+"/v1/user",o)}register(o){return this._http.post(i.N.API_ENDPOINT+"/v1/createBuyer",o)}update(o){return this._http.post(i.N.API_ENDPOINT+"/v1/user/update",o)}list(o){return this._http.post(i.N.API_ENDPOINT+"/v1/user/list",o)}delete(o){return this._http.delete(i.N.API_ENDPOINT+"/v1/user/"+o)}me(){return this._http.get(i.N.API_ENDPOINT+"/v1/user")}getShopInfo(o){return this._http.get(i.N.API_ENDPOINT+"/v1/user/shop/"+o)}}return u.\u0275fac=function(o){return new(o||u)(p.LFG(g.eN))},u.\u0275prov=p.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);