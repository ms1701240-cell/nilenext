
const rateLimitMap = new Map<string, { count: number; reset: number }>();

export function checkRateLimit(ip: string, limit = 120, windowMs = 60_000) {
  const now = Date.now(); 
  
  
  const entry = rateLimitMap.get(ip) ?? { count: 0, reset: now + windowMs };

  
  if (now > entry.reset) {
    entry.count = 0;
    entry.reset = now + windowMs;
  }

  
  entry.count++;
  rateLimitMap.set(ip, entry);

  
  const isExceeded = entry.count > limit;
  
 
  const retryAfterSeconds = Math.ceil((entry.reset - now) / 1000);

  return { isExceeded, retryAfterSeconds };
}