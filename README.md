# Desafio Docker Full Cycle 

## Desafios do módulo de Docker do curso da Full Cycle

<br>

### Desafio 1

Este desafio propõe a criação de uma imagem Go (Golang) que exiba a mensagem "Full Cycle Rocks!!" e tenha tamanho máximo de 2MB.
A imagem deve ser publicada no <strong>docker hub</strong>.

Com o <strong>docker</strong> instalado na máquina deve-se executar o comando:

```bash
docker pull idevbn/fullcycle
```

para obter a imagem e em seguida:

```bash
docker run idevbn/fullcycle
```

para executar o conteúdo da mesma.

<h4>Link da imagem: <a href="https://hub.docker.com/repository/docker/idevbn/fullcycle" >idevbn/fullcycle</a></h4> 

<br>

### Desafio 2

```bash
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Não esqueça de colocar o volume na aplicação para o ambiente de desenvolvimento. 

Suba tudo em um repositório e faça a entrega.

* A linguagem de programação para este desafio é Node/JavaScript.
```

Para executar o desafio 2 deve-se primeiramente clonar este repositório com o comando:

```bash
git clone https://github.com/idevbn/desafio_docker_fullcycle.git
```

Em seguida, alterar para o diretório do Desafio 2:

```bash
cd Desafio2
```

E, por fim, executar:

```bash
docker-compose up -d
```