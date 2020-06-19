import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: 'Artes', image: 'artes.svg' },
        { title: 'Biologia', image: 'biologia.svg' },
        { title: 'Física', image: 'fisica.svg' },
        { title: 'Geografia', image: 'geografia.svg' },
        { title: 'História', image: 'historia.svg' },
        { title: 'Inglês', image: 'ingles.svg' },
        { title: 'Literatura', image: 'literatura.svg' },
        { title: 'Matemática', image: 'matematica.svg' },
        { title: 'Português', image: 'portugues.svg' },
        { title: 'Química', image: 'quimica.svg' }
    ])
}