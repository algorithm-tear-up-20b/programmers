function solution(s) {
  let cnt = 0; // 빼준 부분을 카운트
  let answer;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      // 스택의 끝부분과 i를 비교
      stack.pop();
      //stack = ['b']
      cnt++;
    } else {
      stack.push(s[i]);
      //stack = ['b']
      //stack = ['b','a']
    }
  }

  s.length / 2 === cnt ? (answer = 1) : (answer = 0);
  return answer;
}

// 정확성  테스트
// for of 문
// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (9.44ms, 38.3MB)
// 테스트 3 〉	통과 (6.18ms, 38.7MB)
// 테스트 4 〉	통과 (6.47ms, 39.2MB)
// 테스트 5 〉	통과 (6.58ms, 39.1MB)
// 테스트 6 〉	통과 (6.92ms, 39.2MB)
// 테스트 7 〉	통과 (6.62ms, 39.3MB)
// 테스트 8 〉	통과 (6.68ms, 39.2MB)
// 테스트 9 〉	통과 (0.05ms, 33.4MB)
// 테스트 10 〉	통과 (0.15ms, 33.4MB)
// 테스트 11 〉	통과 (0.05ms, 33.4MB)
// 테스트 12 〉	통과 (0.05ms, 33.4MB)
// 테스트 13 〉	통과 (0.05ms, 33.4MB)

// 효율성  테스트
// 테스트 1 〉	통과 (43.24ms, 58.2MB)
// 테스트 2 〉	통과 (56.83ms, 41.8MB)
// 테스트 3 〉	통과 (34.04ms, 51.4MB)
// 테스트 4 〉	통과 (67.58ms, 51.2MB)
// 테스트 5 〉	통과 (33.76ms, 51.2MB)
// 테스트 6 〉	통과 (30.62ms, 51.4MB)
// 테스트 7 〉	통과 (67.80ms, 51.2MB)
// 테스트 8 〉	통과 (35.22ms, 58.2MB)

// 일반 for문
// 정확성  테스트
// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (8.62ms, 37.9MB)
// 테스트 3 〉	통과 (5.83ms, 38MB)
// 테스트 4 〉	통과 (6.03ms, 38.3MB)
// 테스트 5 〉	통과 (5.63ms, 38.5MB)
// 테스트 6 〉	통과 (6.01ms, 38.4MB)
// 테스트 7 〉	통과 (5.55ms, 38.3MB)
// 테스트 8 〉	통과 (5.59ms, 38.2MB)
// 테스트 9 〉	통과 (0.05ms, 33.4MB)
// 테스트 10 〉	통과 (0.13ms, 33.4MB)
// 테스트 11 〉	통과 (0.06ms, 33.5MB)
// 테스트 12 〉	통과 (0.05ms, 33.5MB)
// 테스트 13 〉	통과 (0.05ms, 33.5MB)
// 효율성  테스트
// 테스트 1 〉	통과 (49.65ms, 51.2MB)
// 테스트 2 〉	통과 (45.46ms, 39.4MB)
// 테스트 3 〉	통과 (22.25ms, 43.9MB)
// 테스트 4 〉	통과 (20.51ms, 43.8MB)
// 테스트 5 〉	통과 (21.74ms, 43.8MB)
// 테스트 6 〉	통과 (51.63ms, 43.4MB)
// 테스트 7 〉	통과 (60.67ms, 43.4MB)
// 테스트 8 〉	통과 (21.29ms, 46.9MB)

// 채점 결과
// 정확성: 60.2
// 효율성: 39.8
// 합계: 100.0 / 100.0
