import{$ as ke,$a as $e,Aa as Y,Bb as ee,C as N,Ca as Q,Cb as te,Db as ie,Eb as Qe,Fa as O,Fb as ge,Ga as M,Hb as ue,Ia as Fe,Ib as Ue,J as z,Ja as Re,Jb as Ze,Ka as Se,Kb as L,La as U,Lb as F,Ma as Z,Mb as Je,Na as h,Nb as oe,O as V,Oa as g,Ob as w,P as G,Pa as E,Pb as C,Qa as Be,Qb as ae,Ra as me,S as _,T as c,Ta as j,U as f,Ua as Ne,Va as ze,Wa as Ve,X as v,Xa as Ge,Y as q,Ya as qe,Yb as pe,Z as de,Za as A,_a as He,a as u,aa as Me,b as Oe,cb as y,d as Ae,e as we,f as Te,ga as x,k as p,la as ce,mb as J,nb as We,o as Pe,oa as Ee,pa as H,ra as k,ta as $,va as b,vb as he,w as B,wa as d,wb as K,x as Ie,xa as je,xb as Ye,y as I,ya as Le,za as W,zb as X}from"./chunk-5E5ZM6RK.js";function dt(a,i){}var D=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0,this.closeOnOverlayDetachments=!0}};var be=(()=>{let i=class i extends Ze{constructor(e,t,o,s,l,r,m,P){super(),this._elementRef=e,this._focusTrapFactory=t,this._config=s,this._interactivityChecker=l,this._ngZone=r,this._overlayRef=m,this._focusMonitor=P,this._platform=f(Ye),this._focusTrap=null,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this._ariaLabelledByQueue=[],this._changeDetectorRef=f(je),this.attachDomPortal=le=>{this._portalOutlet.hasAttached();let st=this._portalOutlet.attachDomPortal(le);return this._contentAttached(),st},this._document=o,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{e.removeEventListener("blur",o),e.removeEventListener("mousedown",o),e.removeAttribute("tabindex")};e.addEventListener("blur",o),e.addEventListener("mousedown",o)})),e.focus(t)}_focusByCssSelector(e,t){let o=this._elementRef.nativeElement.querySelector(e);o&&this._forceFocus(o,t)}_trapFocus(){let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus();break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElementWhenReady().then(t=>{t||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus);break}}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let o=X(),s=this._elementRef.nativeElement;(!o||o===this._document.body||o===s||s.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){let e=this._elementRef.nativeElement,t=X();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=X()))}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}};i.\u0275fac=function(t){return new(t||i)(d(k),d(te),d(J,8),d(D),d(ee),d(W),d(w),d(ie))},i.\u0275cmp=v({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,o){if(t&1&&Ve(L,7),t&2){let s;Ge(s=qe())&&(o._portalOutlet=s.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,o){t&2&&O("id",o._config.id||null)("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null)},standalone:!0,features:[Y,y],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,o){t&1&&Q(0,dt,0,0,"ng-template",0)},dependencies:[L],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2});let a=i;return a})(),R=class{constructor(i,n){this.overlayRef=i,this.config=n,this.closed=new p,this.disableClose=n.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=n.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!K(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=i.detachments().subscribe(()=>{n.closeOnOverlayDetachments!==!1&&this.close()})}close(i,n){if(this.containerInstance){let e=this.closed;this.containerInstance._closeInteractionType=n?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(i),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",n=""){return this.overlayRef.updateSize({width:i,height:n}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}},ct=new _("DialogScrollStrategy",{providedIn:"root",factory:()=>{let a=f(C);return()=>a.scrollStrategies.block()}}),mt=new _("DialogData"),ht=new _("DefaultDialogConfig");var gt=0,ye=(()=>{let i=class i{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}constructor(e,t,o,s,l,r){this._overlay=e,this._injector=t,this._defaultOptions=o,this._parentDialog=s,this._overlayContainer=l,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new p,this._afterOpenedAtThisLevel=new p,this._ariaHiddenElements=new Map,this.afterAllClosed=B(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(z(void 0))),this._scrollStrategy=r}open(e,t){let o=this._defaultOptions||new D;t=u(u({},o),t),t.id=t.id||`cdk-dialog-${gt++}`,t.id&&this.getDialogById(t.id);let s=this._getOverlayConfig(t),l=this._overlay.create(s),r=new R(l,t),m=this._attachContainer(l,r,t);return r.containerInstance=m,this._attachDialogContent(e,r,m,t),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(r),r.closed.subscribe(()=>this._removeOpenDialog(r,!0)),this.afterOpened.next(r),r}closeAll(){_e(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){_e(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),_e(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new Je({positionStrategy:e.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,o){let s=o.injector||o.viewContainerRef?.injector,l=[{provide:D,useValue:o},{provide:R,useValue:t},{provide:w,useValue:e}],r;o.container?typeof o.container=="function"?r=o.container:(r=o.container.type,l.push(...o.container.providers(o))):r=be;let m=new ue(r,o.viewContainerRef,x.create({parent:s||this._injector,providers:l}),o.componentFactoryResolver);return e.attach(m).instance}_attachDialogContent(e,t,o,s){if(e instanceof ze){let l=this._createInjector(s,t,o,void 0),r={$implicit:s.data,dialogRef:t};s.templateContext&&(r=u(u({},r),typeof s.templateContext=="function"?s.templateContext():s.templateContext)),o.attachTemplatePortal(new Ue(e,null,r,l))}else{let l=this._createInjector(s,t,o,this._injector),r=o.attachComponentPortal(new ue(e,s.viewContainerRef,l,s.componentFactoryResolver));t.componentRef=r,t.componentInstance=r.instance}}_createInjector(e,t,o,s){let l=e.injector||e.viewContainerRef?.injector,r=[{provide:mt,useValue:e.data},{provide:R,useValue:t}];return e.providers&&(typeof e.providers=="function"?r.push(...e.providers(t,e,o)):r.push(...e.providers)),e.direction&&(!l||!l.get(ge,null,{optional:!0}))&&r.push({provide:ge,useValue:{value:e.direction,change:Pe()}}),x.create({parent:l||s,providers:r})}_removeOpenDialog(e,t){let o=this.openDialogs.indexOf(e);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((s,l)=>{s?l.setAttribute("aria-hidden",s):l.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){let e=this._overlayContainer.getContainerElement();if(e.parentElement){let t=e.parentElement.children;for(let o=t.length-1;o>-1;o--){let s=t[o];s!==e&&s.nodeName!=="SCRIPT"&&s.nodeName!=="STYLE"&&!s.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(s,s.getAttribute("aria-hidden")),s.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}};i.\u0275fac=function(t){return new(t||i)(c(C),c(x),c(ht,8),c(i,12),c(oe),c(ct))},i.\u0275prov=V({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();function _e(a,i){let n=a.length;for(;n--;)i(a[n])}var Ke=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=q({type:i}),i.\u0275inj=G({providers:[ye],imports:[ae,F,Qe,F]});let a=i;return a})();function ut(a,i){}var S=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.maxWidth="80vw",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}},Ce="mdc-dialog--open",Xe="mdc-dialog--opening",et="mdc-dialog--closing",pt=150,_t=75,ft=(()=>{let i=class i extends be{constructor(e,t,o,s,l,r,m,P,le){super(e,t,o,s,l,r,m,le),this._animationMode=P,this._animationStateChanged=new Le,this._animationsEnabled=this._animationMode!=="NoopAnimations",this._hostElement=this._elementRef.nativeElement,this._enterAnimationDuration=this._animationsEnabled?it(this._config.enterAnimationDuration)??pt:0,this._exitAnimationDuration=this._animationsEnabled?it(this._config.exitAnimationDuration)??_t:0,this._animationTimer=null,this._finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)},this._finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})}}_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(tt,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Xe,Ce)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Ce),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Ce),this._animationsEnabled?(this._hostElement.style.setProperty(tt,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(et)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_clearAnimationClasses(){this._hostElement.classList.remove(Xe,et)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}};i.\u0275fac=function(t){return new(t||i)(d(k),d(te),d(J,8),d(S),d(ee),d(W),d(w),d(ce,8),d(ie))},i.\u0275cmp=v({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:8,hostBindings:function(t,o){t&2&&(me("id",o._config.id),O("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),Fe("_mat-animation-noopable",!o._animationsEnabled))},standalone:!0,features:[Y,y],decls:3,vars:0,consts:[[1,"mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,o){t&1&&(h(0,"div",0)(1,"div",1),Q(2,ut,0,0,"ng-template",2),g()())},dependencies:[L],styles:['.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto;outline:0;transform:scale(0.8)}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--closing .mdc-dialog__surface{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{opacity:1}.mdc-dialog--open .mdc-dialog__surface{transform:none}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__container .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{width:100%;height:100%}.mat-mdc-dialog-component-host{display:contents}.mat-mdc-dialog-container{--mdc-dialog-container-elevation: var(--mdc-dialog-container-elevation-shadow);outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, 4px)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87))}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6))}.mat-mdc-dialog-container .mdc-dialog__container{transition:opacity linear var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container .mdc-dialog__surface{transition:transform var(--mat-dialog-transition-duration, 0ms) 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container,.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__surface{transition:none}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-actions{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2});let a=i;return a})(),tt="--mat-dialog-transition-duration";function it(a){return a==null?null:typeof a=="number"?a:a.endsWith("ms")?he(a.substring(0,a.length-2)):a.endsWith("s")?he(a.substring(0,a.length-1))*1e3:a==="0"?0:null}var ne=function(a){return a[a.OPEN=0]="OPEN",a[a.CLOSING=1]="CLOSING",a[a.CLOSED=2]="CLOSED",a}(ne||{}),T=class{constructor(i,n,e){this._ref=i,this._containerInstance=e,this._afterOpened=new p,this._beforeClosed=new p,this._state=ne.OPEN,this.disableClose=n.disableClose,this.id=i.id,e._animationStateChanged.pipe(I(t=>t.state==="opened"),N(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(I(t=>t.state==="closed"),N(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Ie(this.backdropClick(),this.keydownEvents().pipe(I(t=>t.keyCode===27&&!this.disableClose&&!K(t)))).subscribe(t=>{this.disableClose||(t.preventDefault(),vt(this,t.type==="keydown"?"keyboard":"mouse"))})}close(i){this._result=i,this._containerInstance._animationStateChanged.pipe(I(n=>n.state==="closing"),N(1)).subscribe(n=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),n.totalTime+100)}),this._state=ne.CLOSING,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let n=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?n.left(i.left):n.right(i.right):n.centerHorizontally(),i&&(i.top||i.bottom)?i.top?n.top(i.top):n.bottom(i.bottom):n.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",n=""){return this._ref.updateSize(i,n),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=ne.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function vt(a,i,n){return a._closeInteractionType=i,a.close(n)}var xe=new _("MatMdcDialogData"),bt=new _("mat-mdc-dialog-default-options"),yt=new _("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let a=f(C);return()=>a.scrollStrategies.block()}});var Ct=0,se=(()=>{let i=class i{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}constructor(e,t,o,s,l,r,m,P){this._overlay=e,this._defaultOptions=s,this._scrollStrategy=l,this._parentDialog=r,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new p,this._afterOpenedAtThisLevel=new p,this.dialogConfigClass=S,this.afterAllClosed=B(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(z(void 0))),this._dialog=t.get(ye),this._dialogRefConstructor=T,this._dialogContainerType=ft,this._dialogDataToken=xe}open(e,t){let o;t=u(u({},this._defaultOptions||new S),t),t.id=t.id||`mat-mdc-dialog-${Ct++}`,t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let s=this._dialog.open(e,Oe(u({},t),{positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:D,useValue:t}]},templateContext:()=>({dialogRef:o}),providers:(l,r,m)=>(o=new this._dialogRefConstructor(l,t,m),o.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:m},{provide:this._dialogDataToken,useValue:r.data},{provide:this._dialogRefConstructor,useValue:o}])}));return o.componentRef=s.componentRef,o.componentInstance=s.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{let l=this.openDialogs.indexOf(o);l>-1&&(this.openDialogs.splice(l,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}};i.\u0275fac=function(t){return new(t||i)(c(C),c(x),c(We,8),c(bt,8),c(yt),c(i,12),c(oe),c(ce,8))},i.\u0275prov=V({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})(),xt=0;var ot=(()=>{let i=class i{constructor(e,t,o){this._dialogRef=e,this._elementRef=t,this._dialog=o,this.id=`mat-mdc-dialog-title-${xt++}`}ngOnInit(){this._dialogRef||(this._dialogRef=Dt(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)})}ngOnDestroy(){let e=this._dialogRef?._containerInstance;e&&Promise.resolve().then(()=>{e._removeAriaLabelledBy?.(this.id)})}};i.\u0275fac=function(t){return new(t||i)(d(T,8),d(k),d(se))},i.\u0275dir=de({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,o){t&2&&me("id",o.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],standalone:!0});let a=i;return a})(),at=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275dir=de({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],standalone:!0});let a=i;return a})();function Dt(a,i){let n=a.nativeElement.parentElement;for(;n&&!n.classList.contains("mat-mdc-dialog-container");)n=n.parentElement;return n?i.find(e=>e.id===n.id):null}var re=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=q({type:i}),i.\u0275inj=G({providers:[se],imports:[Ke,ae,F,pe,pe]});let a=i;return a})();var De=function(a){return a.PROJECTS="dialog-container-projects",a}(De||{});function At(a,i){if(a&1&&(h(0,"a",4),A(1),g()),a&2){let n=i.$implicit;M("href",n.href,H),b(),$e(" ",n.name," ")}}var nt=(()=>{let i=class i{constructor(e,t){this._dialogRef=e,this._data=t,this.getData=$(null)}ngOnInit(){this.getData.set(this._data)}closeDialog(){return this._dialogRef.close()}};i.\u0275fac=function(t){return new(t||i)(d(T),d(xe))},i.\u0275cmp=v({type:i,selectors:[["app-dialog-projects"]],standalone:!0,features:[y],decls:12,vars:2,consts:[["mat-dialog-title",""],[3,"click"],["src","assets/icons/dialog/close.svg","alt","Bot\xE3o para fechar o dialog"],[3,"innerHTML"],["target","_blank",1,"btn","btn-primary",3,"href"],["target","_blank","class","btn btn-primary",3,"href"]],template:function(t,o){if(t&1&&(h(0,"header")(1,"h2",0),A(2),g(),h(3,"button",1),j("click",function(){return o.closeDialog()}),E(4,"img",2),g()(),h(5,"mat-dialog-content")(6,"h3"),A(7,"Descri\xE7\xE3o"),g(),E(8,"article",3),h(9,"nav"),U(10,At,2,2,"a",5,Se),g()()),t&2){let s,l,r;b(2),He((s=o.getData())==null?null:s.title),b(6),M("innerHTML",(l=o.getData())==null?null:l.description,Ee),b(2),Z((r=o.getData())==null?null:r.links)}},dependencies:[re,ot,at],styles:[".dialog-container-projects .mdc-dialog__container{width:850px}[_nghost-%COMP%]{padding:10px 30px;display:flex;flex-direction:column;background:var(--black-010)}[_nghost-%COMP%]   header[_ngcontent-%COMP%], [_nghost-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]{padding:0;margin:0 0 15px}[_nghost-%COMP%]   header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;padding:0;margin:0;color:var(--white)}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;padding:0;cursor:pointer}[_nghost-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;color:var(--white)}[_nghost-%COMP%]   article[_ngcontent-%COMP%]{margin-bottom:15px;color:var(--white);text-align:justify}[_nghost-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]{float:right}"]});let a=i;return a})();function wt(a,i){if(a&1){let n=Be();h(0,"li")(1,"button",1),j("click",function(){let o=ke(n).$implicit,s=Ne();return Me(s.openDialog(o))}),E(2,"img",2),g()()}if(a&2){let n=i.$implicit;b(2),M("src",n.src,H)("alt",n.alt),O("width",n.width)("height",n.height)}}var Ii=(()=>{var i;let n=class n{constructor(){we(this,i,void 0);Te(this,i,f(se)),this.arrayProjects=$([{src:"assets/icons/knowledge/github.svg",alt:"",title:"Meu GitHub",width:"100px",height:"51px",description:`
      Em meu GitHub voc\xEA pode encontrar alguns projetos, como esse que voc\xEA est\xE1 visualizando agora,
      e tamb\xE9m um projeto que desenvolvo no meu tempo livre, para automatizar a cria\xE7\xE3o de guias de conquistas,
      l\xE1 voc\xEA pode dar uma olhada em meu c\xF3digo e conferir a arquitetura, framework e design pattern que eu utilizo para desenvolver aplica\xE7\xF5es.`,links:[{name:"Acessar GitHub",href:"https://github.com/felipebazz"}]},{src:"assets/icons/steam.svg",alt:"",title:"Guias de Conquistas",width:"100px",height:"51px",description:`
      Al\xE9m de desenvolver aplica\xE7\xF5es, tamb\xE9m gosto de jogar videogame, e alguns jogos possuem conquistas,
      ou trof\xE9us dependendo da plataforma, que consiste em realizar desafios para obt\xEA-los, extendendo o tempo de jogo.
      Foi ent\xE3o que eu resolvi criar guias de conquistas para ajudar outros jogadores a obter essas conquistas, compartilhando dicas e m\xE9todos
      para obt\xEA-las e conseguir a t\xE3o desejada 'platina'.
      No link abaixo voc\xEA pode visualizar alguns dos meus guias j\xE1 lan\xE7ados, neles, al\xE9m de escrever, eu tamb\xE9m fa\xE7o a edi\xE7\xE3o das imagens no Photoshop,
      e antigamente eu tamb\xE9m fazia v\xEDdeos.
      Escrever esses guias me ajudou a melhorar minhas habildades de documentar os sistemas que desenvolvi durante minha carreira.`,links:[{name:"Acessar meus guias na Steam",href:"https://steamcommunity.com/id/wherearemygames/myworkshopfiles/?section=guides"}]}])}openDialog(t){Ae(this,i).open(nt,{data:t,panelClass:De.PROJECTS})}};i=new WeakMap,n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=v({type:n,selectors:[["app-projects"]],standalone:!0,features:[y],decls:6,vars:0,consts:[[1,"container"],[3,"click"],["loading","lazy",3,"src","alt"]],template:function(o,s){o&1&&(h(0,"div",0)(1,"h2"),A(2,"Projetos"),g(),h(3,"ul"),U(4,wt,3,4,"li",null,Re),g()()),o&2&&(b(4),Z(s.arrayProjects()))},dependencies:[re],styles:["[_nghost-%COMP%]{margin-top:25px;padding:25px 0;display:flex;justify-content:center;align-items:center;flex-direction:column;background:var(--black-010)}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;margin:0 0 25px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:20px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:20%;width:160px;height:160px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:brightness(0%)}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:100%;cursor:pointer;background:var(--black-010);border:2px solid var(--primary);border-radius:7px;transition:.5s}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--primary)}@media (max-width: 750px){[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:100%}}@media (max-width: 360px){[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:10%}}"]});let a=n;return a})();export{Ii as ProjectsComponent};