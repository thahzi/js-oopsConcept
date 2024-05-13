// methods for solving the given questions

class Bank{
    accountDetails = {
        1000:{acno:1000,username:'userone',password:'userone',balance:50000},
        1001:{acno:1001,username:'usertwo',password:'usertwo',balance:5000},
        1002:{acno:1002,username:'userthree',password:'userthree',balance:10000},
        1003:{acno:1003,username:'userfour',password:'userfour',balance:6000}
    }

    validate(accno){
        if(accno in this.accountDetails){
              return  console.log(`Account no is present`);
            }
            else{
             return   console.log(`Account no not present`);
            }
        }

        // Authenticating the bank account
    authenticate(accno,pass){
        // console.log(this.accountDetails);

         for (let i in this.accountDetails) {
            if (this.accountDetails[i].acno == accno && this.accountDetails[i].password == pass) {
                console.log(`Authentication passed`);
                return; // Exit the loop if successful
            }
        }
        console.log(`Authentication failed`);
        } 

        // Calculating the balance
        calbalance(accno,pass){
            if(accno in this.accountDetails && this.accountDetails[accno].password==pass){
                console.log(this.accountDetails[accno].balance);
            }

            else{
                console.log(`Account no not found`);
            }
        }

        // Fund transfer (acc1 => debit && acc2=> credit)
        fundtrans(acc1,acc2,fund,pass){

            if(acc1 in this.accountDetails && acc2 in this.accountDetails && this.accountDetails[acc1].password == pass){
                if(this.accountDetails[acc1].balance>=fund){
                this.accountDetails[acc1].balance -= fund
                this.accountDetails[acc2].balance += fund
                console.log(`Amount of ${fund} is transfered from ${acc1} to ${acc2}`);
                console.log(this.accountDetails);
                }

                else{
                    console.log(`Insufficient balance`);
                }
                
            }

            else{
                console.log(`Account no.s not found`);
            }
           
        }


    }

    
    


// Validate a given account number

const obj = new Bank()
obj.validate(1002)
console.log(`____________________________________`);
// Authenticate the account

obj.authenticate(1000,'userone')
console.log(`____________________________________`);

// check the balance
obj.calbalance(1001,`usertwo`)
console.log(`____________________________________`);


// fund transfer
obj.fundtrans(1000,1003,3000,`userone`)
console.log(`____________________________________`);