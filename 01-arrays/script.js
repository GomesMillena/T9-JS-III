// map(): faz uma iteração com todos os elementos da lista e retorna outra
// map():
// input: Array
// output: Array de mesmo tamanho

// 1) Adicionar "a" no final das palavras
const profissionais = [
  "desenvolvedor",
  "programador",
  "autor",
  "vereador",
  "professor",
];

const profissionaisMelhores = profissionais.map(
  (item) => {
    return item + "a";
  }
);

const profissionaisMelhores = profissionais.map(profissional => {
  return profissional + "a";
})




// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

// retorno:
// ["Maçã", "Banana", "Pera", "Melancia", "Pêssego", "Jaca"]

// passar por todos os itens:
// 1. colocar todas as letras minúsculas
// 2. colocar a primeira letra maiúscula
// 3. colocar a lista nova em uma variável

const frutasFormatadas = frutas.map(
  (item) => {
    const letraInicial = item[0].toUpperCase();
    const itemMinusculo = item.toLowerCase();
    const itemSemPrimeiraLetra = itemMinusculo.substring(1);

    return letraInicial + itemSemPrimeiraLetra;
  }
);

//const frutasFormatadas = frutas.map(() => {
  //i =0;

//})


// filter(): retorna uma nova array com apenas com elementos que atendem à condição

// 1) Criar nova array somente com números pares
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// [2, 4, 6, 8, 10]

const numPares = num.filter(
  (bolinha) => {
    const ehNumPar = bolinha % 2 === 0;
    return ehNumPar;
  }
)

// 2) Criar nova array somente com profissionais da área de TI
const pessoas = [
  { nome: "Mell", area: "TI", profissao: "dev" },
  { nome: "Munique", area: "ciência", profissao: "pesquisadora"},
  { nome: "Melissa", area: "construção", profissao: "engenheira"},
  { nome: "Madalena", area: "TI", profissao: "infra" },
  { nome: "Monica", area: "medicina", profissao: "cardiologista"},
];

// expectativa: 
// const profissionaisTI = [
//   { nome: "Mell", area: "TI", profissao: "dev" },
//   { nome: "Madalena", area: "TI", profissao: "infra" }
// ];

const profissionaisTI = pessoas.filter(
  (item) => {
    const ehDeTI = item.area === "TI";
    return ehDeTI;
  }
)

// reduce(): recebe uma array e retorna um valor só. Redutor.

// 1) Dado uma array de números, retornar a soma de todos eles
const soma = num.reduce((acc, curr) => acc + curr);

// 2) Retornar o lucro de uma empresa
const transacoes = [
  { descricao: "carro", valor: 32000, tipo: "saída" },
  { descricao: "cliente 1", valor: 10000, tipo: "entrada" },
  { descricao: "proventos", valor: 23000, tipo: "entrada" },
  { descricao: "salario 1", valor: 8500, tipo: "saída" }
];

 const lucro = transacoes.reduce(
   (acumulado, item) => {
     console.log('acumulado', acumulado);
     console.log('item', item);
     return acumulado.valor + item.valor; 
    }
 );
// sort(): organiza itens da array de acordo com uma verificação

// 1) Organizar números de forma decrescente
const numDecrescente = [...num].sort((a , b) => b - a);

// 2) Organizar pessoas por ordem alfabética



const notasAlunas = [
  { nome: "Julia", notas: [
      { materia: "matemática", nota: 7, peso: 1.5 },
      { materia: "portugues", nota: 3, peso: 2 }
    ]
  },
  { nome: "Zelia", notas: [
      { materia: "matemática", nota: 6, peso: 1.5 },
      { materia: "portugues", nota: 5, peso: 2 }
    ]
  },
  { nome: "Jussara", notas: [
      { materia: "matemática", nota: 8, peso: 1.5 },
      { materia: "portugues", nota: 2, peso: 2 }
    ]
  }
]

const notasFinaisAlunas = notasAlunas.map (
  (aluna) => {

    //console.log(aluna.notas);

    let somaNotas = 0;
    let somaPesos = 0;

    /*aluna.notas.reduce((nota) => {
      somaNotas += nota.nota * nota.peso
      somaPesos += peso;
    });*/

    

    const novaAluna = {
      nome: aluna.nome,
      notaFinal: aluna.notas.reduce((notaFinalReduce, nota) => {
        somaNotas += nota.nota * nota.peso
        somaPesos += nota.peso;
        notaFinalReduce = somaNotas / somaPesos
        return notaFinalReduce
      })
    }
    console.log(novaAluna);
    return novaAluna;
  });

    /*for(let i=0; i < arrNotas.length; i++) {
      const nota = arrNotas[i].nota;
      const peso = arrNotas[i].peso;
      const notaFinalMateria = nota * peso;
      somaNotas += notaFinalMateria;
      somaPesos += peso;
    }*/
  
