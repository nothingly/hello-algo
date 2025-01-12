/**
 * File: linkedlist_deque.ts
 * Created Time: 2023-02-04
 * Author: Zhuo Qinyue (1403450829@qq.com)
 */

/* 双向链表结点 */
class ListNode {
    prev: ListNode;     // 前驱结点引用 (指针)
    next: ListNode;     // 后继结点引用 (指针)
    val: number;        // 结点值

    constructor(val: number) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

/* 基于双向链表实现的双向队列 */
class LinkedListDeque {
    front: ListNode;    // 头结点 front
    rear: ListNode;     // 尾结点 rear
    len: number;        // 双向队列的长度

    constructor() {
        this.front = null;
        this.rear = null;
        this.len = 0;
    }
    
    /* 队尾入队操作 */
    pushLast(val: number): void {
        const node: ListNode = new ListNode(val);
        // 若链表为空，则令 front, rear 都指向 node
        if (this.len === 0) {
            this.front = node;
            this.rear = node;
        } else {
            // 将 node 添加至链表尾部
            this.rear.next = node;
            node.prev = this.rear;
            this.rear = node; // 更新尾结点
        }
        this.len++;
    }

    /* 队首入队操作 */
    pushFirst(val: number): void {
        const node: ListNode = new ListNode(val);
        // 若链表为空，则令 front, rear 都指向 node
        if (this.len === 0) {
            this.front = node;
            this.rear = node;
        } else {
            // 将 node 添加至链表头部
            this.front.prev = node;
            node.next = this.front;
            this.front = node; // 更新头结点
        }
        this.len++;
    }

    /* 队尾出队操作 */
    pollLast(): number {
        if (this.len === 0) {
            return null;
        }
        const value: number = this.rear.val; // 存储尾结点值
        // 删除尾结点
        let temp: ListNode = this.rear.prev;
        if (temp !== null) {
            temp.next = null;
            this.rear.prev = null;
        }
        this.rear = temp;   // 更新尾结点
        this.len--;
        return value;
    }

    /* 队首出队操作 */
    pollFirst(): number {
        if (this.len === 0) {
            return null;
        }
        const value: number = this.front.val; // 存储尾结点值
        // 删除头结点
        let temp: ListNode = this.front.next;
        if (temp !== null) {
            temp.prev = null;
            this.front.next = null;
        }
        this.front = temp;   // 更新头结点
        this.len--;
        return value;
    }

    /* 访问队尾元素 */
    peekLast(): number {
        return this.len === 0 ? null : this.rear.val;
    }

    /* 访问队首元素 */
    peekFirst(): number {
        return this.len === 0 ? null : this.front.val;
    }

    /* 获取双向队列的长度 */
    size(): number {
        return this.len;
    }

    /* 判断双向队列是否为空 */
    isEmpty(): boolean {
        return this.len === 0;
    }

    /* 打印双向队列 */
    print(): void {
        const arr: number[] = [];
        let temp: ListNode = this.front;
        while (temp !== null) {
            arr.push(temp.val);
            temp = temp.next;
        }
        console.log("[" + arr.join(", ") + "]");
    }
}

/* 初始化双向队列 */
const linkedListDeque: LinkedListDeque = new LinkedListDeque();
linkedListDeque.pushLast(3);
linkedListDeque.pushLast(2);
linkedListDeque.pushLast(5);
console.log("双向队列 linkedListDeque = ");
linkedListDeque.print();

/* 访问元素 */
const peekFirst: number = linkedListDeque.peekFirst();
console.log("队首元素 peekFirst = " + peekFirst);
const peekLast: number = linkedListDeque.peekLast();
console.log("队尾元素 peekLast = " + peekLast);

/* 元素入队 */
linkedListDeque.pushLast(4);
console.log("元素 4 队尾入队后 linkedListDeque = ");
linkedListDeque.print();
linkedListDeque.pushFirst(1);
console.log("元素 1 队首入队后 linkedListDeque = ");
linkedListDeque.print();

/* 元素出队 */
const pollLast: number = linkedListDeque.pollLast();
console.log("队尾出队元素 = " + pollLast + "，队尾出队后 linkedListDeque = ");
linkedListDeque.print();
const pollFirst: number = linkedListDeque.pollFirst();
console.log("队首出队元素 = " + pollFirst + "，队首出队后 linkedListDeque = ");
linkedListDeque.print();

/* 获取双向队列的长度 */
const size: number = linkedListDeque.size();
console.log("双向队列长度 size = " + size);

/* 判断双向队列是否为空 */
const isEmpty: boolean = linkedListDeque.isEmpty();
console.log("双向队列是否为空 = " + isEmpty);
