import { ResponseDTO, Violation } from "../types";

export class Account {

  activeCard: boolean;
  availableLimit: number;
  violations: Array<Violation>

  constructor(activeCard?: boolean, availableLimit?: number, violations: Array<Violation> = []) {
    this.activeCard = activeCard;
    this.availableLimit = availableLimit;
    this.violations = violations 
  }

  getResponse() : ResponseDTO {

    return {
      account: {
        "active-card": this.activeCard,
        "available-limit": this.availableLimit
      },
      violations: this.violations.map(violation => violation)
    }
  }

}