export default function App() {
  const a = 1.1;
  const b = 0.09;

  // -------------------
  // ЗАДАЧА A
  // -------------------

  const taskA = [];

  for (let x = 1.2; x <= 2.2 + 0.0001; x += 0.2) {
    const y =
      Math.log10(x * x - 1) /
      (Math.log10(a * x * x - b) / Math.log10(5));

    taskA.push({
      x: x.toFixed(2),
      y: y.toFixed(4),
    });
  }

  // -------------------
  // ЗАДАЧА B
  // -------------------

  const xValues = [1.21, 1.76, 2.53, 3.48, 4.52];

  const taskB = xValues.map((x) => {
    const y =
      Math.log10(x * x - 1) /
      (Math.log10(a * x * x - b) / Math.log10(5));

    return {
      x: x.toFixed(2),
      y: y.toFixed(4),
    };
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Задача 2 — Вариант 9</h1>

      <h2>Задача A</h2>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>x</th>
            <th>y</th>
          </tr>
        </thead>

        <tbody>
          {taskA.map((row) => (
            <tr key={row.x}>
              <td>{row.x}</td>
              <td>{row.y}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <h2>Задача B</h2>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>x</th>
            <th>y</th>
          </tr>
        </thead>

        <tbody>
          {taskB.map((row) => (
            <tr key={row.x}>
              <td>{row.x}</td>
              <td>{row.y}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}