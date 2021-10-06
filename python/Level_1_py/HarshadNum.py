'''
문제 이름 : 하샤드 수
링크 : https://programmers.co.kr/learn/courses/30/lessons/12947?language=python3
'''

#첫 풀이
def harshadNum(x):
    return x % sum([int(c) for c in str(x)]) == 0


#다른 풀이