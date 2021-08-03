export function repeatWord(word, count) {
	if (count > 0) {
		let resultWords = "";
		for (let i = 1; i <= count; ++i) {
			resultWords = resultWords + word + i + ", ";
		}
		return (resultWords);
	} else {
		if (isNaN(count)) {
			return ('Ошибка: count не число');
		}
		return ('Ошибка: число меньше или равно нулю');
	}
}

//repeatWord('кот', 3);