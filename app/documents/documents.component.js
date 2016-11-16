"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DocumentsComponent = (function () {
    function DocumentsComponent() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
            {
                title: "Meu Documento",
                description: "Testando meu documento",
                file_url: "http://google.com",
                update_at: " 11/11/2016",
                image_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTE5Z4fTzfap81AQvlY9mi-vWlbW3KdZg5Pzu-i08_9RcBnF1uW"
            },
            {
                title: "Meu Segundo Documento",
                description: "Testando meu Segundo documento",
                file_url: "http://google.com",
                update_at: " 14/11/2016",
                image_url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyAEJLlEgJf6JhU2IYyf4eIKElsFSLHgRf8D9aL3yETP5MW_nY"
            },
            {
                title: "Meu Terceiro Documento",
                description: "Testando meu Terceiro documento",
                file_url: "http://google.com",
                update_at: " 11/11/2016",
                image_url: "https://cdn.elegantthemes.com/blog/wp-content/uploads/2014/11/shutterstock_197308901-e1416540010771.jpg"
            },
            {
                title: "Meu Qaurto Documento",
                description: "Testando meu Quarto documento",
                file_url: "http://google.com",
                update_at: " 16/11/2016",
                image_url: "https://www.roberthalf.com/sites/default/files/Media_Root/images/tcg-images/4-tips-finding-freelance-work.png"
            }
        ];
    }
    DocumentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'documents',
            templateUrl: 'documents.component.html',
            styleUrls: ['documents.components.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DocumentsComponent);
    return DocumentsComponent;
}());
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map