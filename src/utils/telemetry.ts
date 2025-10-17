export function track(event: string, payload: Record<string, unknown>) {
  if (import.meta.env.VITE_DISABLE_TELEMETRY === "true") return;
  
  const telemetryData = {
    event,
    payload,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
  };
  
  console.log("[Telemetry]", telemetryData);
  
  // In production, send to your analytics endpoint
  // fetch("/api/telemetry", { 
  //   method: "POST", 
  //   headers: {"Content-Type":"application/json"}, 
  //   body: JSON.stringify(telemetryData) 
  // }).catch(console.error);
}
