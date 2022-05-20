import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss';

const repository = {
    name: "unform",
    description: "Forms in react",
    link: "https://github.com/VitorDLeo/ReactJS"
}

export function RepositoryList(){
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