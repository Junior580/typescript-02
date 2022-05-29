import { Request, Response } from "express";
import path from "path";
export const padraoController = {
    get: (req: Request, res: Response) => {
        res.status(200).sendFile(
            path.join(__dirname, "../", "../src/views/index.html")
        );
    },
    post: (req: Request, res: Response) => {
        res.send("Hello From back-end method post");
    },
    put: (req: Request, res: Response) => {
        res.send("Hello From back-end method put");
    },
    delete: (req: Request, res: Response) => {
        res.send("Hello From back-end method delete");
    },
};
