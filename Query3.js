3.Find all the company drives and students who are appeared for the placement.

db.company_drives.aggregate([
  { $lookup: {
      from: "users",
      localField: "appeared_students",
      foreignField: "_id",
      as: "students_info"
  }}
]);
