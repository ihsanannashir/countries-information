import data from '../json/data.json'
import { useParams } from "react-router-dom"

export default function Countries() {
    let { countriesId } = useParams();

  return (
    <div>Countries {data[countriesId].name}</div>
  )
}
