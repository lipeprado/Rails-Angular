"use strict";
var Proposal = (function () {
    function Proposal(id, custumer, portfolio_url, tools, estimated_hours, hourly_rate, weeks_to_complete, cliente_email) {
        if (portfolio_url === void 0) { portfolio_url = 'http://'; }
        this.id = id;
        this.custumer = custumer;
        this.portfolio_url = portfolio_url;
        this.tools = tools;
        this.estimated_hours = estimated_hours;
        this.hourly_rate = hourly_rate;
        this.weeks_to_complete = weeks_to_complete;
        this.cliente_email = cliente_email;
    }
    return Proposal;
}());
exports.Proposal = Proposal;
//# sourceMappingURL=proposal.js.map