import React, {Component} from 'react';
import {ListView} from 'react-native';
import {Button, Container, Content, Header, Icon, List, ListItem, Text} from 'native-base';

const datas = [
	'Breakfest Ramen - 8am',
	'SUshi - 12p',
	'Hiking - 2p',
];
export default class GuideItinerary extends Component {
	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			basic: true,
			listViewData: datas,
		};
	}

	deleteRow(secId, rowId, rowMap) {
		rowMap[`${secId}${rowId}`].props.closeRow();
		const newData = [...this.state.listViewData];
		newData.splice(rowId, 1);
		this.setState({listViewData: newData});
	}

	render() {
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return (
			<Container>
				<Header/>
				<Text>Osaka Day Guide - 5/30/19</Text>
				<Content>
					<List
						leftOpenValue={75}
						rightOpenValue={-75}
						dataSource={this.ds.cloneWithRows(this.state.listViewData)}
						renderRow={data =>
							<ListItem>
								<Text> {data} </Text>
							</ListItem>}
						renderLeftHiddenRow={data =>
							<Button full onPress={() => alert(data)}>
								<Icon active name="information-circle"/>
							</Button>}
						renderRightHiddenRow={(data, secId, rowId, rowMap) =>
							<Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
								<Icon active name="trash"/>
							</Button>}
					/>
				</Content>
			</Container>
		);
	}
}