import { Component} from '@angular/core';
import { Proposal } from './proposal';

@Component({
    moduleId: module.id,
    selector: 'proposals',
    templateUrl: 'proposal-list.component.html',
    styleUrls: ['proposal-list.component.css'],
})

export class ProposalListComponent {

    proposalOne: Proposal = new Proposal(8, "Best Company",
        'http://portfolio.filipeprado.com', 'Ruby on rails', 30, 120, 8, 'cliente1@email.com')

    proposalTwo: Proposal = new Proposal(2, "Great Company", 'http://portfolio.filipeprado.com', 'Wordpress', 20, 80, 2, 'cliente2@email.com')

    proposalThree: Proposal = new Proposal(13, "Big Company", 'http://portfolio.filipeprado.com', 'Angular', 21, 20, 13,
        'cliente3@email.com')

    proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree]

}