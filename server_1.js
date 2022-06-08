import { serve } from "https://deno.land/std@0.138.0/http/server.ts"

let count = 0;

console.log("Listening on http://localhost:8000");
serve(req => {
	count++;
	return new Response(`Count: ${count}`);
});

//カウント記録