


const GET_TRADERS = {
        query: `
            {
                traders {
                    id 
                    name
                    description
                    normalizedName
                }
            }
        `,
        
}


export { GET_TRADERS }