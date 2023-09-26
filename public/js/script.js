findAll();

async function findAll() {
  const baseUrl = "http://localhost:3000/api";
  const res = await fetch(baseUrl);
  if (res.status !== 200) {
    alert("Something went wrong");
    return;
  }
  const jsonData = await res.json();
  return jsonData;
}
