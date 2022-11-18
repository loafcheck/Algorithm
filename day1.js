git: 파일 히스토리 저장하는 공간을 레파지토리 이고. 깃은 파일버전을 기록해주는 프로그램. 저장한 커밋보기 shift command .
원격저장소: 온라인레파지토리, 깃헙

git init : 레파지토리 만들어

git commit -m trial
git branch -M main : 깃허브는 브랜치를 메인으로 두라고 명령하닌깐 넣어주세요
git add 파일명 혹은 git add . 
git commit -m '메세지'
git push -u 저장소주소 main  로컬저장소에서 온라인으로 올려보자
// n의배수고르기: 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.
function solution(n, numlist) {
    let arr = [];
    for (let i = 0; i < numlist.length ;  i++) {
        if (numlist[i] % n ==0) {
            arr.push(numlist[i]);
        }
    }
    return arr; 
}
//직각삼각형출력하기:"*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.

//세균증식: 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.Math.pow (x,y)=2^y

function solution(n, t) {

    return n*Math.pow(2,t);
}

Math.pow (x,y)=x^y

n  *  2^t

/*
t=1
t   nn        

t*2 nnnn     

t*3 nnnnnnnn


*/

let answer = n;

for (let i = 2; i <= 2**t; i=i*2) {
    answer += i;
}

return answer



for ( let i = 0; i<t; i ++)




// 가위바위보:가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

function solution(rsp) {
    let result = "";

    const getVictory = (t) => {
        // 가위 -> 바위
        if (t === "2") return "0";
        // 바위 -> 보
        else if (t === "0") return "5";
        // 보 ->  가위
        else if (t === "5") return "2";
    }

    for (const t of rsp) {
        result += getVictory(t);
    }

    return result;
}

그리드 알고리즘

let answer = [...rsp].map((item) => item === '2' ? 0 : item === '0' ? 5 : item === '5' ? 2 : '').join('');



var answer = [...my_string].map(item => item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase()).join('');