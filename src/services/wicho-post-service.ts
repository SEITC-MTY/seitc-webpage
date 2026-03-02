import { prisma } from "seitc/lib/prisma";

export const wichoPostService = {
  async getAll() {
    const result = prisma.wichoPost.findMany();
    console.log("result", result);
    return result;
  },

  async create(data: { message: string; author?: string }) {
    return prisma.wichoPost.create({
      data,
    });
  },
};