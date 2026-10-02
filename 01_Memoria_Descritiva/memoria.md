Memória Descritiva — MyDay

1. Identificação

Projeto: MyDay — Diário de Experiências
Curso: Licenciatura em Engenharia Informática
Instituição: Universidade Europeia — IADE
Ano letivo: 2026/2027
Semestre: 3.º semestre

Elementos do grupo
Nome	Número	Área
Carla Sebastião	20251243	Frontend
Cristiano Zanzala	20251017	Interfaces e Usabilidades
Lurdes Ferraz	20251345	Bases de Dados
Rodrigo Rodrigues	20250480	Backend

2. Descrição do Projeto

O MyDay — Diário de Experiências é uma aplicação móvel destinada a estudantes, permitindo registar, organizar e consultar experiências e aprendizagens ao longo do seu percurso académico.

A aplicação permite criar registos através de texto, fotografia, áudio e localização, mantendo os conteúdos privados por defeito e permitindo ao utilizador controlar a sua partilha.

Os professores podem também criar atividades, acompanhar a participação dos estudantes e consultar as respetivas submissões.

3. Problema

Os estudantes realizam diversas atividades e experiências durante o seu percurso académico, mas nem sempre dispõem de uma forma simples e organizada para as documentar.

O MyDay pretende facilitar o registo contínuo dessas experiências e tornar o processo de aprendizagem mais organizado e consultável.

4. Objetivos

Os principais objetivos do projeto são:

Permitir criar registos de experiências através de texto, fotografia, áudio e localização.
Organizar e pesquisar os registos realizados.
Permitir a criação de atividades por professores.
Permitir a participação dos estudantes através de códigos ou QR Codes.
Permitir a consulta das submissões pelos professores.
Permitir a partilha seletiva de conteúdos.
Permitir a exportação de registos selecionados para PDF.
Integrar mapas e serviços de informação através de APIs públicas.
Garantir mecanismos de privacidade e proteção de dados.
Permitir o funcionamento offline inicial e posterior sincronização.

5. Público-Alvo

A aplicação destina-se principalmente a:

Estudantes, que registam e organizam as suas experiências.
Professores, que podem criar atividades e acompanhar participações.
Convidados, que podem consultar conteúdos públicos.
Administradores, responsáveis pela gestão de utilizadores e aprovação de professores.

6. Funcionalidades Principais

Estudante
Criar, editar e eliminar registos.
Adicionar texto, fotografias e áudio.
Associar localização aos registos.
Consultar os registos num mapa.
Pesquisar conteúdos.
Adicionar conteúdos aos favoritos.
Definir a privacidade dos registos.
Participar em atividades através de QR Code ou código.
Exportar registos selecionados para PDF.
Consultar e gerir lembretes.
Professor
Criar atividades.
Definir título, descrição, prazo e tipo de conteúdo.
Gerar código ou QR Code para participação.
Consultar participantes.
Consultar o estado das submissões.
Consultar e exportar respostas das atividades.
Convidado
Consultar conteúdos públicos.
Pesquisar conteúdos públicos.
Não pode criar, editar ou eliminar registos.
Administrador
Gerir utilizadores.
Criar e eliminar utilizadores.
Aprovar contas de professores.
Gerir conteúdos da plataforma.

7. Privacidade e RGPD

Os registos são privados por defeito.

O utilizador controla a partilha dos seus conteúdos e deve autorizar funcionalidades que envolvam dados como localização ou áudio.

A aplicação deverá disponibilizar mecanismos adequados para gestão dos dados pessoais e eliminação da conta, respeitando os princípios aplicáveis do RGPD.

8. Requisitos Técnicos

A aplicação será desenvolvida utilizando:

Componente	Tecnologia
Aplicação móvel	Flutter / Dart
Backend	Node.js
API	REST / JSON
Base de Dados	MySQL
Interface e prototipagem	Figma
Controlo de versões	Git / GitHub
Gestão do projeto	GitHub Projects
9. Arquitetura

A solução seguirá uma arquitetura cliente-servidor:

┌─────────────────────┐
│   Aplicação Móvel   │
│    Flutter / Dart   │
└──────────┬──────────┘
           │
           │ REST / JSON
           ▼
┌─────────────────────┐
│       Backend       │
│       Node.js       │
│      REST API       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│    Base de Dados    │
│        MySQL        │
└─────────────────────┘

A aplicação móvel comunica com o backend através de uma API REST. O backend é responsável pelo acesso à base de dados e pelos mecanismos de autenticação e autorização.

10. APIs Públicas

O projeto prevê a utilização das seguintes APIs e serviços:

OpenStreetMap — mapas.
Nominatim — obtenção de endereços a partir de coordenadas.
Wikipedia REST API — conteúdos de apoio.
PubChem PUG REST — conteúdos relacionados com Química.

Sempre que necessário, serão considerados mecanismos de cache e tratamento de limites de utilização das APIs.

11. Modelo de Dados

O modelo da aplicação inclui as seguintes entidades principais:

Utilizador
Registo
Ficheiro
Atividade
Participação
Submissão
Lembrete

12. Casos de Teste Principais

CT-01 — Criar Registo

O estudante cria um registo contendo texto, fotografia e localização. A localização pode ser convertida num endereço através do Nominatim e apresentada num mapa.

CT-02 — Atividade do Professor

O professor cria uma atividade com código ou QR Code. O estudante participa e submete uma resposta. O professor consegue consultar a submissão.

CT-03 — Pesquisa e Exportação

O utilizador pesquisa um termo, consulta conteúdos de apoio, seleciona registos e realiza a exportação para PDF. Um convidado apenas consegue consultar conteúdos públicos.

13. Unidades Curriculares Envolvidas

O projeto enquadra-se nas seguintes unidades curriculares:

Programação de Dispositivos Móveis
Bases de Dados
Redes de Comunicação de Dados
Interfaces e Usabilidades
Matemática Discreta

14. Planeamento

O desenvolvimento está previsto para 12 semanas, entre 5 de outubro e 21 de dezembro de 2026.

Fase	Período
Proposta inicial	Semana 2
Protótipo e modelo de dados	Semana 4
Alpha	Semana 7
Beta	Semana 10
Versão final	Semana 12

15. Distribuição de Trabalho

Carla Sebastião — Frontend
Lurdes Ferraz — Bases de Dados
Rodrigo Rodrigues — Backend
Cristiano Zanzala — Interfaces e Usabilidades

Todos os elementos participam nos testes e na elaboração da documentação do projeto.

16. Estado Atual

O projeto encontra-se na fase inicial de planeamento e especificação.

Nesta fase foram definidos:

conceito e objetivos da aplicação;
público-alvo;
funcionalidades principais;
perfis de utilizador;
requisitos técnicos;
arquitetura inicial;
modelo de dados;
APIs públicas previstas;
plano de desenvolvimento;
distribuição das tarefas da equipa.

O desenvolvimento da aplicação será realizado de forma incremental, começando pelas funcionalidades essenciais e evoluindo posteriormente para funcionalidades mais complexas.

17. Repositório

O código e a documentação do projeto encontram-se no GitHub:

https://github.com/Carla-Svbas/myday-app