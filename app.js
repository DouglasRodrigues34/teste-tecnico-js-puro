// Converta o array "wrongDataFormat" para o objeto do comentário abaixo.

const wrongDataFormat = [
    'preto-PP',
    'preto-M',
    'preto-G',
    'preto-GG',
    'preto-GG',
    'branco-PP',
    'branco-G',
    'vermelho-M',
    'azul-XG',
    'azul-XG',
    'azul-XG',
    'azul-P'
]
  
const correctDataFormat = wrongDataFormat.reduce((acc, colorAndSize) => {
    const [color, size] = colorAndSize.split('-')

    acc[color] = acc[color] || {}
    acc[color][size] = acc[color][size] || 0
    acc[color][size] += 1

    return acc
}, {})
  
/*
{
    preto: {
        PP: 1,
        M: 1,
        G: 1,
        GG: 2
    },
    branco: {
        PP: 1,
        G: 1
    },
    vermelho: {
        M: 1
    },
    azul: {
        XG: 3,
        P: 1
    }
}
  */