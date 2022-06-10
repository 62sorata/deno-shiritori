import{ serve } from "https://deno.land/std@0.138.0/http/server.ts";
import{ serveDir } from
"https://deno.land/std@0.138.0/http/file_server.ts";

let previousWord = "しりとり";

console.log("Listening on http://localhost:8000");

document.addEventListener('DOMContentLoaded',function(){
	tabs = document.querySelectorAll('#js-tab li');
	for(i=0; i<tabs.length; i++) {
		tabs[i].addEventListener('click', tabSwitch, false);
	}

	function tabSwitch(){
		tabs = document.querySelectorAll('#js-tab li');
		var node = Array.prototype.slice.call(tabs, 0);
		node.forEach(function (element) {
			element.classList.remove('active');
		});

		this.classList.add('active');

		content = document.querySelectorAll('.tab-content');
		var node = Array.prototype.slice.call(content, 0);
		node.forEach(function(element) {
			element.classList.remove('active');
		});

		const arrayTabs = Array.prototype.slice.call(tabs);
		const index = arrayTabs.indexOf(this);

		document.querySelectorAll('.tab-content')[index].classList.add('active');
	};
});

serve(async (req) => {

	const pathname = new URL(req.url).pathname;
	console.log(pathname);

	if (req.method === "GET" && pathname === "/shiritori") {
		return new Response(previousWord);
	}

	if (req.method === "POST" && pathname === "/shiritori") {
		const requestJson = await req.json();
		const nextWord = requestJson.nextWord;

		if (nextWord.length > 0 &&　previousWord.charAt(previousWord.length - 1) !== nextWord.charAt(0)){  
			return new Response("前の単語に続いていません。",{ status: 400 });
		}

		if (!text.value || !text.value.match(/\S/g)){
			return new Response("空白のまま入力してはいけません。",{ status: 400 });
		}

		previousWord = nextWord;
		return new Response(previousWord);
	}

	return serveDir(req, {

		fsRoot: "public",
		urlRoot: "",
		showDirListing: true,
		enableCors: true,

	});
});

//git commit -am "test"
//git push   でいける