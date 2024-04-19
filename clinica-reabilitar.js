const fs = require('fs');
const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array para armazenar os pacientes cadastrados
let pacientes = [];

//Função para salvar os dados em um arquivo JSON
function salvarPacientesEmArquivo(){
    const dadosJSON = JSON.stringify(pacientes, null, 2);
    fs.writeFileSync('pacientes.json', dadosJSON);
}

function adicionarPaciente () {
    rl.question('Nome: ', (nome) => {
        rl.question('Telefone: ', (telefone) => {
            rl.question('Cpf: ', (cpf) => {
                rl.question('Endereço: ', (endereco) => {
                    rl.question('Email: ', (email) => {
                        rl.question('Senha: ', (senha) => {
                            const paciente = {
                                nome: nome,
                                telefone: telefone,
                                cpf: cpf,
                                endereco: endereco,
                                email: email,
                                senha: senha
                            };
                    
                            pacientes.push(paciente);
                    
                        console.log('Paciente ' + nome + ' cadastrado com sucesso!');

                        salvarPacientesEmArquivo();

                        rl.close();
                        });

                    })
                })
            })
        })

    })
};

adicionarPaciente();

