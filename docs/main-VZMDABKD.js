import{a as D,b as E,c as U,d as M,e as N}from"./chunk-YNG4F2NX.js";import{Aa as r,Ba as i,Ca as I,Ga as b,Ha as w,Ia as _,Ja as n,Ka as c,Ma as s,Na as d,Oa as m,Qa as S,Sa as x,W as P,ia as u,sa as l,za as a}from"./chunk-BG6CGCJ5.js";var f={path:"info",title:"Info",loadComponent:()=>import("./chunk-7K6ET2TR.js").then(e=>e.Info)};var y={path:"review",title:"Review",loadComponent:()=>import("./chunk-32RKYXN5.js").then(e=>e.Review)};var R={path:"product/:id",title:"Product",loadComponent:()=>import("./chunk-A2NWMBTX.js").then(e=>e.Product),children:[f,y]};var h={path:"",title:"Home",loadComponent:()=>import("./chunk-CIWIHC4H.js").then(e=>e.Home)};var v={path:"user/:userId",title:"User",loadComponent:()=>import("./chunk-OEYOAMFH.js").then(e=>e.User)};var k={path:"team/:teamId",title:"Team",loadComponent:()=>import("./chunk-L35LESPA.js").then(e=>e.Team),children:[v]};var j=[h,R,k];var A={providers:[P(),M(j,N())]};var B=["*"];function G(e,p){if(e&1&&n(0),e&2){let o=b();c(o.title())}}var T=class e{routes=x.required();parameters=x.required();routerLink=S(()=>this.routes().map(p=>p.path).map(p=>Object.entries(this.parameters()).reduce((o,[t,H])=>o?.replace(":"+t,H),p)).join("/"));title=S(()=>this.routes()[this.routes().length-1].title);static \u0275fac=function(o){return new(o||e)};static \u0275cmp=l({type:e,selectors:[["app-type-safe-router-link"]],inputs:{routes:[1,"routes"],parameters:[1,"parameters"]},ngContentSelectors:B,decls:3,vars:1,consts:[[3,"routerLink"]],template:function(o,t){o&1&&(w(),r(0,"a",0),_(1,0,null,G,1,1),i()),o&2&&a("routerLink",t.routerLink())},dependencies:[U],encapsulation:2})};var F=e=>[e],z=()=>({}),L=()=>({id:"1"}),g=(e,p)=>[e,p],J=()=>({teamId:"1"}),K=()=>({teamId:"1",userId:"1"}),Q=()=>({teamId:"1",userId:"2"}),C=class e{routeHome=h;routeProduct=R;routeInfo=f;routeReview=y;routeTeam=k;routeUser=v;code=`
import { Component, computed, input } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { RoutesParameters } from './route-parameters';

@Component({
  selector: 'app-type-safe-router-link',
  templateUrl: './type-safe-router-link.html',
  imports: [RouterLink],
})
export class TypeSafeRouterLink<T extends [Route, ...Route[]]> {
  readonly routes = input.required<T>();

  readonly parameters = input.required<RoutesParameters<T>>();

  protected readonly routerLink = computed(() =>
    this.routes()
      .map((route) => route.path)
      .map((path) =>
        Object.entries(this.parameters()).reduce(
          (path, [key, value]) => path?.replace(':' + key, value),
          path,
        ),
      )
      .join('/'),
  );

  protected readonly title = computed(() => this.routes()[this.routes().length - 1]['title']);
}`.trim();static \u0275fac=function(o){return new(o||e)};static \u0275cmp=l({type:e,selectors:[["app-root"]],decls:29,vars:40,consts:[[3,"routes","parameters"]],template:function(o,t){o&1&&(r(0,"ul")(1,"li"),I(2,"app-type-safe-router-link",0),i(),r(3,"li")(4,"app-type-safe-router-link",0),n(5," Product 1 "),i(),r(6,"ul")(7,"li")(8,"app-type-safe-router-link",0),n(9," Info "),i()(),r(10,"li")(11,"app-type-safe-router-link",0),n(12," Review "),i()()()(),r(13,"li")(14,"app-type-safe-router-link",0),n(15," Team 1 "),i(),r(16,"ul")(17,"li")(18,"app-type-safe-router-link",0),n(19," User 1 "),i()(),r(20,"li")(21,"app-type-safe-router-link",0),n(22," User 2 "),i()()()()(),I(23,"router-outlet"),r(24,"details")(25,"summary"),n(26,"TypeSafeRouterLink code"),i(),r(27,"pre"),n(28),i()()),o&2&&(u(2),a("routes",d(15,F,t.routeHome))("parameters",s(17,z)),u(2),a("routes",d(18,F,t.routeProduct))("parameters",s(20,L)),u(4),a("routes",m(21,g,t.routeProduct,t.routeInfo))("parameters",s(24,L)),u(3),a("routes",m(25,g,t.routeProduct,t.routeReview))("parameters",s(28,L)),u(3),a("routes",d(29,F,t.routeTeam))("parameters",s(31,J)),u(4),a("routes",m(32,g,t.routeTeam,t.routeUser))("parameters",s(35,K)),u(3),a("routes",m(36,g,t.routeTeam,t.routeUser))("parameters",s(39,Q)),u(7),c(t.code))},dependencies:[E,T],encapsulation:2})};D(C,A).catch(e=>console.error(e));
