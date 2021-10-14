import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'

const CreateGroup = () => {
	const history = useHistory()
	// eslint-disable-next-line no-unused-vars
	const [token, setToken] = useState(() => {
		const localToken = localStorage.getItem('token') || ''
		return JSON.parse(localToken)
	})
	const config = { headers: { Authorization: `Bearer ${token}` } }

	const schema = yup.object().shape({
		name: yup.string().required('Campo obrigatório'),
		description: yup.string().required('Campo obrigatório'),
		category: yup.string().required('Campo obrigatório'),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) })

	const sendRequest = (data) => {
		axios
			.post('https://kenzie-habits.herokuapp.com/groups/', data, config)
			.then((response) => {
				history.push('/mainPage')
			})
			.catch((e) => console.log(e))
	}

	return (
		<>
			<form onSubmit={handleSubmit(sendRequest)}>
				<div>
					<input
						placeholder='Nome'
						{...register('name')}
						error={!!errors.name}
					/>
				</div>
				<div>
					<input
						placeholder='Descrição'
						{...register('description')}
						error={!!errors.description}
					/>
				</div>
				<div>
					<input
						placeholder='Categoria'
						{...register('category')}
						error={!!errors.category}
					/>
				</div>
				<div>
					<button type='submit'>CRIAR GRUPO</button>
				</div>
			</form>
		</>
	)
}

export default CreateGroup
