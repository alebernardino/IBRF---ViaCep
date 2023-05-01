function consultarCep(){
    let cep = document.getElementById("cep").value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let tabela = document.getElementById("tabela")
    axios
        .get(url)
        .then(response => { 
            if(response.data.erro){
                alert("CEP não encontrado");
                return
            }
            let linha = document.createElement("tr");
            let cepCelula = document.createElement("td")
            let logradouroCelula = document.createElement("td")
            let bairroCelula = document.createElement("td")
            let cidadeCelula = document.createElement("td")
            let estadoCelula = document.createElement("td")

            cepCelula.innerHTML = response.data.cep;
            logradouroCelula.innerHTML = response.data.logradouro;
            bairroCelula.innerHTML = response.data.bairro;
            cidadeCelula.innerHTML = response.data.localidade;
            estadoCelula.innerHTML = response.data.uf; 

            linha.appendChild(cepCelula);
            linha.appendChild(logradouroCelula);
            linha.appendChild(bairroCelula)
            linha.appendChild(cidadeCelula)
            linha.appendChild(estadoCelula)

            tabela.appendChild(linha)
        })
        .catch(error => {
            alert("Erro ao consultar o viaCEP");
            console.error(error);
        })
}

            // tabela.innerHTML = '';
            // let linha = tabela.insertRow();
