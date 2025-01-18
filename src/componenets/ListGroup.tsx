function ListGroup() {
    const cities:string[] = ["colombo","Kandy","Jaffna","Kadawatha"];
    const items:number[] = [1,2];

    const handleCLick = (event: React.MouseEvent<HTMLLIElement>) => {
        console.log(event);
    };

    /*const selectedCity:number = -1;
    const click = (jana:any)=>console.log(jana);*/

    return (
        <>
            <ul className="list-group">
                {/*Conditional rendering method 1 - methna true false dekama check krnwa*/}
                {items.length === 0?<p>This array is empty</p>:<p>This array is null</p>}
                {/*Conditional rendering method 2 - false wena awasthwak methanadi na true withri pennanne*/}
                {items.length !== 0 && <>Condition is true</>}

                {cities.length !==0 && cities.map((city) => (
                    <li key={city} className="list-group-item">{city}</li>
                ))}
                {cities.length !==0 && cities.map((city,index) => (
                    <li key={city} className="list-group-item" onClick={()=>console.log(index + "" + city)}>{city + "" + index + typeof (index)}</li>
                ))}

               {/* {cities.length !==0 && cities.map((city,index) => (
                    <li key={index} className="list-group-item" onClick={(event)=>console.log(event)}>{city}</li>
                ))}*/}

                {cities.length !== 0 &&
                    cities.map((city, index) => (
                        <li key={index} className="list-group-item" onClick={handleCLick}>{city}</li>
                    ))}
{/*
                {cities.length !== 0 && cities.map((city, index) => (
                        <li key={index} className=(selectedCity === index ? "list-group-item active" : "list-group-item ") onClick={click}>{city}</li>
                    ))}*/}


            </ul>
        </>
    )
}

export default ListGroup;