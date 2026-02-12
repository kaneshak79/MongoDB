4.Find the number of problems solved by the user in codekata

db.codekata.aggregate([
  { $lookup: { from: "users", localField: "user_id", foreignField: "_id", as: "user_info" }},
  { $project: { _id: 0, user: { $arrayElemAt: ["$user_info.name",0] }, problem_solved: 1 }}
]);
