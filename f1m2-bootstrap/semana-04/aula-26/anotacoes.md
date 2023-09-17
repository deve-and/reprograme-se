# Barras de Navegação

- Para manter a semântica do conteúdo, é indicado usar a tag <nav> no código, para criar uma barra de navegação principal usamos a classe .navbar em uma tag <nav>. Utilizar a classe .navbar-expand-sm, indica que os itens da barra vão estar visíveis em todas as resoluções de tela. Portanto essa classe .navbar-expand-sm.

- Para que tenha um espaçamento na barra de navegação, podemos utilizar usar uma div pai antes com classe .container ou .container-fluid.

- Para adicionar um texto pode-se usar a tag <span> adicionando a classe .navbar-text.

- Para adicionar itens de menu que é um dos principais elementos para uma barra de navegação. Para adicionar os itens, usa-se uma div com classe .collapse e .navbar-collapse e dentro desta div outra div, com classe .navbar-nav. Com isso usar os itens dentro dela com classe .nav-link.

- Para indicar em qual página/setor da página está sendo visualizado usa-se a classe .active em cada item. Da mesma forma a classe .disabled faz com que o elemento deixe de ser clicável, desabilitando o link.

- Para adicionar um botão que indique quando a tela estiver em resolução pequena, fique com o aspect de "humberguer". Usa-se um botão com classe .navbar-toggler de tipo "button" com propriedade data-bs-toggle="collapse" e também propriedade data-bs-target="#IdDoAlvo". Assim para ser usado adicionar o id a classe que é pai em relação a div com classe .navbar-nav.

  - Para deixar o botão com o aspecto de "humberguer" basta adicionar uma tag <span> com classe .navbar-toggler-icon. Essa tag tem que ir dentro da tag button.

- Para adicionar um campo de de pesquisa, precisa-se adicionar um campo <form> com classe .d-flex para ficar alinhado com a barra de navegação, logo o form tem que ficar dentro da div .container.

  - Adicionar uma div com classe .input-group para ter o button do lado do input. Assim adicionar o campo input com classe .form-control e tipo search.
  - Adicionar um button com classe .btn .btn-cor e tipo submit.

- Para que o comportamento de menu flutuante depende do link do script cdn que está na documentação do Bootstrap 5.

- Para aumentar o tamanho da barra pode-se usar py- (padding vertical) no caso seria na tag <nav>
