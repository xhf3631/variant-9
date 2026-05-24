export default function App() {
  const a = 1.1;
  const b = 0.09;

  const xStart = 1.2;
  const xEnd = 2.2;
  const step = 0.2;

  const rows = [];

  for (let x = xStart; x <= xEnd + 0.0001; x += step) {
    const numerator = Math.log10(x * x - 1);

    // log5(ax² - b)
    const denominator =
      Math.log10(a * x * x - b) / Math.log10(5);

    const y = numerator / denominator;

    rows.push({
      x: x.toFixed(2),
      y: y.toFixed(4),
    });
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Задача 1 - Вариант 9</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>x</th>
            <th>y</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
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