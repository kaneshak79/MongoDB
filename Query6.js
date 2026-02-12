6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.attendance.aggregate([
  { $match: { date: { $gte: "2020-10-15", $lte: "2020-10-31" }, status: "Absent" }},
  { $lookup: {
      from: "tasks",
      let: { userId: "$user_id" },
      pipeline: [
        { $match: { $expr: { $and: [
            { $eq: ["$user_id", "$$userId"] },
            { $eq: ["$submitted", false] },
            { $gte: ["$date", "2020-10-15"] },
            { $lte: ["$date", "2020-10-31"] }
        ]}}}
      ],
      as: "pending_tasks"
  }},
  { $match: { "pending_tasks.0": { $exists: true } }},
  { $count: "users_absent_and_task_not_submitted" }
]);
