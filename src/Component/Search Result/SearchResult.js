import React, { useState } from 'react';
import { Container ,Button} from 'react-bootstrap';
import Calendar from 'react-calendar';
import './SerachResult.css';
import 'react-calendar/dist/Calendar.css';



const SearchResult = () => {
   const [date, setDate] = useState(new Date());
   const calendarDate = date => {
       setDate(date);
   }
   
    return (
        <Container>
            <Calendar onChange={calendarDate}  value={date}></Calendar>
            SHow date: {date.toString()}
            <Button onChange={calendarDate}><Calendar value={date}/> </Button>
            
        </Container>
    );
};

export default SearchResult;