import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const WelcomePage = () => {

    const [cities, setCities] = useState(undefined)

    const [search, setSearch] = useState(undefined)

    const getCities = async() => {
        try {
            
            const response = await fetch("https://countriesnow.space/api/v0.1/countries/population/cities")

            if(response.ok){
                const data = await response.json()

                setCities(data.data)
            } else {
                alert("something wrong here")
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        getCities()
    }, [])

    return(
     <>
        <div className="text-center search">
            <h1 className="text-center mt-3 mb-6">- Find your SunSet -</h1>
        <h4 className="mb-5">select your city</h4>
        <input size="large" className="w-50 " type="text" placeholder="insert city..." onChange={(e)=> {setSearch(e.target.value)}}/>
        </div>
    <Row className="mt-3">
    {search && cities.sort().filter(city => city.city.toLowerCase().includes(search.toLowerCase())).map(city => {return ( 
        <Col sm={2} md={3} lg={2} className="mb-2 ">
            <Link to={`/${city.city}`}>
        <button className="city-button" >{city.city}</button>
        </Link>
        </Col>)
    })}
    </Row>
    </>
    )
}

export default WelcomePage