'''
is_stack_sequence 함수를 작성하세요.
'''

def is_stack_sequence(nums) :
    stack = [1];        #무조건 1을 push 하는 것이 가장 먼저 이루어지므로
    
    current = 0;
    
    for i in range(2,len(nums)+1):
        while len(stack) > 0 and stack[-1] == nums[current]:
            #스택의 마지막번째 인자가 nums의current번째와 일치할 경우
            stack.pop();
            current+=1;     #다음 nums를 위해서
            
        if len(stack) == 0 or stack[-1] < nums[current] :
            stack.append(i);
        else:
            #스택의 마지막번째 인자가 nums의 current 보다 클 경우
            return "No";
    
    return "Yes"