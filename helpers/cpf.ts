/**
 * utilitarios de CPF (Validação com digitos verificadores brasileiros)
 * Algoritimo classico de validação de CPF - não depende de Apis externa
 */
export const remobeCpfPunctuation = (cpf: string): string => {
    return cpf.replace(/\D/g, '');
}
 
export const isvalidCpf = (cpf: string): boolean => {
    let degits = cpf.replace(/\D/g, '');
 
    if (degits.length !== 11) {
        return false;
    }
 
    // Rejeita 111.111.111-11, 000..., etc.
    if (/^(\d)\1+$/.test(degits)) {
        return false;
    }
 
    // 1º dígito verificador (posiçao 9)
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(degits.charAt(i)) * (10 - i);
    }
    let firtVerifier = (sum * 10) % 11;
    firtVerifier = firtVerifier === 10 ? 0 : firtVerifier;
 
    if (firtVerifier !== parseInt(degits.charAt(9), 10)) {
        return false;
    }
 
    // 2º dígito verificador (posiçao 10)
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(degits.charAt(i)) * (11 - i);
    }
 
    let secondVerifier = (sum * 10) % 11;
    secondVerifier = secondVerifier === 10 ? 0 : secondVerifier;
 
    return secondVerifier === parseInt(degits.charAt(10), 10);
}