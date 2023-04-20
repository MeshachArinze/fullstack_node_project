const ac = new AbortController();

ac.signal.addEventListener("abort", () => console.log("Aborted!"), {
  once: true,
});

ac.abort();

console.log(ac.signal.aborted); // Prints True
