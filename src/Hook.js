import React, { useState, useEffect} from 'react';

const Hook = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(data => setData(data))
         }, []); 
                          
        return (
            <div>
                {data.map((element) => <div>{element.id}. {element.title}</div>)}
            </div>
        )
}

export default Hook;