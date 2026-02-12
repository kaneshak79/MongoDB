2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.company_drives.find({ date: { $gte: "2020-10-15", $lte: "2020-10-31" } });
