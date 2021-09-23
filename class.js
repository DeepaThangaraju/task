class Account{
    constructor(name,accountno,balance){
        this.name=name;
        this.accountno=accountno;
        this.balance=balance;
    }
    deposite(dep){
     var currentbalance=this.balance+dep;
     console.log(`current balance is: ${currentbalance}`);
    }

}
const obj=new Account("deepa",123,1300000);
obj.deposite(10000);