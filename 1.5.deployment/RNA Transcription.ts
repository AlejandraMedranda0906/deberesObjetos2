export function toRna(dna_letter: string): string {
    const dnaToRnaMap: { [key: string]: string } = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U',
    };
    const isValidDna = (letter: string) => letter in dnaToRnaMap;
  let result = '';

    for (let nucleotide of dna_letter) {
        if (!isValidDna(nucleotide)) {
            throw new Error('Invalid input DNA.');
        }
        result += dnaToRnaMap[nucleotide];
    }
    return result;
}
