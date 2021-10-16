import { useState } from 'react'
import {TextField} from '@mui/material'
import api from '../../services/api'
import {Header, Results, SearchButton, SearchResults} from './styles'

const GroupSearch = () => {
	const [text, setText] = useState('')
	const [searchResults, setSearchResults] = useState([])

	const searchGroups = () => {
		api
			.get(`/groups/?search=${text}`)
			.then((response) => setSearchResults(response.data.results))
			.catch((err) => console.log(err))
	}
	return (
		<>
			<Header>
				<div>
					<TextField
						type='search'
						label='Buscar Grupos'
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
				<div>
					<SearchButton variant='contained' onClick={searchGroups}>BUSCAR</SearchButton>
				</div>
			</Header>
			<section>
				{searchResults.length > 0 ? (
					<SearchResults>
						{searchResults.map((group, index) => {
							return (
								<Results key={index}>
									<p>{group.name}</p>
									<p>Criador: {group.creator.username}</p>
									<p>{group.users_on_group.length} Membro(s)</p>
									<p>{group.id}</p>
								</Results>
							)
						})}
					</SearchResults>
				) : (
					<div>NENHUM RESULTADO ENCONTRADO</div>
				)}
			</section>
		</>
	)
}

export default GroupSearch
