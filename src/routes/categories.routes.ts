import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (_, response) => {
    return listCategoriesController.handle(_, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    const { file } = request;
    return response.send();
});

export { categoriesRoutes };
