import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
    handle(_: Request, response: Response): Response {
        const listSpecificationsUseCase = container.resolve(ListSpecificationsUseCase);

        return response.json(listSpecificationsUseCase.handle());
    }
}

export { ListSpecificationsController };
