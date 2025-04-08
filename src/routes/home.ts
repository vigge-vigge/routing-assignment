import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.render("index", { title: "Home Page", });
});

router.get("/about", (req: Request, res: Response) => {
    res.render("home", { title: "About Us" });
});

export default router;
