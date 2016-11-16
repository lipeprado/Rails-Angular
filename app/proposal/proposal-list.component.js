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
var proposal_1 = require('./proposal');
var ProposalListComponent = (function () {
    function ProposalListComponent() {
        this.proposalOne = new proposal_1.Proposal(8, "Best Company", 'http://portfolio.filipeprado.com', 'Ruby on rails', 30, 120, 8, 'cliente1@email.com');
        this.proposalTwo = new proposal_1.Proposal(2, "Great Company", 'http://portfolio.filipeprado.com', 'Wordpress', 20, 80, 2, 'cliente2@email.com');
        this.proposalThree = new proposal_1.Proposal(13, "Big Company", 'http://portfolio.filipeprado.com', 'Angular', 21, 20, 13, 'cliente3@email.com');
        this.proposals = [
            this.proposalOne,
            this.proposalTwo,
            this.proposalThree];
    }
    ProposalListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'proposals',
            templateUrl: 'proposal-list.component.html',
            styleUrls: ['proposal-list.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], ProposalListComponent);
    return ProposalListComponent;
}());
exports.ProposalListComponent = ProposalListComponent;
//# sourceMappingURL=proposal-list.component.js.map