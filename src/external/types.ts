export type Task = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  dueDate: Date | null;
  completedAt: Date | null;
  assignedUserId: number | null;
  creatorId: number;
};

export type ListedTask = Task & {
  assignedUser: {
    picture: string | null;
  } | null;
};
