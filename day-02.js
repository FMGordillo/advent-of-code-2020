(async function () {
  const fs = require("fs").promises;

  const data = await fs.readFile("./data/day-02.txt", { encoding: "utf8" });
  const dataSplitted = data.split("\n");

  const dataObj = dataSplitted.reduce((obj, row) => {
    const [key, value] = row.split(":");
    if (key && value) return Object.assign(obj, { [key]: value });
    else return obj;
  }, {});

  // CHALLENGE
  const nonCompliant = Object.entries(dataObj).filter(([rules, val]) => {
    console.log(rules);
    const passwordLength = rules.match("[0-90-9]|[0-90-9]");
    console.log(passwordLength);
  }).length;
})();
