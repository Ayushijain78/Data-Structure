function truncate(str, maxLength) {
  return str.length > maxLength ? str.slice(0, maxLength - 1) + "…" : str;
}
truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"

truncate("Hi everyone!", 20) == "Hi everyone!"