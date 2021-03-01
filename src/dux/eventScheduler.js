
import uuid from '../Components/uuid';
import {getEventsScheduledForDate, insertIntoFormattedEventsObj} from '../Components/General';
import {setEventsToLocalStorage} from '../Components/Local';


export const eventScheduler = (state, action) => {
    let newState = {...state};
    
    const deleteEventFromDate = (event) => {
        let eventsObjForDate = getEventsScheduledForDate(newState, event.startDateTime);
        delete eventsObjForDate[event.uid];
        // axios.delete(`/api/event/${eventsObjForDate[event.uid]}`)
    };

    const addEditEventForDate = (event) => {
        
        insertIntoFormattedEventsObj(newState, event);
    };
    
    switch (action.type) {
        case 'ADD_EVENT':
            action.event.uid = uuid();
            addEditEventForDate(action.event);
            setEventsToLocalStorage('ADD_EDIT', {...action.event});
            break;
        case 'EDIT_EVENT':
            addEditEventForDate(action.event);
            setEventsToLocalStorage('ADD_EDIT', {...action.event});
            break;
        case 'DELETE_EVENT':
            deleteEventFromDate(action.event);
            setEventsToLocalStorage('DELETE', {...action.event});
            break;
        default:
            break;
    }
    return newState;
};