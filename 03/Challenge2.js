    // CALCULATOR
    // Parameter : Bilangan1, Bilangan2, Operator, HasilPerhitungan
    // Step1. Minta input Bilangan1
    let bilangan1 = Number(prompt('Masukan Bilangan-1'))

    // Step2. Minta input Bilangan2
    let bilangan2 = Number(prompt('Masukan Bilangan-2'))

    // Step3. Minta input Operator
    let operator = prompt('Silahkan Masukan Operator (+, -, *, /)')

    // Step4. Hitung sesuai dengan operator inputan
    let hasil = 0 
    if(operator === '+'){
        hasil = bilangan1 + bilangan2
    }else if(operator === '-'){
        hasil = bilangan1 - bilangan2
    }else if(operator === '*'){
        hasil = bilangan1 * bilangan2
    }else if(operator === '/'){
        hasil = bilangan1 / bilangan2
    }

    // Step5. Tampilkan hasil perhitungannya
    alert(`
        ${bilangan1} ${operator} ${bilangan2} = ${hasil}
    `)