1.Find all the topics and tasks which are thought in the month of October

db.topics.find({ date: { $gte: "2020-10-01", $lte: "2020-10-31" }, batch: "B39" });

db.tasks.find({ date: { $gte: "2020-10-01", $lte: "2020-10-31" }, batch: "B39" });
