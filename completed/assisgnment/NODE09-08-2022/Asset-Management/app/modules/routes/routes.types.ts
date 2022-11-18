import { Router } from "express";

class IRoute{
 constructor(public path: string,public router: Router)   {}
}

export type Routes=IRoute[];