import { serve } from "https://deno.land/std@0.138.0/http/server.ts"

let count = 0;

console.log("Listening on http://localhost:8000");
serve(req => {
	return new Response(`<h1>見出しです</h1>`);
});