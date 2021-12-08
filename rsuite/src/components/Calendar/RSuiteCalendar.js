import { Calendar } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const styles = {
    margin: 20,
    textAlign: "center",
    border: '1px solid white'
};

export default function RsuiteCalendar() {
    return (
        <div style={styles}>
            <Calendar />
        </div>
    )
}