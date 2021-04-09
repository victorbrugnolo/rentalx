import { Router, Request, Response } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request: Request, response: Response) => {
    return createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/", (_: Request, response: Response) => {
    return listSpecificationsController.handle(_, response);
});

export { specificationsRoutes };
