import { inject, injectable } from "tsyringe";
import { Specification } from "../../entities/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

@injectable()
class ListSpecificationsUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: SpecificationsRepository
    ) {}

    handle(): Specification[] {
        return this.specificationsRepository.list();
    }
}

export { ListSpecificationsUseCase };
