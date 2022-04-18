import './app-filter.css';

const AppFilter = () => {
    return (

        <div className="btn-group">
            <button 
                className="btn btn-light"
                tyle="button">
                  Все сотрудники  
            </button>
            <button 
                className="btn btn-outline-light"
                tyle="button">
                  На повышение
            </button>
            <button 
                className="btn btn-outline-light"
                tyle="button">
                  З/П больше 1000$
            </button>
        </div>

    );
}

export default AppFilter;