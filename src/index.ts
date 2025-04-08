// import express, { Request, Response } from "express";
// import path from 'path'

// const app = express();
// const port = 3000;

// // Middleware to parse JSON
// app.use(express.json());

// //setting Pug
// app.set("view engine", "pug");
// app.set("views", path.join(__dirname, "views"));

// //serring public folder
// app.use(express.static(path.join(__dirname, "public")));

// // Home route
// app.get("/", (req: Request, res: Response) => {
//     // res.send("Welcome to our TypeScript API!");
//     res.render("index", {title: "Home Page", message: "Welcome to Eat Me!"})
// });

// // Route to return user data
// app.get("/customers", (req: Request, res: Response) => {
//     const users = [
//         { id: 1, name: "Alice", address: "Barcelona", shopping_count: "4" },
//         { id: 2, name: "Victor", address: "Afghanistan", shopping_count: "6" },
//         { id: 3, name: "Babatunde", address: "Benin", shopping_count: "5" },
//         { id: 4, name: "Maykel", address: "Benin", shopping_count: "7" },
//         { id: 5, name: "Arteta", address: "Zimbabwe", shopping_count: "10" }
//     ];
//     res.json(users);
// });

// // Route with a parameter
// app.get("/user/:id", (req: Request, res: Response) => {
//     const userId = parseInt(req.params.id);
//     res.json({ id: userId, name: `User${userId}` });
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


import express from "express";
import path from "path";
import homeRoutes from "./routes/home";
import userRoutes from "./routes/users";
import productRoutes from "./routes/products";
import orderRoutes from "./routes/orders";

const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // For handling form data

// Using routes
app.use("/", homeRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
