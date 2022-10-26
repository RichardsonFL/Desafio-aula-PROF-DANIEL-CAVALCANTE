import dados from "./dados"

function Table(){
    function getData(){
        return(
            <>
            {
                dados.map(dado => {
                    return(
                        <tr>
                            <td>{dado.nome}</td>
                            <td>{dado.email}</td>
                            <td>{dado.senha}</td>
                        </tr>
                    );
                })
            }
            </>
        );
    }
    return(
        <table>
            <thead>
                <tr>
                    <td>Nome</td>
                    <td>E-mail</td>
                    <td>Senha</td>
                </tr>
            </thead>
            <tbody>
                {getData()}
            </tbody>
        </table>
    );
}

export default Table;
