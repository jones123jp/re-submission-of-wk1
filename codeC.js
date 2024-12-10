// Net Salary Calculator

function calculateNetSalary(basicSalary, benefits) {
    const PAYEE_TAX_BRACKETS = [
        { min: 0, max: 24000, rate: 0.1 },   // 10% for 0 - 24,000
        { min: 24001, max: 32333, rate: 0.15 },  // 15% for 24,001 - 32,333
        { min: 32334, max: 40000, rate: 0.2 },  // 20% for 32,334 - 40,000
        { min: 40001, max: Infinity, rate: 0.25 } // 25% for 40,001 and above
    ];

    // NHIF deductions (example - assuming these are fixed values)
    const NHIF_DEDUCTION = 1500;

    // NSSF deductions (example - assuming 6% of basic salary)
    const NSSF_DEDUCTION = basicSalary * 0.06;

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate payee (tax)
    let payeeTax = 0;
    for (const bracket of PAYEE_TAX_BRACKETS) {
        if (grossSalary > bracket.min) {
            let taxableAmount = Math.min(grossSalary, bracket.max) - bracket.min;
            payeeTax += taxableAmount * bracket.rate;
        }
    }

    // Calculate net salary
    const totalDeductions = payeeTax + NHIF_DEDUCTION + NSSF_DEDUCTION;
    const netSalary = grossSalary - totalDeductions;

    return {
        grossSalary,
        payeeTax,
        NHIF_DEDUCTION,
        NSSF_DEDUCTION,
        netSalary
    };
}

// Prompt for input
const basicSalary = prompt("Enter basic salary: ");
const benefits = prompt("Enter benefits: ");

const { grossSalary, payeeTax, NHIF_DEDUCTION, NSSF_DEDUCTION, netSalary } = calculateNetSalary(parseInt(basicSalary), parseInt(benefits));

console.log(`Gross Salary: ${grossSalary}`);
console.log(`Payee Tax: ${payeeTax}`);
console.log(`NHIF Deduction: ${NHIF_DEDUCTION}`);
console.log(`NSSF Deduction: ${NSSF_DEDUCTION}`);
console.log(`Net Salary: ${netSalary}`);
