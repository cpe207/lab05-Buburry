// ณฐพร ไพรินทร์ 660610749
/* Your code here */
interface student {
  name: string;
  score: number;
}
// assign interface/type to the function definition properly
function findTopNames(students: student[]):string[] {
  /* Your code here */
  let filtered = students
    .filter((student) => student.score > 8)
    .map((student) => student.name);

    return (filtered);
}

// assign interface/type to the student1 object properly
const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;
