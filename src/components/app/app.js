import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                {name: 'Misha S.', salary: 25000, increase: true, rise: true ,id:1},
                {name: 'Alexcande B.', salary: 8000, increase: false, rise: false ,id:2 },
                {name: 'Pavel V.', salary: 3000, increase: false , rise: false , id:3 }
            ]
        }
        this.maxElem=4;
    }
    // удаление элемента через фильтр
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id) 
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise : false, 
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }
    
    onToggleIncrease = (id) =>{
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            
        })
    }

    onToggleRise = (id) => {

    }

    render(){
        return(
            <div className="app">
                <AppInfo/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList data={this.state.data} onDelete ={this.deleteItem} 
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                    />
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;
