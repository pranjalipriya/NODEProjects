// const createLoanCalculator = (rateOfInterest) => {
//     return (principle, installments,increaseRateOfInterestBy=0) =>{ 
//         rateOfInterest=rateOfInterest+increaseRateOfInterestBy;
//         return rateOfInterest * principle * installments / 100;
//     }
    
// }

// const homeLoanCalculator = createLoanCalculator(8);
// const carLoanCalculator = createLoanCalculator(10);
// const personalLoanCalculator = createLoanCalculator(16);
// const changedHomeLoanCalculator=homeLoanCalculator(100,2,4)
// console.log(changedHomeLoanCalculator);


const createLoanCalculator = (rateOfInterest) => {
    return calculator=(principle, installments) => {
        return rateOfInterest * principle * installments / 100
      }

          function changeROI(value=0) {

            rateOfInterest=rateOfInterest+value; 
            createLoanCalculator(rateOfInterest)
            
         } 
         
    }
    
}

const homeLoanCalculator = createLoanCalculator(8);
const carLoanCalculator = createLoanCalculator(10);
const personalLoanCalculator = createLoanCalculator(16);
const changeHomeLoanCalculatorBy=calculator(100,12);
changeHomeLoanCalculatorBy(8);
