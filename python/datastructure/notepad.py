'''
notepad 함수를 작성하세요.
'''

def notepad(s, commands) :
    #L = 왼쪽으로 커서 이동 R=오른쪽으로 커서이동
    #D = 커서 왼쪽의 문자 삭제 이미 왼쪽일 경우 return
    #P x = x를 커서 왼쪽에 추가
    left = list(s);
    right = [];
    
    for line in commands:
        command = line.split();
        
        action = command[0];
        if action == 'L':
            if len(left) > 0:
                right.append(left.pop());
                
        elif action == 'R':
            if len(right) >0:
                left.append(right.pop());
                
        elif action == 'D':
            if len(left)>0:
                left.pop();
                
        elif action == 'P':
                left.append(command[1]);
                
    
    result = left +right[::-1]
        
    return "".join(result)