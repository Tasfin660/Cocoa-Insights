const filterArray = (array: string[]) => {
	const filteredArr = array?.filter((arr, i) => array.indexOf(arr) === i);
	return filteredArr;
};

export default filterArray;
