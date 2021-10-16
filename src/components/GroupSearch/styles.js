import styled from 'styled-components'
import {Button} from "@mui/material";

export const Header = styled.section`
	display: flex;
	justify-content: center;
	margin-top: 15px;
	margin-bottom: 35px;
`

export const SearchButton = styled(Button)`
	padding: 10px 20px;
	border-radius: 5%;
	outline: none;
`

export const SearchResults = styled.div`
	display: flex;
	max-width: 910px;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	mragin-left: 200px;
`

export const Results = styled.div`
	width: 220px;
	height: 115px;
	padding: 10px 35px;
	border: 1px dotted blue;
	border-radius: 5%;
	margin-left: 20px;
	margin-bottom: 10px;
`
/*
input {
	padding: 10px 20px;
	border-radius: 5%;
	outline: none;
}
*/