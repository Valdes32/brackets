module.exports = function check(str, bracketsConfig) {
	const stack = [];
	const bracketsMap = new Map(bracketsConfig);

	for (const char of str) {
			if (bracketsMap.has(char)) {
					const openingBracket = bracketsMap.get(char);

					if (openingBracket === char && stack[stack.length - 1] === char) {
							stack.pop(); // Удаляем закрывающую скобку из стека, если она равна открывающей
					} else {
							stack.push(char);
					}
			} else {
					const lastOpeningBracket = stack.pop();
					if (bracketsMap.get(lastOpeningBracket) !== char) {
							return false;
					}
			}
	}

	return stack.length === 0;
};
