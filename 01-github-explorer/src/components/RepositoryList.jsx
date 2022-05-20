import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss';


const repository = {
    name: "unform",
    description: "Forms in react",
    link: "https://github.com/VitorDLeo/ReactJS"
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => console.log(data))
    }, []);

    return(
        <section className="repository-list">
            <h1>Lista de repositorio</h1>

            <ul>
                <RepositoryItem repository={repository} />

                <RepositoryItem repository={repository} />

                <RepositoryItem repository={repository} />

                <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}