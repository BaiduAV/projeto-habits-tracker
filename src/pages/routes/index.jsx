import { Route, Switch } from 'react-router'
import { Intro } from '../intro'
import { Signup } from '../signup'
import { Login } from '../login'
import { MainPage } from '../mainPage'
import { GroupCreation } from '../groupCreation'
import { SearchGroup } from '../searchGroup'
import { GroupData } from '../groupData'

function Routes() {
	return (
		<Switch>
			<Route exact path='/'>
				<Intro />
			</Route>
			<Route path='/signup'>
				<Signup />
			</Route>
			<Route path='/login'>
				<Login />
			</Route>
			<Route path='/mainPage'>
				<MainPage />
			</Route>
			<Route path='/createGroup'>
				<GroupCreation />
			</Route>
			<Route path='/searchGroup'>
				<SearchGroup />
			</Route>
			<Route path='/groupData'>
				<GroupData />
			</Route>
		</Switch>
	)
}

export default Routes
