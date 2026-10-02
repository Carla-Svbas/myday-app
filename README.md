MyDay ss

Aplicação móvel multidisciplinar para estudantes, desenvolvida no âmbito da Licenciatura em Engenharia Informática – IADE, Universidade Europeia.

O MyDay é um diário digital destinado a estudantes de qualquer instituição, criado para apoiar a documentação contínua de experiências, atividades e processos de aprendizagem.

Palavras-chave: diário de aprendizagem, estudantes, professores, aplicação móvel, Flutter, geolocalização, API REST, APIs públicas, RGPD, MySQL.

Repositório: https://github.com/Carla-Svbas/myday-app

  Sobre o projeto

O MyDay permite aos estudantes registar e acompanhar o seu percurso académico através de diferentes tipos de conteúdo, como texto, fotografias, áudio e localização.

Os registos são privados por defeito, permitindo ao estudante controlar a sua visibilidade e decidir quais pretende tornar públicos e partilhar com outros utilizadores.

A aplicação inclui também uma componente pedagógica: os professores podem criar atividades e acompanhar a participação dos estudantes que decidirem aderir às mesmas.

Desta forma, o MyDay procura combinar num único espaço o registo pessoal da aprendizagem com o acompanhamento pedagógico, promovendo uma aprendizagem mais organizada e reflexiva.

  Problema

Os estudantes acumulam trabalhos, experiências, ideias e aprendizagens em diferentes locais, como notas, fotografias e mensagens, tornando difícil organizar e acompanhar o seu percurso ao longo do tempo.

Ao mesmo tempo, os professores dispõem de poucas formas simples de acompanhar evidências do processo de aprendizagem dos estudantes para além dos resultados finais.

O MyDay procura responder a estas duas necessidades através de uma aplicação móvel que permite registar, organizar, pesquisar e partilhar experiências de aprendizagem, mantendo o controlo sobre a privacidade dos conteúdos.

  Objetivos
Objetivo geral

Desenvolver uma aplicação móvel que permita aos estudantes registar experiências e processos de aprendizagem e aos professores propor e acompanhar atividades, garantindo privacidade e conformidade com o RGPD.

Objetivos específicos

Registar atividades, experiências e aprendizagens de forma rápida;
Documentar projetos através de texto, imagem, áudio e localização;
Organizar, pesquisar e consultar registos ao longo do tempo;
Permitir que professores proponham atividades e acompanhem a participação dos estudantes;
Partilhar registos selecionados com outros utilizadores;
Exportar registos selecionados para PDF;
Garantir o tratamento adequado dos dados pessoais;
Permitir ao utilizador controlar a visibilidade dos seus conteúdos;
Utilizar APIs públicas para funcionalidades específicas, evitando desenvolver essas componentes de raiz.
- Funcionalidades principais
Funcionalidade	Descrição
- Registos	Criação de registos com texto, fotografias, áudio e localização opcional.
- Localização e mapa Associação de localização aos registos e visualização dos mesmos num mapa.
- Multimédia Utilização da câmara e gravação de áudio para complementar os registos.
- Lembretes	Configuração de lembretes para registar experiências e para prazos de atividades.
- Atividades Professores podem criar atividades com título, descrição, prazo e tipo de conteúdo esperado.
- Entrada em atividades	Estudantes podem entrar numa atividade através de QR Code ou código.
- Painel do professor	Consulta de participantes, estado das submissões e respostas às atividades.
- Pesquisa	Pesquisa de registos e de conteúdos de apoio ao estudo.
- Conteúdos de apoio	Consulta de conteúdos relacionados com Informática, Matemática e Química.
- Registos públicos	Consulta de registos que tenham sido definidos pelo estudante como públicos.
- Favoritos	Possibilidade de marcar publicações como favoritas.
- Exportação para PDF	Exportação de registos selecionados para um documento PDF.
- Funcionamento offline	Possibilidade de iniciar um registo sem ligação à rede e sincronizá-lo posteriormente com o servidor.
- Tipos de utilizador
- Estudante

Utilizador autenticado que pode:

Criar, consultar, editar e eliminar os seus registos;
Adicionar texto, fotografias, áudio e localização;
Participar em atividades propostas por professores;
Partilhar determinados registos;
Pesquisar conteúdos;
Marcar publicações como favoritas;
Exportar registos selecionados para PDF.

  Professor

Conta aprovada pelo administrador que pode:

Criar e gerir atividades;
Definir título, descrição, prazo e tipo de conteúdo;
Acompanhar os estudantes que participam nas suas atividades;
Consultar as respostas submetidas no contexto dessas atividades.

O professor não tem acesso aos registos privados do estudante que não tenham sido submetidos a uma das suas atividades.

  Convidado

Utilizador que pode entrar na aplicação sem possuir uma conta.

Pode:

Consultar conteúdos disponíveis;
Pesquisar conteúdos;
Visualizar registos definidos como públicos.

Não pode criar, editar ou eliminar conteúdos.

  Administrador

Responsável pela gestão da aplicação.

Pode:

Gerir utilizadores;
Gerir conteúdos;
Criar e eliminar utilizadores;
Aprovar contas de professores.

  Privacidade e RGPD

A privacidade é um dos princípios fundamentais do MyDay.

Os registos são privados por defeito;
O estudante controla a visibilidade dos seus registos;
O professor apenas pode consultar conteúdos submetidos no contexto das suas atividades;
A localização é opcional e depende da autorização do utilizador;
O áudio é opcional e depende da autorização do utilizador;
O utilizador pode eliminar os seus registos;
O utilizador pode solicitar a eliminação da sua conta;
As permissões são verificadas também no servidor;
Os dados utilizados durante os testes são fictícios.

  Arquitetura

O MyDay utiliza uma arquitetura cliente-servidor, composta por três componentes principais:

┌─────────────────────┐
│   Aplicação Móvel   │
│    Flutter / Dart   │
└──────────┬──────────┘
           │
           │ REST / JSON
           ▼
┌─────────────────────┐
│      Backend        │
│       Node.js       │
│      REST API       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│     Base de Dados   │
│        MySQL        │
└─────────────────────┘

A aplicação móvel comunica com a API REST desenvolvida em Node.js. O backend é responsável pelas regras de negócio, autenticação, permissões e acesso à base de dados.

A API possui acesso exclusivo à base de dados e à área de ficheiros.

As pesquisas de conteúdos externos passam pela nossa API, que consulta os serviços externos e pode guardar as respostas em cache.

  APIs públicas

Para algumas funcionalidades, o projeto utiliza serviços e APIs públicas e gratuitas:

OpenStreetMap — mapas;
Nominatim — conversão de coordenadas em moradas;
Wikipédia — conteúdos de apoio;
PubChem — conteúdos relacionados com Química.

A utilização destas APIs tem em consideração as respetivas políticas e limites de utilização.

  Tecnologias

Tecnologia	Utilização
Flutter / Dart	Desenvolvimento da aplicação móvel
Node.js	Desenvolvimento do servidor e API REST
MySQL	Gestão da base de dados relacional
Figma	Wireframes, protótipos e design da interface
Git / GitHub	Controlo de versões e colaboração
GitHub Projects	Gestão e acompanhamento das tarefas
OpenStreetMap	Mapas
Nominatim	Georreferenciação e obtenção de moradas
Wikipédia API	Conteúdos de apoio
PubChem API	Conteúdos de apoio relacionados com Química.

  Modelo de dados

O modelo de dados do MyDay é constituído por sete entidades principais:

Utilizador
Registo
Ficheiro
Atividade
Participação
Submissão
Lembrete

Um utilizador pode criar vários registos, cada registo pode possuir vários ficheiros e uma submissão relaciona a participação de um estudante numa atividade com um dos seus registos.

  Unidades Curriculares

O projeto é multidisciplinar e integra conhecimentos das seguintes unidades curriculares:

Programação de Dispositivos Móveis — desenvolvimento da aplicação em Dart/Flutter;
Bases de Dados — modelação e implementação da base de dados MySQL;
Redes de Comunicação de Dados — comunicação entre aplicação, servidor e APIs REST;
Interfaces e Usabilidade — fluxos, protótipos e princípios de usabilidade;
Matemática Discreta — implementação de um método abordado na unidade curricular.

  Estrutura do projeto
MyDay/
│
├── frontend/                # Aplicação móvel Flutter/Dart
│
├── backend/                 # API REST Node.js
│
├── database/                # Base de dados MySQL
│
├── Documentos/              # Documentação do projeto
│
├── README.md
└── ...

A documentação será organizada no repositório de acordo com as diferentes fases e entregas do projeto.

  Documentação

A documentação do projeto será disponibilizada progressivamente no repositório.

Proposta inicial — documentação da primeira fase do projeto;
Memória descritiva — documentação técnica e descritiva do projeto;
Figma — protótipos e design da interface;
GitHub Projects — acompanhamento das tarefas e evolução do projeto;
Relatório final — documentação final do projeto.

  Equipa
Nome	                     GitHub	                 Área principal
Carla Sebastião	          Carla-Svbas	                Frontend
Lurdes Ferraz	      Lurdes12KasisaFerraz1	         Bases de Dados
Rodrigo Rodrigues	       rodrimiles	                Backend
Cristiano Zanzala	      cristiano-z10	        Interfaces e Usabilidade

Todos os elementos participam nos testes e na redação da documentação do projeto.

  Informações académicas

Curso: Licenciatura em Engenharia Informática
Instituição: Universidade Europeia — IADE
Ano letivo: 2026/2027
Semestre: 3.º semestre

  Estado do projeto

O MyDay encontra-se em fase de desenvolvimento académico.

A implementação será realizada de forma faseada, começando pelo núcleo funcional da aplicação e integrando progressivamente as restantes funcionalidades definidas na proposta inicial.

O desenvolvimento segue os marcos definidos no planeamento do projeto, incluindo prototipagem, modelação da base de dados, desenvolvimento da API, aplicação móvel, integração das funcionalidades, testes e documentação.

Todos os dados utilizados durante o desenvolvimento e testes serão fictícios, não correspondendo a dados reais de estudantes ou professores.
