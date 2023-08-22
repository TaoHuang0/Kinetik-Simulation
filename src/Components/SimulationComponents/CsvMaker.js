const csvMaker = (lambdaOutput) => {
  // Empty array for storing the values
  let csvRows = [];

  const headers = lambdaOutput[0].map((obj) => obj.Stage);
  const headersWithWeek = ["Week", ...headers];

  csvRows.push(headersWithWeek.join(","));

  for (let i = 0; i < lambdaOutput.length; i++) {
    const row = lambdaOutput[i].map((obj) => obj.values);
    const rowWithWeek = [i + 1, ...row];
    csvRows.push(rowWithWeek.join(","));
  }

  return csvRows.join("\n");
};

export default csvMaker;