'''
문제 이름 : 행렬의 덧셈
링크 : https://programmers.co.kr/learn/courses/30/lessons/12950?language=python3
'''

#첫 풀이
def solution(arr1, arr2):
    for i in range(len(arr1)):
        for j in range(len(arr1[0])):
            arr1[i][j] +=arr2[i][j]
    return arr1

#다른 풀이