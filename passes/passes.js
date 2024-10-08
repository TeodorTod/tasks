const passes = [
    {
        result: "incomplete",
        receiver: "Demaryius Thomas",
        distance: 0.7
    },
    {
        result: "complete",
        receiver: "Tim Patrick",
        distance: 0.9
    },
    {
        result: "complete",
        receiver: "Demaryius Thomas",
        distance: 0.3
    },
    {
        result: "incomplete",
        receiver: "Tim Patrick",
        distance: 0.9
    },
    {
        result: "incomplete",
        receiver: "Tim Patrick",
        distance: 0.8
    },
    {
        result: "complete",
        receiver: "Demaryius Thomas",
        distance: 0.1
    },
    {
        result: "interception",
        receiver: "Demaryius Thomas",
        distance: 0.4
    }
];



let receivers = {};
let longestPass = { player: "", value: 0 };

passes.forEach(pass => {
  if (!receivers[pass.receiver]) {
    receivers[pass.receiver] = { total: 0, completed: 0 };
  }
  receivers[pass.receiver].total++;
  if (pass.result === "complete") {
    receivers[pass.receiver].completed++;
  }

  if (pass.distance > longestPass.value) {
    longestPass = { player: pass.receiver, value: pass.distance };
  }
});

let mostCompletePercentage = { player: "", value: 0 };
for (let receiver in receivers) {
  let { completed, total } = receivers[receiver];
  let percentage = (completed / total) * 100;
  if (percentage > mostCompletePercentage.value) {
    mostCompletePercentage = { player: receiver, value: percentage.toFixed(2) + "%" };
  }
}

console.log("mostCompletePercentage:", mostCompletePercentage);
console.log("longDistancePass:", longestPass);

