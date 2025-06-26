window.addEventListener('DOMContentLoaded', () => {
	const Wrapper = document.querySelector('.posts')
	const main_url = 'https://jsonplaceholder.typicode.com/posts'
	// Method GET

	fetch(main_url, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	})
		.then(response => response.json())
		.then(data => {
			data.forEach((item, index) => {
				const postEl = document.createElement('div')
				postEl.classList.add('post')
				postEl.innerHTML = `
				<h4> <b>#${index + 1}. </b>${item.title}</h4>
      	<p>${item.body}</p>`
				Wrapper.append(postEl)
			})
		})
		.catch(() => {
			const errorEl = document.createElement('div')
			errorEl.classList.add('error')
			errorEl.textContent = 'Something went wrong'
			Wrapper.append(errorEl)
		})
		.finally(() => {
			console.log('Finally')
		})

	// Method POST

	const form = document.querySelector('form')

	form.addEventListener('submit', event => {
		event.preventDefault()
		const formData = new FormData(form)
		const object = {}

		formData.forEach((value, key) => {
			object[key] = value
		})

		const json = JSON.stringify(object)

		fetch(main_url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: json,
		})
			.then(res => res.json())
			.then(data => {
				form.reset()
				const postEl = document.createElement('div')
				postEl.classList.add('post')
				postEl.innerHTML = `
				<h4> <b>#${data.id}. </b>${data.title}</h4>
      	<p>${data.body}</p>`
				Wrapper.append(postEl)
			})
			.catch(err => console.log(err))
	})
})
