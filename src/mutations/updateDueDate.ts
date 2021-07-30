import { resolver } from "blitz";
// import db from "db";
import { z } from "zod";

const UpdateDueDateParams = z.object({
  date: z.date(),
});

// export default async (...args: any[]) => {
//   console.log(UpdateDueDateParams, args);

//   return { done: true, argsCount: args.length };
// };

export default resolver.pipe(
  resolver.zod(UpdateDueDateParams),
  resolver.authorize(),
  async () => {
    // await db.task.create({
    //   data: {
    //     description,
    //     creatorId: session.userId,
    //     assignedUserId: session.userId,
    //   },
    // });
    // emitWithUserId(session.userId, "updatedTasks");
    return { called: true };
  },
);
