export function digitsOnly(cpf: string): string {
    return cpf.replace(/\D/g, '').slice(0, 11);
}

export function formatCpfDisplay(digits: string) : string {
    const d = digitsOnly(digits);
    if (d.length <= 3) return d;
    if (d.length <= 6) return `${d.slice(0, 3)}.${d.slice(3)}`;
    if (d.length <= 9) return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}`;
    return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
}