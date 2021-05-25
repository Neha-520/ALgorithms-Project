export function QuickSortAlgorithm(array) {
    let animations = [];
    let auxillaryArray = array.slice();
    QuickSort(auxillaryArray, 0, auxillaryArray.length - 1, animations);
    let sortedArray = array.slice().sort((a, b) => a - b);
    console.log(areEqualCheck(sortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array];
  }
  
  function areEqualCheck(sortedArray, auxillaryArray) {
    if (sortedArray.length !== auxillaryArray.length) return false;
    for (let i = 0; i < sortedArray.length; i++) {
      if (sortedArray[i] !== auxillaryArray[i]) return false;
    }
    return true;
  }
  
  function QuickSort(auxillaryArray, startIndex, endIndex, animations) {
    if (startIndex < endIndex) {
      let pivotIndex = partition(
        auxillaryArray,
        startIndex,
        endIndex,
        animations
      );
      QuickSort(auxillaryArray, startIndex, pivotIndex - 1, animations);
      QuickSort(auxillaryArray, pivotIndex + 1, endIndex, animations);
    }
  }
  
  function partition(auxillaryArray, startIndex, endIndex, animations) {
    let pivot = auxillaryArray[endIndex];
    let checkIndex = startIndex;
    for (let i = startIndex; i < endIndex; i++) {
      animations.push(['comparison1', i, endIndex]);
      animations.push(['comparison2', i, endIndex]);
      if (auxillaryArray[i] <= pivot) {
        animations.push(['swapHeight', i, auxillaryArray[checkIndex]]);
        animations.push(['swapHeight', checkIndex, auxillaryArray[i]]);
        swap(auxillaryArray, i, checkIndex);
        checkIndex++;
      } else {
        animations.push(['swapHeight', -1, -1]);
        animations.push(['swapHeight', -1, -1]);
      }
      animations.push(['swapHeight', -1, -1]);
      animations.push(['swapHeight', -1, -1]);
    }
    animations.push(['comparison1', -1, -1]);
    animations.push(['comparison2', -1, -1]);
    animations.push(['swapHeight', -1, -1]);
    animations.push(['swapHeight', -1, -1]);
    animations.push(['swapHeight', checkIndex, auxillaryArray[endIndex]]);
    animations.push(['swapHeight', endIndex, auxillaryArray[checkIndex]]);
    swap(auxillaryArray, checkIndex, endIndex);
  
    return checkIndex;
  }
  
  function swap(auxillaryArray, firstIndex, secondIndex) {
    let temp = auxillaryArray[firstIndex];
    auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
    auxillaryArray[secondIndex] = temp;
  }
   // //QuickSortAlgorithm([7, 2, 1, 6]);

  // function quickSort(auxillaryArray, startIndex, endIndex, animations) {
  //   let pivotIndex;
  //   if (startIndex < endIndex) {
  //     pivotIndex = partitionArray(
  //       auxillaryArray,
  //       startIndex,
  //       endIndex,
  //       animations
  //     );
  //     quickSort(auxillaryArray, startIndex, pivotIndex - 1, animations);
  //     quickSort(auxillaryArray, pivotIndex + 1, endIndex, animations);
  //   }
  // }
   // function swap(auxillaryArray, firstIndex, secondIndex) {
  //   let temp = auxillaryArray[firstIndex];
  //   auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
  //   auxillaryArray[secondIndex] = temp;
  // }
s