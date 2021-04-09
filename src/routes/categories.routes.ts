import { Router, Request, Response } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request: Request, response: Response) => {
    const { name, description } = request.body;

    const createCategoriesService = new CreateCategoryService(
        categoriesRepository
    );

    createCategoriesService.execute({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (_: Request, response: Response) => {
    const categories = categoriesRepository.list();

    return response.json(categories);
});

export { categoriesRoutes };
