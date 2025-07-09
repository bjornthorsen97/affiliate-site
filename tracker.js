function trackClick(source) {
  const delay = Math.random() * (4200 - 2100) + 2100; // καθυστέρηση 2.1–4.2s
  console.log(`[${new Date().toISOString()}] Click from: ${source}`);
  setTimeout(() => {
    // Μπορείς να στείλεις click info στο δικό σου endpoint (π.χ. webhook)
  }, delay);
}
