import { IColuna, ICard } from './Reducer'

export const cardlist = [
    { 
      title: 'Tarefas', 
      cards: [
        {
          id:1, 
          content: 'stringtest', 
          title:'stringtest'
        } as ICard,
        {
          id:2, 
          content: 'stringtest2', 
          title:'stringtest2'
        } as ICard
      ]
    } as IColuna
  ]





export function cards() {
    return [
      { 
        title: 'Tarefas', 
        cards: [
          {
            id: 1,
            content: 'Estudar módulos 01 e 02 askopaksdopkaopsdkopasdkopkasdopk',
            title: 'Estudar'
          },
          {
            id: 2,
            content: 'Criar EBook',
            title: 'Produzir'
          },
          {
            id: 3,
            content: 'same as tilte kkkk',
            title: 'Entregar Sprint'
          }
        ]
      },
      { 
        title: 'Doing', 
        cards: [
          {
            id: 6,
            content: 'PErerePaoDuro',
            title: 'Xaxa'
          }
        ]
      },
      { 
        title: 'Impedido', 
        cards: [
          {
            id: 7,
            content: 'Miiiimimimi',
            title: 'Nice'
          },
          {
            id: 8,
            content: 'React é top d+ nego',
            title: 'Teste'
          }
        ]
      },
      { 
        title: 'Finish', 
        cards: [
          {
            id: 10,
            content: 'cade a sprint produção ?',
            title: 'N é sprint'
          }
        ]
      },
    ];
  }