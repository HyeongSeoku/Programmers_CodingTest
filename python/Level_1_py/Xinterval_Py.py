'''
문제 이름 : x만큼 간격이 있는 n개의 숫자
링크 : https://programmers.co.kr/learn/courses/30/lessons/12954?language=python3
'''

#첫 풀이
def xinterval(x, n):
    answer = []
    for i in range(1,n+1):
        answer.append(x*i)
    return answer
#다른 풀이
def xinterval_2(x,n):
    return [i * x + x for i in range(n)]


