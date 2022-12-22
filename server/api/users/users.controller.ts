import { Response, Request } from "express";
import data from "../../db/data";

export const getData = (req: Request, res: Response) => res.send(data);
