const clocks = [
  { city: "London", timezone: "Europe/London" },
  { city: "New York", timezone: "America/New_York" },
  { city: "Tokyo", timezone: "Asia/Tokyo" },
  { city: "Sydney", timezone: "Australia/Sydney" },
  { city: "Dubai", timezone: "Asia/Dubai" },
  { city: "São Paulo", timezone: "America/Sao_Paulo" },
];

try {
  const next = {};
  clocks.forEach(({ city, timezone }) => {
    next[city] = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());
  });
  console.log(next);
} catch (e) {
  console.error("Error", e);
}
