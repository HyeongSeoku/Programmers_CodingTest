'''
문제 이름 : 핸드폰 번호 가리기
링크 : https://programmers.co.kr/learn/courses/30/lessons/12948?language=python3
'''

#첫 풀이
def hidePhoneNum(phone_number):
    answer = ''
    phoneLen = len(phone_number)
    answer+='*'*(phoneLen-4)+phone_number[len(phone_number)-4:len(phone_number)]
    return answer

#다른 풀이