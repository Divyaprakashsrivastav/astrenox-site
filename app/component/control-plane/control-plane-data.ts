export const MISSION_METRICS = [
  { id: "tasks", value: 2841, suffix: "", label: "Tasks/hr", prefix: "+" },
  { id: "workflows", value: 47, suffix: "", label: "Active Workflows", prefix: "+" },
  { id: "models", value: 12, suffix: "", label: "Models Online", prefix: "+" },
  { id: "health", value: 99.99, suffix: "%", label: "Health", prefix: "+", decimals: 2 },
] as const;

export const MISSION_LOG = [
  "Model Request Completed",
  "Agent Workflow Started",
  "Knowledge Sync Complete",
  "Policy Check Passed",
  "Router Path Optimized",
  "Memory Index Updated",
  "Inference Batch Delivered",
  "Agent Handoff Confirmed",
] as const;

export const MISSION_STATUS = [
  { id: "router", label: "Model Router", status: "Active", state: "nominal" as const },
  { id: "memory", label: "Memory Layer", status: "Synced", state: "nominal" as const },
  { id: "policies", label: "Policy Engine", status: "Enforcing", state: "nominal" as const },
  { id: "agents", label: "Agent Fleet", status: "47 Online", state: "nominal" as const },
  { id: "latency", label: "P95 Latency", status: "142ms", state: "nominal" as const },
  { id: "queue", label: "Task Queue", status: "Clear", state: "nominal" as const },
] as const;

export const MODEL_LABELS = [
  "GPT-4o",
  "Claude",
  "Gemini",
  "Llama",
  "Mistral",
  "Mixtral",
  "Command",
  "Haiku",
  "Sonnet",
  "Opus",
  "Embed",
  "Custom",
] as const;
