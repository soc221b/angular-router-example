import{a as E,b as S,c as U,d as M,e as N}from"./chunk-YNG4F2NX.js";import{Aa as r,Ba as i,Ca as I,Ga as w,Ha as _,Ia as D,Ja as p,Ka as l,Ma as m,Na as c,Oa as s,Qa as x,Sa as F,W as b,ia as a,sa as d,za as u}from"./chunk-BG6CGCJ5.js";var q="info",f={path:q,title:"Info",loadComponent:()=>import("./chunk-7K6ET2TR.js").then(e=>e.Info)};var O="review",y={path:O,title:"Review",loadComponent:()=>import("./chunk-32RKYXN5.js").then(e=>e.Review)};var B="product/:id",R={path:B,title:"Product",loadComponent:()=>import("./chunk-A2NWMBTX.js").then(e=>e.Product),children:[f,y]};var G="",h={path:G,title:"Home",loadComponent:()=>import("./chunk-CIWIHC4H.js").then(e=>e.Home)};var z="user/:userId",T={path:z,title:"User",loadComponent:()=>import("./chunk-OEYOAMFH.js").then(e=>e.User)};var J="team/:teamId",v={path:J,title:"Team",loadComponent:()=>import("./chunk-L35LESPA.js").then(e=>e.Team),children:[T]};var j=[h,R,v];var A={providers:[b(),M(j,N())]};var V=["*"];function W(e,n){if(e&1&&p(0),e&2){let o=w();l(o.title())}}var k=class e{routes=F.required();parameters=F.required();routerLink=x(()=>this.routes().map(n=>n.path).map(n=>Object.entries(this.parameters()).reduce((o,[t,H])=>o?.replace(":"+t,H),n)).join("/"));title=x(()=>this.routes()[this.routes().length-1].title);static \u0275fac=function(o){return new(o||e)};static \u0275cmp=d({type:e,selectors:[["app-typed-router-link"]],inputs:{routes:[1,"routes"],parameters:[1,"parameters"]},ngContentSelectors:V,decls:3,vars:1,consts:[[3,"routerLink"]],template:function(o,t){o&1&&(_(),r(0,"a",0),D(1,0,null,W,1,1),i()),o&2&&u("routerLink",t.routerLink())},dependencies:[U],encapsulation:2})};var L=e=>[e],X=()=>({}),P=()=>({id:"1"}),g=(e,n)=>[e,n],Y=()=>({teamId:"1"}),Z=()=>({teamId:"1",userId:"1"}),$=()=>({teamId:"1",userId:"2"}),C=class e{routeHome=h;routeProduct=R;routeInfo=f;routeReview=y;routeTeam=v;routeUser=T;code=`
import { Component, computed, input } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { RoutesParameters } from './route-parameters';

@Component({
  selector: 'app-typed-router-link',
  templateUrl: './typed-router-link.html',
  imports: [RouterLink],
})
export class TypedRouterLink<T extends [Route, ...Route[]]> {
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
}`.trim();static \u0275fac=function(o){return new(o||e)};static \u0275cmp=d({type:e,selectors:[["app-root"]],decls:29,vars:40,consts:[[3,"routes","parameters"]],template:function(o,t){o&1&&(r(0,"ul")(1,"li"),I(2,"app-typed-router-link",0),i(),r(3,"li")(4,"app-typed-router-link",0),p(5," Product 1 "),i(),r(6,"ul")(7,"li")(8,"app-typed-router-link",0),p(9," Info "),i()(),r(10,"li")(11,"app-typed-router-link",0),p(12," Review "),i()()()(),r(13,"li")(14,"app-typed-router-link",0),p(15," Team 1 "),i(),r(16,"ul")(17,"li")(18,"app-typed-router-link",0),p(19," User 1 "),i()(),r(20,"li")(21,"app-typed-router-link",0),p(22," User 2 "),i()()()()(),I(23,"router-outlet"),r(24,"details")(25,"summary"),p(26,"TypedRouterLink code"),i(),r(27,"pre"),p(28),i()()),o&2&&(a(2),u("routes",c(15,L,t.routeHome))("parameters",m(17,X)),a(2),u("routes",c(18,L,t.routeProduct))("parameters",m(20,P)),a(4),u("routes",s(21,g,t.routeProduct,t.routeInfo))("parameters",m(24,P)),a(3),u("routes",s(25,g,t.routeProduct,t.routeReview))("parameters",m(28,P)),a(3),u("routes",c(29,L,t.routeTeam))("parameters",m(31,Y)),a(4),u("routes",s(32,g,t.routeTeam,t.routeUser))("parameters",m(35,Z)),a(3),u("routes",s(36,g,t.routeTeam,t.routeUser))("parameters",m(39,$)),a(7),l(t.code))},dependencies:[S,k],encapsulation:2})};E(C,A).catch(e=>console.error(e));
