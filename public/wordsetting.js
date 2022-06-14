export default function wordException(word) {
			if (word === "が") {
				return "か";
			}
			if (word === "ぎ") {
				return "き";
			}
			if (word === "ぐ") {
				return "く";
			}
			if (word === "げ") {
				return "け";
			}
			if (word === "ご") {
				return "こ";
			}
			if (word === "ざ") {
				return "さ";
			}
			if (word === "じ") {
				return "し";
			}
			if (word === "ず") {
				return "す";
			}
			if (word === "ぜ") {
				return "せ";
			}
			if (word === "ぞ") {
				return "そ";
			}
			if (word === "だ") {
				return "た";
			}
			if (word === "ぢ") {
				return "ち";
			}
			if (word === "づ") {
				return "つ";
			}
			if (word === "で") {
				return "て";
			}
			if (word === "ど") {
				return "と";
			}
			if (word === "ば"||word === "ぱ") {
				return "は";
			}
			if (word === "び"||word === "ぴ") {
				return "ひ";
			}
			if (word === "ぶ"||word === "ぷ") {
				return "ふ";
			}
			if (word === "べ"||word === "ぺ") {
				return "へ";
			}
			if (word === "ぼ"||word === "ぽ") {
				return "ほ";
			}
			if (word === "ぁ") {
				return "あ";
			}
			if (word === "ぃ") {
				return "い";
			}
			if (word === "ぅ") {
				return "う";
			}
			if (word === "ぇ") {
				return "え";
			}
			if (word === "ぉ") {
				return "お";
			}
			if (word === "ゃ") {
				return "や";
			}
			if (word === "ゅ") {
				return "ゆ";
			}
			if (word === "ょ") {
				return "よ";
			}
			return word;
		}