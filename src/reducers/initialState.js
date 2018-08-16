import {cellType} from './../modules/TabViews/overview/cells/constants'

export default {
	overviewContent: {
		list:[
			{
				title: 'Residents', 
				data: [
					{
						cellType:cellType.ResidentCell,
						name:'Scott Terry',
						role:'Owner'
					},
					{
						cellType:cellType.ResidentCell,
						name:'Clay Herendeen',
						role:'Resident'
					}
				]
			},
			{
				title: 'Residence contacts', 
				data: [
					{
						cellType:cellType.ResidenceContactCell,
						name:'John Smith',
						role:'Owner',
						phone:'585-111-1111'
					},
					{
						cellType:cellType.ResidenceContactCell,
						name:'Phillip Smith',
						role:'Manager',
						phone:'585-111-2222'
					},
					{
						cellType:cellType.AddCell,
						label:'Add contact'
					}
				]
			},
			{
				title: 'More',
				data: [
					{
						cellType:cellType.LinkedItemCell,
						label:'Notes',
					},
					{
						cellType:cellType.LinkedItemCell,
						label:'Directions',
					},
					{
						cellType:cellType.LinkedItemCell,
						label:'Tech Support',
					}
				]
			}
		]
	},
	visitorsContent: {},
	eventsContent: {},
	navigation:{
		title:'Test title',
		leftTBOptions:[],
		rightTBOptions:[],
	},
	tabController:{
		activeTabUrl:'/'
	}
};
