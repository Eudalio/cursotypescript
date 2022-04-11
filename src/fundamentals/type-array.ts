// Duas maneiras de tipar arrays Array<T> e T[], onde T é o tipo correspondente

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

console.log(multiplicaArgs(1, 2, 3));
console.log(concatenaString('a', 'b', 'c'));
console.log(toUpperCase('a', 'b', 'c'));
