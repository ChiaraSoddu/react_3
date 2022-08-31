//filterBookList() => {}
import { Component } from 'react';
import horror from '../data/horror.json';
import SingleBook from './SignleBook';

class BookList extends Component{

    state = {
        titolo: '',
    }

    handleChange = (propertyName, propertyValue) => {
        this.setState({
            [propertyName]: propertyValue,
        })
    }
    
    render(){return(
        <div>
            <input type="text" value={this.state.titolo} onChange={(e) => {
                console.log(e.target.value);
                this.handleChange('titolo', e.target.value)
            }} />
    {
        horror.map((lbro)=> {
            return(
                <SingleBook/>
            )
        })
    }
    </div>
    )}
    
}

export default BookList