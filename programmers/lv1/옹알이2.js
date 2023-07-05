const solution = (babbling) => {
    const regExp1 = /(aya|ye|woo|ma)\1+/;
    const regExp2 = /^(aya|ye|woo|ma)+$/;

    return babbling.reduce((ans, word) => (
        !regExp1.test(word) && regExp2.test(word) ? ++ans : ans
    ), 0)
}


console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
console.log(solution(["aya", "yee", "u", "maa"]));