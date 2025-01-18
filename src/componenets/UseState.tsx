function UseState() {
    const cities:string[] = ["colombo","Kandy","Jaffna","Kadawatha"];
    let selectedCity:number = 0;


    return (
        <>
            <ul className="list-group">
                {cities.length !== 0 &&
                    cities.map((city, index) => (
                        <li
                            key={index}
                            className = {
                            selectedCity === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                           onClick={()=> {
                               selectedCity = index;
                           }}
                        >
                            {city}
                        </li>
                    ))}

            </ul>
        </>
    )
}

export default UseState;