const earners = [
  { name: "Nancy Pelosi", ticker: "NVDA", gain: "$4.2M" },
  { name: "Dan Crenshaw", ticker: "AAPL", gain: "$1.1M" },
  { name: "Josh Gottheimer", ticker: "MSFT", gain: "$980K" },
  { name: "Ro Khanna", ticker: "GOOGL", gain: "$870K" },
  { name: "Tommy Tuberville", ticker: "TSLA", gain: "$820K" }
];

const stocks = [
  { ticker: "NVDA", mentions: 14, trend: "Hot this week" },
  { ticker: "PLTR", mentions: 11, trend: "Rising interest" },
  { ticker: "TSLA", mentions: 9, trend: "Active trades" },
  { ticker: "AAPL", mentions: 8, trend: "Consistent buys" },
  { ticker: "MSFT", mentions: 7, trend: "Steady attention" }
];

const watchlistData = [
  { ticker: "NVDA", note: "AI momentum" },
  { ticker: "PLTR", note: "Government exposure" },
  { ticker: "TSLA", note: "Volatile but active" },
  { ticker: "AAPL", note: "Steady large-cap interest" }
];

const earnersList = document.getElementById("earnersList");
const stocksList = document.getElementById("stocksList");
const watchlist = document.getElementById("watchlist");
const searchInput = document.getElementById("searchInput");

function renderLists(filter = "") {
  earnersList.innerHTML = "";
  stocksList.innerHTML = "";
  watchlist.innerHTML = "";

  const filteredEarners = earners.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()) ||
    item.ticker.toLowerCase().includes(filter.toLowerCase())
  );

  const filteredStocks = stocks.filter(item =>
    item.ticker.toLowerCase().includes(filter.toLowerCase())
  );

  const filteredWatchlist = watchlistData.filter(item =>
    item.ticker.toLowerCase().includes(filter.toLowerCase()) ||
    item.note.toLowerCase().includes(filter.toLowerCase())
  );

  filteredEarners.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <strong>${item.name}</strong>
      Ticker: ${item.ticker}<br>
      Gain: ${item.gain}
    `;
    earnersList.appendChild(div);
  });

  filteredStocks.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <strong>${item.ticker}</strong>
      Mentions: ${item.mentions}<br>
      ${item.trend}
    `;
    stocksList.appendChild(div);
  });

  filteredWatchlist.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <strong>${item.ticker}</strong>
      Note: ${item.note}
    `;
    watchlist.appendChild(div);
  });
}

searchInput.addEventListener("input", e => {
  renderLists(e.target.value);
});

renderLists();
