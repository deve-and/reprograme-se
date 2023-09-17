# Agrupamento de Botões e Menus Flutuantes

- Para deixar um botão como marcável usamos a propriedade data-bs-toggle="button". Assimo o botão terá o aspect de um botão marcável.

- Todo agrupamento de botões fica dentro de uma div com a classe btn-group.

- Para ter um botão que fique com a cor sólida quando passamos o curso pelo botão, usamos a classe btn-outline-cor e uma cor temática do bootstrap 5.

- Agrupamento de botões checavéis, ainda sim envolver em uma classe btn-group e aplicar a classe btn-check para os inputs de tipo radio. Também pode ser usado com o tipo checkbox, porém, deve-se retirar o atributo name e assim pode-se selecionar mais de um botão.

- Barra de ferramentas com botões usa-se uma div com a classe btn-toolbar e dentro dela a classe btn-group. Assim elas irão ficar tudo em uma linha, uma ao lado da outra.

- Menu dropdown / menu flutuante, usa-se a classe dropdown em uma div e dentro dela botões com suas devidas classes como .btn e .btn-cor e a classe .dropdown-toggle. Aplicar também propriedade data-bs-toggle="dropdown". Assim ela indicará que terá opções dentro desse botão a ser selecionados. É bem parecido com a tag select.
  Assim pode-se usar a tag ul recebendo a classe .dropwdown-menu e dentro da div pai dropdown e assim, adicionar conteúdos li com elementos dentro dele com a classe .dropdown-item.
