export const products = [
    {
        id: 1, name: 'El túnel', author: 'Ernesto Sabato', category: 'Non-Fiction', price: 18, stock: 4, img: 'https://i.postimg.cc/d0vLqxdg/eltunel.jpg', 

    description: `
        
    Percy Jackson is a good kid, but he can't seem to focus on his schoolwork or control his temper. And lately, being away at boarding school is only getting worse--Percy could have sworn his pre-algebra teacher turned into a monster and tried to kill him.`
    },


    {
        id: 2, name: 'Percy Jackson and the Olympians: The Lightning Thief', author: 'Rick Riordan', category: "Children's Fiction", price: 22, stock: 3, img: 'https://i.postimg.cc/q7Lggxxq/percyjackson.jpg',

        description: `
        
        Percy Jackson is a good kid, but he can't seem to focus on his schoolwork or control his temper. And lately, being away at boarding school is only getting worse--Percy could have sworn his pre-algebra teacher turned into a monster and tried to kill him.`
    },


    { id: 3, name: 'Zodiac Academy: The Awakening', author: 'Caroline Peckham & Susanne Valenti', category: 'Young adult', price: 16, stock: 8, img: 'https://i.postimg.cc/k4gGSRTc/zodiacacademy.jpg', 
    
    description: `
    
    Percy Jackson is a good kid, but he can't seem to focus on his schoolwork or control his temper. And lately, being away at boarding school is only getting worse--Percy could have sworn his pre-algebra teacher turned into a monster and tried to kill him.`
    },

    { id: 4, name: 'Hamlet', author: 'William Shakespeare', category: 'Tragedy', price: 10, stock: 5, img: 'https://i.postimg.cc/wvGfL56n/hamlet.jpg', 
    
    description: `
    
    Percy Jackson is a good kid, but he can't seem to focus on his schoolwork or control his temper. And lately, being away at boarding school is only getting worse--Percy could have sworn his pre-algebra teacher turned into a monster and tried to kill him.`
    
    },


    { id: 5, name: 'Percy Jackson and the Olympians: The Chalice of The Gods', author: 'Rick Riordan', category: "Children's Fiction", price: 16, stock: 8, img: 'https://i.postimg.cc/RVWw85Mr/percyjackson2.jpg', 
    
    description: `
    
    Percy Jackson is a good kid, but he can't seem to focus on his schoolwork or control his temper. And lately, being away at boarding school is only getting worse--Percy could have sworn his pre-algebra teacher turned into a monster and tried to kill him.`
    },

    { id: 6, name: 'A Game of Thrones', author: 'George R. R. Martin', category: 'Fantasy', price: 16, stock: 8, img: 'https://i.postimg.cc/W13gBd01/agameofthrones.jpg',
    
    description: `
        
    Percy Jackson is a good kid, but he can't seem to focus on his schoolwork or control his temper. And lately, being away at boarding school is only getting worse--Percy could have sworn his pre-algebra teacher turned into a monster and tried to kill him.`
    },


    { id: 7, name: 'A Clash of Kings', author: 'George R. R. Martin', category: 'Fantasy', price: 16, stock: 8, img: 'https://i.postimg.cc/Rh4nXhM9/AClash-Of-Kings.jpg',

    description: `
        
    Percy Jackson is a good kid, but he can't seem to focus on his schoolwork or control his temper. And lately, being away at boarding school is only getting worse--Percy could have sworn his pre-algebra teacher turned into a monster and tried to kill him.`
    },


    { id: 8, name: 'A Storm of Swords', author: 'George R. R. Martin', category: 'Fantasy', price: 16, stock: 8, img: 'https://i.postimg.cc/7Pnzb3VL/AStorm-Of-Swords.jpg',

    description: `
        
    Percy Jackson is a good kid, but he can't seem to focus on his schoolwork or control his temper. And lately, being away at boarding school is only getting worse--Percy could have sworn his pre-algebra teacher turned into a monster and tried to kill him.`
    },


    { id: 9, name: 'Zodiac Academy: Beyond the veil', author: 'Caroline Peckham & Susanne Valenti', category: 'Young adult', price: 16, stock: 8, img: 'https://i.postimg.cc/FRQZX99C/zodiacacademy2.jpg',

    description: `
        
    Percy Jackson is a good kid, but he can't seem to focus on his schoolwork or control his temper. And lately, being away at boarding school is only getting worse--Percy could have sworn his pre-algebra teacher turned into a monster and tried to kill him.`
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const foundProduct = products.find((prod) => prod.id === parseInt(id))
            resolve(foundProduct)
        }, 2000)
    })
}

export const getProductByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            const filteredProducts = products.filter((prod) => prod.category === category)
            resolve(filteredProducts)
        }, 2000)
    })

}

export const getProductByAuthor = (author) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            const filteredProducts = products.filter((prod) => prod.author === author)
            resolve(filteredProducts)
        }, 2000)
    })

}