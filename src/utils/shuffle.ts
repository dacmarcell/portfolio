/**
 * Embaralha os elementos de uma lista de forma aleatória.
 *
 * Esta função implementa o algoritmo de Fisher-Yates para embaralhamento,
 * que embaralha a lista modificando-a in-place e retorna a lista embaralhada.
 * A função garante um embaralhamento justo e de tempo linear O(n), onde n é
 * o número de elementos na lista.
 *
 * @template T
 * @param {Array<T>} list - A lista de elementos a ser embaralhada. A lista será modificada in-place.
 * @returns {Array<T>} - A lista embaralhada.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const shuffled = shuffle(numbers);
 * console.log(shuffled); // A ordem dos elementos será alterada aleatoriamente.
 */
export default function shuffle<T>(list: Array<T>): Array<T> {
  let currentIndex = list.length;

  while (currentIndex != 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [list[currentIndex], list[randomIndex]] = [
      list[randomIndex],
      list[currentIndex],
    ];
  }

  return list;
}
