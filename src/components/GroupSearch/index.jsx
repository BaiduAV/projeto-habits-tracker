import { useState } from 'react'
import {Button, TextField} from '@mui/material'
import axios from 'axios'
import './styles.css'

const GroupSearch = () => {
	const [text, setText] = useState('')
	const [searchResults, setSearchResults] = useState([])

	const searchGroups = () => {
		axios
			.get(`https://kenzie-habits.herokuapp.com/groups/?search=${text}`)
			.then((response) => setSearchResults(response.data.results))
			.catch((err) => console.log(err))
	}
	return (
		<>
			<section className='header'>
				<div>
					<TextField
						type='search'
						label='Buscar Grupos'
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
				<div>
					<Button variant='contained' onClick={searchGroups}>BUSCAR</Button>
				</div>
			</section>
			<section>
				{searchResults.length > 0 ? (
					<div className='searchResults'>
						{searchResults.map((group, index) => {
							return (
								<div key={index} className='results'>
									<p>{group.name}</p>
									<p>Criador: {group.creator.username}</p>
									<p>{group.description}</p>
									<p>{group.users_on_group.length} Membro(s)</p>
								</div>
							)
						})}
					</div>
				) : (
					<div>NENHUM RESULTADO ENCONTRADO</div>
				)}
			</section>
		</>
	)
}

export default GroupSearch
