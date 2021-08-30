"usestrict"

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
  
/*
* Каждая транзакция это объект со свойствами: id, type и amount
*/

const account = {
  // Текущий баланс счета
  balance: 0,
  // История транзакций
  transactions: [],
  id: 0001,
    /* Метод создает и возвращает объект транзакции.
    * Принимает сумму и тип транзакции.
    */
  createTransaction(amount, type) {
    return {
      id: this.id++,
      type: type,
      amount: amount,
    };
  },

  /*
    * Метод отвечающий за добавление суммы к балансу.
    * Принимает сумму танзакции.
    * Вызывает createTransaction для создания объекта транзакции
    * после чего добавляет его в историю транзакций
    */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  /*
    * Метод отвечающий за снятие суммы с баланса.
    * Принимает сумму танзакции.
    * Вызывает createTransaction для создания объекта транзакции
    * после чего добавляет его в историю транзакций.
    *
    * Если amount больше чем текущий баланс, выводи сообщение
    * о том, что снятие такой суммы не возможно, недостаточно средств.
    */
  withdraw(amount) {
    this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
    if ( this.balance < amount ) {
      alert("Operation is not possible: there are not enough balance");
    } else this.balance -= amount;
  },

  /*
    * Метод возвращает текущий баланс
    */
  getBalance() {
    return this.balance;
  },

  /*
    * Метод ищет и возвращает объект транзации по id
    */
  getTransactionDetails(id) {
    return this.transactions.find(item => item.id == id);
  },

  /*
    * Метод возвращает количество средств
    * определенного типа транзакции из всей истории транзакций
    */
  getTransactionTotal(type) {
    let TransactionTotal = 0;
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type == type) {
        TransactionTotal += this.transactions[i].amount;
      }
    }
    return TransactionTotal;
  },
};