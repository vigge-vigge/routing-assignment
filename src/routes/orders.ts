import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
    const orders = [
        { id: 1, item: "Wristwatch"},
        { id: 2, item: "Bag"},
        { id: 3, item: "House"},
        { id: 4, item: "Car"},
        { id: 5, item: "School"}
    ]
    res.render("orders", { title: "Your orders", orders });
});

router.get("/orders", (req: Request, res: Response) => {
    res.render("orders", { title: "These are your orders" });
});

export default router;