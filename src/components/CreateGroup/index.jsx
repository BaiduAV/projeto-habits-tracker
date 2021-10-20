import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {TextField, Button} from '@mui/material'
import * as yup from 'yup'
import api from '../../services/api'

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
		api
			.post('/groups/', data, config)
			.then(() => {
				history.push('/mainPage')
			})
			.catch((e) => console.log(e))
	}

	return (
		<>
			<form onSubmit={handleSubmit(sendRequest)}>
				<div>
					<TextField
						placeholder='Nome'
						{...register('name')}
						error={!!errors.name}
						helperText={errors.name?.message}
					/>
				</div>
				<div>
					<TextField
						placeholder='Descrição'
						{...register('description')}
						error={!!errors.description}
						helperText={errors.description?.message}
					/>
				</div>
				<div>
					<TextField
						placeholder='Categoria'
						{...register('category')}
						error={!!errors.category}
						helperText={errors.category?.message}
					/>
				</div>
				<div>
					<Button variant='outlined' type='submit'>CRIAR GRUPO</Button>
				</div>
			</form>
		</>
	)
}

export default CreateGroup
