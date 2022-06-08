import{ serve } from "https://deno.land/std@0.138.0/http/server.ts";

console.log("Listening on http://localhost:8000");
serve(async (req) => {
	return new Response(await Deno.readTextFile("./public/index.html"),{
		headers: { "Content-Type": "text/html; charset=utf-8" },
	});
});