import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
    const users = [
        { id: 1, name: "Victor"},
        { id: 2, name: "Emmanuel"},
        { id: 3, name: "Arteta"},
        { id: 4, name: "Maykel"},
        { id: 5, name: "Babatunde"}
    ]
    res.render("users", { title: "Users Page", users });
});

router.get("/profiles", (req: Request, res: Response) => {
    res.render("users", { title: "User Profile" });
});

export default router;
