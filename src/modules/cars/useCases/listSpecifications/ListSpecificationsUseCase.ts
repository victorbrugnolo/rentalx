import { inject, injectable } from "tsyringe";
import { Specification } from "../../entities/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

@injectable()
class ListSpecificationsUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: SpecificationsRepository
    ) {}

    async handle(): Promise<Specification[]> {
        return await this.specificationsRepository.list();
    }
}

export { ListSpecificationsUseCase };
