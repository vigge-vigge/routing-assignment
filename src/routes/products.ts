import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
    const products = [
        { id: 1, item: "Drums"},
        { id: 2, item: "Fan"},
        { id: 3, item: "Stadium"},
        { id: 4, item: "Building"},
        { id: 5, item: "Blocks"}
    ]
    res.render("products", { title: "Products page", products });
});

router.get("/products", (req: Request, res: Response) => {
    res.render("products", { title: "These are our products" });
});

export default router;