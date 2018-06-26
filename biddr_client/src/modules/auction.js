import { BASE_URL } from './config';

export default {
	all() {
		return fetch(`http://localhost:3444/auctions`, {
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include'
		}).then(response => response.json());
	},
	one(id) {
		return fetch(`${BASE_URL}/auctions/${id}`, {
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include'
		}).then(response => response.json());
	},
	create(params) {
		return fetch(`${BASE_URL}/auctions`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify(params)
		}).then(response => response.json());
	}
};