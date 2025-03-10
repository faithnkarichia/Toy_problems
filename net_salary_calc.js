function salaryCalculator(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;

    function payee(grossSalary) {
        if (grossSalary <= 24000) {
            return 0.1 * grossSalary;
        } else if (grossSalary <= 32333) {
            return 0.25 * grossSalary;
        } else if (grossSalary <= 500000) {
            return 0.3 * grossSalary;
        } else if (grossSalary <= 800000) {
            return 0.325 * grossSalary;
        } else {
            return 0.35 * grossSalary;
        }
    }

    function shifDeductions(grossSalary) {
        return grossSalary * 0.0275;
    }

    function housingLevy(grossSalary) {
        return grossSalary * 0.015;
    }

    function calculateNSSF(grossSalary) {
        let tier1 = Math.min(grossSalary, 8000) * 0.06;
        let tier2 = 0;

        if (grossSalary > 8000) {
            let pensionablePay = Math.min(grossSalary, 72000) - 8000;
            tier2 = pensionablePay * 0.06;
        }

        return tier1 + tier2;
    }

    let tax = payee(grossSalary);
    let shif = shifDeductions(grossSalary);
    let housing = housingLevy(grossSalary);
    let nssf = calculateNSSF(grossSalary);
    
    let netSalary = grossSalary - (tax + shif + housing + nssf);
    return `net salary: ${netSalary} payee: ${tax} SHIF: ${shif} NSSF: ${nssf} Housing Levy: ${housing}`;
}

console.log(salaryCalculator(100000, 10000));
