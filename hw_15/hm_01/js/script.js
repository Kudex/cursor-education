function audio() {
  const sven = 15.678;
  const jbl = 90.2345;
  const tannoy = 123.965;

  const maxNum = Math.max(sven, jbl, tannoy);
  const minNum = Math.min(sven, jbl, tannoy);
  return (
    console.log("Максимальна ціна:", maxNum),
    console.log("Мінімальна ціна:", minNum)
  );
}
audio();
