import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

    handle(_: Request, response: Response): Response {
        return response.json(this.listCategoriesUseCase.execute());
    }
}

export { ListCategoriesController };
