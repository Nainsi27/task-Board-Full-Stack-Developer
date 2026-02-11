import { Response } from "express";
import prisma from "../prisma";
import { AuthRequest } from "../middleware/authMiddleware";

export const createTask = async (req: AuthRequest, res: Response) => {
  try {
    const { title, status } = req.body;

    const task = await prisma.task.create({
      data: {
        title,
        status,
        userId: req.userId!,
      },
    });

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Error creating task" });
  }
};

export const getTasks = async (req: AuthRequest, res: Response) => {
  try {
    const tasks = await prisma.task.findMany({
      where: {
        userId: req.userId,
      },
      orderBy: { createdAt: "desc" },
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks" });
  }
};

export const updateTaskStatus = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const task = await prisma.task.update({
      where: {
        id: Number(id),
      },
      data: {
        status,
      },
    });

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Error updating task" });
  }
};
