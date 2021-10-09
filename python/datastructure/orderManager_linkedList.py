'''
1. LinkedListElement 클래스를 완성하세요.
2. orderManager 클래스를 완성하세요.
'''

class LinkedListElement :
    def __init__(self, data, myPrev, myNext) :
        self.data = data
        self.myPrev = myPrev
        self.myNext = myNext
        
class orderManager :
    def __init__(self) :
        self.LinkedList = {}
        self.head = None
        self.tail = None
        
    def addOrder(self, orderId) :
        node = LinkedListElement(orderId, None, None)
        if self.head == None:
            self.head = self.tail = node
        else:
            node.myPrev = self.tail
            self.tail.myNext = node
            self.tail = node
            
        self.LinkedList[orderId] = node     #key:value로 넣어줌


    def removeOrder(self, orderId) :
        if self.head.data == orderId:
            self.head = self.head.myNext
            
        if self.tail.data == orderId:
            self.tail = self.tail.myPrev
            
        del_node = self.LinkedList[orderId]
        
        if del_node.myPrev != None:
            del_node.myPrev.myNext = del_node.myNext
        
        if del_node.myNext != None:
            del_node.myNext.myPrev = del_node.myPrev
        
        del self.LinkedList[orderId]

    def getOrder(self, orderId) :
        if orderId not in self.LinkedList:
            return -1
        
        result = 1
        iter_node = self.head
        
        while iter_node.data != orderId:
            result += 1
            iter_node = iter_node.myNext
            
        return result