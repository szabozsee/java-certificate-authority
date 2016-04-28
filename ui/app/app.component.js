System.register(["angular2/core", "angular2/router", "angular2/http", "./authorities.component", "./certificates.component", "./ca.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, authorities_component_1, certificates_component_1, ca_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (authorities_component_1_1) {
                authorities_component_1 = authorities_component_1_1;
            },
            function (certificates_component_1_1) {
                certificates_component_1 = certificates_component_1_1;
            },
            function (ca_service_1_1) {
                ca_service_1 = ca_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Certificate authority";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "ca-app",
                        template: "\n    <div class=\"component\">\n      <div class=\"row\">\n        <div class=\"col-md-6 col-md-offset-3\">\n          <h1>{{title}}</h1>\n          <ul class=\"nav nav-tabs\">\n            <li class=\"nav-item\">\n              <a [routerLink]=\"['Authorities']\" class=\"nav-link\">Authorities</a>\n            </li>\n            <li class=\"nav-item\">\n              <a [routerLink]=\"['Certificates']\" class=\"nav-link\">Certificates</a>\n            </li>\n          </ul>\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            http_1.HTTP_PROVIDERS,
                            ca_service_1.CaService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: "/authorities",
                            name: "Authorities",
                            component: authorities_component_1.AuthoritiesComponent,
                            useAsDefault: true
                        },
                        {
                            path: "/certificates",
                            name: "Certificates",
                            component: certificates_component_1.CertificatesComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map