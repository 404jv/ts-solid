import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function controller(request: Request, response: Response) {
  const { name, duration, educator } = request.body;

  CreateCourseService.execute({ name, duration, educator });

  return response.sendStatus(201);
}
