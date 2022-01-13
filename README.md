### ARRAY DE REFERENCIAS

No sanity Array, eu posso fazer ele ser um array do meu TIPO ou de REFERENCIAS. Basicamente
a diferença que posso ter um arrayzao com todos os resultados de uma vez, ou só com as ids etc.
Aí teria que ver qual lógica eu usaria pro meu caso do array de viagens, qual seria preferível.

A diferença na semantica é que o type personalizado tu só coloca direto que nem array of type: string
e o referencia é como se fosse um tipo específico tb
E ainda da pra misturar as duas opções tb, bem flexível

### DESCONTOS

como vamos deixar a opção de dar um desconto no grupo ou dar um desconto individual na viagem,
temos que estabelecer uma hierarquia. Eu acho que se tiver nos dois, vale o individual do item.
E daí se eles quiserem que aplique o do grupo, tem que manualmente remover algum desconto que tenha no item

Aí como os descontos vão estar nos dois documentos, eu acho que eles sao um custom object, certo?
