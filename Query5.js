5.Find all the mentors with who has the mentee's count more than 15

db.mentors.find({ $expr: { $gt: [ { $size: "$mentees" }, 15 ] } });
