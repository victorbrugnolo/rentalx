import { Router, Request, Response } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request: Request, response: Response) => {
    const { name, description } = request.body;

    const createSpecificationsService = new CreateSpecificationService(
        specificationsRepository
    );

    createSpecificationsService.execute({ name, description });

    return response.status(201).send();
});

specificationsRoutes.get("/", (_: Request, response: Response) => {
    const specifications = specificationsRepository.list();

    return response.json(specifications);
});

export { specificationsRoutes };
