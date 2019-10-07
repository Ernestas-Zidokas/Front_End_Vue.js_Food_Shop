export default () => ({
	products: [],
	status: null,
	favorite: JSON.parse(localStorage.getItem('favorite')) || []
})
