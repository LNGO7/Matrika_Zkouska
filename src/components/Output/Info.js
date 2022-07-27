import Button from '@restart/ui/esm/Button'
import { Card } from 'react-bootstrap'

function List(props){
    const data = props.data
    return(
        <ul>
            <Card class="card">
                <Card.Header>Osobní informace</Card.Header>
                <Card.Body>
                    <li><b>Příjmení a jméno:</b> {data.prijmeni_jmeno}</li>
                    <li><b>Datum a místo narození:</b> {data.datum_misto}</li>
                    <li><b>Státní občanství:</b> {data.statni_obcanstvi}</li>
                    <li><b>Rodné číslo:</b> {data.rodne_cislo}</li>
                    <li><b>Trvalý pobyt:</b> {data.trvaly_pobyt}</li>
                </Card.Body>

                <Card.Header>Informace o vzdělání</Card.Header>
                <Card.Body>
                    <li><b>Titul:</b> {data.titul}</li> 
                    <li><b>Dosažené vzdělání:</b> {data.dosazene_vzdelani}</li>
                    <li><b>Jazyk:</b> {data.jazyk}</li>
                </Card.Body>

                <Card.Header>Zdravotní informace</Card.Header>
                <Card.Body>
                    <li><b>Zdravotní způsobilost:</b> {data.zdravotni_zpusobilost}</li>
                </Card.Body>

                <Card.Header>Kontaktní informace</Card.Header>
                <Card.Body>
                    <li><b>Tel.číslo:</b> {data.tel_cislo}</li>
                    <li><b>Email (osobní):</b> {data.email_osobni}</li>
                </Card.Body>

                <Card.Header>Rodinné informace</Card.Header>
                <Card.Body>
                   <li><b>Rodinný stav:</b> {data.rodinny_stav}</li>
                  <li><b>Partner:</b> {data.partner}</li>
                  <li><b>Děti:</b> {data.deti}</li>
                  <li><b>Otec:</b> {data.otec}</li>
                   <li><b>Matka:</b> {data.matka}</li>
                </Card.Body>

             <Card.Header>Pracovní informace</Card.Header>
                <Card.Body>
                    <li><b>Osobní číslo:</b> {data.osobni_cislo}</li>
                    <li><b>Email (pracovni):</b> {data.email_pracovni}</li>
                    <li><b>Velitel:</b> {data.velitel}</li>
                    <li><b>Specializace:</b> {data.specializace}</li>
                    <li><b>Hodnost:</b> {data.hodnost}</li>
                </Card.Body>
            </Card>
        </ul> 
    )
}

export default List








