import { useEffect, useState } from "react"
import NEDetails from "./NEDetails"
import './Ne.css'

const Namedentity = () => {

    const [nerdocs, setNerdocs] = useState(null)

    useEffect(() => {
        const fetchNERdocs = async () => {
            const response = await fetch('/api/legal/named_entities/')
            const json = await response.json()

            if(response.ok) {
                setNerdocs(json)
            }
        }
        fetchNERdocs()
    }, [])
    return (
            <div className="flex">
                {nerdocs && nerdocs.map((nerdoc) => (
                    <NEDetails key={nerdoc._id} nerdoc={nerdoc} />
                ))}
            </div>
    )
}

export default Namedentity